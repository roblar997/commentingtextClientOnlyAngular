
import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { tidslinje } from "../../../../models/tidslinje";
import { tidslinjeCommandWrapper } from "../../../../models/tidslinjeCommandWrapper";
import { title } from "../../../../models/title";
import { AfterContentChecked,AfterViewChecked } from '@angular/core';
@Component({
  selector: "titlesearch",
  templateUrl: "titleSearch.html"
})
export class titleSearchComponent implements OnChanges, OnInit {
  constructor(
    private cdref: ChangeDetectorRef) { }
  loading = true;
  ngOnInit(): void {
    //TESTING!!
    this.selectStart = 5;
    this.selectStartChangeFun()
  }
  ngAfterViewInit() {
 
    Promise.resolve().then(() => this.cdref.detectChanges());
  }


  ngOnChanges(changes: SimpleChanges) {

    for (let property in changes) {
      if(property == "selectStart")
      console.log("Child detecting change. Value is now " + (changes[property].currentValue))
    }
 
  } 
  //Get change in start and end of selection of text
  @Input('selectStart') selectStart: Number = new Number();
  @Output() selectStartChange: EventEmitter<Number> = new EventEmitter<Number>();

  selectStartChangeFun() {
    this.selectStartChange.emit(this.selectStart.valueOf());
  }


  @Input('selectEnd') selectEnd: Number = new Number();

  @Output() selectEndChange: EventEmitter<Number> = new EventEmitter<Number>();
  selectEndChangeFun() {
    this.selectEndChange.emit(this.selectEnd);
  }


  //Send selected text between child components
  @Input('selectedText') selectedText: string | undefined
  @Output() selectedTextChange: EventEmitter<string> = new EventEmitter<string>();

  selectedTextChangeFun() {
    this.selectedTextChange.emit(this.selectedText);
  }


  //Changes from server conserning comments
  @Input('commandTidslinjeWrapper') commandTidslinjeWrapper: Array<tidslinjeCommandWrapper> = new Array<tidslinjeCommandWrapper>();
  @Output() commandTidslinjeWrapperChange: EventEmitter<Array<tidslinjeCommandWrapper>> = new EventEmitter<Array<tidslinjeCommandWrapper>>();

  commandTidslinjeWrapperFun() {
    this.commandTidslinjeWrapperChange.emit(this.commandTidslinjeWrapper);
  }


  //When choosen a title, send timelines here
  @Input('tidslinjerList') tidslinjerList: Array<tidslinje> = new Array<tidslinje>();
  @Output() tidslinjerListChange: EventEmitter<Array<tidslinje>> = new EventEmitter<Array<tidslinje>>();

  tidslinjerListChangeFun() {
    this.tidslinjerListChange.emit(this.tidslinjerList);
  }

  //When entering website, load all titles.
  @Input('titleList') titleList: Array<title> = new Array<title>();
  @Output() titleListChange: EventEmitter<Array<title>> = new EventEmitter<Array<title>>();

  titleListChangeFun() {
    this.titleListChange.emit(this.titleList);
  }
}
