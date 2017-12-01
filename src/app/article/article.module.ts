import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {CommonModule} from '@angular/common';

import { ArticleComponent } from './article.component';

import { BrowserModule } from '@angular/platform-browser';

const homeRouting:Routes=[
{path:'article/:id', component:ArticleComponent}

]

@NgModule({
    imports: [
      RouterModule.forChild(homeRouting),
      BrowserModule,
     
    ],
    declarations: [
        ArticleComponent
    ],
    providers: []
  })
  export class ArticleModule {}
