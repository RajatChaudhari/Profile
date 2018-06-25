import { Injectable } from '@angular/core';
import { ProjectDetails, projectArray } from './projectdetails'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  projects: ProjectDetails[];

  constructor() { }

  getProjectDetails(): Observable<ProjectDetails[]>{
  return of (projectArray);
  }
}
