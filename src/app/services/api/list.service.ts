import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { listI  } from '../../modelos/list.interface'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { responseI } from 'src/app/modelos/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }

  urlPsychologist: string = '/psychologist';

  headers: any = { "token": "123456" };

  getListPsichologist():Observable<listI[]>{
    const httpOptions = {
      headers: new HttpHeaders(this.headers)
    };

    localStorage.setItem("token", "123456"); //guardo el token mientras esta logeado
     
    return this.http.get<listI[]>(`${ environment.API_URL + this.urlPsychologist  }`, httpOptions)
  }

  getIdpsichologist(id:any):Observable<listI[]>{
    const httpOptions = {
      headers: new HttpHeaders(this.headers)
    }; 
    
    const url = `${ environment.API_URL + this.urlPsychologist }/${id}`;

    localStorage.setItem("token", "123456"); //guardo el token mientras esta logeado
     
    return this.http.get<listI[]>(url, httpOptions )
  }

}

