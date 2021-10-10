import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../common/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = "http://localhost:8989/api/users";

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.url);
  }

  getOne(id: number) {
    return this.httpClient.get(this.url + '/' + id);
  }

  delete(id: number) {
    return this.httpClient.delete(this.url + '/' + id);
  }

  update(id: number, customer: Customer) {
    return this.httpClient.put(this.url + '/' + id, customer);
  }
}
