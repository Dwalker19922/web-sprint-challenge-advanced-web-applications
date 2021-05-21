import React, { useState } from "react";
import Color from "./Color";
import EditMenu from "./EditMenu";
import axiosWithAuth from "../helpers/axiosWithAuth"
import AddMenu from "./AddMenu";
const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors)
  const [editing, setEditing] = useState(false);
  const [add,setAdd]=useState(false)
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const id = colorToEdit.id
  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };
  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth().put(`/colors/${id}`,colorToEdit)
    .then((res)=>{
      let filtered = colors.filter((item)=>{return item.id!==res.data.id})
    updateColors([...colors,filtered])
    setEditing(false)
    })
    .catch((err)=>{
     console.log(err)
    })
  };
  const handleAdd=()=>{
    setAdd(true)
  }
  const deleteColor = color => {
    

    axiosWithAuth().delete(`/colors/${color.id}`)
    .then((res)=>{
      console.log(res)
      let filtered = colors.filter((item)=>{return item.id!==res.data.id})
      updateColors([...filtered])
    })
    .catch((err)=>{
      console.log(err)
    })
    return console.log(color.id)
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      {add===true?<AddMenu update={updateColors} setAdd={setAdd} colors={colors}/>:<button onClick={handleAdd}>add color</button>}
      
      <ul>
        {colors.map(color => <Color key={color.id} editing={editing} color={color} editColor={editColor} deleteColor={deleteColor}/>)}
      </ul>
      
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.