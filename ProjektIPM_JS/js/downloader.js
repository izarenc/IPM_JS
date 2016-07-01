/// <reference group="Dedicated Worker" /
var array = [];

class Downloader{

    downloadTxt(myurl,a) {
    
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

        if (a) {
            a();
            var t = 7;
        }

    }

    parseToDict() {
        for (var index = 0; index < array.length; ++index) {
            var temp = array[index];
            var d = new Date(temp.substring(6, 7), temp.substring(8, 9), temp.substring(10, 11));//yy,mm,dd
            d.setYear(d.getFullYear() + 100);
            associativeArray[d] = temp;
        }
        return true;
    }
    giveYear(year) {
        return "http://www.nbp.pl/kursy/xml/dir" + year + ".txt";
    }

    downloadAllYears(){
        
        this.startDownloadingAllYears.then(function(){
            this.parseToDict();
        });
        var b = associativeArray[0];
        //this.parseToDict();
        var a = associativeArray[5];
    }

    startDownloadingAllYears() {
        return new WinJS.Promise(function(complete) {
            var tab=[];
            var currentYear = new Date().getFullYear();
            for (var i = 2002; i < currentYear-1; i++) {
                this.downloadTxt(this.giveYear(i));
            }
            this.downloadTxt("http://www.nbp.pl/kursy/xml/dir.txt", this.parseToDict);
            complete();
        });
    }
}