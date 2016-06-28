// page2.js
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/page2/page2.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            var dayPlaceholder = document.querySelector("#dayPlaceholder");
            var calendar = new Windows.Globalization.Calendar();
            dayPlaceholder.innerText =
                calendar.dayOfWeekAsString();
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
})();
