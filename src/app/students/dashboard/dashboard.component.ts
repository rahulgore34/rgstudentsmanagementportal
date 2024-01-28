import { Component } from '@angular/core';
import { BtnhovertextDirective } from '../../directives/btnhovertext.directive';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BtnhovertextDirective, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router: Router) {}

  addNewRecord() {
    console.log('Adding new Record');
    this.router.navigateByUrl('/students/create');
    
  }
}
