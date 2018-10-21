# Feed Reader Testing

This project uses [Jasmine](http://jasmine.github.io/) to test if all JavaScript is working correctly.

## Table of Contents

* [Instructions](#instructions)
* [Tests that were implemented](#tests-that-were-implemented)
  * [RSS Feeds](#rss-feeds)
  * [The Menu](#the-menu)
  * [Initial Entries](#initial-entries)
  * [New Feed Selection](#new-feed-selection)
* [How this Project was Completed](#how-this-project-was-completed)
* [Contributing](#contributing)
* [License](#license)


## instructions

[Clone](https://github.com/JoBrigden/feedreader) this repository and open index.html file to view the testing site in your browser, or visit https://jobrigden.github.io/feedreader/ to access the site immediately.

## Tests that were implemented

###   RSS Feeds:
      * Feeds are defined and are not empty
      * Feed URLs are defined and not empty
      * Feed names are defined and not empty

###   The Menu:
      * The menu is hidden by default
      * The menu changes visibility on click event

###   Initial Entries:
      * The feed container has at least one entry

###   New Feed Selection:
      * New feed content is displayed when new feed is selected

# How this project was completed

1. A test was written that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. A test was written that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. A test was written that ensures the menu element is hidden by default.
4. A test was written that ensures the menu changes visibility when the menu icon is clicked.
5. A test was written that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
6. A test was written that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

# Contributing

Contributions to add more tests to run are welcome.

# License

This project is licensed under the MIT license.
