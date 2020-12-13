import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class NGOService {
    ngoApi = "http://localhost:8080/ngo/getNGO";
    approvedNgoApi = "http://localhost:8080/ngo/approvedNgo";

    constructor(private http:HttpClient){}

    getNGOListBySector(sectorName):Observable<any> {
        return this.http.get<any>(this.ngoApi+"/"+sectorName);
    }

    getApprovedNgo(): Observable<any> {
        return this.http.get<any>(this.approvedNgoApi);
    }
}