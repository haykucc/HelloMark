import { Component, OnInit } from '@angular/core';

import { FieldState } from '../shared/FieldState';

@Component({
  selector: 'hm-hello-mark',
  templateUrl: './hello-mark.component.html',
  styles: []
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
}
