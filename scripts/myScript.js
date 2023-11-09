function myfun(){
    const contshow=document.getElementById("logincontainer");
    contshow.style.display="block";
    console.log("block");
}
const contshow=document.getElementById("logincontainer");
// function closelogin(){
//     const contshow=document.getElementById("logincontainer");
//     contshow.style.display="none";
// }
function showSongs(){
    const show = document.getElementById("csNextContent2");
    show.style.display="block";
    show.scrollIntoView({
        behavior:"smooth"
    });
    console.log("block");
}
 


function PLSongs(){
    const show = document.getElementById("plPlayer");
    show.style.display="block";
    show.scrollIntoView({
        behavior:"smooth"
    });
    console.log("block");
}

function selected(event){
    let buttonId = event.target.id;
    console.log("buttonId="+buttonId);
    console.log("class name="+event.target.className);
    let ele = document.getElementById(buttonId);
    console.log("button status"+ele.value);
    if(ele.className=="tags"){
        ele.className = "selected";
    }
    else{
        ele.className = "tags";
    }
    
}

var isplay = false;
var song = new Audio();
song.src = "../media/Attack on Titan - Guren no Yumiya 【English Dub Cover】Opening Song by NateWantsToBattle.mp3";
function playSong(){
    let ele = document.getElementById("playbtn");
   
    
    console.log("song");
    
    if(!song.paused){
        song.pause();
        ele.children[0].src = "../images/icons/play.png";
    }
    else{
        song.play();
        ele.children[0].src = "../images/icons/pause.png";
    }
}
