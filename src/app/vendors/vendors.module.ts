import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NewVendorComponent } from './new-vendor/new-vendor.component';
import { VendorsRoutes } from './vendors.routing';
import { VendorsComponent } from './vendors.component';

@NgModule({
  declarations: [ VendorsComponent,NewVendorComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(VendorsRoutes),
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})

export class VendorsModule { }