import { Position } from './../../core/models/index';
import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.scss'],
})
export class DemoComponent implements OnInit {
  constructor() {}
  public duration = 1000;
  public position: Position = { x: 55, y: 170 };
  private clickScreen$!: Subscription;

  ngOnInit() {
    this.clickScreen$ = fromEvent(document, 'click').subscribe(
      (event: Event) => {
        this.position = {
          x: (event as MouseEvent).pageX,
          y: (event as MouseEvent).pageY,
        };
      }
    );
  }

  onClickInput($event: MouseEvent) {
    $event.stopPropagation();
  }

  ngOnDestroy() {
    this.clickScreen$.unsubscribe();
  }
}
