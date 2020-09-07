import React, {useState} from 'react';

function ManyStates(){
 const [age, setAge] = useState(42);
 const [fruit, setFruit] = useState('banana');
 const [todos, setTodos] = useState({text: 'Learn Hooks'});
}

export default ManyStates;