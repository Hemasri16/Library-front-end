import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private baseUrl = 'http://localhost:8080/library-rest/api/user';  
  
  
  constructor(private http:HttpClient) { }  
  public loginUserFromRemote(user :User):Observable<any>{
    return this.http.post<any>("http://localhost:8080/library-rest/api/login", user);
  }
  
  public registerUserFromRemote(user :User):Observable<any>{
    return this.http.post<any>("http://localhost:8080/library-rest/api/user", user);
  }
  
  
  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
