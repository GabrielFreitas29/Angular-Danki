import { Component } from '@angular/core';

@Component({
  selector: 'app-schools',
  
  /*
  templateUrl:'/.schools.component.html', 
  */

  template: `
    <app-school></app-school>
    <app-school></app-school>`,
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent {

}
