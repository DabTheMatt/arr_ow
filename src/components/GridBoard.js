import '../style.css';
import React, { Component } from "react";
import { stockData } from "../assets/data/data";

import Ar from "../components/Ar"

class GridBoard extends Component {
    state = {
        clicked: false,
        ararray: [],
        dataArray: stockData,
    }
    
    componentDidMount = () => {
        console.log(stockData);
        let array = [];
        for (let i=0; i<=stockData.length; i++) {
            array.push(i);
        }
        this.setState({
            ararray: array, 
        })
    }
    
    render() {
        return (
            <div className="GridBoard">
                <div className="grid-wrapper">
                    
                        {
                        stockData.map(function(name, index) {
                            return (
                                <div>
                                    <Ar 
                                    coord={name.ar_coord}
                                    done={name.done}
                                    item1={name.item1}
                                    item2={name.item2}
                                    item1image={name.item1_image}
                                    item2image={name.item2_image}
                                    />
                                </div>
                                
                            )
                        })}
                </div>
          </div>
        )
    }
}

export default GridBoard;
