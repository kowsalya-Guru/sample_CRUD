import { Component, OnInit } from '@angular/core';
import { country, vaccineDetails } from '../home/home.model';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {
  countryString = '';
  country: string[] = [];
  vaccineDetails!: vaccineDetails;
  filteredVaccine: any;
  countryContent!: country;
  census: any;
  currentCountry: string = '';
  constructor(public homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getCountry()
      .subscribe((countryData) => {
        this.countryContent = countryData;
      })
    this.homeService.currentCountry$.subscribe((country: string) => {
      this.currentCountry = country;
      this.onChange(this.currentCountry)
    });
  }

  async onChange(countryName: string) {
    this.homeService.getVaccineDetails(countryName)
      .subscribe((vaccineData) => {
        this.vaccineDetails = vaccineData;
      })
    this.filteredVaccine = this.vaccineDetails;
    Object.keys(this.filteredVaccine).map((key: any) => {
      if (key === countryName) {
        this.census = this.filteredVaccine[countryName].All;
      }
    });
    if(!this.vaccineDetails) alert('No Data found');
  }

}
