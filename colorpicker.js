/*
  Licensed "AS IF" by Fabien Tesselaar (Thursday may 23, 2013)
  https://github.com/Tessmore/colorpicker
*/

$.fn.colorpicker = function() {

  var picker = $('<ul id="colorpicker" />');
  
  var colors = {
    'light-green' : '#d8f3b1',
    'green'       : '#94deaf',
    'dark-green'  : '#67d08d',
    'light-blue'  : '#a6f8ff',
    'blue'        : '#87c3eb',
    'yellow'      : '#ffffb1',
    'orange'      : '#ffd78b',
    'red'         : '#f28f8b',
    'light-brown' : '#f1ebbb',
    'brown'       : '#d0c9a4'
  };
    
  for (var color in colors)
    picker.append('<li style="background:'+ colors[color] +'" title="'+ color +'">'+ colors[color] +'</li>');
  
  $('body').append(picker);
  
  return this.each(function() {
    
    var input = $(this);
    
    input.on('focus, click', function() {
      var offset = $(this).offset();
      
      picker.css({
        'display' : 'block',
        'top'  : offset.top  + 20
      })
      .children().click(function() {        
        input
          .val($(this).text())
          .css('background', $(this).text());
          
        input.focus();
      });
    });
    
    input.blur(function() {
      if (! picker.is(':hover')) 
        picker.fadeOut(200);
    });
    
  });
};
