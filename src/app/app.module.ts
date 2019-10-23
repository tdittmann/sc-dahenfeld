import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {IonicStorageModule} from '@ionic/storage';
import {DevService} from './dataproviders/dev.service';
import {StorageService} from './dataproviders/storage.service';
import {SuperTabsModule} from '@ionic-super-tabs/angular';
import {HttpService} from './dataproviders/http.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppVersion} from '@ionic-native/app-version/ngx';
import {VersionService} from './dataproviders/version/version.service';
import {ErrorService} from './presentation/shared/error/error.service';
import {LoadingService} from './presentation/shared/loading/loading.service';
import {LoadingHttpInterceptor} from './presentation/shared/loading/loading.http.interceptor';
import {ProfileService} from './dataproviders/profile/profile.service';

// TODO tdit0703: DateTime's immer als UTC und in Ionic die Zeitzone des Users auslesen?
// TODO tdit0703: App Struktur anpassen?
// TODO tdit0703: Tabs??? Funktionieren nicht zuverlässig... Evtl. doch Ionic Tabs?
// TODO tdit0703: Profile Page
// TODO tdit0703: Jugend-Page
// TODO tdit0703: Kalender: Spiele nur X Tage / Wochen in die Zukunft?
@NgModule({
    declarations: [
        AppComponent
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        SuperTabsModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        HttpService,
        DevService,
        StorageService,
        AppVersion,
        VersionService,
        ErrorService,
        LoadingService,
        ProfileService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: LoadingHttpInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
