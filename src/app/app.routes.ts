import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LabsComponent } from './labs/labs.component';
import { ContactComponent } from './contact/contact.component';
import { FeatureComponent } from './feature/feature.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'labs', component: LabsComponent },

  {
    path: 'labs/:labKey',
    loadComponent: () =>
      import('./menulabs/menulabs.component').then((m) => m.MenulabsComponent),
  },
  { path: 'contact', component: ContactComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'testimonial', component: TestimonialComponent },

  // Wildcard route for 404
  { path: '**', component: NotfoundComponent },
];
