// Parallax

function Parallax(options){
    options = options || {};
    this.nameSpaces = {
        wrapper: options.wrapper || '.js-parallax',
        layers: options.layers || '.js-parallax__layer',
        deep: options.deep || 'data-parallax-deep'
    };
    this.init = function() {
        var self = this,
            parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);
      	for(var i = 0; i < parallaxWrappers.length; i++){
			(function(i){
				parallaxWrappers[i].addEventListener('mousemove', function(e){
					var x = e.clientX,
						y = e.clientY,
						layers = parallaxWrappers[i].querySelectorAll(self.nameSpaces.layers);
					for(var j = 0; j < layers.length; j++){
            (function(j){
              var deep = layers[j].getAttribute(self.nameSpaces.deep),
                  disallow = layers[j].getAttribute('data-parallax-disallow'),
                  itemX = (disallow && disallow === 'x') ? 0 : x / deep,
                  itemY = (disallow && disallow === 'y') ? 0 : y / deep;
                  if(disallow && disallow === 'both') return;
                  layers[j].style.transform = 'translateX(' + itemX + '%) translateY(' + itemY + '%)';
            })(j);
					}
				})
			})(i);
      	}
    };
    this.init();
    return this;
}

window.addEventListener('load', function(){
    new Parallax();
});



// follow cursor

const circle = document.querySelector(".js-cirle");

let mouseX = 0;
let mouseY = 0;

let circleX = 0;
let circleY = 0;

let speed = 0.3;

function animate() {
  let distX = mouseX - circleX;
  let distY = mouseY - circleY;

  circleX = circleX + distX * speed;
  circleY = circleY + distY * speed;

  circle.style.left = circleX + "px";
  circle.style.top = circleY + "px";

  requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousemove", function(event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
});

document.addEventListener("mousedown", function(event) {
  circle.classList.toggle("is-clicked");
});

document.addEventListener("mouseup", function(event) {
  circle.classList.toggle("is-clicked");
});
