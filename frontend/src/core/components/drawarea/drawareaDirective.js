/*global angular*/

var coreModule = angular.module('modernPraxis.core');

function canvasInit(scope, el) {
    
    //var canvas = document.getElementById('canvasInAPerfectWorld');
    var canvas = $(el).find('canvas')[0];
    var context = canvas.getContext("2d");
    
    /* IE only
    var canvasDiv = document.getElementById('canvasDiv');
    
    canvas = document.createElement('canvas');
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);
    canvas.setAttribute('id', 'canvas');
    canvasDiv.appendChild(canvas);
    if(typeof G_vmlCanvasManager != 'undefined') {
    	canvas = G_vmlCanvasManager.initElement(canvas);
    }
    context = canvas.getContext("2d");
    
    */
    
    function getMousePos(evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
    }
    
    $(canvas).mousedown(function(e){
        var mousePos = getMousePos(e);
        
        var mouseX = mousePos.x;
        var mouseY = mousePos.y;
        	
        paint = true;
        addClick(mouseX, mouseY);
        redraw();
    });
    
    $(canvas).mousemove(function(e){
        if(paint){
            var mousePos = getMousePos(e);
            
            addClick(mousePos.x, mousePos.y, true);
            redraw();
        }
    });
    
    $(canvas).mouseup(function(e){
      paint = false;
    });
    
    $(canvas).mouseleave(function(e){
      paint = false;
    });
    
    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;
    
    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }
    
    function redraw(){
      context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
      
      context.strokeStyle = "#df4b26";
      context.lineJoin = "round";
      context.lineWidth = 5;
    			
      for(var i=0; i < clickX.length; i++) {		
        context.beginPath();
        if(clickDrag[i] && i){
          context.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context.moveTo(clickX[i]-1, clickY[i]);
         }
         context.lineTo(clickX[i], clickY[i]);
         context.closePath();
         context.stroke();
      }
    }
}

coreModule.directive('mpDrawarea', function() {
  return {
    restrict: 'E',
    scope: {
      label: '@'  
    },
    templateUrl: 'core/components/drawarea/drawareaDirective.template.html',
    link: canvasInit
  };
});