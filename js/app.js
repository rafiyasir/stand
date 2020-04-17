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
}, 1000);

const text = document.querySelector('.fancy');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i = 0; i < splitText.length; i++){
    let char = (splitText[i] === " ") ? "&nbsp;" : splitText[i];
    text.innerHTML += `<span>${char}</span>`;
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
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