import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/model/event';
import { Ticket } from 'src/app/model/ticket';
import { CustomerService } from '../../service/customer.service';


@Component({
  selector: 'app-ticket-list3',
  templateUrl: './ticket-list3.component.html',
  styleUrls: ['./ticket-list3.component.css']
})
export class TicketListComponent3 implements OnInit {

  tickets: Ticket[] = [];
  public deletedEvent!: Event ;
  uid!: string ;

  constructor(
    private eventService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
      //this.getEvents( this.route.snapshot.paramMap.get('uid'));
      this.getEvents();
  }


  private getEvents(){
    if(localStorage.getItem('User')!= null)
      this.uid=localStorage.getItem('User') as string;
   
    
    this.eventService.findTicketByCustomerUid(this.uid).subscribe(data => {
      this.tickets = data;
      console.log(data);
    });
  }

  public deleteEvent(uid: string){ 
    this.eventService.deleteTicket(uid).subscribe(data =>{
      console.log(data);
      this.getEvents();
    });}


 



}