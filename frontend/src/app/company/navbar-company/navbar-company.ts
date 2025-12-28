
import { Component } from '@angular/core';


import { CommonModule } from '@angular/common';
import { Router,RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar-company',
  imports: [RouterLink],
  templateUrl: './navbar-company.html',
  styleUrl: './navbar-company.scss',
})
export class NavbarCompany {

  email: string | null = null;
  isLoggedIn = false;

  constructor(private auth:AuthService) { 
    this.isLoggedIn = this.auth.isLoggedIn();
    this.email = this.isLoggedIn ? this.auth.getUserEmail() : null;
  }
  

}
