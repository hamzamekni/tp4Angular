// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component.spec';
import { FormsModule } from '@angular/forms';

// Import the NavbarComponent
@NgModule({
declarations: [
AppComponent,
NavbarComponent,
TaskFormComponent,
TasksListComponent
],
imports: [
    BrowserModule,
    FormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }