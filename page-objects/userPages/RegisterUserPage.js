class RegisterUserPage {

    constructor(page) {

        this.titleMr = page.locator('#id_gender1');
        this.titleMrs = page.locator('#id_gender2');
        this.firstName = page.locator('#customer_firstname');
        this.lastName = page.locator('#customer_lastname');
        this.email = page.locator('#email');
        this.password = page.locator('#passwd');
        this.dayOfBirth = page.locator('#days');
        this.monthOfBirth = page.locator('#months');
        this.yearOfBirth = page.locator('#years');
        this.signUpForNewsletterCheckbox = page.locator('#newsletter');
        this.registerButton = page.locator('#submitAccount');

    }

    async setMrTitle() {

        await this.titleMr.click();

    }

    async setMrsTitle() {

        await this.titleMrs.click();

    }

    async fillNewUserDetails(firstName, lastName, email, password, dayOfBirth, monthOfBirth, yearOfBirth) {

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.dayOfBirth.selectOption(dayOfBirth);
        await this.monthOfBirth.selectOption(monthOfBirth);
        await this.yearOfBirth.selectOption(yearOfBirth);

    }

    async signUpForNewsletter() {

        await this.signUpForNewsletterCheckbox.click();

    }

    async registerUser() {

        await this.registerButton.click();

    }
}

module.exports.RegisterUserPage = RegisterUserPage;