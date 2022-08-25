import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UsersComponent } from './users.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { CreateUserComponent } from './create-user/create-user.component'
import { DialogModule } from '@angular/cdk/dialog'
import { UsersRoutingModule } from './users-routing.module'
import { OverlayModule } from '@angular/cdk/overlay'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [UsersComponent, CreateUserComponent],
  imports: [
    CommonModule,
    SharedModule,
    DialogModule,
    UsersRoutingModule,
    OverlayModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule {}
