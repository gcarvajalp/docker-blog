import React, {useState} from 'react';

const initialList = [
  {
    id: 'a',
    firstname: 'Hugo',
    lastname: 'Welinshu',
    year: 1988
  },{
    id: 'b',
    firstname: 'Dave',
    lastname: 'ferguson',
    year: 1990
  }
];

function App(){

  const [list,setList] = useState(initialList);

  function handleDelete(id){
    console.log(`Deleted ${id}`);
    const newList = list.filter(list=> list.id != id);
    console.log(newList);
    setList(newList);
  }

  return(
    <List list={list} handleDelete={()=>handleDelete()} />
  );
}

function List({list, handleDelete}){
  return(
    <ul>
      {
        list.map((item)=>(
          <Item id={item.id} firstname={item.firstname} lastname={item.lastname} year={item.year} handleDelete={()=>handleDelete(item.id)} />
        ))
      }
    </ul>
  );
}

function Item({id, firstname, lastname, year, handleDelete}){
  return(
    <li key={id}>
      <span>{firstname}</span>
      <span>{lastname}</span>
      <span>{year}</span>
      <button type="button" onClick={()=> handleDelete(id)}>Remove</button>
    </li>
  );
}

export default App;