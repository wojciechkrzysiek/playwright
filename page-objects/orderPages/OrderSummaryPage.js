class OrderSummaryPage {

    constructor(page) {

        this.header = page.locator('.page-heading');

        this.confirmOrder = page.locator('#cart_navigation > button');

    }

}

module.exports.OrderSummaryPage = OrderSummaryPage;