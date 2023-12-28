class ShippingPage {

    constructor(page) {

        this.header = page.locator('.page-heading');

        this.agreementCheckbox = page.locator('#cgv');

        this.proceedToCheckout = page.locator('#form > p > button');

    }

}

module.exports.ShippingPage = ShippingPage;