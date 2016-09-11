var listaKursow;
var chart;
var pushnum = 0;

var from_date = addDays(_ActualDate, -50)
var to_date = _ActualDate
var aktualna_waluta = "Euro"
var aktualny_tag = "eur"

var progresik = document.getElementById("loading");

var datep1 = $('#datep1').datepicker({
    endDate: new Date(),
    daysOfWeekDisabled: [0, 6]
});
$('#datep1').on('changeDate', function (ev) {$(this).datepicker('hide');})

var datep2 = $('#datep2').datepicker({
    endDate: new Date(),
    daysOfWeekDisabled: [0, 6]
});
$('#datep2').on('changeDate', function (ev) { $(this).datepicker('hide'); })

$('#datep1').on('changeDate', function (ev) {
    $(this).datepicker('hide');

    var y = "" + $(this).datepicker('getDate').getFullYear();
    var m = $(this).datepicker('getDate').getMonth();
    var d = "" + $(this).datepicker('getDate').getDate();

    from_date = new Date(y, m, d);
    sciagnij_dane(aktualny_tag,aktualna_waluta, from_date, to_date);
});

$('#datep2').on('changeDate', function (ev) {
    $(this).datepicker('hide');

    var y = "" + $(this).datepicker('getDate').getFullYear();
    var m = $(this).datepicker('getDate').getMonth();
    var d = "" + $(this).datepicker('getDate').getDate();

    to_date = new Date(y, m, d);
    sciagnij_dane(aktualny_tag, aktualna_waluta, from_date, to_date);
});


function sciagnij_dane2(tag, tname) {
    sciagnij_dane(tag, tname, from_date, to_date)
}

function sciagnij_dane(tag, tname, fromd, tod, call) {
    //$("#loading").IsActive = true
    progresik.value=5
    aktualna_waluta = tname
    aktualny_tag=tag
    document.getElementById("title").innerHTML = "Kurs " + tname;
    drawChart();
    var number_of_days = number_of_days_between(fromd, tod)
    if (number_of_days > 92) {
        var i = 0;
        for (; i < number_of_days ; i += 91) {
            if (addDays(fromd, i + 90).getTime() > tod) {
                break;
            }
            sciagnij_xml(tag, addDays(fromd, i), addDays(fromd, i + 90));
            chart.render();
            progresik.value += number_of_days / 92.0
        }
        sciagnij_xml2(tag, addDays(fromd, i), tod);
    }
    else {
        sciagnij_xml2(tag, fromd, tod);
        
    }

    chart.render();
    progresik.value = 100
}

function addDays(theDate, days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
}

function number_of_days_between(date1, date2) {
    var ONE_DAY = 1000 * 60 * 60 * 24;
    var difference_ms = Math.abs(date1.getTime() - date2.getTime());
    return Math.round(difference_ms/ONE_DAY)

}

function sciagnij_xml(tag, fromd, tod) {
    var xhttp = new XMLHttpRequest();
    fromd = new Date(fromd)
    tod = new Date(tod)
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            myFunction(xhttp);
        }
    };
    xhttp.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/"+tag+"/" +dateToDate(fromd) +"/" +dateToDate(tod)+ "/?format=xml", true);
    xhttp.send();
};

function sciagnij_xml2(tag, fromd, tod) {
    
    var xhttp = new XMLHttpRequest();
    fromd = new Date(fromd)
    tod = new Date(tod)
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            myFunction(xhttp);
        }
    };
    xhttp.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/" + tag + "/" + dateToDate(fromd) + "/" + dateToDate(tod) + "/?format=xml", true);
    xhttp.send();
    $("#loading").value = 100
};

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var lista_pozycji = xmlDoc.getElementsByTagName("Rate");
    for (i = 0; i < lista_pozycji.length; i++) {
        var a = lista_pozycji[i].getElementsByTagName("EffectiveDate")[0].childNodes[0].nodeValue;
        var b = lista_pozycji[i].getElementsByTagName("Mid")[0].childNodes[0].nodeValue.replace(",", ".");
        chart.options.data[0].dataPoints.push({ x: new Date(""+a+"T00:00:00"), y: parseFloat(b) });
        chart.render();
    }
}


function drawChart() {
    chart = new CanvasJS.Chart("chartContainer",
    {
        data: [
       {
           type: "line",

           dataPoints: []
       }
        ]
    });

    chart.render();
}

function dateToDate(datunia) {
    datunia = new Date(datunia)
    var y = "" + datunia.getFullYear();
    var m = datunia.getMonth() + 1;
    var d = datunia.getDate();
    return "" + y + "-" + (m > 9 ? m : "0" + m) + "-" + (d > 9 ? d : "0" + d);
}

function auto() {
    sciagnij_dane("eur", "Euro", from_date, to_date);
}
