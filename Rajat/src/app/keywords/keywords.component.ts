import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css']
})
export class KeywordsComponent implements OnInit {
keywords:string[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getKeywords()
  }
  getKeywords(): void {
    this.dataService.getKeywords()
    .subscribe(keywords=>this.keywords=keywords);
  }

}
