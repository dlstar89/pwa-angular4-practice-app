import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';
import { routeFadeIn } from '../../_animations/animations';

@Component({
  selector: 'app-pageForm',
  templateUrl: './pageForm.component.html',
  styleUrls: ['./pageForm.component.css'],
  animations: [routeFadeIn]
})
export class PageFormComponent implements OnInit {

  formOutput;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    this.formOutput = JSON.stringify(form.value);
  }

  reset(form) {
    this.formOutput = null;
  }
}
