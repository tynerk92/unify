import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { UserRole } from '../shared/models/db/user.model'
import { AppState } from '../store'
import { selectUserRole } from '../store/selectors/auth.selectors'

@Component({
  selector: 'unify-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  userRole$: Observable<UserRole>
  userRoles = UserRole

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.userRole$ = this.store.pipe(select(selectUserRole))
  }
}
