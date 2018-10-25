window.onload=function() {

  var data = [10, 20, 30, 40];
  var divs = d3.select('body')
    .selectAll('div')
    .data(data);
  divs.enter()
    .append('div');
  divs.on('click', function(d, i) {
      d3.select(this)
        .style('background-color', '#42efef')
        .style('padding', '5px')
        .text(d)
    })
    .style({
      width: '20px',
      height: function(d) {
        return d + 'px'
      },
      margin: '15px',
      float: 'left',
      'background-color': '#25B0B0'
    });

  newData = [25, 50, 75, 100];

  d3.select("body").selectAll("div").data(newData).exit().remove();

  divs.style({
    width: '20px',
    height: function(d) {
      return d + 'px'
    },
    margin: '15px',
    float: 'left',
    'background-color': 'red'
  });


}