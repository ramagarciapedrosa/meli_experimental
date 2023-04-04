import { Page, Locator } from "@playwright/test";
import { CountriesList } from "./countriesList";

export class CountriesListPage extends CountriesList {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto("https://www.mercadolibre.com/");
  }

  async clickOnCountry(country: Locator) {
    await country.click();
  }
}
