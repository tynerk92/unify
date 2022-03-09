import { createFeatureSelector, createSelector } from '@ngrx/store'
import { authFeatureKey, AuthState } from '../reducers/auth.reducer'

export const selectAuthFeature =
  createFeatureSelector<AuthState>(authFeatureKey)

export const selectUserRole = createSelector(
  selectAuthFeature,
  (authState: AuthState) => authState.user!.role
)

export const selectActiveUser = createSelector(
  selectAuthFeature,
  (authState: AuthState) => authState.user!
)
