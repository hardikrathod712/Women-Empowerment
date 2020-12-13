import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/login';
import { NgoAuthService } from 'src/app/services/ngoAuth.service';

@Component({
  selector: 'app-ngo-login',
  templateUrl: './ngo-login.component.html',
  styleUrls: ['./ngo-login.component.css']
})
export class NgoLoginComponent implements OnInit {

  error: boolean;
  message: string;
  loginForm: FormGroup;
  emailControl: FormControl;
  passwordControl: FormControl;
  submitted: boolean = false;
  model: ILogin = { email: "nikita@gmail.com", password: "12345" };
  returnUrl: string;

  constructor(formBuilder: FormBuilder, private router: Router,
    private ngoAuthService: NgoAuthService) {

    this.passwordControl = new FormControl("", Validators.required);
    this.emailControl = new FormControl("", Validators.required);

    this.loginForm = formBuilder.group({
      // each form control needs to be provided an id
      "email": this.emailControl,
      "password": this.passwordControl
    });

    this.error = false;
    this.returnUrl = '/ngo/statusNGO';
    this.ngoAuthService.logout();
  }

  ngOnInit(): void {
  }

  get f() { return this.loginForm.controls; }

  onLoginsubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    else {
      if (this.f.email.value == this.model.email && this.f.password.value == this.model.password) {
        console.log("Login successful");
        this.ngoAuthService.save(this.f.email.value);
        this.router.navigate([this.returnUrl]);
      }
      else {
        this.message = "Please check your userid and password";
      }
    }
  }
}
