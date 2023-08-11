let adviceNum = document.querySelector(".advice-num span");
let advice = document.querySelector(".advice");
let adviceButton = document.querySelector(".btn");

async function giveAdvice() {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice`);
        if (!response.ok) {
            throw new Error(`Couldn't get data`);
        }
        const data = await response.json();
        advice.textContent = data.slip.advice;
        adviceNum.textContent = data.slip.id;
    } catch (error) {
        console.log(error);
    }
}

window.onload = giveAdvice;
adviceButton.addEventListener("click", giveAdvice);
