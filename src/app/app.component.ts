import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Code with Mosh Angular Course!';
  post = {
    isLiked: true,
    likesCount: 10
  }
   
}
