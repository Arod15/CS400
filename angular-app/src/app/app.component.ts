import { Component } from '@angular/core';
// importing my data json file from PS4
import * as json from './ps4Data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = JSON.parse(JSON.stringify(json));
  // data = json;
}
