
class Timer{
    constructor(durationInput, startButton, pauseButton, callBacks ){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if(callBacks){
            this.onStart = callBacks.onStart;
            this.onTick = callBacks.onTick;
            this.onComplete = callBacks.onComplete;
        }
        
        this.startButton.addEventListener( 'click', this.start.bind(this) ); 
        this.pauseButton.addEventListener( 'click', this.pause.bind(this) ); 
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value)
    }

    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2)
    }

    start(){
        if(this.onStart){
            this.onStart(this.timeRemaining)
        }
        // this.tick()
        this.tickInterval  = setInterval(this.tick.bind(this), 50)
    }   

    pause(){
        clearInterval(this.tickInterval)
    }

    onDurationChange(){

    }

    tick(){
        if(this.timeRemaining<=0){
            this.pause()
            if(this.onComplete){
                this.onComplete()
            }
        }else{
            // console.log('tick')
            this.timeRemaining = this.timeRemaining-0.05
            if(this.onTick){
                this.onTick(this.timeRemaining)
            }
        }
    }

}