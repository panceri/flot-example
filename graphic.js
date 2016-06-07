$(function(){
  var data = [
	{ label: "Series1",  data: 10},
	{ label: "Series2",  data: 30},
	{ label: "Series3",  data: 90},
	{ label: "Series4",  data: 70},
	{ label: "Series5",  data: 80},
	{ label: "Series6",  data: 110}
  ];

  var graphics = $("#pie-chart");
  
  $.plot(graphics, data, {
    series: {
	  pie: { 
	    show: true
	  }
	}
  });

});