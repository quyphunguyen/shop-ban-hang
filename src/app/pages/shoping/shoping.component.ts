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
    this.productService.getPosts().subscribe(value => {
      if (value){
        this.datas = value[0].id
      }
    })
  }

}
