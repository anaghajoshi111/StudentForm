import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesTechnologyComponent } from './employees-technology.component';

describe('EmployeesTechnologyComponent', () => {
  let component: EmployeesTechnologyComponent;
  let fixture: ComponentFixture<EmployeesTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
