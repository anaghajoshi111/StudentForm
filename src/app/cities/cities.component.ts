import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

   i:number;
   tabcontent:any; 
   tablinks: any;

  constructor() { 
    this.tabcontent = '';
    this.tablinks = '';
    
  }

  openCity(evt, cityName) {
     this.tabcontent = document.getElementsByClassName("tabcontent");
     this.tablinks = document.getElementsByClassName("tablinks");
    
    
    for (this.i = 0; this.i < this.tabcontent.length; this.i++) {
      this.tabcontent[this.i].style.display = "none";
    }
    
    for (this.i = 0; this.i < this.tablinks.length; this.i++) {
      this.tablinks[this.i].className = this.tablinks[this.i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentarget.className += " active";
}

  ngOnInit() {
  }

}
