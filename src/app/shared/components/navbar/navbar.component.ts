import {Component, OnInit, ViewChild} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  constructor() { }

  ngOnInit(): void {
  }
  someMethod() {
    this.trigger.openMenu();
  }
}
