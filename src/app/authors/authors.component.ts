import { AuthorsService } from '../services/authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html'
})
export class AuthorsComponent {
  authors;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
   }

}
