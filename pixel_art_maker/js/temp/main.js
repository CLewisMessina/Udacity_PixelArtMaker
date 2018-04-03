// Select color input
var height, width, color;

// Select size input
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);
  console.log(height + width);

});


// When size is submitted by the user, call makeGrid()


function makeGrid(gridWidth, gridHeight) {
  $('tr').remove();

  for (var i = 1; i <= gridWidth; i++) {
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    for (var j = 1; j <= gridHeight; j++) {
      $('#table' + i).append('<td></td>');
    }
  }
  //add color to cell when selected by mouse
  $('td').click(function addColor(){
    color = $('#colorPicker').val();

    if ($(this).attr('style')){
      $(this).removeAttr('style')
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  })

}
