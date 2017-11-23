
import {Component, NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'



const authRouting:Routes=[
    {path:'login', component: AuthComponent},
    {path:'register', component: AuthComponent}
    
    ]
@NgModule(
{
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(authRouting)
    ],
    declarations: [
      AuthComponent
      
      ],
      providers: []
})

export class AuthModule
{


}