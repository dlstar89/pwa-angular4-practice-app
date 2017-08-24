import { LoadingService } from './../loader/loader.component';
import { NavigationStart, NavigationEnd, NavigationCancel, Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../_animations/animations';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit, AfterViewInit {

  leftMenuOpen = false;
  headerTitle = '';

  links = [
    {link: '/', label: 'HOME'},
    {link: '/pages', label: 'PAGES'},
    {link: '/form', label: 'FORM'},
    {link: '/camera', label: 'CAMERA'},
    {link: '/info', label: 'INFO'},
  ];


  constructor(private router: Router,
    private loadingService: LoadingService) { }

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

  ngOnInit() {
    // this.setHeaderTitle('HOME');
    // console.log(this.router);
  }

  ngAfterViewInit(): void {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          // console.log(event);
          this.loadingService.emitChange(true);
        } else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
          // console.log(event);
          this.loadingService.emitChange(false);
        }
      });

      /**OPEN MENU*/
      setTimeout(() => {
        this.leftMenuOpen = true;

        /**CLOSE MENU*/
        setTimeout(() => {
          this.leftMenuOpen = false;
        }, 1000);

      }, 2000);
  }
}
