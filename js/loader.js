let fakeLoad = false;

const LOADER_DIV = document.querySelector('.loaderDiv');
const LOADED_CLASS = 'loaded';

function loaded() {
    LOADER_DIV.classList.add(LOADED_CLASS)
}

function fakeLoading() {
    setTimeout(function() {
        fakeLoad = true;
        isLoaded();
    }, 100);
}

function isLoaded() {
    if (document.readyState === "complete" && fakeLoad) {
        loaded();
    }
}

document.onreadystatechange = function() {
    isLoaded();
}

fakeLoading();
