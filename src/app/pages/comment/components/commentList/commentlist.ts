
import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { tidslinje } from "../../../../models/tidslinje";
import { tidslinjeCommandWrapper } from "../../../../models/tidslinjeCommandWrapper";
import { title } from "../../../../models/title";
import { changeCommentModal } from "../../modal/changeCommentModal";
import { FormsModule } from '@angular/forms';
import { tidslinjeChangeForm } from "../../../../models/tidslinjeChangeForm";

@Component({
  selector: "commentlist",
  templateUrl: "commentlist.html"
})
export class commentlistComponent implements OnChanges, OnInit {
  ngOnInit(): void {

  }
  constructor(private cdref: ChangeDetectorRef,private modalService: NgbModal) {

  }
  ngAfterViewInit() {

    Promise.resolve().then(() => this.cdref.detectChanges());
  }

  ngOnChanges(changes: SimpleChanges) {

    for (let property in changes) {

    }
  }
  //Get change in start and end of selection of text
  @Input('selectStart') selectStart: Number = new Number();
  @Output() selectStartChange: EventEmitter<Number> = new EventEmitter<Number>();

  selectStartChangeFun() {
    
    this.selectStartChange.emit(this.selectStart);
  }

  highlightText(id: Number) {
    console.log("Started function to highlight by id " + id.valueOf())
  }
  getChangbox(id: Number) {
    console.log("Started function to change by id " + id.valueOf())

    const modalRef = this.modalService.open(changeCommentModal, {

      backdrop: 'static',
      keyboard: false

    })
    modalRef.result.then(retur => {
      if (retur == "ok") {
        console.log("Modal is closed. List component received form data " + JSON.stringify(modalRef.componentInstance.tidslinjechange));
        this.changeTimeline(id, modalRef.componentInstance.tidslinjechange);
      }
       

      else
        console.log("Modal closed without change")
    });


  }
  changeTimeline(id: Number, formdata: tidslinjeChangeForm) {
    console.log("Now changing timeline with id " + id);
  }

  removeById(id: Number) {
    console.log("Started function to remove by id " + id.valueOf())
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
  @Input('titleList') titleList: Array<String> = new Array<String>();
  @Output() titleListChange: EventEmitter<Array<String>> = new EventEmitter<Array<String>>();

  titleListChangeFun() {
    this.titleListChange.emit(this.titleList);
  }

  //Current title
  @Input('currentTitle') currentTitle: title = new title();
  @Output() currentTitleChange: EventEmitter<title> = new EventEmitter<title>();

  titleChangeFun() {
    this.currentTitleChange.emit(this.currentTitle);
  }

  //Filtered timelines
  @Input('filteredtimelines') filteredtimelines: Array<tidslinje> = new Array<tidslinje>();
  @Output() filteredtimelinesChange: EventEmitter<Array<tidslinje>> = new EventEmitter<Array<tidslinje>>();

  filteredTimelinesChangeFun() {
    this.filteredtimelinesChange.emit(this.filteredtimelines);
  }
}
