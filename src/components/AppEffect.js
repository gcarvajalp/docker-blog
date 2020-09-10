import React, {useState, useEffect} from 'react';

function AppEffect(){
    const [isOn, setIsOn] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(()=>{

      let interval;

      if(isOn){
        interval = setInterval(()=> setTime(time +1),1000);
      }
      
      return ()=> clearInterval(interval);
    },[isOn]);

    return(
        <div>
            Timer: {time}
            {!isOn && <button type="button" onClick={() => setIsOn(true)}>Start</button>}
            {isOn && <button type="button" onClick={()=> setIsOn(false)}>Stop</button>}
        </div>
    );
}

export default AppEffect;