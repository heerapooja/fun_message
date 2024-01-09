const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", ()=> {
    question.innerHTML = "Great, see you at the office!";
    gif.src="giphy.gif"
});

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const max_X = window.innerWidth - noBtnRect.width;
    const max_Y = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * max_X);
    const randomY = Math.floor(Math.random()*max_Y);
    
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});