import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerService } from '../../service/customer.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from 'src/app/model/event';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})

export class UpdateEventComponent implements OnInit {
  exform: any;
  currentEvent: Event =new Event();
  
  constructor(private formBuilder: FormBuilder,
    private eventService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getEvent( this.route.snapshot.paramMap.get('id'));

    this.exform = this.formBuilder.group({
      name : ['', Validators.required],
      price : ['', Validators.required],
      location : ['', Validators.required],
      duration : ['', Validators.required],
      type : ['', Validators.required],
      organizer : ['', Validators.required],
      nrTickets : ['', Validators.required]
    });
    
  }
  get formControls() { return this.exform.controls; }

  public getEvent(id:any): void{
    this.eventService.getEventById(id).subscribe(data =>{
      this.currentEvent =data;
      this.updateFormValues();
      console.log(data);
    }, error => {console.log(error);});
  }

  updateFormValues() {
    this.exform.patchValue({
    name: this.currentEvent.name,
    price: this.currentEvent.price,
    location: this.currentEvent.location,
    duration: this.currentEvent.duration,
    type: this.currentEvent.type,
    organizer: this.currentEvent.organizer,
    nrTickets: this.currentEvent.nrTickets,
    });
  }

  public onSubmit(){
    if (this.exform.invalid) {
      return;
    }
      
    this.updateEvent();
  }

  goToEventList(){
    this.router.navigate(['/admin/events']);
  }

  updateEvent(): void {
    this.currentEvent.name=this.exform.value.name;
    this.currentEvent.price=this.exform.value.price;
    this.currentEvent.location=this.exform.value.location;
    this.currentEvent.duration=this.exform.value.duration;
    this.currentEvent.type=this.exform.value.type;
    this.currentEvent.organizer=this.exform.value.organizer;
    this.currentEvent.nrTickets=this.exform.value.nrTickets;
   
    this.eventService.updateEvent(this.currentEvent, this.currentEvent.uid)
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