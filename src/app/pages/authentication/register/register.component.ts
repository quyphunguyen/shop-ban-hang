import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NotificationService} from "../../../notification/notification.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent {
  constructor(private router: Router,
              protected _notificationSvc: NotificationService) {}

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    // console.log(this.form.value);

  }

  sendSuccess() {
    this._notificationSvc.success('Hello World','This is a success !');
  }

  sendError() {
    this._notificationSvc.error('Hello World', 'This is an error :(');
  }

}
