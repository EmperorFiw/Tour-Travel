import { Component } from '@angular/core';

import { NavbarCompany } from '../navbar-company/navbar-company';
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-tour',
  imports: [NavbarCompany, RouterLink, CommonModule, RouterModule],
  templateUrl: './manage-tour.html',
  styleUrl: './manage-tour.scss'
})
export class ManageTour {

  tourlist = [
    {
      name: 'ทัวร์จีน เฉิงตู ภูเขาสี่ดรุณี ปี้เผิงโกว ต๋ากู่ปิงชวน เม่าเสียน ตูเจียงเยี่ยน',
      img: 'https://www.travelzeed.com/images/tour/4058/56290821-09-2025-15-10-52-id-4058-tour.webp',
      code: 'CT20231001',
      type: 'ทัวร์ต่างประเทศ',
      days: '7 วัน 6 คืน',
      price: '28,999',
      airline: 'Lion air',
      food: '5 มื้อ',
      place: '7 แห่ง',
      ratingHotel: '⭐⭐⭐⭐',
      tourDate: [
      'บ.ค. 31-2 ก.พ',
      'ก.พ. 21-23',
      'มี.ค. 10-12',
      'มี.ค. 18-20'
      ]

    }
  ]

}
