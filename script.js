const inputBox = document.getElementById("input-box");
const resultText = document.getElementById("result-text");

function checkInput() {
    const userInput = inputBox.value;
    if (userInput === "!//..vAwtULas..") {
        inputBox.classList.remove("error");
        inputBox.style.display = "none";
        document.querySelector("button").style.display = "none";
        resultText.classList.remove("hidden");
    } else {
        inputBox.classList.add("error");
        setTimeout(() => inputBox.classList.remove("error"), 500);
    }
}

inputBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkInput();
    }
});
