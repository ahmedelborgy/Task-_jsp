import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _HttpClient:HttpClient) { }


  postData(user:any):Observable<any>{

    return this._HttpClient
    .post('http://upskilling-egypt.com:3000/contact',user)
  }

}
