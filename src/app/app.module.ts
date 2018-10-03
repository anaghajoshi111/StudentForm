import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';

import {AccountsService} from './accounts.service';
import {LoggingService} from './logging.service';
import {EmployeeListService} from './employeeList.service' ;

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TestComponent } from './test/test.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { CardthumbnailsComponent } from './cardthumbnails/cardthumbnails.component';
import { FooterComponent } from './footer/footer.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { UserComponent } from './user/user.component';
import {Custom_Directive} from './custom_directive/custom_directive';
import { CitiesComponent } from './cities/cities.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccComponent } from './acc/acc.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesTechnologyComponent } from './employees-technology/employees-technology.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {RouterModule} from '@angular/router';
import { SalaryCalculatorPipe } from './salary-calculator.pipe';
import { AgePipe } from './age.pipe';
import { FirstLetterCapitalPipe } from './first-letter-capital.pipe';
import { FormComponent } from './form/form.component';
import { Form1Component } from './form1/form1.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TestComponent,
    TitlebarComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    CardthumbnailsComponent,
    FooterComponent,
    DatabindingComponent,
    CalculatorComponent,
    DirectivesComponent,
    UserComponent,
    Custom_Directive,
    CitiesComponent,
    AccountComponent,
    NewAccountComponent,
    AccComponent,
    EmployeesComponent,
    EmployeesTechnologyComponent,
    ServicesComponent,
    HomeComponent,
    ContactComponent,
    AboutusComponent,
    SalaryCalculatorPipe,
    AgePipe,
    FirstLetterCapitalPipe,
    FormComponent,
    Form1Component

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        {path:"home", component:HomeComponent},
        {path:"aboutus", component:AboutusComponent},
        {path:"contact", component:ContactComponent},
        {path:"services", component:ServicesComponent}
      ])

  ],
  providers: [AccountsService, LoggingService,EmployeeListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
