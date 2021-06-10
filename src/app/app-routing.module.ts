import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './github-jobs/containers/main/main.component';
import { DetailsComponent } from './github-jobs/containers/details/details.component';

const routes: Routes = [
  { path: 'details/:id', component: DetailsComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
