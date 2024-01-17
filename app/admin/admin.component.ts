import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
users: any;
constructor(public _fb:FormBuilder,private service:EmpService){

}
  ngOnInit(): void {
    this.AllUsers();
  }
AllUsers(){
  this.service.AllUsers().subscribe((data: any)=>{
    console.log("Users",data);
    this.users=data;
  }) 
}
}
