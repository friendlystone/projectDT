import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketListComponent3 } from './ticket-list3.component';

describe('TicketListComponent3', () => {
  let component: TicketListComponent3;
  let fixture: ComponentFixture<TicketListComponent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketListComponent3 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListComponent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
