import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  readonly url = "http://localhost:3000/"
  constructor(private http:HttpClient ) { }


  addEmp(users:any):Observable<any>{
    return this.http.post(this.url+"Users",users);
  }


  AllUsers():Observable<any>{
    return this.http.get(this.url+"Users")
  }
}
