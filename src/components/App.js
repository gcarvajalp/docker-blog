import React, {useState, useEffect, useReducer} from 'react';
import {v4 as uuidv4} from 'uuid';

const INITIAL_LIST = [
  {
    id: uuidv4(),
    name : 'first Element'
  }
];



const listReducer = (state, action)=>{
  switch(action.type){
    case 'ADD_ITEM':
      return state.concat({name: action.name, id: action.id});
    default:
      throw new Error();
  }
};

function App(){
  const [name,setName] = useState('');
  //const [list, setList] = useState();
  
  const [list,dispatchList] = useReducer(listReducer,INITIAL_LIST);


  function handleChange(event){
    console.log('handleChange');
    setName(event.target.value);
  }

  function handleAdd(){
    dispatchList({type: 'ADD_ITEM', name: name, id : uuidv4()});
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