import React from 'react';
import Headline from './Headline';


function App(){
  const greeting = `Hello Function Component`;
  return <Headline value={greeting} />;
}


export default App;