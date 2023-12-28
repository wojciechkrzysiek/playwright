class PaymentPage {

    constructor(page) {

        this.header = page.locator('.page-heading');

        this.bankWirePayment = page.locator('.bankwire');
        this.byCheckPayment = page.locator('.cheque');

    }

}

module.exports.PaymentPage = PaymentPage;