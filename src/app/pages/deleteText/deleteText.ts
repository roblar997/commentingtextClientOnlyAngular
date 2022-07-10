
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "DeleteText",
  templateUrl: "deleteText.html"
})
export class deleteTextComponent {
  //When entering website, load all titles.

  @Input('titleList') titleList: Array<String> = new Array<String>();
  @Output() titleListChange: EventEmitter<Array<String>> = new EventEmitter<Array<String>>();

  titleListChangeFun() {
    this.titleListChange.emit(this.titleList);
  }//
}
