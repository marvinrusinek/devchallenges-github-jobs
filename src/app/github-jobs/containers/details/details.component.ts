import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailsService } from '../../shared/services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  job: any = null;
  isError = false;
  isLoading = true;

  constructor(
    private detailsService: DetailsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const jobId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getJobDetails(jobId);
  }

  getJobDetails(jobId: string | null): void {
    this.isError = false;
    this.isLoading = true;

    this.detailsService.getJobDetails(jobId).subscribe(data => {
      this.job = data;
    }, (error) => {
      this.isError = true;
      console.error(error);
    }).add(() => {
      this.isLoading = false;
    });
  }
}
