import { Component, OnInit } from '@angular/core'
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store'
import { login } from 'src/app/store/auth/auth.actions'
import { LoginService } from './login.service'

@Component({
  selector: 'unify-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: UntypedFormGroup = new UntypedFormGroup({
    username: new UntypedFormControl('', [Validators.required]),
    password: new UntypedFormControl('', [Validators.required]),
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
