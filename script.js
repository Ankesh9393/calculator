$(document).ready(function() {
  let expression = '';

  $('.btn').click(function() {
    const value = $(this).data('value');
    if (value !== undefined) {
      expression += value;
      $('#display').val(expression);
    }
  });

  $('#equals').click(function() {
    try {
      expression = eval(expression).toString();
      $('#display').val(expression);
    } catch (error) {
      $('#display').val('Error');
      expression = '';
    }
  });

  $('#clear').click(function() {
    expression = '';
    $('#display').val('');
  });
});
