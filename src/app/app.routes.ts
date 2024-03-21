import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

export const routes: Routes = [
  {
    path: 'facesnaps',
    component: FaceSnapListComponent,
    title: 'Face snap list',
  },
  {
    path: 'facesnaps/:id',
    component: SingleFaceSnapComponent,
    title: 'Face snap Detail',
  },
  {
    path: '',
    component: LandingPageComponent,
    title: 'Face snap',
  },
];
