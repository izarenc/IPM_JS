WinJS.UI.processAll().done(function () {
    var splitView = document.querySelector(".splitView").winControl;
    new WinJS.UI._WinKeyboard(splitView.paneElement); // Temporary workaround: Draw keyboard focus visuals on NavBarCommands
});

ready: function Click (element, options) {
    document.querySelector("#Button1").onclick = function (args) {
        WinJS.Navigation.navigate("/pages/page2/page2.html", "test value");
    };
}
