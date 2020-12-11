import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn:"root"
})
export class UserService {

    constructor(private http: HttpClient) {}

    registerApi = "http://localhost:8080/step/userRegister";
    loginApi = "http://localhost:8080/step/userLogin";

    public userRegister(user) : Observable<User> {
        return this.http.post<User>(this.registerApi,user);
    }

    public userLogin(user): Observable<any> {
        return this.http.post<User>(this.loginApi,user);
    }
}