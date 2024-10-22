let customFont;  // 載入字型文字
let angle = 0;   // 初始旋轉角度

function preload() {  // 在執行setup()前，必須先做此函數執行，主要先載入字型
    customFont = loadFont("fonts/NotoSansTC-VariableFont_wght.ttf"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#CB997E");
  noFill(); // 圖形不填色
  stroke("#DDBEA9"); // 線條顏色
  strokeWeight(5); // 線條粗細

  ellipseMode(CENTER);
  rectMode(CENTER);

  for (var j = 0; j < (height / 50); j++) {
    for (var i = 0; i < (width / 50); i++) {
      rect(25 + (i * 50), 25 + (j * 50), 50 + mouseX / 5); // 大正方形位置
      stroke("#718355"); // 填色
      rect(25 + (i * 50), 25 + (j * 50), 25); // 小正方形位置
      ellipse(25 + (i * 50), 25 + (j * 50), 25 + mouseY / 10); // 方形內小圓位置
      stroke("#a9bcd0"); // 填色
      ellipse(25 + (i * 50), 25 + (j * 50), 5 + mouseY / 5); // 圓形內小小圓
    }
  }

  // 在畫面中央加上隨著滑鼠移動的字
  textAlign(CENTER, CENTER);
  textFont(customFont); // 設置字形
  textSize(32 + mouseY / 20); // 字體大小隨滑鼠Y位置變化

  // 保存當前變換狀態
  push(); 
  translate(width / 2, height / 2); // 將原點移至畫布中心
  rotate(angle); // 旋轉
  fill(0); // 字體顏色
  text("TKUET", 0, 0); // 在新原點顯示字
  pop(); // 還原變換狀態

  angle += 0.01; // 每幀增加旋轉角度
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 窗口大小改變時，重設畫布
}
