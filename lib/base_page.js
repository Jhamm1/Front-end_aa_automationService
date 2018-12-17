var Page = function() {

    this.visit = function(theurl) {
        return browser.url(theurl);
    }

    this.quit = function() {
        return browser.quit();
    }

    this.input = function(field, value) {
        return browser.setValue(field, value);
    }

    this.click = function(field) {
        var sel = browser.click(field);
        return sel;
    }

    this.findElement = function(value) {
        return browser.element(value);
    }

    this.elementExists = function(value) {
        return browser.isExisting(value);
    }

    this.clearField = function(value) {
        return browser.clearElement(value);
    }

    this.newWindow = function(value, title) {
        // var x = browser.url('/');
        // var res = String(x);
        return browser.newWindow(value, title, '');
    }

}

module.exports = Page;