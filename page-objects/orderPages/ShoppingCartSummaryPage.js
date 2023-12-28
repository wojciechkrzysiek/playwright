class ShoppingCartSummaryPage {

    constructor(page) {

        this.header = page.locator('#cart_title');

        this.proceedToCheckout = page.locator('.standard-checkout');

    }

}

module.exports.ShoppingCartSummaryPage = ShoppingCartSummaryPage;