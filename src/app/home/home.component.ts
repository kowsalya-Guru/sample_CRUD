import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { map } from 'rxjs/operators';
import { country } from './home.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countryArray!: country;
  filteredCountry!: any;
  countryContent: any;
  currentCountry: string = '';
  constructor(public homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getCountry()
    .subscribe((countryData) => {
      this.countryArray = countryData;   
    })
    this.homeService.currentCountry$.subscribe((country: string) => {
      this.currentCountry = country;
      this.onChange(this.currentCountry)
    });
   
  }

  async onChange(option: string) {
    this.filteredCountry = this.countryArray;
    if(this.filteredCountry) {
      Object.keys(this.filteredCountry).map((key: any) => {
        if (key === option) {
          this.countryContent = this.filteredCountry[option].All;
        }
      });  
    }
  }

}
