
$(function () {
    $("#contenthost").load("/page1/page1.html");
});

document.getElementById("ButtonHome").addEventListener("click", function () {
    document.getElementById("pageinfo").innerHTML = "Home";
    $("#contenthost").load("/home/home.html");
});

document.getElementById("ButtonKursy").addEventListener("click", function () {
    document.getElementById("pageinfo").innerHTML = "page1";
    $("#contenthost").load("/page1/page1.html");
});

document.getElementById("ButtonWaluta").addEventListener("click", function () {
    document.getElementById("pageinfo").innerHTML = "page2";
    $("#contenthost").load("/page2/page2.html");
});

