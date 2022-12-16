
function userInput() {
    const firstName = prompt("Enter your name");
    if (firstName == "") {
      alert('Entry Required');
      return ;
    }
    if (firstName == null) {
    alert('Entry Required');
    return ;
    }  
    const lastName = prompt("Enter your last name");
    if (lastName == "") {
      alert('Entry Required');
      return ;
    }
    if (lastName == null) {
    alert('Entry Required');
    return ;
    }    
    const favColor = prompt("Enter your favorite color");
    if (favColor == "") {
      alert('Entry Required');
      return ;
    }
    if (favColor == null) {
    alert('Entry Required');
    return ;
    }  
    
    let pwd = firstName + lastName + favColor + '21'
    document.getElementById("showPWD").value = pwd;

    // show copy to clipboard button
    document.getElementById('copyBtn').style.display = "inline-block";
}

function reset(){
    document.getElementById("showPWD").value = "";
    document.getElementById('copyBtn').style.display = "none";
}

// copy to clipboard

function myCopy() {
  var copyText = document.getElementById("showPWD");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied to clipboard";
}


var tooltip = document.getElementById("myTooltip");
tooltip.innerHTML = "Copy to clipboard";


function hide() {
  document.getElementById('copyBtn').style.display = "";
}


// custom bg 
const canvas = document.getElementById('canv');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let cols = Math.floor(window.innerWidth / 20) + 1;
let ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function matrix () {
  const w = window.innerWidth;
  const h = window.innerHeight;
  
  if (canvas.width !== w) {
    canvas.width = w;
    cols = Math.floor(window.innerWidth / 20) + 1;
    ypos = Array(cols).fill(0);
  }
  if (canvas.height !== h) {
    canvas.height = h;
  }

  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#0f0';
  ctx.font = '10pt monospace';

  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 50);