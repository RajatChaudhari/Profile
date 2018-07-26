import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SummaryDetails } from '../summarydetails';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  summaries:SummaryDetails[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getSummaries();
  }

  getSummaries():void{
    this.dataService.getSummaryDetails()
    .subscribe(summaries=>this.summaries=summaries);
  }
}
