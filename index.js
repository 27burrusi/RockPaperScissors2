var userNum = 0
function Rock(){
      var computerNum = Math.floor((Math.random()*3)+1);
    document.getElementsByClassName("img1")[0].src = "images/rock.jpg";
    userNum == 1
    if(computerNum == 1){
        document.getElementsByClassName("img2")[0].src = "images/rock.jpg";
        document.firstElementChild.querySelector("h1").innerHTML = "🏁 Draw"
    }
    else if(computerNum == 2){
        document.getElementsByClassName("img2")[0].src = "images/paper.jpg";
        document.firstElementChild.querySelector("h1").innerHTML = "You lose 🔴"
    }
    else if(computerNum == 3){
        document.getElementsByClassName("img2")[0].src = "images/scissors.jpg";
        document.firstElementChild.querySelector("h1").innerHTML = "🟢 You win"
    }
    }
    function Paper(){
        var computerNum = Math.floor((Math.random()*3)+1);
    document.getElementsByClassName("img1")[0].src = "images/paper.jpg";
    userNum == 2    
    if(computerNum == 1){
        document.getElementsByClassName("img2")[0].src = "images/rock.jpg";
        document.firstElementChild.querySelector("h1").innerHTML = "🟢 You win"
    }
    else if(computerNum == 2){
        document.getElementsByClassName("img2")[0].src = "images/paper.jpg";
        document.firstElementChild.querySelector("h1").innerHTML = "🏁 Draw"
    }
    else if(computerNum == 3){
        document.getElementsByClassName("img2")[0].src = "images/scissors.jpg";
        document.firstElementChild.querySelector("h1").innerHTML = "You lose 🔴"
    }
    }
    function Scissors(){
        var computerNum = Math.floor((Math.random()*3)+1);
    document.getElementsByClassName("img1")[0].src = "images/scissors.jpg";
    userNum == 3
    if(computerNum == 1){
        document.getElementsByClassName("img2")[0].src = "images/rock.jpg";
        document.firstElementChild.querySelector("h1").innerHTML = "You lose 🔴"
    }
    else if(computerNum == 2){
        document.getElementsByClassName("img2")[0].src = "images/paper.jpg";
        document.firstElementChild.querySelector("h1").innerHTML = "🟢 You win"
    }
    else if(computerNum == 3){
        document.getElementsByClassName("img2")[0].src = "images/scissors.jpg";
        document.firstElementChild.querySelector("h1").innerHTML = "🏁 Draw"
    }
    }    
   

    
    