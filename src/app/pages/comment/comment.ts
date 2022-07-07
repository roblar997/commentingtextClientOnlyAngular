
import { emitDistinctChangesOnlyDefaultValue } from "@angular/compiler";
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { tidslinje } from "../../models/tidslinje";
import { tidslinjeCommandWrapper } from "../../models/tidslinjeCommandWrapper";
import { title } from "../../models/title";

@Component({
  selector: "Comment",
  templateUrl: "comment.html"
})
export class commentComponent {

  selectStart!: number;
  selectEnd: number | undefined;
  selectedText: string | undefined;
  commandTidslinjeWrapper: Array<tidslinjeCommandWrapper> = new Array < tidslinjeCommandWrapper >()
  tidslinjerList: Array<tidslinje> = new Array<tidslinje>()
  titleList: Array<title> = new Array<title>()

  selectStartChange1(selectedStart : number) {
    console.log("Parent received number " + selectedStart);

    this.selectStart = selectedStart+1;
    console.log("Parent changing this number to " + this.selectStart)
    
     
  }
  selectStartChange2(selectedStart: number) {

  }
  selectStartChange3(selectedStart: number) {

  }
  selectStartChange4(selectedStart: number) {

  }

  selectEndChange1(selectedEnd : number) {

  }
  selectEndChange2(selectedEnd: number) {

  }
  selectEndChange3(selectedEnd: number) {

  }
  selectEndChange4(selectedEnd: number) {

  }

  selectedTextChange1(selectedText: string) {

  }
  selectedTextChange2(selectedText: string) {

  }
  selectedTextChange3(selectedText: string) {

  }
  selectedTextChange4(selectedText: string) {

  }

  commandTidslinjeWrapperChange1(commandTidslinjeWrapper: Array<tidslinjeCommandWrapper>) {

  }
  commandTidslinjeWrapperChange2(commandTidslinjeWrapper: Array<tidslinjeCommandWrapper>) {

  }
  commandTidslinjeWrapperChange3(commandTidslinjeWrapper: Array<tidslinjeCommandWrapper>) {

  }
  commandTidslinjeWrapperChange4(commandTidslinjeWrapper : Array<tidslinjeCommandWrapper>) {

  }

  tidslinjerListChange1(tidslinjerList: Array<tidslinje>) {

  }
  tidslinjerListChange2(tidslinjerList: Array<tidslinje>) {

  }
  tidslinjerListChange3(tidslinjerList: Array<tidslinje>) {

  } 
  tidslinjerListChange4(tidslinjerList :Array<tidslinje>) {

  }

titleListChange1(titleList: Array<title>) {

  }
titleListChange2(titleList: Array<title>) {

  }
titleListChange3(titleList: Array<title>) {

  }
titleListChange4(titleList: Array<title>) {

  }
 
}
