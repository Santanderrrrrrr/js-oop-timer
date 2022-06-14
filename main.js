// console.log('hi there')

// const borderLine = document.createElement('div')
// borderLine.style.borderRadius = "50%";
// borderLine.style.border = "black solid 3px";
// borderLine.style.height = "200px"
// borderLine.style.width = "200px"


// document.body.appendChild(borderLine)

// let time = document.createElement('p')
// borderLine.appendChild(time)
// time.style.width = '100%'
// time.style.height = '100%'
// time.style.marginLeft = '50%'
// time.style.marginRight = '50%'
// time.style.marginTop = '30%'
// time.style.fontFamily = 'Helvetica'





// let timing = 0;
// time.textContent = timing

// function timingIt(){
//     setInterval(function(){
//         timing--;
//         time.textContent=timing;
//     }, 1000)
// }

// timingIt()

const inputSpace = document.getElementById('duration')
const startButton = document.getElementById('start')
const pauseButton = document.getElementById('pause')

const circle = document.querySelector('circle')



const perimeter = circle.getAttribute('r')*2*Math.PI;
circle.setAttribute('stroke-dasharray', perimeter)

let duration;

const theTimer = new Timer(inputSpace, startButton, pauseButton,{ 
    onStart(totalDuration){
        duration = totalDuration
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining/ duration - perimeter )
    },
    onComplete(){
        console.log('Timer is done')

    }
})