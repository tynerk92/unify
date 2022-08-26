import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from 'src/app/_guards/auth.guard'
import { AdminGuard } from './_guards/admin.guard'
import { TeamsComponent } from './teams/teams.component'
import { AdminDashboardComponent } from 'src/app/views/admin/dashboard/admin-dashboard.component'
import { UsersComponent } from './users/users.component'

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./teams/teams.module').then((m) => m.TeamsModule),
    canLoad: [AuthGuard, AdminGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
    canLoad: [AuthGuard, AdminGuard],
  },
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminRoutingModule {}
