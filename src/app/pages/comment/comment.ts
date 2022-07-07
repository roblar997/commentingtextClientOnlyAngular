
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

  selectStart: number | undefined;
  selectEnd: number | undefined;
  selectedText: string | undefined;
  commandTidslinjeWrapper: Array<tidslinjeCommandWrapper> | undefined
  tidslinjerList: Array<tidslinje> | undefined
  titleList: Array<title> | undefined;

  selectStartChangeChild1() {

  }
  selectStartChangeChild2() {

  }
  selectStartChangeChild3() {

  }
  selectStartChangeChild4() {

  }

  selectEndChange1() {

  }
  selectEndChange2() {

  }
  selectEndChange3() {

  }
  selectEndChange4() {

  }

  selectedTextChange1() {

  }
  selectedTextChange2() {

  }
  selectedTextChange3() {

  }
  selectedTextChange4() {

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
