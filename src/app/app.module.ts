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
import {HttpClientModule} from '@angular/common/http';
import {AppVersion} from '@ionic-native/app-version/ngx';
import {VersionService} from './dataproviders/version/version.service';
import {ErrorService} from './presentation/shared/error/error.service';

// TODO tdit0703: Loading & Error Sites (https://medium.com/@zeljkoradic/loader-bar-on-every-http-request-in-angular-6-60d8572a21a9)
// TODO tdit0703: DateTime's immer als UTC und in Ionic die Zeitzone des Users auslesen?
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
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
