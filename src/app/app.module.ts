import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
//import { AuthComponent } from './auth/auth.component';
 import { SharedModule,HeaderComponent,FooterComponent
 } from './shared';



 const rootRouting:Routes = RouterModule.forRoot([], { useHash: false });

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent,//AuthComponent
  
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AuthModule,
    SharedModule,
    rootRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
