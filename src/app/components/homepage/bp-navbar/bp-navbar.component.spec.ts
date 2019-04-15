import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpNavbarComponent } from './bp-navbar.component';

describe('BpNavbarComponent', () => {
  let component: BpNavbarComponent;
  let fixture: ComponentFixture<BpNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
