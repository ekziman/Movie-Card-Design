Array.from(document.getElementsByClassName('card')).forEach((i, a) =>{
    i.addEventListener('mouseover', ()=>{
        document.getElementsByClassName('video_bt')[a].style.zIndex = 99999999;
        document.getElementsByTagName('video')[a].play();
    })

    document.getElementsByClassName('bi-x-lg')[a].addEventListener('click', ()=> {
        document.getElementsByClassName('video_bt')[a].style.zIndex = -99999999;
        document.getElementsByTagName('video')[a].pause();
        i.addEventListener('mouseover', ()=>{
            document.getElementsByClassName('video_bt')[a].style.zIndex = -99999999;
            document.getElementsByTagName('video')[a].pause();
        })
    })

    document.getElementsByClassName('bi bi-play-circle-fill')[a].addEventListener('click', ()=>{
        document.getElementsByClassName('video_bt')[a].style.zIndex = 99999999;
        document.getElementsByTagName('video')[a].play();
        i.addEventListener('mouseover', ()=>{
            document.getElementsByClassName('video_bt')[a].style.zIndex = 99999999;
            document.getElementsByTagName('video')[a].play();
        })
    })

    let vol = document.getElementsByClassName('bi-volume-off-fill')[a];

    vol.addEventListener('click', ()=>{
        vol.classList.toggle('bi-volume-up-fill');
        document.getElementsByTagName('video')[a].muted = !document.getElementsByTagName('video')[a].muted
    })

    window.addEventListener('mouseout', ()=> {
        document.getElementsByClassName('video_bt')[a].style.zIndex = -99999999;
        document.getElementsByTagName('video')[a].pause();
    })
})