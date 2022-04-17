import React, { Component, useState, useEffect } from "react";
import {treasureMapData} from "../../assets/data/data";
import Ar from "../Ar/Ar";
import "../../style.css";

let mapData = [];



class GridWrapper extends Component {
    state = {
        mapDataArray: treasureMapData,
        data: [],
        blocker: "",
    }
    
    componentDidMount = () => {
        

        this.setState({
            data: [],
            blocker: "",
        })
        
        console.log("tsd", this.state.data)
        treasureMapData.map ((el, i) => {
            let arData = {
                id: i,
                coord: el.ar_coord,
                i1: el.item1,
                i2: el.item2,
                active: false,
                blocker: "",
            }
            
            mapData.push(arData);
            console.log("mD", mapData)
        })
            this.setState({
                data: [...this.state.data, mapData],
        })
        
        console.log(this.state.data)
    }

    handleClick = () => {
        console.log("klikam")
        this.setState({
            blocker: "grid-blocker",
        })
    }


    
    handleClose = () => {
        const [fruit, setFruit] = useState('');
        setFruit('Apple');
        useEffect(() => {
            console.log('Fruit', fruit);
          }, [fruit])
        
        this.forceUpdate();
        this.setState({
            blocker: "",
        })
        console.log("tsb", this.state.blocker)
    }

    render () {
        return (
            <div className={`grid-wrapper ${this.state.blocker}`}>
                {this.state.mapDataArray.map((element, index) => {
                    return (
                        <Ar 
                        key={index}
                        click={this.handleClick}
                        close={this.handleClose}
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
}

export default GridWrapper;  