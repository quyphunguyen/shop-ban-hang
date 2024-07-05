import {Routes} from '@angular/router';
import {AppDashboardComponent} from './dashboard/dashboard.component';
import {CuaHangComponent} from "./cuaHang/cuaHang.component";
import {ShopingComponent} from "./shoping/shoping.component";
import {AppProfileComponent} from "./authentication/profile/profile.component";

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AppDashboardComponent,
      },
      {
        path: 'cuaHang',
        component: CuaHangComponent,
      },
      {
        path: 'shoping',
        component: ShopingComponent,
      },
      {
        path: 'user/info',
        component: AppProfileComponent,
      },


    ],
  }
];
