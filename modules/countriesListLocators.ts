import { Locator, Page } from "@playwright/test";
import { CountriesList } from "./countriesList";

export class CountriesListLocators extends CountriesList {
  countries: Locator[] = [];
  body: Locator;

  constructor(page: Page) {
    super(page);
    this.getCountriesLocators();
    this.body = this.page.locator("body");
  }

  private async getCountriesLocators() {
    const countries = CountriesList.getCountriesIds();
    for (const countryId in countries) {
      this.countries.push(this.locateCountry(countryId));
    }
  }

  locateCountry(countryId: string) {
    return this.page.locator(`#${countryId}`);
  }
}
