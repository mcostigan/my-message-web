import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "./cookie.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {
  private baseUrl: string = 'http://localhost:8080'

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
  }

  get<T>(endpoint: string, withBearerToken: boolean): Observable<T> {
    const headers = this.getHeaders(withBearerToken)
    return this.httpClient.get<T>(`${this.baseUrl}/${endpoint}`, {headers})
  }

  post<T>(endpoint: string, body: object, withBearerToken: boolean): Observable<T> {
    const headers = this.getHeaders(withBearerToken)
    return this.httpClient.post<T>(`${this.baseUrl}/${endpoint}`, body, {headers})
  }

  private getHeaders(withBearerToken: boolean): HttpHeaders {
    let headers = new HttpHeaders()
    if (withBearerToken) {
      headers = headers.set("Authorization", `Bearer ${this.cookieService.get()}`)
    }
    return headers
  }


}
