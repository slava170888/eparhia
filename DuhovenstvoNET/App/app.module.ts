import { NgModule }      from '@angular/core'; //Used for module component
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular/material'; 
import { DataTableModule } from 'angular-2-data-table';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PersonComponent } from './person/person.component';
import { PersonCardComponent } from './person-card/person-card.component';

import 'hammerjs';

//Importing my services
import { PersonService } from './shared/person/person.service';
import { ConfigService } from './shared/api_settings/config.service';

@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    DataTableModule,
    MaterialModule 
   ],
  declarations: [
    AppComponent,
    HelloComponent,
    PersonComponent,
    PersonCardComponent
    ],
  bootstrap:    [ AppComponent ],
  providers: [
    PersonService,
    ConfigService
    ]
})

export class AppModule { }