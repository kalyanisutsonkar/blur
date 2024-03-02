const image = document.querySelector('img');
const percentage = document.querySelector('h1');
 
let initialvalue = 0;
const loadintialvalue= setInterval(changeblur ,5);

function changeblur(){
    initialvalue++;
    percentage.innerText = initialvalue + '%'
    image.style.filter =`blur(${100 - initialvalue}px)`
    if(initialvalue >99){
        clearInterval(loadintialvalue);
    }
}``
