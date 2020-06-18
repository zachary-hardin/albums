import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-lookup-form',
  templateUrl: './lookup-form.component.html',
  styleUrls: ['./lookup-form.component.css']
})
export class LookupFormComponent implements OnInit {
  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      albumId: new FormControl('')
    });
  }

  searchClicked() {
  }
}
