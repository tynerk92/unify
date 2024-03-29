import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { User } from './models/db/user.model'
import { AppState } from './store'
import { selectActiveUser } from './store/auth/auth.selectors'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  activeUser$: Observable<User>
  userLoggedIn: boolean = false

  constructor(private readonly userStore: Store<AppState>) {
    this.activeUser$ = this.userStore.pipe(select(selectActiveUser))

    this.activeUser$.subscribe((activeUser: User) => {
      this.userLoggedIn = Boolean(activeUser && activeUser._id)
    })
  }

  ngOnInit(): void {}
}
