import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketListComponent2 } from './ticket-list2.component';

describe('TicketListComponent2', () => {
  let component: TicketListComponent2;
  let fixture: ComponentFixture<TicketListComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketListComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
