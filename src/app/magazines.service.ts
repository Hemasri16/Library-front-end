import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MagazinesService {  
  
  private baseUrl = 'http://localhost:8080/library-rest/api/magazines';  
  
  constructor(private http:HttpClient) { }  
  
  getMagazines(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }

  createMagazines(magazines: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, magazines);
  }

  updateMagazines(name: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${name}`, value);
  }

  deleteMagazines(name: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${name}`, { responseType: 'text' });
  }

  getMagazinesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
