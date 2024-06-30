import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MyTestService} from "../../../services/my-test.service";
import { Router }          from '@angular/router';
import {NotificationService} from "../../../notification/notification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  formUser = new FormGroup({
    userName: new FormControl<string>(''),
    userPassword: new FormControl<string>(''),
  });
  constructor(private productService: MyTestService,
              private router: Router,
              protected _notificationSvc: NotificationService,) {}

  onSubmit(): void {
    this.getUserById();
  }

  async getUserById() {
    this.productService.getUser(this.formUser.value).subscribe(value => {
      if (value){
        this.sendSuccess();
        this.router.navigate(['/']);
      }else{
        this.sendWarning();
      }
    })
  }
  sendSuccess() {
    this._notificationSvc.success('Thông báo','Xin chào !');
  }

  sendWarning() {
    this._notificationSvc.warning('Thông báo', "Tài khoản hoặc mật khẩu không chính xác !");
  }
}
