import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {                              //Use ApiService as class name

  private apiUrl = 'https://localhost:5001/api';       //Base URL to your .NET API

  constructor(private http: HttpClient) { }            //Inject HttpClient

  getData(): Observable<any> {                         //Create method for API call
    return this.http.get(`${this.apiUrl}/yourendpoint`);
  }
}