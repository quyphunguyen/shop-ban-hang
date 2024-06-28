import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MyTestService} from "../../../services/my-test.service";
import { Router }          from '@angular/router';

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
              private router: Router) {}

  onSubmit(): void {
    this.getUserById();
  }
  async getUserById() {
    this.productService.getUser(this.formUser.value).subscribe(value => {
      if (value){
        this.router.navigate(['/dashboard/shoping']);
      }
    })
  }
}
