route.js
========

Truly light weight client side router.

to use:

    var route = new Route();

    // Define a routing handler that respons to #foo/1/3.
    // 'this' holds the router object for that particular match.
    route.define("#foo/1/3" , function () {
            console.log( 'you got me from foo' , this );
    });
    
    route.define("#bar/12" , function () {
            console.log( 'you got me from bar' , this );
    });
    
    // Router start.
    route.start();

Note: If you need something to parse result from say- a querystring or path, http://medialize.github.com/URI.js/ is a very good
URI library.