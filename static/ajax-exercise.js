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

function melon_info(response) {
  
  //conditional, if response is right error msg, display in red
  // $('#order-status').html(response.code);

  if (response.code === 'ERROR'){ 
    $('#order-status').addClass('order-error');
    $('#order-status').html(response.msg);
  } else { 
    $('#order-status').html(response.code);
    $('#order-status').html(response.msg);
  }
}
//this is keeping it red once an error is called on page, works othewise. 

function orderMelons(evt) {
  evt.preventDefault();
  const url = '/order-melons.json';
  const formData = {
    melon_type: $('#melon-type-field').val(),
    qty: $('#qty-field').val()
  };
  // keys at from of form data have to be keys in request.form.get in server.py. 

  $.post(url, formData, melon_info);
  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$('#order-form').on('submit', orderMelons);
