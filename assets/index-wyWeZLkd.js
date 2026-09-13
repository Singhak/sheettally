var Kn=Object.defineProperty;var Xn=(n,e,i)=>e in n?Kn(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i;var re=(n,e,i)=>Xn(n,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();function Jn(n){const e=n.units==="inch",i=e?.5:10,t=Math.max(i,n.length),o=Math.max(i,n.width),s=Math.min(n.cornerSize||0,Math.min(t,o)/2-(e?.05:1)),a=[];n.cornerType==="fillet"&&s>0?(a.push({type:"line",start:{x:s,y:0},end:{x:t-s,y:0}}),a.push({type:"arc",center:{x:t-s,y:s},radius:s,startAngle:270*Math.PI/180,endAngle:360*Math.PI/180,counterClockwise:!0}),a.push({type:"line",start:{x:t,y:s},end:{x:t,y:o-s}}),a.push({type:"arc",center:{x:t-s,y:o-s},radius:s,startAngle:0,endAngle:90*Math.PI/180,counterClockwise:!0}),a.push({type:"line",start:{x:t-s,y:o},end:{x:s,y:o}}),a.push({type:"arc",center:{x:s,y:o-s},radius:s,startAngle:90*Math.PI/180,endAngle:180*Math.PI/180,counterClockwise:!0}),a.push({type:"line",start:{x:0,y:o-s},end:{x:0,y:s}}),a.push({type:"arc",center:{x:s,y:s},radius:s,startAngle:180*Math.PI/180,endAngle:270*Math.PI/180,counterClockwise:!0})):n.cornerType==="chamfer"&&s>0?(a.push({type:"line",start:{x:s,y:0},end:{x:t-s,y:0}}),a.push({type:"line",start:{x:t-s,y:0},end:{x:t,y:s}}),a.push({type:"line",start:{x:t,y:s},end:{x:t,y:o-s}}),a.push({type:"line",start:{x:t,y:o-s},end:{x:t-s,y:o}}),a.push({type:"line",start:{x:t-s,y:o},end:{x:s,y:o}}),a.push({type:"line",start:{x:s,y:o},end:{x:0,y:o-s}}),a.push({type:"line",start:{x:0,y:o-s},end:{x:0,y:s}}),a.push({type:"line",start:{x:0,y:s},end:{x:s,y:0}})):(a.push({type:"line",start:{x:0,y:0},end:{x:t,y:0}}),a.push({type:"line",start:{x:t,y:0},end:{x:t,y:o}}),a.push({type:"line",start:{x:t,y:o},end:{x:0,y:o}}),a.push({type:"line",start:{x:0,y:o},end:{x:0,y:0}}));const r={segments:a,isClosed:!0,isHole:!1},u=[],y=e?.1:1,c=Math.max(y,n.edgeOffsetX),h=Math.max(y,n.edgeOffsetY),$=[];n.holePattern==="4-corner"?($.push({x:c,y:h}),$.push({x:t-c,y:h}),$.push({x:t-c,y:o-h}),$.push({x:c,y:o-h})):n.holePattern==="6-hole"?($.push({x:c,y:h}),$.push({x:t/2,y:h}),$.push({x:t-c,y:h}),$.push({x:t-c,y:o-h}),$.push({x:t/2,y:o-h}),$.push({x:c,y:o-h})):n.holePattern==="8-hole"&&($.push({x:c,y:h}),$.push({x:t/2,y:h}),$.push({x:t-c,y:h}),$.push({x:t-c,y:o/2}),$.push({x:t-c,y:o-h}),$.push({x:t/2,y:o-h}),$.push({x:c,y:o-h}),$.push({x:c,y:o/2}));const m=Math.max(e?.05:1,n.holeDiameter/2);if(n.holeType==="round")for(const k of $)u.push({center:k,radius:m});else if(n.holeType==="slotted"){const k=e?.1:2,C=Math.max(m*2,n.slotLength||m*3),P=Math.max(k,n.slotWidth||m*2),T=P/2,A=Math.max(0,(C-P)/2);for(const f of $){const d=[],b={x:f.x-A,y:f.y},M={x:f.x+A,y:f.y};d.push({type:"line",start:{x:b.x,y:b.y+T},end:{x:M.x,y:M.y+T}}),d.push({type:"arc",center:M,radius:T,startAngle:90*Math.PI/180,endAngle:270*Math.PI/180,counterClockwise:!1}),d.push({type:"line",start:{x:M.x,y:M.y-T},end:{x:b.x,y:b.y-T}}),d.push({type:"arc",center:b,radius:T,startAngle:270*Math.PI/180,endAngle:90*Math.PI/180,counterClockwise:!1}),u.push({segments:d,isClosed:!0,isHole:!0})}}const v=t/2,I=o/2;if(n.centerCutoutType==="round"&&n.centerCutoutDiameter&&n.centerCutoutDiameter>0)u.push({center:{x:v,y:I},radius:n.centerCutoutDiameter/2});else if(n.centerCutoutType==="rectangular"&&n.centerCutoutWidth&&n.centerCutoutHeight){const k=Math.min(n.centerCutoutWidth,t-c*2),C=Math.min(n.centerCutoutHeight,o-h*2),P=k/2,T=C/2,A=[{type:"line",start:{x:v-P,y:I-T},end:{x:v+P,y:I-T}},{type:"line",start:{x:v+P,y:I-T},end:{x:v+P,y:I+T}},{type:"line",start:{x:v+P,y:I+T},end:{x:v-P,y:I+T}},{type:"line",start:{x:v-P,y:I+T},end:{x:v-P,y:I-T}}];u.push({segments:A,isClosed:!0,isHole:!0})}return{name:"Structural Baseplate",units:n.units,outerContour:r,innerHoles:u,boundingBox:{minX:0,minY:0,maxX:t,maxY:o,width:t,height:o}}}const Vt=[{standard:"BS10",name:'BS 10 Table E - 1" NB',nominalBore:'1"',outerDiameter:114.3,innerBore:33.4,pitchCircleDiameter:82.6,boltCount:4,boltDiameter:14.3,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 1.5" NB',nominalBore:'1.5"',outerDiameter:133.4,innerBore:48.3,pitchCircleDiameter:98.4,boltCount:4,boltDiameter:14.3,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 2" NB',nominalBore:'2"',outerDiameter:152.4,innerBore:60.3,pitchCircleDiameter:114.3,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 2.5" NB',nominalBore:'2.5"',outerDiameter:165.1,innerBore:73,pitchCircleDiameter:127,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 3" NB',nominalBore:'3"',outerDiameter:184.2,innerBore:88.9,pitchCircleDiameter:146,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 4" NB',nominalBore:'4"',outerDiameter:215.9,innerBore:114.3,pitchCircleDiameter:177.8,boltCount:8,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 6" NB',nominalBore:'6"',outerDiameter:279.4,innerBore:168.3,pitchCircleDiameter:235,boltCount:8,boltDiameter:20.6,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 8" NB',nominalBore:'8"',outerDiameter:336.6,innerBore:219.1,pitchCircleDiameter:292.1,boltCount:8,boltDiameter:20.6,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 2" NB',nominalBore:'2"',outerDiameter:152.4,innerBore:60.3,pitchCircleDiameter:114.3,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 3" NB',nominalBore:'3"',outerDiameter:184.2,innerBore:88.9,pitchCircleDiameter:146,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 4" NB',nominalBore:'4"',outerDiameter:215.9,innerBore:114.3,pitchCircleDiameter:177.8,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 6" NB',nominalBore:'6"',outerDiameter:279.4,innerBore:168.3,pitchCircleDiameter:235,boltCount:8,boltDiameter:17.5,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN25 (1")',nominalBore:"DN25",outerDiameter:115,innerBore:34,pitchCircleDiameter:85,boltCount:4,boltDiameter:14,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN50 (2")',nominalBore:"DN50",outerDiameter:165,innerBore:61,pitchCircleDiameter:125,boltCount:4,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN80 (3")',nominalBore:"DN80",outerDiameter:200,innerBore:90,pitchCircleDiameter:160,boltCount:8,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN100 (4")',nominalBore:"DN100",outerDiameter:220,innerBore:115,pitchCircleDiameter:180,boltCount:8,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN150 (6")',nominalBore:"DN150",outerDiameter:285,innerBore:169,pitchCircleDiameter:240,boltCount:8,boltDiameter:22,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN200 (8")',nominalBore:"DN200",outerDiameter:340,innerBore:220,pitchCircleDiameter:295,boltCount:12,boltDiameter:22,units:"mm"},{standard:"ASME",name:'ASME 1" Class 150',nominalBore:'1"',outerDiameter:4.25,innerBore:1.36,pitchCircleDiameter:3.12,boltCount:4,boltDiameter:.62,units:"inch"},{standard:"ASME",name:'ASME 2" Class 150',nominalBore:'2"',outerDiameter:6,innerBore:2.44,pitchCircleDiameter:4.75,boltCount:4,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 3" Class 150',nominalBore:'3"',outerDiameter:7.5,innerBore:3.57,pitchCircleDiameter:6,boltCount:4,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 4" Class 150',nominalBore:'4"',outerDiameter:9,innerBore:4.57,pitchCircleDiameter:7.5,boltCount:8,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 6" Class 150',nominalBore:'6"',outerDiameter:11,innerBore:6.72,pitchCircleDiameter:9.5,boltCount:8,boltDiameter:.88,units:"inch"},{standard:"ASME",name:'ASME 8" Class 150',nominalBore:'8"',outerDiameter:13.5,innerBore:8.72,pitchCircleDiameter:11.75,boltCount:8,boltDiameter:.88,units:"inch"}];function Vn(n){const e=n.units==="inch",t=Math.max(e?.5:10,n.outerDiameter),o=Math.max(0,Math.min(n.innerBore,t-(e?.2:5))),s=Math.max(o+(e?.1:2),Math.min(n.pitchCircleDiameter,t-(e?.1:2))),a=t/2,r={x:a,y:a},y={segments:[{type:"arc",center:r,radius:a,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:r,radius:a,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],isClosed:!0,isHole:!1},c=[];o>0&&c.push({center:r,radius:o/2});const h=Math.max(1,Math.floor(n.boltCount)),x=Math.max(e?.05:.5,n.boltDiameter/2),m=s/2;for(let v=0;v<h;v++){const I=2*Math.PI*v/h,k=r.x+m*Math.cos(I),C=r.y+m*Math.sin(I);c.push({center:{x:k,y:C},radius:x})}return{name:"Pipe Flange",units:n.units,outerContour:y,innerHoles:c,boundingBox:{minX:0,minY:0,maxX:t,maxY:t,width:t,height:t}}}function qn(n){const e=n.units==="inch",i=e?.5:10,t=Math.max(i,n.baseWidth),o=Math.max(i,n.height),s=n.hasWeldSnipe?Math.min(n.snipeSize||(e?1:25),Math.min(t,o)*.4):0,a=[];s>0?(a.push({type:"line",start:{x:s,y:0},end:{x:t,y:0}}),a.push({type:"line",start:{x:t,y:0},end:{x:0,y:o}}),a.push({type:"line",start:{x:0,y:o},end:{x:0,y:s}}),a.push({type:"line",start:{x:0,y:s},end:{x:s,y:0}})):(a.push({type:"line",start:{x:0,y:0},end:{x:t,y:0}}),a.push({type:"line",start:{x:t,y:0},end:{x:0,y:o}}),a.push({type:"line",start:{x:0,y:o},end:{x:0,y:0}}));const r={segments:a,isClosed:!0,isHole:!1},u=[];return{name:"Structural Gusset Plate",units:n.units,outerContour:r,innerHoles:u,boundingBox:{minX:0,minY:0,maxX:t,maxY:o,width:t,height:o}}}function Zn(n){const e=n.units==="inch",i=e?4:100,t=Math.max(i,n.width),o=Math.max(i,n.height),s=n.borderMarginMm??(e?1.5:40),a=e?s>8?s/25.4:s:s<5?s*25.4:s,r=Math.max(e?.5:15,Math.min(a,Math.min(t,o)*.25)),y={segments:[{type:"line",start:{x:0,y:0},end:{x:t,y:0}},{type:"line",start:{x:t,y:0},end:{x:t,y:o}},{type:"line",start:{x:t,y:o},end:{x:0,y:o}},{type:"line",start:{x:0,y:o},end:{x:0,y:0}}],isClosed:!0,isHole:!1},c=[],h=n.mountingHoleDiameter??(e?.3125:8),$=e?h>2?h/25.4:h:h<1?h*25.4:h;if(n.hasMountingHoles&&$>0){const d=$/2,b=r/2;c.push({center:{x:b,y:b},radius:d}),c.push({center:{x:t-b,y:b},radius:d}),c.push({center:{x:t-b,y:o-b},radius:d}),c.push({center:{x:b,y:o-b},radius:d}),o>(e?24:600)&&(c.push({center:{x:b,y:o/2},radius:d}),c.push({center:{x:t-b,y:o/2},radius:d}))}const x=n.kickPlateHeightMm??(e?12:300),m=e?x>30?x/25.4:x:x<30?x*25.4:x,v=n.hasKickPlate?Math.max(0,Math.min(o*.4,m)):0,I=t-2*r,k=o-2*r-v,C=Math.max(2,Math.min(12,Math.floor(n.gridColumns||(t>(e?20:500)?4:2)))),P=Math.max(2,Math.min(20,Math.floor(n.gridRows||(o>(e?20:500)?6:3)))),T=I/C,A=k/P,f=e?.2:6;for(let d=0;d<P;d++)for(let b=0;b<C;b++){const M=r+b*T,g=r+v+d*A,l=M+T/2,p=g+A/2,D=e?.15:4,O=Math.max(D,T-f),G=Math.max(D,A-f),W=Math.min(O,G)/2;if(n.patternType==="diamond_lattice"){const F=O/2,E=G/2,H=[{type:"line",start:{x:l,y:p-E},end:{x:l+F,y:p}},{type:"line",start:{x:l+F,y:p},end:{x:l,y:p+E}},{type:"line",start:{x:l,y:p+E},end:{x:l-F,y:p}},{type:"line",start:{x:l-F,y:p},end:{x:l,y:p-E}}];c.push({segments:H,isClosed:!0,isHole:!0})}else if(n.patternType==="islamic_star"){const F=[];for(let H=0;H<16;H++){const R=H%2===0?W:W*.52,V=H*Math.PI/8,Y=(H+1)*Math.PI/8,yt=(H+1)%2===0?W:W*.52;F.push({type:"line",start:{x:l+R*Math.cos(V),y:p+R*Math.sin(V)},end:{x:l+yt*Math.cos(Y),y:p+yt*Math.sin(Y)}})}c.push({segments:F,isClosed:!0,isHole:!0})}else if(n.patternType==="floral_mandala"){const F=[];for(let H=0;H<32;H++){const R=H*2*Math.PI/32,V=(H+1)*2*Math.PI/32,Y=W*(.42+.56*Math.pow(Math.abs(Math.cos(4*R)),1.3)),yt=W*(.42+.56*Math.pow(Math.abs(Math.cos(4*V)),1.3));F.push({type:"line",start:{x:l+Y*Math.cos(R),y:p+Y*Math.sin(R)},end:{x:l+yt*Math.cos(V),y:p+yt*Math.sin(V)}})}c.push({segments:F,isClosed:!0,isHole:!0})}else if(n.patternType==="tree_of_life"){const F=W*.9,E=W*.42,H=[{type:"line",start:{x:l,y:p-F},end:{x:l+E,y:p}},{type:"line",start:{x:l+E,y:p},end:{x:l,y:p+F}},{type:"line",start:{x:l,y:p+F},end:{x:l-E,y:p}},{type:"line",start:{x:l-E,y:p},end:{x:l,y:p-F}}];c.push({segments:H,isClosed:!0,isHole:!0});const R=.55,V=W*.45,Y=W*.15,yt=[{type:"line",start:{x:l-V,y:p-Y-F*R},end:{x:l-V+E*R,y:p-Y}},{type:"line",start:{x:l-V+E*R,y:p-Y},end:{x:l-V,y:p-Y+F*R}},{type:"line",start:{x:l-V,y:p-Y+F*R},end:{x:l-V-E*R,y:p-Y}},{type:"line",start:{x:l-V-E*R,y:p-Y},end:{x:l-V,y:p-Y-F*R}}];c.push({segments:yt,isClosed:!0,isHole:!0});const vt=[{type:"line",start:{x:l+V,y:p-Y-F*R},end:{x:l+V+E*R,y:p-Y}},{type:"line",start:{x:l+V+E*R,y:p-Y},end:{x:l+V,y:p-Y+F*R}},{type:"line",start:{x:l+V,y:p-Y+F*R},end:{x:l+V-E*R,y:p-Y}},{type:"line",start:{x:l+V-E*R,y:p-Y},end:{x:l+V,y:p-Y-F*R}}];c.push({segments:vt,isClosed:!0,isHole:!0})}else if(n.patternType==="chevron_herringbone"){const F=O*.45,E=G*.22,H=G*.22,R=[{type:"line",start:{x:l,y:p+H+E},end:{x:l+F,y:p+H}},{type:"line",start:{x:l+F,y:p+H},end:{x:l+F*.8,y:p+H-E*.5}},{type:"line",start:{x:l+F*.8,y:p+H-E*.5},end:{x:l,y:p+H+E*.4}},{type:"line",start:{x:l,y:p+H+E*.4},end:{x:l-F*.8,y:p+H-E*.5}},{type:"line",start:{x:l-F*.8,y:p+H-E*.5},end:{x:l-F,y:p+H}},{type:"line",start:{x:l-F,y:p+H},end:{x:l,y:p+H+E}}];c.push({segments:R,isClosed:!0,isHole:!0});const V=[{type:"line",start:{x:l,y:p-H+E},end:{x:l+F,y:p-H}},{type:"line",start:{x:l+F,y:p-H},end:{x:l+F*.8,y:p-H-E*.5}},{type:"line",start:{x:l+F*.8,y:p-H-E*.5},end:{x:l,y:p-H+E*.4}},{type:"line",start:{x:l,y:p-H+E*.4},end:{x:l-F*.8,y:p-H-E*.5}},{type:"line",start:{x:l-F*.8,y:p-H-E*.5},end:{x:l-F,y:p-H}},{type:"line",start:{x:l-F,y:p-H},end:{x:l,y:p-H+E}}];c.push({segments:V,isClosed:!0,isHole:!0})}else if(n.patternType==="voronoi_matrix"){const E=(d*1.618+b*2.718)%(Math.PI*2),H=[];for(let R=0;R<6;R++){const V=R*2*Math.PI/6+E*.15,Y=(R+1)*2*Math.PI/6+E*.15,yt=W*(.75+.22*Math.sin(R*2.3+E)),vt=W*(.75+.22*Math.sin((R+1)*2.3+E));H.push({type:"line",start:{x:l+yt*Math.cos(V),y:p+yt*Math.sin(V)},end:{x:l+vt*Math.cos(Y),y:p+vt*Math.sin(Y)}})}c.push({segments:H,isClosed:!0,isHole:!0})}else if(n.patternType==="honeycomb"){const F=[];for(let E=0;E<6;E++){const H=E*Math.PI/3,R=(E+1)*Math.PI/3;F.push({type:"line",start:{x:l+W*Math.cos(H),y:p+W*Math.sin(H)},end:{x:l+W*Math.cos(R),y:p+W*Math.sin(R)}})}c.push({segments:F,isClosed:!0,isHole:!0})}else{const F=O*.4,E=G*.42,H=[{type:"line",start:{x:l-F,y:p-E},end:{x:l+F,y:p-E}},{type:"line",start:{x:l+F,y:p-E},end:{x:l+F,y:p+E}},{type:"line",start:{x:l+F,y:p+E},end:{x:l-F,y:p+E}},{type:"line",start:{x:l-F,y:p+E},end:{x:l-F,y:p-E}}];c.push({segments:H,isClosed:!0,isHole:!0})}}return{name:"Architectural CNC Jali / Gate Panel",units:n.units,outerContour:y,innerHoles:c,boundingBox:{minX:0,minY:0,maxX:t,maxY:o,width:t,height:o}}}function to(n){const e=n.units==="inch",i=e?.75:20,t=Math.max(i,n.baseWidth),o=Math.max(i,n.height),s=Math.min(n.chamferTop,o-(e?.2:5)),a=Math.min(n.chamferRight,t-(e?.2:5)),u={segments:[{type:"line",start:{x:0,y:0},end:{x:t,y:0}},{type:"line",start:{x:t,y:0},end:{x:t,y:o-s}},{type:"line",start:{x:t,y:o-s},end:{x:t-a,y:o}},{type:"line",start:{x:t-a,y:o},end:{x:0,y:o}},{type:"line",start:{x:0,y:o},end:{x:0,y:0}}],isClosed:!0,isHole:!1},y=[];{const c=n.baseHoleCount,h=n.baseHoleDiameter/2,$=t*.7/(c+1),x=Math.min(e?.6:15,(o-s)/2);for(let m=1;m<=c;m++)y.push({center:{x:$*m,y:x},radius:h})}{const c=n.uprightHoleCount,h=n.uprightHoleDiameter/2,$=o*.7/(c+1),x=Math.min(e?.6:15,(t-a)/2);for(let m=1;m<=c;m++)y.push({center:{x,y:$*m},radius:h})}{const c=Math.min(t,o)*.35,h=n.lighteningHoleDiameter||c;y.push({center:{x:t*.38,y:o*.38},radius:h/2})}return{name:"Mounting Gusset & Bracket",units:n.units,outerContour:u,innerHoles:y,boundingBox:{minX:0,minY:0,maxX:t,maxY:o,width:t,height:o}}}function eo(n){const e=n.units==="inch",t=Math.max(e?.5:10,n.outerDiameter),o=Math.max(0,Math.min(n.innerDiameter,t-(e?.1:2))),s=t/2,a={x:s,y:s},u={segments:[{type:"arc",center:a,radius:s,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:a,radius:s,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],isClosed:!0,isHole:!1},y=[];if(o>0&&y.push({center:a,radius:o/2}),n.boltDiameter&&n.pitchCircleDiameter){const c=Math.max(1,n.boltCount),h=n.boltDiameter/2,$=n.pitchCircleDiameter/2;for(let x=0;x<c;x++){const m=2*Math.PI*x/c;y.push({center:{x:a.x+$*Math.cos(m),y:a.y+$*Math.sin(m)},radius:h})}}return{name:"Circular Disc / Washer",units:n.units,outerContour:u,innerHoles:y,boundingBox:{minX:0,minY:0,maxX:t,maxY:t,width:t,height:t}}}function no(n){if(n.type==="line"){const e=n.end.x-n.start.x,i=n.end.y-n.start.y;return Math.sqrt(e*e+i*i)}else if(n.type==="arc"){let e=Math.abs(n.endAngle-n.startAngle);return n.counterClockwise&&(e=2*Math.PI-e),n.radius*e}return 0}function $n(n){if(!n.segments||n.segments.length===0)return 0;let e=0;for(const i of n.segments)if(i.type==="line")e+=i.start.x*i.end.y-i.end.x*i.start.y;else if(i.type==="arc"){const t={x:i.center.x+i.radius*Math.cos(i.startAngle),y:i.center.y+i.radius*Math.sin(i.startAngle)},o={x:i.center.x+i.radius*Math.cos(i.endAngle),y:i.center.y+i.radius*Math.sin(i.endAngle)};e+=t.x*o.y-o.x*t.y;let s=Math.abs(i.endAngle-i.startAngle);i.counterClockwise&&(s=2*Math.PI-s);const a=.5*i.radius*i.radius*(s-Math.sin(s));e+=i.counterClockwise?-a*2:a*2}return Math.abs(e)/2}function De(n){let e=0;for(const i of n.segments)e+=no(i);return e}function ne(n,e,i){const o=n.units==="inch"?25.4:1,s=De(n.outerContour);let a=0,r=0;for(const l of n.innerHoles)r+=1,"radius"in l?a+=2*Math.PI*l.radius:a+=De(l);const u=s+a,y=1+r,c=u*o,h=c/25.4,$=n.boundingBox.width*o,x=n.boundingBox.height*o,m=$/25.4,v=x/25.4;let I=$n(n.outerContour);if(I<=0&&(I=n.boundingBox.width*n.boundingBox.height,n.name.includes("Flange")||n.name.includes("Disc"))){const l=n.boundingBox.width/2;I=Math.PI*l*l}let k=0;for(const l of n.innerHoles)if("radius"in l){const p=l.radius;k+=Math.PI*p*p}else k+=$n(l);const C=I*.85,P=Math.min(k,C),A=Math.max(I*.15,I-P)*(o*o),f=A/(25.4*25.4),M=A/100*(e/10)*i/1e3,g=M*2.20462262;return{totalCutLengthMm:Math.round(c*10)/10,totalCutLengthInches:Math.round(h*100)/100,pierceCount:y,boundingBoxWidthMm:Math.round($*10)/10,boundingBoxHeightMm:Math.round(x*10)/10,boundingBoxWidthInches:Math.round(m*100)/100,boundingBoxHeightInches:Math.round(v*100)/100,netAreaSqMm:Math.round(A),netAreaSqInches:Math.round(f*100)/100,theoreticalWeightKg:Math.round(M*100)/100,theoreticalWeightLbs:Math.round(g*100)/100}}function oo(n,e){const i=[],o=n.units==="inch"?25.4:1,s=n.outerContour.segments;if(s.length===0)i.push({rule:"Contour Existence",severity:"error",message:"Part has no outer cutting contour."});else{const C=s[0],P=s[s.length-1],T=C.type==="line"?C.start:{x:C.center.x+C.radius*Math.cos(C.startAngle),y:C.center.y+C.radius*Math.sin(C.startAngle)},A=P.type==="line"?P.end:{x:P.center.x+P.radius*Math.cos(P.endAngle),y:P.center.y+P.radius*Math.sin(P.endAngle)},f=Math.sqrt((A.x-T.x)**2+(A.y-T.y)**2)*o;f>.1&&i.push({rule:"Closed Polyline Rule",severity:"error",message:`Outer contour is not closed (gap is ${f.toFixed(2)} mm). Laser CAM will reject open contours.`,actualValue:f,thresholdValue:.1})}for(let C=0;C<n.innerHoles.length;C++){const P=n.innerHoles[C];if("radius"in P){const A=P.radius*2*o;A<e&&i.push({rule:"Piercing Blowout Rule",severity:"error",message:`Hole #${C+1} diameter (${A.toFixed(1)} mm) is less than sheet thickness (${e.toFixed(1)} mm). Fiber laser piercing will blow out or damage the lens nozzle.`,actualValue:A,thresholdValue:e,holeIndex:C})}else{const T=P;let A=1/0,f=1/0,d=-1/0,b=-1/0;for(const g of T.segments)g.type==="line"?(A=Math.min(A,g.start.x,g.end.x),d=Math.max(d,g.start.x,g.end.x),f=Math.min(f,g.start.y,g.end.y),b=Math.max(b,g.start.y,g.end.y)):(A=Math.min(A,g.center.x-g.radius),d=Math.max(d,g.center.x+g.radius),f=Math.min(f,g.center.y-g.radius),b=Math.max(b,g.center.y+g.radius));const M=Math.min(d-A,b-f)*o;M<e&&i.push({rule:"Piercing Blowout Rule",severity:"error",message:`Cutout / Slot #${C+1} minimum span (${M.toFixed(1)} mm) is less than sheet thickness (${e.toFixed(1)} mm). Fiber laser piercing will blow out.`,actualValue:M,thresholdValue:e,holeIndex:C})}}const a=e*1.5,r=n.boundingBox,u=(n.name.toLowerCase().includes("disc")||n.name.toLowerCase().includes("flange")||n.name.toLowerCase().includes("washer"))&&Math.abs(r.width-r.height)<.01,y=r.width/2,c={x:(r.minX+r.maxX)/2,y:(r.minY+r.maxY)/2};for(let C=0;C<n.innerHoles.length;C++){const P=n.innerHoles[C];if("radius"in P){const T=P,A=T.center.x,f=T.center.y,d=T.radius;let b;if(u){const M=Math.sqrt((A-c.x)**2+(f-c.y)**2);b=(y-(M+d))*o}else{const M=(A-d-r.minX)*o,g=(r.maxX-(A+d))*o,l=(f-d-r.minY)*o,p=(r.maxY-(f+d))*o;b=Math.min(M,g,l,p)}b<=0?i.push({rule:"Edge Margin Distance Rule",severity:"error",message:`Hole #${C+1} extends outside the outer cutting contour. Cutout breaches the part perimeter.`,actualValue:b,thresholdValue:0,holeIndex:C}):b<a&&i.push({rule:"Edge Margin Distance Rule",severity:"warning",message:`Hole #${C+1} is too close to the outer edge (${b.toFixed(1)} mm vs safe margin ${a.toFixed(1)} mm). Laser heat may warp or melt the edge.`,actualValue:b,thresholdValue:a,holeIndex:C})}}const h=e*1.5,x=n.name.toLowerCase().includes("jali")?15:n.innerHoles.length;for(let C=0;C<x;C++)for(let P=C+1;P<n.innerHoles.length;P++){const T=n.innerHoles[C],A=n.innerHoles[P],d=C===0&&(n.name.toLowerCase().includes("disc")||n.name.toLowerCase().includes("flange")||n.name.toLowerCase().includes("washer"))?"Inner Bore (Hole #1)":`Hole #${C+1}`;if("radius"in T&&"radius"in A){const b=T,M=A,g=b.center.x-M.center.x,l=b.center.y-M.center.y,D=Math.sqrt(g*g+l*l)*o-(b.radius+M.radius)*o;D<=.05?i.push({rule:"Cutout Overlap / Collision Rule",severity:"error",message:`Hole #${P+1} collides/overlaps with ${d}. Overlapping cutouts cause laser nozzle blowout, dross, and mechanical failure.`,actualValue:D,thresholdValue:0,holeIndex:P}):D<h&&i.push({rule:"Hole-to-Hole Bridge Rule",severity:"warning",message:`Hole #${P+1} is too close to ${d} (bridge is ${D.toFixed(1)} mm vs safe margin ${h.toFixed(1)} mm). Laser heat will warp or burn out the thin metal bridge.`,actualValue:D,thresholdValue:h,holeIndex:P})}}const m=r.width*o,v=r.height*o;m>4e3||v>2e3?i.push({rule:"Bed Size Limit",severity:"error",message:`Part dimensions (${m.toFixed(0)} x ${v.toFixed(0)} mm) exceed standard sheet metal laser bed size (3000 x 1500 mm / 10 x 5 ft). Check your unit selection.`}):(m<5||v<5)&&i.push({rule:"Minimum Part Size",severity:"warning",message:`Part size (${m.toFixed(1)} x ${v.toFixed(1)} mm) is extremely small. Small parts may fall through laser bed slats into the slag tray.`});const I=i.some(C=>C.severity==="error"),k=i.some(C=>C.severity==="warning");return{isManufacturable:!I,hasWarnings:k,issues:i}}const ge=[{id:"cypcut",name:"CypCut (FSCUT / Global Fiber Laser)",outerLayerName:"0",outerColor:7,innerLayerName:"1",innerColor:2,etchLayerName:"2",etchColor:4},{id:"trumpf",name:"Trumpf TruTops (Boost / Classic)",outerLayerName:"OUTER",outerColor:1,innerLayerName:"INNER",innerColor:3,etchLayerName:"MARK",etchColor:4},{id:"sigmanest",name:"SigmaNEST / ProNest",outerLayerName:"CUT_EXTERIOR",outerColor:1,innerLayerName:"CUT_INTERIOR",innerColor:2,etchLayerName:"SCRIBE",etchColor:5},{id:"bysoft",name:"Bystronic BySoft / ByVision",outerLayerName:"CUT_OUTER",outerColor:7,innerLayerName:"CUT_INNER",innerColor:3,etchLayerName:"ETCH",etchColor:4},{id:"generic",name:"Universal Standard CAM",outerLayerName:"0_CUT_OUTER",outerColor:7,innerLayerName:"1_CUT_INNER",innerColor:2,etchLayerName:"2_MARKING",etchColor:4}];function io(n,e){const t=n.units==="inch"?1:4,o=[],s=(a,r)=>{o.push(a.toString()),o.push(r.toString())};s(0,"SECTION"),s(2,"HEADER"),s(9,"$ACADVER"),s(1,"AC1024"),s(9,"$INSUNITS"),s(70,t),s(9,"$EXTMIN"),s(10,n.boundingBox.minX.toFixed(4)),s(20,n.boundingBox.minY.toFixed(4)),s(30,"0.0"),s(9,"$EXTMAX"),s(10,n.boundingBox.maxX.toFixed(4)),s(20,n.boundingBox.maxY.toFixed(4)),s(30,"0.0"),s(0,"ENDSEC"),s(0,"SECTION"),s(2,"TABLES"),s(0,"TABLE"),s(2,"LAYER"),s(70,3),s(0,"LAYER"),s(2,e.outerLayerName),s(70,0),s(62,e.outerColor),s(6,"CONTINUOUS"),s(0,"LAYER"),s(2,e.innerLayerName),s(70,0),s(62,e.innerColor),s(6,"CONTINUOUS"),s(0,"LAYER"),s(2,e.etchLayerName),s(70,0),s(62,e.etchColor),s(6,"CONTINUOUS"),s(0,"ENDTAB"),s(0,"ENDSEC"),s(0,"SECTION"),s(2,"ENTITIES"),Cn(n.outerContour,e.outerLayerName,e.outerColor,s);for(const a of n.innerHoles)if("radius"in a){const r=a;s(0,"CIRCLE"),s(8,e.innerLayerName),s(62,e.innerColor),s(10,r.center.x.toFixed(4)),s(20,r.center.y.toFixed(4)),s(30,"0.0"),s(40,r.radius.toFixed(4))}else Cn(a,e.innerLayerName,e.innerColor,s);return s(0,"ENDSEC"),s(0,"EOF"),o.join(`\r
`)+`\r
`}function Cn(n,e,i,t){if(n.segments.length===2&&n.segments[0].type==="arc"&&n.segments[1].type==="arc"&&n.segments[0].radius===n.segments[1].radius){const o=n.segments[0];t(0,"CIRCLE"),t(8,e),t(62,i),t(10,o.center.x.toFixed(4)),t(20,o.center.y.toFixed(4)),t(30,"0.0"),t(40,o.radius.toFixed(4));return}t(0,"LWPOLYLINE"),t(8,e),t(62,i),t(90,n.segments.length),t(70,n.isClosed?1:0);for(const o of n.segments)if(o.type==="line")t(10,o.start.x.toFixed(4)),t(20,o.start.y.toFixed(4)),t(42,"0.0");else if(o.type==="arc"){const s=o.center.x+o.radius*Math.cos(o.startAngle),a=o.center.y+o.radius*Math.sin(o.startAngle);let r=o.endAngle-o.startAngle;o.counterClockwise?r<0&&(r+=2*Math.PI):r>0&&(r-=2*Math.PI);const u=Math.tan(r/4);t(10,s.toFixed(4)),t(20,a.toFixed(4)),t(42,u.toFixed(6))}}const so=["defpoints","dimension","dim","text","title","border","hatch","notes","anno"];function Ie(n){const e=n.toLowerCase();return so.some(i=>e.includes(i))}function Je(n,e){return Math.sqrt((n.x-e.x)**2+(n.y-e.y)**2)}function ao(n,e,i){const t=e.x-n.x,o=e.y-n.y,s=Math.sqrt(t*t+o*o);if(s<1e-6||Math.abs(i)<1e-6)return{type:"line",start:n,end:e};const a=s/2*((1+i*i)/(2*Math.abs(i))),r=(n.x+e.x)/2,u=(n.y+e.y)/2,y=-o/s,c=t/s,h=s/2*((1-i*i)/(2*i)),$=r+y*h,x=u+c*h;let m=Math.atan2(n.y-x,n.x-$),v=Math.atan2(e.y-x,e.x-$);return m<0&&(m+=2*Math.PI),v<0&&(v+=2*Math.PI),{type:"arc",center:{x:$,y:x},radius:a,startAngle:m,endAngle:v,counterClockwise:i>0}}function Mn(n,e=8){const i=[];for(const t of n)if(t.type==="line")i.push({x:t.start.x,y:t.start.y});else if(t.type==="arc"){let o=t.endAngle-t.startAngle;t.counterClockwise&&o<0&&(o+=2*Math.PI),!t.counterClockwise&&o>0&&(o-=2*Math.PI);for(let s=0;s<e;s++){const a=s/e,r=t.startAngle+o*a;i.push({x:t.center.x+t.radius*Math.cos(r),y:t.center.y+t.radius*Math.sin(r)})}}return i}function In(n,e){let i=!1;const t=e.length;for(let o=0,s=t-1;o<t;s=o++){const a=e[o].x,r=e[o].y,u=e[s].x,y=e[s].y;r>n.y!=y>n.y&&n.x<(u-a)*(n.y-r)/(y-r)+a&&(i=!i)}return i}function Nn(n){var T,A;const e=n.split(/\r?\n/);let i="mm";const t=[],o=[],s=[],a=[];let r=!1,u=!1,y="",c=0;for(;c<e.length-1;){const f=parseInt(e[c].trim(),10),d=e[c+1].trim();if(c+=2,f===0&&d==="SECTION"){const b=parseInt((T=e[c])==null?void 0:T.trim(),10),M=(A=e[c+1])==null?void 0:A.trim();b===2&&M==="HEADER"&&(u=!0),b===2&&M==="ENTITIES"&&(r=!0)}else f===0&&d==="ENDSEC"&&(u=!1,r=!1);if(u){if(f===9)y=d;else if(y==="$INSUNITS"&&f===70){const b=parseInt(d,10);b===1?i="inch":b===4&&(i="mm")}}if(r&&f===0){if(d==="LINE"){const b={x1:0,y1:0,x2:0,y2:0,layer:"0"};for(;c<e.length-1&&parseInt(e[c].trim(),10)!==0;){const M=parseInt(e[c].trim(),10),g=e[c+1].trim();c+=2,M===8?b.layer=g:M===10?b.x1=parseFloat(g):M===20?b.y1=parseFloat(g):M===11?b.x2=parseFloat(g):M===21&&(b.y2=parseFloat(g))}Ie(b.layer)||t.push(b)}else if(d==="CIRCLE"){const b={cx:0,cy:0,r:0,layer:"0"};for(;c<e.length-1&&parseInt(e[c].trim(),10)!==0;){const M=parseInt(e[c].trim(),10),g=e[c+1].trim();c+=2,M===8?b.layer=g:M===10?b.cx=parseFloat(g):M===20?b.cy=parseFloat(g):M===40&&(b.r=parseFloat(g))}Ie(b.layer)||o.push(b)}else if(d==="ARC"){const b={cx:0,cy:0,r:0,sa:0,ea:0,layer:"0"};for(;c<e.length-1&&parseInt(e[c].trim(),10)!==0;){const M=parseInt(e[c].trim(),10),g=e[c+1].trim();c+=2,M===8?b.layer=g:M===10?b.cx=parseFloat(g):M===20?b.cy=parseFloat(g):M===40?b.r=parseFloat(g):M===50?b.sa=parseFloat(g)*Math.PI/180:M===51&&(b.ea=parseFloat(g)*Math.PI/180)}Ie(b.layer)||s.push(b)}else if(d==="LWPOLYLINE"){const b={vertices:[],isClosed:!1,layer:"0"};let M=0,g=0,l=!1,p=!1;for(;c<e.length-1&&parseInt(e[c].trim(),10)!==0;){const D=parseInt(e[c].trim(),10),O=e[c+1].trim();if(c+=2,D===8)b.layer=O;else if(D===70)b.isClosed=(parseInt(O,10)&1)===1;else if(D===10)l&&p&&(b.vertices.push({x:M,y:g}),p=!1),M=parseFloat(O),l=!0;else if(D===20)g=parseFloat(O),p=!0;else if(D===42){const G=b.vertices[b.vertices.length-1];G&&(G.bulge=parseFloat(O))}}l&&p&&b.vertices.push({x:M,y:g}),Ie(b.layer)||a.push(b)}}}const h=[];for(const f of a){if(f.vertices.length<2)continue;const d=[],b=f.vertices.length,M=f.isClosed?b:b-1;for(let W=0;W<M;W++){const F=f.vertices[W],E=f.vertices[(W+1)%b];F.bulge&&Math.abs(F.bulge)>1e-5?d.push(ao(F,E,F.bulge)):d.push({type:"line",start:{x:F.x,y:F.y},end:{x:E.x,y:E.y}})}const g=Mn(d);let l=1/0,p=1/0,D=-1/0,O=-1/0;for(const W of g)l=Math.min(l,W.x),D=Math.max(D,W.x),p=Math.min(p,W.y),O=Math.max(O,W.y);const G={minX:l,minY:p,maxX:D,maxY:O,width:Math.max(1,D-l),height:Math.max(1,O-p)};h.push({segments:d,polygon:g,bbox:G,bboxArea:G.width*G.height})}const $=[];for(const f of t)$.push({kind:"line",start:{x:f.x1,y:f.y1},end:{x:f.x2,y:f.y2},visited:!1});for(const f of s){const d={x:f.cx+f.r*Math.cos(f.sa),y:f.cy+f.r*Math.sin(f.sa)},b={x:f.cx+f.r*Math.cos(f.ea),y:f.cy+f.r*Math.sin(f.ea)};$.push({kind:"arc",start:d,end:b,center:{x:f.cx,y:f.cy},radius:f.r,startAngle:f.sa,endAngle:f.ea,counterClockwise:!0,visited:!1})}const x=.35;for(let f=0;f<$.length;f++){if($[f].visited)continue;const d=[],b=$[f];b.visited=!0;const M={...b.start};let g={...b.end};b.kind==="line"?d.push({type:"line",start:b.start,end:b.end}):d.push({type:"arc",center:b.center,radius:b.radius,startAngle:b.startAngle,endAngle:b.endAngle,counterClockwise:b.counterClockwise});let l=!0;for(;l;){if(l=!1,Je(g,M)<=x&&d.length>=2){const p=d[d.length-1];p.type==="line"&&(p.end={...M});break}for(let p=0;p<$.length;p++){if($[p].visited)continue;const D=$[p];if(Je(g,D.start)<=x){D.visited=!0,D.kind==="line"?d.push({type:"line",start:{...g},end:D.end}):d.push({type:"arc",center:D.center,radius:D.radius,startAngle:D.startAngle,endAngle:D.endAngle,counterClockwise:D.counterClockwise}),g={...D.end},l=!0;break}else if(Je(g,D.end)<=x){D.visited=!0,D.kind==="line"?d.push({type:"line",start:{...g},end:D.start}):d.push({type:"arc",center:D.center,radius:D.radius,startAngle:D.endAngle,endAngle:D.startAngle,counterClockwise:!D.counterClockwise}),g={...D.start},l=!0;break}}}if(d.length>0){const p=Mn(d);let D=1/0,O=1/0,G=-1/0,W=-1/0;for(const E of p)D=Math.min(D,E.x),G=Math.max(G,E.x),O=Math.min(O,E.y),W=Math.max(W,E.y);const F={minX:D,minY:O,maxX:G,maxY:W,width:Math.max(1,G-D),height:Math.max(1,W-O)};h.push({segments:d,polygon:p,bbox:F,bboxArea:F.width*F.height})}}const m=new Map;for(let f=0;f<h.length;f++){const d=h[f];let b=-1,M=1/0;for(let g=0;g<h.length;g++){if(f===g)continue;const l=h[g];if(l.bbox.minX<=d.bbox.minX+.1&&l.bbox.maxX>=d.bbox.maxX-.1&&l.bbox.minY<=d.bbox.minY+.1&&l.bbox.maxY>=d.bbox.maxY-.1&&l.bboxArea>d.bboxArea){const p=d.polygon[0]||{x:(d.bbox.minX+d.bbox.maxX)/2,y:(d.bbox.minY+d.bbox.maxY)/2};In(p,l.polygon)&&l.bboxArea<M&&(M=l.bboxArea,b=g)}}b!==-1&&m.set(f,b)}const v=[],I=new Map;for(let f=0;f<h.length;f++)m.has(f)||(v.push(f),I.set(f,[]));for(let f=0;f<h.length;f++)if(m.has(f)){const d=m.get(f);I.has(d)&&I.get(d).push(h[f].segments)}const k=new Map,C=[];for(const f of v)k.set(f,[]);for(const f of o){const d={x:f.cx,y:f.cy};let b=-1,M=1/0;for(const g of v){const l=h[g];f.cx>=l.bbox.minX&&f.cx<=l.bbox.maxX&&f.cy>=l.bbox.minY&&f.cy<=l.bbox.maxY&&In(d,l.polygon)&&l.bboxArea<M&&(M=l.bboxArea,b=g)}b!==-1?k.get(b).push({center:d,radius:f.r}):C.push({center:d,radius:f.r})}const P=[];for(let f=0;f<v.length;f++){const d=v[f],b=h[d],M=[],g=I.get(d)||[];for(const p of g)M.push({segments:p,isClosed:!0,isHole:!0});const l=k.get(d)||[];for(const p of l)M.push(p);P.push({name:v.length>1?`Sanitized Part #${f+1}`:"Sanitized CNC Drawing",units:i,outerContour:{segments:b.segments,isClosed:!0,isHole:!1},innerHoles:M,boundingBox:b.bbox})}if(P.length===0&&C.length>0){const f=[...C].sort((l,p)=>p.radius-l.radius),d=f[0],b=[{type:"arc",center:{...d.center},radius:d.radius,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:{...d.center},radius:d.radius,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],M=f.slice(1),g={minX:d.center.x-d.radius,minY:d.center.y-d.radius,maxX:d.center.x+d.radius,maxY:d.center.y+d.radius,width:d.radius*2,height:d.radius*2};P.push({name:"Sanitized CNC Disc",units:i,outerContour:{segments:b,isClosed:!0,isHole:!1},innerHoles:M,boundingBox:g})}return P.length===0&&P.push({name:"Empty DXF Drawing",units:i,outerContour:{segments:[{type:"line",start:{x:0,y:0},end:{x:100,y:0}},{type:"line",start:{x:100,y:0},end:{x:100,y:100}},{type:"line",start:{x:100,y:100},end:{x:0,y:100}},{type:"line",start:{x:0,y:100},end:{x:0,y:0}}],isClosed:!0,isHole:!1},innerHoles:[],boundingBox:{minX:0,minY:0,maxX:100,maxY:100,width:100,height:100}}),P}function ro(n){const e=Nn(n);return e.sort((i,t)=>t.boundingBox.width*t.boundingBox.height-i.boundingBox.width*i.boundingBox.height),e[0]}const pe=[{id:"sheet_8x4",name:"8 × 4 ft (2500 × 1250 mm) - Standard Indian Plate",widthMm:1250,lengthMm:2500},{id:"sheet_10x5",name:"10 × 5 ft (3000 × 1500 mm) - Standard Laser Bed",widthMm:1500,lengthMm:3e3},{id:"sheet_20x5",name:"20 × 5 ft (6000 × 1500 mm) - Heavy Structural Plate",widthMm:1500,lengthMm:6e3},{id:"sheet_small",name:"4 × 4 ft (1250 × 1250 mm) - Offcut / Half Sheet",widthMm:1250,lengthMm:1250}],He=[{id:"us_sheet_5x10",name:"5 × 10 ft (60 × 120 in) - Standard US Laser Bed",widthMm:1524,lengthMm:3048},{id:"us_sheet_4x8",name:"4 × 8 ft (48 × 96 in) - Standard US Sheet",widthMm:1219.2,lengthMm:2438.4},{id:"us_sheet_6x12",name:"6 × 12 ft (72 × 144 in) - Large Format Table",widthMm:1828.8,lengthMm:3657.6},{id:"us_sheet_4x4",name:"4 × 4 ft (48 × 48 in) - Half Sheet / Drop",widthMm:1219.2,lengthMm:1219.2}];class co{constructor(e,i,t,o,s){re(this,"sheetW");re(this,"sheetL");re(this,"edgeMargin");re(this,"spacing");re(this,"allowRotation");this.sheetW=e,this.sheetL=i,this.edgeMargin=t,this.spacing=o,this.allowRotation=s}initSheetFreeRects(){const e=Math.max(0,this.sheetW-2*this.edgeMargin),i=Math.max(0,this.sheetL-2*this.edgeMargin);return[{x:this.edgeMargin,y:this.edgeMargin,width:e,height:i}]}scorePlacement(e,i,t){if(i>e.width||t>e.height)return{score1:1/0,score2:1/0};const o=e.width-i,s=e.height-t,a=Math.min(o,s),r=Math.max(o,s);return{score1:a,score2:r}}splitFreeRect(e,i,t,o,s){if(i>=e.x+e.width||i+o<=e.x||t>=e.y+e.height||t+s<=e.y)return[e];const a=[];return t>e.y&&t<e.y+e.height&&a.push({x:e.x,y:e.y,width:e.width,height:t-e.y}),t+s<e.y+e.height&&t+s>e.y&&a.push({x:e.x,y:t+s,width:e.width,height:e.y+e.height-(t+s)}),i>e.x&&i<e.x+e.width&&a.push({x:e.x,y:e.y,width:i-e.x,height:e.height}),i+o<e.x+e.width&&i+o>e.x&&a.push({x:i+o,y:e.y,width:e.x+e.width-(i+o),height:e.height}),a}pruneFreeRects(e){const i=e.filter(o=>o.width>0&&o.height>0),t=[];for(let o=0;o<i.length;o++){let s=!1;const a=i[o];for(let r=0;r<i.length;r++){if(o===r)continue;const u=i[r];if(a.x>=u.x&&a.y>=u.y&&a.x+a.width<=u.x+u.width&&a.y+a.height<=u.y+u.height){s=!0;break}}s||t.push(a)}return t}pack(e){const i=[];let t=0,o=this.initSheetFreeRects();for(let s=0;s<e.length;s++){const a=e[s];let r=!1;for(;!r;){let u={score1:1/0,score2:1/0},y=-1,c=!1,h=a.w,$=a.h;for(let x=0;x<o.length;x++){const m=o[x],v=this.scorePlacement(m,a.w,a.h);if((v.score1<u.score1||v.score1===u.score1&&v.score2<u.score2)&&(u=v,y=x,c=!1,h=a.w,$=a.h),this.allowRotation&&Math.abs(a.w-a.h)>.5){const I=this.scorePlacement(m,a.h,a.w);(I.score1<u.score1||I.score1===u.score1&&I.score2<u.score2)&&(u=I,y=x,c=!0,h=a.h,$=a.w)}}if(y!==-1){const x=o[y],m=x.x,v=x.y;i.push({id:a.instanceId,partIndex:s,sheetIndex:t,x:m,y:v,width:h,height:$,rotated:c,partName:a.name,partId:a.instanceId,color:a.color});const I=h+this.spacing,k=$+this.spacing;let C=[];for(const P of o){const T=this.splitFreeRect(P,m,v,I,k);C.push(...T)}o=this.pruneFreeRects(C),r=!0}else{const x=Math.max(0,this.sheetW-2*this.edgeMargin),m=Math.max(0,this.sheetL-2*this.edgeMargin);o.length===1&&o[0].width===x&&o[0].height===m||t>=50?(i.push({id:a.instanceId,partIndex:s,sheetIndex:t,x:0,y:0,width:a.w,height:a.h,rotated:!1,partName:a.name,partId:a.instanceId,color:a.color}),r=!0):(t++,o=this.initSheetFreeRects())}}}return i}}function rn(n,e=pe[0],i=6,t=7.85,o={}){var D;const s=o.edgeMarginMm!==void 0?o.edgeMarginMm:10,a=o.partSpacingMm!==void 0?o.partSpacingMm:5,r=o.allowRotation!==!1,u=e.widthMm,y=e.lengthMm,c=[];let h=0,$=0;for(let O=0;O<n.length;O++){const G=n[O],W=Math.max(1,Math.floor(G.quantity));h+=W;const E=((D=G.geometry)==null?void 0:D.units)==="inch"?25.4:1,H=Math.max(1,G.boundingBox.width*E),R=Math.max(1,G.boundingBox.height*E),V=H*R;for(let Y=0;Y<W;Y++)c.push({instanceId:`${G.id}_${Y}`,itemIndex:O,name:G.name,w:H,h:R,color:G.color}),$+=V}c.sort((O,G)=>G.w*G.h-O.w*O.h);const m=new co(u,y,s,a,r).pack(c),v=m.reduce((O,G)=>Math.max(O,G.sheetIndex),0),I=m.length>0?v+1:1,C=u*y*I,P=Math.min(100,Math.round($/C*1e3)/10),T=$*i/1e3,A=Math.round(T*t/1e3*100)/100,f=C*i/1e3,d=Math.round(f*t/1e3*100)/100,b=Math.max(0,Math.round((d-A)*100)/100),M=m.filter(O=>O.sheetIndex===v);let g=0;for(const O of M)g=Math.max(g,O.y+O.height);const l=Math.max(0,Math.round(y-(g+a))),p=u;return{sheetSize:e,partsRequested:h,partsPlaced:m.length,sheetsRequired:I,sheetUtilizationPercent:P,totalNetPartMassKg:A,totalLoadedSheetMassKg:d,totalSkeletonScrapMassKg:b,remnantWidthMm:p,remnantLengthMm:l,packedParts:m}}function lo(n,e,i=pe[0],t=6,o=7.85,s={},a="mm"){const r=a==="inch",u=r?25.4:1,c={id:"part_0",name:"Part",boundingBox:r?{minX:n.minX*u,minY:n.minY*u,maxX:n.maxX*u,maxY:n.maxY*u,width:n.width*u,height:n.height*u}:n,quantity:e};return rn([c],i,t,o,s)}const cn=[{id:"steel_a36",name:"Mild Steel (A36 / S235)",densityGPerCm3:7.85,gauges:[{gaugeName:'16 Gauge (1.5 mm / 0.060")',thicknessMm:1.5,thicknessInches:.0598,pricePerSqInch:.018,pricePerLinearInchCut:.035,pricePerPierce:.15},{gaugeName:'11 Gauge (3.0 mm / 0.120")',thicknessMm:3,thicknessInches:.1196,pricePerSqInch:.035,pricePerLinearInchCut:.055,pricePerPierce:.25},{gaugeName:'3/16" Plate (4.76 mm / 0.188")',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.058,pricePerLinearInchCut:.085,pricePerPierce:.4},{gaugeName:'1/4" Plate (6.35 mm / 0.250")',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.078,pricePerLinearInchCut:.12,pricePerPierce:.6},{gaugeName:'3/8" Plate (9.52 mm / 0.375")',thicknessMm:9.52,thicknessInches:.375,pricePerSqInch:.115,pricePerLinearInchCut:.185,pricePerPierce:.95},{gaugeName:'1/2" Plate (12.7 mm / 0.500")',thicknessMm:12.7,thicknessInches:.5,pricePerSqInch:.155,pricePerLinearInchCut:.26,pricePerPierce:1.4}]},{id:"stainless_304",name:"Stainless Steel (304 2B)",densityGPerCm3:8,gauges:[{gaugeName:'16 Gauge (1.5 mm / 0.060")',thicknessMm:1.5,thicknessInches:.0598,pricePerSqInch:.052,pricePerLinearInchCut:.065,pricePerPierce:.3},{gaugeName:'11 Gauge (3.0 mm / 0.120")',thicknessMm:3,thicknessInches:.1196,pricePerSqInch:.098,pricePerLinearInchCut:.105,pricePerPierce:.5},{gaugeName:'3/16" Plate (4.76 mm / 0.188")',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.165,pricePerLinearInchCut:.165,pricePerPierce:.85},{gaugeName:'1/4" Plate (6.35 mm / 0.250")',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.22,pricePerLinearInchCut:.24,pricePerPierce:1.25}]},{id:"aluminum_6061",name:"Aluminum (6061-T6)",densityGPerCm3:2.7,gauges:[{gaugeName:'1/16" Sheet (1.58 mm / 0.063")',thicknessMm:1.58,thicknessInches:.0625,pricePerSqInch:.038,pricePerLinearInchCut:.045,pricePerPierce:.2},{gaugeName:'1/8" Sheet (3.18 mm / 0.125")',thicknessMm:3.18,thicknessInches:.125,pricePerSqInch:.072,pricePerLinearInchCut:.075,pricePerPierce:.35},{gaugeName:'3/16" Plate (4.76 mm / 0.188")',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.11,pricePerLinearInchCut:.115,pricePerPierce:.55},{gaugeName:'1/4" Plate (6.35 mm / 0.250")',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.145,pricePerLinearInchCut:.16,pricePerPierce:.8}]}],Hn=[{id:"is2062_ms",name:"IS 2062 E250 Mild Steel (MS)",densityGPerCm3:7.85,gauges:[{gaugeName:"1.6 mm Sheet (16G)",thicknessMm:1.6,thicknessInches:.063,pricePerSqInch:.02,pricePerLinearInchCut:.035,pricePerPierce:.15,pricePerKg:74,pricePerMeterCut:9,pricePerSqFtJali:55},{gaugeName:"2.0 mm Sheet (14G)",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.025,pricePerLinearInchCut:.04,pricePerPierce:.2,pricePerKg:74,pricePerMeterCut:12,pricePerSqFtJali:65},{gaugeName:"3.0 mm Sheet (10G)",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.035,pricePerLinearInchCut:.05,pricePerPierce:.25,pricePerKg:75,pricePerMeterCut:15,pricePerSqFtJali:95},{gaugeName:"4.0 mm Plate",thicknessMm:4,thicknessInches:.1575,pricePerSqInch:.048,pricePerLinearInchCut:.07,pricePerPierce:.35,pricePerKg:75,pricePerMeterCut:22,pricePerSqFtJali:130},{gaugeName:"6.0 mm Plate",thicknessMm:6,thicknessInches:.2362,pricePerSqInch:.072,pricePerLinearInchCut:.11,pricePerPierce:.55,pricePerKg:76,pricePerMeterCut:35},{gaugeName:"8.0 mm Plate",thicknessMm:8,thicknessInches:.315,pricePerSqInch:.098,pricePerLinearInchCut:.16,pricePerPierce:.8,pricePerKg:78,pricePerMeterCut:52},{gaugeName:"10.0 mm Plate",thicknessMm:10,thicknessInches:.3937,pricePerSqInch:.125,pricePerLinearInchCut:.22,pricePerPierce:1.1,pricePerKg:78,pricePerMeterCut:68},{gaugeName:"12.0 mm Plate",thicknessMm:12,thicknessInches:.4724,pricePerSqInch:.15,pricePerLinearInchCut:.28,pricePerPierce:1.4,pricePerKg:80,pricePerMeterCut:88},{gaugeName:"16.0 mm Plate",thicknessMm:16,thicknessInches:.6299,pricePerSqInch:.21,pricePerLinearInchCut:.38,pricePerPierce:2.2,pricePerKg:82,pricePerMeterCut:135},{gaugeName:"20.0 mm Plate",thicknessMm:20,thicknessInches:.7874,pricePerSqInch:.26,pricePerLinearInchCut:.48,pricePerPierce:3,pricePerKg:85,pricePerMeterCut:180}]},{id:"ss304_indian",name:"SS 304 (Stainless Steel - N2 / Air Cut)",densityGPerCm3:8,gauges:[{gaugeName:"1.2 mm Sheet",thicknessMm:1.2,thicknessInches:.0472,pricePerSqInch:.045,pricePerLinearInchCut:.06,pricePerPierce:.3,pricePerKg:230,pricePerMeterCut:16,pricePerSqFtJali:110},{gaugeName:"1.5 mm Sheet",thicknessMm:1.5,thicknessInches:.0591,pricePerSqInch:.055,pricePerLinearInchCut:.07,pricePerPierce:.35,pricePerKg:235,pricePerMeterCut:22,pricePerSqFtJali:135},{gaugeName:"2.0 mm Sheet",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.072,pricePerLinearInchCut:.09,pricePerPierce:.45,pricePerKg:235,pricePerMeterCut:30,pricePerSqFtJali:175},{gaugeName:"3.0 mm Sheet",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.11,pricePerLinearInchCut:.14,pricePerPierce:.65,pricePerKg:240,pricePerMeterCut:45,pricePerSqFtJali:240},{gaugeName:"4.0 mm Plate",thicknessMm:4,thicknessInches:.1575,pricePerSqInch:.15,pricePerLinearInchCut:.19,pricePerPierce:.9,pricePerKg:245,pricePerMeterCut:65},{gaugeName:"6.0 mm Plate",thicknessMm:6,thicknessInches:.2362,pricePerSqInch:.22,pricePerLinearInchCut:.28,pricePerPierce:1.4,pricePerKg:250,pricePerMeterCut:105}]},{id:"aluminum_indian",name:"Aluminium 6061 (Air Cut)",densityGPerCm3:2.7,gauges:[{gaugeName:"2.0 mm Sheet",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.045,pricePerLinearInchCut:.06,pricePerPierce:.3,pricePerKg:260,pricePerMeterCut:20},{gaugeName:"3.0 mm Sheet",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.065,pricePerLinearInchCut:.08,pricePerPierce:.4,pricePerKg:260,pricePerMeterCut:28},{gaugeName:"5.0 mm Plate",thicknessMm:5,thicknessInches:.1969,pricePerSqInch:.11,pricePerLinearInchCut:.13,pricePerPierce:.65,pricePerKg:270,pricePerMeterCut:55}]}],_n={bendingBendsCount:0,bendingRatePerBend:15,deburringEnabled:!1,deburringRatePerKg:8,tappingHolesCount:0,tappingRatePerHole:18,surfaceFinish:"none",primerRatePerSqFt:20,powderCoatingRatePerSqFt:45,galvanizingRatePerKg:42},_e={shopName:"Shree Balaji Laser Tech (Bhosari, Pune)",currency:"INR",pricingMode:"india_metric",indianQuotingMode:"job_work",assistGas:"air",sheetLoadingFee:250,gstPercent:18,isInterstateSale:!1,minimumOrderFee:500,leadTimeDays:2,rushMultiplier:1.25,selectedCAMProfileId:"cypcut",shopGstin:"27AABCS1429B1Z8",shopAddress:"Plot 42, J-Block, MIDC Bhosari, Pune, MH 411026",shopPhone:"+91 98220 12345",upiId:"balajilaser@upi",quantityTiers:[{minQty:1,discountPercent:0},{minQty:10,discountPercent:8},{minQty:25,discountPercent:15},{minQty:50,discountPercent:22},{minQty:100,discountPercent:30}]},Me={shopName:"Midwest Precision CNC & Laser",currency:"USD",pricingMode:"global_imperial",indianQuotingMode:"with_material",assistGas:"oxygen",sheetLoadingFee:20,gstPercent:7,isInterstateSale:!1,minimumOrderFee:75,leadTimeDays:3,rushMultiplier:1.35,selectedCAMProfileId:"trumpf",shopAddress:"1420 Industrial Pkwy, Cleveland, OH 44135",shopPhone:"(216) 555-0198",quantityTiers:[{minQty:1,discountPercent:0},{minQty:5,discountPercent:10},{minQty:10,discountPercent:18},{minQty:25,discountPercent:28},{minQty:50,discountPercent:38}]};function uo(n,e={}){const i={..._n,...e},t=(i.bendingBendsCount||0)*(i.bendingRatePerBend||15),o=i.deburringEnabled?n.theoreticalWeightKg*(i.deburringRatePerKg||8):0,s=(i.tappingHolesCount||0)*(i.tappingRatePerHole||18),a=Math.max(.1,n.netAreaSqMm/(304.8*304.8));let r=0;i.surfaceFinish==="primer"?r=a*(i.primerRatePerSqFt||20):i.surfaceFinish==="powder_coating"?r=a*(i.powderCoatingRatePerSqFt||45):i.surfaceFinish==="galvanizing"&&(r=n.theoreticalWeightKg*(i.galvanizingRatePerKg||42));const u=t+o+s+r;return{bendingCost:Math.round(t*100)/100,deburringCost:Math.round(o*100)/100,tappingCost:Math.round(s*100)/100,surfaceFinishCost:Math.round(r*100)/100,totalSecondaryCost:Math.round(u*100)/100}}function Jt(n,e,i,t=Me,o={}){const s=Math.max(1,Math.floor(i));let a=0,r=0,u=0,y=0,c="HSN 7326 (Articles of Iron or Steel)";const h=t.indianQuotingMode||"with_material";let $=1;if(t.assistGas==="nitrogen"?$=2:t.assistGas==="oxygen"?$=1.15:$=1,t.pricingMode==="india_metric")if(h==="job_work"){a=0;const l=n.totalCutLengthMm/1e3,p=e.pricePerMeterCut||20;r=l*p*$,u=n.pierceCount*(e.pricePerPierce>1?e.pricePerPierce:1.5),y=(t.sheetLoadingFee||250)/Math.max(1,s),c="SAC 9988 (Job Work / Manufacturing Services)"}else if(h==="sqft_jali"){const l=Math.max(.1,n.boundingBoxWidthMm/304.8*(n.boundingBoxHeightMm/304.8)),p=e.pricePerSqFtJali||(e.pricePerKg?e.pricePerKg*1.15:65);a=l*p,r=0,u=0,y=0,c="HSN 7326 (Decorative Laser Cut Panels)"}else{a=n.theoreticalWeightKg*1.12*(e.pricePerKg||75);const p=n.totalCutLengthMm/1e3,D=e.pricePerMeterCut||20;r=p*D*$,u=n.pierceCount*(e.pricePerPierce>1?e.pricePerPierce:1.5),y=0,c="HSN 7326 (Fabricated Steel Articles)"}else a=n.boundingBoxWidthInches*n.boundingBoxHeightInches*1.15*e.pricePerSqInch,r=n.totalCutLengthInches*e.pricePerLinearInchCut,u=n.pierceCount*e.pricePerPierce,y=0;const x=uo(n,o),m=x.totalSecondaryCost,v=a+r+u+y+m;let I=0;for(const l of t.quantityTiers||[])s>=l.minQty&&(I=l.discountPercent);const k=v*(1-I/100),C=k*s,P=C<t.minimumOrderFee,T=Math.max(t.minimumOrderFee,C),A=T/s,f=t.gstPercent>0?T*(t.gstPercent/100):0;let d=0,b=0,M=0;t.gstPercent>0&&(t.isInterstateSale?M=f:(d=f/2,b=f/2));const g=T+f;return{currency:t.currency,quotingMode:h,quantity:s,unitMaterialCost:Math.round(a*100)/100,unitCutCost:Math.round(r*100)/100,unitPierceCost:Math.round(u*100)/100,unitHandlingCost:Math.round(y*100)/100,unitSecondaryCost:Math.round(m*100)/100,secondaryBreakdown:x,unitSubtotal:Math.round(v*100)/100,discountPercent:I,discountedUnitPrice:Math.round(k*100)/100,orderTotalBeforeMin:Math.round(C*100)/100,minimumOrderFloorApplied:P,finalOrderTotal:Math.round(T*100)/100,finalUnitPrice:Math.round(A*100)/100,gstAmount:Math.round(f*100)/100,cgstAmount:Math.round(d*100)/100,sgstAmount:Math.round(b*100)/100,igstAmount:Math.round(M*100)/100,finalTotalWithGst:Math.round(g*100)/100,hsnSacCode:c}}function vn(n,e,i,t,o,s,a=_e){const u=o.currency==="INR"?"₹":"$",y=o.quotingMode;let c="WITH MATERIAL (SUPPLY & CUT)";y==="job_work"&&(c="JOB WORK (LABOUR ONLY)"),y==="sqft_jali"&&(c="ARCHITECTURAL JALI (SQ.FT BASIS)");const h=(e.boundingBoxWidthMm/304.8*(e.boundingBoxHeightMm/304.8)).toFixed(2),$=a.assistGas==="nitrogen"?"N2 (Nitrogen)":a.assistGas==="oxygen"?"O2 (Oxygen)":"High-Pressure Air";return`*QUOTATION — ${s.toUpperCase()}*
Ref: CNC-Q${Math.floor(1e3+Math.random()*9e3)} | Mode: *${c}*

*Part:* ${n} (${e.boundingBoxWidthMm.toFixed(0)} × ${e.boundingBoxHeightMm.toFixed(0)} mm / ${h} sq.ft)
*Material:* ${i} (${t.gaugeName})
*Assist Gas:* ${$}
*Quantity:* ${o.quantity} pcs

----------------------------------
${y==="job_work"?`• Raw Material: *Supplied by Customer*
• Cut Meters: ${(e.totalCutLengthMm/1e3).toFixed(2)} m (${e.pierceCount*o.quantity} pierces)
• Cutting & Piercing: ${u}${((o.unitCutCost+o.unitPierceCost)*o.quantity).toFixed(2)}
• Plate Loading Fee: ${u}${(o.unitHandlingCost*o.quantity).toFixed(2)}`:y==="sqft_jali"?`• Total Panel Area: ${(parseFloat(h)*o.quantity).toFixed(2)} sq.ft
• Fabrication Rate: ${u}${(o.unitMaterialCost*o.quantity).toFixed(2)}`:`• Est. Net Weight: ${(e.theoreticalWeightKg*o.quantity).toFixed(2)} kg
• Cut Length: ${(e.totalCutLengthMm/1e3).toFixed(2)} meters (${e.pierceCount*o.quantity} pierces)
• Material Cost: ${u}${(o.unitMaterialCost*o.quantity).toFixed(2)}
• Laser Cutting: ${u}${((o.unitCutCost+o.unitPierceCost)*o.quantity).toFixed(2)}`}
${o.unitSecondaryCost>0?`• Secondary Operations: ${u}${(o.unitSecondaryCost*o.quantity).toFixed(2)}
`:""}${o.discountPercent>0?`• Volume Discount: -${o.discountPercent}%
`:""}----------------------------------
*Subtotal:* ${u}${o.finalOrderTotal.toFixed(2)}
${o.gstAmount>0?a.isInterstateSale?`*IGST (18%):* ${u}${o.igstAmount.toFixed(2)}
*FINAL TOTAL (INC. GST):* ${u}${o.finalTotalWithGst.toFixed(2)}`:`*CGST (9%):* ${u}${o.cgstAmount.toFixed(2)}
*SGST (9%):* ${u}${o.sgstAmount.toFixed(2)}
*FINAL TOTAL (INC. GST):* ${u}${o.finalTotalWithGst.toFixed(2)}`:`*FINAL TOTAL:* ${u}${o.finalOrderTotal.toFixed(2)}`}
----------------------------------
• ${o.hsnSacCode}
• CypCut Ready DXF pre-generated for production.
• Turnaround: 24 to 48 Hours.
• Advance: 50% with PO to confirm. UPI: ${a.upiId||"shop@upi"}`}function ke(n,e=_e,i=pe[0],t=!0){const o=e.currency==="INR";let s=0,a=0,r=0,u=0,y=0,c=0,h=0,$=0,x=0;const m=[];for(const l of n){const p=l.quantity;s+=p,a+=l.metrics.totalCutLengthMm/1e3*p,r+=l.metrics.pierceCount*p,u+=l.metrics.theoreticalWeightKg*p,y+=l.unitQuote.unitMaterialCost*p,c+=l.unitQuote.unitCutCost*p,h+=l.unitQuote.unitPierceCost*p,$+=l.unitQuote.unitHandlingCost*p,x+=l.unitQuote.unitSecondaryCost*p,m.push({id:l.id,name:l.partGeometry.name,boundingBox:l.partGeometry.boundingBox,quantity:p,thicknessMm:l.gaugeThicknessMm,color:l.color})}const v=n.length>0?Math.max(...n.map(l=>l.gaugeThicknessMm)):6,I=rn(m,i,v,7.85,{allowRotation:t}),k=y+c+h+$+x;let C=0;if(e.quantityTiers&&e.quantityTiers.length>0)for(const l of e.quantityTiers)s>=l.minQty&&l.discountPercent>C&&(C=l.discountPercent);const P=k*(C/100),T=Math.max(e.minimumOrderFee,k-P),A=o?e.gstPercent/100:0,f=T*A;let d=0,b=0,M=0;o&&f>0&&(e.isInterstateSale?M=f:(d=f/2,b=f/2));const g=T+f;return{currency:e.currency,totalItemsCount:n.length,totalPartsCount:s,totalCutLengthMeters:Math.round(a*100)/100,totalPierces:r,totalNetPartMassKg:Math.round(u*100)/100,totalMaterialCost:Math.round(y*100)/100,totalCutCost:Math.round(c*100)/100,totalPierceCost:Math.round(h*100)/100,totalHandlingCost:Math.round($*100)/100,totalSecondaryCost:Math.round(x*100)/100,subtotalBeforeDiscount:Math.round(k*100)/100,volumeDiscountPercent:C,discountAmount:Math.round(P*100)/100,orderTotalBeforeGst:Math.round(T*100)/100,gstAmount:Math.round(f*100)/100,cgstAmount:Math.round(d*100)/100,sgstAmount:Math.round(b*100)/100,igstAmount:Math.round(M*100)/100,finalTotalWithGst:Math.round(g*100)/100,nestingResult:I}}function mo(n,e){const t=e.currency==="INR"?"₹":"$",o=n.shopSettings;let s="";for(let r=0;r<n.items.length;r++){const u=n.items[r],y=u.totalPrice.toFixed(2);s+=`${r+1}. *${u.partGeometry.name}* (${u.materialName} ${u.gaugeThicknessMm}mm)
   • Qty: ${u.quantity} pcs @ ${t}${u.unitQuote.finalUnitPrice.toFixed(2)} = *${t}${y}*
`}const a=e.nestingResult.sheetSize.name.split(" - ")[0]||"Standard Plate";return`*PROJECT QUOTATION — ${o.shopName.toUpperCase()}*
Ref: PRJ-Q${Math.floor(1e3+Math.random()*9e3)} | ${e.totalItemsCount} Parts (${e.totalPartsCount} pcs total)
Date: ${new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}

*BILL OF MATERIALS (BOM):*
----------------------------------
${s}----------------------------------
*SHEET NESTING & CAM SUMMARY:*
• Nesting: *${e.nestingResult.sheetsRequired} Sheet(s)* of ${a}
• Sheet Utilization: *${e.nestingResult.sheetUtilizationPercent}%*
• Skeleton Scrap: ${e.nestingResult.totalSkeletonScrapMassKg} kg | Reusable Remnant: ${e.nestingResult.remnantWidthMm} × ${e.nestingResult.remnantLengthMm} mm
• Total Laser Cut: ${e.totalCutLengthMeters} meters (${e.totalPierces} pierces)
• Net Steel Mass: ${e.totalNetPartMassKg} kg
----------------------------------
*Subtotal:* ${t}${e.subtotalBeforeDiscount.toFixed(2)}
${e.volumeDiscountPercent>0?`*Volume Discount (${e.volumeDiscountPercent}%):* -${t}${e.discountAmount.toFixed(2)}
`:""}*Taxable Subtotal:* ${t}${e.orderTotalBeforeGst.toFixed(2)}
${e.gstAmount>0?o.isInterstateSale?`*IGST (18%):* ${t}${e.igstAmount.toFixed(2)}
*FINAL PROJECT TOTAL (INC. GST):* ${t}${e.finalTotalWithGst.toFixed(2)}`:`*CGST (9%):* ${t}${e.cgstAmount.toFixed(2)}
*SGST (9%):* ${t}${e.sgstAmount.toFixed(2)}
*FINAL PROJECT TOTAL (INC. GST):* ${t}${e.finalTotalWithGst.toFixed(2)}`:`*FINAL PROJECT TOTAL:* ${t}${e.orderTotalBeforeGst.toFixed(2)}`}
----------------------------------
• SAC 9988 / HSN 7326 (GST Invoice with ITC)
• ⚠️ Rate validity: 48 Hours based on prevailing steel mandi rates.
• CypCut / FSCUT multi-layer CAM pre-processed.
• Advance: 50% with PO to confirm cut schedule.
• Instant UPI Pay: ${o.upiId||"shop@upi"}`}function ho(n,e="91"){const i=n.replace(/[\s\-\(\)\.]/g,"");return i?i.startsWith("+")?i.substring(1):i.length===10&&/^\d+$/.test(i)?`${e}${i}`:i:""}function Sn(n,e,i="91"){const t=e?ho(e,i):"",o=encodeURIComponent(n);return t?`https://wa.me/${t}?text=${o}`:`https://wa.me/?text=${o}`}const ln="cad_cnc_shop_settings_",dn="cad_cnc_materials_";function Rn(n,e){if(typeof window>"u"||!window.localStorage)return{...e};try{const i=window.localStorage.getItem(`${ln}${n.toLowerCase()}`);if(i){const t=JSON.parse(i);return{...e,...t}}}catch(i){console.warn("Failed to load shop settings from localStorage",i)}return{...e}}function go(n,e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(`${ln}${n.toLowerCase()}`,JSON.stringify(e))}catch(i){console.warn("Failed to save shop settings to localStorage",i)}}function On(n,e){if(typeof window>"u"||!window.localStorage)return JSON.parse(JSON.stringify(e));try{const i=window.localStorage.getItem(`${dn}${n.toLowerCase()}`);if(i)return JSON.parse(i)}catch(i){console.warn("Failed to load materials from localStorage",i)}return JSON.parse(JSON.stringify(e))}function po(n,e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(`${dn}${n.toLowerCase()}`,JSON.stringify(e))}catch(i){console.warn("Failed to save materials to localStorage",i)}}function fo(n){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.removeItem(`${ln}${n.toLowerCase()}`),window.localStorage.removeItem(`${dn}${n.toLowerCase()}`)}catch(e){console.warn("Failed to reset storage",e)}}function Pn(n,e,i,t,o,s,a=Me,r="Valued Customer"){const u=o.currency==="USD",y=u?"$":"₹",c=`RFQ-${Math.floor(1e3+Math.random()*9e3)}`,h=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),$=u?`${e.boundingBoxWidthInches.toFixed(2)}" × ${e.boundingBoxHeightInches.toFixed(2)}" (${t.thicknessInches.toFixed(3)}" plate)`:`${e.boundingBoxWidthMm.toFixed(0)} × ${e.boundingBoxHeightMm.toFixed(0)} mm (${t.thicknessMm} mm)`,x=u?`${e.totalCutLengthInches.toFixed(1)} inches (${e.pierceCount} pierces)`:`${(e.totalCutLengthMm/1e3).toFixed(2)} meters (${e.pierceCount} pierces)`,m=u?`${e.theoreticalWeightLbs.toFixed(2)} lbs`:`${e.theoreticalWeightKg.toFixed(2)} kg`,v=u?`${(e.theoreticalWeightLbs*o.quantity).toFixed(2)} lbs`:`${(e.theoreticalWeightKg*o.quantity).toFixed(2)} kg`;return`Subject: Quotation: ${n} (Ref #${c}) — ${s}

Dear ${r},

Thank you for requesting a quotation from ${s}. Below is your instant manufacturing cost estimate:

QUOTATION SUMMARY
--------------------------------------------------
Quote Ref: ${c}
Date: ${h}
Valid For: 15 Calendar Days

PART SPECIFICATIONS & BILL OF MATERIALS:
• Part Name: ${n}
• Material: ${i} — ${t.gaugeName}
• Part Dimensions: ${$}
• Est. Unit Weight: ${m} (Total Lot: ${v})
• Laser Cut Profile: ${x}
• Order Quantity: ${o.quantity} piece${o.quantity>1?"s":""}

COST BREAKDOWN:
--------------------------------------------------
• Raw Material: ${y}${o.unitMaterialCost.toFixed(2)} / pc
• Laser Cutting & Piercing: ${y}${(o.unitCutCost+o.unitPierceCost).toFixed(2)} / pc
${o.unitSecondaryCost>0?`• Secondary Operations (Forming/Deburr): ${y}${o.unitSecondaryCost.toFixed(2)} / pc
`:""}${o.discountPercent>0?`• Volume Discount (${o.discountPercent}% applied): -${y}${((o.unitSubtotal-o.discountedUnitPrice)*o.quantity).toFixed(2)}
`:""}--------------------------------------------------
Unit Price: ${y}${o.finalUnitPrice.toFixed(2)} each
Subtotal: ${y}${o.finalOrderTotal.toFixed(2)}
${o.gstAmount>0?`Estimated Sales Tax / GST: ${y}${o.gstAmount.toFixed(2)}
Total (Inc. Tax): ${y}${o.finalTotalWithGst.toFixed(2)}`:`Total: ${y}${o.finalOrderTotal.toFixed(2)}`}

COMMERCIAL TERMS:
• Lead Time: ${a.leadTimeDays||3} to 5 Business Days After Receipt of Order (ARO)
• Delivery Terms: FOB Origin / Ex-Works
• Payment Terms: Net 30 (for approved accounts) or Credit Card / ACH
• CAM Verification: Trumpf / SigmaNEST cut-ready DXF verified for production

To approve this quotation and release your order to our cutting schedule, please reply directly to this email with your PO number or authorization.

Best regards,

Estimating & Engineering Team
${s}
${a.shopPhone||""} | ${a.shopAddress||""}`}function yo(n,e,i="Valued Customer"){const o=e.currency==="USD"?"$":"₹",s=n.shopSettings,a=`PRJ-${Math.floor(1e3+Math.random()*9e3)}`,r=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});let u="";for(let c=0;c<n.items.length;c++){const h=n.items[c],x=h.partGeometry.units==="inch"?`${h.partGeometry.boundingBox.width.toFixed(2)}" × ${h.partGeometry.boundingBox.height.toFixed(2)}"`:`${h.partGeometry.boundingBox.width.toFixed(0)} × ${h.partGeometry.boundingBox.height.toFixed(0)} mm`;u+=`${c+1}. ${h.partGeometry.name}
   Specs: ${h.materialName} (${h.gaugeThicknessMm}mm / ${x})
   Qty: ${h.quantity} pcs @ ${o}${h.unitQuote.finalUnitPrice.toFixed(2)} = ${o}${h.totalPrice.toFixed(2)}

`}const y=e.nestingResult.sheetSize.name.split(" - ")[0]||"Standard Sheet";return`Subject: Quotation: ${n.projectName||"Sheet Metal Project RFQ"} (Ref #${a}) — ${s.shopName}

Dear ${i||n.customerName||"Valued Customer"},

Thank you for submitting your multi-part assembly RFQ to ${s.shopName}. We have processed your CAD geometries through our automated nesting and quoting engine:

PROJECT SUMMARY
--------------------------------------------------
Project: ${n.projectName||"Laser Cut Assembly"}
Quote Ref: ${a}
Date: ${r}
Valid For: 15 Calendar Days
Total Line Items: ${e.totalItemsCount} parts (${e.totalPartsCount} total pieces)

BILL OF MATERIALS (BOM):
--------------------------------------------------
${u}--------------------------------------------------
SHEET NESTING & MATERIAL EFFICIENCY:
• Sheet Stock: ${e.nestingResult.sheetsRequired} Sheet(s) of ${y}
• Material Utilization: ${e.nestingResult.sheetUtilizationPercent}%
• Total Laser Cut Length: ${e.totalCutLengthMeters} meters (${e.totalPierces} total pierces)
• Estimated Net Part Mass: ${e.totalNetPartMassKg} kg

PRICING SUMMARY:
--------------------------------------------------
Material Subtotal: ${o}${e.totalMaterialCost.toFixed(2)}
Laser Cutting & Piercing: ${o}${(e.totalCutCost+e.totalPierceCost).toFixed(2)}
${e.totalSecondaryCost>0?`Secondary Operations (Forming/Deburr): ${o}${e.totalSecondaryCost.toFixed(2)}
`:""}${e.volumeDiscountPercent>0?`Volume Tier Discount (${e.volumeDiscountPercent}%): -${o}${e.discountAmount.toFixed(2)}
`:""}--------------------------------------------------
Taxable Subtotal: ${o}${e.orderTotalBeforeGst.toFixed(2)}
${e.gstAmount>0?`Estimated Sales Tax / Tax: ${o}${e.gstAmount.toFixed(2)}
FINAL PROJECT TOTAL: ${o}${e.finalTotalWithGst.toFixed(2)}`:`FINAL PROJECT TOTAL: ${o}${e.orderTotalBeforeGst.toFixed(2)}`}

COMMERCIAL TERMS:
• Lead Time: ${s.leadTimeDays||3} to 5 Business Days ARO
• Delivery: Ex-Works / Pre-paid Freight Available
• Payment: Net 30 Terms or Credit Card / Wire
• Toolpath: Pre-nested and certified for CNC fiber laser production

To authorize this order, please reply with your Purchase Order (PO) or confirmation.

Sincerely,

Estimating & Quoting Department
${s.shopName}
${s.shopPhone||""} | ${s.shopAddress||""}`}function Gn(n,e=2500){const i=[],t=e/60,o=.5,a=n.units==="inch"?25.4:1;let r=0;for(let $=0;$<n.innerHoles.length;$++){const x=n.innerHoles[$];if(r++,"radius"in x){const m=x,I=2*Math.PI*m.radius*a,k={x:m.center.x,y:m.center.y},C=[{type:"arc",center:m.center,radius:m.radius,startAngle:0,endAngle:2*Math.PI,counterClockwise:!0}];i.push({stepIndex:r,label:`Inner Hole #${$+1} (Ø${(m.radius*2).toFixed(n.units==="inch"?2:1)}${n.units==="inch"?"in":"mm"})`,layerName:"Layer 1 (Yellow)",layerColor:"#eab308",isOuter:!1,piercePoint:k,segments:C,lengthMm:I,simulatedDurationSec:o+I/t})}else{const m=x,I=De(m)*a;let k=1/0,C=1/0,P=-1/0,T=-1/0;for(const d of m.segments)d.type==="line"?(k=Math.min(k,d.start.x,d.end.x),C=Math.min(C,d.start.y,d.end.y),P=Math.max(P,d.start.x,d.end.x),T=Math.max(T,d.start.y,d.end.y)):(k=Math.min(k,d.center.x-d.radius),C=Math.min(C,d.center.y-d.radius),P=Math.max(P,d.center.x+d.radius),T=Math.max(T,d.center.y+d.radius));const A=m.segments[0],f=isFinite(k)?{x:(k+P)/2,y:(C+T)/2}:A?A.type==="line"?A.start:{x:A.center.x+A.radius*Math.cos(A.startAngle),y:A.center.y+A.radius*Math.sin(A.startAngle)}:{x:0,y:0};i.push({stepIndex:r,label:`Inner Cutout #${$+1}`,layerName:"Layer 1 (Yellow)",layerColor:"#eab308",isOuter:!1,piercePoint:f,segments:m.segments,lengthMm:I,simulatedDurationSec:o+I/t})}}r++;const y=De(n.outerContour)*a,c=n.outerContour.segments[0],h=c?c.type==="line"?c.start:{x:c.center.x+c.radius*Math.cos(c.startAngle),y:c.center.y+c.radius*Math.sin(c.startAngle)}:{x:0,y:0};return i.push({stepIndex:r,label:`Outer Perimeter (${n.name})`,layerName:"Layer 0 (White/Green)",layerColor:"#22c55e",isOuter:!0,piercePoint:h,segments:n.outerContour.segments,lengthMm:y,simulatedDurationSec:o+y/t}),i}function xo(n){if("radius"in n){const{center:{x:e,y:i},radius:t}=n;return`M ${(e-t).toFixed(3)} ${i.toFixed(3)} A ${t.toFixed(3)} ${t.toFixed(3)} 0 1 0 ${(e+t).toFixed(3)} ${i.toFixed(3)} A ${t.toFixed(3)} ${t.toFixed(3)} 0 1 0 ${(e-t).toFixed(3)} ${i.toFixed(3)} Z`}return Fe(n)}function Re(n,e={}){if(e.viewStyle==="realistic_gate"&&e.jaliParams)return bo(n,e.jaliParams);const t=n.units==="inch"?1/25.4:1,o=n.boundingBox,s=Math.max(35*t,o.width*.14),a=Math.max(50*t,o.height*.22),r=Math.max(55*t,o.height*.24),u=Math.max(80*t,o.width*.3),y=o.minX-s,c=o.minY-r,h=o.width+s+u,$=o.height+r+a,x=e.simulationState,m=Gn(n);let v="";const I=x&&x.activeStepIndex===m.length,k=x&&x.activeStepIndex>m.length,C=Fe(n.outerContour);v+=`<path d="${C}" fill="rgba(34, 197, 94, 0.08)" stroke="${I?"#4ade80":k?"#16a34a":"#22c55e"}" stroke-width="${I?3:2}" vector-effect="non-scaling-stroke" stroke-linejoin="round" />`;function A(ot){let Z=1/0,it=1/0,et=-1/0,tt=-1/0;for(const z of ot.segments)z.type==="line"?(Z=Math.min(Z,z.start.x,z.end.x),it=Math.min(it,z.start.y,z.end.y),et=Math.max(et,z.start.x,z.end.x),tt=Math.max(tt,z.start.y,z.end.y)):(Z=Math.min(Z,z.center.x-z.radius),it=Math.min(it,z.center.y-z.radius),et=Math.max(et,z.center.x+z.radius),tt=Math.max(tt,z.center.y+z.radius));return isFinite(Z)?{x:(Z+et)/2,y:(it+tt)/2}:{x:0,y:0}}let f=0;for(let ot=0;ot<n.innerHoles.length;ot++){const Z=n.innerHoles[ot];f++;const it=x&&x.activeStepIndex===f,et=x&&x.activeStepIndex>f,tt=(e.dfmIssues||[]).filter(K=>K.holeIndex===ot),z=tt.some(K=>K.severity==="error"),xt=tt.some(K=>K.severity==="warning"),bt=e.highlightedHoleIndex===ot;let mt=it?"#facc15":et?"#ca8a04":"#eab308",ht="rgba(234, 179, 8, 0.12)",gt=it?2.5:1.8;z?(mt="#ef4444",ht="rgba(239, 68, 68, 0.22)",gt=2.4):xt&&(mt="#f59e0b",ht="rgba(245, 158, 11, 0.20)",gt=2.2),bt&&(mt="#38bdf8",ht="rgba(56, 189, 248, 0.32)",gt=3.2);const ft=`Hole #${ot+1}${tt.length>0?" — "+tt.map(K=>K.message).join(" | "):" (Inner Cutout)"}`;if(v+=`<g class="cad-hole cad-hole-${ot} ${xt?"dfm-hole-warning":""} ${z?"dfm-hole-error":""} ${bt?"hole-highlighted":""}" data-hole-index="${ot}" style="cursor: pointer;">`,v+=`<title>${ft}</title>`,"radius"in Z){const K=Z;if(bt)v+=`<circle cx="${K.center.x}" cy="${K.center.y}" r="${K.radius+5*t}" fill="none" stroke="#38bdf8" stroke-width="${2*t}" stroke-dasharray="${3*t},${2*t}">
          <animate attributeName="r" values="${K.radius+3*t};${K.radius+7*t}" dur="0.9s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.4;1" dur="0.9s" repeatCount="indefinite" />
        </circle>`;else if(xt||z){const Kt=z?"#ef4444":"#f59e0b";v+=`<circle cx="${K.center.x}" cy="${K.center.y}" r="${K.radius+2.5*t}" fill="none" stroke="${Kt}" stroke-width="${1.2*t}" stroke-dasharray="${2.5*t},${2.5*t}" opacity="0.85" />`}v+=`<circle cx="${K.center.x}" cy="${K.center.y}" r="${K.radius}" fill="${ht}" stroke="${mt}" stroke-width="${gt}" vector-effect="non-scaling-stroke" />`;const At=Math.min(10*t,K.radius*.6);v+=`<line x1="${K.center.x-At}" y1="${K.center.y}" x2="${K.center.x+At}" y2="${K.center.y}" stroke="${xt||z?mt:"rgba(234, 179, 8, 0.5)"}" stroke-width="1" vector-effect="non-scaling-stroke" />`,v+=`<line x1="${K.center.x}" y1="${K.center.y-At}" x2="${K.center.x}" y2="${K.center.y+At}" stroke="${xt||z?mt:"rgba(234, 179, 8, 0.5)"}" stroke-width="1" vector-effect="non-scaling-stroke" />`}else{const K=Fe(Z);v+=`<path d="${K}" fill="${ht}" stroke="${mt}" stroke-width="${gt}" vector-effect="non-scaling-stroke" stroke-linejoin="round" />`}v+="</g>"}const d=(e.showCutOrder||x)&&!e.hideCamBadges;let b="";const M=n.innerHoles.length>20,g=M?Math.max(6*t,Math.min(10*t,h*.012)):Math.max(9*t,Math.min(16*t,h*.022));if(d){let ot="";for(let Z=0;Z<m.length;Z++){const it=m[Z].piercePoint;Z===0?ot+=`M ${it.x.toFixed(3)} ${it.y.toFixed(3)}`:ot+=` L ${it.x.toFixed(3)} ${it.y.toFixed(3)}`}b+=`<path d="${ot}" fill="none" stroke="#38bdf8" stroke-dasharray="${3*t},${3*t}" stroke-width="${1*t}" opacity="0.45" />`;for(const Z of m){const it=Z.piercePoint,et=x&&x.activeStepIndex===Z.stepIndex,tt=Z.isOuter?null:Z.stepIndex-1,z=tt!==null?(e.dfmIssues||[]).filter(Nt=>Nt.holeIndex===tt):[],xt=z.some(Nt=>Nt.severity==="error"),bt=z.some(Nt=>Nt.severity==="warning"),mt=tt!==null&&e.highlightedHoleIndex===tt;let ht=Z.isOuter?"#22c55e":"#eab308",gt=et?"#ffffff":"#0f172a",ft="#0b1120";xt?(ht="#ef4444",gt=mt?"#ffffff":"#7f1d1d",ft="#ffffff"):bt&&(ht="#f59e0b",gt=mt?"#ffffff":"#78350f",ft="#0b1120"),mt&&(gt="#38bdf8");const K=(et?3*t:0)+(mt?4*t:0),At=mt?`<circle cx="0" cy="0" r="${g+7*t}" fill="none" stroke="#38bdf8" stroke-width="${2*t}">
             <animate attributeName="r" values="${g+5*t};${g+9*t}" dur="0.8s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="indefinite" />
           </circle>`:"",Kt=(bt||xt)&&!mt?`<circle cx="0" cy="0" r="${g+3.5*t}" fill="none" stroke="${xt?"#ef4444":"#f59e0b"}" stroke-width="${1.2*t}" stroke-dasharray="${2*t},${2*t}" />`:"",ae=Z.isOuter?`Outer Perimeter Cut (Step #${Z.stepIndex})`:`Hole #${Z.stepIndex}${z.length>0?" — "+z.map(Nt=>Nt.message).join(" | "):" (Inner Cutout)"}`;b+=`
        <g class="cam-badge ${tt!==null?`cam-badge-hole-${tt}`:"cam-badge-outer"} ${bt?"cam-badge-warning":""} ${xt?"cam-badge-error":""}" 
           ${tt!==null?`data-hole-index="${tt}"`:""} 
           transform="translate(${it.x}, ${it.y}) scale(1, -1)" 
           style="cursor: pointer;">
          <title>${ae}</title>
          ${At}
          ${Kt}
          <circle cx="0" cy="0" r="${g+K}" fill="${ht}" stroke="${gt}" stroke-width="${(et||mt?2.2:1.2)*t}" />
          <text x="0" y="0" text-anchor="middle" dominant-baseline="central" font-size="${g*(M?.95:1.1)}" font-family="'JetBrains Mono', monospace" font-weight="800" fill="${ft}">
            ${Z.stepIndex}
          </text>
        </g>
      `}}else for(let ot=0;ot<n.innerHoles.length;ot++){const Z=(e.dfmIssues||[]).filter(et=>et.holeIndex===ot),it=e.highlightedHoleIndex===ot;if(Z.length>0||it){const et=n.innerHoles[ot],tt="radius"in et?et.center:A(et),z=Z.some(ft=>ft.severity==="error"),xt=it?"#38bdf8":z?"#ef4444":"#f59e0b",bt=it?"#ffffff":z?"#7f1d1d":"#78350f",mt=z?"#ffffff":"#0b1120",ht=g*1.15,gt=it?`<circle cx="0" cy="0" r="${ht+6*t}" fill="none" stroke="#38bdf8" stroke-width="${2*t}">
               <animate attributeName="r" values="${ht+4*t};${ht+8*t}" dur="0.8s" repeatCount="indefinite" />
               <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="indefinite" />
             </circle>`:"";b+=`
          <g class="cam-badge dfm-hole-badge cam-badge-hole-${ot}" 
             data-hole-index="${ot}" 
             transform="translate(${tt.x}, ${tt.y}) scale(1, -1)" 
             style="cursor: pointer;">
            <title>Hole #${ot+1}: ${Z.map(ft=>ft.message).join(" | ")}</title>
            ${gt}
            <circle cx="0" cy="0" r="${ht+3*t}" fill="none" stroke="${z?"#ef4444":"#f59e0b"}" stroke-width="${1.2*t}" stroke-dasharray="${2*t},${2*t}" />
            <circle cx="0" cy="0" r="${ht}" fill="${xt}" stroke="${bt}" stroke-width="${1.8*t}" />
            <text x="0" y="0" text-anchor="middle" dominant-baseline="central" font-size="${ht*1.1}" font-family="'JetBrains Mono', monospace" font-weight="800" fill="${mt}">
              ${ot+1}
            </text>
          </g>
        `}}let l="";if(x&&x.nozzlePos){const ot=x.nozzlePos.x,Z=x.nozzlePos.y,it=x.isPiercing,et=it?18*t:0,tt=it?`<circle cx="0" cy="0" r="${et}" fill="none" stroke="#f97316" stroke-width="${2.5*t}" opacity="0.8">
           <animate attributeName="r" values="${6*t};${22*t}" dur="0.3s" repeatCount="indefinite" />
           <animate attributeName="opacity" values="1;0" dur="0.3s" repeatCount="indefinite" />
         </circle>`:"";l=`
      <!-- Active Laser Nozzle -->
      <g class="laser-nozzle-head" transform="translate(${ot}, ${Z})">
        ${tt}
        <!-- Glow halo -->
        <circle cx="0" cy="0" r="${12*t}" fill="rgba(239, 68, 68, 0.25)" />
        <!-- Head outer housing -->
        <circle cx="0" cy="0" r="${7*t}" fill="#0f172a" stroke="#ef4444" stroke-width="${1.8*t}" />
        <!-- Laser beam spot -->
        <circle cx="0" cy="0" r="${2.8*t}" fill="#fef08a" />
        <!-- Crosshairs -->
        <line x1="${-10*t}" y1="0" x2="${10*t}" y2="0" stroke="#ef4444" stroke-width="${1*t}" />
        <line x1="0" y1="${-10*t}" x2="0" y2="${10*t}" stroke="#ef4444" stroke-width="${1*t}" />
      </g>
    `}const p=n.units,D="#94a3b8",O=Math.max(h,$),G=Math.max(14*t,O*.028),W=Math.max(20*t,O*.025),F=1.5*t,E=8*t,H=3.5*t,R=o.maxY+a*.55,V=`
    <g class="dim-leader" stroke="${D}" stroke-width="${F}" fill="${D}">
      <line x1="${o.minX}" y1="${o.maxY}" x2="${o.minX}" y2="${R+E}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${o.maxX}" y1="${o.maxY}" x2="${o.maxX}" y2="${R+E}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${o.minX}" y1="${R}" x2="${o.maxX}" y2="${R}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${(o.minX+o.maxX)/2}" y="${R+G*.9}" text-anchor="middle" font-size="${G}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#0b1120" stroke-width="${H}" paint-order="stroke fill" letter-spacing="0.02em">
        ${o.width.toFixed(2)} ${p}
      </text>
    </g>
  `,Y=o.maxX+W,yt=`
    <g class="dim-leader" stroke="${D}" stroke-width="${F}" fill="${D}">
      <line x1="${o.maxX}" y1="${o.minY}" x2="${Y+E}" y2="${o.minY}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${o.maxX}" y1="${o.maxY}" x2="${Y+E}" y2="${o.maxY}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${Y}" y1="${o.minY}" x2="${Y}" y2="${o.maxY}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${Y+G*.5}" y="${(o.minY+o.maxY)/2+G*.35}" text-anchor="start" font-size="${G}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#0b1120" stroke-width="${H}" paint-order="stroke fill" letter-spacing="0.02em">
        ${o.height.toFixed(2)} ${p}
      </text>
    </g>
  `,vt=Math.max(10*t,h/20);return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${y} ${c} ${h} ${$}" width="100%" height="100%" style="background-color: #0b1120; border-radius: 8px;">
      <defs>
        <pattern id="cadGrid" width="${vt}" height="${vt}" patternUnits="userSpaceOnUse">
          <path d="M ${vt} 0 L 0 0 0 ${vt}" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="${1*t}"/>
        </pattern>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
        </marker>
      </defs>
      <rect x="${y}" y="${c}" width="${h}" height="${$}" fill="url(#cadGrid)" />
      
      <!-- Part Paths (Y flipped for CAD orientation) -->
      <g transform="translate(0, ${o.minY+o.maxY}) scale(1, -1)">
        ${v}
        ${b}
        ${l}
      </g>

      <!-- Dimensions -->
      ${V}
      ${yt}
    </svg>
  `}function bo(n,e){const i=e.units==="inch",t=i?1/25.4:1,o=n.boundingBox.width,s=n.boundingBox.height,a=e.finishMaterial||"matte_black",r=e.backlightColor||"warm_white",u=e.gateType||"single_swing",y=u==="double_swing",c=u==="wall_panel",h=!c&&e.hasFrameTube!==!1,$=e.frameTubeWidthMm??(i?2:50),x=i?$>10?$/25.4:$:$<10?$*25.4:$,m=h?x:0,v=!c&&!!e.hasKickPlate,I=e.kickPlateHeightMm??(i?12:300),k=i?I>30?I/25.4:I:I<30?I*25.4:I,C=v?Math.max(0,Math.min(s*.4,k)):0,P=!c&&e.hasHinges!==!1,T=!c&&e.hasPullHandle!==!1,A=!c&&e.hasLockBox!==!1,f=o+(h?2*m:0),d=s+(h?2*m:0),b=y?i?.6:15:0,M=y?f*2+b:f,g=d,l=Math.max(M,g),p=Math.max(16*t,l*.03),D=Math.max(16*t,l*.034),O=Math.max(7*t,l*.011),G=Math.max(36*t,l*.045),W=Math.max(32*t,l*.04),F=Math.max(45*t,M*.12),E=Math.max(45*t,W+p*3.8),H=Math.max(55*t,g*.08,D*2.8),R=Math.max(55*t,G+p*2.4),V=-F,Y=-H,yt=M+F+E,vt=g+H+R,ot=Fe(n.outerContour),Z=n.innerHoles.map(xo).join(" "),it=`${ot} ${Z}`;let et="#475569",tt="#334155",z="#94a3b8";a==="royal_gold"?(et="#fef08a",tt="#b45309",z="#fde047"):a==="corten_rust"?(et="#fdba74",tt="#7c2d12",z="#ea580c"):a==="brushed_stainless"?(et="#ffffff",tt="#475569",z="#e2e8f0"):a==="champagne_bronze"&&(et="#fcd34d",tt="#78350f",z="#fbbf24");const xt=(Ot,ee=!1)=>{const pt=Ot+(h?m:0),kt=h?m:0;let Dt="";if(r!=="none"&&(Dt+=`
        <rect x="${pt}" y="${kt}" width="${o}" height="${s}" 
              fill="url(#glow_${r})" filter="url(#backlightBlur)" opacity="0.9" rx="${3*t}" />
      `),Dt+=`
      <g transform="translate(${pt}, ${kt})">
        <!-- Negative space perforated sheet metal plate -->
        <path d="${it}" fill-rule="evenodd" fill="url(#mat_${a})" 
              filter="url(#plateShadow)" stroke="${et}" stroke-width="${.8*t}" stroke-opacity="0.6" />
        <!-- Inner cutout specular rim highlight -->
        <path d="${Z}" fill="none" stroke="${et}" stroke-width="${.6*t}" stroke-opacity="0.4" />
      </g>
    `,v&&C>0){const nt=kt+s-C;Dt+=`
        <!-- Solid Bottom Kickplate -->
        <g class="kickplate">
          <rect x="${pt}" y="${nt}" width="${o}" height="${C}" 
                fill="url(#mat_${a})" stroke="${tt}" stroke-width="${1.2*t}" />
          <!-- Embossed horizontal reveal grooves -->
          <line x1="${pt+15*t}" y1="${nt+C*.35}" x2="${pt+o-15*t}" y2="${nt+C*.35}" 
                stroke="${et}" stroke-width="${1.5*t}" stroke-opacity="0.5" />
          <line x1="${pt+15*t}" y1="${nt+C*.65}" x2="${pt+o-15*t}" y2="${nt+C*.65}" 
                stroke="${et}" stroke-width="${1.5*t}" stroke-opacity="0.5" />
          <!-- Corner fabrication rivet studs -->
          <circle cx="${pt+12*t}" cy="${nt+12*t}" r="${3*t}" fill="${z}" opacity="0.8" />
          <circle cx="${pt+o-12*t}" cy="${nt+12*t}" r="${3*t}" fill="${z}" opacity="0.8" />
          <circle cx="${pt+12*t}" cy="${nt+C-12*t}" r="${3*t}" fill="${z}" opacity="0.8" />
          <circle cx="${pt+o-12*t}" cy="${nt+C-12*t}" r="${3*t}" fill="${z}" opacity="0.8" />
        </g>
      `}if(h){const nt=Ot,rt=0;Dt+=`
        <!-- Structural Box Tube Outer Frame -->
        <g class="box-tube-frame" filter="url(#frameShadow)">
          <!-- Top horizontal tube -->
          <rect x="${nt}" y="${rt}" width="${f}" height="${m}" fill="url(#tube_${a}_h)" stroke="${tt}" stroke-width="${1.2*t}" />
          <!-- Bottom horizontal tube -->
          <rect x="${nt}" y="${rt+d-m}" width="${f}" height="${m}" fill="url(#tube_${a}_h)" stroke="${tt}" stroke-width="${1.2*t}" />
          <!-- Left vertical tube -->
          <rect x="${nt}" y="${rt+m}" width="${m}" height="${d-2*m}" fill="url(#tube_${a}_v)" stroke="${tt}" stroke-width="${1.2*t}" />
          <!-- Right vertical tube -->
          <rect x="${nt+f-m}" y="${rt+m}" width="${m}" height="${d-2*m}" fill="url(#tube_${a}_v)" stroke="${tt}" stroke-width="${1.2*t}" />
          
          <!-- Mitred 45-degree corner weld seams -->
          <line x1="${nt}" y1="${rt}" x2="${nt+m}" y2="${rt+m}" stroke="${et}" stroke-width="${1.2*t}" stroke-opacity="0.7" />
          <line x1="${nt+f}" y1="${rt}" x2="${nt+f-m}" y2="${rt+m}" stroke="${et}" stroke-width="${1.2*t}" stroke-opacity="0.7" />
          <line x1="${nt}" y1="${rt+d}" x2="${nt+m}" y2="${rt+d-m}" stroke="${et}" stroke-width="${1.2*t}" stroke-opacity="0.7" />
          <line x1="${nt+f}" y1="${rt+d}" x2="${nt+f-m}" y2="${rt+d-m}" stroke="${et}" stroke-width="${1.2*t}" stroke-opacity="0.7" />
        </g>
      `}if(P){const rt=!ee?Ot-6*t:Ot+f-6*t,Mt=[d*.15,d*.85];d>(i?48:1200)&&Mt.splice(1,0,d*.5);for(const $t of Mt)Dt+=`
          <!-- Bullet Barrel Hinge -->
          <g class="bullet-hinge" transform="translate(${rt}, ${$t-24*t})">
            <!-- Top barrel -->
            <rect x="0" y="0" width="${12*t}" height="${22*t}" rx="${3*t}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1*t}" />
            <!-- Brass washer ring -->
            <rect x="${-1*t}" y="${22*t}" width="${14*t}" height="${4*t}" rx="${1*t}" fill="#fde047" stroke="#b45309" stroke-width="${.8*t}" />
            <!-- Bottom barrel -->
            <rect x="0" y="${26*t}" width="${12*t}" height="${22*t}" rx="${3*t}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1*t}" />
            <!-- Highlight sheen -->
            <line x1="${3*t}" y1="${2*t}" x2="${3*t}" y2="${20*t}" stroke="#ffffff" stroke-width="${.8*t}" opacity="0.6" />
            <line x1="${3*t}" y1="${28*t}" x2="${3*t}" y2="${46*t}" stroke="#ffffff" stroke-width="${.8*t}" opacity="0.6" />
          </g>
        `}if(T||A){const nt=ee,rt=nt?Ot+(h?m/2:25*t):Ot+f-(h?m/2:25*t),Mt=d*.5;if(A){const $t=Math.max(30*t,m*.8),qt=90*t,St=nt?Ot+(h?4*t:8*t):Ot+f-(h?m-4*t:38*t);Dt+=`
          <!-- Lock Box & Keyway -->
          <g class="lockbox" transform="translate(${St}, ${Mt-qt/2})">
            <rect x="0" y="0" width="${$t}" height="${qt}" rx="${4*t}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1.2*t}" />
            <!-- Key cylinder -->
            <circle cx="${$t/2}" cy="${28*t}" r="${7*t}" fill="#1e293b" stroke="#64748b" stroke-width="${1*t}" />
            <rect x="${$t/2-2*t}" y="${28*t}" width="${4*t}" height="${9*t}" fill="#0f172a" />
            <!-- Modern lever latch -->
            <rect x="${nt?$t/2-18*t:$t/2+2*t}" y="${58*t}" width="${20*t}" height="${7*t}" rx="${2*t}" fill="#e2e8f0" stroke="#0f172a" stroke-width="${.8*t}" />
          </g>
        `}if(T){const $t=Math.min(d*.45,600*t),qt=(nt?28:-28)*t,St=rt+qt;Dt+=`
          <!-- Sleek Architectural Bar Pull Handle -->
          <g class="pull-handle">
            <!-- Standoff brackets -->
            <rect x="${rt<St?rt:St}" y="${Mt-$t/2+15*t}" width="${Math.abs(St-rt)}" height="${10*t}" fill="#475569" stroke="#0f172a" stroke-width="${.8*t}" />
            <rect x="${rt<St?rt:St}" y="${Mt+$t/2-25*t}" width="${Math.abs(St-rt)}" height="${10*t}" fill="#475569" stroke="#0f172a" stroke-width="${.8*t}" />
            <!-- Vertical Cylindrical T-Bar -->
            <rect x="${St-6*t}" y="${Mt-$t/2}" width="${12*t}" height="${$t}" rx="${6*t}" 
                  fill="url(#mat_brushed_stainless)" stroke="#1e293b" stroke-width="${1.2*t}" filter="url(#handleShadow)" />
            <!-- Specular sheen -->
            <line x1="${St-2*t}" y1="${Mt-$t/2+4*t}" x2="${St-2*t}" y2="${Mt+$t/2-4*t}" stroke="#ffffff" stroke-width="${1*t}" opacity="0.75" />
          </g>
        `}}if(c){const nt=Math.max(8*t,o*.018),rt=[{x:pt+25*t,y:kt+25*t},{x:pt+o-25*t,y:kt+25*t},{x:pt+o-25*t,y:kt+s-25*t},{x:pt+25*t,y:kt+s-25*t}];s>(i?36:900)&&(rt.push({x:pt+25*t,y:kt+s/2}),rt.push({x:pt+o-25*t,y:kt+s/2}));for(const Mt of rt)Dt+=`
          <!-- Stainless Standoff Screw Head -->
          <g class="standoff-mount" transform="translate(${Mt.x}, ${Mt.y})">
            <circle cx="0" cy="0" r="${nt}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1.2*t}" filter="url(#handleShadow)" />
            <!-- Hex Socket -->
            <polygon points="${-3*t},${-1.7*t} 0,${-3.4*t} ${3*t},${-1.7*t} ${3*t},${1.7*t} 0,${3.4*t} ${-3*t},${1.7*t}" fill="#1e293b" />
          </g>
        `}return Dt};let bt="";y?(bt+=xt(0,!1),bt+=xt(f+b,!0),bt+=`
      <!-- Double Swing Center Slide Drop Bolt -->
      <g class="center-drop-bolt" transform="translate(${f+b/2-12*t}, ${4*t})">
        <rect x="0" y="0" width="${24*t}" height="${42*t}" rx="${3*t}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1*t}" />
        <rect x="${9*t}" y="${8*t}" width="${6*t}" height="${24*t}" rx="${2*t}" fill="#cbd5e1" />
      </g>
    `):bt+=xt(0,!1);const mt=e.units,ht="#94a3b8",gt=g+G*.6,ft=`
    <g class="dim-leader" stroke="${ht}" stroke-width="${1.6*t}" fill="${ht}">
      <line x1="0" y1="${g+8*t}" x2="0" y2="${gt+10*t}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${M}" y1="${g+8*t}" x2="${M}" y2="${gt+10*t}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="0" y1="${gt}" x2="${M}" y2="${gt}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${M/2}" y="${gt+p*.9}" text-anchor="middle" font-size="${p}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#080c14" stroke-width="${4.5*t}" paint-order="stroke fill" letter-spacing="0.02em">
        ${M.toFixed(i?2:0)} ${mt} ${y?`(2× ${f.toFixed(i?2:0)} ${mt} Leaves)`:""}
      </text>
    </g>
  `,K=M+W*.6,At=`
    <g class="dim-leader" stroke="${ht}" stroke-width="${1.6*t}" fill="${ht}">
      <line x1="${M+8*t}" y1="0" x2="${K+10*t}" y2="0" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${M+8*t}" y1="${g}" x2="${K+10*t}" y2="${g}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${K}" y1="0" x2="${K}" y2="${g}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${K+p*.5}" y="${g/2+p*.35}" text-anchor="start" font-size="${p}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#080c14" stroke-width="${4.5*t}" paint-order="stroke fill" letter-spacing="0.02em">
        ${g.toFixed(i?2:0)} ${mt}
      </text>
    </g>
  `,Kt=a.replace(/_/g," ").toUpperCase(),ae=(e.patternType||"architectural_jali").replace(/_/g," ").toUpperCase(),Nt=y?"DOUBLE SWING ENTRANCE GATE":c?"WALL JALI SCREEN PANEL":"SINGLE SWING GATE";return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${V} ${Y} ${yt} ${vt}" width="100%" height="100%" style="background-color: #080c14; border-radius: 8px;">
      <defs>
        <!-- Background Architectural Wall Shadow -->
        <filter id="plateShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="${10*t}" stdDeviation="${12*t}" flood-color="#000000" flood-opacity="0.75" />
        </filter>
        <filter id="frameShadow" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="${8*t}" stdDeviation="${10*t}" flood-color="#000000" flood-opacity="0.6" />
        </filter>
        <filter id="handleShadow" x="-30%" y="-20%" width="160%" height="140%">
          <feDropShadow dx="${3*t}" dy="${6*t}" stdDeviation="${6*t}" flood-color="#000000" flood-opacity="0.5" />
        </filter>
        <filter id="backlightBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="${18*t}" />
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

        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="${O}" markerHeight="${O}" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
        </marker>
      </defs>

      <!-- Architectural Backdrop Wall with subtle ambient spotlight -->
      <radialGradient id="studioSpotlight" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stop-color="#141c2e" />
        <stop offset="60%" stop-color="#0b1120" />
        <stop offset="100%" stop-color="#050811" />
      </radialGradient>
      <rect x="${V}" y="${Y}" width="${yt}" height="${vt}" fill="url(#studioSpotlight)" />

      <!-- Top Architectural Badge Label -->
      <g class="studio-title-badge" transform="translate(${M/2}, ${-H*.45})">
        <text text-anchor="middle" font-size="${D}" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" fill="#f1f5f9" stroke="#080c14" stroke-width="${5*t}" paint-order="stroke fill" letter-spacing="0.05em">
          ✨ ${Nt} — ${Kt} | ${ae}
        </text>
      </g>

      <!-- Ground Baseline Reference -->
      <line x1="${-F*.3}" y1="${g+2*t}" x2="${M+E*.3}" y2="${g+2*t}" stroke="#334155" stroke-width="${1.5*t}" stroke-dasharray="${6*t},${4*t}" opacity="0.6" />

      <!-- Gate Leaves & Structure -->
      ${bt}

      <!-- Dimension Leaders -->
      ${ft}
      ${At}
    </svg>
  `}function $o(n,e=0){const i=n.sheetSize.widthMm,t=n.sheetSize.lengthMm,o=i*.08,s=t*.08,a=i+2*o,r=t+2*s;let u="";const y=n.packedParts.filter(x=>x.sheetIndex===e),c=["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"];for(const x of y){const m=x.color||c[x.partIndex%c.length],v=x.rotated,I=x.partName?`${x.partName}`:`#${x.partIndex+1}`,k=Math.max(11,Math.min(x.width,x.height)*.16);u+=`
      <g class="nested-part" id="part_${x.id}">
        <rect x="${x.x}" y="${x.y}" width="${x.width}" height="${x.height}" 
              fill="${m}25" stroke="${m}" stroke-width="2" rx="2" />
        <text x="${x.x+x.width/2}" y="${x.y+x.height/2-2}" 
              text-anchor="middle" font-size="${k}" 
              font-family="'JetBrains Mono', monospace" fill="#ffffff" font-weight="bold">
          ${I}
        </text>
        <text x="${x.x+x.width/2}" y="${x.y+x.height/2+k}" 
              text-anchor="middle" font-size="${Math.max(9,k*.75)}" 
              font-family="'JetBrains Mono', monospace" fill="#94a3b8">
          ${x.width.toFixed(0)} × ${x.height.toFixed(0)} mm ${v?"⟲90°":""}
        </text>
      </g>
    `}let h="";if(e===n.sheetsRequired-1&&n.remnantLengthMm>50){const x=t-n.remnantLengthMm;h=`
      <rect x="10" y="${x}" width="${i-20}" height="${n.remnantLengthMm-10}" 
            fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" stroke-dasharray="4,4" stroke-width="1.5" />
      <text x="${i/2}" y="${x+n.remnantLengthMm/2}" 
            text-anchor="middle" font-size="${Math.max(14,i*.025)}" 
            font-family="'JetBrains Mono', monospace" fill="#38bdf8" font-weight="600">
        REUSABLE REMNANT OFFCUT: ${i} × ${n.remnantLengthMm} mm
      </text>
    `}return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${-o} ${-s} ${a} ${r}" width="100%" height="100%" style="background-color: #0b1120; border-radius: 8px;">
      <defs>
        <pattern id="nestGrid" width="${Math.max(50,a/20)}" height="${Math.max(50,r/20)}" patternUnits="userSpaceOnUse">
          <path d="M ${Math.max(50,a/20)} 0 L 0 0 0 ${Math.max(50,r/20)}" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
        </pattern>
      </defs>
      
      <!-- Background Grid -->
      <rect x="${-o}" y="${-s}" width="${a}" height="${r}" fill="url(#nestGrid)" />

      <!-- Full Sheet Boundary -->
      <rect x="0" y="0" width="${i}" height="${t}" fill="rgba(15, 23, 42, 0.85)" stroke="#64748b" stroke-width="3" rx="4" />

      <!-- Sheet Margin Guide -->
      <rect x="10" y="10" width="${i-20}" height="${t-20}" fill="none" stroke="rgba(100, 116, 139, 0.4)" stroke-dasharray="6,6" stroke-width="1" />

      <!-- Packed Parts -->
      ${u}

      <!-- Remnant Offcut -->
      ${h}

      <!-- Sheet Title & Dimensions -->
      <text x="${i/2}" y="-20" text-anchor="middle" font-size="${Math.max(16,i*.028)}" font-family="'JetBrains Mono', monospace" fill="#f8fafc" font-weight="700">
        ${n.sheetSize.name.toUpperCase()} (Sheet ${e+1} of ${n.sheetsRequired})
      </text>
      <text x="${i/2}" y="${t+35}" text-anchor="middle" font-size="${Math.max(14,i*.022)}" font-family="'JetBrains Mono', monospace" fill="#94a3b8">
        Utilization: ${n.sheetUtilizationPercent}% | Skeleton Scrap: ${n.totalSkeletonScrapMassKg} kg | Parts on Bed: ${y.length} / ${n.partsRequested}
      </text>
    </svg>
  `}function Fe(n){if(n.segments.length===0)return"";const e=[];for(let i=0;i<n.segments.length;i++){const t=n.segments[i];if(i===0){const o=t.type==="line"?t.start:{x:t.center.x+t.radius*Math.cos(t.startAngle),y:t.center.y+t.radius*Math.sin(t.startAngle)};e.push(`M ${o.x.toFixed(3)} ${o.y.toFixed(3)}`)}if(t.type==="line")e.push(`L ${t.end.x.toFixed(3)} ${t.end.y.toFixed(3)}`);else if(t.type==="arc"){const o=t.center.x+t.radius*Math.cos(t.endAngle),s=t.center.y+t.radius*Math.sin(t.endAngle);let a=t.endAngle-t.startAngle;t.counterClockwise?a<0&&(a+=2*Math.PI):a>0&&(a-=2*Math.PI);const r=Math.abs(a)>Math.PI?1:0,u=t.counterClockwise?1:0;e.push(`A ${t.radius.toFixed(3)} ${t.radius.toFixed(3)} 0 ${r} ${u} ${o.toFixed(3)} ${s.toFixed(3)}`)}}return n.isClosed&&e.push("Z"),e.join(" ")}function Co(n,e,i,t,o,s,a="Valued Customer",r=""){const u=o.currency==="INR",y=u?"₹":"$",c=u?`INV-${Math.floor(1e5+Math.random()*9e5)}`:`RFQ-${Math.floor(1e5+Math.random()*9e5)}`,h=u?new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),$=s.upiId||"shop@upi",x=o.finalTotalWithGst,m=Math.round(x/2*100)/100,v=`upi://pay?pa=${encodeURIComponent($)}&pn=${encodeURIComponent(s.shopName)}&am=${m.toFixed(2)}&cu=INR&tn=${encodeURIComponent(c)}`,I=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(v)}`,k=u?`Dim: ${e.boundingBoxWidthMm.toFixed(0)} × ${e.boundingBoxHeightMm.toFixed(0)} mm | Thick: ${t.thicknessMm} mm<br>Grade: ${i} (${t.gaugeName}) | Gas: ${s.assistGas.toUpperCase()}<br>Cut Length: ${(e.totalCutLengthMm/1e3).toFixed(2)} m | Pierces: ${e.pierceCount} / pc`:`Dim: ${e.boundingBoxWidthInches.toFixed(2)}" × ${e.boundingBoxHeightInches.toFixed(2)}" | Gauge: ${t.gaugeName}<br>Grade: ${i} | Gas: ${s.assistGas.toUpperCase()}<br>Cut Length: ${e.totalCutLengthInches.toFixed(1)} in | Pierces: ${e.pierceCount} / pc | Est. Weight: ${e.theoreticalWeightLbs.toFixed(2)} lbs`;return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${u?"Proforma Invoice":"Commercial Quotation"} - ${c}</title>
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
      <div>
        <h1 class="shop-title">${s.shopName}</h1>
        <div class="shop-meta">
          <div>${s.shopAddress||(u?"MIDC Industrial Area, Pune, Maharashtra":"1420 Industrial Pkwy, Cleveland, OH 44135")}</div>
          <div>Phone: ${s.shopPhone||(u?"+91 98220 12345":"(216) 555-0198")} ${u?`| UPI: <strong>${$}</strong>`:""}</div>
          ${u?`<div>GSTIN: <strong>${s.shopGstin||"27AABCS1429B1Z8"}</strong> | State Code: 27 (MH)</div>`:"<div>Tax ID / Resale: <strong>Verified</strong> | Terms: <strong>Net 30 / Credit Card</strong></div>"}
        </div>
      </div>
      <div class="invoice-tag">
        <h2 class="invoice-title">${u?"PROFORMA INVOICE":"MANUFACTURING QUOTATION"}</h2>
        <div class="invoice-meta">
          <div>Ref No: <strong>${c}</strong></div>
          <div>Date: <strong>${h}</strong></div>
          <div>${u?`SAC/HSN: <strong>${o.hsnSacCode.split(" ")[0]}</strong>`:"Validity: <strong>15 Days</strong>"}</div>
        </div>
      </div>
    </div>

    <div class="bill-to-box">
      <strong>Customer:</strong> ${a} ${r?`(${r})`:""} — <em>Delivery: ${u?"Ex-Works / 24-48 Hours":"FOB Origin / 3-5 Business Days"}</em>
    </div>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Item Description & Specs</th>
          <th class="text-center">Mode</th>
          <th class="text-right">Qty</th>
          <th class="text-right">Unit Rate</th>
          <th class="text-right">Amount (${y})</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <strong>${n.name}</strong><br>
            <span style="font-size: 12px; color: #64748b;">
              ${k}
            </span>
          </td>
          <td class="text-center"><span style="background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 700;">${u?o.quotingMode.toUpperCase():"CUSTOM FAB"}</span></td>
          <td class="text-right">${o.quantity}</td>
          <td class="text-right">${y}${o.discountedUnitPrice.toFixed(2)}</td>
          <td class="text-right"><strong>${y}${(o.discountedUnitPrice*o.quantity).toFixed(2)}</strong></td>
        </tr>
        ${o.unitSecondaryCost>0?`
        <tr>
          <td>2</td>
          <td>
            <strong>Secondary Value-Add Operations</strong><br>
            <span style="font-size: 12px; color: #64748b;">
              ${o.secondaryBreakdown.bendingCost>0?`CNC Press Brake Bending (${y}${o.secondaryBreakdown.bendingCost}) | `:""}
              ${o.secondaryBreakdown.deburringCost>0?`Edge Deburring (${y}${o.secondaryBreakdown.deburringCost}) | `:""}
              ${o.secondaryBreakdown.tappingCost>0?`Tapping (${y}${o.secondaryBreakdown.tappingCost}) | `:""}
              ${o.secondaryBreakdown.surfaceFinishCost>0?`Surface Finishing (${y}${o.secondaryBreakdown.surfaceFinishCost})`:""}
            </span>
          </td>
          <td class="text-center"><span style="background: #f1f5f9; color: #475569; padding: 3px 8px; border-radius: 4px; font-size: 11px;">VALUE-ADD</span></td>
          <td class="text-right">${o.quantity}</td>
          <td class="text-right">${y}${o.unitSecondaryCost.toFixed(2)}</td>
          <td class="text-right"><strong>${y}${(o.unitSecondaryCost*o.quantity).toFixed(2)}</strong></td>
        </tr>`:""}
      </tbody>
    </table>

    <div class="summary-grid">
      ${u?`
      <div class="upi-box">
        <div class="upi-title">Scan to Pay 50% Advance</div>
        <img src="${I}" alt="UPI QR Code">
        <div class="upi-sub">GPay / PhonePe / Paytm<br>Advance: <strong>${y}${m.toFixed(2)}</strong></div>
      </div>
      `:`
      <div class="terms-box">
        <div class="terms-title">Commercial & Payment Terms</div>
        <div class="terms-item">Payment: <strong>Net 30 / Credit Card / ACH</strong></div>
        <div class="terms-item">Lead Time: <strong>${s.leadTimeDays||3} to 5 Days ARO</strong></div>
        <div class="terms-item">Shipping: <strong>FOB Origin (Freight Pre-pay Available)</strong></div>
        <div class="terms-item">CAM Spec: <strong>Trumpf / SigmaNEST Cut-Ready</strong></div>
      </div>
      `}

      <table class="totals-table">
        <tr>
          <td>Subtotal (Excl. Tax):</td>
          <td class="text-right">${y}${o.finalOrderTotal.toFixed(2)}</td>
        </tr>
        ${u?s.isInterstateSale?`
        <tr>
          <td>Integrated GST (IGST 18%):</td>
          <td class="text-right">${y}${o.igstAmount.toFixed(2)}</td>
        </tr>`:`
        <tr>
          <td>Central GST (CGST 9%):</td>
          <td class="text-right">${y}${o.cgstAmount.toFixed(2)}</td>
        </tr>
        <tr>
          <td>State GST (SGST 9%):</td>
          <td class="text-right">${y}${o.sgstAmount.toFixed(2)}</td>
        </tr>`:`
        <tr>
          <td>Estimated Sales Tax (${s.gstPercent||0}%):</td>
          <td class="text-right">${y}${o.gstAmount.toFixed(2)}</td>
        </tr>
        `}
        <tr class="total-row">
          <td>Grand Total:</td>
          <td class="text-right" style="color: #0284c7;">${y}${o.finalTotalWithGst.toFixed(2)}</td>
        </tr>
      </table>
    </div>

    <div class="footer-terms">
      <strong>Terms & Conditions:</strong>
      <ol style="margin: 6px 0 0 16px; padding: 0;">
        ${u?`
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
</html>`}function Mo(n,e,i,t,o,s){const a=`JOB-${Math.floor(1e3+Math.random()*9e3)}`,r=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Laser Job Card - ${a}</title>
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
      <h1>${s.shopName.toUpperCase()}</h1>
      <div>LASER CUTTING OPERATOR JOB CARD / SHOP TRAVELER</div>
      <div><strong>Card #: ${a}</strong> | Date: ${r}</div>
    </div>

    <div class="grid">
      <div class="box">
        <div class="box-title">PART & MATERIAL SPECIFICATIONS</div>
        <div>Part Name: <strong>${n.name}</strong></div>
        <div>Grade: <strong>${i}</strong></div>
        <div>Thickness: <strong>${t.thicknessMm} mm (${t.gaugeName})</strong></div>
        <div>Dimensions: <strong>${e.boundingBoxWidthMm.toFixed(1)} × ${e.boundingBoxHeightMm.toFixed(1)} mm</strong></div>
        <div>Est. Mass/pc: <strong>${e.theoreticalWeightKg.toFixed(2)} kg</strong></div>
      </div>
      <div class="box">
        <div class="box-title">PRODUCTION & CNC PARAMETERS</div>
        <div>Cut Qty: <strong>${o} PIECES</strong></div>
        <div>Assist Gas: <strong>${s.assistGas.toUpperCase()}</strong></div>
        <div>Pierces/pc: <strong>${e.pierceCount}</strong></div>
        <div>Cut Length: <strong>${(e.totalCutLengthMm/1e3).toFixed(2)} meters</strong></div>
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
</html>`}function Io(n,e){const i=e.currency==="INR",t=i?"₹":"$",o=n.shopSettings,s=`PRJ-${Math.floor(1e5+Math.random()*9e5)}`,a=i?new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),r=o.upiId||"shop@upi",u=e.finalTotalWithGst,y=Math.round(u/2*100)/100,c=`upi://pay?pa=${encodeURIComponent(r)}&pn=${encodeURIComponent(o.shopName)}&am=${y.toFixed(2)}&cu=INR&tn=${encodeURIComponent(s)}`,h=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(c)}`;let $="";for(let x=0;x<n.items.length;x++){const m=n.items[x],v=m.partGeometry.boundingBox,k=m.partGeometry.units==="inch"||!i?`${(v.width/(m.partGeometry.units==="inch"?1:25.4)).toFixed(2)}" × ${(v.height/(m.partGeometry.units==="inch"?1:25.4)).toFixed(2)}"`:`${v.width.toFixed(0)} × ${v.height.toFixed(0)} mm`,C=i?`${(m.metrics.totalCutLengthMm/1e3).toFixed(1)} m`:`${m.metrics.totalCutLengthInches.toFixed(1)} in`;$+=`
      <tr>
        <td class="text-center">${x+1}</td>
        <td>
          <strong>${m.partGeometry.name}</strong><br>
          <span style="font-size: 12px; color: #64748b;">
            ${k} | ${m.materialName} (${m.gaugeThicknessMm}mm) | Cut: ${C}
          </span>
        </td>
        <td class="text-center">${m.unitQuote.quotingMode==="job_work"?i?"Job Work":"Labor Only":i?"Turnkey":"Fabricated"}</td>
        <td class="text-right"><strong>${m.quantity}</strong></td>
        <td class="text-right">${t}${m.unitQuote.finalUnitPrice.toFixed(2)}</td>
        <td class="text-right"><strong>${t}${m.totalPrice.toFixed(2)}</strong></td>
      </tr>
    `}return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${i?"Project Tax Invoice":"Commercial Project Quotation"} - ${s}</title>
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
      <div>
        <h1 class="shop-title">${o.shopName}</h1>
        <div class="shop-meta">
          <div>${o.shopAddress||(i?"MIDC Industrial Area, Bhosari, Pune, MH":"1420 Industrial Pkwy, Cleveland, OH 44135")}</div>
          <div>Phone: ${o.shopPhone||(i?"+91 98220 12345":"(216) 555-0198")} ${i?`| UPI: <strong>${r}</strong>`:""}</div>
          ${i?`<div>GSTIN: <strong>${o.shopGstin||"27AABCS1429B1Z8"}</strong> | State Code: 27 (Maharashtra)</div>`:"<div>Tax ID / Resale: <strong>Verified</strong> | Terms: <strong>Net 30 / Credit Card</strong></div>"}
        </div>
      </div>
      <div class="invoice-tag">
        <h2 class="invoice-title">${i?"CONSOLIDATED TAX INVOICE":"PROJECT QUOTATION"}</h2>
        <div class="invoice-meta">
          <div>Project Ref: <strong>${s}</strong></div>
          <div>Date: <strong>${a}</strong></div>
          <div>${i?"SAC: <strong>9988</strong> | HSN: <strong>7326</strong>":"Validity: <strong>15 Calendar Days</strong>"}</div>
        </div>
      </div>
    </div>

    <div class="bill-to-box">
      <strong>Customer:</strong> ${n.customerName||"Valued Customer"} ${n.customerPhone?`(${n.customerPhone})`:""} | 
      <strong>Project Name:</strong> ${n.projectName||"CNC Laser Fabrication Batch"} | 
      <em>Nesting: ${e.nestingResult.sheetsRequired} Sheet(s) of ${e.nestingResult.sheetSize.name.split(" - ")[0]} (${e.nestingResult.sheetUtilizationPercent}% yield)</em>
    </div>

    <table>
      <thead>
        <tr>
          <th class="text-center" style="width: 40px;">#</th>
          <th>Item Description & Dimensions</th>
          <th class="text-center">Mode</th>
          <th class="text-right">Qty</th>
          <th class="text-right">Unit Rate</th>
          <th class="text-right">Amount (${t})</th>
        </tr>
      </thead>
      <tbody>
        ${$}
      </tbody>
    </table>

    <div class="summary-grid">
      ${i?`
      <div class="upi-box">
        <div class="upi-title">Scan UPI QR to Pay Advance</div>
        <img src="${h}" alt="UPI QR Code" />
        <div class="upi-sub">Pay 50% Advance: <strong>${t}${y.toFixed(2)}</strong></div>
        <div class="upi-sub" style="margin-top: 4px; font-family: monospace;">${r}</div>
      </div>
      `:`
      <div class="terms-box">
        <div class="terms-title">Commercial & Remittance Terms</div>
        <div class="terms-item">Payment: <strong>Net 30 / Credit Card / ACH</strong></div>
        <div class="terms-item">Lead Time: <strong>${o.leadTimeDays||3} to 5 Business Days ARO</strong></div>
        <div class="terms-item">Delivery: <strong>FOB Origin / Ex-Works</strong></div>
        <div class="terms-item">CAM Spec: <strong>Trumpf / SigmaNEST Cut-Ready DXF</strong></div>
      </div>
      `}

      <table class="totals-table">
        <tr>
          <td>Subtotal (${e.totalPartsCount} pcs):</td>
          <td class="text-right">${t}${e.subtotalBeforeDiscount.toFixed(2)}</td>
        </tr>
        ${e.volumeDiscountPercent>0?`
        <tr>
          <td style="color: #16a34a;">Volume Discount (${e.volumeDiscountPercent}%):</td>
          <td class="text-right" style="color: #16a34a;">-${t}${e.discountAmount.toFixed(2)}</td>
        </tr>`:""}
        <tr>
          <td>${i?"Taxable Value:":"Taxable Subtotal:"}</td>
          <td class="text-right">${t}${e.orderTotalBeforeGst.toFixed(2)}</td>
        </tr>
        ${i?o.isInterstateSale?`
        <tr>
          <td>Integrated GST (IGST 18%):</td>
          <td class="text-right">${t}${e.igstAmount.toFixed(2)}</td>
        </tr>`:`
        <tr>
          <td>Central GST (CGST 9%):</td>
          <td class="text-right">${t}${e.cgstAmount.toFixed(2)}</td>
        </tr>
        <tr>
          <td>State GST (SGST 9%):</td>
          <td class="text-right">${t}${e.sgstAmount.toFixed(2)}</td>
        </tr>`:`
        <tr>
          <td>Estimated Sales Tax (${o.gstPercent||0}%):</td>
          <td class="text-right">${t}${e.gstAmount.toFixed(2)}</td>
        </tr>
        `}
        <tr class="total-row">
          <td>Total Project Amount:</td>
          <td class="text-right">${t}${e.finalTotalWithGst.toFixed(2)}</td>
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
</html>`}function vo(n,e){const i=n.shopSettings,t=`JOB-${Math.floor(1e5+Math.random()*9e5)}`,o=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});let s="";for(let a=0;a<n.items.length;a++){const r=n.items[a],u=r.partGeometry.boundingBox;s+=`
      <tr>
        <td class="text-center">${a+1}</td>
        <td><strong>${r.partGeometry.name}</strong></td>
        <td>${u.width.toFixed(0)} × ${u.height.toFixed(0)} mm</td>
        <td>${r.materialName} (${r.gaugeThicknessMm}mm)</td>
        <td class="text-right"><strong>${r.quantity} pcs</strong></td>
        <td>${(r.metrics.totalCutLengthMm/1e3).toFixed(1)} m / ${r.metrics.pierceCount*r.quantity} pts</td>
      </tr>
    `}return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Shop Floor Multi-Part Job Card - ${t}</title>
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
        <div>Job Card No: <strong>${t}</strong></div>
        <div>Date: <strong>${o}</strong></div>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-item"><strong>Customer / PO Ref</strong>${n.customerName||"Tata AutoComp"}</div>
      <div class="info-item"><strong>Project Assembly</strong>${n.projectName||"Skid Parts Batch"}</div>
      <div class="info-item"><strong>Total Parts Scheduled</strong>${e.totalPartsCount} pcs across ${e.totalItemsCount} shapes</div>
      <div class="info-item"><strong>Mill Sheet Size</strong>${e.nestingResult.sheetSize.name.split(" - ")[0]}</div>
      <div class="info-item"><strong>Sheets Required</strong>${e.nestingResult.sheetsRequired} Sheet(s) (${e.nestingResult.sheetUtilizationPercent}% yield)</div>
      <div class="info-item"><strong>Cut Length / Pierces</strong>${e.totalCutLengthMeters}m | ${e.totalPierces} pts</div>
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
        ${s}
      </tbody>
    </table>

    <div class="checklist">
      <div class="box-title">MACHINE OPERATOR CUT SEQUENCE CHECKLIST</div>
      <div>[ ] Sheet thickness measured and confirmed before gantry loading</div>
      <div>[ ] Laser beam focus centered (tape blast test verified)</div>
      <div>[ ] <strong>CUT SEQUENCE VERIFIED:</strong> All Layer 1 (Yellow) Inner Holes cut BEFORE Layer 0 (White) Outer Perimeter</div>
      <div>[ ] Remnant offcut saved to rack: ${e.nestingResult.remnantWidthMm} × ${e.nestingResult.remnantLengthMm} mm</div>
      <div>[ ] Finished parts count verified and tagged with job number: _____ pcs</div>
    </div>

    <div class="sign-row">
      <div>Laser Operator: ___________________</div>
      <div>Quality Inspector: ___________________</div>
      <div>Supervisor: ___________________</div>
    </div>
  </div>
</body>
</html>`}function So(){const n=document.getElementById("demoVideoModal"),e=document.getElementById("btnOpenDemoModal"),i=document.getElementById("closeDemoModalBtn"),t=document.getElementById("demoLocalVideo");if(!n||!e)return;function o(){if(n.classList.remove("hidden"),t){t.currentTime=0;const a=t.play();a!==void 0&&a.catch(()=>{t.muted=!0,t.play().catch(()=>{})})}}function s(){n.classList.add("hidden"),t&&t.pause()}e.addEventListener("click",o),i==null||i.addEventListener("click",s),n.addEventListener("click",a=>{a.target===n&&s()}),window.addEventListener("keydown",a=>{a.key==="Escape"&&!n.classList.contains("hidden")&&s()})}let Ct="inch",ut="baseplate",te="part",ce=!1,ie=null,It=1,wt=He[0],zt=On("USD",cn),j=zt[0],Q=j.gauges[3]||j.gauges[0],N=Rn("USD",Me),Ht={..._n},lt=[],Rt="single",Bt=0,sn=null,Ee=null,me=!1,xe=null,Zt=[],fe=0,le=1,Lt=!0,Ce=null,Qt=null;const w={length:10,width:8,units:"inch",cornerType:"chamfer",cornerSize:.75,holePattern:"4-corner",holeType:"slotted",holeDiameter:.75,slotLength:1.5,slotWidth:.75,edgeOffsetX:1.25,edgeOffsetY:1.25,centerCutoutType:"round",centerCutoutDiameter:2.5};let Gt=Vt.find(n=>n.standard==="ASME"&&n.nominalBore==='2"')||Vt[Vt.length-1];const J={baseWidth:6,height:6,units:"inch",hasWeldSnipe:!0,snipeSize:1,mountingHoleDiameter:.5},B={width:24,height:48,units:"inch",patternType:"islamic_star",borderMarginMm:1.5,gridColumns:4,gridRows:8,hasMountingHoles:!0,mountingHoleDiameter:.3125,gateType:"single_swing",hasFrameTube:!0,frameTubeWidthMm:2,hasKickPlate:!1,kickPlateHeightMm:12,hasHinges:!0,hasPullHandle:!0,hasLockBox:!0,finishMaterial:"matte_black",backlightColor:"warm_white"};let Tt="realistic_gate";const U={baseWidth:5,height:5,chamferTop:3,chamferRight:3,units:"inch",baseHoleCount:2,baseHoleDiameter:.375,uprightHoleCount:2,uprightHoleDiameter:.375,lighteningHoleDiameter:1.5},q={outerDiameter:6,innerDiameter:2,units:"inch",boltCount:6,boltDiameter:.375,pitchCircleDiameter:4},Yt=document.getElementById("dynamicControls"),dt=document.getElementById("svgContainer"),Po=document.getElementById("hudCutLength"),Bo=document.getElementById("hudPierces"),wo=document.getElementById("hudWeight"),ko=document.getElementById("hudBoundingBox"),he=document.getElementById("dfmAlertContainer"),Ve=document.getElementById("canvasTitle"),Bn=document.getElementById("nestingHudBar"),wn=document.getElementById("nestHudSheets"),kn=document.getElementById("nestHudUtil"),En=document.getElementById("nestHudScrap"),Ln=document.getElementById("nestHudRemnant"),ve=document.getElementById("quoteModeBadge"),Tn=document.getElementById("quoteShopName"),Eo=document.getElementById("totalPrice"),Lo=document.getElementById("pricePerUnit"),Se=document.getElementById("costMaterial"),To=document.getElementById("costCut"),Do=document.getElementById("costPierce"),Dn=document.getElementById("costHandling"),Fn=document.getElementById("costSecondary"),Fo=document.getElementById("costDiscount"),Ao=document.getElementById("costGst"),No=document.getElementById("totalIncGst"),Pe=document.getElementById("gstLabel"),qe=document.getElementById("hsnCodeTag"),Ze=document.getElementById("minOrderWarning"),be=document.getElementById("materialSelect"),de=document.getElementById("gaugeSelect"),Be=document.getElementById("assistGasSelect"),se=document.getElementById("sheetSizeSelect"),tn=document.getElementById("camProfileSelect"),Ho=document.getElementById("navCamName");let _t=1,Ft={x:0,y:0},we=!1,en={x:0,y:0},Le=!1,Te=!1;function oe(){const n=document.getElementById("gateToolbarMain"),e=document.getElementById("gateFoldedBar"),i=document.getElementById("gateStudioToolbar");n&&e&&i&&(Le?(n.classList.add("hidden"),e.classList.remove("hidden"),i.classList.add("is-folded")):(n.classList.remove("hidden"),e.classList.add("hidden"),i.classList.remove("is-folded")));const t=document.getElementById("bottomHudExpandedContent"),o=document.getElementById("bottomHudFoldedBar"),s=document.getElementById("canvasBottomHud");t&&o&&s&&(Te?(t.classList.add("hidden"),o.classList.remove("hidden"),s.classList.add("is-folded")):(t.classList.remove("hidden"),o.classList.add("hidden"),s.classList.remove("is-folded")))}function Pt(){const n=dt==null?void 0:dt.querySelector("svg");n&&(_t===1&&Ft.x===0&&Ft.y===0?(n.style.transform="",dt==null||dt.classList.remove("is-zoomed")):(n.style.transform=`translate(${Ft.x}px, ${Ft.y}px) scale(${_t})`,dt==null||dt.classList.add("is-zoomed")));const e=document.getElementById("zoomLevelDisplay");e&&(e.textContent=`${Math.round(_t*100)}%`)}function ye(){_t=1,Ft={x:0,y:0},Pt()}function _o(){an("USD"),Vo(),Zo(),ue(),$e(),jt(),L()}let An=null;function Ut(){const n=document.getElementById("storageBadge");n&&(n.textContent="💾 Saving...",n.classList.add("saving")),clearTimeout(An),An=setTimeout(()=>{go(N.currency,N),po(N.currency,zt),n&&(n.textContent="💾 Auto-Saved",n.classList.remove("saving"))},400)}function Wt(){return ce&&ie?ie:ut==="baseplate"?(w.units=Ct,Jn(w)):ut==="flange"?Vn({outerDiameter:Gt.outerDiameter,innerBore:Gt.innerBore,pitchCircleDiameter:Gt.pitchCircleDiameter,boltCount:Gt.boltCount,boltDiameter:Gt.boltDiameter,units:Gt.units}):ut==="gusset"?(J.units=Ct,qn(J)):ut==="jali"?(B.units=Ct,Zn(B)):ut==="bracket"?(U.units=Ct,to(U)):(q.units=Ct,eo(q))}function L(){var b,M;const n=Ct==="inch",e=Wt(),i=ne(e,Q.thicknessMm,j.densityGPerCm3),t=oo(e,Q.thicknessMm);Qt=t;let o;if(Rt==="cart"&&lt.length>0){const g=lt.map(l=>({id:l.id,name:l.partGeometry.name,boundingBox:l.partGeometry.boundingBox,quantity:l.quantity,thicknessMm:l.gaugeThicknessMm,densityGPerCm3:j.densityGPerCm3,geometry:l.partGeometry,color:l.color}));o=rn(g,wt,Q.thicknessMm,j.densityGPerCm3)}else o=lo(e.boundingBox,It,wt,Q.thicknessMm,j.densityGPerCm3,{},e.units);sn=o,Bt=Math.max(0,Math.min(Bt,o.sheetsRequired-1));const s=Jt(i,Q,It,N,Ht),a=document.getElementById("sheetPaginationBar"),r=document.getElementById("sheetPageIndicator"),u=document.getElementById("btnPrevSheet"),y=document.getElementById("btnNextSheet"),c=document.getElementById("gateStudioToolbar"),h=document.getElementById("simulatorControls");if(te==="nesting")c&&c.classList.add("hidden"),h&&(h.style.display="flex"),dt.innerHTML=$o(o,Bt),Rt==="cart"?Ve.textContent=`RFQ Cart Assembly — ${wt.name} Layout (Sheet ${Bt+1} of ${o.sheetsRequired})`:Ve.textContent=`${e.name} — ${wt.name} Layout (Sheet ${Bt+1} of ${o.sheetsRequired})`,a&&a.classList.remove("hidden"),r&&(r.textContent=`Sheet ${Bt+1} of ${o.sheetsRequired}`),u&&(u.disabled=Bt<=0),y&&(y.disabled=Bt>=o.sheetsRequired-1);else if(a&&a.classList.add("hidden"),ut==="jali"?(c&&(c.classList.remove("hidden"),(b=document.getElementById("btnJaliViewRealistic"))==null||b.classList.toggle("active",Tt==="realistic_gate"),(M=document.getElementById("btnJaliViewCam"))==null||M.classList.toggle("active",Tt==="cam_toolpath"),c.querySelectorAll(".finish-swatch").forEach(g=>{g.classList.toggle("active",g.getAttribute("data-finish")===B.finishMaterial)}),c.querySelectorAll(".backlight-pill").forEach(g=>{g.classList.toggle("active",g.getAttribute("data-backlight")===B.backlightColor)}),c.querySelectorAll(".gate-type-btn").forEach(g=>{g.classList.toggle("active",g.getAttribute("data-gatetype")===B.gateType)})),h&&(h.style.display="flex")):(c&&c.classList.add("hidden"),h&&(h.style.display="flex")),!me){dt.innerHTML=Re(e,{showCutOrder:Lt,viewStyle:ut==="jali"?Tt:"cam_toolpath",jaliParams:ut==="jali"?B:void 0,hideCamBadges:ut==="jali"&&(Tt==="realistic_gate"||!Lt),dfmIssues:t.issues,highlightedHoleIndex:Ce}),Wn();const l=Ct==="inch"?`${i.boundingBoxWidthInches.toFixed(2)}" × ${i.boundingBoxHeightInches.toFixed(2)}"`:`${i.boundingBoxWidthMm.toFixed(0)} × ${i.boundingBoxHeightMm.toFixed(0)} mm`;Ve.textContent=ut==="jali"&&Tt==="realistic_gate"?`Architectural CNC Gate & Jali Studio (${l})`:`${e.name} (${l})`}const $=document.getElementById("camLegendBar"),x=document.getElementById("archLegendBar");if(ut==="jali"&&Tt==="realistic_gate"&&te!=="nesting"){if($&&$.classList.add("hidden"),x){x.classList.remove("hidden");const g={matte_black:"Matte Black Powder Coat",royal_gold:"Royal Gold / Antique Brass",corten_rust:"Corten Weathered Rust Steel",brushed_stainless:"Satin Stainless 304",champagne_bronze:"Champagne Bronze"},l={warm_white:"Warm 3000K LED",cool_white:"Cool 6000K LED",amber_gold:"Sunset Amber LED",none:"Off (Daylight)"},p=B.gateType==="wall_panel",D=p?"Wall Mount Standoffs":`${B.hasFrameTube!==!1?n?'2" Box Tube':"50mm Box Tube":"Frameless Plate"}`,O=p?n?'1/4" Stainless Standoff Screws':"M8 Stainless Standoff Screws":`${B.hasHinges!==!1?"Bullet Hinges":""}${B.hasPullHandle!==!1?" + Bar Pull":""}${B.hasLockBox!==!1?" + Mortise Lock":""}`.replace(/^\s*\+\s*/,"")||"Custom Welded",G=document.getElementById("archLegendFinish"),W=document.getElementById("archLegendLight"),F=document.getElementById("archLegendFrame"),E=document.getElementById("archLegendHardware");G&&(G.textContent=g[B.finishMaterial||"matte_black"]||"Matte Black"),W&&(W.textContent=l[B.backlightColor||"warm_white"]||"Warm 3000K"),F&&(F.textContent=D),E&&(E.textContent=O)}}else $&&$.classList.remove("hidden"),x&&x.classList.add("hidden");Pt(),Po.textContent=n?`${i.totalCutLengthInches.toFixed(2)} in`:`${i.totalCutLengthMm.toFixed(1)} mm`,Bo.textContent=i.pierceCount.toString(),wo.textContent=n?`${i.theoreticalWeightLbs.toFixed(2)} lbs`:`${i.theoreticalWeightKg.toFixed(2)} kg`,ko.textContent=n?`${i.boundingBoxWidthInches.toFixed(2)}" × ${i.boundingBoxHeightInches.toFixed(2)}"`:`${i.boundingBoxWidthMm.toFixed(0)} × ${i.boundingBoxHeightMm.toFixed(0)} mm`;const m=s.currency==="USD";Bn&&(Bn.style.display=It>1||te==="nesting"||Rt==="cart"?"grid":"none"),wn&&(wn.textContent=`${o.sheetsRequired} Sheet${o.sheetsRequired>1?"s":""}`),kn&&(kn.textContent=`${o.sheetUtilizationPercent}%`),En&&(En.textContent=m?`${(o.totalSkeletonScrapMassKg*2.20462).toFixed(1)} lbs`:`${o.totalSkeletonScrapMassKg.toFixed(1)} kg`),Ln&&(Ln.textContent=m?`${(o.remnantWidthMm/25.4).toFixed(1)}" × ${(o.remnantLengthMm/25.4).toFixed(1)}"`:`${o.remnantWidthMm} × ${o.remnantLengthMm} mm`);const v=document.getElementById("gateFoldedSummary");if(v){const g={matte_black:"Matte Black",royal_gold:"Royal Gold",corten_rust:"Corten Rust",brushed_stainless:"Stainless 304",champagne_bronze:"Bronze"},l={warm_white:"Warm 3000K",cool_white:"Cool 6000K",amber_gold:"Amber",none:"Light Off"},p={single_swing:"Single Gate",double_swing:"Double Swing",wall_panel:"Wall Jali"},D=g[B.finishMaterial||"matte_black"]||"Matte Black",O=l[B.backlightColor||"warm_white"]||"Warm 3000K",G=p[B.gateType||"single_swing"]||"Single Gate";v.textContent=`${D} • ${O} • ${G}`}const I=document.getElementById("bottomHudFoldedSummary");if(I){const g=n?`${i.totalCutLengthInches.toFixed(2)} in`:`${i.totalCutLengthMm.toFixed(1)} mm`,l=n?`${i.theoreticalWeightLbs.toFixed(2)} lbs`:`${i.theoreticalWeightKg.toFixed(2)} kg`,p=n?`${i.boundingBoxWidthInches.toFixed(2)}" × ${i.boundingBoxHeightInches.toFixed(2)}"`:`${i.boundingBoxWidthMm.toFixed(0)} × ${i.boundingBoxHeightMm.toFixed(0)} mm`;I.textContent=`${g} • ${i.pierceCount} Pierces • ${l} • ${p}`}oe(),Ro(t);const k=s.currency==="INR"?"₹":"$";Eo.textContent=s.finalOrderTotal.toFixed(2),Lo.textContent=`(${k}${s.finalUnitPrice.toFixed(2)} / unit)`,ve&&(s.quotingMode==="job_work"?ve.textContent=m?"LABOR ONLY (CUSTOMER STOCK)":"JOB WORK (LABOUR ONLY)":s.quotingMode==="sqft_jali"?ve.textContent=m?"ARCHITECTURAL PANELS":"ARCHITECTURAL (₹/SQ.FT)":ve.textContent=m?"TURNKEY (PLATE + CUT)":"WITH MATERIAL (SUPPLY & CUT)"),Se.textContent=`${k}${s.unitMaterialCost.toFixed(2)}`,To.textContent=`${k}${s.unitCutCost.toFixed(2)}`,Do.textContent=`${k}${s.unitPierceCost.toFixed(2)}`,Dn&&(Dn.textContent=`${k}${s.unitHandlingCost.toFixed(2)}`),Fn&&(Fn.textContent=`${k}${s.unitSecondaryCost.toFixed(2)}`);const C=document.getElementById("rowMaterial"),P=document.getElementById("rowCut"),T=document.getElementById("rowPierce"),A=document.getElementById("rowHandling"),f=document.getElementById("rowSecondary");if(s.quotingMode==="job_work"){if(C){C.style.display="flex";const g=C.querySelector("span:first-child");g&&(g.textContent="Raw Material:"),Se.textContent=m?"$0.00 (Customer Sheet)":"₹0.00 (Customer Plate)"}P&&(P.style.display="flex"),T&&(T.style.display="flex"),A&&(A.style.display="flex")}else if(s.quotingMode==="sqft_jali"){if(C){C.style.display="flex";const g=C.querySelector("span:first-child");g&&(g.textContent=m?"Fabrication Rate:":"Jali Fabrication (Sq.Ft):"),Se.textContent=`${k}${s.unitMaterialCost.toFixed(2)}`}P&&(P.style.display="none"),T&&(T.style.display="none"),A&&(A.style.display="none")}else{if(C){C.style.display="flex";const g=C.querySelector("span:first-child");g&&(g.textContent=m?"Raw Stock Material:":"Raw Material (Steel):"),Se.textContent=`${k}${s.unitMaterialCost.toFixed(2)}`}P&&(P.style.display="flex"),T&&(T.style.display="flex"),A&&(A.style.display="none")}f&&(f.style.display=s.unitSecondaryCost>0?"flex":"none"),Fo.textContent=`-${s.discountPercent}%`,Ao.textContent=`${k}${s.gstAmount.toFixed(2)}`,No.textContent=`${k}${s.finalTotalWithGst.toFixed(2)}`,Pe&&(m?Pe.textContent=`Sales Tax (${N.gstPercent||0}%):`:N.isInterstateSale?Pe.textContent="IGST (18%):":Pe.textContent="GST (CGST 9% + SGST 9%):");const d=document.querySelector(".breakdown-row.total-inc-gst span:first-child");d&&(d.textContent=m?"Total (Inc. Tax):":"Total (Inc. GST):"),qe&&(qe.style.display=m?"none":"block",qe.textContent=s.hsnSacCode),s.minimumOrderFloorApplied?(Ze.classList.remove("hidden"),Ze.innerHTML=`⚠️ <strong>Minimum Order Floor Active</strong><br><span style="font-size:0.7rem;opacity:0.95;">Calc Subtotal: ${k}${s.orderTotalBeforeMin.toFixed(2)} → Billed Min Floor: ${k}${s.finalOrderTotal.toFixed(2)}</span>`):Ze.classList.add("hidden")}function nn(n){if(Ce=n,!me&&te==="part"){const e=Wt();dt.innerHTML=Re(e,{showCutOrder:Lt,viewStyle:ut==="jali"?Tt:"cam_toolpath",jaliParams:ut==="jali"?B:void 0,hideCamBadges:ut==="jali"&&(Tt==="realistic_gate"||!Lt),dfmIssues:Qt==null?void 0:Qt.issues,highlightedHoleIndex:Ce}),Pt(),Wn()}he.querySelectorAll(".dfm-pill").forEach(e=>{const i=e.getAttribute("data-hole-index");i!==null&&n!==null&&parseInt(i,10)===n?e.classList.add("is-active-target"):e.classList.remove("is-active-target")})}function Wn(){dt.querySelectorAll("[data-hole-index]").forEach(n=>{const e=n.getAttribute("data-hole-index");if(e!==null){const i=parseInt(e,10);n.addEventListener("mouseenter",()=>{he.querySelectorAll(`.dfm-pill[data-hole-index="${i}"]`).forEach(t=>{t.classList.add("is-active-target"),t.scrollIntoView({behavior:"smooth",block:"nearest"})})}),n.addEventListener("mouseleave",()=>{he.querySelectorAll(`.dfm-pill[data-hole-index="${i}"]`).forEach(t=>{t.classList.remove("is-active-target")})})}})}function Ro(n){if(he.innerHTML="",!(n.isManufacturable&&!n.hasWarnings)){if(n.issues.length>2){const e=document.createElement("div");e.className="dfm-scroll-header",e.innerHTML=`
      <span class="dfm-scroll-title">
        <span class="dfm-scroll-badge">${n.issues.length} DFM Findings</span>
        ${n.isManufacturable?"Advisories to prevent heat burn":"Critical cut issues require design fix"}
      </span>
      <span class="dfm-scroll-hint">↕ Scroll to inspect all holes</span>
    `,he.appendChild(e)}for(const e of n.issues){const i=document.createElement("div"),t=typeof e.holeIndex=="number";i.className=`dfm-pill ${e.severity==="error"?"dfm-error":"dfm-warning"} ${t?"dfm-pill-hole":""}`,t&&(i.setAttribute("data-hole-index",e.holeIndex.toString()),i.title=`Click or hover to highlight Hole #${e.holeIndex+1} on the drawing`),i.innerHTML=`
      <span class="dfm-icon">${e.severity==="error"?"⚠️":"ℹ️"}</span>
      <span class="dfm-text">${e.message}</span>
      ${t?`<span class="dfm-locate-chip" title="Pinpoint on diagram">📍 Hole #${e.holeIndex+1}</span>`:""}
    `,t&&(i.addEventListener("mouseenter",()=>{nn(e.holeIndex)}),i.addEventListener("mouseleave",()=>{nn(null)}),i.addEventListener("click",()=>{var o,s;Lt||(Lt=!0,(o=document.getElementById("btnToggleCamBadges"))==null||o.classList.add("active"),(s=document.getElementById("legendBadgeToggle"))==null||s.classList.add("active")),nn(e.holeIndex)})),he.appendChild(i)}}}function Un(){be.innerHTML="";for(const n of zt){const e=document.createElement("option");e.value=n.id,e.textContent=n.name,be.appendChild(e)}be.value=j.id,zn()}function zn(){de.innerHTML="";for(let n=0;n<j.gauges.length;n++){const e=j.gauges[n],i=document.createElement("option");i.value=n.toString(),i.textContent=e.gaugeName,de.appendChild(i)}de.selectedIndex=Math.min(3,j.gauges.length-1),Q=j.gauges[de.selectedIndex]}function Oo(){tn.innerHTML="";for(const n of ge){const e=document.createElement("option");e.value=n.id,e.textContent=n.name,tn.appendChild(e)}tn.value=N.selectedCAMProfileId,Go()}function Go(){const n=ge.find(e=>e.id===N.selectedCAMProfileId)||ge[0];Ho.textContent=n.name.split("(")[0].trim()}function Wo(){if(!se)return;se.innerHTML="";const n=N.currency==="USD"?He:pe;for(const i of n){const t=document.createElement("option");t.value=i.id,t.textContent=i.name,se.appendChild(t)}wt=n.find(i=>i.id===wt.id)||n[0],se.value=wt.id}function an(n){var E;const e=n==="USD",i=document.getElementById("btnCurrencyINR"),t=document.getElementById("btnCurrencyUSD");e?(t==null||t.classList.add("active"),i==null||i.classList.remove("active")):(i==null||i.classList.add("active"),t==null||t.classList.remove("active")),N=Rn(n,e?Me:_e),zt=On(n,e?cn:Hn),j=zt[0],Q=j.gauges[e?3:4]||j.gauges[0],Ae(e?"inch":"mm"),Ne(),wt=e?He[0]:pe[0],e?Gt=Vt.find(H=>H.standard==="ASME"&&H.nominalBore==='2"')||Vt[Vt.length-1]:Gt=Vt[2];const o=document.getElementById("brandTitle"),s=document.getElementById("brandSubtitle");o&&(o.textContent=e?"US CNC LASER CPQ":"INDIAN CNC LASER CPQ"),s&&(s.textContent=e?"Instant Quoting, Nesting & Trumpf/SigmaNEST DXF":"WhatsApp-First Quoting & CypCut DXF Engine");const a=document.getElementById("modeJobWork"),r=document.getElementById("modeWithMaterial"),u=document.getElementById("modeSqFtJali");a&&(a.innerHTML=e?"🔧 Labor Only":"🔧 Job Work"),r&&(r.innerHTML=e?"📦 Turnkey (Plate+Cut)":"📦 Turnkey"),u&&(u.innerHTML=e?"🏛️ Arch Panels":"🏛️ Architectural");const y=document.getElementById("currencySym"),c=document.getElementById("adminCurrencySym");y&&(y.textContent=e?"$":"₹"),c&&(c.textContent=e?"$":"₹");const h=document.getElementById("customerPhoneLabel"),$=document.getElementById("phoneCountryPrefix"),x=document.getElementById("customerPhoneInput"),m=document.getElementById("phoneHint"),v=document.getElementById("phoneModeBadge");h&&(h.textContent=e?"Customer Email / Phone":"Customer WhatsApp"),$&&($.textContent=e?"+1":"+91"),x&&(x.placeholder=e?"estimator@client.com or (555) 123-4567":"10-digit mobile (e.g. 98230 12345)"),m&&(m.textContent=e?"Enter email to send quote, or copy directly to clipboard":"Enter mobile to open direct chat, or leave blank to choose contact"),v&&(v.textContent=e?"Email / RFQ":"Direct Send");const I=document.getElementById("shareWhatsAppBtn"),k=document.getElementById("shareBtnIcon"),C=document.getElementById("shareBtnText"),P=document.getElementById("printInvoiceText"),T=document.getElementById("downloadDxfText");I&&(e?(I.classList.remove("btn-whatsapp"),I.classList.add("btn-email")):(I.classList.remove("btn-email"),I.classList.add("btn-whatsapp"))),k&&(k.textContent=e?"✉️":"💬"),C&&(C.textContent=e?"Copy Quote for Email":"Share Quote on WhatsApp"),P&&(P.textContent=e?"Commercial Quote (PDF)":"Tax Invoice & QR");const A=((E=ge.find(H=>H.id===N.selectedCAMProfileId))==null?void 0:E.name.split(" ")[0])||(e?"Trumpf":"CypCut");T&&(T.textContent=`${A} DXF`);const f=document.getElementById("shareCartWhatsAppBtn"),d=document.getElementById("shareCartBtnIcon"),b=document.getElementById("shareCartBtnText"),M=document.getElementById("printCartInvoiceText");f&&(e?(f.classList.remove("btn-whatsapp"),f.classList.add("btn-email")):(f.classList.remove("btn-email"),f.classList.add("btn-whatsapp"))),d&&(d.textContent=e?"✉️":"💬"),b&&(b.textContent=e?"Copy Project Quote for Email":"Share Project Quote on WhatsApp"),M&&(M.textContent=e?"Commercial Quote (PDF)":"Tax Invoice & QR");const g=document.getElementById("groupAdminGstin"),l=document.getElementById("groupAdminUpi"),p=document.getElementById("groupAdminTaxType"),D=document.getElementById("labelSheetLoading"),O=document.getElementById("labelPricePerKg"),G=document.getElementById("labelPricePerMeterCut"),W=document.getElementById("labelPricePerPierce"),F=document.getElementById("labelAdminTax");g&&(g.style.display=e?"none":"block"),l&&(l.style.display=e?"none":"block"),p&&(p.style.display=e?"none":"block"),D&&(D.textContent=e?"Handling & Loading Fee ($/sheet)":"Plate Loading / Handling Fee (₹/sheet)"),O&&(O.textContent=e?"Material Rate ($/sq.in)":"Material Rate (₹/kg)"),G&&(G.textContent=e?"Cut Rate ($/lin.in)":"Cut Rate (₹/meter)"),W&&(W.textContent=e?"Pierce Fee ($/pt)":"Pierce Fee (₹/pt)"),F&&(F.textContent=e?"Sales Tax (%)":"GST / Tax (%)"),Un(),Wo(),Oo(),$e(),ue(),jt(),L(),Et(e?"🇺🇸 Switched to US Imperial Mode (USD $, Inches, A36/SS304/AL6061, Trumpf DXF)":"🇮🇳 Switched to India Metric Mode (INR ₹, mm, IS 2062, CypCut DXF)")}function ue(){Yt.innerHTML="",ut==="baseplate"?Uo():ut==="flange"?zo():ut==="gusset"?jo():ut==="jali"?jn():ut==="bracket"?Qo():ut==="disc"&&Yo()}function Uo(){const n=Ct==="inch",e=n?"in":"mm";Yt.innerHTML=`
    <div class="preset-pills-row">
      <button class="preset-pill" data-len="${n?6:150}" data-wid="${n?6:150}">${n?'6×6"':"150×150"}</button>
      <button class="preset-pill" data-len="${n?8:200}" data-wid="${n?8:200}">${n?'8×8"':"200×200"}</button>
      <button class="preset-pill" data-len="${n?10:250}" data-wid="${n?8:200}">${n?'10×8"':"250×200 Std"}</button>
      <button class="preset-pill" data-len="${n?12:300}" data-wid="${n?12:300}">${n?'12×12"':"300×300 PEB"}</button>
    </div>

    <div class="form-group">
      <label class="form-label">Plate Length (${e}): <strong id="valBpLen">${w.length}</strong></label>
      <input type="range" id="bpLength" min="${n?2:50}" max="${n?36:900}" value="${w.length}" step="${n?.25:5}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Plate Width (${e}): <strong id="valBpWid">${w.width}</strong></label>
      <input type="range" id="bpWidth" min="${n?2:50}" max="${n?36:900}" value="${w.width}" step="${n?.25:5}" class="form-slider" />
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Corner Finish</label>
        <select id="bpCornerType" class="form-select">
          <option value="chamfer" ${w.cornerType==="chamfer"?"selected":""}>45° Chamfer</option>
          <option value="fillet" ${w.cornerType==="fillet"?"selected":""}>Radius Fillet</option>
          <option value="sharp" ${w.cornerType==="sharp"?"selected":""}>Sharp</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Corner Size (${e})</label>
        <input type="number" id="bpCornerSize" class="form-input" value="${w.cornerSize}" min="0" max="${n?4:100}" step="${n?.05:1}" />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Bolt Hole Type</label>
        <select id="bpHoleType" class="form-select">
          <option value="slotted" ${w.holeType==="slotted"?"selected":""}>Slotted / Oval (Site Tolerance)</option>
          <option value="round" ${w.holeType==="round"?"selected":""}>Round Hole</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Bolt Hole Dia (${e})</label>
        <input type="number" id="bpHoleDia" class="form-input" value="${w.holeDiameter}" min="${n?.2:4}" max="${n?2.5:50}" step="${n?.05:1}" />
      </div>
    </div>

    <div class="form-row" id="slotDimsRow" style="${w.holeType==="slotted"?"display: flex;":"display: none;"}">
      <div class="form-group">
        <label class="form-label">Slot Length (${e})</label>
        <input type="number" id="bpSlotLen" class="form-input" value="${w.slotLength||(n?1.5:35)}" min="${n?.5:10}" max="${n?5:100}" step="${n?.1:1}" />
      </div>
      <div class="form-group">
        <label class="form-label">Slot Width (${e})</label>
        <input type="number" id="bpSlotWid" class="form-input" value="${w.slotWidth||(n?.75:20)}" min="${n?.2:6}" max="${n?2.5:50}" step="${n?.05:1}" />
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Center Cutout (Pipe / Column)</label>
      <select id="bpCenterType" class="form-select">
        <option value="none" ${w.centerCutoutType==="none"?"selected":""}>None (Solid Center)</option>
        <option value="round" ${w.centerCutoutType==="round"?"selected":""}>Round Pipe Cutout</option>
        <option value="rectangular" ${w.centerCutoutType==="rectangular"?"selected":""}>Rectangular / Tube Cutout</option>
      </select>
    </div>

    <div class="form-group" id="centerCutoutDiaGroup" style="${w.centerCutoutType==="round"?"display: block;":"display: none;"}">
      <label class="form-label">Center Hole Diameter (${e}): <strong id="valCenterDia">${w.centerCutoutDiameter||50}</strong></label>
      <input type="range" id="bpCenterDia" min="${n?.5:15}" max="${n?12:300}" value="${w.centerCutoutDiameter||50}" class="form-slider" />
    </div>
  `;const i=document.getElementById("bpLength"),t=document.getElementById("bpWidth"),o=document.getElementById("valBpLen"),s=document.getElementById("valBpWid");i.oninput=()=>{w.length=parseFloat(i.value),o.textContent=i.value,L()},t.oninput=()=>{w.width=parseFloat(t.value),s.textContent=t.value,L()};const a=document.getElementById("bpCornerType"),r=document.getElementById("bpCornerSize");a.onchange=()=>{w.cornerType=a.value,L()},r.oninput=()=>{w.cornerSize=parseFloat(r.value)||0,L()};const u=document.getElementById("bpHoleType"),y=document.getElementById("bpHoleDia"),c=document.getElementById("slotDimsRow");u.onchange=()=>{w.holeType=u.value,c.style.display=u.value==="slotted"?"flex":"none",L()},y.oninput=()=>{w.holeDiameter=parseFloat(y.value)||12,L()};const h=document.getElementById("bpSlotLen"),$=document.getElementById("bpSlotWid");h&&$&&(h.oninput=()=>{w.slotLength=parseFloat(h.value)||30,L()},$.oninput=()=>{w.slotWidth=parseFloat($.value)||15,L()});const x=document.getElementById("bpCenterType"),m=document.getElementById("centerCutoutDiaGroup"),v=document.getElementById("bpCenterDia"),I=document.getElementById("valCenterDia");x.onchange=()=>{w.centerCutoutType=x.value,m.style.display=x.value==="round"?"block":"none",L()},v&&(v.oninput=()=>{w.centerCutoutDiameter=parseFloat(v.value),I.textContent=v.value,L()}),Yt.querySelectorAll(".preset-pill").forEach(k=>{k.onclick=()=>{const C=parseFloat(k.getAttribute("data-len")),P=parseFloat(k.getAttribute("data-wid"));w.length=C,w.width=P,i.value=C.toString(),t.value=P.toString(),o.textContent=C.toString(),s.textContent=P.toString(),L()}})}function zo(){Yt.innerHTML=`
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
  `;const n=document.getElementById("flangeStandardSelect"),e=document.getElementById("flangePresetSelect"),i=document.getElementById("flangeSpecsBox"),t=s=>{e.innerHTML="";const a=Vt.filter(r=>s==="ALL"||r.standard===s);for(let r=0;r<a.length;r++){const u=a[r],y=document.createElement("option");y.value=u.name,y.textContent=`${u.name} [${u.standard}]`,e.appendChild(y)}e.value=Gt.name,o()},o=()=>{const s=Gt,a=s.units;i.innerHTML=`
      Outer Diameter: <strong>${s.outerDiameter} ${a}</strong> | Inner Bore: <strong>${s.innerBore} ${a}</strong><br>
      PCD: <strong>${s.pitchCircleDiameter} ${a}</strong> | Bolts: <strong>${s.boltCount} × ⌀${s.boltDiameter} ${a}</strong>
    `};n.onchange=()=>{t(n.value)},e.onchange=()=>{const s=Vt.find(a=>a.name===e.value);s&&(Gt=s,Ae(s.units),Ne(),o(),L())},t("ALL")}function jo(){const n=Ct==="inch",e=n?"in":"mm";Yt.innerHTML=`
    <div class="preset-pills-row">
      <button class="preset-pill" data-w="${n?4:100}" data-h="${n?4:100}">100×100</button>
      <button class="preset-pill" data-w="${n?6:150}" data-h="${n?6:150}">150×150</button>
      <button class="preset-pill" data-w="${n?8:200}" data-h="${n?8:200}">200×200</button>
    </div>

    <div class="form-group">
      <label class="form-label">Base Width (${e}): <strong id="valGussetW">${J.baseWidth}</strong></label>
      <input type="range" id="gussetBaseW" min="${n?2:50}" max="${n?24:600}" value="${J.baseWidth}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Height (${e}): <strong id="valGussetH">${J.height}</strong></label>
      <input type="range" id="gussetHeight" min="${n?2:50}" max="${n?24:600}" value="${J.height}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">45° Corner Weld Snipe (Cope)</label>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <input type="checkbox" id="gussetSnipeCheck" ${J.hasWeldSnipe?"checked":""} class="form-checkbox" />
        <span style="font-size: 0.78rem; color: #cbd5e1;">Clear fillet weld bead at corner</span>
      </div>
    </div>

    <div class="form-group" id="snipeSizeGroup" style="${J.hasWeldSnipe?"display: block;":"display: none;"}">
      <label class="form-label">Snipe Size (${e}): <strong id="valSnipeSize">${J.snipeSize}</strong></label>
      <input type="range" id="gussetSnipeSize" min="${n?.25:10}" max="${n?3:75}" value="${J.snipeSize}" class="form-slider" />
    </div>
  `;const i=document.getElementById("gussetBaseW"),t=document.getElementById("gussetHeight"),o=document.getElementById("valGussetW"),s=document.getElementById("valGussetH");i.oninput=()=>{J.baseWidth=parseFloat(i.value),o.textContent=i.value,L()},t.oninput=()=>{J.height=parseFloat(t.value),s.textContent=t.value,L()};const a=document.getElementById("gussetSnipeCheck"),r=document.getElementById("snipeSizeGroup"),u=document.getElementById("gussetSnipeSize"),y=document.getElementById("valSnipeSize");a.onchange=()=>{J.hasWeldSnipe=a.checked,r.style.display=a.checked?"block":"none",L()},u.oninput=()=>{J.snipeSize=parseFloat(u.value),y.textContent=u.value,L()},Yt.querySelectorAll(".preset-pill").forEach(c=>{c.onclick=()=>{const h=parseFloat(c.getAttribute("data-w")),$=parseFloat(c.getAttribute("data-h"));J.baseWidth=h,J.height=$,i.value=h.toString(),t.value=$.toString(),o.textContent=h.toString(),s.textContent=$.toString(),L()}})}function jn(){const n=Ct==="inch",e=n?"in":"mm";Yt.innerHTML=`
    <div class="preset-pills-row" style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.85rem;">
      <button class="preset-pill jali-preset" data-w="${n?36:900}" data-h="${n?84:2100}" data-type="single_swing" data-frame="true" data-kick="true" data-kickh="${n?12:300}" data-pat="islamic_star" data-finish="matte_black">🏠 Main Gate 3×7 ft</button>
      <button class="preset-pill jali-preset" data-w="${n?36:900}" data-h="${n?84:2100}" data-type="double_swing" data-frame="true" data-kick="true" data-kickh="${n?14:350}" data-pat="islamic_star" data-finish="royal_gold">🚪 Double Gate 6×7 ft</button>
      <button class="preset-pill jali-preset" data-w="${n?48:1200}" data-h="${n?36:900}" data-type="single_swing" data-frame="true" data-kick="false" data-kickh="0" data-pat="diamond_lattice" data-finish="matte_black">🪟 Balcony 4×3 ft</button>
      <button class="preset-pill jali-preset" data-w="${n?24:600}" data-h="${n?48:1200}" data-type="wall_panel" data-frame="false" data-kick="false" data-kickh="0" data-pat="floral_mandala" data-finish="royal_gold">⛩️ Mandir 2×4 ft</button>
      <button class="preset-pill jali-preset" data-w="${n?48:1200}" data-h="${n?96:2400}" data-type="wall_panel" data-frame="false" data-kick="false" data-kickh="0" data-pat="voronoi_matrix" data-finish="corten_rust">🏢 Facade 4×8 ft</button>
    </div>

    <div class="form-group">
      <label class="form-label">Panel Width (${e}): <strong id="valJaliW">${B.width}</strong></label>
      <input type="range" id="jaliWidth" min="${n?12:300}" max="${n?60:1500}" value="${B.width}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Panel Height (${e}): <strong id="valJaliH">${B.height}</strong></label>
      <input type="range" id="jaliHeight" min="${n?24:600}" max="${n?120:3e3}" value="${B.height}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Architectural Pattern Style</label>
      <select id="jaliPattern" class="form-select">
        <option value="islamic_star" ${B.patternType==="islamic_star"?"selected":""}>Moroccan / Islamic 8-Star & Octagram</option>
        <option value="floral_mandala" ${B.patternType==="floral_mandala"?"selected":""}>Traditional Lotus / Floral Jaali</option>
        <option value="tree_of_life" ${B.patternType==="tree_of_life"?"selected":""}>Tree of Life / Botanical Foliage</option>
        <option value="diamond_lattice" ${B.patternType==="diamond_lattice"?"selected":""}>Diamond Lattice Grill</option>
        <option value="honeycomb" ${B.patternType==="honeycomb"?"selected":""}>Modern Hexagonal Honeycomb</option>
        <option value="modern_slotted" ${B.patternType==="modern_slotted"?"selected":""}>Staggered Vertical Louvers</option>
        <option value="chevron_herringbone" ${B.patternType==="chevron_herringbone"?"selected":""}>Modern Chevron / Herringbone</option>
        <option value="voronoi_matrix" ${B.patternType==="voronoi_matrix"?"selected":""}>Parametric Organic Voronoi</option>
      </select>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Frame Border Margin (${e})</label>
        <input type="number" id="jaliBorder" class="form-input" value="${B.borderMarginMm}" min="${n?.5:15}" max="${n?4:100}" step="${n?.25:1}" />
      </div>
      <div class="form-group">
        <label class="form-label">Grid Columns</label>
        <input type="number" id="jaliCols" class="form-input" value="${B.gridColumns}" min="2" max="12" />
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Grid Rows</label>
      <input type="number" id="jaliRows" class="form-input" value="${B.gridRows}" min="2" max="20" />
    </div>

    <!-- Gate Structure & Hardware Accessories -->
    <div class="jali-hardware-box">
      <div style="font-size: 0.74rem; font-weight: 700; color: #38bdf8; text-transform: uppercase; margin-bottom: 0.2rem; display: flex; justify-content: space-between;">
        <span>🚪 Gate Structure & Hardware</span>
        <span style="font-size: 0.68rem; color: #94a3b8;">Fabrication Ready</span>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliFrameCheck" class="form-checkbox" ${B.hasFrameTube!==!1?"checked":""} />
          <span>${n?'2" Structural Box Tube Frame':"50mm Structural Box Tube Frame"}</span>
        </label>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliKickCheck" class="form-checkbox" ${B.hasKickPlate?"checked":""} />
          <span>Solid Bottom Kickplate</span>
        </label>
      </div>

      <div id="kickHeightRow" class="form-group" style="margin-top: 0.25rem; display: ${B.hasKickPlate?"block":"none"};">
        <label class="form-label" style="font-size: 0.7rem;">Kickplate Height (${e}): <strong id="valKickH">${B.kickPlateHeightMm||(n?12:300)}</strong></label>
        <input type="range" id="jaliKickHeight" min="${n?6:150}" max="${n?24:600}" value="${B.kickPlateHeightMm||(n?12:300)}" step="${n?.5:10}" class="form-slider" />
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliHandleCheck" class="form-checkbox" ${B.hasPullHandle!==!1?"checked":""} />
          <span>Modern Architectural Bar Pull Handle</span>
        </label>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliLockCheck" class="form-checkbox" ${B.hasLockBox!==!1?"checked":""} />
          <span>Mortise Lock Box & Latch</span>
        </label>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliHingeCheck" class="form-checkbox" ${B.hasHinges!==!1?"checked":""} />
          <span>Heavy-Duty Bullet Barrel Hinges</span>
        </label>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliMountHolesCheck" class="form-checkbox" ${B.hasMountingHoles?"checked":""} />
          <span>Perimeter Mounting Standoff Holes</span>
        </label>
      </div>
    </div>
  `;const i=document.getElementById("jaliWidth"),t=document.getElementById("jaliHeight"),o=document.getElementById("valJaliW"),s=document.getElementById("valJaliH");i.oninput=()=>{B.width=parseFloat(i.value),o.textContent=i.value,L()},t.oninput=()=>{B.height=parseFloat(t.value),s.textContent=t.value,L()};const a=document.getElementById("jaliPattern");a.onchange=()=>{B.patternType=a.value,L()};const r=document.getElementById("jaliBorder"),u=document.getElementById("jaliCols"),y=document.getElementById("jaliRows");r.oninput=()=>{B.borderMarginMm=parseFloat(r.value)||(n?1.5:30),L()},u.oninput=()=>{B.gridColumns=parseInt(u.value,10)||4,L()},y&&(y.oninput=()=>{B.gridRows=parseInt(y.value,10)||6,L()});const c=document.getElementById("jaliFrameCheck");c&&(c.onchange=()=>{B.hasFrameTube=c.checked,L()});const h=document.getElementById("jaliKickCheck"),$=document.getElementById("kickHeightRow"),x=document.getElementById("jaliKickHeight"),m=document.getElementById("valKickH");h&&(h.onchange=()=>{B.hasKickPlate=h.checked,$&&($.style.display=h.checked?"block":"none"),L()}),x&&(x.oninput=()=>{B.kickPlateHeightMm=parseFloat(x.value),m&&(m.textContent=x.value),L()});const v=document.getElementById("jaliHandleCheck");v&&(v.onchange=()=>{B.hasPullHandle=v.checked,L()});const I=document.getElementById("jaliLockCheck");I&&(I.onchange=()=>{B.hasLockBox=I.checked,L()});const k=document.getElementById("jaliHingeCheck");k&&(k.onchange=()=>{B.hasHinges=k.checked,L()});const C=document.getElementById("jaliMountHolesCheck");C&&(C.onchange=()=>{B.hasMountingHoles=C.checked,L()}),Yt.querySelectorAll(".jali-preset").forEach(P=>{P.onclick=()=>{const T=parseFloat(P.getAttribute("data-w")),A=parseFloat(P.getAttribute("data-h")),f=P.getAttribute("data-type"),d=P.getAttribute("data-frame")==="true",b=P.getAttribute("data-kick")==="true",M=parseFloat(P.getAttribute("data-kickh")||"0"),g=P.getAttribute("data-pat"),l=P.getAttribute("data-finish");B.width=T,B.height=A,f&&(B.gateType=f),B.hasFrameTube=d,B.hasKickPlate=b,M&&(B.kickPlateHeightMm=M),g&&(B.patternType=g),l&&(B.finishMaterial=l),jn(),L()}})}function Qo(){const n=Ct==="inch",e=n?"in":"mm";Yt.innerHTML=`
    <div class="form-group">
      <label class="form-label">Base Width (${e}): <strong id="valBrW">${U.baseWidth}</strong></label>
      <input type="range" id="brWidth" min="${n?2:50}" max="${n?16:400}" value="${U.baseWidth}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Height (${e}): <strong id="valBrH">${U.height}</strong></label>
      <input type="range" id="brHeight" min="${n?2:50}" max="${n?16:400}" value="${U.height}" class="form-slider" />
    </div>
  `;const i=document.getElementById("brWidth"),t=document.getElementById("brHeight"),o=document.getElementById("valBrW"),s=document.getElementById("valBrH");i.oninput=()=>{U.baseWidth=parseFloat(i.value),o.textContent=i.value,L()},t.oninput=()=>{U.height=parseFloat(t.value),s.textContent=t.value,L()}}function Yo(){const n=Ct==="inch",e=n?"in":"mm";Yt.innerHTML=`
    <div class="form-group">
      <label class="form-label">Outer Diameter (${e}): <strong id="valDiscOD">${q.outerDiameter}</strong></label>
      <input type="range" id="discOD" min="${n?2:50}" max="${n?24:600}" value="${q.outerDiameter}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Inner Bore Diameter (${e}): <strong id="valDiscID">${q.innerDiameter}</strong></label>
      <input type="range" id="discID" min="0" max="${n?Math.max(.5,q.outerDiameter-.5):Math.max(10,q.outerDiameter-10)}" value="${q.innerDiameter}" step="${n?.1:1}" class="form-slider" />
    </div>
  `;const i=document.getElementById("discOD"),t=document.getElementById("discID"),o=document.getElementById("valDiscOD"),s=document.getElementById("valDiscID");i.oninput=()=>{q.outerDiameter=parseFloat(i.value),o.textContent=i.value,t.max=(n?Math.max(.5,q.outerDiameter-.5):Math.max(10,q.outerDiameter-10)).toString(),L()},t.oninput=()=>{q.innerDiameter=parseFloat(t.value),s.textContent=t.value,L()}}function Ae(n){if(Ct===n)return;const e=Ct;Ct=n,n==="inch"&&e==="mm"?(w.units="inch",w.length=Math.round(w.length/25.4*2)/2||10,w.width=Math.round(w.width/25.4*2)/2||8,w.cornerSize=Math.round(w.cornerSize/25.4*4)/4||.75,w.holeDiameter=Math.round(w.holeDiameter/25.4*16)/16||.75,w.slotLength&&(w.slotLength=Math.round(w.slotLength/25.4*4)/4||1.5),w.slotWidth&&(w.slotWidth=Math.round(w.slotWidth/25.4*16)/16||.75),w.edgeOffsetX=Math.round(w.edgeOffsetX/25.4*4)/4||1.25,w.edgeOffsetY=Math.round(w.edgeOffsetY/25.4*4)/4||1.25,w.centerCutoutDiameter&&(w.centerCutoutDiameter=Math.round(w.centerCutoutDiameter/25.4*2)/2||2.5),w.centerCutoutWidth&&(w.centerCutoutWidth=Math.round(w.centerCutoutWidth/25.4*2)/2||2),w.centerCutoutHeight&&(w.centerCutoutHeight=Math.round(w.centerCutoutHeight/25.4*2)/2||2),J.units="inch",J.baseWidth=Math.round(J.baseWidth/25.4*2)/2||6,J.height=Math.round(J.height/25.4*2)/2||6,J.snipeSize=Math.round(J.snipeSize/25.4*4)/4||1,J.mountingHoleDiameter!==void 0&&(J.mountingHoleDiameter=Math.round(J.mountingHoleDiameter/25.4*16)/16||.5),U.units="inch",U.baseWidth=Math.round(U.baseWidth/25.4*2)/2||5,U.height=Math.round(U.height/25.4*2)/2||5,U.chamferTop=Math.round(U.chamferTop/25.4*2)/2||3,U.chamferRight=Math.round(U.chamferRight/25.4*2)/2||3,U.baseHoleDiameter=Math.round(U.baseHoleDiameter/25.4*16)/16||.375,U.uprightHoleDiameter=Math.round(U.uprightHoleDiameter/25.4*16)/16||.375,U.lighteningHoleDiameter!==void 0&&(U.lighteningHoleDiameter=Math.round(U.lighteningHoleDiameter/25.4*4)/4||1.5),q.units="inch",q.outerDiameter=Math.round(q.outerDiameter/25.4*2)/2||6,q.innerDiameter=Math.round(q.innerDiameter/25.4*2)/2||2,q.pitchCircleDiameter!==void 0&&(q.pitchCircleDiameter=Math.round(q.pitchCircleDiameter/25.4*2)/2||4),q.boltDiameter!==void 0&&(q.boltDiameter=Math.round(q.boltDiameter/25.4*16)/16||.375),B.units="inch",B.width=Math.round(B.width/25.4*2)/2||24,B.height=Math.round(B.height/25.4*2)/2||48,B.borderMarginMm=Math.round(B.borderMarginMm/25.4*4)/4||1.5,B.kickPlateHeightMm&&(B.kickPlateHeightMm=Math.round(B.kickPlateHeightMm/25.4*2)/2||12),B.frameTubeWidthMm=Math.round((B.frameTubeWidthMm||50)/25.4*2)/2||2,B.mountingHoleDiameter=Math.round((B.mountingHoleDiameter||8)/25.4*16)/16||.3125):n==="mm"&&e==="inch"&&(w.units="mm",w.length=Math.abs(w.length*25.4-254)<10?250:Math.round(w.length*25.4),w.width=Math.abs(w.width*25.4-203.2)<10?200:Math.round(w.width*25.4),w.cornerSize=Math.abs(w.cornerSize*25.4-19.05)<3?20:Math.round(w.cornerSize*25.4),w.holeDiameter=Math.abs(w.holeDiameter*25.4-19.05)<3?18:Math.round(w.holeDiameter*25.4),w.slotLength&&(w.slotLength=Math.abs(w.slotLength*25.4-38.1)<5?35:Math.round(w.slotLength*25.4)),w.slotWidth&&(w.slotWidth=Math.abs(w.slotWidth*25.4-19.05)<3?20:Math.round(w.slotWidth*25.4)),w.edgeOffsetX=Math.abs(w.edgeOffsetX*25.4-31.75)<5?35:Math.round(w.edgeOffsetX*25.4),w.edgeOffsetY=Math.abs(w.edgeOffsetY*25.4-31.75)<5?35:Math.round(w.edgeOffsetY*25.4),w.centerCutoutDiameter&&(w.centerCutoutDiameter=Math.abs(w.centerCutoutDiameter*25.4-63.5)<5?60:Math.round(w.centerCutoutDiameter*25.4)),w.centerCutoutWidth&&(w.centerCutoutWidth=Math.round(w.centerCutoutWidth*25.4)),w.centerCutoutHeight&&(w.centerCutoutHeight=Math.round(w.centerCutoutHeight*25.4)),J.units="mm",J.baseWidth=Math.abs(J.baseWidth*25.4-152.4)<10?150:Math.round(J.baseWidth*25.4),J.height=Math.abs(J.height*25.4-152.4)<10?150:Math.round(J.height*25.4),J.snipeSize=Math.abs(J.snipeSize*25.4-25.4)<3?25:Math.round(J.snipeSize*25.4),J.mountingHoleDiameter!==void 0&&(J.mountingHoleDiameter=Math.abs(J.mountingHoleDiameter*25.4-12.7)<3?14:Math.round(J.mountingHoleDiameter*25.4)),U.units="mm",U.baseWidth=Math.abs(U.baseWidth*25.4-127)<10?120:Math.round(U.baseWidth*25.4),U.height=Math.abs(U.height*25.4-127)<10?120:Math.round(U.height*25.4),U.chamferTop=Math.abs(U.chamferTop*25.4-76.2)<10?80:Math.round(U.chamferTop*25.4),U.chamferRight=Math.abs(U.chamferRight*25.4-76.2)<10?80:Math.round(U.chamferRight*25.4),U.baseHoleDiameter=Math.abs(U.baseHoleDiameter*25.4-9.525)<2?10:Math.round(U.baseHoleDiameter*25.4),U.uprightHoleDiameter=Math.abs(U.uprightHoleDiameter*25.4-9.525)<2?10:Math.round(U.uprightHoleDiameter*25.4),U.lighteningHoleDiameter!==void 0&&(U.lighteningHoleDiameter=Math.abs(U.lighteningHoleDiameter*25.4-38.1)<5?35:Math.round(U.lighteningHoleDiameter*25.4)),q.units="mm",q.outerDiameter=Math.abs(q.outerDiameter*25.4-152.4)<10?150:Math.round(q.outerDiameter*25.4),q.innerDiameter=Math.abs(q.innerDiameter*25.4-50.8)<5?50:Math.round(q.innerDiameter*25.4),q.pitchCircleDiameter!==void 0&&(q.pitchCircleDiameter=Math.abs(q.pitchCircleDiameter*25.4-101.6)<5?100:Math.round(q.pitchCircleDiameter*25.4)),q.boltDiameter!==void 0&&(q.boltDiameter=Math.abs(q.boltDiameter*25.4-9.525)<2?10:Math.round(q.boltDiameter*25.4)),B.units="mm",B.width=Math.abs(B.width*25.4-609.6)<20?600:Math.round(B.width*25.4),B.height=Math.abs(B.height*25.4-1219.2)<30?1200:Math.round(B.height*25.4),B.borderMarginMm=Math.abs(B.borderMarginMm*25.4-38.1)<5?35:Math.round(B.borderMarginMm*25.4),B.kickPlateHeightMm&&(B.kickPlateHeightMm=Math.abs(B.kickPlateHeightMm*25.4-304.8)<15?300:Math.round(B.kickPlateHeightMm*25.4)),B.frameTubeWidthMm=Math.abs((B.frameTubeWidthMm||2)*25.4-50.8)<5?50:Math.round((B.frameTubeWidthMm||2)*25.4),B.mountingHoleDiameter=Math.abs((B.mountingHoleDiameter||.3125)*25.4-7.9375)<2?8:Math.round((B.mountingHoleDiameter||.3125)*25.4))}function Ne(){const n=document.getElementById("unitMm"),e=document.getElementById("unitInch");n&&e&&(n.classList.toggle("active",Ct==="mm"),e.classList.toggle("active",Ct==="inch"))}function $e(){const n=N.currency==="USD",e=document.getElementById("adminShopName"),i=document.getElementById("adminGstin"),t=document.getElementById("adminUpiId"),o=document.getElementById("adminMinOrder"),s=document.getElementById("adminSheetLoading"),a=document.getElementById("adminPricePerKg"),r=document.getElementById("adminPricePerMeterCut"),u=document.getElementById("adminPricePerPierce"),y=document.getElementById("adminGstPercent"),c=document.getElementById("adminTaxType");e&&(e.value=N.shopName),i&&(i.value=N.shopGstin||""),t&&(t.value=N.upiId||""),o&&(o.value=N.minimumOrderFee.toString()),s&&(s.value=N.sheetLoadingFee.toString()),c&&(c.value=N.isInterstateSale?"interstate":"intrastate"),n?(a&&(a.value=(Q.pricePerSqInch||.05).toString()),r&&(r.value=(Q.pricePerLinearInchCut||.1).toString())):(a&&(a.value=(Q.pricePerKg||75).toString()),r&&(r.value=(Q.pricePerMeterCut||20).toString())),u&&(u.value=Q.pricePerPierce.toString()),y&&(y.value=N.gstPercent.toString());const h=document.getElementById("activeGaugeBadge");if(h&&j&&Q)if(n){const $=j.id.includes("a36")?"A36":j.id.includes("ss304")?"SS 304":j.id.includes("6061")?"AL 6061":"Steel",x=Q.gaugeName.split("(")[0].trim();h.textContent=`${$} • ${x}`}else{const $=j.id.includes("is2062")?"IS 2062":j.id.includes("ss304")?"SS 304":j.id.includes("aluminum")?"AL 6061":j.name.split(" ")[0],x=Q.gaugeName.replace("Sheet","").replace("Plate","").trim();h.textContent=`${$} • ${x}`}}function Et(n){const e=document.getElementById("toastNotification");e&&(e.textContent=n,e.classList.remove("hidden"),setTimeout(()=>{e.classList.add("hidden")},2500))}function Ko(n,e){if(n.length===0)return{x:0,y:0};if(e<=0){const a=n[0];return a.type==="line"?a.start:{x:a.center.x+a.radius*Math.cos(a.startAngle),y:a.center.y+a.radius*Math.sin(a.startAngle)}}if(e>=1){const a=n[n.length-1];return a.type==="line"?a.end:{x:a.center.x+a.radius*Math.cos(a.endAngle),y:a.center.y+a.radius*Math.sin(a.endAngle)}}const i=n.map(a=>{if(a.type==="line")return Math.sqrt((a.end.x-a.start.x)**2+(a.end.y-a.start.y)**2);{let r=a.counterClockwise?a.endAngle-a.startAngle:a.startAngle-a.endAngle;for(;r<0;)r+=2*Math.PI;for(;r>2*Math.PI;)r-=2*Math.PI;return a.radius*r}}),t=i.reduce((a,r)=>a+r,0),o=e*t;let s=0;for(let a=0;a<n.length;a++){const r=n[a],u=i[a];if(s+u>=o||a===n.length-1){const y=u>0?(o-s)/u:0;if(r.type==="line")return{x:r.start.x+(r.end.x-r.start.x)*y,y:r.start.y+(r.end.y-r.start.y)*y};{let c=r.counterClockwise?r.endAngle-r.startAngle:r.startAngle-r.endAngle;for(;c<0;)c+=2*Math.PI;for(;c>2*Math.PI;)c-=2*Math.PI;const h=r.counterClockwise?r.startAngle+c*y:r.startAngle-c*y;return{x:r.center.x+r.radius*Math.cos(h),y:r.center.y+r.radius*Math.sin(h)}}}s+=u}return{x:0,y:0}}function Xo(){var r,u,y,c,h,$;if(me){un();return}te="part",(r=document.getElementById("btnViewPart"))==null||r.classList.add("active"),(u=document.getElementById("btnViewNesting"))==null||u.classList.remove("active"),ut==="jali"&&Tt==="realistic_gate"&&(Tt="cam_toolpath",(y=document.getElementById("btnJaliViewRealistic"))==null||y.classList.remove("active"),(c=document.getElementById("btnJaliViewCam"))==null||c.classList.add("active"),(h=document.getElementById("camLegendBar"))==null||h.classList.remove("hidden"),($=document.getElementById("archLegendBar"))==null||$.classList.add("hidden"));const n=Wt();if(Zt=Gn(n),Zt.length===0)return;me=!0,fe=0;const e=document.getElementById("simSpeedSelect");le=parseFloat((e==null?void 0:e.value)||"1")||1;const i=document.getElementById("simHudOverlay");i&&i.classList.remove("hidden");const t=document.getElementById("btnSimulateCut");t&&(t.textContent="⏸ Pause",t.classList.add("simulating"));const o=Zt.reduce((x,m)=>x+m.simulatedDurationSec,0)/le;let s=performance.now();function a(x){if(!me)return;const m=Zt[fe];if(!m){Jo();return}const v=(x-s)/1e3*le,I=.5,k=v<I;let C=0;if(!k){const D=Math.max(.01,m.simulatedDurationSec-I);C=Math.min(1,(v-I)/D)}let P=m.piercePoint;!k&&m.segments.length>0&&(P=Ko(m.segments,C)),dt.innerHTML=Re(n,{showCutOrder:Lt,dfmIssues:Qt==null?void 0:Qt.issues,highlightedHoleIndex:Ce,simulationState:{activeStepIndex:m.stepIndex,nozzlePos:P,isPiercing:k,progressRatio:C}}),Pt();const T=document.getElementById("simStatusText"),A=document.getElementById("simProgressBar"),f=document.getElementById("simStepText"),d=document.getElementById("simTimeText");T&&(T.innerHTML=k?`<span style="color:#ef4444; font-weight:700;">🔥 PIERCING</span> ${m.label} (${m.layerName})`:`<span style="color:#22c55e; font-weight:700;">⚡ CUTTING</span> ${m.label} (${Math.round(C*100)}%)`);const b=Zt.reduce((D,O)=>D+O.simulatedDurationSec,0),M=Zt.slice(0,fe).reduce((D,O)=>D+O.simulatedDurationSec,0),g=Math.min(m.simulatedDurationSec,v),l=b>0?(M+g)/b:0;if(A&&(A.style.width=`${Math.min(100,Math.round(l*100))}%`),f&&(f.textContent=`Step ${fe+1} of ${Zt.length}`),d){const D=Math.min(o,(M+g)/le);d.textContent=`${D.toFixed(1)}s / ${o.toFixed(1)}s (${le}x)`}const p=m.simulatedDurationSec;(v>=p||!k&&C>=1)&&(fe++,s=performance.now()),xe=requestAnimationFrame(a)}s=performance.now(),xe=requestAnimationFrame(a)}function un(){me=!1,xe&&(cancelAnimationFrame(xe),xe=null);const n=document.getElementById("simHudOverlay");n&&n.classList.add("hidden");const e=document.getElementById("btnSimulateCut");e&&(e.textContent="▶ Simulate Cut Order",e.classList.remove("simulating")),L()}function Jo(){const n=document.getElementById("simStatusText"),e=document.getElementById("simProgressBar");n&&(n.innerHTML='<span style="color:#38bdf8; font-weight:700;">✅ SIMULATION COMPLETE:</span> Inner Cutouts Cut First, Outer Contour Cut Last'),e&&(e.style.width="100%");const i=Wt();dt.innerHTML=Re(i,{showCutOrder:Lt,dfmIssues:Qt==null?void 0:Qt.issues,highlightedHoleIndex:Ce,simulationState:{activeStepIndex:Zt.length+1,isPiercing:!1}}),Pt(),setTimeout(()=>{un()},2200)}function on(){var t,o,s;const n=((t=document.getElementById("cartProjectName"))==null?void 0:t.value.trim())||"Custom Assembly Project",e=((o=document.getElementById("cartCustomerName"))==null?void 0:o.value.trim())||"Valued Customer",i=((s=document.getElementById("cartCustomerPhone"))==null?void 0:s.value.trim())||"";return{id:`PRJ-${Date.now().toString().slice(-6)}`,projectName:n,customerName:e,customerPhone:i,items:lt,selectedSheetSize:wt,shopSettings:N,allowRotation:!0}}function jt(){const n=document.getElementById("cartItemsList"),e=document.getElementById("cartBadge"),i=document.getElementById("nestCartCount"),t=document.getElementById("cartSummaryBox"),o=document.getElementById("shareCartWhatsAppBtn"),s=document.getElementById("printCartInvoiceBtn"),a=document.getElementById("printCartJobCardBtn");if(e&&(e.textContent=lt.length.toString(),e.style.display=lt.length>0?"inline-block":"none"),i&&(i.textContent=lt.length.toString()),!n)return;if(lt.length===0){n.innerHTML=`
      <div class="empty-cart-state">
        <span class="empty-icon">🛒</span>
        <h4>Your RFQ Cart is Empty</h4>
        <p>Configure parametric parts or upload DXFs, then click <strong>"➕ Add Part to RFQ Cart"</strong> to assemble multi-part project orders with combined nesting.</p>
      </div>
    `,t&&t.classList.add("hidden"),o&&(o.disabled=!0),s&&(s.disabled=!0),a&&(a.disabled=!0);return}t&&t.classList.remove("hidden"),o&&(o.disabled=!1),s&&(s.disabled=!1),a&&(a.disabled=!1);const r=ke(lt,N,wt);Ee=r,n.innerHTML="",lt.forEach((d,b)=>{const M=document.createElement("div");M.className="cart-item-card";const g=N.currency==="INR"?"₹":"$",l=(d.unitQuote.finalUnitPrice*d.quantity).toFixed(2);M.innerHTML=`
      <div class="cart-item-header">
        <div class="cart-item-info">
          <span class="cart-item-num">#${b+1}</span>
          <span class="cart-item-name">${d.partGeometry.name}</span>
          <span class="cart-item-badge">${d.materialName} (${d.gaugeThicknessMm}mm)</span>
        </div>
        <button class="cart-item-del-btn" data-id="${d.id}" title="Remove part">✕</button>
      </div>
      <div class="cart-item-specs">
        <span>Dim: ${N.currency==="USD"?(d.partGeometry.boundingBox.width/(d.partGeometry.units==="inch"?1:25.4)).toFixed(1)+"×"+(d.partGeometry.boundingBox.height/(d.partGeometry.units==="inch"?1:25.4)).toFixed(1)+'"':d.partGeometry.boundingBox.width.toFixed(0)+"×"+d.partGeometry.boundingBox.height.toFixed(0)+"mm"}</span>
        <span>Cut: ${N.currency==="USD"?d.metrics.totalCutLengthInches.toFixed(1)+"in":(d.metrics.totalCutLengthMm/1e3).toFixed(2)+"m"}</span>
        <span>Pierces: ${d.metrics.pierceCount}</span>
        <span>Wt: ${N.currency==="USD"?(d.metrics.theoreticalWeightLbs*d.quantity).toFixed(2)+"lbs":(d.metrics.theoreticalWeightKg*d.quantity).toFixed(2)+"kg"}</span>
      </div>
      <div class="cart-item-controls">
        <div class="cart-qty-stepper">
          <button class="cart-qty-btn btn-cart-minus" data-id="${d.id}">-</button>
          <input type="number" class="cart-qty-input" data-id="${d.id}" value="${d.quantity}" min="1" max="9999" />
          <button class="cart-qty-btn btn-cart-plus" data-id="${d.id}">+</button>
        </div>
        <div class="cart-item-pricing">
          <span class="cart-unit-rate">(${g}${d.unitQuote.finalUnitPrice.toFixed(2)} / pc)</span>
          <span class="cart-item-total">${g}${l}</span>
        </div>
      </div>
    `,n.appendChild(M)}),n.querySelectorAll(".cart-item-del-btn").forEach(d=>{d.onclick=b=>{const M=b.currentTarget.getAttribute("data-id");lt=lt.filter(g=>g.id!==M),jt(),Rt==="cart"&&L(),Et("🗑️ Part removed from cart")}}),n.querySelectorAll(".btn-cart-minus").forEach(d=>{d.onclick=b=>{const M=b.currentTarget.getAttribute("data-id"),g=lt.find(l=>l.id===M);g&&g.quantity>1&&(g.quantity--,g.unitQuote=Jt(g.metrics,Q,g.quantity,N,g.secondaryOps),g.totalPrice=g.unitQuote.finalOrderTotal,jt(),Rt==="cart"&&L())}}),n.querySelectorAll(".btn-cart-plus").forEach(d=>{d.onclick=b=>{const M=b.currentTarget.getAttribute("data-id"),g=lt.find(l=>l.id===M);g&&(g.quantity++,g.unitQuote=Jt(g.metrics,Q,g.quantity,N,g.secondaryOps),g.totalPrice=g.unitQuote.finalOrderTotal,jt(),Rt==="cart"&&L())}}),n.querySelectorAll(".cart-qty-input").forEach(d=>{d.onchange=b=>{const M=b.target,g=M.getAttribute("data-id"),l=Math.max(1,parseInt(M.value,10)||1),p=lt.find(D=>D.id===g);p&&(p.quantity=l,p.unitQuote=Jt(p.metrics,Q,p.quantity,N,p.secondaryOps),p.totalPrice=p.unitQuote.finalOrderTotal,jt(),Rt==="cart"&&L())}});const u=N.currency==="USD",y=u?"$":"₹",c=document.getElementById("cartTotalParts"),h=document.getElementById("cartTotalCut"),$=document.getElementById("cartTotalPierces"),x=document.getElementById("cartTotalMass"),m=document.getElementById("cartNestingText"),v=document.getElementById("cartCostMaterial"),I=document.getElementById("cartCostCut"),k=document.getElementById("cartCostPierce"),C=document.getElementById("cartCostSecondary"),P=document.getElementById("cartCostDiscount"),T=document.getElementById("cartGstLabel"),A=document.getElementById("cartCostGst"),f=document.getElementById("cartTotalIncGst");if(c&&(c.textContent=`${r.totalPartsCount} pcs`),h&&(h.textContent=u?`${(r.totalCutLengthMeters*39.3701).toFixed(1)} in`:`${r.totalCutLengthMeters.toFixed(1)} m`),$&&($.textContent=r.totalPierces.toString()),x&&(x.textContent=u?`${(r.totalNetPartMassKg*2.20462).toFixed(1)} lbs`:`${r.totalNetPartMassKg.toFixed(2)} kg`),m){const d=r.nestingResult.sheetsRequired;m.textContent=`Nesting: ${d} Sheet${d>1?"s":""} of ${wt.name} (${r.nestingResult.sheetUtilizationPercent}% util)`}v&&(v.textContent=`${y}${r.totalMaterialCost.toFixed(2)}`),I&&(I.textContent=`${y}${r.totalCutCost.toFixed(2)}`),k&&(k.textContent=`${y}${r.totalPierceCost.toFixed(2)}`),C&&(C.textContent=`${y}${r.totalSecondaryCost.toFixed(2)}`),P&&(P.textContent=`-${r.volumeDiscountPercent}% (${y}${r.discountAmount.toFixed(2)})`),T&&(T.textContent=u?`Sales Tax (${N.gstPercent||0}%):`:N.isInterstateSale?"IGST (18%):":"GST (CGST 9% + SGST 9%):"),A&&(A.textContent=`${y}${r.gstAmount.toFixed(2)}`),f&&(f.textContent=`${y}${r.finalTotalWithGst.toFixed(2)}`)}function Vo(){const n=document.getElementById("btnCurrencyINR"),e=document.getElementById("btnCurrencyUSD");n&&(n.onclick=()=>an("INR")),e&&(e.onclick=()=>an("USD"));const i=document.getElementById("modeJobWork"),t=document.getElementById("modeWithMaterial"),o=document.getElementById("modeSqFtJali"),s=S=>{N.indianQuotingMode=S,[i,t,o].forEach(_=>_==null?void 0:_.classList.remove("active")),S==="job_work"&&(i==null||i.classList.add("active")),S==="with_material"&&(t==null||t.classList.add("active")),S==="sqft_jali"&&(o==null||o.classList.add("active")),L()};i&&(i.onclick=()=>s("job_work")),t&&(t.onclick=()=>s("with_material")),o&&(o.onclick=()=>s("sqft_jali"));const a=document.getElementById("btnViewPart"),r=document.getElementById("btnViewNesting");a&&r&&(a.onclick=()=>{te="part",a.classList.add("active"),r.classList.remove("active"),ye(),L()},r.onclick=()=>{te="nesting",r.classList.add("active"),a.classList.remove("active"),ye(),L()});const u=document.getElementById("btnJaliViewRealistic"),y=document.getElementById("btnJaliViewCam");u&&y&&(u.onclick=()=>{Tt="realistic_gate",L()},y.onclick=()=>{Tt="cam_toolpath",L()}),document.querySelectorAll(".finish-swatch").forEach(S=>{S.onclick=()=>{const _=S.getAttribute("data-finish");_&&(B.finishMaterial=_,L())}}),document.querySelectorAll(".backlight-pill").forEach(S=>{S.onclick=()=>{const _=S.getAttribute("data-backlight");_&&(B.backlightColor=_,L())}}),document.querySelectorAll(".gate-type-btn").forEach(S=>{S.onclick=()=>{const _=S.getAttribute("data-gatetype");_&&(B.gateType=_,ue(),L())}});const c=document.getElementById("btnFoldGateToolbar"),h=document.getElementById("btnExpandGateToolbar"),$=document.getElementById("gateFoldedBar");c&&(c.onclick=S=>{S.stopPropagation(),Le=!0,oe(),Pt()}),h&&(h.onclick=S=>{S.stopPropagation(),Le=!1,oe(),Pt()}),$&&($.onclick=()=>{Le=!1,oe(),Pt()});const x=document.getElementById("btnFoldBottomHud"),m=document.getElementById("btnExpandBottomHud"),v=document.getElementById("bottomHudFoldedBar");x&&(x.onclick=S=>{S.stopPropagation(),Te=!0,oe(),Pt()}),m&&(m.onclick=S=>{S.stopPropagation(),Te=!1,oe(),Pt()}),v&&(v.onclick=()=>{Te=!1,oe(),Pt()}),Be&&(Be.value=N.assistGas,Be.onchange=()=>{N.assistGas=Be.value,L()}),se&&(se.onchange=()=>{const _=(N.currency==="USD"?He:pe).find(X=>X.id===se.value);_&&(wt=_),L()});const I=document.getElementById("toggleSecOpsBtn"),k=document.getElementById("secOpsContent"),C=document.getElementById("secOpsChevron");I&&k&&(I.onclick=()=>{k.classList.toggle("hidden"),C&&(C.textContent=k.classList.contains("hidden")?"▶":"▼")});const P=document.getElementById("secBendsCount"),T=document.getElementById("secTapsCount"),A=document.getElementById("secDeburringCheck"),f=document.getElementById("secSurfaceFinish");P&&(P.oninput=()=>{Ht.bendingBendsCount=parseInt(P.value,10)||0,L()}),T&&(T.oninput=()=>{Ht.tappingHolesCount=parseInt(T.value,10)||0,L()}),A&&(A.onchange=()=>{Ht.deburringEnabled=A.checked,L()}),f&&(f.onchange=()=>{Ht.surfaceFinish=f.value,L()}),document.querySelectorAll(".shape-btn").forEach(S=>{S.onclick=()=>{var _,X,st,at;document.querySelectorAll(".shape-btn").forEach(ct=>ct.classList.remove("active")),S.classList.add("active"),ut=S.getAttribute("data-shape"),ce=!1,ut==="jali"?(s("sqft_jali"),Tt="realistic_gate",Lt=!1,(_=document.getElementById("btnToggleCamBadges"))==null||_.classList.remove("active"),(X=document.getElementById("legendBadgeToggle"))==null||X.classList.remove("active")):(Lt=!0,(st=document.getElementById("btnToggleCamBadges"))==null||st.classList.add("active"),(at=document.getElementById("legendBadgeToggle"))==null||at.classList.add("active")),ue(),ye(),L()}}),be.onchange=()=>{const S=zt.find(_=>_.id===be.value);S&&(j=S,zn(),$e(),L())},de.onchange=()=>{const S=parseInt(de.value,10);Q=j.gauges[S],$e(),L()};const d=document.getElementById("partQuantity"),b=document.getElementById("qtyMinus"),M=document.getElementById("qtyPlus");d.oninput=()=>{It=Math.max(1,parseInt(d.value,10)||1),L()},b.onclick=()=>{It=Math.max(1,It-1),d.value=It.toString(),L()},M.onclick=()=>{It++,d.value=It.toString(),L()};const g=document.getElementById("addToCartBtn");g&&(g.onclick=()=>{const S=Wt(),_=ne(S,Q.thicknessMm,j.densityGPerCm3),X=Jt(_,Q,It,N,Ht),st={id:`item_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,partGeometry:JSON.parse(JSON.stringify(S)),materialId:j.id,materialName:j.name,gaugeThicknessMm:Q.thicknessMm,quantity:It,secondaryOps:{...Ht},metrics:_,unitQuote:X,totalPrice:X.finalOrderTotal,color:["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"][lt.length%6],createdAt:Date.now()};lt.push(st),jt(),Et(`➕ Added ${It}× "${st.partGeometry.name}" to RFQ Cart!`);const at=document.getElementById("tabCart");at&&(at.classList.add("pulse"),setTimeout(()=>at.classList.remove("pulse"),1200))});const l=document.getElementById("btnSimulateCut"),p=document.getElementById("btnStopSim"),D=document.getElementById("btnToggleCamBadges"),O=document.getElementById("simSpeedSelect");l&&(l.onclick=()=>{Xo()}),p&&(p.onclick=()=>{un()});const G=document.getElementById("legendBadgeToggle"),W=()=>{Lt=!Lt,D==null||D.classList.toggle("active",Lt),G==null||G.classList.toggle("active",Lt),L()};D&&(D.onclick=W),G&&(G.onclick=W),O&&(O.onchange=()=>{le=parseFloat(O.value)||1});const F=document.getElementById("btnPrevSheet"),E=document.getElementById("btnNextSheet"),H=document.getElementById("btnNestSourceSingle"),R=document.getElementById("btnNestSourceCart"),V=document.getElementById("btnNestCartOnBed");F&&(F.onclick=()=>{Bt>0&&(Bt--,L())}),E&&(E.onclick=()=>{sn&&Bt<sn.sheetsRequired-1&&(Bt++,L())}),H&&R&&(H.onclick=()=>{Rt="single",H.classList.add("active"),R.classList.remove("active"),Bt=0,L()},R.onclick=()=>{if(lt.length===0){Et("⚠️ RFQ Cart is empty. Add parts first.");return}Rt="cart",R.classList.add("active"),H.classList.remove("active"),Bt=0,L()}),V&&(V.onclick=()=>{var S,_;if(lt.length===0){Et("⚠️ RFQ Cart is empty. Add parts first.");return}Rt="cart",te="nesting",(S=document.getElementById("btnViewNesting"))==null||S.classList.add("active"),(_=document.getElementById("btnViewPart"))==null||_.classList.remove("active"),R==null||R.classList.add("active"),H==null||H.classList.remove("active"),Bt=0,L()});const Y=document.getElementById("clearCartBtn");Y&&(Y.onclick=()=>{lt.length>0&&confirm("Clear all items from your RFQ Cart?")&&(lt=[],jt(),Rt==="cart"&&(Rt="single",H==null||H.classList.add("active"),R==null||R.classList.remove("active"),L()),Et("🛒 RFQ Cart cleared"))});const yt=document.getElementById("shareCartWhatsAppBtn");yt&&(yt.onclick=()=>{if(lt.length===0)return;const S=on(),_=Ee||ke(lt,N,wt);if(N.currency==="USD"){const X=yo(S,_,S.customerName);if(navigator.clipboard.writeText(X).then(()=>{Et("✉️ Project Quotation copied to clipboard! (Ready for email)")}).catch(()=>{Et("Quotation copied.")}),S.customerPhone&&S.customerPhone.includes("@")){const st=encodeURIComponent(`Quotation: ${S.projectName||"Laser Project RFQ"} — ${N.shopName}`),at=encodeURIComponent(X);window.open(`mailto:${S.customerPhone}?subject=${st}&body=${at}`,"_blank")}}else{const X=mo(S,_),st=N.currency==="INR"?"91":"1",at=Sn(X,S.customerPhone,st);window.open(at,"_blank")}});const vt=document.getElementById("printCartInvoiceBtn");vt&&(vt.onclick=()=>{if(lt.length===0)return;const S=on(),_=Ee||ke(lt,N,wt),X=Io(S,_),st=document.getElementById("docModal"),at=document.getElementById("docModalTitle"),ct=document.getElementById("docFrame");at.textContent=N.currency==="USD"?`Project Quotation — ${S.projectName}`:`Project Tax Invoice — ${S.projectName} (with UPI QR)`,st.classList.remove("hidden"),ct.srcdoc=X});const ot=document.getElementById("printCartJobCardBtn");ot&&(ot.onclick=()=>{if(lt.length===0)return;const S=on(),_=Ee||ke(lt,N,wt),X=vo(S,_),st=document.getElementById("docModal"),at=document.getElementById("docModalTitle"),ct=document.getElementById("docFrame");at.textContent=`Batch Job Card — ${S.projectName}`,st.classList.remove("hidden"),ct.srcdoc=X});const Z=document.getElementById("shareWhatsAppBtn"),it=document.getElementById("customerPhoneInput");Z&&(Z.onclick=()=>{const S=Wt(),_=ne(S,Q.thicknessMm,j.densityGPerCm3),X=Jt(_,Q,It,N,Ht),st=it?it.value.trim():"";if(N.currency==="USD"){const at=Pn(S.name,_,j.name,Q,X,N.shopName,N,"Valued Customer");if(navigator.clipboard.writeText(at).then(()=>{Et("✉️ Manufacturing Quotation copied to clipboard! (Ready for email)")}).catch(()=>{Et("Quotation copied.")}),st.includes("@")){const ct=encodeURIComponent(`Quotation: ${S.name} — ${N.shopName}`),Xt=encodeURIComponent(at);window.open(`mailto:${st}?subject=${ct}&body=${Xt}`,"_blank")}}else{const at=vn(S.name,_,j.name,Q,X,N.shopName,N),ct=N.currency==="INR"?"91":"1",Xt=Sn(at,st,ct);window.open(Xt,"_blank")}});const et=document.getElementById("docModal"),tt=document.getElementById("docModalTitle"),z=document.getElementById("docFrame"),xt=document.getElementById("closeDocModalBtn");xt.onclick=()=>et.classList.add("hidden"),So();const bt=document.getElementById("printInvoiceBtn");bt&&(bt.onclick=()=>{const S=Wt(),_=ne(S,Q.thicknessMm,j.densityGPerCm3),X=Jt(_,Q,It,N,Ht),st=it?it.value:"",at=Co(S,_,j.name,Q,X,N,"Walk-in Customer",st);tt.textContent=N.currency==="USD"?"Manufacturing Quotation Preview":"Proforma Invoice Preview (with UPI QR)",et.classList.remove("hidden"),z.srcdoc=at});const mt=document.getElementById("jobCardBtn");mt&&(mt.onclick=()=>{const S=Wt(),_=ne(S,Q.thicknessMm,j.densityGPerCm3),X=Mo(S,_,j.name,Q,It,N);tt.textContent="Laser Machine Operator Job Card",et.classList.remove("hidden"),z.srcdoc=X}),document.getElementById("downloadDxfBtn").onclick=()=>{const S=Wt(),_=ge.find(Xt=>Xt.id===N.selectedCAMProfileId)||ge[0],X=io(S,_),st=new Blob([X],{type:"application/dxf"}),at=URL.createObjectURL(st),ct=document.createElement("a");ct.href=at,ct.download=`${S.name.toLowerCase().replace(/[\s\/\(\)]+/g,"_")}_${_.id}.dxf`,document.body.appendChild(ct),ct.click(),document.body.removeChild(ct),URL.revokeObjectURL(at)};const ht=document.getElementById("copyQuoteBtn"),gt=document.getElementById("toastNotification");ht&&(ht.onclick=async()=>{const S=Wt(),_=ne(S,Q.thicknessMm,j.densityGPerCm3),X=Jt(_,Q,It,N,Ht),st=N.currency==="USD"?Pn(S.name,_,j.name,Q,X,N.shopName,N,"Valued Customer"):vn(S.name,_,j.name,Q,X,N.shopName,N);try{await navigator.clipboard.writeText(st),gt&&(gt.textContent=N.currency==="USD"?"📋 Email Quotation copied to clipboard!":"📋 Quotation copied to clipboard!",gt.classList.remove("hidden"),setTimeout(()=>{gt.classList.add("hidden")},2200))}catch{alert("Quotation copied to clipboard.")}});const ft=document.getElementById("dropzone"),K=document.getElementById("dxfFileInput"),At=document.getElementById("tabParametric"),Kt=document.getElementById("tabUpload"),ae=document.getElementById("parametricContainer"),Nt=document.getElementById("uploadContainer");At.onclick=()=>{At.classList.add("active"),Kt.classList.remove("active"),ae.classList.remove("hidden"),Nt.classList.add("hidden"),ce=!1,L()},Kt.onclick=()=>{Kt.classList.add("active"),At.classList.remove("active"),Nt.classList.remove("hidden"),ae.classList.add("hidden"),ce=!0,ie&&L()},ft.onclick=()=>K.click(),K.onchange=S=>{var X;const _=(X=S.target.files)==null?void 0:X[0];_&&Ot(_)},ft.ondragover=S=>{S.preventDefault(),ft.classList.add("dragover")},ft.ondragleave=()=>ft.classList.remove("dragover"),ft.ondrop=S=>{var X;S.preventDefault(),ft.classList.remove("dragover");const _=(X=S.dataTransfer)==null?void 0:X.files[0];_&&Ot(_)};function Ot(S){const _=new FileReader;_.onload=X=>{var at;const st=(at=X.target)==null?void 0:at.result;try{const ct=Nn(st),Xt=S.name.replace(/\.[^/.]+$/,"");if(ct.length>1){ie=ct[0],ie.name=`${Xt}_Part1`,ce=!0;const Qe=document.getElementById("uploadFileInfo"),Ye=document.getElementById("loadedFileName");Ye.textContent=`${S.name} (${ct.length} distinct parts detected)`,Qe.classList.remove("hidden"),confirm(`Detected ${ct.length} distinct outer parts in "${S.name}". Would you like to add all ${ct.length} parts into your RFQ Cart?`)&&(ct.forEach((Ke,Xe)=>{Ke.name=`${Xt}_Part${Xe+1}`;const xn=ne(Ke,Q.thicknessMm,j.densityGPerCm3),bn=Jt(xn,Q,1,N,Ht);lt.push({id:`item_dxf_${Date.now()}_${Xe}`,partGeometry:Ke,materialId:j.id,materialName:j.name,gaugeThicknessMm:Q.thicknessMm,quantity:1,secondaryOps:{...Ht},metrics:xn,unitQuote:bn,totalPrice:bn.finalOrderTotal,color:["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"][(lt.length+Xe)%6],createdAt:Date.now()})}),jt(),Et(`✅ Added ${ct.length} parts from DXF to RFQ Cart!`))}else{ie=ct[0]||ro(st),ie.name=Xt,ce=!0;const Qe=document.getElementById("uploadFileInfo"),Ye=document.getElementById("loadedFileName");Ye.textContent=S.name,Qe.classList.remove("hidden")}L()}catch(ct){console.error(ct),alert("Failed to parse DXF file. Please ensure it is an ASCII AutoCAD DXF.")}},_.readAsText(S)}const ee=document.getElementById("tabQuote"),pt=document.getElementById("tabCart"),kt=document.getElementById("tabAdmin"),Dt=document.getElementById("quoteView"),nt=document.getElementById("cartView"),rt=document.getElementById("adminView");ee.onclick=()=>{ee.classList.add("active"),pt.classList.remove("active"),kt.classList.remove("active"),Dt.classList.remove("hidden"),nt.classList.add("hidden"),rt.classList.add("hidden")},pt.onclick=()=>{pt.classList.add("active"),ee.classList.remove("active"),kt.classList.remove("active"),nt.classList.remove("hidden"),Dt.classList.add("hidden"),rt.classList.add("hidden"),jt()},kt.onclick=()=>{kt.classList.add("active"),ee.classList.remove("active"),pt.classList.remove("active"),rt.classList.remove("hidden"),Dt.classList.add("hidden"),nt.classList.add("hidden")};const Mt=document.getElementById("adminShopName"),$t=document.getElementById("adminGstin"),qt=document.getElementById("adminUpiId"),St=document.getElementById("adminMinOrder"),Oe=document.getElementById("adminSheetLoading"),Ge=document.getElementById("adminPricePerKg"),We=document.getElementById("adminPricePerMeterCut"),Ue=document.getElementById("adminPricePerPierce"),ze=document.getElementById("adminGstPercent"),je=document.getElementById("adminTaxType");Mt&&(Mt.oninput=()=>{N.shopName=Mt.value.trim()||"My CNC Shop",Tn&&(Tn.textContent=N.shopName),Ut(),L()}),$t&&($t.oninput=()=>{N.shopGstin=$t.value.trim(),Ut()}),qt&&(qt.oninput=()=>{N.upiId=qt.value.trim(),Ut()}),St&&(St.oninput=()=>{N.minimumOrderFee=parseFloat(St.value)||0,Ut(),L()}),Oe&&(Oe.oninput=()=>{N.sheetLoadingFee=parseFloat(Oe.value)||0,Ut(),L()}),je&&(je.onchange=()=>{N.isInterstateSale=je.value==="interstate",Ut(),L()}),Ge&&(Ge.oninput=()=>{const S=parseFloat(Ge.value)||0;N.currency==="USD"?Q.pricePerSqInch=S:Q.pricePerKg=S,Ut(),L()}),We&&(We.oninput=()=>{const S=parseFloat(We.value)||0;N.currency==="USD"?Q.pricePerLinearInchCut=S:Q.pricePerMeterCut=S,Ut(),L()}),Ue&&(Ue.oninput=()=>{Q.pricePerPierce=parseFloat(Ue.value)||0,Ut(),L()}),ze&&(ze.oninput=()=>{N.gstPercent=parseFloat(ze.value)||0,Ut(),L()});const mn=document.getElementById("resetRatesBtn");mn&&(mn.onclick=()=>{confirm("Reset shop rates to factory benchmarks?")&&(fo(N.currency),N.currency==="USD"?(N={...Me},zt=JSON.parse(JSON.stringify(cn)),j=zt[0],Q=j.gauges[3]||j.gauges[0]):(N={..._e},zt=JSON.parse(JSON.stringify(Hn)),j=zt[0],Q=j.gauges[4]||j.gauges[0]),Un(),$e(),L())});const Qn=document.getElementById("unitMm"),Yn=document.getElementById("unitInch");Qn.onclick=()=>{Ae("mm"),Ne(),ue(),L()},Yn.onclick=()=>{Ae("inch"),Ne(),ue(),L()},dt.addEventListener("wheel",S=>{S.preventDefault();const _=S.deltaY<0?1.15:.87,X=Math.min(6,Math.max(.4,_t*_)),st=dt.getBoundingClientRect(),at=S.clientX-st.left-st.width/2,ct=S.clientY-st.top-st.height/2;Ft.x=at-(at-Ft.x)*(X/_t),Ft.y=ct-(ct-Ft.y)*(X/_t),_t=X,Pt()},{passive:!1}),dt.addEventListener("pointerdown",S=>{(S.button===0||S.button===1)&&(we=!0,en={x:S.clientX-Ft.x,y:S.clientY-Ft.y},dt.classList.add("is-dragging"),dt.setPointerCapture(S.pointerId))}),dt.addEventListener("pointermove",S=>{we&&(Ft.x=S.clientX-en.x,Ft.y=S.clientY-en.y,Pt())});const hn=S=>{if(we){we=!1,dt.classList.remove("is-dragging");try{dt.releasePointerCapture(S.pointerId)}catch{}}};dt.addEventListener("pointerup",hn),dt.addEventListener("pointercancel",hn),dt.addEventListener("dblclick",()=>{ye()});const gn=document.getElementById("btnZoomIn"),pn=document.getElementById("btnZoomOut"),fn=document.getElementById("btnZoomFit");gn&&(gn.onclick=()=>{_t=Math.min(6,_t*1.25),Pt()}),pn&&(pn.onclick=()=>{_t=Math.max(.4,_t/1.25),Pt()}),fn&&(fn.onclick=()=>{ye()});const yn=document.getElementById("btnExportImage");yn&&(yn.onclick=()=>{qo()})}function qo(){const n=dt.querySelector("svg");if(!n){Et("⚠️ No design found to export");return}try{const e=n.cloneNode(!0);e.style.transform="";const i=e.getAttribute("viewBox");let t=1600,o=1200;if(i){const c=i.split(/[\s,]+/).map(Number);if(c.length===4&&c[2]>0&&c[3]>0){const h=c[2]/c[3];h>=1?(t=2400,o=Math.round(2400/h)):(o=2400,t=Math.round(2400*h))}}e.setAttribute("width",t.toString()),e.setAttribute("height",o.toString());const s=new XMLSerializer().serializeToString(e),a=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,u=r.createObjectURL(a),y=new Image;y.onload=()=>{const c=document.createElement("canvas");c.width=t,c.height=o;const h=c.getContext("2d");h&&(h.fillStyle="#080c14",h.fillRect(0,0,t,o),h.drawImage(y,0,0,t,o),r.revokeObjectURL(u),c.toBlob($=>{if(!$)return;const x=document.createElement("a"),m=Wt(),v=ut==="jali"&&Tt==="realistic_gate"?`Gate_Render_${B.finishMaterial||"matte_black"}_${m.boundingBox.width.toFixed(0)}x${m.boundingBox.height.toFixed(0)}mm.png`:`CNC_${ut}_${m.boundingBox.width.toFixed(0)}mm.png`;x.download=v,x.href=r.createObjectURL($),x.click(),r.revokeObjectURL(x.href),Et(`📸 Exported high-res PNG (${t}×${o}px) for WhatsApp sharing!`)},"image/png"))},y.src=u}catch(e){console.error("Export PNG failed:",e),Et("⚠️ Export failed")}}function Zo(){const n=document.getElementById("panelLeft"),e=document.getElementById("panelRight"),i=document.getElementById("splitterLeft"),t=document.getElementById("splitterRight"),o=document.getElementById("collapseLeftBtn"),s=document.getElementById("collapseRightBtn"),a=document.getElementById("restoreLeftBtn"),r=document.getElementById("restoreRightBtn"),u=document.getElementById("btnToggleLeftPanel"),y=document.getElementById("btnToggleRightPanel"),c=I=>{n&&(I?(n.classList.remove("collapsed"),i==null||i.classList.remove("disabled"),a==null||a.classList.add("hidden"),u==null||u.classList.add("active")):(n.classList.add("collapsed"),i==null||i.classList.add("disabled"),a==null||a.classList.remove("hidden"),u==null||u.classList.remove("active")))},h=I=>{e&&(I?(e.classList.remove("collapsed"),t==null||t.classList.remove("disabled"),r==null||r.classList.add("hidden"),y==null||y.classList.add("active")):(e.classList.add("collapsed"),t==null||t.classList.add("disabled"),r==null||r.classList.remove("hidden"),y==null||y.classList.remove("active")))},$=()=>{const I=!(n!=null&&n.classList.contains("collapsed"));c(!I)},x=()=>{const I=!(e!=null&&e.classList.contains("collapsed"));h(!I)};o&&(o.onclick=()=>c(!1)),a&&(a.onclick=()=>c(!0)),u&&(u.onclick=()=>$()),s&&(s.onclick=()=>h(!1)),r&&(r.onclick=()=>h(!0)),y&&(y.onclick=()=>x()),window.addEventListener("keydown",I=>{I.altKey&&(I.key==="1"||I.code==="Digit1")?(I.preventDefault(),$()):I.altKey&&(I.key==="2"||I.code==="Digit2")&&(I.preventDefault(),x())});let m=!1,v=!1;i&&(i.onmousedown=()=>{m=!0},i.ondblclick=()=>{n&&(n.style.width="340px")}),t&&(t.onmousedown=()=>{v=!0},t.ondblclick=()=>{if(e){const I=window.innerWidth>=1600?"450px":window.innerWidth>=1440?"430px":window.innerWidth>=1200?"410px":"385px";e.style.width=I}}),window.addEventListener("mousemove",I=>{if(m&&n){const k=window.innerWidth>=1200?280:250,C=Math.max(k,Math.min(600,I.clientX));n.style.width=`${C}px`}else if(v&&e){const k=window.innerWidth>=1440?405:window.innerWidth>=1200?385:360,C=window.innerWidth>=1440?720:680,P=Math.max(k,Math.min(C,window.innerWidth-I.clientX));e.style.width=`${P}px`}}),window.addEventListener("mouseup",()=>{m=!1,v=!1})}_o();
