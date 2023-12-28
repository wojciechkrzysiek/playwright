class AddressCartPage {

    constructor(page) {

        this.header = page.locator('.page-heading');

        this.proceedToCheckout = page.locator('#center_column > form > p > button');

    }

}

module.exports.AddressCartPage = AddressCartPage;