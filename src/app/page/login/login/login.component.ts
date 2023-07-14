import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../service/login.service";

@Component({
  selector: 'app-login',
  template: `
    <div class="login">
      <h1>Login</h1>
      <div class="user-name">
        <input [(ngModel)]="username" placeholder="User">
      </div>
      <div class="password">
        <input [(ngModel)]="password" type="password" placeholder="Password">
      </div>
      <div class="submit">
        <button (click)="login()">Login</button>
      </div>
    </div>


  `,
  styles: [
    `
      .login {
        width: max-content;
      }

      input {
        background-color: transparent;
        color: white;
        border-radius: 30px;
        border: 1px solid gray;
        height: 30px;
        margin: 5px;
        padding-left: 25px;
        padding-right: 5px;
      }

      .submit {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 30px;
      }

      .submit button {
        border-radius: 30px;
        background-color: #1982FC;
        color: white;
        border: none;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  username: string = ''
  password: string = ''

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }


  login() {
    this.loginService.login(this.username, this.password, '')
  }

}
