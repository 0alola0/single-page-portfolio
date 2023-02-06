const leftIndicator = document.querySelector(".move-left")
const rightIndicator = document.querySelector(".move-right")
const slider = document.querySelector(".images-container")
var sliderIndex = parseInt(
  getComputedStyle(slider).getPropertyValue("--slider-index")
)
console.log(sliderIndex)
leftIndicator.addEventListener("click", () => moveLeft())
rightIndicator.addEventListener("click", () => moveRight())

function moveLeft(){
    if(sliderIndex>(-0.4)){
        slider.style.setProperty("--slider-index", sliderIndex - 0.2)
        sliderIndex = sliderIndex - 0.2
    }
    else{
        // sliderIndex = sliderIndex + 1
    }

}
function moveRight(){
    if(sliderIndex<(0.4)){
        slider.style.setProperty("--slider-index", sliderIndex + 0.2)
        sliderIndex = sliderIndex + 0.2
    }
    else{
        // sliderIndex = sliderIndex - 1
    }
}