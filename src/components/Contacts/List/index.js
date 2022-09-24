import React, { useState } from 'react'
import "./styles.css"

function List({contact}) {
    const [name, setName] = useState("");
    const changeInput = (e) => {
        setName(e.target.value);
    }
    const searchContact = () => {
        const filtered = contact.filter((item) => { 
            if (item.fulname?.toLowerCase().indexOf(name?.toLowerCase()) !== -1){
                return (item);
            }
            else {
                return "";
            }    
        })
        return (filtered);
    }
    const filter = searchContact();

  return (
    <div className='filterr'>
        <div className='filter'>
        <h1>Filter Contact</h1>
        <input name='filter' id='input' value={name} placeholder='Filter contact' onChange={changeInput}/>
        </div>
        <h1>Contact List</h1>
      <ul>
      {
        filter.map((contac, key) => (
            <li id='li' key={key}><span className='left'>{contac.fulname} </span> <span className='right'>{contac.phonenumber}</span></li>)
        )
      }
      </ul>
    </div>
  )
}

export default List
