class AddToCartPopupPage {

    constructor(page) {

        this.header = page.locator('.layer_cart_product > h2');

        this.continueShoppingButton = page.locator('.continue');
        this.proceedToCheckoutButton = page.getByTitle('Proceed to checkout');
        
    }

}

module.exports.AddToCartPopupPage = AddToCartPopupPage;