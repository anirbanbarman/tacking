import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    private router:Router
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

  logIn() {

    this.authService.adminLogin(this.loginForm).subscribe((response) => {
      console.log("login successful")
    },
      error => {
        console.log(error)
      });

this.router.navigate(['dashboard'])

  }


}
