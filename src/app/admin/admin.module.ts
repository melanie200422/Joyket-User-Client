import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { RateComponent } from './rate/rate.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { InventoryComponent } from './inventory/inventory.component';
import { StatisticalYearComponent } from './statistical-year/statistical-year.component';
import { StatisticalMonthComponent } from './statistical-month/statistical-month.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ProfileComponent } from './profile/profile.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children : [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'category', component: CategoryComponent, canActivate: [AuthGuard] },
      { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
      { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },
      { path: 'rate', component: RateComponent, canActivate: [AuthGuard] },
      { path: 'statistical-month', component: StatisticalMonthComponent, canActivate: [AuthGuard] },
      { path: 'statistical-year', component: StatisticalYearComponent, canActivate: [AuthGuard] },
      { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] },
      { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    ]
  }

]

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    CategoryComponent,
    ProductComponent,
    RateComponent,
    OrderComponent,
    OrderDetailComponent,
    CustomerComponent,
    InventoryComponent,
    StatisticalYearComponent,
    StatisticalMonthComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ProfileComponent,
    AddProductComponent,
    AddCustomerComponent,
    EditProductComponent,
    EditCustomerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      // progressBar: true,
      progressAnimation: 'increasing',
      // preventDuplicates: true,
      closeButton: true,
    }),
    RouterModule.forRoot(routes)
  ],
  providers:[AuthGuard]
})
export class AdminModule { }
