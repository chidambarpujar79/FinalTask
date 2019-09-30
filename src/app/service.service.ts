import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetservicesService {
  cat:string;
url:string="https://82468b4e.ngrok.io/api/KB/GetArticles?getall=0&categ="

  constructor(private _http: HttpClient) { }
  public getAllKbArticle() {
    return this._http.get(this.url);
}

public getPageByNumber(number:number){
  this.cat="&Page="+number;
  console.log("pagination"+this.cat);
  return this._http.get(this.url+this.cat);
  }
}
