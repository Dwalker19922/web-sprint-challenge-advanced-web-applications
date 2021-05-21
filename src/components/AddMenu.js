import React,{useState} from 'react';
import axiosWithAuth from "../helpers/axiosWithAuth"
const AddMenu = ({colors,update,setAdd}) => {
const initialState={
    code: {hex: ""},
color: "",
id: colors.length
}
const handleSubmit=(e)=>{
e.preventDefault();
axiosWithAuth().post("/colors",newColor)
update([...colors,newColor]);
setAdd(false)

}
const [newColor,setNewColor]=useState(initialState)
    return(
    <form data-testid="AddForm" onSubmit={handleSubmit}>
        <legend>Add Color</legend>
        <div>
          <label htmlFor="colorName">color name: </label>
          <input
            name="colorName"
            id="colorName"
            onChange={(e)=>{setNewColor({
                ...newColor,
                color:e.target.value
            })}
            }
            value={newColor.color}
          />
        </div>  
      
        <div>
          <label htmlFor="hex">hex code: </label>
          <input
            name="hex"
            id="hex"
            onChange={(e)=>{setNewColor({
                ...newColor,
                code:{hex:e.target.value}
            })}}
           
            
            value={newColor.code.hex}
          />
        </div>
      
        <div className="button-row">
          <button type="submit">save</button>
        </div>
    </form>);
}

export default AddMenu;