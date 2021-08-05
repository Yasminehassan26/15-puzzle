import React, { Component } from 'react'
import Utils from '../Utils';
import './Tilestyle.css';



class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.number,
            neighbours: [ -1, -1, -1,  -1 ]
        }
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        console.log(this.props.index);
        // let showInfo = true
        // if (this.props.number === 16) {
        //     Utils.emptyTile = this.props.index
        //     showInfo = false

        // }
        return (
            <span style={{ display: "block" }} onClick={this.handleChange} className="Tile">
                {this.props.number!==16 && this.props.number}
            </span>
        )

    }
    checkValidMove(){
        let neighbours = Utils.getNeighbours(this.props.index)
        let a = this.props.grid

        for (let i =0 ;i<4;i++)
        {
            if(neighbours[i]!=-1 && a[neighbours[i]]==16) return neighbours[i]
        }
        return -1
    }
    handleChange() {
        let neighbours = Utils.getNeighbours(this.props.index)
    
        
        console.log("Neighbours", neighbours)
        let a = this.props.grid
        let toIndex = this.checkValidMove()
        console.log( toIndex)
        console.log(this.props.index)
        if(toIndex!== -1)
        {
            var b = a[this.props.index];
            a[this.props.index] = a[toIndex];
            a[toIndex] = b;
            [a[this.props.index], a[toIndex]] = [a[toIndex], a[this.props.index]]
        }
        console.log("a = ", a);
      this.props.setChanged(a)
    }
}
export default Tile
