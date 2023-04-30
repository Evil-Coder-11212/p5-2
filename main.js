function preload() {}

function setup() {
  canvas = createCanvas(400, 400);
  video = createCapture(VIDEO);
  video.hide();

  tintColor = "";
}

function draw() {
  image(video, 0, 0, 400, 400);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(30, 30, 20);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(370, 30, 20);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(30, 370, 20);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(370, 370, 20);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  rect(30, 25, 340, 10);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  rect(30, 365, 340, 10);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  rect(25, 30, 10, 340);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  rect(365, 30, 10, 340);
}

const take_snapshot = () => {
  save("Photo.png");
};

const applyFilter = () => {
  tintColor = document.querySelector("#enterColor").value;
};
