class ProductDetailsPage {

    constructor(page) {

        this.pageProductHeading = page.locator('.page-product-heading');

    }

    async getTitleOfFirstProductHeading() {

        await this.pageProductHeading.first();

    }
}

module.exports.ProductDetailsPage = ProductDetailsPage;