import { Routes } from '@angular/router'
import { LoginComponent } from './views/login/login.component'
import { AdminGuard } from './views/admin/_guards/admin.guard'
import { AuthGuard } from './_guards/auth.guard'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./views/admin/admin.module').then((m) => m.AdminModule),
    canLoad: [AuthGuard, AdminGuard],
  },
]

export default routes
