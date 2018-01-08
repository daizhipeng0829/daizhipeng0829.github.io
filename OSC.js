function O(i) { return typeof i == 'object' ? i : document.getElementById(i) }
function S(i) { return O(i).style                                            }
function C(i) { return document.getElementsByClassName(i)                    }
$(window).resize(resizeCanvas);  
   
 function resizeCanvas() {  
   
        canvas.attr("width", $(window).get(0).innerWidth);  
   
        canvas.attr("height", $(window).get(0).innerHeight);  
   
        context.fillRect(0, 0, canvas.width(), canvas.height());  
   
 };  
   
 resizeCanvas();  