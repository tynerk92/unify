import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { User } from 'src/app/models/db/user.model'
import {
  getAllUsers,
  searchByUsername,
} from 'src/app/store/users/users.actions'
import { UserSearchResultsState } from 'src/app/store/users/users.reducer'
import {
  allUsers,
  searchForUserByPartialUsername,
} from 'src/app/store/users/users.selectors'
import {
  CreateUserComponent,
  CreateUserFormData,
} from './create-user/create-user.component'
import { Dialog } from '@angular/cdk/dialog'

/*
  Notes:

  When the page loads, we should display the first X number of users, paginated
  If the search bar is empty, same

  If there is a search, only display those users
*/

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
    this.store.dispatch(getAllUsers({ page: 0, perPage: 10 }))
    this.users$ = this.store.pipe(select(allUsers))
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
