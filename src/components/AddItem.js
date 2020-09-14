import React from 'react';

function AddItem({name, onChange, onAdd}){
  return(
  <div>
    <input type="button" value={name} onChange={onChange} />
    <button type="button" onClick={onAdd}>Add</button>
  </div>
  );
}

export default AddItem;