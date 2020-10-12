// licenseL CC-BY 2.0
// by Maer
// made with p5.js
function setup(){
  createCanvas(500,500,WEBGL);
  data = [[1,2],[3,4]];
  size = 50;
  angleMode(DEGREES);
}
function draw(){
  orbitControl();
  rotateY(frameCount);
  background("white");
  normalMaterial();
  for(let v=0;v<data.length;v++){
    for(let h=0;h<data[v].length;h++){
      for(let z=0;z<data[v][h];z++){
        push();
        translate(h*size,-z*size,v*size);
        box(size, size, size);
        pop();
      }
    }
  }
}