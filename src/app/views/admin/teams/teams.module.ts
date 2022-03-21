import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TeamsComponent } from './teams.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [TeamsComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
})
export class TeamsModule {}
