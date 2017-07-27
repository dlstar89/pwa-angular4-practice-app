import { PagePagesComponent } from './pages/pagePages/pagePages.component';
import { PageInfoComponent } from './pages/pageInfo/pageInfo.component';
import { Routes, RouterModule } from '@angular/router';

// import { MediaItemFormComponent } from './media-item-form.component';
// import { MediaItemListComponent } from './media-item-list.component';

import { PageHomeComponent } from './pages/pageHome/pageHome.component';

const appRoutes: Routes = [
  // { path: 'add', component: MediaItemFormComponent },
  // { path: ':medium', component: MediaItemListComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'all' }
  { path: '', component: PageHomeComponent },

  { path: 'pages', component: PagePagesComponent },
  { path: 'spring', component: PagePagesComponent },
  { path: 'form', component: PagePagesComponent },

  { path: 'info', component: PageInfoComponent },
  // { path: 'allPeople', component: PageallpeopleComponent },
  // { path: '**', component: PagehomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
