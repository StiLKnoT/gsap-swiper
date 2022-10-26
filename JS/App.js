let pageSlider = new Swiper('.page',{
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",
    direction: 'vertical',
    slidesPerView: 'auto',  
    parallax: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {     
        sensitivity: 1,
    },
    watchOverflow: true,  
    speed: 800,
    observer: true,
    observerParents: true,
    observerSlideChilder: true,
    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: "page__bullet",
        bulletActiviClass: "page__bullet_active"
    },

    scrollbar: {
        el:'.page__scroll',
        dragCLass: "page_drag-scroll",
        draggable: true
    }

})


let options = {
    root: null,
    rootMargin:'0px',
    threshold: 1.0
};
let callback = (entries, observer)=>{
    entries.forEach(entry => {
        if(entry.target.id == 'videoID'){
            if(entry.isIntersecting){
                entry.target.play().muted = false;
            }
            else{
                entry.target.pause()
            }
        }
        if(entry.target.id == 'videoID2'){
            if(entry.isIntersecting){
                entry.target.play().muted = false;
            }
            else{
                entry.target.pause()
            }
        }
        if(entry.target.id == 'videoID3'){
            if(entry.isIntersecting){
                entry.target.play().muted = false;
            }
            else{
                entry.target.pause()
            }
        }
    })
}
let observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('#videoID'));