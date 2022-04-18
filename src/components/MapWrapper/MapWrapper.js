import React, { Component } from "react";
import GridFunctionWrapper from "../GridFunctionWrapper/GridFunctionWrapper";
import "../../style.css";
import arrows from "../../assets/images/arrows.webp"

class MapWrapper extends Component {
    state = {
    }

    render () {
        return (
            <div>
                <div className="main-title-wrapper">
                    <p className="main-subtitle">Ar_row: archaeologist assistant</p>
                    <p className="main-subtitle main-green">Map nr: 001 Mysterius sword station</p>
                </div>
                <div className="map-wrapper">
                    <GridFunctionWrapper />
                </div>

            </div>
        )
    }
}

export default MapWrapper;  