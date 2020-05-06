import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  BaseUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  
  registerUser(registerData):Observable<any> {
    return this.http.post(`${this.BaseUrl}/register`, registerData);
  }

  loginUser(user):Observable<any> {
    return this.http.post(`${this.BaseUrl}/login`,user);
  }

}
