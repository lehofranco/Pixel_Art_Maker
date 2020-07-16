// getting all the variables:

const colorPicker = document.getElementById('colorPicker');
const pixel = document.getElementById('pixelCanvas');
const row = document.getElementById('inputHeight');
const cell = document.getElementById('inputWidth');
const form = document.getElementById("sizePicker").addEventListener("submit", makeGrid);

pixel.addEventListener('click', function(event) {
  
  //to add the color:

  if (event.target.nodeName === 'TD') {
    event.target.style.backgroundColor = colorPicker.value;
  }
})
function makeGrid() {
  
  //to prevent the page to restart when 'Submit Query' button is pressed:

  event.preventDefault();
  pixel.innerHTML = '';
  
  //for loop to creat the grid:
  
  for (let x = 0; x < row.value; x++) {
    const row = pixel.insertRow(0)
    for (let y = 0; y < cell.value; y++) {
      row.insertCell(0)
    }
  }
}
