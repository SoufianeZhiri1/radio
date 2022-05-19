
class Colors{
    constructor(){
        if(localStorage.getItem("SaveColor")==null){
    
            document.body.style.background = "linear-gradient(45deg, #ff103d 50%, #46474a 50%)";
       
        }
        else{
 }
    this.color1 = document.getElementById("color-1");
    this.color1.addEventListener("click",()=>{
        this.selectColor("color-1");
    });

    this.color2 = document.getElementById("color-2");
    this.color2.addEventListener("click",()=>{
        this.selectColor("color-2");
    });

    this.color3 = document.getElementById("color-3");
    this.color3.addEventListener("click",()=>{
        this.selectColor("color-3");
    });

    this.color4 = document.getElementById("color-4");
    this.color4.addEventListener("click",()=>{
        this.selectColor("color-4");
    });

    this.color5 = document.getElementById("color-5");
    this.color5.addEventListener("click",()=>{
        this.selectColor("color-5");
    });


    this.selectColor(localStorage.getItem("SaveColor"));
    }

    selectColor(color){
       
        this.header = document.getElementById("header");
        if(color == "color-1"){
            document.body.style.background = "linear-gradient(90deg, rgb(75 75 75) 50%, rgb(87, 135, 220) 28%)";
        }
        else if(color == "color-2"){
            document.body.style.background ="linear-gradient(to right, #ff9966, #ff5e62)";
        }

        else if(color == "color-3"){
     
            document.body.style.background ="linear-gradient(185deg,  #ff355e 22%, #343434  19%)";
        }

        else if(color == "color-4"){
            document.body.style.background ="linear-gradient(185deg,  #fff062 22%, #5787dc  19%)";
        }

        else if(color == "color-5"){
            document.body.style.background ="linear-gradient(45deg, rgb(255, 66, 66) 50%, rgb(70 71 74) 50%)";
        }

        localStorage.setItem("SaveColor",color);
    }

}
onload = new Colors();

     



setInterval(()=>{
    var width = screen.width;
    var height = screen.height;
	
 if(width<=1024){
 
     document.getElementById("audio_player").style.width = width+"px";
     document.getElementById("audio_player").style.height = height+"px";
   
    }
    if(screen.width<=320){
     document.getElementById("audio_player").style.height = 100+height+"px";

    }
});
    

class Speed_Volume{
    constructor(){
        this.audio_file = document.getElementById("audio_file");

        var speed = document.getElementById("speed");
        speed.addEventListener("change",()=>{
         this.audio_file.playbackRate = speed.value / 100;
        });
       
    }

}
onload =new Speed_Volume();


class Volume{
    constructor(){

        this.audio_file = document.getElementById("audio_file");

        var volume = document.getElementById("volume");
        this.audio_file.volume= 50/100;
        
        volume.addEventListener("change",()=>{
         this.audio_file.volume = volume.value / 100 ;
        } );
    }

}
onload = new Volume();

if(navigator.connection &&
   navigator.connection.type === 'cellular' &&
   navigator.connection.downlinkMax <= 0.115) {
  // Notify your service to indicate that you might be affected by this restriction.
}

var heightDiv = document.getElementById("content");
        heightDiv.style.height = screen.height-300 + "px";