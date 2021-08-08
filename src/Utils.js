class Utils {
  const;
  emptyTile = 15;
  maxValue = 16;
  sorteTtiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  shuffle(arr) {
    let shuffled = arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  }

  isSorted(grid) {
    for (var i = 0; i < 16; i++) {
      if (grid[i] !== this.sorteTtiles[i]) {
        return false;
      }
    }
    return true;
  }
  undo(a, from, to) {
    [a[from], a[to]] = [a[to], a[from]];
    return a;
  }
  getNeighbours(index) {
    let i = Math.floor(index / 4);
    let j = index % 4;
    let neighbours = [-1, -1, -1, -1];
    if (j - 1 >= 0) {
      neighbours[0] = index - 1;
    }
    if (j + 1 <= 3) {
      neighbours[1] = index + 1;
    }
    if (i - 1 >= 0) {
      neighbours[2] = index - 4;
    }
    if (i + 1 <= 3) {
      neighbours[3] = index + 4;
    }
    return neighbours;
  }
}
export default new Utils();
