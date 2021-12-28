import { Component, OnInit } from '@angular/core';
import { country, state } from '../home/home.model';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  countryString = '';
  country: string[] = [];
  stateDetails!: state;
  filteredState: any;
  countryContent!: country;
  census: any;
  currentCountry: string = '';
  constructor(public homeService: HomeService) { }

  ngOnInit(): void {
    // this.countryString = '<' + 'Selected Country' + '>';
    // this.homeService.getCountry()
    //   .subscribe((countryData) => {
    //     this.countryContent = countryData;
    //   })
    this.homeService.currentCountry$.subscribe((country: string) => {
      this.currentCountry = country;
      this.onChange(this.currentCountry)
    });
  }

  async onChange(countryName: string) {
    this.homeService.getState(countryName)
      .subscribe((stateData) => {
        this.stateDetails = stateData;
      })
    this.filteredState = this.stateDetails;
    if (this.filteredState) {
      Object.keys(this.filteredState).map((key: any) => {
        if (key === countryName) {
          this.census = this.filteredState[countryName].All;
        }
      });
    } else {
      alert('No Data Found');
    }
  }

}
