import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { User } from '../../../models/db/user.model'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  search(searchTerm: string): Observable<User[]> {
    return this.http.get<User[]>(`/api/user/search?username=${searchTerm}`)
  }
}
