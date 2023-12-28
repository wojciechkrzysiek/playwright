class LoginPage {

    constructor(page) {

        this.page = page;
        this.pageTitle = page.locator('.login_logo');
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.logInButton = page.locator('#login-button');
        this.errorIncorrectCredentials = page.locator('div.error-message-container.error');
        this.closeErrorButton = page.locator('.error-button');

    }

    async login(username, password) {

        await this.username.type(username);
        await this.password.type(password);
        await this.logInButton.click();

    }

    async openLoginPage() {

        await this.page.goto(process.env.HOME_PAGE);

    }

    async closeError() {

        await this.closeErrorButton.click();

    }
}

module.exports.LoginPage = LoginPage;