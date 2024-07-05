import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyTestService} from "../../../services/my-test.service";
import {Router} from '@angular/router';
import {NotificationService} from "../../../notification/notification.service";
import {FileUploadService} from "../../../services/file-upload.service";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class AppProfileComponent implements OnInit{
  formUser: FormGroup;
  base64File = null;
  percentDone: number = 0;
  constructor(private productService: MyTestService,
              private router: Router,
              protected _notificationSvc: NotificationService,
              private fileUploadService: FileUploadService,
              private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
    this.getInfoUser();
  }

  initForm(){
    this.formUser = this.fb.group({
      id: [''],
      userName: ['', Validators.required],
      userPassword: ['', Validators.required],
      imgSrc: ['', Validators.required],
    });
  }

  getInfoUser(){
    const sessionUser=  sessionStorage.getItem('user');
    debugger
    if(sessionUser){
      var obj = JSON.parse(sessionUser);
      this.formUser.get('id')?.setValue(obj.id);
      this.formUser.get('userName')?.setValue(obj.userName);
      this.formUser.get('userPassword')?.setValue(obj.userPassword);
    }
  }

  onFileSelect(e: any): void {
    try {
      const file = e.target.files[0];
      debugger
      const fReader = new FileReader()
      fReader.readAsDataURL(file)
      fReader.onloadend = (_event: any) => {

        this.base64File = _event.target.result;
      }

      this.fileUploadService.upload(file).subscribe((event: any) => {
        if(event){
          this.formUser.get('imgSrc')?.setValue(event.fileName);
          this.percentDone = 100;
        }

      });
    } catch (error) {
      this.deleteFile();
    }
  }

  deleteFile(){
    this.base64File = null;
    this.percentDone = 0;
    this.fileUploadService.delete(this.formUser.get('imgSrc')?.getRawValue()).subscribe((event: any) => {
      if(event){
        this.formUser.get('fileName')?.setValue('');
      }

    });
  }

}
