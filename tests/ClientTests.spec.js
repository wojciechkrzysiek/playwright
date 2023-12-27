import { test, expect } from '@playwright/test';
const { HomePage } = require('../page-objects/HomePage');
const { SignInPage } = require('../page-objects/SignInPage');
const { RegisterUserPage } = require('../page-objects/RegisterUserPage');
const { MyAccountPage } = require('../page-objects/MyAccountPage');

test('Create new user', async ({ page }) => {

    const email = 'email1afrw2312121111211@wp.pl'
    const firstName = 'Wojciech';
    const lastName = 'Krzysiek';
    const password = '12345';
    const dayOfBirth = '1';
    const monthOfBirth = '1';
    const yearOfBirth = '1990';

    const homePage = new HomePage(page);
    await homePage.openHomePage();
    await homePage.openSignInPage();

    const signInPage = new SignInPage(page);
    await signInPage.registerNewUser(email);
    
    const registerUserPage = new RegisterUserPage(page);
    await registerUserPage.setMrTitle();
    await registerUserPage.fillNewUserDetails(firstName, lastName, email, password, dayOfBirth, monthOfBirth, yearOfBirth);
    await registerUserPage.registerUser();

    const myAccountPage = new MyAccountPage(page);

    await expect(myAccountPage.pageHeading).toBeVisible();
    expect(await myAccountPage.alertSuccess.innerText()).toContain('Your account has been created.');

});