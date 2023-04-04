import { test } from "@playwright/test";
import { CountriesList } from "../pages/countriesList";

test("verify number of countries", async ({ page }) => {
  const countriesList = new CountriesList(page);
  await countriesList.goto();
  await countriesList.checkLocatorsCount();
});

test("verify corresponding language per country", async ({ page }) => {
  const countriesList = new CountriesList(page);
  const countries = countriesList.getCountriesIds();

  // Possible abstraction
  for (const countryId of countries) {
    await countriesList.goto();
    await countriesList.clickOnCountry(countryId);
    await countriesList.checkLanguage(countryId);
  }
});
