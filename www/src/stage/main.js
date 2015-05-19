// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
// which will try to choose the best renderer for the environment you are in.
var width    = screen.availWidth;
var height   = screen.availHeight;
var renderer = new PIXI.WebGLRenderer(width, height);

// The renderer will create a canvas element for you that you can then insert into the DOM.
document.body.appendChild(renderer.view);

// You need to create a root container that will hold the scene you want to draw.
var stage = new PIXI.Container(0x000000);

// kick off the animation loop (defined below)
animate();


var word = "Hello World!";
var style = {font:'bold 60pt Arial', fill:'white'}; // 文字サイズや色など
var textobj = new PIXI.Text(word, style); // テキストオブジェクトの生成
textobj.position.x = 0;  // 表示位置(x)
textobj.position.y = 0; // 表示位置(y)
stage.addChild(textobj);

function animate() {
    // start the timer for the next animation loop
    requestAnimationFrame(animate);

    // this is the main render call that makes pixi draw your container and its children.
    renderer.render(stage);
}