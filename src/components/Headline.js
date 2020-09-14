import React, {useState} from 'react';

function App(){
  const [greeting, setGreeting] = useState('Hello function component');
  
  function handleChange(event){
    setGreeting(event.target.value);
  }

  return(
    <div>
    <Headline headline={greeting} />
    <Input headline={greeting} onChangeInput={handleChange}>Set Greeting:</Input>
    </div>
  );
}

function Headline({headline}){
  return(
  <h1>{headline}</h1>
  );
}

function Input({headline, onChangeInput, children}){
  return(
  <label>
    {children}
    <input type="text" value={headline} onChange={onChangeInput} />
  </label>
  );
}

export default App;