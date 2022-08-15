import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginI } from 'src/app/modelos/login.interface';
import { responseI } from 'src/app/modelos/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token = 123456;

  url:string = "https://www.psonrie.com/api/interview-test/login";

  constructor(private http:HttpClient) { }

  loginByEmail(form:loginI):Observable<responseI> {
    let verifyToken = this.url + this.token;


    return this.http.post<responseI>(verifyToken, form);
  }
  
}
