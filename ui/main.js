console.log('Loaded!');

//move image

/*var img=document.getElementById("logo");
var left=0;
function moveRight(){
    left=left+10;
    img.style.marginLeft= left + "px";
}

img.onclick=function(){
    var interval=setInterval(moveRight,100);
};*/

var button = document.getElementById('counter');
button.onclick = function () {
    
    //Create a request
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            // TAKE SOME ACTION
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //Make a request to the counter endpoint.
    request.open('GET' , 'http://ps9793.imad.hasura-app.io/counter' , true);
    request.send(null);
};