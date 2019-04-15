import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpFooterComponent } from './bp-footer.component';

describe('BpFooterComponent', () => {
  let component: BpFooterComponent;
  let fixture: ComponentFixture<BpFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
