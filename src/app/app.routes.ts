import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SecondPageComponent } from './second-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'second',
    component: SecondPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
