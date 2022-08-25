import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { User } from 'src/app/models/db/user.model'
import { searchByUsername } from 'src/app/store/users/users.actions'
import { UserSearchResultsState } from 'src/app/store/users/users.reducer'
import { searchForUserByPartialUsername } from 'src/app/store/users/users.selectors'
import {
  CreateUserComponent,
  CreateUserFormData,
} from './create-user/create-user.component'
import { Dialog } from '@angular/cdk/dialog'

@Component({
  selector: 'unify-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>

  private searchTimeout: number = 0

  constructor(
    private store: Store<UserSearchResultsState>,
    private dialog: Dialog
  ) {}

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(searchForUserByPartialUsername))
  }

  openAddUserDialog(): void {
    const addUserDialog =
      this.dialog.open<CreateUserFormData>(CreateUserComponent)

    addUserDialog.closed.subscribe((result: CreateUserFormData | undefined) => {
      if (!result) return

      // TODO send http request to add new user here
    })
  }

  searchByUsername(keyUpEvent: Event) {
    const searchTerm = (keyUpEvent.target as HTMLInputElement).value

    this.debounceSearch(searchTerm)
  }

  private debounceSearch(searchTerm: string) {
    clearTimeout(this.searchTimeout)
    this.searchTimeout = window.setTimeout(() => {
      if (searchTerm) {
        this.store.dispatch(searchByUsername({ searchTerm }))
      } else {
        // TODO if there is nothing in the search input, what do we do?
      }
    }, 500)
  }
}
