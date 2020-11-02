import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssuebookService {

  private baseUrl = 'http://localhost:8080/library-rest/api/issued_book';  
  
  constructor(private http:HttpClient) { }  
  
  getIssued_Book(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createIssued_Book(issued_book: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, issued_book);
  }
  updateIssued_Book(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  getIssued_BookList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  deleteIssued_Book(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}

