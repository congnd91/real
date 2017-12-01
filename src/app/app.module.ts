import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders  } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';
//import { AuthComponent } from './auth/auth.component';
 import { SharedModule,HeaderComponent,FooterComponent
 } from './shared';



 const rootRouting:Routes = [

  {path:'', redirectTo: '', pathMatch: 'full'}
 ]

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent,//AuthComponent
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    ArticleModule,
    AuthModule,
    SharedModule,
    RouterModule.forRoot(rootRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
