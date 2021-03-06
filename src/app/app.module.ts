import { RouterModule } from '@angular/router';
import { CoronaDataService } from './coronadata.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CountUpModule} from 'ngx-countup';
import {ChartsModule} from 'ng2-charts';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountUpModule,
    ChartsModule,
    RouterModule
  ],
  providers: [CoronaDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
