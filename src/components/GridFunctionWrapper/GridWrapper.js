import React, { Component, useState, useEffect } from "react";
import {treasureMapData} from "../../assets/data/data";
import Ar from "../Ar/Ar";
import "../../style.css";


function GridWrapper (props) {
    const [blocker, setBlocker] = useState("");
    const [mapDataArray, setData] = useState(treasureMapData);
    
   function handleClick () {
        console.log("klikam")

        this.setBlocker({
            blocker: "grid-blocker",
        })
    }

    function handleClose() {
       
        
        
        this.setBlocker({
            blocker: "",
        })
        console.log("tsb", this.state.blocker)
    }
    return (
        <div className={`grid-wrapper ${blocker}`}>
            {mapDataArray.map((element, index) => {
                return (
                    <Ar 
                    key={index}
                    click={handleClick}
                    close={handleClose}
                    coord={element.ar_coord}
                    item1={element.item1}
                    item2={element.item2}
                    clicked={element.clicked}
                    />
                )
                })
            }
        </div>
    )
} 

export default GridWrapper;  