
$(function () {
    $("#contenthost").load("/page1/page1.html");
});

document.getElementById("ButtonHome").addEventListener("click", function () {
    $("#contenthost").load("/home/home.html");
});

document.getElementById("ButtonKursy").addEventListener("click", function () {
    $("#contenthost").load("/page1/page1.html");
});

document.getElementById("ButtonWaluta").addEventListener("click", function () {
    $("#contenthost").load("/page2/page2.html", function () { auto(); });
});
