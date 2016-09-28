import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {} from 'reflect-metadata';

import { AppComponent }   from './app.component';
import { appRouting, appRoutingProviders } from './app.routing';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

// import { MenubarModule, MenuItem } from 'primeng/primeng';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        appRouting

        // MenubarModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent
    ],
    exports: [AppComponent],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}