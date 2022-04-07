import React, { Component } from "react";
import "../style.css";


class Ar extends Component {
    state = {
        clicked: false,
        visible: false,
        done: this.props.done,
        item1: this.props.item1,
        item2: this.props.item2,
        item1image: this.props.item1image,
        item2image: this.props.item2image
    }

    componentDidMount = () => {
        console.log("in ar", this.props);
        
    }

    handleClick = () => {
        console.log("img", this.state.item1image);
        console.log("item1", this.state.item1)
        this.setState({
            clicked: !this.state.clicked,
        })
    }

    handleClose = () => {
        this.setState({
            clicked: !this.state.clicked,
        })
    }

    handleOver = () => {
        
        this.setState({
            visible: true,
        })
    }

    handleOut = () => {
        console.log("over");
        this.setState({
            visible: false,
        })
    }

    render() {
        return (
            <div className="noDiv" onClick={this.handleClick} >
            {this.state.clicked 
                
                ? (<>
                    <div className="default-ar"><div className="ar-coordinates">{this.props.coord}</div></div>
                 <div className="default-ar-flow" onClick={this.handleClose}>
                     <div className="trasures-wrapper">
                         <p>My treasures</p>
                         <ul>
                             <li>{this.state.item1}</li>
                             <img src={`${this.state.item1image}`} alt={`${this.state.item1}`} height="100" width="auto"/>

                             <li>{this.state.item2}</li>
                             <img src={`${this.state.item2image}`} alt={`${this.state.item2}`} height="100" width="auto"/>
                         </ul>

                     </div>
                     
                     
                     
                 </div>
                 </>
                   
                    
                    )
                : (<div className="default-ar"><div className="ar-coordinates">{this.props.coord}</div></div>)
            }
            </div>
        )
    }
}

export default Ar;