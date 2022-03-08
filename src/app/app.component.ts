import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { USER_STORAGE_KEY } from './ngrx/actions/user/user.actions'
import { User } from './ngrx/models/user'
import { UserState } from './ngrx/reducers/user/user.reducer'
import { selectActiveUser } from './ngrx/selectors/user/user.selectors'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  activeUser$: Observable<User>
  userLoggedIn: boolean = false

  constructor(private readonly userStore: Store<UserState>) {
    this.activeUser$ = this.userStore.pipe(select(selectActiveUser))

    this.activeUser$.subscribe((activeUser) => {
      this.userLoggedIn = Boolean(
        localStorage.getItem(USER_STORAGE_KEY) || (activeUser && activeUser._id)
      )
    })
  }

  ngOnInit(): void {}
}
