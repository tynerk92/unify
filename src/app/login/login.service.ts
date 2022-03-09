import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { Auth } from '../shared/models/app/auth.model'
import { User } from '../shared/models/db/user.model'

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly http: HttpClient) {}

  login(authData: Auth) {
    return of({
      _id: 'fakeUserId',
      username: 'fakeUsername',
    } as User)
  }
}
