import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { UpdateEventComponent } from './pages/update-event/update-event.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';
import { BuyTicketComponent } from './pages/buy-ticket/buy-ticket.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { UpdateCustomerComponent2 } from './pages/update-customer2/update-customer2.component';
import { EventListComponent3 } from './pages/event-list3/event-list3.component';
import { UpdateEventComponent2 } from './pages/update-event2/update-event2.component';
import { TicketListComponent2 } from './pages/ticket-list2/ticket-list2.component';
import { TicketListComponent3 } from './pages/ticket-list3/ticket-list3.component';
import { FavoriteListComponent } from './pages/favorite-list/favorite-list.component';
import { NgxCaptchaModule  } from 'ngx-captcha';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    BuyTicketComponent,
    EventListComponent,
    CreateEventComponent,
    UpdateEventComponent,
    LoginComponent,
    SignupComponent,
    CreateTicketComponent,
    TicketListComponent,
    UpdateCustomerComponent2,
    EventListComponent3,
    UpdateEventComponent2,
    TicketListComponent2,
    TicketListComponent3,
    FavoriteListComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }