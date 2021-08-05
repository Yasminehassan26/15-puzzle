class Utils {
    const
    emptyTile = 15;
     maxValue=16;
    shuffle(arr) {
        let shuffled = arr
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
        return shuffled
    }
   
    getNeighbours(index){
        console.log("Index ", index)
        let i = Math.floor(index/4)
        let j= index%4
        console.log("(", i, j, ")")
        // console.log(j)
        let neighbours =   [-1,-1,-1,-1]
        if(j-1 >=0) {neighbours[0]= index-1}
        if(j+1 <=3) {neighbours[1]= index+1}
        if(i-1 >=0) {neighbours[2]= index-4}
        if(i+1 <=3) {neighbours[3]= index+4}
        return neighbours
       
    }
   
}export default new Utils();

