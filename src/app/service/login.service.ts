import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "./cookie.service";
import {AuthenticatedUser} from "./authenticated-user.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private router: Router, private cookieService: CookieService, private authenticatedUser: AuthenticatedUser) {
  }

  login(name: string, password: string, redirect: string) {
    this.httpClient.post<{ token: string }>(`http://localhost:8080/login`, {name, password}).subscribe(
      (body) => {
        this.cookieService.set(body.token)
        this.authenticatedUser.fetch()
        this.router.navigateByUrl(redirect)
      }
    )
  }
}
