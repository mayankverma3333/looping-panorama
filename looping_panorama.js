var canvas=document.querySelector("canvas");
canvas.width=600;
canvas.height=198;
var ctx=canvas.getContext("2d");
var img=new Image();
img.src="panorama.jpg";
var i=0,direction=1,speed=0.5;
img.addEventListener("load",effect);
function effect(){
    ctx.clearRect(0,0,600,198); 
    ctx.drawImage(img,i,0,600,198,0,0,600,198);
    i=i+speed;
    requestAnimationFrame(effect);
    if(i>1024-600){
        ctx.drawImage(img,0,0,600,198,1024-i,0,600,198);
    }
    if(i>=1024){
        i=i-1024;
    }
    
    
}

