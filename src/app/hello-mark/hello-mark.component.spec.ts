import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloMarkComponent } from './hello-mark.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
