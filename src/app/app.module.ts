import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { MyTableComponentComponent } from './my-table-component/my-table-component.component';
import { Test4Component } from './my-component/test4/test4.component';
import { Test5Component } from './my-component/test5/test5.component';
import { ParentComponent } from './my-component/parent/parent.component';
import { ChildComponent } from './my-component/child/child.component';
import { ConfirmDialogComponent } from './my-component/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Test6Component } from './my-component/test6/test6.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    SmartTableComponent,
    MyTableComponentComponent,
    Test4Component,
    Test5Component,
    ParentComponent,
    ChildComponent,
    ConfirmDialogComponent,
    Test6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    Ng2SmartTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
