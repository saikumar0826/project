import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
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
import { BankComponent } from './bank/bank.component';
import { FakeflipkartComponent } from './fakeflipkart/fakeflipkart.component';
import { EmailComponent } from './email/email.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserStudentComponent } from './user-student/user-student.component';
import { VechileDetailsComponent } from './vechile-details/vechile-details.component';

 
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard], component:DashboardComponent, children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangular',component:RectangularComponent},
    {path:'circle',component:CircleComponent},
    {path:'dice',component:DiceComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'pipes',component:PipesComponent},
    {path:'task',component:TaskComponent},
    {path:'flipcart',component:FlipkartComponent},
    {path:'higher-order',component:HigherOrderComponent},
    {path:'amazon',component:AmazonComponent},
    {path:'amazon1',component:Amazon1Component},
    {path:'employe',component:EmployeComponent},
    {path:'vechicle',component:VechicleComponent},
    {path:'bank',component:BankComponent},
    {path:'fakeflipkart',component:FakeflipkartComponent},
    {path:'email',component:EmailComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'user-student',component:UserStudentComponent},
    {path:'vechicle-details/:id',component:VechileDetailsComponent}

  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PageNoteFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
