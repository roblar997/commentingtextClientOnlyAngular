
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { tidslinje } from "../../../../models/tidslinje";
import { tidslinjeCommandWrapper } from "../../../../models/tidslinjeCommandWrapper";
import { title } from "../../../../models/title";

@Component({
  selector: "commentschema",
  templateUrl: "commentSchema.html"
})
export class commentSchemaComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges) {

    for (let property in changes) {

    }
  } 
  //Get change in start and end of selection of text
  @Input('selectStart') selectStart: number | undefined;
  @Output() selectStartChange: EventEmitter<number> = new EventEmitter<number>();

  selectStartChangeFun() {
    this.selectStartChange.emit(this.selectStart);
  }


  @Input('selectEnd') selectEnd: number | undefined

  @Output() selectEndChange: EventEmitter<number> = new EventEmitter<number>();
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


