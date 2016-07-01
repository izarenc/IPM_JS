/// <reference group="Dedicated Worker" /
var array = [];

class Downloader{

    downloadTxt(myurl){
        WinJS.xhr({ url: myurl, type: "GET" }).done(
       function completed(request) {
           // handle completed download.
           if (request.status === 200) {
               array = array.concat(request.responseText.split("\r\n").filter((x) =>x.substring(0, 1) === "a"));
               $("#loading").toggle();
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