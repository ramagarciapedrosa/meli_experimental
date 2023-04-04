import { Page } from "@playwright/test";
import { Countries } from "./countriesEnum";

export class CountriesList {
  protected page: Page;
  protected _numOfCountries: number;

  constructor(page: Page) {
    this.page = page;
    this._numOfCountries = Object.values(Countries).length;
  }

  static getCountriesIds() {
    return Object.values(Countries);
  }
}
