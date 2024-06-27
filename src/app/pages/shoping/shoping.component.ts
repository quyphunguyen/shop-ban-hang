import {Component, OnInit} from '@angular/core';
import {MyTestService} from "../../services/my-test.service";


@Component({
  selector: 'shoping',
  templateUrl: './shoping.component.html'
})
export class ShopingComponent  implements OnInit{
  datas: any;
  constructor(private productService: MyTestService) {}

  ngOnInit() {
    console.log('ngOnInit');
      this.tracuuDanhmuc();
  }

  async tracuuDanhmuc() {
    try {

      let response = <any>(
        await this.productService.getPosts()
      );
      if (response) {
        console.log(response)
      } else {
        console.log('lỗi')
      }
    } catch (err) {
      console.log('lỗi1')
    }
  }

}
