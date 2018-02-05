import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {  Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserData } from '../user-data';
declare var $:any;

@Injectable()
export class TransformerService {
  
  key:string;

  getsearchvalues(searchdata : UserData)
  {

  }

  getKeyId(k){

    this.key=k;
    console.log("+++++++++++" +this.key);
    }
   
  constructor(private http: Http) { let myParams = new URLSearchParams(); 

    myParams.set('names', 'key'); 
       }
  
  private summaryUrl:string = 'http://localhost:9999/SpringBootRestApi/api/books/';
  private keysUrl:string = 'http://localhost:8383/UserData/listContactInfo';
  private keyDetailUrl:string = 'http://localhost:8383/UserData/key';

 batch:String;

 

getbatchId(b){
  this.batch = b;

}


getSummary(ud:UserData):Observable<any> {
  //let formdata=new FormData();
  //formdata.append("batch","2");
       return this.http.post(this.summaryUrl,ud)
       .map((response:Response) => response.json())
   }

//   getSummary() {
//     return this.http.get(this.summaryUrl)
//     .map((response:Response) => response.json())
// }

// getKeys() {
//   return this.http.get(this.keysUrl)
//   .map((response:Response) => response.json())
// }

// getKeyDetails() {
//   return this.http.get(this.keyDetailUrl)
//   .map((response:Response) => response.json())
// }



}

