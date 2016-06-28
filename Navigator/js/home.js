// Initialization code.
this.home = options.home;
// . . .
// The 'nav' variable is set to WinJS.Navigation.
addRemovableEventListener(nav, 'navigating', this._navigating.bind(this), false);
addRemovableEventListener(nav, 'navigated', this._navigated.bind(this), false);