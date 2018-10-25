window.onload = function() {

  var data = [3, 7, 21, 31, 35, 42];

  var bars = d3.select(".chart").selectAll('div').data(data).enter().append('div');

  bars.style({
    margin: "1px",
    padding: "3px",
    height: '20px',
    width: function(d) {
      return ((d+1)*15) + 'px';
    },
    'background-color': '#25B0B0',
    'color': "#FFF",
    'text-align': "right"
  });
  
  bars.text(function(d) {
    return d;
  });
  
  var new_data = [3, 7, 21, 31, 35, 42, 70, 25, 60, 14, 100, 75, 22, 50, 35];
  
  var height = 250;
  var width = 250;
  var barWidth = 35;
  var barOffset = 5;
  
  var myChar = d3.select('.bar-chart').append('svg')
  .style({
    width: width,
    height: height,
    background: '#f4f4f4'
  })
  .selectAll('rect')
    .data(data)
    .enter().append('rect')
      .style({
        fill: '#25B0B0',
        width: '35',
        height: function(d) {
          return (d*5);
        },
        x: function(d, i) {
          return i*(barWidth + barOffset);
        },
        y: function(d) {
          return height - d*5;
        }
      });
}