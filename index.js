let percentValue = 0;

function calculate(equal) {
  if (document.getElementById('screen').value.length > 0) {
    var answer = eval(equal);
    document.getElementById('screen').value = answer; 
  }
}

function pressingButton(value) {
  if (percentValue !== 0) {
    document.getElementById('screen').value = "";
    percentValue = 0;
  }
  document.getElementById('screen').value += value;
}

  function percent() {
    let screen = document.getElementById("screen");
    let value = parseFloat(screen.value);
  
    if (!isNaN(value)) {
      percentValue = value / 100;
      screen.value = percentValue;
      calculate(percentValue);
    }
  }
function reset() {
  document.getElementById('screen').value = '';
  percentValue = 0;
}

function noAction(value) {
  if (document.getElementById('screen').value.length > 0) {
    document.getElementById('screen').value += value;
  }
}

function oneAction(val) {
  let screen = document.getElementById("screen");
  let lastChar = screen.value[screen.value.length - 1];

  if (lastChar >= "0" && lastChar <= "9") {
    prevCharIsNum = true;
  } else {
    prevCharIsNum = false;
  }

  if (prevCharIsNum) {
    screen.value += val;
  }

}

function zero(val) {
  let screen = document.getElementById("screen");
  if (screen.value === '') {
    screen.value = '0' + val;
  } else if (screen.value.indexOf('+') !== -1 || screen.value.indexOf('-') !== -1 || screen.value.indexOf('*') !== -1 || screen.value.indexOf('/') !== -1) {
    let lastNumber = screen.value.split(/\+|\-|\*|\//).pop();
    if (lastNumber === '') {
      screen.value += '0' + val;
    } else if (lastNumber.indexOf('.') === -1) {
      screen.value += val;
    }
  } else {
    screen.value += val;
  }
}
function positiveOrNegativeNumber(val) {
  let screen = document.getElementById("screen");
  if (val === '+/-') {
    if (screen.value.startsWith('-')) {
      screen.value = screen.value.substring(1);
    } else {
      screen.value = '-' + screen.value;
    }
  } 
}
