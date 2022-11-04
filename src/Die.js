import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "tomato"
    }
  if(props.value===2){
      return(
            <div 
            className="dice second-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
      )
  }
        
       else if(props.value===3){
      return(
            <div 
            className="dice third-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <span className="dot"> </span>
            <span className="dot"> </span>
            <span className="dot"> </span>
        </div>
      )
        }
     else   if(props.value===4){
      return(
            <div 
            className="fourth-face dice" 
            style={styles}
            onClick={props.holdDice}
        >
        <div className="column">
            <span className="dot"> </span>
            <span className="dot"> </span>
            </div>
            <div className="column">
            <span className="dot"> </span>
            <span className="dot"> </span>
            </div>
        </div>
      )
        }
    else if(props.value===5){
      return(
            <div 
            className="fifth-face dice" 
            style={styles}
            onClick={props.holdDice}
        >
               <div className="column">
            <span className="dot"> </span>
            <span className="dot"> </span>
            </div>
            <div className="column">
            <span className="dot"> </span>
            </div>
            <div className="column">
            <span className="dot"> </span>
            <span className="dot"> </span>
          
            </div>
        </div>
      )
        }
   else     if(props.value===6){
      return(
            <div 
            className="fourth-face dice" 
            style={styles}
            onClick={props.holdDice}
        >
           <div className="column">
            <span className="dot"> </span>
            <span className="dot"> </span>
            <span className="dot"> </span>
            </div>
            <div className="column">
            <span className="dot"> </span>
            <span className="dot"> </span>
            <span className="dot"> </span>
            </div>
        </div>
      )
        }
      
  
    return (
        <div 
            className="dice first-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <span className="dot"> </span>
        </div>
    )
}