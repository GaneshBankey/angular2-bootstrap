import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRouterModule } from './_config/app.router.module';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { AlertComponent } from './_directives/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './_login/login.component';

import { AppComponent }  from './app.component';

import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_service/authentication.service';
import { AlertService } from './_service/alert.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRouterModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AlertComponent,
        LoginComponent,
        DashboardComponent
    ],
    providers: [
        AlertService,
        AuthGuard,
        AuthenticationService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
