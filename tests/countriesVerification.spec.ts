import { test } from "@playwright/test";
import { CountriesListPage } from "../modules/countriesListPage";
import { CountriesList } from "../modules/countriesList";
import { CountriesListLocators } from "../modules/countriesListLocators";
import { CountriesListCheckers } from "../modules/countriesListCheckers";

test.describe("test countries pages", () => {
  test("verify number of countries", async ({ page }) => {
    const countriesListPage = new CountriesListPage(page);
    const countriesListCheckers = new CountriesListCheckers(page);
    const countriesListLocators = new CountriesListLocators(page);

    await countriesListPage.goto();
    await countriesListCheckers.checkLocatorsCount(
      countriesListLocators.countries
    );
  });

  const countries = CountriesList.getCountriesIds();

  countries.forEach((country) => {
    test(`verify ${country}'s page language`, async ({ page }) => {
      const countriesPage = new CountriesListPage(page);
      const countriesCheckers = new CountriesListCheckers(page);
      const countriesListLocators = new CountriesListLocators(page);

      await countriesPage.goto();
      await countriesPage.clickOnCountry(
        countriesListLocators.locateCountry(country)
      );
      await countriesCheckers.checkLanguage(
        country,
        countriesListLocators.body
      );
    });
  });
});
