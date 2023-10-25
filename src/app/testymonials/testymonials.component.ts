import { Component, OnInit } from '@angular/core';
import{ HttpClientModule} from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-testymonials',
  templateUrl: './testymonials.component.html',
  styleUrls: ['./testymonials.component.css']
})
export class TestymonialsComponent implements OnInit{
constructor(private _AuthService:AuthService){}
dataList:any;
ngOnInit(): void {
  this._AuthService.getData().subscribe((res)=>{
   console.log(res);
this.dataList=res.data;
console.log(this.dataList);
  },(err)=>{
    console.log(err);
  })

 
  
}



}
