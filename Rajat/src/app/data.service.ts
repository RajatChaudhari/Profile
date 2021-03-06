import { Injectable } from '@angular/core';
import { ProjectDetails, projectArray } from './projectdetails'
import { Observable, of } from 'rxjs';
import { AchievementDetails,achievementArray } from './achievementdetails';
import { SummaryDetails, summaryArray} from './summarydetails';
import {keywordsArray} from './keywordslist';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProjectDetails(): Observable<ProjectDetails[]>{
  return of (projectArray);
  }
  getAchievementDetails():Observable<AchievementDetails[]>{
    return of(achievementArray);
  }
  getSummaryDetails():Observable<SummaryDetails[]>{
    return of(summaryArray);
  }
  getKeywords():Observable<string[]>{
    return of(keywordsArray);
  }
}
