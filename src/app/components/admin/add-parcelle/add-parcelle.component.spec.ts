import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParcelleComponent } from './add-parcelle.component';

describe('AddParcelleComponent', () => {
  let component: AddParcelleComponent;
  let fixture: ComponentFixture<AddParcelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParcelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParcelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
