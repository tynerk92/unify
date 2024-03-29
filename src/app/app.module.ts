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
import { AuthEffects } from './store/auth/auth.effects'
import { RouterModule } from '@angular/router'
import { ToolbarComponent } from './layout/toolbar/toolbar.component'
import { ContentComponent } from './layout/content/content.component'
import { LoginModule } from './views/login/login.module'
import { SidebarModule } from './layout/sidebar/sidebar.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import AppRoutes from './app.routes'
import { TeamsEffects } from './store/teams/teams.effects'
import { UsersEffects } from './store/users/users.effects'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { OverlayModule } from '@angular/cdk/overlay'

import {
  faFilter,
  faUserPlus,
  faCircleUser,
  faGear,
  faArrowRightFromBracket,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons'

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
    EffectsModule.forRoot([AuthEffects, TeamsEffects, UsersEffects]),
    BrowserAnimationsModule,
    FontAwesomeModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(fontLibrary: FaIconLibrary) {
    fontLibrary.addIcons(
      faFilter,
      faUserPlus,
      faCircleUser,
      faGear,
      faArrowRightFromBracket,
      faCirclePlus
    )
  }
}
