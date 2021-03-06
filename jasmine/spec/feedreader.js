/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is the first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is the first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This is the second test - a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        
        it('have URLs defined and not empty', function() {
            for (var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* This is the third test - a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have names defined and not empty', function() {
            for (var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });
    
    
    /* This is the second test suite - a new test suite named "The menu" */
    describe('The menu', function() {
        
        /* This is the fourth test - a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        
         /* This is the fifth test - a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu icon is clicked', function() {
            var button = $('.menu-icon-link');
            
            button.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            button.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    
    
    /* This is the third test suite - a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* This is the sixth test - a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        // beforeEach helps loading feeds everytime before the actual test
        beforeEach(function(done) {
            loadFeed(0, function(){
                done();
            });
        });
        
        it('loadFeed function is called and completes its work', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });
    
    
    /* This is the fourth and last test suite - a new test suite named "New Feed Selection" */
   describe('New Feed Selection', function() {
        /* This is the seventh and last test - a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var feed1, feed2;
        beforeEach(function(done) {
            loadFeed(0, function() {
                feed1 = $(".feed").html();
                loadFeed(1, function(){
                    feed2 = $(".feed").html();
                    done();
                });
            });
        });
        
        it('new feed is loaded by the loadFeed function that the content actually changes', function(done) {
            expect(feed1).not.toBe(feed2);
            done();
        });
    });
}());
