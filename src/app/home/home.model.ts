export interface country {
  country_id: {
    All: {
      confirmed: number,
      recovered: number,
      deaths: number,
      country: string,
      population: number,
      sq_km_area: number,
      life_expectancy: string,
      elevation_in_meters: number,
      continent: string,
      abbreviation: string,
      location: string,
      iso: number,
      capital_city: string,
      lat: string,
      long: string,
      updated: string
    },
    FrenchGuiana: {
      lat: string,
      long: string,
      confirmed: number,
      recovered: number,
      deaths: number,
      updated: string
    }
  }
}  



export interface state {
  All: {
    country: string,
    population: number,
    sq_km_area: number,
    life_expectancy: string,
    elevation_in_meters: number,
    continent: string,
    abbreviation: string,
    location: string,
    iso: number,
    capital_city: string,
    dates: { date: number },
  }
}
export interface vaccineDetails {
  All: {
    administered: number,
    people_vaccinated: number,
    people_partially_vaccinated: number,
    country: string,
    population: number,
    sq_km_area: number,
    life_expectancy: string,
    elevation_in_meters: number,
    continent: string,
    abbreviation: string,
    location: string,
    iso: number,
    capital_city: string,
    lat: string,
    long: string,
    updated: string
  }
}
