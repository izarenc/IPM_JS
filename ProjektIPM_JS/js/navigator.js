
//$(function () {
//    $("#contenthost").load("/page1/page1.html");
//});

document.getElementById("ButtonHome").addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "Home";
    $(function () {
        $("#contenthost").load("home.html");
    });
});

document.getElementById("ButtonKursy").addEventListener("click", function () {
   // document.getElementById("demo").innerHTML = "page1";

        $("#contenthost").load("/page1/page1.html");
        document.getElementById("demo").innerHTML = "page1";
});


document.getElementById("ButtonWaluta").addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "page2";

        $("#contenthost").load("/page2/page2.html");

});





//WinJS.Namespace.define("Application", {
//    PageControlNavigator: WinJS.Class.define(
//        // Define the constructor function for the PageControlNavigator.
//        function PageControlNavigator(element, options) {
//            // Initialization code.
//        }, {
//            // Members specified here.
//        }
//    ), // . . .
//});