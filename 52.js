function setup() {
    createCanvas(500, 500);
    background("blue");
  }
  function draw() {
    stroke("white");
    let gap = 30;
    let data = ["0,0", "1,2", "2,4", "3,6", "4,1", "5,3", "6,5"];
    let n = data.length;
    let count = n + 1;
    // vertical lines
    for (let y = 0; y < count; y++) {
      line(0, y * gap, width, y * gap);
    }
    // horizontal lines
    for (let x = 0; x < count; x++) {
      line(x * gap, 0, x * gap, height);
    }
    ellipseMode(CORNER);
    for (let datum of data) {
      let [y, x] = datum.split(",").map((x) => parseInt(x));
      let offset = gap / 4;
      circle(x * gap + offset, y * gap + offset, gap / 2);
    }
  }
  