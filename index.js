
    var randNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage1 = "dice" + randNumber1 + ".png"; //dice1.png = dice6.png
    
    var randomImageSource1 = "images/" + randomDiceImage1; //images/dice1.png....dice6
    
    var imgDice1 = document.querySelectorAll("img")[0];
    
    imgDice1.setAttribute("src", randomImageSource1);
    
    //second ice
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    
    var imgDice2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
    
  if(randNumber1 > randomNumber2)
  {
    document.querySelector("h1").innerHTML = "🚩Player 1 Win"
  }
  else if(randNumber1 < randomNumber2)
  {
    document.querySelector("h1").innerHTML = "Player 2 Win🚩"
  }
  else{
    document.querySelector("h1").innerHTML = "🚩Draw game"
  }
   



  





