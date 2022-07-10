
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from "@angular/core";
import { tidslinje } from "../../../../models/tidslinje";
import { tidslinjeCommandWrapper } from "../../../../models/tidslinjeCommandWrapper";
import { title } from "../../../../models/title";
import { FenwFeatureTree } from "../../../../structureClasses/FenwFeatureTree";

@Component({
  selector: "commentsearchinfo",
  templateUrl: "commentSearchInfo.html"
})
export class commentSearchInfoComponent implements OnChanges, OnInit {
  ngOnInit(): void {
    //TESTING!!
    this.selectedText = "textPart 1 "
    this.selectedTextChangeFun();
  }
  constructor(
    private cdref: ChangeDetectorRef) { }
  ngAfterViewInit() {

    Promise.resolve().then(() => this.cdref.detectChanges());
  }
  countLikes(start: Number, end: Number, percent: Number) {
    let timeLinesFilteredTime = this.filterListByTime(start.valueOf(), end.valueOf(), percent.valueOf());
  return timeLinesFilteredTime.reduce((nmbLikes, timeline) => {
    if (timeline.like) return nmbLikes + 1;
    else return nmbLikes;
  }, 0.0)
}
  countDisLikes(start: Number, end: Number, percent: Number) {
    let timeLinesFilteredTime = this.filterListByTime(start.valueOf(), end.valueOf(), percent.valueOf());
  return timeLinesFilteredTime.reduce((nmbDisLike, timeline) => {
    if (timeline.dislike) return nmbDisLike + 1;
    else return nmbDisLike;
  }, 0.0)
}
  ngOnChanges(changes: SimpleChanges) {

    for (let property in changes) {
      if (property == "selectedText")
        console.log("Child 2 detecting change. Value is now " + (changes[property].currentValue))
      else if (property == "currentTitle") {
        this.likes = 0
        this.dislikes = 0
        this.currentFenwick = new FenwFeatureTree(this.currentTitle.text.length);
        this.tidslinjerList.forEach((x) => { 
          if(x.start && x.end){
             this.currentFenwick.addTimeline(x.start.valueOf(), x.end.valueOf())
          }})
        this.countingList = this.currentFenwick.getCountingList(0, this.currentTitle.text.length);
        console.log("Have following counting list: " + this.countingList);
      }
      else if (property == "tidslinjerList")
        console.log("Child 2 detecting change. Value is now " + (JSON.stringify(changes[property].currentValue)))
    }
  } 
  //Get change in start and end of selection of text
  @Input('selectStart') selectStart: Number = new Number();
  @Output() selectStartChange: EventEmitter<Number> = new EventEmitter<Number>();

  //Like and dislikes
  likes = 0;
  dislikes = 0;

  getSelectedArea() {

  }
  selectStartChangeFun() {
    this.selectStartChange.emit(this.selectStart);
  }


  @Input('selectEnd') selectEnd: Number = new Number();

  @Output() selectEndChange: EventEmitter<Number> = new EventEmitter<Number>();
  selectEndChangeFun() {
    this.selectEndChange.emit(this.selectEnd);
  }


  //Send selected text between child components
  @Input('selectedText') selectedText: String = new String();
  @Output() selectedTextChange: EventEmitter<String> = new EventEmitter<String>();

  selectedTextChangeFun() {
    this.selectedTextChange.emit(this.selectedText.valueOf());
  }


  //Changes from server conserning comments
  @Input('commandTidslinjeWrapper') commandTidslinjeWrapper: Array<tidslinjeCommandWrapper> = new Array<tidslinjeCommandWrapper>();
  @Output() commandTidslinjeWrapperChange: EventEmitter<Array<tidslinjeCommandWrapper>> = new EventEmitter<Array<tidslinjeCommandWrapper>>();

  commandTidslinjeWrapperFun() {
    this.commandTidslinjeWrapperChange.emit(this.commandTidslinjeWrapper);
  }

  //ID'S in HTML
  @ViewChild("textToComment") textToComment!: ElementRef;
  @ViewChild("percent") percent!: ElementRef;
  
  captureSelected() {
    
    this.selectStart = this.textToComment.nativeElement.selectionStart;
    this.selectEnd = this.textToComment.nativeElement.selectionEnd;
    console.log("Following area is selected (start,end): (" + this.selectStart + "," + this.selectEnd + ")")
    console.log("Percent picked up is:" + this.percent.nativeElement.value)

    this.filteredtimelines = this.filterListByTime(this.selectStart.valueOf(), this.percent.nativeElement.value.valueOf(), this.percent.nativeElement.value.valueOf());
    this.likes = this.countLikes(this.selectStart.valueOf(), this.percent.nativeElement.value.valueOf(), this.percent.nativeElement.value);
    this.dislikes = this.countDisLikes(this.selectStart.valueOf(), this.percent.nativeElement.value.valueOf(), this.percent.nativeElement.value);

    //Send notification to parrent, such that one can broadcast this info to other childs
    this.selectStartChangeFun();
    this.selectEndChangeFun();
    this.filteredTimelinesChangeFun();
  }

  filterListByTime(start: number, end: number, percent: number) {
    return this.tidslinjerList.filter((x) => {
      if (x.start == undefined) x.start = 0;
      if (x.end == undefined) x.end = this.tidslinjerList.length;
      return x.start.valueOf() >= start && x.end.valueOf() <= end && ((x.start.valueOf() - x.end.valueOf()) / (start - end)) * 100 >= percent;
     })
    
  }
  percentChange() {
    console.log("Percent changed to:" + this.percent.nativeElement.value)
    this.filteredtimelines = this.filterListByTime(this.selectStart.valueOf(), this.percent.nativeElement.value.valueOf(), this.percent.nativeElement.value);
    this.likes = this.countLikes(this.selectStart.valueOf(), this.percent.nativeElement.value.valueOf(), this.percent.nativeElement.value);
    this.dislikes = this.countDisLikes(this.selectStart.valueOf(), this.percent.nativeElement.value.valueOf(), this.percent.nativeElement.value);
    this.filteredTimelinesChangeFun();
 
  }

  //When choosen a title, send timelines here
  @Input('tidslinjerList') tidslinjerList: Array<tidslinje> = new Array<tidslinje>();
  @Output() tidslinjerListChange: EventEmitter<Array<tidslinje>> = new EventEmitter<Array<tidslinje>>();

  tidslinjerListChangeFun() {
    this.tidslinjerListChange.emit(this.tidslinjerList);
  }

  //When entering website, load all titles.
  @Input('titleList') titleList: Array<String> = new Array<String>();
  @Output() titleListChange: EventEmitter<Array<String>> = new EventEmitter<Array<String>>();

  titleListChangeFun() {
    this.titleListChange.emit(this.titleList);
  }
  //Current title
  @Input('currentTitle') currentTitle: title = new title();
  @Output() currentTitleChange: EventEmitter<title> = new EventEmitter<title>();

  currentFenwick!: FenwFeatureTree;
  countingList!: number[]

  titleChangeFun() {

    this.currentTitleChange.emit(this.currentTitle);
  }

  //Filtered timelines
  @Input('filteredtimelines') filteredtimelines: Array<tidslinje> = new Array<tidslinje>();
  @Output() filteredtimelinesChange: EventEmitter<Array<tidslinje>> = new EventEmitter<Array<tidslinje>>();

  filteredTimelinesChangeFun() {
    this.filteredtimelinesChange.emit(this.filteredtimelines  );
  }
}
