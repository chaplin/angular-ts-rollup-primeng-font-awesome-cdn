import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { appRouting, appRoutingProviders } from './app.routing';
import { HeaderComponent } from './header/header.component';
// import { MenubarModule, MenuItem } from 'primeng/primeng';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        FormsModule,
                        HttpModule,
                        appRouting
                    ],
                    declarations: [
                        AppComponent,
                        HeaderComponent
                    ],
                    exports: [AppComponent],
                    providers: [
                        appRoutingProviders
                    ],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map