import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-register',
  template: `
    <div class="user-input-form">
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
