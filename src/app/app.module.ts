import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { RateComponent } from './components/rate/rate.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InventoryComponent } from './components/inventory/inventory.component';
import { StatisticalYearComponent } from './components/statistical-year/statistical-year.component';
import { StatisticalMonthComponent } from './components/statistical-month/statistical-month.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product', component: ProductComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'rate', component: RateComponent },
  { path: 'statistical-month', component: StatisticalMonthComponent },
  { path: 'statistical-year', component: StatisticalYearComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'order', component: OrderComponent },
  { path: 'profile', component: ProfileComponent },
]

@NgModule({
  declarations: [
    AppComponent,
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
    StatisticalMonthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
