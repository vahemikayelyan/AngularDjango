import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isFavorite: boolean = true;

  onFavoriteChange() {
    console.log('Favorite changed');
  }
}
