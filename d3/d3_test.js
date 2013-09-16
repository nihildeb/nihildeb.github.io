'use strict';
/* global d3, _ */

var json, svg, keys;

d3.json('/data/hospital_ratings.json', function(data){
  json = data;
  keys = _.map(json.meta.view.columns, function(o) {return o.name;});
  svg = d3.select('svg');
  svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .text(function(d){
        return d;
      });
});
//var data = [32, 57, 112];
