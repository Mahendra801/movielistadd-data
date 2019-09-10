import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import* as http from '@angular/common/http';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  
  
signup=this.fb.group({
  name:[''],
  password:[''],
  confirmpassword:[''],
});

  constructor(private fb:FormBuilder, private  http:http.HttpClient,public router:Router) { }

  ngOnInit() {
  }
  signupform(value){
    let name=this.signup.get("name").value
    let password=this.signup.get("password").value
    let confirmpassword=this.signup.get("confirmpassword").value
    let body={
      "name":name,
      "password":password,
      "confirmpassword":confirmpassword,
    }
    console.log(body)
    if(password==confirmpassword){
      return this.http.post("https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users",body).subscribe(data=>{
        console.log(data)
        this.router.navigate(["/login"])

      })
      
    }
    else{
      console.log("password missmatch")

    }
  }
}
