
var itemArray = new WinJS.Binding.List([]);

var listaWalut = []
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
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
        itemArray.push(WinJS.Binding.as({ //title: "juz bardzo", text: "mam dosc" }));
            tname: temp.name,
            ttag: temp.tag,
            tkurs: temp.kurs
        }));
    }

}

    WinJS.Namespace.define("bindingList", {
        data: itemArray
    });
    WinJS.UI.processAll();

function Waluta(n,p,t,k) {
    this.name = toNiceName(n);
    this.przel = parseFloat(p);
    this.tag = t;
    this.kurs = parseFloat(k);
    this.getString = function () {
        return this.name + ' ' + this.tag + ' ' + this.przel*this.kurs;
    }
}

function toNiceName(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}