import { Component } from '@angular/core';
import { Roles } from '../roles/roles';
import { Designation } from '../designation/designation';

@Component({
  selector: 'app-master',
  imports: [Roles, Designation],
  templateUrl: './master.html',
  styleUrls: ['./master.css'],
})
export class Master {
  currentComponent: string = '';
}
