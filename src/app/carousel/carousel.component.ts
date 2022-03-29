import { Component, Input, OnInit } from '@angular/core';
import { ICarousel } from '../models/carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  /**
   * Custom Properties
   */
  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items: ICarousel[] = [
    {
      id: 1,
      image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
      marginLeft: 0
    },
    {
      id: 2,
      image: 'data:image/jpeg;base64,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',
      marginLeft: 1
    },
    {
      id: 4,
      image: 'https://www.slazzer.com/static/images/home-page/banner-orignal-image.jpg',
      marginLeft: 2
    },
  ];

  /**
   * Final Properties
   */
  public finalHeight: string | number = 0;
  public currentPosition = 0;

  constructor() {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
   }

  ngOnInit() {
    this.items.map( ( i, index ) => {
      i.id = index;
      i.marginLeft = 1;
    });
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    // i this.items.find(i => i.id === 0).marginLeft = -100 * position;
    this.items.map(res => {
      if (res.id === 0)
        res.marginLeft = -100 * position
    })
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    // this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.items.map(res => {
      if (res.id === 0)
        res.marginLeft = finalPercentage
    })
    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition  - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    // this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.items.map(res => {
      if (res.id === 0)
        res.marginLeft = finalPercentage
    })
    this.currentPosition = backPosition;
  }

}
