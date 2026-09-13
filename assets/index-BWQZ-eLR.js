var Kn=Object.defineProperty;var Xn=(n,e,i)=>e in n?Kn(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i;var le=(n,e,i)=>Xn(n,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();function Jn(n){const e=n.units==="inch",i=e?.5:10,t=Math.max(i,n.length),o=Math.max(i,n.width),s=Math.min(n.cornerSize||0,Math.min(t,o)/2-(e?.05:1)),a=[];n.cornerType==="fillet"&&s>0?(a.push({type:"line",start:{x:s,y:0},end:{x:t-s,y:0}}),a.push({type:"arc",center:{x:t-s,y:s},radius:s,startAngle:270*Math.PI/180,endAngle:360*Math.PI/180,counterClockwise:!0}),a.push({type:"line",start:{x:t,y:s},end:{x:t,y:o-s}}),a.push({type:"arc",center:{x:t-s,y:o-s},radius:s,startAngle:0,endAngle:90*Math.PI/180,counterClockwise:!0}),a.push({type:"line",start:{x:t-s,y:o},end:{x:s,y:o}}),a.push({type:"arc",center:{x:s,y:o-s},radius:s,startAngle:90*Math.PI/180,endAngle:180*Math.PI/180,counterClockwise:!0}),a.push({type:"line",start:{x:0,y:o-s},end:{x:0,y:s}}),a.push({type:"arc",center:{x:s,y:s},radius:s,startAngle:180*Math.PI/180,endAngle:270*Math.PI/180,counterClockwise:!0})):n.cornerType==="chamfer"&&s>0?(a.push({type:"line",start:{x:s,y:0},end:{x:t-s,y:0}}),a.push({type:"line",start:{x:t-s,y:0},end:{x:t,y:s}}),a.push({type:"line",start:{x:t,y:s},end:{x:t,y:o-s}}),a.push({type:"line",start:{x:t,y:o-s},end:{x:t-s,y:o}}),a.push({type:"line",start:{x:t-s,y:o},end:{x:s,y:o}}),a.push({type:"line",start:{x:s,y:o},end:{x:0,y:o-s}}),a.push({type:"line",start:{x:0,y:o-s},end:{x:0,y:s}}),a.push({type:"line",start:{x:0,y:s},end:{x:s,y:0}})):(a.push({type:"line",start:{x:0,y:0},end:{x:t,y:0}}),a.push({type:"line",start:{x:t,y:0},end:{x:t,y:o}}),a.push({type:"line",start:{x:t,y:o},end:{x:0,y:o}}),a.push({type:"line",start:{x:0,y:o},end:{x:0,y:0}}));const r={segments:a,isClosed:!0,isHole:!1},d=[],f=e?.1:1,c=Math.max(f,n.edgeOffsetX),u=Math.max(f,n.edgeOffsetY),$=[];n.holePattern==="4-corner"?($.push({x:c,y:u}),$.push({x:t-c,y:u}),$.push({x:t-c,y:o-u}),$.push({x:c,y:o-u})):n.holePattern==="6-hole"?($.push({x:c,y:u}),$.push({x:t/2,y:u}),$.push({x:t-c,y:u}),$.push({x:t-c,y:o-u}),$.push({x:t/2,y:o-u}),$.push({x:c,y:o-u})):n.holePattern==="8-hole"&&($.push({x:c,y:u}),$.push({x:t/2,y:u}),$.push({x:t-c,y:u}),$.push({x:t-c,y:o/2}),$.push({x:t-c,y:o-u}),$.push({x:t/2,y:o-u}),$.push({x:c,y:o-u}),$.push({x:c,y:o/2}));const g=Math.max(e?.05:1,n.holeDiameter/2);if(n.holeType==="round")for(const k of $)d.push({center:k,radius:g});else if(n.holeType==="slotted"){const k=e?.1:2,C=Math.max(g*2,n.slotLength||g*3),S=Math.max(k,n.slotWidth||g*2),F=S/2,H=Math.max(0,(C-S)/2);for(const y of $){const m=[],b={x:y.x-H,y:y.y},v={x:y.x+H,y:y.y};m.push({type:"line",start:{x:b.x,y:b.y+F},end:{x:v.x,y:v.y+F}}),m.push({type:"arc",center:v,radius:F,startAngle:90*Math.PI/180,endAngle:270*Math.PI/180,counterClockwise:!1}),m.push({type:"line",start:{x:v.x,y:v.y-F},end:{x:b.x,y:b.y-F}}),m.push({type:"arc",center:b,radius:F,startAngle:270*Math.PI/180,endAngle:90*Math.PI/180,counterClockwise:!1}),d.push({segments:m,isClosed:!0,isHole:!0})}}const M=t/2,I=o/2;if(n.centerCutoutType==="round"&&n.centerCutoutDiameter&&n.centerCutoutDiameter>0)d.push({center:{x:M,y:I},radius:n.centerCutoutDiameter/2});else if(n.centerCutoutType==="rectangular"&&n.centerCutoutWidth&&n.centerCutoutHeight){const k=Math.min(n.centerCutoutWidth,t-c*2),C=Math.min(n.centerCutoutHeight,o-u*2),S=k/2,F=C/2,H=[{type:"line",start:{x:M-S,y:I-F},end:{x:M+S,y:I-F}},{type:"line",start:{x:M+S,y:I-F},end:{x:M+S,y:I+F}},{type:"line",start:{x:M+S,y:I+F},end:{x:M-S,y:I+F}},{type:"line",start:{x:M-S,y:I+F},end:{x:M-S,y:I-F}}];d.push({segments:H,isClosed:!0,isHole:!0})}return{name:"Structural Baseplate",units:n.units,outerContour:r,innerHoles:d,boundingBox:{minX:0,minY:0,maxX:t,maxY:o,width:t,height:o}}}const Jt=[{standard:"BS10",name:'BS 10 Table E - 1" NB',nominalBore:'1"',outerDiameter:114.3,innerBore:33.4,pitchCircleDiameter:82.6,boltCount:4,boltDiameter:14.3,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 1.5" NB',nominalBore:'1.5"',outerDiameter:133.4,innerBore:48.3,pitchCircleDiameter:98.4,boltCount:4,boltDiameter:14.3,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 2" NB',nominalBore:'2"',outerDiameter:152.4,innerBore:60.3,pitchCircleDiameter:114.3,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 2.5" NB',nominalBore:'2.5"',outerDiameter:165.1,innerBore:73,pitchCircleDiameter:127,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 3" NB',nominalBore:'3"',outerDiameter:184.2,innerBore:88.9,pitchCircleDiameter:146,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 4" NB',nominalBore:'4"',outerDiameter:215.9,innerBore:114.3,pitchCircleDiameter:177.8,boltCount:8,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 6" NB',nominalBore:'6"',outerDiameter:279.4,innerBore:168.3,pitchCircleDiameter:235,boltCount:8,boltDiameter:20.6,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 8" NB',nominalBore:'8"',outerDiameter:336.6,innerBore:219.1,pitchCircleDiameter:292.1,boltCount:8,boltDiameter:20.6,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 2" NB',nominalBore:'2"',outerDiameter:152.4,innerBore:60.3,pitchCircleDiameter:114.3,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 3" NB',nominalBore:'3"',outerDiameter:184.2,innerBore:88.9,pitchCircleDiameter:146,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 4" NB',nominalBore:'4"',outerDiameter:215.9,innerBore:114.3,pitchCircleDiameter:177.8,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 6" NB',nominalBore:'6"',outerDiameter:279.4,innerBore:168.3,pitchCircleDiameter:235,boltCount:8,boltDiameter:17.5,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN25 (1")',nominalBore:"DN25",outerDiameter:115,innerBore:34,pitchCircleDiameter:85,boltCount:4,boltDiameter:14,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN50 (2")',nominalBore:"DN50",outerDiameter:165,innerBore:61,pitchCircleDiameter:125,boltCount:4,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN80 (3")',nominalBore:"DN80",outerDiameter:200,innerBore:90,pitchCircleDiameter:160,boltCount:8,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN100 (4")',nominalBore:"DN100",outerDiameter:220,innerBore:115,pitchCircleDiameter:180,boltCount:8,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN150 (6")',nominalBore:"DN150",outerDiameter:285,innerBore:169,pitchCircleDiameter:240,boltCount:8,boltDiameter:22,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN200 (8")',nominalBore:"DN200",outerDiameter:340,innerBore:220,pitchCircleDiameter:295,boltCount:12,boltDiameter:22,units:"mm"},{standard:"ASME",name:'ASME 1" Class 150',nominalBore:'1"',outerDiameter:4.25,innerBore:1.36,pitchCircleDiameter:3.12,boltCount:4,boltDiameter:.62,units:"inch"},{standard:"ASME",name:'ASME 2" Class 150',nominalBore:'2"',outerDiameter:6,innerBore:2.44,pitchCircleDiameter:4.75,boltCount:4,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 3" Class 150',nominalBore:'3"',outerDiameter:7.5,innerBore:3.57,pitchCircleDiameter:6,boltCount:4,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 4" Class 150',nominalBore:'4"',outerDiameter:9,innerBore:4.57,pitchCircleDiameter:7.5,boltCount:8,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 6" Class 150',nominalBore:'6"',outerDiameter:11,innerBore:6.72,pitchCircleDiameter:9.5,boltCount:8,boltDiameter:.88,units:"inch"},{standard:"ASME",name:'ASME 8" Class 150',nominalBore:'8"',outerDiameter:13.5,innerBore:8.72,pitchCircleDiameter:11.75,boltCount:8,boltDiameter:.88,units:"inch"}];function Vn(n){const e=n.units==="inch",t=Math.max(e?.5:10,n.outerDiameter),o=Math.max(0,Math.min(n.innerBore,t-(e?.2:5))),s=Math.max(o+(e?.1:2),Math.min(n.pitchCircleDiameter,t-(e?.1:2))),a=t/2,r={x:a,y:a},f={segments:[{type:"arc",center:r,radius:a,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:r,radius:a,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],isClosed:!0,isHole:!1},c=[];o>0&&c.push({center:r,radius:o/2});const u=Math.max(1,Math.floor(n.boltCount)),x=Math.max(e?.05:.5,n.boltDiameter/2),g=s/2;for(let M=0;M<u;M++){const I=2*Math.PI*M/u,k=r.x+g*Math.cos(I),C=r.y+g*Math.sin(I);c.push({center:{x:k,y:C},radius:x})}return{name:"Pipe Flange",units:n.units,outerContour:f,innerHoles:c,boundingBox:{minX:0,minY:0,maxX:t,maxY:t,width:t,height:t}}}function qn(n){const e=n.units==="inch",i=e?.5:10,t=Math.max(i,n.baseWidth),o=Math.max(i,n.height),s=n.hasWeldSnipe?Math.min(n.snipeSize||(e?1:25),Math.min(t,o)*.4):0,a=[];s>0?(a.push({type:"line",start:{x:s,y:0},end:{x:t,y:0}}),a.push({type:"line",start:{x:t,y:0},end:{x:0,y:o}}),a.push({type:"line",start:{x:0,y:o},end:{x:0,y:s}}),a.push({type:"line",start:{x:0,y:s},end:{x:s,y:0}})):(a.push({type:"line",start:{x:0,y:0},end:{x:t,y:0}}),a.push({type:"line",start:{x:t,y:0},end:{x:0,y:o}}),a.push({type:"line",start:{x:0,y:o},end:{x:0,y:0}}));const r={segments:a,isClosed:!0,isHole:!1},d=[];return{name:"Structural Gusset Plate",units:n.units,outerContour:r,innerHoles:d,boundingBox:{minX:0,minY:0,maxX:t,maxY:o,width:t,height:o}}}function Zn(n){const e=n.units==="inch",i=e?4:100,t=Math.max(i,n.width),o=Math.max(i,n.height),s=n.borderMarginMm??(e?1.5:40),a=e?s>8?s/25.4:s:s<5?s*25.4:s,r=Math.max(e?.5:15,Math.min(a,Math.min(t,o)*.25)),f={segments:[{type:"line",start:{x:0,y:0},end:{x:t,y:0}},{type:"line",start:{x:t,y:0},end:{x:t,y:o}},{type:"line",start:{x:t,y:o},end:{x:0,y:o}},{type:"line",start:{x:0,y:o},end:{x:0,y:0}}],isClosed:!0,isHole:!1},c=[],u=n.mountingHoleDiameter??(e?.3125:8),$=e?u>2?u/25.4:u:u<1?u*25.4:u;if(n.hasMountingHoles&&$>0){const m=$/2,b=r/2;c.push({center:{x:b,y:b},radius:m}),c.push({center:{x:t-b,y:b},radius:m}),c.push({center:{x:t-b,y:o-b},radius:m}),c.push({center:{x:b,y:o-b},radius:m}),o>(e?24:600)&&(c.push({center:{x:b,y:o/2},radius:m}),c.push({center:{x:t-b,y:o/2},radius:m}))}const x=n.kickPlateHeightMm??(e?12:300),g=e?x>30?x/25.4:x:x<30?x*25.4:x,M=n.hasKickPlate?Math.max(0,Math.min(o*.4,g)):0,I=t-2*r,k=o-2*r-M,C=Math.max(2,Math.min(12,Math.floor(n.gridColumns||(t>(e?20:500)?4:2)))),S=Math.max(2,Math.min(20,Math.floor(n.gridRows||(o>(e?20:500)?6:3)))),F=I/C,H=k/S,y=e?.2:6;for(let m=0;m<S;m++)for(let b=0;b<C;b++){const v=r+b*F,h=r+M+m*H,l=v+F/2,p=h+H/2,N=e?.15:4,G=Math.max(N,F-y),O=Math.max(N,H-y),W=Math.min(G,O)/2;if(n.patternType==="diamond_lattice"){const T=G/2,E=O/2,A=[{type:"line",start:{x:l,y:p-E},end:{x:l+T,y:p}},{type:"line",start:{x:l+T,y:p},end:{x:l,y:p+E}},{type:"line",start:{x:l,y:p+E},end:{x:l-T,y:p}},{type:"line",start:{x:l-T,y:p},end:{x:l,y:p-E}}];c.push({segments:A,isClosed:!0,isHole:!0})}else if(n.patternType==="islamic_star"){const T=[];for(let A=0;A<16;A++){const R=A%2===0?W:W*.52,V=A*Math.PI/8,Y=(A+1)*Math.PI/8,yt=(A+1)%2===0?W:W*.52;T.push({type:"line",start:{x:l+R*Math.cos(V),y:p+R*Math.sin(V)},end:{x:l+yt*Math.cos(Y),y:p+yt*Math.sin(Y)}})}c.push({segments:T,isClosed:!0,isHole:!0})}else if(n.patternType==="floral_mandala"){const T=[];for(let A=0;A<32;A++){const R=A*2*Math.PI/32,V=(A+1)*2*Math.PI/32,Y=W*(.42+.56*Math.pow(Math.abs(Math.cos(4*R)),1.3)),yt=W*(.42+.56*Math.pow(Math.abs(Math.cos(4*V)),1.3));T.push({type:"line",start:{x:l+Y*Math.cos(R),y:p+Y*Math.sin(R)},end:{x:l+yt*Math.cos(V),y:p+yt*Math.sin(V)}})}c.push({segments:T,isClosed:!0,isHole:!0})}else if(n.patternType==="tree_of_life"){const T=W*.9,E=W*.42,A=[{type:"line",start:{x:l,y:p-T},end:{x:l+E,y:p}},{type:"line",start:{x:l+E,y:p},end:{x:l,y:p+T}},{type:"line",start:{x:l,y:p+T},end:{x:l-E,y:p}},{type:"line",start:{x:l-E,y:p},end:{x:l,y:p-T}}];c.push({segments:A,isClosed:!0,isHole:!0});const R=.55,V=W*.45,Y=W*.15,yt=[{type:"line",start:{x:l-V,y:p-Y-T*R},end:{x:l-V+E*R,y:p-Y}},{type:"line",start:{x:l-V+E*R,y:p-Y},end:{x:l-V,y:p-Y+T*R}},{type:"line",start:{x:l-V,y:p-Y+T*R},end:{x:l-V-E*R,y:p-Y}},{type:"line",start:{x:l-V-E*R,y:p-Y},end:{x:l-V,y:p-Y-T*R}}];c.push({segments:yt,isClosed:!0,isHole:!0});const It=[{type:"line",start:{x:l+V,y:p-Y-T*R},end:{x:l+V+E*R,y:p-Y}},{type:"line",start:{x:l+V+E*R,y:p-Y},end:{x:l+V,y:p-Y+T*R}},{type:"line",start:{x:l+V,y:p-Y+T*R},end:{x:l+V-E*R,y:p-Y}},{type:"line",start:{x:l+V-E*R,y:p-Y},end:{x:l+V,y:p-Y-T*R}}];c.push({segments:It,isClosed:!0,isHole:!0})}else if(n.patternType==="chevron_herringbone"){const T=G*.45,E=O*.22,A=O*.22,R=[{type:"line",start:{x:l,y:p+A+E},end:{x:l+T,y:p+A}},{type:"line",start:{x:l+T,y:p+A},end:{x:l+T*.8,y:p+A-E*.5}},{type:"line",start:{x:l+T*.8,y:p+A-E*.5},end:{x:l,y:p+A+E*.4}},{type:"line",start:{x:l,y:p+A+E*.4},end:{x:l-T*.8,y:p+A-E*.5}},{type:"line",start:{x:l-T*.8,y:p+A-E*.5},end:{x:l-T,y:p+A}},{type:"line",start:{x:l-T,y:p+A},end:{x:l,y:p+A+E}}];c.push({segments:R,isClosed:!0,isHole:!0});const V=[{type:"line",start:{x:l,y:p-A+E},end:{x:l+T,y:p-A}},{type:"line",start:{x:l+T,y:p-A},end:{x:l+T*.8,y:p-A-E*.5}},{type:"line",start:{x:l+T*.8,y:p-A-E*.5},end:{x:l,y:p-A+E*.4}},{type:"line",start:{x:l,y:p-A+E*.4},end:{x:l-T*.8,y:p-A-E*.5}},{type:"line",start:{x:l-T*.8,y:p-A-E*.5},end:{x:l-T,y:p-A}},{type:"line",start:{x:l-T,y:p-A},end:{x:l,y:p-A+E}}];c.push({segments:V,isClosed:!0,isHole:!0})}else if(n.patternType==="voronoi_matrix"){const E=(m*1.618+b*2.718)%(Math.PI*2),A=[];for(let R=0;R<6;R++){const V=R*2*Math.PI/6+E*.15,Y=(R+1)*2*Math.PI/6+E*.15,yt=W*(.75+.22*Math.sin(R*2.3+E)),It=W*(.75+.22*Math.sin((R+1)*2.3+E));A.push({type:"line",start:{x:l+yt*Math.cos(V),y:p+yt*Math.sin(V)},end:{x:l+It*Math.cos(Y),y:p+It*Math.sin(Y)}})}c.push({segments:A,isClosed:!0,isHole:!0})}else if(n.patternType==="honeycomb"){const T=[];for(let E=0;E<6;E++){const A=E*Math.PI/3,R=(E+1)*Math.PI/3;T.push({type:"line",start:{x:l+W*Math.cos(A),y:p+W*Math.sin(A)},end:{x:l+W*Math.cos(R),y:p+W*Math.sin(R)}})}c.push({segments:T,isClosed:!0,isHole:!0})}else{const T=G*.4,E=O*.42,A=[{type:"line",start:{x:l-T,y:p-E},end:{x:l+T,y:p-E}},{type:"line",start:{x:l+T,y:p-E},end:{x:l+T,y:p+E}},{type:"line",start:{x:l+T,y:p+E},end:{x:l-T,y:p+E}},{type:"line",start:{x:l-T,y:p+E},end:{x:l-T,y:p-E}}];c.push({segments:A,isClosed:!0,isHole:!0})}}return{name:"Architectural CNC Jali / Gate Panel",units:n.units,outerContour:f,innerHoles:c,boundingBox:{minX:0,minY:0,maxX:t,maxY:o,width:t,height:o}}}function to(n){const e=n.units==="inch",i=e?.75:20,t=Math.max(i,n.baseWidth),o=Math.max(i,n.height),s=Math.min(n.chamferTop,o-(e?.2:5)),a=Math.min(n.chamferRight,t-(e?.2:5)),d={segments:[{type:"line",start:{x:0,y:0},end:{x:t,y:0}},{type:"line",start:{x:t,y:0},end:{x:t,y:o-s}},{type:"line",start:{x:t,y:o-s},end:{x:t-a,y:o}},{type:"line",start:{x:t-a,y:o},end:{x:0,y:o}},{type:"line",start:{x:0,y:o},end:{x:0,y:0}}],isClosed:!0,isHole:!1},f=[];{const c=n.baseHoleCount,u=n.baseHoleDiameter/2,$=t*.7/(c+1),x=Math.min(e?.6:15,(o-s)/2);for(let g=1;g<=c;g++)f.push({center:{x:$*g,y:x},radius:u})}{const c=n.uprightHoleCount,u=n.uprightHoleDiameter/2,$=o*.7/(c+1),x=Math.min(e?.6:15,(t-a)/2);for(let g=1;g<=c;g++)f.push({center:{x,y:$*g},radius:u})}{const c=Math.min(t,o)*.35,u=n.lighteningHoleDiameter||c;f.push({center:{x:t*.38,y:o*.38},radius:u/2})}return{name:"Mounting Gusset & Bracket",units:n.units,outerContour:d,innerHoles:f,boundingBox:{minX:0,minY:0,maxX:t,maxY:o,width:t,height:o}}}function eo(n){const e=n.units==="inch",t=Math.max(e?.5:10,n.outerDiameter),o=Math.max(0,Math.min(n.innerDiameter,t-(e?.1:2))),s=t/2,a={x:s,y:s},d={segments:[{type:"arc",center:a,radius:s,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:a,radius:s,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],isClosed:!0,isHole:!1},f=[];if(o>0&&f.push({center:a,radius:o/2}),n.boltDiameter&&n.pitchCircleDiameter){const c=Math.max(1,n.boltCount),u=n.boltDiameter/2,$=n.pitchCircleDiameter/2;for(let x=0;x<c;x++){const g=2*Math.PI*x/c;f.push({center:{x:a.x+$*Math.cos(g),y:a.y+$*Math.sin(g)},radius:u})}}return{name:"Circular Disc / Washer",units:n.units,outerContour:d,innerHoles:f,boundingBox:{minX:0,minY:0,maxX:t,maxY:t,width:t,height:t}}}function no(n){if(n.type==="line"){const e=n.end.x-n.start.x,i=n.end.y-n.start.y;return Math.sqrt(e*e+i*i)}else if(n.type==="arc"){let e=Math.abs(n.endAngle-n.startAngle);return n.counterClockwise&&(e=2*Math.PI-e),n.radius*e}return 0}function $n(n){if(!n.segments||n.segments.length===0)return 0;let e=0;for(const i of n.segments)if(i.type==="line")e+=i.start.x*i.end.y-i.end.x*i.start.y;else if(i.type==="arc"){const t={x:i.center.x+i.radius*Math.cos(i.startAngle),y:i.center.y+i.radius*Math.sin(i.startAngle)},o={x:i.center.x+i.radius*Math.cos(i.endAngle),y:i.center.y+i.radius*Math.sin(i.endAngle)};e+=t.x*o.y-o.x*t.y;let s=Math.abs(i.endAngle-i.startAngle);i.counterClockwise&&(s=2*Math.PI-s);const a=.5*i.radius*i.radius*(s-Math.sin(s));e+=i.counterClockwise?-a*2:a*2}return Math.abs(e)/2}function Te(n){let e=0;for(const i of n.segments)e+=no(i);return e}function ne(n,e,i){const o=n.units==="inch"?25.4:1,s=Te(n.outerContour);let a=0,r=0;for(const l of n.innerHoles)r+=1,"radius"in l?a+=2*Math.PI*l.radius:a+=Te(l);const d=s+a,f=1+r,c=d*o,u=c/25.4,$=n.boundingBox.width*o,x=n.boundingBox.height*o,g=$/25.4,M=x/25.4;let I=$n(n.outerContour);if(I<=0&&(I=n.boundingBox.width*n.boundingBox.height,n.name.includes("Flange")||n.name.includes("Disc"))){const l=n.boundingBox.width/2;I=Math.PI*l*l}let k=0;for(const l of n.innerHoles)if("radius"in l){const p=l.radius;k+=Math.PI*p*p}else k+=$n(l);const C=I*.85,S=Math.min(k,C),H=Math.max(I*.15,I-S)*(o*o),y=H/(25.4*25.4),v=H/100*(e/10)*i/1e3,h=v*2.20462262;return{totalCutLengthMm:Math.round(c*10)/10,totalCutLengthInches:Math.round(u*100)/100,pierceCount:f,boundingBoxWidthMm:Math.round($*10)/10,boundingBoxHeightMm:Math.round(x*10)/10,boundingBoxWidthInches:Math.round(g*100)/100,boundingBoxHeightInches:Math.round(M*100)/100,netAreaSqMm:Math.round(H),netAreaSqInches:Math.round(y*100)/100,theoreticalWeightKg:Math.round(v*100)/100,theoreticalWeightLbs:Math.round(h*100)/100}}function oo(n,e){const i=[],o=n.units==="inch"?25.4:1,s=n.outerContour.segments;if(s.length===0)i.push({rule:"Contour Existence",severity:"error",message:"Part has no outer cutting contour."});else{const C=s[0],S=s[s.length-1],F=C.type==="line"?C.start:{x:C.center.x+C.radius*Math.cos(C.startAngle),y:C.center.y+C.radius*Math.sin(C.startAngle)},H=S.type==="line"?S.end:{x:S.center.x+S.radius*Math.cos(S.endAngle),y:S.center.y+S.radius*Math.sin(S.endAngle)},y=Math.sqrt((H.x-F.x)**2+(H.y-F.y)**2)*o;y>.1&&i.push({rule:"Closed Polyline Rule",severity:"error",message:`Outer contour is not closed (gap is ${y.toFixed(2)} mm). Laser CAM will reject open contours.`,actualValue:y,thresholdValue:.1})}for(let C=0;C<n.innerHoles.length;C++){const S=n.innerHoles[C];if("radius"in S){const H=S.radius*2*o;H<e&&i.push({rule:"Piercing Blowout Rule",severity:"error",message:`Hole #${C+1} diameter (${H.toFixed(1)} mm) is less than sheet thickness (${e.toFixed(1)} mm). Fiber laser piercing will blow out or damage the lens nozzle.`,actualValue:H,thresholdValue:e,holeIndex:C})}else{const F=S;let H=1/0,y=1/0,m=-1/0,b=-1/0;for(const h of F.segments)h.type==="line"?(H=Math.min(H,h.start.x,h.end.x),m=Math.max(m,h.start.x,h.end.x),y=Math.min(y,h.start.y,h.end.y),b=Math.max(b,h.start.y,h.end.y)):(H=Math.min(H,h.center.x-h.radius),m=Math.max(m,h.center.x+h.radius),y=Math.min(y,h.center.y-h.radius),b=Math.max(b,h.center.y+h.radius));const v=Math.min(m-H,b-y)*o;v<e&&i.push({rule:"Piercing Blowout Rule",severity:"error",message:`Cutout / Slot #${C+1} minimum span (${v.toFixed(1)} mm) is less than sheet thickness (${e.toFixed(1)} mm). Fiber laser piercing will blow out.`,actualValue:v,thresholdValue:e,holeIndex:C})}}const a=e*1.5,r=n.boundingBox,d=(n.name.toLowerCase().includes("disc")||n.name.toLowerCase().includes("flange")||n.name.toLowerCase().includes("washer"))&&Math.abs(r.width-r.height)<.01,f=r.width/2,c={x:(r.minX+r.maxX)/2,y:(r.minY+r.maxY)/2};for(let C=0;C<n.innerHoles.length;C++){const S=n.innerHoles[C];if("radius"in S){const F=S,H=F.center.x,y=F.center.y,m=F.radius;let b;if(d){const v=Math.sqrt((H-c.x)**2+(y-c.y)**2);b=(f-(v+m))*o}else{const v=(H-m-r.minX)*o,h=(r.maxX-(H+m))*o,l=(y-m-r.minY)*o,p=(r.maxY-(y+m))*o;b=Math.min(v,h,l,p)}b<=0?i.push({rule:"Edge Margin Distance Rule",severity:"error",message:`Hole #${C+1} extends outside the outer cutting contour. Cutout breaches the part perimeter.`,actualValue:b,thresholdValue:0,holeIndex:C}):b<a&&i.push({rule:"Edge Margin Distance Rule",severity:"warning",message:`Hole #${C+1} is too close to the outer edge (${b.toFixed(1)} mm vs safe margin ${a.toFixed(1)} mm). Laser heat may warp or melt the edge.`,actualValue:b,thresholdValue:a,holeIndex:C})}}const u=e*1.5,x=n.name.toLowerCase().includes("jali")?15:n.innerHoles.length;for(let C=0;C<x;C++)for(let S=C+1;S<n.innerHoles.length;S++){const F=n.innerHoles[C],H=n.innerHoles[S],m=C===0&&(n.name.toLowerCase().includes("disc")||n.name.toLowerCase().includes("flange")||n.name.toLowerCase().includes("washer"))?"Inner Bore (Hole #1)":`Hole #${C+1}`;if("radius"in F&&"radius"in H){const b=F,v=H,h=b.center.x-v.center.x,l=b.center.y-v.center.y,N=Math.sqrt(h*h+l*l)*o-(b.radius+v.radius)*o;N<=.05?i.push({rule:"Cutout Overlap / Collision Rule",severity:"error",message:`Hole #${S+1} collides/overlaps with ${m}. Overlapping cutouts cause laser nozzle blowout, dross, and mechanical failure.`,actualValue:N,thresholdValue:0,holeIndex:S}):N<u&&i.push({rule:"Hole-to-Hole Bridge Rule",severity:"warning",message:`Hole #${S+1} is too close to ${m} (bridge is ${N.toFixed(1)} mm vs safe margin ${u.toFixed(1)} mm). Laser heat will warp or burn out the thin metal bridge.`,actualValue:N,thresholdValue:u,holeIndex:S})}}const g=r.width*o,M=r.height*o;g>4e3||M>2e3?i.push({rule:"Bed Size Limit",severity:"error",message:`Part dimensions (${g.toFixed(0)} x ${M.toFixed(0)} mm) exceed standard sheet metal laser bed size (3000 x 1500 mm / 10 x 5 ft). Check your unit selection.`}):(g<5||M<5)&&i.push({rule:"Minimum Part Size",severity:"warning",message:`Part size (${g.toFixed(1)} x ${M.toFixed(1)} mm) is extremely small. Small parts may fall through laser bed slats into the slag tray.`});const I=i.some(C=>C.severity==="error"),k=i.some(C=>C.severity==="warning");return{isManufacturable:!I,hasWarnings:k,issues:i}}const pe=[{id:"cypcut",name:"CypCut (FSCUT / Global Fiber Laser)",outerLayerName:"0",outerColor:7,innerLayerName:"1",innerColor:2,etchLayerName:"2",etchColor:4},{id:"trumpf",name:"Trumpf TruTops (Boost / Classic)",outerLayerName:"OUTER",outerColor:1,innerLayerName:"INNER",innerColor:3,etchLayerName:"MARK",etchColor:4},{id:"sigmanest",name:"SigmaNEST / ProNest",outerLayerName:"CUT_EXTERIOR",outerColor:1,innerLayerName:"CUT_INTERIOR",innerColor:2,etchLayerName:"SCRIBE",etchColor:5},{id:"bysoft",name:"Bystronic BySoft / ByVision",outerLayerName:"CUT_OUTER",outerColor:7,innerLayerName:"CUT_INNER",innerColor:3,etchLayerName:"ETCH",etchColor:4},{id:"generic",name:"Universal Standard CAM",outerLayerName:"0_CUT_OUTER",outerColor:7,innerLayerName:"1_CUT_INNER",innerColor:2,etchLayerName:"2_MARKING",etchColor:4}];function io(n,e){const t=n.units==="inch"?1:4,o=[],s=(a,r)=>{o.push(a.toString()),o.push(r.toString())};s(0,"SECTION"),s(2,"HEADER"),s(9,"$ACADVER"),s(1,"AC1024"),s(9,"$INSUNITS"),s(70,t),s(9,"$EXTMIN"),s(10,n.boundingBox.minX.toFixed(4)),s(20,n.boundingBox.minY.toFixed(4)),s(30,"0.0"),s(9,"$EXTMAX"),s(10,n.boundingBox.maxX.toFixed(4)),s(20,n.boundingBox.maxY.toFixed(4)),s(30,"0.0"),s(0,"ENDSEC"),s(0,"SECTION"),s(2,"TABLES"),s(0,"TABLE"),s(2,"LAYER"),s(70,3),s(0,"LAYER"),s(2,e.outerLayerName),s(70,0),s(62,e.outerColor),s(6,"CONTINUOUS"),s(0,"LAYER"),s(2,e.innerLayerName),s(70,0),s(62,e.innerColor),s(6,"CONTINUOUS"),s(0,"LAYER"),s(2,e.etchLayerName),s(70,0),s(62,e.etchColor),s(6,"CONTINUOUS"),s(0,"ENDTAB"),s(0,"ENDSEC"),s(0,"SECTION"),s(2,"ENTITIES"),Cn(n.outerContour,e.outerLayerName,e.outerColor,s);for(const a of n.innerHoles)if("radius"in a){const r=a;s(0,"CIRCLE"),s(8,e.innerLayerName),s(62,e.innerColor),s(10,r.center.x.toFixed(4)),s(20,r.center.y.toFixed(4)),s(30,"0.0"),s(40,r.radius.toFixed(4))}else Cn(a,e.innerLayerName,e.innerColor,s);return s(0,"ENDSEC"),s(0,"EOF"),o.join(`\r
`)+`\r
`}function Cn(n,e,i,t){if(n.segments.length===2&&n.segments[0].type==="arc"&&n.segments[1].type==="arc"&&n.segments[0].radius===n.segments[1].radius){const o=n.segments[0];t(0,"CIRCLE"),t(8,e),t(62,i),t(10,o.center.x.toFixed(4)),t(20,o.center.y.toFixed(4)),t(30,"0.0"),t(40,o.radius.toFixed(4));return}t(0,"LWPOLYLINE"),t(8,e),t(62,i),t(90,n.segments.length),t(70,n.isClosed?1:0);for(const o of n.segments)if(o.type==="line")t(10,o.start.x.toFixed(4)),t(20,o.start.y.toFixed(4)),t(42,"0.0");else if(o.type==="arc"){const s=o.center.x+o.radius*Math.cos(o.startAngle),a=o.center.y+o.radius*Math.sin(o.startAngle);let r=o.endAngle-o.startAngle;o.counterClockwise?r<0&&(r+=2*Math.PI):r>0&&(r-=2*Math.PI);const d=Math.tan(r/4);t(10,s.toFixed(4)),t(20,a.toFixed(4)),t(42,d.toFixed(6))}}const so=["defpoints","dimension","dim","text","title","border","hatch","notes","anno"];function Me(n){const e=n.toLowerCase();return so.some(i=>e.includes(i))}function Xe(n,e){return Math.sqrt((n.x-e.x)**2+(n.y-e.y)**2)}function ao(n,e,i){const t=e.x-n.x,o=e.y-n.y,s=Math.sqrt(t*t+o*o);if(s<1e-6||Math.abs(i)<1e-6)return{type:"line",start:n,end:e};const a=s/2*((1+i*i)/(2*Math.abs(i))),r=(n.x+e.x)/2,d=(n.y+e.y)/2,f=-o/s,c=t/s,u=s/2*((1-i*i)/(2*i)),$=r+f*u,x=d+c*u;let g=Math.atan2(n.y-x,n.x-$),M=Math.atan2(e.y-x,e.x-$);return g<0&&(g+=2*Math.PI),M<0&&(M+=2*Math.PI),{type:"arc",center:{x:$,y:x},radius:a,startAngle:g,endAngle:M,counterClockwise:i>0}}function Mn(n,e=8){const i=[];for(const t of n)if(t.type==="line")i.push({x:t.start.x,y:t.start.y});else if(t.type==="arc"){let o=t.endAngle-t.startAngle;t.counterClockwise&&o<0&&(o+=2*Math.PI),!t.counterClockwise&&o>0&&(o-=2*Math.PI);for(let s=0;s<e;s++){const a=s/e,r=t.startAngle+o*a;i.push({x:t.center.x+t.radius*Math.cos(r),y:t.center.y+t.radius*Math.sin(r)})}}return i}function vn(n,e){let i=!1;const t=e.length;for(let o=0,s=t-1;o<t;s=o++){const a=e[o].x,r=e[o].y,d=e[s].x,f=e[s].y;r>n.y!=f>n.y&&n.x<(d-a)*(n.y-r)/(f-r)+a&&(i=!i)}return i}function Nn(n){var F,H;const e=n.split(/\r?\n/);let i="mm";const t=[],o=[],s=[],a=[];let r=!1,d=!1,f="",c=0;for(;c<e.length-1;){const y=parseInt(e[c].trim(),10),m=e[c+1].trim();if(c+=2,y===0&&m==="SECTION"){const b=parseInt((F=e[c])==null?void 0:F.trim(),10),v=(H=e[c+1])==null?void 0:H.trim();b===2&&v==="HEADER"&&(d=!0),b===2&&v==="ENTITIES"&&(r=!0)}else y===0&&m==="ENDSEC"&&(d=!1,r=!1);if(d){if(y===9)f=m;else if(f==="$INSUNITS"&&y===70){const b=parseInt(m,10);b===1?i="inch":b===4&&(i="mm")}}if(r&&y===0){if(m==="LINE"){const b={x1:0,y1:0,x2:0,y2:0,layer:"0"};for(;c<e.length-1&&parseInt(e[c].trim(),10)!==0;){const v=parseInt(e[c].trim(),10),h=e[c+1].trim();c+=2,v===8?b.layer=h:v===10?b.x1=parseFloat(h):v===20?b.y1=parseFloat(h):v===11?b.x2=parseFloat(h):v===21&&(b.y2=parseFloat(h))}Me(b.layer)||t.push(b)}else if(m==="CIRCLE"){const b={cx:0,cy:0,r:0,layer:"0"};for(;c<e.length-1&&parseInt(e[c].trim(),10)!==0;){const v=parseInt(e[c].trim(),10),h=e[c+1].trim();c+=2,v===8?b.layer=h:v===10?b.cx=parseFloat(h):v===20?b.cy=parseFloat(h):v===40&&(b.r=parseFloat(h))}Me(b.layer)||o.push(b)}else if(m==="ARC"){const b={cx:0,cy:0,r:0,sa:0,ea:0,layer:"0"};for(;c<e.length-1&&parseInt(e[c].trim(),10)!==0;){const v=parseInt(e[c].trim(),10),h=e[c+1].trim();c+=2,v===8?b.layer=h:v===10?b.cx=parseFloat(h):v===20?b.cy=parseFloat(h):v===40?b.r=parseFloat(h):v===50?b.sa=parseFloat(h)*Math.PI/180:v===51&&(b.ea=parseFloat(h)*Math.PI/180)}Me(b.layer)||s.push(b)}else if(m==="LWPOLYLINE"){const b={vertices:[],isClosed:!1,layer:"0"};let v=0,h=0,l=!1,p=!1;for(;c<e.length-1&&parseInt(e[c].trim(),10)!==0;){const N=parseInt(e[c].trim(),10),G=e[c+1].trim();if(c+=2,N===8)b.layer=G;else if(N===70)b.isClosed=(parseInt(G,10)&1)===1;else if(N===10)l&&p&&(b.vertices.push({x:v,y:h}),p=!1),v=parseFloat(G),l=!0;else if(N===20)h=parseFloat(G),p=!0;else if(N===42){const O=b.vertices[b.vertices.length-1];O&&(O.bulge=parseFloat(G))}}l&&p&&b.vertices.push({x:v,y:h}),Me(b.layer)||a.push(b)}}}const u=[];for(const y of a){if(y.vertices.length<2)continue;const m=[],b=y.vertices.length,v=y.isClosed?b:b-1;for(let W=0;W<v;W++){const T=y.vertices[W],E=y.vertices[(W+1)%b];T.bulge&&Math.abs(T.bulge)>1e-5?m.push(ao(T,E,T.bulge)):m.push({type:"line",start:{x:T.x,y:T.y},end:{x:E.x,y:E.y}})}const h=Mn(m);let l=1/0,p=1/0,N=-1/0,G=-1/0;for(const W of h)l=Math.min(l,W.x),N=Math.max(N,W.x),p=Math.min(p,W.y),G=Math.max(G,W.y);const O={minX:l,minY:p,maxX:N,maxY:G,width:Math.max(1,N-l),height:Math.max(1,G-p)};u.push({segments:m,polygon:h,bbox:O,bboxArea:O.width*O.height})}const $=[];for(const y of t)$.push({kind:"line",start:{x:y.x1,y:y.y1},end:{x:y.x2,y:y.y2},visited:!1});for(const y of s){const m={x:y.cx+y.r*Math.cos(y.sa),y:y.cy+y.r*Math.sin(y.sa)},b={x:y.cx+y.r*Math.cos(y.ea),y:y.cy+y.r*Math.sin(y.ea)};$.push({kind:"arc",start:m,end:b,center:{x:y.cx,y:y.cy},radius:y.r,startAngle:y.sa,endAngle:y.ea,counterClockwise:!0,visited:!1})}const x=.35;for(let y=0;y<$.length;y++){if($[y].visited)continue;const m=[],b=$[y];b.visited=!0;const v={...b.start};let h={...b.end};b.kind==="line"?m.push({type:"line",start:b.start,end:b.end}):m.push({type:"arc",center:b.center,radius:b.radius,startAngle:b.startAngle,endAngle:b.endAngle,counterClockwise:b.counterClockwise});let l=!0;for(;l;){if(l=!1,Xe(h,v)<=x&&m.length>=2){const p=m[m.length-1];p.type==="line"&&(p.end={...v});break}for(let p=0;p<$.length;p++){if($[p].visited)continue;const N=$[p];if(Xe(h,N.start)<=x){N.visited=!0,N.kind==="line"?m.push({type:"line",start:{...h},end:N.end}):m.push({type:"arc",center:N.center,radius:N.radius,startAngle:N.startAngle,endAngle:N.endAngle,counterClockwise:N.counterClockwise}),h={...N.end},l=!0;break}else if(Xe(h,N.end)<=x){N.visited=!0,N.kind==="line"?m.push({type:"line",start:{...h},end:N.start}):m.push({type:"arc",center:N.center,radius:N.radius,startAngle:N.endAngle,endAngle:N.startAngle,counterClockwise:!N.counterClockwise}),h={...N.start},l=!0;break}}}if(m.length>0){const p=Mn(m);let N=1/0,G=1/0,O=-1/0,W=-1/0;for(const E of p)N=Math.min(N,E.x),O=Math.max(O,E.x),G=Math.min(G,E.y),W=Math.max(W,E.y);const T={minX:N,minY:G,maxX:O,maxY:W,width:Math.max(1,O-N),height:Math.max(1,W-G)};u.push({segments:m,polygon:p,bbox:T,bboxArea:T.width*T.height})}}const g=new Map;for(let y=0;y<u.length;y++){const m=u[y];let b=-1,v=1/0;for(let h=0;h<u.length;h++){if(y===h)continue;const l=u[h];if(l.bbox.minX<=m.bbox.minX+.1&&l.bbox.maxX>=m.bbox.maxX-.1&&l.bbox.minY<=m.bbox.minY+.1&&l.bbox.maxY>=m.bbox.maxY-.1&&l.bboxArea>m.bboxArea){const p=m.polygon[0]||{x:(m.bbox.minX+m.bbox.maxX)/2,y:(m.bbox.minY+m.bbox.maxY)/2};vn(p,l.polygon)&&l.bboxArea<v&&(v=l.bboxArea,b=h)}}b!==-1&&g.set(y,b)}const M=[],I=new Map;for(let y=0;y<u.length;y++)g.has(y)||(M.push(y),I.set(y,[]));for(let y=0;y<u.length;y++)if(g.has(y)){const m=g.get(y);I.has(m)&&I.get(m).push(u[y].segments)}const k=new Map,C=[];for(const y of M)k.set(y,[]);for(const y of o){const m={x:y.cx,y:y.cy};let b=-1,v=1/0;for(const h of M){const l=u[h];y.cx>=l.bbox.minX&&y.cx<=l.bbox.maxX&&y.cy>=l.bbox.minY&&y.cy<=l.bbox.maxY&&vn(m,l.polygon)&&l.bboxArea<v&&(v=l.bboxArea,b=h)}b!==-1?k.get(b).push({center:m,radius:y.r}):C.push({center:m,radius:y.r})}const S=[];for(let y=0;y<M.length;y++){const m=M[y],b=u[m],v=[],h=I.get(m)||[];for(const p of h)v.push({segments:p,isClosed:!0,isHole:!0});const l=k.get(m)||[];for(const p of l)v.push(p);S.push({name:M.length>1?`Sanitized Part #${y+1}`:"Sanitized CNC Drawing",units:i,outerContour:{segments:b.segments,isClosed:!0,isHole:!1},innerHoles:v,boundingBox:b.bbox})}if(S.length===0&&C.length>0){const y=[...C].sort((l,p)=>p.radius-l.radius),m=y[0],b=[{type:"arc",center:{...m.center},radius:m.radius,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:{...m.center},radius:m.radius,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],v=y.slice(1),h={minX:m.center.x-m.radius,minY:m.center.y-m.radius,maxX:m.center.x+m.radius,maxY:m.center.y+m.radius,width:m.radius*2,height:m.radius*2};S.push({name:"Sanitized CNC Disc",units:i,outerContour:{segments:b,isClosed:!0,isHole:!1},innerHoles:v,boundingBox:h})}return S.length===0&&S.push({name:"Empty DXF Drawing",units:i,outerContour:{segments:[{type:"line",start:{x:0,y:0},end:{x:100,y:0}},{type:"line",start:{x:100,y:0},end:{x:100,y:100}},{type:"line",start:{x:100,y:100},end:{x:0,y:100}},{type:"line",start:{x:0,y:100},end:{x:0,y:0}}],isClosed:!0,isHole:!1},innerHoles:[],boundingBox:{minX:0,minY:0,maxX:100,maxY:100,width:100,height:100}}),S}function ro(n){const e=Nn(n);return e.sort((i,t)=>t.boundingBox.width*t.boundingBox.height-i.boundingBox.width*i.boundingBox.height),e[0]}const fe=[{id:"sheet_8x4",name:"8 × 4 ft (2500 × 1250 mm) - Standard Indian Plate",widthMm:1250,lengthMm:2500},{id:"sheet_10x5",name:"10 × 5 ft (3000 × 1500 mm) - Standard Laser Bed",widthMm:1500,lengthMm:3e3},{id:"sheet_20x5",name:"20 × 5 ft (6000 × 1500 mm) - Heavy Structural Plate",widthMm:1500,lengthMm:6e3},{id:"sheet_small",name:"4 × 4 ft (1250 × 1250 mm) - Offcut / Half Sheet",widthMm:1250,lengthMm:1250}],He=[{id:"us_sheet_5x10",name:"5 × 10 ft (60 × 120 in) - Standard US Laser Bed",widthMm:1524,lengthMm:3048},{id:"us_sheet_4x8",name:"4 × 8 ft (48 × 96 in) - Standard US Sheet",widthMm:1219.2,lengthMm:2438.4},{id:"us_sheet_6x12",name:"6 × 12 ft (72 × 144 in) - Large Format Table",widthMm:1828.8,lengthMm:3657.6},{id:"us_sheet_4x4",name:"4 × 4 ft (48 × 48 in) - Half Sheet / Drop",widthMm:1219.2,lengthMm:1219.2}];class lo{constructor(e,i,t,o,s){le(this,"sheetW");le(this,"sheetL");le(this,"edgeMargin");le(this,"spacing");le(this,"allowRotation");this.sheetW=e,this.sheetL=i,this.edgeMargin=t,this.spacing=o,this.allowRotation=s}initSheetFreeRects(){const e=Math.max(0,this.sheetW-2*this.edgeMargin),i=Math.max(0,this.sheetL-2*this.edgeMargin);return[{x:this.edgeMargin,y:this.edgeMargin,width:e,height:i}]}scorePlacement(e,i,t){if(i>e.width||t>e.height)return{score1:1/0,score2:1/0};const o=e.width-i,s=e.height-t,a=Math.min(o,s),r=Math.max(o,s);return{score1:a,score2:r}}splitFreeRect(e,i,t,o,s){if(i>=e.x+e.width||i+o<=e.x||t>=e.y+e.height||t+s<=e.y)return[e];const a=[];return t>e.y&&t<e.y+e.height&&a.push({x:e.x,y:e.y,width:e.width,height:t-e.y}),t+s<e.y+e.height&&t+s>e.y&&a.push({x:e.x,y:t+s,width:e.width,height:e.y+e.height-(t+s)}),i>e.x&&i<e.x+e.width&&a.push({x:e.x,y:e.y,width:i-e.x,height:e.height}),i+o<e.x+e.width&&i+o>e.x&&a.push({x:i+o,y:e.y,width:e.x+e.width-(i+o),height:e.height}),a}pruneFreeRects(e){const i=e.filter(o=>o.width>0&&o.height>0),t=[];for(let o=0;o<i.length;o++){let s=!1;const a=i[o];for(let r=0;r<i.length;r++){if(o===r)continue;const d=i[r];if(a.x>=d.x&&a.y>=d.y&&a.x+a.width<=d.x+d.width&&a.y+a.height<=d.y+d.height){s=!0;break}}s||t.push(a)}return t}pack(e){const i=[];let t=0,o=this.initSheetFreeRects();for(let s=0;s<e.length;s++){const a=e[s];let r=!1;for(;!r;){let d={score1:1/0,score2:1/0},f=-1,c=!1,u=a.w,$=a.h;for(let x=0;x<o.length;x++){const g=o[x],M=this.scorePlacement(g,a.w,a.h);if((M.score1<d.score1||M.score1===d.score1&&M.score2<d.score2)&&(d=M,f=x,c=!1,u=a.w,$=a.h),this.allowRotation&&Math.abs(a.w-a.h)>.5){const I=this.scorePlacement(g,a.h,a.w);(I.score1<d.score1||I.score1===d.score1&&I.score2<d.score2)&&(d=I,f=x,c=!0,u=a.h,$=a.w)}}if(f!==-1){const x=o[f],g=x.x,M=x.y;i.push({id:a.instanceId,partIndex:s,sheetIndex:t,x:g,y:M,width:u,height:$,rotated:c,partName:a.name,partId:a.instanceId,color:a.color});const I=u+this.spacing,k=$+this.spacing;let C=[];for(const S of o){const F=this.splitFreeRect(S,g,M,I,k);C.push(...F)}o=this.pruneFreeRects(C),r=!0}else{const x=Math.max(0,this.sheetW-2*this.edgeMargin),g=Math.max(0,this.sheetL-2*this.edgeMargin);o.length===1&&o[0].width===x&&o[0].height===g||t>=50?(i.push({id:a.instanceId,partIndex:s,sheetIndex:t,x:0,y:0,width:a.w,height:a.h,rotated:!1,partName:a.name,partId:a.instanceId,color:a.color}),r=!0):(t++,o=this.initSheetFreeRects())}}}return i}}function an(n,e=fe[0],i=6,t=7.85,o={}){var N;const s=o.edgeMarginMm!==void 0?o.edgeMarginMm:10,a=o.partSpacingMm!==void 0?o.partSpacingMm:5,r=o.allowRotation!==!1,d=e.widthMm,f=e.lengthMm,c=[];let u=0,$=0;for(let G=0;G<n.length;G++){const O=n[G],W=Math.max(1,Math.floor(O.quantity));u+=W;const E=((N=O.geometry)==null?void 0:N.units)==="inch"?25.4:1,A=Math.max(1,O.boundingBox.width*E),R=Math.max(1,O.boundingBox.height*E),V=A*R;for(let Y=0;Y<W;Y++)c.push({instanceId:`${O.id}_${Y}`,itemIndex:G,name:O.name,w:A,h:R,color:O.color}),$+=V}c.sort((G,O)=>O.w*O.h-G.w*G.h);const g=new lo(d,f,s,a,r).pack(c),M=g.reduce((G,O)=>Math.max(G,O.sheetIndex),0),I=g.length>0?M+1:1,C=d*f*I,S=Math.min(100,Math.round($/C*1e3)/10),F=$*i/1e3,H=Math.round(F*t/1e3*100)/100,y=C*i/1e3,m=Math.round(y*t/1e3*100)/100,b=Math.max(0,Math.round((m-H)*100)/100),v=g.filter(G=>G.sheetIndex===M);let h=0;for(const G of v)h=Math.max(h,G.y+G.height);const l=Math.max(0,Math.round(f-(h+a))),p=d;return{sheetSize:e,partsRequested:u,partsPlaced:g.length,sheetsRequired:I,sheetUtilizationPercent:S,totalNetPartMassKg:H,totalLoadedSheetMassKg:m,totalSkeletonScrapMassKg:b,remnantWidthMm:p,remnantLengthMm:l,packedParts:g}}function co(n,e,i=fe[0],t=6,o=7.85,s={},a="mm"){const r=a==="inch",d=r?25.4:1,c={id:"part_0",name:"Part",boundingBox:r?{minX:n.minX*d,minY:n.minY*d,maxX:n.maxX*d,maxY:n.maxY*d,width:n.width*d,height:n.height*d}:n,quantity:e};return an([c],i,t,o,s)}const rn=[{id:"steel_a36",name:"Mild Steel (A36 / S235)",densityGPerCm3:7.85,gauges:[{gaugeName:'16 Gauge (1.5 mm / 0.060")',thicknessMm:1.5,thicknessInches:.0598,pricePerSqInch:.018,pricePerLinearInchCut:.035,pricePerPierce:.15},{gaugeName:'11 Gauge (3.0 mm / 0.120")',thicknessMm:3,thicknessInches:.1196,pricePerSqInch:.035,pricePerLinearInchCut:.055,pricePerPierce:.25},{gaugeName:'3/16" Plate (4.76 mm / 0.188")',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.058,pricePerLinearInchCut:.085,pricePerPierce:.4},{gaugeName:'1/4" Plate (6.35 mm / 0.250")',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.078,pricePerLinearInchCut:.12,pricePerPierce:.6},{gaugeName:'3/8" Plate (9.52 mm / 0.375")',thicknessMm:9.52,thicknessInches:.375,pricePerSqInch:.115,pricePerLinearInchCut:.185,pricePerPierce:.95},{gaugeName:'1/2" Plate (12.7 mm / 0.500")',thicknessMm:12.7,thicknessInches:.5,pricePerSqInch:.155,pricePerLinearInchCut:.26,pricePerPierce:1.4}]},{id:"stainless_304",name:"Stainless Steel (304 2B)",densityGPerCm3:8,gauges:[{gaugeName:'16 Gauge (1.5 mm / 0.060")',thicknessMm:1.5,thicknessInches:.0598,pricePerSqInch:.052,pricePerLinearInchCut:.065,pricePerPierce:.3},{gaugeName:'11 Gauge (3.0 mm / 0.120")',thicknessMm:3,thicknessInches:.1196,pricePerSqInch:.098,pricePerLinearInchCut:.105,pricePerPierce:.5},{gaugeName:'3/16" Plate (4.76 mm / 0.188")',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.165,pricePerLinearInchCut:.165,pricePerPierce:.85},{gaugeName:'1/4" Plate (6.35 mm / 0.250")',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.22,pricePerLinearInchCut:.24,pricePerPierce:1.25}]},{id:"aluminum_6061",name:"Aluminum (6061-T6)",densityGPerCm3:2.7,gauges:[{gaugeName:'1/16" Sheet (1.58 mm / 0.063")',thicknessMm:1.58,thicknessInches:.0625,pricePerSqInch:.038,pricePerLinearInchCut:.045,pricePerPierce:.2},{gaugeName:'1/8" Sheet (3.18 mm / 0.125")',thicknessMm:3.18,thicknessInches:.125,pricePerSqInch:.072,pricePerLinearInchCut:.075,pricePerPierce:.35},{gaugeName:'3/16" Plate (4.76 mm / 0.188")',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.11,pricePerLinearInchCut:.115,pricePerPierce:.55},{gaugeName:'1/4" Plate (6.35 mm / 0.250")',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.145,pricePerLinearInchCut:.16,pricePerPierce:.8}]}],Hn=[{id:"is2062_ms",name:"IS 2062 E250 Mild Steel (MS)",densityGPerCm3:7.85,gauges:[{gaugeName:"1.6 mm Sheet (16G)",thicknessMm:1.6,thicknessInches:.063,pricePerSqInch:.02,pricePerLinearInchCut:.035,pricePerPierce:.15,pricePerKg:74,pricePerMeterCut:9,pricePerSqFtJali:55},{gaugeName:"2.0 mm Sheet (14G)",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.025,pricePerLinearInchCut:.04,pricePerPierce:.2,pricePerKg:74,pricePerMeterCut:12,pricePerSqFtJali:65},{gaugeName:"3.0 mm Sheet (10G)",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.035,pricePerLinearInchCut:.05,pricePerPierce:.25,pricePerKg:75,pricePerMeterCut:15,pricePerSqFtJali:95},{gaugeName:"4.0 mm Plate",thicknessMm:4,thicknessInches:.1575,pricePerSqInch:.048,pricePerLinearInchCut:.07,pricePerPierce:.35,pricePerKg:75,pricePerMeterCut:22,pricePerSqFtJali:130},{gaugeName:"6.0 mm Plate",thicknessMm:6,thicknessInches:.2362,pricePerSqInch:.072,pricePerLinearInchCut:.11,pricePerPierce:.55,pricePerKg:76,pricePerMeterCut:35},{gaugeName:"8.0 mm Plate",thicknessMm:8,thicknessInches:.315,pricePerSqInch:.098,pricePerLinearInchCut:.16,pricePerPierce:.8,pricePerKg:78,pricePerMeterCut:52},{gaugeName:"10.0 mm Plate",thicknessMm:10,thicknessInches:.3937,pricePerSqInch:.125,pricePerLinearInchCut:.22,pricePerPierce:1.1,pricePerKg:78,pricePerMeterCut:68},{gaugeName:"12.0 mm Plate",thicknessMm:12,thicknessInches:.4724,pricePerSqInch:.15,pricePerLinearInchCut:.28,pricePerPierce:1.4,pricePerKg:80,pricePerMeterCut:88},{gaugeName:"16.0 mm Plate",thicknessMm:16,thicknessInches:.6299,pricePerSqInch:.21,pricePerLinearInchCut:.38,pricePerPierce:2.2,pricePerKg:82,pricePerMeterCut:135},{gaugeName:"20.0 mm Plate",thicknessMm:20,thicknessInches:.7874,pricePerSqInch:.26,pricePerLinearInchCut:.48,pricePerPierce:3,pricePerKg:85,pricePerMeterCut:180}]},{id:"ss304_indian",name:"SS 304 (Stainless Steel - N2 / Air Cut)",densityGPerCm3:8,gauges:[{gaugeName:"1.2 mm Sheet",thicknessMm:1.2,thicknessInches:.0472,pricePerSqInch:.045,pricePerLinearInchCut:.06,pricePerPierce:.3,pricePerKg:230,pricePerMeterCut:16,pricePerSqFtJali:110},{gaugeName:"1.5 mm Sheet",thicknessMm:1.5,thicknessInches:.0591,pricePerSqInch:.055,pricePerLinearInchCut:.07,pricePerPierce:.35,pricePerKg:235,pricePerMeterCut:22,pricePerSqFtJali:135},{gaugeName:"2.0 mm Sheet",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.072,pricePerLinearInchCut:.09,pricePerPierce:.45,pricePerKg:235,pricePerMeterCut:30,pricePerSqFtJali:175},{gaugeName:"3.0 mm Sheet",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.11,pricePerLinearInchCut:.14,pricePerPierce:.65,pricePerKg:240,pricePerMeterCut:45,pricePerSqFtJali:240},{gaugeName:"4.0 mm Plate",thicknessMm:4,thicknessInches:.1575,pricePerSqInch:.15,pricePerLinearInchCut:.19,pricePerPierce:.9,pricePerKg:245,pricePerMeterCut:65},{gaugeName:"6.0 mm Plate",thicknessMm:6,thicknessInches:.2362,pricePerSqInch:.22,pricePerLinearInchCut:.28,pricePerPierce:1.4,pricePerKg:250,pricePerMeterCut:105}]},{id:"aluminum_indian",name:"Aluminium 6061 (Air Cut)",densityGPerCm3:2.7,gauges:[{gaugeName:"2.0 mm Sheet",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.045,pricePerLinearInchCut:.06,pricePerPierce:.3,pricePerKg:260,pricePerMeterCut:20},{gaugeName:"3.0 mm Sheet",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.065,pricePerLinearInchCut:.08,pricePerPierce:.4,pricePerKg:260,pricePerMeterCut:28},{gaugeName:"5.0 mm Plate",thicknessMm:5,thicknessInches:.1969,pricePerSqInch:.11,pricePerLinearInchCut:.13,pricePerPierce:.65,pricePerKg:270,pricePerMeterCut:55}]}],_n={bendingBendsCount:0,bendingRatePerBend:15,deburringEnabled:!1,deburringRatePerKg:8,tappingHolesCount:0,tappingRatePerHole:18,surfaceFinish:"none",primerRatePerSqFt:20,powderCoatingRatePerSqFt:45,galvanizingRatePerKg:42},_e={shopName:"Shree Balaji Laser Tech (Bhosari, Pune)",currency:"INR",pricingMode:"india_metric",indianQuotingMode:"job_work",assistGas:"air",sheetLoadingFee:250,gstPercent:18,isInterstateSale:!1,minimumOrderFee:500,leadTimeDays:2,rushMultiplier:1.25,selectedCAMProfileId:"cypcut",shopGstin:"27AABCS1429B1Z8",shopAddress:"Plot 42, J-Block, MIDC Bhosari, Pune, MH 411026",shopPhone:"+91 98220 12345",upiId:"balajilaser@upi",quantityTiers:[{minQty:1,discountPercent:0},{minQty:10,discountPercent:8},{minQty:25,discountPercent:15},{minQty:50,discountPercent:22},{minQty:100,discountPercent:30}]},Ce={shopName:"Midwest Precision CNC & Laser",currency:"USD",pricingMode:"global_imperial",indianQuotingMode:"with_material",assistGas:"oxygen",sheetLoadingFee:20,gstPercent:7,isInterstateSale:!1,minimumOrderFee:75,leadTimeDays:3,rushMultiplier:1.35,selectedCAMProfileId:"trumpf",shopAddress:"1420 Industrial Pkwy, Cleveland, OH 44135",shopPhone:"(216) 555-0198",quantityTiers:[{minQty:1,discountPercent:0},{minQty:5,discountPercent:10},{minQty:10,discountPercent:18},{minQty:25,discountPercent:28},{minQty:50,discountPercent:38}]};function uo(n,e={}){const i={..._n,...e},t=(i.bendingBendsCount||0)*(i.bendingRatePerBend||15),o=i.deburringEnabled?n.theoreticalWeightKg*(i.deburringRatePerKg||8):0,s=(i.tappingHolesCount||0)*(i.tappingRatePerHole||18),a=Math.max(.1,n.netAreaSqMm/(304.8*304.8));let r=0;i.surfaceFinish==="primer"?r=a*(i.primerRatePerSqFt||20):i.surfaceFinish==="powder_coating"?r=a*(i.powderCoatingRatePerSqFt||45):i.surfaceFinish==="galvanizing"&&(r=n.theoreticalWeightKg*(i.galvanizingRatePerKg||42));const d=t+o+s+r;return{bendingCost:Math.round(t*100)/100,deburringCost:Math.round(o*100)/100,tappingCost:Math.round(s*100)/100,surfaceFinishCost:Math.round(r*100)/100,totalSecondaryCost:Math.round(d*100)/100}}function Xt(n,e,i,t=Ce,o={}){const s=Math.max(1,Math.floor(i));let a=0,r=0,d=0,f=0,c="HSN 7326 (Articles of Iron or Steel)";const u=t.indianQuotingMode||"with_material";let $=1;if(t.assistGas==="nitrogen"?$=2:t.assistGas==="oxygen"?$=1.15:$=1,t.pricingMode==="india_metric")if(u==="job_work"){a=0;const l=n.totalCutLengthMm/1e3,p=e.pricePerMeterCut||20;r=l*p*$,d=n.pierceCount*(e.pricePerPierce>1?e.pricePerPierce:1.5),f=(t.sheetLoadingFee||250)/Math.max(1,s),c="SAC 9988 (Job Work / Manufacturing Services)"}else if(u==="sqft_jali"){const l=Math.max(.1,n.boundingBoxWidthMm/304.8*(n.boundingBoxHeightMm/304.8)),p=e.pricePerSqFtJali||(e.pricePerKg?e.pricePerKg*1.15:65);a=l*p,r=0,d=0,f=0,c="HSN 7326 (Decorative Laser Cut Panels)"}else{a=n.theoreticalWeightKg*1.12*(e.pricePerKg||75);const p=n.totalCutLengthMm/1e3,N=e.pricePerMeterCut||20;r=p*N*$,d=n.pierceCount*(e.pricePerPierce>1?e.pricePerPierce:1.5),f=0,c="HSN 7326 (Fabricated Steel Articles)"}else a=n.boundingBoxWidthInches*n.boundingBoxHeightInches*1.15*e.pricePerSqInch,r=n.totalCutLengthInches*e.pricePerLinearInchCut,d=n.pierceCount*e.pricePerPierce,f=0;const x=uo(n,o),g=x.totalSecondaryCost,M=a+r+d+f+g;let I=0;for(const l of t.quantityTiers||[])s>=l.minQty&&(I=l.discountPercent);const k=M*(1-I/100),C=k*s,S=C<t.minimumOrderFee,F=Math.max(t.minimumOrderFee,C),H=F/s,y=t.gstPercent>0?F*(t.gstPercent/100):0;let m=0,b=0,v=0;t.gstPercent>0&&(t.isInterstateSale?v=y:(m=y/2,b=y/2));const h=F+y;return{currency:t.currency,quotingMode:u,quantity:s,unitMaterialCost:Math.round(a*100)/100,unitCutCost:Math.round(r*100)/100,unitPierceCost:Math.round(d*100)/100,unitHandlingCost:Math.round(f*100)/100,unitSecondaryCost:Math.round(g*100)/100,secondaryBreakdown:x,unitSubtotal:Math.round(M*100)/100,discountPercent:I,discountedUnitPrice:Math.round(k*100)/100,orderTotalBeforeMin:Math.round(C*100)/100,minimumOrderFloorApplied:S,finalOrderTotal:Math.round(F*100)/100,finalUnitPrice:Math.round(H*100)/100,gstAmount:Math.round(y*100)/100,cgstAmount:Math.round(m*100)/100,sgstAmount:Math.round(b*100)/100,igstAmount:Math.round(v*100)/100,finalTotalWithGst:Math.round(h*100)/100,hsnSacCode:c}}function In(n,e,i,t,o,s,a=_e){const d=o.currency==="INR"?"₹":"$",f=o.quotingMode;let c="WITH MATERIAL (SUPPLY & CUT)";f==="job_work"&&(c="JOB WORK (LABOUR ONLY)"),f==="sqft_jali"&&(c="ARCHITECTURAL JALI (SQ.FT BASIS)");const u=(e.boundingBoxWidthMm/304.8*(e.boundingBoxHeightMm/304.8)).toFixed(2),$=a.assistGas==="nitrogen"?"N2 (Nitrogen)":a.assistGas==="oxygen"?"O2 (Oxygen)":"High-Pressure Air";return`*QUOTATION — ${s.toUpperCase()}*
Ref: CNC-Q${Math.floor(1e3+Math.random()*9e3)} | Mode: *${c}*

*Part:* ${n} (${e.boundingBoxWidthMm.toFixed(0)} × ${e.boundingBoxHeightMm.toFixed(0)} mm / ${u} sq.ft)
*Material:* ${i} (${t.gaugeName})
*Assist Gas:* ${$}
*Quantity:* ${o.quantity} pcs

----------------------------------
${f==="job_work"?`• Raw Material: *Supplied by Customer*
• Cut Meters: ${(e.totalCutLengthMm/1e3).toFixed(2)} m (${e.pierceCount*o.quantity} pierces)
• Cutting & Piercing: ${d}${((o.unitCutCost+o.unitPierceCost)*o.quantity).toFixed(2)}
• Plate Loading Fee: ${d}${(o.unitHandlingCost*o.quantity).toFixed(2)}`:f==="sqft_jali"?`• Total Panel Area: ${(parseFloat(u)*o.quantity).toFixed(2)} sq.ft
• Fabrication Rate: ${d}${(o.unitMaterialCost*o.quantity).toFixed(2)}`:`• Est. Net Weight: ${(e.theoreticalWeightKg*o.quantity).toFixed(2)} kg
• Cut Length: ${(e.totalCutLengthMm/1e3).toFixed(2)} meters (${e.pierceCount*o.quantity} pierces)
• Material Cost: ${d}${(o.unitMaterialCost*o.quantity).toFixed(2)}
• Laser Cutting: ${d}${((o.unitCutCost+o.unitPierceCost)*o.quantity).toFixed(2)}`}
${o.unitSecondaryCost>0?`• Secondary Operations: ${d}${(o.unitSecondaryCost*o.quantity).toFixed(2)}
`:""}${o.discountPercent>0?`• Volume Discount: -${o.discountPercent}%
`:""}----------------------------------
*Subtotal:* ${d}${o.finalOrderTotal.toFixed(2)}
${o.gstAmount>0?a.isInterstateSale?`*IGST (18%):* ${d}${o.igstAmount.toFixed(2)}
*FINAL TOTAL (INC. GST):* ${d}${o.finalTotalWithGst.toFixed(2)}`:`*CGST (9%):* ${d}${o.cgstAmount.toFixed(2)}
*SGST (9%):* ${d}${o.sgstAmount.toFixed(2)}
*FINAL TOTAL (INC. GST):* ${d}${o.finalTotalWithGst.toFixed(2)}`:`*FINAL TOTAL:* ${d}${o.finalOrderTotal.toFixed(2)}`}
----------------------------------
• ${o.hsnSacCode}
• CypCut Ready DXF pre-generated for production.
• Turnaround: 24 to 48 Hours.
• Advance: 50% with PO to confirm. UPI: ${a.upiId||"shop@upi"}`}function we(n,e=_e,i=fe[0],t=!0){const o=e.currency==="INR";let s=0,a=0,r=0,d=0,f=0,c=0,u=0,$=0,x=0;const g=[];for(const l of n){const p=l.quantity;s+=p,a+=l.metrics.totalCutLengthMm/1e3*p,r+=l.metrics.pierceCount*p,d+=l.metrics.theoreticalWeightKg*p,f+=l.unitQuote.unitMaterialCost*p,c+=l.unitQuote.unitCutCost*p,u+=l.unitQuote.unitPierceCost*p,$+=l.unitQuote.unitHandlingCost*p,x+=l.unitQuote.unitSecondaryCost*p,g.push({id:l.id,name:l.partGeometry.name,boundingBox:l.partGeometry.boundingBox,quantity:p,thicknessMm:l.gaugeThicknessMm,color:l.color})}const M=n.length>0?Math.max(...n.map(l=>l.gaugeThicknessMm)):6,I=an(g,i,M,7.85,{allowRotation:t}),k=f+c+u+$+x;let C=0;if(e.quantityTiers&&e.quantityTiers.length>0)for(const l of e.quantityTiers)s>=l.minQty&&l.discountPercent>C&&(C=l.discountPercent);const S=k*(C/100),F=Math.max(e.minimumOrderFee,k-S),H=o?e.gstPercent/100:0,y=F*H;let m=0,b=0,v=0;o&&y>0&&(e.isInterstateSale?v=y:(m=y/2,b=y/2));const h=F+y;return{currency:e.currency,totalItemsCount:n.length,totalPartsCount:s,totalCutLengthMeters:Math.round(a*100)/100,totalPierces:r,totalNetPartMassKg:Math.round(d*100)/100,totalMaterialCost:Math.round(f*100)/100,totalCutCost:Math.round(c*100)/100,totalPierceCost:Math.round(u*100)/100,totalHandlingCost:Math.round($*100)/100,totalSecondaryCost:Math.round(x*100)/100,subtotalBeforeDiscount:Math.round(k*100)/100,volumeDiscountPercent:C,discountAmount:Math.round(S*100)/100,orderTotalBeforeGst:Math.round(F*100)/100,gstAmount:Math.round(y*100)/100,cgstAmount:Math.round(m*100)/100,sgstAmount:Math.round(b*100)/100,igstAmount:Math.round(v*100)/100,finalTotalWithGst:Math.round(h*100)/100,nestingResult:I}}function mo(n,e){const t=e.currency==="INR"?"₹":"$",o=n.shopSettings;let s="";for(let r=0;r<n.items.length;r++){const d=n.items[r],f=d.totalPrice.toFixed(2);s+=`${r+1}. *${d.partGeometry.name}* (${d.materialName} ${d.gaugeThicknessMm}mm)
   • Qty: ${d.quantity} pcs @ ${t}${d.unitQuote.finalUnitPrice.toFixed(2)} = *${t}${f}*
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
• Instant UPI Pay: ${o.upiId||"shop@upi"}`}function ho(n,e="91"){const i=n.replace(/[\s\-\(\)\.]/g,"");return i?i.startsWith("+")?i.substring(1):i.length===10&&/^\d+$/.test(i)?`${e}${i}`:i:""}function Sn(n,e,i="91"){const t=e?ho(e,i):"",o=encodeURIComponent(n);return t?`https://wa.me/${t}?text=${o}`:`https://wa.me/?text=${o}`}const ln="cad_cnc_shop_settings_",cn="cad_cnc_materials_";function Rn(n,e){if(typeof window>"u"||!window.localStorage)return{...e};try{const i=window.localStorage.getItem(`${ln}${n.toLowerCase()}`);if(i){const t=JSON.parse(i);return{...e,...t}}}catch(i){console.warn("Failed to load shop settings from localStorage",i)}return{...e}}function go(n,e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(`${ln}${n.toLowerCase()}`,JSON.stringify(e))}catch(i){console.warn("Failed to save shop settings to localStorage",i)}}function On(n,e){if(typeof window>"u"||!window.localStorage)return JSON.parse(JSON.stringify(e));try{const i=window.localStorage.getItem(`${cn}${n.toLowerCase()}`);if(i)return JSON.parse(i)}catch(i){console.warn("Failed to load materials from localStorage",i)}return JSON.parse(JSON.stringify(e))}function po(n,e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(`${cn}${n.toLowerCase()}`,JSON.stringify(e))}catch(i){console.warn("Failed to save materials to localStorage",i)}}function fo(n){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.removeItem(`${ln}${n.toLowerCase()}`),window.localStorage.removeItem(`${cn}${n.toLowerCase()}`)}catch(e){console.warn("Failed to reset storage",e)}}function Pn(n,e,i,t,o,s,a=Ce,r="Valued Customer"){const d=o.currency==="USD",f=d?"$":"₹",c=`RFQ-${Math.floor(1e3+Math.random()*9e3)}`,u=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),$=d?`${e.boundingBoxWidthInches.toFixed(2)}" × ${e.boundingBoxHeightInches.toFixed(2)}" (${t.thicknessInches.toFixed(3)}" plate)`:`${e.boundingBoxWidthMm.toFixed(0)} × ${e.boundingBoxHeightMm.toFixed(0)} mm (${t.thicknessMm} mm)`,x=d?`${e.totalCutLengthInches.toFixed(1)} inches (${e.pierceCount} pierces)`:`${(e.totalCutLengthMm/1e3).toFixed(2)} meters (${e.pierceCount} pierces)`,g=d?`${e.theoreticalWeightLbs.toFixed(2)} lbs`:`${e.theoreticalWeightKg.toFixed(2)} kg`,M=d?`${(e.theoreticalWeightLbs*o.quantity).toFixed(2)} lbs`:`${(e.theoreticalWeightKg*o.quantity).toFixed(2)} kg`;return`Subject: Quotation: ${n} (Ref #${c}) — ${s}

Dear ${r},

Thank you for requesting a quotation from ${s}. Below is your instant manufacturing cost estimate:

QUOTATION SUMMARY
--------------------------------------------------
Quote Ref: ${c}
Date: ${u}
Valid For: 15 Calendar Days

PART SPECIFICATIONS & BILL OF MATERIALS:
• Part Name: ${n}
• Material: ${i} — ${t.gaugeName}
• Part Dimensions: ${$}
• Est. Unit Weight: ${g} (Total Lot: ${M})
• Laser Cut Profile: ${x}
• Order Quantity: ${o.quantity} piece${o.quantity>1?"s":""}

COST BREAKDOWN:
--------------------------------------------------
• Raw Material: ${f}${o.unitMaterialCost.toFixed(2)} / pc
• Laser Cutting & Piercing: ${f}${(o.unitCutCost+o.unitPierceCost).toFixed(2)} / pc
${o.unitSecondaryCost>0?`• Secondary Operations (Forming/Deburr): ${f}${o.unitSecondaryCost.toFixed(2)} / pc
`:""}${o.discountPercent>0?`• Volume Discount (${o.discountPercent}% applied): -${f}${((o.unitSubtotal-o.discountedUnitPrice)*o.quantity).toFixed(2)}
`:""}--------------------------------------------------
Unit Price: ${f}${o.finalUnitPrice.toFixed(2)} each
Subtotal: ${f}${o.finalOrderTotal.toFixed(2)}
${o.gstAmount>0?`Estimated Sales Tax / GST: ${f}${o.gstAmount.toFixed(2)}
Total (Inc. Tax): ${f}${o.finalTotalWithGst.toFixed(2)}`:`Total: ${f}${o.finalOrderTotal.toFixed(2)}`}

COMMERCIAL TERMS:
• Lead Time: ${a.leadTimeDays||3} to 5 Business Days After Receipt of Order (ARO)
• Delivery Terms: FOB Origin / Ex-Works
• Payment Terms: Net 30 (for approved accounts) or Credit Card / ACH
• CAM Verification: Trumpf / SigmaNEST cut-ready DXF verified for production

To approve this quotation and release your order to our cutting schedule, please reply directly to this email with your PO number or authorization.

Best regards,

Estimating & Engineering Team
${s}
${a.shopPhone||""} | ${a.shopAddress||""}`}function yo(n,e,i="Valued Customer"){const o=e.currency==="USD"?"$":"₹",s=n.shopSettings,a=`PRJ-${Math.floor(1e3+Math.random()*9e3)}`,r=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});let d="";for(let c=0;c<n.items.length;c++){const u=n.items[c],x=u.partGeometry.units==="inch"?`${u.partGeometry.boundingBox.width.toFixed(2)}" × ${u.partGeometry.boundingBox.height.toFixed(2)}"`:`${u.partGeometry.boundingBox.width.toFixed(0)} × ${u.partGeometry.boundingBox.height.toFixed(0)} mm`;d+=`${c+1}. ${u.partGeometry.name}
   Specs: ${u.materialName} (${u.gaugeThicknessMm}mm / ${x})
   Qty: ${u.quantity} pcs @ ${o}${u.unitQuote.finalUnitPrice.toFixed(2)} = ${o}${u.totalPrice.toFixed(2)}

`}const f=e.nestingResult.sheetSize.name.split(" - ")[0]||"Standard Sheet";return`Subject: Quotation: ${n.projectName||"Sheet Metal Project RFQ"} (Ref #${a}) — ${s.shopName}

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
${d}--------------------------------------------------
SHEET NESTING & MATERIAL EFFICIENCY:
• Sheet Stock: ${e.nestingResult.sheetsRequired} Sheet(s) of ${f}
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
${s.shopPhone||""} | ${s.shopAddress||""}`}function Gn(n,e=2500){const i=[],t=e/60,o=.5;let s=0;for(let f=0;f<n.innerHoles.length;f++){const c=n.innerHoles[f];if(s++,"radius"in c){const u=c,$=2*Math.PI*u.radius,x={x:u.center.x,y:u.center.y},g=[{type:"arc",center:u.center,radius:u.radius,startAngle:0,endAngle:2*Math.PI,counterClockwise:!0}];i.push({stepIndex:s,label:`Inner Hole #${f+1} (Ø${(u.radius*2).toFixed(n.units==="inch"?2:1)}${n.units==="inch"?"in":"mm"})`,layerName:"Layer 1 (Yellow)",layerColor:"#eab308",isOuter:!1,piercePoint:x,segments:g,lengthMm:$,simulatedDurationSec:o+$/t})}else{const u=c,$=Te(u);let x=1/0,g=1/0,M=-1/0,I=-1/0;for(const S of u.segments)S.type==="line"?(x=Math.min(x,S.start.x,S.end.x),g=Math.min(g,S.start.y,S.end.y),M=Math.max(M,S.start.x,S.end.x),I=Math.max(I,S.start.y,S.end.y)):(x=Math.min(x,S.center.x-S.radius),g=Math.min(g,S.center.y-S.radius),M=Math.max(M,S.center.x+S.radius),I=Math.max(I,S.center.y+S.radius));const k=u.segments[0],C=isFinite(x)?{x:(x+M)/2,y:(g+I)/2}:k?k.type==="line"?k.start:{x:k.center.x+k.radius*Math.cos(k.startAngle),y:k.center.y+k.radius*Math.sin(k.startAngle)}:{x:0,y:0};i.push({stepIndex:s,label:`Inner Cutout #${f+1}`,layerName:"Layer 1 (Yellow)",layerColor:"#eab308",isOuter:!1,piercePoint:C,segments:u.segments,lengthMm:$,simulatedDurationSec:o+$/t})}}s++;const a=Te(n.outerContour),r=n.outerContour.segments[0],d=r?r.type==="line"?r.start:{x:r.center.x+r.radius*Math.cos(r.startAngle),y:r.center.y+r.radius*Math.sin(r.startAngle)}:{x:0,y:0};return i.push({stepIndex:s,label:`Outer Perimeter (${n.name})`,layerName:"Layer 0 (White/Green)",layerColor:"#22c55e",isOuter:!0,piercePoint:d,segments:n.outerContour.segments,lengthMm:a,simulatedDurationSec:o+a/t}),i}function xo(n){if("radius"in n){const{center:{x:e,y:i},radius:t}=n;return`M ${(e-t).toFixed(3)} ${i.toFixed(3)} A ${t.toFixed(3)} ${t.toFixed(3)} 0 1 0 ${(e+t).toFixed(3)} ${i.toFixed(3)} A ${t.toFixed(3)} ${t.toFixed(3)} 0 1 0 ${(e-t).toFixed(3)} ${i.toFixed(3)} Z`}return De(n)}function dn(n,e={}){if(e.viewStyle==="realistic_gate"&&e.jaliParams)return bo(n,e.jaliParams);const t=n.units==="inch"?1/25.4:1,o=n.boundingBox,s=Math.max(35*t,o.width*.14),a=Math.max(50*t,o.height*.22),r=Math.max(55*t,o.height*.24),d=Math.max(80*t,o.width*.3),f=o.minX-s,c=o.minY-r,u=o.width+s+d,$=o.height+r+a,x=e.simulationState,g=Gn(n);let M="";const I=x&&x.activeStepIndex===g.length,k=x&&x.activeStepIndex>g.length,C=De(n.outerContour);M+=`<path d="${C}" fill="rgba(34, 197, 94, 0.08)" stroke="${I?"#4ade80":k?"#16a34a":"#22c55e"}" stroke-width="${I?3:2}" vector-effect="non-scaling-stroke" stroke-linejoin="round" />`;function H(ot){let Z=1/0,it=1/0,et=-1/0,tt=-1/0;for(const z of ot.segments)z.type==="line"?(Z=Math.min(Z,z.start.x,z.end.x),it=Math.min(it,z.start.y,z.end.y),et=Math.max(et,z.start.x,z.end.x),tt=Math.max(tt,z.start.y,z.end.y)):(Z=Math.min(Z,z.center.x-z.radius),it=Math.min(it,z.center.y-z.radius),et=Math.max(et,z.center.x+z.radius),tt=Math.max(tt,z.center.y+z.radius));return isFinite(Z)?{x:(Z+et)/2,y:(it+tt)/2}:{x:0,y:0}}let y=0;for(let ot=0;ot<n.innerHoles.length;ot++){const Z=n.innerHoles[ot];y++;const it=x&&x.activeStepIndex===y,et=x&&x.activeStepIndex>y,tt=(e.dfmIssues||[]).filter(K=>K.holeIndex===ot),z=tt.some(K=>K.severity==="error"),xt=tt.some(K=>K.severity==="warning"),bt=e.highlightedHoleIndex===ot;let mt=it?"#facc15":et?"#ca8a04":"#eab308",ht="rgba(234, 179, 8, 0.12)",gt=it?2.5:1.8;z?(mt="#ef4444",ht="rgba(239, 68, 68, 0.22)",gt=2.4):xt&&(mt="#f59e0b",ht="rgba(245, 158, 11, 0.20)",gt=2.2),bt&&(mt="#38bdf8",ht="rgba(56, 189, 248, 0.32)",gt=3.2);const ft=`Hole #${ot+1}${tt.length>0?" — "+tt.map(K=>K.message).join(" | "):" (Inner Cutout)"}`;if(M+=`<g class="cad-hole cad-hole-${ot} ${xt?"dfm-hole-warning":""} ${z?"dfm-hole-error":""} ${bt?"hole-highlighted":""}" data-hole-index="${ot}" style="cursor: pointer;">`,M+=`<title>${ft}</title>`,"radius"in Z){const K=Z;if(bt)M+=`<circle cx="${K.center.x}" cy="${K.center.y}" r="${K.radius+5*t}" fill="none" stroke="#38bdf8" stroke-width="${2*t}" stroke-dasharray="${3*t},${2*t}">
          <animate attributeName="r" values="${K.radius+3*t};${K.radius+7*t}" dur="0.9s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.4;1" dur="0.9s" repeatCount="indefinite" />
        </circle>`;else if(xt||z){const Yt=z?"#ef4444":"#f59e0b";M+=`<circle cx="${K.center.x}" cy="${K.center.y}" r="${K.radius+2.5*t}" fill="none" stroke="${Yt}" stroke-width="${1.2*t}" stroke-dasharray="${2.5*t},${2.5*t}" opacity="0.85" />`}M+=`<circle cx="${K.center.x}" cy="${K.center.y}" r="${K.radius}" fill="${ht}" stroke="${mt}" stroke-width="${gt}" vector-effect="non-scaling-stroke" />`;const At=Math.min(10*t,K.radius*.6);M+=`<line x1="${K.center.x-At}" y1="${K.center.y}" x2="${K.center.x+At}" y2="${K.center.y}" stroke="${xt||z?mt:"rgba(234, 179, 8, 0.5)"}" stroke-width="1" vector-effect="non-scaling-stroke" />`,M+=`<line x1="${K.center.x}" y1="${K.center.y-At}" x2="${K.center.x}" y2="${K.center.y+At}" stroke="${xt||z?mt:"rgba(234, 179, 8, 0.5)"}" stroke-width="1" vector-effect="non-scaling-stroke" />`}else{const K=De(Z);M+=`<path d="${K}" fill="${ht}" stroke="${mt}" stroke-width="${gt}" vector-effect="non-scaling-stroke" stroke-linejoin="round" />`}M+="</g>"}const m=(e.showCutOrder||x)&&!e.hideCamBadges;let b="";const v=n.innerHoles.length>20,h=v?Math.max(6*t,Math.min(10*t,u*.012)):Math.max(9*t,Math.min(16*t,u*.022));if(m){let ot="";for(let Z=0;Z<g.length;Z++){const it=g[Z].piercePoint;Z===0?ot+=`M ${it.x.toFixed(3)} ${it.y.toFixed(3)}`:ot+=` L ${it.x.toFixed(3)} ${it.y.toFixed(3)}`}b+=`<path d="${ot}" fill="none" stroke="#38bdf8" stroke-dasharray="${3*t},${3*t}" stroke-width="${1*t}" opacity="0.45" />`;for(const Z of g){const it=Z.piercePoint,et=x&&x.activeStepIndex===Z.stepIndex,tt=Z.isOuter?null:Z.stepIndex-1,z=tt!==null?(e.dfmIssues||[]).filter(Nt=>Nt.holeIndex===tt):[],xt=z.some(Nt=>Nt.severity==="error"),bt=z.some(Nt=>Nt.severity==="warning"),mt=tt!==null&&e.highlightedHoleIndex===tt;let ht=Z.isOuter?"#22c55e":"#eab308",gt=et?"#ffffff":"#0f172a",ft="#0b1120";xt?(ht="#ef4444",gt=mt?"#ffffff":"#7f1d1d",ft="#ffffff"):bt&&(ht="#f59e0b",gt=mt?"#ffffff":"#78350f",ft="#0b1120"),mt&&(gt="#38bdf8");const K=(et?3*t:0)+(mt?4*t:0),At=mt?`<circle cx="0" cy="0" r="${h+7*t}" fill="none" stroke="#38bdf8" stroke-width="${2*t}">
             <animate attributeName="r" values="${h+5*t};${h+9*t}" dur="0.8s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="indefinite" />
           </circle>`:"",Yt=(bt||xt)&&!mt?`<circle cx="0" cy="0" r="${h+3.5*t}" fill="none" stroke="${xt?"#ef4444":"#f59e0b"}" stroke-width="${1.2*t}" stroke-dasharray="${2*t},${2*t}" />`:"",re=Z.isOuter?`Outer Perimeter Cut (Step #${Z.stepIndex})`:`Hole #${Z.stepIndex}${z.length>0?" — "+z.map(Nt=>Nt.message).join(" | "):" (Inner Cutout)"}`;b+=`
        <g class="cam-badge ${tt!==null?`cam-badge-hole-${tt}`:"cam-badge-outer"} ${bt?"cam-badge-warning":""} ${xt?"cam-badge-error":""}" 
           ${tt!==null?`data-hole-index="${tt}"`:""} 
           transform="translate(${it.x}, ${it.y}) scale(1, -1)" 
           style="cursor: pointer;">
          <title>${re}</title>
          ${At}
          ${Yt}
          <circle cx="0" cy="0" r="${h+K}" fill="${ht}" stroke="${gt}" stroke-width="${(et||mt?2.2:1.2)*t}" />
          <text x="0" y="0" text-anchor="middle" dominant-baseline="central" font-size="${h*(v?.95:1.1)}" font-family="'JetBrains Mono', monospace" font-weight="800" fill="${ft}">
            ${Z.stepIndex}
          </text>
        </g>
      `}}else for(let ot=0;ot<n.innerHoles.length;ot++){const Z=(e.dfmIssues||[]).filter(et=>et.holeIndex===ot),it=e.highlightedHoleIndex===ot;if(Z.length>0||it){const et=n.innerHoles[ot],tt="radius"in et?et.center:H(et),z=Z.some(ft=>ft.severity==="error"),xt=it?"#38bdf8":z?"#ef4444":"#f59e0b",bt=it?"#ffffff":z?"#7f1d1d":"#78350f",mt=z?"#ffffff":"#0b1120",ht=h*1.15,gt=it?`<circle cx="0" cy="0" r="${ht+6*t}" fill="none" stroke="#38bdf8" stroke-width="${2*t}">
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
    `}const p=n.units,N="#94a3b8",G=Math.max(u,$),O=Math.max(14*t,G*.028),W=Math.max(20*t,G*.025),T=1.5*t,E=8*t,A=3.5*t,R=o.maxY+a*.55,V=`
    <g class="dim-leader" stroke="${N}" stroke-width="${T}" fill="${N}">
      <line x1="${o.minX}" y1="${o.maxY}" x2="${o.minX}" y2="${R+E}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${o.maxX}" y1="${o.maxY}" x2="${o.maxX}" y2="${R+E}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${o.minX}" y1="${R}" x2="${o.maxX}" y2="${R}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${(o.minX+o.maxX)/2}" y="${R+O*.9}" text-anchor="middle" font-size="${O}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#0b1120" stroke-width="${A}" paint-order="stroke fill" letter-spacing="0.02em">
        ${o.width.toFixed(2)} ${p}
      </text>
    </g>
  `,Y=o.maxX+W,yt=`
    <g class="dim-leader" stroke="${N}" stroke-width="${T}" fill="${N}">
      <line x1="${o.maxX}" y1="${o.minY}" x2="${Y+E}" y2="${o.minY}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${o.maxX}" y1="${o.maxY}" x2="${Y+E}" y2="${o.maxY}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${Y}" y1="${o.minY}" x2="${Y}" y2="${o.maxY}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${Y+O*.5}" y="${(o.minY+o.maxY)/2+O*.35}" text-anchor="start" font-size="${O}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#0b1120" stroke-width="${A}" paint-order="stroke fill" letter-spacing="0.02em">
        ${o.height.toFixed(2)} ${p}
      </text>
    </g>
  `,It=Math.max(10*t,u/20);return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${f} ${c} ${u} ${$}" width="100%" height="100%" style="background-color: #0b1120; border-radius: 8px;">
      <defs>
        <pattern id="cadGrid" width="${It}" height="${It}" patternUnits="userSpaceOnUse">
          <path d="M ${It} 0 L 0 0 0 ${It}" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="${1*t}"/>
        </pattern>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
        </marker>
      </defs>
      <rect x="${f}" y="${c}" width="${u}" height="${$}" fill="url(#cadGrid)" />
      
      <!-- Part Paths (Y flipped for CAD orientation) -->
      <g transform="translate(0, ${o.minY+o.maxY}) scale(1, -1)">
        ${M}
        ${b}
        ${l}
      </g>

      <!-- Dimensions -->
      ${V}
      ${yt}
    </svg>
  `}function bo(n,e){const i=e.units==="inch",t=i?1/25.4:1,o=n.boundingBox.width,s=n.boundingBox.height,a=e.finishMaterial||"matte_black",r=e.backlightColor||"warm_white",d=e.gateType||"single_swing",f=d==="double_swing",c=d==="wall_panel",u=!c&&e.hasFrameTube!==!1,$=e.frameTubeWidthMm??(i?2:50),x=i?$>10?$/25.4:$:$<10?$*25.4:$,g=u?x:0,M=!c&&!!e.hasKickPlate,I=e.kickPlateHeightMm??(i?12:300),k=i?I>30?I/25.4:I:I<30?I*25.4:I,C=M?Math.max(0,Math.min(s*.4,k)):0,S=!c&&e.hasHinges!==!1,F=!c&&e.hasPullHandle!==!1,H=!c&&e.hasLockBox!==!1,y=o+(u?2*g:0),m=s+(u?2*g:0),b=f?i?.6:15:0,v=f?y*2+b:y,h=m,l=Math.max(v,h),p=Math.max(16*t,l*.03),N=Math.max(16*t,l*.034),G=Math.max(7*t,l*.011),O=Math.max(36*t,l*.045),W=Math.max(32*t,l*.04),T=Math.max(45*t,v*.12),E=Math.max(45*t,W+p*3.8),A=Math.max(55*t,h*.08,N*2.8),R=Math.max(55*t,O+p*2.4),V=-T,Y=-A,yt=v+T+E,It=h+A+R,ot=De(n.outerContour),Z=n.innerHoles.map(xo).join(" "),it=`${ot} ${Z}`;let et="#475569",tt="#334155",z="#94a3b8";a==="royal_gold"?(et="#fef08a",tt="#b45309",z="#fde047"):a==="corten_rust"?(et="#fdba74",tt="#7c2d12",z="#ea580c"):a==="brushed_stainless"?(et="#ffffff",tt="#475569",z="#e2e8f0"):a==="champagne_bronze"&&(et="#fcd34d",tt="#78350f",z="#fbbf24");const xt=(Ot,Zt=!1)=>{const pt=Ot+(u?g:0),wt=u?g:0;let Tt="";if(r!=="none"&&(Tt+=`
        <rect x="${pt}" y="${wt}" width="${o}" height="${s}" 
              fill="url(#glow_${r})" filter="url(#backlightBlur)" opacity="0.9" rx="${3*t}" />
      `),Tt+=`
      <g transform="translate(${pt}, ${wt})">
        <!-- Negative space perforated sheet metal plate -->
        <path d="${it}" fill-rule="evenodd" fill="url(#mat_${a})" 
              filter="url(#plateShadow)" stroke="${et}" stroke-width="${.8*t}" stroke-opacity="0.6" />
        <!-- Inner cutout specular rim highlight -->
        <path d="${Z}" fill="none" stroke="${et}" stroke-width="${.6*t}" stroke-opacity="0.4" />
      </g>
    `,M&&C>0){const nt=wt+s-C;Tt+=`
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
      `}if(u){const nt=Ot,rt=0;Tt+=`
        <!-- Structural Box Tube Outer Frame -->
        <g class="box-tube-frame" filter="url(#frameShadow)">
          <!-- Top horizontal tube -->
          <rect x="${nt}" y="${rt}" width="${y}" height="${g}" fill="url(#tube_${a}_h)" stroke="${tt}" stroke-width="${1.2*t}" />
          <!-- Bottom horizontal tube -->
          <rect x="${nt}" y="${rt+m-g}" width="${y}" height="${g}" fill="url(#tube_${a}_h)" stroke="${tt}" stroke-width="${1.2*t}" />
          <!-- Left vertical tube -->
          <rect x="${nt}" y="${rt+g}" width="${g}" height="${m-2*g}" fill="url(#tube_${a}_v)" stroke="${tt}" stroke-width="${1.2*t}" />
          <!-- Right vertical tube -->
          <rect x="${nt+y-g}" y="${rt+g}" width="${g}" height="${m-2*g}" fill="url(#tube_${a}_v)" stroke="${tt}" stroke-width="${1.2*t}" />
          
          <!-- Mitred 45-degree corner weld seams -->
          <line x1="${nt}" y1="${rt}" x2="${nt+g}" y2="${rt+g}" stroke="${et}" stroke-width="${1.2*t}" stroke-opacity="0.7" />
          <line x1="${nt+y}" y1="${rt}" x2="${nt+y-g}" y2="${rt+g}" stroke="${et}" stroke-width="${1.2*t}" stroke-opacity="0.7" />
          <line x1="${nt}" y1="${rt+m}" x2="${nt+g}" y2="${rt+m-g}" stroke="${et}" stroke-width="${1.2*t}" stroke-opacity="0.7" />
          <line x1="${nt+y}" y1="${rt+m}" x2="${nt+y-g}" y2="${rt+m-g}" stroke="${et}" stroke-width="${1.2*t}" stroke-opacity="0.7" />
        </g>
      `}if(S){const rt=!Zt?Ot-6*t:Ot+y-6*t,Mt=[m*.15,m*.85];m>(i?48:1200)&&Mt.splice(1,0,m*.5);for(const $t of Mt)Tt+=`
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
        `}if(F||H){const nt=Zt,rt=nt?Ot+(u?g/2:25*t):Ot+y-(u?g/2:25*t),Mt=m*.5;if(H){const $t=Math.max(30*t,g*.8),Vt=90*t,St=nt?Ot+(u?4*t:8*t):Ot+y-(u?g-4*t:38*t);Tt+=`
          <!-- Lock Box & Keyway -->
          <g class="lockbox" transform="translate(${St}, ${Mt-Vt/2})">
            <rect x="0" y="0" width="${$t}" height="${Vt}" rx="${4*t}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1.2*t}" />
            <!-- Key cylinder -->
            <circle cx="${$t/2}" cy="${28*t}" r="${7*t}" fill="#1e293b" stroke="#64748b" stroke-width="${1*t}" />
            <rect x="${$t/2-2*t}" y="${28*t}" width="${4*t}" height="${9*t}" fill="#0f172a" />
            <!-- Modern lever latch -->
            <rect x="${nt?$t/2-18*t:$t/2+2*t}" y="${58*t}" width="${20*t}" height="${7*t}" rx="${2*t}" fill="#e2e8f0" stroke="#0f172a" stroke-width="${.8*t}" />
          </g>
        `}if(F){const $t=Math.min(m*.45,600*t),Vt=(nt?28:-28)*t,St=rt+Vt;Tt+=`
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
        `}}if(c){const nt=Math.max(8*t,o*.018),rt=[{x:pt+25*t,y:wt+25*t},{x:pt+o-25*t,y:wt+25*t},{x:pt+o-25*t,y:wt+s-25*t},{x:pt+25*t,y:wt+s-25*t}];s>(i?36:900)&&(rt.push({x:pt+25*t,y:wt+s/2}),rt.push({x:pt+o-25*t,y:wt+s/2}));for(const Mt of rt)Tt+=`
          <!-- Stainless Standoff Screw Head -->
          <g class="standoff-mount" transform="translate(${Mt.x}, ${Mt.y})">
            <circle cx="0" cy="0" r="${nt}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1.2*t}" filter="url(#handleShadow)" />
            <!-- Hex Socket -->
            <polygon points="${-3*t},${-1.7*t} 0,${-3.4*t} ${3*t},${-1.7*t} ${3*t},${1.7*t} 0,${3.4*t} ${-3*t},${1.7*t}" fill="#1e293b" />
          </g>
        `}return Tt};let bt="";f?(bt+=xt(0,!1),bt+=xt(y+b,!0),bt+=`
      <!-- Double Swing Center Slide Drop Bolt -->
      <g class="center-drop-bolt" transform="translate(${y+b/2-12*t}, ${4*t})">
        <rect x="0" y="0" width="${24*t}" height="${42*t}" rx="${3*t}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1*t}" />
        <rect x="${9*t}" y="${8*t}" width="${6*t}" height="${24*t}" rx="${2*t}" fill="#cbd5e1" />
      </g>
    `):bt+=xt(0,!1);const mt=e.units,ht="#94a3b8",gt=h+O*.6,ft=`
    <g class="dim-leader" stroke="${ht}" stroke-width="${1.6*t}" fill="${ht}">
      <line x1="0" y1="${h+8*t}" x2="0" y2="${gt+10*t}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${v}" y1="${h+8*t}" x2="${v}" y2="${gt+10*t}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="0" y1="${gt}" x2="${v}" y2="${gt}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${v/2}" y="${gt+p*.9}" text-anchor="middle" font-size="${p}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#080c14" stroke-width="${4.5*t}" paint-order="stroke fill" letter-spacing="0.02em">
        ${v.toFixed(i?2:0)} ${mt} ${f?`(2× ${y.toFixed(i?2:0)} ${mt} Leaves)`:""}
      </text>
    </g>
  `,K=v+W*.6,At=`
    <g class="dim-leader" stroke="${ht}" stroke-width="${1.6*t}" fill="${ht}">
      <line x1="${v+8*t}" y1="0" x2="${K+10*t}" y2="0" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${v+8*t}" y1="${h}" x2="${K+10*t}" y2="${h}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${K}" y1="0" x2="${K}" y2="${h}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${K+p*.5}" y="${h/2+p*.35}" text-anchor="start" font-size="${p}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#080c14" stroke-width="${4.5*t}" paint-order="stroke fill" letter-spacing="0.02em">
        ${h.toFixed(i?2:0)} ${mt}
      </text>
    </g>
  `,Yt=a.replace(/_/g," ").toUpperCase(),re=(e.patternType||"architectural_jali").replace(/_/g," ").toUpperCase(),Nt=f?"DOUBLE SWING ENTRANCE GATE":c?"WALL JALI SCREEN PANEL":"SINGLE SWING GATE";return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${V} ${Y} ${yt} ${It}" width="100%" height="100%" style="background-color: #080c14; border-radius: 8px;">
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

        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="${G}" markerHeight="${G}" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
        </marker>
      </defs>

      <!-- Architectural Backdrop Wall with subtle ambient spotlight -->
      <radialGradient id="studioSpotlight" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stop-color="#141c2e" />
        <stop offset="60%" stop-color="#0b1120" />
        <stop offset="100%" stop-color="#050811" />
      </radialGradient>
      <rect x="${V}" y="${Y}" width="${yt}" height="${It}" fill="url(#studioSpotlight)" />

      <!-- Top Architectural Badge Label -->
      <g class="studio-title-badge" transform="translate(${v/2}, ${-A*.45})">
        <text text-anchor="middle" font-size="${N}" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" fill="#f1f5f9" stroke="#080c14" stroke-width="${5*t}" paint-order="stroke fill" letter-spacing="0.05em">
          ✨ ${Nt} — ${Yt} | ${re}
        </text>
      </g>

      <!-- Ground Baseline Reference -->
      <line x1="${-T*.3}" y1="${h+2*t}" x2="${v+E*.3}" y2="${h+2*t}" stroke="#334155" stroke-width="${1.5*t}" stroke-dasharray="${6*t},${4*t}" opacity="0.6" />

      <!-- Gate Leaves & Structure -->
      ${bt}

      <!-- Dimension Leaders -->
      ${ft}
      ${At}
    </svg>
  `}function $o(n,e=0){const i=n.sheetSize.widthMm,t=n.sheetSize.lengthMm,o=i*.08,s=t*.08,a=i+2*o,r=t+2*s;let d="";const f=n.packedParts.filter(x=>x.sheetIndex===e),c=["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"];for(const x of f){const g=x.color||c[x.partIndex%c.length],M=x.rotated,I=x.partName?`${x.partName}`:`#${x.partIndex+1}`,k=Math.max(11,Math.min(x.width,x.height)*.16);d+=`
      <g class="nested-part" id="part_${x.id}">
        <rect x="${x.x}" y="${x.y}" width="${x.width}" height="${x.height}" 
              fill="${g}25" stroke="${g}" stroke-width="2" rx="2" />
        <text x="${x.x+x.width/2}" y="${x.y+x.height/2-2}" 
              text-anchor="middle" font-size="${k}" 
              font-family="'JetBrains Mono', monospace" fill="#ffffff" font-weight="bold">
          ${I}
        </text>
        <text x="${x.x+x.width/2}" y="${x.y+x.height/2+k}" 
              text-anchor="middle" font-size="${Math.max(9,k*.75)}" 
              font-family="'JetBrains Mono', monospace" fill="#94a3b8">
          ${x.width.toFixed(0)} × ${x.height.toFixed(0)} mm ${M?"⟲90°":""}
        </text>
      </g>
    `}let u="";if(e===n.sheetsRequired-1&&n.remnantLengthMm>50){const x=t-n.remnantLengthMm;u=`
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
      ${d}

      <!-- Remnant Offcut -->
      ${u}

      <!-- Sheet Title & Dimensions -->
      <text x="${i/2}" y="-20" text-anchor="middle" font-size="${Math.max(16,i*.028)}" font-family="'JetBrains Mono', monospace" fill="#f8fafc" font-weight="700">
        ${n.sheetSize.name.toUpperCase()} (Sheet ${e+1} of ${n.sheetsRequired})
      </text>
      <text x="${i/2}" y="${t+35}" text-anchor="middle" font-size="${Math.max(14,i*.022)}" font-family="'JetBrains Mono', monospace" fill="#94a3b8">
        Utilization: ${n.sheetUtilizationPercent}% | Skeleton Scrap: ${n.totalSkeletonScrapMassKg} kg | Parts on Bed: ${f.length} / ${n.partsRequested}
      </text>
    </svg>
  `}function De(n){if(n.segments.length===0)return"";const e=[];for(let i=0;i<n.segments.length;i++){const t=n.segments[i];if(i===0){const o=t.type==="line"?t.start:{x:t.center.x+t.radius*Math.cos(t.startAngle),y:t.center.y+t.radius*Math.sin(t.startAngle)};e.push(`M ${o.x.toFixed(3)} ${o.y.toFixed(3)}`)}if(t.type==="line")e.push(`L ${t.end.x.toFixed(3)} ${t.end.y.toFixed(3)}`);else if(t.type==="arc"){const o=t.center.x+t.radius*Math.cos(t.endAngle),s=t.center.y+t.radius*Math.sin(t.endAngle);let a=t.endAngle-t.startAngle;t.counterClockwise?a<0&&(a+=2*Math.PI):a>0&&(a-=2*Math.PI);const r=Math.abs(a)>Math.PI?1:0,d=t.counterClockwise?1:0;e.push(`A ${t.radius.toFixed(3)} ${t.radius.toFixed(3)} 0 ${r} ${d} ${o.toFixed(3)} ${s.toFixed(3)}`)}}return n.isClosed&&e.push("Z"),e.join(" ")}function Co(n,e,i,t,o,s,a="Valued Customer",r=""){const d=o.currency==="INR",f=d?"₹":"$",c=d?`INV-${Math.floor(1e5+Math.random()*9e5)}`:`RFQ-${Math.floor(1e5+Math.random()*9e5)}`,u=d?new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),$=s.upiId||"shop@upi",x=o.finalTotalWithGst,g=Math.round(x/2*100)/100,M=`upi://pay?pa=${encodeURIComponent($)}&pn=${encodeURIComponent(s.shopName)}&am=${g.toFixed(2)}&cu=INR&tn=${encodeURIComponent(c)}`,I=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(M)}`,k=d?`Dim: ${e.boundingBoxWidthMm.toFixed(0)} × ${e.boundingBoxHeightMm.toFixed(0)} mm | Thick: ${t.thicknessMm} mm<br>Grade: ${i} (${t.gaugeName}) | Gas: ${s.assistGas.toUpperCase()}<br>Cut Length: ${(e.totalCutLengthMm/1e3).toFixed(2)} m | Pierces: ${e.pierceCount} / pc`:`Dim: ${e.boundingBoxWidthInches.toFixed(2)}" × ${e.boundingBoxHeightInches.toFixed(2)}" | Gauge: ${t.gaugeName}<br>Grade: ${i} | Gas: ${s.assistGas.toUpperCase()}<br>Cut Length: ${e.totalCutLengthInches.toFixed(1)} in | Pierces: ${e.pierceCount} / pc | Est. Weight: ${e.theoreticalWeightLbs.toFixed(2)} lbs`;return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${d?"Proforma Invoice":"Commercial Quotation"} - ${c}</title>
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
          <div>${s.shopAddress||(d?"MIDC Industrial Area, Pune, Maharashtra":"1420 Industrial Pkwy, Cleveland, OH 44135")}</div>
          <div>Phone: ${s.shopPhone||(d?"+91 98220 12345":"(216) 555-0198")} ${d?`| UPI: <strong>${$}</strong>`:""}</div>
          ${d?`<div>GSTIN: <strong>${s.shopGstin||"27AABCS1429B1Z8"}</strong> | State Code: 27 (MH)</div>`:"<div>Tax ID / Resale: <strong>Verified</strong> | Terms: <strong>Net 30 / Credit Card</strong></div>"}
        </div>
      </div>
      <div class="invoice-tag">
        <h2 class="invoice-title">${d?"PROFORMA INVOICE":"MANUFACTURING QUOTATION"}</h2>
        <div class="invoice-meta">
          <div>Ref No: <strong>${c}</strong></div>
          <div>Date: <strong>${u}</strong></div>
          <div>${d?`SAC/HSN: <strong>${o.hsnSacCode.split(" ")[0]}</strong>`:"Validity: <strong>15 Days</strong>"}</div>
        </div>
      </div>
    </div>

    <div class="bill-to-box">
      <strong>Customer:</strong> ${a} ${r?`(${r})`:""} — <em>Delivery: ${d?"Ex-Works / 24-48 Hours":"FOB Origin / 3-5 Business Days"}</em>
    </div>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Item Description & Specs</th>
          <th class="text-center">Mode</th>
          <th class="text-right">Qty</th>
          <th class="text-right">Unit Rate</th>
          <th class="text-right">Amount (${f})</th>
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
          <td class="text-center"><span style="background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 700;">${d?o.quotingMode.toUpperCase():"CUSTOM FAB"}</span></td>
          <td class="text-right">${o.quantity}</td>
          <td class="text-right">${f}${o.discountedUnitPrice.toFixed(2)}</td>
          <td class="text-right"><strong>${f}${(o.discountedUnitPrice*o.quantity).toFixed(2)}</strong></td>
        </tr>
        ${o.unitSecondaryCost>0?`
        <tr>
          <td>2</td>
          <td>
            <strong>Secondary Value-Add Operations</strong><br>
            <span style="font-size: 12px; color: #64748b;">
              ${o.secondaryBreakdown.bendingCost>0?`CNC Press Brake Bending (${f}${o.secondaryBreakdown.bendingCost}) | `:""}
              ${o.secondaryBreakdown.deburringCost>0?`Edge Deburring (${f}${o.secondaryBreakdown.deburringCost}) | `:""}
              ${o.secondaryBreakdown.tappingCost>0?`Tapping (${f}${o.secondaryBreakdown.tappingCost}) | `:""}
              ${o.secondaryBreakdown.surfaceFinishCost>0?`Surface Finishing (${f}${o.secondaryBreakdown.surfaceFinishCost})`:""}
            </span>
          </td>
          <td class="text-center"><span style="background: #f1f5f9; color: #475569; padding: 3px 8px; border-radius: 4px; font-size: 11px;">VALUE-ADD</span></td>
          <td class="text-right">${o.quantity}</td>
          <td class="text-right">${f}${o.unitSecondaryCost.toFixed(2)}</td>
          <td class="text-right"><strong>${f}${(o.unitSecondaryCost*o.quantity).toFixed(2)}</strong></td>
        </tr>`:""}
      </tbody>
    </table>

    <div class="summary-grid">
      ${d?`
      <div class="upi-box">
        <div class="upi-title">Scan to Pay 50% Advance</div>
        <img src="${I}" alt="UPI QR Code">
        <div class="upi-sub">GPay / PhonePe / Paytm<br>Advance: <strong>${f}${g.toFixed(2)}</strong></div>
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
          <td class="text-right">${f}${o.finalOrderTotal.toFixed(2)}</td>
        </tr>
        ${d?s.isInterstateSale?`
        <tr>
          <td>Integrated GST (IGST 18%):</td>
          <td class="text-right">${f}${o.igstAmount.toFixed(2)}</td>
        </tr>`:`
        <tr>
          <td>Central GST (CGST 9%):</td>
          <td class="text-right">${f}${o.cgstAmount.toFixed(2)}</td>
        </tr>
        <tr>
          <td>State GST (SGST 9%):</td>
          <td class="text-right">${f}${o.sgstAmount.toFixed(2)}</td>
        </tr>`:`
        <tr>
          <td>Estimated Sales Tax (${s.gstPercent||0}%):</td>
          <td class="text-right">${f}${o.gstAmount.toFixed(2)}</td>
        </tr>
        `}
        <tr class="total-row">
          <td>Grand Total:</td>
          <td class="text-right" style="color: #0284c7;">${f}${o.finalTotalWithGst.toFixed(2)}</td>
        </tr>
      </table>
    </div>

    <div class="footer-terms">
      <strong>Terms & Conditions:</strong>
      <ol style="margin: 6px 0 0 16px; padding: 0;">
        ${d?`
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
</html>`}function vo(n,e){const i=e.currency==="INR",t=i?"₹":"$",o=n.shopSettings,s=`PRJ-${Math.floor(1e5+Math.random()*9e5)}`,a=i?new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),r=o.upiId||"shop@upi",d=e.finalTotalWithGst,f=Math.round(d/2*100)/100,c=`upi://pay?pa=${encodeURIComponent(r)}&pn=${encodeURIComponent(o.shopName)}&am=${f.toFixed(2)}&cu=INR&tn=${encodeURIComponent(s)}`,u=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(c)}`;let $="";for(let x=0;x<n.items.length;x++){const g=n.items[x],M=g.partGeometry.boundingBox,k=g.partGeometry.units==="inch"||!i?`${(M.width/(g.partGeometry.units==="inch"?1:25.4)).toFixed(2)}" × ${(M.height/(g.partGeometry.units==="inch"?1:25.4)).toFixed(2)}"`:`${M.width.toFixed(0)} × ${M.height.toFixed(0)} mm`,C=i?`${(g.metrics.totalCutLengthMm/1e3).toFixed(1)} m`:`${g.metrics.totalCutLengthInches.toFixed(1)} in`;$+=`
      <tr>
        <td class="text-center">${x+1}</td>
        <td>
          <strong>${g.partGeometry.name}</strong><br>
          <span style="font-size: 12px; color: #64748b;">
            ${k} | ${g.materialName} (${g.gaugeThicknessMm}mm) | Cut: ${C}
          </span>
        </td>
        <td class="text-center">${g.unitQuote.quotingMode==="job_work"?i?"Job Work":"Labor Only":i?"Turnkey":"Fabricated"}</td>
        <td class="text-right"><strong>${g.quantity}</strong></td>
        <td class="text-right">${t}${g.unitQuote.finalUnitPrice.toFixed(2)}</td>
        <td class="text-right"><strong>${t}${g.totalPrice.toFixed(2)}</strong></td>
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
        <img src="${u}" alt="UPI QR Code" />
        <div class="upi-sub">Pay 50% Advance: <strong>${t}${f.toFixed(2)}</strong></div>
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
</html>`}function Io(n,e){const i=n.shopSettings,t=`JOB-${Math.floor(1e5+Math.random()*9e5)}`,o=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});let s="";for(let a=0;a<n.items.length;a++){const r=n.items[a],d=r.partGeometry.boundingBox;s+=`
      <tr>
        <td class="text-center">${a+1}</td>
        <td><strong>${r.partGeometry.name}</strong></td>
        <td>${d.width.toFixed(0)} × ${d.height.toFixed(0)} mm</td>
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
</html>`}function So(){const n=document.getElementById("demoVideoModal"),e=document.getElementById("btnOpenDemoModal"),i=document.getElementById("closeDemoModalBtn"),t=document.getElementById("demoLocalVideo");if(!n||!e)return;function o(){if(n.classList.remove("hidden"),t){t.currentTime=0;const a=t.play();a!==void 0&&a.catch(()=>{t.muted=!0,t.play().catch(()=>{})})}}function s(){n.classList.add("hidden"),t&&t.pause()}e.addEventListener("click",o),i==null||i.addEventListener("click",s),n.addEventListener("click",a=>{a.target===n&&s()}),window.addEventListener("keydown",a=>{a.key==="Escape"&&!n.classList.contains("hidden")&&s()})}let Ct="inch",ut="baseplate",qt="part",ce=!1,ie=null,vt=1,Bt=He[0],zt=On("USD",rn),j=zt[0],Q=j.gauges[3]||j.gauges[0],D=Rn("USD",Ce),Ht={..._n},ct=[],Rt="single",Pt=0,on=null,ke=null,he=!1,xe=null,te=[],ee=0,de=2,Ft=!0,Fe=null,ae=null;const w={length:10,width:8,units:"inch",cornerType:"chamfer",cornerSize:.75,holePattern:"4-corner",holeType:"slotted",holeDiameter:.75,slotLength:1.5,slotWidth:.75,edgeOffsetX:1.25,edgeOffsetY:1.25,centerCutoutType:"round",centerCutoutDiameter:2.5};let Gt=Jt.find(n=>n.standard==="ASME"&&n.nominalBore==='2"')||Jt[Jt.length-1];const J={baseWidth:6,height:6,units:"inch",hasWeldSnipe:!0,snipeSize:1,mountingHoleDiameter:.5},B={width:24,height:48,units:"inch",patternType:"islamic_star",borderMarginMm:1.5,gridColumns:4,gridRows:8,hasMountingHoles:!0,mountingHoleDiameter:.3125,gateType:"single_swing",hasFrameTube:!0,frameTubeWidthMm:2,hasKickPlate:!1,kickPlateHeightMm:12,hasHinges:!0,hasPullHandle:!0,hasLockBox:!0,finishMaterial:"matte_black",backlightColor:"warm_white"};let Lt="realistic_gate";const U={baseWidth:5,height:5,chamferTop:3,chamferRight:3,units:"inch",baseHoleCount:2,baseHoleDiameter:.375,uprightHoleCount:2,uprightHoleDiameter:.375,lighteningHoleDiameter:1.5},q={outerDiameter:6,innerDiameter:2,units:"inch",boltCount:6,boltDiameter:.375,pitchCircleDiameter:4},Qt=document.getElementById("dynamicControls"),dt=document.getElementById("svgContainer"),Po=document.getElementById("hudCutLength"),Bo=document.getElementById("hudPierces"),wo=document.getElementById("hudWeight"),ko=document.getElementById("hudBoundingBox"),ge=document.getElementById("dfmAlertContainer"),Je=document.getElementById("canvasTitle"),Bn=document.getElementById("nestingHudBar"),wn=document.getElementById("nestHudSheets"),kn=document.getElementById("nestHudUtil"),En=document.getElementById("nestHudScrap"),Ln=document.getElementById("nestHudRemnant"),ve=document.getElementById("quoteModeBadge"),Tn=document.getElementById("quoteShopName"),Eo=document.getElementById("totalPrice"),Lo=document.getElementById("pricePerUnit"),Ie=document.getElementById("costMaterial"),To=document.getElementById("costCut"),Do=document.getElementById("costPierce"),Dn=document.getElementById("costHandling"),Fn=document.getElementById("costSecondary"),Fo=document.getElementById("costDiscount"),Ao=document.getElementById("costGst"),No=document.getElementById("totalIncGst"),Se=document.getElementById("gstLabel"),Ve=document.getElementById("hsnCodeTag"),qe=document.getElementById("minOrderWarning"),be=document.getElementById("materialSelect"),ue=document.getElementById("gaugeSelect"),Pe=document.getElementById("assistGasSelect"),se=document.getElementById("sheetSizeSelect"),Ze=document.getElementById("camProfileSelect"),Ho=document.getElementById("navCamName");let _t=1,Dt={x:0,y:0},Be=!1,tn={x:0,y:0},Ee=!1,Le=!1;function oe(){const n=document.getElementById("gateToolbarMain"),e=document.getElementById("gateFoldedBar"),i=document.getElementById("gateStudioToolbar");n&&e&&i&&(Ee?(n.classList.add("hidden"),e.classList.remove("hidden"),i.classList.add("is-folded")):(n.classList.remove("hidden"),e.classList.add("hidden"),i.classList.remove("is-folded")));const t=document.getElementById("bottomHudExpandedContent"),o=document.getElementById("bottomHudFoldedBar"),s=document.getElementById("canvasBottomHud");t&&o&&s&&(Le?(t.classList.add("hidden"),o.classList.remove("hidden"),s.classList.add("is-folded")):(t.classList.remove("hidden"),o.classList.add("hidden"),s.classList.remove("is-folded")))}function kt(){const n=dt==null?void 0:dt.querySelector("svg");n&&(_t===1&&Dt.x===0&&Dt.y===0?(n.style.transform="",dt==null||dt.classList.remove("is-zoomed")):(n.style.transform=`translate(${Dt.x}px, ${Dt.y}px) scale(${_t})`,dt==null||dt.classList.add("is-zoomed")));const e=document.getElementById("zoomLevelDisplay");e&&(e.textContent=`${Math.round(_t*100)}%`)}function ye(){_t=1,Dt={x:0,y:0},kt()}function _o(){sn("USD"),Vo(),Zo(),me(),$e(),jt(),L()}let An=null;function Wt(){const n=document.getElementById("storageBadge");n&&(n.textContent="💾 Saving...",n.classList.add("saving")),clearTimeout(An),An=setTimeout(()=>{go(D.currency,D),po(D.currency,zt),n&&(n.textContent="💾 Auto-Saved",n.classList.remove("saving"))},400)}function Ut(){return ce&&ie?ie:ut==="baseplate"?(w.units=Ct,Jn(w)):ut==="flange"?Vn({outerDiameter:Gt.outerDiameter,innerBore:Gt.innerBore,pitchCircleDiameter:Gt.pitchCircleDiameter,boltCount:Gt.boltCount,boltDiameter:Gt.boltDiameter,units:Gt.units}):ut==="gusset"?(J.units=Ct,qn(J)):ut==="jali"?(B.units=Ct,Zn(B)):ut==="bracket"?(U.units=Ct,to(U)):(q.units=Ct,eo(q))}function L(){var b,v;const n=Ct==="inch",e=Ut(),i=ne(e,Q.thicknessMm,j.densityGPerCm3),t=oo(e,Q.thicknessMm);ae=t;let o;if(Rt==="cart"&&ct.length>0){const h=ct.map(l=>({id:l.id,name:l.partGeometry.name,boundingBox:l.partGeometry.boundingBox,quantity:l.quantity,thicknessMm:l.gaugeThicknessMm,densityGPerCm3:j.densityGPerCm3,geometry:l.partGeometry,color:l.color}));o=an(h,Bt,Q.thicknessMm,j.densityGPerCm3)}else o=co(e.boundingBox,vt,Bt,Q.thicknessMm,j.densityGPerCm3,{},e.units);on=o,Pt=Math.max(0,Math.min(Pt,o.sheetsRequired-1));const s=Xt(i,Q,vt,D,Ht),a=document.getElementById("sheetPaginationBar"),r=document.getElementById("sheetPageIndicator"),d=document.getElementById("btnPrevSheet"),f=document.getElementById("btnNextSheet"),c=document.getElementById("gateStudioToolbar"),u=document.getElementById("simulatorControls");if(qt==="nesting")c&&c.classList.add("hidden"),u&&(u.style.display="flex"),dt.innerHTML=$o(o,Pt),Rt==="cart"?Je.textContent=`RFQ Cart Assembly — ${Bt.name} Layout (Sheet ${Pt+1} of ${o.sheetsRequired})`:Je.textContent=`${e.name} — ${Bt.name} Layout (Sheet ${Pt+1} of ${o.sheetsRequired})`,a&&a.classList.remove("hidden"),r&&(r.textContent=`Sheet ${Pt+1} of ${o.sheetsRequired}`),d&&(d.disabled=Pt<=0),f&&(f.disabled=Pt>=o.sheetsRequired-1);else if(a&&a.classList.add("hidden"),ut==="jali"?(c&&(c.classList.remove("hidden"),(b=document.getElementById("btnJaliViewRealistic"))==null||b.classList.toggle("active",Lt==="realistic_gate"),(v=document.getElementById("btnJaliViewCam"))==null||v.classList.toggle("active",Lt==="cam_toolpath"),c.querySelectorAll(".finish-swatch").forEach(h=>{h.classList.toggle("active",h.getAttribute("data-finish")===B.finishMaterial)}),c.querySelectorAll(".backlight-pill").forEach(h=>{h.classList.toggle("active",h.getAttribute("data-backlight")===B.backlightColor)}),c.querySelectorAll(".gate-type-btn").forEach(h=>{h.classList.toggle("active",h.getAttribute("data-gatetype")===B.gateType)})),u&&(u.style.display="flex")):(c&&c.classList.add("hidden"),u&&(u.style.display="flex")),!he){dt.innerHTML=dn(e,{showCutOrder:Ft,viewStyle:ut==="jali"?Lt:"cam_toolpath",jaliParams:ut==="jali"?B:void 0,hideCamBadges:ut==="jali"&&(Lt==="realistic_gate"||!Ft),dfmIssues:t.issues,highlightedHoleIndex:Fe}),Wn();const l=Ct==="inch"?`${i.boundingBoxWidthInches.toFixed(2)}" × ${i.boundingBoxHeightInches.toFixed(2)}"`:`${i.boundingBoxWidthMm.toFixed(0)} × ${i.boundingBoxHeightMm.toFixed(0)} mm`;Je.textContent=ut==="jali"&&Lt==="realistic_gate"?`Architectural CNC Gate & Jali Studio (${l})`:`${e.name} (${l})`}const $=document.getElementById("camLegendBar"),x=document.getElementById("archLegendBar");if(ut==="jali"&&Lt==="realistic_gate"&&qt!=="nesting"){if($&&$.classList.add("hidden"),x){x.classList.remove("hidden");const h={matte_black:"Matte Black Powder Coat",royal_gold:"Royal Gold / Antique Brass",corten_rust:"Corten Weathered Rust Steel",brushed_stainless:"Satin Stainless 304",champagne_bronze:"Champagne Bronze"},l={warm_white:"Warm 3000K LED",cool_white:"Cool 6000K LED",amber_gold:"Sunset Amber LED",none:"Off (Daylight)"},p=B.gateType==="wall_panel",N=p?"Wall Mount Standoffs":`${B.hasFrameTube!==!1?n?'2" Box Tube':"50mm Box Tube":"Frameless Plate"}`,G=p?n?'1/4" Stainless Standoff Screws':"M8 Stainless Standoff Screws":`${B.hasHinges!==!1?"Bullet Hinges":""}${B.hasPullHandle!==!1?" + Bar Pull":""}${B.hasLockBox!==!1?" + Mortise Lock":""}`.replace(/^\s*\+\s*/,"")||"Custom Welded",O=document.getElementById("archLegendFinish"),W=document.getElementById("archLegendLight"),T=document.getElementById("archLegendFrame"),E=document.getElementById("archLegendHardware");O&&(O.textContent=h[B.finishMaterial||"matte_black"]||"Matte Black"),W&&(W.textContent=l[B.backlightColor||"warm_white"]||"Warm 3000K"),T&&(T.textContent=N),E&&(E.textContent=G)}}else $&&$.classList.remove("hidden"),x&&x.classList.add("hidden");kt(),Po.textContent=n?`${i.totalCutLengthInches.toFixed(2)} in`:`${i.totalCutLengthMm.toFixed(1)} mm`,Bo.textContent=i.pierceCount.toString(),wo.textContent=n?`${i.theoreticalWeightLbs.toFixed(2)} lbs`:`${i.theoreticalWeightKg.toFixed(2)} kg`,ko.textContent=n?`${i.boundingBoxWidthInches.toFixed(2)}" × ${i.boundingBoxHeightInches.toFixed(2)}"`:`${i.boundingBoxWidthMm.toFixed(0)} × ${i.boundingBoxHeightMm.toFixed(0)} mm`;const g=s.currency==="USD";Bn&&(Bn.style.display=vt>1||qt==="nesting"||Rt==="cart"?"grid":"none"),wn&&(wn.textContent=`${o.sheetsRequired} Sheet${o.sheetsRequired>1?"s":""}`),kn&&(kn.textContent=`${o.sheetUtilizationPercent}%`),En&&(En.textContent=g?`${(o.totalSkeletonScrapMassKg*2.20462).toFixed(1)} lbs`:`${o.totalSkeletonScrapMassKg.toFixed(1)} kg`),Ln&&(Ln.textContent=g?`${(o.remnantWidthMm/25.4).toFixed(1)}" × ${(o.remnantLengthMm/25.4).toFixed(1)}"`:`${o.remnantWidthMm} × ${o.remnantLengthMm} mm`);const M=document.getElementById("gateFoldedSummary");if(M){const h={matte_black:"Matte Black",royal_gold:"Royal Gold",corten_rust:"Corten Rust",brushed_stainless:"Stainless 304",champagne_bronze:"Bronze"},l={warm_white:"Warm 3000K",cool_white:"Cool 6000K",amber_gold:"Amber",none:"Light Off"},p={single_swing:"Single Gate",double_swing:"Double Swing",wall_panel:"Wall Jali"},N=h[B.finishMaterial||"matte_black"]||"Matte Black",G=l[B.backlightColor||"warm_white"]||"Warm 3000K",O=p[B.gateType||"single_swing"]||"Single Gate";M.textContent=`${N} • ${G} • ${O}`}const I=document.getElementById("bottomHudFoldedSummary");if(I){const h=n?`${i.totalCutLengthInches.toFixed(2)} in`:`${i.totalCutLengthMm.toFixed(1)} mm`,l=n?`${i.theoreticalWeightLbs.toFixed(2)} lbs`:`${i.theoreticalWeightKg.toFixed(2)} kg`,p=n?`${i.boundingBoxWidthInches.toFixed(2)}" × ${i.boundingBoxHeightInches.toFixed(2)}"`:`${i.boundingBoxWidthMm.toFixed(0)} × ${i.boundingBoxHeightMm.toFixed(0)} mm`;I.textContent=`${h} • ${i.pierceCount} Pierces • ${l} • ${p}`}oe(),Ro(t);const k=s.currency==="INR"?"₹":"$";Eo.textContent=s.finalOrderTotal.toFixed(2),Lo.textContent=`(${k}${s.finalUnitPrice.toFixed(2)} / unit)`,ve&&(s.quotingMode==="job_work"?ve.textContent=g?"LABOR ONLY (CUSTOMER STOCK)":"JOB WORK (LABOUR ONLY)":s.quotingMode==="sqft_jali"?ve.textContent=g?"ARCHITECTURAL PANELS":"ARCHITECTURAL (₹/SQ.FT)":ve.textContent=g?"TURNKEY (PLATE + CUT)":"WITH MATERIAL (SUPPLY & CUT)"),Ie.textContent=`${k}${s.unitMaterialCost.toFixed(2)}`,To.textContent=`${k}${s.unitCutCost.toFixed(2)}`,Do.textContent=`${k}${s.unitPierceCost.toFixed(2)}`,Dn&&(Dn.textContent=`${k}${s.unitHandlingCost.toFixed(2)}`),Fn&&(Fn.textContent=`${k}${s.unitSecondaryCost.toFixed(2)}`);const C=document.getElementById("rowMaterial"),S=document.getElementById("rowCut"),F=document.getElementById("rowPierce"),H=document.getElementById("rowHandling"),y=document.getElementById("rowSecondary");if(s.quotingMode==="job_work"){if(C){C.style.display="flex";const h=C.querySelector("span:first-child");h&&(h.textContent="Raw Material:"),Ie.textContent=g?"$0.00 (Customer Sheet)":"₹0.00 (Customer Plate)"}S&&(S.style.display="flex"),F&&(F.style.display="flex"),H&&(H.style.display="flex")}else if(s.quotingMode==="sqft_jali"){if(C){C.style.display="flex";const h=C.querySelector("span:first-child");h&&(h.textContent=g?"Fabrication Rate:":"Jali Fabrication (Sq.Ft):"),Ie.textContent=`${k}${s.unitMaterialCost.toFixed(2)}`}S&&(S.style.display="none"),F&&(F.style.display="none"),H&&(H.style.display="none")}else{if(C){C.style.display="flex";const h=C.querySelector("span:first-child");h&&(h.textContent=g?"Raw Stock Material:":"Raw Material (Steel):"),Ie.textContent=`${k}${s.unitMaterialCost.toFixed(2)}`}S&&(S.style.display="flex"),F&&(F.style.display="flex"),H&&(H.style.display="none")}y&&(y.style.display=s.unitSecondaryCost>0?"flex":"none"),Fo.textContent=`-${s.discountPercent}%`,Ao.textContent=`${k}${s.gstAmount.toFixed(2)}`,No.textContent=`${k}${s.finalTotalWithGst.toFixed(2)}`,Se&&(g?Se.textContent=`Sales Tax (${D.gstPercent||0}%):`:D.isInterstateSale?Se.textContent="IGST (18%):":Se.textContent="GST (CGST 9% + SGST 9%):");const m=document.querySelector(".breakdown-row.total-inc-gst span:first-child");m&&(m.textContent=g?"Total (Inc. Tax):":"Total (Inc. GST):"),Ve&&(Ve.style.display=g?"none":"block",Ve.textContent=s.hsnSacCode),s.minimumOrderFloorApplied?(qe.classList.remove("hidden"),qe.innerHTML=`⚠️ <strong>Minimum Order Floor Active</strong><br><span style="font-size:0.7rem;opacity:0.95;">Calc Subtotal: ${k}${s.orderTotalBeforeMin.toFixed(2)} → Billed Min Floor: ${k}${s.finalOrderTotal.toFixed(2)}</span>`):qe.classList.add("hidden")}function en(n){if(Fe=n,!he&&qt==="part"){const e=Ut();dt.innerHTML=dn(e,{showCutOrder:Ft,viewStyle:ut==="jali"?Lt:"cam_toolpath",jaliParams:ut==="jali"?B:void 0,hideCamBadges:ut==="jali"&&(Lt==="realistic_gate"||!Ft),dfmIssues:ae==null?void 0:ae.issues,highlightedHoleIndex:Fe}),kt(),Wn()}ge.querySelectorAll(".dfm-pill").forEach(e=>{const i=e.getAttribute("data-hole-index");i!==null&&n!==null&&parseInt(i,10)===n?e.classList.add("is-active-target"):e.classList.remove("is-active-target")})}function Wn(){dt.querySelectorAll("[data-hole-index]").forEach(n=>{const e=n.getAttribute("data-hole-index");if(e!==null){const i=parseInt(e,10);n.addEventListener("mouseenter",()=>{ge.querySelectorAll(`.dfm-pill[data-hole-index="${i}"]`).forEach(t=>{t.classList.add("is-active-target"),t.scrollIntoView({behavior:"smooth",block:"nearest"})})}),n.addEventListener("mouseleave",()=>{ge.querySelectorAll(`.dfm-pill[data-hole-index="${i}"]`).forEach(t=>{t.classList.remove("is-active-target")})})}})}function Ro(n){if(ge.innerHTML="",!(n.isManufacturable&&!n.hasWarnings)){if(n.issues.length>2){const e=document.createElement("div");e.className="dfm-scroll-header",e.innerHTML=`
      <span class="dfm-scroll-title">
        <span class="dfm-scroll-badge">${n.issues.length} DFM Findings</span>
        ${n.isManufacturable?"Advisories to prevent heat burn":"Critical cut issues require design fix"}
      </span>
      <span class="dfm-scroll-hint">↕ Scroll to inspect all holes</span>
    `,ge.appendChild(e)}for(const e of n.issues){const i=document.createElement("div"),t=typeof e.holeIndex=="number";i.className=`dfm-pill ${e.severity==="error"?"dfm-error":"dfm-warning"} ${t?"dfm-pill-hole":""}`,t&&(i.setAttribute("data-hole-index",e.holeIndex.toString()),i.title=`Click or hover to highlight Hole #${e.holeIndex+1} on the drawing`),i.innerHTML=`
      <span class="dfm-icon">${e.severity==="error"?"⚠️":"ℹ️"}</span>
      <span class="dfm-text">${e.message}</span>
      ${t?`<span class="dfm-locate-chip" title="Pinpoint on diagram">📍 Hole #${e.holeIndex+1}</span>`:""}
    `,t&&(i.addEventListener("mouseenter",()=>{en(e.holeIndex)}),i.addEventListener("mouseleave",()=>{en(null)}),i.addEventListener("click",()=>{var o,s;Ft||(Ft=!0,(o=document.getElementById("btnToggleCamBadges"))==null||o.classList.add("active"),(s=document.getElementById("legendBadgeToggle"))==null||s.classList.add("active")),en(e.holeIndex)})),ge.appendChild(i)}}}function Un(){be.innerHTML="";for(const n of zt){const e=document.createElement("option");e.value=n.id,e.textContent=n.name,be.appendChild(e)}be.value=j.id,zn()}function zn(){ue.innerHTML="";for(let n=0;n<j.gauges.length;n++){const e=j.gauges[n],i=document.createElement("option");i.value=n.toString(),i.textContent=e.gaugeName,ue.appendChild(i)}ue.selectedIndex=Math.min(3,j.gauges.length-1),Q=j.gauges[ue.selectedIndex]}function Oo(){Ze.innerHTML="";for(const n of pe){const e=document.createElement("option");e.value=n.id,e.textContent=n.name,Ze.appendChild(e)}Ze.value=D.selectedCAMProfileId,Go()}function Go(){const n=pe.find(e=>e.id===D.selectedCAMProfileId)||pe[0];Ho.textContent=n.name.split("(")[0].trim()}function Wo(){if(!se)return;se.innerHTML="";const n=D.currency==="USD"?He:fe;for(const i of n){const t=document.createElement("option");t.value=i.id,t.textContent=i.name,se.appendChild(t)}Bt=n.find(i=>i.id===Bt.id)||n[0],se.value=Bt.id}function sn(n){var E;const e=n==="USD",i=document.getElementById("btnCurrencyINR"),t=document.getElementById("btnCurrencyUSD");e?(t==null||t.classList.add("active"),i==null||i.classList.remove("active")):(i==null||i.classList.add("active"),t==null||t.classList.remove("active")),D=Rn(n,e?Ce:_e),zt=On(n,e?rn:Hn),j=zt[0],Q=j.gauges[e?3:4]||j.gauges[0],Ae(e?"inch":"mm"),Ne(),Bt=e?He[0]:fe[0],e?Gt=Jt.find(A=>A.standard==="ASME"&&A.nominalBore==='2"')||Jt[Jt.length-1]:Gt=Jt[2];const o=document.getElementById("brandTitle"),s=document.getElementById("brandSubtitle");o&&(o.textContent=e?"US CNC LASER CPQ":"INDIAN CNC LASER CPQ"),s&&(s.textContent=e?"Instant Quoting, Nesting & Trumpf/SigmaNEST DXF":"WhatsApp-First Quoting & CypCut DXF Engine");const a=document.getElementById("modeJobWork"),r=document.getElementById("modeWithMaterial"),d=document.getElementById("modeSqFtJali");a&&(a.innerHTML=e?"🔧 Labor Only":"🔧 Job Work"),r&&(r.innerHTML=e?"📦 Turnkey (Plate+Cut)":"📦 Turnkey"),d&&(d.innerHTML=e?"🏛️ Arch Panels":"🏛️ Architectural");const f=document.getElementById("currencySym"),c=document.getElementById("adminCurrencySym");f&&(f.textContent=e?"$":"₹"),c&&(c.textContent=e?"$":"₹");const u=document.getElementById("customerPhoneLabel"),$=document.getElementById("phoneCountryPrefix"),x=document.getElementById("customerPhoneInput"),g=document.getElementById("phoneHint"),M=document.getElementById("phoneModeBadge");u&&(u.textContent=e?"Customer Email / Phone":"Customer WhatsApp"),$&&($.textContent=e?"+1":"+91"),x&&(x.placeholder=e?"estimator@client.com or (555) 123-4567":"10-digit mobile (e.g. 98230 12345)"),g&&(g.textContent=e?"Enter email to send quote, or copy directly to clipboard":"Enter mobile to open direct chat, or leave blank to choose contact"),M&&(M.textContent=e?"Email / RFQ":"Direct Send");const I=document.getElementById("shareWhatsAppBtn"),k=document.getElementById("shareBtnIcon"),C=document.getElementById("shareBtnText"),S=document.getElementById("printInvoiceText"),F=document.getElementById("downloadDxfText");I&&(e?(I.classList.remove("btn-whatsapp"),I.classList.add("btn-email")):(I.classList.remove("btn-email"),I.classList.add("btn-whatsapp"))),k&&(k.textContent=e?"✉️":"💬"),C&&(C.textContent=e?"Copy Quote for Email":"Share Quote on WhatsApp"),S&&(S.textContent=e?"Commercial Quote (PDF)":"Tax Invoice & QR");const H=((E=pe.find(A=>A.id===D.selectedCAMProfileId))==null?void 0:E.name.split(" ")[0])||(e?"Trumpf":"CypCut");F&&(F.textContent=`${H} DXF`);const y=document.getElementById("shareCartWhatsAppBtn"),m=document.getElementById("shareCartBtnIcon"),b=document.getElementById("shareCartBtnText"),v=document.getElementById("printCartInvoiceText");y&&(e?(y.classList.remove("btn-whatsapp"),y.classList.add("btn-email")):(y.classList.remove("btn-email"),y.classList.add("btn-whatsapp"))),m&&(m.textContent=e?"✉️":"💬"),b&&(b.textContent=e?"Copy Project Quote for Email":"Share Project Quote on WhatsApp"),v&&(v.textContent=e?"Commercial Quote (PDF)":"Tax Invoice & QR");const h=document.getElementById("groupAdminGstin"),l=document.getElementById("groupAdminUpi"),p=document.getElementById("groupAdminTaxType"),N=document.getElementById("labelSheetLoading"),G=document.getElementById("labelPricePerKg"),O=document.getElementById("labelPricePerMeterCut"),W=document.getElementById("labelPricePerPierce"),T=document.getElementById("labelAdminTax");h&&(h.style.display=e?"none":"block"),l&&(l.style.display=e?"none":"block"),p&&(p.style.display=e?"none":"block"),N&&(N.textContent=e?"Handling & Loading Fee ($/sheet)":"Plate Loading / Handling Fee (₹/sheet)"),G&&(G.textContent=e?"Material Rate ($/sq.in)":"Material Rate (₹/kg)"),O&&(O.textContent=e?"Cut Rate ($/lin.in)":"Cut Rate (₹/meter)"),W&&(W.textContent=e?"Pierce Fee ($/pt)":"Pierce Fee (₹/pt)"),T&&(T.textContent=e?"Sales Tax (%)":"GST / Tax (%)"),Un(),Wo(),Oo(),$e(),me(),jt(),L(),Et(e?"🇺🇸 Switched to US Imperial Mode (USD $, Inches, A36/SS304/AL6061, Trumpf DXF)":"🇮🇳 Switched to India Metric Mode (INR ₹, mm, IS 2062, CypCut DXF)")}function me(){Qt.innerHTML="",ut==="baseplate"?Uo():ut==="flange"?zo():ut==="gusset"?jo():ut==="jali"?jn():ut==="bracket"?Qo():ut==="disc"&&Yo()}function Uo(){const n=Ct==="inch",e=n?"in":"mm";Qt.innerHTML=`
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
  `;const i=document.getElementById("bpLength"),t=document.getElementById("bpWidth"),o=document.getElementById("valBpLen"),s=document.getElementById("valBpWid");i.oninput=()=>{w.length=parseFloat(i.value),o.textContent=i.value,L()},t.oninput=()=>{w.width=parseFloat(t.value),s.textContent=t.value,L()};const a=document.getElementById("bpCornerType"),r=document.getElementById("bpCornerSize");a.onchange=()=>{w.cornerType=a.value,L()},r.oninput=()=>{w.cornerSize=parseFloat(r.value)||0,L()};const d=document.getElementById("bpHoleType"),f=document.getElementById("bpHoleDia"),c=document.getElementById("slotDimsRow");d.onchange=()=>{w.holeType=d.value,c.style.display=d.value==="slotted"?"flex":"none",L()},f.oninput=()=>{w.holeDiameter=parseFloat(f.value)||12,L()};const u=document.getElementById("bpSlotLen"),$=document.getElementById("bpSlotWid");u&&$&&(u.oninput=()=>{w.slotLength=parseFloat(u.value)||30,L()},$.oninput=()=>{w.slotWidth=parseFloat($.value)||15,L()});const x=document.getElementById("bpCenterType"),g=document.getElementById("centerCutoutDiaGroup"),M=document.getElementById("bpCenterDia"),I=document.getElementById("valCenterDia");x.onchange=()=>{w.centerCutoutType=x.value,g.style.display=x.value==="round"?"block":"none",L()},M&&(M.oninput=()=>{w.centerCutoutDiameter=parseFloat(M.value),I.textContent=M.value,L()}),Qt.querySelectorAll(".preset-pill").forEach(k=>{k.onclick=()=>{const C=parseFloat(k.getAttribute("data-len")),S=parseFloat(k.getAttribute("data-wid"));w.length=C,w.width=S,i.value=C.toString(),t.value=S.toString(),o.textContent=C.toString(),s.textContent=S.toString(),L()}})}function zo(){Qt.innerHTML=`
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
  `;const n=document.getElementById("flangeStandardSelect"),e=document.getElementById("flangePresetSelect"),i=document.getElementById("flangeSpecsBox"),t=s=>{e.innerHTML="";const a=Jt.filter(r=>s==="ALL"||r.standard===s);for(let r=0;r<a.length;r++){const d=a[r],f=document.createElement("option");f.value=d.name,f.textContent=`${d.name} [${d.standard}]`,e.appendChild(f)}e.value=Gt.name,o()},o=()=>{const s=Gt,a=s.units;i.innerHTML=`
      Outer Diameter: <strong>${s.outerDiameter} ${a}</strong> | Inner Bore: <strong>${s.innerBore} ${a}</strong><br>
      PCD: <strong>${s.pitchCircleDiameter} ${a}</strong> | Bolts: <strong>${s.boltCount} × ⌀${s.boltDiameter} ${a}</strong>
    `};n.onchange=()=>{t(n.value)},e.onchange=()=>{const s=Jt.find(a=>a.name===e.value);s&&(Gt=s,Ae(s.units),Ne(),o(),L())},t("ALL")}function jo(){const n=Ct==="inch",e=n?"in":"mm";Qt.innerHTML=`
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
  `;const i=document.getElementById("gussetBaseW"),t=document.getElementById("gussetHeight"),o=document.getElementById("valGussetW"),s=document.getElementById("valGussetH");i.oninput=()=>{J.baseWidth=parseFloat(i.value),o.textContent=i.value,L()},t.oninput=()=>{J.height=parseFloat(t.value),s.textContent=t.value,L()};const a=document.getElementById("gussetSnipeCheck"),r=document.getElementById("snipeSizeGroup"),d=document.getElementById("gussetSnipeSize"),f=document.getElementById("valSnipeSize");a.onchange=()=>{J.hasWeldSnipe=a.checked,r.style.display=a.checked?"block":"none",L()},d.oninput=()=>{J.snipeSize=parseFloat(d.value),f.textContent=d.value,L()},Qt.querySelectorAll(".preset-pill").forEach(c=>{c.onclick=()=>{const u=parseFloat(c.getAttribute("data-w")),$=parseFloat(c.getAttribute("data-h"));J.baseWidth=u,J.height=$,i.value=u.toString(),t.value=$.toString(),o.textContent=u.toString(),s.textContent=$.toString(),L()}})}function jn(){const n=Ct==="inch",e=n?"in":"mm";Qt.innerHTML=`
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
  `;const i=document.getElementById("jaliWidth"),t=document.getElementById("jaliHeight"),o=document.getElementById("valJaliW"),s=document.getElementById("valJaliH");i.oninput=()=>{B.width=parseFloat(i.value),o.textContent=i.value,L()},t.oninput=()=>{B.height=parseFloat(t.value),s.textContent=t.value,L()};const a=document.getElementById("jaliPattern");a.onchange=()=>{B.patternType=a.value,L()};const r=document.getElementById("jaliBorder"),d=document.getElementById("jaliCols"),f=document.getElementById("jaliRows");r.oninput=()=>{B.borderMarginMm=parseFloat(r.value)||(n?1.5:30),L()},d.oninput=()=>{B.gridColumns=parseInt(d.value,10)||4,L()},f&&(f.oninput=()=>{B.gridRows=parseInt(f.value,10)||6,L()});const c=document.getElementById("jaliFrameCheck");c&&(c.onchange=()=>{B.hasFrameTube=c.checked,L()});const u=document.getElementById("jaliKickCheck"),$=document.getElementById("kickHeightRow"),x=document.getElementById("jaliKickHeight"),g=document.getElementById("valKickH");u&&(u.onchange=()=>{B.hasKickPlate=u.checked,$&&($.style.display=u.checked?"block":"none"),L()}),x&&(x.oninput=()=>{B.kickPlateHeightMm=parseFloat(x.value),g&&(g.textContent=x.value),L()});const M=document.getElementById("jaliHandleCheck");M&&(M.onchange=()=>{B.hasPullHandle=M.checked,L()});const I=document.getElementById("jaliLockCheck");I&&(I.onchange=()=>{B.hasLockBox=I.checked,L()});const k=document.getElementById("jaliHingeCheck");k&&(k.onchange=()=>{B.hasHinges=k.checked,L()});const C=document.getElementById("jaliMountHolesCheck");C&&(C.onchange=()=>{B.hasMountingHoles=C.checked,L()}),Qt.querySelectorAll(".jali-preset").forEach(S=>{S.onclick=()=>{const F=parseFloat(S.getAttribute("data-w")),H=parseFloat(S.getAttribute("data-h")),y=S.getAttribute("data-type"),m=S.getAttribute("data-frame")==="true",b=S.getAttribute("data-kick")==="true",v=parseFloat(S.getAttribute("data-kickh")||"0"),h=S.getAttribute("data-pat"),l=S.getAttribute("data-finish");B.width=F,B.height=H,y&&(B.gateType=y),B.hasFrameTube=m,B.hasKickPlate=b,v&&(B.kickPlateHeightMm=v),h&&(B.patternType=h),l&&(B.finishMaterial=l),jn(),L()}})}function Qo(){const n=Ct==="inch",e=n?"in":"mm";Qt.innerHTML=`
    <div class="form-group">
      <label class="form-label">Base Width (${e}): <strong id="valBrW">${U.baseWidth}</strong></label>
      <input type="range" id="brWidth" min="${n?2:50}" max="${n?16:400}" value="${U.baseWidth}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Height (${e}): <strong id="valBrH">${U.height}</strong></label>
      <input type="range" id="brHeight" min="${n?2:50}" max="${n?16:400}" value="${U.height}" class="form-slider" />
    </div>
  `;const i=document.getElementById("brWidth"),t=document.getElementById("brHeight"),o=document.getElementById("valBrW"),s=document.getElementById("valBrH");i.oninput=()=>{U.baseWidth=parseFloat(i.value),o.textContent=i.value,L()},t.oninput=()=>{U.height=parseFloat(t.value),s.textContent=t.value,L()}}function Yo(){const n=Ct==="inch",e=n?"in":"mm";Qt.innerHTML=`
    <div class="form-group">
      <label class="form-label">Outer Diameter (${e}): <strong id="valDiscOD">${q.outerDiameter}</strong></label>
      <input type="range" id="discOD" min="${n?2:50}" max="${n?24:600}" value="${q.outerDiameter}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Inner Bore Diameter (${e}): <strong id="valDiscID">${q.innerDiameter}</strong></label>
      <input type="range" id="discID" min="0" max="${n?Math.max(.5,q.outerDiameter-.5):Math.max(10,q.outerDiameter-10)}" value="${q.innerDiameter}" step="${n?.1:1}" class="form-slider" />
    </div>
  `;const i=document.getElementById("discOD"),t=document.getElementById("discID"),o=document.getElementById("valDiscOD"),s=document.getElementById("valDiscID");i.oninput=()=>{q.outerDiameter=parseFloat(i.value),o.textContent=i.value,t.max=(n?Math.max(.5,q.outerDiameter-.5):Math.max(10,q.outerDiameter-10)).toString(),L()},t.oninput=()=>{q.innerDiameter=parseFloat(t.value),s.textContent=t.value,L()}}function Ae(n){if(Ct===n)return;const e=Ct;Ct=n,n==="inch"&&e==="mm"?(w.units="inch",w.length=Math.round(w.length/25.4*2)/2||10,w.width=Math.round(w.width/25.4*2)/2||8,w.cornerSize=Math.round(w.cornerSize/25.4*4)/4||.75,w.holeDiameter=Math.round(w.holeDiameter/25.4*16)/16||.75,w.slotLength&&(w.slotLength=Math.round(w.slotLength/25.4*4)/4||1.5),w.slotWidth&&(w.slotWidth=Math.round(w.slotWidth/25.4*16)/16||.75),w.edgeOffsetX=Math.round(w.edgeOffsetX/25.4*4)/4||1.25,w.edgeOffsetY=Math.round(w.edgeOffsetY/25.4*4)/4||1.25,w.centerCutoutDiameter&&(w.centerCutoutDiameter=Math.round(w.centerCutoutDiameter/25.4*2)/2||2.5),w.centerCutoutWidth&&(w.centerCutoutWidth=Math.round(w.centerCutoutWidth/25.4*2)/2||2),w.centerCutoutHeight&&(w.centerCutoutHeight=Math.round(w.centerCutoutHeight/25.4*2)/2||2),J.units="inch",J.baseWidth=Math.round(J.baseWidth/25.4*2)/2||6,J.height=Math.round(J.height/25.4*2)/2||6,J.snipeSize=Math.round(J.snipeSize/25.4*4)/4||1,J.mountingHoleDiameter!==void 0&&(J.mountingHoleDiameter=Math.round(J.mountingHoleDiameter/25.4*16)/16||.5),U.units="inch",U.baseWidth=Math.round(U.baseWidth/25.4*2)/2||5,U.height=Math.round(U.height/25.4*2)/2||5,U.chamferTop=Math.round(U.chamferTop/25.4*2)/2||3,U.chamferRight=Math.round(U.chamferRight/25.4*2)/2||3,U.baseHoleDiameter=Math.round(U.baseHoleDiameter/25.4*16)/16||.375,U.uprightHoleDiameter=Math.round(U.uprightHoleDiameter/25.4*16)/16||.375,U.lighteningHoleDiameter!==void 0&&(U.lighteningHoleDiameter=Math.round(U.lighteningHoleDiameter/25.4*4)/4||1.5),q.units="inch",q.outerDiameter=Math.round(q.outerDiameter/25.4*2)/2||6,q.innerDiameter=Math.round(q.innerDiameter/25.4*2)/2||2,q.pitchCircleDiameter!==void 0&&(q.pitchCircleDiameter=Math.round(q.pitchCircleDiameter/25.4*2)/2||4),q.boltDiameter!==void 0&&(q.boltDiameter=Math.round(q.boltDiameter/25.4*16)/16||.375),B.units="inch",B.width=Math.round(B.width/25.4*2)/2||24,B.height=Math.round(B.height/25.4*2)/2||48,B.borderMarginMm=Math.round(B.borderMarginMm/25.4*4)/4||1.5,B.kickPlateHeightMm&&(B.kickPlateHeightMm=Math.round(B.kickPlateHeightMm/25.4*2)/2||12),B.frameTubeWidthMm=Math.round((B.frameTubeWidthMm||50)/25.4*2)/2||2,B.mountingHoleDiameter=Math.round((B.mountingHoleDiameter||8)/25.4*16)/16||.3125):n==="mm"&&e==="inch"&&(w.units="mm",w.length=Math.abs(w.length*25.4-254)<10?250:Math.round(w.length*25.4),w.width=Math.abs(w.width*25.4-203.2)<10?200:Math.round(w.width*25.4),w.cornerSize=Math.abs(w.cornerSize*25.4-19.05)<3?20:Math.round(w.cornerSize*25.4),w.holeDiameter=Math.abs(w.holeDiameter*25.4-19.05)<3?18:Math.round(w.holeDiameter*25.4),w.slotLength&&(w.slotLength=Math.abs(w.slotLength*25.4-38.1)<5?35:Math.round(w.slotLength*25.4)),w.slotWidth&&(w.slotWidth=Math.abs(w.slotWidth*25.4-19.05)<3?20:Math.round(w.slotWidth*25.4)),w.edgeOffsetX=Math.abs(w.edgeOffsetX*25.4-31.75)<5?35:Math.round(w.edgeOffsetX*25.4),w.edgeOffsetY=Math.abs(w.edgeOffsetY*25.4-31.75)<5?35:Math.round(w.edgeOffsetY*25.4),w.centerCutoutDiameter&&(w.centerCutoutDiameter=Math.abs(w.centerCutoutDiameter*25.4-63.5)<5?60:Math.round(w.centerCutoutDiameter*25.4)),w.centerCutoutWidth&&(w.centerCutoutWidth=Math.round(w.centerCutoutWidth*25.4)),w.centerCutoutHeight&&(w.centerCutoutHeight=Math.round(w.centerCutoutHeight*25.4)),J.units="mm",J.baseWidth=Math.abs(J.baseWidth*25.4-152.4)<10?150:Math.round(J.baseWidth*25.4),J.height=Math.abs(J.height*25.4-152.4)<10?150:Math.round(J.height*25.4),J.snipeSize=Math.abs(J.snipeSize*25.4-25.4)<3?25:Math.round(J.snipeSize*25.4),J.mountingHoleDiameter!==void 0&&(J.mountingHoleDiameter=Math.abs(J.mountingHoleDiameter*25.4-12.7)<3?14:Math.round(J.mountingHoleDiameter*25.4)),U.units="mm",U.baseWidth=Math.abs(U.baseWidth*25.4-127)<10?120:Math.round(U.baseWidth*25.4),U.height=Math.abs(U.height*25.4-127)<10?120:Math.round(U.height*25.4),U.chamferTop=Math.abs(U.chamferTop*25.4-76.2)<10?80:Math.round(U.chamferTop*25.4),U.chamferRight=Math.abs(U.chamferRight*25.4-76.2)<10?80:Math.round(U.chamferRight*25.4),U.baseHoleDiameter=Math.abs(U.baseHoleDiameter*25.4-9.525)<2?10:Math.round(U.baseHoleDiameter*25.4),U.uprightHoleDiameter=Math.abs(U.uprightHoleDiameter*25.4-9.525)<2?10:Math.round(U.uprightHoleDiameter*25.4),U.lighteningHoleDiameter!==void 0&&(U.lighteningHoleDiameter=Math.abs(U.lighteningHoleDiameter*25.4-38.1)<5?35:Math.round(U.lighteningHoleDiameter*25.4)),q.units="mm",q.outerDiameter=Math.abs(q.outerDiameter*25.4-152.4)<10?150:Math.round(q.outerDiameter*25.4),q.innerDiameter=Math.abs(q.innerDiameter*25.4-50.8)<5?50:Math.round(q.innerDiameter*25.4),q.pitchCircleDiameter!==void 0&&(q.pitchCircleDiameter=Math.abs(q.pitchCircleDiameter*25.4-101.6)<5?100:Math.round(q.pitchCircleDiameter*25.4)),q.boltDiameter!==void 0&&(q.boltDiameter=Math.abs(q.boltDiameter*25.4-9.525)<2?10:Math.round(q.boltDiameter*25.4)),B.units="mm",B.width=Math.abs(B.width*25.4-609.6)<20?600:Math.round(B.width*25.4),B.height=Math.abs(B.height*25.4-1219.2)<30?1200:Math.round(B.height*25.4),B.borderMarginMm=Math.abs(B.borderMarginMm*25.4-38.1)<5?35:Math.round(B.borderMarginMm*25.4),B.kickPlateHeightMm&&(B.kickPlateHeightMm=Math.abs(B.kickPlateHeightMm*25.4-304.8)<15?300:Math.round(B.kickPlateHeightMm*25.4)),B.frameTubeWidthMm=Math.abs((B.frameTubeWidthMm||2)*25.4-50.8)<5?50:Math.round((B.frameTubeWidthMm||2)*25.4),B.mountingHoleDiameter=Math.abs((B.mountingHoleDiameter||.3125)*25.4-7.9375)<2?8:Math.round((B.mountingHoleDiameter||.3125)*25.4))}function Ne(){const n=document.getElementById("unitMm"),e=document.getElementById("unitInch");n&&e&&(n.classList.toggle("active",Ct==="mm"),e.classList.toggle("active",Ct==="inch"))}function $e(){const n=D.currency==="USD",e=document.getElementById("adminShopName"),i=document.getElementById("adminGstin"),t=document.getElementById("adminUpiId"),o=document.getElementById("adminMinOrder"),s=document.getElementById("adminSheetLoading"),a=document.getElementById("adminPricePerKg"),r=document.getElementById("adminPricePerMeterCut"),d=document.getElementById("adminPricePerPierce"),f=document.getElementById("adminGstPercent"),c=document.getElementById("adminTaxType");e&&(e.value=D.shopName),i&&(i.value=D.shopGstin||""),t&&(t.value=D.upiId||""),o&&(o.value=D.minimumOrderFee.toString()),s&&(s.value=D.sheetLoadingFee.toString()),c&&(c.value=D.isInterstateSale?"interstate":"intrastate"),n?(a&&(a.value=(Q.pricePerSqInch||.05).toString()),r&&(r.value=(Q.pricePerLinearInchCut||.1).toString())):(a&&(a.value=(Q.pricePerKg||75).toString()),r&&(r.value=(Q.pricePerMeterCut||20).toString())),d&&(d.value=Q.pricePerPierce.toString()),f&&(f.value=D.gstPercent.toString());const u=document.getElementById("activeGaugeBadge");if(u&&j&&Q)if(n){const $=j.id.includes("a36")?"A36":j.id.includes("ss304")?"SS 304":j.id.includes("6061")?"AL 6061":"Steel",x=Q.gaugeName.split("(")[0].trim();u.textContent=`${$} • ${x}`}else{const $=j.id.includes("is2062")?"IS 2062":j.id.includes("ss304")?"SS 304":j.id.includes("aluminum")?"AL 6061":j.name.split(" ")[0],x=Q.gaugeName.replace("Sheet","").replace("Plate","").trim();u.textContent=`${$} • ${x}`}}function Et(n){const e=document.getElementById("toastNotification");e&&(e.textContent=n,e.classList.remove("hidden"),setTimeout(()=>{e.classList.add("hidden")},2500))}function Ko(n,e){if(n.length===0)return{x:0,y:0};if(e<=0){const a=n[0];return a.type==="line"?a.start:{x:a.center.x+a.radius*Math.cos(a.startAngle),y:a.center.y+a.radius*Math.sin(a.startAngle)}}if(e>=1){const a=n[n.length-1];return a.type==="line"?a.end:{x:a.center.x+a.radius*Math.cos(a.endAngle),y:a.center.y+a.radius*Math.sin(a.endAngle)}}const i=n.map(a=>{if(a.type==="line")return Math.sqrt((a.end.x-a.start.x)**2+(a.end.y-a.start.y)**2);{let r=a.counterClockwise?a.endAngle-a.startAngle:a.startAngle-a.endAngle;for(;r<0;)r+=2*Math.PI;for(;r>2*Math.PI;)r-=2*Math.PI;return a.radius*r}}),t=i.reduce((a,r)=>a+r,0),o=e*t;let s=0;for(let a=0;a<n.length;a++){const r=n[a],d=i[a];if(s+d>=o||a===n.length-1){const f=d>0?(o-s)/d:0;if(r.type==="line")return{x:r.start.x+(r.end.x-r.start.x)*f,y:r.start.y+(r.end.y-r.start.y)*f};{let c=r.counterClockwise?r.endAngle-r.startAngle:r.startAngle-r.endAngle;for(;c<0;)c+=2*Math.PI;for(;c>2*Math.PI;)c-=2*Math.PI;const u=r.counterClockwise?r.startAngle+c*f:r.startAngle-c*f;return{x:r.center.x+r.radius*Math.cos(u),y:r.center.y+r.radius*Math.sin(u)}}}s+=d}return{x:0,y:0}}function Xo(){var r,d,f,c,u,$;if(he){un();return}qt="part",(r=document.getElementById("btnViewPart"))==null||r.classList.add("active"),(d=document.getElementById("btnViewNesting"))==null||d.classList.remove("active"),ut==="jali"&&Lt==="realistic_gate"&&(Lt="cam_toolpath",(f=document.getElementById("btnJaliViewRealistic"))==null||f.classList.remove("active"),(c=document.getElementById("btnJaliViewCam"))==null||c.classList.add("active"),(u=document.getElementById("camLegendBar"))==null||u.classList.remove("hidden"),($=document.getElementById("archLegendBar"))==null||$.classList.add("hidden"));const n=Ut();if(te=Gn(n),te.length===0)return;he=!0,ee=0;const e=document.getElementById("simSpeedSelect");de=parseFloat((e==null?void 0:e.value)||"2")||2;const i=document.getElementById("simHudOverlay");i&&i.classList.remove("hidden");const t=document.getElementById("btnSimulateCut");t&&(t.textContent="⏸ Pause",t.classList.add("simulating"));const o=te.reduce((x,g)=>x+g.simulatedDurationSec,0)/de;let s=performance.now();function a(x){if(!he)return;const g=te[ee];if(!g){Jo();return}const M=(x-s)/1e3*de,I=.5,k=M<I;let C=0;if(!k){const h=Math.max(.01,g.simulatedDurationSec-I);C=Math.min(1,(M-I)/h)}let S=g.piercePoint;!k&&g.segments.length>0&&(S=Ko(g.segments,C)),dt.innerHTML=dn(n,{showCutOrder:Ft,dfmIssues:ae==null?void 0:ae.issues,highlightedHoleIndex:Fe,simulationState:{activeStepIndex:ee,nozzlePos:S,isPiercing:k,progressRatio:C}}),kt();const F=document.getElementById("simStatusText"),H=document.getElementById("simProgressBar"),y=document.getElementById("simStepText"),m=document.getElementById("simTimeText");F&&(F.innerHTML=k?`<span style="color:#ef4444; font-weight:700;">🔥 PIERCING</span> ${g.label} (${g.layerName})`:`<span style="color:#22c55e; font-weight:700;">⚡ CUTTING</span> ${g.label} (${Math.round(C*100)}%)`);const b=(ee+(k?.2:.2+.8*C))/te.length;if(H&&(H.style.width=`${Math.min(100,Math.round(b*100))}%`),y&&(y.textContent=`Step ${ee+1} of ${te.length}`),m){const h=Math.min(o,ee/te.length*o+M/de);m.textContent=`${h.toFixed(1)}s / ${o.toFixed(1)}s (${de}x)`}const v=g.simulatedDurationSec+I;(M>=v||!k&&C>=1)&&(ee++,s=performance.now()),xe=requestAnimationFrame(a)}s=performance.now(),xe=requestAnimationFrame(a)}function un(){he=!1,xe&&(cancelAnimationFrame(xe),xe=null);const n=document.getElementById("simHudOverlay");n&&n.classList.add("hidden");const e=document.getElementById("btnSimulateCut");e&&(e.textContent="▶ Simulate Cut Order",e.classList.remove("simulating")),L()}function Jo(){const n=document.getElementById("simStatusText"),e=document.getElementById("simProgressBar");n&&(n.innerHTML='<span style="color:#38bdf8; font-weight:700;">✅ SIMULATION COMPLETE:</span> Inner Cutouts Cut First, Outer Contour Cut Last'),e&&(e.style.width="100%"),setTimeout(()=>{un()},2200)}function nn(){var t,o,s;const n=((t=document.getElementById("cartProjectName"))==null?void 0:t.value.trim())||"Custom Assembly Project",e=((o=document.getElementById("cartCustomerName"))==null?void 0:o.value.trim())||"Valued Customer",i=((s=document.getElementById("cartCustomerPhone"))==null?void 0:s.value.trim())||"";return{id:`PRJ-${Date.now().toString().slice(-6)}`,projectName:n,customerName:e,customerPhone:i,items:ct,selectedSheetSize:Bt,shopSettings:D,allowRotation:!0}}function jt(){const n=document.getElementById("cartItemsList"),e=document.getElementById("cartBadge"),i=document.getElementById("nestCartCount"),t=document.getElementById("cartSummaryBox"),o=document.getElementById("shareCartWhatsAppBtn"),s=document.getElementById("printCartInvoiceBtn"),a=document.getElementById("printCartJobCardBtn");if(e&&(e.textContent=ct.length.toString(),e.style.display=ct.length>0?"inline-block":"none"),i&&(i.textContent=ct.length.toString()),!n)return;if(ct.length===0){n.innerHTML=`
      <div class="empty-cart-state">
        <span class="empty-icon">🛒</span>
        <h4>Your RFQ Cart is Empty</h4>
        <p>Configure parametric parts or upload DXFs, then click <strong>"➕ Add Part to RFQ Cart"</strong> to assemble multi-part project orders with combined nesting.</p>
      </div>
    `,t&&t.classList.add("hidden"),o&&(o.disabled=!0),s&&(s.disabled=!0),a&&(a.disabled=!0);return}t&&t.classList.remove("hidden"),o&&(o.disabled=!1),s&&(s.disabled=!1),a&&(a.disabled=!1);const r=we(ct,D,Bt);ke=r,n.innerHTML="",ct.forEach((m,b)=>{const v=document.createElement("div");v.className="cart-item-card";const h=D.currency==="INR"?"₹":"$",l=(m.unitQuote.finalUnitPrice*m.quantity).toFixed(2);v.innerHTML=`
      <div class="cart-item-header">
        <div class="cart-item-info">
          <span class="cart-item-num">#${b+1}</span>
          <span class="cart-item-name">${m.partGeometry.name}</span>
          <span class="cart-item-badge">${m.materialName} (${m.gaugeThicknessMm}mm)</span>
        </div>
        <button class="cart-item-del-btn" data-id="${m.id}" title="Remove part">✕</button>
      </div>
      <div class="cart-item-specs">
        <span>Dim: ${D.currency==="USD"?(m.partGeometry.boundingBox.width/(m.partGeometry.units==="inch"?1:25.4)).toFixed(1)+"×"+(m.partGeometry.boundingBox.height/(m.partGeometry.units==="inch"?1:25.4)).toFixed(1)+'"':m.partGeometry.boundingBox.width.toFixed(0)+"×"+m.partGeometry.boundingBox.height.toFixed(0)+"mm"}</span>
        <span>Cut: ${D.currency==="USD"?m.metrics.totalCutLengthInches.toFixed(1)+"in":(m.metrics.totalCutLengthMm/1e3).toFixed(2)+"m"}</span>
        <span>Pierces: ${m.metrics.pierceCount}</span>
        <span>Wt: ${D.currency==="USD"?(m.metrics.theoreticalWeightLbs*m.quantity).toFixed(2)+"lbs":(m.metrics.theoreticalWeightKg*m.quantity).toFixed(2)+"kg"}</span>
      </div>
      <div class="cart-item-controls">
        <div class="cart-qty-stepper">
          <button class="cart-qty-btn btn-cart-minus" data-id="${m.id}">-</button>
          <input type="number" class="cart-qty-input" data-id="${m.id}" value="${m.quantity}" min="1" max="9999" />
          <button class="cart-qty-btn btn-cart-plus" data-id="${m.id}">+</button>
        </div>
        <div class="cart-item-pricing">
          <span class="cart-unit-rate">(${h}${m.unitQuote.finalUnitPrice.toFixed(2)} / pc)</span>
          <span class="cart-item-total">${h}${l}</span>
        </div>
      </div>
    `,n.appendChild(v)}),n.querySelectorAll(".cart-item-del-btn").forEach(m=>{m.onclick=b=>{const v=b.currentTarget.getAttribute("data-id");ct=ct.filter(h=>h.id!==v),jt(),Rt==="cart"&&L(),Et("🗑️ Part removed from cart")}}),n.querySelectorAll(".btn-cart-minus").forEach(m=>{m.onclick=b=>{const v=b.currentTarget.getAttribute("data-id"),h=ct.find(l=>l.id===v);h&&h.quantity>1&&(h.quantity--,h.unitQuote=Xt(h.metrics,Q,h.quantity,D,h.secondaryOps),h.totalPrice=h.unitQuote.finalOrderTotal,jt(),Rt==="cart"&&L())}}),n.querySelectorAll(".btn-cart-plus").forEach(m=>{m.onclick=b=>{const v=b.currentTarget.getAttribute("data-id"),h=ct.find(l=>l.id===v);h&&(h.quantity++,h.unitQuote=Xt(h.metrics,Q,h.quantity,D,h.secondaryOps),h.totalPrice=h.unitQuote.finalOrderTotal,jt(),Rt==="cart"&&L())}}),n.querySelectorAll(".cart-qty-input").forEach(m=>{m.onchange=b=>{const v=b.target,h=v.getAttribute("data-id"),l=Math.max(1,parseInt(v.value,10)||1),p=ct.find(N=>N.id===h);p&&(p.quantity=l,p.unitQuote=Xt(p.metrics,Q,p.quantity,D,p.secondaryOps),p.totalPrice=p.unitQuote.finalOrderTotal,jt(),Rt==="cart"&&L())}});const d=D.currency==="USD",f=d?"$":"₹",c=document.getElementById("cartTotalParts"),u=document.getElementById("cartTotalCut"),$=document.getElementById("cartTotalPierces"),x=document.getElementById("cartTotalMass"),g=document.getElementById("cartNestingText"),M=document.getElementById("cartCostMaterial"),I=document.getElementById("cartCostCut"),k=document.getElementById("cartCostPierce"),C=document.getElementById("cartCostSecondary"),S=document.getElementById("cartCostDiscount"),F=document.getElementById("cartGstLabel"),H=document.getElementById("cartCostGst"),y=document.getElementById("cartTotalIncGst");if(c&&(c.textContent=`${r.totalPartsCount} pcs`),u&&(u.textContent=d?`${(r.totalCutLengthMeters*39.3701).toFixed(1)} in`:`${r.totalCutLengthMeters.toFixed(1)} m`),$&&($.textContent=r.totalPierces.toString()),x&&(x.textContent=d?`${(r.totalNetPartMassKg*2.20462).toFixed(1)} lbs`:`${r.totalNetPartMassKg.toFixed(2)} kg`),g){const m=r.nestingResult.sheetsRequired;g.textContent=`Nesting: ${m} Sheet${m>1?"s":""} of ${Bt.name} (${r.nestingResult.sheetUtilizationPercent}% util)`}M&&(M.textContent=`${f}${r.totalMaterialCost.toFixed(2)}`),I&&(I.textContent=`${f}${r.totalCutCost.toFixed(2)}`),k&&(k.textContent=`${f}${r.totalPierceCost.toFixed(2)}`),C&&(C.textContent=`${f}${r.totalSecondaryCost.toFixed(2)}`),S&&(S.textContent=`-${r.volumeDiscountPercent}% (${f}${r.discountAmount.toFixed(2)})`),F&&(F.textContent=d?`Sales Tax (${D.gstPercent||0}%):`:D.isInterstateSale?"IGST (18%):":"GST (CGST 9% + SGST 9%):"),H&&(H.textContent=`${f}${r.gstAmount.toFixed(2)}`),y&&(y.textContent=`${f}${r.finalTotalWithGst.toFixed(2)}`)}function Vo(){const n=document.getElementById("btnCurrencyINR"),e=document.getElementById("btnCurrencyUSD");n&&(n.onclick=()=>sn("INR")),e&&(e.onclick=()=>sn("USD"));const i=document.getElementById("modeJobWork"),t=document.getElementById("modeWithMaterial"),o=document.getElementById("modeSqFtJali"),s=P=>{D.indianQuotingMode=P,[i,t,o].forEach(_=>_==null?void 0:_.classList.remove("active")),P==="job_work"&&(i==null||i.classList.add("active")),P==="with_material"&&(t==null||t.classList.add("active")),P==="sqft_jali"&&(o==null||o.classList.add("active")),L()};i&&(i.onclick=()=>s("job_work")),t&&(t.onclick=()=>s("with_material")),o&&(o.onclick=()=>s("sqft_jali"));const a=document.getElementById("btnViewPart"),r=document.getElementById("btnViewNesting");a&&r&&(a.onclick=()=>{qt="part",a.classList.add("active"),r.classList.remove("active"),ye(),L()},r.onclick=()=>{qt="nesting",r.classList.add("active"),a.classList.remove("active"),ye(),L()});const d=document.getElementById("btnJaliViewRealistic"),f=document.getElementById("btnJaliViewCam");d&&f&&(d.onclick=()=>{Lt="realistic_gate",L()},f.onclick=()=>{Lt="cam_toolpath",L()}),document.querySelectorAll(".finish-swatch").forEach(P=>{P.onclick=()=>{const _=P.getAttribute("data-finish");_&&(B.finishMaterial=_,L())}}),document.querySelectorAll(".backlight-pill").forEach(P=>{P.onclick=()=>{const _=P.getAttribute("data-backlight");_&&(B.backlightColor=_,L())}}),document.querySelectorAll(".gate-type-btn").forEach(P=>{P.onclick=()=>{const _=P.getAttribute("data-gatetype");_&&(B.gateType=_,me(),L())}});const c=document.getElementById("btnFoldGateToolbar"),u=document.getElementById("btnExpandGateToolbar"),$=document.getElementById("gateFoldedBar");c&&(c.onclick=P=>{P.stopPropagation(),Ee=!0,oe(),kt()}),u&&(u.onclick=P=>{P.stopPropagation(),Ee=!1,oe(),kt()}),$&&($.onclick=()=>{Ee=!1,oe(),kt()});const x=document.getElementById("btnFoldBottomHud"),g=document.getElementById("btnExpandBottomHud"),M=document.getElementById("bottomHudFoldedBar");x&&(x.onclick=P=>{P.stopPropagation(),Le=!0,oe(),kt()}),g&&(g.onclick=P=>{P.stopPropagation(),Le=!1,oe(),kt()}),M&&(M.onclick=()=>{Le=!1,oe(),kt()}),Pe&&(Pe.value=D.assistGas,Pe.onchange=()=>{D.assistGas=Pe.value,L()}),se&&(se.onchange=()=>{const _=(D.currency==="USD"?He:fe).find(X=>X.id===se.value);_&&(Bt=_),L()});const I=document.getElementById("toggleSecOpsBtn"),k=document.getElementById("secOpsContent"),C=document.getElementById("secOpsChevron");I&&k&&(I.onclick=()=>{k.classList.toggle("hidden"),C&&(C.textContent=k.classList.contains("hidden")?"▶":"▼")});const S=document.getElementById("secBendsCount"),F=document.getElementById("secTapsCount"),H=document.getElementById("secDeburringCheck"),y=document.getElementById("secSurfaceFinish");S&&(S.oninput=()=>{Ht.bendingBendsCount=parseInt(S.value,10)||0,L()}),F&&(F.oninput=()=>{Ht.tappingHolesCount=parseInt(F.value,10)||0,L()}),H&&(H.onchange=()=>{Ht.deburringEnabled=H.checked,L()}),y&&(y.onchange=()=>{Ht.surfaceFinish=y.value,L()}),document.querySelectorAll(".shape-btn").forEach(P=>{P.onclick=()=>{var _,X,st,at;document.querySelectorAll(".shape-btn").forEach(lt=>lt.classList.remove("active")),P.classList.add("active"),ut=P.getAttribute("data-shape"),ce=!1,ut==="jali"?(s("sqft_jali"),Lt="realistic_gate",Ft=!1,(_=document.getElementById("btnToggleCamBadges"))==null||_.classList.remove("active"),(X=document.getElementById("legendBadgeToggle"))==null||X.classList.remove("active")):(Ft=!0,(st=document.getElementById("btnToggleCamBadges"))==null||st.classList.add("active"),(at=document.getElementById("legendBadgeToggle"))==null||at.classList.add("active")),me(),ye(),L()}}),be.onchange=()=>{const P=zt.find(_=>_.id===be.value);P&&(j=P,zn(),$e(),L())},ue.onchange=()=>{const P=parseInt(ue.value,10);Q=j.gauges[P],$e(),L()};const m=document.getElementById("partQuantity"),b=document.getElementById("qtyMinus"),v=document.getElementById("qtyPlus");m.oninput=()=>{vt=Math.max(1,parseInt(m.value,10)||1),L()},b.onclick=()=>{vt=Math.max(1,vt-1),m.value=vt.toString(),L()},v.onclick=()=>{vt++,m.value=vt.toString(),L()};const h=document.getElementById("addToCartBtn");h&&(h.onclick=()=>{const P=Ut(),_=ne(P,Q.thicknessMm,j.densityGPerCm3),X=Xt(_,Q,vt,D,Ht),st={id:`item_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,partGeometry:JSON.parse(JSON.stringify(P)),materialId:j.id,materialName:j.name,gaugeThicknessMm:Q.thicknessMm,quantity:vt,secondaryOps:{...Ht},metrics:_,unitQuote:X,totalPrice:X.finalOrderTotal,color:["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"][ct.length%6],createdAt:Date.now()};ct.push(st),jt(),Et(`➕ Added ${vt}× "${st.partGeometry.name}" to RFQ Cart!`);const at=document.getElementById("tabCart");at&&(at.classList.add("pulse"),setTimeout(()=>at.classList.remove("pulse"),1200))});const l=document.getElementById("btnSimulateCut"),p=document.getElementById("btnStopSim"),N=document.getElementById("btnToggleCamBadges"),G=document.getElementById("simSpeedSelect");l&&(l.onclick=()=>{Xo()}),p&&(p.onclick=()=>{un()});const O=document.getElementById("legendBadgeToggle"),W=()=>{Ft=!Ft,N==null||N.classList.toggle("active",Ft),O==null||O.classList.toggle("active",Ft),L()};N&&(N.onclick=W),O&&(O.onclick=W),G&&(G.onchange=()=>{de=parseFloat(G.value)||2});const T=document.getElementById("btnPrevSheet"),E=document.getElementById("btnNextSheet"),A=document.getElementById("btnNestSourceSingle"),R=document.getElementById("btnNestSourceCart"),V=document.getElementById("btnNestCartOnBed");T&&(T.onclick=()=>{Pt>0&&(Pt--,L())}),E&&(E.onclick=()=>{on&&Pt<on.sheetsRequired-1&&(Pt++,L())}),A&&R&&(A.onclick=()=>{Rt="single",A.classList.add("active"),R.classList.remove("active"),Pt=0,L()},R.onclick=()=>{if(ct.length===0){Et("⚠️ RFQ Cart is empty. Add parts first.");return}Rt="cart",R.classList.add("active"),A.classList.remove("active"),Pt=0,L()}),V&&(V.onclick=()=>{var P,_;if(ct.length===0){Et("⚠️ RFQ Cart is empty. Add parts first.");return}Rt="cart",qt="nesting",(P=document.getElementById("btnViewNesting"))==null||P.classList.add("active"),(_=document.getElementById("btnViewPart"))==null||_.classList.remove("active"),R==null||R.classList.add("active"),A==null||A.classList.remove("active"),Pt=0,L()});const Y=document.getElementById("clearCartBtn");Y&&(Y.onclick=()=>{ct.length>0&&confirm("Clear all items from your RFQ Cart?")&&(ct=[],jt(),Rt==="cart"&&(Rt="single",A==null||A.classList.add("active"),R==null||R.classList.remove("active"),L()),Et("🛒 RFQ Cart cleared"))});const yt=document.getElementById("shareCartWhatsAppBtn");yt&&(yt.onclick=()=>{if(ct.length===0)return;const P=nn(),_=ke||we(ct,D,Bt);if(D.currency==="USD"){const X=yo(P,_,P.customerName);if(navigator.clipboard.writeText(X).then(()=>{Et("✉️ Project Quotation copied to clipboard! (Ready for email)")}).catch(()=>{Et("Quotation copied.")}),P.customerPhone&&P.customerPhone.includes("@")){const st=encodeURIComponent(`Quotation: ${P.projectName||"Laser Project RFQ"} — ${D.shopName}`),at=encodeURIComponent(X);window.open(`mailto:${P.customerPhone}?subject=${st}&body=${at}`,"_blank")}}else{const X=mo(P,_),st=D.currency==="INR"?"91":"1",at=Sn(X,P.customerPhone,st);window.open(at,"_blank")}});const It=document.getElementById("printCartInvoiceBtn");It&&(It.onclick=()=>{if(ct.length===0)return;const P=nn(),_=ke||we(ct,D,Bt),X=vo(P,_),st=document.getElementById("docModal"),at=document.getElementById("docModalTitle"),lt=document.getElementById("docFrame");at.textContent=D.currency==="USD"?`Project Quotation — ${P.projectName}`:`Project Tax Invoice — ${P.projectName} (with UPI QR)`,st.classList.remove("hidden"),lt.srcdoc=X});const ot=document.getElementById("printCartJobCardBtn");ot&&(ot.onclick=()=>{if(ct.length===0)return;const P=nn(),_=ke||we(ct,D,Bt),X=Io(P,_),st=document.getElementById("docModal"),at=document.getElementById("docModalTitle"),lt=document.getElementById("docFrame");at.textContent=`Batch Job Card — ${P.projectName}`,st.classList.remove("hidden"),lt.srcdoc=X});const Z=document.getElementById("shareWhatsAppBtn"),it=document.getElementById("customerPhoneInput");Z&&(Z.onclick=()=>{const P=Ut(),_=ne(P,Q.thicknessMm,j.densityGPerCm3),X=Xt(_,Q,vt,D,Ht),st=it?it.value.trim():"";if(D.currency==="USD"){const at=Pn(P.name,_,j.name,Q,X,D.shopName,D,"Valued Customer");if(navigator.clipboard.writeText(at).then(()=>{Et("✉️ Manufacturing Quotation copied to clipboard! (Ready for email)")}).catch(()=>{Et("Quotation copied.")}),st.includes("@")){const lt=encodeURIComponent(`Quotation: ${P.name} — ${D.shopName}`),Kt=encodeURIComponent(at);window.open(`mailto:${st}?subject=${lt}&body=${Kt}`,"_blank")}}else{const at=In(P.name,_,j.name,Q,X,D.shopName,D),lt=D.currency==="INR"?"91":"1",Kt=Sn(at,st,lt);window.open(Kt,"_blank")}});const et=document.getElementById("docModal"),tt=document.getElementById("docModalTitle"),z=document.getElementById("docFrame"),xt=document.getElementById("closeDocModalBtn");xt.onclick=()=>et.classList.add("hidden"),So();const bt=document.getElementById("printInvoiceBtn");bt&&(bt.onclick=()=>{const P=Ut(),_=ne(P,Q.thicknessMm,j.densityGPerCm3),X=Xt(_,Q,vt,D,Ht),st=it?it.value:"",at=Co(P,_,j.name,Q,X,D,"Walk-in Customer",st);tt.textContent=D.currency==="USD"?"Manufacturing Quotation Preview":"Proforma Invoice Preview (with UPI QR)",et.classList.remove("hidden"),z.srcdoc=at});const mt=document.getElementById("jobCardBtn");mt&&(mt.onclick=()=>{const P=Ut(),_=ne(P,Q.thicknessMm,j.densityGPerCm3),X=Mo(P,_,j.name,Q,vt,D);tt.textContent="Laser Machine Operator Job Card",et.classList.remove("hidden"),z.srcdoc=X}),document.getElementById("downloadDxfBtn").onclick=()=>{const P=Ut(),_=pe.find(Kt=>Kt.id===D.selectedCAMProfileId)||pe[0],X=io(P,_),st=new Blob([X],{type:"application/dxf"}),at=URL.createObjectURL(st),lt=document.createElement("a");lt.href=at,lt.download=`${P.name.toLowerCase().replace(/[\s\/\(\)]+/g,"_")}_${_.id}.dxf`,document.body.appendChild(lt),lt.click(),document.body.removeChild(lt),URL.revokeObjectURL(at)};const ht=document.getElementById("copyQuoteBtn"),gt=document.getElementById("toastNotification");ht&&(ht.onclick=async()=>{const P=Ut(),_=ne(P,Q.thicknessMm,j.densityGPerCm3),X=Xt(_,Q,vt,D,Ht),st=D.currency==="USD"?Pn(P.name,_,j.name,Q,X,D.shopName,D,"Valued Customer"):In(P.name,_,j.name,Q,X,D.shopName,D);try{await navigator.clipboard.writeText(st),gt&&(gt.textContent=D.currency==="USD"?"📋 Email Quotation copied to clipboard!":"📋 Quotation copied to clipboard!",gt.classList.remove("hidden"),setTimeout(()=>{gt.classList.add("hidden")},2200))}catch{alert("Quotation copied to clipboard.")}});const ft=document.getElementById("dropzone"),K=document.getElementById("dxfFileInput"),At=document.getElementById("tabParametric"),Yt=document.getElementById("tabUpload"),re=document.getElementById("parametricContainer"),Nt=document.getElementById("uploadContainer");At.onclick=()=>{At.classList.add("active"),Yt.classList.remove("active"),re.classList.remove("hidden"),Nt.classList.add("hidden"),ce=!1,L()},Yt.onclick=()=>{Yt.classList.add("active"),At.classList.remove("active"),Nt.classList.remove("hidden"),re.classList.add("hidden"),ce=!0,ie&&L()},ft.onclick=()=>K.click(),K.onchange=P=>{var X;const _=(X=P.target.files)==null?void 0:X[0];_&&Ot(_)},ft.ondragover=P=>{P.preventDefault(),ft.classList.add("dragover")},ft.ondragleave=()=>ft.classList.remove("dragover"),ft.ondrop=P=>{var X;P.preventDefault(),ft.classList.remove("dragover");const _=(X=P.dataTransfer)==null?void 0:X.files[0];_&&Ot(_)};function Ot(P){const _=new FileReader;_.onload=X=>{var at;const st=(at=X.target)==null?void 0:at.result;try{const lt=Nn(st),Kt=P.name.replace(/\.[^/.]+$/,"");if(lt.length>1){ie=lt[0],ie.name=`${Kt}_Part1`,ce=!0;const je=document.getElementById("uploadFileInfo"),Qe=document.getElementById("loadedFileName");Qe.textContent=`${P.name} (${lt.length} distinct parts detected)`,je.classList.remove("hidden"),confirm(`Detected ${lt.length} distinct outer parts in "${P.name}". Would you like to add all ${lt.length} parts into your RFQ Cart?`)&&(lt.forEach((Ye,Ke)=>{Ye.name=`${Kt}_Part${Ke+1}`;const xn=ne(Ye,Q.thicknessMm,j.densityGPerCm3),bn=Xt(xn,Q,1,D,Ht);ct.push({id:`item_dxf_${Date.now()}_${Ke}`,partGeometry:Ye,materialId:j.id,materialName:j.name,gaugeThicknessMm:Q.thicknessMm,quantity:1,secondaryOps:{...Ht},metrics:xn,unitQuote:bn,totalPrice:bn.finalOrderTotal,color:["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"][(ct.length+Ke)%6],createdAt:Date.now()})}),jt(),Et(`✅ Added ${lt.length} parts from DXF to RFQ Cart!`))}else{ie=lt[0]||ro(st),ie.name=Kt,ce=!0;const je=document.getElementById("uploadFileInfo"),Qe=document.getElementById("loadedFileName");Qe.textContent=P.name,je.classList.remove("hidden")}L()}catch(lt){console.error(lt),alert("Failed to parse DXF file. Please ensure it is an ASCII AutoCAD DXF.")}},_.readAsText(P)}const Zt=document.getElementById("tabQuote"),pt=document.getElementById("tabCart"),wt=document.getElementById("tabAdmin"),Tt=document.getElementById("quoteView"),nt=document.getElementById("cartView"),rt=document.getElementById("adminView");Zt.onclick=()=>{Zt.classList.add("active"),pt.classList.remove("active"),wt.classList.remove("active"),Tt.classList.remove("hidden"),nt.classList.add("hidden"),rt.classList.add("hidden")},pt.onclick=()=>{pt.classList.add("active"),Zt.classList.remove("active"),wt.classList.remove("active"),nt.classList.remove("hidden"),Tt.classList.add("hidden"),rt.classList.add("hidden"),jt()},wt.onclick=()=>{wt.classList.add("active"),Zt.classList.remove("active"),pt.classList.remove("active"),rt.classList.remove("hidden"),Tt.classList.add("hidden"),nt.classList.add("hidden")};const Mt=document.getElementById("adminShopName"),$t=document.getElementById("adminGstin"),Vt=document.getElementById("adminUpiId"),St=document.getElementById("adminMinOrder"),Re=document.getElementById("adminSheetLoading"),Oe=document.getElementById("adminPricePerKg"),Ge=document.getElementById("adminPricePerMeterCut"),We=document.getElementById("adminPricePerPierce"),Ue=document.getElementById("adminGstPercent"),ze=document.getElementById("adminTaxType");Mt&&(Mt.oninput=()=>{D.shopName=Mt.value.trim()||"My CNC Shop",Tn&&(Tn.textContent=D.shopName),Wt(),L()}),$t&&($t.oninput=()=>{D.shopGstin=$t.value.trim(),Wt()}),Vt&&(Vt.oninput=()=>{D.upiId=Vt.value.trim(),Wt()}),St&&(St.oninput=()=>{D.minimumOrderFee=parseFloat(St.value)||0,Wt(),L()}),Re&&(Re.oninput=()=>{D.sheetLoadingFee=parseFloat(Re.value)||0,Wt(),L()}),ze&&(ze.onchange=()=>{D.isInterstateSale=ze.value==="interstate",Wt(),L()}),Oe&&(Oe.oninput=()=>{const P=parseFloat(Oe.value)||0;D.currency==="USD"?Q.pricePerSqInch=P:Q.pricePerKg=P,Wt(),L()}),Ge&&(Ge.oninput=()=>{const P=parseFloat(Ge.value)||0;D.currency==="USD"?Q.pricePerLinearInchCut=P:Q.pricePerMeterCut=P,Wt(),L()}),We&&(We.oninput=()=>{Q.pricePerPierce=parseFloat(We.value)||0,Wt(),L()}),Ue&&(Ue.oninput=()=>{D.gstPercent=parseFloat(Ue.value)||0,Wt(),L()});const mn=document.getElementById("resetRatesBtn");mn&&(mn.onclick=()=>{confirm("Reset shop rates to factory benchmarks?")&&(fo(D.currency),D.currency==="USD"?(D={...Ce},zt=JSON.parse(JSON.stringify(rn)),j=zt[0],Q=j.gauges[3]||j.gauges[0]):(D={..._e},zt=JSON.parse(JSON.stringify(Hn)),j=zt[0],Q=j.gauges[4]||j.gauges[0]),Un(),$e(),L())});const Qn=document.getElementById("unitMm"),Yn=document.getElementById("unitInch");Qn.onclick=()=>{Ae("mm"),Ne(),me(),L()},Yn.onclick=()=>{Ae("inch"),Ne(),me(),L()},dt.addEventListener("wheel",P=>{P.preventDefault();const _=P.deltaY<0?1.15:.87,X=Math.min(6,Math.max(.4,_t*_)),st=dt.getBoundingClientRect(),at=P.clientX-st.left-st.width/2,lt=P.clientY-st.top-st.height/2;Dt.x=at-(at-Dt.x)*(X/_t),Dt.y=lt-(lt-Dt.y)*(X/_t),_t=X,kt()},{passive:!1}),dt.addEventListener("pointerdown",P=>{(P.button===0||P.button===1)&&(Be=!0,tn={x:P.clientX-Dt.x,y:P.clientY-Dt.y},dt.classList.add("is-dragging"),dt.setPointerCapture(P.pointerId))}),dt.addEventListener("pointermove",P=>{Be&&(Dt.x=P.clientX-tn.x,Dt.y=P.clientY-tn.y,kt())});const hn=P=>{if(Be){Be=!1,dt.classList.remove("is-dragging");try{dt.releasePointerCapture(P.pointerId)}catch{}}};dt.addEventListener("pointerup",hn),dt.addEventListener("pointercancel",hn),dt.addEventListener("dblclick",()=>{ye()});const gn=document.getElementById("btnZoomIn"),pn=document.getElementById("btnZoomOut"),fn=document.getElementById("btnZoomFit");gn&&(gn.onclick=()=>{_t=Math.min(6,_t*1.25),kt()}),pn&&(pn.onclick=()=>{_t=Math.max(.4,_t/1.25),kt()}),fn&&(fn.onclick=()=>{ye()});const yn=document.getElementById("btnExportImage");yn&&(yn.onclick=()=>{qo()})}function qo(){const n=dt.querySelector("svg");if(!n){Et("⚠️ No design found to export");return}try{const e=n.cloneNode(!0);e.style.transform="";const i=e.getAttribute("viewBox");let t=1600,o=1200;if(i){const c=i.split(/[\s,]+/).map(Number);if(c.length===4&&c[2]>0&&c[3]>0){const u=c[2]/c[3];u>=1?(t=2400,o=Math.round(2400/u)):(o=2400,t=Math.round(2400*u))}}e.setAttribute("width",t.toString()),e.setAttribute("height",o.toString());const s=new XMLSerializer().serializeToString(e),a=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,d=r.createObjectURL(a),f=new Image;f.onload=()=>{const c=document.createElement("canvas");c.width=t,c.height=o;const u=c.getContext("2d");u&&(u.fillStyle="#080c14",u.fillRect(0,0,t,o),u.drawImage(f,0,0,t,o),r.revokeObjectURL(d),c.toBlob($=>{if(!$)return;const x=document.createElement("a"),g=Ut(),M=ut==="jali"&&Lt==="realistic_gate"?`Gate_Render_${B.finishMaterial||"matte_black"}_${g.boundingBox.width.toFixed(0)}x${g.boundingBox.height.toFixed(0)}mm.png`:`CNC_${ut}_${g.boundingBox.width.toFixed(0)}mm.png`;x.download=M,x.href=r.createObjectURL($),x.click(),r.revokeObjectURL(x.href),Et(`📸 Exported high-res PNG (${t}×${o}px) for WhatsApp sharing!`)},"image/png"))},f.src=d}catch(e){console.error("Export PNG failed:",e),Et("⚠️ Export failed")}}function Zo(){const n=document.getElementById("panelLeft"),e=document.getElementById("panelRight"),i=document.getElementById("splitterLeft"),t=document.getElementById("splitterRight"),o=document.getElementById("collapseLeftBtn"),s=document.getElementById("collapseRightBtn"),a=document.getElementById("restoreLeftBtn"),r=document.getElementById("restoreRightBtn"),d=document.getElementById("btnToggleLeftPanel"),f=document.getElementById("btnToggleRightPanel"),c=I=>{n&&(I?(n.classList.remove("collapsed"),i==null||i.classList.remove("disabled"),a==null||a.classList.add("hidden"),d==null||d.classList.add("active")):(n.classList.add("collapsed"),i==null||i.classList.add("disabled"),a==null||a.classList.remove("hidden"),d==null||d.classList.remove("active")))},u=I=>{e&&(I?(e.classList.remove("collapsed"),t==null||t.classList.remove("disabled"),r==null||r.classList.add("hidden"),f==null||f.classList.add("active")):(e.classList.add("collapsed"),t==null||t.classList.add("disabled"),r==null||r.classList.remove("hidden"),f==null||f.classList.remove("active")))},$=()=>{const I=!(n!=null&&n.classList.contains("collapsed"));c(!I)},x=()=>{const I=!(e!=null&&e.classList.contains("collapsed"));u(!I)};o&&(o.onclick=()=>c(!1)),a&&(a.onclick=()=>c(!0)),d&&(d.onclick=()=>$()),s&&(s.onclick=()=>u(!1)),r&&(r.onclick=()=>u(!0)),f&&(f.onclick=()=>x()),window.addEventListener("keydown",I=>{I.altKey&&(I.key==="1"||I.code==="Digit1")?(I.preventDefault(),$()):I.altKey&&(I.key==="2"||I.code==="Digit2")&&(I.preventDefault(),x())});let g=!1,M=!1;i&&(i.onmousedown=()=>{g=!0},i.ondblclick=()=>{n&&(n.style.width="340px")}),t&&(t.onmousedown=()=>{M=!0},t.ondblclick=()=>{if(e){const I=window.innerWidth>=1600?"450px":window.innerWidth>=1440?"430px":window.innerWidth>=1200?"410px":"385px";e.style.width=I}}),window.addEventListener("mousemove",I=>{if(g&&n){const k=window.innerWidth>=1200?280:250,C=Math.max(k,Math.min(600,I.clientX));n.style.width=`${C}px`}else if(M&&e){const k=window.innerWidth>=1440?405:window.innerWidth>=1200?385:360,C=window.innerWidth>=1440?720:680,S=Math.max(k,Math.min(C,window.innerWidth-I.clientX));e.style.width=`${S}px`}}),window.addEventListener("mouseup",()=>{g=!1,M=!1})}_o();
