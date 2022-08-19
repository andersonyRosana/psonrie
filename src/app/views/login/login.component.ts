import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/api/auth.service';
import { loginI } from '../../modelos/login.interface';
import { Router } from '@angular/router';
import { responseI } from 'src/app/modelos/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required), 
    password: new FormControl('', Validators.required),
  }); 

  constructor(private api:AuthService, private router:Router) { }

  errorStatus:boolean = false;
  errorMsj = ""

  ngOnInit(): void {
    
  }

   onLogin(form:loginI) {
    this.api.loginByEmail(form).subscribe( data => {
      let dataResponse:responseI = data
      if (data === null) { 
        this.router.navigate(['dashboard']);
      } else {
       this.errorStatus = true;
       this.errorMsj = data.result
      }
    } )
  }
   
  

}
