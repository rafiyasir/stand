const navbar = document.querySelector('.transparent');
const body = document.querySelector('body');


var currentEle = $("#radial-bg");
var nextEle, count = 1;
var myInterval = setInterval(function() {
  if (count == 7) {
    clearInterval(myInterval);
  } else {
    count++;
    currentEle.fadeIn('slow');
    currentEle = currentEle.next();
  }
}, 300);

const text = document.querySelector('.fancy');
if(text !== null) {
  const strText = text.textContent;
  const splitText = strText.split("");
  text.textContent = "";

  for(let i = 0; i < splitText.length; i++){
      let char = (splitText[i] === " ") ? "&nbsp;" : splitText[i];
      text.innerHTML += `<span class="main-tag">${char}</span>`;
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick(){
      const span = text.querySelectorAll('.main-tag')[char];
      span.classList.add('fade');
      char++;
      if(char === splitText.length){
          complete();
          return;
      }
  }

  function complete(){
      clearInterval(timer);
      timer = null;
  }
}


// if(scrollY <= 20){
//   body.style.overflow = 'hidden';
//   setTimeout(() => body.style.overflow = 'auto', 8000);
// }
// else{
//   body.style.overflow = 'auto';
// }

 let flag = 1;
 
 const tag = document.querySelector('.tag-line');
 if(tag !== null) {
    var strTag = tag.textContent;
    var splitTag = strTag.split("");
    tag.textContent = "";
 }


window.addEventListener('scroll', function() {
  let scroll = window.pageYOffset;
  // document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';

  if(scrollY > 300 && flag === 1 && tag !== null) {
    flag++;
  
    for(let i = 0; i < splitTag.length; i++){
      let char = (splitTag[i] === " ") ? "&nbsp;" : splitTag[i];
      tag.innerHTML += `<span class="tag-line-span">${char}</span>`;
    }
      
    let charTag = 0;
    let timerTag = setInterval(onTickTag, 50);
  
    function onTickTag(){
      const span = tag.querySelectorAll('.tag-line-span')[charTag];
      span.classList.add('fade-tag');
      charTag++;
      if(charTag === splitTag.length){
          completeTag();
          return;
      }
    }
  
    function completeTag(){
      clearInterval(timerTag);
      timerTag = null;
    }
  }

  //For navbar color
  if(scroll <= 600){
    if(scroll/500 <= 1){
      navbar.style.backgroundImage = `linear-gradient(to bottom right, rgba(141,188,250,${scroll/500}), rgba(169, 175, 183,${(scroll)/500}), rgba(169,181,195,${(scroll)/500}))`;
    }

    body.style.backgroundImage = `linear-gradient(to bottom right, rgba(141,188,250,1), rgba(169, 175, 183,1), rgba(169,181,195,1))`;
  }
  else {
    navbar.style.backgroundImage = `linear-gradient(to bottom right, rgba(141,188,250,1), rgba(169, 175, 183,1), rgba(169,181,195,1))`;

    if(scroll <=2000){
    body.style.backgroundImage = `linear-gradient(to bottom right, rgba(141,188,250,${1-(scroll)/4000}), rgba(169, 175, 183,${1-(scroll)/4000}), rgba(169,181,195,${1-(scroll)/4000}))`;
    }
    if(scroll > 2000) {
      body.style.backgroundImage = `linear-gradient(to bottom right, rgba(141,188,250,0.7), rgba(169, 175, 183,0.5), rgba(169,181,195,0.5))`;
    }
  }
});
