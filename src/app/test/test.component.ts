import { Component, OnInit } from '@angular/core';
// import { ThemeSwitcher } from 'dark-light-theme-switcher';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  // private themeSwitcher =  new ThemeSwitcher()
  constructor() {
    // this.themeSwitcher.switchTheme();
    
   }
  ngOnInit(): void {
  }
 
}
