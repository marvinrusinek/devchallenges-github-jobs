import { Observable, of } from 'rxjs';
import { JobsList, STATE } from './jobs.service';

export class MockJobsService {
    _searchQuery = 'mockQuery';
    _location = 'mockLocation';
    _showOnlyFullTimeJobs = false;

    getJobs(): Observable<JobsList> {
        const mockJobsList = {
            state: STATE.SUCCESS,
            data: ['job1', 'job2']
        };
        return of(mockJobsList);
    }

    fetchJobs(): void {
        // do nothing
    }

    get searchQuery(): string {
        return this._searchQuery;
    }

    set searchQuery(query: string) {
        this._searchQuery = query;
    }

    get showOnlyFullTimeJobs(): boolean {
        return this._showOnlyFullTimeJobs;
    }

    set showOnlyFullTimeJobs(flag: boolean) {
        this._showOnlyFullTimeJobs = flag;
    }

    get location(): string {
        return this._location;
    }

    set location(value: string) {
        this._location = value;
    }

}
