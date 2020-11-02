import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewspaperService {
  private baseUrl = 'http://localhost:8080/library-rest/api/newspaper';  

  constructor(private http:HttpClient) { }  
  
  getNewspaper(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }

  createNewspaper(newspaper: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, newspaper);
  }

  updateNewspaper(name: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${name}`, value);
  }

  deleteNewspaper(name: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${name}`, { responseType: 'text' });
  }

  getNewspaperList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

 
}
