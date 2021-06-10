import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  readonly API_PROVIDER_URL = 'https://jobs.github.com/positions.json?';

  jobsSubject$ = new BehaviorSubject<JobsList>({ state: STATE.LOADING, data: [] });
  /* tslint:disable-next-line */
  private _searchQuery = '';
  /* tslint:disable-next-line */
  private _showOnlyFullTimeJobs = false;
  /* tslint:disable-next-line */
  private _location = '';

  constructor(private http: HttpClient) {
    this.fetchJobs();
  }

  fetchJobs(): void {
    const url = this.getJobListAPIUrl();
    this.jobsSubject$.next({ state: STATE.LOADING, data: [] });
    this.http.get(url).subscribe((data: any) => {
      const state = data.length ? STATE.SUCCESS : STATE.EMPTY;
      this.jobsSubject$.next({ state, data });
    }, (error) => {
      console.error(error);
      this.jobsSubject$.next({ state: STATE.ERROR, data: [] });
    });
  }

  getJobs(): Observable<JobsList> {
    return this.jobsSubject$;
  }

  private getJobListAPIUrl(): string {
    let getQueryParams = new HttpParams();

    if (this.searchQuery) {
      getQueryParams = getQueryParams.set('description', this.searchQuery);
    }

    if (this._showOnlyFullTimeJobs) {
      getQueryParams = getQueryParams.set('full_time', 'true');
    }

    if (this._location) {
      getQueryParams = getQueryParams.set('location', this._location);
    }

    return (this.API_PROVIDER_URL + encodeURIComponent(getQueryParams.toString()));
  }

  get searchQuery(): string {
    return this._searchQuery;
  }

  set searchQuery(query: string) {
    this._searchQuery = query;
    this.fetchJobs();
  }

  get showOnlyFullTimeJobs(): boolean {
    return this._showOnlyFullTimeJobs;
  }

  set showOnlyFullTimeJobs(flag: boolean) {
    this._showOnlyFullTimeJobs = flag;
    this.fetchJobs();
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
    this.fetchJobs();
  }
}

export enum STATE {
  LOADING,
  ERROR,
  EMPTY,
  SUCCESS
}

export interface JobsList {
  state: STATE;
  data: any[];
}
