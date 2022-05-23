import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/model/event';
import { CustomerService } from '../../service/customer.service';


@Component({
  selector: 'app-event-list3',
  templateUrl: './event-list3.component.html',
  styleUrls: ['./event-list3.component.css']
})
export class EventListComponent3 implements OnInit {

  events: Event[] = [];
  public deletedEvent!: Event ;
  uid!: string;

  constructor(
    private eventService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
      this.getEvents();
  }


  private getEvents(){
    
    if(localStorage.getItem('User')!= null)
    this.uid=localStorage.getItem('User') as string;
 
  
  this.eventService.findEventsByOrganizerUid(this.uid).subscribe(data => {
    this.events = data;
    console.log(data);
  });
    
    
    
  }

  updateEvent(uid: string){
    this.router.navigate(['/organizer/events/edit', uid]);
  }

  public deleteEvent(uid: string){ 
    this.eventService.deleteEvent(uid).subscribe(data =>{
      console.log(data);
      this.getEvents();
    }) 
  }

  viewTickets(uid: string){
    this.router.navigate(['/organizer/tickets', uid]);
  }



}