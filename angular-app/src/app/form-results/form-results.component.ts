import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-results',
  templateUrl: './form-results.component.html',
  styleUrls: ['./form-results.component.css']
})
export class FormResultsComponent implements OnInit {
  @Input() results;

  constructor() { }

  ngOnInit(): void {
  }

}
