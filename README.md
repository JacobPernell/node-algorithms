# Node Algorithms
High level goals–

* Create a server using vanilla node
* Serve a page that reimplements JSON.stringify()
* Serve a page that implements a library with shelves, books, and authors

# Step by Step
Below are low level descriptions of the high level goals.

### Create a server using vanilla node
Your goal here is to create a server that you can run via command line.

Download and install [node](https://nodejs.org/en/).  Do this via the node site or with [homebrew](https://brew.sh/).

* Use only vanilla node
* Do not use NPM or NPM packages
* Serve a distribution directory that contains the rest of the assignment
* Account for HTML, JS, and CSS
* Serve a 404 page if the dist directory's contents aren't found

### Serve a page that reimplements JSON.stringify()
The goal of this is to recreate `JSON.stringify()` without using `JSON.stringify()`.

* Don't use `toString()` or `JSON.stringify()`
* Have some kind of input on the page so a user can enter in a param
* Have the output displayed
* Have the same function accessible via console
-Account for input of any type

### Serve a page that implements a library with shelves, books, and authors
Finally you need to build a library.  This library needs to be able to be searched, iterated through, and added to.

* This has to be an object
* This object contains shelves, which contain books, which have an author and a title
* The library needs methods to add and remove shelves
* The shelves should have methods to add and remove books
* A user should be able to add shelves and books to this library through a UI
* A user should also be able to do this via console
* A user should always be able to see what's contained in the library both through the console and UI

### General
All front end views should be styled.  Use skeleton this time.
