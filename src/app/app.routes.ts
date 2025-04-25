import { Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

export const routes: Routes = [
  { path: '', component: ClientListComponent },
  { path: 'scheduling', component: SchedulingComponent },
  { path: 'thank-you', component: ThankYouComponent }
];