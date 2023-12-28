import { test, expect } from '@playwright/test';
const { HomePage } = require('../page-objects/HomePage');
const { SignInPage } = require('../page-objects/userPages/SignInPage');
const { RegisterUserPage } = require('../page-objects/userPages/RegisterUserPage');
const { MyAccountPage } = require('../page-objects/userPages/MyAccountPage');
require('dotenv').config()

test('Create new user', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.openHomePage();
    await homePage.openSignInPage();

    const signInPage = new SignInPage(page);
    await signInPage.registerNewUser(process.env.EMAIL_ADDRESS);
    
    const registerUserPage = new RegisterUserPage(page);
    await registerUserPage.setMrTitle();
    await registerUserPage.fillNewUserDetails(process.env.FIRST_NAME, process.env.LAST_NAME, process.env.EMAIL_ADDRESS, process.env.PASSWORD, process.env.DAY_OF_BIRTH, process.env.MONTH_OF_BIRTH, process.env.YEAR_OF_BIRTH);
    await registerUserPage.registerUser();

    const myAccountPage = new MyAccountPage(page);

    await expect(myAccountPage.pageHeading).toBeVisible();
    expect(await myAccountPage.alertSuccess.innerText()).toContain('Your account has been created.');

});