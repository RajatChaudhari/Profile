import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AchievementDetails } from '../achievementdetails';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  deeds:AchievementDetails[];

  constructor(private dataService:DataService) { }
  
  ngOnInit() {
    this.getDeeds();
  }
  getDeeds():void{
    this.dataService.getAchievementDetails()
    .subscribe(deeds=>this.deeds=deeds);
  }
}
