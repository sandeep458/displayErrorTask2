import React,{useState} from 'react';
import './Messagepop.css';
const Messagepop = (props)=>{

const [mouseOn,setMouseOn] = useState(false);
   const changeState =(per) =>{
      setMouseOn(per);
    }
     return (
<div onMouseLeave = {()=>changeState(false)} onMouseEnter ={()=>changeState(true)} className={mouseOn ?"error-message bgcolor":"error-message"}>
                  <input className="checkbox" type = "checkbox" id = {props.id}></input>
                  <label for = {props.id}>
                  <div className="error-details">
                  
                  <div className="logo">
                  <span class="material-icons">cancel_schedule_send</span>
                  </div>
                  <div className="error-request">
                    <p className="message-header">{props.name}</p>
                    <p className="message-id">{props.id}</p>
                  </div>
                  {setMouseOn?<div className="button">
                    <p onClick={() =>alert("value is null value should not be empty")}>open</p>
                  </div>:""}
                </div>
                <div className="content">
                  <p>{props.message}</p>
                  </div>
                  </label>
                  </div>

            
        );
   }     

export default Messagepop;