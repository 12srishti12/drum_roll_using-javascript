
var size=document.querySelectorAll(".btn").length

currentlyPlayingSound=null;

for(var i=0;i<size;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function (){
        var addr=this.innerHTML;
        stopCurrentSound();
        currentlyPlayingSound=sound(addr);
        buttonAnimation(addr);
    
    });

}

document.addEventListener("keypress",function(event){
    stopCurrentSound();
    currentlyPlayingSound=sound(event.key);
    buttonAnimation(event.key);
    
});



function sound(key){
    var audio=null;
    switch (key) {
        case "w":
            audio=new Audio("sounds/cymbal-drum.mp3");
            break;

        case "a":
            audio=new Audio("sounds/drum-roll.mp3");
            break;

        case "s":
            audio=new Audio("sounds/tambourine.mp3");
            break;

        case "d":
            audio=new Audio("sounds/snare.mp3"); 
            break;

        case "j":
            audio= new Audio("sounds/guitar.mp3");
            break;
        case "k":
            audio= new Audio("sounds/piano-g-6200.mp3");
            break;

        case "l":
            audio = new Audio("sounds/electrc2.mp3");
            break;
  
    
        default:
            break;
    }

    if(audio) audio.play();
    return audio;
}
    

function stopCurrentSound(){
    if(currentlyPlayingSound){
        currentlyPlayingSound.pause();
        currentlyPlayingSound.currentTime=0;

    }
}

function buttonAnimation(addr){
    var active=document.querySelector("."+addr);
    active.classList.add("pressed");

    //now to remove the animated button by sing time out
    setTimeout(function(){
        active.classList.remove("pressed");
    },100);
}

