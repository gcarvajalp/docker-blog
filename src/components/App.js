import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

const INITIAL_LIST = [
  {
    id: uuidv4(),
    name : 'first Element'
  }
];

function App(){
  const [name,setName] = useState('');
  const [list, setList] = useState();

  function handleChange(event){
    console.log('handleChange');
    setName(event.target.value);
  }

  function handleAdd(){
    
    let newList;

    if(list){
      newList = list.concat({id: uuidv4(), name: name});
    }else{
      newList = [{id: uuidv4(), name: name}];
    }
    
    setList(newList);
    setName('');
  }

  return(
    <div>
    <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
    <List list={list} />
    </div>
  );
}

const AddItem = ({name, onChange, onAdd})=>{
  return(
    <div>
      <input type="text" value={name} onChange={onChange} />
      <button type="button" onClick={onAdd}>Add</button>
    </div>
  );
};

const List = ({list})=>{
  
  console.log(list);

  if(list){
    return(
    <ul>
      {list.map((element)=>(
        <li key={element.id}>{element.name}</li>
      ))}
    </ul>
    );
  }else{
    return(<ul></ul>);
  }
};


export default App;