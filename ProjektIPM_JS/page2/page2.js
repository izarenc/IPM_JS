//d3.selectAll("p").style("color", "red");
//document.getElementsByTagName("p").innerHTML = "title22";

//document.getElementById("pageinfo").innerHTML = "page2 - dziala";

//http://api.nbp.pl/api/exchangerates/rates/{table}/{code}/{startDate}/{endDate}/

var listaKursow;
var chart;
var pushnum = 0;


var from_date = addDays(_ActualDate, -100)
var to_date = _ActualDate
var aktualna_waluta = "eur"

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

    from_date = new Date(y, m, d);//yy,mm,dd
    console.log("from: "+from_date)
    sciagnij_dane(aktualna_waluta, from_date, to_date);
    //lalala("" + y + "-" + (m[1] ? m : "0" + m) + "-" + (d[1] ? d : "0" + d));
});

$('#datep2').on('changeDate', function (ev) {
    $(this).datepicker('hide');

    var y = "" + $(this).datepicker('getDate').getFullYear();
    var m = $(this).datepicker('getDate').getMonth();
    var d = "" + $(this).datepicker('getDate').getDate();

    to_date = new Date(y, m, d);//yy,mm,dd
    console.log("to: " + to_date)
    sciagnij_dane(aktualna_waluta, from_date, to_date);
    //lalala("" + y + "-" + (m[1] ? m : "0" + m) + "-" + (d[1] ? d : "0" + d));
});
function sciagnij_dane(tag, fromd, tod) {
    drawChart();
    //chart.options.data = [];
    ///sciagnij_xml(tag, fromd, tod);
    //console.log( (Object.prototype.toString.call(fromd) === '[object Date]'));
    //console.log("t" + typeof (Date.parse(fromd)));
    //console.log("ttt"+Date.parse(fromd))
    if (number_of_days_between(fromd, tod) > 92) {
        var i = 0;
        for (; i < number_of_days_between(fromd, tod) ; i += 91) {
            if (addDays(fromd, i+90).getTime() > tod) {
                break;
            }
            //console.log("sciagam: "+addDays(fromd, i)+ addDays(fromd, i + 90));
            sciagnij_xml(tag, addDays(fromd, i), addDays(fromd, i + 90));
            //chart.render();
        }
        //console.log("sciagam ostatnie: " + addDays(fromd, i) + tod);
        sciagnij_xml(tag, addDays(fromd, i), tod);
        
    }
    else {
        sciagnij_xml(tag, fromd, tod);
    }
    chart.render();
    //console.log("2" + (Object.prototype.toString.call(fromd) === '[object Date]'));
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


function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var lista_pozycji = xmlDoc.getElementsByTagName("Rate");
    for (i = 0; i < lista_pozycji.length; i++) {
        var a = lista_pozycji[i].getElementsByTagName("EffectiveDate")[0].childNodes[0].nodeValue;
        var b = lista_pozycji[i].getElementsByTagName("Mid")[0].childNodes[0].nodeValue.replace(",", ".");
        //console.log(a);
        chart.options.data[0].dataPoints.push({ x: new Date(""+a+"T00:00:00"), y: parseFloat(b) });
        chart.render();

    }
    //chart.render();
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

           dataPoints: []
       }
        ]
    });

    chart.render();
}

function dateToDate(datunia) {
    datunia = new Date(datunia)
    //console.log(datunia);
    //console.log("3" + (Object.prototype.toString.call(datunia) === '[object Date]'));
    var y = "" + datunia.getFullYear();
    var m = datunia.getMonth() + 1;
    var d = datunia.getDate();
    //console.log("siema");
    //console.log("" + y + "-" + (m > 9 ? m : "0" + m) + "-" + (d > 9 ? d : "0" + d));
    return "" + y + "-" + (m > 9 ? m : "0" + m) + "-" + (d > 9 ? d : "0" + d);
}
//drawChart();
sciagnij_dane("eur", from_date, to_date);

