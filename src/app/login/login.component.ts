import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Login } from '../common/Login';
import { AuthService } from '../services/auth.service';
import { SessionService } from '../services/session.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  show: boolean = false;
  login!: Login;


  isLoggedIn = false;
  isLoginFailed = false;

  roles: string[] = [];

  postForm: FormGroup;

  constructor(private toastr: ToastrService, private tokenStorage: TokenStorageService, private sessionService: SessionService, private router: Router, private authService: AuthService) {
    this.postForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
  }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin() {
    if (this.sessionService.getUser() != null) {
      window.location.href = ('/admin');
    }
  }

  Login() {
    this.login = this.postForm.value;

    this.authService.login(this.login).subscribe(
      data => {

        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

        if (this.tokenStorage.getUser().roles == 'ROLE_USER') {
          this.toastr.error('Đăng nhập thất bại', 'Hệ thống');
          this.isLoginFailed = true;
          this.tokenStorage.signOut();
          return;
        }

        Swal.fire({
          icon: 'success',
          title: 'Đăng nhập thành công!',
          showConfirmButton: false,
          timer: 1500
        })

        

        setTimeout(() => {
          this.router.navigate(['/home']);
        },
          500);
      },
      error => {
        this.toastr.error('Sai Thông Tin Đăng Nhập', 'Hệ thống');
        this.isLoginFailed = true;
      }
    );
  }

  toggle() {
    this.show = !this.show;
  }

}
