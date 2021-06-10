import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './github-jobs/containers/search/search.component';
import { FilterComponent } from './github-jobs/containers/filter/filter.component';
import { ListComponent } from './github-jobs/containers/list/list.component';
import { DetailsComponent } from './github-jobs/containers/details/details.component';
import { MainComponent } from './github-jobs/containers/main/main.component';
import { DaysAgoPipe } from './github-jobs/shared/pipes/days-ago.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { httpInterceptorProviders } from './github-jobs/containers/http-interceptors';
import { FooterComponent } from './github-jobs/containers/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'github-jobs',
    pathMatch: 'full'
  },
  {
    path: 'github-jobs',
    loadChildren: () =>
      import('./github-jobs/routing/github-jobs-routing.module').then(m => m.GithubJobsRoutingModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    ListComponent,
    DetailsComponent,
    MainComponent,
    DaysAgoPipe,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
