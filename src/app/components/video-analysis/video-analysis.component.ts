import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/core';


@Component({
  selector: 'app-video-analysis',
  templateUrl: './video-analysis.component.html',
  styleUrls: ['./video-analysis.component.css']
})
export class VideoAnalysisComponent implements OnInit {



  player1: any = {
    totalScore: 0,
    name: 'Jackson',
    smashPoint: 0,
    forHeadPoint: 0,
    backHeadPoint: 0,
    servePoint: 0,
    scorePoint: 0,
    smashQuantPoint: 0,
    fhQuantPoint: 0,
    bhQuantPoint: 0,
    serveQuantPoint: 0,
    serveQualiPoint: '- ',
    fhQualiPoint: '-',
    bhQualiPoint: '- ',
    smashQualiPoint: '- ',
    sPoint: '__',
    spPoint: '__',
    rtPoint: '__',

  }
  player2: any = {
    totalScore: 0,
    name: 'Jackson',
    smashPoint: 0,
    forHeadPoint: 0,
    backHeadPoint: 0,
    servePoint: 0,
    scorePoint: 0,
    smashQuantPoint: 0,
    fhQuantPoint: 0,
    bhQuantPoint: 0,
    serveQuantPoint: 0,
    serveQualiPoint: '-',
    fhQualiPoint: '-',
    bhQualiPoint: '-',
    smashQualiPoint: '- ',
    sPoint: '__',
    spPoint: '__',
    rtPoint: '__',
  }



  constructor() { }

  sec: number = 0;
  min: number = 0;
  interval;
  api: VgAPI;


  ngOnInit() {
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.play.subscribe(
      () => {
        this.startTimer();
      }
    );
    this.api.getDefaultMedia().subscriptions.pause.subscribe(
      () => {
        this.pauseTimer();
      }
    );
  }
  startTimer() {
    this.interval = setInterval(() => {
      // if (this.timeLeft > 0) {
      if (this.sec < 59)
        this.sec++;
      else {
        this.sec = 0;
        this.min++;
      }
      var time = this.min + ':' + this.sec;
      this.getPointsForPlayer(time);
      this.getPointsForScore(time);

      this.quantitiveScore(time);
      this.qualtitiveScore(time);
      this.getAnytical(time);

    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  getPointsForPlayer(time) {
    switch (time) {
      case '0:30': {
        this.player2.servePoint += 1;
        this.player1.forHeadPoint += 5;
        this.player2.forHeadPoint += 6;
        this.player2.backHeadPoint += 1;
        this.player1.smashPoint += 1;
        this.player2.smashPoint += 1;
        break;
      }
      case '1:0': {
        this.player1.servePoint += 1;
        this.player2.forHeadPoint += 5;
        this.player1.forHeadPoint += 6;
        this.player1.backHeadPoint += 1;
        this.player2.backHeadPoint += 1;
        this.player1.smashPoint += 2;
        break;
      }
      case '1:30': {
        this.player1.servePoint += 1;
        this.player1.forHeadPoint += 9;
        this.player2.forHeadPoint += 10;
        this.player1.backHeadPoint += 1;
        this.player2.backHeadPoint += 3;
        this.player1.smashPoint += 2;
        this.player2.smashPoint += 1;
        break;
      }
      case '3:14': {
        this.player2.servePoint += 1;
        this.player2.forHeadPoint += 1;
        this.player1.smashPoint += 2;
        this.player2.smashPoint += 2;
        break;
      }
      case '3:36': {
        this.player2.servePoint += 1;
        this.player1.forHeadPoint += 1;
        this.player2.forHeadPoint += 2;
        this.player1.backHeadPoint += 1;
        this.player1.smashPoint += 3;
        this.player2.smashPoint += 3;
        break;
      }
      case '4:39': {
        this.player2.servePoint += 1;
        this.player1.forHeadPoint += 1;
        this.player2.backHeadPoint += 1;
        this.player1.smashPoint += 2;
        this.player2.smashPoint += 2;
        break;

      }

      default: {
        break;
      }
    }
  }
  getPointsForScore(time) {
    switch (time) {

      case '3:14': {
        // this.player1.scorePoint += 0;
        this.player2.scorePoint += 1;

        break;
      }
      case '3:33': {
        // this.player1.scorePoint += 0;
        this.player2.scorePoint += 1;

        break;
      }
      case '4:05': {
        // this.player1.scorePoint += 0;
        this.player2.scorePoint += 1;

        break;
      }

      case '4:37': {
        // this.player1.scorePoint += 0;
        this.player2.scorePoint += 1;

        break;
      }
      default:
        {
          break;
        }
    }
  }


  quantitiveScore(time) {
    switch (time) {
      case '4:38': {
        this.player1.serveQuantPoint += 1;
        this.player1.fhQuantPoint += 7;
        this.player1.bhQuantPoint += 3;
        this.player1.smashQuantPoint += 4;

        this.player2.serveQuantPoint += 3;
        this.player2.fhQuantPoint += 6;
        this.player2.bhQuantPoint += 8;
        this.player2.smashQuantPoint += 3;
        break;

      }

      default: {
        break;
      }

    }
  }
  qualtitiveScore(time) {
    switch (time) {
      case '4:38': {
        this.player1.serveQualiPoint = "*";
        this.player1.fhQualiPoint = "***";
        this.player1.bhQualiPoint = "**";
        this.player1.smashQualiPoint = "**";

        this.player2.serveQualiPoint = " **";
        this.player2.fhQualiPoint = " **";
        this.player2.bhQualiPoint = " ***";
        this.player2.smashQualiPoint = " *";
        break;
      }


      default:
        {
          break;
        }
    }
  }
  getAnytical(time) {
    switch (time) {
      case '4:38': {
        this.player1.sPoint = "0";
        this.player1.spPoint = "50.5 ";
        this.player1.rtPoint = "4 sec";
        this.player2.sPoint = "2";
        this.player2.spPoint = " 62.2 ";
        this.player2.rtPoint = "4 sec ";

        break;
      }


      default:
        {
          break;
        }
    }

  }
}
