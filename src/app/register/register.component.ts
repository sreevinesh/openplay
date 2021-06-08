import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-z A-Z]*')]],
    age:['',[Validators.required,Validators.pattern('[0-9]*')]],
    dist:['',[Validators.required,Validators.pattern('[a-z A-Z]*')]],
    vac:['']

  });

  constructor(private router:Router,private dataservice:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    if(this.registerForm.valid){
      var result=this.dataservice.register(this.registerForm.value.uname,this.registerForm.value.age,this.registerForm.value.dist,this.registerForm.value.vac)
      if(result==true){
        this.router.navigateByUrl("");
      }
      else{
        this.router.navigateByUrl("");
      }
    }
    else{
      alert("invalid form")
    }
 }

 }

