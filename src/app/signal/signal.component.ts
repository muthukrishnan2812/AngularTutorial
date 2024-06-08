import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent implements OnInit {
count = signal(0);

ngOnInit(): void {
  this.count.set(50)
  this.count.update((val)=> val+50 )
  console.log(this.count());
  console.log(this.count());
}
}
