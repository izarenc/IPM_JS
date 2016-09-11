var array = [];

class Downloader{

    downloadTxt(myurl) {
        WinJS.xhr({ url: myurl, type: "GET" }).done(
       function completed(request) {
           // handle completed download.
           if (request.status === 200) {
               array = array.concat(request.responseText.split("\r\n").filter((x) =>x.substring(0, 1) === "a"));
               //$("#loading").toggle();
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
           //$("#loading").show();
       });

    }

    parseToDict() {
        for (var index = 0; index < array.length; ++index) {
            var temp = array[index];
            var d = new Date(temp.substring(6, 7), temp.substring(8, 9), temp.substring(10, 11));//yy,mm,dd
            d.setYear(d.getFullYear() + 100);
            associativeArray[d] = temp;
        }
        //this.trigger( myEvent );
        return true;
    }
    giveYear(year) {
        return "http://www.nbp.pl/kursy/xml/dir" + year + ".txt";
    }

    downloadAllYears(){
        var parent = this;
        this.startDownloadingAllYears().then(function(){
            parent.parseToDict();
        });
    }

    startDownloadingAllYears() {
        var parent = this;
        return new WinJS.Promise(function(complete) {
            var tab=[];
            var currentYear = new Date().getFullYear();
            for (var i = 2002; i < currentYear-1; i++) {
                parent.downloadTxt(parent.giveYear(i));
            }
            parent.downloadTxt("http://www.nbp.pl/kursy/xml/dir.txt");
            complete();
        });
    }
}