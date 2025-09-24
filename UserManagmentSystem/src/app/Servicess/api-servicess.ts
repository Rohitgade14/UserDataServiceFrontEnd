import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginReq } from '../Models/Interfacess/login-req';
import { User } from '../Models/Interfacess/user';

@Injectable({
  providedIn: 'root'
})
export class ApiServicess {

  private http = inject(HttpClient);
   private loginUrl = "api/auth/login";
   private registerUrl = 'api/auth'; 
   private usersUrl ="api/users";

      
  // this is for Reactive Form login
     loginUser(login:LoginReq):Observable<any> {
      return this.http.post<any>(this.loginUrl,login);
     }
    // register User
  registerUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.registerUrl}/register`, user);  
  }
   getAllUsers():Observable<any>{
      return this.http.get<any>(this.usersUrl);
   }
    getSingleUser(userId:number):Observable<any>{
      return this.http.get<any>(`${this.usersUrl}/${userId}`);
    }
    updateUser(user:User,userId:number):Observable<any>{
      return this.http.put<any>(`${this.usersUrl}/${userId}`,user);
    }
    deleteUer(userId:number):Observable<any>{
      return this.http.delete<any>(`${this.usersUrl}/${userId}`);
    }

    // this service for temp-form
  // userLogin(user: LoginReq): Observable<any> {
  //   return this.http.post<any>(this.loginUrl, user);
  // }
  //  registerUser(data: any): Observable<any> {
  //   return this.http.post<any>(`${this.registerUrl}/register`, data,);  
  // }
  
}
