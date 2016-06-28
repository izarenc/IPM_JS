//var xhttp = new XMLHttpRequest();
//document.getElementById("demo").innerHTML = "przed tekst";
//xhttp.onreadystatechange = function () {
//    if (xhttp.readyState == 4 && xhttp.status == 200) {
//    document.getElementById("demo").innerHTML = "tekst";
//    myFunction(xhttp);
//    }
//};
//xhttp.open("GET", "http://www.nbp.pl/kursy/xml/a001z160104.xml", true);
////xhttp.open("GET", "http://www.w3schools.com/xml/books.xml", true);
//xhttp.send();

//function makeListWithCurrencies(xml) {
//    var xmlDoc = xml.responseXML;
//    //document.getElementById("demo").innerHTML = "dkjbjhbv cgvc gfc";
//    var fruits = [];
//    for (i = 0; i < xmlDoc.getElementsByTagName("nazwa_waluty").length; i++) {
//        document.getElementById("demo").innerHTML = xmlDoc.getElementsByTagName("nazwa_waluty")[1].childNodes[0].nodeValue;
//        //xmldDoc.
//        fruits.push(xmlDoc.getElementsByTagName("nazwa_waluty")[i].childNodes[0].nodeValue);
//    }
//    return fruits; //smacznego!
//}