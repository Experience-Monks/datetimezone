/** @module timezonedate */

var MINUTES_TO_MILLI = 60000;

module.exports = timezoneDate;

/**
 * Pass in an offset in minutes and this module will return a function which you can call to get a Date
 * which is the current Date/Time in that timezone.
 * 
 * @param  {Number} globalOff Timezone offset in minutes
 * @return {Function} This returned function can be called to get dates at the timezone offset
 *
 * @example
 * ```javascript
 * var timezoneDate = require( 'timezoneDate' ),
 *     gmt = timezoneDate( 0 ),
 *     eastern = timezoneDate( 300 );
 *
 * console.log( gmt() );
 * console.log( eastern() );
 * ```
 */
function timezoneDate( globalOff ) {

	var d = new Date(),
		offsetLocal = d.getTimezoneOffset(),
		diff = ( globalOff - offsetLocal ) * MINUTES_TO_MILLI;

	return function() {

		return new Date( Date.now() + diff );
	}
}