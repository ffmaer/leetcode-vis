// CC-BY 2.0
// by Maer
// made with p5.js

var nums,trees,index_slider //global variables

class TreeNode{
  constructor(x){
    this.val = x
    this.left = null
    this.right = null
  }
}

function gen(start_index,end_index){
  if(start_index == end_index){
    return [new TreeNode(nums[start_index])]
  }
  let q=[]
  for(let current_index=start_index;current_index<=end_index;current_index++){
    let left_q = [null]
    if(current_index - 1 >= start_index){
      left_q = gen(start_index, current_index-1)
    }
    let right_q = [null]
    if(current_index + 1 <= end_index){
      right_q = gen(current_index+1, end_index)
    }

    for(let left of left_q){
      for(let right of right_q){
        node = new TreeNode(nums[current_index])
        node.left = left
        node.right = right
        q.push(node)
      }
    }
  }
  return q
}

function calculate(n){
  nums = []
  for(i=1;i<=n;i++){
    nums.push(i)
  }
  trees = gen(0, nums.length-1)

  if(index_slider)
    index_slider.remove()
  index_slider = createSlider(0,trees.length-1,trees.length/2,1)
  index_slider.position(width/2-index_slider.width/2,height+40)
  index_slider.changed(function(){
    draw_all()
  })
  draw_all()
}

function drawTree(node,x,y){
  let distance = 20
  push()
  noStroke()
  text(node.val, x, y)
  pop()
  stroke("red")
  if(node.left != null){
    line(x,y+2,x-distance/2+2,y+distance-10)
    drawTree(node.left,x-distance/2,y+distance)
  }
  if(node.right != null){
    line(x,y+2,x+distance/2-2,y+distance-10)
    drawTree(node.right,x+distance/2,y+distance)
  }
}

function draw_all(){
  background("pink")
  textAlign(CENTER)
  fill("red")
  push()
  translate(width/2,10)
  drawTree(trees[index_slider.value()],10,10)
  pop()
  text(`n=${n_slider.value()}\npossiblilities=${trees.length}\ncurrent=${index_slider.value()+1}`,width/2,height-40)
}

function setup(){
  createCanvas(300,300)
  n_slider = createSlider(1,13,10,1)
  n_slider.position(width/2-n_slider.width/2,height+20)
  n_slider.changed(function(){
    calculate(n_slider.value())
  })
  calculate(n_slider.value())
}