// ws_domino
// options.columns - number of columns
// options.rows - number of rows
// options.centerRow - row index of center block(calculating duration)
// options.centerColumn - column index of center block(calculating duration)
jQuery.extend(jQuery.easing,{easeInOutSine:function(c,l,h,u,e){return-u/2*(Math.cos(Math.PI*l/e)-1)+h}});
function ws_domino(c,l,h){$=jQuery;var u=$(this),e=c.columns||5,k=c.rows||2,D=c.centerRow||2,E=c.centerColumn||2,p=$("<div>").addClass("ws_effect ws_domino").css({position:"absolute",width:"100%",height:"100%",top:0,overflow:"hidden"}).appendTo(h),y=$("<div>").addClass("ws_zoom").appendTo(p),v=$("<div>").addClass("ws_parts").appendTo(p),z=h.find(".ws_list"),w;this.go=function(h,A){function B(){v.find("img").stop(1,1);v.empty();y.empty();w=0}function C(a,b){return Math.random()*(b-a+1)+a}B();var g=
$(l.get(A)),g={width:g.width(),height:g.height(),marginTop:parseFloat(g.css("marginTop")),marginLeft:parseFloat(g.css("marginLeft"))},F=$(l.get(A)).clone().appendTo(y).css({position:"absolute",top:0,left:0}).css(g),q=p.width(),r=p.height(),m=Math.floor(q/e),n=Math.floor(r/k),q=q-m*(e-1),r=r-n*(k-1);z.hide();for(var t=[],a=0;a<k;a++){t[a]=[];for(var b=0;b<e;b++){var G=c.duration*(1-Math.abs((D*E-a*b)/(2*k*e))),x=b<e-1?m:q,d=a<k-1?n:r;t[a][b]=$("<div>").css({width:x,height:d,position:"absolute",top:a*
n,left:b*m,overflow:"hidden"});var d=C(a-2,a+2),f=C(b-2,b+2);t[a][b].appendTo(v);x=$(l.get(h)).clone().appendTo(t[a][b]).css(g);d={top:-d*n,left:-f*m,opacity:0};f={top:-a*n,left:-b*m,opacity:1};c.support.transform&&c.support.transition&&(d.translate=[d.left,d.top,0],f.translate=[f.left,f.top,0],delete d.top,delete d.left,delete f.top,delete f.left);wowAnimate(x.css({position:"absolute"}),d,f,G,"easeInOutSine",function(){w++;w==k*e&&(B(),z.stop(1,1),u.trigger("effectEnd"))})}}wowAnimate(F,{scale:1},
{scale:1.6},c.duration,.2*c.duration,"easeInOutSine")}};
