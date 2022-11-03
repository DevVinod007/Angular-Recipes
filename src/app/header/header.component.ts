import { Component } from '@angular/core';
import { DataService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
constructor(private DataService:DataService){}

  onSaveData(){
  this.DataService.storeRecipies();
  }

  onFetchData(){
    this.DataService.fetchRecipes().subscribe();
  }
}
