import { CoordonneeDataService } from '../../../services/data/coordonnee-data.service';
import { Component, OnInit } from '@angular/core';
import {
  circle,
  icon,
  marker,
  polygon,
  Layer,
  LayerGroup,
  tileLayer,
  layerGroup,
  geoJSON,
  LayerOptions,
  latLng
} from 'leaflet';
import { LeafletLayersModel } from './map-layers.model';
import 'leaflet-providers';

//import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // Open Street Map and Open Cycle Map definitions
  LAYER_OSM = {
    id: 'openstreetmap',
    name: 'Open Street Map',
    enabled: true,
    layer: tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'open Street Map'
    })
  };
  LAYER_OCM = {
    id: 'opencyclemap',
    name: 'Open Cycle Map',
    enabled: true,
    layer: tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Open Cycle Map'
    })
  };

  /* circle = {
    id: 'circle',
    name: 'Circle',
    enabled: true,
    layer: circle([46.95, -122], { radius: 5000 })
  };
  polygon = {
    id: 'polygon',
    name: 'Polygon',
    enabled: true,
    layer: polygon([[46.8, -121.85], [46.92, -121.92], [46.87, -121.8]])
  };
  square = {
    id: 'square',
    name: 'Square',
    enabled: true,
    layer: polygon([
      [46.8, -121.55],
      [46.9, -121.55],
      [46.9, -121.7],
      [46.8, -121.7]
    ])
  };
  marker = {
    id: 'marker',
    name: 'Marker',
    enabled: true,
    layer: marker([46.879966, -121.726909], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: '2273e3d8ad9264b7daa5bdbf8e6b47f8.png',
        shadowUrl: '44a526eed258222515aa21eaffd14a96.png'
      })
    })
  };
   geoJSON = {
    id: 'geoJSON',
    name: 'Geo JSON Polygon',
    enabled: true,
    layer: new Layer()
  };*/

  // Form model object
  model = new LeafletLayersModel(
    [this.LAYER_OCM, this.LAYER_OSM],
    this.LAYER_OSM.id,
    []
  );

  // Values to bind to Leaflet Directive
  layers: Layer[];
  layerGroup: LayerGroup[];
  layersControl = {
    baseLayers: {
      'Open Street Map': this.LAYER_OSM.layer,
      'Open Cycle Map': this.LAYER_OCM.layer
    },
    overlays: {
      //Circle: this.circle.layer,
      //Square: this.square.layer,
      //Polygon: this.polygon.layer,
      //Marker: this.marker.layer
      //geoLayer: geoJSON(data)
      //GeoJSON: this.geoJSON.layer
    }
  };
  //layersControl: any;
  leafletLayersControlOptions = {
    collapsed: true,
    autoZIndex: true
  };
  /*  layersControl = {
    baseLayers: {
      'Open Street Map': this.LAYER_OSM.layer,
      'Open Cycle Map': this.LAYER_OCM.layer
    },
    overlays: {
      Circle: this.circle.layer,
      Square: this.square.layer,
      Polygon: this.polygon.layer,
      Marker: this.marker.layer
      //GeoJSON: this.geoJSON.layer
    }
  };*/
  options = {
    zoom: 14,
    center: latLng(34.61507, -4.88576)
  };
  constructor(private coordonneeService: CoordonneeDataService) {
    this.apply();
  }
  apply() {
    // Get the active base layer
    const baseLayer = this.model.baseLayers.find(
      (l: any) => l.id === this.model.baseLayer
    );

    // Get all the active overlay layers
    const newLayers = this.model.overlayLayers
      .filter((l: any) => l.enabled)
      .map((l: any) => l.layer);
    newLayers.unshift(baseLayer.layer);

    this.layers = newLayers;
    //console.log(this.layers);
    return false;
  }

  ngOnInit() {
    this.coordonneeService.retrieveAllCoordonnees().subscribe(response => {
      // console.log(response[0]['multipolygon']);
      for (let element in response) {
        console.log(response[element]['multipolygon']);
        console.log(response[element]['id']);
        this.layersControl.overlays[response[element]['id']] = geoJSON(
          response[element]['multipolygon']
        );
      }

      // this.configService.getConfig().subscribe(data => {
      //this.layersControl.overlays['geoLayer'] = geoJSON(data);
      //  });
    });
  }
}
