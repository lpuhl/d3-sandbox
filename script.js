// d3.selectAll('.item:nth-child(3n)')
//   .html('<strong>selection</strong>');

// d3.selectAll('.item')
//   .append('div')
//   .html('<strong>selection</strong>');

// d3.select('.item')
//   .append('span')
//   .html('<strong>selection</strong>');


// d3.selectAll('.item')
//   .attr('class', 'highlight');


// Add class to existing class
// d3.selectAll('.item')
//   .classed('highlight', true);

// // To turn one or more class on or off, use an object
// d3.selectAll('.item:nth-child(3)')
//   .classed({
//     'highlight': true,
//     'item': false,
//     'bigger': true
//   });

// Style directly, without stylesheet
// d3.selectAll('.item')
//   .style(
//     'background', '#268BD2'
//   );
//
//
// var myStyles =['#268BD2', '#BD3929'];
//
// d3.selectAll('.item')
//   .data(myStyles)
//   // (d) variable inherits information from .data method
//   .style('background', function(d) {
//     return d;
//   });


var myStyles = [
  { width: 200,
    name: 'Barot Bellingham',
    color: '#A57706'},
  { width: 230,
    name: 'Hassum Harrod',
    color: '#BD3613'},
  { width: 220,
    name: 'Jennifer Jerome',
    color: '#D11C24'},
  { width: 290,
    name: 'Richard Tweed',
    color: '#C61C6F'},
  { width: 236,
    name: 'Lorenzo Garcia',
    color: '#595AB7'},
  { width: 230,
    name: 'Xhou Ta',
    color: '#2176C7'}
];

d3.selectAll('#chart').selectAll('div')
  .data(myStyles)
  .enter().append('div')
  .classed('item', true)
  .text(function(d){
    return d.name;
  })
  .styles({
    'color': 'white',
    'background' : function(d) {
      return d.color;
    },
    width : function(d) {
      return d.width + 'px';
    }
  })
