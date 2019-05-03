import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigatePage() {
    this.router.navigate(['/analysisVideo']);
  }
}
