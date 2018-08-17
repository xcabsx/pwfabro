import { Component, OnInit } from '@angular/core';

class CatImageComponent {
  message: string;
  api: string;
  fontsize: number;
}
class PepaComponent {
  locat: string;
  nombre: string;
}

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html'
})



export class ImgCardComponent implements OnInit {

  private image: CatImageComponent = {
    message: 'CATSSSSS',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };
  public images: string[];
  public src: string;

  constructor() {
    this.images = ['assets/d1.jpg', 'assets/d2.jpg', 'assets/d3.jpg', 'assets/d4.png'];
  }


  ngOnInit() {
     this.src = this.image.api + this.image.message;
     this.generateSrc();

  }

  generateSrc(): void {

    let show = this.images[Math.floor(Math.random() * this.images.length)];

    this.src = show;
    /*this.src = this.image.api + this.image.message +
      '?size=' + this.image.fontsize +
      '&ts=' + Date.now();*/
  }

}
