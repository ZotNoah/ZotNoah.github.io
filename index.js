window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        document.getElementById("navBar").style.top = "0";
    }else{
        document.getElementById("navBar").style.top = "-50px";
    }
}

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
 };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry=> {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
})