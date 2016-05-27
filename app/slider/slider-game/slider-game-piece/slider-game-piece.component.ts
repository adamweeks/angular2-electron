import {SliderGamePiece} from '../../shared/slider-game-piece.class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'slider-game-piece',
  template: `
  <p>
    {{ gamePiece.label }}
  </p>
  `,
  styles: [
    `
    p {
      text-align: center;
      margin: 0;
    }
    `
  ]
})
export class SliderGamePieceComponent implements OnInit {
  @Input() gamePiece: SliderGamePiece;
  constructor() {}

  ngOnInit() {

  }

}
