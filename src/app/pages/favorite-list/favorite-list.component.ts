import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/model/event';
import { Favorite } from 'src/app/model/favorite';
import { CustomerService } from '../../service/customer.service';


@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  favorites: Favorite[] = [];
  public deletedFavorite!: Favorite ;
  uid!: string;

  constructor(
    private eventService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
      this.getFavorites();
  }


  private getFavorites(){
    
    if(localStorage.getItem('User')!= null)
    this.uid=localStorage.getItem('User') as string;
 
  
  this.eventService.findFavoritesByCustomerUid(this.uid).subscribe(data => {
    this.favorites = data;
    console.log(data);
  });
    
    
    
  }

  

  public deleteFavorite(uid: string){ 
    this.eventService.deleteFavorite(uid).subscribe(data =>{
      console.log(data);
      this.getFavorites();
    }) 
  }

 



}