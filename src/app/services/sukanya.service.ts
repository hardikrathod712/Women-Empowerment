import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SukanyaAccount } from '../models/sukanyaaccount.model';


@Injectable({
  providedIn: 'root'
})


export class SukanyaService {


  constructor(private httpService: HttpClient) { }

  public addSukanyaAccount(addAcc: SukanyaAccount) {
    console.log("ins service add");
    console.log(addAcc);
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8080/sukanyaAccount/insertAccount", addAcc, { headers, responseType: 'text' });
  }

  public getSukanyaDetails() {
    console.log("ins service get employees");
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<SukanyaAccount>("http://localhost:8080/sukanyaAccount/getAccount");
  }

}