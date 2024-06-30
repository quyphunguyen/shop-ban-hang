import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from "../../../notification/notification.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private router: Router,
              protected _notificationSvc: NotificationService,
              private userService: UserService,
              private formBuilder: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {

  }

  private initForm(){
  this.form = this.formBuilder.group({
    userName: ['', [Validators.required]],
    email: ['', Validators.required],
    userPassword: ['', Validators.required],
  });
}

  get f() { return this.form.controls; }

  submit() {
    // console.log(this.form.value);
    if(!this.form.invalid){
      this.userService.saveUser(this.form.value).subscribe(value => {
        if (value){
          this.sendSuccess();
          this.router.navigate(['/authentication/login']);
        }else{
          this.sendError();
        }
      })
    }
  }

  sendSuccess() {
    this._notificationSvc.success('Thông báo','Xin chào !');
  }

  sendError() {
    this._notificationSvc.error('Thông báo', "Lỗi hệ thống !");
  }

}
