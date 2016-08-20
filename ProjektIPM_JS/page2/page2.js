//d3.selectAll("p").style("color", "red");
//document.getElementsByTagName("p").innerHTML = "title22";

document.onload = function (event) {
    //do work
    
    document.getElementsByTagName("p").innerHTML = "title22";
InitChart();

function InitChart() {

    var lineData = [{
        'x': 1,
        'y': 5
    }, {
        'x': 20,
        'y': 20
    }, {
        'x': 40,
        'y': 10
    }, {
        'x': 60,
        'y': 40
    }, {
        'x': 80,
        'y': 5
    }, {
        'x': 100,
        'y': 60
    }];

    var vis = d3.select("#visualisation"),
      WIDTH = 1000,
      HEIGHT = 500,
      MARGINS = {
          top: 20,
          right: 20,
          bottom: 20,
          left: 50
      },

      xRange = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(lineData, function (d) {
          return d.x;
      }),
        d3.max(lineData, function (d) {
            return d.x;
        })
      ]),
      //xRange = d3.scale.linear().range([40, 400]).domain([0, 100]),
      //yRange = d3.scale.linear().range([40, 400]).domain([0, 100]),
      yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(lineData, function (d) {
          return d.y;
      }),
        d3.max(lineData, function (d) {
            return d.y;
        })
      ]),

      xAxis = d3.svg.axis()
        .scale(xRange)
        .tickSize(5)
        .tickSubdivide(true),

      yAxis = d3.svg.axis()
        .scale(yRange)
        .tickSize(5)
        .orient("left")
        .tickSubdivide(true);


    vis.append("svg:g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
      .call(xAxis);

    vis.append("svg:g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + (MARGINS.left) + ",0)")
      .call(yAxis);

    var lineFunc = d3.svg.line()
    .x(function (d) {
        return xRange(d.x);
    })
    .y(function (d) {
        return yRange(d.y);
    })
    .interpolate('linear');

    vis.append("svg:path")
      .attr("d", lineFunc(lineData))
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("fill", "none");

}

};

//document.getElementById("pageinfo").innerHTML = "page2 - dziala";



WinJS.Namespace.define("Charts", {
    Draw_RadarChart: function () {
        var radarChartData = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Partying", "Running"],
            datasets: [
                {
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    fillColor: "rgba(151,187,205,0.5)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]

        }

        var myRadar = new Chart(document.getElementById("RadarCanvas").getContext("2d")).Radar(radarChartData, { scaleShowLabels: false, pointLabelFontSize: 10 });
    }
   , Draw_BarChart: function () {

       var barChartData = {
           labels: ["January", "February", "March", "April", "May", "June", "July"],
           datasets: [
               {
                   fillColor: "rgba(220,220,220,0.5)",
                   strokeColor: "rgba(220,220,220,1)",
                   data: [65, 59, 90, 81, 56, 55, 40]
               },
               {
                   fillColor: "rgba(151,187,205,0.5)",
                   strokeColor: "rgba(151,187,205,1)",
                   data: [28, 48, 40, 19, 96, 27, 100]
               }
           ]

       }

       var myLine = new Chart(document.getElementById("BarCanvas").getContext("2d")).Bar(barChartData);
   }
   , Draw_DoughnutChart: function () {
       var doughnutData = [
                {
                    value: 30,
                    color: "#F7464A"
                },
                {
                    value: 50,
                    color: "#46BFBD"
                },
                {
                    value: 100,
                    color: "#FDB45C"
                },
                {
                    value: 40,
                    color: "#949FB1"
                },
                {
                    value: 120,
                    color: "#4D5360"
                }

       ];

       var myDoughnut = new Chart(document.getElementById("doughnutCanvas").getContext("2d")).Doughnut(doughnutData);
   }
   , Draw_LineChart: function () {
       var lineChartData = {
           labels: ["January", "February", "March", "April", "May", "June", "July"],
           datasets: [
               {
                   fillColor: "rgba(220,220,220,0.5)",
                   strokeColor: "rgba(220,220,220,1)",
                   pointColor: "rgba(220,220,220,1)",
                   pointStrokeColor: "#fff",
                   data: [65, 59, 90, 81, 56, 55, 40]
               },
               {
                   fillColor: "rgba(151,187,205,0.5)",
                   strokeColor: "rgba(151,187,205,1)",
                   pointColor: "rgba(151,187,205,1)",
                   pointStrokeColor: "#fff",
                   data: [28, 48, 40, 19, 96, 27, 100]
               }
           ]

       }

       var myLine = new Chart(document.getElementById("lineCanvas").getContext("2d")).Line(lineChartData);
   }
   , Draw_PieCanvas: function () {
       var pieData = [
                {
                    value: 30,
                    color: "#F38630"
                },
                {
                    value: 50,
                    color: "#E0E4CC"
                },
                {
                    value: 100,
                    color: "#69D2E7"
                }

       ];

       var myPie = new Chart(document.getElementById("pieCanvas").getContext("2d")).Pie(pieData);

   }
   , Draw_PolarAreaCanvas: function () {
       var chartData = [
            {
                value: Math.random(),
                color: "#D97041"
            },
            {
                value: Math.random(),
                color: "#C7604C"
            },
            {
                value: Math.random(),
                color: "#21323D"
            },
            {
                value: Math.random(),
                color: "#9D9B7F"
            },
            {
                value: Math.random(),
                color: "#7D4F6D"
            },
            {
                value: Math.random(),
                color: "#584A5E"
            }
       ];
       var myPolarArea = new Chart(document.getElementById("polarAreaCanvas").getContext("2d")).PolarArea(chartData);
   }
});