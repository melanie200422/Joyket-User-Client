import { Injectable } from '@angular/core';
import { Login } from '../common/Login';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  login!:Login;
  data!:any;

  constructor() { }

  saveSession(email: string) {
    window.localStorage.removeItem("user");
    window.localStorage.setItem("user", JSON.stringify(email));
  }

  getSession() {
    this.data = localStorage.getItem("user");
    return JSON.parse(this.data);
  }

  deleteSession() {
    window.localStorage.removeItem("user");
  }
}
