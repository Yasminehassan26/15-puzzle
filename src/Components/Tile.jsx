import React,{Component} from 'react'
import Utils from '../Utils';
import Grid from './Grid';
import './Tilestyle.css';



class Tile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            neighbours : {'L' : -1 ,'R' : -1 ,'U' :-1 ,'D' :-1}
        }
        this.handleChange=this.handleChange.bind(this)
    }
   
    render() {
        let showInfo=true
        if(this.props.number==16) {Utils.emptyTile=this.props.index
           showInfo = false

        }
        return(
            <span style={{display: showInfo ? "block" : "none" }} onClick={this.handleChange} className="Tile">
                {this.props.number}   
            </span>
        )
        
    }
    refresh()
    {
        this.render()
    }
    handleChange(){
       // Utils.isValidMove();
       console.log(Utils.getNeighbours(this.props.index))
        let a = this.props.grid
        a[6]=-111
        console.log(a)
      /* console.log(this.props.index)
       console.log(this.tiles)*/
      // console.log(`neighnbourr is ${this.props.neighbours['R']}`)
     /*  if (16===this.props.tiles[this.props.neighbours['R']]){
       var b = this.props.tiles[this.props.neighbours['R']];
       this.props.tiles[this.props.neighbours['R']] =  this.props.tiles[this.props.index-1];
       this.props.tiles[this.props.index-1] = b;
       }*/

       this.props.setChanged(this.props.tiles)
    

    }
}
export default Tile