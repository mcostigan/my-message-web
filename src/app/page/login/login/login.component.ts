import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../service/login.service";

@Component({
  selector: 'app-login',
  template: `
    <input [(ngModel)]="username">
    <button (click)="login()">Login</button>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  username: string = ''

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }


  login() {
    this.loginService.login(this.username, 'password', '')
  }

}
