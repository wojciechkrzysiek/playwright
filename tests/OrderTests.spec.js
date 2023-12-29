import { test, expect } from '@playwright/test';
const { HomePage } = require('../page-objects/HomePage');
const { WomenCategoryPage } = require('../page-objects/categoriesPages/WomenCategoryPage');
const { AddToCartPopupPage } = require('../page-objects/productPages/AddToCartPopupPage');
const { ShoppingCartSummaryPage } = require('../page-objects/orderPages/ShoppingCartSummaryPage');
const { SignInPage } = require('../page-objects/userPages/SignInPage');
const { AddressCartPage } = require('../page-objects/orderPages/AddressCartPage');
const { ShippingPage } = require('../page-objects/orderPages/ShippingPage');
const { PaymentPage } = require('../page-objects/orderPages/PaymentPage');
const { OrderSummaryPage } = require('../page-objects/orderPages/OrderSummaryPage');
const { OrderConfirmationPage } = require('../page-objects/orderPages/OrderConfirmationPage');
const { DressesCategoryPage } = require('../page-objects/categoriesPages/DressesCategoryPage');


test('New order with log in', async ({ page }) => {

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
    await addToCartPopupPage.proceedToCheckoutButton.click();

    const shoppingCartSummaryPage = new ShoppingCartSummaryPage(page);
    await expect(await shoppingCartSummaryPage.header).toBeVisible();
    await shoppingCartSummaryPage.proceedToCheckout.click();
    
    const signInPage = new SignInPage(page);
    await expect(await signInPage.header).toBeVisible();
    await signInPage.signInUser('wojciech.krzysiek.1@gmail.com', '12345');

    const addressCartPage = new AddressCartPage(page);
    await expect(await addressCartPage.header).toBeVisible();
    await addressCartPage.proceedToCheckout.click();

    const shippingPage = new ShippingPage(page);
    await expect(await shippingPage.header).toBeVisible();
    await shippingPage.agreementCheckbox.click();
    await shippingPage.proceedToCheckout.click();

    const paymentPage = new PaymentPage(page);
    await expect(await paymentPage.header).toBeVisible();
    await paymentPage.byCheckPayment.click();

    const orderSummaryPage = new OrderSummaryPage(page);
    await expect(await orderSummaryPage.header).toBeVisible();
    await orderSummaryPage.confirmOrder.click();
    
    const orderConfirmationPage = new OrderConfirmationPage(page);
    await expect(await orderConfirmationPage.header).toBeVisible();
    await expect(await orderConfirmationPage.alertSuccess).toBeVisible();

});

test('Check order quantity and prices', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.openHomePage();
    expect(await homePage.dressesCategory).toBeVisible();
    await homePage.dressesCategory.click();

    const dressesCategory = new DressesCategoryPage(page);
    expect(await dressesCategory.categoryName.innerText()).toContain('Dresses');
    await dressesCategory.addProductByProductNumber(1);
    const addToCartPopupPage = new AddToCartPopupPage(page);
    await expect(await addToCartPopupPage.header).toBeVisible();
    await addToCartPopupPage.continueShoppingButton.click();
    const firstProductPrice = parseInt(await dressesCategory.getProductPriceByProductNumber(1));
    await dressesCategory.addProductByProductNumber(2);
    await expect(await addToCartPopupPage.header).toBeVisible();
    await addToCartPopupPage.continueShoppingButton.click();
    const secondProductPrice = parseInt(await dressesCategory.getProductPriceByProductNumber(2));
    await dressesCategory.addProductByProductNumber(3);
    await expect(await addToCartPopupPage.header).toBeVisible();
    await addToCartPopupPage.continueShoppingButton.click();
    const thirdProductPrice = parseInt(await dressesCategory.getProductPriceByProductNumber(3));

    homePage.cart.click();

    const shoppingCartSummaryPage = new ShoppingCartSummaryPage(page);
    await expect(await shoppingCartSummaryPage.header).toBeVisible();

    const totalPrice = firstProductPrice + secondProductPrice + thirdProductPrice;
    expect(await shoppingCartSummaryPage.summaryProductsQuantity.textContent()).toContain('3 products');
    expect(await shoppingCartSummaryPage.totalPrice.textContent()).toContain('$' + totalPrice.toString());

});