import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidelayout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule ],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ]
})

export class SideLayoutModule {}
