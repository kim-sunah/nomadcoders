const socket = io();

const myFace = document.getElementById('myFace');
const muteBtn = document.getElementById('mute')
const cameraBtn = document.getElementById('camera')

let myStream;
let muted = false;
let cameraOff = false;

async function getMedia() {
    try {
        myStream = await navigator.mediaDevices.getUserMedia(
            { audio: true, video: true }
        )
        myFace.srcObject = myStream;
    } catch (e) {
        console.log(e)
    }
}

getMedia()

//음소거
muteBtn.addEventListener('click', handleMuteBtnClick);
function handleMuteBtnClick() {
    if (!muted) {
        muteBtn.innerText = "Un Mute"
        muted = true
    } else {
        muteBtn.innerText = "Mute"
        muted = false
    }
}


//카메라 on & off
cameraBtn.addEventListener('click', handleCameraBtnClick);
function handleCameraBtnClick() {
    if (!cameraOff) {
        cameraBtn.innerText = "Turn Camera Off"
        cameraOff = true
    } else {
        cameraBtn.innerText = "Turn Camera On"
        cameraOff = false
    }
}
