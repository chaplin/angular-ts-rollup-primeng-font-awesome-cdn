import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
var appRoutes = [
    { path: 'header', component: HeaderComponent },
    { path: '', component: HeaderComponent }
];
export var appRoutingProviders = [];
export var appRouting = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map