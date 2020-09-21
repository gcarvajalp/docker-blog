import React, {useState, useEffect} from 'react';

function useOffline(){
  const [isOffline,setIsOffline] = useState(false);

  function onOffline(){
    setIsOffline(true);
  }

  function onOnline(){
    setIsOffline(false);
  }

  useEffect(()=>{
    window.addEventListener('offline',onOffline);
    window.addEventListener('online',onOnline);

    return ()=>{
      window.removeEventListener('offline',onOffline);
      window.removeEventListener('online',onOnline);
    };
  },[]);
}

function App(){
  const isOffline = useOffline();

  if(isOffline){
    return (<div>Sorry, you're offline</div>);
  }

  return <div>You're online!</div>;
}

export default App;