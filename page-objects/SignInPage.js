class SignInPage {

    constructor(page) {

        this.emailAddressToRegister = page.locator('#email_create');
        this.createAccountButton = page.locator('#SubmitCreate');

        this.emailAddressLogIn = page.locator('#email');
        this.passwordLogIn = page.locator('#passwd');
        this.forgotPasswordButton = page.locator('.lost_password');
        this.signInButton = page.locator('#SubmitLogin');

    }

    async registerNewUser(email) {

        await this.emailAddressToRegister.fill(email);
        await this.createAccountButton.click();

    }

    async signInUser(email, password) {

        await this.emailAddressLogIn.fill(email);
        await this.passwordLogIn.fill(password);
        await this.signInButton.click();

    }

}

module.exports.SignInPage = SignInPage;