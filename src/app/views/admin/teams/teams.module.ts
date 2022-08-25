import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TeamsComponent } from './teams.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { ReactiveFormsModule } from '@angular/forms'
import { TeamsRoutingModule } from './teams-routing.module'

@NgModule({
  declarations: [TeamsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    TeamsRoutingModule,
  ],
})
export class TeamsModule {}
