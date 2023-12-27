class MyAccountPage {

    constructor(page) {

        this.pageHeading = page.locator('.page-heading');
        this.alertSuccess = page.locator('.alert-success');

    }

}

module.exports.MyAccountPage = MyAccountPage;