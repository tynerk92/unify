import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { User } from 'src/app/models/db/user.model'
import { searchByUsername } from 'src/app/store/users/users.actions'
import { UserSearchResultsState } from 'src/app/store/users/users.reducer'
import { searchForUserByPartialUsername } from 'src/app/store/users/users.selectors'

@Component({
  selector: 'unify-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>

  private searchTimeout: number = 0

  constructor(private store: Store<UserSearchResultsState>) {}

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(searchForUserByPartialUsername))
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
