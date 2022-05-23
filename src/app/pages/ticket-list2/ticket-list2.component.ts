import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/model/event';
import { Ticket } from 'src/app/model/ticket';
import { CustomerService } from '../../service/customer.service';


@Component({
  selector: 'app-ticket-list2',
  templateUrl: './ticket-list2.component.html',
  styleUrls: ['./ticket-list2.component.css']
})
export class TicketListComponent2 implements OnInit {

  tickets: Ticket[] = [];
  public deletedEvent!: Event ;

  constructor(
    private eventService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
      this.getEvents( this.route.snapshot.paramMap.get('uid'));
  }


  private getEvents(uid:any){
    console.log(uid);
    this.eventService.findTicketByEventUid(uid).subscribe(data => {
      this.tickets = data;
      console.log(data);
    });
  }


  viewTickets(uid: string){
    this.router.navigate(['/organizer/tickets', uid]);
  }



}