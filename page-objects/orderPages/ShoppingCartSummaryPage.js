class ShoppingCartSummaryPage {

    constructor(page) {

        this.header = page.locator('#cart_title');

        this.totalPrice = page.locator('#total_product');
        this.summaryProductsQuantity = page.locator('#summary_products_quantity');
        this.proceedToCheckout = page.locator('.standard-checkout');

    }

}

module.exports.ShoppingCartSummaryPage = ShoppingCartSummaryPage;