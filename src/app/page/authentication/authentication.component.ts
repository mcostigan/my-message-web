import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  template: `
    <div class="authentication">
      <app-register></app-register>
      <app-login></app-login>

    </div>
  `,
  styles: [
    `
        .authentication{
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
    `
  ]
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
