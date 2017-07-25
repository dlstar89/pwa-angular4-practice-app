import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../_animations/animations';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
  // animations: [routerTransition()],
  // host: {'[@routerTransition]': ''}
})
export class ShellComponent implements OnInit {

  leftMenuOpen = false;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleLeftMenu() {
    this.leftMenuOpen = !this.leftMenuOpen;
  }

  getActiveMenu(menuPath) {
    console.log('path:' + menuPath + ' | ' + this.router.url);
    return menuPath === this.router.url ? true : false;
  }

}
