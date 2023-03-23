const uslugePara = document.querySelectorAll('.usluge-box-item p');
const infoText = document.querySelector('.info-text');
const paraBox = document.querySelector('.info-text-box .para-box');
const title = document.querySelector('.title');
const headings = document.querySelectorAll('.heading');
const para = document.querySelector('.para');
const usluge = document.querySelector('.usluge');
const modalImg = document.querySelectorAll('.usluge-box-item img');

headings.forEach((heading,i)=>{
    usluge.style.display = 'none';
    title.innerText = headings[0].textContent;
    para.innerText = uslugePara[0].textContent;
heading.addEventListener('click', (e)=>{
    headings.forEach(heading=>{
heading.style.borderLeft = 'none';
title.innerText = headings[i].textContent;
para.innerText = uslugePara[i].textContent;
    })
    const modalBcgImg = modalImg[i].getAttribute('src');
    paraBox.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0, .3), rgba(0,0,0, .3)),url(${modalBcgImg})`;
e.target.style.borderLeft = ' 3px solid  rgb(249, 170, 21)';

})

})
