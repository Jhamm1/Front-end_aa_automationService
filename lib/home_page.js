var Page = require('./base_page');

var testData = 'AR51 1AA';
var endpoint = "/";

var PostCodeField = 'input[name="postcode"]';

Page.prototype.GotoURL = function() {
    return this.visit(endpoint);
}

Page.prototype.InputPostCode = function() {
    return this.input(PostCodeField, testData);
}

Page.prototype.SubmitButton = function() {
    return this.findElement('//*[@id="content"]/div[1]/div[2]/form/button').click();
}

Page.prototype.ErrorMessage = function() {
    return this.elementExists('//*[@id="content"]/div[1]/div[2]/form/div/div')
}

Page.prototype.ClearInputField = function() {
    return this.clearField('input[name="postcode"]')
}

Page.prototype.ResultsPage = function() {
    return this.elementExists('//*[@id="skipToMain"]/div');
}

Page.prototype.NewWindowTab = function() {
    return this.newWindow("https://www.just-eat.co.uk/", "Test");
}

Page.prototype.HelpButton = function() {
    return this.findElement('//*[@id="je-header-navigation"]/li[2]/a').click();
}

Page.prototype.LoginButton = function() {
    return this.findElement('//*[@id="je-header-navigation"]/li[1]/a').click();
}

Page.prototype.firstOptionOnResultsList = function() {
    return this.findElement('//*[@id="skipToMain"]/main/div/div[2]/div[2]/div[1]/div/section[1]/a/div[2]/h3').click();
}

Page.prototype.SearchforARestaurant = function() {
    return this.input('//*[@id="serp-search"]', 'xxx');
}

Page.prototype.NoResultsFound = function() {
    return this.elementExists('//*[@id="skipToMain"]/div');
}


module.exports = Page;