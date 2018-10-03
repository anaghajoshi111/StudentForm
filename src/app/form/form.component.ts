import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name:string="Angha";
  lname:string="Joshi";
  email:string="aj@gmail.com";
  contact:string="374568743";
  passwords:string="123";
  street:string="Lime road";
  city:string="Pune";

  constructor() { }

  ngOnInit() {
  }

  OnSubmit(value){
 console.log(value);
  }

}
