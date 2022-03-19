import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavItemComponent } from './nav-item/nav-item.component'
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component'
import { SidebarComponent } from './sidebar.component'
import { RouterModule } from '@angular/router'
import AdminRoutes from '../routing/admin.routes'

@NgModule({
  declarations: [SidebarComponent, NavItemComponent, AdminNavigationComponent],
  imports: [CommonModule, RouterModule.forChild(AdminRoutes)],
  exports: [SidebarComponent],
})
export class SidebarModule {}
