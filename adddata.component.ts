import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {
  movie:FormGroup
  
  



  constructor(public http:MyserviceService) {
    this.movie=new FormGroup({
      movieName:new FormControl(''),
      language:new FormControl(''),
      Genre:new FormControl(''),
    })
   }

 
  ngOnInit() {
  }

  save(value){
    console.log(value)
     this.http.getdata(value).add(data=>{
       console.log(data)
     })
  }
  
  
  
}
