// Do whatever the hell you like license.

var Route = function () {
       // Define an array to hold all the routes we will be adding.
       this.routes = [];
};

Route.prototype = {
        // a method to add a route to the routes array. It consists of the route path to match against
        // as a regular expression, and a callback- that will be executed after the match.
        define: function ( uri , callback ) {

                // Push an routing object onto the stack
                return this.routes.push( {

                        // Unescaped path as defined.
                        path    : uri ,

                        // The path as defined, picked apart as a reg. exp object.
                        uri     : new RegExp( uri.replace( /\//g , "\\/" ).replace( /:(\w*)/g , "(\\w*)" ) ) ,

                        // The callback to perform after a match.
                        callback: callback

                } );
        } ,
        // Start the router.
        start : function () {

                // Iterate over all the objects inside the routes array.
                for ( var i = 0, l = this.routes.length; i < l; i++ ) {

                        // If the current URL matches against one stored in the array, execute
                        // the callback
                        if ( window.location.hash.match( this.routes[i].uri ) ) {
                                this.routes[i].callback();
                        }
                }
        }
};

var route = new Route();

// Define a routing handler that respons to #foo/1/3.
// this holds the router object for that particular match.
route.define("#foo/1/3" , function () {
        console.log( 'you got me from foo' , this );
} );
route.define("#bar/12" , function () {
        console.log( 'you got me from bar' , this );
} );
// Router start.
route.start();
