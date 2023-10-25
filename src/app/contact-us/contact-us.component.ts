import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactService } from '../contact.service';


// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor(private _ContactService:ContactService){}
userForm=new FormGroup({
name:new FormControl(null,[
  Validators.required,
  Validators.minLength(3),
  Validators.maxLength(20),
  
  Validators.pattern(/^[A-Z][a-z\s]*$/)
]),

email:new FormControl(null,[
  Validators.required,
  Validators.email,
  // Validators.pattern(/^.com/)
]),

phone:new FormControl(null,[
  Validators.required,
  Validators.pattern(/^01[10245][0-9]{8}$/)




])


})



showFormData(userForm:any){
  if(userForm.valid==true)
  console.log('valid');
  console.log(userForm.value);
this._ContactService.postData(userForm.value).subscribe((resp)=>{
console.log(resp)
},
(err)=>{}
)



}











}
