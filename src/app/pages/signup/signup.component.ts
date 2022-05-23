import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: any;

  roleList: any = ['Client', 'Organizer'];
  
  constructor(private formBuilder : FormBuilder, private customerService:CustomerService, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password:['',[Validators.required]],
      name:['',[Validators.required]],
      role:['',[Validators.required]]
    })
  }

  get formControls() { return this.signupForm.controls; }

  

  signUp(): void{
    this.customerService.register(this.signupForm.value)
    .subscribe(
    response => {
    console.log(response);
    this.router.navigate(['login']);
    },
    error => {
    console.log(error);
    });
  }

  public onSubmit(){

    if (this.signupForm.invalid) {
      return;
    }
    this.signUp();
  }
}
