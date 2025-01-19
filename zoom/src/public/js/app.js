const socket = io();

const myFace = document.getElementById('myFace');
const muteBtn = document.getElementById('mute');
const cameraBtn = document.getElementById('camera');
const camerasSelect = document.getElementById('cameras');
const welcome = document.getElementById('welcome');
const call = document.getElementById('call');

let muted = false;
let cameraOff = false;
let myStream;
let roomName;

call.hidden = true;

//소켓 io기능
async function getMedia(deviceId) {
    const initialConstrains = {
        audio: true,
        video: { facingMode: "user" }
    }
    const cameraConstraints = {
        audio: true,
        video: { deviceId: { exact: deviceId } },
    }
    try {
        myStream = await navigator.mediaDevices.getUserMedia(
            deviceId ? cameraConstraints : initialConstrains
        )
        myFace.srcObject = myStream;
        if (!deviceId) {
            await getCameras();
        }
    } catch (e) {
        console.log(e)
    }
}

//룸에 들어오기 전까지는 실행하면 안됨
// getMedia()

//음소거
muteBtn.addEventListener('click', handleMuteBtnClick);
function handleMuteBtnClick() {
    // console.log(myStream.getAudioTracks())
    myStream.getAudioTracks().forEach((track) => (track.enabled = !track.enabled))
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
    myStream.getVideoTracks().forEach((track) => (track.enabled = !track.enabled))
    if (!cameraOff) {
        cameraBtn.innerText = "Turn Camera Off"
        cameraOff = true
    } else {
        cameraBtn.innerText = "Turn Camera On"
        cameraOff = false
    }
}

//장치 가져오기
async function getCameras() {
    try {
        //장치 가져오기
        const devices = await navigator.mediaDevices.enumerateDevices();
        //카메라만 가져오기
        const cameras = devices.filter(device => device.kind === 'videoinput');
        //지금 내가 사용하고있는 카메라 가져요기
        const currentCamera = myStream.getVideoTracks()[0];
        //카메라 옵션 가져오기
        cameras.forEach((camera) => {
            const option = document.createElement('option');
            option.value = camera.deviceId;
            option.innerText = camera.label;
            //현재 내가 사용하고 있는 카메라 selected로 표시
            if (currentCamera.label === camera.label) {
                option.selected = true;
            }
            camerasSelect.appendChild(option);
        });
    } catch (e) {
        console.log(e)
    }
}

camerasSelect.addEventListener('input', handleCameraChange);

async function handleCameraChange() {
    await getMedia(camerasSelect.value);
}


//특정 룸에 접속
const welcomeForm = welcome.querySelector('form');

function startMedia() {
    welcome.hidden = true;
    call.hidden = false;
    getMedia();
}


welcome.addEventListener('submit', handleWelcomeSubmit);

function handleWelcomeSubmit(event) {
    event.preventDefault();
    const input = welcomeForm.querySelector('input');
    socket.emit("join_room", input.value, startMedia);
    roomName = input.value;
    input.value = "";
}

//socket코드

socket.on("welcome", () => {
    console.log("someone joined")
})