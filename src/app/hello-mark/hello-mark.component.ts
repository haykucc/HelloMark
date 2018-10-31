import { Component, OnInit } from '@angular/core';

import { FieldState } from '../shared/FieldState';

@Component({
  selector: 'hm-hello-mark',
  templateUrl: './hello-mark.component.html',
  styles: [`
  .board-element {
    border: 3px solid rgb(0, 0, 0);
    width: 20px;
    height: 20px;
    display: inline-block;
  }
  `]
})
export class HelloMarkComponent implements OnInit {

  gameField: FieldState[][];

  constructor() {

  }

  ngOnInit() {
    this.initGame();
  }

  initGame(): void {
    this.gameField = [
      [FieldState.EMPTY, FieldState.EMPTY, FieldState.EMPTY],
      [FieldState.EMPTY, FieldState.EMPTY, FieldState.EMPTY],
      [FieldState.EMPTY, FieldState.EMPTY, FieldState.EMPTY]
    ];
  }

  helpArray(length: number): number[] {
    return new Array<number>(length);
  }
}
