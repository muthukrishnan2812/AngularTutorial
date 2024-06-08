import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { BehaviorSubject, Subject, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-behavioursubject',
  templateUrl: './behavioursubject.component.html',
  styleUrl: './behavioursubject.component.scss'
})
export class BehavioursubjectComponent implements OnInit {
  myfilteredData = from([2, 4, 6, 8, 10, 3])
  items: any
  constructor() { }
  ngOnInit(): void {
    const subject = new BehaviorSubject<number>(100);
    // const subject = new Subject();
    subject.subscribe((data: any) => { console.log('subscriber1', data) })
    subject.subscribe((data: any) => { console.log('subscriber2', data) })
    subject.next(200)
    //last emit as the new initial value of the subscibe data 
    subject.subscribe((data: any) => { console.log('subscriber3', data); })
    const filterobs = this.myfilteredData.pipe(filter((a: any) => {
      return a < 5;
    }))
    filterobs.subscribe((val: any) => {
      console.log(val);
    })
    const mapObs = this.myfilteredData.pipe(map((val:any)=>{
      this.items=val
      return this.items * 5;
    }))
    mapObs.subscribe((val:any)=>{
      console.log('map',val);
      // this.items = val
    })
  }
}
