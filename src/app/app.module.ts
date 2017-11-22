import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
 import { SharedModule,HeaderComponent,FooterComponent
 } from './shared';

 const rootRouting:Routes = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent
  
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SharedModule,
    rootRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
