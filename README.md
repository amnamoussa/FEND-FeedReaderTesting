# Project Overview

This is the eighth and final project of [Udacity Front-End Web Development Nano Degree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). The main goal of this project is testing a web-based application that reads RSS feeds. Based on using [Jasmine](http://jasmine.github.io/) to write a couple of test suites.

## Getting Started

* You can find the **required project assets** [here](https://github.com/udacity/frontend-nanodegree-feedreader).
* Download the assets.
* Double click on **index.html**, and open it in any browser to see the tests.
* At the bottom of the page, you can find seven tested specs which are running successfully.

# Test suites

### You can find the test suites code in **jasmine/spec/feedreader.js**

#### Test suite named `"RSS Feeds"`
1. A test that make sures that the `allFeeds` variable has been defined and that it is not empty.
2. A test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
3. A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.

#### A test suite named `"The menu"`
4. A test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
5. A test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

#### A test suite named `"Initial Entries"`
6. A test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

#### A test suite named `"New Feed Selection"`
7. A test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
