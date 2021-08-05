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
    isValidMove(index,negihbours)
    {
     
    }
    checkBoundries(index){
      

    }
    getNeighbours(index)
    {
        return {'L' : index-1,'R' :index+1 , 'U' : index-4 ,'D' :index+4}
    }
}export default new Utils();

