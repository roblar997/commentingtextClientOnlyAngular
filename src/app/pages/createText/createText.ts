
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "CreateText",
  templateUrl: "createText.html"
})
export class createTextComponent {
  newtextSchema: FormGroup;
  constructor(private fb: FormBuilder) {
    this.newtextSchema = fb.group({
      title: ["", Validators.required],
      text: ["", Validators.required],
    });
  }

  addNewText() {
    if (this.newtextSchema.valid) {

    }
  }

}
