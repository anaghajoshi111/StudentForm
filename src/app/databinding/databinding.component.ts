import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  a:number=13;
  b:number=15;
 fname:string = "a";
 lname:string ="b";
 toActivate:boolean= false;
 //function can be called through interpolation too
 test(){
   this.fname="Miss. Anagha",
   this.lname="Joshi"
 }
  constructor() {
    // this.fname="Ms. Anagha",
    // this.lname="Joshi"

    setTimeout( (activate)=> {
      this.toActivate =true;
    }, 3000);
   }

  ngOnInit() {
  }

}
