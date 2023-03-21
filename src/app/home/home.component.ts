import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  user : any;
  constructor() { 
    this.user = {
      name : 'Saksham Sharma',
      address : '0027,hyd',
      phone : ['123-123-1234','345-345-3456']
    };
  }

  ngOnInit(): void {
  }

}

