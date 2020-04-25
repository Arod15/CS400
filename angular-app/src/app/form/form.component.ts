import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../config.service';

// import { HttpClient, HttpHeaders } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  signinForm = new FormGroup({
    query: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  public apiResults;

  constructor(private configService: ConfigService) { }

  onSubmit() {
    let val = this.signinForm.value.query;
    console.log(val);
    this.configService.getActivity(val).subscribe(
      data => {this.apiResults = data},
      err => console.log(err),
      () => console.log('done!')
    );
    console.log(this.apiResults);
  }

  ngOnInit(): void {
  }

}
