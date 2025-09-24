// import { Component, inject } from '@angular/core';
// import { LoginService } from '../../Servicess/login-service';
// import { LoginReq } from '../../Models/Interfacess/login-req';
// import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-login-temp',
//   imports: [FormsModule],
//   templateUrl: './login-temp.html',
//   styleUrl: './login-temp.css'
// })
// export class LoginTemp {
//       userLogin:Boolean=false;
//     errorMessage:string='';
//     private loginService=inject(LoginService);
//     private router=inject(Router);

//   login: LoginReq = {
//     email: '',
//     password: ''
//   }

//   onLogin() {
//       console.log("User Submiting The Form",this.login);
//       this.loginService.userLogin(this.login).subscribe({
//         next:(res:any)=>{
//            console.log('This User Login Succfully',res);
//            this.userLogin=true;
//            this.errorMessage='Login Succesful';
//            localStorage.setItem("UserData",JSON.stringify(res.data))
//            this.router.navigate(['user-list']);
 
           
//         }
//       })
//   }

// }
