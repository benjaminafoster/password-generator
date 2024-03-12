
//define text output elements
let opt1El = document.getElementById("opt1")
opt1El.textContent = "Option 1"
let opt2El = document.getElementById("opt2")
opt2El.textContent = "Option 2"


//define arrays to draw from

/* const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", 
"5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]; */

const lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const specialChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?"]

//grab the checkbox input
let lowerCheck = document.getElementById("lowerCase")
let upperCheck = document.getElementById("upperCase")
let numberCheck = document.getElementById("numbers")
let specialCheck = document.getElementById("special")


//decalre genPwds function to generate passwords of length 15
function getPwd() {
    let password = ""
    if (lowerCheck.checked) {
        for (let i = 1; i <= 15; i++){
            let char = lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)]
            password += char
        }
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