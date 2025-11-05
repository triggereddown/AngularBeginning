import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles {
  firstName: string = 'Deep';
  angularVersion: string = 'angular 20';
  currentDate: Date = new Date();
}
