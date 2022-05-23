import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { UserActivity } from 'src/app/model/userActivity';
import { Utilizator } from 'src/app/model/utilizator';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  exform: any;
  currentUser: Utilizator =new Utilizator();
  currentCustomer: Customer =new Customer();
  userActivity: UserActivity = new UserActivity();
  
  siteKey:string ="6Ldf9vIfAAAAAIh_9irZKWSUpLEPoazvIrWzW5lK";

  constructor(private formBuilder:FormBuilder, private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.exform = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required],
      recaptcha: ['', Validators.required]
    });
  }

  get formControls() { return this.exform.controls; }


 saveLog():void{
  this.customerService.saveLogin(this.userActivity)
  .subscribe(
    response => {
      console.log(response)
    },
    error => {
    console.log(error);
    });
 }

  saveCustomer(): void {
    this.customerService.login(this.exform.value)
    .subscribe(
    response => {
    this.currentUser=response as Utilizator;
    this.userActivity.utilizat = this.currentUser.uid;
    this.saveLog();
    localStorage.setItem('User',this.currentUser.uid);
    if(this.currentUser.role=='Admin')
      this.router.navigate(['admin/customers']);
    else
      if(this.currentUser.role=='Organizer')
        this.router.navigate(['organizer']);
      else
      if(this.currentUser.role=='Client')
      this.router.navigate(['customer']);

    },
    error => {
    console.log(error);
    });

    
    
  }


  public onSubmit(){

    if (this.exform.invalid) {
      return;
    }
    this.saveCustomer();
  }

}
