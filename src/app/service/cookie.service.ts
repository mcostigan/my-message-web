import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  private ACCESS_TOKEN_KEY = 'access_token'

  constructor() {
  }

  get(): string {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${this.ACCESS_TOKEN_KEY}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || '';
    }
    return '';
  }

  set(val: string) {
    document.cookie = `${this.ACCESS_TOKEN_KEY}=${val}`
  }
}
