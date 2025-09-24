import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {


  private router = inject(Router);
  onLogout() {
    localStorage.clear();
    //localStorage.removeItem('userId');
  //   //localStorage.removeItem("UserData");
  //   // localStorage.removeItem('emailId');
  //   //localStorage.removeItem('token');
  //   //localStorage.removeItem('refreshToken');
 
    this.router.navigate(['login']);
  }

}
