class DressesCategoryPage {

    constructor(page) {

        this.categoryName = page.locator('.category-name');

        this.product = page.locator('.ajax_block_product');
        this.productPrice = page.locator('.right-block .product-price.price');
        this.addToCart = page.getByTitle('Add to cart');

    }

    async addProductByProductNumber(number) {

        const product = this.product.nth(number - 1);
        await product.hover();
        await product.locator(this.addToCart).click();

    }

    async getProductPriceByProductNumber(number) {

        const product = this.product.nth(number - 1);
        const price =  await product.locator(this.productPrice).textContent();
        return price.toLocaleString().replaceAll(/[$\s]/g, '')

    }
}

module.exports.DressesCategoryPage = DressesCategoryPage;