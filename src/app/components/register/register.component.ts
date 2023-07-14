import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-register',
  template: `
    <div class="auth-pane">
      <h1>Register</h1>
      <div class="user-name">
        <input [(ngModel)]="username" placeholder="User">
      </div>
      <div class="password">
        <input [(ngModel)]="password" type="password" placeholder="Password">
      </div>
      <div class="submit">
        <button (click)="register()">Register</button>
      </div>
    </div>


  `,
  styles: [
    `
      .auth-pane {
        width: max-content;
      }

      .auth-pane input {
        background-color: transparent;
        color: white;
        border-radius: 30px;
        border: 1px solid gray;
        height: 30px;
        margin: 5px;
        padding-left: 25px;
        padding-right: 5px;
      }

      .auth-pane .submit {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 30px;
      }

      .auth-pane .submit button {
        border-radius: 30px;
        background-color: #1982FC;
        color: white;
        border: none;
      }
    `
  ]
})
export class RegisterComponent implements OnInit {
  username: string = ''
  password: string = ''

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.username, this.password)
  }

}
