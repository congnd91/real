import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {CommonModule} from '@angular/common';

import { HomeComponent } from './home.component';
import { ErrorComponent } from './error.component';
import { SharedModule } from '../shared'; 

const homeRouting:Routes=[
{path:'', component: HomeComponent}
,
{path:'error',component: ErrorComponent}

]

@NgModule({
    imports: [
      SharedModule,
      RouterModule.forChild(homeRouting)
    ],
    declarations: [
      HomeComponent,ErrorComponent
    ],
    providers: []
  })
  export class HomeModule {}
