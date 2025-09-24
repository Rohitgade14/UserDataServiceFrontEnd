import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginReq } from '../../Models/Interfacess/login-req';
import { ApiServicess } from '../../Servicess/api-servicess';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

 

 // loginForm!: FormGroup;
  loginSucess: Boolean = false;
  private apiServices = inject(ApiServicess);
  private router = inject(Router);
private fb = inject(FormBuilder); 
    loginForm =this.fb.group({
      email:[''],
      password:['']
    });
   
  onLogin() {

    const loginData: LoginReq = this.loginForm.value as LoginReq;
    this.apiServices.loginUser(loginData).subscribe({
      next: (response: any) => {
        this.loginSucess = true;
        console.log('Login Successful',response);
        setTimeout(() => {
          this.router.navigate(['dashboard']);
        }, 2000)
      },
      error: (error) => {
        this.loginSucess = false;
        console.error('Login failed', error);

      }
    })
  }



}
