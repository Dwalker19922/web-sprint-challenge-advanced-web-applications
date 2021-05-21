import React, { useEffect, useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const{appState,setAppState}=props
  console.log(props)
  const [colorList, setColorList] = useState([]);
 
  useEffect(() => {
    axiosWithAuth().get("/colors")
    .then((response) =>{
      setColorList(response.data)
    })
    },[appState])
  

  return (
    <div className="container">
      <ColorList colors={colorList} updateColors={setAppState} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
