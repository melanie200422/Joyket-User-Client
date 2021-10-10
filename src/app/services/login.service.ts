import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../common/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8989/api/auth/admin";

  constructor(private httpClient: HttpClient) { }

  login(login: Login) {
    return this.httpClient.post(this.url+'/login', login);
  }

  logout() {
    return this.httpClient.get(this.url+'/logout');
  }
}
