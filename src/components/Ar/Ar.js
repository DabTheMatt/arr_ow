import React, { Component } from "react";
import "../../style.css";


class Ar extends Component {
    state = {
        ars: [],
        ar_coord: "",
        item1name: "",
        item2name: "",
        ar_clicked: false,
        enabled: false,
        close: 2,
    }

    handleOver = () => {
        this.setState({
            enabled: true,
        });
    }

    handleClick = (e) => {
        this.props.click();
        
        this.setState({
            ar_coord: this.props.coord,
            item1name: this.props.item1,
            item2name: this.props.item2,
            ar_clicked: !this.state.ar_clicked,
            enabled: true,
        })
    }

    handleClose = () => {
        this.setState({
            ar_clicked: !this.state.ar_clicked,
        })
        this.props.close();
    }

    render () {
        return (
            <div>  
               <div className="ar-box" onMouseOver={this.handleOver} onClick={this.state.enabled ? (e) => this.handleClick(e) : undefined}>
                   {!this.state.ar_clicked ? 
                   ( <div className="ar-coord">{this.props.coord}</div> ) :
                   ( <div>
                       
                        <div className="ar-coord" >{this.props.coord}</div> 
                            <div className="ar-popup">
                                <p>{this.state.ar_coord}</p>
                                <p>{this.props.index}</p>
                                <p>{this.state.item1name}</p>
                                <p>{this.state.item2name}</p>
                                {this.state.ars}
                                <button className="ar-close-btn" onMouseOver={this.handleOver} onClick={this.handleClose}>close</button>
                            </div>

                   </div>)
    }
               </div>
            </div>
        )
    }
}

export default Ar;  