const imgs = document.querySelectorAll('.photo');
const videos = document.querySelectorAll('.videos');
const fullPage = document.querySelector('#fullpage');
const fullpage_img = document.querySelector('#fullpage_img');
const theVideo = document.querySelector('#theVideo');
const sourceVideo = document.querySelector('#sourceVideo');

imgs.forEach(img => {
    img.addEventListener('click', function () {
        fullpage_img.style.display = "block";
        fullpage_img.style.backgroundImage = 'url(' + img.src + ')';
        fullPage.style.display = 'block';
    });
});

fullPage.addEventListener("click", () => {
    theVideo.style.display = 'none';
    fullPage.style.display = "none";
    fullpage_img.style.display = "none";
    theVideo.stop();
})

document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.videos');

    videos.forEach(video => {
        // Videoyu başlangıçta duraklat
        video.pause();

        // Mouse ile üzerine gelindiğinde video oynat
        video.addEventListener('mouseover', () => {
            video.play();
            video.classList.add('playing');
        });

        // Mouse ile videodan çıkıldığında video duraklat
        video.addEventListener('mouseout', () => {
            video.pause();
            video.classList.remove('playing');
        });

        // Mobil cihazlarda basılı tutulduğunda video oynat
        video.addEventListener('touchstart', () => {
            video.play();
            video.classList.add('playing');
        });

        // Mobil cihazlarda basılı tutma sonrasında video duraklat
        video.addEventListener('touchend', () => {
            video.pause();
            video.classList.remove('playing');
        }); 

        video.addEventListener('click', () => {
            theVideo.src = video.currentSrc;
            fullPage.style.display = 'block';
            theVideo.style.display = "block";
            theVideo.play();
            theVideo.muted = true;
        });
    });
});
