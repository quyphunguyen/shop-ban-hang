import { Routes } from '@angular/router';
import {AddProductComponent} from "./addproduct/add-product";
import {ListProductComponent} from "./listProduct/list-product";


export const AdminsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addProduct',
        component: AddProductComponent,
      },
      {
        path: 'list',
        component: ListProductComponent,
      }
    ],
  }
];
