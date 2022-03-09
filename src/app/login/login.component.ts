import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { AppState } from '../store'
import { login } from '../store/actions/auth.actions'
import { LoginService } from './login.service'

@Component({
  selector: 'unify-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(
    private readonly loginService: LoginService,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  get fields() {
    return this.loginFormGroup.controls
  }

  onSubmit() {
    this.store.dispatch(
      login({
        data: {
          username: this.fields.username.value,
          password: this.fields.password.value,
        },
      })
    )
  }
}
