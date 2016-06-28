$(function () {
    $("#includedContent").load("pages/home.html");
});

document.getElementById("myButton1").addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "Home";
    $(function () {
        $("#includedContent").load("pages/home.html");
    });
});


document.getElementById("myButton2").addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "page2";
    $(function () {
        $("#includedContent").load("pages/page2.html");
    });
});