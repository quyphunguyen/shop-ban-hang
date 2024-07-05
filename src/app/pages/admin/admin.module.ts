import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgApexchartsModule} from 'ng-apexcharts';
// icons
import {TablerIconsModule} from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import {AdminsRoutes} from "./admin.routing.module";
import {MaterialModule} from "../../material.module";
import {AddProductComponent} from "./addproduct/add-product";
import {ListProductComponent} from "./listProduct/list-product";

@NgModule({
  declarations: [AddProductComponent,ListProductComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    NgApexchartsModule,
    RouterModule.forChild(AdminsRoutes),
    TablerIconsModule.pick(TablerIcons),
    ReactiveFormsModule,
  ],
  exports: [TablerIconsModule],
})
export class AdminsModule {}
