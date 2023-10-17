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

