import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/common/Order';
import { OrderService } from 'src/app/services/order.service';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  listData!: MatTableDataSource<Order>;
  orders!:Order[];
  orderLength!: number;
  columns: string[] = ['id', 'user', 'address', 'phone', 'amount', 'orderDate', 'status', 'view'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private pageService: PageService, private toastr: ToastrService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.pageService.setPageActive('order');
    this.getAllOrder();
  }

  getAllOrder() {
    this.orderService.get().subscribe(data=>{
      this.orders = data as Order[];
      this.listData = new MatTableDataSource(this.orders);
      this.orderLength = this.orders.length;
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    }, error=>{
      this.toastr.error('Lỗi! '+error.status, 'Hệ thống');
    })
  }

  search(event: any) {
    const fValue = (event.target as HTMLInputElement).value;
    this.listData.filter = fValue.trim().trim().toLowerCase();
  }

  finish() {
    this.ngOnInit();
  }

}
