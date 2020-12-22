import { SquareComponent } from './square.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('Square Component', () => {
  let component: SquareComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<SquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SquareComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareComponent);
    component = fixture.debugElement.componentInstance;
    element = fixture.debugElement.nativeElement;
    component.position = { x: 50, y: 100 };
    component.duration = 2000;
    component.size = 50;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has with and height 50px', () => {
    const squareElement = element.querySelector('.square');
    const height = squareElement?.clientHeight;
    const width = squareElement?.clientWidth;
    expect(height).toEqual(50);
    expect(width).toEqual(50);
  });

  it('should has position {x: 50, y: 100}', () => {
    const squareElement = element.querySelector('.square') as HTMLElement;
    const top = squareElement?.offsetTop;
    const left = squareElement?.offsetLeft;
    expect(top).toEqual(100);
    expect(left).toEqual(50);
  });

  it('should has duration 2000ms', () => {
    const squareElement = element.querySelector('.square') as HTMLElement;
    const duration = squareElement?.style.transitionDuration;
    expect(duration).toEqual('2000ms');
  });
});
