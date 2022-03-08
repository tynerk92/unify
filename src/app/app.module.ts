import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './routing/app-routing.module'
import { AppComponent } from './app.component'
import { ToolbarComponent } from './toolbar/toolbar.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { ContentComponent } from './content/content.component'
import { ModalModule } from './shared/ui/modal/modal.module'
import { LoginModule } from './login/login.module'
import { StoreModule } from '@ngrx/store'
import { reducers, metaReducers } from './ngrx/reducers'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { userFeatureKey, userReducer } from './ngrx/reducers/user/user.reducer'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule,
    LoginModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature(userFeatureKey, userReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
