
import { emitDistinctChangesOnlyDefaultValue } from "@angular/compiler";
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { tidslinje } from "../../models/tidslinje";
import { tidslinjeCommandWrapper } from "../../models/tidslinjeCommandWrapper";
import { title } from "../../models/title";

@Component({
  selector: "Comment",
  templateUrl: "comment.html"
})
export class commentComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges) {

    for (let property in changes) {

    }
  }

 
}
