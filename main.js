 const uslugeBtn = document.querySelector('.usluge button');
 const mobileUslugeBtn = document.querySelectorAll('.mobile-usluge button');
const uslugePara = document.querySelectorAll('.usluge-box-item p');
const mobileUslugePara = document.querySelectorAll('.mobile-usluge-box-item p');
const infoText = document.querySelector('.info-text');
const paraBox = document.querySelector('.info-text-box .para-box');
const mobileInfoText = document.querySelector('.mobile-info-text');
const close = document.querySelector('.close');
const mobileClose = document.querySelector('.mobile-close');
const title = document.querySelector('.title');
const mobileTitle = document.querySelector('.mobile-title');
const uslugeBoxItemHeadings = document.querySelectorAll('.usluge-box-item h4');
const modal = document.querySelector('.modal');
const mobileModal = document.querySelector('.mobile-modal');
const headings = document.querySelectorAll('.heading');
const para = document.querySelector('.para');
const mobilePara = document.querySelector('.mobile-para');
const usluge = document.querySelector('.usluge');
const modalImg = document.querySelectorAll('.usluge-box-item img');
const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const mobile = document.querySelector('.mobile');
const h1 = document.querySelector('h1');


const closeModal = function(){                       //zatvaranje modala 
    mobileInfoText.style.display = 'none';
    mobileModal.style.display = 'none';
}


close.addEventListener('click', ()=>{                //zatvaranje menu kod mobilnog uredjaja
menu.style.display = 'none';
mobile.style.display = 'flex';
h1.style.display = 'block';
})

hamburger.addEventListener('click', ()=>{
    menu.style.display = 'block';
    mobile.style.display = 'none';
    h1.style.display = 'none';
  
    })

    const scrollSmooth = (e)=>{
        e.preventDefault();
        if (e.target.classList.contains('nav-link')) {
            const link = e.target.getAttribute('href');
            const b = document.querySelector(link);
            
    const q = b.getBoundingClientRect();
            window.scrollTo({
            left: q.left + window.pageXOffset,
            top: q.top + window.pageYOffset,
            behavior: 'smooth',
            })
            closeMenu(); 
        }
             if (e.target.classList.contains('home-link')) {
        closeMenu(); 
        }
    }

document.querySelector('.nav ul').addEventListener('click', function(e){
    scrollSmooth(e);
})

// MOBILE-SCROLL-START
function closeMenu(){                   //zatvaranje mobile menu
    menu.style.display = 'none';   
    mobile.style.display = 'flex';
    h1.style.display = 'block';
}
document.querySelector('.mobile-ul').addEventListener('click', function(e){
    scrollSmooth(e);

})
// MOBILE-SCROLL-END


    // uslugeBtn.addEventListener('click', ()=>{                        
    //     headings.forEach((heading, i)=>{
    //     const modalBcgImg = modalImg[i].getAttribute('src');
    //     infoText.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0, .3), rgba(0,0,0, .3)),url(${modalBcgImg})`;
    //     title.innerText = headings[i].textContent;
    //     para.innerText = uslugePara[i].textContent;
    //     heading.style.borderLeft = 'none';
    //     })
     

    //  })

    //  MOBILE-USLUGE-START
    mobileUslugeBtn.forEach((e,i)=>{
        e.addEventListener('click', ()=>{
            mobileInfoText.style.display = 'block';
            mobileModal.style.display = 'block';
            const mobileModalBcgImg = modalImg[i].getAttribute('src');
            mobileInfoText.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0, .3), rgba(0,0,0, .3)),url(${mobileModalBcgImg})`;
            mobileTitle.innerText = uslugeBoxItemHeadings[i].textContent;
            mobilePara.innerText = uslugePara[i].textContent;  
         })
    })

    mobileClose.addEventListener('click', closeModal);

    mobileModal.addEventListener('click', closeModal);
   //  MOBILE-USLUGE-END


headings.forEach((heading,i)=>{                                 
title.innerText = headings[0].textContent;
para.innerText = uslugePara[0].textContent;
heading.addEventListener('click', (e)=>{
headings.forEach(heading=>{
heading.style.borderLeft = 'none';
title.innerText = headings[i].textContent;
para.innerText = uslugePara[i].textContent;
})
const modalBcgImg = modalImg[i].getAttribute('src');
infoText.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0, .3), rgba(0,0,0, .3)),url(${modalBcgImg})`;
e.target.style.borderLeft = ' 3px solid  rgb(249, 170, 21)';
})
})




