import {Injectable} from '@angular/core';
import {User} from 'src/model/model';
import {HttpWrapperService} from "./http-wrapper.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpWrapper: HttpWrapperService) {
  }

  getAuthenticatedUser() {
    return this.httpWrapper.get<User>(`user`, true)
  }

}
