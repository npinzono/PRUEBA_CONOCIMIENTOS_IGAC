import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarModule } from "primeng/toolbar";
import { UsersComponent } from './users/users.component';
import { AppRoutes } from './app.routes';
import { LoginComponent } from './login/login.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {TableModule} from 'primeng/table';
import {BadgeModule} from 'primeng/badge';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { MessageService } from "primeng/api"

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    AppRoutes,
    AppRoutingModule,
    BadgeModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    ConfirmDialogModule,
    DropdownModule,
    DialogModule,
    HttpClientModule,
    CardModule,
    FormsModule,
    InputTextModule,
    TableModule,
    ToastModule,
    ToolbarModule
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
