const accordion = document.getElementById("accordion")

const buttons = document.querySelectorAll(".accordion__button")

buttons.forEach(button =>  {
    button.addEventListener("click", () => {
        if(button.classList.contains('accordion__button--active')){
            closeOtherAccordions()
        } else {
            closeOtherAccordions()
            button.classList.toggle('accordion__button--active')
        }
    } )
})


function closeOtherAccordions(){
    for (let button of buttons){
        button.classList.remove('accordion__button--active')
    }
}