//d3.selectAll("p").style("color", "red");
//document.getElementsByTagName("p").innerHTML = "title22";

//document.getElementById("pageinfo").innerHTML = "page2 - dziala";

//http://api.nbp.pl/api/exchangerates/rates/{table}/{code}/{startDate}/{endDate}/

var listaKursow;
var chart;
function sciagnij_dane() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            myFunction(xhttp);
        }
    };
    xhttp.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/eur/2016-01-01/2016-08-01/" + "/?format=xml", true);
    xhttp.send();
};


function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var lista_pozycji = xmlDoc.getElementsByTagName("Rate");
    drawChart()
    for (i = 0; i < lista_pozycji.length; i++) {
        chart.options.data[0].dataPoints.push({ x: new Date(2013, i, i), y: 450 });
        console.log("wojdfewidjfejifb");
        //var a = lista_pozycji[i].getElementsByTagName("nazwa_waluty")[0].childNodes[0].nodeValue;
        //var temp = new Waluta(lista_pozycji[i].getElementsByTagName("nazwa_waluty")[0].childNodes[0].nodeValue, lista_pozycji[i].getElementsByTagName("przelicznik")[0].childNodes[0].nodeValue.replace(",", "."), lista_pozycji[i].getElementsByTagName("kod_waluty")[0].childNodes[0].nodeValue, lista_pozycji[i].getElementsByTagName("kurs_sredni")[0].childNodes[0].nodeValue.replace(",", "."));
        //itemArray.push(WinJS.Binding.as({
        //    tname: temp.name,
        //    ttag: temp.tag,
        //    tkurs: temp.kurs
        //}));
    }
    chart.render();
}


function drawChart() {
    chart = new CanvasJS.Chart("chartContainer",
    {

        title: {
            text: "Earthquakes - per month"
        },
        data: [
       {
           type: "line",

           dataPoints: [
           ]
       }
        ]
    });

    chart.render();
}
//drawChart();
sciagnij_dane()