import { AfterContentInit, Component, ElementRef, OnInit, ContentChild, OnChanges, SimpleChanges, input, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrl: './lifecycle-child.component.scss'
})
export class LifecycleChildComponent implements OnInit,AfterContentInit,OnChanges{
  @ContentChild('temp')parentcontent:any
  @Input()
  channelName=''
  ngOnInit(): void {
    console.log('ngonint called');
    console.log('ngoninit->aftercontent',this.parentcontent);
  }
  ngAfterContentInit(): void {
    console.log('ngaftercontentInit called',this.parentcontent);
    
  }
  ngOnChanges(simple:SimpleChanges): void {
    console.log(simple);
    console.log('ngaftercontent',this.parentcontent);
  }

}
