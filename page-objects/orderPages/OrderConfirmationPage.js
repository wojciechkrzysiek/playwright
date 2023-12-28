class OrderConfirmationPage {

    constructor(page) {

        this.header = page.locator('.page-heading');

        this.alertSuccess = page.locator('.alert-success');

    }

}

module.exports.OrderConfirmationPage = OrderConfirmationPage;