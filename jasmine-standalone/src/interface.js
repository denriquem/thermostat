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
  };
});
