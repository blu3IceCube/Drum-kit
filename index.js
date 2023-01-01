let allButton = document.querySelectorAll(".drum")

for(i = 0; i < allButton.length; i++) {
    allButton[i].addEventListener("click", function() {

        handleSound(this.textContent)
        handleAnimation(this.textContent)

    })
}

document.addEventListener("keydown", (e) => {

    handleSound(e.key)
    handleAnimation(e.key)

})

function handleSound(btn) {
    switch (btn) {

        case "w":
            let crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;
        case "a":
            let kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;

        default:
            alert("This is not a valid key. Please press a valid key.")
            break;

    }
}

function handleAnimation(btn) {

    document.querySelector(`.${btn}`).classList.add("pressed")
    setTimeout(() => {
        document.querySelector(`.${btn}`).classList.remove("pressed")
    }, 100);

}