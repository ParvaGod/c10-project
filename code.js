var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var Lives=0;

var strtline=createSprite(30, 190, 70, 140);
strtline.shapeColor="yellow";

var endline=createSprite(390, 190, 100, 140);
endline.shapeColor="skyblue";


var boundary1=createSprite(190,120,420,3);
boundary1.shapeColor="white";

var boundary2=createSprite(190, 260, 420, 3);
boundary2.shapeColor="white";

var fallguy=createSprite(30, 190, 15, 15);
fallguy.shapeColor="lime";

var hammer1=createSprite(100, 130, 10, 10);
hammer1.shapeColor="red";

var hammer2=createSprite(215, 130, 10 , 10);
hammer2.shapeColor="red";

var hammer3=createSprite(160, 250, 10, 10);
hammer3.shapeColor="red";

var hammer4=createSprite(275, 250, 10, 10);
hammer4.shapeColor="red";






hammer1.velocityY= 7;
hammer2.velocityY= 7;
hammer3.velocityY= -7;
hammer4.velocityY= -7;
















function draw() {
  background("black");

   
  textSize(20);
  stroke("blue");
  textFont("BOLD"); 
  text("Lives: "+Lives, 185, 100);
  
  


hammer1.bounceOff(boundary2);
hammer1.bounceOff(boundary1);

hammer2.bounceOff(boundary2);
hammer2.bounceOff(boundary1);

hammer3.bounceOff(boundary1);
hammer3.bounceOff(boundary2);

hammer4.bounceOff(boundary1);
hammer4.bounceOff(boundary2);



if (keyDown("D")) {
  fallguy.x+=5;
}

if (keyDown("A")) {
  fallguy.x-=5
}




if (fallguy.isTouching(hammer1)|| fallguy.isTouching(hammer2)|| fallguy.isTouching(hammer3)||fallguy.isTouching(hammer4)) {
    Lives=Lives+1;
    fallguy.x=30;
    fallguy.y=190;
}
  
  
if (fallguy.isTouching(endline)) {
    text("U WON", 190, 320);
    fallguy.x=30;
    fallguy.y=190;
  
}
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites()
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
