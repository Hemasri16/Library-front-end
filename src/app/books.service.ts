import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})

export class BooksService {  
  
  private baseUrl = 'http://localhost:8080/library-rest/api/books';  
  
  constructor(private http:HttpClient) { }  
  
  getBooks(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBooks(books: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, books);
  }

  updateBooks(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBooks(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBooksList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
