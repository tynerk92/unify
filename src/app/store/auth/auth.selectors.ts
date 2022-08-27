import { createFeatureSelector, createSelector } from '@ngrx/store'
import { User, UserRole } from 'src/app/models/db/user.model'
import { authFeatureKey, AuthState } from './auth.reducer'

export const selectAuthFeature =
  createFeatureSelector<AuthState>(authFeatureKey)

export const selectUserRole = createSelector(
  selectAuthFeature,
  (authState: AuthState): UserRole | undefined => authState.user?.role
)

export const selectActiveUser = createSelector(
  selectAuthFeature,
  (authState: AuthState): User => authState.user!
)

export const userLoggedIn = createSelector(
  selectAuthFeature,
  (authState: AuthState): boolean =>
    Boolean(authState.user && authState.user._id)
)

export const hasAdminRole = createSelector(
  selectAuthFeature,
  (authState: AuthState): boolean => authState.user!.role === UserRole.ADMIN
)
