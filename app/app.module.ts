import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2SearchPipeModule}from 'ng2-search-filter';
 import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { HttpModule } from '@angular/http';
import {TransformerService} from './transformer/transformer.service';
import { AppComponent } from './app.component';
import { TransformerComponent } from './transformer/transformer.component';
import { DatePipe } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TransformerComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularMultiSelectModule,
    
    FormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
   NgxPaginationModule,
   HttpModule,
   ReactiveFormsModule,
   BrowserAnimationsModule
  ],
  providers: [TransformerService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }