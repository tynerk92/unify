import { Routes } from '@angular/router'
import { AuthGuard } from 'src/app/_guards/auth.guard'
import { TeamsComponent } from './teams/teams.component'
import { DashboardComponent } from '../../content/dashboard/dashboard.component'
import { AdminGuard } from './_guards/admin.guard'

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'teams',
    component: TeamsComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
]

export default routes
