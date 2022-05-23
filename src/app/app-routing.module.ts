import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { UpdateEventComponent } from './pages/update-event/update-event.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';
import { BuyTicketComponent } from './pages/buy-ticket/buy-ticket.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { UpdateCustomerComponent2 } from './pages/update-customer2/update-customer2.component';
import { EventListComponent3 } from './pages/event-list3/event-list3.component';
import { UpdateEventComponent2 } from './pages/update-event2/update-event2.component';
import { TicketListComponent2 } from './pages/ticket-list2/ticket-list2.component';
import { TicketListComponent3 } from './pages/ticket-list3/ticket-list3.component';
import { FavoriteListComponent } from './pages/favorite-list/favorite-list.component';



const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'admin' , component: CustomerListComponent},
  {path: 'customer' , component: BuyTicketComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'admin/customers' , component: CustomerListComponent},
  {path: 'admin/events' , component: EventListComponent},
  {path: 'admin/events/add' , component:CreateEventComponent},
  {path: 'admin/events/edit/:id', component:UpdateEventComponent},
  {path: 'admin/tickets/add' , component:CreateTicketComponent},
  {path: 'admin/tickets' , component:TicketListComponent},
  {path: 'customer/edit' , component:UpdateCustomerComponent2},
  {path: 'customer/tickets' , component:TicketListComponent3},
  {path: 'customer/events' , component:BuyTicketComponent},
  {path: 'customer/favorites', component:FavoriteListComponent},
  {path: 'organizer/events/' , component:EventListComponent3},
  {path: 'organizer' , component:EventListComponent3},
  {path: 'organizer/events/edit/:id', component:UpdateEventComponent2},
  {path: 'organizer/tickets/:uid', component:TicketListComponent2},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }