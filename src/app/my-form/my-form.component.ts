import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  name : string = '';
  email : string = '';
  message : string = '';
  constructor() { }

  ngOnInit(): void {
  }
  onClickSubmit(book : any)
  {
    this.name = book.name;
    this.email = book.email;
    this.message = book.message;
  }
}


