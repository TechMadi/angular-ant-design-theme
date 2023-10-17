import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-topbar',
  templateUrl: './app-topbar.component.html',
  styleUrls: ['./app-topbar.component.scss']
})
export class AppTopbarComponent {
  @Input()  topState:boolean=false
  
}
