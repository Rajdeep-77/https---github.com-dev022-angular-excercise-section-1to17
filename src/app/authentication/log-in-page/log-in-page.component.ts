import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  userForm = new FormGroup({
    'email' : new FormControl(null, [Validators.required,Validators.email]),
    'password' : new FormControl(null, [Validators.required])
  });

  //This function lets the user log in
  onLogin(){}

}
