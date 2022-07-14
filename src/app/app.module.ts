import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/shared/material/material.module';
import { ListComponent } from './forms/persona/list/list.component';
import { FormComponent } from './forms/persona/form/form.component';
import { EditarComponent } from './forms/persona/editar/editar.component';
import { CrearComponent } from './forms/persona/crear/crear.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    EditarComponent,
    CrearComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
