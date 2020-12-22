import { Component, Input, OnInit } from '@angular/core';
import { Position } from 'src/app/core/models';

@Component({
  selector: 'app-square',
  styleUrls: ['square.component.scss'],
  templateUrl: 'square.component.html',
})
export class SquareComponent implements OnInit {
  @Input()
  duration!: number;

  @Input() position!: Position;

  @Input()
  size: number | undefined;

  constructor() {}

  ngOnInit() {}
}
