import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/common/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { PageService } from 'src/app/services/page.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user!:Customer;
  image!:string;
  name!:string;

  constructor(private sessionService: SessionService, private router: Router, private customerService: CustomerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    let email = this.sessionService.getSession();
    this.customerService.getByEmail(email).subscribe(data=>{
      this.user = data as Customer;
      this.name = this.user.name;
      this.image = this.user.image;
      if(!this.user.role) {
        this.toastr.error('Đã xảy ra lỗi', 'Hệ thống');
        this.sessionService.deleteSession();
        this.router.navigate(['/login']);        
      }
    }, error=>{
      this.toastr.error('Đã xảy ra lỗi', 'Hệ thống');
      this.sessionService.deleteSession();
      this.router.navigate(['/login']);
    })
    
  }

  logOut() {
    this.sessionService.deleteSession();
    this.router.navigate(['/login']);
  }

}
