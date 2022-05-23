import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerComponent2 } from './update-customer2.component';

describe('UpdateCustomerComponent2', () => {
  let component: UpdateCustomerComponent2;
  let fixture: ComponentFixture<UpdateCustomerComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCustomerComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCustomerComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
