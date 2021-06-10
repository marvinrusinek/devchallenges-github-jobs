import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  readonly API_PROVIDER_URL = 'https://jobs.github.com/positions';
  readonly URL_SUFFIX = '.json';

  constructor(private http: HttpClient) { }

  getJobDetails(jobId: string | null): Observable<any> {
    const url = this.API_PROVIDER_URL + '/' + jobId + this.URL_SUFFIX;
    return this.http.get(url);
  }
}
