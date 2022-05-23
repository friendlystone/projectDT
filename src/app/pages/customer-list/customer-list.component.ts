import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from '../../service/customer.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  public deletedCustomer!: Customer ;

  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }


  private getCustomers(){
    this.customerService.getCustomerList().subscribe(data => {
      this.customers = data;
    });
  }

 updateCustomer(uid: string){
    this.router.navigate(['/admin/customers/edit', uid]);
  }

  public deleteCustomer(uid: string){ 
    this.customerService.deleteCustomer(uid).subscribe(data =>{
      console.log(data);
      this.getCustomers();
    }) 
  }




}