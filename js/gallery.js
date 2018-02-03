const PICS_HOLDERS = document.querySelectorAll('.galleryPic');
const FIRSTSET = document.querySelectorAll('.firstSet');
const BEFORESET = document.querySelectorAll('.beforeSet');
const PRESENTSET = document.querySelectorAll('.presentSet');
const AFTERSET = document.querySelectorAll('.afterSet');
const LASTSET = document.querySelectorAll('.lastSet');
let picId = 1;
let setId = 1;

function gallery() {
    FIRSTSET[0].addEventListener('click', () => {
        picId = 1;
        setId = 1;
        getPics();    
    });

    BEFORESET[0].addEventListener('click', () => {
        if(setId !== 1) {
            setId--;
        } 

        if( picId > 6) {
            picId = picId - 6;
            getPics();
        } else {
            picId = 1;
            getPics();
        }
    });

    AFTERSET[0].addEventListener('click', () => {
        setId++;
        getPics();
    });

    LASTSET[0].addEventListener('click', () => {
        
    });


}

function getPics() {
    
    for(let i = 0; i < PICS_HOLDERS.length; i++) {
        PICS_HOLDERS[i].style.background = 'url("./images/gallery/shot (' + picId + ').jpg") no-repeat center';
        PICS_HOLDERS[i].style.backgroundSize = "cover";
        picId++
    };

    PRESENTSET[0].innerHTML = "" + setId;
    console.log(picId);
}

function hoverZoom(pic) {
    let className = "zoomedPic";
    let isClicked = pic.classList.contains("clickedPic");

    if(!isClicked) {
        if (pic.classList)
            pic.classList.add(className);
        else
            pic.className += ' ' + className;
    }

    console.log(pic.classList);
}

function hoverZoomOut(pic) {
    let className = "zoomedPic";
    if (pic.classList)
        pic.classList.remove(className);
    else
        pic.className = pic.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
} 

function clickZoom(pic) {
    let className = "clickedPic";

    let isClicked = pic.classList.contains("clickedPic");
    let isHover = pic.classList.contains("zoomedPic");
    
    let exitBtn = document.getElementById("exitBtn");
    let bg = document.querySelectorAll(".clickedPicBg");

    if(isHover) {
        hoverZoomOut(pic);
    }

    if (pic.classList)
        pic.classList.add(className);
    else
        pic.className += ' ' + className;

    pic.style.backgroundSize = "contain";
    exitBtn.style.visibility = "visible";
    bg[0].style.visibility = "visible";
    console.log(pic.classList);
  
}

function exitZoom() {
    let exitBtn = document.getElementById("exitBtn");
    let className = "clickedPic";
    let imgToExit = document.querySelectorAll('.' + className);
    let bg = document.querySelectorAll(".clickedPicBg");

    if (imgToExit[0].classList)
    imgToExit[0].classList.remove(className);
    else
    imgToExit[0].className = imgToExit[0].className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

    imgToExit[0].style.backgroundSize = "cover";
    exitBtn.style.visibility = "hidden";
    bg[0].style.visibility = "hidden";
}

getPics();
gallery();

