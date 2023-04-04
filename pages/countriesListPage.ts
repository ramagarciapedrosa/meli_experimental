import { Page } from "@playwright/test";
import { CountriesList } from "./countriesList";

export class CountriesListPage extends CountriesList {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto("https://www.mercadolibre.com/");
  }

  async clickOnCountry(countryId: string) {
    await this.locateCountry(countryId).click();
  }
}
