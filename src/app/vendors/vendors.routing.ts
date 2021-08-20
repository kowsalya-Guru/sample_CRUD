import { Routes } from '@angular/router';
import { NewVendorComponent } from './new-vendor/new-vendor.component';
import { VendorsComponent } from './vendors.component';

export const VendorsRoutes: Routes = [{
        path:'',
        component:VendorsComponent
    },{
        path: '',
        children: [ {
            path: 'new-vendor',
            component: NewVendorComponent
        }]
    }
];
