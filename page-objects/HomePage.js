class HomePage {

    constructor(page) {

        this.page = page;

        this.contactUsPage = page.locator('#contact-link');
        this.signInPage = page.locator('.login');

        this.pageLogo = page.locator('#header_logo');
        this.cart = page.getByTitle('View my shopping cart');

        this.womenCategory = page.getByTitle('Women').and(page.locator('.sf-with-ul'));

        this.dressesCategory = page.getByTitle('Dresses');
        this.tshirtsCategory = page.getByTitle('T-shirts');
        this.blog = page.getByTitle('Blog');

    }

    async openContactUsPage() {

        await this.contactUsPage.click();

    }

    async openSignInPage() {

        await this.signInPage.click();

    }

    async openHomePage() {

        await this.page.goto("https://www.automationpractice.pl/index.php");

    }

    async openWomenCategory() {

        await this.womenCategory.click();

    }

    async openDressesCategory() {

        await this.dressesCategory.click();

    }

    async openTshirtsCategory() {

        await this.tshirtsCategory.click();

    }
}

module.exports.HomePage = HomePage;