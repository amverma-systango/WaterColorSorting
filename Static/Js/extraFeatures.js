

let themeState = 0;

function themeToggle(){
    if(themeState === 0)
    { 
        document.getElementById("mainPlayArea").style.backgroundColor= "rgba(128,128,199,1.0)";
        document.body.style.backgroundImage = "url('../Static/Images/BackGrounds/themeBackground.png')";
        document.getElementById("topBarLogoIconMode").src = "../Static/Images/Icons/sun.png";
        themeState=1;
    }
    else{
        document.getElementById("mainPlayArea").style.backgroundColor= "rgba(255,255,255,1.0)";
        document.body.style.backgroundImage = "url('../Static/Images/BackGrounds/BG1.png')";
        document.getElementById("topBarLogoIconMode").src = "../Static/Images/Icons/moon.png";
        themeState=0;
    }

}

// ------------------------------------------------------------------------------------------
//
// ------------------------------------------------------------------------------------------

let musicState = 0;
let myAudio = new Audio('../Static/Music/music1.mp3');

function musicToggle(){
    //play audio with out html audio tag

    if(musicState === 0){ 
        myAudio.play();
        musicState = 1;
        document.getElementById("topBarLogoIconMusic").src = "../Static/Images/Icons/music.png";
    }
    else{
        myAudio.pause();
        musicState = 0;
        document.getElementById("topBarLogoIconMusic").src = "../Static/Images/Icons/no_music.png";
    }
    
}

