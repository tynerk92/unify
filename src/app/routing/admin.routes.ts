import { Routes } from '@angular/router'
import { TeamsComponent } from '../content/admin/teams/teams.component'
import { DashboardComponent } from '../content/dashboard/dashboard.component'

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent,
  },
]

export default routes
