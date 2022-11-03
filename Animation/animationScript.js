
knight={
	src : "./freeknight/spritesheet.png",
	img: undefined,
	frame:0,
	offset: 0,
	"frames": [
		{
			"filename": "Run (1).png",
			"frame": {
				"x": 1,
				"y": 1,
				"w": 590,
				"h": 710
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 590,
				"h": 710
			},
			"sourceSize": {
				"w": 590,
				"h": 710
			}
		},
		{
			"filename": "Run (2).png",
			"frame": {
				"x": 590,
				"y": 1,
				"w": 590,
				"h": 710
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 590,
				"h": 710
			},
			"sourceSize": {
				"w": 590,
				"h": 710
			}
		},
		{
			"filename": "Run (3).png",
			"frame": {
				"x": 1179,
				"y": 1,
				"w": 590,
				"h": 710
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 590,
				"h": 710
			},
			"sourceSize": {
				"w": 590,
				"h": 710
			}
		},
		{
			"filename": "Run (4).png",
			"frame": {
				"x": 1,
				"y": 710,
				"w": 590,
				"h": 710
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 590,
				"h": 710
			},
			"sourceSize": {
				"w": 590,
				"h": 710
			}
		},
		{
			"filename": "Run (5).png",
			"frame": {
				"x": 590,
				"y": 710,
				"w": 590,
				"h": 710
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 590,
				"h": 710
			},
			"sourceSize": {
				"w": 590,
				"h": 710
			}
		},
		{
			"filename": "Run (6).png",
			"frame": {
				"x": 1179,
				"y": 710,
				"w": 590,
				"h": 710
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 590,
				"h": 710
			},
			"sourceSize": {
				"w": 590,
				"h": 710
			}
		},
		{
			"filename": "Run (7).png",
			"frame": {
				"x": 1768,
				"y": 1,
				"w": 590,
				"h": 710
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 590,
				"h": 710
			},
			"sourceSize": {
				"w": 590,
				"h": 710
			}
		},
		{
			"filename": "Run (8).png",
			"frame": {
				"x": 1168,
				"y": 710,
				"w": 590,
				"h": 710
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 590,
				"h": 710
			},
			"sourceSize": {
				"w": 590,
				"h": 710
			}
		},
		{
			"filename": "Run (9).png",
			"frame": {
				"x": 1,
				"y": 1419,
				"w": 590,
				"h": 710
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 590,
				"h": 710
			},
			"sourceSize": {
				"w": 590,
				"h": 710
			}
		}
	],
}


var Scene = {
    canvas : undefined,
    canvasContext : undefined,
	sprite: undefined
};

Scene.start = function () {
	// Get the canvas and it's context.
    Scene.canvas = document.getElementById("myCanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");
	
	// Seup the parrot to be displayed.
    Scene.sprite = knight;
	
	// Attach the image to be used for the sprite.
	Scene.sprite.img = new Image();
    Scene.sprite.img.src = Scene.sprite.src;
	
	// Wait till the parrot image is loaded before starting the animation.
	Scene.sprite.img.onload = function() {		
		Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
    	Scene.mainLoop();
	}
};

// Once the basic HTML document is loaded and its parsing has taken place, start the scene.
document.addEventListener( 'DOMContentLoaded', Scene.start);

Scene.clearCanvas = function () {
    Scene.canvasContext.fillStyle = "white";
    Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function() {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();
	
	// Animate at 24 frames a second.
    window.setTimeout(Scene.mainLoop, 1000 /24);
};

Scene.update = function () {
	// Set the canvas width to be that of the display Window. Which helps if you resize the window.
  	Scene.canvas.width = window.innerWidth;
	
	// Set the location of the next frame. 
  	Scene.sprite.offset+=24;
	if(Scene.sprite.offset>Scene.canvas.width)
 		Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
};

Scene.draw = function () {
	Scene.canvasContext.drawImage(Scene.sprite.img,Scene.sprite.frames[Scene.sprite.frame].frame.x,Scene.sprite.frames[Scene.sprite.frame].frame.y,Scene.sprite.frames[Scene.sprite.frame].frame.w,Scene.sprite.frames[Scene.sprite.frame].frame.h,Scene.sprite.offset,0,Scene.sprite.frames[Scene.sprite.frame].frame.w,Scene.sprite.frames[Scene.sprite.frame].frame.h);
	
	// Advance to the next frame.
	Scene.sprite.frame++;

	// At the end of the sprite sheet, start at the first frame.
	if(Scene.sprite.frame==Scene.sprite.frames.length)
		Scene.sprite.frame=0;
};




