var datepicker = $('#datepicker').datepicker({
    format: 'dd-mm-yyyy',
    endDate: new Date(),
    daysOfWeekDisabled: [0, 6]
});

$('#datepicker').on('changeDate', function (ev) {
    $(this).datepicker('hide');

    var y = "" + $(this).datepicker('getDate').getFullYear() ;
    var m = $(this).datepicker('getDate').getMonth() + 1;
    var d = "" + $(this).datepicker('getDate').getDate();
    lalala("" + y + "-" + (m[1] ? m : "0" + m) + "-" + (d[1] ? d : "0" + d));
});


function lalala(url) {

    var xhttp2 = new XMLHttpRequest();

    xhttp2.onreadystatechange = function () {
        if (xhttp2.readyState == 4 && xhttp2.status == 200) {
            myFunction2(xhttp2,url);
            //changeTitle(url);
            //document.getElementById("titleDay").innerHTML = "Currencies rates from day"+url;
        }
        
        if(xhttp2.readyState == 4 && xhttp2.status == 404) {
            document.getElementById("info").innerHTML = "Podanej daty nie ma w bazie, wyberz jeszcze raz";
        }
    
    };
    xhttp2.open("GET", "http://api.nbp.pl/api/exchangerates/tables/A/" + url + "/?format=xml", true);
    //console.log("http://api.nbp.pl/api/exchangerates/tables/A/" + url + "/");
    xhttp2.send();
   
}


function myFunction2(xml,url) {
    var xmlDoc = xml.responseXML;
    var hgfdxghj = 0;
    
    var lista_pozycji = xmlDoc.getElementsByTagName("Rate");
    itemArray = new WinJS.Binding.List([]);
    for (i = 0; i < lista_pozycji.length; i++) {
        var a = lista_pozycji[i].getElementsByTagName("Currency")[0].childNodes[0].nodeValue;
        var temp = new Waluta(lista_pozycji[i].getElementsByTagName("Currency")[0].childNodes[0].nodeValue, 1, lista_pozycji[i].getElementsByTagName("Code")[0].childNodes[0].nodeValue, lista_pozycji[i].getElementsByTagName("Mid")[0].childNodes[0].nodeValue.replace(",", "."));
        itemArray.push(WinJS.Binding.as({
            tname: temp.name,
            ttag: temp.tag,
            tkurs: temp.kurs
        }));
        //console.log("dzieje sie"+temp.name);
    }

    $("#contenthost").load("/page1/page1.html", function () {
        document.getElementById("titleDay").innerHTML = "Currencies rates from " + url;
    }
        );

    WinJS.Namespace.define("bindingList", {
        data: itemArray
    });
    WinJS.UI.processAll();

    

    //changeTitle("jhbvhjhbv");
    //document.getElementById("titleDay").innerHTML = "Currensdfgcies rates from day" ;
}