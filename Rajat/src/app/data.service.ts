import { Injectable } from '@angular/core';
import { ProjectDetails, projectArray } from './projectdetails'
import { Observable, of } from 'rxjs';
import { AchievementDetails,achievementArray } from './achievementdetails';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProjectDetails(): Observable<ProjectDetails[]>{
  return of (projectArray);
  }
  getAchievementDetails():Observable<AchievementDetails[]>{
    return of(achievementArray)
  }
}
