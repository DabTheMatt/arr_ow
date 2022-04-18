import React, { Component, useState, useEffect } from "react";
import {treasureMapData} from "../../assets/data/data";
import ArFunction from "../ArFunction/ArFunction";
import "../../style.css";


function GridFunctionWrapper (props) {
    const [blocker, setBlocker] = useState(false);
    const [counter, setCounter] = useState(1);
    const [blockerClass, setBlockerClass] = useState("grid-blocker");

    const [clicked, setClicked] = useState(false);
    const [mapDataArray, setData] = useState(...treasureMapData);
    
   function handleClick () {
        console.log("klikam");
        setBlocker(!blocker);
        
    }

    function handleClicked () {
        console.log("run clicked");
        setClicked(!clicked);
        console.log(clicked);
    } 
    
    
    function handleClose() {
        console.log("handleClose");
        setBlocker("aaaaa");
        
        console.log(blocker);
        
        
    }
    
    useEffect(()=> {
            setCounter(+1);
            console.log("ue")
        })

    return (
        <div>
            {blocker ? 
            (
            <div className={`grid-wrapper ${blockerClass}`}>
                {treasureMapData.map((el, i) => {
                    return (
                        <ArFunction 
                        key={i}
                        coord={el.ar_coord}
                        item1={el.item1}
                        item2={el.item2}
                        click={handleClick}
                        close={handleClose}
                        item1note={el.item1_note}
                        item2note={el.item2_note}
                        item1image={el.item1_image}
                        item2image={el.item2_image}
                        />

                    )
                })}
            </div>) : (
            <div className="grid-wrapper">
            {treasureMapData.map((el, i) => {
                return (
                    <ArFunction 
                    key={i}
                    coord={el.ar_coord}
                    item1={el.item1}
                    item2={el.item2}
                    click={handleClick}
                    close={handleClose}
                    />

                )
            })}
        </div>) }
            
        </div>
    )
} 

export default GridFunctionWrapper;  