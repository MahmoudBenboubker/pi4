import { Component, OnInit } from '@angular/core';
declare let L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
      const map = L.map('map').setView([33.972, -6.84], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([33.972, -6.84]).addTo(map)
    .bindPopup('Parcelle A')
    .openPopup();

    const latlngs = [
      [33.972, -6.84],
      [33.721, -6.711],
      [33.614, -6.1],
      [33.452,-3.4]
  ];
  const polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
  // zoom the map to the polyline
  map.fitBounds(polyline.getBounds());
  }

}