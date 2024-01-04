import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DevService } from './dataproviders/dev.service';
import { StorageService } from './dataproviders/storage.service';
import { HttpService } from './dataproviders/http.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { VersionService } from './dataproviders/version/version.service';
import { ProfileService } from './dataproviders/profile/profile.service';
import { NavigationService } from './dataproviders/navigation/navigation.service';
import { AuthorizationInterceptor } from './dataproviders/authorization.interceptor';
import { ToastService } from './dataproviders/toast.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    DevService,
    StorageService,
    VersionService,
    ProfileService,
    NavigationService,
    ToastService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
