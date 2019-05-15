import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieBulletinOfficielComponent } from './modifie-bulletin-officiel.component';

describe('ModifieBulletinOfficielComponent', () => {
  let component: ModifieBulletinOfficielComponent;
  let fixture: ComponentFixture<ModifieBulletinOfficielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifieBulletinOfficielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieBulletinOfficielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
