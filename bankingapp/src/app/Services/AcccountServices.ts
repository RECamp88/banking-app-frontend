import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import { bankAccount } from '../Models/bankAccount';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

 

  constructor(private httpClient: HttpClient) { }
  
  account: bankAccount = {
    id: 0,
    accountNumber: 0,
    type: "",
    balance: 500,
    transactions: []

  }

  



  /**
   * return an observable which produces a response from a request to post an account type.
   */
  createNewAccount(account: bankAccount, id: number): Observable<bankAccount> {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.post<bankAccount>(`http://3.16.47.4:9000/open-account/${id}`, account, { headers: header });
  }

  /**
   * return an observable which produces a response from a request to GET an account by id.
   * 
   */
  getAccountById(id: number): Observable<bankAccount> {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.get<bankAccount>(`http://3.16.47.4:9000/account/${id}`, {headers:header});
    
  }
  
}
