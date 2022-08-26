import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { User } from '../../../models/db/user.model'
import { CreateUserFormData } from './create-user/create-user.component'

export interface UserList {
  users: User[]
  count: number
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers(page: number, perPage: number): Observable<UserList> {
    return this.http.get<UserList>(
      `/api/user/list?page=${page}&perPage=${perPage}`
    )
  }

  search(searchTerm: string): Observable<UserList> {
    return this.http.get<UserList>(`/api/user/search?username=${searchTerm}`)
  }

  createUser(data: CreateUserFormData) {
    return this.http.post('/api/user/create', { ...data })
  }
}
