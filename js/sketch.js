let json;
let imgList = [];
let canvas;

function preload() {
  json = loadJSON("../json/data.json");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight - 40);
  canvas.parent('main');
  imgList = json.content.imageNames;

  for(let i=0; i<imgList.length; i++) {
    loadImage('../images/' + imgList[i], img => {
      if(img.width > 50){
        image(img, random(width - img.width), random(height - img.height));
      }
    });
  }
}

function draw() {

}


