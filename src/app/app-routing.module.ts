import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MyComponentComponent } from './my-component/my-component.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MyTableComponentComponent } from './my-table-component/my-table-component.component';
import { Test5Component } from './my-component/test5/test5.component';
import { Test6Component } from './my-component/test6/test6.component';
import { Test7Component } from './my-component/test7/test7.component';
import { PatientComponent } from './patient/patient.component';


const routes: Routes = [
  
  { path: '', component: HomeComponent },
  {path: 'page-1', component: MyComponentComponent },
  { path: 'page-2', component: AboutComponent },
  { path: 'page-3', component: ContactComponent }, // Define the route here
  { path: 'page-4', component: MyTableComponentComponent }, // Define the route here
  { path: 'page-5', component: Test5Component }, // Define the route here
  { path: 'page-6', component: Test6Component }, // Define the route here
  { path: 'page-7', component: PatientComponent },
  // You can add more routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
