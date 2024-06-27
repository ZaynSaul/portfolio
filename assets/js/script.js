const sections = document.querySelectorAll('.section[id]');

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(section =>{
        const screenHeight = section.offsetHeight,
        sectionTop = section.offsetTop - 50,
        sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + screenHeight){
            document.querySelector('.mobile-navbar a[href*='+sectionId +']').
            classList.add('active-btn');
        }else{
            document.querySelector('.mobile-navbar a[href*='+sectionId +']').
            classList.remove('active-btn');
        }

        if(scrollY > sectionTop && scrollY <= sectionTop + screenHeight){
            document.querySelector('.navbar a[href*='+sectionId +']').
            classList.add('active-link');
        }else{
            document.querySelector('.navbar a[href*='+sectionId +']').
            classList.remove('active-link');
        }
    });
}


window.addEventListener('scroll', scrollActive);