var ko=Object.defineProperty;var Po=(n,t,i)=>t in n?ko(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i;var Bt=(n,t,i)=>Po(n,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}})();function Bo(n){const t=n.units==="inch",i=t?.5:10,e=Math.max(i,n.length),o=Math.max(i,n.width),a=Math.min(n.cornerSize||0,Math.min(e,o)/2-(t?.05:1)),s=[];n.cornerType==="fillet"&&a>0?(s.push({type:"line",start:{x:a,y:0},end:{x:e-a,y:0}}),s.push({type:"arc",center:{x:e-a,y:a},radius:a,startAngle:270*Math.PI/180,endAngle:360*Math.PI/180,counterClockwise:!0}),s.push({type:"line",start:{x:e,y:a},end:{x:e,y:o-a}}),s.push({type:"arc",center:{x:e-a,y:o-a},radius:a,startAngle:0,endAngle:90*Math.PI/180,counterClockwise:!0}),s.push({type:"line",start:{x:e-a,y:o},end:{x:a,y:o}}),s.push({type:"arc",center:{x:a,y:o-a},radius:a,startAngle:90*Math.PI/180,endAngle:180*Math.PI/180,counterClockwise:!0}),s.push({type:"line",start:{x:0,y:o-a},end:{x:0,y:a}}),s.push({type:"arc",center:{x:a,y:a},radius:a,startAngle:180*Math.PI/180,endAngle:270*Math.PI/180,counterClockwise:!0})):n.cornerType==="chamfer"&&a>0?(s.push({type:"line",start:{x:a,y:0},end:{x:e-a,y:0}}),s.push({type:"line",start:{x:e-a,y:0},end:{x:e,y:a}}),s.push({type:"line",start:{x:e,y:a},end:{x:e,y:o-a}}),s.push({type:"line",start:{x:e,y:o-a},end:{x:e-a,y:o}}),s.push({type:"line",start:{x:e-a,y:o},end:{x:a,y:o}}),s.push({type:"line",start:{x:a,y:o},end:{x:0,y:o-a}}),s.push({type:"line",start:{x:0,y:o-a},end:{x:0,y:a}}),s.push({type:"line",start:{x:0,y:a},end:{x:a,y:0}})):(s.push({type:"line",start:{x:0,y:0},end:{x:e,y:0}}),s.push({type:"line",start:{x:e,y:0},end:{x:e,y:o}}),s.push({type:"line",start:{x:e,y:o},end:{x:0,y:o}}),s.push({type:"line",start:{x:0,y:o},end:{x:0,y:0}}));const r={segments:s,isClosed:!0,isHole:!1},c=[],u=t?.1:1,d=Math.max(u,n.edgeOffsetX),l=Math.max(u,n.edgeOffsetY),p=[];n.holePattern==="4-corner"?(p.push({x:d,y:l}),p.push({x:e-d,y:l}),p.push({x:e-d,y:o-l}),p.push({x:d,y:o-l})):n.holePattern==="6-hole"?(p.push({x:d,y:l}),p.push({x:e/2,y:l}),p.push({x:e-d,y:l}),p.push({x:e-d,y:o-l}),p.push({x:e/2,y:o-l}),p.push({x:d,y:o-l})):n.holePattern==="8-hole"&&(p.push({x:d,y:l}),p.push({x:e/2,y:l}),p.push({x:e-d,y:l}),p.push({x:e-d,y:o/2}),p.push({x:e-d,y:o-l}),p.push({x:e/2,y:o-l}),p.push({x:d,y:o-l}),p.push({x:d,y:o/2}));const f=Math.max(t?.05:1,n.holeDiameter/2);if(n.holeType==="round")for(const T of p)c.push({center:T,radius:f});else if(n.holeType==="slotted"){const T=t?.1:2,S=Math.max(f*2,n.slotLength||f*3),w=Math.max(T,n.slotWidth||f*2),C=w/2,W=Math.max(0,(S-w)/2);for(const U of p){const D=[],A={x:U.x-W,y:U.y},v={x:U.x+W,y:U.y};D.push({type:"line",start:{x:A.x,y:A.y+C},end:{x:v.x,y:v.y+C}}),D.push({type:"arc",center:v,radius:C,startAngle:90*Math.PI/180,endAngle:270*Math.PI/180,counterClockwise:!1}),D.push({type:"line",start:{x:v.x,y:v.y-C},end:{x:A.x,y:A.y-C}}),D.push({type:"arc",center:A,radius:C,startAngle:270*Math.PI/180,endAngle:90*Math.PI/180,counterClockwise:!1}),c.push({segments:D,isClosed:!0,isHole:!0})}}const I=e/2,b=o/2;if(n.centerCutoutType==="round"&&n.centerCutoutDiameter&&n.centerCutoutDiameter>0)c.push({center:{x:I,y:b},radius:n.centerCutoutDiameter/2});else if(n.centerCutoutType==="rectangular"&&n.centerCutoutWidth&&n.centerCutoutHeight){const T=Math.min(n.centerCutoutWidth,e-d*2),S=Math.min(n.centerCutoutHeight,o-l*2),w=T/2,C=S/2,W=[{type:"line",start:{x:I-w,y:b-C},end:{x:I+w,y:b-C}},{type:"line",start:{x:I+w,y:b-C},end:{x:I+w,y:b+C}},{type:"line",start:{x:I+w,y:b+C},end:{x:I-w,y:b+C}},{type:"line",start:{x:I-w,y:b+C},end:{x:I-w,y:b-C}}];c.push({segments:W,isClosed:!0,isHole:!0})}return{name:"Structural Baseplate",units:n.units,outerContour:r,innerHoles:c,boundingBox:{minX:0,minY:0,maxX:e,maxY:o,width:e,height:o}}}const yt=[{standard:"BS10",name:'BS 10 Table E - 1" NB',nominalBore:'1"',outerDiameter:114.3,innerBore:33.4,pitchCircleDiameter:82.6,boltCount:4,boltDiameter:14.3,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 1.5" NB',nominalBore:'1.5"',outerDiameter:133.4,innerBore:48.3,pitchCircleDiameter:98.4,boltCount:4,boltDiameter:14.3,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 2" NB',nominalBore:'2"',outerDiameter:152.4,innerBore:60.3,pitchCircleDiameter:114.3,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 2.5" NB',nominalBore:'2.5"',outerDiameter:165.1,innerBore:73,pitchCircleDiameter:127,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 3" NB',nominalBore:'3"',outerDiameter:184.2,innerBore:88.9,pitchCircleDiameter:146,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 4" NB',nominalBore:'4"',outerDiameter:215.9,innerBore:114.3,pitchCircleDiameter:177.8,boltCount:8,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 6" NB',nominalBore:'6"',outerDiameter:279.4,innerBore:168.3,pitchCircleDiameter:235,boltCount:8,boltDiameter:20.6,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 8" NB',nominalBore:'8"',outerDiameter:336.6,innerBore:219.1,pitchCircleDiameter:292.1,boltCount:8,boltDiameter:20.6,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 2" NB',nominalBore:'2"',outerDiameter:152.4,innerBore:60.3,pitchCircleDiameter:114.3,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 3" NB',nominalBore:'3"',outerDiameter:184.2,innerBore:88.9,pitchCircleDiameter:146,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 4" NB',nominalBore:'4"',outerDiameter:215.9,innerBore:114.3,pitchCircleDiameter:177.8,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 6" NB',nominalBore:'6"',outerDiameter:279.4,innerBore:168.3,pitchCircleDiameter:235,boltCount:8,boltDiameter:17.5,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN25 (1")',nominalBore:"DN25",outerDiameter:115,innerBore:34,pitchCircleDiameter:85,boltCount:4,boltDiameter:14,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN50 (2")',nominalBore:"DN50",outerDiameter:165,innerBore:61,pitchCircleDiameter:125,boltCount:4,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN80 (3")',nominalBore:"DN80",outerDiameter:200,innerBore:90,pitchCircleDiameter:160,boltCount:8,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN100 (4")',nominalBore:"DN100",outerDiameter:220,innerBore:115,pitchCircleDiameter:180,boltCount:8,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN150 (6")',nominalBore:"DN150",outerDiameter:285,innerBore:169,pitchCircleDiameter:240,boltCount:8,boltDiameter:22,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN200 (8")',nominalBore:"DN200",outerDiameter:340,innerBore:220,pitchCircleDiameter:295,boltCount:12,boltDiameter:22,units:"mm"},{standard:"ASME",name:'ASME 1" Class 150',nominalBore:'1"',outerDiameter:4.25,innerBore:1.36,pitchCircleDiameter:3.12,boltCount:4,boltDiameter:.62,units:"inch"},{standard:"ASME",name:'ASME 2" Class 150',nominalBore:'2"',outerDiameter:6,innerBore:2.44,pitchCircleDiameter:4.75,boltCount:4,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 3" Class 150',nominalBore:'3"',outerDiameter:7.5,innerBore:3.57,pitchCircleDiameter:6,boltCount:4,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 4" Class 150',nominalBore:'4"',outerDiameter:9,innerBore:4.57,pitchCircleDiameter:7.5,boltCount:8,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 6" Class 150',nominalBore:'6"',outerDiameter:11,innerBore:6.72,pitchCircleDiameter:9.5,boltCount:8,boltDiameter:.88,units:"inch"},{standard:"ASME",name:'ASME 8" Class 150',nominalBore:'8"',outerDiameter:13.5,innerBore:8.72,pitchCircleDiameter:11.75,boltCount:8,boltDiameter:.88,units:"inch"}];function wo(n){const t=n.units==="inch",e=Math.max(t?.5:10,n.outerDiameter),o=Math.max(0,Math.min(n.innerBore,e-(t?.2:5))),a=Math.max(o+(t?.1:2),Math.min(n.pitchCircleDiameter,e-(t?.1:2))),s=e/2,r={x:s,y:s},u={segments:[{type:"arc",center:r,radius:s,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:r,radius:s,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],isClosed:!0,isHole:!1},d=[];o>0&&d.push({center:r,radius:o/2});const l=Math.max(1,Math.floor(n.boltCount)),g=Math.max(t?.05:.5,n.boltDiameter/2),f=a/2;for(let I=0;I<l;I++){const b=2*Math.PI*I/l,T=r.x+f*Math.cos(b),S=r.y+f*Math.sin(b);d.push({center:{x:T,y:S},radius:g})}return{name:"Pipe Flange",units:n.units,outerContour:u,innerHoles:d,boundingBox:{minX:0,minY:0,maxX:e,maxY:e,width:e,height:e}}}function Eo(n){const t=n.units==="inch",i=t?.5:10,e=Math.max(i,n.baseWidth),o=Math.max(i,n.height),a=n.hasWeldSnipe?Math.min(n.snipeSize||(t?1:25),Math.min(e,o)*.4):0,s=[];a>0?(s.push({type:"line",start:{x:a,y:0},end:{x:e,y:0}}),s.push({type:"line",start:{x:e,y:0},end:{x:0,y:o}}),s.push({type:"line",start:{x:0,y:o},end:{x:0,y:a}}),s.push({type:"line",start:{x:0,y:a},end:{x:a,y:0}})):(s.push({type:"line",start:{x:0,y:0},end:{x:e,y:0}}),s.push({type:"line",start:{x:e,y:0},end:{x:0,y:o}}),s.push({type:"line",start:{x:0,y:o},end:{x:0,y:0}}));const r={segments:s,isClosed:!0,isHole:!1},c=[];return{name:"Structural Gusset Plate",units:n.units,outerContour:r,innerHoles:c,boundingBox:{minX:0,minY:0,maxX:e,maxY:o,width:e,height:o}}}function Lo(n){const t=n.units==="inch",i=t?4:100,e=Math.max(i,n.width),o=Math.max(i,n.height),a=n.borderMarginMm??(t?1.5:40),s=t?a>8?a/25.4:a:a<5?a*25.4:a,r=Math.max(t?.5:15,Math.min(s,Math.min(e,o)*.25)),u={segments:[{type:"line",start:{x:0,y:0},end:{x:e,y:0}},{type:"line",start:{x:e,y:0},end:{x:e,y:o}},{type:"line",start:{x:e,y:o},end:{x:0,y:o}},{type:"line",start:{x:0,y:o},end:{x:0,y:0}}],isClosed:!0,isHole:!1},d=[],l=n.mountingHoleDiameter??(t?.3125:8),p=t?l>2?l/25.4:l:l<1?l*25.4:l;if(n.hasMountingHoles&&p>0){const D=p/2,A=r/2;d.push({center:{x:A,y:A},radius:D}),d.push({center:{x:e-A,y:A},radius:D}),d.push({center:{x:e-A,y:o-A},radius:D}),d.push({center:{x:A,y:o-A},radius:D}),o>(t?24:600)&&(d.push({center:{x:A,y:o/2},radius:D}),d.push({center:{x:e-A,y:o/2},radius:D}))}const g=n.kickPlateHeightMm??(t?12:300),f=t?g>30?g/25.4:g:g<30?g*25.4:g,I=n.hasKickPlate?Math.max(0,Math.min(o*.4,f)):0,b=e-2*r,T=o-2*r-I,S=Math.max(2,Math.min(12,Math.floor(n.gridColumns||(e>(t?20:500)?4:2)))),w=Math.max(2,Math.min(20,Math.floor(n.gridRows||(o>(t?20:500)?6:3)))),C=b/S,W=T/w,U=t?.2:6;for(let D=0;D<w;D++)for(let A=0;A<S;A++){const v=r+A*C,y=r+I+D*W,h=v+C/2,m=y+W/2,B=t?.15:4,M=Math.max(B,C-U),F=Math.max(B,W-U),_=Math.min(M,F)/2;if(n.patternType==="diamond_lattice"){const $=M/2,k=F/2,L=[{type:"line",start:{x:h,y:m-k},end:{x:h+$,y:m}},{type:"line",start:{x:h+$,y:m},end:{x:h,y:m+k}},{type:"line",start:{x:h,y:m+k},end:{x:h-$,y:m}},{type:"line",start:{x:h-$,y:m},end:{x:h,y:m-k}}];d.push({segments:L,isClosed:!0,isHole:!0})}else if(n.patternType==="islamic_star"){const $=[];for(let L=0;L<16;L++){const O=L%2===0?_:_*.52,Y=L*Math.PI/8,j=(L+1)*Math.PI/8,se=(L+1)%2===0?_:_*.52;$.push({type:"line",start:{x:h+O*Math.cos(Y),y:m+O*Math.sin(Y)},end:{x:h+se*Math.cos(j),y:m+se*Math.sin(j)}})}d.push({segments:$,isClosed:!0,isHole:!0})}else if(n.patternType==="floral_mandala"){const $=[];for(let L=0;L<32;L++){const O=L*2*Math.PI/32,Y=(L+1)*2*Math.PI/32,j=_*(.42+.56*Math.pow(Math.abs(Math.cos(4*O)),1.3)),se=_*(.42+.56*Math.pow(Math.abs(Math.cos(4*Y)),1.3));$.push({type:"line",start:{x:h+j*Math.cos(O),y:m+j*Math.sin(O)},end:{x:h+se*Math.cos(Y),y:m+se*Math.sin(Y)}})}d.push({segments:$,isClosed:!0,isHole:!0})}else if(n.patternType==="tree_of_life"){const $=_*.9,k=_*.42,L=[{type:"line",start:{x:h,y:m-$},end:{x:h+k,y:m}},{type:"line",start:{x:h+k,y:m},end:{x:h,y:m+$}},{type:"line",start:{x:h,y:m+$},end:{x:h-k,y:m}},{type:"line",start:{x:h-k,y:m},end:{x:h,y:m-$}}];d.push({segments:L,isClosed:!0,isHole:!0});const O=.55,Y=_*.45,j=_*.15,se=[{type:"line",start:{x:h-Y,y:m-j-$*O},end:{x:h-Y+k*O,y:m-j}},{type:"line",start:{x:h-Y+k*O,y:m-j},end:{x:h-Y,y:m-j+$*O}},{type:"line",start:{x:h-Y,y:m-j+$*O},end:{x:h-Y-k*O,y:m-j}},{type:"line",start:{x:h-Y-k*O,y:m-j},end:{x:h-Y,y:m-j-$*O}}];d.push({segments:se,isClosed:!0,isHole:!0});const ye=[{type:"line",start:{x:h+Y,y:m-j-$*O},end:{x:h+Y+k*O,y:m-j}},{type:"line",start:{x:h+Y+k*O,y:m-j},end:{x:h+Y,y:m-j+$*O}},{type:"line",start:{x:h+Y,y:m-j+$*O},end:{x:h+Y-k*O,y:m-j}},{type:"line",start:{x:h+Y-k*O,y:m-j},end:{x:h+Y,y:m-j-$*O}}];d.push({segments:ye,isClosed:!0,isHole:!0})}else if(n.patternType==="chevron_herringbone"){const $=M*.45,k=F*.22,L=F*.22,O=[{type:"line",start:{x:h,y:m+L+k},end:{x:h+$,y:m+L}},{type:"line",start:{x:h+$,y:m+L},end:{x:h+$*.8,y:m+L-k*.5}},{type:"line",start:{x:h+$*.8,y:m+L-k*.5},end:{x:h,y:m+L+k*.4}},{type:"line",start:{x:h,y:m+L+k*.4},end:{x:h-$*.8,y:m+L-k*.5}},{type:"line",start:{x:h-$*.8,y:m+L-k*.5},end:{x:h-$,y:m+L}},{type:"line",start:{x:h-$,y:m+L},end:{x:h,y:m+L+k}}];d.push({segments:O,isClosed:!0,isHole:!0});const Y=[{type:"line",start:{x:h,y:m-L+k},end:{x:h+$,y:m-L}},{type:"line",start:{x:h+$,y:m-L},end:{x:h+$*.8,y:m-L-k*.5}},{type:"line",start:{x:h+$*.8,y:m-L-k*.5},end:{x:h,y:m-L+k*.4}},{type:"line",start:{x:h,y:m-L+k*.4},end:{x:h-$*.8,y:m-L-k*.5}},{type:"line",start:{x:h-$*.8,y:m-L-k*.5},end:{x:h-$,y:m-L}},{type:"line",start:{x:h-$,y:m-L},end:{x:h,y:m-L+k}}];d.push({segments:Y,isClosed:!0,isHole:!0})}else if(n.patternType==="voronoi_matrix"){const k=(D*1.618+A*2.718)%(Math.PI*2),L=[];for(let O=0;O<6;O++){const Y=O*2*Math.PI/6+k*.15,j=(O+1)*2*Math.PI/6+k*.15,se=_*(.75+.22*Math.sin(O*2.3+k)),ye=_*(.75+.22*Math.sin((O+1)*2.3+k));L.push({type:"line",start:{x:h+se*Math.cos(Y),y:m+se*Math.sin(Y)},end:{x:h+ye*Math.cos(j),y:m+ye*Math.sin(j)}})}d.push({segments:L,isClosed:!0,isHole:!0})}else if(n.patternType==="honeycomb"){const $=[];for(let k=0;k<6;k++){const L=k*Math.PI/3,O=(k+1)*Math.PI/3;$.push({type:"line",start:{x:h+_*Math.cos(L),y:m+_*Math.sin(L)},end:{x:h+_*Math.cos(O),y:m+_*Math.sin(O)}})}d.push({segments:$,isClosed:!0,isHole:!0})}else{const $=M*.4,k=F*.42,L=[{type:"line",start:{x:h-$,y:m-k},end:{x:h+$,y:m-k}},{type:"line",start:{x:h+$,y:m-k},end:{x:h+$,y:m+k}},{type:"line",start:{x:h+$,y:m+k},end:{x:h-$,y:m+k}},{type:"line",start:{x:h-$,y:m+k},end:{x:h-$,y:m-k}}];d.push({segments:L,isClosed:!0,isHole:!0})}}return{name:"Architectural CNC Jali / Gate Panel",units:n.units,outerContour:u,innerHoles:d,boundingBox:{minX:0,minY:0,maxX:e,maxY:o,width:e,height:o}}}function To(n){const t=n.units==="inch",i=t?.75:20,e=Math.max(i,n.baseWidth),o=Math.max(i,n.height),a=Math.min(n.chamferTop,o-(t?.2:5)),s=Math.min(n.chamferRight,e-(t?.2:5)),c={segments:[{type:"line",start:{x:0,y:0},end:{x:e,y:0}},{type:"line",start:{x:e,y:0},end:{x:e,y:o-a}},{type:"line",start:{x:e,y:o-a},end:{x:e-s,y:o}},{type:"line",start:{x:e-s,y:o},end:{x:0,y:o}},{type:"line",start:{x:0,y:o},end:{x:0,y:0}}],isClosed:!0,isHole:!1},u=[];{const d=n.baseHoleCount,l=n.baseHoleDiameter/2,p=e*.7/(d+1),g=Math.min(t?.6:15,(o-a)/2);for(let f=1;f<=d;f++)u.push({center:{x:p*f,y:g},radius:l})}{const d=n.uprightHoleCount,l=n.uprightHoleDiameter/2,p=o*.7/(d+1),g=Math.min(t?.6:15,(e-s)/2);for(let f=1;f<=d;f++)u.push({center:{x:g,y:p*f},radius:l})}{const d=Math.min(e,o)*.35,l=n.lighteningHoleDiameter||d;u.push({center:{x:e*.38,y:o*.38},radius:l/2})}return{name:"Mounting Gusset & Bracket",units:n.units,outerContour:c,innerHoles:u,boundingBox:{minX:0,minY:0,maxX:e,maxY:o,width:e,height:o}}}function Do(n){const t=n.units==="inch",e=Math.max(t?.5:10,n.outerDiameter),o=Math.max(0,Math.min(n.innerDiameter,e-(t?.1:2))),a=e/2,s={x:a,y:a},c={segments:[{type:"arc",center:s,radius:a,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:s,radius:a,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],isClosed:!0,isHole:!1},u=[];if(o>0&&u.push({center:s,radius:o/2}),n.boltDiameter&&n.pitchCircleDiameter){const d=Math.max(1,n.boltCount),l=n.boltDiameter/2,p=n.pitchCircleDiameter/2;for(let g=0;g<d;g++){const f=2*Math.PI*g/d;u.push({center:{x:s.x+p*Math.cos(f),y:s.y+p*Math.sin(f)},radius:l})}}return{name:"Circular Disc / Washer",units:n.units,outerContour:c,innerHoles:u,boundingBox:{minX:0,minY:0,maxX:e,maxY:e,width:e,height:e}}}function Fo(n){if(n.type==="line"){const t=n.end.x-n.start.x,i=n.end.y-n.start.y;return Math.sqrt(t*t+i*i)}else if(n.type==="arc"){let t=Math.abs(n.endAngle-n.startAngle);return n.counterClockwise&&(t=2*Math.PI-t),n.radius*t}return 0}function _i(n){if(!n.segments||n.segments.length===0)return 0;let t=0;for(const i of n.segments)if(i.type==="line")t+=i.start.x*i.end.y-i.end.x*i.start.y;else if(i.type==="arc"){const e={x:i.center.x+i.radius*Math.cos(i.startAngle),y:i.center.y+i.radius*Math.sin(i.startAngle)},o={x:i.center.x+i.radius*Math.cos(i.endAngle),y:i.center.y+i.radius*Math.sin(i.endAngle)};t+=e.x*o.y-o.x*e.y;let a=Math.abs(i.endAngle-i.startAngle);i.counterClockwise&&(a=2*Math.PI-a);const s=.5*i.radius*i.radius*(a-Math.sin(a));t+=i.counterClockwise?-s*2:s*2}return Math.abs(t)/2}function yn(n){let t=0;for(const i of n.segments)t+=Fo(i);return t}function ft(n,t,i,e){const a=n.units==="inch"?25.4:1,s=new Set(e||n.deselectedHoleIndices||[]),r=yn(n.outerContour);let c=0,u=0,d=0;for(let B=0;B<n.innerHoles.length;B++){if(s.has(B))continue;const M=n.innerHoles[B];if(u+=1,"radius"in M){const F=M.radius;c+=2*Math.PI*F,d+=Math.PI*F*F}else{const F=M;c+=yn(F),d+=_i(F)}}const l=r+c,p=1+u,g=l*a,f=g/25.4,I=n.boundingBox.width*a,b=n.boundingBox.height*a,T=I/25.4,S=b/25.4;let w=_i(n.outerContour);if(w<=0&&(w=n.boundingBox.width*n.boundingBox.height,n.name.includes("Flange")||n.name.includes("Disc"))){const B=n.boundingBox.width/2;w=Math.PI*B*B}const C=w*.85,W=Math.min(d,C),D=Math.max(w*.15,w-W)*(a*a),A=D/(25.4*25.4),h=D/100*(t/10)*i/1e3,m=h*2.20462262;return{totalCutLengthMm:Math.round(g*10)/10,totalCutLengthInches:Math.round(f*100)/100,pierceCount:p,boundingBoxWidthMm:Math.round(I*10)/10,boundingBoxHeightMm:Math.round(b*10)/10,boundingBoxWidthInches:Math.round(T*100)/100,boundingBoxHeightInches:Math.round(S*100)/100,netAreaSqMm:Math.round(D),netAreaSqInches:Math.round(A*100)/100,theoreticalWeightKg:Math.round(h*100)/100,theoreticalWeightLbs:Math.round(m*100)/100}}function Ao(n,t){const i=t==="inch"?25.4:1;if("radius"in n)return n.radius*2*i;const e=n;if(!e.segments||e.segments.length===0)return 0;let o=1/0,a=-1/0,s=1/0,r=-1/0;for(const c of e.segments)c.type==="line"?(o=Math.min(o,c.start.x,c.end.x),a=Math.max(a,c.start.x,c.end.x),s=Math.min(s,c.start.y,c.end.y),r=Math.max(r,c.start.y,c.end.y)):(o=Math.min(o,c.center.x-c.radius),a=Math.max(a,c.center.x+c.radius),s=Math.min(s,c.center.y-c.radius),r=Math.max(r,c.center.y+c.radius));return isFinite(o)?Math.min(a-o,r-s)*i:0}function Jt(n,t,i=.95){if(!n.innerHoles||n.innerHoles.length===0)return[];const e=[],o=t*i;for(let a=0;a<n.innerHoles.length;a++){const s=Ao(n.innerHoles[a],n.units);s>0&&s<o&&e.push(a)}return e}function Ro(n){return{minX:n.center.x-n.radius,minY:n.center.y-n.radius,maxX:n.center.x+n.radius,maxY:n.center.y+n.radius}}function Qn(n){let t=1/0,i=1/0,e=-1/0,o=-1/0;for(const a of n.segments)a.type==="line"?(t=Math.min(t,a.start.x,a.end.x),i=Math.min(i,a.start.y,a.end.y),e=Math.max(e,a.start.x,a.end.x),o=Math.max(o,a.start.y,a.end.y)):(t=Math.min(t,a.center.x-a.radius),i=Math.min(i,a.center.y-a.radius),e=Math.max(e,a.center.x+a.radius),o=Math.max(o,a.center.y+a.radius));return{minX:t,minY:i,maxX:e,maxY:o}}function No(n,t){const i=Math.max(0,Math.max(n.minX-t.maxX,t.minX-n.maxX)),e=Math.max(0,Math.max(n.minY-t.maxY,t.minY-n.maxY));return Math.sqrt(i*i+e*e)}function xn(n){const t=[];for(const i of n.segments)if(i.type==="line")t.push({p1:i.start,p2:i.end});else{let e=i.counterClockwise?i.endAngle-i.startAngle:i.startAngle-i.endAngle;e<=0&&(e+=2*Math.PI);const o=Math.max(8,Math.ceil(e/(Math.PI/4)));let a={x:i.center.x+i.radius*Math.cos(i.startAngle),y:i.center.y+i.radius*Math.sin(i.startAngle)};for(let s=1;s<=o;s++){const r=i.counterClockwise?i.startAngle+e*s/o:i.startAngle-e*s/o,c={x:i.center.x+i.radius*Math.cos(r),y:i.center.y+i.radius*Math.sin(r)};t.push({p1:a,p2:c}),a=c}}return t}function Qt(n,t,i){const e=i.x-t.x,o=i.y-t.y,a=e*e+o*o;if(a<1e-12)return Math.sqrt((n.x-t.x)**2+(n.y-t.y)**2);let s=((n.x-t.x)*e+(n.y-t.y)*o)/a;s=Math.max(0,Math.min(1,s));const r=t.x+s*e,c=t.y+s*o;return Math.sqrt((n.x-r)**2+(n.y-c)**2)}function Ho(n,t,i,e){function o(d,l,p){return(p.y-d.y)*(l.x-d.x)-(l.y-d.y)*(p.x-d.x)}function a(d,l,p){return Math.min(l.x,p.x)-1e-7<=d.x&&d.x<=Math.max(l.x,p.x)+1e-7&&Math.min(l.y,p.y)-1e-7<=d.y&&d.y<=Math.max(l.y,p.y)+1e-7}const s=o(n,t,i),r=o(n,t,e),c=o(i,e,n),u=o(i,e,t);return!!((s>1e-9&&r<-1e-9||s<-1e-9&&r>1e-9)&&(c>1e-9&&u<-1e-9||c<-1e-9&&u>1e-9)||Math.abs(s)<=1e-9&&a(i,n,t)||Math.abs(r)<=1e-9&&a(e,n,t)||Math.abs(c)<=1e-9&&a(n,i,e)||Math.abs(u)<=1e-9&&a(t,i,e))}function Wo(n,t){return Ho(n.p1,n.p2,t.p1,t.p2)?0:Math.min(Qt(n.p1,t.p1,t.p2),Qt(n.p2,t.p1,t.p2),Qt(t.p1,n.p1,n.p2),Qt(t.p2,n.p1,n.p2))}function oi(n,t){let i=!1;for(const e of t){const o=e.p1,a=e.p2;if(o.y>n.y!=a.y>n.y){const s=o.x+(n.y-o.y)*(a.x-o.x)/(a.y-o.y);n.x<s&&(i=!i)}}return i}function Oi(n,t){const i=xn(t);if(oi(n.center,i))return 0;let e=1/0;for(const o of i){const a=Qt(n.center,o.p1,o.p2)-n.radius;a<e&&(e=a)}return e}function _o(n,t){const i=xn(n),e=xn(t);let o=1/0;for(const a of i)for(const s of e){const r=Wo(a,s);if(r<=1e-4)return 0;r<o&&(o=r)}return i.length>0&&oi(i[0].p1,e)||e.length>0&&oi(e[0].p1,i)?0:o}function Oo(n,t){const i="radius"in n,e="radius"in t;if(i&&e){const o=n,a=t,s=o.center.x-a.center.x,r=o.center.y-a.center.y;return Math.sqrt(s*s+r*r)-(o.radius+a.radius)}else return i&&!e?Oi(n,t):!i&&e?Oi(t,n):_o(n,t)}function Go(n,t){const i=[],o=n.units==="inch"?25.4:1,a=n.outerContour.segments;if(a.length===0)i.push({rule:"Contour Existence",severity:"error",message:"Part has no outer cutting contour."});else{const C=a[0],W=a[a.length-1],U=C.type==="line"?C.start:{x:C.center.x+C.radius*Math.cos(C.startAngle),y:C.center.y+C.radius*Math.sin(C.startAngle)},D=W.type==="line"?W.end:{x:W.center.x+W.radius*Math.cos(W.endAngle),y:W.center.y+W.radius*Math.sin(W.endAngle)},A=Math.sqrt((D.x-U.x)**2+(D.y-U.y)**2)*o;A>.1&&i.push({rule:"Closed Polyline Rule",severity:"error",message:`Outer contour is not closed (gap is ${A.toFixed(2)} mm). Laser CAM will reject open contours.`,actualValue:A,thresholdValue:.1})}const s=new Set(n.deselectedHoleIndices||[]);for(let C=0;C<n.innerHoles.length;C++){if(s.has(C))continue;const W=n.innerHoles[C];if("radius"in W){const D=W.radius*2*o;D<t&&i.push({rule:"Piercing Blowout Rule",severity:"error",message:`Hole #${C+1} diameter (${D.toFixed(1)} mm) is less than sheet thickness (${t.toFixed(1)} mm). Fiber laser piercing will blow out or damage the lens nozzle.`,actualValue:D,thresholdValue:t,holeIndex:C})}else{const D=Qn(W),A=Math.min(D.maxX-D.minX,D.maxY-D.minY)*o;A<t&&i.push({rule:"Piercing Blowout Rule",severity:"error",message:`Cutout / Slot #${C+1} minimum span (${A.toFixed(1)} mm) is less than sheet thickness (${t.toFixed(1)} mm). Fiber laser piercing will blow out.`,actualValue:A,thresholdValue:t,holeIndex:C})}}const r=t*1.5,c=n.boundingBox,u=(n.name.toLowerCase().includes("disc")||n.name.toLowerCase().includes("flange")||n.name.toLowerCase().includes("washer"))&&Math.abs(c.width-c.height)<.01,d=c.width/2,l={x:(c.minX+c.maxX)/2,y:(c.minY+c.maxY)/2};for(let C=0;C<n.innerHoles.length;C++){if(s.has(C))continue;const W=n.innerHoles[C];let U;if("radius"in W){const D=W,A=D.center.x,v=D.center.y,y=D.radius;if(u){const h=Math.sqrt((A-l.x)**2+(v-l.y)**2);U=(d-(h+y))*o}else{const h=(A-y-c.minX)*o,m=(c.maxX-(A+y))*o,B=(v-y-c.minY)*o,M=(c.maxY-(v+y))*o;U=Math.min(h,m,B,M)}}else{const D=W,A=Qn(D);if(u){const v=xn(D);let y=0;for(const h of v){const m=Math.sqrt((h.p1.x-l.x)**2+(h.p1.y-l.y)**2);m>y&&(y=m)}U=(d-y)*o}else{const v=(A.minX-c.minX)*o,y=(c.maxX-A.maxX)*o,h=(A.minY-c.minY)*o,m=(c.maxY-A.maxY)*o;U=Math.min(v,y,h,m)}}U<=0?i.push({rule:"Edge Margin Distance Rule",severity:"error",message:`Hole #${C+1} extends outside the outer cutting contour. Cutout breaches the part perimeter.`,actualValue:U,thresholdValue:0,holeIndex:C}):U<r&&i.push({rule:"Edge Margin Distance Rule",severity:"warning",message:`Hole #${C+1} is too close to the outer edge (${U.toFixed(1)} mm vs safe margin ${r.toFixed(1)} mm). Laser heat may warp or melt the edge.`,actualValue:U,thresholdValue:r,holeIndex:C})}const p=t*1.5,g=p/o,f=n.innerHoles.map(C=>"radius"in C?Ro(C):Qn(C)),I=n.innerHoles.length;for(let C=0;C<I;C++)if(!s.has(C))for(let W=C+1;W<I;W++){if(s.has(W))continue;const U=f[C],D=f[W];if(No(U,D)>g)continue;const v=n.innerHoles[C],y=n.innerHoles[W],h=C===0&&(n.name.toLowerCase().includes("disc")||n.name.toLowerCase().includes("flange")||n.name.toLowerCase().includes("washer")),m=h?"Inner Bore (Hole #1)":`Hole #${C+1}`,M=Oo(v,y)*o;M<=.05?i.push({rule:"Cutout Overlap / Collision Rule",severity:"error",message:`Hole #${W+1} collides/overlaps with ${m}. Overlapping cutouts cause laser nozzle blowout, dross, and mechanical failure.`,actualValue:M,thresholdValue:0,holeIndex:W,relatedHoleIndex:h?void 0:C}):M<p&&i.push({rule:"Hole-to-Hole Bridge Rule",severity:"warning",message:`Hole #${W+1} is too close to ${m} (bridge is ${M.toFixed(1)} mm vs safe margin ${p.toFixed(1)} mm). Laser heat will warp or burn out the thin metal bridge.`,actualValue:M,thresholdValue:p,holeIndex:W,relatedHoleIndex:h?void 0:C})}const b=c.width*o,T=c.height*o;b>4e3||T>2e3?i.push({rule:"Bed Size Limit",severity:"error",message:`Part dimensions (${b.toFixed(0)} x ${T.toFixed(0)} mm) exceed standard sheet metal laser bed size (3000 x 1500 mm / 10 x 5 ft). Check your unit selection.`}):(b<5||T<5)&&i.push({rule:"Minimum Part Size",severity:"warning",message:`Part size (${b.toFixed(1)} x ${T.toFixed(1)} mm) is extremely small. Small parts may fall through laser bed slats into the slag tray.`});const S=i.some(C=>C.severity==="error"),w=i.some(C=>C.severity==="warning");return{isManufacturable:!S,hasWarnings:w,issues:i}}const kt=[{id:"standard",name:"Standard CAM Layers (CUT_OUTER / CUT_INNER / MARKING)",outerLayerName:"CUT_OUTER",outerColor:7,innerLayerName:"CUT_INNER",innerColor:2,etchLayerName:"MARKING",etchColor:4},{id:"cypcut",name:"CypCut (FSCUT / Global Fiber Laser)",outerLayerName:"0",outerColor:7,innerLayerName:"1",innerColor:2,etchLayerName:"2",etchColor:4},{id:"trumpf",name:"Trumpf TruTops (Boost / Classic)",outerLayerName:"OUTER",outerColor:1,innerLayerName:"INNER",innerColor:3,etchLayerName:"MARK",etchColor:4},{id:"sigmanest",name:"SigmaNEST / ProNest",outerLayerName:"CUT_EXTERIOR",outerColor:1,innerLayerName:"CUT_INTERIOR",innerColor:2,etchLayerName:"SCRIBE",etchColor:5},{id:"bysoft",name:"Bystronic BySoft / ByVision",outerLayerName:"CUT_OUTER",outerColor:7,innerLayerName:"CUT_INNER",innerColor:3,etchLayerName:"ETCH",etchColor:4},{id:"generic",name:"Universal Machine CAM",outerLayerName:"0_CUT_OUTER",outerColor:7,innerLayerName:"1_CUT_INNER",innerColor:2,etchLayerName:"2_MARKING",etchColor:4}];function Uo(n,t=1e-4){if(!n||n.length===0)return[];const i=[];for(const s of n)if(s.type==="line"){const r=s.end.x-s.start.x,c=s.end.y-s.start.y;Math.hypot(r,c)>=t&&i.push(s)}else s.type==="arc"&&s.radius>=t&&Math.abs(s.endAngle-s.startAngle)>=t&&i.push(s);const e=[];for(const s of i)e.some(c=>{if(s.type==="line"&&c.type==="line"){const u=Math.hypot(s.start.x-c.start.x,s.start.y-c.start.y)<t&&Math.hypot(s.end.x-c.end.x,s.end.y-c.end.y)<t,d=Math.hypot(s.start.x-c.end.x,s.start.y-c.end.y)<t&&Math.hypot(s.end.x-c.start.x,s.end.y-c.start.y)<t;return u||d}if(s.type==="arc"&&c.type==="arc"){const u=Math.hypot(s.center.x-c.center.x,s.center.y-c.center.y)<t,d=Math.abs(s.radius-c.radius)<t,l=Math.abs(s.startAngle-c.startAngle)<t&&Math.abs(s.endAngle-c.endAngle)<t;return u&&d&&l}return!1})||e.push(s);if(e.length<=1)return e;const o=[];let a=e[0];for(let s=1;s<e.length;s++){const r=e[s];if(a.type==="line"&&r.type==="line"){const c=a.end.x-a.start.x,u=a.end.y-a.start.y,d=Math.hypot(c,u),l=r.end.x-r.start.x,p=r.end.y-r.start.y,g=Math.hypot(l,p);if(Math.hypot(a.end.x-r.start.x,a.end.y-r.start.y)<t&&d>0&&g>0){const I=(c*p-u*l)/(d*g),b=(c*l+u*p)/(d*g);if(Math.abs(I)<1e-4&&b>.999){a={type:"line",start:{...a.start},end:{...r.end}};continue}}}o.push(a),a=r}return o.push(a),o}function qo(n,t=kt[0]){const e=n.units==="inch"?1:4,o=[],a=(s,r)=>{o.push(s.toString()),o.push(r.toString())};a(0,"SECTION"),a(2,"HEADER"),a(9,"$ACADVER"),a(1,"AC1024"),a(9,"$INSUNITS"),a(70,e),a(9,"$EXTMIN"),a(10,n.boundingBox.minX.toFixed(4)),a(20,n.boundingBox.minY.toFixed(4)),a(30,"0.0"),a(9,"$EXTMAX"),a(10,n.boundingBox.maxX.toFixed(4)),a(20,n.boundingBox.maxY.toFixed(4)),a(30,"0.0"),a(0,"ENDSEC"),a(0,"SECTION"),a(2,"TABLES"),a(0,"TABLE"),a(2,"LAYER"),a(70,3),a(0,"LAYER"),a(2,t.outerLayerName),a(70,0),a(62,t.outerColor),a(6,"CONTINUOUS"),a(0,"LAYER"),a(2,t.innerLayerName),a(70,0),a(62,t.innerColor),a(6,"CONTINUOUS"),a(0,"LAYER"),a(2,t.etchLayerName),a(70,0),a(62,t.etchColor),a(6,"CONTINUOUS"),a(0,"ENDTAB"),a(0,"ENDSEC"),a(0,"SECTION"),a(2,"ENTITIES"),Gi(n.outerContour,t.outerLayerName,t.outerColor,a);for(const s of n.innerHoles)if("radius"in s){const r=s;ro(r.center.x,r.center.y,r.radius,t.innerLayerName,t.innerColor,a)}else Gi(s,t.innerLayerName,t.innerColor,a);return a(0,"ENDSEC"),a(0,"EOF"),o.join(`\r
`)+`\r
`}function ro(n,t,i,e,o,a){a(0,"LWPOLYLINE"),a(8,e),a(62,o),a(90,2),a(70,1),a(10,(n-i).toFixed(4)),a(20,t.toFixed(4)),a(42,"1.0"),a(10,(n+i).toFixed(4)),a(20,t.toFixed(4)),a(42,"1.0")}function Gi(n,t,i,e){const o=Uo(n.segments);if(o.length!==0){if(o.length===2&&o[0].type==="arc"&&o[1].type==="arc"&&Math.abs(o[0].radius-o[1].radius)<1e-4){const a=o[0];ro(a.center.x,a.center.y,a.radius,t,i,e);return}e(0,"LWPOLYLINE"),e(8,t),e(62,i),e(90,o.length),e(70,n.isClosed?1:0);for(const a of o)if(a.type==="line")e(10,a.start.x.toFixed(4)),e(20,a.start.y.toFixed(4)),e(42,"0.0");else if(a.type==="arc"){const s=a.center.x+a.radius*Math.cos(a.startAngle),r=a.center.y+a.radius*Math.sin(a.startAngle);let c=a.endAngle-a.startAngle;a.counterClockwise?c<0&&(c+=2*Math.PI):c>0&&(c-=2*Math.PI);const u=Math.tan(c/4);e(10,s.toFixed(4)),e(20,r.toFixed(4)),e(42,u.toFixed(6))}}}const zo=["defpoints","dimension","dim","text","title","border","hatch","notes","anno"];function wt(n){const t=n.toLowerCase();return zo.some(i=>t.includes(i))}function Kn(n,t){return Math.sqrt((n.x-t.x)**2+(n.y-t.y)**2)}function jo(n,t,i){const e=t.x-n.x,o=t.y-n.y,a=Math.sqrt(e*e+o*o);if(a<1e-6||Math.abs(i)<1e-6)return{type:"line",start:n,end:t};const s=a/2*((1+i*i)/(2*Math.abs(i))),r=(n.x+t.x)/2,c=(n.y+t.y)/2,u=-o/a,d=e/a,l=a/2*((1-i*i)/(2*i)),p=r+u*l,g=c+d*l;let f=Math.atan2(n.y-g,n.x-p),I=Math.atan2(t.y-g,t.x-p);return f<0&&(f+=2*Math.PI),I<0&&(I+=2*Math.PI),{type:"arc",center:{x:p,y:g},radius:s,startAngle:f,endAngle:I,counterClockwise:i>0}}function Ui(n,t=8){const i=[];for(const e of n)if(e.type==="line")i.push({x:e.start.x,y:e.start.y});else if(e.type==="arc"){let o=e.endAngle-e.startAngle;e.counterClockwise&&o<0&&(o+=2*Math.PI),!e.counterClockwise&&o>0&&(o-=2*Math.PI);for(let a=0;a<t;a++){const s=a/t,r=e.startAngle+o*s;i.push({x:e.center.x+e.radius*Math.cos(r),y:e.center.y+e.radius*Math.sin(r)})}}return i}function qi(n,t){let i=!1;const e=t.length;for(let o=0,a=e-1;o<e;a=o++){const s=t[o].x,r=t[o].y,c=t[a].x,u=t[a].y;r>n.y!=u>n.y&&n.x<(c-s)*(n.y-r)/(u-r)+s&&(i=!i)}return i}function co(n){var U,D,A,v;const t=n.split(/\r?\n/);let i="inch",e=!1;const o=[],a=[],s=[],r=[];let c=!1,u=!1,d="",l=0;for(;l<t.length-1;){const y=parseInt(t[l].trim(),10),h=t[l+1].trim();if(l+=2,y===0&&h==="SECTION"){const m=parseInt((U=t[l])==null?void 0:U.trim(),10),B=(D=t[l+1])==null?void 0:D.trim();m===2&&B==="HEADER"&&(u=!0),m===2&&B==="ENTITIES"&&(c=!0)}else y===0&&h==="ENDSEC"&&(u=!1,c=!1);if(u){if(y===9)d=h;else if(d==="$INSUNITS"&&y===70){const m=parseInt(h,10);m===1?(i="inch",e=!0):m===4&&(i="mm",e=!0)}}if(c&&y===0){if(h==="LINE"){const m={x1:0,y1:0,x2:0,y2:0,layer:"0"};for(;l<t.length-1&&parseInt(t[l].trim(),10)!==0;){const B=parseInt(t[l].trim(),10),M=t[l+1].trim();l+=2,B===8?m.layer=M:B===10?m.x1=parseFloat(M):B===20?m.y1=parseFloat(M):B===11?m.x2=parseFloat(M):B===21&&(m.y2=parseFloat(M))}wt(m.layer)||o.push(m)}else if(h==="CIRCLE"){const m={cx:0,cy:0,r:0,layer:"0"};for(;l<t.length-1&&parseInt(t[l].trim(),10)!==0;){const B=parseInt(t[l].trim(),10),M=t[l+1].trim();l+=2,B===8?m.layer=M:B===10?m.cx=parseFloat(M):B===20?m.cy=parseFloat(M):B===40&&(m.r=parseFloat(M))}wt(m.layer)||a.push(m)}else if(h==="ARC"){const m={cx:0,cy:0,r:0,sa:0,ea:0,layer:"0"};for(;l<t.length-1&&parseInt(t[l].trim(),10)!==0;){const B=parseInt(t[l].trim(),10),M=t[l+1].trim();l+=2,B===8?m.layer=M:B===10?m.cx=parseFloat(M):B===20?m.cy=parseFloat(M):B===40?m.r=parseFloat(M):B===50?m.sa=parseFloat(M)*Math.PI/180:B===51&&(m.ea=parseFloat(M)*Math.PI/180)}wt(m.layer)||s.push(m)}else if(h==="LWPOLYLINE"){const m={vertices:[],isClosed:!1,layer:"0"};let B=null;for(;l<t.length-1&&parseInt(t[l].trim(),10)!==0;){const M=parseInt(t[l].trim(),10),F=t[l+1].trim();l+=2,M===8?m.layer=F:M===70?m.isClosed=(parseInt(F,10)&1)===1:M===10?(B={x:parseFloat(F),y:0},m.vertices.push(B)):M===20?B&&(B.y=parseFloat(F)):M===42&&B&&(B.bulge=parseFloat(F))}!wt(m.layer)&&m.vertices.length>=2&&r.push(m)}else if(h==="POLYLINE"){const m={vertices:[],isClosed:!1,layer:"0"};for(;l<t.length-1&&parseInt(t[l].trim(),10)!==0;){const B=parseInt(t[l].trim(),10),M=t[l+1].trim();l+=2,B===8?m.layer=M:B===70&&(m.isClosed=(parseInt(M,10)&1)===1)}for(;l<t.length-1;){const B=parseInt((A=t[l])==null?void 0:A.trim(),10),M=(v=t[l+1])==null?void 0:v.trim();if(B===0){if(M==="SEQEND"){l+=2;break}if(M==="VERTEX"){l+=2;let F=0,_=0,$;for(;l<t.length-1&&parseInt(t[l].trim(),10)!==0;){const k=parseInt(t[l].trim(),10),L=t[l+1].trim();l+=2,k===10?F=parseFloat(L):k===20?_=parseFloat(L):k===42&&($=parseFloat(L))}m.vertices.push({x:F,y:_,bulge:$});continue}break}l+=2}!wt(m.layer)&&m.vertices.length>=2&&r.push(m)}else if(h==="SPLINE"){const m=[];let B=!1,M="0",F=0,_=0,$=!1,k=!1;for(;l<t.length-1&&parseInt(t[l].trim(),10)!==0;){const L=parseInt(t[l].trim(),10),O=t[l+1].trim();l+=2,L===8?M=O:L===70?B=(parseInt(O,10)&1)===1:L===10||L===11?($&&k&&(m.push({x:F,y:_}),k=!1),F=parseFloat(O),$=!0):(L===20||L===21)&&(_=parseFloat(O),k=!0)}if($&&k&&m.push({x:F,y:_}),!wt(M)&&m.length>=2){const L=m.map(O=>({x:O.x,y:O.y}));r.push({vertices:L,isClosed:B,layer:M})}}}}const p=[];for(const y of r){if(y.vertices.length<2)continue;const h=[],m=y.vertices.length,B=y.isClosed?m:m-1;for(let O=0;O<B;O++){const Y=y.vertices[O],j=y.vertices[(O+1)%m];Y.bulge&&Math.abs(Y.bulge)>1e-5?h.push(jo(Y,j,Y.bulge)):h.push({type:"line",start:{x:Y.x,y:Y.y},end:{x:j.x,y:j.y}})}const M=Ui(h);let F=1/0,_=1/0,$=-1/0,k=-1/0;for(const O of M)F=Math.min(F,O.x),$=Math.max($,O.x),_=Math.min(_,O.y),k=Math.max(k,O.y);const L={minX:F,minY:_,maxX:$,maxY:k,width:Math.max(1,$-F),height:Math.max(1,k-_)};p.push({segments:h,polygon:M,bbox:L,bboxArea:L.width*L.height})}const g=[];for(const y of o){if(Math.hypot(y.x2-y.x1,y.y2-y.y1)<1e-4)continue;g.some(B=>{if(B.kind!=="line")return!1;const M=Math.hypot(B.start.x-y.x1,B.start.y-y.y1)<1e-4&&Math.hypot(B.end.x-y.x2,B.end.y-y.y2)<1e-4,F=Math.hypot(B.start.x-y.x2,B.start.y-y.y2)<1e-4&&Math.hypot(B.end.x-y.x1,B.end.y-y.y1)<1e-4;return M||F})||g.push({kind:"line",start:{x:y.x1,y:y.y1},end:{x:y.x2,y:y.y2},visited:!1})}for(const y of s){const h={x:y.cx+y.r*Math.cos(y.sa),y:y.cy+y.r*Math.sin(y.sa)},m={x:y.cx+y.r*Math.cos(y.ea),y:y.cy+y.r*Math.sin(y.ea)};g.push({kind:"arc",start:h,end:m,center:{x:y.cx,y:y.cy},radius:y.r,startAngle:y.sa,endAngle:y.ea,counterClockwise:!0,visited:!1})}const f=.35;for(let y=0;y<g.length;y++){if(g[y].visited)continue;const h=[],m=g[y];m.visited=!0;const B={...m.start};let M={...m.end};m.kind==="line"?h.push({type:"line",start:m.start,end:m.end}):h.push({type:"arc",center:m.center,radius:m.radius,startAngle:m.startAngle,endAngle:m.endAngle,counterClockwise:m.counterClockwise});let F=!0;for(;F;){if(F=!1,Kn(M,B)<=f&&h.length>=2){const _=h[h.length-1];_.type==="line"&&(_.end={...B});break}for(let _=0;_<g.length;_++){if(g[_].visited)continue;const $=g[_];if(Kn(M,$.start)<=f){$.visited=!0,$.kind==="line"?h.push({type:"line",start:{...M},end:$.end}):h.push({type:"arc",center:$.center,radius:$.radius,startAngle:$.startAngle,endAngle:$.endAngle,counterClockwise:$.counterClockwise}),M={...$.end},F=!0;break}else if(Kn(M,$.end)<=f){$.visited=!0,$.kind==="line"?h.push({type:"line",start:{...M},end:$.start}):h.push({type:"arc",center:$.center,radius:$.radius,startAngle:$.endAngle,endAngle:$.startAngle,counterClockwise:!$.counterClockwise}),M={...$.start},F=!0;break}}}if(h.length>0){const _=Ui(h);let $=1/0,k=1/0,L=-1/0,O=-1/0;for(const j of _)$=Math.min($,j.x),L=Math.max(L,j.x),k=Math.min(k,j.y),O=Math.max(O,j.y);const Y={minX:$,minY:k,maxX:L,maxY:O,width:Math.max(1,L-$),height:Math.max(1,O-k)};p.push({segments:h,polygon:_,bbox:Y,bboxArea:Y.width*Y.height})}}const I=new Map;for(let y=0;y<p.length;y++){const h=p[y];let m=-1,B=1/0;for(let M=0;M<p.length;M++){if(y===M)continue;const F=p[M];if(F.bbox.minX<=h.bbox.minX+.1&&F.bbox.maxX>=h.bbox.maxX-.1&&F.bbox.minY<=h.bbox.minY+.1&&F.bbox.maxY>=h.bbox.maxY-.1&&F.bboxArea>h.bboxArea){const _=h.polygon[0]||{x:(h.bbox.minX+h.bbox.maxX)/2,y:(h.bbox.minY+h.bbox.maxY)/2};qi(_,F.polygon)&&F.bboxArea<B&&(B=F.bboxArea,m=M)}}m!==-1&&I.set(y,m)}const b=[],T=new Map;for(let y=0;y<p.length;y++)I.has(y)||(b.push(y),T.set(y,[]));for(let y=0;y<p.length;y++)if(I.has(y)){const h=I.get(y);T.has(h)&&T.get(h).push(p[y].segments)}const S=new Map,w=[];for(const y of b)S.set(y,[]);for(const y of a){const h={x:y.cx,y:y.cy};let m=-1,B=1/0;for(const M of b){const F=p[M];y.cx>=F.bbox.minX&&y.cx<=F.bbox.maxX&&y.cy>=F.bbox.minY&&y.cy<=F.bbox.maxY&&qi(h,F.polygon)&&F.bboxArea<B&&(B=F.bboxArea,m=M)}m!==-1?S.get(m).push({center:h,radius:y.r}):w.push({center:h,radius:y.r})}const C=[];for(let y=0;y<b.length;y++){const h=b[y],m=p[h],B=[],M=T.get(h)||[];for(const _ of M)_.length===2&&_[0].type==="arc"&&_[1].type==="arc"&&Math.abs(_[0].radius-_[1].radius)<.001&&Math.hypot(_[0].center.x-_[1].center.x,_[0].center.y-_[1].center.y)<.001?B.push({center:{..._[0].center},radius:_[0].radius}):B.push({segments:_,isClosed:!0,isHole:!0});const F=S.get(h)||[];for(const _ of F)B.push(_);C.push({name:b.length>1?`Sanitized Part #${y+1}`:"Sanitized CNC Drawing",units:i,outerContour:{segments:m.segments,isClosed:!0,isHole:!1},innerHoles:B,boundingBox:m.bbox})}if(C.length===0&&w.length>0){const y=[...w].sort((F,_)=>_.radius-F.radius),h=y[0],m=[{type:"arc",center:{...h.center},radius:h.radius,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:{...h.center},radius:h.radius,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],B=y.slice(1),M={minX:h.center.x-h.radius,minY:h.center.y-h.radius,maxX:h.center.x+h.radius,maxY:h.center.y+h.radius,width:h.radius*2,height:h.radius*2};C.push({name:"Sanitized CNC Disc",units:i,outerContour:{segments:m,isClosed:!0,isHole:!1},innerHoles:B,boundingBox:M})}if(C.length>1){C.sort((B,M)=>M.boundingBox.width*M.boundingBox.height-B.boundingBox.width*B.boundingBox.height);const y=C[0],h=C[1];y.boundingBox.width*y.boundingBox.height>3*(h.boundingBox.width*h.boundingBox.height)&&(y.boundingBox.width>=20||y.boundingBox.width>=500)&&h.boundingBox.minX>=y.boundingBox.minX&&h.boundingBox.maxX<=y.boundingBox.maxX&&h.boundingBox.minY>=y.boundingBox.minY&&h.boundingBox.maxY<=y.boundingBox.maxY&&C.shift()}const W=!e;return!e&&C.length>0&&(Math.max(...C.map(h=>Math.max(h.boundingBox.width,h.boundingBox.height)))>144?i="mm":i="inch"),C.forEach(y=>{y.units=i,y.isUnitInferred=W}),C.length===0&&C.push({name:"Empty DXF Drawing",units:i,isUnitInferred:W,outerContour:{segments:[{type:"line",start:{x:0,y:0},end:{x:100,y:0}},{type:"line",start:{x:100,y:0},end:{x:100,y:100}},{type:"line",start:{x:100,y:100},end:{x:0,y:100}},{type:"line",start:{x:0,y:100},end:{x:0,y:0}}],isClosed:!0,isHole:!1},innerHoles:[],boundingBox:{minX:0,minY:0,maxX:100,maxY:100,width:100,height:100}}),C}function Yo(n){const t=co(n);return t.sort((i,e)=>e.boundingBox.width*e.boundingBox.height-i.boundingBox.width*i.boundingBox.height),t[0]}const Gt=[{id:"sheet_8x4",name:"8 × 4 ft (48 × 96 in / 2500 × 1250 mm) - Standard Industrial Plate",widthMm:1250,lengthMm:2500},{id:"sheet_10x5",name:"10 × 5 ft (3000 × 1500 mm) - Standard Laser Bed",widthMm:1500,lengthMm:3e3},{id:"sheet_20x5",name:"20 × 5 ft (6000 × 1500 mm) - Heavy Structural Plate",widthMm:1500,lengthMm:6e3},{id:"sheet_small",name:"4 × 4 ft (1250 × 1250 mm) - Offcut / Half Sheet",widthMm:1250,lengthMm:1250}],In=[{id:"us_sheet_5x10",name:"5 × 10 ft (60 × 120 in) - Standard US Laser Bed",widthMm:1524,lengthMm:3048},{id:"us_sheet_4x8",name:"4 × 8 ft (48 × 96 in) - Standard US Sheet",widthMm:1219.2,lengthMm:2438.4},{id:"us_sheet_6x12",name:"6 × 12 ft (72 × 144 in) - Large Format Table",widthMm:1828.8,lengthMm:3657.6},{id:"us_sheet_4x4",name:"4 × 4 ft (48 × 48 in) - Half Sheet / Drop",widthMm:1219.2,lengthMm:1219.2}];class Xo{constructor(t,i,e,o,a){Bt(this,"sheetW");Bt(this,"sheetL");Bt(this,"edgeMargin");Bt(this,"spacing");Bt(this,"allowRotation");this.sheetW=t,this.sheetL=i,this.edgeMargin=e,this.spacing=o,this.allowRotation=a}initSheetFreeRects(){const t=Math.max(0,this.sheetW-2*this.edgeMargin),i=Math.max(0,this.sheetL-2*this.edgeMargin);return[{x:this.edgeMargin,y:this.edgeMargin,width:t,height:i}]}scorePlacement(t,i,e){if(i>t.width||e>t.height)return{score1:1/0,score2:1/0};const o=t.width-i,a=t.height-e,s=Math.min(o,a),r=Math.max(o,a);return{score1:s,score2:r}}splitFreeRect(t,i,e,o,a){if(i>=t.x+t.width||i+o<=t.x||e>=t.y+t.height||e+a<=t.y)return[t];const s=[];return e>t.y&&e<t.y+t.height&&s.push({x:t.x,y:t.y,width:t.width,height:e-t.y}),e+a<t.y+t.height&&e+a>t.y&&s.push({x:t.x,y:e+a,width:t.width,height:t.y+t.height-(e+a)}),i>t.x&&i<t.x+t.width&&s.push({x:t.x,y:t.y,width:i-t.x,height:t.height}),i+o<t.x+t.width&&i+o>t.x&&s.push({x:i+o,y:t.y,width:t.x+t.width-(i+o),height:t.height}),s}pruneFreeRects(t){const i=t.filter(o=>o.width>0&&o.height>0),e=[];for(let o=0;o<i.length;o++){let a=!1;const s=i[o];for(let r=0;r<i.length;r++){if(o===r)continue;const c=i[r];if(s.x>=c.x&&s.y>=c.y&&s.x+s.width<=c.x+c.width&&s.y+s.height<=c.y+c.height){a=!0;break}}a||e.push(s)}return e}pack(t){const i=[];let e=0,o=this.initSheetFreeRects();for(let a=0;a<t.length;a++){const s=t[a];let r=!1;for(;!r;){let c={score1:1/0,score2:1/0},u=-1,d=!1,l=s.w,p=s.h;for(let g=0;g<o.length;g++){const f=o[g],I=this.scorePlacement(f,s.w,s.h);if((I.score1<c.score1||I.score1===c.score1&&I.score2<c.score2)&&(c=I,u=g,d=!1,l=s.w,p=s.h),this.allowRotation&&Math.abs(s.w-s.h)>.5){const b=this.scorePlacement(f,s.h,s.w);(b.score1<c.score1||b.score1===c.score1&&b.score2<c.score2)&&(c=b,u=g,d=!0,l=s.h,p=s.w)}}if(u!==-1){const g=o[u],f=g.x,I=g.y;i.push({id:s.instanceId,partIndex:a,sheetIndex:e,x:f,y:I,width:l,height:p,rotated:d,partName:s.name,partId:s.instanceId,color:s.color});const b=l+this.spacing,T=p+this.spacing;let S=[];for(const w of o){const C=this.splitFreeRect(w,f,I,b,T);S.push(...C)}o=this.pruneFreeRects(S),r=!0}else{const g=Math.max(0,this.sheetW-2*this.edgeMargin),f=Math.max(0,this.sheetL-2*this.edgeMargin);o.length===1&&o[0].width===g&&o[0].height===f||e>=50?(i.push({id:s.instanceId,partIndex:a,sheetIndex:e,x:0,y:0,width:s.w,height:s.h,rotated:!1,partName:s.name,partId:s.instanceId,color:s.color}),r=!0):(e++,o=this.initSheetFreeRects())}}}return i}}function ri(n,t=Gt[0],i=6,e=7.85,o={}){var B;const a=o.edgeMarginMm!==void 0?o.edgeMarginMm:10,s=o.partSpacingMm!==void 0?o.partSpacingMm:5,r=o.allowRotation!==!1,c=t.widthMm,u=t.lengthMm,d=[];let l=0,p=0;for(let M=0;M<n.length;M++){const F=n[M],_=Math.max(1,Math.floor(F.quantity));l+=_;const k=((B=F.geometry)==null?void 0:B.units)==="inch"?25.4:1,L=Math.max(1,F.boundingBox.width*k),O=Math.max(1,F.boundingBox.height*k),Y=L*O;for(let j=0;j<_;j++)d.push({instanceId:`${F.id}_${j}`,itemIndex:M,name:F.name,w:L,h:O,color:F.color}),p+=Y}d.sort((M,F)=>F.w*F.h-M.w*M.h);const f=new Xo(c,u,a,s,r).pack(d),I=f.reduce((M,F)=>Math.max(M,F.sheetIndex),0),b=f.length>0?I+1:1,S=c*u*b,w=Math.min(100,Math.round(p/S*1e3)/10),C=p*i/1e3,W=Math.round(C*e/1e3*100)/100,U=S*i/1e3,D=Math.round(U*e/1e3*100)/100,A=Math.max(0,Math.round((D-W)*100)/100),v=f.filter(M=>M.sheetIndex===I);let y=0;for(const M of v)y=Math.max(y,M.y+M.height);const h=Math.max(0,Math.round(u-(y+s))),m=c;return{sheetSize:t,partsRequested:l,partsPlaced:f.length,sheetsRequired:b,sheetUtilizationPercent:w,totalNetPartMassKg:W,totalLoadedSheetMassKg:D,totalSkeletonScrapMassKg:A,remnantWidthMm:m,remnantLengthMm:h,packedParts:f}}function Qo(n,t,i=Gt[0],e=6,o=7.85,a={},s="mm"){const r=s==="inch",c=r?25.4:1,d={id:"part_0",name:"Part",boundingBox:r?{minX:n.minX*c,minY:n.minY*c,maxX:n.maxX*c,maxY:n.maxY*c,width:n.width*c,height:n.height*c}:n,quantity:t};return ri([d],i,e,o,a)}const ci=[{id:"steel_a36",name:"Carbon Steel (A36 / Mild Steel)",densityGPerCm3:7.85,gauges:[{gaugeName:'20 Gauge (0.0359" / 0.91 mm)',thicknessMm:.91,thicknessInches:.0359,pricePerSqInch:.012,pricePerLinearInchCut:.024,pricePerPierce:.1,feedRate4kWIpm:650,feedRate6kWIpm:900,pierceDelay4kWSec:.01,pierceDelay6kWSec:.01,cuttingSpeedIpm:650,feedRateMmMin:16510,pierceDelaySec:.01},{gaugeName:'18 Gauge (0.0478" / 1.21 mm)',thicknessMm:1.21,thicknessInches:.0478,pricePerSqInch:.015,pricePerLinearInchCut:.028,pricePerPierce:.12,feedRate4kWIpm:550,feedRate6kWIpm:750,pierceDelay4kWSec:.02,pierceDelay6kWSec:.015,cuttingSpeedIpm:550,feedRateMmMin:13970,pierceDelaySec:.02},{gaugeName:'16 Gauge (0.0598" / 1.52 mm)',thicknessMm:1.52,thicknessInches:.0598,pricePerSqInch:.018,pricePerLinearInchCut:.035,pricePerPierce:.15,feedRate4kWIpm:450,feedRate6kWIpm:650,pierceDelay4kWSec:.03,pierceDelay6kWSec:.02,cuttingSpeedIpm:450,feedRateMmMin:11430,pierceDelaySec:.03},{gaugeName:'14 Gauge (0.0747" / 1.90 mm)',thicknessMm:1.9,thicknessInches:.0747,pricePerSqInch:.022,pricePerLinearInchCut:.042,pricePerPierce:.18,feedRate4kWIpm:380,feedRate6kWIpm:540,pierceDelay4kWSec:.04,pierceDelay6kWSec:.03,cuttingSpeedIpm:380,feedRateMmMin:9652,pierceDelaySec:.04},{gaugeName:'12 Gauge (0.1046" / 2.66 mm)',thicknessMm:2.66,thicknessInches:.1046,pricePerSqInch:.03,pricePerLinearInchCut:.048,pricePerPierce:.22,feedRate4kWIpm:310,feedRate6kWIpm:460,pierceDelay4kWSec:.06,pierceDelay6kWSec:.04,cuttingSpeedIpm:310,feedRateMmMin:7874,pierceDelaySec:.06},{gaugeName:'11 Gauge (0.1196" / 3.04 mm)',thicknessMm:3.04,thicknessInches:.1196,pricePerSqInch:.035,pricePerLinearInchCut:.055,pricePerPierce:.25,feedRate4kWIpm:280,feedRate6kWIpm:420,pierceDelay4kWSec:.08,pierceDelay6kWSec:.05,cuttingSpeedIpm:280,feedRateMmMin:7112,pierceDelaySec:.08},{gaugeName:'10 Gauge (0.1345" / 3.42 mm)',thicknessMm:3.42,thicknessInches:.1345,pricePerSqInch:.042,pricePerLinearInchCut:.065,pricePerPierce:.3,feedRate4kWIpm:240,feedRate6kWIpm:360,pierceDelay4kWSec:.1,pierceDelay6kWSec:.06,cuttingSpeedIpm:240,feedRateMmMin:6096,pierceDelaySec:.1},{gaugeName:'7 Gauge / 3/16" Plate (0.1875" / 4.76 mm)',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.058,pricePerLinearInchCut:.085,pricePerPierce:.4,feedRate4kWIpm:200,feedRate6kWIpm:300,pierceDelay4kWSec:.15,pierceDelay6kWSec:.1,cuttingSpeedIpm:200,feedRateMmMin:5080,pierceDelaySec:.15},{gaugeName:'1/4" Plate (.250" / 6.35 mm)',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.078,pricePerLinearInchCut:.12,pricePerPierce:.6,feedRate4kWIpm:150,feedRate6kWIpm:240,pierceDelay4kWSec:.25,pierceDelay6kWSec:.15,cuttingSpeedIpm:150,feedRateMmMin:3810,pierceDelaySec:.25},{gaugeName:'3/8" Plate (.375" / 9.53 mm)',thicknessMm:9.53,thicknessInches:.375,pricePerSqInch:.115,pricePerLinearInchCut:.185,pricePerPierce:.95,feedRate4kWIpm:75,feedRate6kWIpm:130,pierceDelay4kWSec:.6,pierceDelay6kWSec:.4,cuttingSpeedIpm:75,feedRateMmMin:1905,pierceDelaySec:.6},{gaugeName:'1/2" Plate (.500" / 12.7 mm)',thicknessMm:12.7,thicknessInches:.5,pricePerSqInch:.155,pricePerLinearInchCut:.26,pricePerPierce:1.4,feedRate4kWIpm:45,feedRate6kWIpm:75,pierceDelay4kWSec:1.2,pierceDelay6kWSec:.75,cuttingSpeedIpm:45,feedRateMmMin:1143,pierceDelaySec:1.2},{gaugeName:'5/8" Plate (.625" / 15.88 mm)',thicknessMm:15.88,thicknessInches:.625,pricePerSqInch:.198,pricePerLinearInchCut:.33,pricePerPierce:1.95,feedRate4kWIpm:32,feedRate6kWIpm:55,pierceDelay4kWSec:1.6,pierceDelay6kWSec:1.1,cuttingSpeedIpm:32,feedRateMmMin:813,pierceDelaySec:1.6},{gaugeName:'3/4" Plate (.750" / 19.05 mm)',thicknessMm:19.05,thicknessInches:.75,pricePerSqInch:.245,pricePerLinearInchCut:.42,pricePerPierce:2.6,feedRate4kWIpm:24,feedRate6kWIpm:42,pierceDelay4kWSec:2.2,pierceDelay6kWSec:1.4,cuttingSpeedIpm:24,feedRateMmMin:610,pierceDelaySec:2.2},{gaugeName:'1" Heavy Plate (1.000" / 25.4 mm)',thicknessMm:25.4,thicknessInches:1,pricePerSqInch:.335,pricePerLinearInchCut:.58,pricePerPierce:3.8,feedRate4kWIpm:15,feedRate6kWIpm:28,pierceDelay4kWSec:3.5,pierceDelay6kWSec:2.2,cuttingSpeedIpm:15,feedRateMmMin:381,pierceDelaySec:3.5}]},{id:"stainless_304",name:"Stainless Steel (304 2B / #4)",densityGPerCm3:8,gauges:[{gaugeName:'20 Gauge SS (0.0375" / 0.95 mm)',thicknessMm:.95,thicknessInches:.0375,pricePerSqInch:.035,pricePerLinearInchCut:.045,pricePerPierce:.2,feedRate4kWIpm:750,feedRate6kWIpm:1050,pierceDelay4kWSec:.01,pierceDelay6kWSec:.01,cuttingSpeedIpm:750,feedRateMmMin:19050,pierceDelaySec:.01},{gaugeName:'18 Gauge SS (0.0500" / 1.27 mm)',thicknessMm:1.27,thicknessInches:.05,pricePerSqInch:.044,pricePerLinearInchCut:.055,pricePerPierce:.25,feedRate4kWIpm:650,feedRate6kWIpm:920,pierceDelay4kWSec:.015,pierceDelay6kWSec:.01,cuttingSpeedIpm:650,feedRateMmMin:16510,pierceDelaySec:.015},{gaugeName:'16 Gauge SS (0.0625" / 1.59 mm)',thicknessMm:1.59,thicknessInches:.0625,pricePerSqInch:.054,pricePerLinearInchCut:.068,pricePerPierce:.3,feedRate4kWIpm:550,feedRate6kWIpm:800,pierceDelay4kWSec:.02,pierceDelay6kWSec:.015,cuttingSpeedIpm:550,feedRateMmMin:13970,pierceDelaySec:.02},{gaugeName:'14 Gauge SS (0.0781" / 1.98 mm)',thicknessMm:1.98,thicknessInches:.0781,pricePerSqInch:.068,pricePerLinearInchCut:.082,pricePerPierce:.38,feedRate4kWIpm:420,feedRate6kWIpm:620,pierceDelay4kWSec:.03,pierceDelay6kWSec:.02,cuttingSpeedIpm:420,feedRateMmMin:10668,pierceDelaySec:.03},{gaugeName:'12 Gauge SS (0.1094" / 2.78 mm)',thicknessMm:2.78,thicknessInches:.1094,pricePerSqInch:.088,pricePerLinearInchCut:.095,pricePerPierce:.45,feedRate4kWIpm:310,feedRate6kWIpm:480,pierceDelay4kWSec:.05,pierceDelay6kWSec:.03,cuttingSpeedIpm:310,feedRateMmMin:7874,pierceDelaySec:.05},{gaugeName:'11 Gauge SS / 1/8" (0.1250" / 3.18 mm)',thicknessMm:3.18,thicknessInches:.125,pricePerSqInch:.102,pricePerLinearInchCut:.11,pricePerPierce:.52,feedRate4kWIpm:260,feedRate6kWIpm:420,pierceDelay4kWSec:.06,pierceDelay6kWSec:.04,cuttingSpeedIpm:260,feedRateMmMin:6604,pierceDelaySec:.06},{gaugeName:'10 Gauge SS (0.1406" / 3.57 mm)',thicknessMm:3.57,thicknessInches:.1406,pricePerSqInch:.122,pricePerLinearInchCut:.128,pricePerPierce:.62,feedRate4kWIpm:210,feedRate6kWIpm:340,pierceDelay4kWSec:.08,pierceDelay6kWSec:.05,cuttingSpeedIpm:210,feedRateMmMin:5334,pierceDelaySec:.08},{gaugeName:'3/16" SS Plate (.1875" / 4.76 mm)',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.165,pricePerLinearInchCut:.165,pricePerPierce:.85,feedRate4kWIpm:140,feedRate6kWIpm:240,pierceDelay4kWSec:.18,pierceDelay6kWSec:.1,cuttingSpeedIpm:140,feedRateMmMin:3556,pierceDelaySec:.18},{gaugeName:'1/4" SS Plate (.250" / 6.35 mm)',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.22,pricePerLinearInchCut:.24,pricePerPierce:1.25,feedRate4kWIpm:90,feedRate6kWIpm:160,pierceDelay4kWSec:.35,pierceDelay6kWSec:.2,cuttingSpeedIpm:90,feedRateMmMin:2286,pierceDelaySec:.35},{gaugeName:'3/8" SS Plate (.375" / 9.53 mm)',thicknessMm:9.53,thicknessInches:.375,pricePerSqInch:.34,pricePerLinearInchCut:.38,pricePerPierce:1.95,feedRate4kWIpm:50,feedRate6kWIpm:95,pierceDelay4kWSec:.7,pierceDelay6kWSec:.4,cuttingSpeedIpm:50,feedRateMmMin:1270,pierceDelaySec:.7},{gaugeName:'1/2" SS Plate (.500" / 12.7 mm)',thicknessMm:12.7,thicknessInches:.5,pricePerSqInch:.46,pricePerLinearInchCut:.52,pricePerPierce:2.8,feedRate4kWIpm:30,feedRate6kWIpm:60,pierceDelay4kWSec:1.4,pierceDelay6kWSec:.8,cuttingSpeedIpm:30,feedRateMmMin:762,pierceDelaySec:1.4}]},{id:"aluminum_6061",name:"Aluminum (6061-T6 Structural)",densityGPerCm3:2.7,gauges:[{gaugeName:'0.040" Sheet (1.02 mm)',thicknessMm:1.02,thicknessInches:.04,pricePerSqInch:.026,pricePerLinearInchCut:.032,pricePerPierce:.15,feedRate4kWIpm:750,feedRate6kWIpm:1050,pierceDelay4kWSec:.015,pierceDelay6kWSec:.01,cuttingSpeedIpm:750,feedRateMmMin:19050,pierceDelaySec:.015},{gaugeName:'0.063" / 1/16" Sheet (1.59 mm)',thicknessMm:1.59,thicknessInches:.0625,pricePerSqInch:.038,pricePerLinearInchCut:.045,pricePerPierce:.2,feedRate4kWIpm:600,feedRate6kWIpm:850,pierceDelay4kWSec:.02,pierceDelay6kWSec:.015,cuttingSpeedIpm:600,feedRateMmMin:15240,pierceDelaySec:.02},{gaugeName:'0.080" Sheet (2.03 mm)',thicknessMm:2.03,thicknessInches:.08,pricePerSqInch:.048,pricePerLinearInchCut:.055,pricePerPierce:.25,feedRate4kWIpm:460,feedRate6kWIpm:680,pierceDelay4kWSec:.03,pierceDelay6kWSec:.02,cuttingSpeedIpm:460,feedRateMmMin:11684,pierceDelaySec:.03},{gaugeName:'0.090" Sheet (2.29 mm)',thicknessMm:2.29,thicknessInches:.09,pricePerSqInch:.054,pricePerLinearInchCut:.06,pricePerPierce:.28,feedRate4kWIpm:400,feedRate6kWIpm:600,pierceDelay4kWSec:.035,pierceDelay6kWSec:.025,cuttingSpeedIpm:400,feedRateMmMin:10160,pierceDelaySec:.035},{gaugeName:'0.125" / 1/8" Sheet (3.18 mm)',thicknessMm:3.18,thicknessInches:.125,pricePerSqInch:.072,pricePerLinearInchCut:.075,pricePerPierce:.35,feedRate4kWIpm:280,feedRate6kWIpm:440,pierceDelay4kWSec:.05,pierceDelay6kWSec:.035,cuttingSpeedIpm:280,feedRateMmMin:7112,pierceDelaySec:.05},{gaugeName:'0.190" / 3/16" Plate (4.76 mm)',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.11,pricePerLinearInchCut:.115,pricePerPierce:.55,feedRate4kWIpm:160,feedRate6kWIpm:260,pierceDelay4kWSec:.12,pierceDelay6kWSec:.08,cuttingSpeedIpm:160,feedRateMmMin:4064,pierceDelaySec:.12},{gaugeName:'0.250" / 1/4" Plate (6.35 mm)',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.145,pricePerLinearInchCut:.16,pricePerPierce:.8,feedRate4kWIpm:100,feedRate6kWIpm:170,pierceDelay4kWSec:.25,pierceDelay6kWSec:.16,cuttingSpeedIpm:100,feedRateMmMin:2540,pierceDelaySec:.25},{gaugeName:'0.375" / 3/8" Plate (9.53 mm)',thicknessMm:9.53,thicknessInches:.375,pricePerSqInch:.225,pricePerLinearInchCut:.24,pricePerPierce:1.25,feedRate4kWIpm:60,feedRate6kWIpm:105,pierceDelay4kWSec:.45,pierceDelay6kWSec:.28,cuttingSpeedIpm:60,feedRateMmMin:1524,pierceDelaySec:.45},{gaugeName:'0.500" / 1/2" Plate (12.7 mm)',thicknessMm:12.7,thicknessInches:.5,pricePerSqInch:.31,pricePerLinearInchCut:.33,pricePerPierce:1.8,feedRate4kWIpm:38,feedRate6kWIpm:68,pierceDelay4kWSec:.9,pierceDelay6kWSec:.55,cuttingSpeedIpm:38,feedRateMmMin:965,pierceDelaySec:.9}]},{id:"aluminum_5052",name:"Aluminum (5052-H32 Forming)",densityGPerCm3:2.68,gauges:[{gaugeName:'0.040" Sheet (1.02 mm)',thicknessMm:1.02,thicknessInches:.04,pricePerSqInch:.024,pricePerLinearInchCut:.035,pricePerPierce:.15,feedRate4kWIpm:750,feedRate6kWIpm:1e3,pierceDelay4kWSec:.015,pierceDelay6kWSec:.01,cuttingSpeedIpm:750,feedRateMmMin:19050,pierceDelaySec:.015},{gaugeName:'0.050" Sheet (1.27 mm)',thicknessMm:1.27,thicknessInches:.05,pricePerSqInch:.03,pricePerLinearInchCut:.038,pricePerPierce:.16,feedRate4kWIpm:680,feedRate6kWIpm:940,pierceDelay4kWSec:.018,pierceDelay6kWSec:.012,cuttingSpeedIpm:680,feedRateMmMin:17272,pierceDelaySec:.018},{gaugeName:'0.063" / 1/16" Sheet (1.60 mm)',thicknessMm:1.6,thicknessInches:.063,pricePerSqInch:.036,pricePerLinearInchCut:.042,pricePerPierce:.18,feedRate4kWIpm:620,feedRate6kWIpm:880,pierceDelay4kWSec:.02,pierceDelay6kWSec:.015,cuttingSpeedIpm:620,feedRateMmMin:15748,pierceDelaySec:.02},{gaugeName:'0.080" Sheet (2.03 mm)',thicknessMm:2.03,thicknessInches:.08,pricePerSqInch:.046,pricePerLinearInchCut:.052,pricePerPierce:.22,feedRate4kWIpm:480,feedRate6kWIpm:700,pierceDelay4kWSec:.028,pierceDelay6kWSec:.018,cuttingSpeedIpm:480,feedRateMmMin:12192,pierceDelaySec:.028},{gaugeName:'0.090" Sheet (2.29 mm)',thicknessMm:2.29,thicknessInches:.09,pricePerSqInch:.052,pricePerLinearInchCut:.058,pricePerPierce:.25,feedRate4kWIpm:420,feedRate6kWIpm:600,pierceDelay4kWSec:.035,pierceDelay6kWSec:.025,cuttingSpeedIpm:420,feedRateMmMin:10668,pierceDelaySec:.035},{gaugeName:'0.125" / 1/8" Sheet (3.18 mm)',thicknessMm:3.18,thicknessInches:.125,pricePerSqInch:.068,pricePerLinearInchCut:.072,pricePerPierce:.32,feedRate4kWIpm:300,feedRate6kWIpm:480,pierceDelay4kWSec:.05,pierceDelay6kWSec:.035,cuttingSpeedIpm:300,feedRateMmMin:7620,pierceDelaySec:.05},{gaugeName:'0.190" / 3/16" Plate (4.76 mm)',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.105,pricePerLinearInchCut:.11,pricePerPierce:.5,feedRate4kWIpm:180,feedRate6kWIpm:290,pierceDelay4kWSec:.1,pierceDelay6kWSec:.07,cuttingSpeedIpm:180,feedRateMmMin:4572,pierceDelaySec:.1},{gaugeName:'0.250" / 1/4" Plate (6.35 mm)',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.138,pricePerLinearInchCut:.155,pricePerPierce:.75,feedRate4kWIpm:110,feedRate6kWIpm:190,pierceDelay4kWSec:.22,pierceDelay6kWSec:.14,cuttingSpeedIpm:110,feedRateMmMin:2794,pierceDelaySec:.22}]},{id:"stainless_316",name:"Stainless Steel (316 Marine/Sanitary)",densityGPerCm3:8,gauges:[{gaugeName:'16 Gauge SS 316 (0.0598" / 1.52 mm)',thicknessMm:1.52,thicknessInches:.0598,pricePerSqInch:.062,pricePerLinearInchCut:.072,pricePerPierce:.35,feedRate4kWIpm:520,feedRate6kWIpm:760,pierceDelay4kWSec:.02,pierceDelay6kWSec:.015,cuttingSpeedIpm:520,feedRateMmMin:13208,pierceDelaySec:.02},{gaugeName:'11 Gauge SS 316 / 1/8" (0.1250" / 3.18 mm)',thicknessMm:3.18,thicknessInches:.125,pricePerSqInch:.118,pricePerLinearInchCut:.12,pricePerPierce:.6,feedRate4kWIpm:240,feedRate6kWIpm:390,pierceDelay4kWSec:.07,pierceDelay6kWSec:.045,cuttingSpeedIpm:240,feedRateMmMin:6096,pierceDelaySec:.07},{gaugeName:'3/16" SS 316 Plate (.1875" / 4.76 mm)',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.195,pricePerLinearInchCut:.19,pricePerPierce:.95,feedRate4kWIpm:130,feedRate6kWIpm:220,pierceDelay4kWSec:.2,pierceDelay6kWSec:.11,cuttingSpeedIpm:130,feedRateMmMin:3302,pierceDelaySec:.2},{gaugeName:'1/4" SS 316 Plate (.250" / 6.35 mm)',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.26,pricePerLinearInchCut:.28,pricePerPierce:1.45,feedRate4kWIpm:85,feedRate6kWIpm:150,pierceDelay4kWSec:.38,pierceDelay6kWSec:.22,cuttingSpeedIpm:85,feedRateMmMin:2159,pierceDelaySec:.38},{gaugeName:'3/8" SS 316 Plate (.375" / 9.53 mm)',thicknessMm:9.53,thicknessInches:.375,pricePerSqInch:.38,pricePerLinearInchCut:.42,pricePerPierce:2.1,feedRate4kWIpm:45,feedRate6kWIpm:85,pierceDelay4kWSec:.8,pierceDelay6kWSec:.45,cuttingSpeedIpm:45,feedRateMmMin:1143,pierceDelaySec:.8}]}],lo=[{id:"is2062_ms",name:"IS 2062 E250 Mild Steel (MS)",densityGPerCm3:7.85,gauges:[{gaugeName:"1.6 mm Sheet (16G)",thicknessMm:1.6,thicknessInches:.063,pricePerSqInch:.02,pricePerLinearInchCut:.035,pricePerPierce:.15,pricePerKg:74,pricePerMeterCut:9,pricePerSqFtJali:55},{gaugeName:"2.0 mm Sheet (14G)",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.025,pricePerLinearInchCut:.04,pricePerPierce:.2,pricePerKg:74,pricePerMeterCut:12,pricePerSqFtJali:65},{gaugeName:"3.0 mm Sheet (10G)",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.035,pricePerLinearInchCut:.05,pricePerPierce:.25,pricePerKg:75,pricePerMeterCut:15,pricePerSqFtJali:95},{gaugeName:"4.0 mm Plate",thicknessMm:4,thicknessInches:.1575,pricePerSqInch:.048,pricePerLinearInchCut:.07,pricePerPierce:.35,pricePerKg:75,pricePerMeterCut:22,pricePerSqFtJali:130},{gaugeName:"6.0 mm Plate",thicknessMm:6,thicknessInches:.2362,pricePerSqInch:.072,pricePerLinearInchCut:.11,pricePerPierce:.55,pricePerKg:76,pricePerMeterCut:35},{gaugeName:"8.0 mm Plate",thicknessMm:8,thicknessInches:.315,pricePerSqInch:.098,pricePerLinearInchCut:.16,pricePerPierce:.8,pricePerKg:78,pricePerMeterCut:52},{gaugeName:"10.0 mm Plate",thicknessMm:10,thicknessInches:.3937,pricePerSqInch:.125,pricePerLinearInchCut:.22,pricePerPierce:1.1,pricePerKg:78,pricePerMeterCut:68},{gaugeName:"12.0 mm Plate",thicknessMm:12,thicknessInches:.4724,pricePerSqInch:.15,pricePerLinearInchCut:.28,pricePerPierce:1.4,pricePerKg:80,pricePerMeterCut:88},{gaugeName:"16.0 mm Plate",thicknessMm:16,thicknessInches:.6299,pricePerSqInch:.21,pricePerLinearInchCut:.38,pricePerPierce:2.2,pricePerKg:82,pricePerMeterCut:135},{gaugeName:"20.0 mm Plate",thicknessMm:20,thicknessInches:.7874,pricePerSqInch:.26,pricePerLinearInchCut:.48,pricePerPierce:3,pricePerKg:85,pricePerMeterCut:180}]},{id:"ss304_indian",name:"SS 304 (Stainless Steel - N2 / Air Cut)",densityGPerCm3:8,gauges:[{gaugeName:"1.2 mm Sheet",thicknessMm:1.2,thicknessInches:.0472,pricePerSqInch:.045,pricePerLinearInchCut:.06,pricePerPierce:.3,pricePerKg:230,pricePerMeterCut:16,pricePerSqFtJali:110},{gaugeName:"1.5 mm Sheet",thicknessMm:1.5,thicknessInches:.0591,pricePerSqInch:.055,pricePerLinearInchCut:.07,pricePerPierce:.35,pricePerKg:235,pricePerMeterCut:22,pricePerSqFtJali:135},{gaugeName:"2.0 mm Sheet",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.072,pricePerLinearInchCut:.09,pricePerPierce:.45,pricePerKg:235,pricePerMeterCut:30,pricePerSqFtJali:175},{gaugeName:"3.0 mm Sheet",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.11,pricePerLinearInchCut:.14,pricePerPierce:.65,pricePerKg:240,pricePerMeterCut:45,pricePerSqFtJali:240},{gaugeName:"4.0 mm Plate",thicknessMm:4,thicknessInches:.1575,pricePerSqInch:.15,pricePerLinearInchCut:.19,pricePerPierce:.9,pricePerKg:245,pricePerMeterCut:65},{gaugeName:"6.0 mm Plate",thicknessMm:6,thicknessInches:.2362,pricePerSqInch:.22,pricePerLinearInchCut:.28,pricePerPierce:1.4,pricePerKg:250,pricePerMeterCut:105}]},{id:"aluminum_indian",name:"Aluminium 6061 (Air Cut)",densityGPerCm3:2.7,gauges:[{gaugeName:"2.0 mm Sheet",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.045,pricePerLinearInchCut:.06,pricePerPierce:.3,pricePerKg:260,pricePerMeterCut:20},{gaugeName:"3.0 mm Sheet",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.065,pricePerLinearInchCut:.08,pricePerPierce:.4,pricePerKg:260,pricePerMeterCut:28},{gaugeName:"5.0 mm Plate",thicknessMm:5,thicknessInches:.1969,pricePerSqInch:.11,pricePerLinearInchCut:.13,pricePerPierce:.65,pricePerKg:270,pricePerMeterCut:55}]}],mo={bendingBendsCount:0,bendingRatePerBend:15,deburringEnabled:!1,deburringRatePerKg:8,tappingHolesCount:0,tappingRatePerHole:18,surfaceFinish:"none",primerRatePerSqFt:20,powderCoatingRatePerSqFt:45,galvanizingRatePerKg:42},Sn={shopName:"Shree Balaji Laser Tech (Bhosari, Pune)",currency:"INR",pricingMode:"india_metric",indianQuotingMode:"job_work",assistGas:"air",sheetLoadingFee:250,gstPercent:18,isInterstateSale:!1,minimumOrderFee:500,leadTimeDays:2,rushMultiplier:1.25,selectedCAMProfileId:"cypcut",shopGstin:"27AABCS1429B1Z8",shopAddress:"Plot 42, J-Block, MIDC Bhosari, Pune, MH 411026",shopPhone:"+91 98220 12345",upiId:"balajilaser@upi",quantityTiers:[{minQty:1,discountPercent:0},{minQty:10,discountPercent:8},{minQty:25,discountPercent:15},{minQty:50,discountPercent:22},{minQty:100,discountPercent:30}]},nn={shopName:"Midwest Precision CNC & Laser",currency:"USD",pricingMode:"global_imperial",indianQuotingMode:"with_material",assistGas:"oxygen",sheetLoadingFee:20,gstPercent:7,isInterstateSale:!1,minimumOrderFee:75,leadTimeDays:3,rushMultiplier:1.35,selectedCAMProfileId:"standard",shopAddress:"1420 Industrial Pkwy, Cleveland, OH 44135",shopPhone:"(216) 555-0198",shopEmail:"quotes@midwestprecision.com",rfqWebhookUrl:"",setupFeePerJob:25,laserPowerKw:4,hourlyLaserRateUsd:185,naicsCode:"NAICS 332813 (Laser Cutting & Fabrication)",einOrTaxId:"34-8910245",salesTaxExempt:!1,paymentTerms:"Net 30, Credit Card, ACH",quantityTiers:[{minQty:1,discountPercent:0},{minQty:5,discountPercent:10},{minQty:10,discountPercent:18},{minQty:25,discountPercent:28},{minQty:50,discountPercent:38}]};function Ko(n,t={}){const i={...mo,...t},e=(i.bendingBendsCount||0)*(i.bendingRatePerBend||15),o=i.deburringEnabled?n.theoreticalWeightKg*(i.deburringRatePerKg||8):0,a=(i.tappingHolesCount||0)*(i.tappingRatePerHole||18),s=Math.max(.1,n.netAreaSqMm/(304.8*304.8));let r=0;i.surfaceFinish==="primer"?r=s*(i.primerRatePerSqFt||20):i.surfaceFinish==="powder_coating"?r=s*(i.powderCoatingRatePerSqFt||45):i.surfaceFinish==="galvanizing"&&(r=n.theoreticalWeightKg*(i.galvanizingRatePerKg||42));const c=e+o+a+r;return{bendingCost:Math.round(e*100)/100,deburringCost:Math.round(o*100)/100,tappingCost:Math.round(a*100)/100,surfaceFinishCost:Math.round(r*100)/100,totalSecondaryCost:Math.round(c*100)/100}}function ot(n,t,i,e=nn,o={}){const a=Math.max(1,Math.floor(i));let s=0,r=0,c=0,u=0,d="HSN 7326 (Articles of Iron or Steel)";const l=e.indianQuotingMode||"with_material";let p=1;if(e.assistGas==="nitrogen"?p=2:e.assistGas==="oxygen"?p=1.15:p=1,e.pricingMode==="india_metric")if(l==="job_work"){s=0;const j=n.totalCutLengthMm/1e3,se=t.pricePerMeterCut||20;r=j*se*p,c=n.pierceCount*(t.pricePerPierce>1?t.pricePerPierce:1.5),u=(e.sheetLoadingFee||250)/Math.max(1,a),d="SAC 9988 (Job Work / Manufacturing Services)"}else if(l==="sqft_jali"){const j=Math.max(.1,n.boundingBoxWidthMm/304.8*(n.boundingBoxHeightMm/304.8)),se=t.pricePerSqFtJali||(t.pricePerKg?t.pricePerKg*1.15:65);s=j*se,r=0,c=0,u=0,d="HSN 7326 (Decorative Laser Cut Panels)"}else{s=n.theoreticalWeightKg*1.12*(t.pricePerKg||75);const se=n.totalCutLengthMm/1e3,ye=t.pricePerMeterCut||20;r=se*ye*p,c=n.pierceCount*(t.pricePerPierce>1?t.pricePerPierce:1.5),u=0,d="HSN 7326 (Fabricated Steel Articles)"}else{s=n.boundingBoxWidthInches*n.boundingBoxHeightInches*1.15*t.pricePerSqInch;const se=e.laserPowerKw||4,ye=se===6?t.feedRate6kWIpm||t.feedRate4kWIpm||t.cuttingSpeedIpm||0:t.feedRate4kWIpm||t.cuttingSpeedIpm||0,et=se===6?t.pierceDelay6kWSec||t.pierceDelay4kWSec||t.pierceDelaySec||.15:t.pierceDelay4kWSec||t.pierceDelaySec||.25;if(e.hourlyLaserRateUsd&&e.hourlyLaserRateUsd>0&&ye>0){const Xe=n.totalCutLengthInches/ye,ie=n.pierceCount*et/60;r=(Xe+ie)/60*e.hourlyLaserRateUsd,c=0}else r=n.totalCutLengthInches*t.pricePerLinearInchCut,c=n.pierceCount*t.pricePerPierce;u=0}const g=Ko(n,o),f=g.totalSecondaryCost,I=s+r+c+u+f;let b=0;for(const j of e.quantityTiers||[])a>=j.minQty&&(b=j.discountPercent);const T=I*(1-b/100),S=T*a,w=S<e.minimumOrderFee,C=Math.max(e.minimumOrderFee,S),W=C/a,U=e.currency==="USD",D=e.naicsCode||"NAICS 332813 (Laser Cutting & Fabrication)",A=e.paymentTerms||"Net 30, Credit Card, ACH",v=e.laserPowerKw||4,y=v===6?t.feedRate6kWIpm||t.feedRate4kWIpm||150:t.feedRate4kWIpm||150,h=v===6?t.pierceDelay6kWSec||t.pierceDelay4kWSec||.15:t.pierceDelay4kWSec||.25,m=y>0?n.totalCutLengthInches/y*60:0,B=n.pierceCount*h,M=m+B,F=U&&!!e.salesTaxExempt,_=F?0:e.gstPercent>0?e.gstPercent:0,$=_>0?C*(_/100):0;let k=0,L=0,O=0;e.currency==="INR"&&$>0&&(e.isInterstateSale?O=$:(k=$/2,L=$/2));const Y=C+$;return{currency:e.currency,quotingMode:l,quantity:a,unitMaterialCost:Math.round(s*100)/100,unitCutCost:Math.round(r*100)/100,unitPierceCost:Math.round(c*100)/100,unitHandlingCost:Math.round(u*100)/100,unitSecondaryCost:Math.round(f*100)/100,secondaryBreakdown:g,unitSubtotal:Math.round(I*100)/100,discountPercent:b,discountedUnitPrice:Math.round(T*100)/100,orderTotalBeforeMin:Math.round(S*100)/100,minimumOrderFloorApplied:w,finalOrderTotal:Math.round(C*100)/100,finalUnitPrice:Math.round(W*100)/100,gstAmount:Math.round($*100)/100,cgstAmount:Math.round(k*100)/100,sgstAmount:Math.round(L*100)/100,igstAmount:Math.round(O*100)/100,finalTotalWithGst:Math.round(Y*100)/100,taxAmount:Math.round($*100)/100,hsnSacCode:U?D:d,naicsCode:D,paymentTerms:A,salesTaxExempt:F,beamOnCutTimeSec:Math.round(m*10)/10,pierceTimeSec:Math.round(B*100)/100,totalCycleTimeSec:Math.round(M*10)/10,feedRateIpm:y,pierceDelaySec:h}}function zi(n,t,i,e,o,a,s=Sn){const c=o.currency==="INR"?"₹":"$",u=o.quotingMode;let d="WITH MATERIAL (SUPPLY & CUT)";u==="job_work"&&(d="JOB WORK (LABOUR ONLY)"),u==="sqft_jali"&&(d="ARCHITECTURAL JALI (SQ.FT BASIS)");const l=(t.boundingBoxWidthMm/304.8*(t.boundingBoxHeightMm/304.8)).toFixed(2),p=s.assistGas==="nitrogen"?"N2 (Nitrogen)":s.assistGas==="oxygen"?"O2 (Oxygen)":"High-Pressure Air";return`*QUOTATION — ${a.toUpperCase()}*
Ref: CNC-Q${Math.floor(1e3+Math.random()*9e3)} | Mode: *${d}*

*Part:* ${n} (${t.boundingBoxWidthMm.toFixed(0)} × ${t.boundingBoxHeightMm.toFixed(0)} mm / ${l} sq.ft)
*Material:* ${i} (${e.gaugeName})
*Assist Gas:* ${p}
*Quantity:* ${o.quantity} pcs

----------------------------------
${u==="job_work"?`• Raw Material: *Supplied by Customer*
• Cut Meters: ${(t.totalCutLengthMm/1e3).toFixed(2)} m (${t.pierceCount*o.quantity} pierces)
• Cutting & Piercing: ${c}${((o.unitCutCost+o.unitPierceCost)*o.quantity).toFixed(2)}
• Plate Loading Fee: ${c}${(o.unitHandlingCost*o.quantity).toFixed(2)}`:u==="sqft_jali"?`• Total Panel Area: ${(parseFloat(l)*o.quantity).toFixed(2)} sq.ft
• Fabrication Rate: ${c}${(o.unitMaterialCost*o.quantity).toFixed(2)}`:`• Est. Net Weight: ${(t.theoreticalWeightKg*o.quantity).toFixed(2)} kg
• Cut Length: ${(t.totalCutLengthMm/1e3).toFixed(2)} meters (${t.pierceCount*o.quantity} pierces)
• Material Cost: ${c}${(o.unitMaterialCost*o.quantity).toFixed(2)}
• Laser Cutting: ${c}${((o.unitCutCost+o.unitPierceCost)*o.quantity).toFixed(2)}`}
${o.unitSecondaryCost>0?`• Secondary Operations: ${c}${(o.unitSecondaryCost*o.quantity).toFixed(2)}
`:""}${o.discountPercent>0?`• Volume Discount: -${o.discountPercent}%
`:""}----------------------------------
*Subtotal:* ${c}${o.finalOrderTotal.toFixed(2)}
${o.gstAmount>0?s.isInterstateSale?`*IGST (18%):* ${c}${o.igstAmount.toFixed(2)}
*FINAL TOTAL (INC. GST):* ${c}${o.finalTotalWithGst.toFixed(2)}`:`*CGST (9%):* ${c}${o.cgstAmount.toFixed(2)}
*SGST (9%):* ${c}${o.sgstAmount.toFixed(2)}
*FINAL TOTAL (INC. GST):* ${c}${o.finalTotalWithGst.toFixed(2)}`:`*FINAL TOTAL:* ${c}${o.finalOrderTotal.toFixed(2)}`}
----------------------------------
• ${o.hsnSacCode}
• CypCut Ready DXF pre-generated for production.
• Turnaround: 24 to 48 Hours.
• Advance: 50% with PO to confirm. UPI: ${s.upiId||"shop@upi"}`}function Tt(n,t=Sn,i=Gt[0],e=!0){const o=t.currency==="INR";let a=0,s=0,r=0,c=0,u=0,d=0,l=0,p=0,g=0;const f=[];for(const h of n){const m=h.quantity;a+=m,s+=h.metrics.totalCutLengthMm/1e3*m,r+=h.metrics.pierceCount*m,c+=h.metrics.theoreticalWeightKg*m,u+=h.unitQuote.unitMaterialCost*m,d+=h.unitQuote.unitCutCost*m,l+=h.unitQuote.unitPierceCost*m,p+=h.unitQuote.unitHandlingCost*m,g+=h.unitQuote.unitSecondaryCost*m,f.push({id:h.id,name:h.partGeometry.name,boundingBox:h.partGeometry.boundingBox,quantity:m,thicknessMm:h.gaugeThicknessMm,color:h.color})}const I=n.length>0?Math.max(...n.map(h=>h.gaugeThicknessMm)):6,b=ri(f,i,I,7.85,{allowRotation:e}),T=u+d+l+p+g;let S=0;if(t.quantityTiers&&t.quantityTiers.length>0)for(const h of t.quantityTiers)a>=h.minQty&&h.discountPercent>S&&(S=h.discountPercent);const w=T*(S/100),C=Math.max(t.minimumOrderFee,T-w),W=o?t.gstPercent/100:0,U=C*W;let D=0,A=0,v=0;o&&U>0&&(t.isInterstateSale?v=U:(D=U/2,A=U/2));const y=C+U;return{currency:t.currency,totalItemsCount:n.length,totalPartsCount:a,totalCutLengthMeters:Math.round(s*100)/100,totalPierces:r,totalNetPartMassKg:Math.round(c*100)/100,totalMaterialCost:Math.round(u*100)/100,totalCutCost:Math.round(d*100)/100,totalPierceCost:Math.round(l*100)/100,totalHandlingCost:Math.round(p*100)/100,totalSecondaryCost:Math.round(g*100)/100,subtotalBeforeDiscount:Math.round(T*100)/100,volumeDiscountPercent:S,discountAmount:Math.round(w*100)/100,orderTotalBeforeGst:Math.round(C*100)/100,gstAmount:Math.round(U*100)/100,cgstAmount:Math.round(D*100)/100,sgstAmount:Math.round(A*100)/100,igstAmount:Math.round(v*100)/100,finalTotalWithGst:Math.round(y*100)/100,nestingResult:b}}function Jo(n,t){const e=t.currency==="INR"?"₹":"$",o=n.shopSettings;let a="";for(let r=0;r<n.items.length;r++){const c=n.items[r],u=c.totalPrice.toFixed(2);a+=`${r+1}. *${c.partGeometry.name}* (${c.materialName} ${c.gaugeThicknessMm}mm)
   • Qty: ${c.quantity} pcs @ ${e}${c.unitQuote.finalUnitPrice.toFixed(2)} = *${e}${u}*
`}const s=t.nestingResult.sheetSize.name.split(" - ")[0]||"Standard Plate";return`*PROJECT QUOTATION — ${o.shopName.toUpperCase()}*
Ref: PRJ-Q${Math.floor(1e3+Math.random()*9e3)} | ${t.totalItemsCount} Parts (${t.totalPartsCount} pcs total)
Date: ${new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}

*BILL OF MATERIALS (BOM):*
----------------------------------
${a}----------------------------------
*SHEET NESTING & CAM SUMMARY:*
• Nesting: *${t.nestingResult.sheetsRequired} Sheet(s)* of ${s}
• Sheet Utilization: *${t.nestingResult.sheetUtilizationPercent}%*
• Skeleton Scrap: ${t.nestingResult.totalSkeletonScrapMassKg} kg | Reusable Remnant: ${t.nestingResult.remnantWidthMm} × ${t.nestingResult.remnantLengthMm} mm
• Total Laser Cut: ${t.totalCutLengthMeters} meters (${t.totalPierces} pierces)
• Net Steel Mass: ${t.totalNetPartMassKg} kg
----------------------------------
*Subtotal:* ${e}${t.subtotalBeforeDiscount.toFixed(2)}
${t.volumeDiscountPercent>0?`*Volume Discount (${t.volumeDiscountPercent}%):* -${e}${t.discountAmount.toFixed(2)}
`:""}*Taxable Subtotal:* ${e}${t.orderTotalBeforeGst.toFixed(2)}
${t.gstAmount>0?o.isInterstateSale?`*IGST (18%):* ${e}${t.igstAmount.toFixed(2)}
*FINAL PROJECT TOTAL (INC. GST):* ${e}${t.finalTotalWithGst.toFixed(2)}`:`*CGST (9%):* ${e}${t.cgstAmount.toFixed(2)}
*SGST (9%):* ${e}${t.sgstAmount.toFixed(2)}
*FINAL PROJECT TOTAL (INC. GST):* ${e}${t.finalTotalWithGst.toFixed(2)}`:`*FINAL PROJECT TOTAL:* ${e}${t.orderTotalBeforeGst.toFixed(2)}`}
----------------------------------
• SAC 9988 / HSN 7326 (GST Invoice with ITC)
• ⚠️ Rate validity: 48 Hours based on prevailing steel mandi rates.
• CypCut / FSCUT multi-layer CAM pre-processed.
• Advance: 50% with PO to confirm cut schedule.
• Instant UPI Pay: ${o.upiId||"shop@upi"}`}function Vo(n,t="91"){const i=n.replace(/[\s\-\(\)\.]/g,"");return i?i.startsWith("+")?i.substring(1):i.length===10&&/^\d+$/.test(i)?`${t}${i}`:i:""}function ji(n,t,i="91"){const e=t?Vo(t,i):"",o=encodeURIComponent(n);return e?`https://wa.me/${e}?text=${o}`:`https://wa.me/?text=${o}`}const li="cad_cnc_shop_settings_",di="cad_cnc_materials_";function uo(n,t){if(typeof window>"u"||!window.localStorage)return{...t};try{const i=window.localStorage.getItem(`${li}${n.toLowerCase()}`);if(i){const e=JSON.parse(i);return{...t,...e}}}catch(i){console.warn("Failed to load shop settings from localStorage",i)}return{...t}}function Zo(n,t){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(`${li}${n.toLowerCase()}`,JSON.stringify(t))}catch(i){console.warn("Failed to save shop settings to localStorage",i)}}function ho(n,t){if(typeof window>"u"||!window.localStorage)return JSON.parse(JSON.stringify(t));try{const i=window.localStorage.getItem(`${di}${n.toLowerCase()}`);if(i){const e=JSON.parse(i);if(Array.isArray(e)&&e.length>0&&e[0].gauges&&e[0].gauges.length>=t[0].gauges.length)return e}}catch(i){console.warn("Failed to load materials from localStorage",i)}return JSON.parse(JSON.stringify(t))}function ea(n,t){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(`${di}${n.toLowerCase()}`,JSON.stringify(t))}catch(i){console.warn("Failed to save materials to localStorage",i)}}function ta(n){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.removeItem(`${li}${n.toLowerCase()}`),window.localStorage.removeItem(`${di}${n.toLowerCase()}`)}catch(t){console.warn("Failed to reset storage",t)}}function cn(n,t,i,e,o,a,s=nn,r="Valued Customer"){const c=o.currency==="USD",u=c?"$":"₹",d=`RFQ-${Math.floor(1e3+Math.random()*9e3)}`,l=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),p=c?`${t.boundingBoxWidthInches.toFixed(2)}" × ${t.boundingBoxHeightInches.toFixed(2)}" (${e.thicknessInches.toFixed(3)}" plate)`:`${t.boundingBoxWidthMm.toFixed(0)} × ${t.boundingBoxHeightMm.toFixed(0)} mm (${e.thicknessMm} mm)`,g=c?`${t.totalCutLengthInches.toFixed(1)} inches (${t.pierceCount} pierces)`:`${(t.totalCutLengthMm/1e3).toFixed(2)} meters (${t.pierceCount} pierces)`,f=c?`${t.theoreticalWeightLbs.toFixed(2)} lbs`:`${t.theoreticalWeightKg.toFixed(2)} kg`,I=c?`${(t.theoreticalWeightLbs*o.quantity).toFixed(2)} lbs`:`${(t.theoreticalWeightKg*o.quantity).toFixed(2)} kg`;return`Subject: Quotation: ${n} (Ref #${d}) — ${a}

Dear ${r},

Thank you for requesting a quotation from ${a}. Below is your instant manufacturing cost estimate:

COMMERCIAL MANUFACTURING QUOTATION SUMMARY
--------------------------------------------------
Quote Ref: ${d}
Date: ${l}
Valid For: 15 Calendar Days

PART SPECIFICATIONS & BILL OF MATERIALS:
• Part Name: ${n}
• Material: ${i} — ${e.gaugeName}
• Part Dimensions: ${p}
• Est. Unit Weight: ${f} (Total Lot: ${I})
• Laser Cut Profile: ${g}
• Order Quantity: ${o.quantity} piece${o.quantity>1?"s":""}

COST BREAKDOWN:
--------------------------------------------------
• Raw Material: ${u}${o.unitMaterialCost.toFixed(2)} / pc
• Laser Cutting & Piercing: ${u}${(o.unitCutCost+o.unitPierceCost).toFixed(2)} / pc
${o.unitSecondaryCost>0?`• Secondary Operations (Forming/Deburr): ${u}${o.unitSecondaryCost.toFixed(2)} / pc
`:""}${o.discountPercent>0?`• Volume Discount (${o.discountPercent}% applied): -${u}${((o.unitSubtotal-o.discountedUnitPrice)*o.quantity).toFixed(2)}
`:""}--------------------------------------------------
Unit Price: ${u}${o.finalUnitPrice.toFixed(2)} each
Subtotal: ${u}${o.finalOrderTotal.toFixed(2)}
${o.gstAmount>0?`Estimated Sales Tax (${s.gstPercent||7}%): ${u}${o.gstAmount.toFixed(2)}
Total (Inc. Sales Tax): ${u}${o.finalTotalWithGst.toFixed(2)}`:`Total: ${u}${o.finalOrderTotal.toFixed(2)}`}

COMMERCIAL TERMS:
• Classification: NAICS: ${o.naicsCode||"332813 - Laser Cutting & Fabrication"}
• Lead Time: ${s.leadTimeDays||3} to 5 Business Days After Receipt of Order (ARO)
• Delivery Terms: FOB Origin / Ex-Works
• Payment Terms: ${s.paymentTerms||"Net 30, Credit Card, ACH"}
• Tax Status: ${o.salesTaxExempt?"Tax-Exempt (Resale Certificate Verified)":`Sales Tax (${s.gstPercent||7}% est.)`}
• CAM Verification: Trumpf / SigmaNEST cut-ready DXF verified for production

To approve this quotation and release your order to our cutting schedule, please reply directly to this email with your PO number or authorization.

Best regards,

Estimating & Engineering Team
${a}
${s.shopPhone||""} | ${s.shopAddress||""}`}function Jn(n,t,i="Valued Customer"){const e=t.currency==="USD",o=e?"$":"₹",a=n.shopSettings,s=`PRJ-${Math.floor(1e3+Math.random()*9e3)}`,r=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});let c="";for(let p=0;p<n.items.length;p++){const g=n.items[p],I=g.partGeometry.units==="inch"?`${g.partGeometry.boundingBox.width.toFixed(2)}" × ${g.partGeometry.boundingBox.height.toFixed(2)}"`:`${g.partGeometry.boundingBox.width.toFixed(0)} × ${g.partGeometry.boundingBox.height.toFixed(0)} mm`;c+=`${p+1}. ${g.partGeometry.name}
   Specs: ${g.materialName} (${g.gaugeThicknessMm}mm / ${I})
   Qty: ${g.quantity} pcs @ ${o}${g.unitQuote.finalUnitPrice.toFixed(2)} = ${o}${g.totalPrice.toFixed(2)}

`}const u=e?`${(t.totalCutLengthMeters*39.3701).toFixed(1)} inches`:`${t.totalCutLengthMeters} meters`,d=e?`${(t.totalNetPartMassKg*2.20462).toFixed(2)} lbs`:`${t.totalNetPartMassKg} kg`,l=t.nestingResult.sheetSize.name.split(" - ")[0]||"Standard Sheet";return`Subject: Quotation: ${n.projectName||"Sheet Metal Project RFQ"} (Ref #${s}) — ${a.shopName}

Dear ${i||n.customerName||"Valued Customer"},

Thank you for submitting your multi-part assembly RFQ to ${a.shopName}. We have processed your CAD geometries through our automated nesting and quoting engine:

PROJECT SUMMARY
--------------------------------------------------
Project: ${n.projectName||"Laser Cut Assembly"}
Quote Ref: ${s}
Date: ${r}
Valid For: 15 Calendar Days
Total Line Items: ${t.totalItemsCount} parts (${t.totalPartsCount} total pieces)

BILL OF MATERIALS (BOM):
--------------------------------------------------
${c}--------------------------------------------------
SHEET NESTING & MATERIAL EFFICIENCY:
• Sheet Stock: ${t.nestingResult.sheetsRequired} Sheet(s) of ${l}
• Material Utilization: ${t.nestingResult.sheetUtilizationPercent}%
• Total Laser Cut Length: ${u} (${t.totalPierces} total pierces)
• Estimated Net Part Mass: ${d}

PRICING SUMMARY:
--------------------------------------------------
Material Subtotal: ${o}${t.totalMaterialCost.toFixed(2)}
Laser Cutting & Piercing: ${o}${(t.totalCutCost+t.totalPierceCost).toFixed(2)}
${t.totalSecondaryCost>0?`Secondary Operations (Forming/Deburr): ${o}${t.totalSecondaryCost.toFixed(2)}
`:""}${t.volumeDiscountPercent>0?`Volume Tier Discount (${t.volumeDiscountPercent}%): -${o}${t.discountAmount.toFixed(2)}
`:""}--------------------------------------------------
Taxable Subtotal: ${o}${t.orderTotalBeforeGst.toFixed(2)}
${t.gstAmount>0?`Estimated Sales Tax (${a.gstPercent||7}%): ${o}${t.gstAmount.toFixed(2)}
FINAL PROJECT TOTAL: ${o}${t.finalTotalWithGst.toFixed(2)}`:`FINAL PROJECT TOTAL: ${o}${t.orderTotalBeforeGst.toFixed(2)}`}

COMMERCIAL TERMS:
• Classification: NAICS 332813 (Laser Cutting & Fabrication)
• Lead Time: ${a.leadTimeDays||3} to 5 Business Days ARO
• Delivery: Ex-Works / Pre-paid Freight Available
• Payment Terms: ${a.paymentTerms||"Net 30, Credit Card, ACH"}
• Tax Status: ${a.salesTaxExempt?"Tax-Exempt (Resale Certificate Verified)":`Sales Tax (${a.gstPercent||7}% est.)`}
• Toolpath: Pre-nested and certified for CNC fiber laser production

To authorize this order, please reply with your Purchase Order (PO) or confirmation.

Sincerely,

Estimating & Quoting Department
${a.shopName}
${a.shopPhone||""} | ${a.shopAddress||""}`}function po(n,t=2500,i=.25,e){const o=[],a=t/60,r=n.units==="inch"?25.4:1,c=new Set(e||n.deselectedHoleIndices||[]);let u=0;for(let f=0;f<n.innerHoles.length;f++){if(c.has(f))continue;const I=n.innerHoles[f];if(u++,"radius"in I){const b=I,S=2*Math.PI*b.radius*r,w={x:b.center.x,y:b.center.y},C=[{type:"arc",center:b.center,radius:b.radius,startAngle:0,endAngle:2*Math.PI,counterClockwise:!0}];o.push({stepIndex:u,originalHoleIndex:f,label:`Inner Hole #${f+1} (Ø${(b.radius*2).toFixed(n.units==="inch"?2:1)}${n.units==="inch"?"in":"mm"})`,layerName:"Layer 1 (Yellow)",layerColor:"#eab308",isOuter:!1,piercePoint:w,segments:C,lengthMm:S,simulatedDurationSec:i+S/a})}else{const b=I,S=yn(b)*r;let w=1/0,C=1/0,W=-1/0,U=-1/0;for(const v of b.segments)v.type==="line"?(w=Math.min(w,v.start.x,v.end.x),C=Math.min(C,v.start.y,v.end.y),W=Math.max(W,v.start.x,v.end.x),U=Math.max(U,v.start.y,v.end.y)):(w=Math.min(w,v.center.x-v.radius),C=Math.min(C,v.center.y-v.radius),W=Math.max(W,v.center.x+v.radius),U=Math.max(U,v.center.y+v.radius));const D=b.segments[0],A=isFinite(w)?{x:(w+W)/2,y:(C+U)/2}:D?D.type==="line"?D.start:{x:D.center.x+D.radius*Math.cos(D.startAngle),y:D.center.y+D.radius*Math.sin(D.startAngle)}:{x:0,y:0};o.push({stepIndex:u,originalHoleIndex:f,label:`Inner Cutout #${f+1}`,layerName:"Layer 1 (Yellow)",layerColor:"#eab308",isOuter:!1,piercePoint:A,segments:b.segments,lengthMm:S,simulatedDurationSec:i+S/a})}}u++;const l=yn(n.outerContour)*r,p=n.outerContour.segments[0],g=p?p.type==="line"?p.start:{x:p.center.x+p.radius*Math.cos(p.startAngle),y:p.center.y+p.radius*Math.sin(p.startAngle)}:{x:0,y:0};return o.push({stepIndex:u,label:`Outer Perimeter (${n.name})`,layerName:"Layer 0 (White/Green)",layerColor:"#22c55e",isOuter:!0,piercePoint:g,segments:n.outerContour.segments,lengthMm:l,simulatedDurationSec:i+l/a}),o}function go(n){if("radius"in n){const{center:{x:t,y:i},radius:e}=n;return`M ${(t-e).toFixed(3)} ${i.toFixed(3)} A ${e.toFixed(3)} ${e.toFixed(3)} 0 1 0 ${(t+e).toFixed(3)} ${i.toFixed(3)} A ${e.toFixed(3)} ${e.toFixed(3)} 0 1 0 ${(t-e).toFixed(3)} ${i.toFixed(3)} Z`}return tn(n)}function Mn(n,t={}){if(t.viewStyle==="realistic_gate"&&t.jaliParams)return na(n,t.jaliParams);const e=n.units==="inch"?1/25.4:1,o=n.boundingBox,a=Math.max(35*e,o.width*.14),s=Math.max(50*e,o.height*.22),r=Math.max(55*e,o.height*.24),c=Math.max(80*e,o.width*.3),u=o.minX-a,d=o.minY-r,l=o.width+a+c,p=o.height+r+s,g=t.simulationState,f=new Set(t.excludedHoleIndices||n.deselectedHoleIndices||[]),I=po(n,2500,.25,Array.from(f)),b=n.innerHoles.length>8||n.outerContour.segments.length>30;let T="";const S=g&&g.activeStepIndex===I.length,w=g&&g.activeStepIndex>I.length,C=tn(n.outerContour);T+=`<path d="${C}" fill="rgba(34, 197, 94, 0.03)" stroke="${S?"#4ade80":w?"#16a34a":"#22c55e"}" stroke-width="${S?1.8:b?1.1:1.3}" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" />`;function D(ie){let K=1/0,J=1/0,ce=-1/0,xe=-1/0;for(const te of ie.segments)te.type==="line"?(K=Math.min(K,te.start.x,te.end.x),J=Math.min(J,te.start.y,te.end.y),ce=Math.max(ce,te.start.x,te.end.x),xe=Math.max(xe,te.start.y,te.end.y)):(K=Math.min(K,te.center.x-te.radius),J=Math.min(J,te.center.y-te.radius),ce=Math.max(ce,te.center.x+te.radius),xe=Math.max(xe,te.center.y+te.radius));return isFinite(K)?{x:(K+ce)/2,y:(J+xe)/2}:{x:0,y:0}}let A=0;for(let ie=0;ie<n.innerHoles.length;ie++){const K=f.has(ie),J=n.innerHoles[ie];K||A++;const ce=!K&&g&&g.activeStepIndex===A,xe=!K&&g&&g.activeStepIndex>A,te=(t.dfmIssues||[]).filter(re=>re.holeIndex===ie||re.relatedHoleIndex===ie),Pe=te.some(re=>re.severity==="error"),Be=te.some(re=>re.severity==="warning"),be=t.highlightedHoleIndex===ie||t.highlightedHoleIndices&&t.highlightedHoleIndices.includes(ie);let ge=ce?"#facc15":xe?"#0284c7":"#38bdf8",$e="rgba(56, 189, 248, 0.02)",ke=ce?1.6:b?.95:1.15;K?(ge="#f59e0b",$e="rgba(245, 158, 11, 0.04)",ke=1):Pe?(ge="#ef4444",$e="rgba(239, 68, 68, 0.07)",ke=b?1.1:1.35):Be&&(ge="#f59e0b",$e="rgba(245, 158, 11, 0.05)",ke=b?1.05:1.25),be&&(ge="#38bdf8",$e="rgba(56, 189, 248, 0.20)",ke=1.8);const st=K?`Hole #${ie+1} (Skipped / Excluded from Cut — Under Plate Thickness)`:`Hole #${ie+1}${te.length>0?" — "+te.map(re=>re.message).join(" | "):" (Inner Cutout)"}`,Te=K?`stroke-dasharray="${3*e},${2*e}" opacity="0.6"`:"";if(T+=`<g class="cad-hole cad-hole-${ie} ${K?"hole-excluded":""} ${Be?"dfm-hole-warning":""} ${Pe?"dfm-hole-error":""} ${be?"hole-highlighted":""}" data-hole-index="${ie}" style="cursor: pointer;">`,T+=`<title>${st}</title>`,"radius"in J){const re=J;be&&(T+=`<circle cx="${re.center.x}" cy="${re.center.y}" r="${re.radius+4*e}" fill="none" stroke="#38bdf8" stroke-width="1.5" vector-effect="non-scaling-stroke" stroke-dasharray="3,2">
          <animate attributeName="opacity" values="1;0.4;1" dur="0.9s" repeatCount="indefinite" />
        </circle>`),T+=`<circle cx="${re.center.x}" cy="${re.center.y}" r="${re.radius}" fill="${$e}" stroke="${ge}" stroke-width="${ke}" vector-effect="non-scaling-stroke" ${Te} />`;const Se=Math.min(6*e,re.radius*.5);Se>.5*e&&!K&&(T+=`<line x1="${re.center.x-Se}" y1="${re.center.y}" x2="${re.center.x+Se}" y2="${re.center.y}" stroke="${Be||Pe?ge:"rgba(234, 179, 8, 0.35)"}" stroke-width="0.75" vector-effect="non-scaling-stroke" />`,T+=`<line x1="${re.center.x}" y1="${re.center.y-Se}" x2="${re.center.x}" y2="${re.center.y+Se}" stroke="${Be||Pe?ge:"rgba(234, 179, 8, 0.35)"}" stroke-width="0.75" vector-effect="non-scaling-stroke" />`)}else{const re=tn(J);be&&(T+=`<path d="${re}" fill="none" stroke="#38bdf8" stroke-width="2" vector-effect="non-scaling-stroke" stroke-dasharray="4,2">
          <animate attributeName="opacity" values="1;0.4;1" dur="0.9s" repeatCount="indefinite" />
        </path>`),T+=`<path d="${re}" fill="${$e}" stroke="${ge}" stroke-width="${ke}" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" ${Te} />`}T+="</g>"}const v=(t.showCutOrder||g)&&!t.hideCamBadges;let y="";const h=n.innerHoles.length>20,m=h?Math.max(6*e,Math.min(10*e,l*.012)):Math.max(9*e,Math.min(16*e,l*.022));if(v){let ie="";for(let K=0;K<I.length;K++){const J=I[K].piercePoint;K===0?ie+=`M ${J.x.toFixed(3)} ${J.y.toFixed(3)}`:ie+=` L ${J.x.toFixed(3)} ${J.y.toFixed(3)}`}y+=`<path d="${ie}" fill="none" stroke="#38bdf8" stroke-dasharray="${3*e},${3*e}" stroke-width="${1*e}" opacity="0.45" />`;for(const K of I){const J=K.isOuter?null:K.originalHoleIndex??K.stepIndex-1;let ce=K.piercePoint;if(!K.isOuter&&J!==null&&n.innerHoles[J]){const le=n.innerHoles[J];ce="radius"in le?le.center:D(le)}const xe=g&&g.activeStepIndex===K.stepIndex,te=J!==null?(t.dfmIssues||[]).filter(le=>le.holeIndex===J||le.relatedHoleIndex===J):[],Pe=te.some(le=>le.severity==="error"),Be=te.some(le=>le.severity==="warning"),be=J!==null&&(t.highlightedHoleIndex===J||t.highlightedHoleIndices&&t.highlightedHoleIndices.includes(J));let ge=K.isOuter?"#22c55e":"#eab308",$e=xe?"#ffffff":"#0f172a",ke="#0b1120";Pe?(ge="#ef4444",$e=be?"#ffffff":"#7f1d1d",ke="#ffffff"):Be&&(ge="#f59e0b",$e=be?"#ffffff":"#78350f",ke="#0b1120"),be&&($e="#38bdf8");const st=(xe?3*e:0)+(be?4*e:0),Te=be?`<circle cx="0" cy="0" r="${m+7*e}" fill="none" stroke="#38bdf8" stroke-width="${2*e}">
             <animate attributeName="r" values="${m+5*e};${m+9*e}" dur="0.8s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="indefinite" />
           </circle>`:"",re=(Be||Pe)&&!be?`<circle cx="0" cy="0" r="${m+3.5*e}" fill="none" stroke="${Pe?"#ef4444":"#f59e0b"}" stroke-width="${1.2*e}" stroke-dasharray="${2*e},${2*e}" />`:"",Se=K.isOuter?`Outer Perimeter Cut (Step #${K.stepIndex})`:`Hole #${K.stepIndex}${te.length>0?" — "+te.map(le=>le.message).join(" | "):" (Inner Cutout)"}`,rt=m*(h?.95:1.1);y+=`
        <g class="cam-badge ${J!==null?`cam-badge-hole-${J}`:"cam-badge-outer"} ${Be?"cam-badge-warning":""} ${Pe?"cam-badge-error":""}" 
           ${J!==null?`data-hole-index="${J}"`:""} 
           transform="translate(${ce.x}, ${ce.y}) scale(1, -1)" 
           style="cursor: pointer;">
           <title>${Se}</title>
           ${Te}
           ${re}
           <circle cx="0" cy="0" r="${m+st}" fill="${ge}" stroke="${$e}" stroke-width="${(xe||be?2.2:1.2)*e}" />
           <text x="0" y="${rt*.35}" text-anchor="middle" font-size="${rt}" font-family="'JetBrains Mono', monospace" font-weight="800" fill="${ke}">
             ${K.stepIndex}
           </text>
         </g>
      `}}else for(let ie=0;ie<n.innerHoles.length;ie++){const K=(t.dfmIssues||[]).filter(ce=>ce.holeIndex===ie||ce.relatedHoleIndex===ie),J=t.highlightedHoleIndex===ie||t.highlightedHoleIndices&&t.highlightedHoleIndices.includes(ie);if(K.length>0||J){const ce=n.innerHoles[ie],xe="radius"in ce?ce.center:D(ce),te=K.some(ke=>ke.severity==="error"),Pe=J?"#38bdf8":te?"#ef4444":"#f59e0b",Be=J?"#ffffff":te?"#7f1d1d":"#78350f",be=te?"#ffffff":"#0b1120",ge=m*1.15,$e=J?`<circle cx="0" cy="0" r="${ge+6*e}" fill="none" stroke="#38bdf8" stroke-width="${2*e}">
               <animate attributeName="r" values="${ge+4*e};${ge+8*e}" dur="0.8s" repeatCount="indefinite" />
               <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="indefinite" />
             </circle>`:"";y+=`
          <g class="cam-badge dfm-hole-badge cam-badge-hole-${ie}" 
             data-hole-index="${ie}" 
             transform="translate(${xe.x}, ${xe.y}) scale(1, -1)" 
             style="cursor: pointer;">
            <title>Hole #${ie+1}: ${K.map(ke=>ke.message).join(" | ")}</title>
            ${$e}
            <circle cx="0" cy="0" r="${ge+3*e}" fill="none" stroke="${te?"#ef4444":"#f59e0b"}" stroke-width="${1.2*e}" stroke-dasharray="${2*e},${2*e}" />
            <circle cx="0" cy="0" r="${ge}" fill="${Pe}" stroke="${Be}" stroke-width="${1.8*e}" />
            <text x="0" y="${ge*1.1*.35}" text-anchor="middle" font-size="${ge*1.1}" font-family="'JetBrains Mono', monospace" font-weight="800" fill="${be}">
              ${ie+1}
            </text>
          </g>
        `}}let B="";if(g&&g.nozzlePos){const ie=g.nozzlePos.x,K=g.nozzlePos.y,J=g.isPiercing,ce=J?18*e:0,xe=J?`<circle cx="0" cy="0" r="${ce}" fill="none" stroke="#f97316" stroke-width="${2.5*e}" opacity="0.8">
           <animate attributeName="r" values="${6*e};${22*e}" dur="0.3s" repeatCount="indefinite" />
           <animate attributeName="opacity" values="1;0" dur="0.3s" repeatCount="indefinite" />
         </circle>`:"";B=`
      <!-- Active Laser Nozzle -->
      <g class="laser-nozzle-head" transform="translate(${ie}, ${K})">
        ${xe}
        <!-- Glow halo -->
        <circle cx="0" cy="0" r="${12*e}" fill="rgba(239, 68, 68, 0.25)" />
        <!-- Head outer housing -->
        <circle cx="0" cy="0" r="${7*e}" fill="#0f172a" stroke="#ef4444" stroke-width="${1.8*e}" />
        <!-- Laser beam spot -->
        <circle cx="0" cy="0" r="${2.8*e}" fill="#fef08a" />
        <!-- Crosshairs -->
        <line x1="${-10*e}" y1="0" x2="${10*e}" y2="0" stroke="#ef4444" stroke-width="${1*e}" />
        <line x1="0" y1="${-10*e}" x2="0" y2="${10*e}" stroke="#ef4444" stroke-width="${1*e}" />
      </g>
    `}const M=n.units,F="#94a3b8",_=Math.max(l,p),$=Math.max(14*e,_*.028),k=Math.max(20*e,_*.025),L=1.5*e,O=8*e,Y=3.5*e,j=o.maxY+s*.55,se=`
    <g class="dim-leader" stroke="${F}" stroke-width="${L}" fill="${F}">
      <line x1="${o.minX}" y1="${o.maxY}" x2="${o.minX}" y2="${j+O}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${o.maxX}" y1="${o.maxY}" x2="${o.maxX}" y2="${j+O}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${o.minX}" y1="${j}" x2="${o.maxX}" y2="${j}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${(o.minX+o.maxX)/2}" y="${j+$*.9}" text-anchor="middle" font-size="${$}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#0b1120" stroke-width="${Y}" paint-order="stroke fill" letter-spacing="0.02em">
        ${o.width.toFixed(2)} ${M}
      </text>
    </g>
  `,ye=o.maxX+k,et=`
    <g class="dim-leader" stroke="${F}" stroke-width="${L}" fill="${F}">
      <line x1="${o.maxX}" y1="${o.minY}" x2="${ye+O}" y2="${o.minY}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${o.maxX}" y1="${o.maxY}" x2="${ye+O}" y2="${o.maxY}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${ye}" y1="${o.minY}" x2="${ye}" y2="${o.maxY}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text transform="translate(${ye+$*.75}, ${(o.minY+o.maxY)/2}) rotate(-90)" text-anchor="middle" dominant-baseline="central" font-size="${$}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#0b1120" stroke-width="${Y}" paint-order="stroke fill" letter-spacing="0.02em">
        ${o.height.toFixed(2)} ${M}
      </text>
    </g>
  `,Xe=Math.max(10*e,l/20);return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${u} ${d} ${l} ${p}" width="100%" height="100%" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" style="background-color: #0b1120; border-radius: 8px;">
      <defs>
        <pattern id="cadGrid" width="${Xe}" height="${Xe}" patternUnits="userSpaceOnUse">
          <path d="M ${Xe} 0 L 0 0 0 ${Xe}" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="${1*e}"/>
        </pattern>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
        </marker>
      </defs>
      <rect x="${u}" y="${d}" width="${l}" height="${p}" fill="url(#cadGrid)" />
      
      <!-- Part Paths (Y flipped for CAD orientation) -->
      <g transform="translate(0, ${o.minY+o.maxY}) scale(1, -1)">
        <!-- Green dashed bounding box envelope (FabEngineer / CAM standard) -->
        <rect x="${o.minX}" y="${o.minY}" width="${o.width}" height="${o.height}" fill="none" stroke="#22c55e" stroke-dasharray="${3*e},${3*e}" stroke-width="${1*e}" opacity="0.4" />
        ${T}
        ${y}
        ${B}
      </g>

      <!-- Dimensions -->
      ${se}
      ${et}
    </svg>
  `}function na(n,t){const i=t.units==="inch",e=i?1/25.4:1,o=n.boundingBox.width,a=n.boundingBox.height,s=t.finishMaterial||"matte_black",r=t.backlightColor||"warm_white",c=t.gateType||"single_swing",u=c==="double_swing",d=c==="wall_panel",l=!d&&t.hasFrameTube!==!1,p=t.frameTubeWidthMm??(i?2:50),g=i?p>10?p/25.4:p:p<10?p*25.4:p,f=l?g:0,I=!d&&!!t.hasKickPlate,b=t.kickPlateHeightMm??(i?12:300),T=i?b>30?b/25.4:b:b<30?b*25.4:b,S=I?Math.max(0,Math.min(a*.4,T)):0,w=!d&&t.hasHinges!==!1,C=!d&&t.hasPullHandle!==!1,W=!d&&t.hasLockBox!==!1,U=o+(l?2*f:0),D=a+(l?2*f:0),A=u?i?.6:15:0,v=u?U*2+A:U,y=D,h=Math.max(v,y),m=Math.max(16*e,h*.03),B=Math.max(16*e,h*.034),M=Math.max(7*e,h*.011),F=Math.max(36*e,h*.045),_=Math.max(32*e,h*.04),$=Math.max(45*e,v*.12),k=Math.max(45*e,_+m*3.8),L=Math.max(55*e,y*.08,B*2.8),O=Math.max(55*e,F+m*2.4),Y=-$,j=-L,se=v+$+k,ye=y+L+O,et=tn(n.outerContour),Xe=n.innerHoles.map(go).join(" "),ie=`${et} ${Xe}`;let K="#475569",J="#334155",ce="#94a3b8";s==="royal_gold"?(K="#fef08a",J="#b45309",ce="#fde047"):s==="corten_rust"?(K="#fdba74",J="#7c2d12",ce="#ea580c"):s==="brushed_stainless"?(K="#ffffff",J="#475569",ce="#e2e8f0"):s==="champagne_bronze"&&(K="#fcd34d",J="#78350f",ce="#fbbf24");const xe=(Se,rt=!1)=>{const le=Se+(l?f:0),Qe=l?f:0;let Ne="";if(r!=="none"&&(Ne+=`
        <rect x="${le}" y="${Qe}" width="${o}" height="${a}" 
              fill="url(#glow_${r})" filter="url(#backlightBlur)" opacity="0.9" rx="${3*e}" />
      `),Ne+=`
      <g transform="translate(${le}, ${Qe})">
        <!-- Negative space perforated sheet metal plate -->
        <path d="${ie}" fill-rule="evenodd" fill="url(#mat_${s})" 
              filter="url(#plateShadow)" stroke="${K}" stroke-width="${.8*e}" stroke-opacity="0.6" />
        <!-- Inner cutout specular rim highlight -->
        <path d="${Xe}" fill="none" stroke="${K}" stroke-width="${.6*e}" stroke-opacity="0.4" />
      </g>
    `,I&&S>0){const de=Qe+a-S;Ne+=`
        <!-- Solid Bottom Kickplate -->
        <g class="kickplate">
          <rect x="${le}" y="${de}" width="${o}" height="${S}" 
                fill="url(#mat_${s})" stroke="${J}" stroke-width="${1.2*e}" />
          <!-- Embossed horizontal reveal grooves -->
          <line x1="${le+15*e}" y1="${de+S*.35}" x2="${le+o-15*e}" y2="${de+S*.35}" 
                stroke="${K}" stroke-width="${1.5*e}" stroke-opacity="0.5" />
          <line x1="${le+15*e}" y1="${de+S*.65}" x2="${le+o-15*e}" y2="${de+S*.65}" 
                stroke="${K}" stroke-width="${1.5*e}" stroke-opacity="0.5" />
          <!-- Corner fabrication rivet studs -->
          <circle cx="${le+12*e}" cy="${de+12*e}" r="${3*e}" fill="${ce}" opacity="0.8" />
          <circle cx="${le+o-12*e}" cy="${de+12*e}" r="${3*e}" fill="${ce}" opacity="0.8" />
          <circle cx="${le+12*e}" cy="${de+S-12*e}" r="${3*e}" fill="${ce}" opacity="0.8" />
          <circle cx="${le+o-12*e}" cy="${de+S-12*e}" r="${3*e}" fill="${ce}" opacity="0.8" />
        </g>
      `}if(l){const de=Se,he=0;Ne+=`
        <!-- Structural Box Tube Outer Frame -->
        <g class="box-tube-frame" filter="url(#frameShadow)">
          <!-- Top horizontal tube -->
          <rect x="${de}" y="${he}" width="${U}" height="${f}" fill="url(#tube_${s}_h)" stroke="${J}" stroke-width="${1.2*e}" />
          <!-- Bottom horizontal tube -->
          <rect x="${de}" y="${he+D-f}" width="${U}" height="${f}" fill="url(#tube_${s}_h)" stroke="${J}" stroke-width="${1.2*e}" />
          <!-- Left vertical tube -->
          <rect x="${de}" y="${he+f}" width="${f}" height="${D-2*f}" fill="url(#tube_${s}_v)" stroke="${J}" stroke-width="${1.2*e}" />
          <!-- Right vertical tube -->
          <rect x="${de+U-f}" y="${he+f}" width="${f}" height="${D-2*f}" fill="url(#tube_${s}_v)" stroke="${J}" stroke-width="${1.2*e}" />
          
          <!-- Mitred 45-degree corner weld seams -->
          <line x1="${de}" y1="${he}" x2="${de+f}" y2="${he+f}" stroke="${K}" stroke-width="${1.2*e}" stroke-opacity="0.7" />
          <line x1="${de+U}" y1="${he}" x2="${de+U-f}" y2="${he+f}" stroke="${K}" stroke-width="${1.2*e}" stroke-opacity="0.7" />
          <line x1="${de}" y1="${he+D}" x2="${de+f}" y2="${he+D-f}" stroke="${K}" stroke-width="${1.2*e}" stroke-opacity="0.7" />
          <line x1="${de+U}" y1="${he+D}" x2="${de+U-f}" y2="${he+D-f}" stroke="${K}" stroke-width="${1.2*e}" stroke-opacity="0.7" />
        </g>
      `}if(w){const he=!rt?Se-6*e:Se+U-6*e,Ae=[D*.15,D*.85];D>(i?48:1200)&&Ae.splice(1,0,D*.5);for(const Ce of Ae)Ne+=`
          <!-- Bullet Barrel Hinge -->
          <g class="bullet-hinge" transform="translate(${he}, ${Ce-24*e})">
            <!-- Top barrel -->
            <rect x="0" y="0" width="${12*e}" height="${22*e}" rx="${3*e}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1*e}" />
            <!-- Brass washer ring -->
            <rect x="${-1*e}" y="${22*e}" width="${14*e}" height="${4*e}" rx="${1*e}" fill="#fde047" stroke="#b45309" stroke-width="${.8*e}" />
            <!-- Bottom barrel -->
            <rect x="0" y="${26*e}" width="${12*e}" height="${22*e}" rx="${3*e}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1*e}" />
            <!-- Highlight sheen -->
            <line x1="${3*e}" y1="${2*e}" x2="${3*e}" y2="${20*e}" stroke="#ffffff" stroke-width="${.8*e}" opacity="0.6" />
            <line x1="${3*e}" y1="${28*e}" x2="${3*e}" y2="${46*e}" stroke="#ffffff" stroke-width="${.8*e}" opacity="0.6" />
          </g>
        `}if(C||W){const de=rt,he=de?Se+(l?f/2:25*e):Se+U-(l?f/2:25*e),Ae=D*.5;if(W){const Ce=Math.max(30*e,f*.8),xt=90*e,He=de?Se+(l?4*e:8*e):Se+U-(l?f-4*e:38*e);Ne+=`
          <!-- Lock Box & Keyway -->
          <g class="lockbox" transform="translate(${He}, ${Ae-xt/2})">
            <rect x="0" y="0" width="${Ce}" height="${xt}" rx="${4*e}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1.2*e}" />
            <!-- Key cylinder -->
            <circle cx="${Ce/2}" cy="${28*e}" r="${7*e}" fill="#1e293b" stroke="#64748b" stroke-width="${1*e}" />
            <rect x="${Ce/2-2*e}" y="${28*e}" width="${4*e}" height="${9*e}" fill="#0f172a" />
            <!-- Modern lever latch -->
            <rect x="${de?Ce/2-18*e:Ce/2+2*e}" y="${58*e}" width="${20*e}" height="${7*e}" rx="${2*e}" fill="#e2e8f0" stroke="#0f172a" stroke-width="${.8*e}" />
          </g>
        `}if(C){const Ce=Math.min(D*.45,600*e),xt=(de?28:-28)*e,He=he+xt;Ne+=`
          <!-- Sleek Architectural Bar Pull Handle -->
          <g class="pull-handle">
            <!-- Standoff brackets -->
            <rect x="${he<He?he:He}" y="${Ae-Ce/2+15*e}" width="${Math.abs(He-he)}" height="${10*e}" fill="#475569" stroke="#0f172a" stroke-width="${.8*e}" />
            <rect x="${he<He?he:He}" y="${Ae+Ce/2-25*e}" width="${Math.abs(He-he)}" height="${10*e}" fill="#475569" stroke="#0f172a" stroke-width="${.8*e}" />
            <!-- Vertical Cylindrical T-Bar -->
            <rect x="${He-6*e}" y="${Ae-Ce/2}" width="${12*e}" height="${Ce}" rx="${6*e}" 
                  fill="url(#mat_brushed_stainless)" stroke="#1e293b" stroke-width="${1.2*e}" filter="url(#handleShadow)" />
            <!-- Specular sheen -->
            <line x1="${He-2*e}" y1="${Ae-Ce/2+4*e}" x2="${He-2*e}" y2="${Ae+Ce/2-4*e}" stroke="#ffffff" stroke-width="${1*e}" opacity="0.75" />
          </g>
        `}}if(d){const de=Math.max(8*e,o*.018),he=[{x:le+25*e,y:Qe+25*e},{x:le+o-25*e,y:Qe+25*e},{x:le+o-25*e,y:Qe+a-25*e},{x:le+25*e,y:Qe+a-25*e}];a>(i?36:900)&&(he.push({x:le+25*e,y:Qe+a/2}),he.push({x:le+o-25*e,y:Qe+a/2}));for(const Ae of he)Ne+=`
          <!-- Stainless Standoff Screw Head -->
          <g class="standoff-mount" transform="translate(${Ae.x}, ${Ae.y})">
            <circle cx="0" cy="0" r="${de}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1.2*e}" filter="url(#handleShadow)" />
            <!-- Hex Socket -->
            <polygon points="${-3*e},${-1.7*e} 0,${-3.4*e} ${3*e},${-1.7*e} ${3*e},${1.7*e} 0,${3.4*e} ${-3*e},${1.7*e}" fill="#1e293b" />
          </g>
        `}return Ne};let te="";u?(te+=xe(0,!1),te+=xe(U+A,!0),te+=`
      <!-- Double Swing Center Slide Drop Bolt -->
      <g class="center-drop-bolt" transform="translate(${U+A/2-12*e}, ${4*e})">
        <rect x="0" y="0" width="${24*e}" height="${42*e}" rx="${3*e}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1*e}" />
        <rect x="${9*e}" y="${8*e}" width="${6*e}" height="${24*e}" rx="${2*e}" fill="#cbd5e1" />
      </g>
    `):te+=xe(0,!1);const Pe=t.units,Be="#94a3b8",be=y+F*.6,ge=`
    <g class="dim-leader" stroke="${Be}" stroke-width="${1.6*e}" fill="${Be}">
      <line x1="0" y1="${y+8*e}" x2="0" y2="${be+10*e}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${v}" y1="${y+8*e}" x2="${v}" y2="${be+10*e}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="0" y1="${be}" x2="${v}" y2="${be}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${v/2}" y="${be+m*.9}" text-anchor="middle" font-size="${m}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#080c14" stroke-width="${4.5*e}" paint-order="stroke fill" letter-spacing="0.02em">
        ${v.toFixed(i?2:0)} ${Pe} ${u?`(2× ${U.toFixed(i?2:0)} ${Pe} Leaves)`:""}
      </text>
    </g>
  `,$e=v+_*.6,ke=`
    <g class="dim-leader" stroke="${Be}" stroke-width="${1.6*e}" fill="${Be}">
      <line x1="${v+8*e}" y1="0" x2="${$e+10*e}" y2="0" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${v+8*e}" y1="${y}" x2="${$e+10*e}" y2="${y}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${$e}" y1="0" x2="${$e}" y2="${y}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text transform="translate(${$e+m*.75}, ${y/2}) rotate(-90)" text-anchor="middle" dominant-baseline="central" font-size="${m}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#080c14" stroke-width="${4.5*e}" paint-order="stroke fill" letter-spacing="0.02em">
        ${y.toFixed(i?2:0)} ${Pe}
      </text>
    </g>
  `,st=s.replace(/_/g," ").toUpperCase(),Te=(t.patternType||"architectural_jali").replace(/_/g," ").toUpperCase(),re=u?"DOUBLE SWING ENTRANCE GATE":d?"WALL JALI SCREEN PANEL":"SINGLE SWING GATE";return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${Y} ${j} ${se} ${ye}" width="100%" height="100%" style="background-color: #080c14; border-radius: 8px;">
      <defs>
        <!-- Background Architectural Wall Shadow -->
        <filter id="plateShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="${10*e}" stdDeviation="${12*e}" flood-color="#000000" flood-opacity="0.75" />
        </filter>
        <filter id="frameShadow" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="${8*e}" stdDeviation="${10*e}" flood-color="#000000" flood-opacity="0.6" />
        </filter>
        <filter id="handleShadow" x="-30%" y="-20%" width="160%" height="140%">
          <feDropShadow dx="${3*e}" dy="${6*e}" stdDeviation="${6*e}" flood-color="#000000" flood-opacity="0.5" />
        </filter>
        <filter id="backlightBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="${18*e}" />
        </filter>

        <!-- Finishes: Matte Black Powder Coat -->
        <linearGradient id="mat_matte_black" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2a303c" />
          <stop offset="35%" stop-color="#191e24" />
          <stop offset="70%" stop-color="#111418" />
          <stop offset="100%" stop-color="#1f242d" />
        </linearGradient>
        <linearGradient id="tube_matte_black_h" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3d4451" />
          <stop offset="25%" stop-color="#1e232b" />
          <stop offset="75%" stop-color="#12161b" />
          <stop offset="100%" stop-color="#2d333f" />
        </linearGradient>
        <linearGradient id="tube_matte_black_v" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#3d4451" />
          <stop offset="25%" stop-color="#1e232b" />
          <stop offset="75%" stop-color="#12161b" />
          <stop offset="100%" stop-color="#2d333f" />
        </linearGradient>

        <!-- Finishes: Royal Gold / Antique Brass -->
        <linearGradient id="mat_royal_gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#92400e" />
          <stop offset="20%" stop-color="#d97706" />
          <stop offset="45%" stop-color="#fef08a" />
          <stop offset="65%" stop-color="#fde047" />
          <stop offset="85%" stop-color="#b45309" />
          <stop offset="100%" stop-color="#78350f" />
        </linearGradient>
        <linearGradient id="tube_royal_gold_h" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="30%" stop-color="#d97706" />
          <stop offset="70%" stop-color="#92400e" />
          <stop offset="100%" stop-color="#b45309" />
        </linearGradient>
        <linearGradient id="tube_royal_gold_v" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="30%" stop-color="#d97706" />
          <stop offset="70%" stop-color="#92400e" />
          <stop offset="100%" stop-color="#b45309" />
        </linearGradient>

        <!-- Finishes: Corten Weathered Rust Steel -->
        <linearGradient id="mat_corten_rust" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7c2d12" />
          <stop offset="30%" stop-color="#9a3412" />
          <stop offset="55%" stop-color="#c2410c" />
          <stop offset="75%" stop-color="#ea580c" />
          <stop offset="100%" stop-color="#7c2d12" />
        </linearGradient>
        <linearGradient id="tube_corten_rust_h" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fdba74" />
          <stop offset="35%" stop-color="#c2410c" />
          <stop offset="80%" stop-color="#7c2d12" />
          <stop offset="100%" stop-color="#9a3412" />
        </linearGradient>
        <linearGradient id="tube_corten_rust_v" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#fdba74" />
          <stop offset="35%" stop-color="#c2410c" />
          <stop offset="80%" stop-color="#7c2d12" />
          <stop offset="100%" stop-color="#9a3412" />
        </linearGradient>

        <!-- Finishes: Brushed Stainless Steel 304 -->
        <linearGradient id="mat_brushed_stainless" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="25%" stop-color="#94a3b8" />
          <stop offset="50%" stop-color="#f8fafc" />
          <stop offset="75%" stop-color="#cbd5e1" />
          <stop offset="100%" stop-color="#64748b" />
        </linearGradient>
        <linearGradient id="tube_brushed_stainless_h" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="30%" stop-color="#cbd5e1" />
          <stop offset="70%" stop-color="#64748b" />
          <stop offset="100%" stop-color="#94a3b8" />
        </linearGradient>
        <linearGradient id="tube_brushed_stainless_v" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="30%" stop-color="#cbd5e1" />
          <stop offset="70%" stop-color="#64748b" />
          <stop offset="100%" stop-color="#94a3b8" />
        </linearGradient>

        <!-- Finishes: Champagne Bronze -->
        <linearGradient id="mat_champagne_bronze" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#78350f" />
          <stop offset="30%" stop-color="#b45309" />
          <stop offset="50%" stop-color="#fbbf24" />
          <stop offset="70%" stop-color="#d97706" />
          <stop offset="100%" stop-color="#451a03" />
        </linearGradient>
        <linearGradient id="tube_champagne_bronze_h" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fef3c7" />
          <stop offset="35%" stop-color="#d97706" />
          <stop offset="75%" stop-color="#78350f" />
          <stop offset="100%" stop-color="#92400e" />
        </linearGradient>
        <linearGradient id="tube_champagne_bronze_v" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#fef3c7" />
          <stop offset="35%" stop-color="#d97706" />
          <stop offset="75%" stop-color="#78350f" />
          <stop offset="100%" stop-color="#92400e" />
        </linearGradient>

        <!-- Backlight Glow Gradients -->
        <radialGradient id="glow_warm_white" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stop-color="#fef3c7" stop-opacity="0.95" />
          <stop offset="40%" stop-color="#fbbf24" stop-opacity="0.75" />
          <stop offset="80%" stop-color="#ea580c" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="glow_cool_white" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stop-color="#f0f9ff" stop-opacity="0.95" />
          <stop offset="45%" stop-color="#7dd3fc" stop-opacity="0.75" />
          <stop offset="80%" stop-color="#0284c7" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="glow_amber_gold" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stop-color="#fef08a" stop-opacity="0.95" />
          <stop offset="50%" stop-color="#f59e0b" stop-opacity="0.75" />
          <stop offset="85%" stop-color="#b45309" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="glow_neon_cyan" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stop-color="#a5f3fc" stop-opacity="0.95" />
          <stop offset="45%" stop-color="#06b6d4" stop-opacity="0.75" />
          <stop offset="85%" stop-color="#0e7490" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>

        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="${M}" markerHeight="${M}" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
        </marker>
      </defs>

      <!-- Architectural Backdrop Wall with subtle ambient spotlight -->
      <radialGradient id="studioSpotlight" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stop-color="#141c2e" />
        <stop offset="60%" stop-color="#0b1120" />
        <stop offset="100%" stop-color="#050811" />
      </radialGradient>
      <rect x="${Y}" y="${j}" width="${se}" height="${ye}" fill="url(#studioSpotlight)" />

      <!-- Top Architectural Badge Label -->
      <g class="studio-title-badge" transform="translate(${v/2}, ${-L*.45})">
        <text text-anchor="middle" font-size="${B}" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" fill="#f1f5f9" stroke="#080c14" stroke-width="${5*e}" paint-order="stroke fill" letter-spacing="0.05em">
          ✨ ${re} — ${st} | ${Te}
        </text>
      </g>

      <!-- Ground Baseline Reference -->
      <line x1="${-$*.3}" y1="${y+2*e}" x2="${v+k*.3}" y2="${y+2*e}" stroke="#334155" stroke-width="${1.5*e}" stroke-dasharray="${6*e},${4*e}" opacity="0.6" />

      <!-- Gate Leaves & Structure -->
      ${te}

      <!-- Dimension Leaders -->
      ${ge}
      ${ke}
    </svg>
  `}function ia(n,t=0){const i=n.sheetSize.widthMm,e=n.sheetSize.lengthMm,o=i*.08,a=e*.08,s=i+2*o,r=e+2*a;let c="";const u=n.packedParts.filter(g=>g.sheetIndex===t),d=["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"];for(const g of u){const f=g.color||d[g.partIndex%d.length],I=g.rotated,b=g.partName?`${g.partName}`:`#${g.partIndex+1}`,T=Math.max(11,Math.min(g.width,g.height)*.16);c+=`
      <g class="nested-part" id="part_${g.id}">
        <rect x="${g.x}" y="${g.y}" width="${g.width}" height="${g.height}" 
              fill="${f}25" stroke="${f}" stroke-width="2" rx="2" />
        <text x="${g.x+g.width/2}" y="${g.y+g.height/2-2}" 
              text-anchor="middle" font-size="${T}" 
              font-family="'JetBrains Mono', monospace" fill="#ffffff" font-weight="bold">
          ${b}
        </text>
        <text x="${g.x+g.width/2}" y="${g.y+g.height/2+T}" 
              text-anchor="middle" font-size="${Math.max(9,T*.75)}" 
              font-family="'JetBrains Mono', monospace" fill="#94a3b8">
          ${g.width.toFixed(0)} × ${g.height.toFixed(0)} mm ${I?"⟲90°":""}
        </text>
      </g>
    `}let l="";if(t===n.sheetsRequired-1&&n.remnantLengthMm>50){const g=e-n.remnantLengthMm;l=`
      <rect x="10" y="${g}" width="${i-20}" height="${n.remnantLengthMm-10}" 
            fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" stroke-dasharray="4,4" stroke-width="1.5" />
      <text x="${i/2}" y="${g+n.remnantLengthMm/2}" 
            text-anchor="middle" font-size="${Math.max(14,i*.025)}" 
            font-family="'JetBrains Mono', monospace" fill="#38bdf8" font-weight="600">
        REUSABLE REMNANT OFFCUT: ${i} × ${n.remnantLengthMm} mm
      </text>
    `}return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${-o} ${-a} ${s} ${r}" width="100%" height="100%" style="background-color: #0b1120; border-radius: 8px;">
      <defs>
        <pattern id="nestGrid" width="${Math.max(50,s/20)}" height="${Math.max(50,r/20)}" patternUnits="userSpaceOnUse">
          <path d="M ${Math.max(50,s/20)} 0 L 0 0 0 ${Math.max(50,r/20)}" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
        </pattern>
      </defs>
      
      <!-- Background Grid -->
      <rect x="${-o}" y="${-a}" width="${s}" height="${r}" fill="url(#nestGrid)" />

      <!-- Full Sheet Boundary -->
      <rect x="0" y="0" width="${i}" height="${e}" fill="rgba(15, 23, 42, 0.85)" stroke="#64748b" stroke-width="3" rx="4" />

      <!-- Sheet Margin Guide -->
      <rect x="10" y="10" width="${i-20}" height="${e-20}" fill="none" stroke="rgba(100, 116, 139, 0.4)" stroke-dasharray="6,6" stroke-width="1" />

      <!-- Packed Parts -->
      ${c}

      <!-- Remnant Offcut -->
      ${l}

      <!-- Sheet Title & Dimensions -->
      <text x="${i/2}" y="-20" text-anchor="middle" font-size="${Math.max(16,i*.028)}" font-family="'JetBrains Mono', monospace" fill="#f8fafc" font-weight="700">
        ${n.sheetSize.name.toUpperCase()} (Sheet ${t+1} of ${n.sheetsRequired})
      </text>
      <text x="${i/2}" y="${e+35}" text-anchor="middle" font-size="${Math.max(14,i*.022)}" font-family="'JetBrains Mono', monospace" fill="#94a3b8">
        Utilization: ${n.sheetUtilizationPercent}% | Skeleton Scrap: ${n.totalSkeletonScrapMassKg} kg | Parts on Bed: ${u.length} / ${n.partsRequested}
      </text>
    </svg>
  `}function tn(n){if(n.segments.length===0)return"";const t=[];for(let i=0;i<n.segments.length;i++){const e=n.segments[i];if(i===0){const o=e.type==="line"?e.start:{x:e.center.x+e.radius*Math.cos(e.startAngle),y:e.center.y+e.radius*Math.sin(e.startAngle)};t.push(`M ${o.x.toFixed(3)} ${o.y.toFixed(3)}`)}if(e.type==="line")t.push(`L ${e.end.x.toFixed(3)} ${e.end.y.toFixed(3)}`);else if(e.type==="arc"){const o=e.center.x+e.radius*Math.cos(e.endAngle),a=e.center.y+e.radius*Math.sin(e.endAngle);let s=e.endAngle-e.startAngle;e.counterClockwise?s<0&&(s+=2*Math.PI):s>0&&(s-=2*Math.PI);const r=Math.abs(s)>Math.PI?1:0,c=e.counterClockwise?1:0;t.push(`A ${e.radius.toFixed(3)} ${e.radius.toFixed(3)} 0 ${r} ${c} ${o.toFixed(3)} ${a.toFixed(3)}`)}}return n.isClosed&&t.push("Z"),t.join(" ")}function oa(n,t=44){const i=n.boundingBox,e=Math.max(i.width,i.height)*.08||1,o=i.minX-e,a=i.minY-e,s=i.width+e*2||1,r=i.height+e*2||1,c=tn(n.outerContour);let u="";if(n.innerHoles)for(const p of n.innerHoles)u+=go(p)+" ";const d=Math.max(s,r)*.035,l=Math.max(s,r)*.025;return`<svg width="${t}" height="${t}" viewBox="${o.toFixed(2)} ${a.toFixed(2)} ${s.toFixed(2)} ${r.toFixed(2)}" xmlns="http://www.w3.org/2000/svg" style="display:block;border-radius:4px;background:#090d16;flex-shrink:0;">
    <path d="${c}" fill="rgba(34, 197, 94, 0.15)" stroke="#22c55e" stroke-width="${d}" vector-effect="non-scaling-stroke" stroke-linejoin="round" />
    ${u?`<path d="${u}" fill="#090d16" stroke="#38bdf8" stroke-width="${l}" vector-effect="non-scaling-stroke" stroke-linejoin="round" />`:""}
  </svg>`}function aa(n,t,i,e,o,a,s="Valued Customer",r=""){const c=o.currency==="INR",u=c?"₹":"$",d=c?`INV-${Math.floor(1e5+Math.random()*9e5)}`:`RFQ-${Math.floor(1e5+Math.random()*9e5)}`,l=c?new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),p=a.upiId||"shop@upi",g=o.finalTotalWithGst,f=Math.round(g/2*100)/100,I=`upi://pay?pa=${encodeURIComponent(p)}&pn=${encodeURIComponent(a.shopName)}&am=${f.toFixed(2)}&cu=INR&tn=${encodeURIComponent(d)}`,b=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(I)}`,T=c?`Dim: ${t.boundingBoxWidthMm.toFixed(0)} × ${t.boundingBoxHeightMm.toFixed(0)} mm | Thick: ${e.thicknessMm} mm<br>Grade: ${i} (${e.gaugeName}) | Gas: ${a.assistGas.toUpperCase()}<br>Cut Length: ${(t.totalCutLengthMm/1e3).toFixed(2)} m | Pierces: ${t.pierceCount} / pc`:`Dim: ${t.boundingBoxWidthInches.toFixed(2)}" × ${t.boundingBoxHeightInches.toFixed(2)}" | Gauge: ${e.gaugeName}<br>Grade: ${i} | Gas: ${a.assistGas.toUpperCase()}<br>Cut Length: ${t.totalCutLengthInches.toFixed(1)} in | Pierces: ${t.pierceCount} / pc | Est. Weight: ${t.theoreticalWeightLbs.toFixed(2)} lbs`;return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${c?"Proforma Invoice":"Commercial Quotation"} - ${d}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #1e293b; margin: 0; padding: 30px; background: #fff; line-height: 1.5; }
    .invoice-card { max-width: 800px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header-row { display: flex; justify-content: space-between; border-bottom: 2px solid #0284c7; padding-bottom: 20px; margin-bottom: 24px; }
    .shop-title { font-size: 22px; font-weight: 800; color: #0f172a; margin: 0; }
    .shop-meta { font-size: 13px; color: #64748b; margin-top: 4px; }
    .invoice-tag { text-align: right; }
    .invoice-title { font-size: 20px; font-weight: 800; color: #0284c7; margin: 0; text-transform: uppercase; }
    .invoice-meta { font-size: 13px; color: #475569; margin-top: 4px; }
    .bill-to-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px 18px; margin-bottom: 24px; font-size: 14px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px; }
    th { background: #f1f5f9; color: #334155; text-align: left; padding: 10px 12px; border-bottom: 2px solid #cbd5e1; font-weight: 700; }
    td { padding: 10px 12px; border-bottom: 1px solid #e2e8f0; vertical-align: top; }
    .text-right { text-align: right; }
    .text-center { text-align: center; }
    .summary-grid { display: flex; justify-content: space-between; align-items: flex-start; margin-top: 20px; }
    .upi-box { border: 1px dashed #0284c7; background: #f0f9ff; border-radius: 8px; padding: 14px; text-align: center; width: 220px; }
    .upi-box img { width: 120px; height: 120px; border-radius: 4px; margin-bottom: 6px; }
    .upi-title { font-size: 12px; font-weight: 700; color: #0369a1; text-transform: uppercase; }
    .upi-sub { font-size: 11px; color: #64748b; }
    .terms-box { border: 1px solid #cbd5e1; background: #f8fafc; border-radius: 8px; padding: 14px; width: 260px; font-size: 12px; color: #334155; }
    .terms-title { font-size: 11px; font-weight: 800; color: #0284c7; text-transform: uppercase; margin-bottom: 8px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; }
    .terms-item { margin-bottom: 5px; }
    .totals-table { width: 340px; }
    .totals-table td { padding: 6px 10px; }
    .total-row { font-size: 16px; font-weight: 800; color: #0f172a; border-top: 2px solid #0284c7; }
    .footer-terms { margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #64748b; }
    .print-btn-bar { text-align: center; margin-bottom: 20px; }
    .btn-print { background: #0284c7; color: #fff; font-size: 14px; font-weight: 600; padding: 8px 18px; border: none; border-radius: 6px; cursor: pointer; }
    @media print {
      .print-btn-bar { display: none; }
      body { padding: 0; background: #fff; }
      .invoice-card { border: none; box-shadow: none; padding: 0; }
    }
  </style>
</head>
<body>
  <div class="print-btn-bar">
    <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>
  <div class="invoice-card">
    <div class="header-row">
      <div style="display: flex; align-items: center; gap: 16px;">
        <img src="/logo-mark.svg" alt="CNC Laser" style="width: 52px; height: 52px; border-radius: 8px; flex-shrink: 0;" />
        <div>
          <h1 class="shop-title">${a.shopName}</h1>
          <div class="shop-meta">
            <div>${a.shopAddress||(c?"MIDC Industrial Area, Pune, Maharashtra":"1420 Industrial Pkwy, Cleveland, OH 44135")}</div>
            <div>Phone: ${a.shopPhone||(c?"+91 98220 12345":"(216) 555-0198")} ${c?`| UPI: <strong>${p}</strong>`:""}</div>
            ${c?`<div>GSTIN: <strong>${a.shopGstin||"27AABCS1429B1Z8"}</strong> | State Code: 27 (MH)</div>`:`<div>NAICS: <strong>${a.naicsCode||"332813"}</strong> | Tax ID / EIN: <strong>${a.einOrTaxId||"Verified"}</strong></div>`}
          </div>
        </div>
      </div>
      <div class="invoice-tag">
        <h2 class="invoice-title">${c?"PROFORMA INVOICE":"COMMERCIAL MANUFACTURING QUOTATION"}</h2>
        <div class="invoice-meta">
          <div>Ref No: <strong>${d}</strong></div>
          <div>Date: <strong>${l}</strong></div>
          <div>${c?`SAC/HSN: <strong>${o.hsnSacCode.split(" ")[0]}</strong>`:`NAICS: <strong>${a.naicsCode?a.naicsCode.split(" ")[0]:"332813"}</strong> | Validity: <strong>15 Days</strong>`}</div>
        </div>
      </div>
    </div>

    <div class="bill-to-box">
      <strong>Customer:</strong> ${s} ${r?`(${r})`:""} — <em>Delivery: ${c?"Ex-Works / 24-48 Hours":"FOB Origin / 3-5 Business Days"}</em>
    </div>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Item Description & Specs</th>
          <th class="text-center">Mode</th>
          <th class="text-right">Qty</th>
          <th class="text-right">Unit Rate</th>
          <th class="text-right">Amount (${u})</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <strong>${n.name}</strong><br>
            <span style="font-size: 12px; color: #64748b;">
              ${T}
            </span>
          </td>
          <td class="text-center"><span style="background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 700;">${c?o.quotingMode.toUpperCase():"CUSTOM FAB"}</span></td>
          <td class="text-right">${o.quantity}</td>
          <td class="text-right">${u}${o.discountedUnitPrice.toFixed(2)}</td>
          <td class="text-right"><strong>${u}${(o.discountedUnitPrice*o.quantity).toFixed(2)}</strong></td>
        </tr>
        ${o.unitSecondaryCost>0?`
        <tr>
          <td>2</td>
          <td>
            <strong>Secondary Value-Add Operations</strong><br>
            <span style="font-size: 12px; color: #64748b;">
              ${o.secondaryBreakdown.bendingCost>0?`CNC Press Brake Bending (${u}${o.secondaryBreakdown.bendingCost}) | `:""}
              ${o.secondaryBreakdown.deburringCost>0?`Edge Deburring (${u}${o.secondaryBreakdown.deburringCost}) | `:""}
              ${o.secondaryBreakdown.tappingCost>0?`Tapping (${u}${o.secondaryBreakdown.tappingCost}) | `:""}
              ${o.secondaryBreakdown.surfaceFinishCost>0?`Surface Finishing (${u}${o.secondaryBreakdown.surfaceFinishCost})`:""}
            </span>
          </td>
          <td class="text-center"><span style="background: #f1f5f9; color: #475569; padding: 3px 8px; border-radius: 4px; font-size: 11px;">VALUE-ADD</span></td>
          <td class="text-right">${o.quantity}</td>
          <td class="text-right">${u}${o.unitSecondaryCost.toFixed(2)}</td>
          <td class="text-right"><strong>${u}${(o.unitSecondaryCost*o.quantity).toFixed(2)}</strong></td>
        </tr>`:""}
      </tbody>
    </table>

    <div class="summary-grid">
      ${c?`
      <div class="upi-box">
        <div class="upi-title">Scan to Pay 50% Advance</div>
        <img src="${b}" alt="UPI QR Code">
        <div class="upi-sub">GPay / PhonePe / Paytm<br>Advance: <strong>${u}${f.toFixed(2)}</strong></div>
      </div>
      `:`
      <div class="terms-box">
        <div class="terms-title">Commercial & Remittance Terms</div>
        <div class="terms-item">Payment Terms: <strong>${a.paymentTerms||"Net 30, Credit Card, ACH"}</strong></div>
        <div class="terms-item">Tax Status: <strong>${a.salesTaxExempt?"Tax-Exempt (Resale Certificate)":`Sales Tax (${a.gstPercent||7}%)`}</strong></div>
        <div class="terms-item">Lead Time: <strong>${a.leadTimeDays||3} to 5 Business Days ARO</strong></div>
        <div class="terms-item">Delivery: <strong>FOB Origin / Ex-Works</strong></div>
        <div class="terms-item">CAM Spec: <strong>Trumpf / SigmaNEST Cut-Ready DXF</strong></div>
      </div>
      `}

      <table class="totals-table">
        <tr>
          <td>Subtotal (Excl. Tax):</td>
          <td class="text-right">${u}${o.finalOrderTotal.toFixed(2)}</td>
        </tr>
        ${c?a.isInterstateSale?`
        <tr>
          <td>Integrated GST (IGST 18%):</td>
          <td class="text-right">${u}${o.igstAmount.toFixed(2)}</td>
        </tr>`:`
        <tr>
          <td>Central GST (CGST 9%):</td>
          <td class="text-right">${u}${o.cgstAmount.toFixed(2)}</td>
        </tr>
        <tr>
          <td>State GST (SGST 9%):</td>
          <td class="text-right">${u}${o.sgstAmount.toFixed(2)}</td>
        </tr>`:a.salesTaxExempt?`
        <tr>
          <td>Sales Tax (Tax-Exempt):</td>
          <td class="text-right">$0.00</td>
        </tr>
        `:`
        <tr>
          <td>Estimated Sales Tax (${a.gstPercent||7}%):</td>
          <td class="text-right">${u}${o.gstAmount.toFixed(2)}</td>
        </tr>
        `}
        <tr class="total-row">
          <td>Grand Total:</td>
          <td class="text-right" style="color: #0284c7;">${u}${o.finalTotalWithGst.toFixed(2)}</td>
        </tr>
      </table>
    </div>

    <div class="footer-terms">
      <strong>Terms & Conditions:</strong>
      <ol style="margin: 6px 0 0 16px; padding: 0;">
        ${c?`
        <li>Payment: 50% advance along with PO confirmation; balance before delivery.</li>
        <li>Material Tolerance: Cutting accuracy ±0.15 mm on CypCut fiber laser.</li>
        <li>Goods once cut as per confirmed drawing/DXF cannot be returned or cancelled.</li>
        <li>Subject to Pune jurisdiction.</li>
        `:`
        <li>Quotation is valid for 15 days from date of issue.</li>
        <li>Standard sheet metal laser cutting tolerance: ±0.005" to ±0.010" unless drawing specifies otherwise.</li>
        <li>Parts produced strictly to approved electronic CAD/DXF data. Material certifications available upon request.</li>
        <li>Payment terms Net 30 upon approved credit, or major credit cards/ACH prior to shipment.</li>
        `}
      </ol>
    </div>
  </div>
</body>
</html>`}function sa(n,t,i,e,o,a){const s=`JOB-${Math.floor(1e3+Math.random()*9e3)}`,r=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Laser Job Card - ${s}</title>
  <style>
    body { font-family: monospace, sans-serif; color: #000; margin: 0; padding: 20px; background: #fff; }
    .job-card { max-width: 750px; margin: 0 auto; border: 2px solid #000; padding: 20px; }
    .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 16px; }
    .header h1 { margin: 0; font-size: 20px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; }
    .box { border: 1px solid #000; padding: 10px; font-size: 13px; }
    .box-title { font-weight: bold; text-decoration: underline; margin-bottom: 6px; }
    table { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 12px; }
    th, td { border: 1px solid #000; padding: 6px; text-align: left; }
    th { background: #eee; }
    .checklist { margin-top: 16px; border: 1px solid #000; padding: 10px; }
    .sign-row { display: flex; justify-content: space-between; margin-top: 30px; font-size: 12px; }
    @media print { .no-print { display: none; } }
  </style>
</head>
<body>
  <div class="no-print" style="text-align: center; margin-bottom: 16px;">
    <button onclick="window.print()" style="padding: 8px 16px; font-weight: bold; cursor: pointer;">🖨️ Print Machine Job Card</button>
  </div>
  <div class="job-card">
    <div class="header">
      <h1>${a.shopName.toUpperCase()}</h1>
      <div>LASER CUTTING OPERATOR JOB CARD / SHOP TRAVELER</div>
      <div><strong>Card #: ${s}</strong> | Date: ${r}</div>
    </div>

    <div class="grid">
      <div class="box">
        <div class="box-title">PART & MATERIAL SPECIFICATIONS</div>
        <div>Part Name: <strong>${n.name}</strong></div>
        <div>Grade: <strong>${i}</strong></div>
        <div>Thickness: <strong>${e.thicknessMm} mm (${e.gaugeName})</strong></div>
        <div>Dimensions: <strong>${t.boundingBoxWidthMm.toFixed(1)} × ${t.boundingBoxHeightMm.toFixed(1)} mm</strong></div>
        <div>Est. Mass/pc: <strong>${t.theoreticalWeightKg.toFixed(2)} kg</strong></div>
      </div>
      <div class="box">
        <div class="box-title">PRODUCTION & CNC PARAMETERS</div>
        <div>Cut Qty: <strong>${o} PIECES</strong></div>
        <div>Assist Gas: <strong>${a.assistGas.toUpperCase()}</strong></div>
        <div>Pierces/pc: <strong>${t.pierceCount}</strong></div>
        <div>Cut Length: <strong>${(t.totalCutLengthMm/1e3).toFixed(2)} meters</strong></div>
        <div>CAM Software: <strong>CYPCUT (FSCUT)</strong></div>
      </div>
    </div>

    <div class="box">
      <div class="box-title">CYPCUT LAYER CONFIGURATION</div>
      <table>
        <thead>
          <tr>
            <th>Layer</th>
            <th>Color</th>
            <th>Function</th>
            <th>Toolpath Setting</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Layer 0</td>
            <td>White (7)</td>
            <td>Outer Contour</td>
            <td>External Kerf Offset + Lead-In</td>
          </tr>
          <tr>
            <td>Layer 1</td>
            <td>Yellow (2)</td>
            <td>Inner Holes / Cutouts</td>
            <td>Internal Kerf Offset + Pre-Pierce</td>
          </tr>
          <tr>
            <td>Layer 2</td>
            <td>Cyan (4)</td>
            <td>Center Marks / Etch</td>
            <td>Low-power Pulse / Zero Kerf</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="checklist">
      <div class="box-title">OPERATOR QUALITY CHECKLIST</div>
      <div>[ ] Sheet thickness confirmed with digital vernier calipers before loading</div>
      <div>[ ] Nozzle alignment centered (tape test passed)</div>
      <div>[ ] Focal position and assist gas pressure set correctly</div>
      <div>[ ] First-piece dimension inspection: Length: _____ mm | Hole Dia: _____ mm</div>
      <div>[ ] Cut edge visual check: Slag-free / minimal burr verified</div>
      <div>[ ] Total count verified: _____ pcs cut and packed</div>
    </div>

    <div class="sign-row">
      <div>Laser Operator: ___________________</div>
      <div>QC Inspector: ___________________</div>
      <div>Shop Supervisor: ___________________</div>
    </div>
  </div>
</body>
</html>`}function Yi(n,t){const i=t.currency==="INR",e=i?"₹":"$",o=n.shopSettings,a=`PRJ-${Math.floor(1e5+Math.random()*9e5)}`,s=i?new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),r=o.upiId||"shop@upi",c=t.finalTotalWithGst,u=Math.round(c/2*100)/100,d=`upi://pay?pa=${encodeURIComponent(r)}&pn=${encodeURIComponent(o.shopName)}&am=${u.toFixed(2)}&cu=INR&tn=${encodeURIComponent(a)}`,l=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(d)}`;let p="";for(let g=0;g<n.items.length;g++){const f=n.items[g],I=f.partGeometry.boundingBox,T=f.partGeometry.units==="inch"||!i?`${(I.width/(f.partGeometry.units==="inch"?1:25.4)).toFixed(2)}" × ${(I.height/(f.partGeometry.units==="inch"?1:25.4)).toFixed(2)}"`:`${I.width.toFixed(0)} × ${I.height.toFixed(0)} mm`,S=i?`${(f.metrics.totalCutLengthMm/1e3).toFixed(1)} m`:`${f.metrics.totalCutLengthInches.toFixed(1)} in`;p+=`
      <tr>
        <td class="text-center">${g+1}</td>
        <td>
          <strong>${f.partGeometry.name}</strong><br>
          <span style="font-size: 12px; color: #64748b;">
            ${T} | ${f.materialName} (${f.gaugeThicknessMm}mm) | Cut: ${S}
          </span>
        </td>
        <td class="text-center">${f.unitQuote.quotingMode==="job_work"?i?"Job Work":"Labor Only":i?"Turnkey":"Fabricated"}</td>
        <td class="text-right"><strong>${f.quantity}</strong></td>
        <td class="text-right">${e}${f.unitQuote.finalUnitPrice.toFixed(2)}</td>
        <td class="text-right"><strong>${e}${f.totalPrice.toFixed(2)}</strong></td>
      </tr>
    `}return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${i?"Project Tax Invoice":"Commercial Project Quotation"} - ${a}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #1e293b; margin: 0; padding: 30px; background: #fff; line-height: 1.5; }
    .invoice-card { max-width: 850px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header-row { display: flex; justify-content: space-between; border-bottom: 2px solid #0284c7; padding-bottom: 20px; margin-bottom: 24px; }
    .shop-title { font-size: 22px; font-weight: 800; color: #0f172a; margin: 0; }
    .shop-meta { font-size: 13px; color: #64748b; margin-top: 4px; }
    .invoice-tag { text-align: right; }
    .invoice-title { font-size: 20px; font-weight: 800; color: #0284c7; margin: 0; text-transform: uppercase; }
    .invoice-meta { font-size: 13px; color: #475569; margin-top: 4px; }
    .bill-to-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px 18px; margin-bottom: 24px; font-size: 14px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px; }
    th { background: #f1f5f9; color: #334155; text-align: left; padding: 10px 12px; border-bottom: 2px solid #cbd5e1; font-weight: 700; }
    td { padding: 10px 12px; border-bottom: 1px solid #e2e8f0; vertical-align: top; }
    .text-right { text-align: right; }
    .text-center { text-align: center; }
    .summary-grid { display: flex; justify-content: space-between; align-items: flex-start; margin-top: 20px; }
    .upi-box { border: 1px dashed #0284c7; background: #f0f9ff; border-radius: 8px; padding: 14px; text-align: center; width: 220px; }
    .upi-box img { width: 120px; height: 120px; border-radius: 4px; margin-bottom: 6px; }
    .upi-title { font-size: 12px; font-weight: 700; color: #0369a1; text-transform: uppercase; }
    .upi-sub { font-size: 11px; color: #64748b; }
    .terms-box { border: 1px solid #cbd5e1; background: #f8fafc; border-radius: 8px; padding: 14px; width: 280px; font-size: 12px; color: #334155; }
    .terms-title { font-size: 11px; font-weight: 800; color: #0284c7; text-transform: uppercase; margin-bottom: 8px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; }
    .terms-item { margin-bottom: 5px; }
    .totals-table { width: 360px; }
    .totals-table td { padding: 6px 10px; }
    .total-row { font-size: 16px; font-weight: 800; color: #0f172a; border-top: 2px solid #0284c7; }
    .footer-terms { margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #64748b; }
    .print-btn-bar { text-align: center; margin-bottom: 20px; }
    .btn-print { background: #0284c7; color: #fff; font-size: 14px; font-weight: 600; padding: 8px 18px; border: none; border-radius: 6px; cursor: pointer; }
    @media print {
      .print-btn-bar { display: none; }
      body { padding: 0; background: #fff; }
      .invoice-card { border: none; box-shadow: none; padding: 0; }
    }
  </style>
</head>
<body>
  <div class="print-btn-bar">
    <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>
  <div class="invoice-card">
    <div class="header-row">
      <div style="display: flex; align-items: center; gap: 16px;">
        <img src="/logo-mark.svg" alt="CNC Laser" style="width: 52px; height: 52px; border-radius: 8px; flex-shrink: 0;" />
        <div>
          <h1 class="shop-title">${o.shopName}</h1>
          <div class="shop-meta">
            <div>${o.shopAddress||(i?"MIDC Industrial Area, Bhosari, Pune, MH":"1420 Industrial Pkwy, Cleveland, OH 44135")}</div>
            <div>Phone: ${o.shopPhone||(i?"+91 98220 12345":"(216) 555-0198")} ${i?`| UPI: <strong>${r}</strong>`:""}</div>
            ${i?`<div>GSTIN: <strong>${o.shopGstin||"27AABCS1429B1Z8"}</strong> | State Code: 27 (Maharashtra)</div>`:`<div>NAICS: <strong>${o.naicsCode||"332813"}</strong> | Tax ID / EIN: <strong>${o.einOrTaxId||"Verified"}</strong></div>`}
          </div>
        </div>
      </div>
      <div class="invoice-tag">
        <h2 class="invoice-title">${i?"CONSOLIDATED TAX INVOICE":"PROJECT QUOTATION"}</h2>
        <div class="invoice-meta">
          <div>Project Ref: <strong>${a}</strong></div>
          <div>Date: <strong>${s}</strong></div>
          <div>${i?"SAC: <strong>9988</strong> | HSN: <strong>7326</strong>":`NAICS: <strong>${o.naicsCode?o.naicsCode.split(" ")[0]:"332813"}</strong> | Validity: <strong>15 Calendar Days</strong>`}</div>
        </div>
      </div>
    </div>

    <div class="bill-to-box">
      <strong>Customer:</strong> ${n.customerName||"Valued Customer"} ${n.customerPhone?`(${n.customerPhone})`:""} | 
      <strong>Project Name:</strong> ${n.projectName||"CNC Laser Fabrication Batch"} | 
      <em>Nesting: ${t.nestingResult.sheetsRequired} Sheet(s) of ${t.nestingResult.sheetSize.name.split(" - ")[0]} (${t.nestingResult.sheetUtilizationPercent}% yield)</em>
    </div>

    <table>
      <thead>
        <tr>
          <th class="text-center" style="width: 40px;">#</th>
          <th>Item Description & Dimensions</th>
          <th class="text-center">Mode</th>
          <th class="text-right">Qty</th>
          <th class="text-right">Unit Rate</th>
          <th class="text-right">Amount (${e})</th>
        </tr>
      </thead>
      <tbody>
        ${p}
      </tbody>
    </table>

    <div class="summary-grid">
      ${i?`
      <div class="upi-box">
        <div class="upi-title">Scan UPI QR to Pay Advance</div>
        <img src="${l}" alt="UPI QR Code" />
        <div class="upi-sub">Pay 50% Advance: <strong>${e}${u.toFixed(2)}</strong></div>
        <div class="upi-sub" style="margin-top: 4px; font-family: monospace;">${r}</div>
      </div>
      `:`
      <div class="terms-box">
        <div class="terms-title">Commercial & Remittance Terms</div>
        <div class="terms-item">Payment Terms: <strong>${o.paymentTerms||"Net 30, Credit Card, ACH"}</strong></div>
        <div class="terms-item">Tax Status: <strong>${o.salesTaxExempt?"Tax-Exempt (Resale Certificate Verified)":`Sales Tax (${o.gstPercent||7}%)`}</strong></div>
        <div class="terms-item">Lead Time: <strong>${o.leadTimeDays||3} to 5 Business Days ARO</strong></div>
        <div class="terms-item">Delivery: <strong>FOB Origin / Ex-Works</strong></div>
        <div class="terms-item">CAM Spec: <strong>Trumpf / SigmaNEST Cut-Ready DXF</strong></div>
      </div>
      `}

      <table class="totals-table">
        <tr>
          <td>Subtotal (${t.totalPartsCount} pcs):</td>
          <td class="text-right">${e}${t.subtotalBeforeDiscount.toFixed(2)}</td>
        </tr>
        ${t.volumeDiscountPercent>0?`
        <tr>
          <td style="color: #16a34a;">Volume Discount (${t.volumeDiscountPercent}%):</td>
          <td class="text-right" style="color: #16a34a;">-${e}${t.discountAmount.toFixed(2)}</td>
        </tr>`:""}
        <tr>
          <td>${i?"Taxable Value:":"Taxable Subtotal:"}</td>
          <td class="text-right">${e}${t.orderTotalBeforeGst.toFixed(2)}</td>
        </tr>
        ${i?o.isInterstateSale?`
        <tr>
          <td>Integrated GST (IGST 18%):</td>
          <td class="text-right">${e}${t.igstAmount.toFixed(2)}</td>
        </tr>`:`
        <tr>
          <td>Central GST (CGST 9%):</td>
          <td class="text-right">${e}${t.cgstAmount.toFixed(2)}</td>
        </tr>
        <tr>
          <td>State GST (SGST 9%):</td>
          <td class="text-right">${e}${t.sgstAmount.toFixed(2)}</td>
        </tr>`:o.salesTaxExempt?`
        <tr>
          <td>Sales Tax (Tax-Exempt):</td>
          <td class="text-right">$0.00</td>
        </tr>
        `:`
        <tr>
          <td>Estimated Sales Tax (${o.gstPercent||7}%):</td>
          <td class="text-right">${e}${t.gstAmount.toFixed(2)}</td>
        </tr>
        `}
        <tr class="total-row">
          <td>Total Project Amount:</td>
          <td class="text-right">${e}${t.finalTotalWithGst.toFixed(2)}</td>
        </tr>
      </table>
    </div>

    <div class="footer-terms">
      <strong>Terms & Conditions:</strong>
      <ol style="margin: 6px 0 0 18px; padding: 0;">
        ${i?`
        <li>50% advance along with confirmed PO to schedule machine table time. Balance before dispatch.</li>
        <li><strong>Rate Validity:</strong> Rates valid for 48 hours based on secondary steel market prices.</li>
        <li>Files exported directly to CypCut / FSCUT native CAM profiles. Inspection tolerance ±0.2 mm.</li>
        `:`
        <li>Quotation is valid for 15 days from issue date.</li>
        <li>Standard sheet metal cutting tolerance: ±0.005" to ±0.010" per ASTM standards.</li>
        <li>Parts produced strictly to confirmed electronic CAD/DXF data. Material certifications provided upon request.</li>
        <li>Payment terms Net 30 upon approved credit, or credit card prior to shipment.</li>
        `}
      </ol>
    </div>
  </div>
</body>
</html>`}function ra(n,t){const i=n.shopSettings,e=`JOB-${Math.floor(1e5+Math.random()*9e5)}`,o=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});let a="";for(let s=0;s<n.items.length;s++){const r=n.items[s],c=r.partGeometry.boundingBox;a+=`
      <tr>
        <td class="text-center">${s+1}</td>
        <td><strong>${r.partGeometry.name}</strong></td>
        <td>${c.width.toFixed(0)} × ${c.height.toFixed(0)} mm</td>
        <td>${r.materialName} (${r.gaugeThicknessMm}mm)</td>
        <td class="text-right"><strong>${r.quantity} pcs</strong></td>
        <td>${(r.metrics.totalCutLengthMm/1e3).toFixed(1)} m / ${r.metrics.pierceCount*r.quantity} pts</td>
      </tr>
    `}return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Shop Floor Multi-Part Job Card - ${e}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #1e293b; margin: 0; padding: 30px; background: #fff; line-height: 1.5; }
    .jobcard { max-width: 850px; margin: 0 auto; border: 2px solid #0f172a; border-radius: 6px; padding: 28px; }
    .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f172a; padding-bottom: 16px; margin-bottom: 20px; }
    .title { font-size: 22px; font-weight: 800; text-transform: uppercase; margin: 0; color: #0f172a; }
    .meta { font-size: 13px; color: #475569; text-align: right; }
    .info-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; margin-bottom: 20px; font-size: 13px; }
    .info-item strong { color: #0f172a; display: block; font-size: 11px; text-transform: uppercase; margin-bottom: 2px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px; }
    th { background: #0f172a; color: #fff; text-align: left; padding: 8px 10px; font-size: 12px; text-transform: uppercase; }
    td { padding: 8px 10px; border-bottom: 1px solid #cbd5e1; }
    .text-right { text-align: right; }
    .text-center { text-align: center; }
    .checklist { background: #fffbeb; border: 1px solid #fef3c7; border-radius: 6px; padding: 14px; margin-bottom: 20px; font-size: 12px; }
    .box-title { font-weight: 700; color: #92400e; margin-bottom: 8px; text-transform: uppercase; }
    .sign-row { display: flex; justify-content: space-between; margin-top: 30px; font-size: 12px; border-top: 1px solid #cbd5e1; padding-top: 14px; }
    @media print {
      .print-btn-bar { display: none; }
      body { padding: 0; }
      .jobcard { border: 2px solid #000; padding: 15px; }
    }
  </style>
</head>
<body>
  <div class="print-btn-bar" style="text-align: center; margin-bottom: 20px;">
    <button onclick="window.print()" style="background: #0f172a; color: #fff; padding: 8px 20px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">🖨️ Print Job Card</button>
  </div>
  <div class="jobcard">
    <div class="header">
      <div>
        <h1 class="title">CNC LASER PROJECT CUTTING JOB CARD</h1>
        <div style="font-size: 13px; color: #64748b; font-weight: 600;">${i.shopName} | Laser Controller: CypCut / FSCUT</div>
      </div>
      <div class="meta">
        <div>Job Card No: <strong>${e}</strong></div>
        <div>Date: <strong>${o}</strong></div>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-item"><strong>Customer / PO Ref</strong>${n.customerName||"Tata AutoComp"}</div>
      <div class="info-item"><strong>Project Assembly</strong>${n.projectName||"Skid Parts Batch"}</div>
      <div class="info-item"><strong>Total Parts Scheduled</strong>${t.totalPartsCount} pcs across ${t.totalItemsCount} shapes</div>
      <div class="info-item"><strong>Mill Sheet Size</strong>${t.nestingResult.sheetSize.name.split(" - ")[0]}</div>
      <div class="info-item"><strong>Sheets Required</strong>${t.nestingResult.sheetsRequired} Sheet(s) (${t.nestingResult.sheetUtilizationPercent}% yield)</div>
      <div class="info-item"><strong>Cut Length / Pierces</strong>${t.totalCutLengthMeters}m | ${t.totalPierces} pts</div>
    </div>

    <table>
      <thead>
        <tr>
          <th class="text-center">#</th>
          <th>Part Description</th>
          <th>Size (W × H)</th>
          <th>Material & Gauge</th>
          <th class="text-right">Batch Qty</th>
          <th>Cut Length / Pierces</th>
        </tr>
      </thead>
      <tbody>
        ${a}
      </tbody>
    </table>

    <div class="checklist">
      <div class="box-title">MACHINE OPERATOR CUT SEQUENCE CHECKLIST</div>
      <div>[ ] Sheet thickness measured and confirmed before gantry loading</div>
      <div>[ ] Laser beam focus centered (tape blast test verified)</div>
      <div>[ ] <strong>CUT SEQUENCE VERIFIED:</strong> All Layer 1 (Yellow) Inner Holes cut BEFORE Layer 0 (White) Outer Perimeter</div>
      <div>[ ] Remnant offcut saved to rack: ${t.nestingResult.remnantWidthMm} × ${t.nestingResult.remnantLengthMm} mm</div>
      <div>[ ] Finished parts count verified and tagged with job number: _____ pcs</div>
    </div>

    <div class="sign-row">
      <div>Laser Operator: ___________________</div>
      <div>Quality Inspector: ___________________</div>
      <div>Supervisor: ___________________</div>
    </div>
  </div>
</body>
</html>`}function ca(n={}){const t=document.getElementById("demoVideoModal"),i=document.getElementById("btnOpenDemoModal"),e=document.getElementById("btnOpenJeepShowcase"),o=document.getElementById("demoThumbTrigger"),a=document.getElementById("closeDemoModalBtn"),s=document.getElementById("demoLocalVideo");if(!t)return;const r=t.querySelectorAll(".demo-modal-tab-btn"),c=t.querySelectorAll(".demo-tab-pane");function u(S){if(r.forEach(w=>{w.classList.toggle("active",w.dataset.demotab===S)}),c.forEach(w=>{const C=w.id.toLowerCase().includes(S.toLowerCase());w.classList.toggle("hidden",!C)}),s)if(S==="video"){s.currentTime=0;const w=s.play();w!==void 0&&w.catch(()=>{s.muted=!0,s.play().catch(()=>{})})}else s.pause()}r.forEach(S=>{S.addEventListener("click",()=>{const w=S.dataset.demotab||"cad";u(w)})});const d=t.querySelectorAll(".demo-finish-swatch-btn"),l=document.getElementById("demoFinishJeepImg"),p=t.querySelectorAll(".demo-backlight-btn"),g=document.getElementById("demoBacklightGlow");d.forEach(S=>{S.addEventListener("click",()=>{d.forEach(C=>C.classList.remove("active")),S.classList.add("active");const w=S.dataset.demofinish||"matte_black";l&&(l.className=`demo-finish-jeep-img finish-${w.replace(/_/g,"-")}`)})}),p.forEach(S=>{S.addEventListener("click",()=>{p.forEach(C=>C.classList.remove("active")),S.classList.add("active");const w=S.dataset.demolight||"warm_white";g&&(w==="off"?g.style.opacity="0":w==="cool_white"?(g.style.opacity="1",g.style.background="radial-gradient(circle, rgba(147, 197, 253, 0.45) 0%, rgba(147, 197, 253, 0) 70%)"):w==="amber_gold"?(g.style.opacity="1",g.style.background="radial-gradient(circle, rgba(249, 115, 22, 0.5) 0%, rgba(249, 115, 22, 0) 70%)"):(g.style.opacity="1",g.style.background="radial-gradient(circle, rgba(251, 191, 36, 0.45) 0%, rgba(251, 191, 36, 0) 70%)"))})});function f(S="cad"){t.classList.remove("hidden"),u(S)}function I(){t.classList.add("hidden"),s&&s.pause()}i==null||i.addEventListener("click",()=>f("cad")),e==null||e.addEventListener("click",()=>f("cad")),o==null||o.addEventListener("click",()=>f("cad")),a==null||a.addEventListener("click",I);const b=document.getElementById("btnModalLoadJeepCad"),T=document.getElementById("btnModalDxfLoad");[b,T].forEach(S=>{S==null||S.addEventListener("click",()=>{I(),n.onLoadJeepToCad&&n.onLoadJeepToCad()})}),t.addEventListener("click",S=>{S.target===t&&I()}),window.addEventListener("keydown",S=>{S.key==="Escape"&&!t.classList.contains("hidden")&&I()});try{const S=new URLSearchParams(window.location.search),w=window.location.hash.toLowerCase(),C=(S.get("demo")||S.get("play")||"").toLowerCase();C==="video"||C==="1"||C==="true"||w==="#video"||w==="#demo"?setTimeout(()=>{f("video")},400):(C==="cad"||C==="jeep"||w==="#cad")&&setTimeout(()=>{f("cad")},400)}catch{}return{openModal:f,closeModal:I,switchTab:u}}function ln(n,t="inch",i=0){if(n==null)return i;if(typeof n=="number")return isNaN(n)?i:n;let e=n.toString().trim();if(!e)return i;const o=/mm$/i.test(e);e=e.replace(/["']|in(ch(es)?)?|mm/gi,"").trim();let a=i;const s=e.match(/^(-?\d+)\s*[-_ ]\s*(\d+)\/(\d+)$/);if(s){const r=parseFloat(s[1]),c=parseFloat(s[2]),u=parseFloat(s[3]);if(u!==0){const d=c/u;a=r>=0?r+d:r-d}}else{const r=e.match(/^(-?\d+)\/(\d+)$/);if(r){const c=parseFloat(r[1]),u=parseFloat(r[2]);u!==0&&(a=c/u)}else{const c=parseFloat(e);isNaN(c)||(a=c)}}return o&&t==="inch"&&(a=a/25.4),isNaN(a)?i:a}function Xi(n){const t=[],i=n.boundingBox,e=n.units==="inch",o=e?"in":"mm";t.push({x:i.minX,y:i.minY,type:"bbox_corner",label:"BBox Bottom-Left"},{x:i.maxX,y:i.minY,type:"bbox_corner",label:"BBox Bottom-Right"},{x:i.maxX,y:i.maxY,type:"bbox_corner",label:"BBox Top-Right"},{x:i.minX,y:i.maxY,type:"bbox_corner",label:"BBox Top-Left"},{x:(i.minX+i.maxX)/2,y:i.minY,type:"bbox_edge",label:"Bottom Edge Midpoint"},{x:(i.minX+i.maxX)/2,y:i.maxY,type:"bbox_edge",label:"Top Edge Midpoint"},{x:i.minX,y:(i.minY+i.maxY)/2,type:"bbox_edge",label:"Left Edge Midpoint"},{x:i.maxX,y:(i.minY+i.maxY)/2,type:"bbox_edge",label:"Right Edge Midpoint"},{x:(i.minX+i.maxX)/2,y:(i.minY+i.maxY)/2,type:"bbox_edge",label:"Part Center"});for(let c=0;c<n.innerHoles.length;c++){const u=n.innerHoles[c],d=c+1;if("radius"in u){const l=u,p=(l.radius*2).toFixed(e?3:1);t.push({x:l.center.x,y:l.center.y,type:"hole_center",label:`Hole #${d} Center (Ø${p}${o})`}),t.push({x:l.center.x+l.radius,y:l.center.y,type:"hole_quadrant",label:`Hole #${d} East Quadrant`},{x:l.center.x-l.radius,y:l.center.y,type:"hole_quadrant",label:`Hole #${d} West Quadrant`},{x:l.center.x,y:l.center.y+l.radius,type:"hole_quadrant",label:`Hole #${d} North Quadrant`},{x:l.center.x,y:l.center.y-l.radius,type:"hole_quadrant",label:`Hole #${d} South Quadrant`})}else{const l=u;for(const p of l.segments)if(p.type==="line")t.push({x:p.start.x,y:p.start.y,type:"vertex",label:`Cutout #${d} Vertex`},{x:p.end.x,y:p.end.y,type:"vertex",label:`Cutout #${d} Vertex`},{x:(p.start.x+p.end.x)/2,y:(p.start.y+p.end.y)/2,type:"midpoint",label:`Cutout #${d} Edge Midpoint`});else if(p.type==="arc"){const g=p.center.x+p.radius*Math.cos(p.startAngle),f=p.center.y+p.radius*Math.sin(p.startAngle),I=p.center.x+p.radius*Math.cos(p.endAngle),b=p.center.y+p.radius*Math.sin(p.endAngle);t.push({x:g,y:f,type:"vertex",label:`Cutout #${d} Arc Endpoint`},{x:I,y:b,type:"vertex",label:`Cutout #${d} Arc Endpoint`},{x:p.center.x,y:p.center.y,type:"hole_center",label:`Cutout #${d} Arc Center`})}}}for(const c of n.outerContour.segments)if(c.type==="line")t.push({x:c.start.x,y:c.start.y,type:"vertex",label:"Outer Perimeter Vertex"},{x:c.end.x,y:c.end.y,type:"vertex",label:"Outer Perimeter Vertex"},{x:(c.start.x+c.end.x)/2,y:(c.start.y+c.end.y)/2,type:"midpoint",label:"Outer Edge Midpoint"});else if(c.type==="arc"){const u=c.center.x+c.radius*Math.cos(c.startAngle),d=c.center.y+c.radius*Math.sin(c.startAngle),l=c.center.x+c.radius*Math.cos(c.endAngle),p=c.center.y+c.radius*Math.sin(c.endAngle);t.push({x:u,y:d,type:"vertex",label:"Outer Arc Endpoint"},{x:l,y:p,type:"vertex",label:"Outer Arc Endpoint"},{x:c.center.x,y:c.center.y,type:"hole_center",label:"Outer Arc Center"})}const a={hole_center:6,vertex:5,hole_quadrant:4,midpoint:3,bbox_corner:2,bbox_edge:1},s=[],r=.001;for(const c of t){const u=s.findIndex(d=>Math.abs(d.x-c.x)<r&&Math.abs(d.y-c.y)<r);if(u===-1)s.push(c);else{const d=s[u],l=a[d.type]||0;(a[c.type]||0)>l&&(s[u]=c)}}return s}function Qi(n,t,i,e=18){let o=null,a=1/0;for(const s of t){const r=i(s),c=Math.hypot(n.x-r.x,n.y-r.y);c<=e&&c<a&&(a=c,o=s)}return o}function la(n,t,i){const e=t.x-n.x,o=t.y-n.y,a=Math.hypot(e,o);let r=Math.atan2(o,e)*180/Math.PI;r<0&&(r+=360);const c=i==="inch";let u="",d="",l="",p="";return c?(u=`${a.toFixed(3)} in`,d=`${(a*25.4).toFixed(2)} mm`,l=`${Math.abs(e).toFixed(3)} in`,p=`${Math.abs(o).toFixed(3)} in`):(u=`${a.toFixed(2)} mm`,d=`${(a/25.4).toFixed(3)} in`,l=`${Math.abs(e).toFixed(2)} mm`,p=`${Math.abs(o).toFixed(2)} mm`),{pointA:n,pointB:t,deltaX:e,deltaY:o,distance:a,angleDeg:r,units:i,formattedDistance:u,formattedDistanceAlt:d,formattedDeltaX:l,formattedDeltaY:p,formattedAngle:`${r.toFixed(1)}°`}}function da(n,t,i,e,o="inch"){let a='<g id="cadMeasureOverlay" class="cad-measure-overlay">';const r=o==="inch"?1/25.4:1,c=Math.max(e.width,e.height),u=Math.max(12*r,c*.032),d=p=>p,l=p=>e.minY+e.maxY-p;if(n){const p=d(n.pointA.x),g=l(n.pointA.y),f=d(n.pointB.x),I=l(n.pointB.y),b=f,T=g,S=Math.abs(f-p),w=Math.abs(I-g);if(S>.1*r||w>.1*r){a+=`<line x1="${p}" y1="${g}" x2="${b}" y2="${T}" class="measure-delta-x" stroke="#f59e0b" stroke-dasharray="5,4" stroke-width="1.6" vector-effect="non-scaling-stroke" />`,a+=`<line x1="${b}" y1="${T}" x2="${f}" y2="${I}" class="measure-delta-y" stroke="#c084fc" stroke-dasharray="5,4" stroke-width="1.6" vector-effect="non-scaling-stroke" />`;const Y=Math.min(8*r,Math.min(S,w)*.35);if(Y>1.5*r){const j=f>=p?-1:1,se=I>=g?-1:1;a+=`<path d="M ${b+j*Y} ${T} L ${b+j*Y} ${T+se*Y} L ${b} ${T+se*Y}" class="measure-corner-sq" stroke="#94a3b8" stroke-width="1.4" fill="none" vector-effect="non-scaling-stroke" />`}}a+=`<line x1="${p}" y1="${g}" x2="${f}" y2="${I}" stroke="#0b1120" stroke-width="5" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.9" />`,a+=`<line x1="${p}" y1="${g}" x2="${f}" y2="${I}" class="measure-dim-line" stroke="#facc15" stroke-width="2.5" stroke-linecap="round" vector-effect="non-scaling-stroke" />`;const C=Math.atan2(I-g,f-p),W=6*r,U=C+Math.PI/2,D=Math.cos(U)*W,A=Math.sin(U)*W;a+=`<line x1="${p-D}" y1="${g-A}" x2="${p+D}" y2="${g+A}" stroke="#0b1120" stroke-width="5" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.9" />`,a+=`<line x1="${f-D}" y1="${I-A}" x2="${f+D}" y2="${I+A}" stroke="#0b1120" stroke-width="5" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.9" />`,a+=`<line x1="${p-D}" y1="${g-A}" x2="${p+D}" y2="${g+A}" stroke="#facc15" stroke-width="2.5" stroke-linecap="round" vector-effect="non-scaling-stroke" />`,a+=`<line x1="${f-D}" y1="${I-A}" x2="${f+D}" y2="${I+A}" stroke="#facc15" stroke-width="2.5" stroke-linecap="round" vector-effect="non-scaling-stroke" />`;const v=(p+f)/2,y=(g+I)/2,h=n.formattedDistance,m=h.length*u*.6+16*r,B=u*2,M=4*r;a+=`
      <g class="measure-badge-group" transform="translate(${v}, ${y})">
        <!-- Opaque dark backdrop shadow to fully obscure background lines -->
        <rect x="${-m/2-.8*r}" y="${-B/2-.8*r}" width="${m+1.6*r}" height="${B+1.6*r}" rx="${M+.8*r}" fill="#020617" opacity="0.85" />
        <!-- Main measurement pill -->
        <rect x="${-m/2}" y="${-B/2}" width="${m}" height="${B}" rx="${M}" class="measure-badge-rect" fill="#070b14" stroke="#facc15" stroke-width="1.5" vector-effect="non-scaling-stroke" opacity="0.98" />
        <!-- Crisp high-contrast white measurement readout with optical vertical centering -->
        <text x="0" y="${u*.35}" class="measure-badge-text" fill="#f8fafc" font-family="'JetBrains Mono', monospace" font-size="${u}" font-weight="800" text-anchor="middle" text-rendering="geometricPrecision">
          ${h}
        </text>
      </g>
    `;const F=4*r,_=8*r,$=24*r,k=14*r,L=-15*r,O=8*r;a+=`
      <g class="measure-pin-a-group" transform="translate(${p}, ${g})">
        <circle cx="0" cy="0" r="${_}" fill="rgba(56, 189, 248, 0.25)" class="measure-pin-halo">
          <animate attributeName="r" values="${_*.8};${_*1.3};${_*.8}" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="${F}" class="measure-pin-a" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5" vector-effect="non-scaling-stroke" />
        <rect x="${-$/2}" y="${L-k/2}" width="${$}" height="${k}" rx="${3*r}" fill="#070b14" stroke="#38bdf8" stroke-width="1.2" vector-effect="non-scaling-stroke" opacity="0.98" />
        <text x="0" y="${L+O*.35}" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="${O}" font-weight="800" text-anchor="middle" text-rendering="geometricPrecision">PT A</text>
      </g>
    `,a+=`
      <g class="measure-pin-b-group" transform="translate(${f}, ${I})">
        <circle cx="0" cy="0" r="${_}" fill="rgba(34, 197, 94, 0.25)" class="measure-pin-halo">
          <animate attributeName="r" values="${_*.8};${_*1.3};${_*.8}" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="${F}" class="measure-pin-b" fill="#22c55e" stroke="#ffffff" stroke-width="1.5" vector-effect="non-scaling-stroke" />
        <rect x="${-$/2}" y="${L-k/2}" width="${$}" height="${k}" rx="${3*r}" fill="#070b14" stroke="#22c55e" stroke-width="1.2" vector-effect="non-scaling-stroke" opacity="0.98" />
        <text x="0" y="${L+O*.35}" fill="#22c55e" font-family="'JetBrains Mono', monospace" font-size="${O}" font-weight="800" text-anchor="middle" text-rendering="geometricPrecision">PT B</text>
      </g>
    `}if(i){const p=d(i.x),g=l(i.y),f=10*r,I=3*r,b=6*r,T=Math.max(8.5*r,c*.022),S=T*2,C=`⌖ ${i.label}`.length*T*.6+14*r,W=14*r;a+=`
      <g class="measure-snap-reticle" transform="translate(${p}, ${g})">
        <!-- Glowing snap circle -->
        <circle cx="0" cy="0" r="${f}" class="measure-snap-halo" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,2" vector-effect="non-scaling-stroke">
          <animate attributeName="r" values="${f*.85};${f*1.25};${f*.85}" dur="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.95;0.4;0.95" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <!-- Center target dot -->
        <circle cx="0" cy="0" r="${I}" fill="#38bdf8" stroke="#ffffff" stroke-width="1" vector-effect="non-scaling-stroke" />
        <!-- Crosshair ticks -->
        <line x1="${-b}" y1="0" x2="${b}" y2="0" stroke="#38bdf8" stroke-width="1.2" vector-effect="non-scaling-stroke" />
        <line x1="0" y1="${-b}" x2="0" y2="${b}" stroke="#38bdf8" stroke-width="1.2" vector-effect="non-scaling-stroke" />
        <!-- Floating label pill -->
        <g transform="translate(${W}, ${-W})">
          <!-- Backdrop shadow -->
          <rect x="-0.8" y="${-S/2-.8*r}" width="${C+1.6*r}" height="${S+1.6*r}" rx="${S/2+.8*r}" fill="#020617" opacity="0.85" />
          <!-- Main capsule pill -->
          <rect x="0" y="${-S/2}" width="${C}" height="${S}" rx="${S/2}" fill="#070b14" stroke="#38bdf8" stroke-width="1.2" vector-effect="non-scaling-stroke" opacity="0.98" />
          <text x="${S*.45}" y="${T*.35}" font-family="'JetBrains Mono', monospace" font-size="${T}" text-anchor="start" text-rendering="geometricPrecision">
            <tspan fill="#38bdf8" font-weight="800">⌖ </tspan><tspan fill="#f8fafc" font-weight="700">${i.label}</tspan>
          </text>
        </g>
      </g>
    `}else if(t&&!n){const p=d(t.x),g=l(t.y);a+=`
      <g class="measure-free-cursor" transform="translate(${p}, ${g})">
        <circle cx="0" cy="0" r="${2.5*r}" fill="#38bdf8" opacity="0.7" />
      </g>
    `}return a+="</g>",a}let fe="inch",pe="baseplate",$t="part",Dt=!0,Le=null,It=[],Et=0,Ie=1,Fe=In[0],Ve=ho("USD",ci),V=Ve[0],X=V.gauges.find(n=>n.gaugeName.includes('1/4" Plate')||n.gaugeName.includes("10 Gauge"))||V.gauges[0],P=uo("USD",nn),ze={...mo},me=[],Ze="single",Oe=0,ai=null,Ft=null,Ht=!1,Vt=null,St=[],zt=0,At=1,Ge=!0,lt=null,Rt=null,ut=null;const N={length:10,width:8,units:"inch",cornerType:"chamfer",cornerSize:.75,holePattern:"4-corner",holeType:"slotted",holeDiameter:.75,slotLength:1.5,slotWidth:.75,edgeOffsetX:1.25,edgeOffsetY:1.25,centerCutoutType:"round",centerCutoutDiameter:2.5};let at=yt.find(n=>n.standard==="ASME"&&n.nominalBore==='2"')||yt[yt.length-1];const ne={baseWidth:6,height:6,units:"inch",hasWeldSnipe:!0,snipeSize:1,mountingHoleDiameter:.5},R={width:24,height:48,units:"inch",patternType:"islamic_star",borderMarginMm:1.5,gridColumns:4,gridRows:8,hasMountingHoles:!0,mountingHoleDiameter:.3125,gateType:"single_swing",hasFrameTube:!0,frameTubeWidthMm:2,hasKickPlate:!1,kickPlateHeightMm:12,hasHinges:!0,hasPullHandle:!0,hasLockBox:!0,finishMaterial:"matte_black",backlightColor:"warm_white"};let Ue="realistic_gate";const Z={baseWidth:5,height:5,chamferTop:3,chamferRight:3,units:"inch",baseHoleCount:2,baseHoleDiameter:.375,uprightHoleCount:2,uprightHoleDiameter:.375,lighteningHoleDiameter:1.5},ae={outerDiameter:6,innerDiameter:2,units:"inch",boltCount:6,boltDiameter:.375,pitchCircleDiameter:4},ht=document.getElementById("dynamicControls"),ee=document.getElementById("svgContainer"),ma=document.getElementById("hudCutLength"),ua=document.getElementById("hudPierces"),ha=document.getElementById("hudWeight"),pa=document.getElementById("hudBoundingBox"),Wt=document.getElementById("dfmAlertContainer"),Vn=document.getElementById("canvasTitle"),Ki=document.getElementById("nestingHudBar"),Ji=document.getElementById("nestHudSheets"),Vi=document.getElementById("nestHudUtil"),Zi=document.getElementById("nestHudScrap"),eo=document.getElementById("nestHudRemnant"),dn=document.getElementById("quoteModeBadge"),to=document.getElementById("quoteShopName"),ga=document.getElementById("totalPrice"),fa=document.getElementById("pricePerUnit"),mn=document.getElementById("costMaterial"),ya=document.getElementById("costCut"),xa=document.getElementById("costPierce"),no=document.getElementById("costHandling"),io=document.getElementById("costSecondary"),ba=document.getElementById("costDiscount"),$a=document.getElementById("costGst"),Ca=document.getElementById("totalIncGst"),jt=document.getElementById("gstLabel"),un=document.getElementById("hsnCodeTag"),Zn=document.getElementById("minOrderWarning"),Zt=document.getElementById("materialSelect"),Nt=document.getElementById("gaugeSelect"),hn=document.getElementById("assistGasSelect"),vt=document.getElementById("sheetSizeSelect"),ei=document.getElementById("camProfileSelect"),Ia=document.getElementById("navCamName");let Je=1,Ye={x:0,y:0},pn=!1,ti={x:0,y:0},gn=!1,fn=!1;function Mt(){const n=document.getElementById("gateToolbarMain"),t=document.getElementById("gateFoldedBar"),i=document.getElementById("gateStudioToolbar");n&&t&&i&&(gn?(n.classList.add("hidden"),t.classList.remove("hidden"),i.classList.add("is-folded")):(n.classList.remove("hidden"),t.classList.add("hidden"),i.classList.remove("is-folded")));const e=document.getElementById("bottomHudExpandedContent"),o=document.getElementById("bottomHudFoldedBar"),a=document.getElementById("canvasBottomHud");e&&o&&a&&(fn?(e.classList.add("hidden"),o.classList.remove("hidden"),a.classList.add("is-folded")):(e.classList.remove("hidden"),o.classList.add("hidden"),a.classList.remove("is-folded")))}function _e(){const n=ee==null?void 0:ee.querySelector("svg");n&&(Je===1&&Ye.x===0&&Ye.y===0?(n.style.transform="",ee==null||ee.classList.remove("is-zoomed")):(n.style.transform=`translate(${Ye.x}px, ${Ye.y}px) scale(${Je})`,ee==null||ee.classList.add("is-zoomed")));const t=document.getElementById("zoomLevelDisplay");t&&(t.textContent=`${Math.round(Je*100)}%`)}function Yt(){Je=1,Ye={x:0,y:0},_e()}let dt=!1,je="idle",Pt=null,Ct=null,_t=null,ni={x:0,y:0};function oo(n,t){const i=ee==null?void 0:ee.querySelector("svg");if(!i||!i.createSVGPoint||!i.getScreenCTM)return null;const o=ve().boundingBox,a=i.createSVGPoint();a.x=n,a.y=t;const s=i.getScreenCTM();if(!s)return null;try{const r=a.matrixTransform(s.inverse()),c=r.x,u=o.minY+o.maxY-r.y;return{cad:{x:c,y:u},screen:{x:n,y:t}}}catch{return null}}function ao(n){const t=ee==null?void 0:ee.querySelector("svg");if(!t||!t.createSVGPoint||!t.getScreenCTM)return{x:0,y:0};const e=ve().boundingBox,o=t.createSVGPoint();o.x=n.x,o.y=e.minY+e.maxY-n.y;const a=t.getScreenCTM();if(!a)return{x:0,y:0};try{const s=o.matrixTransform(a);return{x:s.x,y:s.y}}catch{return{x:0,y:0}}}function vn(n){const t=document.getElementById("measureHudPill"),i=document.getElementById("measureValDist"),e=document.getElementById("measureValDistAlt"),o=document.getElementById("measureValDx"),a=document.getElementById("measureValDy"),s=document.getElementById("measureValAngle"),r=document.getElementById("measureHudTip");if(t)if(n)i&&(i.textContent=n.formattedDistance),e&&(e.textContent=`(${n.formattedDistanceAlt})`),o&&(o.textContent=n.formattedDeltaX),a&&(a.textContent=n.formattedDeltaY),s&&(s.textContent=n.formattedAngle),r&&(je==="locked"?(r.innerHTML="✅ <strong>Locked</strong> (Esc)",r.title="Measurement locked. Click anywhere to measure again • Esc to clear"):(r.textContent="📐 Pick Pt B",r.title="Measuring... Click or release to lock Point B"));else{const c=fe==="inch";i&&(i.textContent=c?"0.000 in":"0.00 mm"),e&&(e.textContent=c?"(0.0 mm)":"(0.000 in)"),o&&(o.textContent=c?"0.000 in":"0.00 mm"),a&&(a.textContent=c?"0.000 in":"0.00 mm"),s&&(s.textContent="0.0°"),r&&(je==="drawing"?(r.textContent="📍 Pick Pt B",r.title="Point A set. Move and click 2nd point to lock dimension"):(r.textContent="💡 Click 1st pt",r.title="Click 1st point (snaps to vertices & hole centers)"))}}function ct(n){const t=ee==null?void 0:ee.querySelector("svg");if(!t)return;const i=t.querySelector("#cadMeasureOverlay");if(!dt){i&&i.remove();return}const o=ve().boundingBox;let a=null;Pt&&Ct&&(a=la(Pt,Ct,fe),vn(a));const s=da(a,n||null,_t,o,fe);i&&i.remove();const u=new DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${s}</svg>`,"image/svg+xml").getElementById("cadMeasureOverlay");u&&t.appendChild(document.importNode(u,!0))}function bn(n){dt=n!==void 0?n:!dt;const i=document.getElementById("btnMeasureTool"),e=document.getElementById("measureHudPill");dt?(i==null||i.classList.add("active"),ee==null||ee.classList.add("measuring"),e==null||e.classList.remove("hidden"),je="idle",Pt=null,Ct=null,_t=null,vn(null),ct(),oe("📐 Measure Tool Active: Click or drag two points (snaps to CAD vertices & holes)")):(i==null||i.classList.remove("active"),ee==null||ee.classList.remove("measuring"),e==null||e.classList.add("hidden"),je="idle",Pt=null,Ct=null,_t=null,ct())}function Kt(n){P.indianQuotingMode=n;const t=document.getElementById("modeJobWork"),i=document.getElementById("modeWithMaterial"),e=document.getElementById("modeSqFtJali");[t,i,e].forEach(o=>o==null?void 0:o.classList.remove("active")),n==="job_work"&&(t==null||t.classList.add("active")),n==="with_material"&&(i==null||i.classList.add("active")),n==="sqft_jali"&&(e==null||e.classList.add("active")),H()}let Ot="industrial";function Lt(n,t=!0){Ot=n;const i=document.getElementById("tabPrecisionIndustrial"),e=document.getElementById("tabArchitecturalStudio"),o=document.getElementById("workspaceTabSwitcher"),a=document.querySelector('.shape-btn[data-shape="jali"]'),s=document.getElementById("modeSqFtJali"),r=document.getElementById("gateStudioToolbar");if(n==="industrial"){if(i==null||i.classList.add("active"),e==null||e.classList.remove("active"),e&&(e.style.display="none"),o&&(o.style.display="none"),a&&(a.style.display="none"),s&&(s.style.display="none"),r&&r.classList.add("hidden"),pe==="jali"){const c=document.querySelector('.shape-btn[data-shape="baseplate"]');c?c.click():(pe="baseplate",bt(),H())}t&&(window.location.hash==="#gate-studio"||window.location.hash==="#architectural")&&history.replaceState(null,"",window.location.pathname+window.location.search)}else o&&(o.style.display="flex"),e&&(e.style.display="inline-flex"),i==null||i.classList.remove("active"),e==null||e.classList.add("active"),a&&(a.style.display=""),s&&(s.style.display=""),pe!=="jali"&&(a?a.click():(pe="jali",Kt("sqft_jali"),Ue="realistic_gate",Ge=!1,bt(),H())),r&&r.classList.remove("hidden"),t&&(window.location.hash="#gate-studio")}function Sa(){const n=document.getElementById("tabPrecisionIndustrial"),t=document.getElementById("tabArchitecturalStudio");n==null||n.addEventListener("click",()=>Lt("industrial")),t==null||t.addEventListener("click",()=>Lt("architectural"));const i=window.location.hash.toLowerCase(),o=new URLSearchParams(window.location.search).get("view");Lt(i==="#gate-studio"||i==="#architectural"||o==="architectural"?"architectural":"industrial",!1),window.addEventListener("hashchange",()=>{const a=window.location.hash.toLowerCase();a==="#gate-studio"||a==="#architectural"?Ot!=="architectural"&&Lt("architectural",!1):(a==="#industrial"||a==="")&&Ot!=="industrial"&&Lt("industrial",!1)})}function Ma(){const n=new URLSearchParams(window.location.search);if(n.has("embedded")||n.get("embed")==="true"||window.self!==window.top){document.body.classList.add("is-embedded-widget");const i=n.get("currency");(i==="USD"||i==="INR")&&(P.currency=i);const e=n.get("shopName");if(e){P.shopName=e;const u=document.getElementById("brandTitle");u&&(u.textContent=e.toUpperCase());const d=document.getElementById("quoteShopName");d&&(d.textContent=e)}const o=n.get("shopEmail");o&&(P.shopEmail=o);const a=n.get("hourlyRate");a&&!isNaN(parseFloat(a))&&(P.hourlyLaserRateUsd=parseFloat(a));const s=n.get("minOrder");s&&!isNaN(parseFloat(s))&&(P.minimumOrderFee=parseFloat(s));const r=n.get("salesTax");r&&!isNaN(parseFloat(r))&&(P.gstPercent=parseFloat(r));const c=n.get("webhookUrl");c&&(P.rfqWebhookUrl=c)}}function va(){const n=document.getElementById("embedWidgetModal"),t=document.getElementById("btnOpenEmbedModal"),i=document.getElementById("closeEmbedModalBtn"),e=document.getElementById("embedShopSlug"),o=document.getElementById("embedDefaultCurrency"),a=document.getElementById("embedDefaultView"),s=document.getElementById("embedWidgetMode"),r=document.getElementById("embedScriptCode"),c=document.getElementById("btnCopyEmbedScript");if(!n)return;const u=()=>{if(!r)return;const d=window.location.origin||"https://engine.yourdomain.com",l=(e==null?void 0:e.value.trim())||"midwest-precision",p=(o==null?void 0:o.value)||"USD",g=(a==null?void 0:a.value)||"industrial",f=(s==null?void 0:s.value)||"inline";let I=`src="${d}/widget.js" data-shop-id="${l}" data-currency="${p}"`;g!=="industrial"&&(I+=` data-view="${g}"`),f!=="inline"&&(I+=` data-mode="${f}"`),r.textContent=`<script ${I}><\/script>`};t==null||t.addEventListener("click",()=>{o&&(o.value=P.currency),a&&(a.value=Ot),u(),n.classList.remove("hidden")}),i==null||i.addEventListener("click",()=>{n.classList.add("hidden")}),n.addEventListener("click",d=>{d.target===n&&n.classList.add("hidden")}),[e,o,a,s].forEach(d=>{d==null||d.addEventListener("input",u),d==null||d.addEventListener("change",u)}),c==null||c.addEventListener("click",()=>{const d=(r==null?void 0:r.textContent)||"";navigator.clipboard.writeText(d).then(()=>{c.textContent="✅ Copied!",setTimeout(()=>{c.textContent="📋 Copy Script Tag"},2e3),oe("📋 Embed script tag copied to clipboard!")}).catch(()=>{oe("Script tag copied.")})}),u()}function ka(){Ma(),si("USD",!0),Wa(),Oa(),va(),Sa(),bt(),en(),mt(),H()}let so=null;function Ee(){const n=document.getElementById("storageBadge");n&&(n.textContent="💾 Saving...",n.classList.add("saving")),clearTimeout(so),so=setTimeout(()=>{Zo(P.currency,P),ea(P.currency,Ve),n&&(n.textContent="💾 Auto-Saved",n.classList.remove("saving"))},400)}function ve(){return Dt&&Le?Le:pe==="baseplate"?(N.units=fe,Bo(N)):pe==="flange"?wo({outerDiameter:at.outerDiameter,innerBore:at.innerBore,pitchCircleDiameter:at.pitchCircleDiameter,boltCount:at.boltCount,boltDiameter:at.boltDiameter,units:at.units}):pe==="gusset"?(ne.units=fe,Eo(ne)):pe==="jali"?(R.units=fe,Lo(R)):pe==="bracket"?(Z.units=fe,To(Z)):(ae.units=fe,Do(ae))}function H(){var F,_;const n=fe==="inch",t=ve();t.deselectedHoleIndices!==void 0&&t.deselectedHoleIndices.length>0&&(t.deselectedHoleIndices=Jt(t,X.thicknessMm));const i=ft(t,X.thicknessMm,V.densityGPerCm3,t.deselectedHoleIndices),e=Go(t,X.thicknessMm);ut=e;const o=document.getElementById("holeSelectionBox"),a=document.getElementById("holeToggleLabel"),s=document.getElementById("holeAutoSkipNotice"),r=document.getElementById("holeSkipCountText"),c=document.getElementById("holeSkipThickText"),u=document.getElementById("btnToggleHoleCut");if(o&&t){const $=t.innerHoles?t.innerHoles.length:0;if($>0){o.style.display="block";const k=Jt(t,X.thicknessMm),L=t.deselectedHoleIndices||[],O=$-L.length;L.length>0?(a&&(a.textContent=`Cut ${O} of ${$} Holes`),u&&(u.classList.add("is-skipping"),u.title="Currently skipping undersized holes. Click to cut all holes."),s&&r&&c&&(s.classList.remove("hidden"),r.textContent=`${L.length} holes`,c.textContent=`${X.thicknessMm.toFixed(1)} mm`)):(a&&(a.textContent=`Cut All Holes (${$})`),u&&(u.classList.remove("is-skipping"),u.title=k.length>0?`Click to auto-skip ${k.length} undersized holes (< ${X.thicknessMm.toFixed(1)}mm)`:"All holes meet laser piercing rule"),s&&s.classList.add("hidden"))}else o.style.display="none"}let d;if(Ze==="cart"&&me.length>0){const $=me.map(k=>({id:k.id,name:k.partGeometry.name,boundingBox:k.partGeometry.boundingBox,quantity:k.quantity,thicknessMm:k.gaugeThicknessMm,densityGPerCm3:V.densityGPerCm3,geometry:k.partGeometry,color:k.color}));d=ri($,Fe,X.thicknessMm,V.densityGPerCm3)}else d=Qo(t.boundingBox,Ie,Fe,X.thicknessMm,V.densityGPerCm3,{},t.units);ai=d,Oe=Math.max(0,Math.min(Oe,d.sheetsRequired-1));const l=ot(i,X,Ie,P,ze),p=document.getElementById("sheetPaginationBar"),g=document.getElementById("sheetPageIndicator"),f=document.getElementById("btnPrevSheet"),I=document.getElementById("btnNextSheet"),b=document.getElementById("gateStudioToolbar"),T=document.getElementById("simulatorControls");if($t==="nesting")b&&b.classList.add("hidden"),T&&(T.style.display="flex"),ee.innerHTML=ia(d,Oe),Ze==="cart"?Vn.textContent=`RFQ Cart Assembly — ${Fe.name} Layout (Sheet ${Oe+1} of ${d.sheetsRequired})`:Vn.textContent=`${t.name} — ${Fe.name} Layout (Sheet ${Oe+1} of ${d.sheetsRequired})`,p&&p.classList.remove("hidden"),g&&(g.textContent=`Sheet ${Oe+1} of ${d.sheetsRequired}`),f&&(f.disabled=Oe<=0),I&&(I.disabled=Oe>=d.sheetsRequired-1);else if(p&&p.classList.add("hidden"),pe==="jali"&&Ot==="architectural"?(b&&(b.classList.remove("hidden"),(F=document.getElementById("btnJaliViewRealistic"))==null||F.classList.toggle("active",Ue==="realistic_gate"),(_=document.getElementById("btnJaliViewCam"))==null||_.classList.toggle("active",Ue==="cam_toolpath"),b.querySelectorAll(".finish-swatch").forEach($=>{$.classList.toggle("active",$.getAttribute("data-finish")===R.finishMaterial)}),b.querySelectorAll(".backlight-pill").forEach($=>{$.classList.toggle("active",$.getAttribute("data-backlight")===R.backlightColor)}),b.querySelectorAll(".gate-type-btn").forEach($=>{$.classList.toggle("active",$.getAttribute("data-gatetype")===R.gateType)})),T&&(T.style.display="flex")):(b&&b.classList.add("hidden"),T&&(T.style.display="flex")),!Ht){ee.innerHTML=Mn(t,{showCutOrder:Ge,viewStyle:pe==="jali"?Ue:"cam_toolpath",jaliParams:pe==="jali"?R:void 0,hideCamBadges:pe==="jali"&&(Ue==="realistic_gate"||!Ge),dfmIssues:e.issues,highlightedHoleIndex:lt,highlightedHoleIndices:lt!==null?Rt!==null?[lt,Rt]:[lt]:[],excludedHoleIndices:t.deselectedHoleIndices||[]}),fo();const k=fe==="inch"?`${i.boundingBoxWidthInches.toFixed(2)}" × ${i.boundingBoxHeightInches.toFixed(2)}"`:`${i.boundingBoxWidthMm.toFixed(0)} × ${i.boundingBoxHeightMm.toFixed(0)} mm`;Vn.textContent=pe==="jali"&&Ue==="realistic_gate"?`Architectural CNC Gate & Jali Studio (${k})`:`${t.name} (${k})`}const S=document.getElementById("camLegendBar"),w=document.getElementById("archLegendBar");if(pe==="jali"&&Ue==="realistic_gate"&&$t!=="nesting"){if(S&&S.classList.add("hidden"),w){w.classList.remove("hidden");const $={matte_black:"Matte Black Powder Coat",royal_gold:"Royal Gold / Antique Brass",corten_rust:"Corten Weathered Rust Steel",brushed_stainless:"Satin Stainless 304",champagne_bronze:"Champagne Bronze"},k={warm_white:"Warm 3000K LED",cool_white:"Cool 6000K LED",amber_gold:"Sunset Amber LED",none:"Off (Daylight)"},L=R.gateType==="wall_panel",O=L?"Wall Mount Standoffs":`${R.hasFrameTube!==!1?n?'2" Box Tube':"50mm Box Tube":"Frameless Plate"}`,Y=L?n?'1/4" Stainless Standoff Screws':"M8 Stainless Standoff Screws":`${R.hasHinges!==!1?"Bullet Hinges":""}${R.hasPullHandle!==!1?" + Bar Pull":""}${R.hasLockBox!==!1?" + Mortise Lock":""}`.replace(/^\s*\+\s*/,"")||"Custom Welded",j=document.getElementById("archLegendFinish"),se=document.getElementById("archLegendLight"),ye=document.getElementById("archLegendFrame"),et=document.getElementById("archLegendHardware");j&&(j.textContent=$[R.finishMaterial||"matte_black"]||"Matte Black"),se&&(se.textContent=k[R.backlightColor||"warm_white"]||"Warm 3000K"),ye&&(ye.textContent=O),et&&(et.textContent=Y)}}else S&&S.classList.remove("hidden"),w&&w.classList.add("hidden");_e(),dt&&ct(),ma.textContent=n?`${i.totalCutLengthInches.toFixed(2)} in`:`${i.totalCutLengthMm.toFixed(1)} mm`,ua.textContent=i.pierceCount.toString(),ha.textContent=n?`${i.theoreticalWeightLbs.toFixed(2)} lbs`:`${i.theoreticalWeightKg.toFixed(2)} kg`,pa.textContent=n?`${i.boundingBoxWidthInches.toFixed(2)}" × ${i.boundingBoxHeightInches.toFixed(2)}"`:`${i.boundingBoxWidthMm.toFixed(0)} × ${i.boundingBoxHeightMm.toFixed(0)} mm`;const C=document.getElementById("canvasBboxBadge");C&&(C.textContent=n?`W: ${i.boundingBoxWidthInches.toFixed(3)} in × H: ${i.boundingBoxHeightInches.toFixed(3)} in`:`W: ${i.boundingBoxWidthMm.toFixed(1)} mm × H: ${i.boundingBoxHeightMm.toFixed(1)} mm`);const W=l.currency==="USD";Ki&&(Ki.style.display=Ie>1||$t==="nesting"||Ze==="cart"?"grid":"none"),Ji&&(Ji.textContent=`${d.sheetsRequired} Sheet${d.sheetsRequired>1?"s":""}`),Vi&&(Vi.textContent=`${d.sheetUtilizationPercent}%`),Zi&&(Zi.textContent=W?`${(d.totalSkeletonScrapMassKg*2.20462).toFixed(1)} lbs`:`${d.totalSkeletonScrapMassKg.toFixed(1)} kg`),eo&&(eo.textContent=W?`${(d.remnantWidthMm/25.4).toFixed(1)}" × ${(d.remnantLengthMm/25.4).toFixed(1)}"`:`${d.remnantWidthMm} × ${d.remnantLengthMm} mm`);const U=document.getElementById("gateFoldedSummary");if(U){const $={matte_black:"Matte Black",royal_gold:"Royal Gold",corten_rust:"Corten Rust",brushed_stainless:"Stainless 304",champagne_bronze:"Bronze"},k={warm_white:"Warm 3000K",cool_white:"Cool 6000K",amber_gold:"Amber",none:"Light Off"},L={single_swing:"Single Gate",double_swing:"Double Swing",wall_panel:"Wall Jali"},O=$[R.finishMaterial||"matte_black"]||"Matte Black",Y=k[R.backlightColor||"warm_white"]||"Warm 3000K",j=L[R.gateType||"single_swing"]||"Single Gate";U.textContent=`${O} • ${Y} • ${j}`}const D=document.getElementById("bottomHudFoldedSummary");if(D){const $=n?`${i.totalCutLengthInches.toFixed(2)} in`:`${i.totalCutLengthMm.toFixed(1)} mm`,k=n?`${i.theoreticalWeightLbs.toFixed(2)} lbs`:`${i.theoreticalWeightKg.toFixed(2)} kg`,L=n?`${i.boundingBoxWidthInches.toFixed(2)}" × ${i.boundingBoxHeightInches.toFixed(2)}"`:`${i.boundingBoxWidthMm.toFixed(0)} × ${i.boundingBoxHeightMm.toFixed(0)} mm`;D.textContent=`${$} • ${i.pierceCount} Pierces • ${k} • ${L}`}Mt(),Pa(e);const A=l.currency==="INR"?"₹":"$";ga.textContent=l.finalOrderTotal.toFixed(2),fa.textContent=`(${A}${l.finalUnitPrice.toFixed(2)} / unit)`,dn&&(l.quotingMode==="job_work"?dn.textContent=W?"LABOR ONLY (CUSTOMER STOCK)":"JOB WORK (LABOUR ONLY)":l.quotingMode==="sqft_jali"?dn.textContent=W?"ARCHITECTURAL PANELS":"ARCHITECTURAL (₹/SQ.FT)":dn.textContent=W?"TURNKEY (PLATE + CUT)":"WITH MATERIAL (SUPPLY & CUT)"),mn.textContent=`${A}${l.unitMaterialCost.toFixed(2)}`,ya.textContent=`${A}${l.unitCutCost.toFixed(2)}`,xa.textContent=`${A}${l.unitPierceCost.toFixed(2)}`,no&&(no.textContent=`${A}${l.unitHandlingCost.toFixed(2)}`),io&&(io.textContent=`${A}${l.unitSecondaryCost.toFixed(2)}`);const v=document.getElementById("rowMaterial"),y=document.getElementById("rowCut"),h=document.getElementById("rowPierce"),m=document.getElementById("rowHandling"),B=document.getElementById("rowSecondary");if(l.quotingMode==="job_work"){if(v){v.style.display="flex";const $=v.querySelector("span:first-child");$&&($.textContent="Raw Material:"),mn.textContent=W?"$0.00 (Customer Sheet)":"₹0.00 (Customer Plate)"}y&&(y.style.display="flex"),h&&(h.style.display="flex"),m&&(m.style.display="flex")}else if(l.quotingMode==="sqft_jali"){if(v){v.style.display="flex";const $=v.querySelector("span:first-child");$&&($.textContent=W?"Fabrication Rate:":"Jali Fabrication (Sq.Ft):"),mn.textContent=`${A}${l.unitMaterialCost.toFixed(2)}`}y&&(y.style.display="none"),h&&(h.style.display="none"),m&&(m.style.display="none")}else{if(v){v.style.display="flex";const $=v.querySelector("span:first-child");$&&($.textContent=W?"Raw Stock Material:":"Raw Material (Steel):"),mn.textContent=`${A}${l.unitMaterialCost.toFixed(2)}`}y&&(y.style.display="flex"),h&&(h.style.display="flex"),m&&(m.style.display="none")}B&&(B.style.display=l.unitSecondaryCost>0?"flex":"none"),ba.textContent=`-${l.discountPercent}%`,$a.textContent=`${A}${l.gstAmount.toFixed(2)}`,Ca.textContent=`${A}${l.finalTotalWithGst.toFixed(2)}`,jt&&(W?P.salesTaxExempt?jt.textContent="Sales Tax (Tax-Exempt):":jt.textContent=`Sales Tax (${P.gstPercent||0}%):`:P.isInterstateSale?jt.textContent="IGST (18%):":jt.textContent="GST (CGST 9% + SGST 9%):");const M=document.querySelector(".breakdown-row.total-inc-gst span:first-child");if(M&&(M.textContent=W?"Total (Inc. Tax):":"Total (Inc. GST):"),un)if(un.style.display="block",W){const $=P.paymentTerms||"Net 30, Credit Card, ACH",k=l.naicsCode||"NAICS 332813 (Laser Cutting & Fabrication)";un.textContent=`${k} • ${$}`}else un.textContent=l.hsnSacCode;l.minimumOrderFloorApplied?(Zn.classList.remove("hidden"),Zn.innerHTML=`⚠️ <strong>Minimum Order Floor Active</strong><br><span style="font-size:0.7rem;opacity:0.95;">Calc Subtotal: ${A}${l.orderTotalBeforeMin.toFixed(2)} → Billed Min Floor: ${A}${l.finalOrderTotal.toFixed(2)}</span>`):Zn.classList.add("hidden")}function ii(n,t){if(lt=n,Rt=t!==void 0?t:null,!Ht&&$t==="part"){const i=ve(),e=[];lt!==null&&e.push(lt),Rt!==null&&!e.includes(Rt)&&e.push(Rt),ee.innerHTML=Mn(i,{showCutOrder:Ge,viewStyle:pe==="jali"?Ue:"cam_toolpath",jaliParams:pe==="jali"?R:void 0,hideCamBadges:pe==="jali"&&(Ue==="realistic_gate"||!Ge),dfmIssues:ut==null?void 0:ut.issues,highlightedHoleIndex:lt,highlightedHoleIndices:e,excludedHoleIndices:i.deselectedHoleIndices||[]}),_e(),fo()}Wt.querySelectorAll(".dfm-pill").forEach(i=>{const e=i.getAttribute("data-hole-index"),o=i.getAttribute("data-related-hole-index"),a=e!==null?parseInt(e,10):null,s=o!==null?parseInt(o,10):null;let r=!1;n!==null&&((a===n||s===n)&&(r=!0),t!=null&&(a===t||s===t)&&(r=!0)),r?i.classList.add("is-active-target"):i.classList.remove("is-active-target")})}function fo(){ee.querySelectorAll("[data-hole-index]").forEach(n=>{const t=n.getAttribute("data-hole-index");if(t!==null){const i=parseInt(t,10);n.addEventListener("mouseenter",()=>{Wt.querySelectorAll(`.dfm-pill[data-hole-index="${i}"], .dfm-pill[data-related-hole-index="${i}"]`).forEach(e=>{e.classList.add("is-active-target"),e.scrollIntoView({behavior:"smooth",block:"nearest"})})}),n.addEventListener("mouseleave",()=>{Wt.querySelectorAll(`.dfm-pill[data-hole-index="${i}"], .dfm-pill[data-related-hole-index="${i}"]`).forEach(e=>{e.classList.remove("is-active-target")})})}})}function Pa(n){if(Wt.innerHTML="",!(n.isManufacturable&&!n.hasWarnings)){if(n.issues.length>2){const t=document.createElement("div");t.className="dfm-scroll-header",t.innerHTML=`
      <span class="dfm-scroll-title">
        <span class="dfm-scroll-badge">${n.issues.length} DFM Findings</span>
        ${n.isManufacturable?"Advisories to prevent heat burn":"Critical cut issues require design fix"}
      </span>
      <span class="dfm-scroll-hint">↕ Scroll to inspect all holes</span>
    `,Wt.appendChild(t)}for(const t of n.issues){const i=document.createElement("div"),e=typeof t.holeIndex=="number",o=typeof t.relatedHoleIndex=="number";i.className=`dfm-pill ${t.severity==="error"?"dfm-error":"dfm-warning"} ${e?"dfm-pill-hole":""}`,e&&(i.setAttribute("data-hole-index",t.holeIndex.toString()),o&&i.setAttribute("data-related-hole-index",t.relatedHoleIndex.toString()),i.title=`Click or hover to highlight Hole #${t.holeIndex+1}${o?` & #${t.relatedHoleIndex+1}`:""} on the drawing`),i.innerHTML=`
      <span class="dfm-icon">${t.severity==="error"?"⚠️":"ℹ️"}</span>
      <span class="dfm-text">${t.message}</span>
      ${e?`<span class="dfm-locate-chip" title="Pinpoint on diagram">📍 Hole #${t.holeIndex+1}${o?` & #${t.relatedHoleIndex+1}`:""}</span>`:""}
    `,e&&(i.addEventListener("mouseenter",()=>{ii(t.holeIndex,t.relatedHoleIndex)}),i.addEventListener("mouseleave",()=>{ii(null)}),i.addEventListener("click",()=>{var a,s;Ge||(Ge=!0,(a=document.getElementById("btnToggleCamBadges"))==null||a.classList.add("active"),(s=document.getElementById("legendBadgeToggle"))==null||s.classList.add("active")),ii(t.holeIndex,t.relatedHoleIndex)})),Wt.appendChild(i)}}}function yo(){Zt.innerHTML="";for(const n of Ve){const t=document.createElement("option");t.value=n.id,t.textContent=n.name,Zt.appendChild(t)}Zt.value=V.id,xo()}function xo(){Nt.innerHTML="";for(let n=0;n<V.gauges.length;n++){const t=V.gauges[n],i=document.createElement("option");i.value=n.toString(),i.textContent=t.gaugeName,Nt.appendChild(i)}Nt.selectedIndex=Math.min(3,V.gauges.length-1),X=V.gauges[Nt.selectedIndex]}function Ba(){ei.innerHTML="";for(const n of kt){const t=document.createElement("option");t.value=n.id,t.textContent=n.name,ei.appendChild(t)}ei.value=P.selectedCAMProfileId,wa()}function wa(){const n=kt.find(t=>t.id===P.selectedCAMProfileId)||kt[0];Ia.textContent=n.name.split(" ")[0].trim()}function Ea(){if(!vt)return;vt.innerHTML="";const n=P.currency==="USD"?In:Gt;for(const i of n){const e=document.createElement("option");e.value=i.id,e.textContent=i.name,vt.appendChild(e)}Fe=n.find(i=>i.id===Fe.id)||n[0],vt.value=Fe.id}function si(n="USD",t=!1){var j;const i=n==="USD",e=document.getElementById("btnCurrencyINR"),o=document.getElementById("btnCurrencyUSD");i?(o==null||o.classList.add("active"),e==null||e.classList.remove("active")):(e==null||e.classList.add("active"),o==null||o.classList.remove("active")),P=uo(n,i?nn:Sn),Ve=ho(n,i?ci:lo),V=Ve[0],X=V.gauges[i?3:4]||V.gauges[0],$n(i?"inch":"mm"),Cn(),Fe=i?In[0]:Gt[0],i?at=yt.find(se=>se.standard==="ASME"&&se.nominalBore==='2"')||yt[yt.length-1]:at=yt[2];const a=document.getElementById("brandTitle"),s=document.getElementById("brandSubtitle");a&&(a.textContent=i?"US CNC LASER CPQ":"INDIAN CNC LASER CPQ"),s&&(s.textContent=i?"Precision CAD/CAM & Quoting":"WhatsApp-First Quoting & CypCut DXF Engine");const r=document.getElementById("modeJobWork"),c=document.getElementById("modeWithMaterial"),u=document.getElementById("modeSqFtJali");r&&(r.innerHTML=i?"🔧 Labor Only":"🔧 Job Work"),c&&(c.innerHTML="📦 Turnkey"),u&&(u.innerHTML=i?"🏛️ Arch Panels":"🏛️ Architectural",Ot==="industrial"?u.style.display="none":u.style.display="");const d=document.getElementById("currencySym"),l=document.getElementById("adminCurrencySym");d&&(d.textContent=i?"$":"₹"),l&&(l.textContent=i?"$":"₹");const p=document.getElementById("customerPhoneLabel"),g=document.getElementById("phoneCountryPrefix"),f=document.getElementById("customerPhoneInput"),I=document.getElementById("phoneHint"),b=document.getElementById("phoneModeBadge");p&&(p.textContent=i?"Customer Email / Phone":"Customer WhatsApp"),g&&(g.textContent=i?"+1":"+91"),f&&(f.placeholder=i?"estimator@client.com or (555) 123-4567":"10-digit mobile (e.g. 98230 12345)"),I&&(I.textContent=i?"Enter email to send quote, or copy directly to clipboard":"Enter mobile to open direct chat, or leave blank to choose contact"),b&&(b.textContent=i?"Email / RFQ":"Direct Send");const T=document.getElementById("shareWhatsAppBtn"),S=document.getElementById("shareBtnIcon"),w=document.getElementById("shareBtnText"),C=document.getElementById("usSingleShareGroup"),W=document.getElementById("printInvoiceText"),U=document.getElementById("downloadDxfText");T&&(T.style.display=i?"none":"flex",i?(T.classList.remove("btn-whatsapp"),T.classList.add("btn-email")):(T.classList.remove("btn-email"),T.classList.add("btn-whatsapp"))),C&&(C.style.display=i?"flex":"none"),S&&(S.textContent=i?"✉️":"💬"),w&&(w.textContent=i?"Copy Quote for Email":"Share Quote on WhatsApp"),W&&(W.textContent=i?"Commercial Quote (PDF)":"Tax Invoice & QR");const D=((j=kt.find(se=>se.id===P.selectedCAMProfileId))==null?void 0:j.name.split(" ")[0])||(i?"Standard":"CypCut");U&&(U.textContent=`${D} DXF`);const A=document.getElementById("shareCartWhatsAppBtn"),v=document.getElementById("shareCartBtnIcon"),y=document.getElementById("shareCartBtnText"),h=document.getElementById("usCartShareGroup"),m=document.getElementById("printCartInvoiceText");A&&(A.style.display=i?"none":"flex",i?(A.classList.remove("btn-whatsapp"),A.classList.add("btn-email")):(A.classList.remove("btn-email"),A.classList.add("btn-whatsapp"))),h&&(h.style.display=i?"flex":"none"),v&&(v.textContent=i?"✉️":"💬"),y&&(y.textContent=i?"Copy Project Quote for Email":"Share Project Quote on WhatsApp"),m&&(m.textContent=i?"Commercial Quote (PDF)":"Tax Invoice & QR");const B=document.getElementById("groupAdminGstin"),M=document.getElementById("groupAdminUpi"),F=document.getElementById("groupAdminTaxType"),_=document.getElementById("groupAdminUsDetails"),$=document.getElementById("labelSheetLoading"),k=document.getElementById("labelPricePerKg"),L=document.getElementById("labelPricePerMeterCut"),O=document.getElementById("labelPricePerPierce"),Y=document.getElementById("labelAdminTax");B&&(B.style.display=i?"none":"block"),M&&(M.style.display=i?"none":"block"),F&&(F.style.display=i?"none":"block"),_&&(_.style.display=i?"block":"none"),$&&($.textContent=i?"Handling & Loading Fee ($/sheet)":"Plate Loading / Handling Fee (₹/sheet)"),k&&(k.textContent=i?"Material Rate ($/sq.in)":"Material Rate (₹/kg)"),L&&(L.textContent=i?"Cut Rate ($/lin.in)":"Cut Rate (₹/meter)"),O&&(O.textContent=i?"Pierce Fee ($/pt)":"Pierce Fee (₹/pt)"),Y&&(Y.textContent=i?"Sales Tax (%)":"GST / Tax (%)"),yo(),Ea(),Ba(),en(),bt(),mt(),H(),t||oe("🇺🇸 US Imperial Mode Active (USD $, Inches, A36/SS304/AL6061, Trumpf DXF)")}function bt(){ht.innerHTML="",pe==="baseplate"?La():pe==="flange"?Ta():pe==="gusset"?Da():pe==="jali"?bo():pe==="bracket"?Fa():pe==="disc"&&Aa()}function La(){const n=fe==="inch",t=n?"in":"mm";ht.innerHTML=`
    <div class="preset-pills-row">
      <button class="preset-pill" data-len="${n?6:150}" data-wid="${n?6:150}">${n?'6×6"':"150×150"}</button>
      <button class="preset-pill" data-len="${n?8:200}" data-wid="${n?8:200}">${n?'8×8"':"200×200"}</button>
      <button class="preset-pill" data-len="${n?10:250}" data-wid="${n?8:200}">${n?'10×8"':"250×200 Std"}</button>
      <button class="preset-pill" data-len="${n?12:300}" data-wid="${n?12:300}">${n?'12×12"':"300×300 PEB"}</button>
    </div>

    <div class="form-group">
      <label class="form-label">Plate Length (${t}): <strong id="valBpLen">${N.length}</strong></label>
      <input type="range" id="bpLength" min="${n?2:50}" max="${n?36:900}" value="${N.length}" step="${n?.25:5}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Plate Width (${t}): <strong id="valBpWid">${N.width}</strong></label>
      <input type="range" id="bpWidth" min="${n?2:50}" max="${n?36:900}" value="${N.width}" step="${n?.25:5}" class="form-slider" />
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Corner Finish</label>
        <select id="bpCornerType" class="form-select">
          <option value="chamfer" ${N.cornerType==="chamfer"?"selected":""}>45° Chamfer</option>
          <option value="fillet" ${N.cornerType==="fillet"?"selected":""}>Radius Fillet</option>
          <option value="sharp" ${N.cornerType==="sharp"?"selected":""}>Sharp</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Corner Size (${t})</label>
        <input type="text" id="bpCornerSize" class="form-input" value="${N.cornerSize}" placeholder="${n?"e.g. 3/4 or .75":"mm"}" />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Bolt Hole Type</label>
        <select id="bpHoleType" class="form-select">
          <option value="slotted" ${N.holeType==="slotted"?"selected":""}>Slotted / Oval (Site Tolerance)</option>
          <option value="round" ${N.holeType==="round"?"selected":""}>Round Hole</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Bolt Hole Dia (${t})</label>
        <input type="text" id="bpHoleDia" class="form-input" value="${N.holeDiameter}" placeholder="${n?"e.g. 1/2 or .50":"mm"}" />
      </div>
    </div>

    <div class="form-row" id="slotDimsRow" style="${N.holeType==="slotted"?"display: flex;":"display: none;"}">
      <div class="form-group">
        <label class="form-label">Slot Length (${t})</label>
        <input type="text" id="bpSlotLen" class="form-input" value="${N.slotLength||(n?1.5:35)}" placeholder="${n?"e.g. 1-1/2 or 1.5":"mm"}" />
      </div>
      <div class="form-group">
        <label class="form-label">Slot Width (${t})</label>
        <input type="text" id="bpSlotWid" class="form-input" value="${N.slotWidth||(n?.75:20)}" placeholder="${n?"e.g. 3/4 or .75":"mm"}" />
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Center Cutout (Pipe / Column)</label>
      <select id="bpCenterType" class="form-select">
        <option value="none" ${N.centerCutoutType==="none"?"selected":""}>None (Solid Center)</option>
        <option value="round" ${N.centerCutoutType==="round"?"selected":""}>Round Pipe Cutout</option>
        <option value="rectangular" ${N.centerCutoutType==="rectangular"?"selected":""}>Rectangular / Tube Cutout</option>
      </select>
    </div>

    <div class="form-group" id="centerCutoutDiaGroup" style="${N.centerCutoutType==="round"?"display: block;":"display: none;"}">
      <label class="form-label">Center Hole Diameter (${t}): <strong id="valCenterDia">${N.centerCutoutDiameter||50}</strong></label>
      <input type="range" id="bpCenterDia" min="${n?.5:15}" max="${n?12:300}" value="${N.centerCutoutDiameter||50}" class="form-slider" />
    </div>
  `;const i=document.getElementById("bpLength"),e=document.getElementById("bpWidth"),o=document.getElementById("valBpLen"),a=document.getElementById("valBpWid");i.oninput=()=>{N.length=parseFloat(i.value),o.textContent=i.value,H()},e.oninput=()=>{N.width=parseFloat(e.value),a.textContent=e.value,H()};const s=document.getElementById("bpCornerType"),r=document.getElementById("bpCornerSize");s.onchange=()=>{N.cornerType=s.value,H()},r.oninput=()=>{N.cornerSize=ln(r.value,fe,0),H()};const c=document.getElementById("bpHoleType"),u=document.getElementById("bpHoleDia"),d=document.getElementById("slotDimsRow");c.onchange=()=>{N.holeType=c.value,d.style.display=c.value==="slotted"?"flex":"none",H()},u.oninput=()=>{N.holeDiameter=ln(u.value,fe,n?.75:12),H()};const l=document.getElementById("bpSlotLen"),p=document.getElementById("bpSlotWid");l&&p&&(l.oninput=()=>{N.slotLength=ln(l.value,fe,n?1.5:30),H()},p.oninput=()=>{N.slotWidth=ln(p.value,fe,n?.75:15),H()});const g=document.getElementById("bpCenterType"),f=document.getElementById("centerCutoutDiaGroup"),I=document.getElementById("bpCenterDia"),b=document.getElementById("valCenterDia");g.onchange=()=>{N.centerCutoutType=g.value,f.style.display=g.value==="round"?"block":"none",H()},I&&(I.oninput=()=>{N.centerCutoutDiameter=parseFloat(I.value),b.textContent=I.value,H()}),ht.querySelectorAll(".preset-pill").forEach(T=>{T.onclick=()=>{const S=parseFloat(T.getAttribute("data-len")),w=parseFloat(T.getAttribute("data-wid"));N.length=S,N.width=w,i.value=S.toString(),e.value=w.toString(),o.textContent=S.toString(),a.textContent=w.toString(),H()}})}function Ta(){ht.innerHTML=`
    <div class="form-group">
      <label class="form-label">Piping Flange Standard</label>
      <select id="flangeStandardSelect" class="form-select">
        <option value="ALL">All Flange Standards</option>
        <option value="BS10">British Standard BS 10 (Table D & E)</option>
        <option value="DIN">DIN / EN 1092-1 (PN 16)</option>
        <option value="ASME">ASME B16.5 (Class 150)</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label">Nominal Bore & Table Preset</label>
      <select id="flangePresetSelect" class="form-select"></select>
    </div>

    <div class="rates-box-title" style="margin-top: 0.8rem;">Flange Dimensions</div>
    <div style="font-size: 0.78rem; color: #94a3b8; line-height: 1.6;" id="flangeSpecsBox"></div>
  `;const n=document.getElementById("flangeStandardSelect"),t=document.getElementById("flangePresetSelect"),i=document.getElementById("flangeSpecsBox"),e=a=>{t.innerHTML="";const s=yt.filter(r=>a==="ALL"||r.standard===a);for(let r=0;r<s.length;r++){const c=s[r],u=document.createElement("option");u.value=c.name,u.textContent=`${c.name} [${c.standard}]`,t.appendChild(u)}t.value=at.name,o()},o=()=>{const a=at,s=a.units;i.innerHTML=`
      Outer Diameter: <strong>${a.outerDiameter} ${s}</strong> | Inner Bore: <strong>${a.innerBore} ${s}</strong><br>
      PCD: <strong>${a.pitchCircleDiameter} ${s}</strong> | Bolts: <strong>${a.boltCount} × ⌀${a.boltDiameter} ${s}</strong>
    `};n.onchange=()=>{e(n.value)},t.onchange=()=>{const a=yt.find(s=>s.name===t.value);a&&(at=a,$n(a.units),Cn(),o(),H())},e("ALL")}function Da(){const n=fe==="inch",t=n?"in":"mm";ht.innerHTML=`
    <div class="preset-pills-row">
      <button class="preset-pill" data-w="${n?4:100}" data-h="${n?4:100}">${n?'4×4"':"100×100"}</button>
      <button class="preset-pill" data-w="${n?6:150}" data-h="${n?6:150}">${n?'6×6"':"150×150"}</button>
      <button class="preset-pill" data-w="${n?8:200}" data-h="${n?8:200}">${n?'8×8"':"200×200"}</button>
    </div>

    <div class="form-group">
      <label class="form-label">Base Width (${t}): <strong id="valGussetW">${ne.baseWidth}</strong></label>
      <input type="range" id="gussetBaseW" min="${n?2:50}" max="${n?24:600}" value="${ne.baseWidth}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Height (${t}): <strong id="valGussetH">${ne.height}</strong></label>
      <input type="range" id="gussetHeight" min="${n?2:50}" max="${n?24:600}" value="${ne.height}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">45° Corner Weld Snipe (Cope)</label>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <input type="checkbox" id="gussetSnipeCheck" ${ne.hasWeldSnipe?"checked":""} class="form-checkbox" />
        <span style="font-size: 0.78rem; color: #cbd5e1;">Clear fillet weld bead at corner</span>
      </div>
    </div>

    <div class="form-group" id="snipeSizeGroup" style="${ne.hasWeldSnipe?"display: block;":"display: none;"}">
      <label class="form-label">Snipe Size (${t}): <strong id="valSnipeSize">${ne.snipeSize}</strong></label>
      <input type="range" id="gussetSnipeSize" min="${n?.25:10}" max="${n?3:75}" value="${ne.snipeSize}" class="form-slider" />
    </div>
  `;const i=document.getElementById("gussetBaseW"),e=document.getElementById("gussetHeight"),o=document.getElementById("valGussetW"),a=document.getElementById("valGussetH");i.oninput=()=>{ne.baseWidth=parseFloat(i.value),o.textContent=i.value,H()},e.oninput=()=>{ne.height=parseFloat(e.value),a.textContent=e.value,H()};const s=document.getElementById("gussetSnipeCheck"),r=document.getElementById("snipeSizeGroup"),c=document.getElementById("gussetSnipeSize"),u=document.getElementById("valSnipeSize");s.onchange=()=>{ne.hasWeldSnipe=s.checked,r.style.display=s.checked?"block":"none",H()},c.oninput=()=>{ne.snipeSize=parseFloat(c.value),u.textContent=c.value,H()},ht.querySelectorAll(".preset-pill").forEach(d=>{d.onclick=()=>{const l=parseFloat(d.getAttribute("data-w")),p=parseFloat(d.getAttribute("data-h"));ne.baseWidth=l,ne.height=p,i.value=l.toString(),e.value=p.toString(),o.textContent=l.toString(),a.textContent=p.toString(),H()}})}function bo(){const n=fe==="inch",t=n?"in":"mm";ht.innerHTML=`
    <div class="preset-pills-row" style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.85rem;">
      <button class="preset-pill jali-preset" data-w="${n?36:900}" data-h="${n?84:2100}" data-type="single_swing" data-frame="true" data-kick="true" data-kickh="${n?12:300}" data-pat="islamic_star" data-finish="matte_black">🏠 Main Gate 3×7 ft</button>
      <button class="preset-pill jali-preset" data-w="${n?36:900}" data-h="${n?84:2100}" data-type="double_swing" data-frame="true" data-kick="true" data-kickh="${n?14:350}" data-pat="islamic_star" data-finish="royal_gold">🚪 Double Gate 6×7 ft</button>
      <button class="preset-pill jali-preset" data-w="${n?48:1200}" data-h="${n?36:900}" data-type="single_swing" data-frame="true" data-kick="false" data-kickh="0" data-pat="diamond_lattice" data-finish="matte_black">🪟 Balcony 4×3 ft</button>
      <button class="preset-pill jali-preset" data-w="${n?24:600}" data-h="${n?48:1200}" data-type="wall_panel" data-frame="false" data-kick="false" data-kickh="0" data-pat="floral_mandala" data-finish="royal_gold">⛩️ Mandir 2×4 ft</button>
      <button class="preset-pill jali-preset" data-w="${n?48:1200}" data-h="${n?96:2400}" data-type="wall_panel" data-frame="false" data-kick="false" data-kickh="0" data-pat="voronoi_matrix" data-finish="corten_rust">🏢 Facade 4×8 ft</button>
    </div>

    <div class="form-group">
      <label class="form-label">Panel Width (${t}): <strong id="valJaliW">${R.width}</strong></label>
      <input type="range" id="jaliWidth" min="${n?12:300}" max="${n?60:1500}" value="${R.width}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Panel Height (${t}): <strong id="valJaliH">${R.height}</strong></label>
      <input type="range" id="jaliHeight" min="${n?24:600}" max="${n?120:3e3}" value="${R.height}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Architectural Pattern Style</label>
      <select id="jaliPattern" class="form-select">
        <option value="islamic_star" ${R.patternType==="islamic_star"?"selected":""}>Moroccan / Islamic 8-Star & Octagram</option>
        <option value="floral_mandala" ${R.patternType==="floral_mandala"?"selected":""}>Traditional Lotus / Floral Jaali</option>
        <option value="tree_of_life" ${R.patternType==="tree_of_life"?"selected":""}>Tree of Life / Botanical Foliage</option>
        <option value="diamond_lattice" ${R.patternType==="diamond_lattice"?"selected":""}>Diamond Lattice Grill</option>
        <option value="honeycomb" ${R.patternType==="honeycomb"?"selected":""}>Modern Hexagonal Honeycomb</option>
        <option value="modern_slotted" ${R.patternType==="modern_slotted"?"selected":""}>Staggered Vertical Louvers</option>
        <option value="chevron_herringbone" ${R.patternType==="chevron_herringbone"?"selected":""}>Modern Chevron / Herringbone</option>
        <option value="voronoi_matrix" ${R.patternType==="voronoi_matrix"?"selected":""}>Parametric Organic Voronoi</option>
      </select>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Frame Border Margin (${t})</label>
        <input type="number" id="jaliBorder" class="form-input" value="${R.borderMarginMm}" min="${n?.5:15}" max="${n?4:100}" step="${n?.25:1}" />
      </div>
      <div class="form-group">
        <label class="form-label">Grid Columns</label>
        <input type="number" id="jaliCols" class="form-input" value="${R.gridColumns}" min="2" max="12" />
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Grid Rows</label>
      <input type="number" id="jaliRows" class="form-input" value="${R.gridRows}" min="2" max="20" />
    </div>

    <!-- Gate Structure & Hardware Accessories -->
    <div class="jali-hardware-box">
      <div style="font-size: 0.74rem; font-weight: 700; color: #38bdf8; text-transform: uppercase; margin-bottom: 0.2rem; display: flex; justify-content: space-between;">
        <span>🚪 Gate Structure & Hardware</span>
        <span style="font-size: 0.68rem; color: #94a3b8;">Fabrication Ready</span>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliFrameCheck" class="form-checkbox" ${R.hasFrameTube!==!1?"checked":""} />
          <span>${n?'2" Structural Box Tube Frame':"50mm Structural Box Tube Frame"}</span>
        </label>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliKickCheck" class="form-checkbox" ${R.hasKickPlate?"checked":""} />
          <span>Solid Bottom Kickplate</span>
        </label>
      </div>

      <div id="kickHeightRow" class="form-group" style="margin-top: 0.25rem; display: ${R.hasKickPlate?"block":"none"};">
        <label class="form-label" style="font-size: 0.7rem;">Kickplate Height (${t}): <strong id="valKickH">${R.kickPlateHeightMm||(n?12:300)}</strong></label>
        <input type="range" id="jaliKickHeight" min="${n?6:150}" max="${n?24:600}" value="${R.kickPlateHeightMm||(n?12:300)}" step="${n?.5:10}" class="form-slider" />
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliHandleCheck" class="form-checkbox" ${R.hasPullHandle!==!1?"checked":""} />
          <span>Modern Architectural Bar Pull Handle</span>
        </label>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliLockCheck" class="form-checkbox" ${R.hasLockBox!==!1?"checked":""} />
          <span>Mortise Lock Box & Latch</span>
        </label>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliHingeCheck" class="form-checkbox" ${R.hasHinges!==!1?"checked":""} />
          <span>Heavy-Duty Bullet Barrel Hinges</span>
        </label>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliMountHolesCheck" class="form-checkbox" ${R.hasMountingHoles?"checked":""} />
          <span>Perimeter Mounting Standoff Holes</span>
        </label>
      </div>
    </div>
  `;const i=document.getElementById("jaliWidth"),e=document.getElementById("jaliHeight"),o=document.getElementById("valJaliW"),a=document.getElementById("valJaliH");i.oninput=()=>{R.width=parseFloat(i.value),o.textContent=i.value,H()},e.oninput=()=>{R.height=parseFloat(e.value),a.textContent=e.value,H()};const s=document.getElementById("jaliPattern");s.onchange=()=>{R.patternType=s.value,H()};const r=document.getElementById("jaliBorder"),c=document.getElementById("jaliCols"),u=document.getElementById("jaliRows");r.oninput=()=>{R.borderMarginMm=parseFloat(r.value)||(n?1.5:30),H()},c.oninput=()=>{R.gridColumns=parseInt(c.value,10)||4,H()},u&&(u.oninput=()=>{R.gridRows=parseInt(u.value,10)||6,H()});const d=document.getElementById("jaliFrameCheck");d&&(d.onchange=()=>{R.hasFrameTube=d.checked,H()});const l=document.getElementById("jaliKickCheck"),p=document.getElementById("kickHeightRow"),g=document.getElementById("jaliKickHeight"),f=document.getElementById("valKickH");l&&(l.onchange=()=>{R.hasKickPlate=l.checked,p&&(p.style.display=l.checked?"block":"none"),H()}),g&&(g.oninput=()=>{R.kickPlateHeightMm=parseFloat(g.value),f&&(f.textContent=g.value),H()});const I=document.getElementById("jaliHandleCheck");I&&(I.onchange=()=>{R.hasPullHandle=I.checked,H()});const b=document.getElementById("jaliLockCheck");b&&(b.onchange=()=>{R.hasLockBox=b.checked,H()});const T=document.getElementById("jaliHingeCheck");T&&(T.onchange=()=>{R.hasHinges=T.checked,H()});const S=document.getElementById("jaliMountHolesCheck");S&&(S.onchange=()=>{R.hasMountingHoles=S.checked,H()}),ht.querySelectorAll(".jali-preset").forEach(w=>{w.onclick=()=>{const C=parseFloat(w.getAttribute("data-w")),W=parseFloat(w.getAttribute("data-h")),U=w.getAttribute("data-type"),D=w.getAttribute("data-frame")==="true",A=w.getAttribute("data-kick")==="true",v=parseFloat(w.getAttribute("data-kickh")||"0"),y=w.getAttribute("data-pat"),h=w.getAttribute("data-finish");R.width=C,R.height=W,U&&(R.gateType=U),R.hasFrameTube=D,R.hasKickPlate=A,v&&(R.kickPlateHeightMm=v),y&&(R.patternType=y),h&&(R.finishMaterial=h),bo(),H()}})}function Fa(){const n=fe==="inch",t=n?"in":"mm";ht.innerHTML=`
    <div class="form-group">
      <label class="form-label">Base Width (${t}): <strong id="valBrW">${Z.baseWidth}</strong></label>
      <input type="range" id="brWidth" min="${n?2:50}" max="${n?16:400}" value="${Z.baseWidth}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Height (${t}): <strong id="valBrH">${Z.height}</strong></label>
      <input type="range" id="brHeight" min="${n?2:50}" max="${n?16:400}" value="${Z.height}" class="form-slider" />
    </div>
  `;const i=document.getElementById("brWidth"),e=document.getElementById("brHeight"),o=document.getElementById("valBrW"),a=document.getElementById("valBrH");i.oninput=()=>{Z.baseWidth=parseFloat(i.value),o.textContent=i.value,H()},e.oninput=()=>{Z.height=parseFloat(e.value),a.textContent=e.value,H()}}function Aa(){const n=fe==="inch",t=n?"in":"mm";ht.innerHTML=`
    <div class="form-group">
      <label class="form-label">Outer Diameter (${t}): <strong id="valDiscOD">${ae.outerDiameter}</strong></label>
      <input type="range" id="discOD" min="${n?2:50}" max="${n?24:600}" value="${ae.outerDiameter}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Inner Bore Diameter (${t}): <strong id="valDiscID">${ae.innerDiameter}</strong></label>
      <input type="range" id="discID" min="0" max="${n?Math.max(.5,ae.outerDiameter-.5):Math.max(10,ae.outerDiameter-10)}" value="${ae.innerDiameter}" step="${n?.1:1}" class="form-slider" />
    </div>
  `;const i=document.getElementById("discOD"),e=document.getElementById("discID"),o=document.getElementById("valDiscOD"),a=document.getElementById("valDiscID");i.oninput=()=>{ae.outerDiameter=parseFloat(i.value),o.textContent=i.value,e.max=(n?Math.max(.5,ae.outerDiameter-.5):Math.max(10,ae.outerDiameter-10)).toString(),H()},e.oninput=()=>{ae.innerDiameter=parseFloat(e.value),a.textContent=e.value,H()}}function $n(n){if(fe===n)return;const t=fe;fe=n,n==="inch"&&t==="mm"?(N.units="inch",N.length=Math.round(N.length/25.4*2)/2||10,N.width=Math.round(N.width/25.4*2)/2||8,N.cornerSize=Math.round(N.cornerSize/25.4*4)/4||.75,N.holeDiameter=Math.round(N.holeDiameter/25.4*16)/16||.75,N.slotLength&&(N.slotLength=Math.round(N.slotLength/25.4*4)/4||1.5),N.slotWidth&&(N.slotWidth=Math.round(N.slotWidth/25.4*16)/16||.75),N.edgeOffsetX=Math.round(N.edgeOffsetX/25.4*4)/4||1.25,N.edgeOffsetY=Math.round(N.edgeOffsetY/25.4*4)/4||1.25,N.centerCutoutDiameter&&(N.centerCutoutDiameter=Math.round(N.centerCutoutDiameter/25.4*2)/2||2.5),N.centerCutoutWidth&&(N.centerCutoutWidth=Math.round(N.centerCutoutWidth/25.4*2)/2||2),N.centerCutoutHeight&&(N.centerCutoutHeight=Math.round(N.centerCutoutHeight/25.4*2)/2||2),ne.units="inch",ne.baseWidth=Math.round(ne.baseWidth/25.4*2)/2||6,ne.height=Math.round(ne.height/25.4*2)/2||6,ne.snipeSize=Math.round(ne.snipeSize/25.4*4)/4||1,ne.mountingHoleDiameter!==void 0&&(ne.mountingHoleDiameter=Math.round(ne.mountingHoleDiameter/25.4*16)/16||.5),Z.units="inch",Z.baseWidth=Math.round(Z.baseWidth/25.4*2)/2||5,Z.height=Math.round(Z.height/25.4*2)/2||5,Z.chamferTop=Math.round(Z.chamferTop/25.4*2)/2||3,Z.chamferRight=Math.round(Z.chamferRight/25.4*2)/2||3,Z.baseHoleDiameter=Math.round(Z.baseHoleDiameter/25.4*16)/16||.375,Z.uprightHoleDiameter=Math.round(Z.uprightHoleDiameter/25.4*16)/16||.375,Z.lighteningHoleDiameter!==void 0&&(Z.lighteningHoleDiameter=Math.round(Z.lighteningHoleDiameter/25.4*4)/4||1.5),ae.units="inch",ae.outerDiameter=Math.round(ae.outerDiameter/25.4*2)/2||6,ae.innerDiameter=Math.round(ae.innerDiameter/25.4*2)/2||2,ae.pitchCircleDiameter!==void 0&&(ae.pitchCircleDiameter=Math.round(ae.pitchCircleDiameter/25.4*2)/2||4),ae.boltDiameter!==void 0&&(ae.boltDiameter=Math.round(ae.boltDiameter/25.4*16)/16||.375),R.units="inch",R.width=Math.round(R.width/25.4*2)/2||24,R.height=Math.round(R.height/25.4*2)/2||48,R.borderMarginMm=Math.round(R.borderMarginMm/25.4*4)/4||1.5,R.kickPlateHeightMm&&(R.kickPlateHeightMm=Math.round(R.kickPlateHeightMm/25.4*2)/2||12),R.frameTubeWidthMm=Math.round((R.frameTubeWidthMm||50)/25.4*2)/2||2,R.mountingHoleDiameter=Math.round((R.mountingHoleDiameter||8)/25.4*16)/16||.3125):n==="mm"&&t==="inch"&&(N.units="mm",N.length=Math.abs(N.length*25.4-254)<10?250:Math.round(N.length*25.4),N.width=Math.abs(N.width*25.4-203.2)<10?200:Math.round(N.width*25.4),N.cornerSize=Math.abs(N.cornerSize*25.4-19.05)<3?20:Math.round(N.cornerSize*25.4),N.holeDiameter=Math.abs(N.holeDiameter*25.4-19.05)<3?18:Math.round(N.holeDiameter*25.4),N.slotLength&&(N.slotLength=Math.abs(N.slotLength*25.4-38.1)<5?35:Math.round(N.slotLength*25.4)),N.slotWidth&&(N.slotWidth=Math.abs(N.slotWidth*25.4-19.05)<3?20:Math.round(N.slotWidth*25.4)),N.edgeOffsetX=Math.abs(N.edgeOffsetX*25.4-31.75)<5?35:Math.round(N.edgeOffsetX*25.4),N.edgeOffsetY=Math.abs(N.edgeOffsetY*25.4-31.75)<5?35:Math.round(N.edgeOffsetY*25.4),N.centerCutoutDiameter&&(N.centerCutoutDiameter=Math.abs(N.centerCutoutDiameter*25.4-63.5)<5?60:Math.round(N.centerCutoutDiameter*25.4)),N.centerCutoutWidth&&(N.centerCutoutWidth=Math.round(N.centerCutoutWidth*25.4)),N.centerCutoutHeight&&(N.centerCutoutHeight=Math.round(N.centerCutoutHeight*25.4)),ne.units="mm",ne.baseWidth=Math.abs(ne.baseWidth*25.4-152.4)<10?150:Math.round(ne.baseWidth*25.4),ne.height=Math.abs(ne.height*25.4-152.4)<10?150:Math.round(ne.height*25.4),ne.snipeSize=Math.abs(ne.snipeSize*25.4-25.4)<3?25:Math.round(ne.snipeSize*25.4),ne.mountingHoleDiameter!==void 0&&(ne.mountingHoleDiameter=Math.abs(ne.mountingHoleDiameter*25.4-12.7)<3?14:Math.round(ne.mountingHoleDiameter*25.4)),Z.units="mm",Z.baseWidth=Math.abs(Z.baseWidth*25.4-127)<10?120:Math.round(Z.baseWidth*25.4),Z.height=Math.abs(Z.height*25.4-127)<10?120:Math.round(Z.height*25.4),Z.chamferTop=Math.abs(Z.chamferTop*25.4-76.2)<10?80:Math.round(Z.chamferTop*25.4),Z.chamferRight=Math.abs(Z.chamferRight*25.4-76.2)<10?80:Math.round(Z.chamferRight*25.4),Z.baseHoleDiameter=Math.abs(Z.baseHoleDiameter*25.4-9.525)<2?10:Math.round(Z.baseHoleDiameter*25.4),Z.uprightHoleDiameter=Math.abs(Z.uprightHoleDiameter*25.4-9.525)<2?10:Math.round(Z.uprightHoleDiameter*25.4),Z.lighteningHoleDiameter!==void 0&&(Z.lighteningHoleDiameter=Math.abs(Z.lighteningHoleDiameter*25.4-38.1)<5?35:Math.round(Z.lighteningHoleDiameter*25.4)),ae.units="mm",ae.outerDiameter=Math.abs(ae.outerDiameter*25.4-152.4)<10?150:Math.round(ae.outerDiameter*25.4),ae.innerDiameter=Math.abs(ae.innerDiameter*25.4-50.8)<5?50:Math.round(ae.innerDiameter*25.4),ae.pitchCircleDiameter!==void 0&&(ae.pitchCircleDiameter=Math.abs(ae.pitchCircleDiameter*25.4-101.6)<5?100:Math.round(ae.pitchCircleDiameter*25.4)),ae.boltDiameter!==void 0&&(ae.boltDiameter=Math.abs(ae.boltDiameter*25.4-9.525)<2?10:Math.round(ae.boltDiameter*25.4)),R.units="mm",R.width=Math.abs(R.width*25.4-609.6)<20?600:Math.round(R.width*25.4),R.height=Math.abs(R.height*25.4-1219.2)<30?1200:Math.round(R.height*25.4),R.borderMarginMm=Math.abs(R.borderMarginMm*25.4-38.1)<5?35:Math.round(R.borderMarginMm*25.4),R.kickPlateHeightMm&&(R.kickPlateHeightMm=Math.abs(R.kickPlateHeightMm*25.4-304.8)<15?300:Math.round(R.kickPlateHeightMm*25.4)),R.frameTubeWidthMm=Math.abs((R.frameTubeWidthMm||2)*25.4-50.8)<5?50:Math.round((R.frameTubeWidthMm||2)*25.4),R.mountingHoleDiameter=Math.abs((R.mountingHoleDiameter||.3125)*25.4-7.9375)<2?8:Math.round((R.mountingHoleDiameter||.3125)*25.4))}function Cn(){const n=document.getElementById("unitMm"),t=document.getElementById("unitInch");n&&t&&(n.classList.toggle("active",fe==="mm"),t.classList.toggle("active",fe==="inch"))}function en(){const n=P.currency==="USD",t=document.getElementById("adminShopName"),i=document.getElementById("adminGstin"),e=document.getElementById("adminUpiId"),o=document.getElementById("adminMinOrder"),a=document.getElementById("adminSheetLoading"),s=document.getElementById("adminPricePerKg"),r=document.getElementById("adminPricePerMeterCut"),c=document.getElementById("adminPricePerPierce"),u=document.getElementById("adminGstPercent"),d=document.getElementById("adminTaxType");t&&(t.value=P.shopName),i&&(i.value=P.shopGstin||""),e&&(e.value=P.upiId||""),o&&(o.value=P.minimumOrderFee.toString()),a&&(a.value=P.sheetLoadingFee.toString()),d&&(d.value=P.isInterstateSale?"interstate":"intrastate");const l=document.getElementById("adminNaics"),p=document.getElementById("adminTaxId"),g=document.getElementById("adminPaymentTerms"),f=document.getElementById("adminLaserPower"),I=document.getElementById("adminHourlyRate"),b=document.getElementById("adminShopEmail"),T=document.getElementById("adminSetupFee"),S=document.getElementById("adminSalesTaxExempt");l&&(l.value=P.naicsCode||"332813 - Laser Cutting & Fabrication"),p&&(p.value=P.einOrTaxId||"34-8910245"),g&&(g.value=P.paymentTerms||"Net 30, Credit Card, ACH"),f&&(f.value=(P.laserPowerKw||4).toString()),I&&(I.value=(P.hourlyLaserRateUsd||185).toString()),b&&(b.value=P.shopEmail||"quotes@midwestprecision.com"),T&&(T.value=(P.setupFeePerJob||25).toString()),S&&(S.checked=!!P.salesTaxExempt),n?(s&&(s.value=(X.pricePerSqInch||.05).toString()),r&&(r.value=(X.pricePerLinearInchCut||.1).toString())):(s&&(s.value=(X.pricePerKg||75).toString()),r&&(r.value=(X.pricePerMeterCut||20).toString())),c&&(c.value=X.pricePerPierce.toString()),u&&(u.value=P.gstPercent.toString());const w=document.getElementById("activeGaugeBadge");if(w&&V&&X)if(n){const C=V.id.includes("a36")?"A36":V.id.includes("ss304")?"SS 304":V.id.includes("6061")?"AL 6061":"Steel",W=X.gaugeName.split("(")[0].trim();w.textContent=`${C} • ${W}`}else{const C=V.id.includes("is2062")?"IS 2062":V.id.includes("ss304")?"SS 304":V.id.includes("aluminum")?"AL 6061":V.name.split(" ")[0],W=X.gaugeName.replace("Sheet","").replace("Plate","").trim();w.textContent=`${C} • ${W}`}}function oe(n){const t=document.getElementById("toastNotification");t&&(t.textContent=n,t.classList.remove("hidden"),setTimeout(()=>{t.classList.add("hidden")},2500))}function Ra(n,t){if(n.length===0)return{x:0,y:0};if(t<=0){const s=n[0];return s.type==="line"?s.start:{x:s.center.x+s.radius*Math.cos(s.startAngle),y:s.center.y+s.radius*Math.sin(s.startAngle)}}if(t>=1){const s=n[n.length-1];return s.type==="line"?s.end:{x:s.center.x+s.radius*Math.cos(s.endAngle),y:s.center.y+s.radius*Math.sin(s.endAngle)}}const i=n.map(s=>{if(s.type==="line")return Math.sqrt((s.end.x-s.start.x)**2+(s.end.y-s.start.y)**2);{let r=s.counterClockwise?s.endAngle-s.startAngle:s.startAngle-s.endAngle;for(;r<0;)r+=2*Math.PI;for(;r>2*Math.PI;)r-=2*Math.PI;return s.radius*r}}),e=i.reduce((s,r)=>s+r,0),o=t*e;let a=0;for(let s=0;s<n.length;s++){const r=n[s],c=i[s];if(a+c>=o||s===n.length-1){const u=c>0?(o-a)/c:0;if(r.type==="line")return{x:r.start.x+(r.end.x-r.start.x)*u,y:r.start.y+(r.end.y-r.start.y)*u};{let d=r.counterClockwise?r.endAngle-r.startAngle:r.startAngle-r.endAngle;for(;d<0;)d+=2*Math.PI;for(;d>2*Math.PI;)d-=2*Math.PI;const l=r.counterClockwise?r.startAngle+d*u:r.startAngle-d*u;return{x:r.center.x+r.radius*Math.cos(l),y:r.center.y+r.radius*Math.sin(l)}}}a+=c}return{x:0,y:0}}function Na(){var r,c,u,d,l,p;if(Ht){mi();return}$t="part",(r=document.getElementById("btnViewPart"))==null||r.classList.add("active"),(c=document.getElementById("btnViewNesting"))==null||c.classList.remove("active"),pe==="jali"&&Ue==="realistic_gate"&&(Ue="cam_toolpath",(u=document.getElementById("btnJaliViewRealistic"))==null||u.classList.remove("active"),(d=document.getElementById("btnJaliViewCam"))==null||d.classList.add("active"),(l=document.getElementById("camLegendBar"))==null||l.classList.remove("hidden"),(p=document.getElementById("archLegendBar"))==null||p.classList.add("hidden"));const n=ve();if(St=po(n,X.feedRateMmMin,X.pierceDelaySec),St.length===0)return;Ht=!0,zt=0;const t=document.getElementById("simSpeedSelect");At=parseFloat((t==null?void 0:t.value)||"1")||1;const i=document.getElementById("simHudOverlay");i&&i.classList.remove("hidden");const e=document.getElementById("btnSimulateCut");e&&(e.textContent="⏸ Pause",e.classList.add("simulating"));let o=0,a=performance.now();function s(g){if(!Ht)return;const f=St[zt];if(!f){Ha();return}const I=Math.min(.1,(g-a)/1e3);a=g,o+=I*At;const b=o,T=.5,S=b<T;let w=0;if(!S){const F=Math.max(.01,f.simulatedDurationSec-T);w=Math.min(1,(b-T)/F)}let C=f.piercePoint;!S&&f.segments.length>0&&(C=Ra(f.segments,w)),ee.innerHTML=Mn(n,{showCutOrder:Ge,dfmIssues:ut==null?void 0:ut.issues,highlightedHoleIndex:lt,simulationState:{activeStepIndex:f.stepIndex,nozzlePos:C,isPiercing:S,progressRatio:w}}),_e();const W=document.getElementById("simStatusText"),U=document.getElementById("simProgressBar"),D=document.getElementById("simStepText"),A=document.getElementById("simTimeText");W&&(W.innerHTML=S?`<span style="color:#ef4444; font-weight:700;">🔥 PIERCING</span> ${f.label} (${f.layerName})`:`<span style="color:#22c55e; font-weight:700;">⚡ CUTTING</span> ${f.label} (${Math.round(w*100)}%)`);const v=St.reduce((F,_)=>F+_.simulatedDurationSec,0),y=St.slice(0,zt).reduce((F,_)=>F+_.simulatedDurationSec,0),h=Math.min(f.simulatedDurationSec,b),m=v>0?(y+h)/v:0;U&&(U.style.width=`${Math.min(100,Math.round(m*100))}%`),D&&(D.textContent=`Step ${zt+1} of ${St.length}`);const B=v/At;if(A){const F=Math.min(B,(y+h)/At);A.textContent=`${F.toFixed(1)}s / ${B.toFixed(1)}s (${At}x)`}const M=f.simulatedDurationSec;(b>=M||!S&&w>=1)&&(zt++,o=0,a=performance.now()),Vt=requestAnimationFrame(s)}o=0,a=performance.now(),Vt=requestAnimationFrame(s)}function mi(){Ht=!1,Vt&&(cancelAnimationFrame(Vt),Vt=null);const n=document.getElementById("simHudOverlay");n&&n.classList.add("hidden");const t=document.getElementById("btnSimulateCut");t&&(t.textContent="▶ Simulate Cut Order",t.classList.remove("simulating")),H()}function Ha(){const n=document.getElementById("simStatusText"),t=document.getElementById("simProgressBar");n&&(n.innerHTML='<span style="color:#38bdf8; font-weight:700;">✅ SIMULATION COMPLETE:</span> Inner Cutouts Cut First, Outer Contour Cut Last'),t&&(t.style.width="100%");const i=ve();ee.innerHTML=Mn(i,{showCutOrder:Ge,dfmIssues:ut==null?void 0:ut.issues,highlightedHoleIndex:lt,simulationState:{activeStepIndex:St.length+1,isPiercing:!1}}),_e(),setTimeout(()=>{mi()},2200)}function Xt(){var e,o,a;const n=((e=document.getElementById("cartProjectName"))==null?void 0:e.value.trim())||"Custom Assembly Project",t=((o=document.getElementById("cartCustomerName"))==null?void 0:o.value.trim())||"Valued Customer",i=((a=document.getElementById("cartCustomerPhone"))==null?void 0:a.value.trim())||"";return{id:`PRJ-${Date.now().toString().slice(-6)}`,projectName:n,customerName:t,customerPhone:i,items:me,selectedSheetSize:Fe,shopSettings:P,allowRotation:!0}}function mt(){const n=document.getElementById("cartItemsList"),t=document.getElementById("cartBadge"),i=document.getElementById("nestCartCount"),e=document.getElementById("cartSummaryBox"),o=document.getElementById("shareCartWhatsAppBtn"),a=document.getElementById("printCartInvoiceBtn"),s=document.getElementById("printCartJobCardBtn");if(t&&(t.textContent=me.length.toString(),t.style.display=me.length>0?"inline-block":"none"),i&&(i.textContent=me.length.toString()),!n)return;if(me.length===0){n.innerHTML=`
      <div class="empty-cart-state">
        <span class="empty-icon">🛒</span>
        <h4>Your RFQ Cart is Empty</h4>
        <p>Configure parametric parts or upload DXFs, then click <strong>"➕ Add Part to RFQ Cart"</strong> to assemble multi-part project orders with combined nesting.</p>
      </div>
    `,e&&e.classList.add("hidden"),o&&(o.disabled=!0),a&&(a.disabled=!0),s&&(s.disabled=!0);const v=document.getElementById("btnEmailCartQuote"),y=document.getElementById("btnCopyCartRfqText");v&&(v.disabled=!0),y&&(y.disabled=!0);return}e&&e.classList.remove("hidden"),o&&(o.disabled=!1),a&&(a.disabled=!1),s&&(s.disabled=!1);const r=document.getElementById("btnEmailCartQuote"),c=document.getElementById("btnCopyCartRfqText");r&&(r.disabled=!1),c&&(c.disabled=!1);const u=Tt(me,P,Fe);Ft=u,n.innerHTML="",me.forEach((v,y)=>{const h=document.createElement("div");h.className="cart-item-card";const m=P.currency==="INR"?"₹":"$",B=(v.unitQuote.finalUnitPrice*v.quantity).toFixed(2);h.innerHTML=`
      <div class="cart-item-header">
        <div class="cart-item-info">
          <span class="cart-item-num">#${y+1}</span>
          <span class="cart-item-name">${v.partGeometry.name}</span>
          <span class="cart-item-badge">${v.materialName} (${v.gaugeThicknessMm}mm)</span>
        </div>
        <button class="cart-item-del-btn" data-id="${v.id}" title="Remove part">✕</button>
      </div>
      <div class="cart-item-specs">
        <span>Dim: ${P.currency==="USD"?(v.partGeometry.boundingBox.width/(v.partGeometry.units==="inch"?1:25.4)).toFixed(1)+"×"+(v.partGeometry.boundingBox.height/(v.partGeometry.units==="inch"?1:25.4)).toFixed(1)+'"':v.partGeometry.boundingBox.width.toFixed(0)+"×"+v.partGeometry.boundingBox.height.toFixed(0)+"mm"}</span>
        <span>Cut: ${P.currency==="USD"?v.metrics.totalCutLengthInches.toFixed(1)+"in":(v.metrics.totalCutLengthMm/1e3).toFixed(2)+"m"}</span>
        <span>Pierces: ${v.metrics.pierceCount}</span>
        <span>Wt: ${P.currency==="USD"?(v.metrics.theoreticalWeightLbs*v.quantity).toFixed(2)+"lbs":(v.metrics.theoreticalWeightKg*v.quantity).toFixed(2)+"kg"}</span>
      </div>
      <div class="cart-item-controls">
        <div class="cart-qty-stepper">
          <button class="cart-qty-btn btn-cart-minus" data-id="${v.id}">-</button>
          <input type="number" class="cart-qty-input" data-id="${v.id}" value="${v.quantity}" min="1" max="9999" />
          <button class="cart-qty-btn btn-cart-plus" data-id="${v.id}">+</button>
        </div>
        <div class="cart-item-pricing">
          <span class="cart-unit-rate">(${m}${v.unitQuote.finalUnitPrice.toFixed(2)} / pc)</span>
          <span class="cart-item-total">${m}${B}</span>
        </div>
      </div>
    `,n.appendChild(h)}),n.querySelectorAll(".cart-item-del-btn").forEach(v=>{v.onclick=y=>{const h=y.currentTarget.getAttribute("data-id");me=me.filter(m=>m.id!==h),mt(),Ze==="cart"&&H(),oe("🗑️ Part removed from cart")}}),n.querySelectorAll(".btn-cart-minus").forEach(v=>{v.onclick=y=>{const h=y.currentTarget.getAttribute("data-id"),m=me.find(B=>B.id===h);m&&m.quantity>1&&(m.quantity--,m.unitQuote=ot(m.metrics,X,m.quantity,P,m.secondaryOps),m.totalPrice=m.unitQuote.finalOrderTotal,mt(),Ze==="cart"&&H())}}),n.querySelectorAll(".btn-cart-plus").forEach(v=>{v.onclick=y=>{const h=y.currentTarget.getAttribute("data-id"),m=me.find(B=>B.id===h);m&&(m.quantity++,m.unitQuote=ot(m.metrics,X,m.quantity,P,m.secondaryOps),m.totalPrice=m.unitQuote.finalOrderTotal,mt(),Ze==="cart"&&H())}}),n.querySelectorAll(".cart-qty-input").forEach(v=>{v.onchange=y=>{const h=y.target,m=h.getAttribute("data-id"),B=Math.max(1,parseInt(h.value,10)||1),M=me.find(F=>F.id===m);M&&(M.quantity=B,M.unitQuote=ot(M.metrics,X,M.quantity,P,M.secondaryOps),M.totalPrice=M.unitQuote.finalOrderTotal,mt(),Ze==="cart"&&H())}});const d=P.currency==="USD",l=d?"$":"₹",p=document.getElementById("cartTotalParts"),g=document.getElementById("cartTotalCut"),f=document.getElementById("cartTotalPierces"),I=document.getElementById("cartTotalMass"),b=document.getElementById("cartNestingText"),T=document.getElementById("cartCostMaterial"),S=document.getElementById("cartCostCut"),w=document.getElementById("cartCostPierce"),C=document.getElementById("cartCostSecondary"),W=document.getElementById("cartCostDiscount"),U=document.getElementById("cartGstLabel"),D=document.getElementById("cartCostGst"),A=document.getElementById("cartTotalIncGst");if(p&&(p.textContent=`${u.totalPartsCount} pcs`),g&&(g.textContent=d?`${(u.totalCutLengthMeters*39.3701).toFixed(1)} in`:`${u.totalCutLengthMeters.toFixed(1)} m`),f&&(f.textContent=u.totalPierces.toString()),I&&(I.textContent=d?`${(u.totalNetPartMassKg*2.20462).toFixed(1)} lbs`:`${u.totalNetPartMassKg.toFixed(2)} kg`),b){const v=u.nestingResult.sheetsRequired;b.textContent=`Nesting: ${v} Sheet${v>1?"s":""} of ${Fe.name} (${u.nestingResult.sheetUtilizationPercent}% util)`}T&&(T.textContent=`${l}${u.totalMaterialCost.toFixed(2)}`),S&&(S.textContent=`${l}${u.totalCutCost.toFixed(2)}`),w&&(w.textContent=`${l}${u.totalPierceCost.toFixed(2)}`),C&&(C.textContent=`${l}${u.totalSecondaryCost.toFixed(2)}`),W&&(W.textContent=`-${u.volumeDiscountPercent}% (${l}${u.discountAmount.toFixed(2)})`),U&&(U.textContent=d?`Sales Tax (${P.gstPercent||0}%):`:P.isInterstateSale?"IGST (18%):":"GST (CGST 9% + SGST 9%):"),D&&(D.textContent=`${l}${u.gstAmount.toFixed(2)}`),A&&(A.textContent=`${l}${u.finalTotalWithGst.toFixed(2)}`)}function Wa(){const n=document.getElementById("btnCurrencyINR"),t=document.getElementById("btnCurrencyUSD");n&&(n.style.display="none",n.onclick=()=>si("USD")),t&&(t.onclick=()=>si("USD"));const i=document.getElementById("modeJobWork"),e=document.getElementById("modeWithMaterial"),o=document.getElementById("modeSqFtJali");i&&(i.onclick=()=>Kt("job_work")),e&&(e.onclick=()=>Kt("with_material")),o&&(o.onclick=()=>Kt("sqft_jali"));const a=document.getElementById("btnViewPart"),s=document.getElementById("btnViewNesting");a&&s&&(a.onclick=()=>{$t="part",a.classList.add("active"),s.classList.remove("active"),Yt(),H()},s.onclick=()=>{$t="nesting",s.classList.add("active"),a.classList.remove("active"),Yt(),H()});const r=document.getElementById("btnJaliViewRealistic"),c=document.getElementById("btnJaliViewCam");r&&c&&(r.onclick=()=>{Ue="realistic_gate",H()},c.onclick=()=>{Ue="cam_toolpath",H()}),document.querySelectorAll(".finish-swatch").forEach(x=>{x.onclick=()=>{const E=x.getAttribute("data-finish");E&&(R.finishMaterial=E,H())}}),document.querySelectorAll(".backlight-pill").forEach(x=>{x.onclick=()=>{const E=x.getAttribute("data-backlight");E&&(R.backlightColor=E,H())}}),document.querySelectorAll(".gate-type-btn").forEach(x=>{x.onclick=()=>{const E=x.getAttribute("data-gatetype");E&&(R.gateType=E,bt(),H())}});const u=document.getElementById("btnFoldGateToolbar"),d=document.getElementById("btnExpandGateToolbar"),l=document.getElementById("gateFoldedBar");u&&(u.onclick=x=>{x.stopPropagation(),gn=!0,Mt(),_e()}),d&&(d.onclick=x=>{x.stopPropagation(),gn=!1,Mt(),_e()}),l&&(l.onclick=()=>{gn=!1,Mt(),_e()});const p=document.getElementById("btnFoldBottomHud"),g=document.getElementById("btnExpandBottomHud"),f=document.getElementById("bottomHudFoldedBar");p&&(p.onclick=x=>{x.stopPropagation(),fn=!0,Mt(),_e()}),g&&(g.onclick=x=>{x.stopPropagation(),fn=!1,Mt(),_e()}),f&&(f.onclick=()=>{fn=!1,Mt(),_e()}),hn&&(hn.value=P.assistGas,hn.onchange=()=>{P.assistGas=hn.value,H()}),vt&&(vt.onchange=()=>{const E=(P.currency==="USD"?In:Gt).find(G=>G.id===vt.value);E&&(Fe=E),H()});const I=document.getElementById("toggleSecOpsBtn"),b=document.getElementById("secOpsContent"),T=document.getElementById("secOpsChevron");I&&b&&(I.onclick=()=>{b.classList.toggle("hidden"),T&&(T.textContent=b.classList.contains("hidden")?"▶":"▼")});const S=document.getElementById("secBendsCount"),w=document.getElementById("secTapsCount"),C=document.getElementById("secDeburringCheck"),W=document.getElementById("secSurfaceFinish");S&&(S.oninput=()=>{ze.bendingBendsCount=parseInt(S.value,10)||0,H()}),w&&(w.oninput=()=>{ze.tappingHolesCount=parseInt(w.value,10)||0,H()}),C&&(C.onchange=()=>{ze.deburringEnabled=C.checked,H()}),W&&(W.onchange=()=>{ze.surfaceFinish=W.value,H()}),document.querySelectorAll(".shape-btn").forEach(x=>{x.onclick=()=>{var E,G,z,q;document.querySelectorAll(".shape-btn").forEach(Q=>Q.classList.remove("active")),x.classList.add("active"),pe=x.getAttribute("data-shape"),Dt=!1,pe==="jali"?(Kt("sqft_jali"),Ue="realistic_gate",Ge=!1,(E=document.getElementById("btnToggleCamBadges"))==null||E.classList.remove("active"),(G=document.getElementById("legendBadgeToggle"))==null||G.classList.remove("active")):(Ge=!0,(z=document.getElementById("btnToggleCamBadges"))==null||z.classList.add("active"),(q=document.getElementById("legendBadgeToggle"))==null||q.classList.add("active")),bt(),Yt(),H()}}),Zt.onchange=()=>{const x=Ve.find(E=>E.id===Zt.value);x&&(V=x,xo(),en(),H())},Nt.onchange=()=>{const x=parseInt(Nt.value,10);X=V.gauges[x],en(),H()};const U=document.getElementById("partQuantity"),D=document.getElementById("qtyMinus"),A=document.getElementById("qtyPlus");U.oninput=()=>{Ie=Math.max(1,parseInt(U.value,10)||1),H()},D.onclick=()=>{Ie=Math.max(1,Ie-1),U.value=Ie.toString(),H()},A.onclick=()=>{Ie++,U.value=Ie.toString(),H()};const v=document.getElementById("addToCartBtn");v&&(v.onclick=()=>{const x=ve(),E=ft(x,X.thicknessMm,V.densityGPerCm3),G=ot(E,X,Ie,P,ze),z={id:`item_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,partGeometry:JSON.parse(JSON.stringify(x)),materialId:V.id,materialName:V.name,gaugeThicknessMm:X.thicknessMm,quantity:Ie,secondaryOps:{...ze},metrics:E,unitQuote:G,totalPrice:G.finalOrderTotal,color:["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"][me.length%6],createdAt:Date.now()};me.push(z),mt(),oe(`➕ Added ${Ie}× "${z.partGeometry.name}" to RFQ Cart!`);const q=document.getElementById("tabCart");q&&(q.classList.add("pulse"),setTimeout(()=>q.classList.remove("pulse"),1200))});const y=document.getElementById("btnSimulateCut"),h=document.getElementById("btnStopSim"),m=document.getElementById("btnToggleCamBadges"),B=document.getElementById("simSpeedSelect");y&&(y.onclick=()=>{Na()}),h&&(h.onclick=()=>{mi()});const M=document.getElementById("legendBadgeToggle"),F=()=>{Ge=!Ge,m==null||m.classList.toggle("active",Ge),M==null||M.classList.toggle("active",Ge),H()};m&&(m.onclick=F),M&&(M.onclick=F),B&&(B.onchange=()=>{At=parseFloat(B.value)||1});const _=document.getElementById("btnPrevSheet"),$=document.getElementById("btnNextSheet"),k=document.getElementById("btnNestSourceSingle"),L=document.getElementById("btnNestSourceCart"),O=document.getElementById("btnNestCartOnBed");_&&(_.onclick=()=>{Oe>0&&(Oe--,H())}),$&&($.onclick=()=>{ai&&Oe<ai.sheetsRequired-1&&(Oe++,H())}),k&&L&&(k.onclick=()=>{Ze="single",k.classList.add("active"),L.classList.remove("active"),Oe=0,H()},L.onclick=()=>{if(me.length===0){oe("⚠️ RFQ Cart is empty. Add parts first.");return}Ze="cart",L.classList.add("active"),k.classList.remove("active"),Oe=0,H()}),O&&(O.onclick=()=>{var x,E;if(me.length===0){oe("⚠️ RFQ Cart is empty. Add parts first.");return}Ze="cart",$t="nesting",(x=document.getElementById("btnViewNesting"))==null||x.classList.add("active"),(E=document.getElementById("btnViewPart"))==null||E.classList.remove("active"),L==null||L.classList.add("active"),k==null||k.classList.remove("active"),Oe=0,H()});const Y=document.getElementById("clearCartBtn");Y&&(Y.onclick=()=>{me.length>0&&confirm("Clear all items from your RFQ Cart?")&&(me=[],mt(),Ze==="cart"&&(Ze="single",k==null||k.classList.add("active"),L==null||L.classList.remove("active"),H()),oe("🛒 RFQ Cart cleared"))});const j=document.getElementById("shareCartWhatsAppBtn");j&&(j.onclick=()=>{if(me.length===0)return;const x=Xt(),E=Ft||Tt(me,P,Fe);if(P.currency==="USD"){const G=Jn(x,E,x.customerName);if(navigator.clipboard.writeText(G).then(()=>{oe("✉️ Project Quotation copied to clipboard! (Ready for email)")}).catch(()=>{oe("Quotation copied.")}),x.customerPhone&&x.customerPhone.includes("@")){const z=encodeURIComponent(`Quotation: ${x.projectName||"Laser Project RFQ"} — ${P.shopName}`),q=encodeURIComponent(G);window.open(`mailto:${x.customerPhone}?subject=${z}&body=${q}`,"_blank")}}else{const G=Jo(x,E),z=P.currency==="INR"?"91":"1",q=ji(G,x.customerPhone,z);window.open(q,"_blank")}});function se(x){const E=document.getElementById("rfqSubmitModal");if(!E)return;const G=document.getElementById("rfqSummaryPartLabel"),z=document.getElementById("rfqSummaryTotal"),q=document.getElementById("btnSubmitRfqEmail"),Q=document.getElementById("btnDownloadRfqPdf"),ue=document.getElementById("closeRfqModalBtn");let Me="$0.00",Re=null,De=null;{if(me.length===0){oe("⚠️ RFQ Cart is empty. Add parts before submitting quote.");return}De=Xt(),Re=Ft||Tt(me,P,Fe),Me=`$${Re.finalTotalWithGst.toFixed(2)}`,G&&(G.textContent=`Project RFQ: ${De.projectName||"Batch Project"} (${me.length} parts)`)}z&&(z.textContent=Me),ue==null||ue.addEventListener("click",()=>E.classList.add("hidden"),{once:!0}),E.addEventListener("click",We=>{We.target===E&&E.classList.add("hidden")},{once:!0}),q&&(q.onclick=()=>{var wi,Ei,Li,Ti,Di,Fi,Ai,Ri,Ni,Hi,Wi;const We=((wi=document.getElementById("rfqCustomerName"))==null?void 0:wi.value.trim())||"Valued Client",Ke=((Ei=document.getElementById("rfqCompanyName"))==null?void 0:Ei.value.trim())||"",tt=((Li=document.getElementById("rfqCustomerEmail"))==null?void 0:Li.value.trim())||"",we=((Ti=document.getElementById("rfqCustomerPhone"))==null?void 0:Ti.value.trim())||"",nt=((Di=document.getElementById("rfqProjectRef"))==null?void 0:Di.value.trim())||"",it=((Fi=document.getElementById("rfqShippingZip"))==null?void 0:Fi.value.trim())||"",pt=((Ai=document.getElementById("rfqLeadTimeSelect"))==null?void 0:Ai.value)||"standard",gt=((Ri=document.getElementById("rfqDeliveryMethod"))==null?void 0:Ri.value)||"dock_pickup",qt=((Ni=document.getElementById("rfqMtrCerts"))==null?void 0:Ni.checked)||!1,vi=((Hi=document.getElementById("rfqTaxExempt"))==null?void 0:Hi.checked)||!1,Xn=((Wi=document.getElementById("rfqNotes"))==null?void 0:Wi.value.trim())||"",ki=P.shopEmail||"quotes@midwestprecision.com",So=`Manufacturing RFQ: ${nt||"Batch Project"} — ${Ke||We}`;let Pi="";De&&(Pi=Jn(De,Re,We));const Bi=["====================================================","COMMERCIAL MANUFACTURING REQUEST FOR QUOTE (RFQ)","====================================================",`Date: ${new Date().toLocaleDateString("en-US")}`,`Destination Shop: ${P.shopName} (${ki})`,"","CUSTOMER / BUYER INFORMATION:",`• Contact: ${We}`,Ke?`• Company: ${Ke}`:"",tt?`• Email: ${tt}`:"",we?`• Phone: ${we}`:"",nt?`• Project / PO #: ${nt}`:"",it?`• Destination Zip Code: ${it}`:"",`• Turnaround Requested: ${pt==="rush"?"24-Hour Rush":pt==="expedited"?"Expedited (2-3 Days)":"Standard (5-7 Days)"}`,`• Delivery: ${gt==="freight"?"UPS Ground / LTL Freight":"Shop Dock Pickup / Will-Call"}`,qt?"• Quality: Material Test Reports (MTRs / Mill Certs) REQUIRED":"",vi?"• Commercial: Tax-Exempt Wholesale Order (Resale Cert on file)":"",Xn?`
CUSTOMER NOTES / FINISH SPECS:
${Xn}`:"",`
----------------------------------------------------`,Pi,"===================================================="].filter(Boolean).join(`
`);navigator.clipboard.writeText(Bi).then(()=>{oe("✉️ Manufacturing RFQ copied to clipboard & dispatched!")}).catch(()=>{oe("RFQ copied.")});const Mo=`mailto:${encodeURIComponent(ki)}?cc=${encodeURIComponent(tt)}&subject=${encodeURIComponent(So)}&body=${encodeURIComponent(Bi)}`;if(window.open(Mo,"_blank"),P.rfqWebhookUrl)try{fetch(P.rfqWebhookUrl,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({shopName:P.shopName,timestamp:Date.now(),customer:{name:We,company:Ke,email:tt,phone:we,zip:it},project:{projectRef:nt,leadTime:pt,delivery:gt,mtr:qt,taxExempt:vi,notes:Xn},quote:Re})}).catch(console.error)}catch(vo){console.warn("Webhook dispatch failed:",vo)}E.classList.add("hidden")}),Q&&(Q.onclick=()=>{var nt,it;(nt=document.getElementById("rfqCustomerName"))!=null&&nt.value.trim(),(it=document.getElementById("rfqCustomerPhone"))!=null&&it.value.trim();const We=document.getElementById("docModal"),Ke=document.getElementById("docModalTitle"),tt=document.getElementById("docFrame");let we="";De&&(we=Yi(De,Re),Ke.textContent=`Commercial Manufacturing Quotation — ${De.projectName}`),We.classList.remove("hidden"),tt.srcdoc=we,E.classList.add("hidden")}),E.classList.remove("hidden")}const ye=document.getElementById("btnEmailCartQuote");ye&&(ye.onclick=()=>{se()});const et=document.getElementById("btnCopyCartRfqText");et&&(et.onclick=()=>{if(me.length===0)return;const x=Xt(),E=Ft||Tt(me,P,Fe),G=Jn(x,E,x.customerName);navigator.clipboard.writeText(G).then(()=>{oe("📋 Project RFQ Text copied to clipboard!")}).catch(()=>{oe("Project RFQ Text copied.")})});const Xe=document.getElementById("printCartInvoiceBtn");Xe&&(Xe.onclick=()=>{if(me.length===0)return;const x=Xt(),E=Ft||Tt(me,P,Fe),G=Yi(x,E),z=document.getElementById("docModal"),q=document.getElementById("docModalTitle"),Q=document.getElementById("docFrame");q.textContent=P.currency==="USD"?`Project Quotation — ${x.projectName}`:`Project Tax Invoice — ${x.projectName} (with UPI QR)`,z.classList.remove("hidden"),Q.srcdoc=G});const ie=document.getElementById("printCartJobCardBtn");ie&&(ie.onclick=()=>{if(me.length===0)return;const x=Xt(),E=Ft||Tt(me,P,Fe),G=ra(x,E),z=document.getElementById("docModal"),q=document.getElementById("docModalTitle"),Q=document.getElementById("docFrame");q.textContent=`Batch Job Card — ${x.projectName}`,z.classList.remove("hidden"),Q.srcdoc=G});const K=document.getElementById("shareWhatsAppBtn"),J=document.getElementById("customerPhoneInput");K&&(K.onclick=()=>{const x=ve(),E=ft(x,X.thicknessMm,V.densityGPerCm3),G=ot(E,X,Ie,P,ze),z=J?J.value.trim():"";if(P.currency==="USD"){const q=cn(x.name,E,V.name,X,G,P.shopName,P,"Valued Customer");if(navigator.clipboard.writeText(q).then(()=>{oe("✉️ Manufacturing Quotation copied to clipboard! (Ready for email)")}).catch(()=>{oe("Quotation copied.")}),z.includes("@")){const Q=encodeURIComponent(`Quotation: ${x.name} — ${P.shopName}`),ue=encodeURIComponent(q);window.open(`mailto:${z}?subject=${Q}&body=${ue}`,"_blank")}}else{const q=zi(x.name,E,V.name,X,G,P.shopName,P),Q=P.currency==="INR"?"91":"1",ue=ji(q,z,Q);window.open(ue,"_blank")}});const ce=document.getElementById("btnEmailQuote");ce&&(ce.onclick=()=>{const x=ve(),E=ft(x,X.thicknessMm,V.densityGPerCm3),G=ot(E,X,Ie,P,ze),z=J?J.value.trim():"",q=cn(x.name,E,V.name,X,G,P.shopName,P,"Valued Customer");if(navigator.clipboard.writeText(q).then(()=>{oe("✉️ Manufacturing Quotation copied to clipboard! (Ready for email)")}).catch(()=>{oe("Quotation copied.")}),z.includes("@")){const Q=encodeURIComponent(`Quotation: ${x.name} — ${P.shopName}`),ue=encodeURIComponent(q);window.open(`mailto:${z}?subject=${Q}&body=${ue}`,"_blank")}});const xe=document.getElementById("btnCopyRfqText");xe&&(xe.onclick=()=>{const x=ve(),E=ft(x,X.thicknessMm,V.densityGPerCm3),G=ot(E,X,Ie,P,ze),z=cn(x.name,E,V.name,X,G,P.shopName,P,"Valued Customer");navigator.clipboard.writeText(z).then(()=>{oe("📋 RFQ Text copied to clipboard!")}).catch(()=>{oe("RFQ text copied.")})});const te=document.getElementById("docModal"),Pe=document.getElementById("docModalTitle"),Be=document.getElementById("docFrame"),be=document.getElementById("closeDocModalBtn");be.onclick=()=>te.classList.add("hidden"),ca({onLoadJeepToCad:()=>Ce(!0)});const ge=document.getElementById("printInvoiceBtn");ge&&(ge.onclick=()=>{const x=ve(),E=ft(x,X.thicknessMm,V.densityGPerCm3),G=ot(E,X,Ie,P,ze),z=J?J.value:"",q=aa(x,E,V.name,X,G,P,"Walk-in Customer",z);Pe.textContent=P.currency==="USD"?"Manufacturing Quotation Preview":"Proforma Invoice Preview (with UPI QR)",te.classList.remove("hidden"),Be.srcdoc=q});const $e=document.getElementById("jobCardBtn");$e&&($e.onclick=()=>{const x=ve(),E=ft(x,X.thicknessMm,V.densityGPerCm3),G=sa(x,E,V.name,X,Ie,P);Pe.textContent="Laser Machine Operator Job Card",te.classList.remove("hidden"),Be.srcdoc=G}),document.getElementById("downloadDxfBtn").onclick=()=>{const x=ve(),E=kt.find(ue=>ue.id===P.selectedCAMProfileId)||kt[0],G=qo(x,E),z=new Blob([G],{type:"application/dxf"}),q=URL.createObjectURL(z),Q=document.createElement("a");Q.href=q,Q.download=`${x.name.toLowerCase().replace(/[\s\/\(\)]+/g,"_")}_${E.id}.dxf`,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(q)};const ke=document.getElementById("copyQuoteBtn"),st=document.getElementById("toastNotification");ke&&(ke.onclick=async()=>{const x=ve(),E=ft(x,X.thicknessMm,V.densityGPerCm3),G=ot(E,X,Ie,P,ze),z=P.currency==="USD"?cn(x.name,E,V.name,X,G,P.shopName,P,"Valued Customer"):zi(x.name,E,V.name,X,G,P.shopName,P);try{await navigator.clipboard.writeText(z),st&&(st.textContent=P.currency==="USD"?"📋 Email Quotation copied to clipboard!":"📋 Quotation copied to clipboard!",st.classList.remove("hidden"),setTimeout(()=>{st.classList.add("hidden")},2200))}catch{alert("Quotation copied to clipboard.")}});const Te=document.getElementById("dropzone"),re=document.getElementById("dxfFileInput"),Se=document.getElementById("tabParametric"),rt=document.getElementById("tabUpload"),le=document.getElementById("parametricContainer"),Qe=document.getElementById("uploadContainer");Se.onclick=()=>{Se.classList.add("active"),rt.classList.remove("active"),le.classList.remove("hidden"),Qe.classList.add("hidden"),Dt=!1,H()},rt.onclick=()=>{rt.classList.add("active"),Se.classList.remove("active"),Qe.classList.remove("hidden"),le.classList.add("hidden"),Dt=!0,H()},Te.onclick=()=>re.click(),re.onchange=x=>{var G;const E=(G=x.target.files)==null?void 0:G[0];E&&Ae(E)},Te.ondragover=x=>{x.preventDefault(),Te.classList.add("dragover")},Te.ondragleave=()=>Te.classList.remove("dragover"),Te.ondrop=x=>{var G;x.preventDefault(),Te.classList.remove("dragover");const E=(G=x.dataTransfer)==null?void 0:G.files[0];E&&Ae(E)};const Ne=document.getElementById("canvasViewport");Ne&&(Ne.ondragover=x=>{x.preventDefault(),Te.classList.add("dragover")},Ne.ondragleave=x=>{x.target===Ne&&Te.classList.remove("dragover")},Ne.ondrop=x=>{var G;x.preventDefault(),Te.classList.remove("dragover");const E=(G=x.dataTransfer)==null?void 0:G.files[0];E&&(rt.click(),Ae(E))});function de(){const x=document.getElementById("dxfPartsList");if(!x)return;x.innerHTML="";const E=fe==="inch";It.forEach((G,z)=>{const q=G.geometry,Q=document.createElement("div");Q.className=`dxf-part-card ${z===Et?"is-active":""}`,Q.setAttribute("data-index",z.toString());const ue=oa(q,42),Me=E?q.boundingBox.width:q.boundingBox.width*(q.units==="inch"?25.4:1),Re=E?q.boundingBox.height:q.boundingBox.height*(q.units==="inch"?25.4:1),De=E?'"':" mm",We=`${Me.toFixed(Me>=10?1:2)} × ${Re.toFixed(Re>=10?1:2)}${De}`,Ke=q.innerHoles?q.innerHoles.length:0,tt=Ke>0?`<span class="dxf-part-hole-badge">${Ke} holes</span>`:'<span class="dxf-part-hole-badge none">No holes</span>';Q.innerHTML=`
        <div class="dxf-part-thumb">${ue}</div>
        <div class="dxf-part-info">
          <div class="dxf-part-name" title="${q.name}">${q.name||`Part ${z+1}`}</div>
          <div class="dxf-part-meta">
            <span class="dxf-part-dims">${We}</span>
            ${tt}
          </div>
        </div>
        <div class="dxf-part-qty-wrap" title="Quantity to nest / quote">
          <button type="button" class="dxf-qty-btn dxf-qty-dec" data-action="dec">-</button>
          <span class="dxf-qty-val">${G.quantity}</span>
          <button type="button" class="dxf-qty-btn dxf-qty-inc" data-action="inc">+</button>
        </div>
      `,Q.addEventListener("click",pt=>{if(pt.target.closest(".dxf-part-qty-wrap"))return;Et=z,Le=q,Ie=G.quantity;const qt=document.getElementById("partQuantity");qt&&(qt.value=G.quantity.toString()),on(q),de(),H()});const we=Q.querySelector(".dxf-qty-dec"),nt=Q.querySelector(".dxf-qty-inc"),it=Q.querySelector(".dxf-qty-val");we.addEventListener("click",pt=>{if(pt.stopPropagation(),G.quantity=Math.max(1,G.quantity-1),it.textContent=G.quantity.toString(),z===Et){Ie=G.quantity;const gt=document.getElementById("partQuantity");gt&&(gt.value=G.quantity.toString()),H()}}),nt.addEventListener("click",pt=>{if(pt.stopPropagation(),G.quantity++,it.textContent=G.quantity.toString(),z===Et){Ie=G.quantity;const gt=document.getElementById("partQuantity");gt&&(gt.value=G.quantity.toString()),H()}}),x.appendChild(Q)})}function he(x,E,G=!1){try{const z=co(x),q=E.replace(/\.[^/.]+$/,""),Q=document.getElementById("uploadFileInfo"),ue=document.getElementById("loadedFileName"),Me=document.getElementById("dxfPartsSection"),Re=document.getElementById("dxfPartsCount");if(z.length>1)It=z.map((we,nt)=>{we.name=`${q}_Part${nt+1}`;const it=Jt(we,X.thicknessMm);return we.deselectedHoleIndices=[...it],{geometry:we,quantity:1}}),Et=0,Le=It[0].geometry,Dt=!0,ue.textContent=`${E} (${z.length} parts)`,Q.classList.remove("hidden"),Me&&Re&&(Me.classList.remove("hidden"),Re.textContent=z.length.toString()),de(),Le&&on(Le),oe(`📁 Loaded ${z.length} parts from "${E}"`);else{Le=z[0]||Yo(x),Le.name=q;const we=Jt(Le,X.thicknessMm);Le.deselectedHoleIndices=[...we],It=[{geometry:Le,quantity:1}],Et=0,Dt=!0,ue.textContent=E,Q.classList.remove("hidden"),Me&&Me.classList.add("hidden"),Le&&on(Le),oe(`⭐ Loaded "${E}"`)}const De=document.getElementById("tabUpload"),We=document.getElementById("tabParametric"),Ke=document.getElementById("uploadContainer"),tt=document.getElementById("parametricContainer");De&&We&&Ke&&tt&&(De.classList.add("active"),We.classList.remove("active"),Ke.classList.remove("hidden"),tt.classList.add("hidden")),H(),G&&setTimeout(()=>{const we=document.getElementById("btnSimulateCut");we&&we.click()},400)}catch(z){console.error(z),alert("Failed to parse DXF file. Please ensure it is an ASCII AutoCAD DXF.")}}function Ae(x){const E=new FileReader;E.onload=G=>{var q;const z=(q=G.target)==null?void 0:q.result;he(z,x.name,!1)},E.readAsText(x)}async function Ce(x=!0){try{oe("⏳ Loading Laser Cut Metal Jeep Wall Art demo...");const E=await fetch("/demo/jeep_wall_art.dxf");if(!E.ok)throw new Error(`Failed to fetch demo DXF: ${E.statusText}`);const G=await E.text(),z=document.getElementById("materialSelect");if(z){const Q=Ve.find(ue=>ue.id==="steel_a36")||Ve[0];Q&&(V=Q,z.value=Q.id,z.dispatchEvent(new Event("change")))}const q=document.getElementById("gaugeSelect");if(q){for(let Q=0;Q<q.options.length;Q++)if(q.options[Q].text.includes("11 Gauge")||q.options[Q].text.includes("14 Gauge")){q.selectedIndex=Q,q.dispatchEvent(new Event("change"));break}}he(G,"jeep_wall_art.dxf",x),oe("⭐ Live Demo Loaded: Laser Cut Metal Jeep Wall Art (13.4″ × 13.4″, 21 Pierces)")}catch(E){console.error("Error loading Jeep demo:",E),oe("⚠️ Could not load live demo file. Please upload manually.")}}const xt=document.getElementById("btnLoadJeepDemo");xt==null||xt.addEventListener("click",()=>{Ce(!0)});const He=document.getElementById("demoThumbTrigger");He==null||He.addEventListener("click",()=>{Ce(!1)});const kn=document.getElementById("linkLoadSampleJeep");kn==null||kn.addEventListener("click",x=>{x.preventDefault(),Ce(!0)});const $o=window.location.hash.toLowerCase(),ui=new URLSearchParams(window.location.search);($o.includes("demo")||ui.get("demo")==="jeep"||ui.get("demo")==="1")&&setTimeout(()=>{Ce(!1)},450),window.addEventListener("hashchange",()=>{window.location.hash.toLowerCase().includes("demo")&&Ce(!0)});const hi=document.getElementById("btnAddAllPartsToCart");hi&&hi.addEventListener("click",()=>{It.length!==0&&(It.forEach((x,E)=>{const G=x.geometry,z=ft(G,X.thicknessMm,V.densityGPerCm3,G.deselectedHoleIndices),q=ot(z,X,x.quantity,P,ze);me.push({id:`item_dxf_${Date.now()}_${E}`,partGeometry:G,materialId:V.id,materialName:V.name,gaugeThicknessMm:X.thicknessMm,quantity:x.quantity,secondaryOps:{...ze},metrics:z,unitQuote:q,totalPrice:q.finalOrderTotal,color:["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"][(me.length+E)%6],createdAt:Date.now()})}),mt(),oe(`✅ Added ${It.length} parts to RFQ Cart!`))});const pi=document.getElementById("btnToggleHoleCut");pi&&pi.addEventListener("click",()=>{const x=ve();if(!x||!x.innerHoles||x.innerHoles.length===0)return;const E=Jt(x,X.thicknessMm);(x.deselectedHoleIndices||[]).length>0?(x.deselectedHoleIndices=[],oe("◉ Set to cut all holes")):E.length>0?(x.deselectedHoleIndices=[...E],oe(`⚡ Auto-skipped ${E.length} undersized holes (< ${X.thicknessMm.toFixed(1)}mm)`)):oe("All holes meet minimum diameter rule (no blowout risk)"),H()});const Ut=document.getElementById("cuttingProcessSelect");Ut&&Ut.addEventListener("change",()=>{const x=Ut.value,E=ve();E&&(E.cuttingProcess=x),oe(`Process: ${Ut.options[Ut.selectedIndex].text.split("(")[0].trim()}`),H()});function on(x){const E=document.getElementById("dxfDetectedDims"),G=document.getElementById("dxfUnitBadge"),z=document.getElementById("btnToggleDxfUnits"),q=document.getElementById("dxfSmallDimWarning");if(!E||!G||!z)return;const Q=x.boundingBox.width,ue=x.boundingBox.height,Me=x.units==="inch";E.textContent=Me?`Size: ${Q.toFixed(2)}" × ${ue.toFixed(2)}"`:`Size: ${Q.toFixed(1)} × ${ue.toFixed(1)} mm`,G.textContent=Me?"Inches":"Millimeters",z.textContent=Me?"🔄 Switch to mm":"🔄 Switch to inches",q&&(Q<25&&ue<25?q.classList.remove("hidden"):q.classList.add("hidden"))}const gi=document.getElementById("btnToggleDxfUnits");gi&&(gi.onclick=()=>{Le&&(Le.units=Le.units==="inch"?"mm":"inch",on(Le),H(),oe(`🔄 Switched DXF units to ${Le.units==="inch"?"Inches":"Millimeters"}`))});const an=document.getElementById("tabQuote"),sn=document.getElementById("tabCart"),rn=document.getElementById("tabAdmin"),Pn=document.getElementById("quoteView"),Bn=document.getElementById("cartView"),wn=document.getElementById("adminView");an.onclick=()=>{an.classList.add("active"),sn.classList.remove("active"),rn.classList.remove("active"),Pn.classList.remove("hidden"),Bn.classList.add("hidden"),wn.classList.add("hidden")},sn.onclick=()=>{sn.classList.add("active"),an.classList.remove("active"),rn.classList.remove("active"),Bn.classList.remove("hidden"),Pn.classList.add("hidden"),wn.classList.add("hidden"),mt()},rn.onclick=()=>{rn.classList.add("active"),an.classList.remove("active"),sn.classList.remove("active"),wn.classList.remove("hidden"),Pn.classList.add("hidden"),Bn.classList.add("hidden")};const En=document.getElementById("adminShopName"),Ln=document.getElementById("adminGstin"),Tn=document.getElementById("adminUpiId"),Dn=document.getElementById("adminMinOrder"),Fn=document.getElementById("adminSheetLoading"),An=document.getElementById("adminPricePerKg"),Rn=document.getElementById("adminPricePerMeterCut"),Nn=document.getElementById("adminPricePerPierce"),Hn=document.getElementById("adminGstPercent"),Wn=document.getElementById("adminTaxType");En&&(En.oninput=()=>{P.shopName=En.value.trim()||"My CNC Shop",to&&(to.textContent=P.shopName),Ee(),H()}),Ln&&(Ln.oninput=()=>{P.shopGstin=Ln.value.trim(),Ee()}),Tn&&(Tn.oninput=()=>{P.upiId=Tn.value.trim(),Ee()}),Dn&&(Dn.oninput=()=>{P.minimumOrderFee=parseFloat(Dn.value)||0,Ee(),H()}),Fn&&(Fn.oninput=()=>{P.sheetLoadingFee=parseFloat(Fn.value)||0,Ee(),H()}),Wn&&(Wn.onchange=()=>{P.isInterstateSale=Wn.value==="interstate",Ee(),H()}),An&&(An.oninput=()=>{const x=parseFloat(An.value)||0;P.currency==="USD"?X.pricePerSqInch=x:X.pricePerKg=x,Ee(),H()}),Rn&&(Rn.oninput=()=>{const x=parseFloat(Rn.value)||0;P.currency==="USD"?X.pricePerLinearInchCut=x:X.pricePerMeterCut=x,Ee(),H()}),Nn&&(Nn.oninput=()=>{X.pricePerPierce=parseFloat(Nn.value)||0,Ee(),H()}),Hn&&(Hn.oninput=()=>{P.gstPercent=parseFloat(Hn.value)||0,Ee(),H()});const _n=document.getElementById("adminNaics");_n&&(_n.oninput=()=>{P.naicsCode=_n.value.trim(),Ee()});const On=document.getElementById("adminTaxId");On&&(On.oninput=()=>{P.einOrTaxId=On.value.trim(),Ee()});const Gn=document.getElementById("adminPaymentTerms");Gn&&(Gn.oninput=()=>{P.paymentTerms=Gn.value.trim(),Ee()});const Un=document.getElementById("adminLaserPower");Un&&(Un.onchange=()=>{const x=parseInt(Un.value);P.laserPowerKw=x||4,Ee(),H()});const qn=document.getElementById("adminHourlyRate");qn&&(qn.oninput=()=>{P.hourlyLaserRateUsd=parseFloat(qn.value)||185,Ee(),H()});const zn=document.getElementById("adminShopEmail");zn&&(zn.onchange=()=>{P.shopEmail=zn.value.trim(),Ee()});const jn=document.getElementById("adminSetupFee");jn&&(jn.oninput=()=>{P.setupFeePerJob=parseFloat(jn.value)||25,Ee(),H()});const fi=document.getElementById("btnCopyConfiguredEmbedScript");fi&&(fi.onclick=()=>{const x=window.location.origin||"https://engine.yourdomain.com",E=(P.shopName||"midwest-precision").toLowerCase().replace(/[^a-z0-9]+/g,"-"),G=`<script src="${x}/widget.js" data-shop-id="${E}" data-shop-name="${P.shopName}" data-shop-email="${P.shopEmail||"quotes@midwestprecision.com"}" data-hourly-rate="${P.hourlyLaserRateUsd||185}" data-min-order="${P.minimumOrderFee||75}" data-sales-tax="${P.gstPercent||7}"><\/script>`;navigator.clipboard.writeText(G).then(()=>{oe("📋 Custom embed widget tag copied to clipboard!")}).catch(()=>{oe("Embed widget script copied.")})});const Yn=document.getElementById("adminSalesTaxExempt");Yn&&(Yn.onchange=()=>{P.salesTaxExempt=Yn.checked,Ee(),H()});const yi=document.getElementById("resetRatesBtn");yi&&(yi.onclick=()=>{confirm("Reset shop rates to factory benchmarks?")&&(ta(P.currency),P.currency==="USD"?(P={...nn},Ve=JSON.parse(JSON.stringify(ci)),V=Ve[0],X=V.gauges[3]||V.gauges[0]):(P={...Sn},Ve=JSON.parse(JSON.stringify(lo)),V=Ve[0],X=V.gauges[4]||V.gauges[0]),yo(),en(),H())});const Co=document.getElementById("unitMm"),Io=document.getElementById("unitInch");Co.onclick=()=>{$n("mm"),Cn(),bt(),H()},Io.onclick=()=>{$n("inch"),Cn(),bt(),H()},ee.addEventListener("wheel",x=>{x.preventDefault();const E=x.deltaY<0?1.15:.87,G=Math.min(6,Math.max(.4,Je*E)),z=ee.getBoundingClientRect(),q=x.clientX-z.left-z.width/2,Q=x.clientY-z.top-z.height/2;Ye.x=q-(q-Ye.x)*(G/Je),Ye.y=Q-(Q-Ye.y)*(G/Je),Je=G,_e()},{passive:!1}),ee.addEventListener("pointerdown",x=>{if(dt&&x.button===0){const E=ve(),G=Xi(E),z=oo(x.clientX,x.clientY);if(!z)return;const q=Qi({x:x.clientX,y:x.clientY},G,ao,18),Q=q?{x:q.x,y:q.y}:z.cad;ni={x:x.clientX,y:x.clientY},je==="idle"||je==="locked"?(Pt=Q,Ct=null,je="drawing",vn(null),ct(Q)):je==="drawing"&&(Ct=Q,je="locked",ct());return}(x.button===0||x.button===1)&&(pn=!0,ti={x:x.clientX-Ye.x,y:x.clientY-Ye.y},ee.classList.add("is-dragging"),ee.setPointerCapture(x.pointerId))}),ee.addEventListener("pointermove",x=>{if(pn){Ye.x=x.clientX-ti.x,Ye.y=x.clientY-ti.y,_e();return}if(dt){const E=ve(),G=Xi(E),z=oo(x.clientX,x.clientY);if(!z)return;const q=Qi({x:x.clientX,y:x.clientY},G,ao,18);_t=q;const Q=q?{x:q.x,y:q.y}:z.cad;je==="drawing"?(Ct=Q,ct()):ct(Q)}});const xi=x=>{if(pn){pn=!1,ee.classList.remove("is-dragging");try{ee.releasePointerCapture(x.pointerId)}catch{}return}dt&&je==="drawing"&&Math.hypot(x.clientX-ni.x,x.clientY-ni.y)>12&&(je="locked",ct())};ee.addEventListener("pointerup",xi),ee.addEventListener("pointercancel",xi),ee.addEventListener("pointerleave",()=>{dt&&je==="idle"&&(_t=null,ct())}),ee.addEventListener("dblclick",()=>{Yt()});const bi=document.getElementById("btnMeasureTool"),$i=document.getElementById("btnCloseMeasureHud"),Ci=document.getElementById("btnZoomIn"),Ii=document.getElementById("btnZoomOut"),Si=document.getElementById("btnZoomFit");bi&&(bi.onclick=()=>{bn()}),$i&&($i.onclick=()=>{bn(!1)});const qe=document.getElementById("measureHudPill");if(qe){let x=!1,E=0,G=0,z=0,q=0;qe.addEventListener("pointerdown",ue=>{var De;if(ue.target.closest("#btnCloseMeasureHud"))return;x=!0,qe.setPointerCapture(ue.pointerId),E=ue.clientX,G=ue.clientY;const Me=qe.getBoundingClientRect(),Re=((De=qe.parentElement)==null?void 0:De.getBoundingClientRect())||{left:0,top:0};z=Me.left-Re.left,q=Me.top-Re.top,qe.style.transform="none",qe.style.left=`${z}px`,qe.style.top=`${q}px`}),qe.addEventListener("pointermove",ue=>{if(!x)return;const Me=ue.clientX-E,Re=ue.clientY-G,De=Math.max(4,z+Me),We=Math.max(4,q+Re);qe.style.left=`${De}px`,qe.style.top=`${We}px`});const Q=ue=>{if(x){x=!1;try{qe.releasePointerCapture(ue.pointerId)}catch{}}};qe.addEventListener("pointerup",Q),qe.addEventListener("pointercancel",Q)}Ci&&(Ci.onclick=()=>{Je=Math.min(6,Je*1.25),_e()}),Ii&&(Ii.onclick=()=>{Je=Math.max(.4,Je/1.25),_e()}),Si&&(Si.onclick=()=>{Yt()});const Mi=document.getElementById("btnExportImage");Mi&&(Mi.onclick=()=>{_a()})}function _a(){const n=ee.querySelector("svg");if(!n){oe("⚠️ No design found to export");return}try{const t=n.cloneNode(!0);t.style.transform="";const i=t.getAttribute("viewBox");let e=1600,o=1200;if(i){const d=i.split(/[\s,]+/).map(Number);if(d.length===4&&d[2]>0&&d[3]>0){const l=d[2]/d[3];l>=1?(e=2400,o=Math.round(2400/l)):(o=2400,e=Math.round(2400*l))}}t.setAttribute("width",e.toString()),t.setAttribute("height",o.toString());const a=new XMLSerializer().serializeToString(t),s=new Blob([a],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,c=r.createObjectURL(s),u=new Image;u.onload=()=>{const d=document.createElement("canvas");d.width=e,d.height=o;const l=d.getContext("2d");l&&(l.fillStyle="#080c14",l.fillRect(0,0,e,o),l.drawImage(u,0,0,e,o),r.revokeObjectURL(c),d.toBlob(p=>{if(!p)return;const g=document.createElement("a"),f=ve(),I=pe==="jali"&&Ue==="realistic_gate"?`Gate_Render_${R.finishMaterial||"matte_black"}_${f.boundingBox.width.toFixed(0)}x${f.boundingBox.height.toFixed(0)}mm.png`:`CNC_${pe}_${f.boundingBox.width.toFixed(0)}mm.png`;g.download=I,g.href=r.createObjectURL(p),g.click(),r.revokeObjectURL(g.href),oe(`📸 Exported high-res PNG (${e}×${o}px) for Proposal / Email!`)},"image/png"))},u.src=c}catch(t){console.error("Export PNG failed:",t),oe("⚠️ Export failed")}}function Oa(){const n=document.getElementById("panelLeft"),t=document.getElementById("panelRight"),i=document.getElementById("splitterLeft"),e=document.getElementById("splitterRight"),o=document.getElementById("collapseLeftBtn"),a=document.getElementById("collapseRightBtn"),s=document.getElementById("restoreLeftBtn"),r=document.getElementById("restoreRightBtn"),c=document.getElementById("btnToggleLeftPanel"),u=document.getElementById("btnToggleRightPanel"),d=b=>{n&&(b?(n.classList.remove("collapsed"),i==null||i.classList.remove("disabled"),s==null||s.classList.add("hidden"),c==null||c.classList.add("active")):(n.classList.add("collapsed"),i==null||i.classList.add("disabled"),s==null||s.classList.remove("hidden"),c==null||c.classList.remove("active")))},l=b=>{t&&(b?(t.classList.remove("collapsed"),e==null||e.classList.remove("disabled"),r==null||r.classList.add("hidden"),u==null||u.classList.add("active")):(t.classList.add("collapsed"),e==null||e.classList.add("disabled"),r==null||r.classList.remove("hidden"),u==null||u.classList.remove("active")))},p=()=>{const b=!(n!=null&&n.classList.contains("collapsed"));d(!b)},g=()=>{const b=!(t!=null&&t.classList.contains("collapsed"));l(!b)};o&&(o.onclick=()=>d(!1)),s&&(s.onclick=()=>d(!0)),c&&(c.onclick=()=>p()),a&&(a.onclick=()=>l(!1)),r&&(r.onclick=()=>l(!0)),u&&(u.onclick=()=>g()),window.addEventListener("keydown",b=>{var C;if(b.altKey&&(b.key==="1"||b.code==="Digit1")){b.preventDefault(),p();return}else if(b.altKey&&(b.key==="2"||b.code==="Digit2")){b.preventDefault(),g();return}const T=b.target,S=(C=T==null?void 0:T.tagName)==null?void 0:C.toLowerCase();!(S==="input"||S==="textarea"||S==="select")&&(b.key==="m"||b.key==="M")&&!b.altKey&&!b.ctrlKey&&!b.metaKey?(b.preventDefault(),bn()):b.key==="Escape"&&dt&&(b.preventDefault(),Pt!==null?(Pt=null,Ct=null,_t=null,je="idle",vn(null),ct(),oe("Measurement cleared (Measure tool still active)")):bn(!1))});let f=!1,I=!1;i&&(i.onmousedown=()=>{f=!0},i.ondblclick=()=>{n&&(n.style.width="340px")}),e&&(e.onmousedown=()=>{I=!0},e.ondblclick=()=>{if(t){const b=window.innerWidth>=1600?"450px":window.innerWidth>=1440?"430px":window.innerWidth>=1200?"410px":"385px";t.style.width=b}}),window.addEventListener("mousemove",b=>{if(f&&n){const T=window.innerWidth>=1200?280:250,S=Math.max(T,Math.min(600,b.clientX));n.style.width=`${S}px`}else if(I&&t){const T=window.innerWidth>=1440?405:window.innerWidth>=1200?385:360,S=window.innerWidth>=1440?720:680,w=Math.max(T,Math.min(S,window.innerWidth-b.clientX));t.style.width=`${w}px`}}),window.addEventListener("mouseup",()=>{f=!1,I=!1})}ka();
