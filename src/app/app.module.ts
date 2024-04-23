import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnCrudComponent } from './learn-crud/learn-crud.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGetdataComponent } from './form-getdata/form-getdata.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';
import { TableEditCrudComponent } from './table-edit-crud/table-edit-crud.component';
import { ModalComponent } from './modal/modal.component';
import { DemoComponent } from './demo/demo.component';
import { LodashComponent } from './lodash/lodash.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnCrudComponent,
    FormGetdataComponent,
    LearnRxjsComponent,
    TableEditCrudComponent,
    ModalComponent,
    DemoComponent,
    LodashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
