var bo=Object.defineProperty;var $o=(n,t,i)=>t in n?bo(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i;var Bt=(n,t,i)=>$o(n,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}})();function Co(n){const t=n.units==="inch",i=t?.5:10,e=Math.max(i,n.length),o=Math.max(i,n.width),a=Math.min(n.cornerSize||0,Math.min(e,o)/2-(t?.05:1)),s=[];n.cornerType==="fillet"&&a>0?(s.push({type:"line",start:{x:a,y:0},end:{x:e-a,y:0}}),s.push({type:"arc",center:{x:e-a,y:a},radius:a,startAngle:270*Math.PI/180,endAngle:360*Math.PI/180,counterClockwise:!0}),s.push({type:"line",start:{x:e,y:a},end:{x:e,y:o-a}}),s.push({type:"arc",center:{x:e-a,y:o-a},radius:a,startAngle:0,endAngle:90*Math.PI/180,counterClockwise:!0}),s.push({type:"line",start:{x:e-a,y:o},end:{x:a,y:o}}),s.push({type:"arc",center:{x:a,y:o-a},radius:a,startAngle:90*Math.PI/180,endAngle:180*Math.PI/180,counterClockwise:!0}),s.push({type:"line",start:{x:0,y:o-a},end:{x:0,y:a}}),s.push({type:"arc",center:{x:a,y:a},radius:a,startAngle:180*Math.PI/180,endAngle:270*Math.PI/180,counterClockwise:!0})):n.cornerType==="chamfer"&&a>0?(s.push({type:"line",start:{x:a,y:0},end:{x:e-a,y:0}}),s.push({type:"line",start:{x:e-a,y:0},end:{x:e,y:a}}),s.push({type:"line",start:{x:e,y:a},end:{x:e,y:o-a}}),s.push({type:"line",start:{x:e,y:o-a},end:{x:e-a,y:o}}),s.push({type:"line",start:{x:e-a,y:o},end:{x:a,y:o}}),s.push({type:"line",start:{x:a,y:o},end:{x:0,y:o-a}}),s.push({type:"line",start:{x:0,y:o-a},end:{x:0,y:a}}),s.push({type:"line",start:{x:0,y:a},end:{x:a,y:0}})):(s.push({type:"line",start:{x:0,y:0},end:{x:e,y:0}}),s.push({type:"line",start:{x:e,y:0},end:{x:e,y:o}}),s.push({type:"line",start:{x:e,y:o},end:{x:0,y:o}}),s.push({type:"line",start:{x:0,y:o},end:{x:0,y:0}}));const c={segments:s,isClosed:!0,isHole:!1},r=[],h=t?.1:1,d=Math.max(h,n.edgeOffsetX),l=Math.max(h,n.edgeOffsetY),p=[];n.holePattern==="4-corner"?(p.push({x:d,y:l}),p.push({x:e-d,y:l}),p.push({x:e-d,y:o-l}),p.push({x:d,y:o-l})):n.holePattern==="6-hole"?(p.push({x:d,y:l}),p.push({x:e/2,y:l}),p.push({x:e-d,y:l}),p.push({x:e-d,y:o-l}),p.push({x:e/2,y:o-l}),p.push({x:d,y:o-l})):n.holePattern==="8-hole"&&(p.push({x:d,y:l}),p.push({x:e/2,y:l}),p.push({x:e-d,y:l}),p.push({x:e-d,y:o/2}),p.push({x:e-d,y:o-l}),p.push({x:e/2,y:o-l}),p.push({x:d,y:o-l}),p.push({x:d,y:o/2}));const y=Math.max(t?.05:1,n.holeDiameter/2);if(n.holeType==="round")for(const w of p)r.push({center:w,radius:y});else if(n.holeType==="slotted"){const w=t?.1:2,D=Math.max(y*2,n.slotLength||y*3),N=Math.max(w,n.slotWidth||y*2),C=N/2,W=Math.max(0,(D-N)/2);for(const G of p){const E=[],F={x:G.x-W,y:G.y},M={x:G.x+W,y:G.y};E.push({type:"line",start:{x:F.x,y:F.y+C},end:{x:M.x,y:M.y+C}}),E.push({type:"arc",center:M,radius:C,startAngle:90*Math.PI/180,endAngle:270*Math.PI/180,counterClockwise:!1}),E.push({type:"line",start:{x:M.x,y:M.y-C},end:{x:F.x,y:F.y-C}}),E.push({type:"arc",center:F,radius:C,startAngle:270*Math.PI/180,endAngle:90*Math.PI/180,counterClockwise:!1}),r.push({segments:E,isClosed:!0,isHole:!0})}}const I=e/2,b=o/2;if(n.centerCutoutType==="round"&&n.centerCutoutDiameter&&n.centerCutoutDiameter>0)r.push({center:{x:I,y:b},radius:n.centerCutoutDiameter/2});else if(n.centerCutoutType==="rectangular"&&n.centerCutoutWidth&&n.centerCutoutHeight){const w=Math.min(n.centerCutoutWidth,e-d*2),D=Math.min(n.centerCutoutHeight,o-l*2),N=w/2,C=D/2,W=[{type:"line",start:{x:I-N,y:b-C},end:{x:I+N,y:b-C}},{type:"line",start:{x:I+N,y:b-C},end:{x:I+N,y:b+C}},{type:"line",start:{x:I+N,y:b+C},end:{x:I-N,y:b+C}},{type:"line",start:{x:I-N,y:b+C},end:{x:I-N,y:b-C}}];r.push({segments:W,isClosed:!0,isHole:!0})}return{name:"Structural Baseplate",units:n.units,outerContour:c,innerHoles:r,boundingBox:{minX:0,minY:0,maxX:e,maxY:o,width:e,height:o}}}const xt=[{standard:"BS10",name:'BS 10 Table E - 1" NB',nominalBore:'1"',outerDiameter:114.3,innerBore:33.4,pitchCircleDiameter:82.6,boltCount:4,boltDiameter:14.3,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 1.5" NB',nominalBore:'1.5"',outerDiameter:133.4,innerBore:48.3,pitchCircleDiameter:98.4,boltCount:4,boltDiameter:14.3,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 2" NB',nominalBore:'2"',outerDiameter:152.4,innerBore:60.3,pitchCircleDiameter:114.3,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 2.5" NB',nominalBore:'2.5"',outerDiameter:165.1,innerBore:73,pitchCircleDiameter:127,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 3" NB',nominalBore:'3"',outerDiameter:184.2,innerBore:88.9,pitchCircleDiameter:146,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 4" NB',nominalBore:'4"',outerDiameter:215.9,innerBore:114.3,pitchCircleDiameter:177.8,boltCount:8,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 6" NB',nominalBore:'6"',outerDiameter:279.4,innerBore:168.3,pitchCircleDiameter:235,boltCount:8,boltDiameter:20.6,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 8" NB',nominalBore:'8"',outerDiameter:336.6,innerBore:219.1,pitchCircleDiameter:292.1,boltCount:8,boltDiameter:20.6,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 2" NB',nominalBore:'2"',outerDiameter:152.4,innerBore:60.3,pitchCircleDiameter:114.3,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 3" NB',nominalBore:'3"',outerDiameter:184.2,innerBore:88.9,pitchCircleDiameter:146,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 4" NB',nominalBore:'4"',outerDiameter:215.9,innerBore:114.3,pitchCircleDiameter:177.8,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 6" NB',nominalBore:'6"',outerDiameter:279.4,innerBore:168.3,pitchCircleDiameter:235,boltCount:8,boltDiameter:17.5,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN25 (1")',nominalBore:"DN25",outerDiameter:115,innerBore:34,pitchCircleDiameter:85,boltCount:4,boltDiameter:14,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN50 (2")',nominalBore:"DN50",outerDiameter:165,innerBore:61,pitchCircleDiameter:125,boltCount:4,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN80 (3")',nominalBore:"DN80",outerDiameter:200,innerBore:90,pitchCircleDiameter:160,boltCount:8,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN100 (4")',nominalBore:"DN100",outerDiameter:220,innerBore:115,pitchCircleDiameter:180,boltCount:8,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN150 (6")',nominalBore:"DN150",outerDiameter:285,innerBore:169,pitchCircleDiameter:240,boltCount:8,boltDiameter:22,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN200 (8")',nominalBore:"DN200",outerDiameter:340,innerBore:220,pitchCircleDiameter:295,boltCount:12,boltDiameter:22,units:"mm"},{standard:"ASME",name:'ASME 1" Class 150',nominalBore:'1"',outerDiameter:4.25,innerBore:1.36,pitchCircleDiameter:3.12,boltCount:4,boltDiameter:.62,units:"inch"},{standard:"ASME",name:'ASME 2" Class 150',nominalBore:'2"',outerDiameter:6,innerBore:2.44,pitchCircleDiameter:4.75,boltCount:4,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 3" Class 150',nominalBore:'3"',outerDiameter:7.5,innerBore:3.57,pitchCircleDiameter:6,boltCount:4,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 4" Class 150',nominalBore:'4"',outerDiameter:9,innerBore:4.57,pitchCircleDiameter:7.5,boltCount:8,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 6" Class 150',nominalBore:'6"',outerDiameter:11,innerBore:6.72,pitchCircleDiameter:9.5,boltCount:8,boltDiameter:.88,units:"inch"},{standard:"ASME",name:'ASME 8" Class 150',nominalBore:'8"',outerDiameter:13.5,innerBore:8.72,pitchCircleDiameter:11.75,boltCount:8,boltDiameter:.88,units:"inch"}];function Io(n){const t=n.units==="inch",e=Math.max(t?.5:10,n.outerDiameter),o=Math.max(0,Math.min(n.innerBore,e-(t?.2:5))),a=Math.max(o+(t?.1:2),Math.min(n.pitchCircleDiameter,e-(t?.1:2))),s=e/2,c={x:s,y:s},h={segments:[{type:"arc",center:c,radius:s,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:c,radius:s,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],isClosed:!0,isHole:!1},d=[];o>0&&d.push({center:c,radius:o/2});const l=Math.max(1,Math.floor(n.boltCount)),g=Math.max(t?.05:.5,n.boltDiameter/2),y=a/2;for(let I=0;I<l;I++){const b=2*Math.PI*I/l,w=c.x+y*Math.cos(b),D=c.y+y*Math.sin(b);d.push({center:{x:w,y:D},radius:g})}return{name:"Pipe Flange",units:n.units,outerContour:h,innerHoles:d,boundingBox:{minX:0,minY:0,maxX:e,maxY:e,width:e,height:e}}}function So(n){const t=n.units==="inch",i=t?.5:10,e=Math.max(i,n.baseWidth),o=Math.max(i,n.height),a=n.hasWeldSnipe?Math.min(n.snipeSize||(t?1:25),Math.min(e,o)*.4):0,s=[];a>0?(s.push({type:"line",start:{x:a,y:0},end:{x:e,y:0}}),s.push({type:"line",start:{x:e,y:0},end:{x:0,y:o}}),s.push({type:"line",start:{x:0,y:o},end:{x:0,y:a}}),s.push({type:"line",start:{x:0,y:a},end:{x:a,y:0}})):(s.push({type:"line",start:{x:0,y:0},end:{x:e,y:0}}),s.push({type:"line",start:{x:e,y:0},end:{x:0,y:o}}),s.push({type:"line",start:{x:0,y:o},end:{x:0,y:0}}));const c={segments:s,isClosed:!0,isHole:!1},r=[];return{name:"Structural Gusset Plate",units:n.units,outerContour:c,innerHoles:r,boundingBox:{minX:0,minY:0,maxX:e,maxY:o,width:e,height:o}}}function Mo(n){const t=n.units==="inch",i=t?4:100,e=Math.max(i,n.width),o=Math.max(i,n.height),a=n.borderMarginMm??(t?1.5:40),s=t?a>8?a/25.4:a:a<5?a*25.4:a,c=Math.max(t?.5:15,Math.min(s,Math.min(e,o)*.25)),h={segments:[{type:"line",start:{x:0,y:0},end:{x:e,y:0}},{type:"line",start:{x:e,y:0},end:{x:e,y:o}},{type:"line",start:{x:e,y:o},end:{x:0,y:o}},{type:"line",start:{x:0,y:o},end:{x:0,y:0}}],isClosed:!0,isHole:!1},d=[],l=n.mountingHoleDiameter??(t?.3125:8),p=t?l>2?l/25.4:l:l<1?l*25.4:l;if(n.hasMountingHoles&&p>0){const E=p/2,F=c/2;d.push({center:{x:F,y:F},radius:E}),d.push({center:{x:e-F,y:F},radius:E}),d.push({center:{x:e-F,y:o-F},radius:E}),d.push({center:{x:F,y:o-F},radius:E}),o>(t?24:600)&&(d.push({center:{x:F,y:o/2},radius:E}),d.push({center:{x:e-F,y:o/2},radius:E}))}const g=n.kickPlateHeightMm??(t?12:300),y=t?g>30?g/25.4:g:g<30?g*25.4:g,I=n.hasKickPlate?Math.max(0,Math.min(o*.4,y)):0,b=e-2*c,w=o-2*c-I,D=Math.max(2,Math.min(12,Math.floor(n.gridColumns||(e>(t?20:500)?4:2)))),N=Math.max(2,Math.min(20,Math.floor(n.gridRows||(o>(t?20:500)?6:3)))),C=b/D,W=w/N,G=t?.2:6;for(let E=0;E<N;E++)for(let F=0;F<D;F++){const M=c+F*C,f=c+I+E*W,u=M+C/2,m=f+W/2,P=t?.15:4,S=Math.max(P,C-G),L=Math.max(P,W-G),_=Math.min(S,L)/2;if(n.patternType==="diamond_lattice"){const $=S/2,v=L/2,B=[{type:"line",start:{x:u,y:m-v},end:{x:u+$,y:m}},{type:"line",start:{x:u+$,y:m},end:{x:u,y:m+v}},{type:"line",start:{x:u,y:m+v},end:{x:u-$,y:m}},{type:"line",start:{x:u-$,y:m},end:{x:u,y:m-v}}];d.push({segments:B,isClosed:!0,isHole:!0})}else if(n.patternType==="islamic_star"){const $=[];for(let B=0;B<16;B++){const O=B%2===0?_:_*.52,Y=B*Math.PI/8,z=(B+1)*Math.PI/8,ae=(B+1)%2===0?_:_*.52;$.push({type:"line",start:{x:u+O*Math.cos(Y),y:m+O*Math.sin(Y)},end:{x:u+ae*Math.cos(z),y:m+ae*Math.sin(z)}})}d.push({segments:$,isClosed:!0,isHole:!0})}else if(n.patternType==="floral_mandala"){const $=[];for(let B=0;B<32;B++){const O=B*2*Math.PI/32,Y=(B+1)*2*Math.PI/32,z=_*(.42+.56*Math.pow(Math.abs(Math.cos(4*O)),1.3)),ae=_*(.42+.56*Math.pow(Math.abs(Math.cos(4*Y)),1.3));$.push({type:"line",start:{x:u+z*Math.cos(O),y:m+z*Math.sin(O)},end:{x:u+ae*Math.cos(Y),y:m+ae*Math.sin(Y)}})}d.push({segments:$,isClosed:!0,isHole:!0})}else if(n.patternType==="tree_of_life"){const $=_*.9,v=_*.42,B=[{type:"line",start:{x:u,y:m-$},end:{x:u+v,y:m}},{type:"line",start:{x:u+v,y:m},end:{x:u,y:m+$}},{type:"line",start:{x:u,y:m+$},end:{x:u-v,y:m}},{type:"line",start:{x:u-v,y:m},end:{x:u,y:m-$}}];d.push({segments:B,isClosed:!0,isHole:!0});const O=.55,Y=_*.45,z=_*.15,ae=[{type:"line",start:{x:u-Y,y:m-z-$*O},end:{x:u-Y+v*O,y:m-z}},{type:"line",start:{x:u-Y+v*O,y:m-z},end:{x:u-Y,y:m-z+$*O}},{type:"line",start:{x:u-Y,y:m-z+$*O},end:{x:u-Y-v*O,y:m-z}},{type:"line",start:{x:u-Y-v*O,y:m-z},end:{x:u-Y,y:m-z-$*O}}];d.push({segments:ae,isClosed:!0,isHole:!0});const ye=[{type:"line",start:{x:u+Y,y:m-z-$*O},end:{x:u+Y+v*O,y:m-z}},{type:"line",start:{x:u+Y+v*O,y:m-z},end:{x:u+Y,y:m-z+$*O}},{type:"line",start:{x:u+Y,y:m-z+$*O},end:{x:u+Y-v*O,y:m-z}},{type:"line",start:{x:u+Y-v*O,y:m-z},end:{x:u+Y,y:m-z-$*O}}];d.push({segments:ye,isClosed:!0,isHole:!0})}else if(n.patternType==="chevron_herringbone"){const $=S*.45,v=L*.22,B=L*.22,O=[{type:"line",start:{x:u,y:m+B+v},end:{x:u+$,y:m+B}},{type:"line",start:{x:u+$,y:m+B},end:{x:u+$*.8,y:m+B-v*.5}},{type:"line",start:{x:u+$*.8,y:m+B-v*.5},end:{x:u,y:m+B+v*.4}},{type:"line",start:{x:u,y:m+B+v*.4},end:{x:u-$*.8,y:m+B-v*.5}},{type:"line",start:{x:u-$*.8,y:m+B-v*.5},end:{x:u-$,y:m+B}},{type:"line",start:{x:u-$,y:m+B},end:{x:u,y:m+B+v}}];d.push({segments:O,isClosed:!0,isHole:!0});const Y=[{type:"line",start:{x:u,y:m-B+v},end:{x:u+$,y:m-B}},{type:"line",start:{x:u+$,y:m-B},end:{x:u+$*.8,y:m-B-v*.5}},{type:"line",start:{x:u+$*.8,y:m-B-v*.5},end:{x:u,y:m-B+v*.4}},{type:"line",start:{x:u,y:m-B+v*.4},end:{x:u-$*.8,y:m-B-v*.5}},{type:"line",start:{x:u-$*.8,y:m-B-v*.5},end:{x:u-$,y:m-B}},{type:"line",start:{x:u-$,y:m-B},end:{x:u,y:m-B+v}}];d.push({segments:Y,isClosed:!0,isHole:!0})}else if(n.patternType==="voronoi_matrix"){const v=(E*1.618+F*2.718)%(Math.PI*2),B=[];for(let O=0;O<6;O++){const Y=O*2*Math.PI/6+v*.15,z=(O+1)*2*Math.PI/6+v*.15,ae=_*(.75+.22*Math.sin(O*2.3+v)),ye=_*(.75+.22*Math.sin((O+1)*2.3+v));B.push({type:"line",start:{x:u+ae*Math.cos(Y),y:m+ae*Math.sin(Y)},end:{x:u+ye*Math.cos(z),y:m+ye*Math.sin(z)}})}d.push({segments:B,isClosed:!0,isHole:!0})}else if(n.patternType==="honeycomb"){const $=[];for(let v=0;v<6;v++){const B=v*Math.PI/3,O=(v+1)*Math.PI/3;$.push({type:"line",start:{x:u+_*Math.cos(B),y:m+_*Math.sin(B)},end:{x:u+_*Math.cos(O),y:m+_*Math.sin(O)}})}d.push({segments:$,isClosed:!0,isHole:!0})}else{const $=S*.4,v=L*.42,B=[{type:"line",start:{x:u-$,y:m-v},end:{x:u+$,y:m-v}},{type:"line",start:{x:u+$,y:m-v},end:{x:u+$,y:m+v}},{type:"line",start:{x:u+$,y:m+v},end:{x:u-$,y:m+v}},{type:"line",start:{x:u-$,y:m+v},end:{x:u-$,y:m-v}}];d.push({segments:B,isClosed:!0,isHole:!0})}}return{name:"Architectural CNC Jali / Gate Panel",units:n.units,outerContour:h,innerHoles:d,boundingBox:{minX:0,minY:0,maxX:e,maxY:o,width:e,height:o}}}function vo(n){const t=n.units==="inch",i=t?.75:20,e=Math.max(i,n.baseWidth),o=Math.max(i,n.height),a=Math.min(n.chamferTop,o-(t?.2:5)),s=Math.min(n.chamferRight,e-(t?.2:5)),r={segments:[{type:"line",start:{x:0,y:0},end:{x:e,y:0}},{type:"line",start:{x:e,y:0},end:{x:e,y:o-a}},{type:"line",start:{x:e,y:o-a},end:{x:e-s,y:o}},{type:"line",start:{x:e-s,y:o},end:{x:0,y:o}},{type:"line",start:{x:0,y:o},end:{x:0,y:0}}],isClosed:!0,isHole:!1},h=[];{const d=n.baseHoleCount,l=n.baseHoleDiameter/2,p=e*.7/(d+1),g=Math.min(t?.6:15,(o-a)/2);for(let y=1;y<=d;y++)h.push({center:{x:p*y,y:g},radius:l})}{const d=n.uprightHoleCount,l=n.uprightHoleDiameter/2,p=o*.7/(d+1),g=Math.min(t?.6:15,(e-s)/2);for(let y=1;y<=d;y++)h.push({center:{x:g,y:p*y},radius:l})}{const d=Math.min(e,o)*.35,l=n.lighteningHoleDiameter||d;h.push({center:{x:e*.38,y:o*.38},radius:l/2})}return{name:"Mounting Gusset & Bracket",units:n.units,outerContour:r,innerHoles:h,boundingBox:{minX:0,minY:0,maxX:e,maxY:o,width:e,height:o}}}function ko(n){const t=n.units==="inch",e=Math.max(t?.5:10,n.outerDiameter),o=Math.max(0,Math.min(n.innerDiameter,e-(t?.1:2))),a=e/2,s={x:a,y:a},r={segments:[{type:"arc",center:s,radius:a,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:s,radius:a,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],isClosed:!0,isHole:!1},h=[];if(o>0&&h.push({center:s,radius:o/2}),n.boltDiameter&&n.pitchCircleDiameter){const d=Math.max(1,n.boltCount),l=n.boltDiameter/2,p=n.pitchCircleDiameter/2;for(let g=0;g<d;g++){const y=2*Math.PI*g/d;h.push({center:{x:s.x+p*Math.cos(y),y:s.y+p*Math.sin(y)},radius:l})}}return{name:"Circular Disc / Washer",units:n.units,outerContour:r,innerHoles:h,boundingBox:{minX:0,minY:0,maxX:e,maxY:e,width:e,height:e}}}function Po(n){if(n.type==="line"){const t=n.end.x-n.start.x,i=n.end.y-n.start.y;return Math.sqrt(t*t+i*i)}else if(n.type==="arc"){let t=Math.abs(n.endAngle-n.startAngle);return n.counterClockwise&&(t=2*Math.PI-t),n.radius*t}return 0}function Fi(n){if(!n.segments||n.segments.length===0)return 0;let t=0;for(const i of n.segments)if(i.type==="line")t+=i.start.x*i.end.y-i.end.x*i.start.y;else if(i.type==="arc"){const e={x:i.center.x+i.radius*Math.cos(i.startAngle),y:i.center.y+i.radius*Math.sin(i.startAngle)},o={x:i.center.x+i.radius*Math.cos(i.endAngle),y:i.center.y+i.radius*Math.sin(i.endAngle)};t+=e.x*o.y-o.x*e.y;let a=Math.abs(i.endAngle-i.startAngle);i.counterClockwise&&(a=2*Math.PI-a);const s=.5*i.radius*i.radius*(a-Math.sin(a));t+=i.counterClockwise?-s*2:s*2}return Math.abs(t)/2}function gn(n){let t=0;for(const i of n.segments)t+=Po(i);return t}function yt(n,t,i,e){const a=n.units==="inch"?25.4:1,s=new Set(e||n.deselectedHoleIndices||[]),c=gn(n.outerContour);let r=0,h=0,d=0;for(let P=0;P<n.innerHoles.length;P++){if(s.has(P))continue;const S=n.innerHoles[P];if(h+=1,"radius"in S){const L=S.radius;r+=2*Math.PI*L,d+=Math.PI*L*L}else{const L=S;r+=gn(L),d+=Fi(L)}}const l=c+r,p=1+h,g=l*a,y=g/25.4,I=n.boundingBox.width*a,b=n.boundingBox.height*a,w=I/25.4,D=b/25.4;let N=Fi(n.outerContour);if(N<=0&&(N=n.boundingBox.width*n.boundingBox.height,n.name.includes("Flange")||n.name.includes("Disc"))){const P=n.boundingBox.width/2;N=Math.PI*P*P}const C=N*.85,W=Math.min(d,C),E=Math.max(N*.15,N-W)*(a*a),F=E/(25.4*25.4),u=E/100*(t/10)*i/1e3,m=u*2.20462262;return{totalCutLengthMm:Math.round(g*10)/10,totalCutLengthInches:Math.round(y*100)/100,pierceCount:p,boundingBoxWidthMm:Math.round(I*10)/10,boundingBoxHeightMm:Math.round(b*10)/10,boundingBoxWidthInches:Math.round(w*100)/100,boundingBoxHeightInches:Math.round(D*100)/100,netAreaSqMm:Math.round(E),netAreaSqInches:Math.round(F*100)/100,theoreticalWeightKg:Math.round(u*100)/100,theoreticalWeightLbs:Math.round(m*100)/100}}function Bo(n,t){const i=t==="inch"?25.4:1;if("radius"in n)return n.radius*2*i;const e=n;if(!e.segments||e.segments.length===0)return 0;let o=1/0,a=-1/0,s=1/0,c=-1/0;for(const r of e.segments)r.type==="line"?(o=Math.min(o,r.start.x,r.end.x),a=Math.max(a,r.start.x,r.end.x),s=Math.min(s,r.start.y,r.end.y),c=Math.max(c,r.start.y,r.end.y)):(o=Math.min(o,r.center.x-r.radius),a=Math.max(a,r.center.x+r.radius),s=Math.min(s,r.center.y-r.radius),c=Math.max(c,r.center.y+r.radius));return isFinite(o)?Math.min(a-o,c-s)*i:0}function Kt(n,t,i=.95){if(!n.innerHoles||n.innerHoles.length===0)return[];const e=[],o=t*i;for(let a=0;a<n.innerHoles.length;a++){const s=Bo(n.innerHoles[a],n.units);s>0&&s<o&&e.push(a)}return e}function wo(n){return{minX:n.center.x-n.radius,minY:n.center.y-n.radius,maxX:n.center.x+n.radius,maxY:n.center.y+n.radius}}function Yn(n){let t=1/0,i=1/0,e=-1/0,o=-1/0;for(const a of n.segments)a.type==="line"?(t=Math.min(t,a.start.x,a.end.x),i=Math.min(i,a.start.y,a.end.y),e=Math.max(e,a.start.x,a.end.x),o=Math.max(o,a.start.y,a.end.y)):(t=Math.min(t,a.center.x-a.radius),i=Math.min(i,a.center.y-a.radius),e=Math.max(e,a.center.x+a.radius),o=Math.max(o,a.center.y+a.radius));return{minX:t,minY:i,maxX:e,maxY:o}}function Eo(n,t){const i=Math.max(0,Math.max(n.minX-t.maxX,t.minX-n.maxX)),e=Math.max(0,Math.max(n.minY-t.maxY,t.minY-n.maxY));return Math.sqrt(i*i+e*e)}function fn(n){const t=[];for(const i of n.segments)if(i.type==="line")t.push({p1:i.start,p2:i.end});else{let e=i.counterClockwise?i.endAngle-i.startAngle:i.startAngle-i.endAngle;e<=0&&(e+=2*Math.PI);const o=Math.max(8,Math.ceil(e/(Math.PI/4)));let a={x:i.center.x+i.radius*Math.cos(i.startAngle),y:i.center.y+i.radius*Math.sin(i.startAngle)};for(let s=1;s<=o;s++){const c=i.counterClockwise?i.startAngle+e*s/o:i.startAngle-e*s/o,r={x:i.center.x+i.radius*Math.cos(c),y:i.center.y+i.radius*Math.sin(c)};t.push({p1:a,p2:r}),a=r}}return t}function Qt(n,t,i){const e=i.x-t.x,o=i.y-t.y,a=e*e+o*o;if(a<1e-12)return Math.sqrt((n.x-t.x)**2+(n.y-t.y)**2);let s=((n.x-t.x)*e+(n.y-t.y)*o)/a;s=Math.max(0,Math.min(1,s));const c=t.x+s*e,r=t.y+s*o;return Math.sqrt((n.x-c)**2+(n.y-r)**2)}function Lo(n,t,i,e){function o(d,l,p){return(p.y-d.y)*(l.x-d.x)-(l.y-d.y)*(p.x-d.x)}function a(d,l,p){return Math.min(l.x,p.x)-1e-7<=d.x&&d.x<=Math.max(l.x,p.x)+1e-7&&Math.min(l.y,p.y)-1e-7<=d.y&&d.y<=Math.max(l.y,p.y)+1e-7}const s=o(n,t,i),c=o(n,t,e),r=o(i,e,n),h=o(i,e,t);return!!((s>1e-9&&c<-1e-9||s<-1e-9&&c>1e-9)&&(r>1e-9&&h<-1e-9||r<-1e-9&&h>1e-9)||Math.abs(s)<=1e-9&&a(i,n,t)||Math.abs(c)<=1e-9&&a(e,n,t)||Math.abs(r)<=1e-9&&a(n,i,e)||Math.abs(h)<=1e-9&&a(t,i,e))}function To(n,t){return Lo(n.p1,n.p2,t.p1,t.p2)?0:Math.min(Qt(n.p1,t.p1,t.p2),Qt(n.p2,t.p1,t.p2),Qt(t.p1,n.p1,n.p2),Qt(t.p2,n.p1,n.p2))}function ti(n,t){let i=!1;for(const e of t){const o=e.p1,a=e.p2;if(o.y>n.y!=a.y>n.y){const s=o.x+(n.y-o.y)*(a.x-o.x)/(a.y-o.y);n.x<s&&(i=!i)}}return i}function Ai(n,t){const i=fn(t);if(ti(n.center,i))return 0;let e=1/0;for(const o of i){const a=Qt(n.center,o.p1,o.p2)-n.radius;a<e&&(e=a)}return e}function Do(n,t){const i=fn(n),e=fn(t);let o=1/0;for(const a of i)for(const s of e){const c=To(a,s);if(c<=1e-4)return 0;c<o&&(o=c)}return i.length>0&&ti(i[0].p1,e)||e.length>0&&ti(e[0].p1,i)?0:o}function Fo(n,t){const i="radius"in n,e="radius"in t;if(i&&e){const o=n,a=t,s=o.center.x-a.center.x,c=o.center.y-a.center.y;return Math.sqrt(s*s+c*c)-(o.radius+a.radius)}else return i&&!e?Ai(n,t):!i&&e?Ai(t,n):Do(n,t)}function Ao(n,t){const i=[],o=n.units==="inch"?25.4:1,a=n.outerContour.segments;if(a.length===0)i.push({rule:"Contour Existence",severity:"error",message:"Part has no outer cutting contour."});else{const C=a[0],W=a[a.length-1],G=C.type==="line"?C.start:{x:C.center.x+C.radius*Math.cos(C.startAngle),y:C.center.y+C.radius*Math.sin(C.startAngle)},E=W.type==="line"?W.end:{x:W.center.x+W.radius*Math.cos(W.endAngle),y:W.center.y+W.radius*Math.sin(W.endAngle)},F=Math.sqrt((E.x-G.x)**2+(E.y-G.y)**2)*o;F>.1&&i.push({rule:"Closed Polyline Rule",severity:"error",message:`Outer contour is not closed (gap is ${F.toFixed(2)} mm). Laser CAM will reject open contours.`,actualValue:F,thresholdValue:.1})}const s=new Set(n.deselectedHoleIndices||[]);for(let C=0;C<n.innerHoles.length;C++){if(s.has(C))continue;const W=n.innerHoles[C];if("radius"in W){const E=W.radius*2*o;E<t&&i.push({rule:"Piercing Blowout Rule",severity:"error",message:`Hole #${C+1} diameter (${E.toFixed(1)} mm) is less than sheet thickness (${t.toFixed(1)} mm). Fiber laser piercing will blow out or damage the lens nozzle.`,actualValue:E,thresholdValue:t,holeIndex:C})}else{const E=Yn(W),F=Math.min(E.maxX-E.minX,E.maxY-E.minY)*o;F<t&&i.push({rule:"Piercing Blowout Rule",severity:"error",message:`Cutout / Slot #${C+1} minimum span (${F.toFixed(1)} mm) is less than sheet thickness (${t.toFixed(1)} mm). Fiber laser piercing will blow out.`,actualValue:F,thresholdValue:t,holeIndex:C})}}const c=t*1.5,r=n.boundingBox,h=(n.name.toLowerCase().includes("disc")||n.name.toLowerCase().includes("flange")||n.name.toLowerCase().includes("washer"))&&Math.abs(r.width-r.height)<.01,d=r.width/2,l={x:(r.minX+r.maxX)/2,y:(r.minY+r.maxY)/2};for(let C=0;C<n.innerHoles.length;C++){if(s.has(C))continue;const W=n.innerHoles[C];let G;if("radius"in W){const E=W,F=E.center.x,M=E.center.y,f=E.radius;if(h){const u=Math.sqrt((F-l.x)**2+(M-l.y)**2);G=(d-(u+f))*o}else{const u=(F-f-r.minX)*o,m=(r.maxX-(F+f))*o,P=(M-f-r.minY)*o,S=(r.maxY-(M+f))*o;G=Math.min(u,m,P,S)}}else{const E=W,F=Yn(E);if(h){const M=fn(E);let f=0;for(const u of M){const m=Math.sqrt((u.p1.x-l.x)**2+(u.p1.y-l.y)**2);m>f&&(f=m)}G=(d-f)*o}else{const M=(F.minX-r.minX)*o,f=(r.maxX-F.maxX)*o,u=(F.minY-r.minY)*o,m=(r.maxY-F.maxY)*o;G=Math.min(M,f,u,m)}}G<=0?i.push({rule:"Edge Margin Distance Rule",severity:"error",message:`Hole #${C+1} extends outside the outer cutting contour. Cutout breaches the part perimeter.`,actualValue:G,thresholdValue:0,holeIndex:C}):G<c&&i.push({rule:"Edge Margin Distance Rule",severity:"warning",message:`Hole #${C+1} is too close to the outer edge (${G.toFixed(1)} mm vs safe margin ${c.toFixed(1)} mm). Laser heat may warp or melt the edge.`,actualValue:G,thresholdValue:c,holeIndex:C})}const p=t*1.5,g=p/o,y=n.innerHoles.map(C=>"radius"in C?wo(C):Yn(C)),I=n.innerHoles.length;for(let C=0;C<I;C++)if(!s.has(C))for(let W=C+1;W<I;W++){if(s.has(W))continue;const G=y[C],E=y[W];if(Eo(G,E)>g)continue;const M=n.innerHoles[C],f=n.innerHoles[W],u=C===0&&(n.name.toLowerCase().includes("disc")||n.name.toLowerCase().includes("flange")||n.name.toLowerCase().includes("washer")),m=u?"Inner Bore (Hole #1)":`Hole #${C+1}`,S=Fo(M,f)*o;S<=.05?i.push({rule:"Cutout Overlap / Collision Rule",severity:"error",message:`Hole #${W+1} collides/overlaps with ${m}. Overlapping cutouts cause laser nozzle blowout, dross, and mechanical failure.`,actualValue:S,thresholdValue:0,holeIndex:W,relatedHoleIndex:u?void 0:C}):S<p&&i.push({rule:"Hole-to-Hole Bridge Rule",severity:"warning",message:`Hole #${W+1} is too close to ${m} (bridge is ${S.toFixed(1)} mm vs safe margin ${p.toFixed(1)} mm). Laser heat will warp or burn out the thin metal bridge.`,actualValue:S,thresholdValue:p,holeIndex:W,relatedHoleIndex:u?void 0:C})}const b=r.width*o,w=r.height*o;b>4e3||w>2e3?i.push({rule:"Bed Size Limit",severity:"error",message:`Part dimensions (${b.toFixed(0)} x ${w.toFixed(0)} mm) exceed standard sheet metal laser bed size (3000 x 1500 mm / 10 x 5 ft). Check your unit selection.`}):(b<5||w<5)&&i.push({rule:"Minimum Part Size",severity:"warning",message:`Part size (${b.toFixed(1)} x ${w.toFixed(1)} mm) is extremely small. Small parts may fall through laser bed slats into the slag tray.`});const D=i.some(C=>C.severity==="error"),N=i.some(C=>C.severity==="warning");return{isManufacturable:!D,hasWarnings:N,issues:i}}const kt=[{id:"standard",name:"Standard CAM Layers (CUT_OUTER / CUT_INNER / MARKING)",outerLayerName:"CUT_OUTER",outerColor:7,innerLayerName:"CUT_INNER",innerColor:2,etchLayerName:"MARKING",etchColor:4},{id:"cypcut",name:"CypCut (FSCUT / Global Fiber Laser)",outerLayerName:"0",outerColor:7,innerLayerName:"1",innerColor:2,etchLayerName:"2",etchColor:4},{id:"trumpf",name:"Trumpf TruTops (Boost / Classic)",outerLayerName:"OUTER",outerColor:1,innerLayerName:"INNER",innerColor:3,etchLayerName:"MARK",etchColor:4},{id:"sigmanest",name:"SigmaNEST / ProNest",outerLayerName:"CUT_EXTERIOR",outerColor:1,innerLayerName:"CUT_INTERIOR",innerColor:2,etchLayerName:"SCRIBE",etchColor:5},{id:"bysoft",name:"Bystronic BySoft / ByVision",outerLayerName:"CUT_OUTER",outerColor:7,innerLayerName:"CUT_INNER",innerColor:3,etchLayerName:"ETCH",etchColor:4},{id:"generic",name:"Universal Machine CAM",outerLayerName:"0_CUT_OUTER",outerColor:7,innerLayerName:"1_CUT_INNER",innerColor:2,etchLayerName:"2_MARKING",etchColor:4}];function Ro(n,t=1e-4){if(!n||n.length===0)return[];const i=[];for(const s of n)if(s.type==="line"){const c=s.end.x-s.start.x,r=s.end.y-s.start.y;Math.hypot(c,r)>=t&&i.push(s)}else s.type==="arc"&&s.radius>=t&&Math.abs(s.endAngle-s.startAngle)>=t&&i.push(s);const e=[];for(const s of i)e.some(r=>{if(s.type==="line"&&r.type==="line"){const h=Math.hypot(s.start.x-r.start.x,s.start.y-r.start.y)<t&&Math.hypot(s.end.x-r.end.x,s.end.y-r.end.y)<t,d=Math.hypot(s.start.x-r.end.x,s.start.y-r.end.y)<t&&Math.hypot(s.end.x-r.start.x,s.end.y-r.start.y)<t;return h||d}if(s.type==="arc"&&r.type==="arc"){const h=Math.hypot(s.center.x-r.center.x,s.center.y-r.center.y)<t,d=Math.abs(s.radius-r.radius)<t,l=Math.abs(s.startAngle-r.startAngle)<t&&Math.abs(s.endAngle-r.endAngle)<t;return h&&d&&l}return!1})||e.push(s);if(e.length<=1)return e;const o=[];let a=e[0];for(let s=1;s<e.length;s++){const c=e[s];if(a.type==="line"&&c.type==="line"){const r=a.end.x-a.start.x,h=a.end.y-a.start.y,d=Math.hypot(r,h),l=c.end.x-c.start.x,p=c.end.y-c.start.y,g=Math.hypot(l,p);if(Math.hypot(a.end.x-c.start.x,a.end.y-c.start.y)<t&&d>0&&g>0){const I=(r*p-h*l)/(d*g),b=(r*l+h*p)/(d*g);if(Math.abs(I)<1e-4&&b>.999){a={type:"line",start:{...a.start},end:{...c.end}};continue}}}o.push(a),a=c}return o.push(a),o}function No(n,t=kt[0]){const e=n.units==="inch"?1:4,o=[],a=(s,c)=>{o.push(s.toString()),o.push(c.toString())};a(0,"SECTION"),a(2,"HEADER"),a(9,"$ACADVER"),a(1,"AC1024"),a(9,"$INSUNITS"),a(70,e),a(9,"$EXTMIN"),a(10,n.boundingBox.minX.toFixed(4)),a(20,n.boundingBox.minY.toFixed(4)),a(30,"0.0"),a(9,"$EXTMAX"),a(10,n.boundingBox.maxX.toFixed(4)),a(20,n.boundingBox.maxY.toFixed(4)),a(30,"0.0"),a(0,"ENDSEC"),a(0,"SECTION"),a(2,"TABLES"),a(0,"TABLE"),a(2,"LAYER"),a(70,3),a(0,"LAYER"),a(2,t.outerLayerName),a(70,0),a(62,t.outerColor),a(6,"CONTINUOUS"),a(0,"LAYER"),a(2,t.innerLayerName),a(70,0),a(62,t.innerColor),a(6,"CONTINUOUS"),a(0,"LAYER"),a(2,t.etchLayerName),a(70,0),a(62,t.etchColor),a(6,"CONTINUOUS"),a(0,"ENDTAB"),a(0,"ENDSEC"),a(0,"SECTION"),a(2,"ENTITIES"),Ri(n.outerContour,t.outerLayerName,t.outerColor,a);for(const s of n.innerHoles)if("radius"in s){const c=s;to(c.center.x,c.center.y,c.radius,t.innerLayerName,t.innerColor,a)}else Ri(s,t.innerLayerName,t.innerColor,a);return a(0,"ENDSEC"),a(0,"EOF"),o.join(`\r
`)+`\r
`}function to(n,t,i,e,o,a){a(0,"LWPOLYLINE"),a(8,e),a(62,o),a(90,2),a(70,1),a(10,(n-i).toFixed(4)),a(20,t.toFixed(4)),a(42,"1.0"),a(10,(n+i).toFixed(4)),a(20,t.toFixed(4)),a(42,"1.0")}function Ri(n,t,i,e){const o=Ro(n.segments);if(o.length!==0){if(o.length===2&&o[0].type==="arc"&&o[1].type==="arc"&&Math.abs(o[0].radius-o[1].radius)<1e-4){const a=o[0];to(a.center.x,a.center.y,a.radius,t,i,e);return}e(0,"LWPOLYLINE"),e(8,t),e(62,i),e(90,o.length),e(70,n.isClosed?1:0);for(const a of o)if(a.type==="line")e(10,a.start.x.toFixed(4)),e(20,a.start.y.toFixed(4)),e(42,"0.0");else if(a.type==="arc"){const s=a.center.x+a.radius*Math.cos(a.startAngle),c=a.center.y+a.radius*Math.sin(a.startAngle);let r=a.endAngle-a.startAngle;a.counterClockwise?r<0&&(r+=2*Math.PI):r>0&&(r-=2*Math.PI);const h=Math.tan(r/4);e(10,s.toFixed(4)),e(20,c.toFixed(4)),e(42,h.toFixed(6))}}}const Ho=["defpoints","dimension","dim","text","title","border","hatch","notes","anno"];function wt(n){const t=n.toLowerCase();return Ho.some(i=>t.includes(i))}function jn(n,t){return Math.sqrt((n.x-t.x)**2+(n.y-t.y)**2)}function Wo(n,t,i){const e=t.x-n.x,o=t.y-n.y,a=Math.sqrt(e*e+o*o);if(a<1e-6||Math.abs(i)<1e-6)return{type:"line",start:n,end:t};const s=a/2*((1+i*i)/(2*Math.abs(i))),c=(n.x+t.x)/2,r=(n.y+t.y)/2,h=-o/a,d=e/a,l=a/2*((1-i*i)/(2*i)),p=c+h*l,g=r+d*l;let y=Math.atan2(n.y-g,n.x-p),I=Math.atan2(t.y-g,t.x-p);return y<0&&(y+=2*Math.PI),I<0&&(I+=2*Math.PI),{type:"arc",center:{x:p,y:g},radius:s,startAngle:y,endAngle:I,counterClockwise:i>0}}function Ni(n,t=8){const i=[];for(const e of n)if(e.type==="line")i.push({x:e.start.x,y:e.start.y});else if(e.type==="arc"){let o=e.endAngle-e.startAngle;e.counterClockwise&&o<0&&(o+=2*Math.PI),!e.counterClockwise&&o>0&&(o-=2*Math.PI);for(let a=0;a<t;a++){const s=a/t,c=e.startAngle+o*s;i.push({x:e.center.x+e.radius*Math.cos(c),y:e.center.y+e.radius*Math.sin(c)})}}return i}function Hi(n,t){let i=!1;const e=t.length;for(let o=0,a=e-1;o<e;a=o++){const s=t[o].x,c=t[o].y,r=t[a].x,h=t[a].y;c>n.y!=h>n.y&&n.x<(r-s)*(n.y-c)/(h-c)+s&&(i=!i)}return i}function no(n){var G,E,F,M;const t=n.split(/\r?\n/);let i="inch",e=!1;const o=[],a=[],s=[],c=[];let r=!1,h=!1,d="",l=0;for(;l<t.length-1;){const f=parseInt(t[l].trim(),10),u=t[l+1].trim();if(l+=2,f===0&&u==="SECTION"){const m=parseInt((G=t[l])==null?void 0:G.trim(),10),P=(E=t[l+1])==null?void 0:E.trim();m===2&&P==="HEADER"&&(h=!0),m===2&&P==="ENTITIES"&&(r=!0)}else f===0&&u==="ENDSEC"&&(h=!1,r=!1);if(h){if(f===9)d=u;else if(d==="$INSUNITS"&&f===70){const m=parseInt(u,10);m===1?(i="inch",e=!0):m===4&&(i="mm",e=!0)}}if(r&&f===0){if(u==="LINE"){const m={x1:0,y1:0,x2:0,y2:0,layer:"0"};for(;l<t.length-1&&parseInt(t[l].trim(),10)!==0;){const P=parseInt(t[l].trim(),10),S=t[l+1].trim();l+=2,P===8?m.layer=S:P===10?m.x1=parseFloat(S):P===20?m.y1=parseFloat(S):P===11?m.x2=parseFloat(S):P===21&&(m.y2=parseFloat(S))}wt(m.layer)||o.push(m)}else if(u==="CIRCLE"){const m={cx:0,cy:0,r:0,layer:"0"};for(;l<t.length-1&&parseInt(t[l].trim(),10)!==0;){const P=parseInt(t[l].trim(),10),S=t[l+1].trim();l+=2,P===8?m.layer=S:P===10?m.cx=parseFloat(S):P===20?m.cy=parseFloat(S):P===40&&(m.r=parseFloat(S))}wt(m.layer)||a.push(m)}else if(u==="ARC"){const m={cx:0,cy:0,r:0,sa:0,ea:0,layer:"0"};for(;l<t.length-1&&parseInt(t[l].trim(),10)!==0;){const P=parseInt(t[l].trim(),10),S=t[l+1].trim();l+=2,P===8?m.layer=S:P===10?m.cx=parseFloat(S):P===20?m.cy=parseFloat(S):P===40?m.r=parseFloat(S):P===50?m.sa=parseFloat(S)*Math.PI/180:P===51&&(m.ea=parseFloat(S)*Math.PI/180)}wt(m.layer)||s.push(m)}else if(u==="LWPOLYLINE"){const m={vertices:[],isClosed:!1,layer:"0"};let P=null;for(;l<t.length-1&&parseInt(t[l].trim(),10)!==0;){const S=parseInt(t[l].trim(),10),L=t[l+1].trim();l+=2,S===8?m.layer=L:S===70?m.isClosed=(parseInt(L,10)&1)===1:S===10?(P={x:parseFloat(L),y:0},m.vertices.push(P)):S===20?P&&(P.y=parseFloat(L)):S===42&&P&&(P.bulge=parseFloat(L))}!wt(m.layer)&&m.vertices.length>=2&&c.push(m)}else if(u==="POLYLINE"){const m={vertices:[],isClosed:!1,layer:"0"};for(;l<t.length-1&&parseInt(t[l].trim(),10)!==0;){const P=parseInt(t[l].trim(),10),S=t[l+1].trim();l+=2,P===8?m.layer=S:P===70&&(m.isClosed=(parseInt(S,10)&1)===1)}for(;l<t.length-1;){const P=parseInt((F=t[l])==null?void 0:F.trim(),10),S=(M=t[l+1])==null?void 0:M.trim();if(P===0){if(S==="SEQEND"){l+=2;break}if(S==="VERTEX"){l+=2;let L=0,_=0,$;for(;l<t.length-1&&parseInt(t[l].trim(),10)!==0;){const v=parseInt(t[l].trim(),10),B=t[l+1].trim();l+=2,v===10?L=parseFloat(B):v===20?_=parseFloat(B):v===42&&($=parseFloat(B))}m.vertices.push({x:L,y:_,bulge:$});continue}break}l+=2}!wt(m.layer)&&m.vertices.length>=2&&c.push(m)}else if(u==="SPLINE"){const m=[];let P=!1,S="0",L=0,_=0,$=!1,v=!1;for(;l<t.length-1&&parseInt(t[l].trim(),10)!==0;){const B=parseInt(t[l].trim(),10),O=t[l+1].trim();l+=2,B===8?S=O:B===70?P=(parseInt(O,10)&1)===1:B===10||B===11?($&&v&&(m.push({x:L,y:_}),v=!1),L=parseFloat(O),$=!0):(B===20||B===21)&&(_=parseFloat(O),v=!0)}if($&&v&&m.push({x:L,y:_}),!wt(S)&&m.length>=2){const B=m.map(O=>({x:O.x,y:O.y}));c.push({vertices:B,isClosed:P,layer:S})}}}}const p=[];for(const f of c){if(f.vertices.length<2)continue;const u=[],m=f.vertices.length,P=f.isClosed?m:m-1;for(let O=0;O<P;O++){const Y=f.vertices[O],z=f.vertices[(O+1)%m];Y.bulge&&Math.abs(Y.bulge)>1e-5?u.push(Wo(Y,z,Y.bulge)):u.push({type:"line",start:{x:Y.x,y:Y.y},end:{x:z.x,y:z.y}})}const S=Ni(u);let L=1/0,_=1/0,$=-1/0,v=-1/0;for(const O of S)L=Math.min(L,O.x),$=Math.max($,O.x),_=Math.min(_,O.y),v=Math.max(v,O.y);const B={minX:L,minY:_,maxX:$,maxY:v,width:Math.max(1,$-L),height:Math.max(1,v-_)};p.push({segments:u,polygon:S,bbox:B,bboxArea:B.width*B.height})}const g=[];for(const f of o){if(Math.hypot(f.x2-f.x1,f.y2-f.y1)<1e-4)continue;g.some(P=>{if(P.kind!=="line")return!1;const S=Math.hypot(P.start.x-f.x1,P.start.y-f.y1)<1e-4&&Math.hypot(P.end.x-f.x2,P.end.y-f.y2)<1e-4,L=Math.hypot(P.start.x-f.x2,P.start.y-f.y2)<1e-4&&Math.hypot(P.end.x-f.x1,P.end.y-f.y1)<1e-4;return S||L})||g.push({kind:"line",start:{x:f.x1,y:f.y1},end:{x:f.x2,y:f.y2},visited:!1})}for(const f of s){const u={x:f.cx+f.r*Math.cos(f.sa),y:f.cy+f.r*Math.sin(f.sa)},m={x:f.cx+f.r*Math.cos(f.ea),y:f.cy+f.r*Math.sin(f.ea)};g.push({kind:"arc",start:u,end:m,center:{x:f.cx,y:f.cy},radius:f.r,startAngle:f.sa,endAngle:f.ea,counterClockwise:!0,visited:!1})}const y=.35;for(let f=0;f<g.length;f++){if(g[f].visited)continue;const u=[],m=g[f];m.visited=!0;const P={...m.start};let S={...m.end};m.kind==="line"?u.push({type:"line",start:m.start,end:m.end}):u.push({type:"arc",center:m.center,radius:m.radius,startAngle:m.startAngle,endAngle:m.endAngle,counterClockwise:m.counterClockwise});let L=!0;for(;L;){if(L=!1,jn(S,P)<=y&&u.length>=2){const _=u[u.length-1];_.type==="line"&&(_.end={...P});break}for(let _=0;_<g.length;_++){if(g[_].visited)continue;const $=g[_];if(jn(S,$.start)<=y){$.visited=!0,$.kind==="line"?u.push({type:"line",start:{...S},end:$.end}):u.push({type:"arc",center:$.center,radius:$.radius,startAngle:$.startAngle,endAngle:$.endAngle,counterClockwise:$.counterClockwise}),S={...$.end},L=!0;break}else if(jn(S,$.end)<=y){$.visited=!0,$.kind==="line"?u.push({type:"line",start:{...S},end:$.start}):u.push({type:"arc",center:$.center,radius:$.radius,startAngle:$.endAngle,endAngle:$.startAngle,counterClockwise:!$.counterClockwise}),S={...$.start},L=!0;break}}}if(u.length>0){const _=Ni(u);let $=1/0,v=1/0,B=-1/0,O=-1/0;for(const z of _)$=Math.min($,z.x),B=Math.max(B,z.x),v=Math.min(v,z.y),O=Math.max(O,z.y);const Y={minX:$,minY:v,maxX:B,maxY:O,width:Math.max(1,B-$),height:Math.max(1,O-v)};p.push({segments:u,polygon:_,bbox:Y,bboxArea:Y.width*Y.height})}}const I=new Map;for(let f=0;f<p.length;f++){const u=p[f];let m=-1,P=1/0;for(let S=0;S<p.length;S++){if(f===S)continue;const L=p[S];if(L.bbox.minX<=u.bbox.minX+.1&&L.bbox.maxX>=u.bbox.maxX-.1&&L.bbox.minY<=u.bbox.minY+.1&&L.bbox.maxY>=u.bbox.maxY-.1&&L.bboxArea>u.bboxArea){const _=u.polygon[0]||{x:(u.bbox.minX+u.bbox.maxX)/2,y:(u.bbox.minY+u.bbox.maxY)/2};Hi(_,L.polygon)&&L.bboxArea<P&&(P=L.bboxArea,m=S)}}m!==-1&&I.set(f,m)}const b=[],w=new Map;for(let f=0;f<p.length;f++)I.has(f)||(b.push(f),w.set(f,[]));for(let f=0;f<p.length;f++)if(I.has(f)){const u=I.get(f);w.has(u)&&w.get(u).push(p[f].segments)}const D=new Map,N=[];for(const f of b)D.set(f,[]);for(const f of a){const u={x:f.cx,y:f.cy};let m=-1,P=1/0;for(const S of b){const L=p[S];f.cx>=L.bbox.minX&&f.cx<=L.bbox.maxX&&f.cy>=L.bbox.minY&&f.cy<=L.bbox.maxY&&Hi(u,L.polygon)&&L.bboxArea<P&&(P=L.bboxArea,m=S)}m!==-1?D.get(m).push({center:u,radius:f.r}):N.push({center:u,radius:f.r})}const C=[];for(let f=0;f<b.length;f++){const u=b[f],m=p[u],P=[],S=w.get(u)||[];for(const _ of S)_.length===2&&_[0].type==="arc"&&_[1].type==="arc"&&Math.abs(_[0].radius-_[1].radius)<.001&&Math.hypot(_[0].center.x-_[1].center.x,_[0].center.y-_[1].center.y)<.001?P.push({center:{..._[0].center},radius:_[0].radius}):P.push({segments:_,isClosed:!0,isHole:!0});const L=D.get(u)||[];for(const _ of L)P.push(_);C.push({name:b.length>1?`Sanitized Part #${f+1}`:"Sanitized CNC Drawing",units:i,outerContour:{segments:m.segments,isClosed:!0,isHole:!1},innerHoles:P,boundingBox:m.bbox})}if(C.length===0&&N.length>0){const f=[...N].sort((L,_)=>_.radius-L.radius),u=f[0],m=[{type:"arc",center:{...u.center},radius:u.radius,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:{...u.center},radius:u.radius,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],P=f.slice(1),S={minX:u.center.x-u.radius,minY:u.center.y-u.radius,maxX:u.center.x+u.radius,maxY:u.center.y+u.radius,width:u.radius*2,height:u.radius*2};C.push({name:"Sanitized CNC Disc",units:i,outerContour:{segments:m,isClosed:!0,isHole:!1},innerHoles:P,boundingBox:S})}if(C.length>1){C.sort((P,S)=>S.boundingBox.width*S.boundingBox.height-P.boundingBox.width*P.boundingBox.height);const f=C[0],u=C[1];f.boundingBox.width*f.boundingBox.height>3*(u.boundingBox.width*u.boundingBox.height)&&(f.boundingBox.width>=20||f.boundingBox.width>=500)&&u.boundingBox.minX>=f.boundingBox.minX&&u.boundingBox.maxX<=f.boundingBox.maxX&&u.boundingBox.minY>=f.boundingBox.minY&&u.boundingBox.maxY<=f.boundingBox.maxY&&C.shift()}const W=!e;return!e&&C.length>0&&(Math.max(...C.map(u=>Math.max(u.boundingBox.width,u.boundingBox.height)))>144?i="mm":i="inch"),C.forEach(f=>{f.units=i,f.isUnitInferred=W}),C.length===0&&C.push({name:"Empty DXF Drawing",units:i,isUnitInferred:W,outerContour:{segments:[{type:"line",start:{x:0,y:0},end:{x:100,y:0}},{type:"line",start:{x:100,y:0},end:{x:100,y:100}},{type:"line",start:{x:100,y:100},end:{x:0,y:100}},{type:"line",start:{x:0,y:100},end:{x:0,y:0}}],isClosed:!0,isHole:!1},innerHoles:[],boundingBox:{minX:0,minY:0,maxX:100,maxY:100,width:100,height:100}}),C}function _o(n){const t=no(n);return t.sort((i,e)=>e.boundingBox.width*e.boundingBox.height-i.boundingBox.width*i.boundingBox.height),t[0]}const Gt=[{id:"sheet_8x4",name:"8 × 4 ft (48 × 96 in / 2500 × 1250 mm) - Standard Industrial Plate",widthMm:1250,lengthMm:2500},{id:"sheet_10x5",name:"10 × 5 ft (3000 × 1500 mm) - Standard Laser Bed",widthMm:1500,lengthMm:3e3},{id:"sheet_20x5",name:"20 × 5 ft (6000 × 1500 mm) - Heavy Structural Plate",widthMm:1500,lengthMm:6e3},{id:"sheet_small",name:"4 × 4 ft (1250 × 1250 mm) - Offcut / Half Sheet",widthMm:1250,lengthMm:1250}],$n=[{id:"us_sheet_5x10",name:"5 × 10 ft (60 × 120 in) - Standard US Laser Bed",widthMm:1524,lengthMm:3048},{id:"us_sheet_4x8",name:"4 × 8 ft (48 × 96 in) - Standard US Sheet",widthMm:1219.2,lengthMm:2438.4},{id:"us_sheet_6x12",name:"6 × 12 ft (72 × 144 in) - Large Format Table",widthMm:1828.8,lengthMm:3657.6},{id:"us_sheet_4x4",name:"4 × 4 ft (48 × 48 in) - Half Sheet / Drop",widthMm:1219.2,lengthMm:1219.2}];class Oo{constructor(t,i,e,o,a){Bt(this,"sheetW");Bt(this,"sheetL");Bt(this,"edgeMargin");Bt(this,"spacing");Bt(this,"allowRotation");this.sheetW=t,this.sheetL=i,this.edgeMargin=e,this.spacing=o,this.allowRotation=a}initSheetFreeRects(){const t=Math.max(0,this.sheetW-2*this.edgeMargin),i=Math.max(0,this.sheetL-2*this.edgeMargin);return[{x:this.edgeMargin,y:this.edgeMargin,width:t,height:i}]}scorePlacement(t,i,e){if(i>t.width||e>t.height)return{score1:1/0,score2:1/0};const o=t.width-i,a=t.height-e,s=Math.min(o,a),c=Math.max(o,a);return{score1:s,score2:c}}splitFreeRect(t,i,e,o,a){if(i>=t.x+t.width||i+o<=t.x||e>=t.y+t.height||e+a<=t.y)return[t];const s=[];return e>t.y&&e<t.y+t.height&&s.push({x:t.x,y:t.y,width:t.width,height:e-t.y}),e+a<t.y+t.height&&e+a>t.y&&s.push({x:t.x,y:e+a,width:t.width,height:t.y+t.height-(e+a)}),i>t.x&&i<t.x+t.width&&s.push({x:t.x,y:t.y,width:i-t.x,height:t.height}),i+o<t.x+t.width&&i+o>t.x&&s.push({x:i+o,y:t.y,width:t.x+t.width-(i+o),height:t.height}),s}pruneFreeRects(t){const i=t.filter(o=>o.width>0&&o.height>0),e=[];for(let o=0;o<i.length;o++){let a=!1;const s=i[o];for(let c=0;c<i.length;c++){if(o===c)continue;const r=i[c];if(s.x>=r.x&&s.y>=r.y&&s.x+s.width<=r.x+r.width&&s.y+s.height<=r.y+r.height){a=!0;break}}a||e.push(s)}return e}pack(t){const i=[];let e=0,o=this.initSheetFreeRects();for(let a=0;a<t.length;a++){const s=t[a];let c=!1;for(;!c;){let r={score1:1/0,score2:1/0},h=-1,d=!1,l=s.w,p=s.h;for(let g=0;g<o.length;g++){const y=o[g],I=this.scorePlacement(y,s.w,s.h);if((I.score1<r.score1||I.score1===r.score1&&I.score2<r.score2)&&(r=I,h=g,d=!1,l=s.w,p=s.h),this.allowRotation&&Math.abs(s.w-s.h)>.5){const b=this.scorePlacement(y,s.h,s.w);(b.score1<r.score1||b.score1===r.score1&&b.score2<r.score2)&&(r=b,h=g,d=!0,l=s.h,p=s.w)}}if(h!==-1){const g=o[h],y=g.x,I=g.y;i.push({id:s.instanceId,partIndex:a,sheetIndex:e,x:y,y:I,width:l,height:p,rotated:d,partName:s.name,partId:s.instanceId,color:s.color});const b=l+this.spacing,w=p+this.spacing;let D=[];for(const N of o){const C=this.splitFreeRect(N,y,I,b,w);D.push(...C)}o=this.pruneFreeRects(D),c=!0}else{const g=Math.max(0,this.sheetW-2*this.edgeMargin),y=Math.max(0,this.sheetL-2*this.edgeMargin);o.length===1&&o[0].width===g&&o[0].height===y||e>=50?(i.push({id:s.instanceId,partIndex:a,sheetIndex:e,x:0,y:0,width:s.w,height:s.h,rotated:!1,partName:s.name,partId:s.instanceId,color:s.color}),c=!0):(e++,o=this.initSheetFreeRects())}}}return i}}function oi(n,t=Gt[0],i=6,e=7.85,o={}){var P;const a=o.edgeMarginMm!==void 0?o.edgeMarginMm:10,s=o.partSpacingMm!==void 0?o.partSpacingMm:5,c=o.allowRotation!==!1,r=t.widthMm,h=t.lengthMm,d=[];let l=0,p=0;for(let S=0;S<n.length;S++){const L=n[S],_=Math.max(1,Math.floor(L.quantity));l+=_;const v=((P=L.geometry)==null?void 0:P.units)==="inch"?25.4:1,B=Math.max(1,L.boundingBox.width*v),O=Math.max(1,L.boundingBox.height*v),Y=B*O;for(let z=0;z<_;z++)d.push({instanceId:`${L.id}_${z}`,itemIndex:S,name:L.name,w:B,h:O,color:L.color}),p+=Y}d.sort((S,L)=>L.w*L.h-S.w*S.h);const y=new Oo(r,h,a,s,c).pack(d),I=y.reduce((S,L)=>Math.max(S,L.sheetIndex),0),b=y.length>0?I+1:1,D=r*h*b,N=Math.min(100,Math.round(p/D*1e3)/10),C=p*i/1e3,W=Math.round(C*e/1e3*100)/100,G=D*i/1e3,E=Math.round(G*e/1e3*100)/100,F=Math.max(0,Math.round((E-W)*100)/100),M=y.filter(S=>S.sheetIndex===I);let f=0;for(const S of M)f=Math.max(f,S.y+S.height);const u=Math.max(0,Math.round(h-(f+s))),m=r;return{sheetSize:t,partsRequested:l,partsPlaced:y.length,sheetsRequired:b,sheetUtilizationPercent:N,totalNetPartMassKg:W,totalLoadedSheetMassKg:E,totalSkeletonScrapMassKg:F,remnantWidthMm:m,remnantLengthMm:u,packedParts:y}}function Go(n,t,i=Gt[0],e=6,o=7.85,a={},s="mm"){const c=s==="inch",r=c?25.4:1,d={id:"part_0",name:"Part",boundingBox:c?{minX:n.minX*r,minY:n.minY*r,maxX:n.maxX*r,maxY:n.maxY*r,width:n.width*r,height:n.height*r}:n,quantity:t};return oi([d],i,e,o,a)}const ai=[{id:"steel_a36",name:"Carbon Steel (A36 / Mild Steel)",densityGPerCm3:7.85,gauges:[{gaugeName:'20 Gauge (0.0359" / 0.91 mm)',thicknessMm:.91,thicknessInches:.0359,pricePerSqInch:.012,pricePerLinearInchCut:.024,pricePerPierce:.1,feedRate4kWIpm:650,feedRate6kWIpm:900,pierceDelay4kWSec:.01,pierceDelay6kWSec:.01,cuttingSpeedIpm:650,feedRateMmMin:16510,pierceDelaySec:.01},{gaugeName:'18 Gauge (0.0478" / 1.21 mm)',thicknessMm:1.21,thicknessInches:.0478,pricePerSqInch:.015,pricePerLinearInchCut:.028,pricePerPierce:.12,feedRate4kWIpm:550,feedRate6kWIpm:750,pierceDelay4kWSec:.02,pierceDelay6kWSec:.015,cuttingSpeedIpm:550,feedRateMmMin:13970,pierceDelaySec:.02},{gaugeName:'16 Gauge (0.0598" / 1.52 mm)',thicknessMm:1.52,thicknessInches:.0598,pricePerSqInch:.018,pricePerLinearInchCut:.035,pricePerPierce:.15,feedRate4kWIpm:450,feedRate6kWIpm:650,pierceDelay4kWSec:.03,pierceDelay6kWSec:.02,cuttingSpeedIpm:450,feedRateMmMin:11430,pierceDelaySec:.03},{gaugeName:'14 Gauge (0.0747" / 1.90 mm)',thicknessMm:1.9,thicknessInches:.0747,pricePerSqInch:.022,pricePerLinearInchCut:.042,pricePerPierce:.18,feedRate4kWIpm:380,feedRate6kWIpm:540,pierceDelay4kWSec:.04,pierceDelay6kWSec:.03,cuttingSpeedIpm:380,feedRateMmMin:9652,pierceDelaySec:.04},{gaugeName:'12 Gauge (0.1046" / 2.66 mm)',thicknessMm:2.66,thicknessInches:.1046,pricePerSqInch:.03,pricePerLinearInchCut:.048,pricePerPierce:.22,feedRate4kWIpm:310,feedRate6kWIpm:460,pierceDelay4kWSec:.06,pierceDelay6kWSec:.04,cuttingSpeedIpm:310,feedRateMmMin:7874,pierceDelaySec:.06},{gaugeName:'11 Gauge (0.1196" / 3.04 mm)',thicknessMm:3.04,thicknessInches:.1196,pricePerSqInch:.035,pricePerLinearInchCut:.055,pricePerPierce:.25,feedRate4kWIpm:280,feedRate6kWIpm:420,pierceDelay4kWSec:.08,pierceDelay6kWSec:.05,cuttingSpeedIpm:280,feedRateMmMin:7112,pierceDelaySec:.08},{gaugeName:'10 Gauge (0.1345" / 3.42 mm)',thicknessMm:3.42,thicknessInches:.1345,pricePerSqInch:.042,pricePerLinearInchCut:.065,pricePerPierce:.3,feedRate4kWIpm:240,feedRate6kWIpm:360,pierceDelay4kWSec:.1,pierceDelay6kWSec:.06,cuttingSpeedIpm:240,feedRateMmMin:6096,pierceDelaySec:.1},{gaugeName:'7 Gauge / 3/16" Plate (0.1875" / 4.76 mm)',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.058,pricePerLinearInchCut:.085,pricePerPierce:.4,feedRate4kWIpm:200,feedRate6kWIpm:300,pierceDelay4kWSec:.15,pierceDelay6kWSec:.1,cuttingSpeedIpm:200,feedRateMmMin:5080,pierceDelaySec:.15},{gaugeName:'1/4" Plate (.250" / 6.35 mm)',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.078,pricePerLinearInchCut:.12,pricePerPierce:.6,feedRate4kWIpm:150,feedRate6kWIpm:240,pierceDelay4kWSec:.25,pierceDelay6kWSec:.15,cuttingSpeedIpm:150,feedRateMmMin:3810,pierceDelaySec:.25},{gaugeName:'3/8" Plate (.375" / 9.53 mm)',thicknessMm:9.53,thicknessInches:.375,pricePerSqInch:.115,pricePerLinearInchCut:.185,pricePerPierce:.95,feedRate4kWIpm:75,feedRate6kWIpm:130,pierceDelay4kWSec:.6,pierceDelay6kWSec:.4,cuttingSpeedIpm:75,feedRateMmMin:1905,pierceDelaySec:.6},{gaugeName:'1/2" Plate (.500" / 12.7 mm)',thicknessMm:12.7,thicknessInches:.5,pricePerSqInch:.155,pricePerLinearInchCut:.26,pricePerPierce:1.4,feedRate4kWIpm:45,feedRate6kWIpm:75,pierceDelay4kWSec:1.2,pierceDelay6kWSec:.75,cuttingSpeedIpm:45,feedRateMmMin:1143,pierceDelaySec:1.2},{gaugeName:'5/8" Plate (.625" / 15.88 mm)',thicknessMm:15.88,thicknessInches:.625,pricePerSqInch:.198,pricePerLinearInchCut:.33,pricePerPierce:1.95,feedRate4kWIpm:32,feedRate6kWIpm:55,pierceDelay4kWSec:1.6,pierceDelay6kWSec:1.1,cuttingSpeedIpm:32,feedRateMmMin:813,pierceDelaySec:1.6},{gaugeName:'3/4" Plate (.750" / 19.05 mm)',thicknessMm:19.05,thicknessInches:.75,pricePerSqInch:.245,pricePerLinearInchCut:.42,pricePerPierce:2.6,feedRate4kWIpm:24,feedRate6kWIpm:42,pierceDelay4kWSec:2.2,pierceDelay6kWSec:1.4,cuttingSpeedIpm:24,feedRateMmMin:610,pierceDelaySec:2.2},{gaugeName:'1" Heavy Plate (1.000" / 25.4 mm)',thicknessMm:25.4,thicknessInches:1,pricePerSqInch:.335,pricePerLinearInchCut:.58,pricePerPierce:3.8,feedRate4kWIpm:15,feedRate6kWIpm:28,pierceDelay4kWSec:3.5,pierceDelay6kWSec:2.2,cuttingSpeedIpm:15,feedRateMmMin:381,pierceDelaySec:3.5}]},{id:"stainless_304",name:"Stainless Steel (304 2B / #4)",densityGPerCm3:8,gauges:[{gaugeName:'20 Gauge SS (0.0375" / 0.95 mm)',thicknessMm:.95,thicknessInches:.0375,pricePerSqInch:.035,pricePerLinearInchCut:.045,pricePerPierce:.2,feedRate4kWIpm:750,feedRate6kWIpm:1050,pierceDelay4kWSec:.01,pierceDelay6kWSec:.01,cuttingSpeedIpm:750,feedRateMmMin:19050,pierceDelaySec:.01},{gaugeName:'18 Gauge SS (0.0500" / 1.27 mm)',thicknessMm:1.27,thicknessInches:.05,pricePerSqInch:.044,pricePerLinearInchCut:.055,pricePerPierce:.25,feedRate4kWIpm:650,feedRate6kWIpm:920,pierceDelay4kWSec:.015,pierceDelay6kWSec:.01,cuttingSpeedIpm:650,feedRateMmMin:16510,pierceDelaySec:.015},{gaugeName:'16 Gauge SS (0.0625" / 1.59 mm)',thicknessMm:1.59,thicknessInches:.0625,pricePerSqInch:.054,pricePerLinearInchCut:.068,pricePerPierce:.3,feedRate4kWIpm:550,feedRate6kWIpm:800,pierceDelay4kWSec:.02,pierceDelay6kWSec:.015,cuttingSpeedIpm:550,feedRateMmMin:13970,pierceDelaySec:.02},{gaugeName:'14 Gauge SS (0.0781" / 1.98 mm)',thicknessMm:1.98,thicknessInches:.0781,pricePerSqInch:.068,pricePerLinearInchCut:.082,pricePerPierce:.38,feedRate4kWIpm:420,feedRate6kWIpm:620,pierceDelay4kWSec:.03,pierceDelay6kWSec:.02,cuttingSpeedIpm:420,feedRateMmMin:10668,pierceDelaySec:.03},{gaugeName:'12 Gauge SS (0.1094" / 2.78 mm)',thicknessMm:2.78,thicknessInches:.1094,pricePerSqInch:.088,pricePerLinearInchCut:.095,pricePerPierce:.45,feedRate4kWIpm:310,feedRate6kWIpm:480,pierceDelay4kWSec:.05,pierceDelay6kWSec:.03,cuttingSpeedIpm:310,feedRateMmMin:7874,pierceDelaySec:.05},{gaugeName:'11 Gauge SS / 1/8" (0.1250" / 3.18 mm)',thicknessMm:3.18,thicknessInches:.125,pricePerSqInch:.102,pricePerLinearInchCut:.11,pricePerPierce:.52,feedRate4kWIpm:260,feedRate6kWIpm:420,pierceDelay4kWSec:.06,pierceDelay6kWSec:.04,cuttingSpeedIpm:260,feedRateMmMin:6604,pierceDelaySec:.06},{gaugeName:'10 Gauge SS (0.1406" / 3.57 mm)',thicknessMm:3.57,thicknessInches:.1406,pricePerSqInch:.122,pricePerLinearInchCut:.128,pricePerPierce:.62,feedRate4kWIpm:210,feedRate6kWIpm:340,pierceDelay4kWSec:.08,pierceDelay6kWSec:.05,cuttingSpeedIpm:210,feedRateMmMin:5334,pierceDelaySec:.08},{gaugeName:'3/16" SS Plate (.1875" / 4.76 mm)',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.165,pricePerLinearInchCut:.165,pricePerPierce:.85,feedRate4kWIpm:140,feedRate6kWIpm:240,pierceDelay4kWSec:.18,pierceDelay6kWSec:.1,cuttingSpeedIpm:140,feedRateMmMin:3556,pierceDelaySec:.18},{gaugeName:'1/4" SS Plate (.250" / 6.35 mm)',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.22,pricePerLinearInchCut:.24,pricePerPierce:1.25,feedRate4kWIpm:90,feedRate6kWIpm:160,pierceDelay4kWSec:.35,pierceDelay6kWSec:.2,cuttingSpeedIpm:90,feedRateMmMin:2286,pierceDelaySec:.35},{gaugeName:'3/8" SS Plate (.375" / 9.53 mm)',thicknessMm:9.53,thicknessInches:.375,pricePerSqInch:.34,pricePerLinearInchCut:.38,pricePerPierce:1.95,feedRate4kWIpm:50,feedRate6kWIpm:95,pierceDelay4kWSec:.7,pierceDelay6kWSec:.4,cuttingSpeedIpm:50,feedRateMmMin:1270,pierceDelaySec:.7},{gaugeName:'1/2" SS Plate (.500" / 12.7 mm)',thicknessMm:12.7,thicknessInches:.5,pricePerSqInch:.46,pricePerLinearInchCut:.52,pricePerPierce:2.8,feedRate4kWIpm:30,feedRate6kWIpm:60,pierceDelay4kWSec:1.4,pierceDelay6kWSec:.8,cuttingSpeedIpm:30,feedRateMmMin:762,pierceDelaySec:1.4}]},{id:"aluminum_6061",name:"Aluminum (6061-T6 Structural)",densityGPerCm3:2.7,gauges:[{gaugeName:'0.040" Sheet (1.02 mm)',thicknessMm:1.02,thicknessInches:.04,pricePerSqInch:.026,pricePerLinearInchCut:.032,pricePerPierce:.15,feedRate4kWIpm:750,feedRate6kWIpm:1050,pierceDelay4kWSec:.015,pierceDelay6kWSec:.01,cuttingSpeedIpm:750,feedRateMmMin:19050,pierceDelaySec:.015},{gaugeName:'0.063" / 1/16" Sheet (1.59 mm)',thicknessMm:1.59,thicknessInches:.0625,pricePerSqInch:.038,pricePerLinearInchCut:.045,pricePerPierce:.2,feedRate4kWIpm:600,feedRate6kWIpm:850,pierceDelay4kWSec:.02,pierceDelay6kWSec:.015,cuttingSpeedIpm:600,feedRateMmMin:15240,pierceDelaySec:.02},{gaugeName:'0.080" Sheet (2.03 mm)',thicknessMm:2.03,thicknessInches:.08,pricePerSqInch:.048,pricePerLinearInchCut:.055,pricePerPierce:.25,feedRate4kWIpm:460,feedRate6kWIpm:680,pierceDelay4kWSec:.03,pierceDelay6kWSec:.02,cuttingSpeedIpm:460,feedRateMmMin:11684,pierceDelaySec:.03},{gaugeName:'0.090" Sheet (2.29 mm)',thicknessMm:2.29,thicknessInches:.09,pricePerSqInch:.054,pricePerLinearInchCut:.06,pricePerPierce:.28,feedRate4kWIpm:400,feedRate6kWIpm:600,pierceDelay4kWSec:.035,pierceDelay6kWSec:.025,cuttingSpeedIpm:400,feedRateMmMin:10160,pierceDelaySec:.035},{gaugeName:'0.125" / 1/8" Sheet (3.18 mm)',thicknessMm:3.18,thicknessInches:.125,pricePerSqInch:.072,pricePerLinearInchCut:.075,pricePerPierce:.35,feedRate4kWIpm:280,feedRate6kWIpm:440,pierceDelay4kWSec:.05,pierceDelay6kWSec:.035,cuttingSpeedIpm:280,feedRateMmMin:7112,pierceDelaySec:.05},{gaugeName:'0.190" / 3/16" Plate (4.76 mm)',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.11,pricePerLinearInchCut:.115,pricePerPierce:.55,feedRate4kWIpm:160,feedRate6kWIpm:260,pierceDelay4kWSec:.12,pierceDelay6kWSec:.08,cuttingSpeedIpm:160,feedRateMmMin:4064,pierceDelaySec:.12},{gaugeName:'0.250" / 1/4" Plate (6.35 mm)',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.145,pricePerLinearInchCut:.16,pricePerPierce:.8,feedRate4kWIpm:100,feedRate6kWIpm:170,pierceDelay4kWSec:.25,pierceDelay6kWSec:.16,cuttingSpeedIpm:100,feedRateMmMin:2540,pierceDelaySec:.25},{gaugeName:'0.375" / 3/8" Plate (9.53 mm)',thicknessMm:9.53,thicknessInches:.375,pricePerSqInch:.225,pricePerLinearInchCut:.24,pricePerPierce:1.25,feedRate4kWIpm:60,feedRate6kWIpm:105,pierceDelay4kWSec:.45,pierceDelay6kWSec:.28,cuttingSpeedIpm:60,feedRateMmMin:1524,pierceDelaySec:.45},{gaugeName:'0.500" / 1/2" Plate (12.7 mm)',thicknessMm:12.7,thicknessInches:.5,pricePerSqInch:.31,pricePerLinearInchCut:.33,pricePerPierce:1.8,feedRate4kWIpm:38,feedRate6kWIpm:68,pierceDelay4kWSec:.9,pierceDelay6kWSec:.55,cuttingSpeedIpm:38,feedRateMmMin:965,pierceDelaySec:.9}]},{id:"aluminum_5052",name:"Aluminum (5052-H32 Forming)",densityGPerCm3:2.68,gauges:[{gaugeName:'0.040" Sheet (1.02 mm)',thicknessMm:1.02,thicknessInches:.04,pricePerSqInch:.024,pricePerLinearInchCut:.035,pricePerPierce:.15,feedRate4kWIpm:750,feedRate6kWIpm:1e3,pierceDelay4kWSec:.015,pierceDelay6kWSec:.01,cuttingSpeedIpm:750,feedRateMmMin:19050,pierceDelaySec:.015},{gaugeName:'0.050" Sheet (1.27 mm)',thicknessMm:1.27,thicknessInches:.05,pricePerSqInch:.03,pricePerLinearInchCut:.038,pricePerPierce:.16,feedRate4kWIpm:680,feedRate6kWIpm:940,pierceDelay4kWSec:.018,pierceDelay6kWSec:.012,cuttingSpeedIpm:680,feedRateMmMin:17272,pierceDelaySec:.018},{gaugeName:'0.063" / 1/16" Sheet (1.60 mm)',thicknessMm:1.6,thicknessInches:.063,pricePerSqInch:.036,pricePerLinearInchCut:.042,pricePerPierce:.18,feedRate4kWIpm:620,feedRate6kWIpm:880,pierceDelay4kWSec:.02,pierceDelay6kWSec:.015,cuttingSpeedIpm:620,feedRateMmMin:15748,pierceDelaySec:.02},{gaugeName:'0.080" Sheet (2.03 mm)',thicknessMm:2.03,thicknessInches:.08,pricePerSqInch:.046,pricePerLinearInchCut:.052,pricePerPierce:.22,feedRate4kWIpm:480,feedRate6kWIpm:700,pierceDelay4kWSec:.028,pierceDelay6kWSec:.018,cuttingSpeedIpm:480,feedRateMmMin:12192,pierceDelaySec:.028},{gaugeName:'0.090" Sheet (2.29 mm)',thicknessMm:2.29,thicknessInches:.09,pricePerSqInch:.052,pricePerLinearInchCut:.058,pricePerPierce:.25,feedRate4kWIpm:420,feedRate6kWIpm:600,pierceDelay4kWSec:.035,pierceDelay6kWSec:.025,cuttingSpeedIpm:420,feedRateMmMin:10668,pierceDelaySec:.035},{gaugeName:'0.125" / 1/8" Sheet (3.18 mm)',thicknessMm:3.18,thicknessInches:.125,pricePerSqInch:.068,pricePerLinearInchCut:.072,pricePerPierce:.32,feedRate4kWIpm:300,feedRate6kWIpm:480,pierceDelay4kWSec:.05,pierceDelay6kWSec:.035,cuttingSpeedIpm:300,feedRateMmMin:7620,pierceDelaySec:.05},{gaugeName:'0.190" / 3/16" Plate (4.76 mm)',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.105,pricePerLinearInchCut:.11,pricePerPierce:.5,feedRate4kWIpm:180,feedRate6kWIpm:290,pierceDelay4kWSec:.1,pierceDelay6kWSec:.07,cuttingSpeedIpm:180,feedRateMmMin:4572,pierceDelaySec:.1},{gaugeName:'0.250" / 1/4" Plate (6.35 mm)',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.138,pricePerLinearInchCut:.155,pricePerPierce:.75,feedRate4kWIpm:110,feedRate6kWIpm:190,pierceDelay4kWSec:.22,pierceDelay6kWSec:.14,cuttingSpeedIpm:110,feedRateMmMin:2794,pierceDelaySec:.22}]},{id:"stainless_316",name:"Stainless Steel (316 Marine/Sanitary)",densityGPerCm3:8,gauges:[{gaugeName:'16 Gauge SS 316 (0.0598" / 1.52 mm)',thicknessMm:1.52,thicknessInches:.0598,pricePerSqInch:.062,pricePerLinearInchCut:.072,pricePerPierce:.35,feedRate4kWIpm:520,feedRate6kWIpm:760,pierceDelay4kWSec:.02,pierceDelay6kWSec:.015,cuttingSpeedIpm:520,feedRateMmMin:13208,pierceDelaySec:.02},{gaugeName:'11 Gauge SS 316 / 1/8" (0.1250" / 3.18 mm)',thicknessMm:3.18,thicknessInches:.125,pricePerSqInch:.118,pricePerLinearInchCut:.12,pricePerPierce:.6,feedRate4kWIpm:240,feedRate6kWIpm:390,pierceDelay4kWSec:.07,pierceDelay6kWSec:.045,cuttingSpeedIpm:240,feedRateMmMin:6096,pierceDelaySec:.07},{gaugeName:'3/16" SS 316 Plate (.1875" / 4.76 mm)',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.195,pricePerLinearInchCut:.19,pricePerPierce:.95,feedRate4kWIpm:130,feedRate6kWIpm:220,pierceDelay4kWSec:.2,pierceDelay6kWSec:.11,cuttingSpeedIpm:130,feedRateMmMin:3302,pierceDelaySec:.2},{gaugeName:'1/4" SS 316 Plate (.250" / 6.35 mm)',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.26,pricePerLinearInchCut:.28,pricePerPierce:1.45,feedRate4kWIpm:85,feedRate6kWIpm:150,pierceDelay4kWSec:.38,pierceDelay6kWSec:.22,cuttingSpeedIpm:85,feedRateMmMin:2159,pierceDelaySec:.38},{gaugeName:'3/8" SS 316 Plate (.375" / 9.53 mm)',thicknessMm:9.53,thicknessInches:.375,pricePerSqInch:.38,pricePerLinearInchCut:.42,pricePerPierce:2.1,feedRate4kWIpm:45,feedRate6kWIpm:85,pierceDelay4kWSec:.8,pierceDelay6kWSec:.45,cuttingSpeedIpm:45,feedRateMmMin:1143,pierceDelaySec:.8}]}],io=[{id:"is2062_ms",name:"IS 2062 E250 Mild Steel (MS)",densityGPerCm3:7.85,gauges:[{gaugeName:"1.6 mm Sheet (16G)",thicknessMm:1.6,thicknessInches:.063,pricePerSqInch:.02,pricePerLinearInchCut:.035,pricePerPierce:.15,pricePerKg:74,pricePerMeterCut:9,pricePerSqFtJali:55},{gaugeName:"2.0 mm Sheet (14G)",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.025,pricePerLinearInchCut:.04,pricePerPierce:.2,pricePerKg:74,pricePerMeterCut:12,pricePerSqFtJali:65},{gaugeName:"3.0 mm Sheet (10G)",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.035,pricePerLinearInchCut:.05,pricePerPierce:.25,pricePerKg:75,pricePerMeterCut:15,pricePerSqFtJali:95},{gaugeName:"4.0 mm Plate",thicknessMm:4,thicknessInches:.1575,pricePerSqInch:.048,pricePerLinearInchCut:.07,pricePerPierce:.35,pricePerKg:75,pricePerMeterCut:22,pricePerSqFtJali:130},{gaugeName:"6.0 mm Plate",thicknessMm:6,thicknessInches:.2362,pricePerSqInch:.072,pricePerLinearInchCut:.11,pricePerPierce:.55,pricePerKg:76,pricePerMeterCut:35},{gaugeName:"8.0 mm Plate",thicknessMm:8,thicknessInches:.315,pricePerSqInch:.098,pricePerLinearInchCut:.16,pricePerPierce:.8,pricePerKg:78,pricePerMeterCut:52},{gaugeName:"10.0 mm Plate",thicknessMm:10,thicknessInches:.3937,pricePerSqInch:.125,pricePerLinearInchCut:.22,pricePerPierce:1.1,pricePerKg:78,pricePerMeterCut:68},{gaugeName:"12.0 mm Plate",thicknessMm:12,thicknessInches:.4724,pricePerSqInch:.15,pricePerLinearInchCut:.28,pricePerPierce:1.4,pricePerKg:80,pricePerMeterCut:88},{gaugeName:"16.0 mm Plate",thicknessMm:16,thicknessInches:.6299,pricePerSqInch:.21,pricePerLinearInchCut:.38,pricePerPierce:2.2,pricePerKg:82,pricePerMeterCut:135},{gaugeName:"20.0 mm Plate",thicknessMm:20,thicknessInches:.7874,pricePerSqInch:.26,pricePerLinearInchCut:.48,pricePerPierce:3,pricePerKg:85,pricePerMeterCut:180}]},{id:"ss304_indian",name:"SS 304 (Stainless Steel - N2 / Air Cut)",densityGPerCm3:8,gauges:[{gaugeName:"1.2 mm Sheet",thicknessMm:1.2,thicknessInches:.0472,pricePerSqInch:.045,pricePerLinearInchCut:.06,pricePerPierce:.3,pricePerKg:230,pricePerMeterCut:16,pricePerSqFtJali:110},{gaugeName:"1.5 mm Sheet",thicknessMm:1.5,thicknessInches:.0591,pricePerSqInch:.055,pricePerLinearInchCut:.07,pricePerPierce:.35,pricePerKg:235,pricePerMeterCut:22,pricePerSqFtJali:135},{gaugeName:"2.0 mm Sheet",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.072,pricePerLinearInchCut:.09,pricePerPierce:.45,pricePerKg:235,pricePerMeterCut:30,pricePerSqFtJali:175},{gaugeName:"3.0 mm Sheet",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.11,pricePerLinearInchCut:.14,pricePerPierce:.65,pricePerKg:240,pricePerMeterCut:45,pricePerSqFtJali:240},{gaugeName:"4.0 mm Plate",thicknessMm:4,thicknessInches:.1575,pricePerSqInch:.15,pricePerLinearInchCut:.19,pricePerPierce:.9,pricePerKg:245,pricePerMeterCut:65},{gaugeName:"6.0 mm Plate",thicknessMm:6,thicknessInches:.2362,pricePerSqInch:.22,pricePerLinearInchCut:.28,pricePerPierce:1.4,pricePerKg:250,pricePerMeterCut:105}]},{id:"aluminum_indian",name:"Aluminium 6061 (Air Cut)",densityGPerCm3:2.7,gauges:[{gaugeName:"2.0 mm Sheet",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.045,pricePerLinearInchCut:.06,pricePerPierce:.3,pricePerKg:260,pricePerMeterCut:20},{gaugeName:"3.0 mm Sheet",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.065,pricePerLinearInchCut:.08,pricePerPierce:.4,pricePerKg:260,pricePerMeterCut:28},{gaugeName:"5.0 mm Plate",thicknessMm:5,thicknessInches:.1969,pricePerSqInch:.11,pricePerLinearInchCut:.13,pricePerPierce:.65,pricePerKg:270,pricePerMeterCut:55}]}],oo={bendingBendsCount:0,bendingRatePerBend:15,deburringEnabled:!1,deburringRatePerKg:8,tappingHolesCount:0,tappingRatePerHole:18,surfaceFinish:"none",primerRatePerSqFt:20,powderCoatingRatePerSqFt:45,galvanizingRatePerKg:42},Cn={shopName:"Shree Balaji Laser Tech (Bhosari, Pune)",currency:"INR",pricingMode:"india_metric",indianQuotingMode:"job_work",assistGas:"air",sheetLoadingFee:250,gstPercent:18,isInterstateSale:!1,minimumOrderFee:500,leadTimeDays:2,rushMultiplier:1.25,selectedCAMProfileId:"cypcut",shopGstin:"27AABCS1429B1Z8",shopAddress:"Plot 42, J-Block, MIDC Bhosari, Pune, MH 411026",shopPhone:"+91 98220 12345",upiId:"balajilaser@upi",quantityTiers:[{minQty:1,discountPercent:0},{minQty:10,discountPercent:8},{minQty:25,discountPercent:15},{minQty:50,discountPercent:22},{minQty:100,discountPercent:30}]},tn={shopName:"Midwest Precision CNC & Laser",currency:"USD",pricingMode:"global_imperial",indianQuotingMode:"with_material",assistGas:"oxygen",sheetLoadingFee:20,gstPercent:7,isInterstateSale:!1,minimumOrderFee:75,leadTimeDays:3,rushMultiplier:1.35,selectedCAMProfileId:"standard",shopAddress:"1420 Industrial Pkwy, Cleveland, OH 44135",shopPhone:"(216) 555-0198",shopEmail:"quotes@midwestprecision.com",rfqWebhookUrl:"",setupFeePerJob:25,laserPowerKw:4,hourlyLaserRateUsd:185,naicsCode:"NAICS 332813 (Laser Cutting & Fabrication)",einOrTaxId:"34-8910245",salesTaxExempt:!1,paymentTerms:"Net 30, Credit Card, ACH",quantityTiers:[{minQty:1,discountPercent:0},{minQty:5,discountPercent:10},{minQty:10,discountPercent:18},{minQty:25,discountPercent:28},{minQty:50,discountPercent:38}]};function Uo(n,t={}){const i={...oo,...t},e=(i.bendingBendsCount||0)*(i.bendingRatePerBend||15),o=i.deburringEnabled?n.theoreticalWeightKg*(i.deburringRatePerKg||8):0,a=(i.tappingHolesCount||0)*(i.tappingRatePerHole||18),s=Math.max(.1,n.netAreaSqMm/(304.8*304.8));let c=0;i.surfaceFinish==="primer"?c=s*(i.primerRatePerSqFt||20):i.surfaceFinish==="powder_coating"?c=s*(i.powderCoatingRatePerSqFt||45):i.surfaceFinish==="galvanizing"&&(c=n.theoreticalWeightKg*(i.galvanizingRatePerKg||42));const r=e+o+a+c;return{bendingCost:Math.round(e*100)/100,deburringCost:Math.round(o*100)/100,tappingCost:Math.round(a*100)/100,surfaceFinishCost:Math.round(c*100)/100,totalSecondaryCost:Math.round(r*100)/100}}function Ze(n,t,i,e=tn,o={}){const a=Math.max(1,Math.floor(i));let s=0,c=0,r=0,h=0,d="HSN 7326 (Articles of Iron or Steel)";const l=e.indianQuotingMode||"with_material";let p=1;if(e.assistGas==="nitrogen"?p=2:e.assistGas==="oxygen"?p=1.15:p=1,e.pricingMode==="india_metric")if(l==="job_work"){s=0;const z=n.totalCutLengthMm/1e3,ae=t.pricePerMeterCut||20;c=z*ae*p,r=n.pierceCount*(t.pricePerPierce>1?t.pricePerPierce:1.5),h=(e.sheetLoadingFee||250)/Math.max(1,a),d="SAC 9988 (Job Work / Manufacturing Services)"}else if(l==="sqft_jali"){const z=Math.max(.1,n.boundingBoxWidthMm/304.8*(n.boundingBoxHeightMm/304.8)),ae=t.pricePerSqFtJali||(t.pricePerKg?t.pricePerKg*1.15:65);s=z*ae,c=0,r=0,h=0,d="HSN 7326 (Decorative Laser Cut Panels)"}else{s=n.theoreticalWeightKg*1.12*(t.pricePerKg||75);const ae=n.totalCutLengthMm/1e3,ye=t.pricePerMeterCut||20;c=ae*ye*p,r=n.pierceCount*(t.pricePerPierce>1?t.pricePerPierce:1.5),h=0,d="HSN 7326 (Fabricated Steel Articles)"}else{s=n.boundingBoxWidthInches*n.boundingBoxHeightInches*1.15*t.pricePerSqInch;const ae=e.laserPowerKw||4,ye=ae===6?t.feedRate6kWIpm||t.feedRate4kWIpm||t.cuttingSpeedIpm||0:t.feedRate4kWIpm||t.cuttingSpeedIpm||0,Je=ae===6?t.pierceDelay6kWSec||t.pierceDelay4kWSec||t.pierceDelaySec||.15:t.pierceDelay4kWSec||t.pierceDelaySec||.25;if(e.hourlyLaserRateUsd&&e.hourlyLaserRateUsd>0&&ye>0){const Qe=n.totalCutLengthInches/ye,ie=n.pierceCount*Je/60;c=(Qe+ie)/60*e.hourlyLaserRateUsd,r=0}else c=n.totalCutLengthInches*t.pricePerLinearInchCut,r=n.pierceCount*t.pricePerPierce;h=0}const g=Uo(n,o),y=g.totalSecondaryCost,I=s+c+r+h+y;let b=0;for(const z of e.quantityTiers||[])a>=z.minQty&&(b=z.discountPercent);const w=I*(1-b/100),D=w*a,N=D<e.minimumOrderFee,C=Math.max(e.minimumOrderFee,D),W=C/a,G=e.currency==="USD",E=e.naicsCode||"NAICS 332813 (Laser Cutting & Fabrication)",F=e.paymentTerms||"Net 30, Credit Card, ACH",M=e.laserPowerKw||4,f=M===6?t.feedRate6kWIpm||t.feedRate4kWIpm||150:t.feedRate4kWIpm||150,u=M===6?t.pierceDelay6kWSec||t.pierceDelay4kWSec||.15:t.pierceDelay4kWSec||.25,m=f>0?n.totalCutLengthInches/f*60:0,P=n.pierceCount*u,S=m+P,L=G&&!!e.salesTaxExempt,_=L?0:e.gstPercent>0?e.gstPercent:0,$=_>0?C*(_/100):0;let v=0,B=0,O=0;e.currency==="INR"&&$>0&&(e.isInterstateSale?O=$:(v=$/2,B=$/2));const Y=C+$;return{currency:e.currency,quotingMode:l,quantity:a,unitMaterialCost:Math.round(s*100)/100,unitCutCost:Math.round(c*100)/100,unitPierceCost:Math.round(r*100)/100,unitHandlingCost:Math.round(h*100)/100,unitSecondaryCost:Math.round(y*100)/100,secondaryBreakdown:g,unitSubtotal:Math.round(I*100)/100,discountPercent:b,discountedUnitPrice:Math.round(w*100)/100,orderTotalBeforeMin:Math.round(D*100)/100,minimumOrderFloorApplied:N,finalOrderTotal:Math.round(C*100)/100,finalUnitPrice:Math.round(W*100)/100,gstAmount:Math.round($*100)/100,cgstAmount:Math.round(v*100)/100,sgstAmount:Math.round(B*100)/100,igstAmount:Math.round(O*100)/100,finalTotalWithGst:Math.round(Y*100)/100,taxAmount:Math.round($*100)/100,hsnSacCode:G?E:d,naicsCode:E,paymentTerms:F,salesTaxExempt:L,beamOnCutTimeSec:Math.round(m*10)/10,pierceTimeSec:Math.round(P*100)/100,totalCycleTimeSec:Math.round(S*10)/10,feedRateIpm:f,pierceDelaySec:u}}function Wi(n,t,i,e,o,a,s=Cn){const r=o.currency==="INR"?"₹":"$",h=o.quotingMode;let d="WITH MATERIAL (SUPPLY & CUT)";h==="job_work"&&(d="JOB WORK (LABOUR ONLY)"),h==="sqft_jali"&&(d="ARCHITECTURAL JALI (SQ.FT BASIS)");const l=(t.boundingBoxWidthMm/304.8*(t.boundingBoxHeightMm/304.8)).toFixed(2),p=s.assistGas==="nitrogen"?"N2 (Nitrogen)":s.assistGas==="oxygen"?"O2 (Oxygen)":"High-Pressure Air";return`*QUOTATION — ${a.toUpperCase()}*
Ref: CNC-Q${Math.floor(1e3+Math.random()*9e3)} | Mode: *${d}*

*Part:* ${n} (${t.boundingBoxWidthMm.toFixed(0)} × ${t.boundingBoxHeightMm.toFixed(0)} mm / ${l} sq.ft)
*Material:* ${i} (${e.gaugeName})
*Assist Gas:* ${p}
*Quantity:* ${o.quantity} pcs

----------------------------------
${h==="job_work"?`• Raw Material: *Supplied by Customer*
• Cut Meters: ${(t.totalCutLengthMm/1e3).toFixed(2)} m (${t.pierceCount*o.quantity} pierces)
• Cutting & Piercing: ${r}${((o.unitCutCost+o.unitPierceCost)*o.quantity).toFixed(2)}
• Plate Loading Fee: ${r}${(o.unitHandlingCost*o.quantity).toFixed(2)}`:h==="sqft_jali"?`• Total Panel Area: ${(parseFloat(l)*o.quantity).toFixed(2)} sq.ft
• Fabrication Rate: ${r}${(o.unitMaterialCost*o.quantity).toFixed(2)}`:`• Est. Net Weight: ${(t.theoreticalWeightKg*o.quantity).toFixed(2)} kg
• Cut Length: ${(t.totalCutLengthMm/1e3).toFixed(2)} meters (${t.pierceCount*o.quantity} pierces)
• Material Cost: ${r}${(o.unitMaterialCost*o.quantity).toFixed(2)}
• Laser Cutting: ${r}${((o.unitCutCost+o.unitPierceCost)*o.quantity).toFixed(2)}`}
${o.unitSecondaryCost>0?`• Secondary Operations: ${r}${(o.unitSecondaryCost*o.quantity).toFixed(2)}
`:""}${o.discountPercent>0?`• Volume Discount: -${o.discountPercent}%
`:""}----------------------------------
*Subtotal:* ${r}${o.finalOrderTotal.toFixed(2)}
${o.gstAmount>0?s.isInterstateSale?`*IGST (18%):* ${r}${o.igstAmount.toFixed(2)}
*FINAL TOTAL (INC. GST):* ${r}${o.finalTotalWithGst.toFixed(2)}`:`*CGST (9%):* ${r}${o.cgstAmount.toFixed(2)}
*SGST (9%):* ${r}${o.sgstAmount.toFixed(2)}
*FINAL TOTAL (INC. GST):* ${r}${o.finalTotalWithGst.toFixed(2)}`:`*FINAL TOTAL:* ${r}${o.finalOrderTotal.toFixed(2)}`}
----------------------------------
• ${o.hsnSacCode}
• CypCut Ready DXF pre-generated for production.
• Turnaround: 24 to 48 Hours.
• Advance: 50% with PO to confirm. UPI: ${s.upiId||"shop@upi"}`}function Tt(n,t=Cn,i=Gt[0],e=!0){const o=t.currency==="INR";let a=0,s=0,c=0,r=0,h=0,d=0,l=0,p=0,g=0;const y=[];for(const u of n){const m=u.quantity;a+=m,s+=u.metrics.totalCutLengthMm/1e3*m,c+=u.metrics.pierceCount*m,r+=u.metrics.theoreticalWeightKg*m,h+=u.unitQuote.unitMaterialCost*m,d+=u.unitQuote.unitCutCost*m,l+=u.unitQuote.unitPierceCost*m,p+=u.unitQuote.unitHandlingCost*m,g+=u.unitQuote.unitSecondaryCost*m,y.push({id:u.id,name:u.partGeometry.name,boundingBox:u.partGeometry.boundingBox,quantity:m,thicknessMm:u.gaugeThicknessMm,color:u.color})}const I=n.length>0?Math.max(...n.map(u=>u.gaugeThicknessMm)):6,b=oi(y,i,I,7.85,{allowRotation:e}),w=h+d+l+p+g;let D=0;if(t.quantityTiers&&t.quantityTiers.length>0)for(const u of t.quantityTiers)a>=u.minQty&&u.discountPercent>D&&(D=u.discountPercent);const N=w*(D/100),C=Math.max(t.minimumOrderFee,w-N),W=o?t.gstPercent/100:0,G=C*W;let E=0,F=0,M=0;o&&G>0&&(t.isInterstateSale?M=G:(E=G/2,F=G/2));const f=C+G;return{currency:t.currency,totalItemsCount:n.length,totalPartsCount:a,totalCutLengthMeters:Math.round(s*100)/100,totalPierces:c,totalNetPartMassKg:Math.round(r*100)/100,totalMaterialCost:Math.round(h*100)/100,totalCutCost:Math.round(d*100)/100,totalPierceCost:Math.round(l*100)/100,totalHandlingCost:Math.round(p*100)/100,totalSecondaryCost:Math.round(g*100)/100,subtotalBeforeDiscount:Math.round(w*100)/100,volumeDiscountPercent:D,discountAmount:Math.round(N*100)/100,orderTotalBeforeGst:Math.round(C*100)/100,gstAmount:Math.round(G*100)/100,cgstAmount:Math.round(E*100)/100,sgstAmount:Math.round(F*100)/100,igstAmount:Math.round(M*100)/100,finalTotalWithGst:Math.round(f*100)/100,nestingResult:b}}function qo(n,t){const e=t.currency==="INR"?"₹":"$",o=n.shopSettings;let a="";for(let c=0;c<n.items.length;c++){const r=n.items[c],h=r.totalPrice.toFixed(2);a+=`${c+1}. *${r.partGeometry.name}* (${r.materialName} ${r.gaugeThicknessMm}mm)
   • Qty: ${r.quantity} pcs @ ${e}${r.unitQuote.finalUnitPrice.toFixed(2)} = *${e}${h}*
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
• Instant UPI Pay: ${o.upiId||"shop@upi"}`}function zo(n,t="91"){const i=n.replace(/[\s\-\(\)\.]/g,"");return i?i.startsWith("+")?i.substring(1):i.length===10&&/^\d+$/.test(i)?`${t}${i}`:i:""}function _i(n,t,i="91"){const e=t?zo(t,i):"",o=encodeURIComponent(n);return e?`https://wa.me/${e}?text=${o}`:`https://wa.me/?text=${o}`}const si="cad_cnc_shop_settings_",ri="cad_cnc_materials_";function ao(n,t){if(typeof window>"u"||!window.localStorage)return{...t};try{const i=window.localStorage.getItem(`${si}${n.toLowerCase()}`);if(i){const e=JSON.parse(i);return{...t,...e}}}catch(i){console.warn("Failed to load shop settings from localStorage",i)}return{...t}}function Yo(n,t){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(`${si}${n.toLowerCase()}`,JSON.stringify(t))}catch(i){console.warn("Failed to save shop settings to localStorage",i)}}function so(n,t){if(typeof window>"u"||!window.localStorage)return JSON.parse(JSON.stringify(t));try{const i=window.localStorage.getItem(`${ri}${n.toLowerCase()}`);if(i){const e=JSON.parse(i);if(Array.isArray(e)&&e.length>0&&e[0].gauges&&e[0].gauges.length>=t[0].gauges.length)return e}}catch(i){console.warn("Failed to load materials from localStorage",i)}return JSON.parse(JSON.stringify(t))}function jo(n,t){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(`${ri}${n.toLowerCase()}`,JSON.stringify(t))}catch(i){console.warn("Failed to save materials to localStorage",i)}}function Qo(n){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.removeItem(`${si}${n.toLowerCase()}`),window.localStorage.removeItem(`${ri}${n.toLowerCase()}`)}catch(t){console.warn("Failed to reset storage",t)}}function sn(n,t,i,e,o,a,s=tn,c="Valued Customer"){const r=o.currency==="USD",h=r?"$":"₹",d=`RFQ-${Math.floor(1e3+Math.random()*9e3)}`,l=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),p=r?`${t.boundingBoxWidthInches.toFixed(2)}" × ${t.boundingBoxHeightInches.toFixed(2)}" (${e.thicknessInches.toFixed(3)}" plate)`:`${t.boundingBoxWidthMm.toFixed(0)} × ${t.boundingBoxHeightMm.toFixed(0)} mm (${e.thicknessMm} mm)`,g=r?`${t.totalCutLengthInches.toFixed(1)} inches (${t.pierceCount} pierces)`:`${(t.totalCutLengthMm/1e3).toFixed(2)} meters (${t.pierceCount} pierces)`,y=r?`${t.theoreticalWeightLbs.toFixed(2)} lbs`:`${t.theoreticalWeightKg.toFixed(2)} kg`,I=r?`${(t.theoreticalWeightLbs*o.quantity).toFixed(2)} lbs`:`${(t.theoreticalWeightKg*o.quantity).toFixed(2)} kg`;return`Subject: Quotation: ${n} (Ref #${d}) — ${a}

Dear ${c},

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
• Est. Unit Weight: ${y} (Total Lot: ${I})
• Laser Cut Profile: ${g}
• Order Quantity: ${o.quantity} piece${o.quantity>1?"s":""}

COST BREAKDOWN:
--------------------------------------------------
• Raw Material: ${h}${o.unitMaterialCost.toFixed(2)} / pc
• Laser Cutting & Piercing: ${h}${(o.unitCutCost+o.unitPierceCost).toFixed(2)} / pc
${o.unitSecondaryCost>0?`• Secondary Operations (Forming/Deburr): ${h}${o.unitSecondaryCost.toFixed(2)} / pc
`:""}${o.discountPercent>0?`• Volume Discount (${o.discountPercent}% applied): -${h}${((o.unitSubtotal-o.discountedUnitPrice)*o.quantity).toFixed(2)}
`:""}--------------------------------------------------
Unit Price: ${h}${o.finalUnitPrice.toFixed(2)} each
Subtotal: ${h}${o.finalOrderTotal.toFixed(2)}
${o.gstAmount>0?`Estimated Sales Tax (${s.gstPercent||7}%): ${h}${o.gstAmount.toFixed(2)}
Total (Inc. Sales Tax): ${h}${o.finalTotalWithGst.toFixed(2)}`:`Total: ${h}${o.finalOrderTotal.toFixed(2)}`}

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
${s.shopPhone||""} | ${s.shopAddress||""}`}function Qn(n,t,i="Valued Customer"){const e=t.currency==="USD",o=e?"$":"₹",a=n.shopSettings,s=`PRJ-${Math.floor(1e3+Math.random()*9e3)}`,c=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});let r="";for(let p=0;p<n.items.length;p++){const g=n.items[p],I=g.partGeometry.units==="inch"?`${g.partGeometry.boundingBox.width.toFixed(2)}" × ${g.partGeometry.boundingBox.height.toFixed(2)}"`:`${g.partGeometry.boundingBox.width.toFixed(0)} × ${g.partGeometry.boundingBox.height.toFixed(0)} mm`;r+=`${p+1}. ${g.partGeometry.name}
   Specs: ${g.materialName} (${g.gaugeThicknessMm}mm / ${I})
   Qty: ${g.quantity} pcs @ ${o}${g.unitQuote.finalUnitPrice.toFixed(2)} = ${o}${g.totalPrice.toFixed(2)}

`}const h=e?`${(t.totalCutLengthMeters*39.3701).toFixed(1)} inches`:`${t.totalCutLengthMeters} meters`,d=e?`${(t.totalNetPartMassKg*2.20462).toFixed(2)} lbs`:`${t.totalNetPartMassKg} kg`,l=t.nestingResult.sheetSize.name.split(" - ")[0]||"Standard Sheet";return`Subject: Quotation: ${n.projectName||"Sheet Metal Project RFQ"} (Ref #${s}) — ${a.shopName}

Dear ${i||n.customerName||"Valued Customer"},

Thank you for submitting your multi-part assembly RFQ to ${a.shopName}. We have processed your CAD geometries through our automated nesting and quoting engine:

PROJECT SUMMARY
--------------------------------------------------
Project: ${n.projectName||"Laser Cut Assembly"}
Quote Ref: ${s}
Date: ${c}
Valid For: 15 Calendar Days
Total Line Items: ${t.totalItemsCount} parts (${t.totalPartsCount} total pieces)

BILL OF MATERIALS (BOM):
--------------------------------------------------
${r}--------------------------------------------------
SHEET NESTING & MATERIAL EFFICIENCY:
• Sheet Stock: ${t.nestingResult.sheetsRequired} Sheet(s) of ${l}
• Material Utilization: ${t.nestingResult.sheetUtilizationPercent}%
• Total Laser Cut Length: ${h} (${t.totalPierces} total pierces)
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
${a.shopPhone||""} | ${a.shopAddress||""}`}function ro(n,t=2500,i=.25,e){const o=[],a=t/60,c=n.units==="inch"?25.4:1,r=new Set(e||n.deselectedHoleIndices||[]);let h=0;for(let y=0;y<n.innerHoles.length;y++){if(r.has(y))continue;const I=n.innerHoles[y];if(h++,"radius"in I){const b=I,D=2*Math.PI*b.radius*c,N={x:b.center.x,y:b.center.y},C=[{type:"arc",center:b.center,radius:b.radius,startAngle:0,endAngle:2*Math.PI,counterClockwise:!0}];o.push({stepIndex:h,originalHoleIndex:y,label:`Inner Hole #${y+1} (Ø${(b.radius*2).toFixed(n.units==="inch"?2:1)}${n.units==="inch"?"in":"mm"})`,layerName:"Layer 1 (Yellow)",layerColor:"#eab308",isOuter:!1,piercePoint:N,segments:C,lengthMm:D,simulatedDurationSec:i+D/a})}else{const b=I,D=gn(b)*c;let N=1/0,C=1/0,W=-1/0,G=-1/0;for(const M of b.segments)M.type==="line"?(N=Math.min(N,M.start.x,M.end.x),C=Math.min(C,M.start.y,M.end.y),W=Math.max(W,M.start.x,M.end.x),G=Math.max(G,M.start.y,M.end.y)):(N=Math.min(N,M.center.x-M.radius),C=Math.min(C,M.center.y-M.radius),W=Math.max(W,M.center.x+M.radius),G=Math.max(G,M.center.y+M.radius));const E=b.segments[0],F=isFinite(N)?{x:(N+W)/2,y:(C+G)/2}:E?E.type==="line"?E.start:{x:E.center.x+E.radius*Math.cos(E.startAngle),y:E.center.y+E.radius*Math.sin(E.startAngle)}:{x:0,y:0};o.push({stepIndex:h,originalHoleIndex:y,label:`Inner Cutout #${y+1}`,layerName:"Layer 1 (Yellow)",layerColor:"#eab308",isOuter:!1,piercePoint:F,segments:b.segments,lengthMm:D,simulatedDurationSec:i+D/a})}}h++;const l=gn(n.outerContour)*c,p=n.outerContour.segments[0],g=p?p.type==="line"?p.start:{x:p.center.x+p.radius*Math.cos(p.startAngle),y:p.center.y+p.radius*Math.sin(p.startAngle)}:{x:0,y:0};return o.push({stepIndex:h,label:`Outer Perimeter (${n.name})`,layerName:"Layer 0 (White/Green)",layerColor:"#22c55e",isOuter:!0,piercePoint:g,segments:n.outerContour.segments,lengthMm:l,simulatedDurationSec:i+l/a}),o}function co(n){if("radius"in n){const{center:{x:t,y:i},radius:e}=n;return`M ${(t-e).toFixed(3)} ${i.toFixed(3)} A ${e.toFixed(3)} ${e.toFixed(3)} 0 1 0 ${(t+e).toFixed(3)} ${i.toFixed(3)} A ${e.toFixed(3)} ${e.toFixed(3)} 0 1 0 ${(t-e).toFixed(3)} ${i.toFixed(3)} Z`}return en(n)}function In(n,t={}){if(t.viewStyle==="realistic_gate"&&t.jaliParams)return Xo(n,t.jaliParams);const e=n.units==="inch"?1/25.4:1,o=n.boundingBox,a=Math.max(35*e,o.width*.14),s=Math.max(50*e,o.height*.22),c=Math.max(55*e,o.height*.24),r=Math.max(80*e,o.width*.3),h=o.minX-a,d=o.minY-c,l=o.width+a+r,p=o.height+c+s,g=t.simulationState,y=new Set(t.excludedHoleIndices||n.deselectedHoleIndices||[]),I=ro(n,2500,.25,Array.from(y)),b=n.innerHoles.length>8||n.outerContour.segments.length>30;let w="";const D=g&&g.activeStepIndex===I.length,N=g&&g.activeStepIndex>I.length,C=en(n.outerContour);w+=`<path d="${C}" fill="rgba(34, 197, 94, 0.03)" stroke="${D?"#4ade80":N?"#16a34a":"#22c55e"}" stroke-width="${D?1.8:b?1.1:1.3}" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" />`;function E(ie){let X=1/0,V=1/0,ce=-1/0,xe=-1/0;for(const te of ie.segments)te.type==="line"?(X=Math.min(X,te.start.x,te.end.x),V=Math.min(V,te.start.y,te.end.y),ce=Math.max(ce,te.start.x,te.end.x),xe=Math.max(xe,te.start.y,te.end.y)):(X=Math.min(X,te.center.x-te.radius),V=Math.min(V,te.center.y-te.radius),ce=Math.max(ce,te.center.x+te.radius),xe=Math.max(xe,te.center.y+te.radius));return isFinite(X)?{x:(X+ce)/2,y:(V+xe)/2}:{x:0,y:0}}let F=0;for(let ie=0;ie<n.innerHoles.length;ie++){const X=y.has(ie),V=n.innerHoles[ie];X||F++;const ce=!X&&g&&g.activeStepIndex===F,xe=!X&&g&&g.activeStepIndex>F,te=(t.dfmIssues||[]).filter(re=>re.holeIndex===ie||re.relatedHoleIndex===ie),ke=te.some(re=>re.severity==="error"),Pe=te.some(re=>re.severity==="warning"),be=t.highlightedHoleIndex===ie||t.highlightedHoleIndices&&t.highlightedHoleIndices.includes(ie);let ge=ce?"#facc15":xe?"#0284c7":"#38bdf8",$e="rgba(56, 189, 248, 0.02)",Me=ce?1.6:b?.95:1.15;X?(ge="#f59e0b",$e="rgba(245, 158, 11, 0.04)",Me=1):ke?(ge="#ef4444",$e="rgba(239, 68, 68, 0.07)",Me=b?1.1:1.35):Pe&&(ge="#f59e0b",$e="rgba(245, 158, 11, 0.05)",Me=b?1.05:1.25),be&&(ge="#38bdf8",$e="rgba(56, 189, 248, 0.20)",Me=1.8);const tt=X?`Hole #${ie+1} (Skipped / Excluded from Cut — Under Plate Thickness)`:`Hole #${ie+1}${te.length>0?" — "+te.map(re=>re.message).join(" | "):" (Inner Cutout)"}`,Le=X?`stroke-dasharray="${3*e},${2*e}" opacity="0.6"`:"";if(w+=`<g class="cad-hole cad-hole-${ie} ${X?"hole-excluded":""} ${Pe?"dfm-hole-warning":""} ${ke?"dfm-hole-error":""} ${be?"hole-highlighted":""}" data-hole-index="${ie}" style="cursor: pointer;">`,w+=`<title>${tt}</title>`,"radius"in V){const re=V;be&&(w+=`<circle cx="${re.center.x}" cy="${re.center.y}" r="${re.radius+4*e}" fill="none" stroke="#38bdf8" stroke-width="1.5" vector-effect="non-scaling-stroke" stroke-dasharray="3,2">
          <animate attributeName="opacity" values="1;0.4;1" dur="0.9s" repeatCount="indefinite" />
        </circle>`),w+=`<circle cx="${re.center.x}" cy="${re.center.y}" r="${re.radius}" fill="${$e}" stroke="${ge}" stroke-width="${Me}" vector-effect="non-scaling-stroke" ${Le} />`;const Ie=Math.min(6*e,re.radius*.5);Ie>.5*e&&!X&&(w+=`<line x1="${re.center.x-Ie}" y1="${re.center.y}" x2="${re.center.x+Ie}" y2="${re.center.y}" stroke="${Pe||ke?ge:"rgba(234, 179, 8, 0.35)"}" stroke-width="0.75" vector-effect="non-scaling-stroke" />`,w+=`<line x1="${re.center.x}" y1="${re.center.y-Ie}" x2="${re.center.x}" y2="${re.center.y+Ie}" stroke="${Pe||ke?ge:"rgba(234, 179, 8, 0.35)"}" stroke-width="0.75" vector-effect="non-scaling-stroke" />`)}else{const re=en(V);be&&(w+=`<path d="${re}" fill="none" stroke="#38bdf8" stroke-width="2" vector-effect="non-scaling-stroke" stroke-dasharray="4,2">
          <animate attributeName="opacity" values="1;0.4;1" dur="0.9s" repeatCount="indefinite" />
        </path>`),w+=`<path d="${re}" fill="${$e}" stroke="${ge}" stroke-width="${Me}" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" ${Le} />`}w+="</g>"}const M=(t.showCutOrder||g)&&!t.hideCamBadges;let f="";const u=n.innerHoles.length>20,m=u?Math.max(6*e,Math.min(10*e,l*.012)):Math.max(9*e,Math.min(16*e,l*.022));if(M){let ie="";for(let X=0;X<I.length;X++){const V=I[X].piercePoint;X===0?ie+=`M ${V.x.toFixed(3)} ${V.y.toFixed(3)}`:ie+=` L ${V.x.toFixed(3)} ${V.y.toFixed(3)}`}f+=`<path d="${ie}" fill="none" stroke="#38bdf8" stroke-dasharray="${3*e},${3*e}" stroke-width="${1*e}" opacity="0.45" />`;for(const X of I){const V=X.isOuter?null:X.originalHoleIndex??X.stepIndex-1;let ce=X.piercePoint;if(!X.isOuter&&V!==null&&n.innerHoles[V]){const le=n.innerHoles[V];ce="radius"in le?le.center:E(le)}const xe=g&&g.activeStepIndex===X.stepIndex,te=V!==null?(t.dfmIssues||[]).filter(le=>le.holeIndex===V||le.relatedHoleIndex===V):[],ke=te.some(le=>le.severity==="error"),Pe=te.some(le=>le.severity==="warning"),be=V!==null&&(t.highlightedHoleIndex===V||t.highlightedHoleIndices&&t.highlightedHoleIndices.includes(V));let ge=X.isOuter?"#22c55e":"#eab308",$e=xe?"#ffffff":"#0f172a",Me="#0b1120";ke?(ge="#ef4444",$e=be?"#ffffff":"#7f1d1d",Me="#ffffff"):Pe&&(ge="#f59e0b",$e=be?"#ffffff":"#78350f",Me="#0b1120"),be&&($e="#38bdf8");const tt=(xe?3*e:0)+(be?4*e:0),Le=be?`<circle cx="0" cy="0" r="${m+7*e}" fill="none" stroke="#38bdf8" stroke-width="${2*e}">
             <animate attributeName="r" values="${m+5*e};${m+9*e}" dur="0.8s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="indefinite" />
           </circle>`:"",re=(Pe||ke)&&!be?`<circle cx="0" cy="0" r="${m+3.5*e}" fill="none" stroke="${ke?"#ef4444":"#f59e0b"}" stroke-width="${1.2*e}" stroke-dasharray="${2*e},${2*e}" />`:"",Ie=X.isOuter?`Outer Perimeter Cut (Step #${X.stepIndex})`:`Hole #${X.stepIndex}${te.length>0?" — "+te.map(le=>le.message).join(" | "):" (Inner Cutout)"}`,nt=m*(u?.95:1.1);f+=`
        <g class="cam-badge ${V!==null?`cam-badge-hole-${V}`:"cam-badge-outer"} ${Pe?"cam-badge-warning":""} ${ke?"cam-badge-error":""}" 
           ${V!==null?`data-hole-index="${V}"`:""} 
           transform="translate(${ce.x}, ${ce.y}) scale(1, -1)" 
           style="cursor: pointer;">
           <title>${Ie}</title>
           ${Le}
           ${re}
           <circle cx="0" cy="0" r="${m+tt}" fill="${ge}" stroke="${$e}" stroke-width="${(xe||be?2.2:1.2)*e}" />
           <text x="0" y="${nt*.35}" text-anchor="middle" font-size="${nt}" font-family="'JetBrains Mono', monospace" font-weight="800" fill="${Me}">
             ${X.stepIndex}
           </text>
         </g>
      `}}else for(let ie=0;ie<n.innerHoles.length;ie++){const X=(t.dfmIssues||[]).filter(ce=>ce.holeIndex===ie||ce.relatedHoleIndex===ie),V=t.highlightedHoleIndex===ie||t.highlightedHoleIndices&&t.highlightedHoleIndices.includes(ie);if(X.length>0||V){const ce=n.innerHoles[ie],xe="radius"in ce?ce.center:E(ce),te=X.some(Me=>Me.severity==="error"),ke=V?"#38bdf8":te?"#ef4444":"#f59e0b",Pe=V?"#ffffff":te?"#7f1d1d":"#78350f",be=te?"#ffffff":"#0b1120",ge=m*1.15,$e=V?`<circle cx="0" cy="0" r="${ge+6*e}" fill="none" stroke="#38bdf8" stroke-width="${2*e}">
               <animate attributeName="r" values="${ge+4*e};${ge+8*e}" dur="0.8s" repeatCount="indefinite" />
               <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="indefinite" />
             </circle>`:"";f+=`
          <g class="cam-badge dfm-hole-badge cam-badge-hole-${ie}" 
             data-hole-index="${ie}" 
             transform="translate(${xe.x}, ${xe.y}) scale(1, -1)" 
             style="cursor: pointer;">
            <title>Hole #${ie+1}: ${X.map(Me=>Me.message).join(" | ")}</title>
            ${$e}
            <circle cx="0" cy="0" r="${ge+3*e}" fill="none" stroke="${te?"#ef4444":"#f59e0b"}" stroke-width="${1.2*e}" stroke-dasharray="${2*e},${2*e}" />
            <circle cx="0" cy="0" r="${ge}" fill="${ke}" stroke="${Pe}" stroke-width="${1.8*e}" />
            <text x="0" y="${ge*1.1*.35}" text-anchor="middle" font-size="${ge*1.1}" font-family="'JetBrains Mono', monospace" font-weight="800" fill="${be}">
              ${ie+1}
            </text>
          </g>
        `}}let P="";if(g&&g.nozzlePos){const ie=g.nozzlePos.x,X=g.nozzlePos.y,V=g.isPiercing,ce=V?18*e:0,xe=V?`<circle cx="0" cy="0" r="${ce}" fill="none" stroke="#f97316" stroke-width="${2.5*e}" opacity="0.8">
           <animate attributeName="r" values="${6*e};${22*e}" dur="0.3s" repeatCount="indefinite" />
           <animate attributeName="opacity" values="1;0" dur="0.3s" repeatCount="indefinite" />
         </circle>`:"";P=`
      <!-- Active Laser Nozzle -->
      <g class="laser-nozzle-head" transform="translate(${ie}, ${X})">
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
    `}const S=n.units,L="#94a3b8",_=Math.max(l,p),$=Math.max(14*e,_*.028),v=Math.max(20*e,_*.025),B=1.5*e,O=8*e,Y=3.5*e,z=o.maxY+s*.55,ae=`
    <g class="dim-leader" stroke="${L}" stroke-width="${B}" fill="${L}">
      <line x1="${o.minX}" y1="${o.maxY}" x2="${o.minX}" y2="${z+O}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${o.maxX}" y1="${o.maxY}" x2="${o.maxX}" y2="${z+O}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${o.minX}" y1="${z}" x2="${o.maxX}" y2="${z}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${(o.minX+o.maxX)/2}" y="${z+$*.9}" text-anchor="middle" font-size="${$}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#0b1120" stroke-width="${Y}" paint-order="stroke fill" letter-spacing="0.02em">
        ${o.width.toFixed(2)} ${S}
      </text>
    </g>
  `,ye=o.maxX+v,Je=`
    <g class="dim-leader" stroke="${L}" stroke-width="${B}" fill="${L}">
      <line x1="${o.maxX}" y1="${o.minY}" x2="${ye+O}" y2="${o.minY}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${o.maxX}" y1="${o.maxY}" x2="${ye+O}" y2="${o.maxY}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${ye}" y1="${o.minY}" x2="${ye}" y2="${o.maxY}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text transform="translate(${ye+$*.75}, ${(o.minY+o.maxY)/2}) rotate(-90)" text-anchor="middle" dominant-baseline="central" font-size="${$}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#0b1120" stroke-width="${Y}" paint-order="stroke fill" letter-spacing="0.02em">
        ${o.height.toFixed(2)} ${S}
      </text>
    </g>
  `,Qe=Math.max(10*e,l/20);return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${h} ${d} ${l} ${p}" width="100%" height="100%" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" style="background-color: #0b1120; border-radius: 8px;">
      <defs>
        <pattern id="cadGrid" width="${Qe}" height="${Qe}" patternUnits="userSpaceOnUse">
          <path d="M ${Qe} 0 L 0 0 0 ${Qe}" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="${1*e}"/>
        </pattern>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
        </marker>
      </defs>
      <rect x="${h}" y="${d}" width="${l}" height="${p}" fill="url(#cadGrid)" />
      
      <!-- Part Paths (Y flipped for CAD orientation) -->
      <g transform="translate(0, ${o.minY+o.maxY}) scale(1, -1)">
        <!-- Green dashed bounding box envelope (FabEngineer / CAM standard) -->
        <rect x="${o.minX}" y="${o.minY}" width="${o.width}" height="${o.height}" fill="none" stroke="#22c55e" stroke-dasharray="${3*e},${3*e}" stroke-width="${1*e}" opacity="0.4" />
        ${w}
        ${f}
        ${P}
      </g>

      <!-- Dimensions -->
      ${ae}
      ${Je}
    </svg>
  `}function Xo(n,t){const i=t.units==="inch",e=i?1/25.4:1,o=n.boundingBox.width,a=n.boundingBox.height,s=t.finishMaterial||"matte_black",c=t.backlightColor||"warm_white",r=t.gateType||"single_swing",h=r==="double_swing",d=r==="wall_panel",l=!d&&t.hasFrameTube!==!1,p=t.frameTubeWidthMm??(i?2:50),g=i?p>10?p/25.4:p:p<10?p*25.4:p,y=l?g:0,I=!d&&!!t.hasKickPlate,b=t.kickPlateHeightMm??(i?12:300),w=i?b>30?b/25.4:b:b<30?b*25.4:b,D=I?Math.max(0,Math.min(a*.4,w)):0,N=!d&&t.hasHinges!==!1,C=!d&&t.hasPullHandle!==!1,W=!d&&t.hasLockBox!==!1,G=o+(l?2*y:0),E=a+(l?2*y:0),F=h?i?.6:15:0,M=h?G*2+F:G,f=E,u=Math.max(M,f),m=Math.max(16*e,u*.03),P=Math.max(16*e,u*.034),S=Math.max(7*e,u*.011),L=Math.max(36*e,u*.045),_=Math.max(32*e,u*.04),$=Math.max(45*e,M*.12),v=Math.max(45*e,_+m*3.8),B=Math.max(55*e,f*.08,P*2.8),O=Math.max(55*e,L+m*2.4),Y=-$,z=-B,ae=M+$+v,ye=f+B+O,Je=en(n.outerContour),Qe=n.innerHoles.map(co).join(" "),ie=`${Je} ${Qe}`;let X="#475569",V="#334155",ce="#94a3b8";s==="royal_gold"?(X="#fef08a",V="#b45309",ce="#fde047"):s==="corten_rust"?(X="#fdba74",V="#7c2d12",ce="#ea580c"):s==="brushed_stainless"?(X="#ffffff",V="#475569",ce="#e2e8f0"):s==="champagne_bronze"&&(X="#fcd34d",V="#78350f",ce="#fbbf24");const xe=(Ie,nt=!1)=>{const le=Ie+(l?y:0),Xe=l?y:0;let Ne="";if(c!=="none"&&(Ne+=`
        <rect x="${le}" y="${Xe}" width="${o}" height="${a}" 
              fill="url(#glow_${c})" filter="url(#backlightBlur)" opacity="0.9" rx="${3*e}" />
      `),Ne+=`
      <g transform="translate(${le}, ${Xe})">
        <!-- Negative space perforated sheet metal plate -->
        <path d="${ie}" fill-rule="evenodd" fill="url(#mat_${s})" 
              filter="url(#plateShadow)" stroke="${X}" stroke-width="${.8*e}" stroke-opacity="0.6" />
        <!-- Inner cutout specular rim highlight -->
        <path d="${Qe}" fill="none" stroke="${X}" stroke-width="${.6*e}" stroke-opacity="0.4" />
      </g>
    `,I&&D>0){const de=Xe+a-D;Ne+=`
        <!-- Solid Bottom Kickplate -->
        <g class="kickplate">
          <rect x="${le}" y="${de}" width="${o}" height="${D}" 
                fill="url(#mat_${s})" stroke="${V}" stroke-width="${1.2*e}" />
          <!-- Embossed horizontal reveal grooves -->
          <line x1="${le+15*e}" y1="${de+D*.35}" x2="${le+o-15*e}" y2="${de+D*.35}" 
                stroke="${X}" stroke-width="${1.5*e}" stroke-opacity="0.5" />
          <line x1="${le+15*e}" y1="${de+D*.65}" x2="${le+o-15*e}" y2="${de+D*.65}" 
                stroke="${X}" stroke-width="${1.5*e}" stroke-opacity="0.5" />
          <!-- Corner fabrication rivet studs -->
          <circle cx="${le+12*e}" cy="${de+12*e}" r="${3*e}" fill="${ce}" opacity="0.8" />
          <circle cx="${le+o-12*e}" cy="${de+12*e}" r="${3*e}" fill="${ce}" opacity="0.8" />
          <circle cx="${le+12*e}" cy="${de+D-12*e}" r="${3*e}" fill="${ce}" opacity="0.8" />
          <circle cx="${le+o-12*e}" cy="${de+D-12*e}" r="${3*e}" fill="${ce}" opacity="0.8" />
        </g>
      `}if(l){const de=Ie,ue=0;Ne+=`
        <!-- Structural Box Tube Outer Frame -->
        <g class="box-tube-frame" filter="url(#frameShadow)">
          <!-- Top horizontal tube -->
          <rect x="${de}" y="${ue}" width="${G}" height="${y}" fill="url(#tube_${s}_h)" stroke="${V}" stroke-width="${1.2*e}" />
          <!-- Bottom horizontal tube -->
          <rect x="${de}" y="${ue+E-y}" width="${G}" height="${y}" fill="url(#tube_${s}_h)" stroke="${V}" stroke-width="${1.2*e}" />
          <!-- Left vertical tube -->
          <rect x="${de}" y="${ue+y}" width="${y}" height="${E-2*y}" fill="url(#tube_${s}_v)" stroke="${V}" stroke-width="${1.2*e}" />
          <!-- Right vertical tube -->
          <rect x="${de+G-y}" y="${ue+y}" width="${y}" height="${E-2*y}" fill="url(#tube_${s}_v)" stroke="${V}" stroke-width="${1.2*e}" />
          
          <!-- Mitred 45-degree corner weld seams -->
          <line x1="${de}" y1="${ue}" x2="${de+y}" y2="${ue+y}" stroke="${X}" stroke-width="${1.2*e}" stroke-opacity="0.7" />
          <line x1="${de+G}" y1="${ue}" x2="${de+G-y}" y2="${ue+y}" stroke="${X}" stroke-width="${1.2*e}" stroke-opacity="0.7" />
          <line x1="${de}" y1="${ue+E}" x2="${de+y}" y2="${ue+E-y}" stroke="${X}" stroke-width="${1.2*e}" stroke-opacity="0.7" />
          <line x1="${de+G}" y1="${ue+E}" x2="${de+G-y}" y2="${ue+E-y}" stroke="${X}" stroke-width="${1.2*e}" stroke-opacity="0.7" />
        </g>
      `}if(N){const ue=!nt?Ie-6*e:Ie+G-6*e,He=[E*.15,E*.85];E>(i?48:1200)&&He.splice(1,0,E*.5);for(const Te of He)Ne+=`
          <!-- Bullet Barrel Hinge -->
          <g class="bullet-hinge" transform="translate(${ue}, ${Te-24*e})">
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
        `}if(C||W){const de=nt,ue=de?Ie+(l?y/2:25*e):Ie+G-(l?y/2:25*e),He=E*.5;if(W){const Te=Math.max(30*e,y*.8),it=90*e,Fe=de?Ie+(l?4*e:8*e):Ie+G-(l?y-4*e:38*e);Ne+=`
          <!-- Lock Box & Keyway -->
          <g class="lockbox" transform="translate(${Fe}, ${He-it/2})">
            <rect x="0" y="0" width="${Te}" height="${it}" rx="${4*e}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1.2*e}" />
            <!-- Key cylinder -->
            <circle cx="${Te/2}" cy="${28*e}" r="${7*e}" fill="#1e293b" stroke="#64748b" stroke-width="${1*e}" />
            <rect x="${Te/2-2*e}" y="${28*e}" width="${4*e}" height="${9*e}" fill="#0f172a" />
            <!-- Modern lever latch -->
            <rect x="${de?Te/2-18*e:Te/2+2*e}" y="${58*e}" width="${20*e}" height="${7*e}" rx="${2*e}" fill="#e2e8f0" stroke="#0f172a" stroke-width="${.8*e}" />
          </g>
        `}if(C){const Te=Math.min(E*.45,600*e),it=(de?28:-28)*e,Fe=ue+it;Ne+=`
          <!-- Sleek Architectural Bar Pull Handle -->
          <g class="pull-handle">
            <!-- Standoff brackets -->
            <rect x="${ue<Fe?ue:Fe}" y="${He-Te/2+15*e}" width="${Math.abs(Fe-ue)}" height="${10*e}" fill="#475569" stroke="#0f172a" stroke-width="${.8*e}" />
            <rect x="${ue<Fe?ue:Fe}" y="${He+Te/2-25*e}" width="${Math.abs(Fe-ue)}" height="${10*e}" fill="#475569" stroke="#0f172a" stroke-width="${.8*e}" />
            <!-- Vertical Cylindrical T-Bar -->
            <rect x="${Fe-6*e}" y="${He-Te/2}" width="${12*e}" height="${Te}" rx="${6*e}" 
                  fill="url(#mat_brushed_stainless)" stroke="#1e293b" stroke-width="${1.2*e}" filter="url(#handleShadow)" />
            <!-- Specular sheen -->
            <line x1="${Fe-2*e}" y1="${He-Te/2+4*e}" x2="${Fe-2*e}" y2="${He+Te/2-4*e}" stroke="#ffffff" stroke-width="${1*e}" opacity="0.75" />
          </g>
        `}}if(d){const de=Math.max(8*e,o*.018),ue=[{x:le+25*e,y:Xe+25*e},{x:le+o-25*e,y:Xe+25*e},{x:le+o-25*e,y:Xe+a-25*e},{x:le+25*e,y:Xe+a-25*e}];a>(i?36:900)&&(ue.push({x:le+25*e,y:Xe+a/2}),ue.push({x:le+o-25*e,y:Xe+a/2}));for(const He of ue)Ne+=`
          <!-- Stainless Standoff Screw Head -->
          <g class="standoff-mount" transform="translate(${He.x}, ${He.y})">
            <circle cx="0" cy="0" r="${de}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1.2*e}" filter="url(#handleShadow)" />
            <!-- Hex Socket -->
            <polygon points="${-3*e},${-1.7*e} 0,${-3.4*e} ${3*e},${-1.7*e} ${3*e},${1.7*e} 0,${3.4*e} ${-3*e},${1.7*e}" fill="#1e293b" />
          </g>
        `}return Ne};let te="";h?(te+=xe(0,!1),te+=xe(G+F,!0),te+=`
      <!-- Double Swing Center Slide Drop Bolt -->
      <g class="center-drop-bolt" transform="translate(${G+F/2-12*e}, ${4*e})">
        <rect x="0" y="0" width="${24*e}" height="${42*e}" rx="${3*e}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1*e}" />
        <rect x="${9*e}" y="${8*e}" width="${6*e}" height="${24*e}" rx="${2*e}" fill="#cbd5e1" />
      </g>
    `):te+=xe(0,!1);const ke=t.units,Pe="#94a3b8",be=f+L*.6,ge=`
    <g class="dim-leader" stroke="${Pe}" stroke-width="${1.6*e}" fill="${Pe}">
      <line x1="0" y1="${f+8*e}" x2="0" y2="${be+10*e}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${M}" y1="${f+8*e}" x2="${M}" y2="${be+10*e}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="0" y1="${be}" x2="${M}" y2="${be}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${M/2}" y="${be+m*.9}" text-anchor="middle" font-size="${m}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#080c14" stroke-width="${4.5*e}" paint-order="stroke fill" letter-spacing="0.02em">
        ${M.toFixed(i?2:0)} ${ke} ${h?`(2× ${G.toFixed(i?2:0)} ${ke} Leaves)`:""}
      </text>
    </g>
  `,$e=M+_*.6,Me=`
    <g class="dim-leader" stroke="${Pe}" stroke-width="${1.6*e}" fill="${Pe}">
      <line x1="${M+8*e}" y1="0" x2="${$e+10*e}" y2="0" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${M+8*e}" y1="${f}" x2="${$e+10*e}" y2="${f}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${$e}" y1="0" x2="${$e}" y2="${f}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text transform="translate(${$e+m*.75}, ${f/2}) rotate(-90)" text-anchor="middle" dominant-baseline="central" font-size="${m}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#080c14" stroke-width="${4.5*e}" paint-order="stroke fill" letter-spacing="0.02em">
        ${f.toFixed(i?2:0)} ${ke}
      </text>
    </g>
  `,tt=s.replace(/_/g," ").toUpperCase(),Le=(t.patternType||"architectural_jali").replace(/_/g," ").toUpperCase(),re=h?"DOUBLE SWING ENTRANCE GATE":d?"WALL JALI SCREEN PANEL":"SINGLE SWING GATE";return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${Y} ${z} ${ae} ${ye}" width="100%" height="100%" style="background-color: #080c14; border-radius: 8px;">
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

        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="${S}" markerHeight="${S}" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
        </marker>
      </defs>

      <!-- Architectural Backdrop Wall with subtle ambient spotlight -->
      <radialGradient id="studioSpotlight" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stop-color="#141c2e" />
        <stop offset="60%" stop-color="#0b1120" />
        <stop offset="100%" stop-color="#050811" />
      </radialGradient>
      <rect x="${Y}" y="${z}" width="${ae}" height="${ye}" fill="url(#studioSpotlight)" />

      <!-- Top Architectural Badge Label -->
      <g class="studio-title-badge" transform="translate(${M/2}, ${-B*.45})">
        <text text-anchor="middle" font-size="${P}" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" fill="#f1f5f9" stroke="#080c14" stroke-width="${5*e}" paint-order="stroke fill" letter-spacing="0.05em">
          ✨ ${re} — ${tt} | ${Le}
        </text>
      </g>

      <!-- Ground Baseline Reference -->
      <line x1="${-$*.3}" y1="${f+2*e}" x2="${M+v*.3}" y2="${f+2*e}" stroke="#334155" stroke-width="${1.5*e}" stroke-dasharray="${6*e},${4*e}" opacity="0.6" />

      <!-- Gate Leaves & Structure -->
      ${te}

      <!-- Dimension Leaders -->
      ${ge}
      ${Me}
    </svg>
  `}function Ko(n,t=0){const i=n.sheetSize.widthMm,e=n.sheetSize.lengthMm,o=i*.08,a=e*.08,s=i+2*o,c=e+2*a;let r="";const h=n.packedParts.filter(g=>g.sheetIndex===t),d=["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"];for(const g of h){const y=g.color||d[g.partIndex%d.length],I=g.rotated,b=g.partName?`${g.partName}`:`#${g.partIndex+1}`,w=Math.max(11,Math.min(g.width,g.height)*.16);r+=`
      <g class="nested-part" id="part_${g.id}">
        <rect x="${g.x}" y="${g.y}" width="${g.width}" height="${g.height}" 
              fill="${y}25" stroke="${y}" stroke-width="2" rx="2" />
        <text x="${g.x+g.width/2}" y="${g.y+g.height/2-2}" 
              text-anchor="middle" font-size="${w}" 
              font-family="'JetBrains Mono', monospace" fill="#ffffff" font-weight="bold">
          ${b}
        </text>
        <text x="${g.x+g.width/2}" y="${g.y+g.height/2+w}" 
              text-anchor="middle" font-size="${Math.max(9,w*.75)}" 
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${-o} ${-a} ${s} ${c}" width="100%" height="100%" style="background-color: #0b1120; border-radius: 8px;">
      <defs>
        <pattern id="nestGrid" width="${Math.max(50,s/20)}" height="${Math.max(50,c/20)}" patternUnits="userSpaceOnUse">
          <path d="M ${Math.max(50,s/20)} 0 L 0 0 0 ${Math.max(50,c/20)}" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
        </pattern>
      </defs>
      
      <!-- Background Grid -->
      <rect x="${-o}" y="${-a}" width="${s}" height="${c}" fill="url(#nestGrid)" />

      <!-- Full Sheet Boundary -->
      <rect x="0" y="0" width="${i}" height="${e}" fill="rgba(15, 23, 42, 0.85)" stroke="#64748b" stroke-width="3" rx="4" />

      <!-- Sheet Margin Guide -->
      <rect x="10" y="10" width="${i-20}" height="${e-20}" fill="none" stroke="rgba(100, 116, 139, 0.4)" stroke-dasharray="6,6" stroke-width="1" />

      <!-- Packed Parts -->
      ${r}

      <!-- Remnant Offcut -->
      ${l}

      <!-- Sheet Title & Dimensions -->
      <text x="${i/2}" y="-20" text-anchor="middle" font-size="${Math.max(16,i*.028)}" font-family="'JetBrains Mono', monospace" fill="#f8fafc" font-weight="700">
        ${n.sheetSize.name.toUpperCase()} (Sheet ${t+1} of ${n.sheetsRequired})
      </text>
      <text x="${i/2}" y="${e+35}" text-anchor="middle" font-size="${Math.max(14,i*.022)}" font-family="'JetBrains Mono', monospace" fill="#94a3b8">
        Utilization: ${n.sheetUtilizationPercent}% | Skeleton Scrap: ${n.totalSkeletonScrapMassKg} kg | Parts on Bed: ${h.length} / ${n.partsRequested}
      </text>
    </svg>
  `}function en(n){if(n.segments.length===0)return"";const t=[];for(let i=0;i<n.segments.length;i++){const e=n.segments[i];if(i===0){const o=e.type==="line"?e.start:{x:e.center.x+e.radius*Math.cos(e.startAngle),y:e.center.y+e.radius*Math.sin(e.startAngle)};t.push(`M ${o.x.toFixed(3)} ${o.y.toFixed(3)}`)}if(e.type==="line")t.push(`L ${e.end.x.toFixed(3)} ${e.end.y.toFixed(3)}`);else if(e.type==="arc"){const o=e.center.x+e.radius*Math.cos(e.endAngle),a=e.center.y+e.radius*Math.sin(e.endAngle);let s=e.endAngle-e.startAngle;e.counterClockwise?s<0&&(s+=2*Math.PI):s>0&&(s-=2*Math.PI);const c=Math.abs(s)>Math.PI?1:0,r=e.counterClockwise?1:0;t.push(`A ${e.radius.toFixed(3)} ${e.radius.toFixed(3)} 0 ${c} ${r} ${o.toFixed(3)} ${a.toFixed(3)}`)}}return n.isClosed&&t.push("Z"),t.join(" ")}function Vo(n,t=44){const i=n.boundingBox,e=Math.max(i.width,i.height)*.08||1,o=i.minX-e,a=i.minY-e,s=i.width+e*2||1,c=i.height+e*2||1,r=en(n.outerContour);let h="";if(n.innerHoles)for(const p of n.innerHoles)h+=co(p)+" ";const d=Math.max(s,c)*.035,l=Math.max(s,c)*.025;return`<svg width="${t}" height="${t}" viewBox="${o.toFixed(2)} ${a.toFixed(2)} ${s.toFixed(2)} ${c.toFixed(2)}" xmlns="http://www.w3.org/2000/svg" style="display:block;border-radius:4px;background:#090d16;flex-shrink:0;">
    <path d="${r}" fill="rgba(34, 197, 94, 0.15)" stroke="#22c55e" stroke-width="${d}" vector-effect="non-scaling-stroke" stroke-linejoin="round" />
    ${h?`<path d="${h}" fill="#090d16" stroke="#38bdf8" stroke-width="${l}" vector-effect="non-scaling-stroke" stroke-linejoin="round" />`:""}
  </svg>`}function Jo(n,t,i,e,o,a,s="Valued Customer",c=""){const r=o.currency==="INR",h=r?"₹":"$",d=r?`INV-${Math.floor(1e5+Math.random()*9e5)}`:`RFQ-${Math.floor(1e5+Math.random()*9e5)}`,l=r?new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),p=a.upiId||"shop@upi",g=o.finalTotalWithGst,y=Math.round(g/2*100)/100,I=`upi://pay?pa=${encodeURIComponent(p)}&pn=${encodeURIComponent(a.shopName)}&am=${y.toFixed(2)}&cu=INR&tn=${encodeURIComponent(d)}`,b=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(I)}`,w=r?`Dim: ${t.boundingBoxWidthMm.toFixed(0)} × ${t.boundingBoxHeightMm.toFixed(0)} mm | Thick: ${e.thicknessMm} mm<br>Grade: ${i} (${e.gaugeName}) | Gas: ${a.assistGas.toUpperCase()}<br>Cut Length: ${(t.totalCutLengthMm/1e3).toFixed(2)} m | Pierces: ${t.pierceCount} / pc`:`Dim: ${t.boundingBoxWidthInches.toFixed(2)}" × ${t.boundingBoxHeightInches.toFixed(2)}" | Gauge: ${e.gaugeName}<br>Grade: ${i} | Gas: ${a.assistGas.toUpperCase()}<br>Cut Length: ${t.totalCutLengthInches.toFixed(1)} in | Pierces: ${t.pierceCount} / pc | Est. Weight: ${t.theoreticalWeightLbs.toFixed(2)} lbs`;return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${r?"Proforma Invoice":"Commercial Quotation"} - ${d}</title>
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
            <div>${a.shopAddress||(r?"MIDC Industrial Area, Pune, Maharashtra":"1420 Industrial Pkwy, Cleveland, OH 44135")}</div>
            <div>Phone: ${a.shopPhone||(r?"+91 98220 12345":"(216) 555-0198")} ${r?`| UPI: <strong>${p}</strong>`:""}</div>
            ${r?`<div>GSTIN: <strong>${a.shopGstin||"27AABCS1429B1Z8"}</strong> | State Code: 27 (MH)</div>`:`<div>NAICS: <strong>${a.naicsCode||"332813"}</strong> | Tax ID / EIN: <strong>${a.einOrTaxId||"Verified"}</strong></div>`}
          </div>
        </div>
      </div>
      <div class="invoice-tag">
        <h2 class="invoice-title">${r?"PROFORMA INVOICE":"COMMERCIAL MANUFACTURING QUOTATION"}</h2>
        <div class="invoice-meta">
          <div>Ref No: <strong>${d}</strong></div>
          <div>Date: <strong>${l}</strong></div>
          <div>${r?`SAC/HSN: <strong>${o.hsnSacCode.split(" ")[0]}</strong>`:`NAICS: <strong>${a.naicsCode?a.naicsCode.split(" ")[0]:"332813"}</strong> | Validity: <strong>15 Days</strong>`}</div>
        </div>
      </div>
    </div>

    <div class="bill-to-box">
      <strong>Customer:</strong> ${s} ${c?`(${c})`:""} — <em>Delivery: ${r?"Ex-Works / 24-48 Hours":"FOB Origin / 3-5 Business Days"}</em>
    </div>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Item Description & Specs</th>
          <th class="text-center">Mode</th>
          <th class="text-right">Qty</th>
          <th class="text-right">Unit Rate</th>
          <th class="text-right">Amount (${h})</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <strong>${n.name}</strong><br>
            <span style="font-size: 12px; color: #64748b;">
              ${w}
            </span>
          </td>
          <td class="text-center"><span style="background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 700;">${r?o.quotingMode.toUpperCase():"CUSTOM FAB"}</span></td>
          <td class="text-right">${o.quantity}</td>
          <td class="text-right">${h}${o.discountedUnitPrice.toFixed(2)}</td>
          <td class="text-right"><strong>${h}${(o.discountedUnitPrice*o.quantity).toFixed(2)}</strong></td>
        </tr>
        ${o.unitSecondaryCost>0?`
        <tr>
          <td>2</td>
          <td>
            <strong>Secondary Value-Add Operations</strong><br>
            <span style="font-size: 12px; color: #64748b;">
              ${o.secondaryBreakdown.bendingCost>0?`CNC Press Brake Bending (${h}${o.secondaryBreakdown.bendingCost}) | `:""}
              ${o.secondaryBreakdown.deburringCost>0?`Edge Deburring (${h}${o.secondaryBreakdown.deburringCost}) | `:""}
              ${o.secondaryBreakdown.tappingCost>0?`Tapping (${h}${o.secondaryBreakdown.tappingCost}) | `:""}
              ${o.secondaryBreakdown.surfaceFinishCost>0?`Surface Finishing (${h}${o.secondaryBreakdown.surfaceFinishCost})`:""}
            </span>
          </td>
          <td class="text-center"><span style="background: #f1f5f9; color: #475569; padding: 3px 8px; border-radius: 4px; font-size: 11px;">VALUE-ADD</span></td>
          <td class="text-right">${o.quantity}</td>
          <td class="text-right">${h}${o.unitSecondaryCost.toFixed(2)}</td>
          <td class="text-right"><strong>${h}${(o.unitSecondaryCost*o.quantity).toFixed(2)}</strong></td>
        </tr>`:""}
      </tbody>
    </table>

    <div class="summary-grid">
      ${r?`
      <div class="upi-box">
        <div class="upi-title">Scan to Pay 50% Advance</div>
        <img src="${b}" alt="UPI QR Code">
        <div class="upi-sub">GPay / PhonePe / Paytm<br>Advance: <strong>${h}${y.toFixed(2)}</strong></div>
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
          <td class="text-right">${h}${o.finalOrderTotal.toFixed(2)}</td>
        </tr>
        ${r?a.isInterstateSale?`
        <tr>
          <td>Integrated GST (IGST 18%):</td>
          <td class="text-right">${h}${o.igstAmount.toFixed(2)}</td>
        </tr>`:`
        <tr>
          <td>Central GST (CGST 9%):</td>
          <td class="text-right">${h}${o.cgstAmount.toFixed(2)}</td>
        </tr>
        <tr>
          <td>State GST (SGST 9%):</td>
          <td class="text-right">${h}${o.sgstAmount.toFixed(2)}</td>
        </tr>`:a.salesTaxExempt?`
        <tr>
          <td>Sales Tax (Tax-Exempt):</td>
          <td class="text-right">$0.00</td>
        </tr>
        `:`
        <tr>
          <td>Estimated Sales Tax (${a.gstPercent||7}%):</td>
          <td class="text-right">${h}${o.gstAmount.toFixed(2)}</td>
        </tr>
        `}
        <tr class="total-row">
          <td>Grand Total:</td>
          <td class="text-right" style="color: #0284c7;">${h}${o.finalTotalWithGst.toFixed(2)}</td>
        </tr>
      </table>
    </div>

    <div class="footer-terms">
      <strong>Terms & Conditions:</strong>
      <ol style="margin: 6px 0 0 16px; padding: 0;">
        ${r?`
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
</html>`}function Zo(n,t,i,e,o,a){const s=`JOB-${Math.floor(1e3+Math.random()*9e3)}`,c=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});return`<!DOCTYPE html>
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
      <div><strong>Card #: ${s}</strong> | Date: ${c}</div>
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
</html>`}function Oi(n,t){const i=t.currency==="INR",e=i?"₹":"$",o=n.shopSettings,a=`PRJ-${Math.floor(1e5+Math.random()*9e5)}`,s=i?new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),c=o.upiId||"shop@upi",r=t.finalTotalWithGst,h=Math.round(r/2*100)/100,d=`upi://pay?pa=${encodeURIComponent(c)}&pn=${encodeURIComponent(o.shopName)}&am=${h.toFixed(2)}&cu=INR&tn=${encodeURIComponent(a)}`,l=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(d)}`;let p="";for(let g=0;g<n.items.length;g++){const y=n.items[g],I=y.partGeometry.boundingBox,w=y.partGeometry.units==="inch"||!i?`${(I.width/(y.partGeometry.units==="inch"?1:25.4)).toFixed(2)}" × ${(I.height/(y.partGeometry.units==="inch"?1:25.4)).toFixed(2)}"`:`${I.width.toFixed(0)} × ${I.height.toFixed(0)} mm`,D=i?`${(y.metrics.totalCutLengthMm/1e3).toFixed(1)} m`:`${y.metrics.totalCutLengthInches.toFixed(1)} in`;p+=`
      <tr>
        <td class="text-center">${g+1}</td>
        <td>
          <strong>${y.partGeometry.name}</strong><br>
          <span style="font-size: 12px; color: #64748b;">
            ${w} | ${y.materialName} (${y.gaugeThicknessMm}mm) | Cut: ${D}
          </span>
        </td>
        <td class="text-center">${y.unitQuote.quotingMode==="job_work"?i?"Job Work":"Labor Only":i?"Turnkey":"Fabricated"}</td>
        <td class="text-right"><strong>${y.quantity}</strong></td>
        <td class="text-right">${e}${y.unitQuote.finalUnitPrice.toFixed(2)}</td>
        <td class="text-right"><strong>${e}${y.totalPrice.toFixed(2)}</strong></td>
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
            <div>Phone: ${o.shopPhone||(i?"+91 98220 12345":"(216) 555-0198")} ${i?`| UPI: <strong>${c}</strong>`:""}</div>
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
        <div class="upi-sub">Pay 50% Advance: <strong>${e}${h.toFixed(2)}</strong></div>
        <div class="upi-sub" style="margin-top: 4px; font-family: monospace;">${c}</div>
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
</html>`}function ea(n,t){const i=n.shopSettings,e=`JOB-${Math.floor(1e5+Math.random()*9e5)}`,o=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});let a="";for(let s=0;s<n.items.length;s++){const c=n.items[s],r=c.partGeometry.boundingBox;a+=`
      <tr>
        <td class="text-center">${s+1}</td>
        <td><strong>${c.partGeometry.name}</strong></td>
        <td>${r.width.toFixed(0)} × ${r.height.toFixed(0)} mm</td>
        <td>${c.materialName} (${c.gaugeThicknessMm}mm)</td>
        <td class="text-right"><strong>${c.quantity} pcs</strong></td>
        <td>${(c.metrics.totalCutLengthMm/1e3).toFixed(1)} m / ${c.metrics.pierceCount*c.quantity} pts</td>
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
</html>`}function ta(){const n=document.getElementById("demoVideoModal"),t=document.getElementById("btnOpenDemoModal"),i=document.getElementById("closeDemoModalBtn"),e=document.getElementById("demoLocalVideo");if(!n||!t)return;function o(){if(n.classList.remove("hidden"),e){e.currentTime=0;const s=e.play();s!==void 0&&s.catch(()=>{e.muted=!0,e.play().catch(()=>{})})}}function a(){n.classList.add("hidden"),e&&e.pause()}t.addEventListener("click",o),i==null||i.addEventListener("click",a),n.addEventListener("click",s=>{s.target===n&&a()}),window.addEventListener("keydown",s=>{s.key==="Escape"&&!n.classList.contains("hidden")&&a()})}function rn(n,t="inch",i=0){if(n==null)return i;if(typeof n=="number")return isNaN(n)?i:n;let e=n.toString().trim();if(!e)return i;const o=/mm$/i.test(e);e=e.replace(/["']|in(ch(es)?)?|mm/gi,"").trim();let a=i;const s=e.match(/^(-?\d+)\s*[-_ ]\s*(\d+)\/(\d+)$/);if(s){const c=parseFloat(s[1]),r=parseFloat(s[2]),h=parseFloat(s[3]);if(h!==0){const d=r/h;a=c>=0?c+d:c-d}}else{const c=e.match(/^(-?\d+)\/(\d+)$/);if(c){const r=parseFloat(c[1]),h=parseFloat(c[2]);h!==0&&(a=r/h)}else{const r=parseFloat(e);isNaN(r)||(a=r)}}return o&&t==="inch"&&(a=a/25.4),isNaN(a)?i:a}function Gi(n){const t=[],i=n.boundingBox,e=n.units==="inch",o=e?"in":"mm";t.push({x:i.minX,y:i.minY,type:"bbox_corner",label:"BBox Bottom-Left"},{x:i.maxX,y:i.minY,type:"bbox_corner",label:"BBox Bottom-Right"},{x:i.maxX,y:i.maxY,type:"bbox_corner",label:"BBox Top-Right"},{x:i.minX,y:i.maxY,type:"bbox_corner",label:"BBox Top-Left"},{x:(i.minX+i.maxX)/2,y:i.minY,type:"bbox_edge",label:"Bottom Edge Midpoint"},{x:(i.minX+i.maxX)/2,y:i.maxY,type:"bbox_edge",label:"Top Edge Midpoint"},{x:i.minX,y:(i.minY+i.maxY)/2,type:"bbox_edge",label:"Left Edge Midpoint"},{x:i.maxX,y:(i.minY+i.maxY)/2,type:"bbox_edge",label:"Right Edge Midpoint"},{x:(i.minX+i.maxX)/2,y:(i.minY+i.maxY)/2,type:"bbox_edge",label:"Part Center"});for(let r=0;r<n.innerHoles.length;r++){const h=n.innerHoles[r],d=r+1;if("radius"in h){const l=h,p=(l.radius*2).toFixed(e?3:1);t.push({x:l.center.x,y:l.center.y,type:"hole_center",label:`Hole #${d} Center (Ø${p}${o})`}),t.push({x:l.center.x+l.radius,y:l.center.y,type:"hole_quadrant",label:`Hole #${d} East Quadrant`},{x:l.center.x-l.radius,y:l.center.y,type:"hole_quadrant",label:`Hole #${d} West Quadrant`},{x:l.center.x,y:l.center.y+l.radius,type:"hole_quadrant",label:`Hole #${d} North Quadrant`},{x:l.center.x,y:l.center.y-l.radius,type:"hole_quadrant",label:`Hole #${d} South Quadrant`})}else{const l=h;for(const p of l.segments)if(p.type==="line")t.push({x:p.start.x,y:p.start.y,type:"vertex",label:`Cutout #${d} Vertex`},{x:p.end.x,y:p.end.y,type:"vertex",label:`Cutout #${d} Vertex`},{x:(p.start.x+p.end.x)/2,y:(p.start.y+p.end.y)/2,type:"midpoint",label:`Cutout #${d} Edge Midpoint`});else if(p.type==="arc"){const g=p.center.x+p.radius*Math.cos(p.startAngle),y=p.center.y+p.radius*Math.sin(p.startAngle),I=p.center.x+p.radius*Math.cos(p.endAngle),b=p.center.y+p.radius*Math.sin(p.endAngle);t.push({x:g,y,type:"vertex",label:`Cutout #${d} Arc Endpoint`},{x:I,y:b,type:"vertex",label:`Cutout #${d} Arc Endpoint`},{x:p.center.x,y:p.center.y,type:"hole_center",label:`Cutout #${d} Arc Center`})}}}for(const r of n.outerContour.segments)if(r.type==="line")t.push({x:r.start.x,y:r.start.y,type:"vertex",label:"Outer Perimeter Vertex"},{x:r.end.x,y:r.end.y,type:"vertex",label:"Outer Perimeter Vertex"},{x:(r.start.x+r.end.x)/2,y:(r.start.y+r.end.y)/2,type:"midpoint",label:"Outer Edge Midpoint"});else if(r.type==="arc"){const h=r.center.x+r.radius*Math.cos(r.startAngle),d=r.center.y+r.radius*Math.sin(r.startAngle),l=r.center.x+r.radius*Math.cos(r.endAngle),p=r.center.y+r.radius*Math.sin(r.endAngle);t.push({x:h,y:d,type:"vertex",label:"Outer Arc Endpoint"},{x:l,y:p,type:"vertex",label:"Outer Arc Endpoint"},{x:r.center.x,y:r.center.y,type:"hole_center",label:"Outer Arc Center"})}const a={hole_center:6,vertex:5,hole_quadrant:4,midpoint:3,bbox_corner:2,bbox_edge:1},s=[],c=.001;for(const r of t){const h=s.findIndex(d=>Math.abs(d.x-r.x)<c&&Math.abs(d.y-r.y)<c);if(h===-1)s.push(r);else{const d=s[h],l=a[d.type]||0;(a[r.type]||0)>l&&(s[h]=r)}}return s}function Ui(n,t,i,e=18){let o=null,a=1/0;for(const s of t){const c=i(s),r=Math.hypot(n.x-c.x,n.y-c.y);r<=e&&r<a&&(a=r,o=s)}return o}function na(n,t,i){const e=t.x-n.x,o=t.y-n.y,a=Math.hypot(e,o);let c=Math.atan2(o,e)*180/Math.PI;c<0&&(c+=360);const r=i==="inch";let h="",d="",l="",p="";return r?(h=`${a.toFixed(3)} in`,d=`${(a*25.4).toFixed(2)} mm`,l=`${Math.abs(e).toFixed(3)} in`,p=`${Math.abs(o).toFixed(3)} in`):(h=`${a.toFixed(2)} mm`,d=`${(a/25.4).toFixed(3)} in`,l=`${Math.abs(e).toFixed(2)} mm`,p=`${Math.abs(o).toFixed(2)} mm`),{pointA:n,pointB:t,deltaX:e,deltaY:o,distance:a,angleDeg:c,units:i,formattedDistance:h,formattedDistanceAlt:d,formattedDeltaX:l,formattedDeltaY:p,formattedAngle:`${c.toFixed(1)}°`}}function ia(n,t,i,e,o="inch"){let a='<g id="cadMeasureOverlay" class="cad-measure-overlay">';const c=o==="inch"?1/25.4:1,r=Math.max(e.width,e.height),h=Math.max(12*c,r*.032),d=p=>p,l=p=>e.minY+e.maxY-p;if(n){const p=d(n.pointA.x),g=l(n.pointA.y),y=d(n.pointB.x),I=l(n.pointB.y),b=y,w=g,D=Math.abs(y-p),N=Math.abs(I-g);if(D>.1*c||N>.1*c){a+=`<line x1="${p}" y1="${g}" x2="${b}" y2="${w}" class="measure-delta-x" stroke="#f59e0b" stroke-dasharray="5,4" stroke-width="1.6" vector-effect="non-scaling-stroke" />`,a+=`<line x1="${b}" y1="${w}" x2="${y}" y2="${I}" class="measure-delta-y" stroke="#c084fc" stroke-dasharray="5,4" stroke-width="1.6" vector-effect="non-scaling-stroke" />`;const Y=Math.min(8*c,Math.min(D,N)*.35);if(Y>1.5*c){const z=y>=p?-1:1,ae=I>=g?-1:1;a+=`<path d="M ${b+z*Y} ${w} L ${b+z*Y} ${w+ae*Y} L ${b} ${w+ae*Y}" class="measure-corner-sq" stroke="#94a3b8" stroke-width="1.4" fill="none" vector-effect="non-scaling-stroke" />`}}a+=`<line x1="${p}" y1="${g}" x2="${y}" y2="${I}" stroke="#0b1120" stroke-width="5" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.9" />`,a+=`<line x1="${p}" y1="${g}" x2="${y}" y2="${I}" class="measure-dim-line" stroke="#facc15" stroke-width="2.5" stroke-linecap="round" vector-effect="non-scaling-stroke" />`;const C=Math.atan2(I-g,y-p),W=6*c,G=C+Math.PI/2,E=Math.cos(G)*W,F=Math.sin(G)*W;a+=`<line x1="${p-E}" y1="${g-F}" x2="${p+E}" y2="${g+F}" stroke="#0b1120" stroke-width="5" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.9" />`,a+=`<line x1="${y-E}" y1="${I-F}" x2="${y+E}" y2="${I+F}" stroke="#0b1120" stroke-width="5" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.9" />`,a+=`<line x1="${p-E}" y1="${g-F}" x2="${p+E}" y2="${g+F}" stroke="#facc15" stroke-width="2.5" stroke-linecap="round" vector-effect="non-scaling-stroke" />`,a+=`<line x1="${y-E}" y1="${I-F}" x2="${y+E}" y2="${I+F}" stroke="#facc15" stroke-width="2.5" stroke-linecap="round" vector-effect="non-scaling-stroke" />`;const M=(p+y)/2,f=(g+I)/2,u=n.formattedDistance,m=u.length*h*.6+16*c,P=h*2,S=4*c;a+=`
      <g class="measure-badge-group" transform="translate(${M}, ${f})">
        <!-- Opaque dark backdrop shadow to fully obscure background lines -->
        <rect x="${-m/2-.8*c}" y="${-P/2-.8*c}" width="${m+1.6*c}" height="${P+1.6*c}" rx="${S+.8*c}" fill="#020617" opacity="0.85" />
        <!-- Main measurement pill -->
        <rect x="${-m/2}" y="${-P/2}" width="${m}" height="${P}" rx="${S}" class="measure-badge-rect" fill="#070b14" stroke="#facc15" stroke-width="1.5" vector-effect="non-scaling-stroke" opacity="0.98" />
        <!-- Crisp high-contrast white measurement readout with optical vertical centering -->
        <text x="0" y="${h*.35}" class="measure-badge-text" fill="#f8fafc" font-family="'JetBrains Mono', monospace" font-size="${h}" font-weight="800" text-anchor="middle" text-rendering="geometricPrecision">
          ${u}
        </text>
      </g>
    `;const L=4*c,_=8*c,$=24*c,v=14*c,B=-15*c,O=8*c;a+=`
      <g class="measure-pin-a-group" transform="translate(${p}, ${g})">
        <circle cx="0" cy="0" r="${_}" fill="rgba(56, 189, 248, 0.25)" class="measure-pin-halo">
          <animate attributeName="r" values="${_*.8};${_*1.3};${_*.8}" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="${L}" class="measure-pin-a" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5" vector-effect="non-scaling-stroke" />
        <rect x="${-$/2}" y="${B-v/2}" width="${$}" height="${v}" rx="${3*c}" fill="#070b14" stroke="#38bdf8" stroke-width="1.2" vector-effect="non-scaling-stroke" opacity="0.98" />
        <text x="0" y="${B+O*.35}" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="${O}" font-weight="800" text-anchor="middle" text-rendering="geometricPrecision">PT A</text>
      </g>
    `,a+=`
      <g class="measure-pin-b-group" transform="translate(${y}, ${I})">
        <circle cx="0" cy="0" r="${_}" fill="rgba(34, 197, 94, 0.25)" class="measure-pin-halo">
          <animate attributeName="r" values="${_*.8};${_*1.3};${_*.8}" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="${L}" class="measure-pin-b" fill="#22c55e" stroke="#ffffff" stroke-width="1.5" vector-effect="non-scaling-stroke" />
        <rect x="${-$/2}" y="${B-v/2}" width="${$}" height="${v}" rx="${3*c}" fill="#070b14" stroke="#22c55e" stroke-width="1.2" vector-effect="non-scaling-stroke" opacity="0.98" />
        <text x="0" y="${B+O*.35}" fill="#22c55e" font-family="'JetBrains Mono', monospace" font-size="${O}" font-weight="800" text-anchor="middle" text-rendering="geometricPrecision">PT B</text>
      </g>
    `}if(i){const p=d(i.x),g=l(i.y),y=10*c,I=3*c,b=6*c,w=Math.max(8.5*c,r*.022),D=w*2,C=`⌖ ${i.label}`.length*w*.6+14*c,W=14*c;a+=`
      <g class="measure-snap-reticle" transform="translate(${p}, ${g})">
        <!-- Glowing snap circle -->
        <circle cx="0" cy="0" r="${y}" class="measure-snap-halo" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,2" vector-effect="non-scaling-stroke">
          <animate attributeName="r" values="${y*.85};${y*1.25};${y*.85}" dur="1.2s" repeatCount="indefinite" />
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
          <rect x="-0.8" y="${-D/2-.8*c}" width="${C+1.6*c}" height="${D+1.6*c}" rx="${D/2+.8*c}" fill="#020617" opacity="0.85" />
          <!-- Main capsule pill -->
          <rect x="0" y="${-D/2}" width="${C}" height="${D}" rx="${D/2}" fill="#070b14" stroke="#38bdf8" stroke-width="1.2" vector-effect="non-scaling-stroke" opacity="0.98" />
          <text x="${D*.45}" y="${w*.35}" font-family="'JetBrains Mono', monospace" font-size="${w}" text-anchor="start" text-rendering="geometricPrecision">
            <tspan fill="#38bdf8" font-weight="800">⌖ </tspan><tspan fill="#f8fafc" font-weight="700">${i.label}</tspan>
          </text>
        </g>
      </g>
    `}else if(t&&!n){const p=d(t.x),g=l(t.y);a+=`
      <g class="measure-free-cursor" transform="translate(${p}, ${g})">
        <circle cx="0" cy="0" r="${2.5*c}" fill="#38bdf8" opacity="0.7" />
      </g>
    `}return a+="</g>",a}let fe="inch",pe="baseplate",$t="part",Dt=!0,Ee=null,It=[],Et=0,Ce=1,De=$n[0],rt=so("USD",ai),J=rt[0],Q=J.gauges.find(n=>n.gaugeName.includes('1/4" Plate')||n.gaugeName.includes("10 Gauge"))||J.gauges[0],k=ao("USD",tn),ze={...oo},me=[],Ve="single",Oe=0,ni=null,Ft=null,Ht=!1,Vt=null,St=[],qt=0,At=1,Ge=!0,ct=null,Rt=null,mt=null;const R={length:10,width:8,units:"inch",cornerType:"chamfer",cornerSize:.75,holePattern:"4-corner",holeType:"slotted",holeDiameter:.75,slotLength:1.5,slotWidth:.75,edgeOffsetX:1.25,edgeOffsetY:1.25,centerCutoutType:"round",centerCutoutDiameter:2.5};let et=xt.find(n=>n.standard==="ASME"&&n.nominalBore==='2"')||xt[xt.length-1];const ne={baseWidth:6,height:6,units:"inch",hasWeldSnipe:!0,snipeSize:1,mountingHoleDiameter:.5},A={width:24,height:48,units:"inch",patternType:"islamic_star",borderMarginMm:1.5,gridColumns:4,gridRows:8,hasMountingHoles:!0,mountingHoleDiameter:.3125,gateType:"single_swing",hasFrameTube:!0,frameTubeWidthMm:2,hasKickPlate:!1,kickPlateHeightMm:12,hasHinges:!0,hasPullHandle:!0,hasLockBox:!0,finishMaterial:"matte_black",backlightColor:"warm_white"};let Ue="realistic_gate";const Z={baseWidth:5,height:5,chamferTop:3,chamferRight:3,units:"inch",baseHoleCount:2,baseHoleDiameter:.375,uprightHoleCount:2,uprightHoleDiameter:.375,lighteningHoleDiameter:1.5},oe={outerDiameter:6,innerDiameter:2,units:"inch",boltCount:6,boltDiameter:.375,pitchCircleDiameter:4},ut=document.getElementById("dynamicControls"),ee=document.getElementById("svgContainer"),oa=document.getElementById("hudCutLength"),aa=document.getElementById("hudPierces"),sa=document.getElementById("hudWeight"),ra=document.getElementById("hudBoundingBox"),Wt=document.getElementById("dfmAlertContainer"),Xn=document.getElementById("canvasTitle"),qi=document.getElementById("nestingHudBar"),zi=document.getElementById("nestHudSheets"),Yi=document.getElementById("nestHudUtil"),ji=document.getElementById("nestHudScrap"),Qi=document.getElementById("nestHudRemnant"),cn=document.getElementById("quoteModeBadge"),Xi=document.getElementById("quoteShopName"),ca=document.getElementById("totalPrice"),la=document.getElementById("pricePerUnit"),ln=document.getElementById("costMaterial"),da=document.getElementById("costCut"),ma=document.getElementById("costPierce"),Ki=document.getElementById("costHandling"),Vi=document.getElementById("costSecondary"),ua=document.getElementById("costDiscount"),ha=document.getElementById("costGst"),pa=document.getElementById("totalIncGst"),zt=document.getElementById("gstLabel"),dn=document.getElementById("hsnCodeTag"),Kn=document.getElementById("minOrderWarning"),Jt=document.getElementById("materialSelect"),Nt=document.getElementById("gaugeSelect"),mn=document.getElementById("assistGasSelect"),vt=document.getElementById("sheetSizeSelect"),Vn=document.getElementById("camProfileSelect"),ga=document.getElementById("navCamName");let Ke=1,je={x:0,y:0},un=!1,Jn={x:0,y:0},hn=!1,pn=!1;function Mt(){const n=document.getElementById("gateToolbarMain"),t=document.getElementById("gateFoldedBar"),i=document.getElementById("gateStudioToolbar");n&&t&&i&&(hn?(n.classList.add("hidden"),t.classList.remove("hidden"),i.classList.add("is-folded")):(n.classList.remove("hidden"),t.classList.add("hidden"),i.classList.remove("is-folded")));const e=document.getElementById("bottomHudExpandedContent"),o=document.getElementById("bottomHudFoldedBar"),a=document.getElementById("canvasBottomHud");e&&o&&a&&(pn?(e.classList.add("hidden"),o.classList.remove("hidden"),a.classList.add("is-folded")):(e.classList.remove("hidden"),o.classList.add("hidden"),a.classList.remove("is-folded")))}function _e(){const n=ee==null?void 0:ee.querySelector("svg");n&&(Ke===1&&je.x===0&&je.y===0?(n.style.transform="",ee==null||ee.classList.remove("is-zoomed")):(n.style.transform=`translate(${je.x}px, ${je.y}px) scale(${Ke})`,ee==null||ee.classList.add("is-zoomed")));const t=document.getElementById("zoomLevelDisplay");t&&(t.textContent=`${Math.round(Ke*100)}%`)}function Yt(){Ke=1,je={x:0,y:0},_e()}let lt=!1,Ye="idle",Pt=null,Ct=null,_t=null,Zn={x:0,y:0};function Ji(n,t){const i=ee==null?void 0:ee.querySelector("svg");if(!i||!i.createSVGPoint||!i.getScreenCTM)return null;const o=Se().boundingBox,a=i.createSVGPoint();a.x=n,a.y=t;const s=i.getScreenCTM();if(!s)return null;try{const c=a.matrixTransform(s.inverse()),r=c.x,h=o.minY+o.maxY-c.y;return{cad:{x:r,y:h},screen:{x:n,y:t}}}catch{return null}}function Zi(n){const t=ee==null?void 0:ee.querySelector("svg");if(!t||!t.createSVGPoint||!t.getScreenCTM)return{x:0,y:0};const e=Se().boundingBox,o=t.createSVGPoint();o.x=n.x,o.y=e.minY+e.maxY-n.y;const a=t.getScreenCTM();if(!a)return{x:0,y:0};try{const s=o.matrixTransform(a);return{x:s.x,y:s.y}}catch{return{x:0,y:0}}}function Sn(n){const t=document.getElementById("measureHudPill"),i=document.getElementById("measureValDist"),e=document.getElementById("measureValDistAlt"),o=document.getElementById("measureValDx"),a=document.getElementById("measureValDy"),s=document.getElementById("measureValAngle"),c=document.getElementById("measureHudTip");if(t)if(n)i&&(i.textContent=n.formattedDistance),e&&(e.textContent=`(${n.formattedDistanceAlt})`),o&&(o.textContent=n.formattedDeltaX),a&&(a.textContent=n.formattedDeltaY),s&&(s.textContent=n.formattedAngle),c&&(Ye==="locked"?(c.innerHTML="✅ <strong>Locked</strong> (Esc)",c.title="Measurement locked. Click anywhere to measure again • Esc to clear"):(c.textContent="📐 Pick Pt B",c.title="Measuring... Click or release to lock Point B"));else{const r=fe==="inch";i&&(i.textContent=r?"0.000 in":"0.00 mm"),e&&(e.textContent=r?"(0.0 mm)":"(0.000 in)"),o&&(o.textContent=r?"0.000 in":"0.00 mm"),a&&(a.textContent=r?"0.000 in":"0.00 mm"),s&&(s.textContent="0.0°"),c&&(Ye==="drawing"?(c.textContent="📍 Pick Pt B",c.title="Point A set. Move and click 2nd point to lock dimension"):(c.textContent="💡 Click 1st pt",c.title="Click 1st point (snaps to vertices & hole centers)"))}}function st(n){const t=ee==null?void 0:ee.querySelector("svg");if(!t)return;const i=t.querySelector("#cadMeasureOverlay");if(!lt){i&&i.remove();return}const o=Se().boundingBox;let a=null;Pt&&Ct&&(a=na(Pt,Ct,fe),Sn(a));const s=ia(a,n||null,_t,o,fe);i&&i.remove();const h=new DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${s}</svg>`,"image/svg+xml").getElementById("cadMeasureOverlay");h&&t.appendChild(document.importNode(h,!0))}function yn(n){lt=n!==void 0?n:!lt;const i=document.getElementById("btnMeasureTool"),e=document.getElementById("measureHudPill");lt?(i==null||i.classList.add("active"),ee==null||ee.classList.add("measuring"),e==null||e.classList.remove("hidden"),Ye="idle",Pt=null,Ct=null,_t=null,Sn(null),st(),se("📐 Measure Tool Active: Click or drag two points (snaps to CAD vertices & holes)")):(i==null||i.classList.remove("active"),ee==null||ee.classList.remove("measuring"),e==null||e.classList.add("hidden"),Ye="idle",Pt=null,Ct=null,_t=null,st())}function Xt(n){k.indianQuotingMode=n;const t=document.getElementById("modeJobWork"),i=document.getElementById("modeWithMaterial"),e=document.getElementById("modeSqFtJali");[t,i,e].forEach(o=>o==null?void 0:o.classList.remove("active")),n==="job_work"&&(t==null||t.classList.add("active")),n==="with_material"&&(i==null||i.classList.add("active")),n==="sqft_jali"&&(e==null||e.classList.add("active")),H()}let Ot="industrial";function Lt(n,t=!0){Ot=n;const i=document.getElementById("tabPrecisionIndustrial"),e=document.getElementById("tabArchitecturalStudio"),o=document.getElementById("workspaceTabSwitcher"),a=document.querySelector('.shape-btn[data-shape="jali"]'),s=document.getElementById("modeSqFtJali"),c=document.getElementById("gateStudioToolbar");if(n==="industrial"){if(i==null||i.classList.add("active"),e==null||e.classList.remove("active"),e&&(e.style.display="none"),o&&(o.style.display="none"),a&&(a.style.display="none"),s&&(s.style.display="none"),c&&c.classList.add("hidden"),pe==="jali"){const r=document.querySelector('.shape-btn[data-shape="baseplate"]');r?r.click():(pe="baseplate",bt(),H())}t&&(window.location.hash==="#gate-studio"||window.location.hash==="#architectural")&&history.replaceState(null,"",window.location.pathname+window.location.search)}else o&&(o.style.display="flex"),e&&(e.style.display="inline-flex"),i==null||i.classList.remove("active"),e==null||e.classList.add("active"),a&&(a.style.display=""),s&&(s.style.display=""),pe!=="jali"&&(a?a.click():(pe="jali",Xt("sqft_jali"),Ue="realistic_gate",Ge=!1,bt(),H())),c&&c.classList.remove("hidden"),t&&(window.location.hash="#gate-studio")}function fa(){const n=document.getElementById("tabPrecisionIndustrial"),t=document.getElementById("tabArchitecturalStudio");n==null||n.addEventListener("click",()=>Lt("industrial")),t==null||t.addEventListener("click",()=>Lt("architectural"));const i=window.location.hash.toLowerCase(),o=new URLSearchParams(window.location.search).get("view");Lt(i==="#gate-studio"||i==="#architectural"||o==="architectural"?"architectural":"industrial",!1),window.addEventListener("hashchange",()=>{const a=window.location.hash.toLowerCase();a==="#gate-studio"||a==="#architectural"?Ot!=="architectural"&&Lt("architectural",!1):(a==="#industrial"||a==="")&&Ot!=="industrial"&&Lt("industrial",!1)})}function ya(){const n=new URLSearchParams(window.location.search);if(n.has("embedded")||n.get("embed")==="true"||window.self!==window.top){document.body.classList.add("is-embedded-widget");const i=n.get("currency");(i==="USD"||i==="INR")&&(k.currency=i);const e=n.get("shopName");if(e){k.shopName=e;const h=document.getElementById("brandTitle");h&&(h.textContent=e.toUpperCase());const d=document.getElementById("quoteShopName");d&&(d.textContent=e)}const o=n.get("shopEmail");o&&(k.shopEmail=o);const a=n.get("hourlyRate");a&&!isNaN(parseFloat(a))&&(k.hourlyLaserRateUsd=parseFloat(a));const s=n.get("minOrder");s&&!isNaN(parseFloat(s))&&(k.minimumOrderFee=parseFloat(s));const c=n.get("salesTax");c&&!isNaN(parseFloat(c))&&(k.gstPercent=parseFloat(c));const r=n.get("webhookUrl");r&&(k.rfqWebhookUrl=r)}}function xa(){const n=document.getElementById("embedWidgetModal"),t=document.getElementById("btnOpenEmbedModal"),i=document.getElementById("closeEmbedModalBtn"),e=document.getElementById("embedShopSlug"),o=document.getElementById("embedDefaultCurrency"),a=document.getElementById("embedDefaultView"),s=document.getElementById("embedWidgetMode"),c=document.getElementById("embedScriptCode"),r=document.getElementById("btnCopyEmbedScript");if(!n)return;const h=()=>{if(!c)return;const d=window.location.origin||"https://engine.yourdomain.com",l=(e==null?void 0:e.value.trim())||"midwest-precision",p=(o==null?void 0:o.value)||"USD",g=(a==null?void 0:a.value)||"industrial",y=(s==null?void 0:s.value)||"inline";let I=`src="${d}/widget.js" data-shop-id="${l}" data-currency="${p}"`;g!=="industrial"&&(I+=` data-view="${g}"`),y!=="inline"&&(I+=` data-mode="${y}"`),c.textContent=`<script ${I}><\/script>`};t==null||t.addEventListener("click",()=>{o&&(o.value=k.currency),a&&(a.value=Ot),h(),n.classList.remove("hidden")}),i==null||i.addEventListener("click",()=>{n.classList.add("hidden")}),n.addEventListener("click",d=>{d.target===n&&n.classList.add("hidden")}),[e,o,a,s].forEach(d=>{d==null||d.addEventListener("input",h),d==null||d.addEventListener("change",h)}),r==null||r.addEventListener("click",()=>{const d=(c==null?void 0:c.textContent)||"";navigator.clipboard.writeText(d).then(()=>{r.textContent="✅ Copied!",setTimeout(()=>{r.textContent="📋 Copy Script Tag"},2e3),se("📋 Embed script tag copied to clipboard!")}).catch(()=>{se("Script tag copied.")})}),h()}function ba(){ya(),ii("USD",!0),Ta(),Fa(),xa(),fa(),bt(),Zt(),dt(),H()}let eo=null;function we(){const n=document.getElementById("storageBadge");n&&(n.textContent="💾 Saving...",n.classList.add("saving")),clearTimeout(eo),eo=setTimeout(()=>{Yo(k.currency,k),jo(k.currency,rt),n&&(n.textContent="💾 Auto-Saved",n.classList.remove("saving"))},400)}function Se(){return Dt&&Ee?Ee:pe==="baseplate"?(R.units=fe,Co(R)):pe==="flange"?Io({outerDiameter:et.outerDiameter,innerBore:et.innerBore,pitchCircleDiameter:et.pitchCircleDiameter,boltCount:et.boltCount,boltDiameter:et.boltDiameter,units:et.units}):pe==="gusset"?(ne.units=fe,So(ne)):pe==="jali"?(A.units=fe,Mo(A)):pe==="bracket"?(Z.units=fe,vo(Z)):(oe.units=fe,ko(oe))}function H(){var L,_;const n=fe==="inch",t=Se();t.deselectedHoleIndices!==void 0&&t.deselectedHoleIndices.length>0&&(t.deselectedHoleIndices=Kt(t,Q.thicknessMm));const i=yt(t,Q.thicknessMm,J.densityGPerCm3,t.deselectedHoleIndices),e=Ao(t,Q.thicknessMm);mt=e;const o=document.getElementById("holeSelectionBox"),a=document.getElementById("holeToggleLabel"),s=document.getElementById("holeAutoSkipNotice"),c=document.getElementById("holeSkipCountText"),r=document.getElementById("holeSkipThickText"),h=document.getElementById("btnToggleHoleCut");if(o&&t){const $=t.innerHoles?t.innerHoles.length:0;if($>0){o.style.display="block";const v=Kt(t,Q.thicknessMm),B=t.deselectedHoleIndices||[],O=$-B.length;B.length>0?(a&&(a.textContent=`Cut ${O} of ${$} Holes`),h&&(h.classList.add("is-skipping"),h.title="Currently skipping undersized holes. Click to cut all holes."),s&&c&&r&&(s.classList.remove("hidden"),c.textContent=`${B.length} holes`,r.textContent=`${Q.thicknessMm.toFixed(1)} mm`)):(a&&(a.textContent=`Cut All Holes (${$})`),h&&(h.classList.remove("is-skipping"),h.title=v.length>0?`Click to auto-skip ${v.length} undersized holes (< ${Q.thicknessMm.toFixed(1)}mm)`:"All holes meet laser piercing rule"),s&&s.classList.add("hidden"))}else o.style.display="none"}let d;if(Ve==="cart"&&me.length>0){const $=me.map(v=>({id:v.id,name:v.partGeometry.name,boundingBox:v.partGeometry.boundingBox,quantity:v.quantity,thicknessMm:v.gaugeThicknessMm,densityGPerCm3:J.densityGPerCm3,geometry:v.partGeometry,color:v.color}));d=oi($,De,Q.thicknessMm,J.densityGPerCm3)}else d=Go(t.boundingBox,Ce,De,Q.thicknessMm,J.densityGPerCm3,{},t.units);ni=d,Oe=Math.max(0,Math.min(Oe,d.sheetsRequired-1));const l=Ze(i,Q,Ce,k,ze),p=document.getElementById("sheetPaginationBar"),g=document.getElementById("sheetPageIndicator"),y=document.getElementById("btnPrevSheet"),I=document.getElementById("btnNextSheet"),b=document.getElementById("gateStudioToolbar"),w=document.getElementById("simulatorControls");if($t==="nesting")b&&b.classList.add("hidden"),w&&(w.style.display="flex"),ee.innerHTML=Ko(d,Oe),Ve==="cart"?Xn.textContent=`RFQ Cart Assembly — ${De.name} Layout (Sheet ${Oe+1} of ${d.sheetsRequired})`:Xn.textContent=`${t.name} — ${De.name} Layout (Sheet ${Oe+1} of ${d.sheetsRequired})`,p&&p.classList.remove("hidden"),g&&(g.textContent=`Sheet ${Oe+1} of ${d.sheetsRequired}`),y&&(y.disabled=Oe<=0),I&&(I.disabled=Oe>=d.sheetsRequired-1);else if(p&&p.classList.add("hidden"),pe==="jali"&&Ot==="architectural"?(b&&(b.classList.remove("hidden"),(L=document.getElementById("btnJaliViewRealistic"))==null||L.classList.toggle("active",Ue==="realistic_gate"),(_=document.getElementById("btnJaliViewCam"))==null||_.classList.toggle("active",Ue==="cam_toolpath"),b.querySelectorAll(".finish-swatch").forEach($=>{$.classList.toggle("active",$.getAttribute("data-finish")===A.finishMaterial)}),b.querySelectorAll(".backlight-pill").forEach($=>{$.classList.toggle("active",$.getAttribute("data-backlight")===A.backlightColor)}),b.querySelectorAll(".gate-type-btn").forEach($=>{$.classList.toggle("active",$.getAttribute("data-gatetype")===A.gateType)})),w&&(w.style.display="flex")):(b&&b.classList.add("hidden"),w&&(w.style.display="flex")),!Ht){ee.innerHTML=In(t,{showCutOrder:Ge,viewStyle:pe==="jali"?Ue:"cam_toolpath",jaliParams:pe==="jali"?A:void 0,hideCamBadges:pe==="jali"&&(Ue==="realistic_gate"||!Ge),dfmIssues:e.issues,highlightedHoleIndex:ct,highlightedHoleIndices:ct!==null?Rt!==null?[ct,Rt]:[ct]:[],excludedHoleIndices:t.deselectedHoleIndices||[]}),lo();const v=fe==="inch"?`${i.boundingBoxWidthInches.toFixed(2)}" × ${i.boundingBoxHeightInches.toFixed(2)}"`:`${i.boundingBoxWidthMm.toFixed(0)} × ${i.boundingBoxHeightMm.toFixed(0)} mm`;Xn.textContent=pe==="jali"&&Ue==="realistic_gate"?`Architectural CNC Gate & Jali Studio (${v})`:`${t.name} (${v})`}const D=document.getElementById("camLegendBar"),N=document.getElementById("archLegendBar");if(pe==="jali"&&Ue==="realistic_gate"&&$t!=="nesting"){if(D&&D.classList.add("hidden"),N){N.classList.remove("hidden");const $={matte_black:"Matte Black Powder Coat",royal_gold:"Royal Gold / Antique Brass",corten_rust:"Corten Weathered Rust Steel",brushed_stainless:"Satin Stainless 304",champagne_bronze:"Champagne Bronze"},v={warm_white:"Warm 3000K LED",cool_white:"Cool 6000K LED",amber_gold:"Sunset Amber LED",none:"Off (Daylight)"},B=A.gateType==="wall_panel",O=B?"Wall Mount Standoffs":`${A.hasFrameTube!==!1?n?'2" Box Tube':"50mm Box Tube":"Frameless Plate"}`,Y=B?n?'1/4" Stainless Standoff Screws':"M8 Stainless Standoff Screws":`${A.hasHinges!==!1?"Bullet Hinges":""}${A.hasPullHandle!==!1?" + Bar Pull":""}${A.hasLockBox!==!1?" + Mortise Lock":""}`.replace(/^\s*\+\s*/,"")||"Custom Welded",z=document.getElementById("archLegendFinish"),ae=document.getElementById("archLegendLight"),ye=document.getElementById("archLegendFrame"),Je=document.getElementById("archLegendHardware");z&&(z.textContent=$[A.finishMaterial||"matte_black"]||"Matte Black"),ae&&(ae.textContent=v[A.backlightColor||"warm_white"]||"Warm 3000K"),ye&&(ye.textContent=O),Je&&(Je.textContent=Y)}}else D&&D.classList.remove("hidden"),N&&N.classList.add("hidden");_e(),lt&&st(),oa.textContent=n?`${i.totalCutLengthInches.toFixed(2)} in`:`${i.totalCutLengthMm.toFixed(1)} mm`,aa.textContent=i.pierceCount.toString(),sa.textContent=n?`${i.theoreticalWeightLbs.toFixed(2)} lbs`:`${i.theoreticalWeightKg.toFixed(2)} kg`,ra.textContent=n?`${i.boundingBoxWidthInches.toFixed(2)}" × ${i.boundingBoxHeightInches.toFixed(2)}"`:`${i.boundingBoxWidthMm.toFixed(0)} × ${i.boundingBoxHeightMm.toFixed(0)} mm`;const C=document.getElementById("canvasBboxBadge");C&&(C.textContent=n?`W: ${i.boundingBoxWidthInches.toFixed(3)} in × H: ${i.boundingBoxHeightInches.toFixed(3)} in`:`W: ${i.boundingBoxWidthMm.toFixed(1)} mm × H: ${i.boundingBoxHeightMm.toFixed(1)} mm`);const W=l.currency==="USD";qi&&(qi.style.display=Ce>1||$t==="nesting"||Ve==="cart"?"grid":"none"),zi&&(zi.textContent=`${d.sheetsRequired} Sheet${d.sheetsRequired>1?"s":""}`),Yi&&(Yi.textContent=`${d.sheetUtilizationPercent}%`),ji&&(ji.textContent=W?`${(d.totalSkeletonScrapMassKg*2.20462).toFixed(1)} lbs`:`${d.totalSkeletonScrapMassKg.toFixed(1)} kg`),Qi&&(Qi.textContent=W?`${(d.remnantWidthMm/25.4).toFixed(1)}" × ${(d.remnantLengthMm/25.4).toFixed(1)}"`:`${d.remnantWidthMm} × ${d.remnantLengthMm} mm`);const G=document.getElementById("gateFoldedSummary");if(G){const $={matte_black:"Matte Black",royal_gold:"Royal Gold",corten_rust:"Corten Rust",brushed_stainless:"Stainless 304",champagne_bronze:"Bronze"},v={warm_white:"Warm 3000K",cool_white:"Cool 6000K",amber_gold:"Amber",none:"Light Off"},B={single_swing:"Single Gate",double_swing:"Double Swing",wall_panel:"Wall Jali"},O=$[A.finishMaterial||"matte_black"]||"Matte Black",Y=v[A.backlightColor||"warm_white"]||"Warm 3000K",z=B[A.gateType||"single_swing"]||"Single Gate";G.textContent=`${O} • ${Y} • ${z}`}const E=document.getElementById("bottomHudFoldedSummary");if(E){const $=n?`${i.totalCutLengthInches.toFixed(2)} in`:`${i.totalCutLengthMm.toFixed(1)} mm`,v=n?`${i.theoreticalWeightLbs.toFixed(2)} lbs`:`${i.theoreticalWeightKg.toFixed(2)} kg`,B=n?`${i.boundingBoxWidthInches.toFixed(2)}" × ${i.boundingBoxHeightInches.toFixed(2)}"`:`${i.boundingBoxWidthMm.toFixed(0)} × ${i.boundingBoxHeightMm.toFixed(0)} mm`;E.textContent=`${$} • ${i.pierceCount} Pierces • ${v} • ${B}`}Mt(),$a(e);const F=l.currency==="INR"?"₹":"$";ca.textContent=l.finalOrderTotal.toFixed(2),la.textContent=`(${F}${l.finalUnitPrice.toFixed(2)} / unit)`,cn&&(l.quotingMode==="job_work"?cn.textContent=W?"LABOR ONLY (CUSTOMER STOCK)":"JOB WORK (LABOUR ONLY)":l.quotingMode==="sqft_jali"?cn.textContent=W?"ARCHITECTURAL PANELS":"ARCHITECTURAL (₹/SQ.FT)":cn.textContent=W?"TURNKEY (PLATE + CUT)":"WITH MATERIAL (SUPPLY & CUT)"),ln.textContent=`${F}${l.unitMaterialCost.toFixed(2)}`,da.textContent=`${F}${l.unitCutCost.toFixed(2)}`,ma.textContent=`${F}${l.unitPierceCost.toFixed(2)}`,Ki&&(Ki.textContent=`${F}${l.unitHandlingCost.toFixed(2)}`),Vi&&(Vi.textContent=`${F}${l.unitSecondaryCost.toFixed(2)}`);const M=document.getElementById("rowMaterial"),f=document.getElementById("rowCut"),u=document.getElementById("rowPierce"),m=document.getElementById("rowHandling"),P=document.getElementById("rowSecondary");if(l.quotingMode==="job_work"){if(M){M.style.display="flex";const $=M.querySelector("span:first-child");$&&($.textContent="Raw Material:"),ln.textContent=W?"$0.00 (Customer Sheet)":"₹0.00 (Customer Plate)"}f&&(f.style.display="flex"),u&&(u.style.display="flex"),m&&(m.style.display="flex")}else if(l.quotingMode==="sqft_jali"){if(M){M.style.display="flex";const $=M.querySelector("span:first-child");$&&($.textContent=W?"Fabrication Rate:":"Jali Fabrication (Sq.Ft):"),ln.textContent=`${F}${l.unitMaterialCost.toFixed(2)}`}f&&(f.style.display="none"),u&&(u.style.display="none"),m&&(m.style.display="none")}else{if(M){M.style.display="flex";const $=M.querySelector("span:first-child");$&&($.textContent=W?"Raw Stock Material:":"Raw Material (Steel):"),ln.textContent=`${F}${l.unitMaterialCost.toFixed(2)}`}f&&(f.style.display="flex"),u&&(u.style.display="flex"),m&&(m.style.display="none")}P&&(P.style.display=l.unitSecondaryCost>0?"flex":"none"),ua.textContent=`-${l.discountPercent}%`,ha.textContent=`${F}${l.gstAmount.toFixed(2)}`,pa.textContent=`${F}${l.finalTotalWithGst.toFixed(2)}`,zt&&(W?k.salesTaxExempt?zt.textContent="Sales Tax (Tax-Exempt):":zt.textContent=`Sales Tax (${k.gstPercent||0}%):`:k.isInterstateSale?zt.textContent="IGST (18%):":zt.textContent="GST (CGST 9% + SGST 9%):");const S=document.querySelector(".breakdown-row.total-inc-gst span:first-child");if(S&&(S.textContent=W?"Total (Inc. Tax):":"Total (Inc. GST):"),dn)if(dn.style.display="block",W){const $=k.paymentTerms||"Net 30, Credit Card, ACH",v=l.naicsCode||"NAICS 332813 (Laser Cutting & Fabrication)";dn.textContent=`${v} • ${$}`}else dn.textContent=l.hsnSacCode;l.minimumOrderFloorApplied?(Kn.classList.remove("hidden"),Kn.innerHTML=`⚠️ <strong>Minimum Order Floor Active</strong><br><span style="font-size:0.7rem;opacity:0.95;">Calc Subtotal: ${F}${l.orderTotalBeforeMin.toFixed(2)} → Billed Min Floor: ${F}${l.finalOrderTotal.toFixed(2)}</span>`):Kn.classList.add("hidden")}function ei(n,t){if(ct=n,Rt=t!==void 0?t:null,!Ht&&$t==="part"){const i=Se(),e=[];ct!==null&&e.push(ct),Rt!==null&&!e.includes(Rt)&&e.push(Rt),ee.innerHTML=In(i,{showCutOrder:Ge,viewStyle:pe==="jali"?Ue:"cam_toolpath",jaliParams:pe==="jali"?A:void 0,hideCamBadges:pe==="jali"&&(Ue==="realistic_gate"||!Ge),dfmIssues:mt==null?void 0:mt.issues,highlightedHoleIndex:ct,highlightedHoleIndices:e,excludedHoleIndices:i.deselectedHoleIndices||[]}),_e(),lo()}Wt.querySelectorAll(".dfm-pill").forEach(i=>{const e=i.getAttribute("data-hole-index"),o=i.getAttribute("data-related-hole-index"),a=e!==null?parseInt(e,10):null,s=o!==null?parseInt(o,10):null;let c=!1;n!==null&&((a===n||s===n)&&(c=!0),t!=null&&(a===t||s===t)&&(c=!0)),c?i.classList.add("is-active-target"):i.classList.remove("is-active-target")})}function lo(){ee.querySelectorAll("[data-hole-index]").forEach(n=>{const t=n.getAttribute("data-hole-index");if(t!==null){const i=parseInt(t,10);n.addEventListener("mouseenter",()=>{Wt.querySelectorAll(`.dfm-pill[data-hole-index="${i}"], .dfm-pill[data-related-hole-index="${i}"]`).forEach(e=>{e.classList.add("is-active-target"),e.scrollIntoView({behavior:"smooth",block:"nearest"})})}),n.addEventListener("mouseleave",()=>{Wt.querySelectorAll(`.dfm-pill[data-hole-index="${i}"], .dfm-pill[data-related-hole-index="${i}"]`).forEach(e=>{e.classList.remove("is-active-target")})})}})}function $a(n){if(Wt.innerHTML="",!(n.isManufacturable&&!n.hasWarnings)){if(n.issues.length>2){const t=document.createElement("div");t.className="dfm-scroll-header",t.innerHTML=`
      <span class="dfm-scroll-title">
        <span class="dfm-scroll-badge">${n.issues.length} DFM Findings</span>
        ${n.isManufacturable?"Advisories to prevent heat burn":"Critical cut issues require design fix"}
      </span>
      <span class="dfm-scroll-hint">↕ Scroll to inspect all holes</span>
    `,Wt.appendChild(t)}for(const t of n.issues){const i=document.createElement("div"),e=typeof t.holeIndex=="number",o=typeof t.relatedHoleIndex=="number";i.className=`dfm-pill ${t.severity==="error"?"dfm-error":"dfm-warning"} ${e?"dfm-pill-hole":""}`,e&&(i.setAttribute("data-hole-index",t.holeIndex.toString()),o&&i.setAttribute("data-related-hole-index",t.relatedHoleIndex.toString()),i.title=`Click or hover to highlight Hole #${t.holeIndex+1}${o?` & #${t.relatedHoleIndex+1}`:""} on the drawing`),i.innerHTML=`
      <span class="dfm-icon">${t.severity==="error"?"⚠️":"ℹ️"}</span>
      <span class="dfm-text">${t.message}</span>
      ${e?`<span class="dfm-locate-chip" title="Pinpoint on diagram">📍 Hole #${t.holeIndex+1}${o?` & #${t.relatedHoleIndex+1}`:""}</span>`:""}
    `,e&&(i.addEventListener("mouseenter",()=>{ei(t.holeIndex,t.relatedHoleIndex)}),i.addEventListener("mouseleave",()=>{ei(null)}),i.addEventListener("click",()=>{var a,s;Ge||(Ge=!0,(a=document.getElementById("btnToggleCamBadges"))==null||a.classList.add("active"),(s=document.getElementById("legendBadgeToggle"))==null||s.classList.add("active")),ei(t.holeIndex,t.relatedHoleIndex)})),Wt.appendChild(i)}}}function mo(){Jt.innerHTML="";for(const n of rt){const t=document.createElement("option");t.value=n.id,t.textContent=n.name,Jt.appendChild(t)}Jt.value=J.id,uo()}function uo(){Nt.innerHTML="";for(let n=0;n<J.gauges.length;n++){const t=J.gauges[n],i=document.createElement("option");i.value=n.toString(),i.textContent=t.gaugeName,Nt.appendChild(i)}Nt.selectedIndex=Math.min(3,J.gauges.length-1),Q=J.gauges[Nt.selectedIndex]}function Ca(){Vn.innerHTML="";for(const n of kt){const t=document.createElement("option");t.value=n.id,t.textContent=n.name,Vn.appendChild(t)}Vn.value=k.selectedCAMProfileId,Ia()}function Ia(){const n=kt.find(t=>t.id===k.selectedCAMProfileId)||kt[0];ga.textContent=n.name.split(" ")[0].trim()}function Sa(){if(!vt)return;vt.innerHTML="";const n=k.currency==="USD"?$n:Gt;for(const i of n){const e=document.createElement("option");e.value=i.id,e.textContent=i.name,vt.appendChild(e)}De=n.find(i=>i.id===De.id)||n[0],vt.value=De.id}function ii(n="USD",t=!1){var z;const i=n==="USD",e=document.getElementById("btnCurrencyINR"),o=document.getElementById("btnCurrencyUSD");i?(o==null||o.classList.add("active"),e==null||e.classList.remove("active")):(e==null||e.classList.add("active"),o==null||o.classList.remove("active")),k=ao(n,i?tn:Cn),rt=so(n,i?ai:io),J=rt[0],Q=J.gauges[i?3:4]||J.gauges[0],xn(i?"inch":"mm"),bn(),De=i?$n[0]:Gt[0],i?et=xt.find(ae=>ae.standard==="ASME"&&ae.nominalBore==='2"')||xt[xt.length-1]:et=xt[2];const a=document.getElementById("brandTitle"),s=document.getElementById("brandSubtitle");a&&(a.textContent=i?"US CNC LASER CPQ":"INDIAN CNC LASER CPQ"),s&&(s.textContent=i?"Precision CAD/CAM & Quoting":"WhatsApp-First Quoting & CypCut DXF Engine");const c=document.getElementById("modeJobWork"),r=document.getElementById("modeWithMaterial"),h=document.getElementById("modeSqFtJali");c&&(c.innerHTML=i?"🔧 Labor Only":"🔧 Job Work"),r&&(r.innerHTML="📦 Turnkey"),h&&(h.innerHTML=i?"🏛️ Arch Panels":"🏛️ Architectural",Ot==="industrial"?h.style.display="none":h.style.display="");const d=document.getElementById("currencySym"),l=document.getElementById("adminCurrencySym");d&&(d.textContent=i?"$":"₹"),l&&(l.textContent=i?"$":"₹");const p=document.getElementById("customerPhoneLabel"),g=document.getElementById("phoneCountryPrefix"),y=document.getElementById("customerPhoneInput"),I=document.getElementById("phoneHint"),b=document.getElementById("phoneModeBadge");p&&(p.textContent=i?"Customer Email / Phone":"Customer WhatsApp"),g&&(g.textContent=i?"+1":"+91"),y&&(y.placeholder=i?"estimator@client.com or (555) 123-4567":"10-digit mobile (e.g. 98230 12345)"),I&&(I.textContent=i?"Enter email to send quote, or copy directly to clipboard":"Enter mobile to open direct chat, or leave blank to choose contact"),b&&(b.textContent=i?"Email / RFQ":"Direct Send");const w=document.getElementById("shareWhatsAppBtn"),D=document.getElementById("shareBtnIcon"),N=document.getElementById("shareBtnText"),C=document.getElementById("usSingleShareGroup"),W=document.getElementById("printInvoiceText"),G=document.getElementById("downloadDxfText");w&&(w.style.display=i?"none":"flex",i?(w.classList.remove("btn-whatsapp"),w.classList.add("btn-email")):(w.classList.remove("btn-email"),w.classList.add("btn-whatsapp"))),C&&(C.style.display=i?"flex":"none"),D&&(D.textContent=i?"✉️":"💬"),N&&(N.textContent=i?"Copy Quote for Email":"Share Quote on WhatsApp"),W&&(W.textContent=i?"Commercial Quote (PDF)":"Tax Invoice & QR");const E=((z=kt.find(ae=>ae.id===k.selectedCAMProfileId))==null?void 0:z.name.split(" ")[0])||(i?"Standard":"CypCut");G&&(G.textContent=`${E} DXF`);const F=document.getElementById("shareCartWhatsAppBtn"),M=document.getElementById("shareCartBtnIcon"),f=document.getElementById("shareCartBtnText"),u=document.getElementById("usCartShareGroup"),m=document.getElementById("printCartInvoiceText");F&&(F.style.display=i?"none":"flex",i?(F.classList.remove("btn-whatsapp"),F.classList.add("btn-email")):(F.classList.remove("btn-email"),F.classList.add("btn-whatsapp"))),u&&(u.style.display=i?"flex":"none"),M&&(M.textContent=i?"✉️":"💬"),f&&(f.textContent=i?"Copy Project Quote for Email":"Share Project Quote on WhatsApp"),m&&(m.textContent=i?"Commercial Quote (PDF)":"Tax Invoice & QR");const P=document.getElementById("groupAdminGstin"),S=document.getElementById("groupAdminUpi"),L=document.getElementById("groupAdminTaxType"),_=document.getElementById("groupAdminUsDetails"),$=document.getElementById("labelSheetLoading"),v=document.getElementById("labelPricePerKg"),B=document.getElementById("labelPricePerMeterCut"),O=document.getElementById("labelPricePerPierce"),Y=document.getElementById("labelAdminTax");P&&(P.style.display=i?"none":"block"),S&&(S.style.display=i?"none":"block"),L&&(L.style.display=i?"none":"block"),_&&(_.style.display=i?"block":"none"),$&&($.textContent=i?"Handling & Loading Fee ($/sheet)":"Plate Loading / Handling Fee (₹/sheet)"),v&&(v.textContent=i?"Material Rate ($/sq.in)":"Material Rate (₹/kg)"),B&&(B.textContent=i?"Cut Rate ($/lin.in)":"Cut Rate (₹/meter)"),O&&(O.textContent=i?"Pierce Fee ($/pt)":"Pierce Fee (₹/pt)"),Y&&(Y.textContent=i?"Sales Tax (%)":"GST / Tax (%)"),mo(),Sa(),Ca(),Zt(),bt(),dt(),H(),t||se("🇺🇸 US Imperial Mode Active (USD $, Inches, A36/SS304/AL6061, Trumpf DXF)")}function bt(){ut.innerHTML="",pe==="baseplate"?Ma():pe==="flange"?va():pe==="gusset"?ka():pe==="jali"?ho():pe==="bracket"?Pa():pe==="disc"&&Ba()}function Ma(){const n=fe==="inch",t=n?"in":"mm";ut.innerHTML=`
    <div class="preset-pills-row">
      <button class="preset-pill" data-len="${n?6:150}" data-wid="${n?6:150}">${n?'6×6"':"150×150"}</button>
      <button class="preset-pill" data-len="${n?8:200}" data-wid="${n?8:200}">${n?'8×8"':"200×200"}</button>
      <button class="preset-pill" data-len="${n?10:250}" data-wid="${n?8:200}">${n?'10×8"':"250×200 Std"}</button>
      <button class="preset-pill" data-len="${n?12:300}" data-wid="${n?12:300}">${n?'12×12"':"300×300 PEB"}</button>
    </div>

    <div class="form-group">
      <label class="form-label">Plate Length (${t}): <strong id="valBpLen">${R.length}</strong></label>
      <input type="range" id="bpLength" min="${n?2:50}" max="${n?36:900}" value="${R.length}" step="${n?.25:5}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Plate Width (${t}): <strong id="valBpWid">${R.width}</strong></label>
      <input type="range" id="bpWidth" min="${n?2:50}" max="${n?36:900}" value="${R.width}" step="${n?.25:5}" class="form-slider" />
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Corner Finish</label>
        <select id="bpCornerType" class="form-select">
          <option value="chamfer" ${R.cornerType==="chamfer"?"selected":""}>45° Chamfer</option>
          <option value="fillet" ${R.cornerType==="fillet"?"selected":""}>Radius Fillet</option>
          <option value="sharp" ${R.cornerType==="sharp"?"selected":""}>Sharp</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Corner Size (${t})</label>
        <input type="text" id="bpCornerSize" class="form-input" value="${R.cornerSize}" placeholder="${n?"e.g. 3/4 or .75":"mm"}" />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Bolt Hole Type</label>
        <select id="bpHoleType" class="form-select">
          <option value="slotted" ${R.holeType==="slotted"?"selected":""}>Slotted / Oval (Site Tolerance)</option>
          <option value="round" ${R.holeType==="round"?"selected":""}>Round Hole</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Bolt Hole Dia (${t})</label>
        <input type="text" id="bpHoleDia" class="form-input" value="${R.holeDiameter}" placeholder="${n?"e.g. 1/2 or .50":"mm"}" />
      </div>
    </div>

    <div class="form-row" id="slotDimsRow" style="${R.holeType==="slotted"?"display: flex;":"display: none;"}">
      <div class="form-group">
        <label class="form-label">Slot Length (${t})</label>
        <input type="text" id="bpSlotLen" class="form-input" value="${R.slotLength||(n?1.5:35)}" placeholder="${n?"e.g. 1-1/2 or 1.5":"mm"}" />
      </div>
      <div class="form-group">
        <label class="form-label">Slot Width (${t})</label>
        <input type="text" id="bpSlotWid" class="form-input" value="${R.slotWidth||(n?.75:20)}" placeholder="${n?"e.g. 3/4 or .75":"mm"}" />
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Center Cutout (Pipe / Column)</label>
      <select id="bpCenterType" class="form-select">
        <option value="none" ${R.centerCutoutType==="none"?"selected":""}>None (Solid Center)</option>
        <option value="round" ${R.centerCutoutType==="round"?"selected":""}>Round Pipe Cutout</option>
        <option value="rectangular" ${R.centerCutoutType==="rectangular"?"selected":""}>Rectangular / Tube Cutout</option>
      </select>
    </div>

    <div class="form-group" id="centerCutoutDiaGroup" style="${R.centerCutoutType==="round"?"display: block;":"display: none;"}">
      <label class="form-label">Center Hole Diameter (${t}): <strong id="valCenterDia">${R.centerCutoutDiameter||50}</strong></label>
      <input type="range" id="bpCenterDia" min="${n?.5:15}" max="${n?12:300}" value="${R.centerCutoutDiameter||50}" class="form-slider" />
    </div>
  `;const i=document.getElementById("bpLength"),e=document.getElementById("bpWidth"),o=document.getElementById("valBpLen"),a=document.getElementById("valBpWid");i.oninput=()=>{R.length=parseFloat(i.value),o.textContent=i.value,H()},e.oninput=()=>{R.width=parseFloat(e.value),a.textContent=e.value,H()};const s=document.getElementById("bpCornerType"),c=document.getElementById("bpCornerSize");s.onchange=()=>{R.cornerType=s.value,H()},c.oninput=()=>{R.cornerSize=rn(c.value,fe,0),H()};const r=document.getElementById("bpHoleType"),h=document.getElementById("bpHoleDia"),d=document.getElementById("slotDimsRow");r.onchange=()=>{R.holeType=r.value,d.style.display=r.value==="slotted"?"flex":"none",H()},h.oninput=()=>{R.holeDiameter=rn(h.value,fe,n?.75:12),H()};const l=document.getElementById("bpSlotLen"),p=document.getElementById("bpSlotWid");l&&p&&(l.oninput=()=>{R.slotLength=rn(l.value,fe,n?1.5:30),H()},p.oninput=()=>{R.slotWidth=rn(p.value,fe,n?.75:15),H()});const g=document.getElementById("bpCenterType"),y=document.getElementById("centerCutoutDiaGroup"),I=document.getElementById("bpCenterDia"),b=document.getElementById("valCenterDia");g.onchange=()=>{R.centerCutoutType=g.value,y.style.display=g.value==="round"?"block":"none",H()},I&&(I.oninput=()=>{R.centerCutoutDiameter=parseFloat(I.value),b.textContent=I.value,H()}),ut.querySelectorAll(".preset-pill").forEach(w=>{w.onclick=()=>{const D=parseFloat(w.getAttribute("data-len")),N=parseFloat(w.getAttribute("data-wid"));R.length=D,R.width=N,i.value=D.toString(),e.value=N.toString(),o.textContent=D.toString(),a.textContent=N.toString(),H()}})}function va(){ut.innerHTML=`
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
  `;const n=document.getElementById("flangeStandardSelect"),t=document.getElementById("flangePresetSelect"),i=document.getElementById("flangeSpecsBox"),e=a=>{t.innerHTML="";const s=xt.filter(c=>a==="ALL"||c.standard===a);for(let c=0;c<s.length;c++){const r=s[c],h=document.createElement("option");h.value=r.name,h.textContent=`${r.name} [${r.standard}]`,t.appendChild(h)}t.value=et.name,o()},o=()=>{const a=et,s=a.units;i.innerHTML=`
      Outer Diameter: <strong>${a.outerDiameter} ${s}</strong> | Inner Bore: <strong>${a.innerBore} ${s}</strong><br>
      PCD: <strong>${a.pitchCircleDiameter} ${s}</strong> | Bolts: <strong>${a.boltCount} × ⌀${a.boltDiameter} ${s}</strong>
    `};n.onchange=()=>{e(n.value)},t.onchange=()=>{const a=xt.find(s=>s.name===t.value);a&&(et=a,xn(a.units),bn(),o(),H())},e("ALL")}function ka(){const n=fe==="inch",t=n?"in":"mm";ut.innerHTML=`
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
  `;const i=document.getElementById("gussetBaseW"),e=document.getElementById("gussetHeight"),o=document.getElementById("valGussetW"),a=document.getElementById("valGussetH");i.oninput=()=>{ne.baseWidth=parseFloat(i.value),o.textContent=i.value,H()},e.oninput=()=>{ne.height=parseFloat(e.value),a.textContent=e.value,H()};const s=document.getElementById("gussetSnipeCheck"),c=document.getElementById("snipeSizeGroup"),r=document.getElementById("gussetSnipeSize"),h=document.getElementById("valSnipeSize");s.onchange=()=>{ne.hasWeldSnipe=s.checked,c.style.display=s.checked?"block":"none",H()},r.oninput=()=>{ne.snipeSize=parseFloat(r.value),h.textContent=r.value,H()},ut.querySelectorAll(".preset-pill").forEach(d=>{d.onclick=()=>{const l=parseFloat(d.getAttribute("data-w")),p=parseFloat(d.getAttribute("data-h"));ne.baseWidth=l,ne.height=p,i.value=l.toString(),e.value=p.toString(),o.textContent=l.toString(),a.textContent=p.toString(),H()}})}function ho(){const n=fe==="inch",t=n?"in":"mm";ut.innerHTML=`
    <div class="preset-pills-row" style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.85rem;">
      <button class="preset-pill jali-preset" data-w="${n?36:900}" data-h="${n?84:2100}" data-type="single_swing" data-frame="true" data-kick="true" data-kickh="${n?12:300}" data-pat="islamic_star" data-finish="matte_black">🏠 Main Gate 3×7 ft</button>
      <button class="preset-pill jali-preset" data-w="${n?36:900}" data-h="${n?84:2100}" data-type="double_swing" data-frame="true" data-kick="true" data-kickh="${n?14:350}" data-pat="islamic_star" data-finish="royal_gold">🚪 Double Gate 6×7 ft</button>
      <button class="preset-pill jali-preset" data-w="${n?48:1200}" data-h="${n?36:900}" data-type="single_swing" data-frame="true" data-kick="false" data-kickh="0" data-pat="diamond_lattice" data-finish="matte_black">🪟 Balcony 4×3 ft</button>
      <button class="preset-pill jali-preset" data-w="${n?24:600}" data-h="${n?48:1200}" data-type="wall_panel" data-frame="false" data-kick="false" data-kickh="0" data-pat="floral_mandala" data-finish="royal_gold">⛩️ Mandir 2×4 ft</button>
      <button class="preset-pill jali-preset" data-w="${n?48:1200}" data-h="${n?96:2400}" data-type="wall_panel" data-frame="false" data-kick="false" data-kickh="0" data-pat="voronoi_matrix" data-finish="corten_rust">🏢 Facade 4×8 ft</button>
    </div>

    <div class="form-group">
      <label class="form-label">Panel Width (${t}): <strong id="valJaliW">${A.width}</strong></label>
      <input type="range" id="jaliWidth" min="${n?12:300}" max="${n?60:1500}" value="${A.width}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Panel Height (${t}): <strong id="valJaliH">${A.height}</strong></label>
      <input type="range" id="jaliHeight" min="${n?24:600}" max="${n?120:3e3}" value="${A.height}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Architectural Pattern Style</label>
      <select id="jaliPattern" class="form-select">
        <option value="islamic_star" ${A.patternType==="islamic_star"?"selected":""}>Moroccan / Islamic 8-Star & Octagram</option>
        <option value="floral_mandala" ${A.patternType==="floral_mandala"?"selected":""}>Traditional Lotus / Floral Jaali</option>
        <option value="tree_of_life" ${A.patternType==="tree_of_life"?"selected":""}>Tree of Life / Botanical Foliage</option>
        <option value="diamond_lattice" ${A.patternType==="diamond_lattice"?"selected":""}>Diamond Lattice Grill</option>
        <option value="honeycomb" ${A.patternType==="honeycomb"?"selected":""}>Modern Hexagonal Honeycomb</option>
        <option value="modern_slotted" ${A.patternType==="modern_slotted"?"selected":""}>Staggered Vertical Louvers</option>
        <option value="chevron_herringbone" ${A.patternType==="chevron_herringbone"?"selected":""}>Modern Chevron / Herringbone</option>
        <option value="voronoi_matrix" ${A.patternType==="voronoi_matrix"?"selected":""}>Parametric Organic Voronoi</option>
      </select>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Frame Border Margin (${t})</label>
        <input type="number" id="jaliBorder" class="form-input" value="${A.borderMarginMm}" min="${n?.5:15}" max="${n?4:100}" step="${n?.25:1}" />
      </div>
      <div class="form-group">
        <label class="form-label">Grid Columns</label>
        <input type="number" id="jaliCols" class="form-input" value="${A.gridColumns}" min="2" max="12" />
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Grid Rows</label>
      <input type="number" id="jaliRows" class="form-input" value="${A.gridRows}" min="2" max="20" />
    </div>

    <!-- Gate Structure & Hardware Accessories -->
    <div class="jali-hardware-box">
      <div style="font-size: 0.74rem; font-weight: 700; color: #38bdf8; text-transform: uppercase; margin-bottom: 0.2rem; display: flex; justify-content: space-between;">
        <span>🚪 Gate Structure & Hardware</span>
        <span style="font-size: 0.68rem; color: #94a3b8;">Fabrication Ready</span>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliFrameCheck" class="form-checkbox" ${A.hasFrameTube!==!1?"checked":""} />
          <span>${n?'2" Structural Box Tube Frame':"50mm Structural Box Tube Frame"}</span>
        </label>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliKickCheck" class="form-checkbox" ${A.hasKickPlate?"checked":""} />
          <span>Solid Bottom Kickplate</span>
        </label>
      </div>

      <div id="kickHeightRow" class="form-group" style="margin-top: 0.25rem; display: ${A.hasKickPlate?"block":"none"};">
        <label class="form-label" style="font-size: 0.7rem;">Kickplate Height (${t}): <strong id="valKickH">${A.kickPlateHeightMm||(n?12:300)}</strong></label>
        <input type="range" id="jaliKickHeight" min="${n?6:150}" max="${n?24:600}" value="${A.kickPlateHeightMm||(n?12:300)}" step="${n?.5:10}" class="form-slider" />
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliHandleCheck" class="form-checkbox" ${A.hasPullHandle!==!1?"checked":""} />
          <span>Modern Architectural Bar Pull Handle</span>
        </label>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliLockCheck" class="form-checkbox" ${A.hasLockBox!==!1?"checked":""} />
          <span>Mortise Lock Box & Latch</span>
        </label>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliHingeCheck" class="form-checkbox" ${A.hasHinges!==!1?"checked":""} />
          <span>Heavy-Duty Bullet Barrel Hinges</span>
        </label>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliMountHolesCheck" class="form-checkbox" ${A.hasMountingHoles?"checked":""} />
          <span>Perimeter Mounting Standoff Holes</span>
        </label>
      </div>
    </div>
  `;const i=document.getElementById("jaliWidth"),e=document.getElementById("jaliHeight"),o=document.getElementById("valJaliW"),a=document.getElementById("valJaliH");i.oninput=()=>{A.width=parseFloat(i.value),o.textContent=i.value,H()},e.oninput=()=>{A.height=parseFloat(e.value),a.textContent=e.value,H()};const s=document.getElementById("jaliPattern");s.onchange=()=>{A.patternType=s.value,H()};const c=document.getElementById("jaliBorder"),r=document.getElementById("jaliCols"),h=document.getElementById("jaliRows");c.oninput=()=>{A.borderMarginMm=parseFloat(c.value)||(n?1.5:30),H()},r.oninput=()=>{A.gridColumns=parseInt(r.value,10)||4,H()},h&&(h.oninput=()=>{A.gridRows=parseInt(h.value,10)||6,H()});const d=document.getElementById("jaliFrameCheck");d&&(d.onchange=()=>{A.hasFrameTube=d.checked,H()});const l=document.getElementById("jaliKickCheck"),p=document.getElementById("kickHeightRow"),g=document.getElementById("jaliKickHeight"),y=document.getElementById("valKickH");l&&(l.onchange=()=>{A.hasKickPlate=l.checked,p&&(p.style.display=l.checked?"block":"none"),H()}),g&&(g.oninput=()=>{A.kickPlateHeightMm=parseFloat(g.value),y&&(y.textContent=g.value),H()});const I=document.getElementById("jaliHandleCheck");I&&(I.onchange=()=>{A.hasPullHandle=I.checked,H()});const b=document.getElementById("jaliLockCheck");b&&(b.onchange=()=>{A.hasLockBox=b.checked,H()});const w=document.getElementById("jaliHingeCheck");w&&(w.onchange=()=>{A.hasHinges=w.checked,H()});const D=document.getElementById("jaliMountHolesCheck");D&&(D.onchange=()=>{A.hasMountingHoles=D.checked,H()}),ut.querySelectorAll(".jali-preset").forEach(N=>{N.onclick=()=>{const C=parseFloat(N.getAttribute("data-w")),W=parseFloat(N.getAttribute("data-h")),G=N.getAttribute("data-type"),E=N.getAttribute("data-frame")==="true",F=N.getAttribute("data-kick")==="true",M=parseFloat(N.getAttribute("data-kickh")||"0"),f=N.getAttribute("data-pat"),u=N.getAttribute("data-finish");A.width=C,A.height=W,G&&(A.gateType=G),A.hasFrameTube=E,A.hasKickPlate=F,M&&(A.kickPlateHeightMm=M),f&&(A.patternType=f),u&&(A.finishMaterial=u),ho(),H()}})}function Pa(){const n=fe==="inch",t=n?"in":"mm";ut.innerHTML=`
    <div class="form-group">
      <label class="form-label">Base Width (${t}): <strong id="valBrW">${Z.baseWidth}</strong></label>
      <input type="range" id="brWidth" min="${n?2:50}" max="${n?16:400}" value="${Z.baseWidth}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Height (${t}): <strong id="valBrH">${Z.height}</strong></label>
      <input type="range" id="brHeight" min="${n?2:50}" max="${n?16:400}" value="${Z.height}" class="form-slider" />
    </div>
  `;const i=document.getElementById("brWidth"),e=document.getElementById("brHeight"),o=document.getElementById("valBrW"),a=document.getElementById("valBrH");i.oninput=()=>{Z.baseWidth=parseFloat(i.value),o.textContent=i.value,H()},e.oninput=()=>{Z.height=parseFloat(e.value),a.textContent=e.value,H()}}function Ba(){const n=fe==="inch",t=n?"in":"mm";ut.innerHTML=`
    <div class="form-group">
      <label class="form-label">Outer Diameter (${t}): <strong id="valDiscOD">${oe.outerDiameter}</strong></label>
      <input type="range" id="discOD" min="${n?2:50}" max="${n?24:600}" value="${oe.outerDiameter}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Inner Bore Diameter (${t}): <strong id="valDiscID">${oe.innerDiameter}</strong></label>
      <input type="range" id="discID" min="0" max="${n?Math.max(.5,oe.outerDiameter-.5):Math.max(10,oe.outerDiameter-10)}" value="${oe.innerDiameter}" step="${n?.1:1}" class="form-slider" />
    </div>
  `;const i=document.getElementById("discOD"),e=document.getElementById("discID"),o=document.getElementById("valDiscOD"),a=document.getElementById("valDiscID");i.oninput=()=>{oe.outerDiameter=parseFloat(i.value),o.textContent=i.value,e.max=(n?Math.max(.5,oe.outerDiameter-.5):Math.max(10,oe.outerDiameter-10)).toString(),H()},e.oninput=()=>{oe.innerDiameter=parseFloat(e.value),a.textContent=e.value,H()}}function xn(n){if(fe===n)return;const t=fe;fe=n,n==="inch"&&t==="mm"?(R.units="inch",R.length=Math.round(R.length/25.4*2)/2||10,R.width=Math.round(R.width/25.4*2)/2||8,R.cornerSize=Math.round(R.cornerSize/25.4*4)/4||.75,R.holeDiameter=Math.round(R.holeDiameter/25.4*16)/16||.75,R.slotLength&&(R.slotLength=Math.round(R.slotLength/25.4*4)/4||1.5),R.slotWidth&&(R.slotWidth=Math.round(R.slotWidth/25.4*16)/16||.75),R.edgeOffsetX=Math.round(R.edgeOffsetX/25.4*4)/4||1.25,R.edgeOffsetY=Math.round(R.edgeOffsetY/25.4*4)/4||1.25,R.centerCutoutDiameter&&(R.centerCutoutDiameter=Math.round(R.centerCutoutDiameter/25.4*2)/2||2.5),R.centerCutoutWidth&&(R.centerCutoutWidth=Math.round(R.centerCutoutWidth/25.4*2)/2||2),R.centerCutoutHeight&&(R.centerCutoutHeight=Math.round(R.centerCutoutHeight/25.4*2)/2||2),ne.units="inch",ne.baseWidth=Math.round(ne.baseWidth/25.4*2)/2||6,ne.height=Math.round(ne.height/25.4*2)/2||6,ne.snipeSize=Math.round(ne.snipeSize/25.4*4)/4||1,ne.mountingHoleDiameter!==void 0&&(ne.mountingHoleDiameter=Math.round(ne.mountingHoleDiameter/25.4*16)/16||.5),Z.units="inch",Z.baseWidth=Math.round(Z.baseWidth/25.4*2)/2||5,Z.height=Math.round(Z.height/25.4*2)/2||5,Z.chamferTop=Math.round(Z.chamferTop/25.4*2)/2||3,Z.chamferRight=Math.round(Z.chamferRight/25.4*2)/2||3,Z.baseHoleDiameter=Math.round(Z.baseHoleDiameter/25.4*16)/16||.375,Z.uprightHoleDiameter=Math.round(Z.uprightHoleDiameter/25.4*16)/16||.375,Z.lighteningHoleDiameter!==void 0&&(Z.lighteningHoleDiameter=Math.round(Z.lighteningHoleDiameter/25.4*4)/4||1.5),oe.units="inch",oe.outerDiameter=Math.round(oe.outerDiameter/25.4*2)/2||6,oe.innerDiameter=Math.round(oe.innerDiameter/25.4*2)/2||2,oe.pitchCircleDiameter!==void 0&&(oe.pitchCircleDiameter=Math.round(oe.pitchCircleDiameter/25.4*2)/2||4),oe.boltDiameter!==void 0&&(oe.boltDiameter=Math.round(oe.boltDiameter/25.4*16)/16||.375),A.units="inch",A.width=Math.round(A.width/25.4*2)/2||24,A.height=Math.round(A.height/25.4*2)/2||48,A.borderMarginMm=Math.round(A.borderMarginMm/25.4*4)/4||1.5,A.kickPlateHeightMm&&(A.kickPlateHeightMm=Math.round(A.kickPlateHeightMm/25.4*2)/2||12),A.frameTubeWidthMm=Math.round((A.frameTubeWidthMm||50)/25.4*2)/2||2,A.mountingHoleDiameter=Math.round((A.mountingHoleDiameter||8)/25.4*16)/16||.3125):n==="mm"&&t==="inch"&&(R.units="mm",R.length=Math.abs(R.length*25.4-254)<10?250:Math.round(R.length*25.4),R.width=Math.abs(R.width*25.4-203.2)<10?200:Math.round(R.width*25.4),R.cornerSize=Math.abs(R.cornerSize*25.4-19.05)<3?20:Math.round(R.cornerSize*25.4),R.holeDiameter=Math.abs(R.holeDiameter*25.4-19.05)<3?18:Math.round(R.holeDiameter*25.4),R.slotLength&&(R.slotLength=Math.abs(R.slotLength*25.4-38.1)<5?35:Math.round(R.slotLength*25.4)),R.slotWidth&&(R.slotWidth=Math.abs(R.slotWidth*25.4-19.05)<3?20:Math.round(R.slotWidth*25.4)),R.edgeOffsetX=Math.abs(R.edgeOffsetX*25.4-31.75)<5?35:Math.round(R.edgeOffsetX*25.4),R.edgeOffsetY=Math.abs(R.edgeOffsetY*25.4-31.75)<5?35:Math.round(R.edgeOffsetY*25.4),R.centerCutoutDiameter&&(R.centerCutoutDiameter=Math.abs(R.centerCutoutDiameter*25.4-63.5)<5?60:Math.round(R.centerCutoutDiameter*25.4)),R.centerCutoutWidth&&(R.centerCutoutWidth=Math.round(R.centerCutoutWidth*25.4)),R.centerCutoutHeight&&(R.centerCutoutHeight=Math.round(R.centerCutoutHeight*25.4)),ne.units="mm",ne.baseWidth=Math.abs(ne.baseWidth*25.4-152.4)<10?150:Math.round(ne.baseWidth*25.4),ne.height=Math.abs(ne.height*25.4-152.4)<10?150:Math.round(ne.height*25.4),ne.snipeSize=Math.abs(ne.snipeSize*25.4-25.4)<3?25:Math.round(ne.snipeSize*25.4),ne.mountingHoleDiameter!==void 0&&(ne.mountingHoleDiameter=Math.abs(ne.mountingHoleDiameter*25.4-12.7)<3?14:Math.round(ne.mountingHoleDiameter*25.4)),Z.units="mm",Z.baseWidth=Math.abs(Z.baseWidth*25.4-127)<10?120:Math.round(Z.baseWidth*25.4),Z.height=Math.abs(Z.height*25.4-127)<10?120:Math.round(Z.height*25.4),Z.chamferTop=Math.abs(Z.chamferTop*25.4-76.2)<10?80:Math.round(Z.chamferTop*25.4),Z.chamferRight=Math.abs(Z.chamferRight*25.4-76.2)<10?80:Math.round(Z.chamferRight*25.4),Z.baseHoleDiameter=Math.abs(Z.baseHoleDiameter*25.4-9.525)<2?10:Math.round(Z.baseHoleDiameter*25.4),Z.uprightHoleDiameter=Math.abs(Z.uprightHoleDiameter*25.4-9.525)<2?10:Math.round(Z.uprightHoleDiameter*25.4),Z.lighteningHoleDiameter!==void 0&&(Z.lighteningHoleDiameter=Math.abs(Z.lighteningHoleDiameter*25.4-38.1)<5?35:Math.round(Z.lighteningHoleDiameter*25.4)),oe.units="mm",oe.outerDiameter=Math.abs(oe.outerDiameter*25.4-152.4)<10?150:Math.round(oe.outerDiameter*25.4),oe.innerDiameter=Math.abs(oe.innerDiameter*25.4-50.8)<5?50:Math.round(oe.innerDiameter*25.4),oe.pitchCircleDiameter!==void 0&&(oe.pitchCircleDiameter=Math.abs(oe.pitchCircleDiameter*25.4-101.6)<5?100:Math.round(oe.pitchCircleDiameter*25.4)),oe.boltDiameter!==void 0&&(oe.boltDiameter=Math.abs(oe.boltDiameter*25.4-9.525)<2?10:Math.round(oe.boltDiameter*25.4)),A.units="mm",A.width=Math.abs(A.width*25.4-609.6)<20?600:Math.round(A.width*25.4),A.height=Math.abs(A.height*25.4-1219.2)<30?1200:Math.round(A.height*25.4),A.borderMarginMm=Math.abs(A.borderMarginMm*25.4-38.1)<5?35:Math.round(A.borderMarginMm*25.4),A.kickPlateHeightMm&&(A.kickPlateHeightMm=Math.abs(A.kickPlateHeightMm*25.4-304.8)<15?300:Math.round(A.kickPlateHeightMm*25.4)),A.frameTubeWidthMm=Math.abs((A.frameTubeWidthMm||2)*25.4-50.8)<5?50:Math.round((A.frameTubeWidthMm||2)*25.4),A.mountingHoleDiameter=Math.abs((A.mountingHoleDiameter||.3125)*25.4-7.9375)<2?8:Math.round((A.mountingHoleDiameter||.3125)*25.4))}function bn(){const n=document.getElementById("unitMm"),t=document.getElementById("unitInch");n&&t&&(n.classList.toggle("active",fe==="mm"),t.classList.toggle("active",fe==="inch"))}function Zt(){const n=k.currency==="USD",t=document.getElementById("adminShopName"),i=document.getElementById("adminGstin"),e=document.getElementById("adminUpiId"),o=document.getElementById("adminMinOrder"),a=document.getElementById("adminSheetLoading"),s=document.getElementById("adminPricePerKg"),c=document.getElementById("adminPricePerMeterCut"),r=document.getElementById("adminPricePerPierce"),h=document.getElementById("adminGstPercent"),d=document.getElementById("adminTaxType");t&&(t.value=k.shopName),i&&(i.value=k.shopGstin||""),e&&(e.value=k.upiId||""),o&&(o.value=k.minimumOrderFee.toString()),a&&(a.value=k.sheetLoadingFee.toString()),d&&(d.value=k.isInterstateSale?"interstate":"intrastate");const l=document.getElementById("adminNaics"),p=document.getElementById("adminTaxId"),g=document.getElementById("adminPaymentTerms"),y=document.getElementById("adminLaserPower"),I=document.getElementById("adminHourlyRate"),b=document.getElementById("adminShopEmail"),w=document.getElementById("adminSetupFee"),D=document.getElementById("adminSalesTaxExempt");l&&(l.value=k.naicsCode||"332813 - Laser Cutting & Fabrication"),p&&(p.value=k.einOrTaxId||"34-8910245"),g&&(g.value=k.paymentTerms||"Net 30, Credit Card, ACH"),y&&(y.value=(k.laserPowerKw||4).toString()),I&&(I.value=(k.hourlyLaserRateUsd||185).toString()),b&&(b.value=k.shopEmail||"quotes@midwestprecision.com"),w&&(w.value=(k.setupFeePerJob||25).toString()),D&&(D.checked=!!k.salesTaxExempt),n?(s&&(s.value=(Q.pricePerSqInch||.05).toString()),c&&(c.value=(Q.pricePerLinearInchCut||.1).toString())):(s&&(s.value=(Q.pricePerKg||75).toString()),c&&(c.value=(Q.pricePerMeterCut||20).toString())),r&&(r.value=Q.pricePerPierce.toString()),h&&(h.value=k.gstPercent.toString());const N=document.getElementById("activeGaugeBadge");if(N&&J&&Q)if(n){const C=J.id.includes("a36")?"A36":J.id.includes("ss304")?"SS 304":J.id.includes("6061")?"AL 6061":"Steel",W=Q.gaugeName.split("(")[0].trim();N.textContent=`${C} • ${W}`}else{const C=J.id.includes("is2062")?"IS 2062":J.id.includes("ss304")?"SS 304":J.id.includes("aluminum")?"AL 6061":J.name.split(" ")[0],W=Q.gaugeName.replace("Sheet","").replace("Plate","").trim();N.textContent=`${C} • ${W}`}}function se(n){const t=document.getElementById("toastNotification");t&&(t.textContent=n,t.classList.remove("hidden"),setTimeout(()=>{t.classList.add("hidden")},2500))}function wa(n,t){if(n.length===0)return{x:0,y:0};if(t<=0){const s=n[0];return s.type==="line"?s.start:{x:s.center.x+s.radius*Math.cos(s.startAngle),y:s.center.y+s.radius*Math.sin(s.startAngle)}}if(t>=1){const s=n[n.length-1];return s.type==="line"?s.end:{x:s.center.x+s.radius*Math.cos(s.endAngle),y:s.center.y+s.radius*Math.sin(s.endAngle)}}const i=n.map(s=>{if(s.type==="line")return Math.sqrt((s.end.x-s.start.x)**2+(s.end.y-s.start.y)**2);{let c=s.counterClockwise?s.endAngle-s.startAngle:s.startAngle-s.endAngle;for(;c<0;)c+=2*Math.PI;for(;c>2*Math.PI;)c-=2*Math.PI;return s.radius*c}}),e=i.reduce((s,c)=>s+c,0),o=t*e;let a=0;for(let s=0;s<n.length;s++){const c=n[s],r=i[s];if(a+r>=o||s===n.length-1){const h=r>0?(o-a)/r:0;if(c.type==="line")return{x:c.start.x+(c.end.x-c.start.x)*h,y:c.start.y+(c.end.y-c.start.y)*h};{let d=c.counterClockwise?c.endAngle-c.startAngle:c.startAngle-c.endAngle;for(;d<0;)d+=2*Math.PI;for(;d>2*Math.PI;)d-=2*Math.PI;const l=c.counterClockwise?c.startAngle+d*h:c.startAngle-d*h;return{x:c.center.x+c.radius*Math.cos(l),y:c.center.y+c.radius*Math.sin(l)}}}a+=r}return{x:0,y:0}}function Ea(){var c,r,h,d,l,p;if(Ht){ci();return}$t="part",(c=document.getElementById("btnViewPart"))==null||c.classList.add("active"),(r=document.getElementById("btnViewNesting"))==null||r.classList.remove("active"),pe==="jali"&&Ue==="realistic_gate"&&(Ue="cam_toolpath",(h=document.getElementById("btnJaliViewRealistic"))==null||h.classList.remove("active"),(d=document.getElementById("btnJaliViewCam"))==null||d.classList.add("active"),(l=document.getElementById("camLegendBar"))==null||l.classList.remove("hidden"),(p=document.getElementById("archLegendBar"))==null||p.classList.add("hidden"));const n=Se();if(St=ro(n,Q.feedRateMmMin,Q.pierceDelaySec),St.length===0)return;Ht=!0,qt=0;const t=document.getElementById("simSpeedSelect");At=parseFloat((t==null?void 0:t.value)||"1")||1;const i=document.getElementById("simHudOverlay");i&&i.classList.remove("hidden");const e=document.getElementById("btnSimulateCut");e&&(e.textContent="⏸ Pause",e.classList.add("simulating"));let o=0,a=performance.now();function s(g){if(!Ht)return;const y=St[qt];if(!y){La();return}const I=Math.min(.1,(g-a)/1e3);a=g,o+=I*At;const b=o,w=.5,D=b<w;let N=0;if(!D){const L=Math.max(.01,y.simulatedDurationSec-w);N=Math.min(1,(b-w)/L)}let C=y.piercePoint;!D&&y.segments.length>0&&(C=wa(y.segments,N)),ee.innerHTML=In(n,{showCutOrder:Ge,dfmIssues:mt==null?void 0:mt.issues,highlightedHoleIndex:ct,simulationState:{activeStepIndex:y.stepIndex,nozzlePos:C,isPiercing:D,progressRatio:N}}),_e();const W=document.getElementById("simStatusText"),G=document.getElementById("simProgressBar"),E=document.getElementById("simStepText"),F=document.getElementById("simTimeText");W&&(W.innerHTML=D?`<span style="color:#ef4444; font-weight:700;">🔥 PIERCING</span> ${y.label} (${y.layerName})`:`<span style="color:#22c55e; font-weight:700;">⚡ CUTTING</span> ${y.label} (${Math.round(N*100)}%)`);const M=St.reduce((L,_)=>L+_.simulatedDurationSec,0),f=St.slice(0,qt).reduce((L,_)=>L+_.simulatedDurationSec,0),u=Math.min(y.simulatedDurationSec,b),m=M>0?(f+u)/M:0;G&&(G.style.width=`${Math.min(100,Math.round(m*100))}%`),E&&(E.textContent=`Step ${qt+1} of ${St.length}`);const P=M/At;if(F){const L=Math.min(P,(f+u)/At);F.textContent=`${L.toFixed(1)}s / ${P.toFixed(1)}s (${At}x)`}const S=y.simulatedDurationSec;(b>=S||!D&&N>=1)&&(qt++,o=0,a=performance.now()),Vt=requestAnimationFrame(s)}o=0,a=performance.now(),Vt=requestAnimationFrame(s)}function ci(){Ht=!1,Vt&&(cancelAnimationFrame(Vt),Vt=null);const n=document.getElementById("simHudOverlay");n&&n.classList.add("hidden");const t=document.getElementById("btnSimulateCut");t&&(t.textContent="▶ Simulate Cut Order",t.classList.remove("simulating")),H()}function La(){const n=document.getElementById("simStatusText"),t=document.getElementById("simProgressBar");n&&(n.innerHTML='<span style="color:#38bdf8; font-weight:700;">✅ SIMULATION COMPLETE:</span> Inner Cutouts Cut First, Outer Contour Cut Last'),t&&(t.style.width="100%");const i=Se();ee.innerHTML=In(i,{showCutOrder:Ge,dfmIssues:mt==null?void 0:mt.issues,highlightedHoleIndex:ct,simulationState:{activeStepIndex:St.length+1,isPiercing:!1}}),_e(),setTimeout(()=>{ci()},2200)}function jt(){var e,o,a;const n=((e=document.getElementById("cartProjectName"))==null?void 0:e.value.trim())||"Custom Assembly Project",t=((o=document.getElementById("cartCustomerName"))==null?void 0:o.value.trim())||"Valued Customer",i=((a=document.getElementById("cartCustomerPhone"))==null?void 0:a.value.trim())||"";return{id:`PRJ-${Date.now().toString().slice(-6)}`,projectName:n,customerName:t,customerPhone:i,items:me,selectedSheetSize:De,shopSettings:k,allowRotation:!0}}function dt(){const n=document.getElementById("cartItemsList"),t=document.getElementById("cartBadge"),i=document.getElementById("nestCartCount"),e=document.getElementById("cartSummaryBox"),o=document.getElementById("shareCartWhatsAppBtn"),a=document.getElementById("printCartInvoiceBtn"),s=document.getElementById("printCartJobCardBtn");if(t&&(t.textContent=me.length.toString(),t.style.display=me.length>0?"inline-block":"none"),i&&(i.textContent=me.length.toString()),!n)return;if(me.length===0){n.innerHTML=`
      <div class="empty-cart-state">
        <span class="empty-icon">🛒</span>
        <h4>Your RFQ Cart is Empty</h4>
        <p>Configure parametric parts or upload DXFs, then click <strong>"➕ Add Part to RFQ Cart"</strong> to assemble multi-part project orders with combined nesting.</p>
      </div>
    `,e&&e.classList.add("hidden"),o&&(o.disabled=!0),a&&(a.disabled=!0),s&&(s.disabled=!0);const M=document.getElementById("btnEmailCartQuote"),f=document.getElementById("btnCopyCartRfqText");M&&(M.disabled=!0),f&&(f.disabled=!0);return}e&&e.classList.remove("hidden"),o&&(o.disabled=!1),a&&(a.disabled=!1),s&&(s.disabled=!1);const c=document.getElementById("btnEmailCartQuote"),r=document.getElementById("btnCopyCartRfqText");c&&(c.disabled=!1),r&&(r.disabled=!1);const h=Tt(me,k,De);Ft=h,n.innerHTML="",me.forEach((M,f)=>{const u=document.createElement("div");u.className="cart-item-card";const m=k.currency==="INR"?"₹":"$",P=(M.unitQuote.finalUnitPrice*M.quantity).toFixed(2);u.innerHTML=`
      <div class="cart-item-header">
        <div class="cart-item-info">
          <span class="cart-item-num">#${f+1}</span>
          <span class="cart-item-name">${M.partGeometry.name}</span>
          <span class="cart-item-badge">${M.materialName} (${M.gaugeThicknessMm}mm)</span>
        </div>
        <button class="cart-item-del-btn" data-id="${M.id}" title="Remove part">✕</button>
      </div>
      <div class="cart-item-specs">
        <span>Dim: ${k.currency==="USD"?(M.partGeometry.boundingBox.width/(M.partGeometry.units==="inch"?1:25.4)).toFixed(1)+"×"+(M.partGeometry.boundingBox.height/(M.partGeometry.units==="inch"?1:25.4)).toFixed(1)+'"':M.partGeometry.boundingBox.width.toFixed(0)+"×"+M.partGeometry.boundingBox.height.toFixed(0)+"mm"}</span>
        <span>Cut: ${k.currency==="USD"?M.metrics.totalCutLengthInches.toFixed(1)+"in":(M.metrics.totalCutLengthMm/1e3).toFixed(2)+"m"}</span>
        <span>Pierces: ${M.metrics.pierceCount}</span>
        <span>Wt: ${k.currency==="USD"?(M.metrics.theoreticalWeightLbs*M.quantity).toFixed(2)+"lbs":(M.metrics.theoreticalWeightKg*M.quantity).toFixed(2)+"kg"}</span>
      </div>
      <div class="cart-item-controls">
        <div class="cart-qty-stepper">
          <button class="cart-qty-btn btn-cart-minus" data-id="${M.id}">-</button>
          <input type="number" class="cart-qty-input" data-id="${M.id}" value="${M.quantity}" min="1" max="9999" />
          <button class="cart-qty-btn btn-cart-plus" data-id="${M.id}">+</button>
        </div>
        <div class="cart-item-pricing">
          <span class="cart-unit-rate">(${m}${M.unitQuote.finalUnitPrice.toFixed(2)} / pc)</span>
          <span class="cart-item-total">${m}${P}</span>
        </div>
      </div>
    `,n.appendChild(u)}),n.querySelectorAll(".cart-item-del-btn").forEach(M=>{M.onclick=f=>{const u=f.currentTarget.getAttribute("data-id");me=me.filter(m=>m.id!==u),dt(),Ve==="cart"&&H(),se("🗑️ Part removed from cart")}}),n.querySelectorAll(".btn-cart-minus").forEach(M=>{M.onclick=f=>{const u=f.currentTarget.getAttribute("data-id"),m=me.find(P=>P.id===u);m&&m.quantity>1&&(m.quantity--,m.unitQuote=Ze(m.metrics,Q,m.quantity,k,m.secondaryOps),m.totalPrice=m.unitQuote.finalOrderTotal,dt(),Ve==="cart"&&H())}}),n.querySelectorAll(".btn-cart-plus").forEach(M=>{M.onclick=f=>{const u=f.currentTarget.getAttribute("data-id"),m=me.find(P=>P.id===u);m&&(m.quantity++,m.unitQuote=Ze(m.metrics,Q,m.quantity,k,m.secondaryOps),m.totalPrice=m.unitQuote.finalOrderTotal,dt(),Ve==="cart"&&H())}}),n.querySelectorAll(".cart-qty-input").forEach(M=>{M.onchange=f=>{const u=f.target,m=u.getAttribute("data-id"),P=Math.max(1,parseInt(u.value,10)||1),S=me.find(L=>L.id===m);S&&(S.quantity=P,S.unitQuote=Ze(S.metrics,Q,S.quantity,k,S.secondaryOps),S.totalPrice=S.unitQuote.finalOrderTotal,dt(),Ve==="cart"&&H())}});const d=k.currency==="USD",l=d?"$":"₹",p=document.getElementById("cartTotalParts"),g=document.getElementById("cartTotalCut"),y=document.getElementById("cartTotalPierces"),I=document.getElementById("cartTotalMass"),b=document.getElementById("cartNestingText"),w=document.getElementById("cartCostMaterial"),D=document.getElementById("cartCostCut"),N=document.getElementById("cartCostPierce"),C=document.getElementById("cartCostSecondary"),W=document.getElementById("cartCostDiscount"),G=document.getElementById("cartGstLabel"),E=document.getElementById("cartCostGst"),F=document.getElementById("cartTotalIncGst");if(p&&(p.textContent=`${h.totalPartsCount} pcs`),g&&(g.textContent=d?`${(h.totalCutLengthMeters*39.3701).toFixed(1)} in`:`${h.totalCutLengthMeters.toFixed(1)} m`),y&&(y.textContent=h.totalPierces.toString()),I&&(I.textContent=d?`${(h.totalNetPartMassKg*2.20462).toFixed(1)} lbs`:`${h.totalNetPartMassKg.toFixed(2)} kg`),b){const M=h.nestingResult.sheetsRequired;b.textContent=`Nesting: ${M} Sheet${M>1?"s":""} of ${De.name} (${h.nestingResult.sheetUtilizationPercent}% util)`}w&&(w.textContent=`${l}${h.totalMaterialCost.toFixed(2)}`),D&&(D.textContent=`${l}${h.totalCutCost.toFixed(2)}`),N&&(N.textContent=`${l}${h.totalPierceCost.toFixed(2)}`),C&&(C.textContent=`${l}${h.totalSecondaryCost.toFixed(2)}`),W&&(W.textContent=`-${h.volumeDiscountPercent}% (${l}${h.discountAmount.toFixed(2)})`),G&&(G.textContent=d?`Sales Tax (${k.gstPercent||0}%):`:k.isInterstateSale?"IGST (18%):":"GST (CGST 9% + SGST 9%):"),E&&(E.textContent=`${l}${h.gstAmount.toFixed(2)}`),F&&(F.textContent=`${l}${h.finalTotalWithGst.toFixed(2)}`)}function Ta(){const n=document.getElementById("btnCurrencyINR"),t=document.getElementById("btnCurrencyUSD");n&&(n.style.display="none",n.onclick=()=>ii("USD")),t&&(t.onclick=()=>ii("USD"));const i=document.getElementById("modeJobWork"),e=document.getElementById("modeWithMaterial"),o=document.getElementById("modeSqFtJali");i&&(i.onclick=()=>Xt("job_work")),e&&(e.onclick=()=>Xt("with_material")),o&&(o.onclick=()=>Xt("sqft_jali"));const a=document.getElementById("btnViewPart"),s=document.getElementById("btnViewNesting");a&&s&&(a.onclick=()=>{$t="part",a.classList.add("active"),s.classList.remove("active"),Yt(),H()},s.onclick=()=>{$t="nesting",s.classList.add("active"),a.classList.remove("active"),Yt(),H()});const c=document.getElementById("btnJaliViewRealistic"),r=document.getElementById("btnJaliViewCam");c&&r&&(c.onclick=()=>{Ue="realistic_gate",H()},r.onclick=()=>{Ue="cam_toolpath",H()}),document.querySelectorAll(".finish-swatch").forEach(x=>{x.onclick=()=>{const T=x.getAttribute("data-finish");T&&(A.finishMaterial=T,H())}}),document.querySelectorAll(".backlight-pill").forEach(x=>{x.onclick=()=>{const T=x.getAttribute("data-backlight");T&&(A.backlightColor=T,H())}}),document.querySelectorAll(".gate-type-btn").forEach(x=>{x.onclick=()=>{const T=x.getAttribute("data-gatetype");T&&(A.gateType=T,bt(),H())}});const h=document.getElementById("btnFoldGateToolbar"),d=document.getElementById("btnExpandGateToolbar"),l=document.getElementById("gateFoldedBar");h&&(h.onclick=x=>{x.stopPropagation(),hn=!0,Mt(),_e()}),d&&(d.onclick=x=>{x.stopPropagation(),hn=!1,Mt(),_e()}),l&&(l.onclick=()=>{hn=!1,Mt(),_e()});const p=document.getElementById("btnFoldBottomHud"),g=document.getElementById("btnExpandBottomHud"),y=document.getElementById("bottomHudFoldedBar");p&&(p.onclick=x=>{x.stopPropagation(),pn=!0,Mt(),_e()}),g&&(g.onclick=x=>{x.stopPropagation(),pn=!1,Mt(),_e()}),y&&(y.onclick=()=>{pn=!1,Mt(),_e()}),mn&&(mn.value=k.assistGas,mn.onchange=()=>{k.assistGas=mn.value,H()}),vt&&(vt.onchange=()=>{const T=(k.currency==="USD"?$n:Gt).find(U=>U.id===vt.value);T&&(De=T),H()});const I=document.getElementById("toggleSecOpsBtn"),b=document.getElementById("secOpsContent"),w=document.getElementById("secOpsChevron");I&&b&&(I.onclick=()=>{b.classList.toggle("hidden"),w&&(w.textContent=b.classList.contains("hidden")?"▶":"▼")});const D=document.getElementById("secBendsCount"),N=document.getElementById("secTapsCount"),C=document.getElementById("secDeburringCheck"),W=document.getElementById("secSurfaceFinish");D&&(D.oninput=()=>{ze.bendingBendsCount=parseInt(D.value,10)||0,H()}),N&&(N.oninput=()=>{ze.tappingHolesCount=parseInt(N.value,10)||0,H()}),C&&(C.onchange=()=>{ze.deburringEnabled=C.checked,H()}),W&&(W.onchange=()=>{ze.surfaceFinish=W.value,H()}),document.querySelectorAll(".shape-btn").forEach(x=>{x.onclick=()=>{var T,U,j,q;document.querySelectorAll(".shape-btn").forEach(K=>K.classList.remove("active")),x.classList.add("active"),pe=x.getAttribute("data-shape"),Dt=!1,pe==="jali"?(Xt("sqft_jali"),Ue="realistic_gate",Ge=!1,(T=document.getElementById("btnToggleCamBadges"))==null||T.classList.remove("active"),(U=document.getElementById("legendBadgeToggle"))==null||U.classList.remove("active")):(Ge=!0,(j=document.getElementById("btnToggleCamBadges"))==null||j.classList.add("active"),(q=document.getElementById("legendBadgeToggle"))==null||q.classList.add("active")),bt(),Yt(),H()}}),Jt.onchange=()=>{const x=rt.find(T=>T.id===Jt.value);x&&(J=x,uo(),Zt(),H())},Nt.onchange=()=>{const x=parseInt(Nt.value,10);Q=J.gauges[x],Zt(),H()};const G=document.getElementById("partQuantity"),E=document.getElementById("qtyMinus"),F=document.getElementById("qtyPlus");G.oninput=()=>{Ce=Math.max(1,parseInt(G.value,10)||1),H()},E.onclick=()=>{Ce=Math.max(1,Ce-1),G.value=Ce.toString(),H()},F.onclick=()=>{Ce++,G.value=Ce.toString(),H()};const M=document.getElementById("addToCartBtn");M&&(M.onclick=()=>{const x=Se(),T=yt(x,Q.thicknessMm,J.densityGPerCm3),U=Ze(T,Q,Ce,k,ze),j={id:`item_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,partGeometry:JSON.parse(JSON.stringify(x)),materialId:J.id,materialName:J.name,gaugeThicknessMm:Q.thicknessMm,quantity:Ce,secondaryOps:{...ze},metrics:T,unitQuote:U,totalPrice:U.finalOrderTotal,color:["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"][me.length%6],createdAt:Date.now()};me.push(j),dt(),se(`➕ Added ${Ce}× "${j.partGeometry.name}" to RFQ Cart!`);const q=document.getElementById("tabCart");q&&(q.classList.add("pulse"),setTimeout(()=>q.classList.remove("pulse"),1200))});const f=document.getElementById("btnSimulateCut"),u=document.getElementById("btnStopSim"),m=document.getElementById("btnToggleCamBadges"),P=document.getElementById("simSpeedSelect");f&&(f.onclick=()=>{Ea()}),u&&(u.onclick=()=>{ci()});const S=document.getElementById("legendBadgeToggle"),L=()=>{Ge=!Ge,m==null||m.classList.toggle("active",Ge),S==null||S.classList.toggle("active",Ge),H()};m&&(m.onclick=L),S&&(S.onclick=L),P&&(P.onchange=()=>{At=parseFloat(P.value)||1});const _=document.getElementById("btnPrevSheet"),$=document.getElementById("btnNextSheet"),v=document.getElementById("btnNestSourceSingle"),B=document.getElementById("btnNestSourceCart"),O=document.getElementById("btnNestCartOnBed");_&&(_.onclick=()=>{Oe>0&&(Oe--,H())}),$&&($.onclick=()=>{ni&&Oe<ni.sheetsRequired-1&&(Oe++,H())}),v&&B&&(v.onclick=()=>{Ve="single",v.classList.add("active"),B.classList.remove("active"),Oe=0,H()},B.onclick=()=>{if(me.length===0){se("⚠️ RFQ Cart is empty. Add parts first.");return}Ve="cart",B.classList.add("active"),v.classList.remove("active"),Oe=0,H()}),O&&(O.onclick=()=>{var x,T;if(me.length===0){se("⚠️ RFQ Cart is empty. Add parts first.");return}Ve="cart",$t="nesting",(x=document.getElementById("btnViewNesting"))==null||x.classList.add("active"),(T=document.getElementById("btnViewPart"))==null||T.classList.remove("active"),B==null||B.classList.add("active"),v==null||v.classList.remove("active"),Oe=0,H()});const Y=document.getElementById("clearCartBtn");Y&&(Y.onclick=()=>{me.length>0&&confirm("Clear all items from your RFQ Cart?")&&(me=[],dt(),Ve==="cart"&&(Ve="single",v==null||v.classList.add("active"),B==null||B.classList.remove("active"),H()),se("🛒 RFQ Cart cleared"))});const z=document.getElementById("shareCartWhatsAppBtn");z&&(z.onclick=()=>{if(me.length===0)return;const x=jt(),T=Ft||Tt(me,k,De);if(k.currency==="USD"){const U=Qn(x,T,x.customerName);if(navigator.clipboard.writeText(U).then(()=>{se("✉️ Project Quotation copied to clipboard! (Ready for email)")}).catch(()=>{se("Quotation copied.")}),x.customerPhone&&x.customerPhone.includes("@")){const j=encodeURIComponent(`Quotation: ${x.projectName||"Laser Project RFQ"} — ${k.shopName}`),q=encodeURIComponent(U);window.open(`mailto:${x.customerPhone}?subject=${j}&body=${q}`,"_blank")}}else{const U=qo(x,T),j=k.currency==="INR"?"91":"1",q=_i(U,x.customerPhone,j);window.open(q,"_blank")}});function ae(x){const T=document.getElementById("rfqSubmitModal");if(!T)return;const U=document.getElementById("rfqSummaryPartLabel"),j=document.getElementById("rfqSummaryTotal"),q=document.getElementById("btnSubmitRfqEmail"),K=document.getElementById("btnDownloadRfqPdf"),he=document.getElementById("closeRfqModalBtn");let Be="$0.00",Ae=null,ve=null;{if(me.length===0){se("⚠️ RFQ Cart is empty. Add parts before submitting quote.");return}ve=jt(),Ae=Ft||Tt(me,k,De),Be=`$${Ae.finalTotalWithGst.toFixed(2)}`,U&&(U.textContent=`Project RFQ: ${ve.projectName||"Batch Project"} (${me.length} parts)`)}j&&(j.textContent=Be),he==null||he.addEventListener("click",()=>T.classList.add("hidden"),{once:!0}),T.addEventListener("click",We=>{We.target===T&&T.classList.add("hidden")},{once:!0}),q&&(q.onclick=()=>{var Si,Mi,vi,ki,Pi,Bi,wi,Ei,Li,Ti,Di;const We=((Si=document.getElementById("rfqCustomerName"))==null?void 0:Si.value.trim())||"Valued Client",Re=((Mi=document.getElementById("rfqCompanyName"))==null?void 0:Mi.value.trim())||"",ot=((vi=document.getElementById("rfqCustomerEmail"))==null?void 0:vi.value.trim())||"",at=((ki=document.getElementById("rfqCustomerPhone"))==null?void 0:ki.value.trim())||"",ht=((Pi=document.getElementById("rfqProjectRef"))==null?void 0:Pi.value.trim())||"",pt=((Bi=document.getElementById("rfqShippingZip"))==null?void 0:Bi.value.trim())||"",gt=((wi=document.getElementById("rfqLeadTimeSelect"))==null?void 0:wi.value)||"standard",ft=((Ei=document.getElementById("rfqDeliveryMethod"))==null?void 0:Ei.value)||"dock_pickup",Ut=((Li=document.getElementById("rfqMtrCerts"))==null?void 0:Li.checked)||!1,bi=((Ti=document.getElementById("rfqTaxExempt"))==null?void 0:Ti.checked)||!1,zn=((Di=document.getElementById("rfqNotes"))==null?void 0:Di.value.trim())||"",$i=k.shopEmail||"quotes@midwestprecision.com",fo=`Manufacturing RFQ: ${ht||"Batch Project"} — ${Re||We}`;let Ci="";ve&&(Ci=Qn(ve,Ae,We));const Ii=["====================================================","COMMERCIAL MANUFACTURING REQUEST FOR QUOTE (RFQ)","====================================================",`Date: ${new Date().toLocaleDateString("en-US")}`,`Destination Shop: ${k.shopName} (${$i})`,"","CUSTOMER / BUYER INFORMATION:",`• Contact: ${We}`,Re?`• Company: ${Re}`:"",ot?`• Email: ${ot}`:"",at?`• Phone: ${at}`:"",ht?`• Project / PO #: ${ht}`:"",pt?`• Destination Zip Code: ${pt}`:"",`• Turnaround Requested: ${gt==="rush"?"24-Hour Rush":gt==="expedited"?"Expedited (2-3 Days)":"Standard (5-7 Days)"}`,`• Delivery: ${ft==="freight"?"UPS Ground / LTL Freight":"Shop Dock Pickup / Will-Call"}`,Ut?"• Quality: Material Test Reports (MTRs / Mill Certs) REQUIRED":"",bi?"• Commercial: Tax-Exempt Wholesale Order (Resale Cert on file)":"",zn?`
CUSTOMER NOTES / FINISH SPECS:
${zn}`:"",`
----------------------------------------------------`,Ci,"===================================================="].filter(Boolean).join(`
`);navigator.clipboard.writeText(Ii).then(()=>{se("✉️ Manufacturing RFQ copied to clipboard & dispatched!")}).catch(()=>{se("RFQ copied.")});const yo=`mailto:${encodeURIComponent($i)}?cc=${encodeURIComponent(ot)}&subject=${encodeURIComponent(fo)}&body=${encodeURIComponent(Ii)}`;if(window.open(yo,"_blank"),k.rfqWebhookUrl)try{fetch(k.rfqWebhookUrl,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({shopName:k.shopName,timestamp:Date.now(),customer:{name:We,company:Re,email:ot,phone:at,zip:pt},project:{projectRef:ht,leadTime:gt,delivery:ft,mtr:Ut,taxExempt:bi,notes:zn},quote:Ae})}).catch(console.error)}catch(xo){console.warn("Webhook dispatch failed:",xo)}T.classList.add("hidden")}),K&&(K.onclick=()=>{var ht,pt;(ht=document.getElementById("rfqCustomerName"))!=null&&ht.value.trim(),(pt=document.getElementById("rfqCustomerPhone"))!=null&&pt.value.trim();const We=document.getElementById("docModal"),Re=document.getElementById("docModalTitle"),ot=document.getElementById("docFrame");let at="";ve&&(at=Oi(ve,Ae),Re.textContent=`Commercial Manufacturing Quotation — ${ve.projectName}`),We.classList.remove("hidden"),ot.srcdoc=at,T.classList.add("hidden")}),T.classList.remove("hidden")}const ye=document.getElementById("btnEmailCartQuote");ye&&(ye.onclick=()=>{ae()});const Je=document.getElementById("btnCopyCartRfqText");Je&&(Je.onclick=()=>{if(me.length===0)return;const x=jt(),T=Ft||Tt(me,k,De),U=Qn(x,T,x.customerName);navigator.clipboard.writeText(U).then(()=>{se("📋 Project RFQ Text copied to clipboard!")}).catch(()=>{se("Project RFQ Text copied.")})});const Qe=document.getElementById("printCartInvoiceBtn");Qe&&(Qe.onclick=()=>{if(me.length===0)return;const x=jt(),T=Ft||Tt(me,k,De),U=Oi(x,T),j=document.getElementById("docModal"),q=document.getElementById("docModalTitle"),K=document.getElementById("docFrame");q.textContent=k.currency==="USD"?`Project Quotation — ${x.projectName}`:`Project Tax Invoice — ${x.projectName} (with UPI QR)`,j.classList.remove("hidden"),K.srcdoc=U});const ie=document.getElementById("printCartJobCardBtn");ie&&(ie.onclick=()=>{if(me.length===0)return;const x=jt(),T=Ft||Tt(me,k,De),U=ea(x,T),j=document.getElementById("docModal"),q=document.getElementById("docModalTitle"),K=document.getElementById("docFrame");q.textContent=`Batch Job Card — ${x.projectName}`,j.classList.remove("hidden"),K.srcdoc=U});const X=document.getElementById("shareWhatsAppBtn"),V=document.getElementById("customerPhoneInput");X&&(X.onclick=()=>{const x=Se(),T=yt(x,Q.thicknessMm,J.densityGPerCm3),U=Ze(T,Q,Ce,k,ze),j=V?V.value.trim():"";if(k.currency==="USD"){const q=sn(x.name,T,J.name,Q,U,k.shopName,k,"Valued Customer");if(navigator.clipboard.writeText(q).then(()=>{se("✉️ Manufacturing Quotation copied to clipboard! (Ready for email)")}).catch(()=>{se("Quotation copied.")}),j.includes("@")){const K=encodeURIComponent(`Quotation: ${x.name} — ${k.shopName}`),he=encodeURIComponent(q);window.open(`mailto:${j}?subject=${K}&body=${he}`,"_blank")}}else{const q=Wi(x.name,T,J.name,Q,U,k.shopName,k),K=k.currency==="INR"?"91":"1",he=_i(q,j,K);window.open(he,"_blank")}});const ce=document.getElementById("btnEmailQuote");ce&&(ce.onclick=()=>{const x=Se(),T=yt(x,Q.thicknessMm,J.densityGPerCm3),U=Ze(T,Q,Ce,k,ze),j=V?V.value.trim():"",q=sn(x.name,T,J.name,Q,U,k.shopName,k,"Valued Customer");if(navigator.clipboard.writeText(q).then(()=>{se("✉️ Manufacturing Quotation copied to clipboard! (Ready for email)")}).catch(()=>{se("Quotation copied.")}),j.includes("@")){const K=encodeURIComponent(`Quotation: ${x.name} — ${k.shopName}`),he=encodeURIComponent(q);window.open(`mailto:${j}?subject=${K}&body=${he}`,"_blank")}});const xe=document.getElementById("btnCopyRfqText");xe&&(xe.onclick=()=>{const x=Se(),T=yt(x,Q.thicknessMm,J.densityGPerCm3),U=Ze(T,Q,Ce,k,ze),j=sn(x.name,T,J.name,Q,U,k.shopName,k,"Valued Customer");navigator.clipboard.writeText(j).then(()=>{se("📋 RFQ Text copied to clipboard!")}).catch(()=>{se("RFQ text copied.")})});const te=document.getElementById("docModal"),ke=document.getElementById("docModalTitle"),Pe=document.getElementById("docFrame"),be=document.getElementById("closeDocModalBtn");be.onclick=()=>te.classList.add("hidden"),ta();const ge=document.getElementById("printInvoiceBtn");ge&&(ge.onclick=()=>{const x=Se(),T=yt(x,Q.thicknessMm,J.densityGPerCm3),U=Ze(T,Q,Ce,k,ze),j=V?V.value:"",q=Jo(x,T,J.name,Q,U,k,"Walk-in Customer",j);ke.textContent=k.currency==="USD"?"Manufacturing Quotation Preview":"Proforma Invoice Preview (with UPI QR)",te.classList.remove("hidden"),Pe.srcdoc=q});const $e=document.getElementById("jobCardBtn");$e&&($e.onclick=()=>{const x=Se(),T=yt(x,Q.thicknessMm,J.densityGPerCm3),U=Zo(x,T,J.name,Q,Ce,k);ke.textContent="Laser Machine Operator Job Card",te.classList.remove("hidden"),Pe.srcdoc=U}),document.getElementById("downloadDxfBtn").onclick=()=>{const x=Se(),T=kt.find(he=>he.id===k.selectedCAMProfileId)||kt[0],U=No(x,T),j=new Blob([U],{type:"application/dxf"}),q=URL.createObjectURL(j),K=document.createElement("a");K.href=q,K.download=`${x.name.toLowerCase().replace(/[\s\/\(\)]+/g,"_")}_${T.id}.dxf`,document.body.appendChild(K),K.click(),document.body.removeChild(K),URL.revokeObjectURL(q)};const Me=document.getElementById("copyQuoteBtn"),tt=document.getElementById("toastNotification");Me&&(Me.onclick=async()=>{const x=Se(),T=yt(x,Q.thicknessMm,J.densityGPerCm3),U=Ze(T,Q,Ce,k,ze),j=k.currency==="USD"?sn(x.name,T,J.name,Q,U,k.shopName,k,"Valued Customer"):Wi(x.name,T,J.name,Q,U,k.shopName,k);try{await navigator.clipboard.writeText(j),tt&&(tt.textContent=k.currency==="USD"?"📋 Email Quotation copied to clipboard!":"📋 Quotation copied to clipboard!",tt.classList.remove("hidden"),setTimeout(()=>{tt.classList.add("hidden")},2200))}catch{alert("Quotation copied to clipboard.")}});const Le=document.getElementById("dropzone"),re=document.getElementById("dxfFileInput"),Ie=document.getElementById("tabParametric"),nt=document.getElementById("tabUpload"),le=document.getElementById("parametricContainer"),Xe=document.getElementById("uploadContainer");Ie.onclick=()=>{Ie.classList.add("active"),nt.classList.remove("active"),le.classList.remove("hidden"),Xe.classList.add("hidden"),Dt=!1,H()},nt.onclick=()=>{nt.classList.add("active"),Ie.classList.remove("active"),Xe.classList.remove("hidden"),le.classList.add("hidden"),Dt=!0,H()},Le.onclick=()=>re.click(),re.onchange=x=>{var U;const T=(U=x.target.files)==null?void 0:U[0];T&&ue(T)},Le.ondragover=x=>{x.preventDefault(),Le.classList.add("dragover")},Le.ondragleave=()=>Le.classList.remove("dragover"),Le.ondrop=x=>{var U;x.preventDefault(),Le.classList.remove("dragover");const T=(U=x.dataTransfer)==null?void 0:U.files[0];T&&ue(T)};const Ne=document.getElementById("canvasViewport");Ne&&(Ne.ondragover=x=>{x.preventDefault(),Le.classList.add("dragover")},Ne.ondragleave=x=>{x.target===Ne&&Le.classList.remove("dragover")},Ne.ondrop=x=>{var U;x.preventDefault(),Le.classList.remove("dragover");const T=(U=x.dataTransfer)==null?void 0:U.files[0];T&&(nt.click(),ue(T))});function de(){const x=document.getElementById("dxfPartsList");if(!x)return;x.innerHTML="";const T=fe==="inch";It.forEach((U,j)=>{const q=U.geometry,K=document.createElement("div");K.className=`dxf-part-card ${j===Et?"is-active":""}`,K.setAttribute("data-index",j.toString());const he=Vo(q,42),Be=T?q.boundingBox.width:q.boundingBox.width*(q.units==="inch"?25.4:1),Ae=T?q.boundingBox.height:q.boundingBox.height*(q.units==="inch"?25.4:1),ve=T?'"':" mm",We=`${Be.toFixed(Be>=10?1:2)} × ${Ae.toFixed(Ae>=10?1:2)}${ve}`,Re=q.innerHoles?q.innerHoles.length:0,ot=Re>0?`<span class="dxf-part-hole-badge">${Re} holes</span>`:'<span class="dxf-part-hole-badge none">No holes</span>';K.innerHTML=`
        <div class="dxf-part-thumb">${he}</div>
        <div class="dxf-part-info">
          <div class="dxf-part-name" title="${q.name}">${q.name||`Part ${j+1}`}</div>
          <div class="dxf-part-meta">
            <span class="dxf-part-dims">${We}</span>
            ${ot}
          </div>
        </div>
        <div class="dxf-part-qty-wrap" title="Quantity to nest / quote">
          <button type="button" class="dxf-qty-btn dxf-qty-dec" data-action="dec">-</button>
          <span class="dxf-qty-val">${U.quantity}</span>
          <button type="button" class="dxf-qty-btn dxf-qty-inc" data-action="inc">+</button>
        </div>
      `,K.addEventListener("click",gt=>{if(gt.target.closest(".dxf-part-qty-wrap"))return;Et=j,Ee=q,Ce=U.quantity;const Ut=document.getElementById("partQuantity");Ut&&(Ut.value=U.quantity.toString()),Fe(q),de(),H()});const at=K.querySelector(".dxf-qty-dec"),ht=K.querySelector(".dxf-qty-inc"),pt=K.querySelector(".dxf-qty-val");at.addEventListener("click",gt=>{if(gt.stopPropagation(),U.quantity=Math.max(1,U.quantity-1),pt.textContent=U.quantity.toString(),j===Et){Ce=U.quantity;const ft=document.getElementById("partQuantity");ft&&(ft.value=U.quantity.toString()),H()}}),ht.addEventListener("click",gt=>{if(gt.stopPropagation(),U.quantity++,pt.textContent=U.quantity.toString(),j===Et){Ce=U.quantity;const ft=document.getElementById("partQuantity");ft&&(ft.value=U.quantity.toString()),H()}}),x.appendChild(K)})}function ue(x){const T=new FileReader;T.onload=U=>{var q;const j=(q=U.target)==null?void 0:q.result;try{const K=no(j),he=x.name.replace(/\.[^/.]+$/,""),Be=document.getElementById("uploadFileInfo"),Ae=document.getElementById("loadedFileName"),ve=document.getElementById("dxfPartsSection"),We=document.getElementById("dxfPartsCount");if(K.length>1)It=K.map((Re,ot)=>{Re.name=`${he}_Part${ot+1}`;const at=Kt(Re,Q.thicknessMm);return Re.deselectedHoleIndices=[...at],{geometry:Re,quantity:1}}),Et=0,Ee=It[0].geometry,Dt=!0,Ae.textContent=`${x.name} (${K.length} parts)`,Be.classList.remove("hidden"),ve&&We&&(ve.classList.remove("hidden"),We.textContent=K.length.toString()),de(),Ee&&Fe(Ee),se(`📁 Loaded ${K.length} parts from "${x.name}"`);else{Ee=K[0]||_o(j),Ee.name=he;const Re=Kt(Ee,Q.thicknessMm);Ee.deselectedHoleIndices=[...Re],It=[{geometry:Ee,quantity:1}],Et=0,Dt=!0,Ae.textContent=x.name,Be.classList.remove("hidden"),ve&&ve.classList.add("hidden"),Ee&&Fe(Ee),se(`📁 Loaded "${x.name}"`)}H()}catch(K){console.error(K),alert("Failed to parse DXF file. Please ensure it is an ASCII AutoCAD DXF.")}},T.readAsText(x)}const He=document.getElementById("btnAddAllPartsToCart");He&&He.addEventListener("click",()=>{It.length!==0&&(It.forEach((x,T)=>{const U=x.geometry,j=yt(U,Q.thicknessMm,J.densityGPerCm3,U.deselectedHoleIndices),q=Ze(j,Q,x.quantity,k,ze);me.push({id:`item_dxf_${Date.now()}_${T}`,partGeometry:U,materialId:J.id,materialName:J.name,gaugeThicknessMm:Q.thicknessMm,quantity:x.quantity,secondaryOps:{...ze},metrics:j,unitQuote:q,totalPrice:q.finalOrderTotal,color:["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"][(me.length+T)%6],createdAt:Date.now()})}),dt(),se(`✅ Added ${It.length} parts to RFQ Cart!`))});const Te=document.getElementById("btnToggleHoleCut");Te&&Te.addEventListener("click",()=>{const x=Se();if(!x||!x.innerHoles||x.innerHoles.length===0)return;const T=Kt(x,Q.thicknessMm);(x.deselectedHoleIndices||[]).length>0?(x.deselectedHoleIndices=[],se("◉ Set to cut all holes")):T.length>0?(x.deselectedHoleIndices=[...T],se(`⚡ Auto-skipped ${T.length} undersized holes (< ${Q.thicknessMm.toFixed(1)}mm)`)):se("All holes meet minimum diameter rule (no blowout risk)"),H()});const it=document.getElementById("cuttingProcessSelect");it&&it.addEventListener("change",()=>{const x=it.value,T=Se();T&&(T.cuttingProcess=x),se(`Process: ${it.options[it.selectedIndex].text.split("(")[0].trim()}`),H()});function Fe(x){const T=document.getElementById("dxfDetectedDims"),U=document.getElementById("dxfUnitBadge"),j=document.getElementById("btnToggleDxfUnits"),q=document.getElementById("dxfSmallDimWarning");if(!T||!U||!j)return;const K=x.boundingBox.width,he=x.boundingBox.height,Be=x.units==="inch";T.textContent=Be?`Size: ${K.toFixed(2)}" × ${he.toFixed(2)}"`:`Size: ${K.toFixed(1)} × ${he.toFixed(1)} mm`,U.textContent=Be?"Inches":"Millimeters",j.textContent=Be?"🔄 Switch to mm":"🔄 Switch to inches",q&&(K<25&&he<25?q.classList.remove("hidden"):q.classList.add("hidden"))}const li=document.getElementById("btnToggleDxfUnits");li&&(li.onclick=()=>{Ee&&(Ee.units=Ee.units==="inch"?"mm":"inch",Fe(Ee),H(),se(`🔄 Switched DXF units to ${Ee.units==="inch"?"Inches":"Millimeters"}`))});const nn=document.getElementById("tabQuote"),on=document.getElementById("tabCart"),an=document.getElementById("tabAdmin"),Mn=document.getElementById("quoteView"),vn=document.getElementById("cartView"),kn=document.getElementById("adminView");nn.onclick=()=>{nn.classList.add("active"),on.classList.remove("active"),an.classList.remove("active"),Mn.classList.remove("hidden"),vn.classList.add("hidden"),kn.classList.add("hidden")},on.onclick=()=>{on.classList.add("active"),nn.classList.remove("active"),an.classList.remove("active"),vn.classList.remove("hidden"),Mn.classList.add("hidden"),kn.classList.add("hidden"),dt()},an.onclick=()=>{an.classList.add("active"),nn.classList.remove("active"),on.classList.remove("active"),kn.classList.remove("hidden"),Mn.classList.add("hidden"),vn.classList.add("hidden")};const Pn=document.getElementById("adminShopName"),Bn=document.getElementById("adminGstin"),wn=document.getElementById("adminUpiId"),En=document.getElementById("adminMinOrder"),Ln=document.getElementById("adminSheetLoading"),Tn=document.getElementById("adminPricePerKg"),Dn=document.getElementById("adminPricePerMeterCut"),Fn=document.getElementById("adminPricePerPierce"),An=document.getElementById("adminGstPercent"),Rn=document.getElementById("adminTaxType");Pn&&(Pn.oninput=()=>{k.shopName=Pn.value.trim()||"My CNC Shop",Xi&&(Xi.textContent=k.shopName),we(),H()}),Bn&&(Bn.oninput=()=>{k.shopGstin=Bn.value.trim(),we()}),wn&&(wn.oninput=()=>{k.upiId=wn.value.trim(),we()}),En&&(En.oninput=()=>{k.minimumOrderFee=parseFloat(En.value)||0,we(),H()}),Ln&&(Ln.oninput=()=>{k.sheetLoadingFee=parseFloat(Ln.value)||0,we(),H()}),Rn&&(Rn.onchange=()=>{k.isInterstateSale=Rn.value==="interstate",we(),H()}),Tn&&(Tn.oninput=()=>{const x=parseFloat(Tn.value)||0;k.currency==="USD"?Q.pricePerSqInch=x:Q.pricePerKg=x,we(),H()}),Dn&&(Dn.oninput=()=>{const x=parseFloat(Dn.value)||0;k.currency==="USD"?Q.pricePerLinearInchCut=x:Q.pricePerMeterCut=x,we(),H()}),Fn&&(Fn.oninput=()=>{Q.pricePerPierce=parseFloat(Fn.value)||0,we(),H()}),An&&(An.oninput=()=>{k.gstPercent=parseFloat(An.value)||0,we(),H()});const Nn=document.getElementById("adminNaics");Nn&&(Nn.oninput=()=>{k.naicsCode=Nn.value.trim(),we()});const Hn=document.getElementById("adminTaxId");Hn&&(Hn.oninput=()=>{k.einOrTaxId=Hn.value.trim(),we()});const Wn=document.getElementById("adminPaymentTerms");Wn&&(Wn.oninput=()=>{k.paymentTerms=Wn.value.trim(),we()});const _n=document.getElementById("adminLaserPower");_n&&(_n.onchange=()=>{const x=parseInt(_n.value);k.laserPowerKw=x||4,we(),H()});const On=document.getElementById("adminHourlyRate");On&&(On.oninput=()=>{k.hourlyLaserRateUsd=parseFloat(On.value)||185,we(),H()});const Gn=document.getElementById("adminShopEmail");Gn&&(Gn.onchange=()=>{k.shopEmail=Gn.value.trim(),we()});const Un=document.getElementById("adminSetupFee");Un&&(Un.oninput=()=>{k.setupFeePerJob=parseFloat(Un.value)||25,we(),H()});const di=document.getElementById("btnCopyConfiguredEmbedScript");di&&(di.onclick=()=>{const x=window.location.origin||"https://engine.yourdomain.com",T=(k.shopName||"midwest-precision").toLowerCase().replace(/[^a-z0-9]+/g,"-"),U=`<script src="${x}/widget.js" data-shop-id="${T}" data-shop-name="${k.shopName}" data-shop-email="${k.shopEmail||"quotes@midwestprecision.com"}" data-hourly-rate="${k.hourlyLaserRateUsd||185}" data-min-order="${k.minimumOrderFee||75}" data-sales-tax="${k.gstPercent||7}"><\/script>`;navigator.clipboard.writeText(U).then(()=>{se("📋 Custom embed widget tag copied to clipboard!")}).catch(()=>{se("Embed widget script copied.")})});const qn=document.getElementById("adminSalesTaxExempt");qn&&(qn.onchange=()=>{k.salesTaxExempt=qn.checked,we(),H()});const mi=document.getElementById("resetRatesBtn");mi&&(mi.onclick=()=>{confirm("Reset shop rates to factory benchmarks?")&&(Qo(k.currency),k.currency==="USD"?(k={...tn},rt=JSON.parse(JSON.stringify(ai)),J=rt[0],Q=J.gauges[3]||J.gauges[0]):(k={...Cn},rt=JSON.parse(JSON.stringify(io)),J=rt[0],Q=J.gauges[4]||J.gauges[0]),mo(),Zt(),H())});const po=document.getElementById("unitMm"),go=document.getElementById("unitInch");po.onclick=()=>{xn("mm"),bn(),bt(),H()},go.onclick=()=>{xn("inch"),bn(),bt(),H()},ee.addEventListener("wheel",x=>{x.preventDefault();const T=x.deltaY<0?1.15:.87,U=Math.min(6,Math.max(.4,Ke*T)),j=ee.getBoundingClientRect(),q=x.clientX-j.left-j.width/2,K=x.clientY-j.top-j.height/2;je.x=q-(q-je.x)*(U/Ke),je.y=K-(K-je.y)*(U/Ke),Ke=U,_e()},{passive:!1}),ee.addEventListener("pointerdown",x=>{if(lt&&x.button===0){const T=Se(),U=Gi(T),j=Ji(x.clientX,x.clientY);if(!j)return;const q=Ui({x:x.clientX,y:x.clientY},U,Zi,18),K=q?{x:q.x,y:q.y}:j.cad;Zn={x:x.clientX,y:x.clientY},Ye==="idle"||Ye==="locked"?(Pt=K,Ct=null,Ye="drawing",Sn(null),st(K)):Ye==="drawing"&&(Ct=K,Ye="locked",st());return}(x.button===0||x.button===1)&&(un=!0,Jn={x:x.clientX-je.x,y:x.clientY-je.y},ee.classList.add("is-dragging"),ee.setPointerCapture(x.pointerId))}),ee.addEventListener("pointermove",x=>{if(un){je.x=x.clientX-Jn.x,je.y=x.clientY-Jn.y,_e();return}if(lt){const T=Se(),U=Gi(T),j=Ji(x.clientX,x.clientY);if(!j)return;const q=Ui({x:x.clientX,y:x.clientY},U,Zi,18);_t=q;const K=q?{x:q.x,y:q.y}:j.cad;Ye==="drawing"?(Ct=K,st()):st(K)}});const ui=x=>{if(un){un=!1,ee.classList.remove("is-dragging");try{ee.releasePointerCapture(x.pointerId)}catch{}return}lt&&Ye==="drawing"&&Math.hypot(x.clientX-Zn.x,x.clientY-Zn.y)>12&&(Ye="locked",st())};ee.addEventListener("pointerup",ui),ee.addEventListener("pointercancel",ui),ee.addEventListener("pointerleave",()=>{lt&&Ye==="idle"&&(_t=null,st())}),ee.addEventListener("dblclick",()=>{Yt()});const hi=document.getElementById("btnMeasureTool"),pi=document.getElementById("btnCloseMeasureHud"),gi=document.getElementById("btnZoomIn"),fi=document.getElementById("btnZoomOut"),yi=document.getElementById("btnZoomFit");hi&&(hi.onclick=()=>{yn()}),pi&&(pi.onclick=()=>{yn(!1)});const qe=document.getElementById("measureHudPill");if(qe){let x=!1,T=0,U=0,j=0,q=0;qe.addEventListener("pointerdown",he=>{var ve;if(he.target.closest("#btnCloseMeasureHud"))return;x=!0,qe.setPointerCapture(he.pointerId),T=he.clientX,U=he.clientY;const Be=qe.getBoundingClientRect(),Ae=((ve=qe.parentElement)==null?void 0:ve.getBoundingClientRect())||{left:0,top:0};j=Be.left-Ae.left,q=Be.top-Ae.top,qe.style.transform="none",qe.style.left=`${j}px`,qe.style.top=`${q}px`}),qe.addEventListener("pointermove",he=>{if(!x)return;const Be=he.clientX-T,Ae=he.clientY-U,ve=Math.max(4,j+Be),We=Math.max(4,q+Ae);qe.style.left=`${ve}px`,qe.style.top=`${We}px`});const K=he=>{if(x){x=!1;try{qe.releasePointerCapture(he.pointerId)}catch{}}};qe.addEventListener("pointerup",K),qe.addEventListener("pointercancel",K)}gi&&(gi.onclick=()=>{Ke=Math.min(6,Ke*1.25),_e()}),fi&&(fi.onclick=()=>{Ke=Math.max(.4,Ke/1.25),_e()}),yi&&(yi.onclick=()=>{Yt()});const xi=document.getElementById("btnExportImage");xi&&(xi.onclick=()=>{Da()})}function Da(){const n=ee.querySelector("svg");if(!n){se("⚠️ No design found to export");return}try{const t=n.cloneNode(!0);t.style.transform="";const i=t.getAttribute("viewBox");let e=1600,o=1200;if(i){const d=i.split(/[\s,]+/).map(Number);if(d.length===4&&d[2]>0&&d[3]>0){const l=d[2]/d[3];l>=1?(e=2400,o=Math.round(2400/l)):(o=2400,e=Math.round(2400*l))}}t.setAttribute("width",e.toString()),t.setAttribute("height",o.toString());const a=new XMLSerializer().serializeToString(t),s=new Blob([a],{type:"image/svg+xml;charset=utf-8"}),c=window.URL||window.webkitURL||window,r=c.createObjectURL(s),h=new Image;h.onload=()=>{const d=document.createElement("canvas");d.width=e,d.height=o;const l=d.getContext("2d");l&&(l.fillStyle="#080c14",l.fillRect(0,0,e,o),l.drawImage(h,0,0,e,o),c.revokeObjectURL(r),d.toBlob(p=>{if(!p)return;const g=document.createElement("a"),y=Se(),I=pe==="jali"&&Ue==="realistic_gate"?`Gate_Render_${A.finishMaterial||"matte_black"}_${y.boundingBox.width.toFixed(0)}x${y.boundingBox.height.toFixed(0)}mm.png`:`CNC_${pe}_${y.boundingBox.width.toFixed(0)}mm.png`;g.download=I,g.href=c.createObjectURL(p),g.click(),c.revokeObjectURL(g.href),se(`📸 Exported high-res PNG (${e}×${o}px) for Proposal / Email!`)},"image/png"))},h.src=r}catch(t){console.error("Export PNG failed:",t),se("⚠️ Export failed")}}function Fa(){const n=document.getElementById("panelLeft"),t=document.getElementById("panelRight"),i=document.getElementById("splitterLeft"),e=document.getElementById("splitterRight"),o=document.getElementById("collapseLeftBtn"),a=document.getElementById("collapseRightBtn"),s=document.getElementById("restoreLeftBtn"),c=document.getElementById("restoreRightBtn"),r=document.getElementById("btnToggleLeftPanel"),h=document.getElementById("btnToggleRightPanel"),d=b=>{n&&(b?(n.classList.remove("collapsed"),i==null||i.classList.remove("disabled"),s==null||s.classList.add("hidden"),r==null||r.classList.add("active")):(n.classList.add("collapsed"),i==null||i.classList.add("disabled"),s==null||s.classList.remove("hidden"),r==null||r.classList.remove("active")))},l=b=>{t&&(b?(t.classList.remove("collapsed"),e==null||e.classList.remove("disabled"),c==null||c.classList.add("hidden"),h==null||h.classList.add("active")):(t.classList.add("collapsed"),e==null||e.classList.add("disabled"),c==null||c.classList.remove("hidden"),h==null||h.classList.remove("active")))},p=()=>{const b=!(n!=null&&n.classList.contains("collapsed"));d(!b)},g=()=>{const b=!(t!=null&&t.classList.contains("collapsed"));l(!b)};o&&(o.onclick=()=>d(!1)),s&&(s.onclick=()=>d(!0)),r&&(r.onclick=()=>p()),a&&(a.onclick=()=>l(!1)),c&&(c.onclick=()=>l(!0)),h&&(h.onclick=()=>g()),window.addEventListener("keydown",b=>{var C;if(b.altKey&&(b.key==="1"||b.code==="Digit1")){b.preventDefault(),p();return}else if(b.altKey&&(b.key==="2"||b.code==="Digit2")){b.preventDefault(),g();return}const w=b.target,D=(C=w==null?void 0:w.tagName)==null?void 0:C.toLowerCase();!(D==="input"||D==="textarea"||D==="select")&&(b.key==="m"||b.key==="M")&&!b.altKey&&!b.ctrlKey&&!b.metaKey?(b.preventDefault(),yn()):b.key==="Escape"&&lt&&(b.preventDefault(),Pt!==null?(Pt=null,Ct=null,_t=null,Ye="idle",Sn(null),st(),se("Measurement cleared (Measure tool still active)")):yn(!1))});let y=!1,I=!1;i&&(i.onmousedown=()=>{y=!0},i.ondblclick=()=>{n&&(n.style.width="340px")}),e&&(e.onmousedown=()=>{I=!0},e.ondblclick=()=>{if(t){const b=window.innerWidth>=1600?"450px":window.innerWidth>=1440?"430px":window.innerWidth>=1200?"410px":"385px";t.style.width=b}}),window.addEventListener("mousemove",b=>{if(y&&n){const w=window.innerWidth>=1200?280:250,D=Math.max(w,Math.min(600,b.clientX));n.style.width=`${D}px`}else if(I&&t){const w=window.innerWidth>=1440?405:window.innerWidth>=1200?385:360,D=window.innerWidth>=1440?720:680,N=Math.max(w,Math.min(D,window.innerWidth-b.clientX));t.style.width=`${N}px`}}),window.addEventListener("mouseup",()=>{y=!1,I=!1})}ba();
