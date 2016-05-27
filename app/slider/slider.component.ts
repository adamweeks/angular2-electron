import { Component, OnInit } from '@angular/core';
import {SliderGameComponent} from './slider-game/slider-game.component';

@Component({
  moduleId: module.id,
  selector: 'slider-app',
  template: `
  <h1>
    {{title}}
  </h1>
  <slider-game></slider-game>
  `,
  directives: [SliderGameComponent],
})

export class SliderAppComponent implements OnInit {
  title = 'slider works!';

  constructor() {

  }

  ngOnInit() {

  }
}
