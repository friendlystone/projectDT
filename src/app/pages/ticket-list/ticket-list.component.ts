import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/model/ticket';
import { CustomerService } from '../../service/customer.service';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[] = [];
  public deletedticket!: Ticket ;

  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.getTickets();
  }


  private getTickets(){
    this.customerService.getTicketList().subscribe(data => {
      this.tickets = data;
    });
  }

 updateTicket(uid: string){
    this.router.navigate(['/admin/tickets/edit', uid]);
  }

  public deleteTicket(uid: string){ 
    this.customerService.deleteTicket(uid).subscribe(data =>{
      console.log(data);
      this.getTickets();
    }) 
  }




}