import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarCompany } from '../navbar-company/navbar-company';

@Component({
  selector: 'app-create-tour',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarCompany],
  templateUrl: './create-tour.html',
  styleUrl: './create-tour.scss',
})
export class CreateTour implements OnInit {

  currentStep = 1;
  showFireSalePrices = false;
  destinations: string[] = [];

  tourInfo = {
    name: '',
    type: '',
    destination: '',
    pricing: {
      single: '',
      double: '',
      triple: '',
      ChildWithBed: '',
      ChildWithoutBed: ''
    },
    cancleDate: '',
    startDate: '',
    endDate: '',
    days: '',
    food: '',
    place: '',
    phonenumber: '',
    lineId: '',
  };

  fireSalePricing = {
    single: '',
    double: '',
    triple: '',
    ChildWithBed: '',
    ChildWithoutBed: '',
    FireStartDate: '',
    FireEndDate: ''
  };

  hotelInfo = {
    name: '',
    address: '',
    rating: ''
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
