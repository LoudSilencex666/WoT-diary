var tanksDataObject;
let tankIterator = 0;
let tankHoverState = false;
const TANK_PIC = document.querySelector('.tankPic');
const TANK_STATS_CELLS = document.querySelectorAll('.jsonTankStat');
const TANK_NAME_TITLE = document.querySelector('.tankName');
const LEFT_ARROW_HANDLER = document.querySelector('.tankLeftArrow');
const RIGHT_ARROW_HANDLER = document.querySelector('.tankRightArrow');

function leftArrowIteration() {
    if(tankIterator > 0) {
        tankIterator--;
        tanksDataManagment(tanksDataObject);
    } else 
        tankIterator = tankIterator;
}

function rightArrowIteration() {
    if(tankIterator < 7) {
        tankIterator++;
        tanksDataManagment(tanksDataObject);
    } else 
        tankIterator = tankIterator;
}

function hoverTankPic() {
    tankHoverState = !tankHoverState;
    console.log(tankHoverState);
    if(tankHoverState) {
        TANK_PIC.style.background = 'url("' + tanksDataObject.tanks[tankIterator].artUrl + 'Raw.png") no-repeat center';
        TANK_PIC.style.backgroundSize = 'contain';
    } else {
        TANK_PIC.style.background = 'url("' + tanksDataObject.tanks[tankIterator].artUrl + '.png") no-repeat center';
        TANK_PIC.style.backgroundSize = 'contain';
    }
}

function tanksDataManagment(dataObject) {
    let objectPropertiesList = Object.keys(dataObject.tanks[tankIterator]);
    TANK_NAME_TITLE.innerHTML = dataObject.tanks[tankIterator].name;
    TANK_PIC.style.background = 'url("' + dataObject.tanks[tankIterator].artUrl + '.png") no-repeat center';
    TANK_PIC.style.backgroundSize = 'contain';
    for(let i = 0; i < TANK_STATS_CELLS.length; i++) {
        TANK_STATS_CELLS[i].innerHTML = '' + dataObject.tanks[tankIterator][''+ objectPropertiesList[i+1]];
    }
}

var tanksDataHTTPRequest = new XMLHttpRequest();
tanksDataHTTPRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        tanksDataObject = JSON.parse(this.responseText);
        tanksDataManagment(tanksDataObject);
    }
};
tanksDataHTTPRequest.open("GET", "./data/tanks/tanksData.json", true);
tanksDataHTTPRequest.send();

