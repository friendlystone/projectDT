import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListComponent3 } from './event-list3.component';

describe('EventListComponent3', () => {
  let component: EventListComponent3;
  let fixture: ComponentFixture<EventListComponent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventListComponent3 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListComponent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
