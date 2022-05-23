import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { Event } from 'src/app/model/event';
import { Ticket } from 'src/app/model/ticket';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})


export class CreateTicketComponent implements OnInit {

  exform: any;
  ticket: Ticket = new Ticket();
  event: Event =new Event();
  customer:Customer = new Customer();
  constructor(private formBuilder:FormBuilder, private ticketService:CustomerService, private router:Router) { }



  ngOnInit(): void {
    this.exform = this.formBuilder.group({
      emailCustomer : ['', [Validators.required, Validators.email]],
      eventName : ['', Validators.required],
    });

  }

  get formControls() { return this.exform.controls; }

  public getEvent(name:any): void{
    this.ticketService.findEventByName(name).subscribe(data =>{
      this.event =data;
      this.ticket.eventUid=data.uid;
      console.log(data);
    }, error => {console.log(error);});
  }

  public getCustomer(email:any): void{
    this.ticketService.findCustomerByEmail(email).subscribe(data =>{
      this.customer =data;
      this.ticket.customerUid=data.uid;
      console.log(data);
    }, error => {console.log(error);});
  }

 

  
  saveTicket(): void {
   
    this.getEvent(this.exform.value.eventName);
    this.getCustomer(this.exform.value.emailCustomer);
    
   
    this.ticketService.createTicket(this.ticket)
    .subscribe(
    response => {
    console.log(response);
    this.goToTicketList();
    },
    error => {
    console.log(error);
    });
  }

  public goToTicketList(){
    this.router.navigate(['admin/tickets']);
  }

 public onSubmit(){

    if (this.exform.invalid) {
      return;
    }
    this.saveTicket();
  }

}