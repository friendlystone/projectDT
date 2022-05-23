import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEventComponent2 } from './update-event2.component';

describe('UpdateEventComponent2', () => {
  let component: UpdateEventComponent2;
  let fixture: ComponentFixture<UpdateEventComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEventComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEventComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
