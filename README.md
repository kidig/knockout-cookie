# knockout-cookie
A simple jquery.cookie extender for KnockoutJS

## Usage

Include the javascript file, `knockout.cookie.js`, in your script imports.

To make an observable to persist it's value (basically for a session). Extend it with `cookie`, the value for it's the key to store the observable:

    // Will automatically load and save the value if it exists
    this.someValue = ko.observable().extend({ cookie: 'someKey' });

    
## License

This project is licensed under the MIT license. For more info, go to http://opensource.org/licenses/MIT.
