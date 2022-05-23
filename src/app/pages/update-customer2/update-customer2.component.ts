import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerService } from '../../service/customer.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-update-customer2',
  templateUrl: './update-customer2.component.html',
  styleUrls: ['./update-customer2.component.css']
})

export class UpdateCustomerComponent2 implements OnInit {
  exform: any;
  currentCustomer: Customer =new Customer();
  uid!: string ;
  
  constructor(private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getCustomer( );

   this.exform = this.formBuilder.group({
      name : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      ron : ['', Validators.required],
      phone : ['',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$')
        ]
      ]
    });
    
  }

  get formControls() { return this.exform.controls; }

  public getCustomer(): void{
    if(localStorage.getItem('User')!= null)
      this.uid=localStorage.getItem('User') as string;
    this.customerService.getCustomerById(this.uid).subscribe(data =>{
      this.currentCustomer =data;
      this.updateFormValues();
      console.log(data);
    }, error => {console.log(error);});
  }

  updateFormValues() {
    this.exform.patchValue({
    name: this.currentCustomer.name,
    email: this.currentCustomer.email,
    ron: this.currentCustomer.ron,
    phone: this.currentCustomer.phone,
    });
  }

  public onSubmit(){
    if (this.exform.invalid) {
      return;
    }
      
    this.updateCustomer();
  }

  goToCustomerList(){
    this.router.navigate(['/customer']);
  }

  updateCustomer(): void {
    this.currentCustomer.name=this.exform.value.name;
    this.currentCustomer.email=this.exform.value.email;
    this.currentCustomer.phone=this.exform.value.phone;
    this.currentCustomer.ron=this.exform.value.ron;
   
    this.customerService.updateCustomer(this.currentCustomer, this.currentCustomer.uid)
    .subscribe(
    response => {
    console.log(response);
    this.goToCustomerList();
    },
    error => {
    console.log(error);
    });
  }

}