import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloMarkComponent } from './hello-mark.component';
import { FieldState } from '../shared/FieldState';

describe('HelloMarkComponent', () => {

  describe('test init to be sucessful', () => {
    let component: HelloMarkComponent;
    let fixture: ComponentFixture<HelloMarkComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ HelloMarkComponent ]
      });
      fixture = TestBed.createComponent(HelloMarkComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('expect game field to initialize with empty states', () => {
      expect(component.gameField).toEqual([
        [FieldState.EMPTY, FieldState.EMPTY, FieldState.EMPTY],
        [FieldState.EMPTY, FieldState.EMPTY, FieldState.EMPTY],
        [FieldState.EMPTY, FieldState.EMPTY, FieldState.EMPTY]
      ]);
    });

    it('expect board to be display', () => {
      const componentHtmlElement: HTMLElement = fixture.nativeElement;
      const boardElements: HTMLCollection = componentHtmlElement.getElementsByClassName('board-element');
      expect(boardElements.length).toEqual(9);
    });

    it('expect all board elements to be initialized empty', () => {
      const componentHtmlElement: HTMLElement = fixture.nativeElement;
      const boardElements: HTMLCollection = componentHtmlElement.getElementsByClassName('board-element');
      for (let i = 0; i < 9; i++) {
        expect(boardElements[i].innerHTML).toEqual('');
      }
    });

    // Anzeige im HTML werden normalerweise nicht mit Unit tests abgedeckt. Hier jetzt schon, damit du nen besseren Ramen hast und weißt was
    // zu basteln ist ...

    it('expect all board elements to be divs', () => {
      const componentHtmlElement: HTMLElement = fixture.nativeElement;
      const boardElements: HTMLCollection = componentHtmlElement.getElementsByClassName('board-element');
      for (let i = 0; i < 9; i++) {
        expect(boardElements[i].tagName).toEqual('DIV');
      }
    });

    it('expect all board elements to have border', () => {
      const componentHtmlElement: HTMLElement = fixture.nativeElement;
      const boardElements: HTMLCollection = componentHtmlElement.getElementsByClassName('board-element');
      for (let i = 0; i < 9; i++) {
        expect(getComputedStyle(<HTMLElement> boardElements[i]).border).toEqual('3px solid rgb(0, 0, 0)');
      }
    });

    it('expect all board elements to have 20px width and height', () => {
      const componentHtmlElement: HTMLElement = fixture.nativeElement;
      const boardElements: HTMLCollection = componentHtmlElement.getElementsByClassName('board-element');
      for (let i = 0; i < 9; i++) {
        expect((<HTMLElement> boardElements[i]).scrollWidth).toEqual(20);
        expect((<HTMLElement> boardElements[i]).scrollHeight).toEqual(20);
      }
    });

    it('expect all board elements to be inline-block', () => {
      const componentHtmlElement: HTMLElement = fixture.nativeElement;
      const boardElements: HTMLCollection = componentHtmlElement.getElementsByClassName('board-element');
      for (let i = 0; i < 9; i++) {
        expect(getComputedStyle(<HTMLElement> boardElements[i]).display).toEqual('inline-block');
      }
    });

    it('expect 3 row divs with 3 board-elements each', () => {
      const componentHtmlElement: HTMLElement = fixture.nativeElement;
      const boardRows: HTMLCollection = componentHtmlElement.getElementsByClassName('board-row');
      for (let i = 0; i < 3; i++) {
        expect((<HTMLElement> boardRows[i]).childNodes.length).toEqual(3);
      }
    });
  });

  // needs separate describe because of spy setup in beforeach
  describe('test initgame to have been called', () => {
    let component: HelloMarkComponent;
    let fixture: ComponentFixture<HelloMarkComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ HelloMarkComponent ]
      });
      fixture = TestBed.createComponent(HelloMarkComponent);
      component = fixture.componentInstance;
      spyOn(component, 'initGame');
      fixture.detectChanges();
    });

    it ('expect gameInit to have been called', () => {
      expect(component.initGame).toHaveBeenCalled();
    });
  });
});
