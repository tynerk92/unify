import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'
import { User } from 'src/app/models/db/user.model'
import { UserList, UsersService } from 'src/app/views/admin/users/users.service'
import * as fromUsersActions from './users.actions'

@Injectable()
export class UsersEffects {
  getAllUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUsersActions.getAllUsers),
      switchMap((action) =>
        this.usersService.getAllUsers(action.page, action.perPage).pipe(
          map((data: UserList) =>
            fromUsersActions.getAllUsersSuccess({ data })
          ),
          catchError((error) =>
            of(fromUsersActions.getAllUsersError({ error }))
          )
        )
      )
    )
  })

  searchForUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUsersActions.searchByUsername),
      switchMap((action) =>
        this.usersService.search(action.searchTerm).pipe(
          map((data: UserList) => {
            console.log('The returned search data', data)
            return fromUsersActions.searchByUsernameSuccess({
              data,
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
