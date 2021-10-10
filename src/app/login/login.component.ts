import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Login } from '../common/Login';
import { LoginService } from '../services/login.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  show: boolean = false;
  login!:Login;

  postForm: FormGroup;

  constructor(private loginService: LoginService, private toastr: ToastrService, private sessionService: SessionService, private router: Router) {
    this.postForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
   }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin() {
    if(this.sessionService.getSession() != null) {
      this.router.navigate(['/admin']);
    }
  }

  Login() {
    this.login = this.postForm.value;
    this.loginService.login(this.login).subscribe(data=>{
      this.sessionService.saveSession(this.login.email);
      Swal.fire({
        icon: 'success',
        title: 'Đăng nhập thành công!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/admin']);
    }, error=>{
      this.toastr.error('Sai thông tin đăng nhập', 'Hệ thống');
    })
  }

  toggle() {
    this.show = !this.show;
  }

}
