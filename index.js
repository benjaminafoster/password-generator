
//define text output elements
let opt1El = document.getElementById("opt1")
opt1El.textContent = "First great option!"
let opt2El = document.getElementById("opt2")
opt2El.textContent = "Second great option!"
let checkAllEl = document.getElementById("checkAll")
let warningEl = document.getElementById("warning")


//define arrays to draw from

const lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const specialChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?"]

const lowUp = lowerCaseChar.concat(upperCaseChar)

const lowNum = lowerCaseChar.concat(numberChar)

const lowSpec = lowerCaseChar.concat(specialChar)

const upNum = upperCaseChar.concat(numberChar)

const upSpec = upperCaseChar.concat(specialChar)

const numSpec = numberChar.concat(specialChar)

const lowUpNum = lowUp.concat(numberChar)

const lowNumSpec = lowNum.concat(specialChar)

const lowUpSpec = lowUp.concat(specialChar)

const upNumSpec = upNum.concat(specialChar)

const lowUpNumSpec = lowUp.concat(numSpec)

//grab the checkbox input
let lowerCheck = document.getElementById("lowerCase")
let upperCheck = document.getElementById("upperCase")
let numberCheck = document.getElementById("numbers")
let specialCheck = document.getElementById("special")

checkAllEl.addEventListener("click", function() {
    warningEl.innerText = ""
    lowerCheck.checked = true
    upperCheck.checked = true
    numberCheck.checked = true
    specialCheck.checked = true
})

//decalre genPwds function to generate passwords of length 15
function getPwd() {
    let password = ""
    if (lowerCheck.checked && upperCheck.checked === false && numberCheck.checked === false && specialCheck.checked === false) {
        for (let i = 1; i <= 15; i++){
            let char = lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)]
            password += char
            warningEl.innerText = "Using a bit more variety is recommended"
        }
    }else if (lowerCheck.checked === false && upperCheck.checked && numberCheck.checked === false && specialCheck.checked === false) {
        for (let i = 1; i <= 15; i++){
            let char = upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)]
            password += char
            warningEl.innerText = "Using a bit more variety is typically recommended"
        }
    }else if (lowerCheck.checked === false && upperCheck.checked ===false && numberCheck.checked && specialCheck.checked === false) {
        for (let i = 1; i <= 15; i++){
            let char = numberChar[Math.floor(Math.random() * numberChar.length)]
            password += char
            warningEl.innerText = "Consider using more than just numbers 🤔"
        }
    }else if (lowerCheck.checked === false && upperCheck.checked ===false && numberCheck.checked === false && specialCheck.checked) {
        for (let i = 1; i <= 15; i++){
            let char = specialChar[Math.floor(Math.random() * specialChar.length)]
            password += char
            warningEl.innerText = "How do you even read that?.':;,(%^*#$%@"
        }
    }else if (lowerCheck.checked && upperCheck.checked && numberCheck.checked === false && specialCheck.checked === false) {
        for (let i = 1; i <= 15; i++){
            let char = lowUp[Math.floor(Math.random() * lowUp.length)]
            password += char
            warningEl.innerText = "You're getting there, maybe a little more variety?"
        }
    }else if (lowerCheck.checked && upperCheck.checked === false && numberCheck.checked && specialCheck.checked === false) {
        for (let i = 1; i <= 15; i++){
            let char = lowNum[Math.floor(Math.random() * lowNum.length)]
            password += char
            warningEl.innerText = "You're getting there, maybe a little more variety?"
        }
    }else if (lowerCheck.checked && upperCheck.checked === false && numberCheck.checked === false && specialCheck.checked) {
        for (let i = 1; i <= 15; i++){
            let char = lowSpec[Math.floor(Math.random() * lowSpec.length)]
            password += char
            warningEl.innerText = "You're getting there, maybe a little more variety?"
        }
    }else if (lowerCheck.checked === false && upperCheck.checked && numberCheck.checked && specialCheck.checked === false) {
        for (let i = 1; i <= 15; i++){
            let char = upNum[Math.floor(Math.random() * upNum.length)]
            password += char
            warningEl.innerText = "You're getting there, maybe a little more variety?"
        }
    }else if (lowerCheck.checked === false && upperCheck.checked && numberCheck.checked === false && specialCheck.checked) {
        for (let i = 1; i <= 15; i++){
            let char = upSpec[Math.floor(Math.random() * upSpec.length)]
            password += char
            warningEl.innerText = "You're getting there, maybe a little more variety?"
        }
    }else if (lowerCheck.checked === false && upperCheck.checked === false && numberCheck.checked && specialCheck.checked) {
        for (let i = 1; i <= 15; i++){
            let char = numSpec[Math.floor(Math.random() * numSpec.length)]
            password += char
            warningEl.innerText = "You're getting there, maybe a little more variety?"
        }
    }else if (lowerCheck.checked && upperCheck.checked && numberCheck.checked && specialCheck.checked === false) {
        for (let i = 1; i <= 15; i++){
            let char = lowUpNum[Math.floor(Math.random() * lowUpNum.length)]
            password += char
            warningEl.innerText = "This is a strong password! 💪🏼"
        }
    }else if (lowerCheck.checked && upperCheck.checked === false && numberCheck.checked && specialCheck.checked) {
        for (let i = 1; i <= 15; i++){
            let char = lowNumSpec[Math.floor(Math.random() * lowNumSpec.length)]
            password += char
            warningEl.innerText = "This is a strong password! 🏋🏾‍♂️"
        }
    }else if (lowerCheck.checked && upperCheck.checked && numberCheck.checked === false && specialCheck.checked) {
        for (let i = 1; i <= 15; i++){
            let char = lowUpSpec[Math.floor(Math.random() * lowUpSpec.length)]
            password += char
            warningEl.innerText = "This is a strong password! 💪🏼"
        }
    }else if (lowerCheck.checked === false && upperCheck.checked && numberCheck.checked && specialCheck.checked) {
        for (let i = 1; i <= 15; i++){
            let char = upNumSpec[Math.floor(Math.random() * upNumSpec.length)]
            password += char
            warningEl.innerText = "This is a strong password! 🏋🏾‍♂️"
        }
    }
    else if (lowerCheck.checked && upperCheck.checked && numberCheck.checked && specialCheck.checked) {
        for (let i = 1; i <= 15; i++){
            let char = lowUpNumSpec[Math.floor(Math.random() * lowUpNumSpec.length)]
            password += char
            warningEl.innerText = "🎉 🎉 🎉 These are two amazing choices! 🎉 🎉 🎉"
        }
    }else {
        warningEl.innerText = "Please check one of the boxes to proceed!"
    }
    return password
}

//call genPwds() for both opt placeholders
function genPwds() {
    opt1El.textContent = getPwd()
    opt2El.textContent = getPwd()
}