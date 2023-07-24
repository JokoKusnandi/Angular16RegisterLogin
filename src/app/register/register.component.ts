import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  ngOnInit(): void {
  }

  onSubmit():void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe(
      // data=>{
      //   console.log(data);
      //   this.isSuccessful=true;
      //   this.isSignUpFailed=false;
      // },
      // err=>{
      //   this.errorMessage=err.error.message;
      //   this.isSignUpFailed=true;
      // }

      //new version angular Rxjs
      {
        next: (data)=>{console.log(data);this.isSuccessful=true;this.isSignUpFailed=false;},
        error: (err)=>{console.log("error");this.errorMessage=err.error.message;this.isSignUpFailed=true;}
        //complete: () => { console.info('complete') }
      }
    );
  }
}
