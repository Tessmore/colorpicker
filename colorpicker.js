/*
  Licensed "AS IF" by Fabien Tesselaar (Thursday may 23, 2013)
  https://github.com/Tessmore/colorpicker
*/

$.fn.colorpicker = function() {

  var picker = $('<ul id="colorpicker" />');
  
  // Set colors
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
  
  // Create html list of colors to select from
  for (var color in colors)
    picker.append('<li style="background:'+ colors[color] +'" title="'+ color +'">'+ colors[color] +'</li>');
  
  // Add this color list to the DOM
  $('body').append(picker);
  
  // Apply the colorpicker listeners
  return this.each(function() {
    
    // The input for color picking
    var input = $(this);
    
    input.on('focus, click', function() {
      
      // Use offset to correctly place the color picker
      var offset = $(this).offset();
      
      // Adjust the css of the color list, so it is displayed under the input
      picker.css({
        'display' : 'block',
        'top'  : offset.top  + 20
      })
      // If an item of the colorpicker (a color) is clicked)
      .children().click(function() {        
        
        // Set the value to the hex of the color picked + adjust background
        // for visual
        input
          .val($(this).text())
          .css('background', $(this).text());
          
        input.focus().trigger('change');
      });
    });
    
    // Hide the list of colors
    input.blur(function() {
      if (! picker.is(':hover')) 
        picker.fadeOut(200);
    });
    
    var color = function() {
      return input.val();
    }
  });
};