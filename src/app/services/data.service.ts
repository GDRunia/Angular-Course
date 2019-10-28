import { BadInput } from './../common/bad-input';
import { throwError } from 'rxjs';
import { AppError } from './../common/app.error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private url: string, private http: HttpClient) { }

  getAll() { 
    return this.http.get<any[]>(this.url, { observe: 'body' })
      .pipe(catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url, resource, { observe: 'body', responseType: 'json'})
      .pipe(catchError(this.handleError));
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, { isRead: true })
      .pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error) {
    if (error.status === 400)
      return throwError(new BadInput(error.json()));

    if (error.status === 404)
      return throwError(new NotFoundError());
    
    return throwError(new AppError(error));
  }
}
