function preload(){
    
}
 function setup() {
 f=createCanvas(400, 400);
     f.position(200,280);
     g=createCapture(VIDEO);
     g.hide();
     tintcolor="";
}
function draw() {
    image(g,0,0,400,400);
    tint(tintcolor);
}
function e(){
    tintcolor=document.getElementById("a").value;
    
}
function take_snapshot(){
    save('studentpic.png');
}