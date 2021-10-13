import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/common/Customer';
import { Order } from 'src/app/common/Order';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orderHandle!:number;
  customerLength!:number;
  orders!:Order[];
  customers!:Customer[];

  constructor(private pageService: PageService, private toastr: ToastrService, private orderService: OrderService, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.pageService.setPageActive('dashboard');
    this.getAllOrder();
    this.getAllCustomer();
  }

  getAllOrder() {
    this.orderService.get().subscribe(data=>{
      this.orders = data as Order[];
      this.orderHandle = 0;
      for(let i = 0; i < this.orders.length; i++) {
        if(this.orders[i].status==0) {
          this.orderHandle++;
        }
      }
    }, error=>{
      this.toastr.error('Lỗi server', 'Hệ thống');
    })
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(data=>{
      this.customers = data as Customer[];
      this.customerLength = this.customers.length;
    }, error=>{
      this.toastr.error('Lỗi server', 'Hệ thống');
    })
  }

}
