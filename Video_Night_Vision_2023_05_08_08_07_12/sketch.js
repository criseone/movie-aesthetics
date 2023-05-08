
var video,
    src,
    target,
    blend;

function setup() {
  pixelDensity(1);
  canvas = createCanvas(640, 360, WEBGL);
  canvas.id('p5canvas');
  
  video = createVideo(['sources/cooper_small.mov', 'sources/cooper_small.webm']);
  video.id('p5video');
  video.loop();
  video.size(640, 360);

  seriously = new Seriously();
  
  src = seriously.source('#p5video');
  target = seriously.target('#p5canvas');
  blend = seriously.effect('blend');
  
  blend.bottom = 
  blend.top = src;
  blend.mode = 'screen';
  
  target.source = blend;
  
  seriously.go();
}