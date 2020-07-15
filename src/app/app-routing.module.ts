import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',redirectTo:'home-component',pathMatch:'full'
  },
  {
    path:'home-component',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  //providers: [CoronaDataService],
})
export class AppRoutingModule { }
