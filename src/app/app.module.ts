import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './routing/app-routing.module'
import { AppComponent } from './app.component'
import { ToolbarComponent } from './toolbar/toolbar.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { ContentComponent } from './content/content.component'
import { ModalModule } from './shared/modal/modal.module'
import { LoginModule } from './login/login.module'
import { StoreModule } from '@ngrx/store'
import { reducers, metaReducers } from './store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { EffectsModule } from '@ngrx/effects'
import { AuthEffects } from './store/effects/auth.effects'
import { DashboardModule } from './content/dashboard/dashboard.module'

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
    DashboardModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    // StoreModule.forFeature(userFeatureKey, userReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
