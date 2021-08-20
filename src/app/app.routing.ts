import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SettingComponent } from './setting/setting.component';

export const AppRoutes: Routes = [{
        path: '',
        component: AdminLayoutComponent,
        children: [{
          path:'home',
          component:HomeComponent,
          pathMatch: 'full',
        },{
          path:'setting',
          component:SettingComponent
        },{
          path:'employee',
          component:EmployeeComponent
        },{
          path: 'vendor',
          loadChildren: './vendors/vendors.module#VendorsModule'
      }]
      },{
          path: '',
          component: AuthLayoutComponent,
      }
];
