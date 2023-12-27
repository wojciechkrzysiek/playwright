import { test, expect } from '@playwright/test';
const { HomePage } = require('../page-objects/HomePage');
const { WomenCategoryPage } = require('../page-objects/categories/WomenCategoryPage');
const { AddToCartPopupPage } = require('../page-objects/AddToCartPopupPage');

test('New order', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.openHomePage();
    expect (await homePage.womenCategory).toBeVisible();
    await homePage.openWomenCategory();

    const womenCategoryPage = new WomenCategoryPage(page);
    expect(await womenCategoryPage.categoryName.innerText()).toContain('Women');
    await womenCategoryPage.setTopsCategoryByCategoryBlock();
    await womenCategoryPage.setBlousesSubcategoryByCatalogBlock();
    expect(await womenCategoryPage.blousesSubcategoryCheckbox).toBeChecked();
    await expect(await womenCategoryPage.productList.locator(womenCategoryPage.loader)).toBeHidden();
    await womenCategoryPage.firstProduct.click();

    const addToCartPopupPage = new AddToCartPopupPage(page);
    await expect(await addToCartPopupPage.header).toBeVisible();

});