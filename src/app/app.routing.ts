import { Routes, RouterModule } from '@angular/router';

// import { MediaItemFormComponent } from './media-item-form.component';
// import { MediaItemListComponent } from './media-item-list.component';

// import { PageallpeopleComponent } from './pages/pageallpeople/pageallpeople.component';
// import { PagehomeComponent } from './pages/pagehome/pagehome.component';

const appRoutes: Routes = [
  // { path: 'add', component: MediaItemFormComponent },
  // { path: ':medium', component: MediaItemListComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'all' }
  // { path: '', component: PagehomeComponent },
  // { path: 'allPeople', component: PageallpeopleComponent },
  // { path: '**', component: PagehomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
