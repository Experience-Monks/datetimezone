#timezonedate

Pass in an offset in minutes and this module will return a function which you can call to get a Date
which is the current Date/Time in that timezone.

**Example**  
```javascript
var timezoneDate = require( 'timezonedate' ),
    gmt = timezoneDate( 0 ),
    eastern = timezoneDate( 300 );

console.log( gmt() );
console.log( eastern() );
```

