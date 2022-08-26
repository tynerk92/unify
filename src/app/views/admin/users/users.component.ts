import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { User } from 'src/app/models/db/user.model'
import {
  getAllUsers,
  searchByUsername,
} from 'src/app/store/users/users.actions'
import { UserSearchResultsState } from 'src/app/store/users/users.reducer'
import { allUsers } from 'src/app/store/users/users.selectors'
import {
  CreateUserComponent,
  CreateUserFormData,
} from './create-user/create-user.component'
import { Dialog } from '@angular/cdk/dialog'
import { ListFilterComponent } from 'src/app/shared/lists/list/list-filter/list-filter.component'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { UsersService } from './users.service'

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
  totalUsers$: number
  faFilter = faFilter

  private searchTimeout: number = 0

  constructor(
    private store: Store<UserSearchResultsState>,
    private dialog: Dialog,
    private usersService: UsersService
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

      this.usersService.createUser(result).subscribe((res) => console.log(res))
    })
  }

  openFilterDialog(): void {
    const filterDialog = this.dialog.open(ListFilterComponent)
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
