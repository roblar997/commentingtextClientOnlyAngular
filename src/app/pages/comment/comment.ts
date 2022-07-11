
import { emitDistinctChangesOnlyDefaultValue } from "@angular/compiler";
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { tidslinje } from "../../models/tidslinje";
import { tidslinjeCommandWrapper } from "../../models/tidslinjeCommandWrapper";
import { title } from "../../models/title";
import { newTextCommunicationService } from "../../services/newTextCommunicationService";
import { timelineCommunicationService } from "../../services/timelineCommunicationService";

@Component({
  selector: "Comment",
  templateUrl: "comment.html"
})
export class commentComponent  implements OnInit {

  constructor(private newTextCommunicationService: newTextCommunicationService,
    private timelineCommunicationService: timelineCommunicationService) { }

  ngOnInit(): void {
    this.newTextCommunicationService.getTitlesFromServer().subscribe((res) => {

      //Because components subscribes on this, it will trigger
      //onchange in child components
      this.titleList = res;
    });
   
  }

  selectStart: Number = new Number();
  selectEnd: Number = new Number();
  selectedText: String = new String();
  commandTidslinjeWrapper: Array<tidslinjeCommandWrapper> = new Array < tidslinjeCommandWrapper >()

  tidslinjerList: Array<tidslinje> = new Array<tidslinje>()
  filteredtimelines: Observable<Array<tidslinje>> = new Observable<Array<tidslinje>>()

  titleList: Array<String> = new Array<String>()
  currentTitle: title = new title();

  selectStartChange1(selectedStart : Number) {
    console.log("Parent received number from child 1: " + selectedStart.valueOf());

    this.selectStart = selectedStart.valueOf() + 1;
    console.log("Parent changing this number to " + this.selectStart.valueOf())

     
  }
  selectStartChange2(selectedStart: Number) {
    this.selectStart = selectedStart;
    console.log("Parrent detected change in selected start point, from child 2, in text selection")
    console.log("Current start value is now: " + this.selectStart);
  }
  selectStartChange3(selectedStart: Number) {

  }
  selectStartChange4(selectedStart: Number) {

  }

  selectEndChange1(selectedEnd : Number) {

  }
  selectEndChange2(selectedEnd: Number) {
    this.selectEnd = selectedEnd;
    console.log("Parrent detected change in selected end point, from child 2, in text selection")
    console.log("Current end value is now: " + this.selectEnd);
  }
  selectEndChange3(selectedEnd: Number) {

  }
  selectEndChange4(selectedEnd: Number) {

  }

  selectedTextChange1(selectedText: String) {

  }
  selectedTextChange2(selectedText: String) {
    console.log("Parent received text from child 2: " + selectedText.valueOf());

    this.selectedText = selectedText.valueOf() + " parrent added this ";
    console.log("Parent changing this text to " + this.selectedText.valueOf())

  }
  selectedTextChange3(selectedText: String) {


  }
  selectedTextChange4(selectedText: String) {

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

  titleListChange1(titleList: Array<String>) {

  }
  titleListChange2(titleList: Array<String>) {
    console.log("Parrent detects, because of child 2, that we now have folowin timelines:")
    console.log(JSON.stringify(titleList));
  }
  titleListChange3(titleList: Array<String>) {

  }
  titleListChange4(titleList: Array<String>) {

  }

  titleChange1(title: title) {
    this.currentTitle = title;
    console.log("Parent detected that child 1 changed title to " + JSON.stringify(this.currentTitle))

    this.timelineCommunicationService.getInitPState(this.currentTitle.id).subscribe((res) => {
      this.tidslinjerList = res;
    
    });
  }
  titleChange2(title: title) {

  }
  titleChange3(title: title) {

  }
  titleChange4(title: title) {

  }

  filteredTimelineListChange1(tidslinjerList: Observable<Array<tidslinje>>) {

  }
  filteredTimelineListChange2(tidslinjerList: Observable<Array<tidslinje>>) {
    console.log("Parrent detected, because of child 2, that we now have these filtered timelines:")
    console.log(JSON.stringify(tidslinjerList))
    this.filteredtimelines = tidslinjerList
  }
  filteredTimelineListChange3(tidslinjerList: Observable<Array<tidslinje>>) {

  }
  filteredTimelineListChange4(tidslinjerList: Observable<Array<tidslinje>>) {

  }
}
