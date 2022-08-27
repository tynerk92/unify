import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { TeamMemberDashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  {
    path: 'dashboard',
    component: TeamMemberDashboardComponent,
    canActivate: [],
  },
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TeamMemberRoutingModule {}
