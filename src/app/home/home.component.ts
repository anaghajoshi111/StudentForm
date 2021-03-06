import { Component, OnInit, OnDestroy } from '@angular/core';

// import for observales
import { Observable, Observer, Subscription } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  numberObservableSubscription : Subscription;
  customObservableSubscription : Subscription;

  constructor() { }

  ngOnInit() {

    // observable
    // understanding observable interval method working
    // built in observable function
      const myNumbers = Observable.interval(1000)
                          .map(
                            (data : number ) => {
                                return data * 2;
                            }
                          );
      this.numberObservableSubscription = myNumbers.subscribe(
        (number : number ) => {
          console.log(number);
      });
    
      // user defined Observable creation
    const myObservable = Observable.create(
      (observer : Observer<string>) => {
          setTimeout(() => {
            observer.next('first package');
          },2000);
          setTimeout(() => {
            observer.next('second package');
          },4000);
          setTimeout(() => {
            //observer.error('this does not work ...!!!');

            observer.complete();
          },5000);
          setTimeout(() => {
            observer.next('third package');
          },6000);
      });
      this.customObservableSubscription = myObservable.subscribe(
        ( data : string ) => {
          console.log(data);
        },
        ( error : string ) => {
          console.log(error);
        },
        () => {
          console.log('completed...!!!');
        }
      );
  }


  ngOnDestroy(){
    this.numberObservableSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }
}