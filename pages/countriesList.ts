import { Page } from "@playwright/test";
import { Countries } from "./countriesEnum";

export class CountriesList {
  protected page: Page;
  protected _numOfCountries = 18;

  constructor(page: Page) {
    this.page = page;
  }

  protected locateCountry(countryId: string) {
    return this.page.locator(`#${countryId}`);
  }

  static getCountriesIds() {
    return Object.values(Countries);
  }
}
