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
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', () => {

    /* tests to make sure that the allFeeds variable has been defined
     * and that it is not empty.
     */
    it('feeds defined and not empty', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
    });

    /* a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('urls defined and not empty', () => {
           for (feed of allFeeds) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           };
    });

    /* a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('names defined and not empty', () => {
      for (feed of allFeeds) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      };
    });
  });

  /* a new test suite named "The menu" */
    describe('The menu', () => {
      let body = document.getElementsByTagName('body')[0];
      /* a test that ensures the menu element is
       * hidden by default.
       */
      it('menu element hidden by default', () => {
        expect(body.classList.contains('menu-hidden')).toBe(true);
      });

      /* a test that ensures the menu changes
       * visibility when the menu icon is clicked.
       */
      it('changes visibility on click event', () => {
        let menuIcon = document.getElementsByClassName('menu-icon-link')[0];

        menuIcon.click();
        expect(body.classList.contains('menu-hidden')).toBe(false);

        menuIcon.click();
        expect(body.classList.contains('menu-hidden')).toBe(true);
      });
    });

/* a new test suite named "Initial Entries" */
    describe('Initial Entries', () => {

      /* a test that ensures when the loadFeed function is called
       * and completes its work, there is at least
       * a single .entry element within the .feed container.
       */
      beforeEach ( (done) => {
        loadFeed (0, done);
      });

      it('has at least 1 entry', () => {
        let entries = $('.feed .entry');
        expect(entries.length).toBeGreaterThan(0);
      });
    });

    /* a new test suite named "New Feed Selection" */
    describe('New Feed Selection', () => {
      let originalFeed, newFeed;

      /* a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */
      beforeEach ( (done) => {
        loadFeed(1, () => {
          originalFeed = $('.feed').html();
          loadFeed(2, () => {
          done();
          });
        });
      });

      afterEach( () => {
        loadFeed(0);
      });

      it('feed changes', () => {
        expect(originalFeed).not.toEqual(newFeed);
      });
    });
}());
