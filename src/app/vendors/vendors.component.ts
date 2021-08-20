import { Component, OnInit,ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { Router, NavigationExtras } from '@angular/router';
import {VendorService} from './vendors.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  vendor = [];

  constructor(public router:Router,public vendorService:VendorService) { }

  ngOnInit(): void {
    this.dtOptions = {
      paging: false,
      info: false,
      ordering: false,
      responsive: true,
      data: this.vendor,
      columns: [{
        title: 'S.NO',
        render: function(data: any, type: any, row: any, meta: any) {
          return meta.row + 1;
        },
      }, {
        title: "Vendor Name",
        data: 'name' 
      }, {
        title: "Type",
        data: "type"
      }, {
        title: "Contact Email",
        data: "email"
      }, {
        title: "Website URL",
        data: "url"
      }, {
        title: 'Action',
        render: function () {
          return '<button class="btn btn-link btn-warning btn-icon btn-sm edit"><i class="fa fa-pencil"></i></button>&nbsp;' +
            '<button class="btn btn-link btn-danger btn-icon btn-sm delete"><i class="fa fa-trash"></i></button>';
        }
      }],
      
      // call back row to perform edit and delete operations
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('.edit', row).off('click');
        $('.edit', row).on('click', () => {
          this.onEdit(data);
        });
        $('.delete', row).off('click');
        $('.delete', row).on('click', () => {
          this.onDelete(data)
        });
        return row;
      }
    }
    this.vendorService.readVendor('?active=true')
    .then(vendor_res => {
      this.vendor = vendor_res;  
      this.dtOptions.data = this.vendor;
      this.dtTrigger.next();    
    })
    .catch(err => {
      console.log(err);
    });
  }

  refreshTable(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();    
      this.ngOnInit();
    });
  }

  ngAfterViewInit(): void { }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  onEdit(data) {
    const navigationExtras: NavigationExtras = { state: data };
    this.router.navigate(['/vendor/new-vendor'], navigationExtras);
  }
  
  onDelete(data) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      confirmButtonText: 'Yes, delete it!',
       buttonsStyling: false
    }).then((result) => {
      if (result.value) {
        this.vendorService.deleteVendor(data._id).then(()=>{
          Swal.fire(
            {
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              type: 'success',
              confirmButtonClass: "btn btn-success",
              buttonsStyling: false
            }
          )
          this.refreshTable();
        }).catch(err =>{
          Swal.fire({
            title: err.statusText,
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success"
          });
        });
      }
    })
  } 

}
