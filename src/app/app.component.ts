import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeService } from './home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  country: string[] = [];
  countryString = '';

  constructor(public homeService: HomeService) { }

  ngOnInit() {
    this.countryString = '<' + 'Selected Country' + '>';
    this.homeService.getCountry()
    .subscribe((countryData) => {
      Object.keys(countryData).map((key: any) => {
        this.country.push(key);
      });
    })
  }

  onChange(option: string) {
    this.homeService.setCurrentPage(option);
   }
}
