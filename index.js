console.log("hello from index.js")

document.addEventListener('DOMContentLoaded', fancy_div_button)    

function fancy_div_button () {
    let changeColorButton = document.querySelector('#changeColor')
    let colorDiv = document.querySelector('#colorDiv')
    var currentColor = 'white'
 
    changeColorButton.addEventListener('click', function (){
        if ( currentColor == 'green'){
            colorDiv.style.background = 'white'
            currentColor = 'white'
        }          
        else if (currentColor == 'white'){
            colorDiv.style.background = 'green'
            currentColor = 'green'       }
    })
    colorDiv.addEventListener('mouseover', function(){
        colorDiv.style.background = 'pink'     
    })
    colorDiv.addEventListener('mouseout', function(){
        colorDiv.style.background = currentColor     
    })
}

