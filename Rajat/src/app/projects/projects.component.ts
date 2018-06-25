import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ProjectDetails } from '../projectdetails';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectDetails[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getProject();
  }
getProject(): void {
  this.dataService.getProjectDetails()
  .subscribe(projects=>this.projects=projects);
}
}
