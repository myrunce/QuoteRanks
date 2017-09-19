import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuoteComponentComponent } from './add-quote-component.component';

describe('AddQuoteComponentComponent', () => {
  let component: AddQuoteComponentComponent;
  let fixture: ComponentFixture<AddQuoteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuoteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuoteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
