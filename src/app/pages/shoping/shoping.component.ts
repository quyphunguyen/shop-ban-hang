import {Component, OnInit} from '@angular/core';
import {MyTestService} from "../../services/my-test.service";
import {ProductCard} from "../../dto/Productcard";
import {environment} from "../../environments/environment";


@Component({
  selector: 'shoping',
  templateUrl: './shoping.component.html'
})
export class ShopingComponent  implements OnInit{
  protected readonly environment = environment;
  productcards: ProductCard[];
  constructor(private productService: MyTestService) {}

  ngOnInit() {
      this.tracuuDanhmuc();
  }

  async tracuuDanhmuc() {
    this.productService.getFindAll().subscribe(value => {
      if (value){
          this.productcards = value;
      }
    })
  }


}
