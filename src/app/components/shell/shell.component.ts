import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../_animations/animations';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  leftMenuOpen = false;
  headerTitle = '';


  constructor(private router: Router) { }

  ngOnInit() {
    this.setHeaderTitle('HOME');
    console.log(this.router);
  }

  toggleLeftMenu() {
    this.leftMenuOpen = !this.leftMenuOpen;
  }

  getActiveMenu(menuPath) {
    this.setHeaderTitle(this.router.url);
    return menuPath === this.router.url ? true : false;
  }

  setHeaderTitle(title) {
    this.headerTitle = title;
  }

}
