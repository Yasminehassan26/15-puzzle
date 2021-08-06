import React, { Component } from "react";
import Utils from "../Utils";
import Tile from "./Tile";
import "../stylingFiles/Gridstyle.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    };

    this.setChanged = this.setChanged.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    this.setState({ tiles: Utils.shuffle(this.state.tiles) });
  }

  setChanged(t) {
    this.setState({ tiles: t });
  }

  render() {
    return (
      <div className="container">
        <div className=" containGrid">
          <div>
            <h1>Welcome to our game</h1>
          </div>
          <div className="Grid">
            <div className="buttonsPlace">
              <button className="buttons" onClick={() => this.refresh()}>
                {" "}
                Shuffle{" "}
              </button>
              <button className="buttons" onClick={() => this.refresh()}>
                {" "}
                order{" "}
              </button>
            </div>
            <div></div>
            <div></div>
            <div></div>

            {this.state.tiles.map((tile, i) => (
              <Tile
                grid={this.state.tiles}
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
