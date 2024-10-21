import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangularComponent } from './rectangular/rectangular.component';
import { CircleComponent } from './circle/circle.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TaskComponent } from './task/task.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';
import { AmazonComponent } from './amazon/amazon.component';
import { Amazon1Component } from './amazon1/amazon1.component';
import { EmployeComponent } from './employe/employe.component';
import { VechicleComponent } from './vechicle/vechicle.component';
import{ HttpClientModule } from '@angular/common/http';
import { BankComponent } from './bank/bank.component';
import { FakeflipkartComponent } from './fakeflipkart/fakeflipkart.component';
import { EmailComponent } from './email/email.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserStudentComponent } from './user-student/user-student.component';
import { VechileDetailsComponent } from './vechile-details/vechile-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNoteFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangularComponent,
    CircleComponent,
    DiceComponent,
    DirectivesComponent,
    PipesComponent,
    TaskComponent,
    FlipkartComponent,
    HigherOrderComponent,
    AmazonComponent,
    Amazon1Component,
    EmployeComponent,
    VechicleComponent,
    BankComponent,
    FakeflipkartComponent,
    EmailComponent,
    CreateVehicleComponent,
    CreateUserComponent,
    UserStudentComponent,
    VechileDetailsComponent
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
