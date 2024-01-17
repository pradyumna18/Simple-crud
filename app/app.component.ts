import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { EmpService } from './emp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'TASK';

  employeeForm!:FormGroup
  users: any;
  
   constructor(public _fb:FormBuilder,private service:EmpService){

   }
  ngOnInit(): void {
    this.employeeForm=new FormGroup({
       department:new FormControl( null,Validators.required),
       empName:new FormControl(null,Validators.required),
       mob:new FormControl(null,Validators.required),
       gen:new FormControl(null,Validators.required),
       date:new FormControl(null,Validators.required),
       email:new FormControl(null,[Validators.required,Validators.email]),
       salary:new FormControl(null,Validators.required),
       password:new FormControl(null,Validators.required),
       pass:new FormControl(null,Validators.required),
       status:new FormControl(false,Validators.requiredTrue),
    })

    this.AllUsers();
  }
  formSubmit(){
    console.log(this.employeeForm.value);
    this.service.addEmp(this.employeeForm.value).subscribe(data=>{
      alert("Employee Added Successfully......");
      this.AllUsers();
      console.log(data);
      
    }) 
  }
 
  AllUsers(){
    this.service.AllUsers().subscribe((data: any)=>{
      console.log("Users",data);
      this.users=data;
    }) 
  }

  reset(){
    this.employeeForm.reset();
  }

  cancel(){
    this.employeeForm.reset();
  }

}






