let countEl = document.getElementById("count-el") //connecting with the real time count
let count = 0 //where count starts. From 0
let saveEl = document.getElementById("save-el") //saved sets count


//function to increment the count by one and print it out
function increment() {
    count += 1
    countEl.textContent = count
}


//function to save the count, print it out with a dash followed by each saved number, add all sets counted and get live count to go back to zero each time the save button is pressed
function save() {
    let countSave = count + " - "
    saveEl.textContent += countSave
    countEl.textContent = 0
    count = 0

}


