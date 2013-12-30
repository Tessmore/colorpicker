Colorpicker
===========

A simple color picker that allows the user to choose from a set of predefined colors.
For instance, if you want to allow the user to select a background color of an event in a calendar a particular
color from the entire wheel is difficult. 

# Requirements

The script is a jQuery plugin

* jQuery.js
* colorpicker.css
* colorpicker.js


# Usage

Include the css and javascript file and initialize the input field you want to use for colorpicking

  $('.colorpicker').colorpicker();

Multiple input fields could be destined for the colorpicker. Use an `id` (or input name) if you want
to use a follow up action with javascript

  $('input[name="color").on('change', function() {
    console.log($(this).val());
    // Logs the color value: #fefefe; for example
  });

![Screenshot of the colorpicker](screenshot.png?raw=true)