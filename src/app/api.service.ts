import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  getCustomers() {
    throw new Error("Method not implemented.");
  }
  apiURL: string = 'https://twinster.sizes.showmysize.com/api/sizefinder/';

  constructor(private httpClient: HttpClient) {}

  
  public updateCustomer(customer: Customer){
    return this.httpClient.put(`https://twinster.sizes.showmysize.com/api/sizefinder/`, customer);
}


}