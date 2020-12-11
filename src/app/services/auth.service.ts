import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public saveUser(userId){
    localStorage.setItem("isLoggedIn","true");
    localStorage.setItem("token",userId);
  }

  public isLoggedIn(){
    if(localStorage.getItem("isLoggedIn") == "true"){
      return true;
    }else{
      return false;
    }
  }

  public logout() {
    localStorage.setItem("isLoggedIn","false");
    localStorage.removeItem("token");
  }
}
