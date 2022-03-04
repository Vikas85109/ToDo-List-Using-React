import React, { useState } from "react";
import DigitalTime from "./DigitalTime";
import ToDoList from "./ToDoList";

const App = () => {

const[addvalue,setAddvalue]=useState("")
const [Items, setItems]=useState([])


const listOfitems=()=>{
    setItems((oldItems)=>{
      return[...oldItems,addvalue];
    });
    setAddvalue("")
}

  const AddItem=(event)=>{
    setAddvalue(event.target.value)
  }

  const deleteItem=(id)=>{
    console.log("clicked");

setItems((oldItems)=>{
  return oldItems.filter((arrElem,index)=>{
    return index !==id;
  })
})

}

  

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <DigitalTime/>
          <h1>ToDo List </h1>
          <br />
          <input type="text" name="" onChange={AddItem} value={addvalue} id="" placeholder="Add a Items" />
          <button onClick={listOfitems}>+</button>

          <ol>
           

            {
              Items.map((itemval,index)=>{
             return  <ToDoList 
             key={index}
             id={index}
             onSelect={deleteItem}
             text={itemval}/>
              })
            }
          </ol>
          </div>
      </div>
    </>
  );
};

export default App;
