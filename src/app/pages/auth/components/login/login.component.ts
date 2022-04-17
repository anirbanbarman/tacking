import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { failMessage, successMessage } from './../../../../utills/toaster';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any = {
    email: "",
    password: ""

  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    var random = Math.floor(Math.random() * 5) + 0;
    var bigSize = [
      "url(/assets/images/1.jpg)",
      "url(/assets/images/2.jpg)",
      "url(/assets/images/3.jpg)",
      "url(/assets/images/4.jpg)",
      "url(/assets/images/5.jpg)",

    ];
    (document.getElementById("right") as HTMLElement).style.backgroundImage = bigSize[1];

  }

  logIn(form: NgForm) {
    let payload = new FormData();
    for (var key in this.loginForm) {
      payload.append(key,this.loginForm[key]);

    }

    this.authService.adminLogin(payload).subscribe((response:any) => {
      if (response && response?.status === 200) {
        localStorage.setItem('token', response.data.token);
        successMessage("login successful");
        this.router.navigate(['dashboard'])


      }
      else{
        failMessage(response?.data?.message)
      }

    },
      error => {

      });



  }


}
