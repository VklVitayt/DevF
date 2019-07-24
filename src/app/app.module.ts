import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {CarouselModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeComponent} from './components/addEmployee/employee.component';
import {HttpService} from './services/http/http.service';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {ShowEmployeeComponent} from './components/showEmployees/showEmployee.component';
import {HomeComponent} from './components/home/home.component';


const appRouter: Routes = [
    {path: '', component: HomeComponent},
    {path: 'employees', component: EmployeeComponent},
    {path: 'showEmployees', component: ShowEmployeeComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EmployeeComponent,
        ShowEmployeeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        TooltipModule.forRoot(),
        RouterModule.forRoot(appRouter),
        CarouselModule,
        ModalModule,
        NgbModule, NgbPaginationModule, NgbAlertModule,
        HttpClientModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

