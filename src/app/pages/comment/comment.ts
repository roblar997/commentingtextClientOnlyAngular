
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
 
}
