import {Injectable} from '@angular/core';
import {User} from "../../model/model";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedUser {
  private user: User | undefined

  constructor(private userService: UserService) {
    this.fetch()
  }

  fetch() {
    this.userService.getAuthenticatedUser().toPromise().then(
      (val: User | undefined) => {
        this.user = val
      }
    )
  }

  get(): User | undefined {
    return this.user
  }
}
