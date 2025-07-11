import { enableProdMode, importProvidersFrom } from "@angular/core";


import { environment } from "./environments/environment";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { StatusBar } from "@awesome-cordova-plugins/status-bar/ngx";
import { SplashScreen } from "@awesome-cordova-plugins/splash-screen/ngx";
import { HttpService } from "./app/dataproviders/http.service";
import { DevService } from "./app/dataproviders/dev.service";
import { StorageService } from "./app/dataproviders/storage.service";
import { VersionService } from "./app/dataproviders/version/version.service";
import { ProfileService } from "./app/dataproviders/profile/profile.service";
import { NavigationService } from "./app/dataproviders/navigation/navigation.service";
import { ToastService } from "./app/dataproviders/toast.service";
import { RouteReuseStrategy } from "@angular/router";
import { IonicRouteStrategy, IonicModule } from "@ionic/angular";
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { AuthorizationInterceptor } from "./app/dataproviders/authorization.interceptor";
import { IonicStorageModule } from "@ionic/storage-angular";
import { AppRoutingModule } from "./app/app-routing.module";
import { AppComponent } from "./app/app.component";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule),
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
        provideHttpClient(withInterceptorsFromDi()),
    ]
})
  .catch(err => console.log(err));
