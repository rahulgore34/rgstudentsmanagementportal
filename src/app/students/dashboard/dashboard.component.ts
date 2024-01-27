import { Component } from '@angular/core';
import { BtnhovertextDirective } from '../../directives/btnhovertext.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BtnhovertextDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  addNewRecord() {
    console.log('Adding new Record');
    
  }
}
