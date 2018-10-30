import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloMarkComponent } from './hello-mark.component';
import { FieldState } from '../shared/FieldState';

describe('HelloMarkComponent', () => {
  let component: HelloMarkComponent;
  let fixture: ComponentFixture<HelloMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloMarkComponent);
    component = fixture.componentInstance;
    spyOn(component, 'initGame');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect game field to initialize', () => {
    expect(component.initGame).toHaveBeenCalled();
    expect(component.gameField).toEqual([
      [FieldState.EMPTY, FieldState.EMPTY, FieldState.EMPTY],
      [FieldState.EMPTY, FieldState.EMPTY, FieldState.EMPTY],
      [FieldState.EMPTY, FieldState.EMPTY, FieldState.EMPTY]
    ]);
  });
});
