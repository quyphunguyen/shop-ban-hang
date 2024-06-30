import {Component, OnInit} from '@angular/core';
import {MyTestService} from "../../services/my-test.service";
import {Productcard} from "../../dto/Productcard";


@Component({
  selector: 'shoping',
  templateUrl: './shoping.component.html'
})
export class ShopingComponent  implements OnInit{
  productcards: Productcard[] = [
    {
      id: 1,
      imgSrc: '/assets/images/products/s4.jpg',
      title: 'Boat Headphone',
      price: '285',
      rprice: '375',
    },
    {
      id: 2,
      imgSrc: '/assets/images/products/s5.jpg',
      title: 'MacBook Air Pro',
      price: '285',
      rprice: '375',
    },
    {
      id: 3,
      imgSrc: '/assets/images/products/s7.jpg',
      title: 'Red Valvet Dress',
      price: '285',
      rprice: '375',
    },
    {
      id: 4,
      imgSrc: '/assets/images/products/s11.jpg',
      title: 'Cute Soft Teddybear',
      price: '285',
      rprice: '375',
    },
    {
      id: 4,
      imgSrc: '/assets/images/products/s11.jpg',
      title: 'Cute Soft Teddybear',
      price: '285',
      rprice: '375',
    },
  ];
  constructor(private productService: MyTestService) {}

  ngOnInit() {
      this.tracuuDanhmuc();
  }

  async tracuuDanhmuc() {
    this.productService.getPosts().subscribe(value => {
      if (value){

      }
    })
  }

}
