
$(function () {

    if (_ActualDate === (new Date()).setHours(0, 0, 0, 0, 0) || _loadedActualDate == false) {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                myFunction(xhttp);
            }
        };
        xhttp.open("GET", "http://www.nbp.pl/kursy/xml/LastA.xml", true);
        xhttp.send();

        _ActualDate = new Date();
        _loadedActualDate = true;
        var m = _ActualDate.getMonth() + 1;
        var d = _ActualDate.getDate();
        var datunia = "" + _ActualDate.getFullYear() + "-" + (m>9 ? m : "0" + m) + "-" + (d>9 ? d : "0" + d);
        
        document.getElementById("titleDay").innerHTML = "Kursy walut z " + datunia;

    }
    else {
        var m = _ActualDate.getMonth() + 1;
        var d = _ActualDate.getDate();
        var datunia = "" + _ActualDate.getFullYear() + "-" + (m > 9 ? m : "0" + m) + "-" + (d > 9 ? d : "0" + d);
        document.getElementById("titleDay").innerHTML = "Currencies rates from " + datunia;
    }
});


function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var hgfdxghj = 0;
    var lista_pozycji = xmlDoc.getElementsByTagName("pozycja");
    for (i = 0; i < lista_pozycji.length; i++) {
        var a = lista_pozycji[i].getElementsByTagName("nazwa_waluty")[0].childNodes[0].nodeValue;
        var temp = new Waluta(lista_pozycji[i].getElementsByTagName("nazwa_waluty")[0].childNodes[0].nodeValue, lista_pozycji[i].getElementsByTagName("przelicznik")[0].childNodes[0].nodeValue.replace(",", "."), lista_pozycji[i].getElementsByTagName("kod_waluty")[0].childNodes[0].nodeValue, lista_pozycji[i].getElementsByTagName("kurs_sredni")[0].childNodes[0].nodeValue.replace(",", "."));
        itemArray.push(WinJS.Binding.as({ 
            tname: temp.name,
            ttag: temp.tag,
            tkurs: temp.kurs
        }));
    }

}

    WinJS.Namespace.define("bindingList", {
        data: itemArray
    });
    WinJS.UI.processAll().done(function () {
        document.querySelector('#listView').winControl.oniteminvoked = clickWaluta;
    });

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


function clickWaluta(event) {
    event.detail.itemPromise.done(function (invokedItem) {
        $("#contenthost").load("/page2/page2.html",function(){
            sciagnij_dane2(invokedItem.data.ttag, invokedItem.data.tname);
        }
);
    });
}


