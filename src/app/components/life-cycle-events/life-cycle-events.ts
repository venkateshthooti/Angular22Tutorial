import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-events',
  imports: [],
  templateUrl: './life-cycle-events.html',
  styleUrl: './life-cycle-events.scss',
})
export class LifeCycleEvents implements OnInit, OnChanges, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, DoCheck, OnDestroy {

  ngOnInit(): void {
    // on this component initialization
    // api call trigger
    //subscription
    console.log('ngOnInit executed after constuctor')
  }
  constructor() {
    console.log('Constructor executed First')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges executed ')
  }
  ngAfterContentInit(): void {
    //after another component intialization or loaded
    console.log('ngAfterContentInit executed ')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked executed ')
  }

  ngAfterViewInit(): void {
    //View child
    console.log('ngAfterViewInit executed ')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked executed ')
  }

  ngDoCheck(): void {
    //change detection
    console.log('ngDoCheck executed ')
  }
  ngOnDestroy(): void {

    //Clea up activity , unsubscribe
    console.log('ngOnDestroy executed ')
  }
}
