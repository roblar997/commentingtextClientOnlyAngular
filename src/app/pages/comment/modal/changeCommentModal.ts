import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { tidslinje } from '../../../models/tidslinje';
import { tidslinjeChangeForm } from '../../../models/tidslinjeChangeForm';

@Component({
  templateUrl: 'changeCommentModal.html'
})
export class changeCommentModal {
  constructor(public modal: NgbActiveModal) { }

  @Input() public tidslinjechange: tidslinjeChangeForm = new tidslinjeChangeForm();
  @Output() componentResult: EventEmitter<tidslinjeChangeForm> = new EventEmitter();

  resultChange() {
    console.log("Modal is detecting form is changed to" + JSON.stringify(this.tidslinjechange));
    this.componentResult.emit(this.tidslinjechange);
    
  }
}
