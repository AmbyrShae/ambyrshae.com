import { Component, AfterContentInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-page.view.html',
  styleUrls: ['./home-page.view.scss']
})
export default class HomeComponent implements AfterContentInit {

  ngAfterContentInit() {
  //   anime({
  //     targets: '.links-btn',
  //     translateX: [
  //       { value: -70, duration: 1200 },
  //       { value: 0, duration: 800 }
  //     ],
  //     rotate: '2turn',
  //     duration: 2000,
  //     delay: 500,
  //     loop: false
  //   });

    // anime({
    //   targets: '#name .lines path',
    //   strokeDashoffset: [anime.setDashoffset, 0],
    //   easing: 'linear',
    //   duration: 1500,
    //   backgroundColor: '#000',
    //   delay: 1500
    // });
  }

  openURL( url: string ): void {
    window.open(url, '_blank');
  }
}
