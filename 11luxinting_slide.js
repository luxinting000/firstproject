var switcher=(function(){
    return {
        init(target){
            var canv=document.getElementById(target);
            var width=canv.width;
            var height=canv.height;
            var ctx=canv.getContext("2d");
            var flag=true;
            var r=width/4;
            var circle_x=width*3/4-1;
            var circle_y=height/2;
            drawAll(circle_x,circle_y,flag);
            function drawAll(circle_x,circle_y,flag){
                ctx.arc(width/4,height/2,width/4,0,2*Math.PI);
                ctx.arc(width*3/4,height/2,width/4,0,2*Math.PI);
                if(flag){
                    ctx.fillStyle="blue";
                    canv.setAttribute("status","on");
                }else{
                    ctx.fillStyle="lightgray";
                    canv.setAttribute("status","off");
                }
                ctx.fill();
                ctx.fillRect(width/4,0,width/2,height);
                ctx.beginPath();
                ctx.arc(circle_x,circle_y,width/4,0,2*Math.PI);
                ctx.fillStyle="white";
                ctx.fill();
            }
            var handle1,handle2;
            function Rtl(){
                ctx.clearRect(0,0,width,height);
                circle_x=circle_x-1;
                drawAll(circle_x,circle_y,flag);
                if(circle_x==width/4+1){
                        clearInterval(handle1);
                }
            }
            function Ltr(){
                ctx.clearRect(0,0,width,height);
                circle_x=circle_x+1;
                drawAll(circle_x,circle_y,flag);
                if(circle_x==width*3/4-1){
                        clearInterval(handle2);
                }
            }
            canv.onclick=function(e){
                var mouse_x=e.offsetX;
                var mouse_y=e.offsetY;
                var y_cha=Math.sqrt(r*r-(mouse_x-circle_x)*(mouse_x-circle_x));
                console.log(y_cha);
                if(mouse_x>width/2&&mouse_x<width&&mouse_y>r-y_cha&&mouse_y<y_cha+r&&flag==true){
                    handle1=setInterval(Rtl,5);
                    flag=!flag;
                }
                if(mouse_x<width/2&&mouse_x>0&&mouse_y>r-y_cha&&mouse_y<y_cha+r&&flag==false){
                    handle2=setInterval(Ltr,5);
                    flag=!flag;
                }
            }
                }
            }
})();