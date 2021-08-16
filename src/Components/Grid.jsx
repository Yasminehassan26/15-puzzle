import React, { Component } from "react";
import Utils from "../Utils";
import Tile from "./Tile";
import "../stylingFiles/Gridstyle.css";

class Grid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      prevTiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      toIndex: 0,
      fromIndex: 0,
      stackIn : [],
      stackOut :[]
    };

    this.setChanged = this.setChanged.bind(this);
    this.setUndoChanged = this.setUndoChanged.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    this.setState({ tiles: Utils.shuffle(this.state.tiles) });
    this.setState({ fromIndex: 0 });
    this.setState({ toIndex: 0 });
  }
  undo() {
    this.setState({
      tiles: Utils.undo(
        this.state.tiles,
        this.state.stackIn,
        this.state.stackOut
      ),
    });
    this.setUndoChanged();
  }
  setUndoChanged() {
   /* this.state.stackIn.pop();
    this.state.stackIn.pop();*/
    this.setState({ stackIn: this.state.stackIn });
    this.setState({ stackOut: this.state.stackOut });
  }
  setChanged(current, from, to) {
    this.setState({ tiles: current });
    this.state.stackIn.push(from);
    this.state.stackOut.push(to);
    this.setState({ stackIn: this.state.stackIn });
    this.setState({ stackOut: this.state.stackOut });


  }

  setWin(){
    if(Utils.isSorted(this.state.tiles)){
      return "..YOU WON!..";
    }else{
      return "..Welcome to our game !..";
    }
  }

  render() {
    return (
      <div className="container">
        <div className=" containGrid">
          <div>
            <h1>{this.setWin()}</h1>
          </div>
          <div className="Grid">
            
            <button className="buttons" onClick={() => this.refresh()}>
              {" "}
              Shuffle{" "}
            </button>
            <button className="buttons" onClick={() => this.undo()} disabled={Utils.isSorted(this.state.tiles)}>
              {" "}
              Undo{" "}
            </button>
            <div></div>

            {this.state.tiles.map((tile, i) => (
              <Tile
                grid={this.state.tiles}
                prevGrid={this.state.prevTiles}
                fromInd={this.state.fromIndex}
                toInd={this.state.toIndex}
                setChanged={this.setChanged}
                neighbours={Utils.getNeighbours(i)}
                index={i}
                number={tile}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Grid;
