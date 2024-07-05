import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {FileUploadService} from "../../../services/file-upload.service";
import {ProductService} from "../../../services/product.service";
import {NotificationService} from "../../../notification/notification.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  form: FormGroup;
  file: null = null;

  file_store: FileList;

  base64File = null;
  percentDone: number = 0;
  constructor(
              private router: Router,
              private fileUploadService: FileUploadService,
              protected _notificationSvc: NotificationService,
              private productService: ProductService,
              private formBuilder: FormBuilder) {
    this.initForm();
  }

  private initForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      imgSrc: ['', Validators.required],
      fileName: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', Validators.required],
      rprice: ['', Validators.required],
    });
  }

  onFileSelect(e: any): void {
    try {
      const file = e.target.files[0];
      const fReader = new FileReader()
      fReader.readAsDataURL(file)
      fReader.onloadend = (_event: any) => {

        this.base64File = _event.target.result;
      }
      this.fileUploadService.upload(file).subscribe((event: any) => {
        if(event){
          this.form.get('fileName')?.setValue(event.fileName);
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
    this.fileUploadService.delete(this.form.get('fileName')?.getRawValue()).subscribe((event: any) => {
      if(event){
        this.form.get('fileName')?.setValue('');
      }

    });

  }

    save(){
      this.productService.save(this.form.getRawValue()).subscribe(value => {
        if (value){
         if(this.form.get('id')?.value){
           this.sendSuccess('Cập nhật thành công !');
         }else{
           this.sendSuccess('Thêm mới thành công !');
         }
          this.form.setValue(value);
        }else{
          this.sendError();
        }
      });
    }

  delete(){
    this.productService.delete(this.form.get('id')?.value).subscribe(value => {
      if (value){
        this.sendSuccess('Xóa thành công !');
        this.clearData();
      }else{
        this.sendError();
      }
    });
  }

    clearData(){
      this.deleteFile();
      this.initForm();
    }


  sendSuccess(content: string) {
    this._notificationSvc.success('Thông báo',content);
  }


  sendError() {
    this._notificationSvc.error('Thông báo', "Lỗi hệ thống !");
  }

}
