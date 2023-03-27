var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);
var randomImage1 = "images/dice"+randomNumber1+".png";
var randomImage2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",randomImage1);
document.querySelector(".img2").setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins !!";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="Player 2 Wins !!";
}
else{
    document.querySelector("h1").textContent="Its a Draw !!";
}