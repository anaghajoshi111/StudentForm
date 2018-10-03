import { Component, OnInit } from '@angular/core';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  status = false;
  
  names=['sarvdip','shubham','rituuu','dipak'];
  public show:boolean = false;
  public buttonName:any = 'Show';
  shows() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
  //   if(this.show)  
  //     this.buttonName = "Hide";
  //   else
  //     this.buttonName = "Show";
   }
  constructor() { }

  ngOnInit() {
  }

}
