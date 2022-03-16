
// var gamificationConst = 50;
// var gamificationArray = [ 225 ]

// localStorage.setItem("gamificationValue", 0);
var xxxx = localStorage.getItem("gamificationValue");

// Displaying Gamification cards
buidCards(xxxx);
function buidCards(xxxx) {
  var cards = document.getElementById("gamification-picks");
    let gamificationPercentageValue = xxxx / 500 * 100
    var card =
      `<div class="acheivemnt-ongoing">
      <div class="col-12 col-sm-7 col-md-6 col-lg-5 col-xl-4 mt-2 acheivemnt-ongoing-card" style="height: 130px">
        <div class="ml-2 mr-2 pt-5" style="background-color: white; border-radius: 20px">
          <div class="container-fluid">
            <div class="row" style="margin-left: auto; margin-top: -40px; margin-right: auto; ">
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 m-0 p-0">
                <div class="progress-circle p${gamificationPercentageValue}" id="progression">
                    <span id="text-progression">${gamificationPercentageValue}%</span>
                    <div class="left-half-clipper">
                    <div class="first50-bar"></div>
                    <div class="value-bar"></div>
                    </div>
                </div>
                </div>

              <div class="col-8 col-sm-8 col-md-8 col-lg-8 pl-4" style="margin-left: auto; margin-top: -10px; margin-right: auto; ">
                <div class="row">
                  <div>
                    <div class="box2 sb11">
                      You are a
                      <span id="remaining-progress">Bronze</span> Member
                      <br />
                      <span id="remaining-progress">${xxxx}</span> / 500 to
                      Reach Silver
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
    cards.innerHTML += card
}

// Adding Values to the Wheel
var options = [20, 10, 25, 5, 40, 30, 10, 0, 45, 100, 15, 35];

var startAngle = 0;
var arc = Math.PI / (options.length / 2);
var spinTimeout = null;

var spinArcStart = 10;
var spinTime = 0;
var spinTimeTotal = 0;

var ctx;

document.getElementById("spin").addEventListener("click", spin);

function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

// Return Colors
function RGB2Color(r,g,b) {
	return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

// Get the Color for the Wheel Randomly
function getColor(item, maxitem) {
  var phase = 0;
  var center = 128;
  var width = 127;
  var frequency = Math.PI*2/maxitem;
  
  red   = Math.sin(frequency*item+2+phase) * width + center;
  green = Math.sin(frequency*item+0+phase) * width + center;
  blue  = Math.sin(frequency*item+4+phase) * width + center;
  
  return RGB2Color(red,green,blue);
}

// Rotate the Wheel
function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var outsideRadius = 200;
    var textRadius = 160;
    var insideRadius = 125;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,500,500);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.font = 'bold 12px Helvetica, Arial';

    for(var i = 0; i < options.length; i++) {
      var angle = startAngle + i * arc;
      //ctx.fillStyle = colors[i];
      ctx.fillStyle = getColor(i, options.length);

      ctx.beginPath();
      ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
      ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();

      ctx.save();
      ctx.shadowOffsetX = -1;
      ctx.shadowOffsetY = -1;
      ctx.shadowBlur    = 0;
      ctx.shadowColor   = "rgb(220,220,220)";
      ctx.fillStyle = "black";
      ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
                    250 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      var text = options[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    } 

    //Arrow
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
    ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.fill();
  }
}

// Rotate the Wheel
function spin() {
  spinAngleStart = Math.random() * 10 + 10;
  spinTime = 0;
  spinTimeTotal = Math.random() * 3 + 4 * 1000;
  rotateWheel();
}

// Rotate the Wheel
function rotateWheel() {
  spinTime += 30;
  if(spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI / 180);
  drawRouletteWheel();
  spinTimeout = setTimeout('rotateWheel()', 30);
}

// Stop the Rotating Wheel
function stopRotateWheel() {
  clearTimeout(spinTimeout);
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.save();
  ctx.font = 'bold 30px Helvetica, Arial';
  var text = options[index]
  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
  ctx.restore();
  xxxx = parseInt(xxxx)  + parseInt(text);
  localStorage.setItem("gamificationValue", xxxx);
  // alert(xxxx);

  var cards = document.getElementById("gamification-picks");
    document.getElementById("gamification-picks").innerHTML = "";
    let gamificationPercentageValue = Math.round(xxxx / 500 * 100) 
    var card =
      `<div class="acheivemnt-ongoing">
      <div class="col-12 col-sm-7 col-md-6 col-lg-5 col-xl-4 mt-2 acheivemnt-ongoing-card" style="height: 130px">
        <div class="ml-2 mr-2 pt-5" style="background-color: white; border-radius: 20px">
          <div class="container-fluid">
            <div class="row" style="margin-left: auto; margin-top: -40px; margin-right: auto; ">
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 m-0 p-0">
                <div class="progress-circle p${gamificationPercentageValue}" id="progression">
                    <span id="text-progression">${gamificationPercentageValue}%</span>
                    <div class="left-half-clipper">
                    <div class="first50-bar"></div>
                    <div class="value-bar"></div>
                    </div>
                </div>
                </div>

              <div class="col-8 col-sm-8 col-md-8 col-lg-8 pl-4" style="margin-left: auto; margin-top: -10px; margin-right: auto; ">
                <div class="row">
                  <div>
                    <div class="box2 sb11">
                      You are a
                      <span id="remaining-progress">Bronze</span> Member
                      <br />
                      <span id="remaining-progress">${xxxx}</span> / 500 to
                      Reach Silver
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
    cards.innerHTML += card

  wheeelValue(text);
}

// Slow Down the Spinning Wheel
function easeOut(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}

drawRouletteWheel();

// System Feedback Model for Wheel Spinning
function wheeelValue(text){
  $('#gamification-validation-modal').modal('show');
}

