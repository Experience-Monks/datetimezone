var timezoneDate = require( './..' ),
	gmt = timezoneDate( 0 ),
 	eastern = timezoneDate( 300 );
 
console.log( gmt() );
console.log( eastern() );