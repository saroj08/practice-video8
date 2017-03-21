import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core'
import {Http,Response,Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GetService {
    url:string;
    data:any[];
 response:any[];
constructor(private _http:Http){
 
  
}
getService(){
    var  headers = new Headers;
     headers.append('Content-Type','application/json; charset=utf-8');
return this._http.get(this.url,{headers:headers}).map(res=>res);
}
postService(){
      var  headers = new Headers;
     headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(this.url,this.data,{headers:headers}).map(res=>res);
}
deleteService(){
      var  headers = new Headers;
     headers.append('Content-Type','application/json; charset=utf-8');
return this._http.delete(this.url,{headers:headers}).map(res=>res);
}
  @Output() fire: EventEmitter<any> = new EventEmitter();

  

   change() {
    console.log('change started'); 
     this.fire.emit(this.response);
   }

   getEmittedValue() {
     return this.fire;
   }


}

