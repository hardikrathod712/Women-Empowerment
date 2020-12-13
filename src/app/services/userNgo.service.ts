import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserNgo } from "../models/userNgo.model";

@Injectable({
    providedIn:"root"
})
export class UserNgoService {

    registerApi = "http://localhost:8080/userNgo/userNgoRegister";
    getApi = "http://localhost:8080/userNgo/trainee/";

    constructor(private http: HttpClient) {}

    userNgoRegister(userNgo): Observable<any> {
        return this.http.post<UserNgo>(this.registerApi,userNgo);
    }

    getUserNgo(userId): Observable<UserNgo> {
        return this.http.get<UserNgo>(this.getApi+userId);
    }
}