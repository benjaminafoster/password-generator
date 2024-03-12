
//define text output elements
let opt1El = document.getElementById("opt1")
opt1El.textContent = "placeholder"
let opt2El = document.getElementById("opt2")
opt2El.textContent = "placeholder2"

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", 
"5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//decalre genPwds function to generate passwords of length 15
function getPwd() {
    let password = ""
    for (let i = 1; i <= 15; i++){
        let char = characters[Math.floor(Math.random() * characters.length)]
        password += char
    }
    return password
}

//call genPwds() for both opt placeholders
function genPwds() {
    opt1El.textContent = getPwd()
    opt2El.textContent = getPwd()
}

//create function to copy to clipboard
/* function copyText1() {
    let text1 = document.getElementById("opt1")
    text1.select()
    navigator.clipboard.writeText(text1.value)
    alert("Copied the text: " + text1.value)
}

function copyText2() {
    let text2 = document.getElementById("opt2")
    text2.select()
    navigator.clipboard.writeText(text2.value)
    alert("Copied the text: " + text2.value)
} */