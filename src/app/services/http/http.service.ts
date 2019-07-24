import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class HttpService {


    constructor(private http: HttpClient) {
    }

    public getAllEmployee(url: string): Observable<any> {
        return this.http.get(url);
    }

    public insertEmployee(url: string, user: User): Observable<any> {
        return this.http.post(url, user);
    }

    public getEmployeeById(url: string, user: User): Observable<any> {
        return this.http.get(url, user.idEmployee);
    }

    public getAllAccount(url: string): Observable<any> {
        return this.http.get(url);
    }

}

