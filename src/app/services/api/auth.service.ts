import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, } from 'rxjs/operators'
import { loginI } from 'src/app/modelos/login.interface';
import { responseI } from 'src/app/modelos/response.interface';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { 
    //this.checkToken();
    //this.logout()
  }

  headers: any = { "token": "123456" };

  urlLogin: string = '/login'

  private loggedIn = new BehaviorSubject<boolean>(false); // el estado de logged lo coloco en false

  //url:string = "https://www.psonrie.com/api/interview-test/login";
 
  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable()
  }

  loginByEmail(form:loginI):Observable<responseI>{
    const httpOptions = {
        headers: new HttpHeaders(this.headers),
    };
    
    localStorage.setItem("token", "123456"); //guardo el token mientras esta logeado
      this.loggedIn.next(true);
    
    return this.http.post<responseI>( `${ environment.API_URL + this.urlLogin  }`, form, httpOptions)
      
  } 

  logout(): void {
    localStorage.removeItem("token")
    this.loggedIn.next(false);
  }
  
  private checkToken(): void { 
    const userToken:any = localStorage.getItem("token");
    const isExpired = helper.isTokenExpired(userToken); // devuelve boolean
    console.log("isExpiered -> ", isExpired);
    
    isExpired ? this.logout : this.loggedIn.next(true);

    /*if(isExpired){
      this.logout();
    } else {
      this.loggedIn.next(true);
    }*/
    }
  }









/*

  private handlerError(err:any):Observable<never> {
    let errorMessage = 'An error occured retrienving data';
    if(err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage)*/
  



  


