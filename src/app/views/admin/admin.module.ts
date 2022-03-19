import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import AdminRoutes from './admin.routes'

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(AdminRoutes)],
})
export class AdminModule {}
