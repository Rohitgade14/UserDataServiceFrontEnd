import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../Models/Interfacess/user';
import { CommonModule } from '@angular/common';
import { ApiServicess } from '../../Servicess/api-servicess';


@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  register: FormGroup;
  isRegistered = false;
  private apiServices = inject(ApiServicess);
  constructor(private fb: FormBuilder,
    private router: Router) {
    this.register = this.fb.group({
      name: [''],
      email: [''],
      about: [''],
      password: [],
    });
  }

  onSubmit() {
    //const user: User = this.register.value;
    this.apiServices.registerUser(this.register.value).subscribe({
      next: (response) => {
        console.log('Register successful', response);
        this.isRegistered = true;
        this.register.reset();
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2500);
      },
      error: (err) => {
        console.error('Registation failed', err);
      }
    });

  }


}
