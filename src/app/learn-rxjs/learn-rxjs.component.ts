import { Component } from '@angular/core';
import {  from, interval  } from 'rxjs';
import {map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-learn-rxjs',
  templateUrl: './learn-rxjs.component.html',
  styleUrl: './learn-rxjs.component.scss'
})
export class LearnRxjsComponent {
  arr1=[1,2,3,4,5];
  
  myObservable = from(this.arr1).pipe(
    map(cal => cal*2),
    filter((val => val>=0 )));
  counterObservable = interval(1000);
  conteSub:any
    
  ngOnInit(){
    this.myObservable.subscribe((val)=>{
      console.log(val);
    })
    
  }
  unSubscribe(){
    this.conteSub.unsubscribe();
  }
  subscribe(){
    this.conteSub=this.counterObservable.subscribe((val)=>{
      console.log(val);
      
    })
  }
}

