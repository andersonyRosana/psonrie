import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user: new FormControl('', Validators.required), 
    password: new FormControl('', Validators.required),
  });

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  onLogin(form:any) {
    this.api.loginByEmail(form).subscribe(data => { console.log("funciona") })
  }

}
