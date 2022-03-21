import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavItemComponent } from './nav-item/nav-item.component'
import { SidebarComponent } from './sidebar.component'
import { RouterModule } from '@angular/router'
import { AdminNavigationComponent } from 'src/app/views/admin/navigation/admin-navigation.component'

@NgModule({
  declarations: [SidebarComponent, NavItemComponent, AdminNavigationComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
