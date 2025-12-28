import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarCompany } from '../navbar-company/navbar-company';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  imports: [CommonModule, FormsModule, NavbarCompany],
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  // ===== Summary =====
  totalTours = 12;
  totalBookings = 248;
  totalIncome = 185000;
  averageRating = 4.6;

  // ===== Latest Bookings =====
  latestBookings = [
    {
      name: 'สมชาย ใจดี',
      tour: 'ทัวร์เชียงใหม่ 3 วัน 2 คืน',
      date: '12 ต.ค. 2567',
      status: 'completed'
    },
    {
      name: 'สุดา แสนสุข',
      tour: 'ทัวร์ภูเก็ต',
      date: '10 ต.ค. 2567',
      status: 'completed'
    },
    {
      name: 'อนันต์ ดีมาก',
      tour: 'ทัวร์กระบี่',
      date: '8 ต.ค. 2567',
      status: 'cancel'
    }
  ];

  // ===== Notifications =====
  notifications = [
    {
      text: 'มีการจองใหม่จาก สมชาย ใจดี',
      time: '5 นาทีที่แล้ว'
    },
    {
      text: 'มีรีวิวใหม่ (5 ดาว)',
      time: '1 ชั่วโมงที่แล้ว'
    },
    {
      text: 'การจองของ อนันต์ ถูกยกเลิก',
      time: 'เมื่อวาน'
    }
  ];

}
