class WomenCategoryPage {

    constructor(page) {

        this.categoryName = page.locator('.category-name');

        this.categories = page.locator('#categories_block_left .block_content');

        this.topsCategory = page.getByText(' Tops ');

        this.blousesSubcategoryCheckbox = page.locator('#layered_category_7');

        this.productList = page.locator('.product_list');
        this.loader = page.getByText('Loading... ');

        this.product = page.locator('.product_img_link');

        this.firstProduct = page.locator('.product-container .right-block .ajax_add_to_cart_button');
    }

    async setTopsCategoryByCategoryBlock() {

        await this.categories.locator(this.topsCategory).click();

    }

    async setBlousesSubcategoryByCatalogBlock() {

        await this.blousesSubcategoryCheckbox.click();

    }

    async openProductPageByProductNumber(number) {

        await this.product.click();

    }
}

module.exports.WomenCategoryPage = WomenCategoryPage;