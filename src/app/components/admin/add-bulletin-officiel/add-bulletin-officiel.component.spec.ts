import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBulletinOfficielComponent } from './add-bulletin-officiel.component';

describe('AddBulletinOfficielComponent', () => {
  let component: AddBulletinOfficielComponent;
  let fixture: ComponentFixture<AddBulletinOfficielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBulletinOfficielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBulletinOfficielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
