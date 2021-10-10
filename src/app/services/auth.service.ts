import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private sessionService: SessionService) { }

  isLogin() {
    return this.sessionService.getSession() != null;
  }

}
