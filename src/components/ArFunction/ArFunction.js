import React, { Component, useState, useEffect } from "react";
import "../../style.css";
import "animate.css";

function ArFunction (props) {
    const [ar_coord, setCoord] = useState("");
    const [item1, setItem1] = useState("");
    const [item2, setItem2] = useState("");
    const [open, setOpen] = useState(false);
    const [item1note, setItem1note] = useState("");
    const [popupClass, setPopupClass] = useState("ar-popup");
    const [item1image, setitem1image] = useState("");
    const [item2image, setitem2image] = useState("");





    useEffect(() => {
        setCoord(props.coord);
        setItem1(props.item1)
        setItem2(props.item2)
        setItem1note(props.item1note)
        setitem1image(props.item1image)
        setitem2image(props.item2image)
    })

    function handleArClick () {
        props.click();
        setOpen(!open);
        console.log("open/close", open)
    }

    function handleArClose () {
        setOpen(false);
        props.close();
    }

    return (
        <div>  
           <div className="ar-box" onClick={handleArClick}>
               {!open ? 
               ( <div className="ar-coord">{ar_coord}</div> ) :
               ( <div>
                   
                    <div className="ar-coord" >{ar_coord}</div> 
                        <div className="ar-popup">
                            <p className="ar-title">Ar: {ar_coord}</p>
                            <hr className="ar-line"/>
                            <p className="ar-subtitle">Founded trasures:</p>
                            <p className="ar-item-name">{item1}</p>
                            <img className="ar-item-image" src={item1image} />
                            <p>{item1note}</p>
                            <p className="ar-item-name">{item2}</p>
                            <img className="ar-item-image" src={item2image} />
                            <p>{item1note}</p>
                            <button className="ar-close-btn" onClick={handleArClose}>close</button>
                        </div>

               </div>)
}
           </div>
        </div>
    )
}

export default ArFunction;