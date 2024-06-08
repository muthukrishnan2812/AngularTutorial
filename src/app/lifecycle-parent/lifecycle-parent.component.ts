import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-parent',
  templateUrl: './lifecycle-parent.component.html',
  styleUrl: './lifecycle-parent.component.scss'
})
export class LifecycleParentComponent implements OnChanges {
  isChild:boolean=true;
  channelName=""
ngOnChanges(changes: SimpleChanges): void {
  console.log('on changes is worked',this.channelName);
  console.log(changes);
  
  
}
}
