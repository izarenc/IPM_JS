var _ActualDate = (new Date()).setHours(0, 0, 0, 0, 0);
var _FirstDate = new Date(2002,2,2,0,0,0,0)//"February 2, 2002 00:00:00");

var _loadedActualDate = false;
var _i =0;

var itemArray = new WinJS.Binding.List([]); //page1

var associativeArray = {};
