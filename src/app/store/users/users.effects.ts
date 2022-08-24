import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'
import { User } from 'src/app/models/db/user.model'
import { UsersService } from 'src/app/views/admin/users/users.service'
import * as fromUsersActions from './users.actions'

@Injectable()
export class UsersEffects {
  searchForUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUsersActions.searchByUsername),
      switchMap((action) =>
        this.usersService.search(action.searchTerm).pipe(
          map((users: User[]) => {
            console.log('Found users:', users)
            return fromUsersActions.searchByUsernameSuccess({
              data: users,
            })
          }),
          catchError((error) =>
            of(fromUsersActions.searchByUsernameError({ error }))
          )
        )
      )
    )
  })

  constructor(
    private actions$: Actions,
    private readonly usersService: UsersService
  ) {}
}
