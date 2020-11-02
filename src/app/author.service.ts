import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private baseUrl = 'http://localhost:8080/library-rest/api/author';  
  
  
  constructor(private http:HttpClient) { }  
 

  getAuthor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAuthor(author: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, author);
  }

  getAuthorList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
