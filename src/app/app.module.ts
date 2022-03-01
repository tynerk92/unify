import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './routing/app-routing.module'
import { AppComponent } from './app.component'
import { ToolbarComponent } from './toolbar/toolbar.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    ContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
