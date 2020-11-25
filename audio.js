var audioCtx;

var birdSource;

var source;

async function loadBuffer(bufferURL) {
    //better to have a try/catch block here, but for simplicity...
    const response = await fetch(bufferURL);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
    return audioBuffer;
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    playBirdAudio();
})

async function playBirdAudio(){
    audioCtx = new AudioContext();


    birdSource = await loadBuffer('./silly_birds.mp3');
    source = audioCtx.createBufferSource();
    source.connect(audioCtx.destination); 

    source.buffer = birdSource;
    source.start();
   

}
