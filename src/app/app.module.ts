import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ModalModule } from './shared/modal/modal.module'
import { StoreModule } from '@ngrx/store'
import { reducers, metaReducers } from './store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { EffectsModule } from '@ngrx/effects'
import { AuthEffects } from './store/effects/auth.effects'
import { RouterModule } from '@angular/router'
import { ToolbarComponent } from './layout/toolbar/toolbar.component'
import { ContentComponent } from './layout/content/content.component'
import { LoginModule } from './views/login/login.module'
import { SidebarModule } from './layout/sidebar/sidebar.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import AppRoutes from './app.routes'

@NgModule({
  declarations: [AppComponent, ToolbarComponent, ContentComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule,
    LoginModule,
    SidebarModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    RouterModule.forRoot(AppRoutes),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AuthEffects]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
