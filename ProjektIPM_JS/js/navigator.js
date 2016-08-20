
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




function cos() {
    var y = "" + datepicker('getDate').getFullYear() - 2000;
    var m = "" + datepicker('getDate').getMonth() + 1;
    var d = "" + datepicker('getDate').getDate();
    console.log("lalala");
    return "" + y + (m[1] ? m : "0" + m[0]) + (d[1] ? d : "0" + d[0]);
}