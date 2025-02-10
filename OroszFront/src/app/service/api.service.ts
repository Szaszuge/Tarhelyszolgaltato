import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../interface/user'
import { retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  private tokenName = environment.tokenName;
  private server = environment.serverUrl;
  
  getToken():String | null{
    return localStorage.getItem(this.tokenName);
  }

  tokenHeader():{ headers: HttpHeaders }{
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return { headers }
  }

  userRegistration(user:User){
    return this.http.post(this.server + '/users/register', user);
  }
    /*
  registration(table:string, data:object){
    return this.http.post(this.server + '/reg/' + table, data);
  }
  login(table:string, data:object){
    return this.http.post(this.server + '/login/' + table, data);
  }
  // token-el védett metódusok:
  select(table: string, field:string, op: string, value: string){
    return this.http.get(this.server + '/'+table+'/'+field+'/'+op+'/'+value, this.tokenHeader());
  }
  */
}