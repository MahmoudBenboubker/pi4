import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinOfficielComponent } from './bulletin-officiel.component';

describe('BulletinOfficielComponent', () => {
  let component: BulletinOfficielComponent;
  let fixture: ComponentFixture<BulletinOfficielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletinOfficielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletinOfficielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
