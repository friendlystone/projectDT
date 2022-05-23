import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';



@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})


export class CreateEventComponent implements OnInit {

  exform: any;
  constructor(private formBuilder:FormBuilder, private eventService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.exform = this.formBuilder.group({
      name : ['', Validators.required],
      price : ['', Validators.required],
      location : ['', Validators.required],
      duration : ['', Validators.required],
      type : ['', Validators.required],
      organizer : ['', Validators.required],
      nrTickets : ['', Validators.required]
    });
    //this.subscribeToNotifications();
  }

 

  get formControls() { return this.exform.controls; }

  saveEvent(): void {
    this.eventService.createEvent(this.exform.value)
    .subscribe(
    response => {
    console.log(response);
    this.goToEventList();
    },
    error => {
    console.log(error);
    });
  }

  public goToEventList(){
    this.router.navigate(['admin/events']);
  }

 public onSubmit(){

    if (this.exform.invalid) {
      return;
    }
    this.saveEvent();
  }





}