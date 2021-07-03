const turnOnOff = document.getElementById("turnOnOff");
const repair = document.getElementById("repair");
const lamp = document.getElementById("lamp");

function lampRepair() {
  lamp.src = "./img/desligada.jpg";
}

function isLampBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./img/ligada.jpg";
  }
}

function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "./img/desligada.jpg";
  }
}

function lampOnOff() {
  if (turnOnOff.textContent == "Turn On") {
    lampOn();
    turnOnOff.textContent = "Turn Off";
  } else {
    lampOff();
    turnOnOff.textContent = "Turn On";
  }
}

function lampBroken() {
  lamp.src = "./img/quebrada.jpg";
}

function lampRepair() {
  lamp.src = "./img/desligada.jpg";
}

turnOnOff.addEventListener("click", lampOnOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroken);
repair.addEventListener("click", lampRepair);
