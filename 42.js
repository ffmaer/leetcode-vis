// license: CC-BY 2.0
// by Maer
function setup(){
  data = [0,1,0,2,1,0,1,3,2,1,2,1] //change to your input
  margin = 20
  max_height = Math.max(...data)
  createCanvas(20*data.length+margin,max_height*20+margin)
  background("pink")
  fill("hotpink")
  stroke("red")
  alignment_adjustment = 5
  for(i=0;i<data.length;i++){
    //vertical bars
    rect(margin+20*i,(height-margin)-20*data[i],20,20*data[i])
    //x-axis labels
    textAlign(CENTER)
    text(i,margin+20*i+10,height-alignment_adjustment)
  }
  for(i=1;i<=max_height;i++){
    //y-axis labels
    textAlign(CENTER)
    text(i,10,(height-margin)-20*(i-1)-alignment_adjustment)
  }
}