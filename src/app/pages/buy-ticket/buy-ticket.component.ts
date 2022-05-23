import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/model/event';
import { Favorite } from 'src/app/model/favorite';
import { Ticket } from 'src/app/model/ticket';
import { UserActivity } from 'src/app/model/userActivity';
import { CustomerService } from '../../service/customer.service';


@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {

  events: Event[] = [];
  public deletedEvent!: Event ;
  ticket: Ticket = new Ticket();
  customerUid!: string;
  favorite: Favorite = new Favorite();
  event:Event=new Event();
  userActivity:UserActivity=new UserActivity();


  constructor(private eventService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.getEvents();
  }


  private getEvents(){
    this.eventService.getEventList().subscribe(data => {
      this.events = data;
    });
  }

  goToEventList(){
    this.router.navigate(['/customer']);
  }

  buyTicket(uid: string){
    if(localStorage.getItem('User')!= null)
      this.customerUid=localStorage.getItem('User') as string;
    
     this.ticket.customerUid =this.customerUid;
    this.ticket.eventUid =uid;
    
    this.eventService.createTicket(this.ticket)
    .subscribe(
    response => {
    console.log(response);
    this.goToEventList();
    },
    error => {
    console.log(error);
    });
  }


  goToLogin(){
    this.router.navigate(['/login']);
  }

  logout(){
    if(localStorage.getItem('User')!= null)
      this.userActivity.utilizat=localStorage.getItem('User') as string;
    
    
    this.eventService.saveLogout(this.userActivity)
    .subscribe(
    response => {
    console.log(response);
    this.goToLogin();
    },
    error => {
    console.log(error);
    });
  }

  addToFavorites(uid: string){
    if(localStorage.getItem('User')!= null)
      this.customerUid=localStorage.getItem('User') as string;
    
    this.favorite.customer =this.customerUid;
   
    console.log(uid);

    this.eventService.getEventById(uid).subscribe(data => {
      this.event = data;
      console.log(data);
      this.favorite.location=this.event.location;
      this.favorite.name=this.event.name;
      this.favorite.type=this.event.type;
      console.log(this.event.location);
      console.log(data.location);
      this.cFavorites();
    });

    console.log(this.favorite);

   
   
  }


  cFavorites(){
    this.eventService.createFavorite(this.favorite)
    .subscribe(
    response => {
    console.log(response);
    this.goToEventList();
    },
    error => {
    console.log(error);
    });
  }

}