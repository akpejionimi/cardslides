import React, { Component } from 'react';
import data from "./data"
import Testdesc from './Testdesc/Testdesc';
import Testimage from "./Testimage/Testimage.jsx"
import './Testimonial.css';


class Testimonial extends Component {
    state = {
        detail: data,
        currentTest: data[0],
        curIndex: 0
    }


    prev = () => {
        let curIndex = this.state.detail.indexOf(this.state.currentTest);
        // console.log("click");
        this.setState(prevState => {
            return {
                currentTest: this.state.detail[curIndex - 1]
            };
        })

    }

    next = () => {
        let curIndex = this.state.detail.indexOf(this.state.currentTest);
        // console.log("click");
        this.setState(prevState => {
            return {
                currentTest: this.state.detail[curIndex + 1]
            };
        })

    }

    render() {
        return (
            <div className="Testimonial">
                <div className="testDesc">
                    <Testdesc
                        desc={this.state.currentTest}
                        next={this.next} prev={this.prev}
                        curI={this.state.curIndex}
                        det={this.state.detail}
                         
                    />
                </div>
                <div className="photo">
                    <Testimage gal={this.state.currentTest} />
                </div>
            </div>

        );
    }
}

export default Testimonial;