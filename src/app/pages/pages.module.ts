import { NgModule } from '@angular/core';

// COMPONENTS
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphsComponent } from './graphs/graphs.component';
import { PagesComponent } from './pages.component';

// MODULES
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
// TEMPORAL
import { IncrementComponent } from '../components/increment/increment.component';
import { DonnutGraphComponent } from './components/donnut-graph/donnut-graph.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraphsComponent,
        IncrementComponent,
        DonnutGraphComponent,
        AccountSettingsComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        PAGES_ROUTES,
        ChartsModule
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        GraphsComponent,
    ],
    providers: [],
    bootstrap: []
})

export class PagesModule { }
