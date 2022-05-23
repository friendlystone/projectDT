import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/model/event';
import { CustomerService } from '../../service/customer.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[] = [];
  public deletedEvent!: Event ;

  constructor(private eventService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.getEvents();
  }


  private getEvents(){
    this.eventService.getEventList().subscribe(data => {
      this.events = data;
    });
  }

 updateEvent(uid: string){
    this.router.navigate(['/admin/events/edit', uid]);
  }

  public deleteEvent(uid: string){ 
    this.eventService.deleteEvent(uid).subscribe(data =>{
      console.log(data);
      this.getEvents();
    }) 
  }




}