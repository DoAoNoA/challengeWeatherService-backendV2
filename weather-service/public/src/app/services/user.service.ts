import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cities } from '../class/Cities';
import { Location } from '../class/Location';
import "rxjs/Rx";

@Injectable()
export class UserService {
  domain: String = 'http://localhost:3003';

  constructor(private http: HttpClient) { }

  getCities(){
    return this.http.get<Cities[]>(`${this.domain}/api/cities`)
      .map(res => res);
  }
  
  getLocation(){
    return this.http.get<Location[]>(`${this.domain}/api/users/5aef4ec429c2bff28ec9d8ee`)
      .map(res => res);
  }
  
  addCity(newCity: Cities) {
    return this.http.post<Cities>(`${this.domain}/api/users/5aef4ec429c2bff28ec9d8ee/newCity`, newCity)
       .map(res => res);
  }

  deleteLocation(delCity) {
    return this.http.delete<String>(`${this.domain}/api/users/5aef4ec429c2bff28ec9d8ee/${delCity}`)
       .map(res => res);
  }
  
}
