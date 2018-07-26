import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { SummaryComponent } from './summary/summary.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { SkillsComponent } from './skills/skills.component';
import { StoriesComponent } from './stories/stories.component';
import { InterestComponent } from './interest/interest.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AchievementsComponent,
    SummaryComponent,
    KeywordsComponent,
    SkillsComponent,
    StoriesComponent,
    InterestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
