// Select color input

var colorPicker;
var defaultColor = "#02b3e4";
var selectedColor;

window.addEventListener("load", startup, false);

function startup() {
    colorPicker = document.querySelector("#colorPicker");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", updateTitle, false);
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
}

// Title's color updates when color wheel has an input
function updateTitle(event) {
    var t = document.querySelector('h1');
  
    if (t) {
        t.style.color = event.target.value;
    }
  }

// Change font color inside paragraph while color wheel input is changing
function updateFirst(event) {
    var p = document.querySelector("p");
  
    if (p) {
      p.style.color = event.target.value;
    }
  }
// Change font color inside paragraph while color wheel input is changing
function updateAll(event) {
    document.querySelectorAll("p").forEach(function(p) {
      p.style.color = event.target.value;
    });
  }

// Select size input
var rowInput = document.querySelector('#inputHeight');
var columnInput = document.querySelector('#inputWidth');

rowInput.addEventListener('change', function (e) {
    rows = e.target.value;
  });

columnInput.addEventListener('change', function (e) {
    cols = e.target.value;
  });

// When size is submitted by the user, call makeGrid()
function makeGrid() {

// Your code goes here!

}
