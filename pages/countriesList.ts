import { Page, Locator, expect } from "@playwright/test";

enum Countries {
  Argentina = "AR",
  Boliva = "BO",
  Brasil = "BR",
  Chile = "CL",
  Colombia = "CO",
  CostaRica = "CR",
  Dominicana = "DO",
  Ecuador = "EC",
  Guatemala = "GT",
  Honduras = "HN",
  Mexico = "MX",
  Nicaragua = "NI",
  Panama = "PA",
  Paraguay = "PY",
  Peru = "PE",
  ElSalvador = "SV",
  Uruguay = "UY",
  Venezuela = "VE",
}

export class CountriesList {
  private page: Page;
  private countries: Locator[] = [];
  private numOfCountries = 18;

  constructor(page: Page) {
    this.page = page;
    this.generateLocators();
  }

  // Inner functions

  private locateCountry(countryId: string) {
    return this.page.locator(`#${countryId}`);
  }

  private generateLocators() {
    for (const country in Countries) {
      this.countries.push(this.locateCountry(country));
    }
  }

  // Actions

  async goto() {
    await this.page.goto("https://www.mercadolibre.com/");
  }

  async clickOnCountry(countryId: string) {
    await this.locateCountry(countryId).click();
  }

  // Checkers

  async checkLocatorsCount() {
    await expect(this.page.getByRole("link")).toHaveCount(this.numOfCountries);
  }

  async checkLanguage(countryId: string) {
    await expect(this.page.locator("body")).toHaveAttribute(
      "data-country",
      countryId
    );
  }

  // Utils

  getCountriesIds() {
    return Object.values(Countries);
  }
}
