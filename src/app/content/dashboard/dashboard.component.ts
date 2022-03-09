import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { UserRole } from 'src/app/shared/models/db/user.model'
import { AppState } from 'src/app/store'
import { selectUserRole } from 'src/app/store/selectors/auth.selectors'

@Component({
  selector: 'unify-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userRole$: Observable<UserRole>
  userRoles = UserRole

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.userRole$ = this.store.pipe(select(selectUserRole))
  }
}
