var itemArray = [
        { title: "Marvelous Mint", text: "Gelato" },
        { title: "Succulent Strawberry", text: "Sorbet"},
        { title: "Banana Blast", text: "Low-fat frozen yogurt" },
        { title: "Lavish Lemon Ice", text: "Sorbet" },
        { title: "Creamy Orange", text: "Sorbet" },
        { title: "Very Vanilla", text: "Ice Cream" },
        { title: "Banana Blast", text: "Low-fat frozen yogurt"},
        { title: "Lavish Lemon Ice", text: "Sorbet" }
];

var listaWalut = []
document.getElementById("demo2").innerHTML = "binding running ";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    document.getElementById("demo2").innerHTML = "mam dosc ";
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("demo2").innerHTML = "tekst";
        myFunction(xhttp);
    }
};
xhttp.open("GET", "http://www.nbp.pl/kursy/xml/a001z160104.xml", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var lista_pozycji = xmlDoc.getElementsByTagName("pozycja");
    for (i = 0; i < lista_pozycji.length; i++) {
        var a = lista_pozycji[i].getElementsByTagName("nazwa_waluty")[0].childNodes[0].nodeValue;
        var temp = new Waluta(lista_pozycji[i].getElementsByTagName("nazwa_waluty")[0].childNodes[0].nodeValue, lista_pozycji[i].getElementsByTagName("przelicznik")[0].childNodes[0].nodeValue.replace(",", "."), lista_pozycji[i].getElementsByTagName("kod_waluty")[0].childNodes[0].nodeValue, lista_pozycji[i].getElementsByTagName("kurs_sredni")[0].childNodes[0].nodeValue.replace(",", "."));
        itemArray[0] = { title: "juz bardzo", text: "mam dosc" }
        //    .push({
        //    title:"juz bardzo",// temp.name,
        //    text: "mam dosc"//temp.kurs
        //});
        document.getElementById("demo").innerHTML = temp.getString();
        //document.getElementById("demo").innerHTML = "Document location: " + lista_pozycji[i].getElementsByTagName("nazwa_waluty")[0].childNodes[0].nodeValue;
    }
   
    //fun();
    //WinJS.Namespace.define("bindingList", {
    //    data: new WinJS.Binding.List(itemArray)
    //});
    //thisListView = WinJS.UI.getControl(document.getElementById("listView"));

    //thisListView.dataSource = itemArray;
    WinJS.UI.processAll();
}


    WinJS.Namespace.define("bindingList1", {
        data: new WinJS.Binding.List(itemArray)
    });
    WinJS.UI.processAll();

function Waluta(n,p,t,k) {
    this.name = n;
    this.przel = parseFloat(p);
    this.tag = t;
    this.kurs = parseFloat(k);
    this.getString = function () {
        return this.name + ' ' + this.tag + ' ' + this.przel*this.kurs;
    }

    
}



//var costam = doSth();

// Call our main - first - function. Pass it a URI and a callback function
//doSth(getData,writeData);


//// Define our main function
//function getData(xml, callback) {

//    var xmlDoc = xml.responseXML;
//    //document.getElementById("demo").innerHTML = "dkjbjhbv cgvc gfc";
//    var fruits = [];
//    for (i = 0; i < xmlDoc.getElementsByTagName("nazwa_waluty").length; i++) {
//        document.getElementById("demo").innerHTML = xmlDoc.getElementsByTagName("nazwa_waluty")[1].childNodes[0].nodeValue;
//        //xmldDoc.
//        fruits.push(xmlDoc.getElementsByTagName("nazwa_waluty")[i].childNodes[0].nodeValue);
//    }
    
//    callback(fruits);
//     //smacznego!
    
//}

//function writeData(items) {

//    WinJS.Namespace.define("Sample.ListView", {
//        data: new WinJS.Binding.List(items)
//    });
//    WinJS.UI.processAll();
//}


//function doSth(callback1,callback2) {
//    var xhttp = new XMLHttpRequest();
//    document.getElementById("demo").innerHTML = "przed tekst";
//    xhttp.onreadystatechange = function () {
//        if (xhttp.readyState == 4 && xhttp.status == 200) {
//            document.getElementById("demo").innerHTML = "tekst";
//            makeListWithCurrencies(xhttp);
//        }
//    };
//    xhttp.open("GET", "http://www.nbp.pl/kursy/xml/a001z160104.xml", true);
//    //xhttp.open("GET", "http://www.w3schools.com/xml/books.xml", true);
//    xhttp.send();
//    callback1(xhttp,callback2);
//}
//funkja oczekująca na wykonanie open



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