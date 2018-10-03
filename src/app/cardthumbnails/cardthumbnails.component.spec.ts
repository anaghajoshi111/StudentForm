import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardthumbnailsComponent } from './cardthumbnails.component';

describe('CardthumbnailsComponent', () => {
  let component: CardthumbnailsComponent;
  let fixture: ComponentFixture<CardthumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardthumbnailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardthumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
