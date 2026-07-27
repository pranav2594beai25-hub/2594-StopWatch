 const display=document.getElementById("display");
    const start=document.getElementById("start");
    const stop=document.getElementById("stop");
    const reset=document.getElementById("reset");
    const lap=document.getElementById("lap");


    let hr=0;
    let mins=0;
    let sec=0;
    let millis=0;

    let timer=null;

   

    start.addEventListener("click",()=>{
        if(timer!=null){
            return;
        }
        timer=setInterval(()=>{
            millis++;

            if(millis==100){
                millis=0;
                sec++;
            }

            if(sec==60){
                sec=0;
                mins++;
            }

            if(mins==60){
                mins=0;
                hr++;
            }

            updateTimer()

        },10);

    })

    function updateTimer(){
        
        let h=hr<10?"0"+hr:hr;
        let m=mins<10?"0"+mins:mins;
        let s=sec<10?"0"+sec:sec;
        let ms=millis<10?"0"+millis:millis;
        display.innerText=`${h}:${m}:${s}:${ms}`;

    }

    stop.addEventListener("click",()=>{
        clearInterval(timer);
        timer=null;
    })

    reset.addEventListener("click",()=>{
        clearInterval(timer);
        timer=null;
        hr=0;
        mins=0;
        sec=0;
        millis=0;

        updateTimer();
        laps.innerText="";
        
    })

    lap.addEventListener("click",()=>{
        const li=document.createElement("li");
        li.innerText=display.innerText;
        laps.appendChild(li);
    })
