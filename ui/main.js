console.log('Loaded!');

//move image

var img=document.getElementById("logo");
var left=0;
function moveRight(){
    left=left+10;
    img.style.marginLeft= left + "px";
}

img.onclick=function(){
    var interval=setInterval(moveRight,100);
};