import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { TeamMemberDashboardComponent } from './dashboard/dashboard.component'
import { BoardComponent } from './board/board.component'

export const teamMemberRoutes: Routes = [
  {
    path: 'dashboard',
    component: TeamMemberDashboardComponent,
    canActivate: [],
    data: {
      navigationLabel: 'Dashboard',
    },
  },
  {
    path: 'board',
    component: BoardComponent,
    canActivate: [],
    data: {
      navigationLabel: 'Board',
    },
  },
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(teamMemberRoutes)],
})
export class TeamMemberRoutingModule {}
