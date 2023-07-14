import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "./cookie.service";
import {AuthenticatedUser} from "./authenticated-user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router, private cookieService: CookieService, private authenticatedUser: AuthenticatedUser) {
  }

  login(name: string, password: string, redirect: string) {
    this.httpClient.post<{ token: string }>(`http://localhost:8080/login`, {name, password}).subscribe(
      (resp) => {
        this.setCookieAndRedirectHome(resp.token)
      }
    )
  }

  register(name: string, password: string) {
    this.httpClient.post<{token: string}>(`http://localhost:8080/register`, {name, password}).subscribe(
      (resp) =>{
        this.setCookieAndRedirectHome(resp.token)
      }
    )
  }

  private setCookieAndRedirectHome(token: string){
    this.cookieService.set(token)
    this.authenticatedUser.fetch()
    void this.router.navigateByUrl('')
  }
}
