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
      toIndex:0,
      fromIndex:0,
    };

    this.setChanged = this.setChanged.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    this.setState({ tiles: Utils.shuffle(this.state.tiles) });
    this.setState({ fromIndex: 0 });
    this.setState({ toIndex: 0 });


  }
  undo(){
    this.setState({ tiles:  Utils.undo(this.state.tiles,this.state.fromIndex,this.state.toIndex) });
  }

  setChanged(current,from,to) {
    this.setState({ tiles: current });
    this.setState({ fromIndex : from});
    this.setState({ toIndex : to});


  }
 

  render() {
    return (
      <div className="container">
        <div className=" containGrid">
          <div>
            <h1>..Welcome to our game !..</h1>
          </div>
          <div className="Grid">
            <button className="buttons" onClick={() => this.refresh()}>
              {" "}
              Shuffle{" "}
            </button>
            <button className="buttons" onClick={() => this.undo()}>
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
