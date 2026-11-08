import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PageHeader } from '../../reusable/page-header/page-header';

@Component({
  selector: 'app-life-cycle-events',
  imports: [PageHeader],
  templateUrl: './life-cycle-events.html',
  styleUrl: './life-cycle-events.scss',
})
export class LifeCycleEvents implements OnInit, OnChanges, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, DoCheck, OnDestroy {

    title:string=''
    text:string=''
  ngOnInit(): void {
    // on this component initialization
    // api call trigger
    //subscription
    console.log('ngOnInit executed after constuctor')
    
  }
  constructor() {
    console.log('Constructor executed First')
    this.title=' life-cycle-events component'
    this.text='This text is from life-cycle-events component'
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
