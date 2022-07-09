import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: 'changeCommentModal.html'
})
export class changeCommentModal {
  constructor(public modal: NgbActiveModal) { }
}
