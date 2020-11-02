import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8080/library-rest/api/admin';  
  
  
  constructor(private http:HttpClient) { }  
  public AdminUserFromRemote(admin :Admin):Observable<any>{
    return this.http.post<any>("http://localhost:8080/library-rest/api/admin", admin);
  }

  getAdmin(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAdmin(admin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, admin);
  }

  updateAdmin(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAdminList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
