import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ProductCard} from "../../../dto/Productcard";
import {ProductService} from "../../../services/product.service";

/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  templateUrl: 'list-product.component.html',
})
export class ListProductComponent implements OnInit{


  ELEMENT_DATA: ProductCard[]=[];
  displayedColumns = ['title', 'price', 'rprice', 'fileName'];
  dataSource = new MatTableDataSource<ProductCard>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private productService:ProductService,
  ) {

  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<ProductCard>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.productService.getAll().subscribe(value => {
      this.ELEMENT_DATA = value;
      this.ngAfterViewInit();

    })
  }


}




/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
