var assert = require('assert');
var request = require('request');
var Page = require('../lib/home_page');
var page = new Page();;
var homepageTitle = 'Order takeaway online from 20,000+ food delivery restaurants | Just Eat';


function screenshotTest(value) {
    browser.screenshot();

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return browser.saveScreenshot(value + '__' + dateTime + '.png')
}


describe('Search for restaurants in an area', function() {

    //Positive path
    describe('Given I want food in "AR51 1AA"', function() {

        it('When I search for restaurants', function() {
            page.GotoURL();
            var title = browser.getTitle();
            assert.equal(title, homepageTitle);
            screenshotTest("Homepage");
        });

        it('Then I should see some restaurants in "AR51 1AA"', function() {
            page.InputPostCode();
            screenshotTest("Postcode entered");
            page.SubmitButton();
            page.ResultsPage();
            screenshotTest("Results page");
            screenshotTest("Select first option");
        });

        it('And select the first option on the results page"', function() {
            page.firstOptionOnResultsList();
            screenshotTest("Select first option");
        });
    });

    //Negative path - Incorrect postcode
    describe('Given I enter an incorrect postcode"', function() {

        it('When I attempt to search for restaurants', function() {
            page.NewWindowTab();
            page.ClearInputField();
            var title = browser.getTitle();
            assert.equal(title, homepageTitle);
            page.SubmitButton();
        });

        it('Then I should recieve an error message', function() {
            page.ErrorMessage();
            screenshotTest("Error message on homepage");
        });


    });

});

//Search for a restaurant in an area
describe('Search for a restaurant in an area', function() {

    it('When I search for restaurants', function() {
        page.NewWindowTab();
        var title = browser.getTitle();
        assert.equal(title, homepageTitle);
        screenshotTest("Homepage_search_for_a_restaurant");
    });

    it('Then I should see some restaurants in "AR51 1AA"', function() {
        page.InputPostCode();
        screenshotTest("Postcode entered");
        page.SubmitButton();
        page.ResultsPage();
        screenshotTest("Results page");
        screenshotTest("Select first option");
    });

    it('And select the first option on the results page"', function() {
        page.SearchforARestaurant();
        page.NoResultsFound();
        screenshotTest("No results");
    });
});

//Login button
describe('Login', function() {
    it('Login button', function() {
        page.NewWindowTab();
        page.HelpButton();
        screenshotTest("Login area");
    });
});

//Help button
describe('Help button on the homepage', function() {
    it('Help button', function() {
        page.NewWindowTab();
        page.LoginButton();
        screenshotTest("Help page");

    });
});