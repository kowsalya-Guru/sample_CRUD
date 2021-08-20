import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    collapse?: string;
    // icontype: string;
    icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/home',
        title: 'Home',
        type: 'link',
        icon: 'nc-icon nc-shop'
    },{
        path: '/employee',
        title: 'Employee',
        type: 'link',
        icon: 'nc-icon nc-single-02'
    },{
        path: '/vendor',
        title: 'Vendor',
        type: 'link',
        icon: 'nc-icon nc-chart-bar-32'
    },{
        path: '/setting',
        title: 'Setting',
        type: 'link',
        icon: 'nc-icon nc-settings'
    }
];

@Component({
    moduleId: module.id,
    selector: 'sidelayout-cmp',
    templateUrl: 'sidelayout.component.html',
})

export class SidebarComponent {
    public menuItems: any[];
    isNotMobileMenu(){
        if( window.outerWidth > 991){
            return false;
        }
        return true;
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    ngAfterViewInit(){
    }
}
