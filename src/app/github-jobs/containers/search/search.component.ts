import { Component, OnInit } from '@angular/core';

import { JobsService } from '../../shared/services/jobs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchQuery = '';

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.searchQuery = this.jobsService.searchQuery;
  }

  onSearch(): void {
    if (this.jobsService.searchQuery !== this.searchQuery) {
      this.jobsService.searchQuery = this.searchQuery;
    }
  }
}
