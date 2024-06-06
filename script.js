let Countel = document.getElementById("count-el")
let Saveel = document.getElementById("save-el")
let count = 0

function increment(){
    count = count + 1
    Countel.textContent = count
}

function save(){
    let countStr = count + "-" 
    Saveel.textContent += countStr
}