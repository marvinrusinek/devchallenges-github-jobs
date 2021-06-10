import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from '../containers/details/details.component';
import { SearchComponent } from '../containers/search/search.component';
import { FilterComponent } from '../containers/filter/filter.component';
import { MainComponent } from '../containers/main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'search', component: SearchComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'details', component: DetailsComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubJobsRoutingModule { }
