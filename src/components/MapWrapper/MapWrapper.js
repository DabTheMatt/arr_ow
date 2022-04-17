import React, { Component } from "react";
import GridWrapper from "../GridFunctionWrapper/GridWrapper";
import "../../style.css";

class MapWrapper extends Component {
    state = {
    }

    render () {
        return (
            <div>
                <div className="map-wrapper">
                    <GridWrapper />
                </div>

            </div>
        )
    }
}

export default MapWrapper;  