window.onload = function() {
  var width = window.outerWidth;
  width = width/2
  var data = [3, 7, 21, 31, 35, 42];
  var x = d3.scale.linear().domain([0, d3.max(data)]).range([0, width]);
  var color = d3.scale.category10();

  d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .style({
      "width": function(d) {return x(d) + "px";},
      "background-color": function(d) {return color(d);},
    })
    .text(function(d) { return d; });
}