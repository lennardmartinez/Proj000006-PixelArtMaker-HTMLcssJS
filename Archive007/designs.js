// Select color input
var colorPicker;
var defaultColor = "#02b3e4";
var selectedColor;

// Startup of site and positioning the color to ready
window.addEventListener("load", startup, false);

function startup() {
    colorPicker = document.querySelector("#colorPicker");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", updateTitle, false);
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", updateAll, false);
    colorPicker.addEventListener("change", paintBrushColour, false);
    const canvas = document.getElementById("container");
    canvas.addEventListener("click", paintAfterClick, false);
};
// Color on Paintbrush
function paintBrushColour(event) {
  selectedColor = event.target.value;
  };

// Color of tile when clicked
function paintAfterClick(event) {
  event.target.style.backgroundColor = selectedColor;
}

// Title's color updates when color wheel has an input
function updateTitle(event) {
    var t = document.querySelector('h1');  
    if (t) {
        t.style.color = event.target.value;
    };
  };

// Change font color inside paragraph while color wheel input is changing
function updateFirst(event) {
    var p = document.querySelector("p");  
    if (p) {
      p.style.color = event.target.value;
    };
  };
// Change font color inside paragraph while color wheel input is changing
function updateAll(event) {
    document.querySelectorAll("p").forEach(function(p) {
      p.style.color = event.target.value;
    });
  };

// Getting the values of the Grid Height and Grid Width
var rowInput = document.querySelector('#inputHeight');
var columnInput = document.querySelector('#inputWidth');

rowInput.addEventListener('change', function (e) {
    rows = e.target.value;
  });

columnInput.addEventListener('change', function (e) {
    cols = e.target.value;
  });

// makeGrid() function for when size info is submitted by the user 
function makeGrid() {
    const container = document.getElementById("container");

    function makeRows(rows, cols) {
      container.style.setProperty('--grid-rows', rows);
      container.style.setProperty('--grid-cols', cols);
      for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
      };
    };
    makeRows(rows,cols);
};

// Remove Grid Items after pressing submit
function removeGridItems() {
  const grid = document.getElementById("container");
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  };
};

// What happens when a form, with grid information, is submitted
var form = document.getElementById('sizePicker');
form.addEventListener('submit', logSubmit);

function logSubmit(event) {
    event.preventDefault();
    removeGridItems();
    return makeGrid();
  };

