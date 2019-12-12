$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

$('#temp-up').on('click', function() {
  thermostat.up();
  updateTemperature();
});

$('#temp-down').click(function() {
  thermostat.down();
  updateTemperature();
});

$('#temp-reset').click(function() {
  thermostat.resetTemperature();
  updateTemperature();
});

$('#powersaving-on').click(function() {
  thermostat.switchPowerSavingModeOn();
  $('#powersaving-on').text('on')
  updateTemperature();
});

$('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#powersaving-off').text('off')
    updateTemperature();
});

function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=c90ae9f1a49ed11aae0fe36f59856cf2&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    });
  });
});
