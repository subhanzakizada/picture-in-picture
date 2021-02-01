const videoEl = document.getElementById('video')
const startBtn = document.getElementById('btn-start')

// a window pops up on the screen and you get to choose your video source to play from
async function selectMediaPlayer() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia() // a window 
        videoEl.srcObject = mediaStream // setting the source
        videoEl.onloadedmetadata = () => videoEl.play() // video starts to play
    } catch(error) {
        alert('Something went wrong. Please refresh the page and try again!', error)
    }
}

// On Load
selectMediaPlayer()

// activate picture in picture mode only when start button gets clicked
startBtn.addEventListener('click', async () => {
    // disable the button while video is playing on picture in picture mode
    startBtn.disabled = true
    
    // activate picture in picture mode
    await videoEl.requestPictureInPicture()
    
    // activate the button
    startBtn.disabled = false
})