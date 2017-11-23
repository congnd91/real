import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';



@Component({
selector:'app-auth',
templateUrl: 'auth.component.html'

})

export class AuthComponent  implements OnInit
{  


    authType: String = '';
    title: String = 'sdsdss';
    authForm:FormGroup;
    constructor(private fb:FormBuilder,  private route: ActivatedRoute){
    this.authForm=fb.group({
    
   
email:'cpngnd@gmail.com',
password:'',

});

    }

    ngOnInit() {
       
        this.route.url.subscribe(data => {
          // Get the last piece of the URL (it's either 'login' or 'register')
          this.authType = data[data.length - 1].path;
          // Set a title for the page accordingly
          this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
          console.log(data);
          
          // add form control for username if this is the register page
          if (this.authType === 'register') {
           // this.authForm.addControl('username', new FormControl());
           this.authForm.addControl('username', new FormControl('', Validators.required));
        
        }
        });
      }
 


    
    submitForm(){

console.log(this.authForm);

    }

}
