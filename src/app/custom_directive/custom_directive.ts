import {Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
            selector:'[custom-directive]'
})
export class Custom_Directive implements OnInit{
    constructor (private elementRef : ElementRef){

    }

    ngOnInit(){

        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}