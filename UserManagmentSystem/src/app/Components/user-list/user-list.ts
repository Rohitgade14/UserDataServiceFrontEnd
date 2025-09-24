import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../Models/Interfacess/user';
import { ApiServicess } from '../../Servicess/api-servicess';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList implements OnInit {


  ngOnInit(): void {
    this.loadUsers();
  }

  users: User[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';
  selectdUser: User | null = null;
  deleteUserId: number | null = null;
  isEditing: boolean = false;

  private apiService = inject(ApiServicess);


  loadUsers(): void {
    this.apiService.getAllUsers().subscribe({
      next: (res: any) => {
        this.users = res.data;
        this.isLoading = true;
        console.log("users fecthed Sueccfully", res);

      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = "Unable  to load Users.Please try Again";
        console.log("failed To Load Users", error);
      }
    })
  }
  viewUser(userId: number): void {
    this.apiService.getSingleUser(userId).subscribe({
      next: (res: any) => {
        this.selectdUser = res.data;
        this.isLoading = false;
        //console.log("user fecthed By UserId", res);
      },
      error: (error) => {
        console.log("failed To Load User", error);
      }
    })
  }


  editUser(user: User) {
    this.selectdUser = { ...user }
    this.isEditing = true;
  }
  updateUser() {
    if (!this.selectdUser) return;
    this.apiService.updateUser(this.selectdUser, this.selectdUser.userId).subscribe({
      next: (res: any) => {
        // this.selectdUser = res.data;
        this.selectdUser = null;
        this.isEditing = false;
        this.loadUsers();
        //console.log("User Upadted Succfully", res);
      },
      error: (error) => {
        console.log("failed To Load User", error);
      }
    })
  }

  confirmDelete(userId: number): void {
    this.deleteUserId = userId;
  }

      // userId: number
  deleteUser() {
      if (this.deleteUserId === null) return;
    // const confirm = window.confirm("are You Sure to Delete The Recoard");
    // if (confirm) {
      this.apiService.deleteUer(this.deleteUserId ).subscribe({
        next: (res: any) => {
          console.log("Deleted Succefully", res);
          this.deleteUserId = null;
          this.loadUsers();
        },
        error: (error) => {
          console.log("user Delete is failed", error);

        }
      })

    // }
  }
      cancelDelete(): void {
    this.deleteUserId = null;
  }

  Back(): void {
    this.selectdUser = null;
    this.isEditing = false
  }

}
