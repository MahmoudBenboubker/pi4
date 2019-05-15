import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceCommuneComponent } from './province-commune.component';

describe('ProvinceCommuneComponent', () => {
  let component: ProvinceCommuneComponent;
  let fixture: ComponentFixture<ProvinceCommuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinceCommuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinceCommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
