
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Customer } from '../model/customer';
import { Event } from '../model/event';
import { Ticket } from '../model/ticket';
import { Utilizator } from '../model/utilizator';
import { Favorite } from '../model/favorite';
import { UserActivity } from '../model/userActivity';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private baseUrl = `http://localhost:8081/customers`; 
  private baseUrl1 = `http://localhost:8081/events`; 
  private baseUrl2 = `http://localhost:8081/tickets`; 
  private baseUrl3 = `http://localhost:8081/users/login`;
  private baseUrl4 = `http://localhost:8081/users`; 
  private baseUrl5 = `http://localhost:8081/favorites`; 
  private baseUrl6 = `http://localhost:8081/activities`; 
  
  constructor(private httpClient:HttpClient) { }

  public register(utilizator:Utilizator): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl4}`, utilizator);
  }

  public getCustomerList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseUrl}`);
  }

  public getActivityList(): Observable<UserActivity[]>{
    return this.httpClient.get<UserActivity[]>(`${this.baseUrl6}`);
  }

  public getOnlineUsers(): Observable<string>{
    return this.httpClient.get<string>(`${this.baseUrl6}/online`);
  }

  public getActivityListByCustomer(email: String): Observable<UserActivity[]>{
    return this.httpClient.get<UserActivity[]>(`${this.baseUrl6}/${email}`);
  }
 
  public createCustomer(customer: Customer): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, customer);
  }

  public saveLogin(userActivity: UserActivity): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl6}/login`, userActivity);
  }

  public saveLogout(userActivity: UserActivity): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl6}/logout`, userActivity);
  }

  public exportXML(): Observable<string>{
    return this.httpClient.get<string>(`${this.baseUrl6}/xml`);
  }

  public login(utilizator: Utilizator): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl3}`, utilizator);
  }

  public getCustomerById(uid: string): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseUrl}/${uid}`);
  }

  public updateCustomer(customer:Customer, uid: string): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${uid}`,customer);
  }

  public deleteCustomer (uid: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${uid}`);
  }

  public deleteTicket(uid: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl2}/${uid}`);
  }

  public deleteFavorite(uid: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl5}/${uid}`);
  }

  public getEventList(): Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${this.baseUrl1}`);
  }

  public getTicketList(): Observable<Ticket[]>{
    return this.httpClient.get<Ticket[]>(`${this.baseUrl2}`);
  }
 
  public createEvent(event: Event): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl1}`, event);
  }

  public getEventById(uid: string): Observable<Event>{
    return this.httpClient.get<Event>(`${this.baseUrl1}/${uid}`);
  }

  public updateEvent(event:Event, uid: string): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl1}/${uid}`,event);
  }

  public deleteEvent (uid: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl1}/${uid}`);
  }

  public createTicket(ticket: Ticket): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl2}`, ticket);
  }

  public createFavorite(favorite: Favorite): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl5}`, favorite);
  }

  public findCustomerByEmail(email: string): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseUrl}/email/${email}`);
  }
  public findEventByName(name: string): Observable<Event>{
    return this.httpClient.get<Event>(`${this.baseUrl1}/name/${name}`);
  }

  public findEventByOrganizer(name: String): Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${this.baseUrl1}/organizer/${name}`);
  }

  public findTicketByEventUid(eventUid: String): Observable<Ticket[]>{
    return this.httpClient.get<Ticket[]>(`${this.baseUrl2}/eventUid/${eventUid}`);
  }

  public findTicketByCustomerUid(customerUid: String): Observable<Ticket[]>{
    return this.httpClient.get<Ticket[]>(`${this.baseUrl2}/customerUid/${customerUid}`);
  }

  public findEventsByOrganizerUid(organizerUid:string):Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${this.baseUrl1}/organizer/${organizerUid}`);
  }

  public findFavoritesByCustomerUid(customerUid:string):Observable<Favorite[]>{
    return this.httpClient.get<Favorite[]>(`${this.baseUrl5}/customer/${customerUid}`);
  }
}