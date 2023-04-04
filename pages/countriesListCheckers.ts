import { Page, expect, Locator } from "@playwright/test";
import { CountriesList } from "./countriesList";

export class CountriesListCheckers extends CountriesList {
  constructor(page: Page) {
    super(page);
  }

  async checkLocatorsCount(locator: Locator[]) {
    await expect(locator.length).toEqual(this._numOfCountries);
  }

  async checkLanguage(countryId: string, locator: Locator) {
    await expect(locator).toHaveAttribute("data-country", countryId);
  }
}
