import React, { useState } from 'react';
import './App.css';
import Messagepop from'./Components/Messagepop';
// eslint-disable-next-line
import {v4 as v4} from "uuid";
 const App = () =>{
   // eslint-disable-next-line
   const [comp,setComp] = useState([
  {
      name:"node",
      id:v4(),
      message:"not foundnot foundnot foundnot foundnot found"
   },
   {
    name:"node",
    id:v4(),
    message:"not foundnot foundnot foundnot foundnot found"
 },
 {
  name:"node",
  id:v4(),
  message:"not foundnot foundnot foundnot foundnot found"
},
{
  name:"node",
  id:v4(),
  message:"not foundnot foundnot foundnot foundnot found"
},
{
  name:"node",
  id:v4(),
  message:"not foundnot foundnot foundnot foundnot found"
},
{
  name:"node",
  id:v4(),
  message:"not foundnot foundnot foundnot foundnot found"
},
{
  name:"node",
  id:v4(),
  message:"not foundnot foundnot foundnot foundnot found"
}

]);

    return (
      <div className="container">
        <div className="message">
                <div className="first">
                  <h1>validation results</h1>
                </div>
                <div className="middle">
                  {comp.map((props)=> <Messagepop {...props}/>)}
                  </div>
                  <div className="close">
                     <div className="buttonname">
                      <p >close</p>
                      </div>
                    <div className="submit-button">
                    <div className="submit">
                      <p onClick= { () =>alert("task is completed")}>submit</p>
                    </div>
                    </div>
                  </div>
        </div>
        


          </div>
    );
}
  
// eslint-disable-next-line
export default App;

