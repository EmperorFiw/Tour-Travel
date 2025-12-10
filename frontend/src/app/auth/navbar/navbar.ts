
// npm install world-countries ติดตั้ง

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../services/auth.service';

interface MenuItem {
  label: string;
  link: string;
  hasDropdown?: boolean;
}
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {

  
  isMenuOpen = false;
  isLoggedIn = false;
  email: string | null = null;
  activeDropdown: string | null = null;
  
  menuItems: MenuItem[] = [
    { label: 'หน้าแรก', link: '#' },
    { label: 'ทัวร์ต่างประเทศ', link: '', hasDropdown: true },
    { label: 'ทัวร์ในประเทศ', link: '', hasDropdown: true },
    { label: 'จัดทัวร์กรุ๊ป', link: 'register' },
    { label: 'ติดต่อเรา', link: '' },
  ];
  
  constructor(private auth:AuthService) { 
    this.isLoggedIn = this.auth.isLoggedIn();
    this.email = this.isLoggedIn ? this.auth.getUserEmail() : null;
  }

  toggleMobileMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(label: string): void {
    if (this.activeDropdown === label) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = label;
    }
  }

} 
