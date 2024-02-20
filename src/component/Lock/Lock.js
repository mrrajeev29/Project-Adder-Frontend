import React from "react";
import { Link } from "react-router-dom";
import "./lock.css"

const Lock =()=>
{

    return(
        <>
        <div className="pss">
            <h1 className="hed">Welcome</h1>
            <h1>Project Adder to Portfolio.</h1>
            <p>Enter security code to proceed</p>
            <input type="text" className="pass" id="val" placeholder="Enter the security code" required/>
            <p id="res"></p>
            <div>
            <button className="btnl" onClick={check} >Enter</button>
            </div>
        </div>
        </>
    )
}
export default Lock;

function check(){
    var p=document.getElementById("val").value;
    if(p==="RR2992000")
    {
        //alert(p);
        window.open("sub","_self")
    }
    else
    {
        document.getElementById("res").innerHTML="Incorrect Password.";
    }
    //alert(p);
}