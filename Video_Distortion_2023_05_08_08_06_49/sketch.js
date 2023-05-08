var video,
    src,
	target,
    seriously,
    chroma;

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
  
  chroma = seriously.effect('chroma');
  chroma.source = src;
  target.source = chroma;
  var r = 255 / 255;
  var g = 0 / 255;
  var b = 0 / 255;
  chroma.screen = [r,g,b,1];
  
  seriously.go();
}
