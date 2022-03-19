import { Routes } from '@angular/router'
import { DashboardComponent } from '../content/dashboard/dashboard.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../sidebar/sidebar.module').then((m) => m.SidebarModule),
  },
]

export default routes
