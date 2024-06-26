import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import {CuaHangComponent} from "./cuaHang/cuaHang.component";
import {AppBadgeComponent} from "./ui-components/badge/badge.component";
import {AppChipsComponent} from "./ui-components/chips/chips.component";
import {AppListsComponent} from "./ui-components/lists/lists.component";
import {AppMenuComponent} from "./ui-components/menu/menu.component";
import {AppTooltipsComponent} from "./ui-components/tooltips/tooltips.component";
import {ShopingComponent} from "./shoping/shoping.component";

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
      }
    ],
  }
];
