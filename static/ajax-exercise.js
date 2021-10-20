'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  $.get('/fortune', response => {
    $('#fortune-text').text(response);
  });
  
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER
function replaceweather(response){
  $('#weather-info').html(response.forecast);
}
function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const formData = {zipcode: $('#zipcode-field').val()};

  $.get(url, formData, replaceweather );
}

$('#weather-form').on('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$('#order-form').on('submit', orderMelons);
