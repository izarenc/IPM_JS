/// <reference group="Dedicated Worker" /
var array = [];

class Downloader{

    //downloadYears() {
    //    let tab = [];
    //    let currentYear = new Date().getFullYear();
    //    for (let i = 2002; i < currentYear - 1; i++) {
    //        //todo: promis z przeliczaniem postepu 
    //        tab.push(this.downloadYear(i));
    //    }
    //    tab.push(this.downloadYear(""));
    //    return tab;
    //}

    //downloadYear(year) {
    //    return this.downloadTxt("http://www.nbp.pl/kursy/xml/dir" + year + ".txt");
    //}

    //downloadTxt(link) {
    //    WinJS.xhr({ url: link, type: "GET" }).done(
    //        function completed(request) {
    //            if (request.status === 200) {
    //                //WinJS.UI.processAll();
    //                myArrayTxt = myArrayTxt.concat(request.responseText.split("\r\n").filter((x) => x.substring(0, 1) === "a"));
    //                var a = 5;
    //            } else {
    //                //$("#status").text("Brak dostępu do danych");
    //            }
    //           // $("#status").text("Wczytano dane");
    //        },
    //        function error(request) {
    //           // $("#status").text("Wystąpił błąd...");
    //            //TODO: informacja o bledzie
    //        },
    //        function progress(request) {
    //           // $("#status").text("Wczytywanie danych");
    //            //TODO: paroswanie w trakcie
    //        }
    //    );
    //}

    downloadTxt(myurl){
    //os 2002
        WinJS.xhr({ url: myurl, type: "GET" }).done(
       function completed(request) {
           // handle completed download.
           if (request.status === 200) {
               array = array.concat(request.responseText.split("\r\n").filter((x) =>x.substring(0, 1) === "a"));
               $("#loading").toggle();
               //progres  togg;e()
           }
           else {
               //niepowodzenie
           }
       }, 
       function error(request) {
           // handle error conditions.
       }, 
       function progress(request) {
           // report on progress of download.
           $("#loading").show();
       });

    }

    giveYear(year) {
        return "http://www.nbp.pl/kursy/xml/dir" + year + ".txt";
    }

        downloadAllYears(){
            var tab=[];
            var currentYear = new Date().getFullYear();
            for (var i = 2002; i < currentYear-1; i++) {
                this.downloadTxt(this.giveYear(i));

            }
            this.downloadTxt("http://www.nbp.pl/kursy/xml/dir.txt");
            var a = 5;

        }



    }