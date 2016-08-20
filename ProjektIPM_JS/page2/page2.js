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



function drawChart() {
    var chart = new CanvasJS.Chart("chartContainer",
    {

        title: {
            text: "Earthquakes - per month"
        },
        data: [
       {
           type: "line",

           dataPoints: [
           { x: new Date(2012, 00, 1), y: 450 },
           { x: new Date(2012, 01, 1), y: 414 },
           { x: new Date(2012, 02, 1), y: 520 },
           { x: new Date(2012, 03, 1), y: 460 },
           { x: new Date(2012, 04, 1), y: 450 },
           { x: new Date(2012, 05, 1), y: 500 },
           { x: new Date(2012, 06, 1), y: 480 },
           { x: new Date(2012, 07, 1), y: 480 },
           { x: new Date(2012, 08, 1), y: 410 },
           { x: new Date(2012, 09, 1), y: 500 },
           { x: new Date(2012, 10, 1), y: 480 },
           { x: new Date(2012, 11, 1), y: 510 }
           ]
       }
        ]
    });

    chart.render();
}
drawChart();