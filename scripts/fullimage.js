const imgs = document.querySelectorAll('.photo');
const videos = document.querySelectorAll('.videos');
const fullPage = document.querySelector('#fullpage');
const fullpage_img = document.querySelector('#fullpage_img');
const theVideo = document.querySelector('#theVideo');
const sourceVideo = document.querySelector('#sourceVideo');

imgs.forEach(img => {
    img.addEventListener('click', function() {
        fullpage_img.style.display = "block";
        fullpage_img.style.backgroundImage = 'url(' + img.src + ')';
        fullPage.style.display = 'block';
    });
});

videos.forEach(video => {
    video.addEventListener('click', function() {
        theVideo.src = video.currentSrc;
        fullPage.style.display = 'block';
        theVideo.style.display = "block";
        theVideo.play();
        theVideo.muted = true;
    });
});

fullPage.addEventListener("click", ()=>{
    theVideo.style.display = 'none';
    fullPage.style.display = "none";
    fullpage_img.style.display = "none";
    theVideo.stop();
})