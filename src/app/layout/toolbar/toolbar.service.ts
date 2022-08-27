import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { logout } from 'src/app/store/auth/auth.actions'
import { AuthState } from 'src/app/store/auth/auth.reducer'

@Injectable({
  providedIn: 'root',
})
export class ToolbarService {
  constructor(private authStore: Store<AuthState>) {}

  logout() {
    this.authStore.dispatch(logout())
  }
}
