import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Auth } from '../shared/models/app/auth.model'
import { User } from '../shared/models/db/user.model'

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  login(authData: Auth): Observable<User> {
    return this.http.post<User>(
      `/api/user/login?username=${authData.username}&password=${authData.password}`,
      null
    )
  }
}
