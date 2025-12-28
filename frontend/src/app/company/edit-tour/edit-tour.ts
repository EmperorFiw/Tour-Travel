import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarCompany } from '../navbar-company/navbar-company';
import { max } from 'rxjs';

@Component({
  selector: 'app-create-tour',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarCompany],
  templateUrl: './edit-tour.html',
  styleUrl: './edit-tour.scss',
})
export class EditTour implements OnInit {

  currentStep = 1;
  showFireSalePrices = false;
  destinations: string[] = [];

  tourInfo = {
    name: 'ทัวร์จีน เฉิงตู ภูเขาสี่ดรุณี ปี้เผิงโกว ต๋ากู่ปิงชวน เม่าเสียน ตูเจียงเยี่ยน',
    type: '',
    destination: '', 
    pricing: {
      single: '1000',
      double: '2000',
      triple: '2500',
      ChildWithBed: '3000',
      ChildWithoutBed: '2800'
    },
    cancleDate: '5',
    startDate: '',
    endDate: '',
    days: '3 วัน 2 คืน',
    food: '5 มื้อ',
    place: ' 7 แห่ง',
    maxPeople: '200',
    phonenumber: '081-234-5678',
    lineId: '@tourtravel',
  };

  fireSalePricing = {
    single: '1000',
    double: '2000',
    triple: '2500',
    ChildWithBed: '3000',
    ChildWithoutBed: '2800',
    FireStartDate: '',
    FireEndDate: ''
  };

  hotelInfo = {
    name: 'HOLIDAYINN EXPRESS JINNIU HOTEL',
    address: '蜀西路46号 (Shuxi Road No. 46), เมืองเฉิงตู (Chengdu), มณฑลเสฉวน (Sichuan), ประเทศจีน',
    rating: '',
  }

  TravelTypeInfo ={
    type: '',
    airline: '',
  }

  airlineList = ['Lion Air', 'Thai AirAsia', 'Bangkok Airways', 'Thai Smile', 'Nok Air'];

  constructor( private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.currentStep = +params['step'] || 1;
    });
  }

  next() {
    this.router.navigate([], { queryParams: { step: 2 } });
  }

  back() {
    this.router.navigate([], { queryParams: { step: 1 } });
  }

  toggleFireSale() {
    this.showFireSalePrices = !this.showFireSalePrices;
  }

  onDestinationChange() {
    if (this.tourInfo.type === 'domestic') {
      this.destinations = ['เชียงใหม่', 'ภูเก็ต', 'กระบี่'];
    } else if (this.tourInfo.type === 'international') {
      this.destinations = ['ญี่ปุ่น', 'เกาหลี', 'จีน'];
    } else {
      this.destinations = [];
    }
  }

  onTransportChange() {
    this.TravelTypeInfo.airline = '';
    if (this.TravelTypeInfo.type === 'plane') {
      this.airlineList = ['Lion Air', 'Thai AirAsia', 'Bangkok Airways', 'Thai Smile', 'Nok Air'];
    }
    else{
      this.airlineList = [];
    }
  }

  submit() {
    console.log('ส่งข้อมูล:', this.tourInfo, this.fireSalePricing);
  }


}
