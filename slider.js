var images = [
    "./images/slide.jpg",
    "./images/slide1.jpg",
    "./images/slide2.jpg",
    "./images/slide3.jpg",
];

var i = 0;
var time = 5000;
var rightBtn = document.getElementById('right');
var leftBtn = document.getElementById('left');


function setImage(){
    document.slide.src = images[i];
}

function slideImage(){
    if(i<images.length-1){
        i++;
    } else{
        i=0;
    }
    setImage()
    setTimeout('slideImage()', time)
}

window.onload = slideImage;

rightBtn.addEventListener('click', function(){
    if(i< images.length-1){
        i++;
    } else{
        i=0;
    }
    console.log(i)
    setImage();
})

leftBtn.addEventListener('click', function(){
    if(i>0){
        i--;
    } else{
        i=images.length-1
    }
    setImage();
})