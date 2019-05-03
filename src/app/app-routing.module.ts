import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VideoAnalysisComponent } from './components/video-analysis/video-analysis.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';


const appRoutes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    data: {
      title: "Dashboard"
    }
  },
  { path: 'analysisVideo', component: VideoAnalysisComponent },
  { path: 'players', component: PlayerInfoComponent },
  { path: '**', component: DashboardComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, useHash: false }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
