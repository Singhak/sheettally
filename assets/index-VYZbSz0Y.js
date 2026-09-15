var zi=Object.defineProperty;var Qi=(n,t,o)=>t in n?zi(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o;var xt=(n,t,o)=>Qi(n,typeof t!="symbol"?t+"":t,o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}})();function qi(n){const t=n.units==="inch",o=t?.5:10,e=Math.max(o,n.length),i=Math.max(o,n.width),a=Math.min(n.cornerSize||0,Math.min(e,i)/2-(t?.05:1)),s=[];n.cornerType==="fillet"&&a>0?(s.push({type:"line",start:{x:a,y:0},end:{x:e-a,y:0}}),s.push({type:"arc",center:{x:e-a,y:a},radius:a,startAngle:270*Math.PI/180,endAngle:360*Math.PI/180,counterClockwise:!0}),s.push({type:"line",start:{x:e,y:a},end:{x:e,y:i-a}}),s.push({type:"arc",center:{x:e-a,y:i-a},radius:a,startAngle:0,endAngle:90*Math.PI/180,counterClockwise:!0}),s.push({type:"line",start:{x:e-a,y:i},end:{x:a,y:i}}),s.push({type:"arc",center:{x:a,y:i-a},radius:a,startAngle:90*Math.PI/180,endAngle:180*Math.PI/180,counterClockwise:!0}),s.push({type:"line",start:{x:0,y:i-a},end:{x:0,y:a}}),s.push({type:"arc",center:{x:a,y:a},radius:a,startAngle:180*Math.PI/180,endAngle:270*Math.PI/180,counterClockwise:!0})):n.cornerType==="chamfer"&&a>0?(s.push({type:"line",start:{x:a,y:0},end:{x:e-a,y:0}}),s.push({type:"line",start:{x:e-a,y:0},end:{x:e,y:a}}),s.push({type:"line",start:{x:e,y:a},end:{x:e,y:i-a}}),s.push({type:"line",start:{x:e,y:i-a},end:{x:e-a,y:i}}),s.push({type:"line",start:{x:e-a,y:i},end:{x:a,y:i}}),s.push({type:"line",start:{x:a,y:i},end:{x:0,y:i-a}}),s.push({type:"line",start:{x:0,y:i-a},end:{x:0,y:a}}),s.push({type:"line",start:{x:0,y:a},end:{x:a,y:0}})):(s.push({type:"line",start:{x:0,y:0},end:{x:e,y:0}}),s.push({type:"line",start:{x:e,y:0},end:{x:e,y:i}}),s.push({type:"line",start:{x:e,y:i},end:{x:0,y:i}}),s.push({type:"line",start:{x:0,y:i},end:{x:0,y:0}}));const r={segments:s,isClosed:!0,isHole:!1},m=[],h=t?.1:1,l=Math.max(h,n.edgeOffsetX),u=Math.max(h,n.edgeOffsetY),b=[];n.holePattern==="4-corner"?(b.push({x:l,y:u}),b.push({x:e-l,y:u}),b.push({x:e-l,y:i-u}),b.push({x:l,y:i-u})):n.holePattern==="6-hole"?(b.push({x:l,y:u}),b.push({x:e/2,y:u}),b.push({x:e-l,y:u}),b.push({x:e-l,y:i-u}),b.push({x:e/2,y:i-u}),b.push({x:l,y:i-u})):n.holePattern==="8-hole"&&(b.push({x:l,y:u}),b.push({x:e/2,y:u}),b.push({x:e-l,y:u}),b.push({x:e-l,y:i/2}),b.push({x:e-l,y:i-u}),b.push({x:e/2,y:i-u}),b.push({x:l,y:i-u}),b.push({x:l,y:i/2}));const f=Math.max(t?.05:1,n.holeDiameter/2);if(n.holeType==="round")for(const T of b)m.push({center:T,radius:f});else if(n.holeType==="slotted"){const T=t?.1:2,L=Math.max(f*2,n.slotLength||f*3),$=Math.max(T,n.slotWidth||f*2),v=$/2,_=Math.max(0,(L-$)/2);for(const A of b){const E=[],x={x:A.x-_,y:A.y},p={x:A.x+_,y:A.y};E.push({type:"line",start:{x:x.x,y:x.y+v},end:{x:p.x,y:p.y+v}}),E.push({type:"arc",center:p,radius:v,startAngle:90*Math.PI/180,endAngle:270*Math.PI/180,counterClockwise:!1}),E.push({type:"line",start:{x:p.x,y:p.y-v},end:{x:x.x,y:x.y-v}}),E.push({type:"arc",center:x,radius:v,startAngle:270*Math.PI/180,endAngle:90*Math.PI/180,counterClockwise:!1}),m.push({segments:E,isClosed:!0,isHole:!0})}}const S=e/2,M=i/2;if(n.centerCutoutType==="round"&&n.centerCutoutDiameter&&n.centerCutoutDiameter>0)m.push({center:{x:S,y:M},radius:n.centerCutoutDiameter/2});else if(n.centerCutoutType==="rectangular"&&n.centerCutoutWidth&&n.centerCutoutHeight){const T=Math.min(n.centerCutoutWidth,e-l*2),L=Math.min(n.centerCutoutHeight,i-u*2),$=T/2,v=L/2,_=[{type:"line",start:{x:S-$,y:M-v},end:{x:S+$,y:M-v}},{type:"line",start:{x:S+$,y:M-v},end:{x:S+$,y:M+v}},{type:"line",start:{x:S+$,y:M+v},end:{x:S-$,y:M+v}},{type:"line",start:{x:S-$,y:M+v},end:{x:S-$,y:M-v}}];m.push({segments:_,isClosed:!0,isHole:!0})}return{name:"Structural Baseplate",units:n.units,outerContour:r,innerHoles:m,boundingBox:{minX:0,minY:0,maxX:e,maxY:i,width:e,height:i}}}const ct=[{standard:"BS10",name:'BS 10 Table E - 1" NB',nominalBore:'1"',outerDiameter:114.3,innerBore:33.4,pitchCircleDiameter:82.6,boltCount:4,boltDiameter:14.3,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 1.5" NB',nominalBore:'1.5"',outerDiameter:133.4,innerBore:48.3,pitchCircleDiameter:98.4,boltCount:4,boltDiameter:14.3,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 2" NB',nominalBore:'2"',outerDiameter:152.4,innerBore:60.3,pitchCircleDiameter:114.3,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 2.5" NB',nominalBore:'2.5"',outerDiameter:165.1,innerBore:73,pitchCircleDiameter:127,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 3" NB',nominalBore:'3"',outerDiameter:184.2,innerBore:88.9,pitchCircleDiameter:146,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 4" NB',nominalBore:'4"',outerDiameter:215.9,innerBore:114.3,pitchCircleDiameter:177.8,boltCount:8,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 6" NB',nominalBore:'6"',outerDiameter:279.4,innerBore:168.3,pitchCircleDiameter:235,boltCount:8,boltDiameter:20.6,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 8" NB',nominalBore:'8"',outerDiameter:336.6,innerBore:219.1,pitchCircleDiameter:292.1,boltCount:8,boltDiameter:20.6,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 2" NB',nominalBore:'2"',outerDiameter:152.4,innerBore:60.3,pitchCircleDiameter:114.3,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 3" NB',nominalBore:'3"',outerDiameter:184.2,innerBore:88.9,pitchCircleDiameter:146,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 4" NB',nominalBore:'4"',outerDiameter:215.9,innerBore:114.3,pitchCircleDiameter:177.8,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 6" NB',nominalBore:'6"',outerDiameter:279.4,innerBore:168.3,pitchCircleDiameter:235,boltCount:8,boltDiameter:17.5,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN25 (1")',nominalBore:"DN25",outerDiameter:115,innerBore:34,pitchCircleDiameter:85,boltCount:4,boltDiameter:14,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN50 (2")',nominalBore:"DN50",outerDiameter:165,innerBore:61,pitchCircleDiameter:125,boltCount:4,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN80 (3")',nominalBore:"DN80",outerDiameter:200,innerBore:90,pitchCircleDiameter:160,boltCount:8,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN100 (4")',nominalBore:"DN100",outerDiameter:220,innerBore:115,pitchCircleDiameter:180,boltCount:8,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN150 (6")',nominalBore:"DN150",outerDiameter:285,innerBore:169,pitchCircleDiameter:240,boltCount:8,boltDiameter:22,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN200 (8")',nominalBore:"DN200",outerDiameter:340,innerBore:220,pitchCircleDiameter:295,boltCount:12,boltDiameter:22,units:"mm"},{standard:"ASME",name:'ASME 1" Class 150',nominalBore:'1"',outerDiameter:4.25,innerBore:1.36,pitchCircleDiameter:3.12,boltCount:4,boltDiameter:.62,units:"inch"},{standard:"ASME",name:'ASME 2" Class 150',nominalBore:'2"',outerDiameter:6,innerBore:2.44,pitchCircleDiameter:4.75,boltCount:4,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 3" Class 150',nominalBore:'3"',outerDiameter:7.5,innerBore:3.57,pitchCircleDiameter:6,boltCount:4,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 4" Class 150',nominalBore:'4"',outerDiameter:9,innerBore:4.57,pitchCircleDiameter:7.5,boltCount:8,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 6" Class 150',nominalBore:'6"',outerDiameter:11,innerBore:6.72,pitchCircleDiameter:9.5,boltCount:8,boltDiameter:.88,units:"inch"},{standard:"ASME",name:'ASME 8" Class 150',nominalBore:'8"',outerDiameter:13.5,innerBore:8.72,pitchCircleDiameter:11.75,boltCount:8,boltDiameter:.88,units:"inch"}];function Yi(n){const t=n.units==="inch",e=Math.max(t?.5:10,n.outerDiameter),i=Math.max(0,Math.min(n.innerBore,e-(t?.2:5))),a=Math.max(i+(t?.1:2),Math.min(n.pitchCircleDiameter,e-(t?.1:2))),s=e/2,r={x:s,y:s},h={segments:[{type:"arc",center:r,radius:s,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:r,radius:s,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],isClosed:!0,isHole:!1},l=[];i>0&&l.push({center:r,radius:i/2});const u=Math.max(1,Math.floor(n.boltCount)),y=Math.max(t?.05:.5,n.boltDiameter/2),f=a/2;for(let S=0;S<u;S++){const M=2*Math.PI*S/u,T=r.x+f*Math.cos(M),L=r.y+f*Math.sin(M);l.push({center:{x:T,y:L},radius:y})}return{name:"Pipe Flange",units:n.units,outerContour:h,innerHoles:l,boundingBox:{minX:0,minY:0,maxX:e,maxY:e,width:e,height:e}}}function Xi(n){const t=n.units==="inch",o=t?.5:10,e=Math.max(o,n.baseWidth),i=Math.max(o,n.height),a=n.hasWeldSnipe?Math.min(n.snipeSize||(t?1:25),Math.min(e,i)*.4):0,s=[];a>0?(s.push({type:"line",start:{x:a,y:0},end:{x:e,y:0}}),s.push({type:"line",start:{x:e,y:0},end:{x:0,y:i}}),s.push({type:"line",start:{x:0,y:i},end:{x:0,y:a}}),s.push({type:"line",start:{x:0,y:a},end:{x:a,y:0}})):(s.push({type:"line",start:{x:0,y:0},end:{x:e,y:0}}),s.push({type:"line",start:{x:e,y:0},end:{x:0,y:i}}),s.push({type:"line",start:{x:0,y:i},end:{x:0,y:0}}));const r={segments:s,isClosed:!0,isHole:!1},m=[];return{name:"Structural Gusset Plate",units:n.units,outerContour:r,innerHoles:m,boundingBox:{minX:0,minY:0,maxX:e,maxY:i,width:e,height:i}}}function Ki(n){const t=n.units==="inch",o=t?4:100,e=Math.max(o,n.width),i=Math.max(o,n.height),a=n.borderMarginMm??(t?1.5:40),s=t?a>8?a/25.4:a:a<5?a*25.4:a,r=Math.max(t?.5:15,Math.min(s,Math.min(e,i)*.25)),h={segments:[{type:"line",start:{x:0,y:0},end:{x:e,y:0}},{type:"line",start:{x:e,y:0},end:{x:e,y:i}},{type:"line",start:{x:e,y:i},end:{x:0,y:i}},{type:"line",start:{x:0,y:i},end:{x:0,y:0}}],isClosed:!0,isHole:!1},l=[],u=n.mountingHoleDiameter??(t?.3125:8),b=t?u>2?u/25.4:u:u<1?u*25.4:u;if(n.hasMountingHoles&&b>0){const E=b/2,x=r/2;l.push({center:{x,y:x},radius:E}),l.push({center:{x:e-x,y:x},radius:E}),l.push({center:{x:e-x,y:i-x},radius:E}),l.push({center:{x,y:i-x},radius:E}),i>(t?24:600)&&(l.push({center:{x,y:i/2},radius:E}),l.push({center:{x:e-x,y:i/2},radius:E}))}const y=n.kickPlateHeightMm??(t?12:300),f=t?y>30?y/25.4:y:y<30?y*25.4:y,S=n.hasKickPlate?Math.max(0,Math.min(i*.4,f)):0,M=e-2*r,T=i-2*r-S,L=Math.max(2,Math.min(12,Math.floor(n.gridColumns||(e>(t?20:500)?4:2)))),$=Math.max(2,Math.min(20,Math.floor(n.gridRows||(i>(t?20:500)?6:3)))),v=M/L,_=T/$,A=t?.2:6;for(let E=0;E<$;E++)for(let x=0;x<L;x++){const p=r+x*v,g=r+S+E*_,c=p+v/2,d=g+_/2,N=t?.15:4,H=Math.max(N,v-A),D=Math.max(N,_-A),G=Math.min(H,D)/2;if(n.patternType==="diamond_lattice"){const B=H/2,P=D/2,R=[{type:"line",start:{x:c,y:d-P},end:{x:c+B,y:d}},{type:"line",start:{x:c+B,y:d},end:{x:c,y:d+P}},{type:"line",start:{x:c,y:d+P},end:{x:c-B,y:d}},{type:"line",start:{x:c-B,y:d},end:{x:c,y:d-P}}];l.push({segments:R,isClosed:!0,isHole:!0})}else if(n.patternType==="islamic_star"){const B=[];for(let R=0;R<16;R++){const O=R%2===0?G:G*.52,K=R*Math.PI/8,j=(R+1)*Math.PI/8,ce=(R+1)%2===0?G:G*.52;B.push({type:"line",start:{x:c+O*Math.cos(K),y:d+O*Math.sin(K)},end:{x:c+ce*Math.cos(j),y:d+ce*Math.sin(j)}})}l.push({segments:B,isClosed:!0,isHole:!0})}else if(n.patternType==="floral_mandala"){const B=[];for(let R=0;R<32;R++){const O=R*2*Math.PI/32,K=(R+1)*2*Math.PI/32,j=G*(.42+.56*Math.pow(Math.abs(Math.cos(4*O)),1.3)),ce=G*(.42+.56*Math.pow(Math.abs(Math.cos(4*K)),1.3));B.push({type:"line",start:{x:c+j*Math.cos(O),y:d+j*Math.sin(O)},end:{x:c+ce*Math.cos(K),y:d+ce*Math.sin(K)}})}l.push({segments:B,isClosed:!0,isHole:!0})}else if(n.patternType==="tree_of_life"){const B=G*.9,P=G*.42,R=[{type:"line",start:{x:c,y:d-B},end:{x:c+P,y:d}},{type:"line",start:{x:c+P,y:d},end:{x:c,y:d+B}},{type:"line",start:{x:c,y:d+B},end:{x:c-P,y:d}},{type:"line",start:{x:c-P,y:d},end:{x:c,y:d-B}}];l.push({segments:R,isClosed:!0,isHole:!0});const O=.55,K=G*.45,j=G*.15,ce=[{type:"line",start:{x:c-K,y:d-j-B*O},end:{x:c-K+P*O,y:d-j}},{type:"line",start:{x:c-K+P*O,y:d-j},end:{x:c-K,y:d-j+B*O}},{type:"line",start:{x:c-K,y:d-j+B*O},end:{x:c-K-P*O,y:d-j}},{type:"line",start:{x:c-K-P*O,y:d-j},end:{x:c-K,y:d-j-B*O}}];l.push({segments:ce,isClosed:!0,isHole:!0});const ye=[{type:"line",start:{x:c+K,y:d-j-B*O},end:{x:c+K+P*O,y:d-j}},{type:"line",start:{x:c+K+P*O,y:d-j},end:{x:c+K,y:d-j+B*O}},{type:"line",start:{x:c+K,y:d-j+B*O},end:{x:c+K-P*O,y:d-j}},{type:"line",start:{x:c+K-P*O,y:d-j},end:{x:c+K,y:d-j-B*O}}];l.push({segments:ye,isClosed:!0,isHole:!0})}else if(n.patternType==="chevron_herringbone"){const B=H*.45,P=D*.22,R=D*.22,O=[{type:"line",start:{x:c,y:d+R+P},end:{x:c+B,y:d+R}},{type:"line",start:{x:c+B,y:d+R},end:{x:c+B*.8,y:d+R-P*.5}},{type:"line",start:{x:c+B*.8,y:d+R-P*.5},end:{x:c,y:d+R+P*.4}},{type:"line",start:{x:c,y:d+R+P*.4},end:{x:c-B*.8,y:d+R-P*.5}},{type:"line",start:{x:c-B*.8,y:d+R-P*.5},end:{x:c-B,y:d+R}},{type:"line",start:{x:c-B,y:d+R},end:{x:c,y:d+R+P}}];l.push({segments:O,isClosed:!0,isHole:!0});const K=[{type:"line",start:{x:c,y:d-R+P},end:{x:c+B,y:d-R}},{type:"line",start:{x:c+B,y:d-R},end:{x:c+B*.8,y:d-R-P*.5}},{type:"line",start:{x:c+B*.8,y:d-R-P*.5},end:{x:c,y:d-R+P*.4}},{type:"line",start:{x:c,y:d-R+P*.4},end:{x:c-B*.8,y:d-R-P*.5}},{type:"line",start:{x:c-B*.8,y:d-R-P*.5},end:{x:c-B,y:d-R}},{type:"line",start:{x:c-B,y:d-R},end:{x:c,y:d-R+P}}];l.push({segments:K,isClosed:!0,isHole:!0})}else if(n.patternType==="voronoi_matrix"){const P=(E*1.618+x*2.718)%(Math.PI*2),R=[];for(let O=0;O<6;O++){const K=O*2*Math.PI/6+P*.15,j=(O+1)*2*Math.PI/6+P*.15,ce=G*(.75+.22*Math.sin(O*2.3+P)),ye=G*(.75+.22*Math.sin((O+1)*2.3+P));R.push({type:"line",start:{x:c+ce*Math.cos(K),y:d+ce*Math.sin(K)},end:{x:c+ye*Math.cos(j),y:d+ye*Math.sin(j)}})}l.push({segments:R,isClosed:!0,isHole:!0})}else if(n.patternType==="honeycomb"){const B=[];for(let P=0;P<6;P++){const R=P*Math.PI/3,O=(P+1)*Math.PI/3;B.push({type:"line",start:{x:c+G*Math.cos(R),y:d+G*Math.sin(R)},end:{x:c+G*Math.cos(O),y:d+G*Math.sin(O)}})}l.push({segments:B,isClosed:!0,isHole:!0})}else{const B=H*.4,P=D*.42,R=[{type:"line",start:{x:c-B,y:d-P},end:{x:c+B,y:d-P}},{type:"line",start:{x:c+B,y:d-P},end:{x:c+B,y:d+P}},{type:"line",start:{x:c+B,y:d+P},end:{x:c-B,y:d+P}},{type:"line",start:{x:c-B,y:d+P},end:{x:c-B,y:d-P}}];l.push({segments:R,isClosed:!0,isHole:!0})}}return{name:"Architectural CNC Jali / Gate Panel",units:n.units,outerContour:h,innerHoles:l,boundingBox:{minX:0,minY:0,maxX:e,maxY:i,width:e,height:i}}}function Ji(n){const t=n.units==="inch",o=t?.75:20,e=Math.max(o,n.baseWidth),i=Math.max(o,n.height),a=Math.min(n.chamferTop,i-(t?.2:5)),s=Math.min(n.chamferRight,e-(t?.2:5)),m={segments:[{type:"line",start:{x:0,y:0},end:{x:e,y:0}},{type:"line",start:{x:e,y:0},end:{x:e,y:i-a}},{type:"line",start:{x:e,y:i-a},end:{x:e-s,y:i}},{type:"line",start:{x:e-s,y:i},end:{x:0,y:i}},{type:"line",start:{x:0,y:i},end:{x:0,y:0}}],isClosed:!0,isHole:!1},h=[];{const l=n.baseHoleCount,u=n.baseHoleDiameter/2,b=e*.7/(l+1),y=Math.min(t?.6:15,(i-a)/2);for(let f=1;f<=l;f++)h.push({center:{x:b*f,y},radius:u})}{const l=n.uprightHoleCount,u=n.uprightHoleDiameter/2,b=i*.7/(l+1),y=Math.min(t?.6:15,(e-s)/2);for(let f=1;f<=l;f++)h.push({center:{x:y,y:b*f},radius:u})}{const l=Math.min(e,i)*.35,u=n.lighteningHoleDiameter||l;h.push({center:{x:e*.38,y:i*.38},radius:u/2})}return{name:"Mounting Gusset & Bracket",units:n.units,outerContour:m,innerHoles:h,boundingBox:{minX:0,minY:0,maxX:e,maxY:i,width:e,height:i}}}function Vi(n){const t=n.units==="inch",e=Math.max(t?.5:10,n.outerDiameter),i=Math.max(0,Math.min(n.innerDiameter,e-(t?.1:2))),a=e/2,s={x:a,y:a},m={segments:[{type:"arc",center:s,radius:a,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:s,radius:a,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],isClosed:!0,isHole:!1},h=[];if(i>0&&h.push({center:s,radius:i/2}),n.boltDiameter&&n.pitchCircleDiameter){const l=Math.max(1,n.boltCount),u=n.boltDiameter/2,b=n.pitchCircleDiameter/2;for(let y=0;y<l;y++){const f=2*Math.PI*y/l;h.push({center:{x:s.x+b*Math.cos(f),y:s.y+b*Math.sin(f)},radius:u})}}return{name:"Circular Disc / Washer",units:n.units,outerContour:m,innerHoles:h,boundingBox:{minX:0,minY:0,maxX:e,maxY:e,width:e,height:e}}}function Zi(n){if(n.type==="line"){const t=n.end.x-n.start.x,o=n.end.y-n.start.y;return Math.sqrt(t*t+o*o)}else if(n.type==="arc"){let t=Math.abs(n.endAngle-n.startAngle);return n.counterClockwise&&(t=2*Math.PI-t),n.radius*t}return 0}function hi(n){if(!n.segments||n.segments.length===0)return 0;let t=0;for(const o of n.segments)if(o.type==="line")t+=o.start.x*o.end.y-o.end.x*o.start.y;else if(o.type==="arc"){const e={x:o.center.x+o.radius*Math.cos(o.startAngle),y:o.center.y+o.radius*Math.sin(o.startAngle)},i={x:o.center.x+o.radius*Math.cos(o.endAngle),y:o.center.y+o.radius*Math.sin(o.endAngle)};t+=e.x*i.y-i.x*e.y;let a=Math.abs(o.endAngle-o.startAngle);o.counterClockwise&&(a=2*Math.PI-a);const s=.5*o.radius*o.radius*(a-Math.sin(a));t+=o.counterClockwise?-s*2:s*2}return Math.abs(t)/2}function Kt(n){let t=0;for(const o of n.segments)t+=Zi(o);return t}function rt(n,t,o){const i=n.units==="inch"?25.4:1,a=Kt(n.outerContour);let s=0,r=0;for(const c of n.innerHoles)r+=1,"radius"in c?s+=2*Math.PI*c.radius:s+=Kt(c);const m=a+s,h=1+r,l=m*i,u=l/25.4,b=n.boundingBox.width*i,y=n.boundingBox.height*i,f=b/25.4,S=y/25.4;let M=hi(n.outerContour);if(M<=0&&(M=n.boundingBox.width*n.boundingBox.height,n.name.includes("Flange")||n.name.includes("Disc"))){const c=n.boundingBox.width/2;M=Math.PI*c*c}let T=0;for(const c of n.innerHoles)if("radius"in c){const d=c.radius;T+=Math.PI*d*d}else T+=hi(c);const L=M*.85,$=Math.min(T,L),_=Math.max(M*.15,M-$)*(i*i),A=_/(25.4*25.4),p=_/100*(t/10)*o/1e3,g=p*2.20462262;return{totalCutLengthMm:Math.round(l*10)/10,totalCutLengthInches:Math.round(u*100)/100,pierceCount:h,boundingBoxWidthMm:Math.round(b*10)/10,boundingBoxHeightMm:Math.round(y*10)/10,boundingBoxWidthInches:Math.round(f*100)/100,boundingBoxHeightInches:Math.round(S*100)/100,netAreaSqMm:Math.round(_),netAreaSqInches:Math.round(A*100)/100,theoreticalWeightKg:Math.round(p*100)/100,theoreticalWeightLbs:Math.round(g*100)/100}}function eo(n){return{minX:n.center.x-n.radius,minY:n.center.y-n.radius,maxX:n.center.x+n.radius,maxY:n.center.y+n.radius}}function kn(n){let t=1/0,o=1/0,e=-1/0,i=-1/0;for(const a of n.segments)a.type==="line"?(t=Math.min(t,a.start.x,a.end.x),o=Math.min(o,a.start.y,a.end.y),e=Math.max(e,a.start.x,a.end.x),i=Math.max(i,a.start.y,a.end.y)):(t=Math.min(t,a.center.x-a.radius),o=Math.min(o,a.center.y-a.radius),e=Math.max(e,a.center.x+a.radius),i=Math.max(i,a.center.y+a.radius));return{minX:t,minY:o,maxX:e,maxY:i}}function to(n,t){const o=Math.max(0,Math.max(n.minX-t.maxX,t.minX-n.maxX)),e=Math.max(0,Math.max(n.minY-t.maxY,t.minY-n.maxY));return Math.sqrt(o*o+e*e)}function Jt(n){const t=[];for(const o of n.segments)if(o.type==="line")t.push({p1:o.start,p2:o.end});else{let e=o.counterClockwise?o.endAngle-o.startAngle:o.startAngle-o.endAngle;e<=0&&(e+=2*Math.PI);const i=Math.max(8,Math.ceil(e/(Math.PI/4)));let a={x:o.center.x+o.radius*Math.cos(o.startAngle),y:o.center.y+o.radius*Math.sin(o.startAngle)};for(let s=1;s<=i;s++){const r=o.counterClockwise?o.startAngle+e*s/i:o.startAngle-e*s/i,m={x:o.center.x+o.radius*Math.cos(r),y:o.center.y+o.radius*Math.sin(r)};t.push({p1:a,p2:m}),a=m}}return t}function Rt(n,t,o){const e=o.x-t.x,i=o.y-t.y,a=e*e+i*i;if(a<1e-12)return Math.sqrt((n.x-t.x)**2+(n.y-t.y)**2);let s=((n.x-t.x)*e+(n.y-t.y)*i)/a;s=Math.max(0,Math.min(1,s));const r=t.x+s*e,m=t.y+s*i;return Math.sqrt((n.x-r)**2+(n.y-m)**2)}function no(n,t,o,e){function i(l,u,b){return(b.y-l.y)*(u.x-l.x)-(u.y-l.y)*(b.x-l.x)}function a(l,u,b){return Math.min(u.x,b.x)-1e-7<=l.x&&l.x<=Math.max(u.x,b.x)+1e-7&&Math.min(u.y,b.y)-1e-7<=l.y&&l.y<=Math.max(u.y,b.y)+1e-7}const s=i(n,t,o),r=i(n,t,e),m=i(o,e,n),h=i(o,e,t);return!!((s>1e-9&&r<-1e-9||s<-1e-9&&r>1e-9)&&(m>1e-9&&h<-1e-9||m<-1e-9&&h>1e-9)||Math.abs(s)<=1e-9&&a(o,n,t)||Math.abs(r)<=1e-9&&a(e,n,t)||Math.abs(m)<=1e-9&&a(n,o,e)||Math.abs(h)<=1e-9&&a(t,o,e))}function io(n,t){return no(n.p1,n.p2,t.p1,t.p2)?0:Math.min(Rt(n.p1,t.p1,t.p2),Rt(n.p2,t.p1,t.p2),Rt(t.p1,n.p1,n.p2),Rt(t.p2,n.p1,n.p2))}function An(n,t){let o=!1;for(const e of t){const i=e.p1,a=e.p2;if(i.y>n.y!=a.y>n.y){const s=i.x+(n.y-i.y)*(a.x-i.x)/(a.y-i.y);n.x<s&&(o=!o)}}return o}function pi(n,t){const o=Jt(t);if(An(n.center,o))return 0;let e=1/0;for(const i of o){const a=Rt(n.center,i.p1,i.p2)-n.radius;a<e&&(e=a)}return e}function oo(n,t){const o=Jt(n),e=Jt(t);let i=1/0;for(const a of o)for(const s of e){const r=io(a,s);if(r<=1e-4)return 0;r<i&&(i=r)}return o.length>0&&An(o[0].p1,e)||e.length>0&&An(e[0].p1,o)?0:i}function ao(n,t){const o="radius"in n,e="radius"in t;if(o&&e){const i=n,a=t,s=i.center.x-a.center.x,r=i.center.y-a.center.y;return Math.sqrt(s*s+r*r)-(i.radius+a.radius)}else return o&&!e?pi(n,t):!o&&e?pi(t,n):oo(n,t)}function so(n,t){const o=[],i=n.units==="inch"?25.4:1,a=n.outerContour.segments;if(a.length===0)o.push({rule:"Contour Existence",severity:"error",message:"Part has no outer cutting contour."});else{const $=a[0],v=a[a.length-1],_=$.type==="line"?$.start:{x:$.center.x+$.radius*Math.cos($.startAngle),y:$.center.y+$.radius*Math.sin($.startAngle)},A=v.type==="line"?v.end:{x:v.center.x+v.radius*Math.cos(v.endAngle),y:v.center.y+v.radius*Math.sin(v.endAngle)},E=Math.sqrt((A.x-_.x)**2+(A.y-_.y)**2)*i;E>.1&&o.push({rule:"Closed Polyline Rule",severity:"error",message:`Outer contour is not closed (gap is ${E.toFixed(2)} mm). Laser CAM will reject open contours.`,actualValue:E,thresholdValue:.1})}for(let $=0;$<n.innerHoles.length;$++){const v=n.innerHoles[$];if("radius"in v){const A=v.radius*2*i;A<t&&o.push({rule:"Piercing Blowout Rule",severity:"error",message:`Hole #${$+1} diameter (${A.toFixed(1)} mm) is less than sheet thickness (${t.toFixed(1)} mm). Fiber laser piercing will blow out or damage the lens nozzle.`,actualValue:A,thresholdValue:t,holeIndex:$})}else{const A=kn(v),E=Math.min(A.maxX-A.minX,A.maxY-A.minY)*i;E<t&&o.push({rule:"Piercing Blowout Rule",severity:"error",message:`Cutout / Slot #${$+1} minimum span (${E.toFixed(1)} mm) is less than sheet thickness (${t.toFixed(1)} mm). Fiber laser piercing will blow out.`,actualValue:E,thresholdValue:t,holeIndex:$})}}const s=t*1.5,r=n.boundingBox,m=(n.name.toLowerCase().includes("disc")||n.name.toLowerCase().includes("flange")||n.name.toLowerCase().includes("washer"))&&Math.abs(r.width-r.height)<.01,h=r.width/2,l={x:(r.minX+r.maxX)/2,y:(r.minY+r.maxY)/2};for(let $=0;$<n.innerHoles.length;$++){const v=n.innerHoles[$];let _;if("radius"in v){const A=v,E=A.center.x,x=A.center.y,p=A.radius;if(m){const g=Math.sqrt((E-l.x)**2+(x-l.y)**2);_=(h-(g+p))*i}else{const g=(E-p-r.minX)*i,c=(r.maxX-(E+p))*i,d=(x-p-r.minY)*i,N=(r.maxY-(x+p))*i;_=Math.min(g,c,d,N)}}else{const A=v,E=kn(A);if(m){const x=Jt(A);let p=0;for(const g of x){const c=Math.sqrt((g.p1.x-l.x)**2+(g.p1.y-l.y)**2);c>p&&(p=c)}_=(h-p)*i}else{const x=(E.minX-r.minX)*i,p=(r.maxX-E.maxX)*i,g=(E.minY-r.minY)*i,c=(r.maxY-E.maxY)*i;_=Math.min(x,p,g,c)}}_<=0?o.push({rule:"Edge Margin Distance Rule",severity:"error",message:`Hole #${$+1} extends outside the outer cutting contour. Cutout breaches the part perimeter.`,actualValue:_,thresholdValue:0,holeIndex:$}):_<s&&o.push({rule:"Edge Margin Distance Rule",severity:"warning",message:`Hole #${$+1} is too close to the outer edge (${_.toFixed(1)} mm vs safe margin ${s.toFixed(1)} mm). Laser heat may warp or melt the edge.`,actualValue:_,thresholdValue:s,holeIndex:$})}const u=t*1.5,b=u/i,y=n.innerHoles.map($=>"radius"in $?eo($):kn($)),f=n.innerHoles.length;for(let $=0;$<f;$++)for(let v=$+1;v<f;v++){const _=y[$],A=y[v];if(to(_,A)>b)continue;const x=n.innerHoles[$],p=n.innerHoles[v],g=$===0&&(n.name.toLowerCase().includes("disc")||n.name.toLowerCase().includes("flange")||n.name.toLowerCase().includes("washer")),c=g?"Inner Bore (Hole #1)":`Hole #${$+1}`,N=ao(x,p)*i;N<=.05?o.push({rule:"Cutout Overlap / Collision Rule",severity:"error",message:`Hole #${v+1} collides/overlaps with ${c}. Overlapping cutouts cause laser nozzle blowout, dross, and mechanical failure.`,actualValue:N,thresholdValue:0,holeIndex:v,relatedHoleIndex:g?void 0:$}):N<u&&o.push({rule:"Hole-to-Hole Bridge Rule",severity:"warning",message:`Hole #${v+1} is too close to ${c} (bridge is ${N.toFixed(1)} mm vs safe margin ${u.toFixed(1)} mm). Laser heat will warp or burn out the thin metal bridge.`,actualValue:N,thresholdValue:u,holeIndex:v,relatedHoleIndex:g?void 0:$})}const S=r.width*i,M=r.height*i;S>4e3||M>2e3?o.push({rule:"Bed Size Limit",severity:"error",message:`Part dimensions (${S.toFixed(0)} x ${M.toFixed(0)} mm) exceed standard sheet metal laser bed size (3000 x 1500 mm / 10 x 5 ft). Check your unit selection.`}):(S<5||M<5)&&o.push({rule:"Minimum Part Size",severity:"warning",message:`Part size (${S.toFixed(1)} x ${M.toFixed(1)} mm) is extremely small. Small parts may fall through laser bed slats into the slag tray.`});const T=o.some($=>$.severity==="error"),L=o.some($=>$.severity==="warning");return{isManufacturable:!T,hasWarnings:L,issues:o}}const Bt=[{id:"cypcut",name:"CypCut (FSCUT / Global Fiber Laser)",outerLayerName:"0",outerColor:7,innerLayerName:"1",innerColor:2,etchLayerName:"2",etchColor:4},{id:"trumpf",name:"Trumpf TruTops (Boost / Classic)",outerLayerName:"OUTER",outerColor:1,innerLayerName:"INNER",innerColor:3,etchLayerName:"MARK",etchColor:4},{id:"sigmanest",name:"SigmaNEST / ProNest",outerLayerName:"CUT_EXTERIOR",outerColor:1,innerLayerName:"CUT_INTERIOR",innerColor:2,etchLayerName:"SCRIBE",etchColor:5},{id:"bysoft",name:"Bystronic BySoft / ByVision",outerLayerName:"CUT_OUTER",outerColor:7,innerLayerName:"CUT_INNER",innerColor:3,etchLayerName:"ETCH",etchColor:4},{id:"generic",name:"Universal Standard CAM",outerLayerName:"0_CUT_OUTER",outerColor:7,innerLayerName:"1_CUT_INNER",innerColor:2,etchLayerName:"2_MARKING",etchColor:4}];function ro(n,t){const e=n.units==="inch"?1:4,i=[],a=(s,r)=>{i.push(s.toString()),i.push(r.toString())};a(0,"SECTION"),a(2,"HEADER"),a(9,"$ACADVER"),a(1,"AC1024"),a(9,"$INSUNITS"),a(70,e),a(9,"$EXTMIN"),a(10,n.boundingBox.minX.toFixed(4)),a(20,n.boundingBox.minY.toFixed(4)),a(30,"0.0"),a(9,"$EXTMAX"),a(10,n.boundingBox.maxX.toFixed(4)),a(20,n.boundingBox.maxY.toFixed(4)),a(30,"0.0"),a(0,"ENDSEC"),a(0,"SECTION"),a(2,"TABLES"),a(0,"TABLE"),a(2,"LAYER"),a(70,3),a(0,"LAYER"),a(2,t.outerLayerName),a(70,0),a(62,t.outerColor),a(6,"CONTINUOUS"),a(0,"LAYER"),a(2,t.innerLayerName),a(70,0),a(62,t.innerColor),a(6,"CONTINUOUS"),a(0,"LAYER"),a(2,t.etchLayerName),a(70,0),a(62,t.etchColor),a(6,"CONTINUOUS"),a(0,"ENDTAB"),a(0,"ENDSEC"),a(0,"SECTION"),a(2,"ENTITIES"),gi(n.outerContour,t.outerLayerName,t.outerColor,a);for(const s of n.innerHoles)if("radius"in s){const r=s;a(0,"CIRCLE"),a(8,t.innerLayerName),a(62,t.innerColor),a(10,r.center.x.toFixed(4)),a(20,r.center.y.toFixed(4)),a(30,"0.0"),a(40,r.radius.toFixed(4))}else gi(s,t.innerLayerName,t.innerColor,a);return a(0,"ENDSEC"),a(0,"EOF"),i.join(`\r
`)+`\r
`}function gi(n,t,o,e){if(n.segments.length===2&&n.segments[0].type==="arc"&&n.segments[1].type==="arc"&&n.segments[0].radius===n.segments[1].radius){const i=n.segments[0];e(0,"CIRCLE"),e(8,t),e(62,o),e(10,i.center.x.toFixed(4)),e(20,i.center.y.toFixed(4)),e(30,"0.0"),e(40,i.radius.toFixed(4));return}e(0,"LWPOLYLINE"),e(8,t),e(62,o),e(90,n.segments.length),e(70,n.isClosed?1:0);for(const i of n.segments)if(i.type==="line")e(10,i.start.x.toFixed(4)),e(20,i.start.y.toFixed(4)),e(42,"0.0");else if(i.type==="arc"){const a=i.center.x+i.radius*Math.cos(i.startAngle),s=i.center.y+i.radius*Math.sin(i.startAngle);let r=i.endAngle-i.startAngle;i.counterClockwise?r<0&&(r+=2*Math.PI):r>0&&(r-=2*Math.PI);const m=Math.tan(r/4);e(10,a.toFixed(4)),e(20,s.toFixed(4)),e(42,m.toFixed(6))}}const co=["defpoints","dimension","dim","text","title","border","hatch","notes","anno"];function Tt(n){const t=n.toLowerCase();return co.some(o=>t.includes(o))}function Bn(n,t){return Math.sqrt((n.x-t.x)**2+(n.y-t.y)**2)}function lo(n,t,o){const e=t.x-n.x,i=t.y-n.y,a=Math.sqrt(e*e+i*i);if(a<1e-6||Math.abs(o)<1e-6)return{type:"line",start:n,end:t};const s=a/2*((1+o*o)/(2*Math.abs(o))),r=(n.x+t.x)/2,m=(n.y+t.y)/2,h=-i/a,l=e/a,u=a/2*((1-o*o)/(2*o)),b=r+h*u,y=m+l*u;let f=Math.atan2(n.y-y,n.x-b),S=Math.atan2(t.y-y,t.x-b);return f<0&&(f+=2*Math.PI),S<0&&(S+=2*Math.PI),{type:"arc",center:{x:b,y},radius:s,startAngle:f,endAngle:S,counterClockwise:o>0}}function fi(n,t=8){const o=[];for(const e of n)if(e.type==="line")o.push({x:e.start.x,y:e.start.y});else if(e.type==="arc"){let i=e.endAngle-e.startAngle;e.counterClockwise&&i<0&&(i+=2*Math.PI),!e.counterClockwise&&i>0&&(i-=2*Math.PI);for(let a=0;a<t;a++){const s=a/t,r=e.startAngle+i*s;o.push({x:e.center.x+e.radius*Math.cos(r),y:e.center.y+e.radius*Math.sin(r)})}}return o}function yi(n,t){let o=!1;const e=t.length;for(let i=0,a=e-1;i<e;a=i++){const s=t[i].x,r=t[i].y,m=t[a].x,h=t[a].y;r>n.y!=h>n.y&&n.x<(m-s)*(n.y-r)/(h-r)+s&&(o=!o)}return o}function Ei(n){var A,E;const t=n.split(/\r?\n/);let o="mm",e=!1;const i=[],a=[],s=[],r=[];let m=!1,h=!1,l="",u=0;for(;u<t.length-1;){const x=parseInt(t[u].trim(),10),p=t[u+1].trim();if(u+=2,x===0&&p==="SECTION"){const g=parseInt((A=t[u])==null?void 0:A.trim(),10),c=(E=t[u+1])==null?void 0:E.trim();g===2&&c==="HEADER"&&(h=!0),g===2&&c==="ENTITIES"&&(m=!0)}else x===0&&p==="ENDSEC"&&(h=!1,m=!1);if(h){if(x===9)l=p;else if(l==="$INSUNITS"&&x===70){const g=parseInt(p,10);g===1?(o="inch",e=!0):g===4&&(o="mm",e=!0)}}if(m&&x===0){if(p==="LINE"){const g={x1:0,y1:0,x2:0,y2:0,layer:"0"};for(;u<t.length-1&&parseInt(t[u].trim(),10)!==0;){const c=parseInt(t[u].trim(),10),d=t[u+1].trim();u+=2,c===8?g.layer=d:c===10?g.x1=parseFloat(d):c===20?g.y1=parseFloat(d):c===11?g.x2=parseFloat(d):c===21&&(g.y2=parseFloat(d))}Tt(g.layer)||i.push(g)}else if(p==="CIRCLE"){const g={cx:0,cy:0,r:0,layer:"0"};for(;u<t.length-1&&parseInt(t[u].trim(),10)!==0;){const c=parseInt(t[u].trim(),10),d=t[u+1].trim();u+=2,c===8?g.layer=d:c===10?g.cx=parseFloat(d):c===20?g.cy=parseFloat(d):c===40&&(g.r=parseFloat(d))}Tt(g.layer)||a.push(g)}else if(p==="ARC"){const g={cx:0,cy:0,r:0,sa:0,ea:0,layer:"0"};for(;u<t.length-1&&parseInt(t[u].trim(),10)!==0;){const c=parseInt(t[u].trim(),10),d=t[u+1].trim();u+=2,c===8?g.layer=d:c===10?g.cx=parseFloat(d):c===20?g.cy=parseFloat(d):c===40?g.r=parseFloat(d):c===50?g.sa=parseFloat(d)*Math.PI/180:c===51&&(g.ea=parseFloat(d)*Math.PI/180)}Tt(g.layer)||s.push(g)}else if(p==="LWPOLYLINE"){const g={vertices:[],isClosed:!1,layer:"0"};let c=0,d=0,N=!1,H=!1;for(;u<t.length-1&&parseInt(t[u].trim(),10)!==0;){const D=parseInt(t[u].trim(),10),G=t[u+1].trim();if(u+=2,D===8)g.layer=G;else if(D===70)g.isClosed=(parseInt(G,10)&1)===1;else if(D===10)N&&H&&(g.vertices.push({x:c,y:d}),H=!1),c=parseFloat(G),N=!0;else if(D===20)d=parseFloat(G),H=!0;else if(D===42){const B=g.vertices[g.vertices.length-1];B&&(B.bulge=parseFloat(G))}}N&&H&&g.vertices.push({x:c,y:d}),!Tt(g.layer)&&g.vertices.length>=2&&r.push(g)}else if(p==="SPLINE"){const g=[];let c=!1,d="0",N=0,H=0,D=!1,G=!1;for(;u<t.length-1&&parseInt(t[u].trim(),10)!==0;){const B=parseInt(t[u].trim(),10),P=t[u+1].trim();u+=2,B===8?d=P:B===70?c=(parseInt(P,10)&1)===1:B===10||B===11?(D&&G&&(g.push({x:N,y:H}),G=!1),N=parseFloat(P),D=!0):(B===20||B===21)&&(H=parseFloat(P),G=!0)}if(D&&G&&g.push({x:N,y:H}),!Tt(d)&&g.length>=2){const B=g.map(P=>({x:P.x,y:P.y}));r.push({vertices:B,isClosed:c,layer:d})}}}}const b=[];for(const x of r){if(x.vertices.length<2)continue;const p=[],g=x.vertices.length,c=x.isClosed?g:g-1;for(let P=0;P<c;P++){const R=x.vertices[P],O=x.vertices[(P+1)%g];R.bulge&&Math.abs(R.bulge)>1e-5?p.push(lo(R,O,R.bulge)):p.push({type:"line",start:{x:R.x,y:R.y},end:{x:O.x,y:O.y}})}const d=fi(p);let N=1/0,H=1/0,D=-1/0,G=-1/0;for(const P of d)N=Math.min(N,P.x),D=Math.max(D,P.x),H=Math.min(H,P.y),G=Math.max(G,P.y);const B={minX:N,minY:H,maxX:D,maxY:G,width:Math.max(1,D-N),height:Math.max(1,G-H)};b.push({segments:p,polygon:d,bbox:B,bboxArea:B.width*B.height})}const y=[];for(const x of i)y.push({kind:"line",start:{x:x.x1,y:x.y1},end:{x:x.x2,y:x.y2},visited:!1});for(const x of s){const p={x:x.cx+x.r*Math.cos(x.sa),y:x.cy+x.r*Math.sin(x.sa)},g={x:x.cx+x.r*Math.cos(x.ea),y:x.cy+x.r*Math.sin(x.ea)};y.push({kind:"arc",start:p,end:g,center:{x:x.cx,y:x.cy},radius:x.r,startAngle:x.sa,endAngle:x.ea,counterClockwise:!0,visited:!1})}const f=.35;for(let x=0;x<y.length;x++){if(y[x].visited)continue;const p=[],g=y[x];g.visited=!0;const c={...g.start};let d={...g.end};g.kind==="line"?p.push({type:"line",start:g.start,end:g.end}):p.push({type:"arc",center:g.center,radius:g.radius,startAngle:g.startAngle,endAngle:g.endAngle,counterClockwise:g.counterClockwise});let N=!0;for(;N;){if(N=!1,Bn(d,c)<=f&&p.length>=2){const H=p[p.length-1];H.type==="line"&&(H.end={...c});break}for(let H=0;H<y.length;H++){if(y[H].visited)continue;const D=y[H];if(Bn(d,D.start)<=f){D.visited=!0,D.kind==="line"?p.push({type:"line",start:{...d},end:D.end}):p.push({type:"arc",center:D.center,radius:D.radius,startAngle:D.startAngle,endAngle:D.endAngle,counterClockwise:D.counterClockwise}),d={...D.end},N=!0;break}else if(Bn(d,D.end)<=f){D.visited=!0,D.kind==="line"?p.push({type:"line",start:{...d},end:D.start}):p.push({type:"arc",center:D.center,radius:D.radius,startAngle:D.endAngle,endAngle:D.startAngle,counterClockwise:!D.counterClockwise}),d={...D.start},N=!0;break}}}if(p.length>0){const H=fi(p);let D=1/0,G=1/0,B=-1/0,P=-1/0;for(const O of H)D=Math.min(D,O.x),B=Math.max(B,O.x),G=Math.min(G,O.y),P=Math.max(P,O.y);const R={minX:D,minY:G,maxX:B,maxY:P,width:Math.max(1,B-D),height:Math.max(1,P-G)};b.push({segments:p,polygon:H,bbox:R,bboxArea:R.width*R.height})}}const S=new Map;for(let x=0;x<b.length;x++){const p=b[x];let g=-1,c=1/0;for(let d=0;d<b.length;d++){if(x===d)continue;const N=b[d];if(N.bbox.minX<=p.bbox.minX+.1&&N.bbox.maxX>=p.bbox.maxX-.1&&N.bbox.minY<=p.bbox.minY+.1&&N.bbox.maxY>=p.bbox.maxY-.1&&N.bboxArea>p.bboxArea){const H=p.polygon[0]||{x:(p.bbox.minX+p.bbox.maxX)/2,y:(p.bbox.minY+p.bbox.maxY)/2};yi(H,N.polygon)&&N.bboxArea<c&&(c=N.bboxArea,g=d)}}g!==-1&&S.set(x,g)}const M=[],T=new Map;for(let x=0;x<b.length;x++)S.has(x)||(M.push(x),T.set(x,[]));for(let x=0;x<b.length;x++)if(S.has(x)){const p=S.get(x);T.has(p)&&T.get(p).push(b[x].segments)}const L=new Map,$=[];for(const x of M)L.set(x,[]);for(const x of a){const p={x:x.cx,y:x.cy};let g=-1,c=1/0;for(const d of M){const N=b[d];x.cx>=N.bbox.minX&&x.cx<=N.bbox.maxX&&x.cy>=N.bbox.minY&&x.cy<=N.bbox.maxY&&yi(p,N.polygon)&&N.bboxArea<c&&(c=N.bboxArea,g=d)}g!==-1?L.get(g).push({center:p,radius:x.r}):$.push({center:p,radius:x.r})}const v=[];for(let x=0;x<M.length;x++){const p=M[x],g=b[p],c=[],d=T.get(p)||[];for(const H of d)c.push({segments:H,isClosed:!0,isHole:!0});const N=L.get(p)||[];for(const H of N)c.push(H);v.push({name:M.length>1?`Sanitized Part #${x+1}`:"Sanitized CNC Drawing",units:o,outerContour:{segments:g.segments,isClosed:!0,isHole:!1},innerHoles:c,boundingBox:g.bbox})}if(v.length===0&&$.length>0){const x=[...$].sort((N,H)=>H.radius-N.radius),p=x[0],g=[{type:"arc",center:{...p.center},radius:p.radius,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:{...p.center},radius:p.radius,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],c=x.slice(1),d={minX:p.center.x-p.radius,minY:p.center.y-p.radius,maxX:p.center.x+p.radius,maxY:p.center.y+p.radius,width:p.radius*2,height:p.radius*2};v.push({name:"Sanitized CNC Disc",units:o,outerContour:{segments:g,isClosed:!0,isHole:!1},innerHoles:c,boundingBox:d})}if(v.length>1){v.sort((c,d)=>d.boundingBox.width*d.boundingBox.height-c.boundingBox.width*c.boundingBox.height);const x=v[0],p=v[1];x.boundingBox.width*x.boundingBox.height>3*(p.boundingBox.width*p.boundingBox.height)&&(x.boundingBox.width>=20||x.boundingBox.width>=500)&&p.boundingBox.minX>=x.boundingBox.minX&&p.boundingBox.maxX<=x.boundingBox.maxX&&p.boundingBox.minY>=x.boundingBox.minY&&p.boundingBox.maxY<=x.boundingBox.maxY&&v.shift()}const _=!e;if(!e&&v.length>0){const x=Math.max(...v.map(p=>Math.max(p.boundingBox.width,p.boundingBox.height)));x>0&&x<=48&&(o="inch")}return v.forEach(x=>{x.units=o,x.isUnitInferred=_}),v.length===0&&v.push({name:"Empty DXF Drawing",units:o,isUnitInferred:_,outerContour:{segments:[{type:"line",start:{x:0,y:0},end:{x:100,y:0}},{type:"line",start:{x:100,y:0},end:{x:100,y:100}},{type:"line",start:{x:100,y:100},end:{x:0,y:100}},{type:"line",start:{x:0,y:100},end:{x:0,y:0}}],isClosed:!0,isHole:!1},innerHoles:[],boundingBox:{minX:0,minY:0,maxX:100,maxY:100,width:100,height:100}}),v}function mo(n){const t=Ei(n);return t.sort((o,e)=>e.boundingBox.width*e.boundingBox.height-o.boundingBox.width*o.boundingBox.height),t[0]}const Et=[{id:"sheet_8x4",name:"8 × 4 ft (48 × 96 in / 2500 × 1250 mm) - Standard Industrial Plate",widthMm:1250,lengthMm:2500},{id:"sheet_10x5",name:"10 × 5 ft (3000 × 1500 mm) - Standard Laser Bed",widthMm:1500,lengthMm:3e3},{id:"sheet_20x5",name:"20 × 5 ft (6000 × 1500 mm) - Heavy Structural Plate",widthMm:1500,lengthMm:6e3},{id:"sheet_small",name:"4 × 4 ft (1250 × 1250 mm) - Offcut / Half Sheet",widthMm:1250,lengthMm:1250}],tn=[{id:"us_sheet_5x10",name:"5 × 10 ft (60 × 120 in) - Standard US Laser Bed",widthMm:1524,lengthMm:3048},{id:"us_sheet_4x8",name:"4 × 8 ft (48 × 96 in) - Standard US Sheet",widthMm:1219.2,lengthMm:2438.4},{id:"us_sheet_6x12",name:"6 × 12 ft (72 × 144 in) - Large Format Table",widthMm:1828.8,lengthMm:3657.6},{id:"us_sheet_4x4",name:"4 × 4 ft (48 × 48 in) - Half Sheet / Drop",widthMm:1219.2,lengthMm:1219.2}];class uo{constructor(t,o,e,i,a){xt(this,"sheetW");xt(this,"sheetL");xt(this,"edgeMargin");xt(this,"spacing");xt(this,"allowRotation");this.sheetW=t,this.sheetL=o,this.edgeMargin=e,this.spacing=i,this.allowRotation=a}initSheetFreeRects(){const t=Math.max(0,this.sheetW-2*this.edgeMargin),o=Math.max(0,this.sheetL-2*this.edgeMargin);return[{x:this.edgeMargin,y:this.edgeMargin,width:t,height:o}]}scorePlacement(t,o,e){if(o>t.width||e>t.height)return{score1:1/0,score2:1/0};const i=t.width-o,a=t.height-e,s=Math.min(i,a),r=Math.max(i,a);return{score1:s,score2:r}}splitFreeRect(t,o,e,i,a){if(o>=t.x+t.width||o+i<=t.x||e>=t.y+t.height||e+a<=t.y)return[t];const s=[];return e>t.y&&e<t.y+t.height&&s.push({x:t.x,y:t.y,width:t.width,height:e-t.y}),e+a<t.y+t.height&&e+a>t.y&&s.push({x:t.x,y:e+a,width:t.width,height:t.y+t.height-(e+a)}),o>t.x&&o<t.x+t.width&&s.push({x:t.x,y:t.y,width:o-t.x,height:t.height}),o+i<t.x+t.width&&o+i>t.x&&s.push({x:o+i,y:t.y,width:t.x+t.width-(o+i),height:t.height}),s}pruneFreeRects(t){const o=t.filter(i=>i.width>0&&i.height>0),e=[];for(let i=0;i<o.length;i++){let a=!1;const s=o[i];for(let r=0;r<o.length;r++){if(i===r)continue;const m=o[r];if(s.x>=m.x&&s.y>=m.y&&s.x+s.width<=m.x+m.width&&s.y+s.height<=m.y+m.height){a=!0;break}}a||e.push(s)}return e}pack(t){const o=[];let e=0,i=this.initSheetFreeRects();for(let a=0;a<t.length;a++){const s=t[a];let r=!1;for(;!r;){let m={score1:1/0,score2:1/0},h=-1,l=!1,u=s.w,b=s.h;for(let y=0;y<i.length;y++){const f=i[y],S=this.scorePlacement(f,s.w,s.h);if((S.score1<m.score1||S.score1===m.score1&&S.score2<m.score2)&&(m=S,h=y,l=!1,u=s.w,b=s.h),this.allowRotation&&Math.abs(s.w-s.h)>.5){const M=this.scorePlacement(f,s.h,s.w);(M.score1<m.score1||M.score1===m.score1&&M.score2<m.score2)&&(m=M,h=y,l=!0,u=s.h,b=s.w)}}if(h!==-1){const y=i[h],f=y.x,S=y.y;o.push({id:s.instanceId,partIndex:a,sheetIndex:e,x:f,y:S,width:u,height:b,rotated:l,partName:s.name,partId:s.instanceId,color:s.color});const M=u+this.spacing,T=b+this.spacing;let L=[];for(const $ of i){const v=this.splitFreeRect($,f,S,M,T);L.push(...v)}i=this.pruneFreeRects(L),r=!0}else{const y=Math.max(0,this.sheetW-2*this.edgeMargin),f=Math.max(0,this.sheetL-2*this.edgeMargin);i.length===1&&i[0].width===y&&i[0].height===f||e>=50?(o.push({id:s.instanceId,partIndex:a,sheetIndex:e,x:0,y:0,width:s.w,height:s.h,rotated:!1,partName:s.name,partId:s.instanceId,color:s.color}),r=!0):(e++,i=this.initSheetFreeRects())}}}return o}}function Hn(n,t=Et[0],o=6,e=7.85,i={}){var N;const a=i.edgeMarginMm!==void 0?i.edgeMarginMm:10,s=i.partSpacingMm!==void 0?i.partSpacingMm:5,r=i.allowRotation!==!1,m=t.widthMm,h=t.lengthMm,l=[];let u=0,b=0;for(let H=0;H<n.length;H++){const D=n[H],G=Math.max(1,Math.floor(D.quantity));u+=G;const P=((N=D.geometry)==null?void 0:N.units)==="inch"?25.4:1,R=Math.max(1,D.boundingBox.width*P),O=Math.max(1,D.boundingBox.height*P),K=R*O;for(let j=0;j<G;j++)l.push({instanceId:`${D.id}_${j}`,itemIndex:H,name:D.name,w:R,h:O,color:D.color}),b+=K}l.sort((H,D)=>D.w*D.h-H.w*H.h);const f=new uo(m,h,a,s,r).pack(l),S=f.reduce((H,D)=>Math.max(H,D.sheetIndex),0),M=f.length>0?S+1:1,L=m*h*M,$=Math.min(100,Math.round(b/L*1e3)/10),v=b*o/1e3,_=Math.round(v*e/1e3*100)/100,A=L*o/1e3,E=Math.round(A*e/1e3*100)/100,x=Math.max(0,Math.round((E-_)*100)/100),p=f.filter(H=>H.sheetIndex===S);let g=0;for(const H of p)g=Math.max(g,H.y+H.height);const c=Math.max(0,Math.round(h-(g+s))),d=m;return{sheetSize:t,partsRequested:u,partsPlaced:f.length,sheetsRequired:M,sheetUtilizationPercent:$,totalNetPartMassKg:_,totalLoadedSheetMassKg:E,totalSkeletonScrapMassKg:x,remnantWidthMm:d,remnantLengthMm:c,packedParts:f}}function ho(n,t,o=Et[0],e=6,i=7.85,a={},s="mm"){const r=s==="inch",m=r?25.4:1,l={id:"part_0",name:"Part",boundingBox:r?{minX:n.minX*m,minY:n.minY*m,maxX:n.maxX*m,maxY:n.maxY*m,width:n.width*m,height:n.height*m}:n,quantity:t};return Hn([l],o,e,i,a)}const _n=[{id:"steel_a36",name:"Mild Steel (A36 / S235)",densityGPerCm3:7.85,gauges:[{gaugeName:'16 Gauge (1.5 mm / 0.060")',thicknessMm:1.5,thicknessInches:.0598,pricePerSqInch:.018,pricePerLinearInchCut:.035,pricePerPierce:.15,feedRate4kWIpm:450,feedRate6kWIpm:650,pierceDelay4kWSec:.03,pierceDelay6kWSec:.02,cuttingSpeedIpm:450,feedRateMmMin:11430,pierceDelaySec:.03},{gaugeName:'11 Gauge (3.0 mm / 0.120")',thicknessMm:3,thicknessInches:.1196,pricePerSqInch:.035,pricePerLinearInchCut:.055,pricePerPierce:.25,feedRate4kWIpm:280,feedRate6kWIpm:420,pierceDelay4kWSec:.08,pierceDelay6kWSec:.05,cuttingSpeedIpm:280,feedRateMmMin:7112,pierceDelaySec:.08},{gaugeName:'3/16" Plate (4.76 mm / 0.188")',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.058,pricePerLinearInchCut:.085,pricePerPierce:.4,feedRate4kWIpm:200,feedRate6kWIpm:300,pierceDelay4kWSec:.15,pierceDelay6kWSec:.1,cuttingSpeedIpm:200,feedRateMmMin:5080,pierceDelaySec:.15},{gaugeName:'1/4" Plate (6.35 mm / 0.250")',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.078,pricePerLinearInchCut:.12,pricePerPierce:.6,feedRate4kWIpm:150,feedRate6kWIpm:240,pierceDelay4kWSec:.25,pierceDelay6kWSec:.15,cuttingSpeedIpm:150,feedRateMmMin:3810,pierceDelaySec:.25},{gaugeName:'3/8" Plate (9.52 mm / 0.375")',thicknessMm:9.52,thicknessInches:.375,pricePerSqInch:.115,pricePerLinearInchCut:.185,pricePerPierce:.95,feedRate4kWIpm:75,feedRate6kWIpm:130,pierceDelay4kWSec:.6,pierceDelay6kWSec:.4,cuttingSpeedIpm:75,feedRateMmMin:1905,pierceDelaySec:.6},{gaugeName:'1/2" Plate (12.7 mm / 0.500")',thicknessMm:12.7,thicknessInches:.5,pricePerSqInch:.155,pricePerLinearInchCut:.26,pricePerPierce:1.4,feedRate4kWIpm:45,feedRate6kWIpm:75,pierceDelay4kWSec:1.2,pierceDelay6kWSec:.75,cuttingSpeedIpm:45,feedRateMmMin:1143,pierceDelaySec:1.2}]},{id:"stainless_304",name:"Stainless Steel (304 2B)",densityGPerCm3:8,gauges:[{gaugeName:'16 Gauge (1.5 mm / 0.060")',thicknessMm:1.5,thicknessInches:.0598,pricePerSqInch:.052,pricePerLinearInchCut:.065,pricePerPierce:.3,feedRate4kWIpm:550,feedRate6kWIpm:800,pierceDelay4kWSec:.02,pierceDelay6kWSec:.015,cuttingSpeedIpm:550,feedRateMmMin:13970,pierceDelaySec:.02},{gaugeName:'11 Gauge (3.0 mm / 0.120")',thicknessMm:3,thicknessInches:.1196,pricePerSqInch:.098,pricePerLinearInchCut:.105,pricePerPierce:.5,feedRate4kWIpm:260,feedRate6kWIpm:420,pierceDelay4kWSec:.06,pierceDelay6kWSec:.04,cuttingSpeedIpm:260,feedRateMmMin:6604,pierceDelaySec:.06},{gaugeName:'3/16" Plate (4.76 mm / 0.188")',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.165,pricePerLinearInchCut:.165,pricePerPierce:.85,feedRate4kWIpm:140,feedRate6kWIpm:240,pierceDelay4kWSec:.18,pierceDelay6kWSec:.1,cuttingSpeedIpm:140,feedRateMmMin:3556,pierceDelaySec:.18},{gaugeName:'1/4" Plate (6.35 mm / 0.250")',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.22,pricePerLinearInchCut:.24,pricePerPierce:1.25,feedRate4kWIpm:90,feedRate6kWIpm:160,pierceDelay4kWSec:.35,pierceDelay6kWSec:.2,cuttingSpeedIpm:90,feedRateMmMin:2286,pierceDelaySec:.35}]},{id:"aluminum_6061",name:"Aluminum (6061-T6)",densityGPerCm3:2.7,gauges:[{gaugeName:'1/16" Sheet (1.58 mm / 0.063")',thicknessMm:1.58,thicknessInches:.0625,pricePerSqInch:.038,pricePerLinearInchCut:.045,pricePerPierce:.2,feedRate4kWIpm:600,feedRate6kWIpm:850,pierceDelay4kWSec:.02,pierceDelay6kWSec:.015,cuttingSpeedIpm:600,feedRateMmMin:15240,pierceDelaySec:.02},{gaugeName:'1/8" Sheet (3.18 mm / 0.125")',thicknessMm:3.18,thicknessInches:.125,pricePerSqInch:.072,pricePerLinearInchCut:.075,pricePerPierce:.35,feedRate4kWIpm:280,feedRate6kWIpm:440,pierceDelay4kWSec:.05,pierceDelay6kWSec:.035,cuttingSpeedIpm:280,feedRateMmMin:7112,pierceDelaySec:.05},{gaugeName:'3/16" Plate (4.76 mm / 0.188")',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.11,pricePerLinearInchCut:.115,pricePerPierce:.55,feedRate4kWIpm:160,feedRate6kWIpm:260,pierceDelay4kWSec:.12,pierceDelay6kWSec:.08,cuttingSpeedIpm:160,feedRateMmMin:4064,pierceDelaySec:.12},{gaugeName:'1/4" Plate (6.35 mm / 0.250")',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.145,pricePerLinearInchCut:.16,pricePerPierce:.8,feedRate4kWIpm:100,feedRate6kWIpm:170,pierceDelay4kWSec:.25,pierceDelay6kWSec:.16,cuttingSpeedIpm:100,feedRateMmMin:2540,pierceDelaySec:.25}]},{id:"aluminum_5052",name:"Aluminum (5052-H32 Forming)",densityGPerCm3:2.68,gauges:[{gaugeName:'0.040" Sheet (1.0 mm)',thicknessMm:1.02,thicknessInches:.04,pricePerSqInch:.024,pricePerLinearInchCut:.035,pricePerPierce:.15,feedRate4kWIpm:750,feedRate6kWIpm:1e3,pierceDelay4kWSec:.015,pierceDelay6kWSec:.01,cuttingSpeedIpm:750,feedRateMmMin:19050,pierceDelaySec:.015},{gaugeName:'1/16" Sheet (1.6 mm / 0.063")',thicknessMm:1.6,thicknessInches:.063,pricePerSqInch:.036,pricePerLinearInchCut:.042,pricePerPierce:.18,feedRate4kWIpm:620,feedRate6kWIpm:880,pierceDelay4kWSec:.02,pierceDelay6kWSec:.015,cuttingSpeedIpm:620,feedRateMmMin:15748,pierceDelaySec:.02},{gaugeName:'0.090" Sheet (2.3 mm)',thicknessMm:2.29,thicknessInches:.09,pricePerSqInch:.052,pricePerLinearInchCut:.058,pricePerPierce:.25,feedRate4kWIpm:420,feedRate6kWIpm:600,pierceDelay4kWSec:.035,pierceDelay6kWSec:.025,cuttingSpeedIpm:420,feedRateMmMin:10668,pierceDelaySec:.035},{gaugeName:'1/8" Sheet (3.18 mm / 0.125")',thicknessMm:3.18,thicknessInches:.125,pricePerSqInch:.068,pricePerLinearInchCut:.072,pricePerPierce:.32,feedRate4kWIpm:300,feedRate6kWIpm:480,pierceDelay4kWSec:.05,pierceDelay6kWSec:.035,cuttingSpeedIpm:300,feedRateMmMin:7620,pierceDelaySec:.05},{gaugeName:'3/16" Plate (4.76 mm / 0.188")',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.105,pricePerLinearInchCut:.11,pricePerPierce:.5,feedRate4kWIpm:180,feedRate6kWIpm:290,pierceDelay4kWSec:.1,pierceDelay6kWSec:.07,cuttingSpeedIpm:180,feedRateMmMin:4572,pierceDelaySec:.1},{gaugeName:'1/4" Plate (6.35 mm / 0.250")',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.138,pricePerLinearInchCut:.155,pricePerPierce:.75,feedRate4kWIpm:110,feedRate6kWIpm:190,pierceDelay4kWSec:.22,pierceDelay6kWSec:.14,cuttingSpeedIpm:110,feedRateMmMin:2794,pierceDelaySec:.22}]},{id:"stainless_316",name:"Stainless Steel (316 Marine/Sanitary)",densityGPerCm3:8,gauges:[{gaugeName:'16 Gauge (1.5 mm / 0.060")',thicknessMm:1.5,thicknessInches:.0598,pricePerSqInch:.062,pricePerLinearInchCut:.072,pricePerPierce:.35,feedRate4kWIpm:520,feedRate6kWIpm:760,pierceDelay4kWSec:.02,pierceDelay6kWSec:.015,cuttingSpeedIpm:520,feedRateMmMin:13208,pierceDelaySec:.02},{gaugeName:'11 Gauge (3.0 mm / 0.120")',thicknessMm:3,thicknessInches:.1196,pricePerSqInch:.118,pricePerLinearInchCut:.12,pricePerPierce:.6,feedRate4kWIpm:240,feedRate6kWIpm:390,pierceDelay4kWSec:.07,pierceDelay6kWSec:.045,cuttingSpeedIpm:240,feedRateMmMin:6096,pierceDelaySec:.07},{gaugeName:'3/16" Plate (4.76 mm / 0.188")',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.195,pricePerLinearInchCut:.19,pricePerPierce:.95,feedRate4kWIpm:130,feedRate6kWIpm:220,pierceDelay4kWSec:.2,pierceDelay6kWSec:.11,cuttingSpeedIpm:130,feedRateMmMin:3302,pierceDelaySec:.2},{gaugeName:'1/4" Plate (6.35 mm / 0.250")',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.26,pricePerLinearInchCut:.28,pricePerPierce:1.45,feedRate4kWIpm:85,feedRate6kWIpm:150,pierceDelay4kWSec:.38,pierceDelay6kWSec:.22,cuttingSpeedIpm:85,feedRateMmMin:2159,pierceDelaySec:.38},{gaugeName:'3/8" Plate (9.52 mm / 0.375")',thicknessMm:9.52,thicknessInches:.375,pricePerSqInch:.38,pricePerLinearInchCut:.42,pricePerPierce:2.1,feedRate4kWIpm:45,feedRate6kWIpm:85,pierceDelay4kWSec:.8,pierceDelay6kWSec:.45,cuttingSpeedIpm:45,feedRateMmMin:1143,pierceDelaySec:.8}]}],Ti=[{id:"is2062_ms",name:"IS 2062 E250 Mild Steel (MS)",densityGPerCm3:7.85,gauges:[{gaugeName:"1.6 mm Sheet (16G)",thicknessMm:1.6,thicknessInches:.063,pricePerSqInch:.02,pricePerLinearInchCut:.035,pricePerPierce:.15,pricePerKg:74,pricePerMeterCut:9,pricePerSqFtJali:55},{gaugeName:"2.0 mm Sheet (14G)",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.025,pricePerLinearInchCut:.04,pricePerPierce:.2,pricePerKg:74,pricePerMeterCut:12,pricePerSqFtJali:65},{gaugeName:"3.0 mm Sheet (10G)",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.035,pricePerLinearInchCut:.05,pricePerPierce:.25,pricePerKg:75,pricePerMeterCut:15,pricePerSqFtJali:95},{gaugeName:"4.0 mm Plate",thicknessMm:4,thicknessInches:.1575,pricePerSqInch:.048,pricePerLinearInchCut:.07,pricePerPierce:.35,pricePerKg:75,pricePerMeterCut:22,pricePerSqFtJali:130},{gaugeName:"6.0 mm Plate",thicknessMm:6,thicknessInches:.2362,pricePerSqInch:.072,pricePerLinearInchCut:.11,pricePerPierce:.55,pricePerKg:76,pricePerMeterCut:35},{gaugeName:"8.0 mm Plate",thicknessMm:8,thicknessInches:.315,pricePerSqInch:.098,pricePerLinearInchCut:.16,pricePerPierce:.8,pricePerKg:78,pricePerMeterCut:52},{gaugeName:"10.0 mm Plate",thicknessMm:10,thicknessInches:.3937,pricePerSqInch:.125,pricePerLinearInchCut:.22,pricePerPierce:1.1,pricePerKg:78,pricePerMeterCut:68},{gaugeName:"12.0 mm Plate",thicknessMm:12,thicknessInches:.4724,pricePerSqInch:.15,pricePerLinearInchCut:.28,pricePerPierce:1.4,pricePerKg:80,pricePerMeterCut:88},{gaugeName:"16.0 mm Plate",thicknessMm:16,thicknessInches:.6299,pricePerSqInch:.21,pricePerLinearInchCut:.38,pricePerPierce:2.2,pricePerKg:82,pricePerMeterCut:135},{gaugeName:"20.0 mm Plate",thicknessMm:20,thicknessInches:.7874,pricePerSqInch:.26,pricePerLinearInchCut:.48,pricePerPierce:3,pricePerKg:85,pricePerMeterCut:180}]},{id:"ss304_indian",name:"SS 304 (Stainless Steel - N2 / Air Cut)",densityGPerCm3:8,gauges:[{gaugeName:"1.2 mm Sheet",thicknessMm:1.2,thicknessInches:.0472,pricePerSqInch:.045,pricePerLinearInchCut:.06,pricePerPierce:.3,pricePerKg:230,pricePerMeterCut:16,pricePerSqFtJali:110},{gaugeName:"1.5 mm Sheet",thicknessMm:1.5,thicknessInches:.0591,pricePerSqInch:.055,pricePerLinearInchCut:.07,pricePerPierce:.35,pricePerKg:235,pricePerMeterCut:22,pricePerSqFtJali:135},{gaugeName:"2.0 mm Sheet",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.072,pricePerLinearInchCut:.09,pricePerPierce:.45,pricePerKg:235,pricePerMeterCut:30,pricePerSqFtJali:175},{gaugeName:"3.0 mm Sheet",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.11,pricePerLinearInchCut:.14,pricePerPierce:.65,pricePerKg:240,pricePerMeterCut:45,pricePerSqFtJali:240},{gaugeName:"4.0 mm Plate",thicknessMm:4,thicknessInches:.1575,pricePerSqInch:.15,pricePerLinearInchCut:.19,pricePerPierce:.9,pricePerKg:245,pricePerMeterCut:65},{gaugeName:"6.0 mm Plate",thicknessMm:6,thicknessInches:.2362,pricePerSqInch:.22,pricePerLinearInchCut:.28,pricePerPierce:1.4,pricePerKg:250,pricePerMeterCut:105}]},{id:"aluminum_indian",name:"Aluminium 6061 (Air Cut)",densityGPerCm3:2.7,gauges:[{gaugeName:"2.0 mm Sheet",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.045,pricePerLinearInchCut:.06,pricePerPierce:.3,pricePerKg:260,pricePerMeterCut:20},{gaugeName:"3.0 mm Sheet",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.065,pricePerLinearInchCut:.08,pricePerPierce:.4,pricePerKg:260,pricePerMeterCut:28},{gaugeName:"5.0 mm Plate",thicknessMm:5,thicknessInches:.1969,pricePerSqInch:.11,pricePerLinearInchCut:.13,pricePerPierce:.65,pricePerKg:270,pricePerMeterCut:55}]}],Li={bendingBendsCount:0,bendingRatePerBend:15,deburringEnabled:!1,deburringRatePerKg:8,tappingHolesCount:0,tappingRatePerHole:18,surfaceFinish:"none",primerRatePerSqFt:20,powderCoatingRatePerSqFt:45,galvanizingRatePerKg:42},nn={shopName:"Shree Balaji Laser Tech (Bhosari, Pune)",currency:"INR",pricingMode:"india_metric",indianQuotingMode:"job_work",assistGas:"air",sheetLoadingFee:250,gstPercent:18,isInterstateSale:!1,minimumOrderFee:500,leadTimeDays:2,rushMultiplier:1.25,selectedCAMProfileId:"cypcut",shopGstin:"27AABCS1429B1Z8",shopAddress:"Plot 42, J-Block, MIDC Bhosari, Pune, MH 411026",shopPhone:"+91 98220 12345",upiId:"balajilaser@upi",quantityTiers:[{minQty:1,discountPercent:0},{minQty:10,discountPercent:8},{minQty:25,discountPercent:15},{minQty:50,discountPercent:22},{minQty:100,discountPercent:30}]},Ot={shopName:"Midwest Precision CNC & Laser",currency:"USD",pricingMode:"global_imperial",indianQuotingMode:"with_material",assistGas:"oxygen",sheetLoadingFee:20,gstPercent:7,isInterstateSale:!1,minimumOrderFee:75,leadTimeDays:3,rushMultiplier:1.35,selectedCAMProfileId:"trumpf",shopAddress:"1420 Industrial Pkwy, Cleveland, OH 44135",shopPhone:"(216) 555-0198",shopEmail:"quotes@midwestprecision.com",rfqWebhookUrl:"",setupFeePerJob:25,laserPowerKw:4,hourlyLaserRateUsd:185,naicsCode:"NAICS 332813 (Laser Cutting & Fabrication)",einOrTaxId:"34-8910245",salesTaxExempt:!1,paymentTerms:"Net 30, Credit Card, ACH",quantityTiers:[{minQty:1,discountPercent:0},{minQty:5,discountPercent:10},{minQty:10,discountPercent:18},{minQty:25,discountPercent:28},{minQty:50,discountPercent:38}]};function po(n,t={}){const o={...Li,...t},e=(o.bendingBendsCount||0)*(o.bendingRatePerBend||15),i=o.deburringEnabled?n.theoreticalWeightKg*(o.deburringRatePerKg||8):0,a=(o.tappingHolesCount||0)*(o.tappingRatePerHole||18),s=Math.max(.1,n.netAreaSqMm/(304.8*304.8));let r=0;o.surfaceFinish==="primer"?r=s*(o.primerRatePerSqFt||20):o.surfaceFinish==="powder_coating"?r=s*(o.powderCoatingRatePerSqFt||45):o.surfaceFinish==="galvanizing"&&(r=n.theoreticalWeightKg*(o.galvanizingRatePerKg||42));const m=e+i+a+r;return{bendingCost:Math.round(e*100)/100,deburringCost:Math.round(i*100)/100,tappingCost:Math.round(a*100)/100,surfaceFinishCost:Math.round(r*100)/100,totalSecondaryCost:Math.round(m*100)/100}}function Xe(n,t,o,e=Ot,i={}){const a=Math.max(1,Math.floor(o));let s=0,r=0,m=0,h=0,l="HSN 7326 (Articles of Iron or Steel)";const u=e.indianQuotingMode||"with_material";let b=1;if(e.assistGas==="nitrogen"?b=2:e.assistGas==="oxygen"?b=1.15:b=1,e.pricingMode==="india_metric")if(u==="job_work"){s=0;const j=n.totalCutLengthMm/1e3,ce=t.pricePerMeterCut||20;r=j*ce*b,m=n.pierceCount*(t.pricePerPierce>1?t.pricePerPierce:1.5),h=(e.sheetLoadingFee||250)/Math.max(1,a),l="SAC 9988 (Job Work / Manufacturing Services)"}else if(u==="sqft_jali"){const j=Math.max(.1,n.boundingBoxWidthMm/304.8*(n.boundingBoxHeightMm/304.8)),ce=t.pricePerSqFtJali||(t.pricePerKg?t.pricePerKg*1.15:65);s=j*ce,r=0,m=0,h=0,l="HSN 7326 (Decorative Laser Cut Panels)"}else{s=n.theoreticalWeightKg*1.12*(t.pricePerKg||75);const ce=n.totalCutLengthMm/1e3,ye=t.pricePerMeterCut||20;r=ce*ye*b,m=n.pierceCount*(t.pricePerPierce>1?t.pricePerPierce:1.5),h=0,l="HSN 7326 (Fabricated Steel Articles)"}else{s=n.boundingBoxWidthInches*n.boundingBoxHeightInches*1.15*t.pricePerSqInch;const ce=e.laserPowerKw||4,ye=ce===6?t.feedRate6kWIpm||t.feedRate4kWIpm||t.cuttingSpeedIpm||0:t.feedRate4kWIpm||t.cuttingSpeedIpm||0,oe=ce===6?t.pierceDelay6kWSec||t.pierceDelay4kWSec||t.pierceDelaySec||.15:t.pierceDelay4kWSec||t.pierceDelaySec||.25;if(e.hourlyLaserRateUsd&&e.hourlyLaserRateUsd>0&&ye>0){const ee=n.totalCutLengthInches/ye,le=n.pierceCount*oe/60;r=(ee+le)/60*e.hourlyLaserRateUsd,m=0}else r=n.totalCutLengthInches*t.pricePerLinearInchCut,m=n.pierceCount*t.pricePerPierce;h=0}const y=po(n,i),f=y.totalSecondaryCost,S=s+r+m+h+f;let M=0;for(const j of e.quantityTiers||[])a>=j.minQty&&(M=j.discountPercent);const T=S*(1-M/100),L=T*a,$=L<e.minimumOrderFee,v=Math.max(e.minimumOrderFee,L),_=v/a,A=e.currency==="USD",E=e.naicsCode||"NAICS 332813 (Laser Cutting & Fabrication)",x=e.paymentTerms||"Net 30, Credit Card, ACH",p=e.laserPowerKw||4,g=p===6?t.feedRate6kWIpm||t.feedRate4kWIpm||150:t.feedRate4kWIpm||150,c=p===6?t.pierceDelay6kWSec||t.pierceDelay4kWSec||.15:t.pierceDelay4kWSec||.25,d=g>0?n.totalCutLengthInches/g*60:0,N=n.pierceCount*c,H=d+N,D=A&&!!e.salesTaxExempt,G=D?0:e.gstPercent>0?e.gstPercent:0,B=G>0?v*(G/100):0;let P=0,R=0,O=0;e.currency==="INR"&&B>0&&(e.isInterstateSale?O=B:(P=B/2,R=B/2));const K=v+B;return{currency:e.currency,quotingMode:u,quantity:a,unitMaterialCost:Math.round(s*100)/100,unitCutCost:Math.round(r*100)/100,unitPierceCost:Math.round(m*100)/100,unitHandlingCost:Math.round(h*100)/100,unitSecondaryCost:Math.round(f*100)/100,secondaryBreakdown:y,unitSubtotal:Math.round(S*100)/100,discountPercent:M,discountedUnitPrice:Math.round(T*100)/100,orderTotalBeforeMin:Math.round(L*100)/100,minimumOrderFloorApplied:$,finalOrderTotal:Math.round(v*100)/100,finalUnitPrice:Math.round(_*100)/100,gstAmount:Math.round(B*100)/100,cgstAmount:Math.round(P*100)/100,sgstAmount:Math.round(R*100)/100,igstAmount:Math.round(O*100)/100,finalTotalWithGst:Math.round(K*100)/100,taxAmount:Math.round(B*100)/100,hsnSacCode:A?E:l,naicsCode:E,paymentTerms:x,salesTaxExempt:D,beamOnCutTimeSec:Math.round(d*10)/10,pierceTimeSec:Math.round(N*100)/100,totalCycleTimeSec:Math.round(H*10)/10,feedRateIpm:g,pierceDelaySec:c}}function xi(n,t,o,e,i,a,s=nn){const m=i.currency==="INR"?"₹":"$",h=i.quotingMode;let l="WITH MATERIAL (SUPPLY & CUT)";h==="job_work"&&(l="JOB WORK (LABOUR ONLY)"),h==="sqft_jali"&&(l="ARCHITECTURAL JALI (SQ.FT BASIS)");const u=(t.boundingBoxWidthMm/304.8*(t.boundingBoxHeightMm/304.8)).toFixed(2),b=s.assistGas==="nitrogen"?"N2 (Nitrogen)":s.assistGas==="oxygen"?"O2 (Oxygen)":"High-Pressure Air";return`*QUOTATION — ${a.toUpperCase()}*
Ref: CNC-Q${Math.floor(1e3+Math.random()*9e3)} | Mode: *${l}*

*Part:* ${n} (${t.boundingBoxWidthMm.toFixed(0)} × ${t.boundingBoxHeightMm.toFixed(0)} mm / ${u} sq.ft)
*Material:* ${o} (${e.gaugeName})
*Assist Gas:* ${b}
*Quantity:* ${i.quantity} pcs

----------------------------------
${h==="job_work"?`• Raw Material: *Supplied by Customer*
• Cut Meters: ${(t.totalCutLengthMm/1e3).toFixed(2)} m (${t.pierceCount*i.quantity} pierces)
• Cutting & Piercing: ${m}${((i.unitCutCost+i.unitPierceCost)*i.quantity).toFixed(2)}
• Plate Loading Fee: ${m}${(i.unitHandlingCost*i.quantity).toFixed(2)}`:h==="sqft_jali"?`• Total Panel Area: ${(parseFloat(u)*i.quantity).toFixed(2)} sq.ft
• Fabrication Rate: ${m}${(i.unitMaterialCost*i.quantity).toFixed(2)}`:`• Est. Net Weight: ${(t.theoreticalWeightKg*i.quantity).toFixed(2)} kg
• Cut Length: ${(t.totalCutLengthMm/1e3).toFixed(2)} meters (${t.pierceCount*i.quantity} pierces)
• Material Cost: ${m}${(i.unitMaterialCost*i.quantity).toFixed(2)}
• Laser Cutting: ${m}${((i.unitCutCost+i.unitPierceCost)*i.quantity).toFixed(2)}`}
${i.unitSecondaryCost>0?`• Secondary Operations: ${m}${(i.unitSecondaryCost*i.quantity).toFixed(2)}
`:""}${i.discountPercent>0?`• Volume Discount: -${i.discountPercent}%
`:""}----------------------------------
*Subtotal:* ${m}${i.finalOrderTotal.toFixed(2)}
${i.gstAmount>0?s.isInterstateSale?`*IGST (18%):* ${m}${i.igstAmount.toFixed(2)}
*FINAL TOTAL (INC. GST):* ${m}${i.finalTotalWithGst.toFixed(2)}`:`*CGST (9%):* ${m}${i.cgstAmount.toFixed(2)}
*SGST (9%):* ${m}${i.sgstAmount.toFixed(2)}
*FINAL TOTAL (INC. GST):* ${m}${i.finalTotalWithGst.toFixed(2)}`:`*FINAL TOTAL:* ${m}${i.finalOrderTotal.toFixed(2)}`}
----------------------------------
• ${i.hsnSacCode}
• CypCut Ready DXF pre-generated for production.
• Turnaround: 24 to 48 Hours.
• Advance: 50% with PO to confirm. UPI: ${s.upiId||"shop@upi"}`}function $t(n,t=nn,o=Et[0],e=!0){const i=t.currency==="INR";let a=0,s=0,r=0,m=0,h=0,l=0,u=0,b=0,y=0;const f=[];for(const c of n){const d=c.quantity;a+=d,s+=c.metrics.totalCutLengthMm/1e3*d,r+=c.metrics.pierceCount*d,m+=c.metrics.theoreticalWeightKg*d,h+=c.unitQuote.unitMaterialCost*d,l+=c.unitQuote.unitCutCost*d,u+=c.unitQuote.unitPierceCost*d,b+=c.unitQuote.unitHandlingCost*d,y+=c.unitQuote.unitSecondaryCost*d,f.push({id:c.id,name:c.partGeometry.name,boundingBox:c.partGeometry.boundingBox,quantity:d,thicknessMm:c.gaugeThicknessMm,color:c.color})}const S=n.length>0?Math.max(...n.map(c=>c.gaugeThicknessMm)):6,M=Hn(f,o,S,7.85,{allowRotation:e}),T=h+l+u+b+y;let L=0;if(t.quantityTiers&&t.quantityTiers.length>0)for(const c of t.quantityTiers)a>=c.minQty&&c.discountPercent>L&&(L=c.discountPercent);const $=T*(L/100),v=Math.max(t.minimumOrderFee,T-$),_=i?t.gstPercent/100:0,A=v*_;let E=0,x=0,p=0;i&&A>0&&(t.isInterstateSale?p=A:(E=A/2,x=A/2));const g=v+A;return{currency:t.currency,totalItemsCount:n.length,totalPartsCount:a,totalCutLengthMeters:Math.round(s*100)/100,totalPierces:r,totalNetPartMassKg:Math.round(m*100)/100,totalMaterialCost:Math.round(h*100)/100,totalCutCost:Math.round(l*100)/100,totalPierceCost:Math.round(u*100)/100,totalHandlingCost:Math.round(b*100)/100,totalSecondaryCost:Math.round(y*100)/100,subtotalBeforeDiscount:Math.round(T*100)/100,volumeDiscountPercent:L,discountAmount:Math.round($*100)/100,orderTotalBeforeGst:Math.round(v*100)/100,gstAmount:Math.round(A*100)/100,cgstAmount:Math.round(E*100)/100,sgstAmount:Math.round(x*100)/100,igstAmount:Math.round(p*100)/100,finalTotalWithGst:Math.round(g*100)/100,nestingResult:M}}function go(n,t){const e=t.currency==="INR"?"₹":"$",i=n.shopSettings;let a="";for(let r=0;r<n.items.length;r++){const m=n.items[r],h=m.totalPrice.toFixed(2);a+=`${r+1}. *${m.partGeometry.name}* (${m.materialName} ${m.gaugeThicknessMm}mm)
   • Qty: ${m.quantity} pcs @ ${e}${m.unitQuote.finalUnitPrice.toFixed(2)} = *${e}${h}*
`}const s=t.nestingResult.sheetSize.name.split(" - ")[0]||"Standard Plate";return`*PROJECT QUOTATION — ${i.shopName.toUpperCase()}*
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
${t.gstAmount>0?i.isInterstateSale?`*IGST (18%):* ${e}${t.igstAmount.toFixed(2)}
*FINAL PROJECT TOTAL (INC. GST):* ${e}${t.finalTotalWithGst.toFixed(2)}`:`*CGST (9%):* ${e}${t.cgstAmount.toFixed(2)}
*SGST (9%):* ${e}${t.sgstAmount.toFixed(2)}
*FINAL PROJECT TOTAL (INC. GST):* ${e}${t.finalTotalWithGst.toFixed(2)}`:`*FINAL PROJECT TOTAL:* ${e}${t.orderTotalBeforeGst.toFixed(2)}`}
----------------------------------
• SAC 9988 / HSN 7326 (GST Invoice with ITC)
• ⚠️ Rate validity: 48 Hours based on prevailing steel mandi rates.
• CypCut / FSCUT multi-layer CAM pre-processed.
• Advance: 50% with PO to confirm cut schedule.
• Instant UPI Pay: ${i.upiId||"shop@upi"}`}function fo(n,t="91"){const o=n.replace(/[\s\-\(\)\.]/g,"");return o?o.startsWith("+")?o.substring(1):o.length===10&&/^\d+$/.test(o)?`${t}${o}`:o:""}function bi(n,t,o="91"){const e=t?fo(t,o):"",i=encodeURIComponent(n);return e?`https://wa.me/${e}?text=${i}`:`https://wa.me/?text=${i}`}const Wn="cad_cnc_shop_settings_",On="cad_cnc_materials_";function Di(n,t){if(typeof window>"u"||!window.localStorage)return{...t};try{const o=window.localStorage.getItem(`${Wn}${n.toLowerCase()}`);if(o){const e=JSON.parse(o);return{...t,...e}}}catch(o){console.warn("Failed to load shop settings from localStorage",o)}return{...t}}function yo(n,t){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(`${Wn}${n.toLowerCase()}`,JSON.stringify(t))}catch(o){console.warn("Failed to save shop settings to localStorage",o)}}function Fi(n,t){if(typeof window>"u"||!window.localStorage)return JSON.parse(JSON.stringify(t));try{const o=window.localStorage.getItem(`${On}${n.toLowerCase()}`);if(o)return JSON.parse(o)}catch(o){console.warn("Failed to load materials from localStorage",o)}return JSON.parse(JSON.stringify(t))}function xo(n,t){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(`${On}${n.toLowerCase()}`,JSON.stringify(t))}catch(o){console.warn("Failed to save materials to localStorage",o)}}function bo(n){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.removeItem(`${Wn}${n.toLowerCase()}`),window.localStorage.removeItem(`${On}${n.toLowerCase()}`)}catch(t){console.warn("Failed to reset storage",t)}}function Gt(n,t,o,e,i,a,s=Ot,r="Valued Customer"){const m=i.currency==="USD",h=m?"$":"₹",l=`RFQ-${Math.floor(1e3+Math.random()*9e3)}`,u=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),b=m?`${t.boundingBoxWidthInches.toFixed(2)}" × ${t.boundingBoxHeightInches.toFixed(2)}" (${e.thicknessInches.toFixed(3)}" plate)`:`${t.boundingBoxWidthMm.toFixed(0)} × ${t.boundingBoxHeightMm.toFixed(0)} mm (${e.thicknessMm} mm)`,y=m?`${t.totalCutLengthInches.toFixed(1)} inches (${t.pierceCount} pierces)`:`${(t.totalCutLengthMm/1e3).toFixed(2)} meters (${t.pierceCount} pierces)`,f=m?`${t.theoreticalWeightLbs.toFixed(2)} lbs`:`${t.theoreticalWeightKg.toFixed(2)} kg`,S=m?`${(t.theoreticalWeightLbs*i.quantity).toFixed(2)} lbs`:`${(t.theoreticalWeightKg*i.quantity).toFixed(2)} kg`;return`Subject: Quotation: ${n} (Ref #${l}) — ${a}

Dear ${r},

Thank you for requesting a quotation from ${a}. Below is your instant manufacturing cost estimate:

COMMERCIAL MANUFACTURING QUOTATION SUMMARY
--------------------------------------------------
Quote Ref: ${l}
Date: ${u}
Valid For: 15 Calendar Days

PART SPECIFICATIONS & BILL OF MATERIALS:
• Part Name: ${n}
• Material: ${o} — ${e.gaugeName}
• Part Dimensions: ${b}
• Est. Unit Weight: ${f} (Total Lot: ${S})
• Laser Cut Profile: ${y}
• Order Quantity: ${i.quantity} piece${i.quantity>1?"s":""}

COST BREAKDOWN:
--------------------------------------------------
• Raw Material: ${h}${i.unitMaterialCost.toFixed(2)} / pc
• Laser Cutting & Piercing: ${h}${(i.unitCutCost+i.unitPierceCost).toFixed(2)} / pc
${i.unitSecondaryCost>0?`• Secondary Operations (Forming/Deburr): ${h}${i.unitSecondaryCost.toFixed(2)} / pc
`:""}${i.discountPercent>0?`• Volume Discount (${i.discountPercent}% applied): -${h}${((i.unitSubtotal-i.discountedUnitPrice)*i.quantity).toFixed(2)}
`:""}--------------------------------------------------
Unit Price: ${h}${i.finalUnitPrice.toFixed(2)} each
Subtotal: ${h}${i.finalOrderTotal.toFixed(2)}
${i.gstAmount>0?`Estimated Sales Tax (${s.gstPercent||7}%): ${h}${i.gstAmount.toFixed(2)}
Total (Inc. Sales Tax): ${h}${i.finalTotalWithGst.toFixed(2)}`:`Total: ${h}${i.finalOrderTotal.toFixed(2)}`}

COMMERCIAL TERMS:
• Classification: NAICS: ${i.naicsCode||"332813 - Laser Cutting & Fabrication"}
• Lead Time: ${s.leadTimeDays||3} to 5 Business Days After Receipt of Order (ARO)
• Delivery Terms: FOB Origin / Ex-Works
• Payment Terms: ${s.paymentTerms||"Net 30, Credit Card, ACH"}
• Tax Status: ${i.salesTaxExempt?"Tax-Exempt (Resale Certificate Verified)":`Sales Tax (${s.gstPercent||7}% est.)`}
• CAM Verification: Trumpf / SigmaNEST cut-ready DXF verified for production

To approve this quotation and release your order to our cutting schedule, please reply directly to this email with your PO number or authorization.

Best regards,

Estimating & Engineering Team
${a}
${s.shopPhone||""} | ${s.shopAddress||""}`}function wn(n,t,o="Valued Customer"){const e=t.currency==="USD",i=e?"$":"₹",a=n.shopSettings,s=`PRJ-${Math.floor(1e3+Math.random()*9e3)}`,r=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});let m="";for(let b=0;b<n.items.length;b++){const y=n.items[b],S=y.partGeometry.units==="inch"?`${y.partGeometry.boundingBox.width.toFixed(2)}" × ${y.partGeometry.boundingBox.height.toFixed(2)}"`:`${y.partGeometry.boundingBox.width.toFixed(0)} × ${y.partGeometry.boundingBox.height.toFixed(0)} mm`;m+=`${b+1}. ${y.partGeometry.name}
   Specs: ${y.materialName} (${y.gaugeThicknessMm}mm / ${S})
   Qty: ${y.quantity} pcs @ ${i}${y.unitQuote.finalUnitPrice.toFixed(2)} = ${i}${y.totalPrice.toFixed(2)}

`}const h=e?`${(t.totalCutLengthMeters*39.3701).toFixed(1)} inches`:`${t.totalCutLengthMeters} meters`,l=e?`${(t.totalNetPartMassKg*2.20462).toFixed(2)} lbs`:`${t.totalNetPartMassKg} kg`,u=t.nestingResult.sheetSize.name.split(" - ")[0]||"Standard Sheet";return`Subject: Quotation: ${n.projectName||"Sheet Metal Project RFQ"} (Ref #${s}) — ${a.shopName}

Dear ${o||n.customerName||"Valued Customer"},

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
${m}--------------------------------------------------
SHEET NESTING & MATERIAL EFFICIENCY:
• Sheet Stock: ${t.nestingResult.sheetsRequired} Sheet(s) of ${u}
• Material Utilization: ${t.nestingResult.sheetUtilizationPercent}%
• Total Laser Cut Length: ${h} (${t.totalPierces} total pierces)
• Estimated Net Part Mass: ${l}

PRICING SUMMARY:
--------------------------------------------------
Material Subtotal: ${i}${t.totalMaterialCost.toFixed(2)}
Laser Cutting & Piercing: ${i}${(t.totalCutCost+t.totalPierceCost).toFixed(2)}
${t.totalSecondaryCost>0?`Secondary Operations (Forming/Deburr): ${i}${t.totalSecondaryCost.toFixed(2)}
`:""}${t.volumeDiscountPercent>0?`Volume Tier Discount (${t.volumeDiscountPercent}%): -${i}${t.discountAmount.toFixed(2)}
`:""}--------------------------------------------------
Taxable Subtotal: ${i}${t.orderTotalBeforeGst.toFixed(2)}
${t.gstAmount>0?`Estimated Sales Tax (${a.gstPercent||7}%): ${i}${t.gstAmount.toFixed(2)}
FINAL PROJECT TOTAL: ${i}${t.finalTotalWithGst.toFixed(2)}`:`FINAL PROJECT TOTAL: ${i}${t.orderTotalBeforeGst.toFixed(2)}`}

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
${a.shopPhone||""} | ${a.shopAddress||""}`}function Ai(n,t=2500,o=.25){const e=[],i=t/60,s=n.units==="inch"?25.4:1;let r=0;for(let b=0;b<n.innerHoles.length;b++){const y=n.innerHoles[b];if(r++,"radius"in y){const f=y,M=2*Math.PI*f.radius*s,T={x:f.center.x,y:f.center.y},L=[{type:"arc",center:f.center,radius:f.radius,startAngle:0,endAngle:2*Math.PI,counterClockwise:!0}];e.push({stepIndex:r,label:`Inner Hole #${b+1} (Ø${(f.radius*2).toFixed(n.units==="inch"?2:1)}${n.units==="inch"?"in":"mm"})`,layerName:"Layer 1 (Yellow)",layerColor:"#eab308",isOuter:!1,piercePoint:T,segments:L,lengthMm:M,simulatedDurationSec:o+M/i})}else{const f=y,M=Kt(f)*s;let T=1/0,L=1/0,$=-1/0,v=-1/0;for(const E of f.segments)E.type==="line"?(T=Math.min(T,E.start.x,E.end.x),L=Math.min(L,E.start.y,E.end.y),$=Math.max($,E.start.x,E.end.x),v=Math.max(v,E.start.y,E.end.y)):(T=Math.min(T,E.center.x-E.radius),L=Math.min(L,E.center.y-E.radius),$=Math.max($,E.center.x+E.radius),v=Math.max(v,E.center.y+E.radius));const _=f.segments[0],A=isFinite(T)?{x:(T+$)/2,y:(L+v)/2}:_?_.type==="line"?_.start:{x:_.center.x+_.radius*Math.cos(_.startAngle),y:_.center.y+_.radius*Math.sin(_.startAngle)}:{x:0,y:0};e.push({stepIndex:r,label:`Inner Cutout #${b+1}`,layerName:"Layer 1 (Yellow)",layerColor:"#eab308",isOuter:!1,piercePoint:A,segments:f.segments,lengthMm:M,simulatedDurationSec:o+M/i})}}r++;const h=Kt(n.outerContour)*s,l=n.outerContour.segments[0],u=l?l.type==="line"?l.start:{x:l.center.x+l.radius*Math.cos(l.startAngle),y:l.center.y+l.radius*Math.sin(l.startAngle)}:{x:0,y:0};return e.push({stepIndex:r,label:`Outer Perimeter (${n.name})`,layerName:"Layer 0 (White/Green)",layerColor:"#22c55e",isOuter:!0,piercePoint:u,segments:n.outerContour.segments,lengthMm:h,simulatedDurationSec:o+h/i}),e}function $o(n){if("radius"in n){const{center:{x:t,y:o},radius:e}=n;return`M ${(t-e).toFixed(3)} ${o.toFixed(3)} A ${e.toFixed(3)} ${e.toFixed(3)} 0 1 0 ${(t+e).toFixed(3)} ${o.toFixed(3)} A ${e.toFixed(3)} ${e.toFixed(3)} 0 1 0 ${(t-e).toFixed(3)} ${o.toFixed(3)} Z`}return Vt(n)}function on(n,t={}){if(t.viewStyle==="realistic_gate"&&t.jaliParams)return Co(n,t.jaliParams);const e=n.units==="inch"?1/25.4:1,i=n.boundingBox,a=Math.max(35*e,i.width*.14),s=Math.max(50*e,i.height*.22),r=Math.max(55*e,i.height*.24),m=Math.max(80*e,i.width*.3),h=i.minX-a,l=i.minY-r,u=i.width+a+m,b=i.height+r+s,y=t.simulationState,f=Ai(n);let S="";const M=y&&y.activeStepIndex===f.length,T=y&&y.activeStepIndex>f.length,L=Vt(n.outerContour);S+=`<path d="${L}" fill="rgba(34, 197, 94, 0.08)" stroke="${M?"#4ade80":T?"#16a34a":"#22c55e"}" stroke-width="${M?3:2}" vector-effect="non-scaling-stroke" stroke-linejoin="round" />`;function _(oe){let ee=1/0,le=1/0,ae=-1/0,J=-1/0;for(const Q of oe.segments)Q.type==="line"?(ee=Math.min(ee,Q.start.x,Q.end.x),le=Math.min(le,Q.start.y,Q.end.y),ae=Math.max(ae,Q.start.x,Q.end.x),J=Math.max(J,Q.start.y,Q.end.y)):(ee=Math.min(ee,Q.center.x-Q.radius),le=Math.min(le,Q.center.y-Q.radius),ae=Math.max(ae,Q.center.x+Q.radius),J=Math.max(J,Q.center.y+Q.radius));return isFinite(ee)?{x:(ee+ae)/2,y:(le+J)/2}:{x:0,y:0}}let A=0;for(let oe=0;oe<n.innerHoles.length;oe++){const ee=n.innerHoles[oe];A++;const le=y&&y.activeStepIndex===A,ae=y&&y.activeStepIndex>A,J=(t.dfmIssues||[]).filter(X=>X.holeIndex===oe||X.relatedHoleIndex===oe),Q=J.some(X=>X.severity==="error"),fe=J.some(X=>X.severity==="warning"),xe=t.highlightedHoleIndex===oe||t.highlightedHoleIndices&&t.highlightedHoleIndices.includes(oe);let pe=le?"#facc15":ae?"#ca8a04":"#eab308",ge="rgba(234, 179, 8, 0.12)",be=le?2.5:1.8;Q?(pe="#ef4444",ge="rgba(239, 68, 68, 0.22)",be=2.4):fe&&(pe="#f59e0b",ge="rgba(245, 158, 11, 0.20)",be=2.2),xe&&(pe="#38bdf8",ge="rgba(56, 189, 248, 0.32)",be=3.2);const Ae=`Hole #${oe+1}${J.length>0?" — "+J.map(X=>X.message).join(" | "):" (Inner Cutout)"}`;if(S+=`<g class="cad-hole cad-hole-${oe} ${fe?"dfm-hole-warning":""} ${Q?"dfm-hole-error":""} ${xe?"hole-highlighted":""}" data-hole-index="${oe}" style="cursor: pointer;">`,S+=`<title>${Ae}</title>`,"radius"in ee){const X=ee;if(xe)S+=`<circle cx="${X.center.x}" cy="${X.center.y}" r="${X.radius+5*e}" fill="none" stroke="#38bdf8" stroke-width="${2*e}" stroke-dasharray="${3*e},${2*e}">
          <animate attributeName="r" values="${X.radius+3*e};${X.radius+7*e}" dur="0.9s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.4;1" dur="0.9s" repeatCount="indefinite" />
        </circle>`;else if(fe||Q){const we=Q?"#ef4444":"#f59e0b";S+=`<circle cx="${X.center.x}" cy="${X.center.y}" r="${X.radius+2.5*e}" fill="none" stroke="${we}" stroke-width="${1.2*e}" stroke-dasharray="${2.5*e},${2.5*e}" opacity="0.85" />`}S+=`<circle cx="${X.center.x}" cy="${X.center.y}" r="${X.radius}" fill="${ge}" stroke="${pe}" stroke-width="${be}" vector-effect="non-scaling-stroke" />`;const $e=Math.min(10*e,X.radius*.6);S+=`<line x1="${X.center.x-$e}" y1="${X.center.y}" x2="${X.center.x+$e}" y2="${X.center.y}" stroke="${fe||Q?pe:"rgba(234, 179, 8, 0.5)"}" stroke-width="1" vector-effect="non-scaling-stroke" />`,S+=`<line x1="${X.center.x}" y1="${X.center.y-$e}" x2="${X.center.x}" y2="${X.center.y+$e}" stroke="${fe||Q?pe:"rgba(234, 179, 8, 0.5)"}" stroke-width="1" vector-effect="non-scaling-stroke" />`}else{const X=Vt(ee);xe?S+=`<path d="${X}" fill="none" stroke="#38bdf8" stroke-width="${3.5*e}" stroke-dasharray="${3*e},${2*e}">
          <animate attributeName="stroke-width" values="${3*e};${6*e};${3*e}" dur="0.9s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.4;1" dur="0.9s" repeatCount="indefinite" />
        </path>`:(fe||Q)&&(S+=`<path d="${X}" fill="none" stroke="${Q?"#ef4444":"#f59e0b"}" stroke-width="${2.5*e}" stroke-dasharray="${2.5*e},${2.5*e}" opacity="0.85" />`),S+=`<path d="${X}" fill="${ge}" stroke="${pe}" stroke-width="${be}" vector-effect="non-scaling-stroke" stroke-linejoin="round" />`;const $e=_(ee),we=6*e;S+=`<line x1="${$e.x-we}" y1="${$e.y}" x2="${$e.x+we}" y2="${$e.y}" stroke="${fe||Q?pe:"rgba(234, 179, 8, 0.4)"}" stroke-width="1" vector-effect="non-scaling-stroke" />`,S+=`<line x1="${$e.x}" y1="${$e.y-we}" x2="${$e.x}" y2="${$e.y+we}" stroke="${fe||Q?pe:"rgba(234, 179, 8, 0.4)"}" stroke-width="1" vector-effect="non-scaling-stroke" />`}S+="</g>"}const E=(t.showCutOrder||y)&&!t.hideCamBadges;let x="";const p=n.innerHoles.length>20,g=p?Math.max(6*e,Math.min(10*e,u*.012)):Math.max(9*e,Math.min(16*e,u*.022));if(E){let oe="";for(let ee=0;ee<f.length;ee++){const le=f[ee].piercePoint;ee===0?oe+=`M ${le.x.toFixed(3)} ${le.y.toFixed(3)}`:oe+=` L ${le.x.toFixed(3)} ${le.y.toFixed(3)}`}x+=`<path d="${oe}" fill="none" stroke="#38bdf8" stroke-dasharray="${3*e},${3*e}" stroke-width="${1*e}" opacity="0.45" />`;for(const ee of f){const le=ee.piercePoint,ae=y&&y.activeStepIndex===ee.stepIndex,J=ee.isOuter?null:ee.stepIndex-1,Q=J!==null?(t.dfmIssues||[]).filter(He=>He.holeIndex===J||He.relatedHoleIndex===J):[],fe=Q.some(He=>He.severity==="error"),xe=Q.some(He=>He.severity==="warning"),pe=J!==null&&(t.highlightedHoleIndex===J||t.highlightedHoleIndices&&t.highlightedHoleIndices.includes(J));let ge=ee.isOuter?"#22c55e":"#eab308",be=ae?"#ffffff":"#0f172a",Ae="#0b1120";fe?(ge="#ef4444",be=pe?"#ffffff":"#7f1d1d",Ae="#ffffff"):xe&&(ge="#f59e0b",be=pe?"#ffffff":"#78350f",Ae="#0b1120"),pe&&(be="#38bdf8");const X=(ae?3*e:0)+(pe?4*e:0),$e=pe?`<circle cx="0" cy="0" r="${g+7*e}" fill="none" stroke="#38bdf8" stroke-width="${2*e}">
             <animate attributeName="r" values="${g+5*e};${g+9*e}" dur="0.8s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="indefinite" />
           </circle>`:"",we=(xe||fe)&&!pe?`<circle cx="0" cy="0" r="${g+3.5*e}" fill="none" stroke="${fe?"#ef4444":"#f59e0b"}" stroke-width="${1.2*e}" stroke-dasharray="${2*e},${2*e}" />`:"",Oe=ee.isOuter?`Outer Perimeter Cut (Step #${ee.stepIndex})`:`Hole #${ee.stepIndex}${Q.length>0?" — "+Q.map(He=>He.message).join(" | "):" (Inner Cutout)"}`;x+=`
        <g class="cam-badge ${J!==null?`cam-badge-hole-${J}`:"cam-badge-outer"} ${xe?"cam-badge-warning":""} ${fe?"cam-badge-error":""}" 
           ${J!==null?`data-hole-index="${J}"`:""} 
           transform="translate(${le.x}, ${le.y}) scale(1, -1)" 
           style="cursor: pointer;">
          <title>${Oe}</title>
          ${$e}
          ${we}
          <circle cx="0" cy="0" r="${g+X}" fill="${ge}" stroke="${be}" stroke-width="${(ae||pe?2.2:1.2)*e}" />
          <text x="0" y="0" text-anchor="middle" dominant-baseline="central" font-size="${g*(p?.95:1.1)}" font-family="'JetBrains Mono', monospace" font-weight="800" fill="${Ae}">
            ${ee.stepIndex}
          </text>
        </g>
      `}}else for(let oe=0;oe<n.innerHoles.length;oe++){const ee=(t.dfmIssues||[]).filter(ae=>ae.holeIndex===oe||ae.relatedHoleIndex===oe),le=t.highlightedHoleIndex===oe||t.highlightedHoleIndices&&t.highlightedHoleIndices.includes(oe);if(ee.length>0||le){const ae=n.innerHoles[oe],J="radius"in ae?ae.center:_(ae),Q=ee.some(Ae=>Ae.severity==="error"),fe=le?"#38bdf8":Q?"#ef4444":"#f59e0b",xe=le?"#ffffff":Q?"#7f1d1d":"#78350f",pe=Q?"#ffffff":"#0b1120",ge=g*1.15,be=le?`<circle cx="0" cy="0" r="${ge+6*e}" fill="none" stroke="#38bdf8" stroke-width="${2*e}">
               <animate attributeName="r" values="${ge+4*e};${ge+8*e}" dur="0.8s" repeatCount="indefinite" />
               <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="indefinite" />
             </circle>`:"";x+=`
          <g class="cam-badge dfm-hole-badge cam-badge-hole-${oe}" 
             data-hole-index="${oe}" 
             transform="translate(${J.x}, ${J.y}) scale(1, -1)" 
             style="cursor: pointer;">
            <title>Hole #${oe+1}: ${ee.map(Ae=>Ae.message).join(" | ")}</title>
            ${be}
            <circle cx="0" cy="0" r="${ge+3*e}" fill="none" stroke="${Q?"#ef4444":"#f59e0b"}" stroke-width="${1.2*e}" stroke-dasharray="${2*e},${2*e}" />
            <circle cx="0" cy="0" r="${ge}" fill="${fe}" stroke="${xe}" stroke-width="${1.8*e}" />
            <text x="0" y="0" text-anchor="middle" dominant-baseline="central" font-size="${ge*1.1}" font-family="'JetBrains Mono', monospace" font-weight="800" fill="${pe}">
              ${oe+1}
            </text>
          </g>
        `}}let c="";if(y&&y.nozzlePos){const oe=y.nozzlePos.x,ee=y.nozzlePos.y,le=y.isPiercing,ae=le?18*e:0,J=le?`<circle cx="0" cy="0" r="${ae}" fill="none" stroke="#f97316" stroke-width="${2.5*e}" opacity="0.8">
           <animate attributeName="r" values="${6*e};${22*e}" dur="0.3s" repeatCount="indefinite" />
           <animate attributeName="opacity" values="1;0" dur="0.3s" repeatCount="indefinite" />
         </circle>`:"";c=`
      <!-- Active Laser Nozzle -->
      <g class="laser-nozzle-head" transform="translate(${oe}, ${ee})">
        ${J}
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
    `}const d=n.units,N="#94a3b8",H=Math.max(u,b),D=Math.max(14*e,H*.028),G=Math.max(20*e,H*.025),B=1.5*e,P=8*e,R=3.5*e,O=i.maxY+s*.55,K=`
    <g class="dim-leader" stroke="${N}" stroke-width="${B}" fill="${N}">
      <line x1="${i.minX}" y1="${i.maxY}" x2="${i.minX}" y2="${O+P}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${i.maxX}" y1="${i.maxY}" x2="${i.maxX}" y2="${O+P}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${i.minX}" y1="${O}" x2="${i.maxX}" y2="${O}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${(i.minX+i.maxX)/2}" y="${O+D*.9}" text-anchor="middle" font-size="${D}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#0b1120" stroke-width="${R}" paint-order="stroke fill" letter-spacing="0.02em">
        ${i.width.toFixed(2)} ${d}
      </text>
    </g>
  `,j=i.maxX+G,ce=`
    <g class="dim-leader" stroke="${N}" stroke-width="${B}" fill="${N}">
      <line x1="${i.maxX}" y1="${i.minY}" x2="${j+P}" y2="${i.minY}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${i.maxX}" y1="${i.maxY}" x2="${j+P}" y2="${i.maxY}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${j}" y1="${i.minY}" x2="${j}" y2="${i.maxY}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${j+D*.5}" y="${(i.minY+i.maxY)/2+D*.35}" text-anchor="start" font-size="${D}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#0b1120" stroke-width="${R}" paint-order="stroke fill" letter-spacing="0.02em">
        ${i.height.toFixed(2)} ${d}
      </text>
    </g>
  `,ye=Math.max(10*e,u/20);return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${h} ${l} ${u} ${b}" width="100%" height="100%" style="background-color: #0b1120; border-radius: 8px;">
      <defs>
        <pattern id="cadGrid" width="${ye}" height="${ye}" patternUnits="userSpaceOnUse">
          <path d="M ${ye} 0 L 0 0 0 ${ye}" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="${1*e}"/>
        </pattern>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
        </marker>
      </defs>
      <rect x="${h}" y="${l}" width="${u}" height="${b}" fill="url(#cadGrid)" />
      
      <!-- Part Paths (Y flipped for CAD orientation) -->
      <g transform="translate(0, ${i.minY+i.maxY}) scale(1, -1)">
        ${S}
        ${x}
        ${c}
      </g>

      <!-- Dimensions -->
      ${K}
      ${ce}
    </svg>
  `}function Co(n,t){const o=t.units==="inch",e=o?1/25.4:1,i=n.boundingBox.width,a=n.boundingBox.height,s=t.finishMaterial||"matte_black",r=t.backlightColor||"warm_white",m=t.gateType||"single_swing",h=m==="double_swing",l=m==="wall_panel",u=!l&&t.hasFrameTube!==!1,b=t.frameTubeWidthMm??(o?2:50),y=o?b>10?b/25.4:b:b<10?b*25.4:b,f=u?y:0,S=!l&&!!t.hasKickPlate,M=t.kickPlateHeightMm??(o?12:300),T=o?M>30?M/25.4:M:M<30?M*25.4:M,L=S?Math.max(0,Math.min(a*.4,T)):0,$=!l&&t.hasHinges!==!1,v=!l&&t.hasPullHandle!==!1,_=!l&&t.hasLockBox!==!1,A=i+(u?2*f:0),E=a+(u?2*f:0),x=h?o?.6:15:0,p=h?A*2+x:A,g=E,c=Math.max(p,g),d=Math.max(16*e,c*.03),N=Math.max(16*e,c*.034),H=Math.max(7*e,c*.011),D=Math.max(36*e,c*.045),G=Math.max(32*e,c*.04),B=Math.max(45*e,p*.12),P=Math.max(45*e,G+d*3.8),R=Math.max(55*e,g*.08,N*2.8),O=Math.max(55*e,D+d*2.4),K=-B,j=-R,ce=p+B+P,ye=g+R+O,oe=Vt(n.outerContour),ee=n.innerHoles.map($o).join(" "),le=`${oe} ${ee}`;let ae="#475569",J="#334155",Q="#94a3b8";s==="royal_gold"?(ae="#fef08a",J="#b45309",Q="#fde047"):s==="corten_rust"?(ae="#fdba74",J="#7c2d12",Q="#ea580c"):s==="brushed_stainless"?(ae="#ffffff",J="#475569",Q="#e2e8f0"):s==="champagne_bronze"&&(ae="#fcd34d",J="#78350f",Q="#fbbf24");const fe=(Ge,gt=!1)=>{const Ce=Ge+(u?f:0),Ue=u?f:0;let je="";if(r!=="none"&&(je+=`
        <rect x="${Ce}" y="${Ue}" width="${i}" height="${a}" 
              fill="url(#glow_${r})" filter="url(#backlightBlur)" opacity="0.9" rx="${3*e}" />
      `),je+=`
      <g transform="translate(${Ce}, ${Ue})">
        <!-- Negative space perforated sheet metal plate -->
        <path d="${le}" fill-rule="evenodd" fill="url(#mat_${s})" 
              filter="url(#plateShadow)" stroke="${ae}" stroke-width="${.8*e}" stroke-opacity="0.6" />
        <!-- Inner cutout specular rim highlight -->
        <path d="${ee}" fill="none" stroke="${ae}" stroke-width="${.6*e}" stroke-opacity="0.4" />
      </g>
    `,S&&L>0){const se=Ue+a-L;je+=`
        <!-- Solid Bottom Kickplate -->
        <g class="kickplate">
          <rect x="${Ce}" y="${se}" width="${i}" height="${L}" 
                fill="url(#mat_${s})" stroke="${J}" stroke-width="${1.2*e}" />
          <!-- Embossed horizontal reveal grooves -->
          <line x1="${Ce+15*e}" y1="${se+L*.35}" x2="${Ce+i-15*e}" y2="${se+L*.35}" 
                stroke="${ae}" stroke-width="${1.5*e}" stroke-opacity="0.5" />
          <line x1="${Ce+15*e}" y1="${se+L*.65}" x2="${Ce+i-15*e}" y2="${se+L*.65}" 
                stroke="${ae}" stroke-width="${1.5*e}" stroke-opacity="0.5" />
          <!-- Corner fabrication rivet studs -->
          <circle cx="${Ce+12*e}" cy="${se+12*e}" r="${3*e}" fill="${Q}" opacity="0.8" />
          <circle cx="${Ce+i-12*e}" cy="${se+12*e}" r="${3*e}" fill="${Q}" opacity="0.8" />
          <circle cx="${Ce+12*e}" cy="${se+L-12*e}" r="${3*e}" fill="${Q}" opacity="0.8" />
          <circle cx="${Ce+i-12*e}" cy="${se+L-12*e}" r="${3*e}" fill="${Q}" opacity="0.8" />
        </g>
      `}if(u){const se=Ge,de=0;je+=`
        <!-- Structural Box Tube Outer Frame -->
        <g class="box-tube-frame" filter="url(#frameShadow)">
          <!-- Top horizontal tube -->
          <rect x="${se}" y="${de}" width="${A}" height="${f}" fill="url(#tube_${s}_h)" stroke="${J}" stroke-width="${1.2*e}" />
          <!-- Bottom horizontal tube -->
          <rect x="${se}" y="${de+E-f}" width="${A}" height="${f}" fill="url(#tube_${s}_h)" stroke="${J}" stroke-width="${1.2*e}" />
          <!-- Left vertical tube -->
          <rect x="${se}" y="${de+f}" width="${f}" height="${E-2*f}" fill="url(#tube_${s}_v)" stroke="${J}" stroke-width="${1.2*e}" />
          <!-- Right vertical tube -->
          <rect x="${se+A-f}" y="${de+f}" width="${f}" height="${E-2*f}" fill="url(#tube_${s}_v)" stroke="${J}" stroke-width="${1.2*e}" />
          
          <!-- Mitred 45-degree corner weld seams -->
          <line x1="${se}" y1="${de}" x2="${se+f}" y2="${de+f}" stroke="${ae}" stroke-width="${1.2*e}" stroke-opacity="0.7" />
          <line x1="${se+A}" y1="${de}" x2="${se+A-f}" y2="${de+f}" stroke="${ae}" stroke-width="${1.2*e}" stroke-opacity="0.7" />
          <line x1="${se}" y1="${de+E}" x2="${se+f}" y2="${de+E-f}" stroke="${ae}" stroke-width="${1.2*e}" stroke-opacity="0.7" />
          <line x1="${se+A}" y1="${de+E}" x2="${se+A-f}" y2="${de+E-f}" stroke="${ae}" stroke-width="${1.2*e}" stroke-opacity="0.7" />
        </g>
      `}if($){const de=!gt?Ge-6*e:Ge+A-6*e,Pe=[E*.15,E*.85];E>(o?48:1200)&&Pe.splice(1,0,E*.5);for(const Ie of Pe)je+=`
          <!-- Bullet Barrel Hinge -->
          <g class="bullet-hinge" transform="translate(${de}, ${Ie-24*e})">
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
        `}if(v||_){const se=gt,de=se?Ge+(u?f/2:25*e):Ge+A-(u?f/2:25*e),Pe=E*.5;if(_){const Ie=Math.max(30*e,f*.8),it=90*e,Ee=se?Ge+(u?4*e:8*e):Ge+A-(u?f-4*e:38*e);je+=`
          <!-- Lock Box & Keyway -->
          <g class="lockbox" transform="translate(${Ee}, ${Pe-it/2})">
            <rect x="0" y="0" width="${Ie}" height="${it}" rx="${4*e}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1.2*e}" />
            <!-- Key cylinder -->
            <circle cx="${Ie/2}" cy="${28*e}" r="${7*e}" fill="#1e293b" stroke="#64748b" stroke-width="${1*e}" />
            <rect x="${Ie/2-2*e}" y="${28*e}" width="${4*e}" height="${9*e}" fill="#0f172a" />
            <!-- Modern lever latch -->
            <rect x="${se?Ie/2-18*e:Ie/2+2*e}" y="${58*e}" width="${20*e}" height="${7*e}" rx="${2*e}" fill="#e2e8f0" stroke="#0f172a" stroke-width="${.8*e}" />
          </g>
        `}if(v){const Ie=Math.min(E*.45,600*e),it=(se?28:-28)*e,Ee=de+it;je+=`
          <!-- Sleek Architectural Bar Pull Handle -->
          <g class="pull-handle">
            <!-- Standoff brackets -->
            <rect x="${de<Ee?de:Ee}" y="${Pe-Ie/2+15*e}" width="${Math.abs(Ee-de)}" height="${10*e}" fill="#475569" stroke="#0f172a" stroke-width="${.8*e}" />
            <rect x="${de<Ee?de:Ee}" y="${Pe+Ie/2-25*e}" width="${Math.abs(Ee-de)}" height="${10*e}" fill="#475569" stroke="#0f172a" stroke-width="${.8*e}" />
            <!-- Vertical Cylindrical T-Bar -->
            <rect x="${Ee-6*e}" y="${Pe-Ie/2}" width="${12*e}" height="${Ie}" rx="${6*e}" 
                  fill="url(#mat_brushed_stainless)" stroke="#1e293b" stroke-width="${1.2*e}" filter="url(#handleShadow)" />
            <!-- Specular sheen -->
            <line x1="${Ee-2*e}" y1="${Pe-Ie/2+4*e}" x2="${Ee-2*e}" y2="${Pe+Ie/2-4*e}" stroke="#ffffff" stroke-width="${1*e}" opacity="0.75" />
          </g>
        `}}if(l){const se=Math.max(8*e,i*.018),de=[{x:Ce+25*e,y:Ue+25*e},{x:Ce+i-25*e,y:Ue+25*e},{x:Ce+i-25*e,y:Ue+a-25*e},{x:Ce+25*e,y:Ue+a-25*e}];a>(o?36:900)&&(de.push({x:Ce+25*e,y:Ue+a/2}),de.push({x:Ce+i-25*e,y:Ue+a/2}));for(const Pe of de)je+=`
          <!-- Stainless Standoff Screw Head -->
          <g class="standoff-mount" transform="translate(${Pe.x}, ${Pe.y})">
            <circle cx="0" cy="0" r="${se}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1.2*e}" filter="url(#handleShadow)" />
            <!-- Hex Socket -->
            <polygon points="${-3*e},${-1.7*e} 0,${-3.4*e} ${3*e},${-1.7*e} ${3*e},${1.7*e} 0,${3.4*e} ${-3*e},${1.7*e}" fill="#1e293b" />
          </g>
        `}return je};let xe="";h?(xe+=fe(0,!1),xe+=fe(A+x,!0),xe+=`
      <!-- Double Swing Center Slide Drop Bolt -->
      <g class="center-drop-bolt" transform="translate(${A+x/2-12*e}, ${4*e})">
        <rect x="0" y="0" width="${24*e}" height="${42*e}" rx="${3*e}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1*e}" />
        <rect x="${9*e}" y="${8*e}" width="${6*e}" height="${24*e}" rx="${2*e}" fill="#cbd5e1" />
      </g>
    `):xe+=fe(0,!1);const pe=t.units,ge="#94a3b8",be=g+D*.6,Ae=`
    <g class="dim-leader" stroke="${ge}" stroke-width="${1.6*e}" fill="${ge}">
      <line x1="0" y1="${g+8*e}" x2="0" y2="${be+10*e}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${p}" y1="${g+8*e}" x2="${p}" y2="${be+10*e}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="0" y1="${be}" x2="${p}" y2="${be}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${p/2}" y="${be+d*.9}" text-anchor="middle" font-size="${d}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#080c14" stroke-width="${4.5*e}" paint-order="stroke fill" letter-spacing="0.02em">
        ${p.toFixed(o?2:0)} ${pe} ${h?`(2× ${A.toFixed(o?2:0)} ${pe} Leaves)`:""}
      </text>
    </g>
  `,X=p+G*.6,$e=`
    <g class="dim-leader" stroke="${ge}" stroke-width="${1.6*e}" fill="${ge}">
      <line x1="${p+8*e}" y1="0" x2="${X+10*e}" y2="0" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${p+8*e}" y1="${g}" x2="${X+10*e}" y2="${g}" stroke-dasharray="${3*e},${3*e}" stroke-opacity="0.6" />
      <line x1="${X}" y1="0" x2="${X}" y2="${g}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${X+d*.5}" y="${g/2+d*.35}" text-anchor="start" font-size="${d}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#080c14" stroke-width="${4.5*e}" paint-order="stroke fill" letter-spacing="0.02em">
        ${g.toFixed(o?2:0)} ${pe}
      </text>
    </g>
  `,we=s.replace(/_/g," ").toUpperCase(),Oe=(t.patternType||"architectural_jali").replace(/_/g," ").toUpperCase(),He=h?"DOUBLE SWING ENTRANCE GATE":l?"WALL JALI SCREEN PANEL":"SINGLE SWING GATE";return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${K} ${j} ${ce} ${ye}" width="100%" height="100%" style="background-color: #080c14; border-radius: 8px;">
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

        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="${H}" markerHeight="${H}" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
        </marker>
      </defs>

      <!-- Architectural Backdrop Wall with subtle ambient spotlight -->
      <radialGradient id="studioSpotlight" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stop-color="#141c2e" />
        <stop offset="60%" stop-color="#0b1120" />
        <stop offset="100%" stop-color="#050811" />
      </radialGradient>
      <rect x="${K}" y="${j}" width="${ce}" height="${ye}" fill="url(#studioSpotlight)" />

      <!-- Top Architectural Badge Label -->
      <g class="studio-title-badge" transform="translate(${p/2}, ${-R*.45})">
        <text text-anchor="middle" font-size="${N}" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" fill="#f1f5f9" stroke="#080c14" stroke-width="${5*e}" paint-order="stroke fill" letter-spacing="0.05em">
          ✨ ${He} — ${we} | ${Oe}
        </text>
      </g>

      <!-- Ground Baseline Reference -->
      <line x1="${-B*.3}" y1="${g+2*e}" x2="${p+P*.3}" y2="${g+2*e}" stroke="#334155" stroke-width="${1.5*e}" stroke-dasharray="${6*e},${4*e}" opacity="0.6" />

      <!-- Gate Leaves & Structure -->
      ${xe}

      <!-- Dimension Leaders -->
      ${Ae}
      ${$e}
    </svg>
  `}function Io(n,t=0){const o=n.sheetSize.widthMm,e=n.sheetSize.lengthMm,i=o*.08,a=e*.08,s=o+2*i,r=e+2*a;let m="";const h=n.packedParts.filter(y=>y.sheetIndex===t),l=["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"];for(const y of h){const f=y.color||l[y.partIndex%l.length],S=y.rotated,M=y.partName?`${y.partName}`:`#${y.partIndex+1}`,T=Math.max(11,Math.min(y.width,y.height)*.16);m+=`
      <g class="nested-part" id="part_${y.id}">
        <rect x="${y.x}" y="${y.y}" width="${y.width}" height="${y.height}" 
              fill="${f}25" stroke="${f}" stroke-width="2" rx="2" />
        <text x="${y.x+y.width/2}" y="${y.y+y.height/2-2}" 
              text-anchor="middle" font-size="${T}" 
              font-family="'JetBrains Mono', monospace" fill="#ffffff" font-weight="bold">
          ${M}
        </text>
        <text x="${y.x+y.width/2}" y="${y.y+y.height/2+T}" 
              text-anchor="middle" font-size="${Math.max(9,T*.75)}" 
              font-family="'JetBrains Mono', monospace" fill="#94a3b8">
          ${y.width.toFixed(0)} × ${y.height.toFixed(0)} mm ${S?"⟲90°":""}
        </text>
      </g>
    `}let u="";if(t===n.sheetsRequired-1&&n.remnantLengthMm>50){const y=e-n.remnantLengthMm;u=`
      <rect x="10" y="${y}" width="${o-20}" height="${n.remnantLengthMm-10}" 
            fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" stroke-dasharray="4,4" stroke-width="1.5" />
      <text x="${o/2}" y="${y+n.remnantLengthMm/2}" 
            text-anchor="middle" font-size="${Math.max(14,o*.025)}" 
            font-family="'JetBrains Mono', monospace" fill="#38bdf8" font-weight="600">
        REUSABLE REMNANT OFFCUT: ${o} × ${n.remnantLengthMm} mm
      </text>
    `}return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${-i} ${-a} ${s} ${r}" width="100%" height="100%" style="background-color: #0b1120; border-radius: 8px;">
      <defs>
        <pattern id="nestGrid" width="${Math.max(50,s/20)}" height="${Math.max(50,r/20)}" patternUnits="userSpaceOnUse">
          <path d="M ${Math.max(50,s/20)} 0 L 0 0 0 ${Math.max(50,r/20)}" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
        </pattern>
      </defs>
      
      <!-- Background Grid -->
      <rect x="${-i}" y="${-a}" width="${s}" height="${r}" fill="url(#nestGrid)" />

      <!-- Full Sheet Boundary -->
      <rect x="0" y="0" width="${o}" height="${e}" fill="rgba(15, 23, 42, 0.85)" stroke="#64748b" stroke-width="3" rx="4" />

      <!-- Sheet Margin Guide -->
      <rect x="10" y="10" width="${o-20}" height="${e-20}" fill="none" stroke="rgba(100, 116, 139, 0.4)" stroke-dasharray="6,6" stroke-width="1" />

      <!-- Packed Parts -->
      ${m}

      <!-- Remnant Offcut -->
      ${u}

      <!-- Sheet Title & Dimensions -->
      <text x="${o/2}" y="-20" text-anchor="middle" font-size="${Math.max(16,o*.028)}" font-family="'JetBrains Mono', monospace" fill="#f8fafc" font-weight="700">
        ${n.sheetSize.name.toUpperCase()} (Sheet ${t+1} of ${n.sheetsRequired})
      </text>
      <text x="${o/2}" y="${e+35}" text-anchor="middle" font-size="${Math.max(14,o*.022)}" font-family="'JetBrains Mono', monospace" fill="#94a3b8">
        Utilization: ${n.sheetUtilizationPercent}% | Skeleton Scrap: ${n.totalSkeletonScrapMassKg} kg | Parts on Bed: ${h.length} / ${n.partsRequested}
      </text>
    </svg>
  `}function Vt(n){if(n.segments.length===0)return"";const t=[];for(let o=0;o<n.segments.length;o++){const e=n.segments[o];if(o===0){const i=e.type==="line"?e.start:{x:e.center.x+e.radius*Math.cos(e.startAngle),y:e.center.y+e.radius*Math.sin(e.startAngle)};t.push(`M ${i.x.toFixed(3)} ${i.y.toFixed(3)}`)}if(e.type==="line")t.push(`L ${e.end.x.toFixed(3)} ${e.end.y.toFixed(3)}`);else if(e.type==="arc"){const i=e.center.x+e.radius*Math.cos(e.endAngle),a=e.center.y+e.radius*Math.sin(e.endAngle);let s=e.endAngle-e.startAngle;e.counterClockwise?s<0&&(s+=2*Math.PI):s>0&&(s-=2*Math.PI);const r=Math.abs(s)>Math.PI?1:0,m=e.counterClockwise?1:0;t.push(`A ${e.radius.toFixed(3)} ${e.radius.toFixed(3)} 0 ${r} ${m} ${i.toFixed(3)} ${a.toFixed(3)}`)}}return n.isClosed&&t.push("Z"),t.join(" ")}function So(n,t,o,e,i,a,s="Valued Customer",r=""){const m=i.currency==="INR",h=m?"₹":"$",l=m?`INV-${Math.floor(1e5+Math.random()*9e5)}`:`RFQ-${Math.floor(1e5+Math.random()*9e5)}`,u=m?new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),b=a.upiId||"shop@upi",y=i.finalTotalWithGst,f=Math.round(y/2*100)/100,S=`upi://pay?pa=${encodeURIComponent(b)}&pn=${encodeURIComponent(a.shopName)}&am=${f.toFixed(2)}&cu=INR&tn=${encodeURIComponent(l)}`,M=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(S)}`,T=m?`Dim: ${t.boundingBoxWidthMm.toFixed(0)} × ${t.boundingBoxHeightMm.toFixed(0)} mm | Thick: ${e.thicknessMm} mm<br>Grade: ${o} (${e.gaugeName}) | Gas: ${a.assistGas.toUpperCase()}<br>Cut Length: ${(t.totalCutLengthMm/1e3).toFixed(2)} m | Pierces: ${t.pierceCount} / pc`:`Dim: ${t.boundingBoxWidthInches.toFixed(2)}" × ${t.boundingBoxHeightInches.toFixed(2)}" | Gauge: ${e.gaugeName}<br>Grade: ${o} | Gas: ${a.assistGas.toUpperCase()}<br>Cut Length: ${t.totalCutLengthInches.toFixed(1)} in | Pierces: ${t.pierceCount} / pc | Est. Weight: ${t.theoreticalWeightLbs.toFixed(2)} lbs`;return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${m?"Proforma Invoice":"Commercial Quotation"} - ${l}</title>
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
            <div>${a.shopAddress||(m?"MIDC Industrial Area, Pune, Maharashtra":"1420 Industrial Pkwy, Cleveland, OH 44135")}</div>
            <div>Phone: ${a.shopPhone||(m?"+91 98220 12345":"(216) 555-0198")} ${m?`| UPI: <strong>${b}</strong>`:""}</div>
            ${m?`<div>GSTIN: <strong>${a.shopGstin||"27AABCS1429B1Z8"}</strong> | State Code: 27 (MH)</div>`:`<div>NAICS: <strong>${a.naicsCode||"332813"}</strong> | Tax ID / EIN: <strong>${a.einOrTaxId||"Verified"}</strong></div>`}
          </div>
        </div>
      </div>
      <div class="invoice-tag">
        <h2 class="invoice-title">${m?"PROFORMA INVOICE":"COMMERCIAL MANUFACTURING QUOTATION"}</h2>
        <div class="invoice-meta">
          <div>Ref No: <strong>${l}</strong></div>
          <div>Date: <strong>${u}</strong></div>
          <div>${m?`SAC/HSN: <strong>${i.hsnSacCode.split(" ")[0]}</strong>`:`NAICS: <strong>${a.naicsCode?a.naicsCode.split(" ")[0]:"332813"}</strong> | Validity: <strong>15 Days</strong>`}</div>
        </div>
      </div>
    </div>

    <div class="bill-to-box">
      <strong>Customer:</strong> ${s} ${r?`(${r})`:""} — <em>Delivery: ${m?"Ex-Works / 24-48 Hours":"FOB Origin / 3-5 Business Days"}</em>
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
              ${T}
            </span>
          </td>
          <td class="text-center"><span style="background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 700;">${m?i.quotingMode.toUpperCase():"CUSTOM FAB"}</span></td>
          <td class="text-right">${i.quantity}</td>
          <td class="text-right">${h}${i.discountedUnitPrice.toFixed(2)}</td>
          <td class="text-right"><strong>${h}${(i.discountedUnitPrice*i.quantity).toFixed(2)}</strong></td>
        </tr>
        ${i.unitSecondaryCost>0?`
        <tr>
          <td>2</td>
          <td>
            <strong>Secondary Value-Add Operations</strong><br>
            <span style="font-size: 12px; color: #64748b;">
              ${i.secondaryBreakdown.bendingCost>0?`CNC Press Brake Bending (${h}${i.secondaryBreakdown.bendingCost}) | `:""}
              ${i.secondaryBreakdown.deburringCost>0?`Edge Deburring (${h}${i.secondaryBreakdown.deburringCost}) | `:""}
              ${i.secondaryBreakdown.tappingCost>0?`Tapping (${h}${i.secondaryBreakdown.tappingCost}) | `:""}
              ${i.secondaryBreakdown.surfaceFinishCost>0?`Surface Finishing (${h}${i.secondaryBreakdown.surfaceFinishCost})`:""}
            </span>
          </td>
          <td class="text-center"><span style="background: #f1f5f9; color: #475569; padding: 3px 8px; border-radius: 4px; font-size: 11px;">VALUE-ADD</span></td>
          <td class="text-right">${i.quantity}</td>
          <td class="text-right">${h}${i.unitSecondaryCost.toFixed(2)}</td>
          <td class="text-right"><strong>${h}${(i.unitSecondaryCost*i.quantity).toFixed(2)}</strong></td>
        </tr>`:""}
      </tbody>
    </table>

    <div class="summary-grid">
      ${m?`
      <div class="upi-box">
        <div class="upi-title">Scan to Pay 50% Advance</div>
        <img src="${M}" alt="UPI QR Code">
        <div class="upi-sub">GPay / PhonePe / Paytm<br>Advance: <strong>${h}${f.toFixed(2)}</strong></div>
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
          <td class="text-right">${h}${i.finalOrderTotal.toFixed(2)}</td>
        </tr>
        ${m?a.isInterstateSale?`
        <tr>
          <td>Integrated GST (IGST 18%):</td>
          <td class="text-right">${h}${i.igstAmount.toFixed(2)}</td>
        </tr>`:`
        <tr>
          <td>Central GST (CGST 9%):</td>
          <td class="text-right">${h}${i.cgstAmount.toFixed(2)}</td>
        </tr>
        <tr>
          <td>State GST (SGST 9%):</td>
          <td class="text-right">${h}${i.sgstAmount.toFixed(2)}</td>
        </tr>`:a.salesTaxExempt?`
        <tr>
          <td>Sales Tax (Tax-Exempt):</td>
          <td class="text-right">$0.00</td>
        </tr>
        `:`
        <tr>
          <td>Estimated Sales Tax (${a.gstPercent||7}%):</td>
          <td class="text-right">${h}${i.gstAmount.toFixed(2)}</td>
        </tr>
        `}
        <tr class="total-row">
          <td>Grand Total:</td>
          <td class="text-right" style="color: #0284c7;">${h}${i.finalTotalWithGst.toFixed(2)}</td>
        </tr>
      </table>
    </div>

    <div class="footer-terms">
      <strong>Terms & Conditions:</strong>
      <ol style="margin: 6px 0 0 16px; padding: 0;">
        ${m?`
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
</html>`}function Mo(n,t,o,e,i,a){const s=`JOB-${Math.floor(1e3+Math.random()*9e3)}`,r=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});return`<!DOCTYPE html>
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
        <div>Grade: <strong>${o}</strong></div>
        <div>Thickness: <strong>${e.thicknessMm} mm (${e.gaugeName})</strong></div>
        <div>Dimensions: <strong>${t.boundingBoxWidthMm.toFixed(1)} × ${t.boundingBoxHeightMm.toFixed(1)} mm</strong></div>
        <div>Est. Mass/pc: <strong>${t.theoreticalWeightKg.toFixed(2)} kg</strong></div>
      </div>
      <div class="box">
        <div class="box-title">PRODUCTION & CNC PARAMETERS</div>
        <div>Cut Qty: <strong>${i} PIECES</strong></div>
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
</html>`}function $i(n,t){const o=t.currency==="INR",e=o?"₹":"$",i=n.shopSettings,a=`PRJ-${Math.floor(1e5+Math.random()*9e5)}`,s=o?new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),r=i.upiId||"shop@upi",m=t.finalTotalWithGst,h=Math.round(m/2*100)/100,l=`upi://pay?pa=${encodeURIComponent(r)}&pn=${encodeURIComponent(i.shopName)}&am=${h.toFixed(2)}&cu=INR&tn=${encodeURIComponent(a)}`,u=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(l)}`;let b="";for(let y=0;y<n.items.length;y++){const f=n.items[y],S=f.partGeometry.boundingBox,T=f.partGeometry.units==="inch"||!o?`${(S.width/(f.partGeometry.units==="inch"?1:25.4)).toFixed(2)}" × ${(S.height/(f.partGeometry.units==="inch"?1:25.4)).toFixed(2)}"`:`${S.width.toFixed(0)} × ${S.height.toFixed(0)} mm`,L=o?`${(f.metrics.totalCutLengthMm/1e3).toFixed(1)} m`:`${f.metrics.totalCutLengthInches.toFixed(1)} in`;b+=`
      <tr>
        <td class="text-center">${y+1}</td>
        <td>
          <strong>${f.partGeometry.name}</strong><br>
          <span style="font-size: 12px; color: #64748b;">
            ${T} | ${f.materialName} (${f.gaugeThicknessMm}mm) | Cut: ${L}
          </span>
        </td>
        <td class="text-center">${f.unitQuote.quotingMode==="job_work"?o?"Job Work":"Labor Only":o?"Turnkey":"Fabricated"}</td>
        <td class="text-right"><strong>${f.quantity}</strong></td>
        <td class="text-right">${e}${f.unitQuote.finalUnitPrice.toFixed(2)}</td>
        <td class="text-right"><strong>${e}${f.totalPrice.toFixed(2)}</strong></td>
      </tr>
    `}return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${o?"Project Tax Invoice":"Commercial Project Quotation"} - ${a}</title>
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
          <h1 class="shop-title">${i.shopName}</h1>
          <div class="shop-meta">
            <div>${i.shopAddress||(o?"MIDC Industrial Area, Bhosari, Pune, MH":"1420 Industrial Pkwy, Cleveland, OH 44135")}</div>
            <div>Phone: ${i.shopPhone||(o?"+91 98220 12345":"(216) 555-0198")} ${o?`| UPI: <strong>${r}</strong>`:""}</div>
            ${o?`<div>GSTIN: <strong>${i.shopGstin||"27AABCS1429B1Z8"}</strong> | State Code: 27 (Maharashtra)</div>`:`<div>NAICS: <strong>${i.naicsCode||"332813"}</strong> | Tax ID / EIN: <strong>${i.einOrTaxId||"Verified"}</strong></div>`}
          </div>
        </div>
      </div>
      <div class="invoice-tag">
        <h2 class="invoice-title">${o?"CONSOLIDATED TAX INVOICE":"PROJECT QUOTATION"}</h2>
        <div class="invoice-meta">
          <div>Project Ref: <strong>${a}</strong></div>
          <div>Date: <strong>${s}</strong></div>
          <div>${o?"SAC: <strong>9988</strong> | HSN: <strong>7326</strong>":`NAICS: <strong>${i.naicsCode?i.naicsCode.split(" ")[0]:"332813"}</strong> | Validity: <strong>15 Calendar Days</strong>`}</div>
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
        ${b}
      </tbody>
    </table>

    <div class="summary-grid">
      ${o?`
      <div class="upi-box">
        <div class="upi-title">Scan UPI QR to Pay Advance</div>
        <img src="${u}" alt="UPI QR Code" />
        <div class="upi-sub">Pay 50% Advance: <strong>${e}${h.toFixed(2)}</strong></div>
        <div class="upi-sub" style="margin-top: 4px; font-family: monospace;">${r}</div>
      </div>
      `:`
      <div class="terms-box">
        <div class="terms-title">Commercial & Remittance Terms</div>
        <div class="terms-item">Payment Terms: <strong>${i.paymentTerms||"Net 30, Credit Card, ACH"}</strong></div>
        <div class="terms-item">Tax Status: <strong>${i.salesTaxExempt?"Tax-Exempt (Resale Certificate Verified)":`Sales Tax (${i.gstPercent||7}%)`}</strong></div>
        <div class="terms-item">Lead Time: <strong>${i.leadTimeDays||3} to 5 Business Days ARO</strong></div>
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
          <td>${o?"Taxable Value:":"Taxable Subtotal:"}</td>
          <td class="text-right">${e}${t.orderTotalBeforeGst.toFixed(2)}</td>
        </tr>
        ${o?i.isInterstateSale?`
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
        </tr>`:i.salesTaxExempt?`
        <tr>
          <td>Sales Tax (Tax-Exempt):</td>
          <td class="text-right">$0.00</td>
        </tr>
        `:`
        <tr>
          <td>Estimated Sales Tax (${i.gstPercent||7}%):</td>
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
        ${o?`
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
</html>`}function vo(n,t){const o=n.shopSettings,e=`JOB-${Math.floor(1e5+Math.random()*9e5)}`,i=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});let a="";for(let s=0;s<n.items.length;s++){const r=n.items[s],m=r.partGeometry.boundingBox;a+=`
      <tr>
        <td class="text-center">${s+1}</td>
        <td><strong>${r.partGeometry.name}</strong></td>
        <td>${m.width.toFixed(0)} × ${m.height.toFixed(0)} mm</td>
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
        <div style="font-size: 13px; color: #64748b; font-weight: 600;">${o.shopName} | Laser Controller: CypCut / FSCUT</div>
      </div>
      <div class="meta">
        <div>Job Card No: <strong>${e}</strong></div>
        <div>Date: <strong>${i}</strong></div>
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
</html>`}function Po(){const n=document.getElementById("demoVideoModal"),t=document.getElementById("btnOpenDemoModal"),o=document.getElementById("closeDemoModalBtn"),e=document.getElementById("demoLocalVideo");if(!n||!t)return;function i(){if(n.classList.remove("hidden"),e){e.currentTime=0;const s=e.play();s!==void 0&&s.catch(()=>{e.muted=!0,e.play().catch(()=>{})})}}function a(){n.classList.add("hidden"),e&&e.pause()}t.addEventListener("click",i),o==null||o.addEventListener("click",a),n.addEventListener("click",s=>{s.target===n&&a()}),window.addEventListener("keydown",s=>{s.key==="Escape"&&!n.classList.contains("hidden")&&a()})}let Be="inch",me="baseplate",dt="part",Ct=!1,Ne=null,ve=1,ke=tn[0],Ve=Fi("USD",_n),q=Ve[0],z=q.gauges[3]||q.gauges[0],C=Di("USD",Ot),Re={...Li},re=[],qe="single",Le=0,Rn=null,It=null,Pt=!1,Ht=null,ut=[],Lt=0,St=1,De=!0,Ze=null,Mt=null,tt=null;const w={length:10,width:8,units:"inch",cornerType:"chamfer",cornerSize:.75,holePattern:"4-corner",holeType:"slotted",holeDiameter:.75,slotLength:1.5,slotWidth:.75,edgeOffsetX:1.25,edgeOffsetY:1.25,centerCutoutType:"round",centerCutoutDiameter:2.5};let Ke=ct.find(n=>n.standard==="ASME"&&n.nominalBore==='2"')||ct[ct.length-1];const te={baseWidth:6,height:6,units:"inch",hasWeldSnipe:!0,snipeSize:1,mountingHoleDiameter:.5},k={width:24,height:48,units:"inch",patternType:"islamic_star",borderMarginMm:1.5,gridColumns:4,gridRows:8,hasMountingHoles:!0,mountingHoleDiameter:.3125,gateType:"single_swing",hasFrameTube:!0,frameTubeWidthMm:2,hasKickPlate:!1,kickPlateHeightMm:12,hasHinges:!0,hasPullHandle:!0,hasLockBox:!0,finishMaterial:"matte_black",backlightColor:"warm_white"};let Fe="realistic_gate";const Y={baseWidth:5,height:5,chamferTop:3,chamferRight:3,units:"inch",baseHoleCount:2,baseHoleDiameter:.375,uprightHoleCount:2,uprightHoleDiameter:.375,lighteningHoleDiameter:1.5},ie={outerDiameter:6,innerDiameter:2,units:"inch",boltCount:6,boltDiameter:.375,pitchCircleDiameter:4},nt=document.getElementById("dynamicControls"),he=document.getElementById("svgContainer"),ko=document.getElementById("hudCutLength"),Bo=document.getElementById("hudPierces"),wo=document.getElementById("hudWeight"),Eo=document.getElementById("hudBoundingBox"),kt=document.getElementById("dfmAlertContainer"),En=document.getElementById("canvasTitle"),Ci=document.getElementById("nestingHudBar"),Ii=document.getElementById("nestHudSheets"),Si=document.getElementById("nestHudUtil"),Mi=document.getElementById("nestHudScrap"),vi=document.getElementById("nestHudRemnant"),Ut=document.getElementById("quoteModeBadge"),Pi=document.getElementById("quoteShopName"),To=document.getElementById("totalPrice"),Lo=document.getElementById("pricePerUnit"),jt=document.getElementById("costMaterial"),Do=document.getElementById("costCut"),Fo=document.getElementById("costPierce"),ki=document.getElementById("costHandling"),Bi=document.getElementById("costSecondary"),Ao=document.getElementById("costDiscount"),Ro=document.getElementById("costGst"),No=document.getElementById("totalIncGst"),Dt=document.getElementById("gstLabel"),zt=document.getElementById("hsnCodeTag"),Tn=document.getElementById("minOrderWarning"),_t=document.getElementById("materialSelect"),vt=document.getElementById("gaugeSelect"),Qt=document.getElementById("assistGasSelect"),pt=document.getElementById("sheetSizeSelect"),Ln=document.getElementById("camProfileSelect"),Ho=document.getElementById("navCamName");let Qe=1,_e={x:0,y:0},qt=!1,Dn={x:0,y:0},Yt=!1,Xt=!1;function ht(){const n=document.getElementById("gateToolbarMain"),t=document.getElementById("gateFoldedBar"),o=document.getElementById("gateStudioToolbar");n&&t&&o&&(Yt?(n.classList.add("hidden"),t.classList.remove("hidden"),o.classList.add("is-folded")):(n.classList.remove("hidden"),t.classList.add("hidden"),o.classList.remove("is-folded")));const e=document.getElementById("bottomHudExpandedContent"),i=document.getElementById("bottomHudFoldedBar"),a=document.getElementById("canvasBottomHud");e&&i&&a&&(Xt?(e.classList.add("hidden"),i.classList.remove("hidden"),a.classList.add("is-folded")):(e.classList.remove("hidden"),i.classList.add("hidden"),a.classList.remove("is-folded")))}function Te(){const n=he==null?void 0:he.querySelector("svg");n&&(Qe===1&&_e.x===0&&_e.y===0?(n.style.transform="",he==null||he.classList.remove("is-zoomed")):(n.style.transform=`translate(${_e.x}px, ${_e.y}px) scale(${Qe})`,he==null||he.classList.add("is-zoomed")));const t=document.getElementById("zoomLevelDisplay");t&&(t.textContent=`${Math.round(Qe*100)}%`)}function Ft(){Qe=1,_e={x:0,y:0},Te()}function Nt(n){C.indianQuotingMode=n;const t=document.getElementById("modeJobWork"),o=document.getElementById("modeWithMaterial"),e=document.getElementById("modeSqFtJali");[t,o,e].forEach(i=>i==null?void 0:i.classList.remove("active")),n==="job_work"&&(t==null||t.classList.add("active")),n==="with_material"&&(o==null||o.classList.add("active")),n==="sqft_jali"&&(e==null||e.classList.add("active")),F()}let wt="industrial";function bt(n,t=!0){wt=n;const o=document.getElementById("tabPrecisionIndustrial"),e=document.getElementById("tabArchitecturalStudio"),i=document.getElementById("workspaceTabSwitcher"),a=document.querySelector('.shape-btn[data-shape="jali"]'),s=document.getElementById("modeSqFtJali"),r=document.getElementById("gateStudioToolbar");if(n==="industrial"){if(o==null||o.classList.add("active"),e==null||e.classList.remove("active"),e&&(e.style.display="none"),i&&(i.style.display="none"),a&&(a.style.display="none"),s&&(s.style.display="none"),r&&r.classList.add("hidden"),me==="jali"){const m=document.querySelector('.shape-btn[data-shape="baseplate"]');m?m.click():(me="baseplate",lt(),F())}t&&(window.location.hash==="#gate-studio"||window.location.hash==="#architectural")&&history.replaceState(null,"",window.location.pathname+window.location.search)}else i&&(i.style.display="flex"),e&&(e.style.display="inline-flex"),o==null||o.classList.remove("active"),e==null||e.classList.add("active"),a&&(a.style.display=""),s&&(s.style.display=""),me!=="jali"&&(a?a.click():(me="jali",Nt("sqft_jali"),Fe="realistic_gate",De=!1,lt(),F())),r&&r.classList.remove("hidden"),t&&(window.location.hash="#gate-studio")}function _o(){const n=document.getElementById("tabPrecisionIndustrial"),t=document.getElementById("tabArchitecturalStudio");n==null||n.addEventListener("click",()=>bt("industrial")),t==null||t.addEventListener("click",()=>bt("architectural"));const o=window.location.hash.toLowerCase(),i=new URLSearchParams(window.location.search).get("view");bt(o==="#gate-studio"||o==="#architectural"||i==="architectural"?"architectural":"industrial",!1),window.addEventListener("hashchange",()=>{const a=window.location.hash.toLowerCase();a==="#gate-studio"||a==="#architectural"?wt!=="architectural"&&bt("architectural",!1):(a==="#industrial"||a==="")&&wt!=="industrial"&&bt("industrial",!1)})}function Wo(){const n=new URLSearchParams(window.location.search);if(n.has("embedded")||n.get("embed")==="true"||window.self!==window.top){document.body.classList.add("is-embedded-widget");const o=n.get("currency");(o==="USD"||o==="INR")&&(C.currency=o);const e=n.get("shopName");if(e){C.shopName=e;const h=document.getElementById("brandTitle");h&&(h.textContent=e.toUpperCase());const l=document.getElementById("quoteShopName");l&&(l.textContent=e)}const i=n.get("shopEmail");i&&(C.shopEmail=i);const a=n.get("hourlyRate");a&&!isNaN(parseFloat(a))&&(C.hourlyLaserRateUsd=parseFloat(a));const s=n.get("minOrder");s&&!isNaN(parseFloat(s))&&(C.minimumOrderFee=parseFloat(s));const r=n.get("salesTax");r&&!isNaN(parseFloat(r))&&(C.gstPercent=parseFloat(r));const m=n.get("webhookUrl");m&&(C.rfqWebhookUrl=m)}}function Oo(){const n=document.getElementById("embedWidgetModal"),t=document.getElementById("btnOpenEmbedModal"),o=document.getElementById("closeEmbedModalBtn"),e=document.getElementById("embedShopSlug"),i=document.getElementById("embedDefaultCurrency"),a=document.getElementById("embedDefaultView"),s=document.getElementById("embedWidgetMode"),r=document.getElementById("embedScriptCode"),m=document.getElementById("btnCopyEmbedScript");if(!n)return;const h=()=>{if(!r)return;const l=window.location.origin||"https://engine.yourdomain.com",u=(e==null?void 0:e.value.trim())||"midwest-precision",b=(i==null?void 0:i.value)||"USD",y=(a==null?void 0:a.value)||"industrial",f=(s==null?void 0:s.value)||"inline";let S=`src="${l}/widget.js" data-shop-id="${u}" data-currency="${b}"`;y!=="industrial"&&(S+=` data-view="${y}"`),f!=="inline"&&(S+=` data-mode="${f}"`),r.textContent=`<script ${S}><\/script>`};t==null||t.addEventListener("click",()=>{i&&(i.value=C.currency),a&&(a.value=wt),h(),n.classList.remove("hidden")}),o==null||o.addEventListener("click",()=>{n.classList.add("hidden")}),n.addEventListener("click",l=>{l.target===n&&n.classList.add("hidden")}),[e,i,a,s].forEach(l=>{l==null||l.addEventListener("input",h),l==null||l.addEventListener("change",h)}),m==null||m.addEventListener("click",()=>{const l=(r==null?void 0:r.textContent)||"";navigator.clipboard.writeText(l).then(()=>{m.textContent="✅ Copied!",setTimeout(()=>{m.textContent="📋 Copy Script Tag"},2e3),ue("📋 Embed script tag copied to clipboard!")}).catch(()=>{ue("Script tag copied.")})}),h()}function Go(){Wo(),Nn("USD",!0),ta(),ia(),Oo(),_o(),lt(),Wt(),et(),F()}let wi=null;function Me(){const n=document.getElementById("storageBadge");n&&(n.textContent="💾 Saving...",n.classList.add("saving")),clearTimeout(wi),wi=setTimeout(()=>{yo(C.currency,C),xo(C.currency,Ve),n&&(n.textContent="💾 Auto-Saved",n.classList.remove("saving"))},400)}function We(){return Ct&&Ne?Ne:me==="baseplate"?(w.units=Be,qi(w)):me==="flange"?Yi({outerDiameter:Ke.outerDiameter,innerBore:Ke.innerBore,pitchCircleDiameter:Ke.pitchCircleDiameter,boltCount:Ke.boltCount,boltDiameter:Ke.boltDiameter,units:Ke.units}):me==="gusset"?(te.units=Be,Xi(te)):me==="jali"?(k.units=Be,Ki(k)):me==="bracket"?(Y.units=Be,Ji(Y)):(ie.units=Be,Vi(ie))}function F(){var x,p;const n=Be==="inch",t=We(),o=rt(t,z.thicknessMm,q.densityGPerCm3),e=so(t,z.thicknessMm);tt=e;let i;if(qe==="cart"&&re.length>0){const g=re.map(c=>({id:c.id,name:c.partGeometry.name,boundingBox:c.partGeometry.boundingBox,quantity:c.quantity,thicknessMm:c.gaugeThicknessMm,densityGPerCm3:q.densityGPerCm3,geometry:c.partGeometry,color:c.color}));i=Hn(g,ke,z.thicknessMm,q.densityGPerCm3)}else i=ho(t.boundingBox,ve,ke,z.thicknessMm,q.densityGPerCm3,{},t.units);Rn=i,Le=Math.max(0,Math.min(Le,i.sheetsRequired-1));const a=Xe(o,z,ve,C,Re),s=document.getElementById("sheetPaginationBar"),r=document.getElementById("sheetPageIndicator"),m=document.getElementById("btnPrevSheet"),h=document.getElementById("btnNextSheet"),l=document.getElementById("gateStudioToolbar"),u=document.getElementById("simulatorControls");if(dt==="nesting")l&&l.classList.add("hidden"),u&&(u.style.display="flex"),he.innerHTML=Io(i,Le),qe==="cart"?En.textContent=`RFQ Cart Assembly — ${ke.name} Layout (Sheet ${Le+1} of ${i.sheetsRequired})`:En.textContent=`${t.name} — ${ke.name} Layout (Sheet ${Le+1} of ${i.sheetsRequired})`,s&&s.classList.remove("hidden"),r&&(r.textContent=`Sheet ${Le+1} of ${i.sheetsRequired}`),m&&(m.disabled=Le<=0),h&&(h.disabled=Le>=i.sheetsRequired-1);else if(s&&s.classList.add("hidden"),me==="jali"&&wt==="architectural"?(l&&(l.classList.remove("hidden"),(x=document.getElementById("btnJaliViewRealistic"))==null||x.classList.toggle("active",Fe==="realistic_gate"),(p=document.getElementById("btnJaliViewCam"))==null||p.classList.toggle("active",Fe==="cam_toolpath"),l.querySelectorAll(".finish-swatch").forEach(g=>{g.classList.toggle("active",g.getAttribute("data-finish")===k.finishMaterial)}),l.querySelectorAll(".backlight-pill").forEach(g=>{g.classList.toggle("active",g.getAttribute("data-backlight")===k.backlightColor)}),l.querySelectorAll(".gate-type-btn").forEach(g=>{g.classList.toggle("active",g.getAttribute("data-gatetype")===k.gateType)})),u&&(u.style.display="flex")):(l&&l.classList.add("hidden"),u&&(u.style.display="flex")),!Pt){he.innerHTML=on(t,{showCutOrder:De,viewStyle:me==="jali"?Fe:"cam_toolpath",jaliParams:me==="jali"?k:void 0,hideCamBadges:me==="jali"&&(Fe==="realistic_gate"||!De),dfmIssues:e.issues,highlightedHoleIndex:Ze,highlightedHoleIndices:Ze!==null?Mt!==null?[Ze,Mt]:[Ze]:[]}),Ri();const c=Be==="inch"?`${o.boundingBoxWidthInches.toFixed(2)}" × ${o.boundingBoxHeightInches.toFixed(2)}"`:`${o.boundingBoxWidthMm.toFixed(0)} × ${o.boundingBoxHeightMm.toFixed(0)} mm`;En.textContent=me==="jali"&&Fe==="realistic_gate"?`Architectural CNC Gate & Jali Studio (${c})`:`${t.name} (${c})`}const b=document.getElementById("camLegendBar"),y=document.getElementById("archLegendBar");if(me==="jali"&&Fe==="realistic_gate"&&dt!=="nesting"){if(b&&b.classList.add("hidden"),y){y.classList.remove("hidden");const g={matte_black:"Matte Black Powder Coat",royal_gold:"Royal Gold / Antique Brass",corten_rust:"Corten Weathered Rust Steel",brushed_stainless:"Satin Stainless 304",champagne_bronze:"Champagne Bronze"},c={warm_white:"Warm 3000K LED",cool_white:"Cool 6000K LED",amber_gold:"Sunset Amber LED",none:"Off (Daylight)"},d=k.gateType==="wall_panel",N=d?"Wall Mount Standoffs":`${k.hasFrameTube!==!1?n?'2" Box Tube':"50mm Box Tube":"Frameless Plate"}`,H=d?n?'1/4" Stainless Standoff Screws':"M8 Stainless Standoff Screws":`${k.hasHinges!==!1?"Bullet Hinges":""}${k.hasPullHandle!==!1?" + Bar Pull":""}${k.hasLockBox!==!1?" + Mortise Lock":""}`.replace(/^\s*\+\s*/,"")||"Custom Welded",D=document.getElementById("archLegendFinish"),G=document.getElementById("archLegendLight"),B=document.getElementById("archLegendFrame"),P=document.getElementById("archLegendHardware");D&&(D.textContent=g[k.finishMaterial||"matte_black"]||"Matte Black"),G&&(G.textContent=c[k.backlightColor||"warm_white"]||"Warm 3000K"),B&&(B.textContent=N),P&&(P.textContent=H)}}else b&&b.classList.remove("hidden"),y&&y.classList.add("hidden");Te(),ko.textContent=n?`${o.totalCutLengthInches.toFixed(2)} in`:`${o.totalCutLengthMm.toFixed(1)} mm`,Bo.textContent=o.pierceCount.toString(),wo.textContent=n?`${o.theoreticalWeightLbs.toFixed(2)} lbs`:`${o.theoreticalWeightKg.toFixed(2)} kg`,Eo.textContent=n?`${o.boundingBoxWidthInches.toFixed(2)}" × ${o.boundingBoxHeightInches.toFixed(2)}"`:`${o.boundingBoxWidthMm.toFixed(0)} × ${o.boundingBoxHeightMm.toFixed(0)} mm`;const f=a.currency==="USD";Ci&&(Ci.style.display=ve>1||dt==="nesting"||qe==="cart"?"grid":"none"),Ii&&(Ii.textContent=`${i.sheetsRequired} Sheet${i.sheetsRequired>1?"s":""}`),Si&&(Si.textContent=`${i.sheetUtilizationPercent}%`),Mi&&(Mi.textContent=f?`${(i.totalSkeletonScrapMassKg*2.20462).toFixed(1)} lbs`:`${i.totalSkeletonScrapMassKg.toFixed(1)} kg`),vi&&(vi.textContent=f?`${(i.remnantWidthMm/25.4).toFixed(1)}" × ${(i.remnantLengthMm/25.4).toFixed(1)}"`:`${i.remnantWidthMm} × ${i.remnantLengthMm} mm`);const S=document.getElementById("gateFoldedSummary");if(S){const g={matte_black:"Matte Black",royal_gold:"Royal Gold",corten_rust:"Corten Rust",brushed_stainless:"Stainless 304",champagne_bronze:"Bronze"},c={warm_white:"Warm 3000K",cool_white:"Cool 6000K",amber_gold:"Amber",none:"Light Off"},d={single_swing:"Single Gate",double_swing:"Double Swing",wall_panel:"Wall Jali"},N=g[k.finishMaterial||"matte_black"]||"Matte Black",H=c[k.backlightColor||"warm_white"]||"Warm 3000K",D=d[k.gateType||"single_swing"]||"Single Gate";S.textContent=`${N} • ${H} • ${D}`}const M=document.getElementById("bottomHudFoldedSummary");if(M){const g=n?`${o.totalCutLengthInches.toFixed(2)} in`:`${o.totalCutLengthMm.toFixed(1)} mm`,c=n?`${o.theoreticalWeightLbs.toFixed(2)} lbs`:`${o.theoreticalWeightKg.toFixed(2)} kg`,d=n?`${o.boundingBoxWidthInches.toFixed(2)}" × ${o.boundingBoxHeightInches.toFixed(2)}"`:`${o.boundingBoxWidthMm.toFixed(0)} × ${o.boundingBoxHeightMm.toFixed(0)} mm`;M.textContent=`${g} • ${o.pierceCount} Pierces • ${c} • ${d}`}ht(),Uo(e);const T=a.currency==="INR"?"₹":"$";To.textContent=a.finalOrderTotal.toFixed(2),Lo.textContent=`(${T}${a.finalUnitPrice.toFixed(2)} / unit)`,Ut&&(a.quotingMode==="job_work"?Ut.textContent=f?"LABOR ONLY (CUSTOMER STOCK)":"JOB WORK (LABOUR ONLY)":a.quotingMode==="sqft_jali"?Ut.textContent=f?"ARCHITECTURAL PANELS":"ARCHITECTURAL (₹/SQ.FT)":Ut.textContent=f?"TURNKEY (PLATE + CUT)":"WITH MATERIAL (SUPPLY & CUT)"),jt.textContent=`${T}${a.unitMaterialCost.toFixed(2)}`,Do.textContent=`${T}${a.unitCutCost.toFixed(2)}`,Fo.textContent=`${T}${a.unitPierceCost.toFixed(2)}`,ki&&(ki.textContent=`${T}${a.unitHandlingCost.toFixed(2)}`),Bi&&(Bi.textContent=`${T}${a.unitSecondaryCost.toFixed(2)}`);const L=document.getElementById("rowMaterial"),$=document.getElementById("rowCut"),v=document.getElementById("rowPierce"),_=document.getElementById("rowHandling"),A=document.getElementById("rowSecondary");if(a.quotingMode==="job_work"){if(L){L.style.display="flex";const g=L.querySelector("span:first-child");g&&(g.textContent="Raw Material:"),jt.textContent=f?"$0.00 (Customer Sheet)":"₹0.00 (Customer Plate)"}$&&($.style.display="flex"),v&&(v.style.display="flex"),_&&(_.style.display="flex")}else if(a.quotingMode==="sqft_jali"){if(L){L.style.display="flex";const g=L.querySelector("span:first-child");g&&(g.textContent=f?"Fabrication Rate:":"Jali Fabrication (Sq.Ft):"),jt.textContent=`${T}${a.unitMaterialCost.toFixed(2)}`}$&&($.style.display="none"),v&&(v.style.display="none"),_&&(_.style.display="none")}else{if(L){L.style.display="flex";const g=L.querySelector("span:first-child");g&&(g.textContent=f?"Raw Stock Material:":"Raw Material (Steel):"),jt.textContent=`${T}${a.unitMaterialCost.toFixed(2)}`}$&&($.style.display="flex"),v&&(v.style.display="flex"),_&&(_.style.display="none")}A&&(A.style.display=a.unitSecondaryCost>0?"flex":"none"),Ao.textContent=`-${a.discountPercent}%`,Ro.textContent=`${T}${a.gstAmount.toFixed(2)}`,No.textContent=`${T}${a.finalTotalWithGst.toFixed(2)}`,Dt&&(f?C.salesTaxExempt?Dt.textContent="Sales Tax (Tax-Exempt):":Dt.textContent=`Sales Tax (${C.gstPercent||0}%):`:C.isInterstateSale?Dt.textContent="IGST (18%):":Dt.textContent="GST (CGST 9% + SGST 9%):");const E=document.querySelector(".breakdown-row.total-inc-gst span:first-child");if(E&&(E.textContent=f?"Total (Inc. Tax):":"Total (Inc. GST):"),zt)if(zt.style.display="block",f){const g=C.paymentTerms||"Net 30, Credit Card, ACH",c=a.naicsCode||"NAICS 332813 (Laser Cutting & Fabrication)";zt.textContent=`${c} • ${g}`}else zt.textContent=a.hsnSacCode;a.minimumOrderFloorApplied?(Tn.classList.remove("hidden"),Tn.innerHTML=`⚠️ <strong>Minimum Order Floor Active</strong><br><span style="font-size:0.7rem;opacity:0.95;">Calc Subtotal: ${T}${a.orderTotalBeforeMin.toFixed(2)} → Billed Min Floor: ${T}${a.finalOrderTotal.toFixed(2)}</span>`):Tn.classList.add("hidden")}function Fn(n,t){if(Ze=n,Mt=t!==void 0?t:null,!Pt&&dt==="part"){const o=We(),e=[];Ze!==null&&e.push(Ze),Mt!==null&&!e.includes(Mt)&&e.push(Mt),he.innerHTML=on(o,{showCutOrder:De,viewStyle:me==="jali"?Fe:"cam_toolpath",jaliParams:me==="jali"?k:void 0,hideCamBadges:me==="jali"&&(Fe==="realistic_gate"||!De),dfmIssues:tt==null?void 0:tt.issues,highlightedHoleIndex:Ze,highlightedHoleIndices:e}),Te(),Ri()}kt.querySelectorAll(".dfm-pill").forEach(o=>{const e=o.getAttribute("data-hole-index"),i=o.getAttribute("data-related-hole-index"),a=e!==null?parseInt(e,10):null,s=i!==null?parseInt(i,10):null;let r=!1;n!==null&&((a===n||s===n)&&(r=!0),t!=null&&(a===t||s===t)&&(r=!0)),r?o.classList.add("is-active-target"):o.classList.remove("is-active-target")})}function Ri(){he.querySelectorAll("[data-hole-index]").forEach(n=>{const t=n.getAttribute("data-hole-index");if(t!==null){const o=parseInt(t,10);n.addEventListener("mouseenter",()=>{kt.querySelectorAll(`.dfm-pill[data-hole-index="${o}"], .dfm-pill[data-related-hole-index="${o}"]`).forEach(e=>{e.classList.add("is-active-target"),e.scrollIntoView({behavior:"smooth",block:"nearest"})})}),n.addEventListener("mouseleave",()=>{kt.querySelectorAll(`.dfm-pill[data-hole-index="${o}"], .dfm-pill[data-related-hole-index="${o}"]`).forEach(e=>{e.classList.remove("is-active-target")})})}})}function Uo(n){if(kt.innerHTML="",!(n.isManufacturable&&!n.hasWarnings)){if(n.issues.length>2){const t=document.createElement("div");t.className="dfm-scroll-header",t.innerHTML=`
      <span class="dfm-scroll-title">
        <span class="dfm-scroll-badge">${n.issues.length} DFM Findings</span>
        ${n.isManufacturable?"Advisories to prevent heat burn":"Critical cut issues require design fix"}
      </span>
      <span class="dfm-scroll-hint">↕ Scroll to inspect all holes</span>
    `,kt.appendChild(t)}for(const t of n.issues){const o=document.createElement("div"),e=typeof t.holeIndex=="number",i=typeof t.relatedHoleIndex=="number";o.className=`dfm-pill ${t.severity==="error"?"dfm-error":"dfm-warning"} ${e?"dfm-pill-hole":""}`,e&&(o.setAttribute("data-hole-index",t.holeIndex.toString()),i&&o.setAttribute("data-related-hole-index",t.relatedHoleIndex.toString()),o.title=`Click or hover to highlight Hole #${t.holeIndex+1}${i?` & #${t.relatedHoleIndex+1}`:""} on the drawing`),o.innerHTML=`
      <span class="dfm-icon">${t.severity==="error"?"⚠️":"ℹ️"}</span>
      <span class="dfm-text">${t.message}</span>
      ${e?`<span class="dfm-locate-chip" title="Pinpoint on diagram">📍 Hole #${t.holeIndex+1}${i?` & #${t.relatedHoleIndex+1}`:""}</span>`:""}
    `,e&&(o.addEventListener("mouseenter",()=>{Fn(t.holeIndex,t.relatedHoleIndex)}),o.addEventListener("mouseleave",()=>{Fn(null)}),o.addEventListener("click",()=>{var a,s;De||(De=!0,(a=document.getElementById("btnToggleCamBadges"))==null||a.classList.add("active"),(s=document.getElementById("legendBadgeToggle"))==null||s.classList.add("active")),Fn(t.holeIndex,t.relatedHoleIndex)})),kt.appendChild(o)}}}function Ni(){_t.innerHTML="";for(const n of Ve){const t=document.createElement("option");t.value=n.id,t.textContent=n.name,_t.appendChild(t)}_t.value=q.id,Hi()}function Hi(){vt.innerHTML="";for(let n=0;n<q.gauges.length;n++){const t=q.gauges[n],o=document.createElement("option");o.value=n.toString(),o.textContent=t.gaugeName,vt.appendChild(o)}vt.selectedIndex=Math.min(3,q.gauges.length-1),z=q.gauges[vt.selectedIndex]}function jo(){Ln.innerHTML="";for(const n of Bt){const t=document.createElement("option");t.value=n.id,t.textContent=n.name,Ln.appendChild(t)}Ln.value=C.selectedCAMProfileId,zo()}function zo(){const n=Bt.find(t=>t.id===C.selectedCAMProfileId)||Bt[0];Ho.textContent=n.name.split(" ")[0].trim()}function Qo(){if(!pt)return;pt.innerHTML="";const n=C.currency==="USD"?tn:Et;for(const o of n){const e=document.createElement("option");e.value=o.id,e.textContent=o.name,pt.appendChild(e)}ke=n.find(o=>o.id===ke.id)||n[0],pt.value=ke.id}function Nn(n="USD",t=!1){var j;const o=n==="USD",e=document.getElementById("btnCurrencyINR"),i=document.getElementById("btnCurrencyUSD");o?(i==null||i.classList.add("active"),e==null||e.classList.remove("active")):(e==null||e.classList.add("active"),i==null||i.classList.remove("active")),C=Di(n,o?Ot:nn),Ve=Fi(n,o?_n:Ti),q=Ve[0],z=q.gauges[o?3:4]||q.gauges[0],Zt(o?"inch":"mm"),en(),ke=o?tn[0]:Et[0],o?Ke=ct.find(ce=>ce.standard==="ASME"&&ce.nominalBore==='2"')||ct[ct.length-1]:Ke=ct[2];const a=document.getElementById("brandTitle"),s=document.getElementById("brandSubtitle");a&&(a.textContent=o?"US CNC LASER CPQ":"INDIAN CNC LASER CPQ"),s&&(s.textContent=o?"Precision CAD/CAM & Quoting":"WhatsApp-First Quoting & CypCut DXF Engine");const r=document.getElementById("modeJobWork"),m=document.getElementById("modeWithMaterial"),h=document.getElementById("modeSqFtJali");r&&(r.innerHTML=o?"🔧 Labor Only":"🔧 Job Work"),m&&(m.innerHTML="📦 Turnkey"),h&&(h.innerHTML=o?"🏛️ Arch Panels":"🏛️ Architectural",wt==="industrial"?h.style.display="none":h.style.display="");const l=document.getElementById("currencySym"),u=document.getElementById("adminCurrencySym");l&&(l.textContent=o?"$":"₹"),u&&(u.textContent=o?"$":"₹");const b=document.getElementById("customerPhoneLabel"),y=document.getElementById("phoneCountryPrefix"),f=document.getElementById("customerPhoneInput"),S=document.getElementById("phoneHint"),M=document.getElementById("phoneModeBadge");b&&(b.textContent=o?"Customer Email / Phone":"Customer WhatsApp"),y&&(y.textContent=o?"+1":"+91"),f&&(f.placeholder=o?"estimator@client.com or (555) 123-4567":"10-digit mobile (e.g. 98230 12345)"),S&&(S.textContent=o?"Enter email to send quote, or copy directly to clipboard":"Enter mobile to open direct chat, or leave blank to choose contact"),M&&(M.textContent=o?"Email / RFQ":"Direct Send");const T=document.getElementById("shareWhatsAppBtn"),L=document.getElementById("shareBtnIcon"),$=document.getElementById("shareBtnText"),v=document.getElementById("usSingleShareGroup"),_=document.getElementById("printInvoiceText"),A=document.getElementById("downloadDxfText");T&&(T.style.display=o?"none":"flex",o?(T.classList.remove("btn-whatsapp"),T.classList.add("btn-email")):(T.classList.remove("btn-email"),T.classList.add("btn-whatsapp"))),v&&(v.style.display=o?"flex":"none"),L&&(L.textContent=o?"✉️":"💬"),$&&($.textContent=o?"Copy Quote for Email":"Share Quote on WhatsApp"),_&&(_.textContent=o?"Commercial Quote (PDF)":"Tax Invoice & QR");const E=((j=Bt.find(ce=>ce.id===C.selectedCAMProfileId))==null?void 0:j.name.split(" ")[0])||(o?"Trumpf":"CypCut");A&&(A.textContent=`${E} DXF`);const x=document.getElementById("shareCartWhatsAppBtn"),p=document.getElementById("shareCartBtnIcon"),g=document.getElementById("shareCartBtnText"),c=document.getElementById("usCartShareGroup"),d=document.getElementById("printCartInvoiceText");x&&(x.style.display=o?"none":"flex",o?(x.classList.remove("btn-whatsapp"),x.classList.add("btn-email")):(x.classList.remove("btn-email"),x.classList.add("btn-whatsapp"))),c&&(c.style.display=o?"flex":"none"),p&&(p.textContent=o?"✉️":"💬"),g&&(g.textContent=o?"Copy Project Quote for Email":"Share Project Quote on WhatsApp"),d&&(d.textContent=o?"Commercial Quote (PDF)":"Tax Invoice & QR");const N=document.getElementById("groupAdminGstin"),H=document.getElementById("groupAdminUpi"),D=document.getElementById("groupAdminTaxType"),G=document.getElementById("groupAdminUsDetails"),B=document.getElementById("labelSheetLoading"),P=document.getElementById("labelPricePerKg"),R=document.getElementById("labelPricePerMeterCut"),O=document.getElementById("labelPricePerPierce"),K=document.getElementById("labelAdminTax");N&&(N.style.display=o?"none":"block"),H&&(H.style.display=o?"none":"block"),D&&(D.style.display=o?"none":"block"),G&&(G.style.display=o?"block":"none"),B&&(B.textContent=o?"Handling & Loading Fee ($/sheet)":"Plate Loading / Handling Fee (₹/sheet)"),P&&(P.textContent=o?"Material Rate ($/sq.in)":"Material Rate (₹/kg)"),R&&(R.textContent=o?"Cut Rate ($/lin.in)":"Cut Rate (₹/meter)"),O&&(O.textContent=o?"Pierce Fee ($/pt)":"Pierce Fee (₹/pt)"),K&&(K.textContent=o?"Sales Tax (%)":"GST / Tax (%)"),Ni(),Qo(),jo(),Wt(),lt(),et(),F(),t||ue("🇺🇸 US Imperial Mode Active (USD $, Inches, A36/SS304/AL6061, Trumpf DXF)")}function lt(){nt.innerHTML="",me==="baseplate"?qo():me==="flange"?Yo():me==="gusset"?Xo():me==="jali"?_i():me==="bracket"?Ko():me==="disc"&&Jo()}function qo(){const n=Be==="inch",t=n?"in":"mm";nt.innerHTML=`
    <div class="preset-pills-row">
      <button class="preset-pill" data-len="${n?6:150}" data-wid="${n?6:150}">${n?'6×6"':"150×150"}</button>
      <button class="preset-pill" data-len="${n?8:200}" data-wid="${n?8:200}">${n?'8×8"':"200×200"}</button>
      <button class="preset-pill" data-len="${n?10:250}" data-wid="${n?8:200}">${n?'10×8"':"250×200 Std"}</button>
      <button class="preset-pill" data-len="${n?12:300}" data-wid="${n?12:300}">${n?'12×12"':"300×300 PEB"}</button>
    </div>

    <div class="form-group">
      <label class="form-label">Plate Length (${t}): <strong id="valBpLen">${w.length}</strong></label>
      <input type="range" id="bpLength" min="${n?2:50}" max="${n?36:900}" value="${w.length}" step="${n?.25:5}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Plate Width (${t}): <strong id="valBpWid">${w.width}</strong></label>
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
        <label class="form-label">Corner Size (${t})</label>
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
        <label class="form-label">Bolt Hole Dia (${t})</label>
        <input type="number" id="bpHoleDia" class="form-input" value="${w.holeDiameter}" min="${n?.2:4}" max="${n?2.5:50}" step="${n?.05:1}" />
      </div>
    </div>

    <div class="form-row" id="slotDimsRow" style="${w.holeType==="slotted"?"display: flex;":"display: none;"}">
      <div class="form-group">
        <label class="form-label">Slot Length (${t})</label>
        <input type="number" id="bpSlotLen" class="form-input" value="${w.slotLength||(n?1.5:35)}" min="${n?.5:10}" max="${n?5:100}" step="${n?.1:1}" />
      </div>
      <div class="form-group">
        <label class="form-label">Slot Width (${t})</label>
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
      <label class="form-label">Center Hole Diameter (${t}): <strong id="valCenterDia">${w.centerCutoutDiameter||50}</strong></label>
      <input type="range" id="bpCenterDia" min="${n?.5:15}" max="${n?12:300}" value="${w.centerCutoutDiameter||50}" class="form-slider" />
    </div>
  `;const o=document.getElementById("bpLength"),e=document.getElementById("bpWidth"),i=document.getElementById("valBpLen"),a=document.getElementById("valBpWid");o.oninput=()=>{w.length=parseFloat(o.value),i.textContent=o.value,F()},e.oninput=()=>{w.width=parseFloat(e.value),a.textContent=e.value,F()};const s=document.getElementById("bpCornerType"),r=document.getElementById("bpCornerSize");s.onchange=()=>{w.cornerType=s.value,F()},r.oninput=()=>{w.cornerSize=parseFloat(r.value)||0,F()};const m=document.getElementById("bpHoleType"),h=document.getElementById("bpHoleDia"),l=document.getElementById("slotDimsRow");m.onchange=()=>{w.holeType=m.value,l.style.display=m.value==="slotted"?"flex":"none",F()},h.oninput=()=>{w.holeDiameter=parseFloat(h.value)||12,F()};const u=document.getElementById("bpSlotLen"),b=document.getElementById("bpSlotWid");u&&b&&(u.oninput=()=>{w.slotLength=parseFloat(u.value)||30,F()},b.oninput=()=>{w.slotWidth=parseFloat(b.value)||15,F()});const y=document.getElementById("bpCenterType"),f=document.getElementById("centerCutoutDiaGroup"),S=document.getElementById("bpCenterDia"),M=document.getElementById("valCenterDia");y.onchange=()=>{w.centerCutoutType=y.value,f.style.display=y.value==="round"?"block":"none",F()},S&&(S.oninput=()=>{w.centerCutoutDiameter=parseFloat(S.value),M.textContent=S.value,F()}),nt.querySelectorAll(".preset-pill").forEach(T=>{T.onclick=()=>{const L=parseFloat(T.getAttribute("data-len")),$=parseFloat(T.getAttribute("data-wid"));w.length=L,w.width=$,o.value=L.toString(),e.value=$.toString(),i.textContent=L.toString(),a.textContent=$.toString(),F()}})}function Yo(){nt.innerHTML=`
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
  `;const n=document.getElementById("flangeStandardSelect"),t=document.getElementById("flangePresetSelect"),o=document.getElementById("flangeSpecsBox"),e=a=>{t.innerHTML="";const s=ct.filter(r=>a==="ALL"||r.standard===a);for(let r=0;r<s.length;r++){const m=s[r],h=document.createElement("option");h.value=m.name,h.textContent=`${m.name} [${m.standard}]`,t.appendChild(h)}t.value=Ke.name,i()},i=()=>{const a=Ke,s=a.units;o.innerHTML=`
      Outer Diameter: <strong>${a.outerDiameter} ${s}</strong> | Inner Bore: <strong>${a.innerBore} ${s}</strong><br>
      PCD: <strong>${a.pitchCircleDiameter} ${s}</strong> | Bolts: <strong>${a.boltCount} × ⌀${a.boltDiameter} ${s}</strong>
    `};n.onchange=()=>{e(n.value)},t.onchange=()=>{const a=ct.find(s=>s.name===t.value);a&&(Ke=a,Zt(a.units),en(),i(),F())},e("ALL")}function Xo(){const n=Be==="inch",t=n?"in":"mm";nt.innerHTML=`
    <div class="preset-pills-row">
      <button class="preset-pill" data-w="${n?4:100}" data-h="${n?4:100}">100×100</button>
      <button class="preset-pill" data-w="${n?6:150}" data-h="${n?6:150}">150×150</button>
      <button class="preset-pill" data-w="${n?8:200}" data-h="${n?8:200}">200×200</button>
    </div>

    <div class="form-group">
      <label class="form-label">Base Width (${t}): <strong id="valGussetW">${te.baseWidth}</strong></label>
      <input type="range" id="gussetBaseW" min="${n?2:50}" max="${n?24:600}" value="${te.baseWidth}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Height (${t}): <strong id="valGussetH">${te.height}</strong></label>
      <input type="range" id="gussetHeight" min="${n?2:50}" max="${n?24:600}" value="${te.height}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">45° Corner Weld Snipe (Cope)</label>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <input type="checkbox" id="gussetSnipeCheck" ${te.hasWeldSnipe?"checked":""} class="form-checkbox" />
        <span style="font-size: 0.78rem; color: #cbd5e1;">Clear fillet weld bead at corner</span>
      </div>
    </div>

    <div class="form-group" id="snipeSizeGroup" style="${te.hasWeldSnipe?"display: block;":"display: none;"}">
      <label class="form-label">Snipe Size (${t}): <strong id="valSnipeSize">${te.snipeSize}</strong></label>
      <input type="range" id="gussetSnipeSize" min="${n?.25:10}" max="${n?3:75}" value="${te.snipeSize}" class="form-slider" />
    </div>
  `;const o=document.getElementById("gussetBaseW"),e=document.getElementById("gussetHeight"),i=document.getElementById("valGussetW"),a=document.getElementById("valGussetH");o.oninput=()=>{te.baseWidth=parseFloat(o.value),i.textContent=o.value,F()},e.oninput=()=>{te.height=parseFloat(e.value),a.textContent=e.value,F()};const s=document.getElementById("gussetSnipeCheck"),r=document.getElementById("snipeSizeGroup"),m=document.getElementById("gussetSnipeSize"),h=document.getElementById("valSnipeSize");s.onchange=()=>{te.hasWeldSnipe=s.checked,r.style.display=s.checked?"block":"none",F()},m.oninput=()=>{te.snipeSize=parseFloat(m.value),h.textContent=m.value,F()},nt.querySelectorAll(".preset-pill").forEach(l=>{l.onclick=()=>{const u=parseFloat(l.getAttribute("data-w")),b=parseFloat(l.getAttribute("data-h"));te.baseWidth=u,te.height=b,o.value=u.toString(),e.value=b.toString(),i.textContent=u.toString(),a.textContent=b.toString(),F()}})}function _i(){const n=Be==="inch",t=n?"in":"mm";nt.innerHTML=`
    <div class="preset-pills-row" style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.85rem;">
      <button class="preset-pill jali-preset" data-w="${n?36:900}" data-h="${n?84:2100}" data-type="single_swing" data-frame="true" data-kick="true" data-kickh="${n?12:300}" data-pat="islamic_star" data-finish="matte_black">🏠 Main Gate 3×7 ft</button>
      <button class="preset-pill jali-preset" data-w="${n?36:900}" data-h="${n?84:2100}" data-type="double_swing" data-frame="true" data-kick="true" data-kickh="${n?14:350}" data-pat="islamic_star" data-finish="royal_gold">🚪 Double Gate 6×7 ft</button>
      <button class="preset-pill jali-preset" data-w="${n?48:1200}" data-h="${n?36:900}" data-type="single_swing" data-frame="true" data-kick="false" data-kickh="0" data-pat="diamond_lattice" data-finish="matte_black">🪟 Balcony 4×3 ft</button>
      <button class="preset-pill jali-preset" data-w="${n?24:600}" data-h="${n?48:1200}" data-type="wall_panel" data-frame="false" data-kick="false" data-kickh="0" data-pat="floral_mandala" data-finish="royal_gold">⛩️ Mandir 2×4 ft</button>
      <button class="preset-pill jali-preset" data-w="${n?48:1200}" data-h="${n?96:2400}" data-type="wall_panel" data-frame="false" data-kick="false" data-kickh="0" data-pat="voronoi_matrix" data-finish="corten_rust">🏢 Facade 4×8 ft</button>
    </div>

    <div class="form-group">
      <label class="form-label">Panel Width (${t}): <strong id="valJaliW">${k.width}</strong></label>
      <input type="range" id="jaliWidth" min="${n?12:300}" max="${n?60:1500}" value="${k.width}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Panel Height (${t}): <strong id="valJaliH">${k.height}</strong></label>
      <input type="range" id="jaliHeight" min="${n?24:600}" max="${n?120:3e3}" value="${k.height}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Architectural Pattern Style</label>
      <select id="jaliPattern" class="form-select">
        <option value="islamic_star" ${k.patternType==="islamic_star"?"selected":""}>Moroccan / Islamic 8-Star & Octagram</option>
        <option value="floral_mandala" ${k.patternType==="floral_mandala"?"selected":""}>Traditional Lotus / Floral Jaali</option>
        <option value="tree_of_life" ${k.patternType==="tree_of_life"?"selected":""}>Tree of Life / Botanical Foliage</option>
        <option value="diamond_lattice" ${k.patternType==="diamond_lattice"?"selected":""}>Diamond Lattice Grill</option>
        <option value="honeycomb" ${k.patternType==="honeycomb"?"selected":""}>Modern Hexagonal Honeycomb</option>
        <option value="modern_slotted" ${k.patternType==="modern_slotted"?"selected":""}>Staggered Vertical Louvers</option>
        <option value="chevron_herringbone" ${k.patternType==="chevron_herringbone"?"selected":""}>Modern Chevron / Herringbone</option>
        <option value="voronoi_matrix" ${k.patternType==="voronoi_matrix"?"selected":""}>Parametric Organic Voronoi</option>
      </select>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Frame Border Margin (${t})</label>
        <input type="number" id="jaliBorder" class="form-input" value="${k.borderMarginMm}" min="${n?.5:15}" max="${n?4:100}" step="${n?.25:1}" />
      </div>
      <div class="form-group">
        <label class="form-label">Grid Columns</label>
        <input type="number" id="jaliCols" class="form-input" value="${k.gridColumns}" min="2" max="12" />
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Grid Rows</label>
      <input type="number" id="jaliRows" class="form-input" value="${k.gridRows}" min="2" max="20" />
    </div>

    <!-- Gate Structure & Hardware Accessories -->
    <div class="jali-hardware-box">
      <div style="font-size: 0.74rem; font-weight: 700; color: #38bdf8; text-transform: uppercase; margin-bottom: 0.2rem; display: flex; justify-content: space-between;">
        <span>🚪 Gate Structure & Hardware</span>
        <span style="font-size: 0.68rem; color: #94a3b8;">Fabrication Ready</span>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliFrameCheck" class="form-checkbox" ${k.hasFrameTube!==!1?"checked":""} />
          <span>${n?'2" Structural Box Tube Frame':"50mm Structural Box Tube Frame"}</span>
        </label>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliKickCheck" class="form-checkbox" ${k.hasKickPlate?"checked":""} />
          <span>Solid Bottom Kickplate</span>
        </label>
      </div>

      <div id="kickHeightRow" class="form-group" style="margin-top: 0.25rem; display: ${k.hasKickPlate?"block":"none"};">
        <label class="form-label" style="font-size: 0.7rem;">Kickplate Height (${t}): <strong id="valKickH">${k.kickPlateHeightMm||(n?12:300)}</strong></label>
        <input type="range" id="jaliKickHeight" min="${n?6:150}" max="${n?24:600}" value="${k.kickPlateHeightMm||(n?12:300)}" step="${n?.5:10}" class="form-slider" />
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliHandleCheck" class="form-checkbox" ${k.hasPullHandle!==!1?"checked":""} />
          <span>Modern Architectural Bar Pull Handle</span>
        </label>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliLockCheck" class="form-checkbox" ${k.hasLockBox!==!1?"checked":""} />
          <span>Mortise Lock Box & Latch</span>
        </label>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliHingeCheck" class="form-checkbox" ${k.hasHinges!==!1?"checked":""} />
          <span>Heavy-Duty Bullet Barrel Hinges</span>
        </label>
      </div>

      <div class="jali-check-row">
        <label class="jali-check-label">
          <input type="checkbox" id="jaliMountHolesCheck" class="form-checkbox" ${k.hasMountingHoles?"checked":""} />
          <span>Perimeter Mounting Standoff Holes</span>
        </label>
      </div>
    </div>
  `;const o=document.getElementById("jaliWidth"),e=document.getElementById("jaliHeight"),i=document.getElementById("valJaliW"),a=document.getElementById("valJaliH");o.oninput=()=>{k.width=parseFloat(o.value),i.textContent=o.value,F()},e.oninput=()=>{k.height=parseFloat(e.value),a.textContent=e.value,F()};const s=document.getElementById("jaliPattern");s.onchange=()=>{k.patternType=s.value,F()};const r=document.getElementById("jaliBorder"),m=document.getElementById("jaliCols"),h=document.getElementById("jaliRows");r.oninput=()=>{k.borderMarginMm=parseFloat(r.value)||(n?1.5:30),F()},m.oninput=()=>{k.gridColumns=parseInt(m.value,10)||4,F()},h&&(h.oninput=()=>{k.gridRows=parseInt(h.value,10)||6,F()});const l=document.getElementById("jaliFrameCheck");l&&(l.onchange=()=>{k.hasFrameTube=l.checked,F()});const u=document.getElementById("jaliKickCheck"),b=document.getElementById("kickHeightRow"),y=document.getElementById("jaliKickHeight"),f=document.getElementById("valKickH");u&&(u.onchange=()=>{k.hasKickPlate=u.checked,b&&(b.style.display=u.checked?"block":"none"),F()}),y&&(y.oninput=()=>{k.kickPlateHeightMm=parseFloat(y.value),f&&(f.textContent=y.value),F()});const S=document.getElementById("jaliHandleCheck");S&&(S.onchange=()=>{k.hasPullHandle=S.checked,F()});const M=document.getElementById("jaliLockCheck");M&&(M.onchange=()=>{k.hasLockBox=M.checked,F()});const T=document.getElementById("jaliHingeCheck");T&&(T.onchange=()=>{k.hasHinges=T.checked,F()});const L=document.getElementById("jaliMountHolesCheck");L&&(L.onchange=()=>{k.hasMountingHoles=L.checked,F()}),nt.querySelectorAll(".jali-preset").forEach($=>{$.onclick=()=>{const v=parseFloat($.getAttribute("data-w")),_=parseFloat($.getAttribute("data-h")),A=$.getAttribute("data-type"),E=$.getAttribute("data-frame")==="true",x=$.getAttribute("data-kick")==="true",p=parseFloat($.getAttribute("data-kickh")||"0"),g=$.getAttribute("data-pat"),c=$.getAttribute("data-finish");k.width=v,k.height=_,A&&(k.gateType=A),k.hasFrameTube=E,k.hasKickPlate=x,p&&(k.kickPlateHeightMm=p),g&&(k.patternType=g),c&&(k.finishMaterial=c),_i(),F()}})}function Ko(){const n=Be==="inch",t=n?"in":"mm";nt.innerHTML=`
    <div class="form-group">
      <label class="form-label">Base Width (${t}): <strong id="valBrW">${Y.baseWidth}</strong></label>
      <input type="range" id="brWidth" min="${n?2:50}" max="${n?16:400}" value="${Y.baseWidth}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Height (${t}): <strong id="valBrH">${Y.height}</strong></label>
      <input type="range" id="brHeight" min="${n?2:50}" max="${n?16:400}" value="${Y.height}" class="form-slider" />
    </div>
  `;const o=document.getElementById("brWidth"),e=document.getElementById("brHeight"),i=document.getElementById("valBrW"),a=document.getElementById("valBrH");o.oninput=()=>{Y.baseWidth=parseFloat(o.value),i.textContent=o.value,F()},e.oninput=()=>{Y.height=parseFloat(e.value),a.textContent=e.value,F()}}function Jo(){const n=Be==="inch",t=n?"in":"mm";nt.innerHTML=`
    <div class="form-group">
      <label class="form-label">Outer Diameter (${t}): <strong id="valDiscOD">${ie.outerDiameter}</strong></label>
      <input type="range" id="discOD" min="${n?2:50}" max="${n?24:600}" value="${ie.outerDiameter}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Inner Bore Diameter (${t}): <strong id="valDiscID">${ie.innerDiameter}</strong></label>
      <input type="range" id="discID" min="0" max="${n?Math.max(.5,ie.outerDiameter-.5):Math.max(10,ie.outerDiameter-10)}" value="${ie.innerDiameter}" step="${n?.1:1}" class="form-slider" />
    </div>
  `;const o=document.getElementById("discOD"),e=document.getElementById("discID"),i=document.getElementById("valDiscOD"),a=document.getElementById("valDiscID");o.oninput=()=>{ie.outerDiameter=parseFloat(o.value),i.textContent=o.value,e.max=(n?Math.max(.5,ie.outerDiameter-.5):Math.max(10,ie.outerDiameter-10)).toString(),F()},e.oninput=()=>{ie.innerDiameter=parseFloat(e.value),a.textContent=e.value,F()}}function Zt(n){if(Be===n)return;const t=Be;Be=n,n==="inch"&&t==="mm"?(w.units="inch",w.length=Math.round(w.length/25.4*2)/2||10,w.width=Math.round(w.width/25.4*2)/2||8,w.cornerSize=Math.round(w.cornerSize/25.4*4)/4||.75,w.holeDiameter=Math.round(w.holeDiameter/25.4*16)/16||.75,w.slotLength&&(w.slotLength=Math.round(w.slotLength/25.4*4)/4||1.5),w.slotWidth&&(w.slotWidth=Math.round(w.slotWidth/25.4*16)/16||.75),w.edgeOffsetX=Math.round(w.edgeOffsetX/25.4*4)/4||1.25,w.edgeOffsetY=Math.round(w.edgeOffsetY/25.4*4)/4||1.25,w.centerCutoutDiameter&&(w.centerCutoutDiameter=Math.round(w.centerCutoutDiameter/25.4*2)/2||2.5),w.centerCutoutWidth&&(w.centerCutoutWidth=Math.round(w.centerCutoutWidth/25.4*2)/2||2),w.centerCutoutHeight&&(w.centerCutoutHeight=Math.round(w.centerCutoutHeight/25.4*2)/2||2),te.units="inch",te.baseWidth=Math.round(te.baseWidth/25.4*2)/2||6,te.height=Math.round(te.height/25.4*2)/2||6,te.snipeSize=Math.round(te.snipeSize/25.4*4)/4||1,te.mountingHoleDiameter!==void 0&&(te.mountingHoleDiameter=Math.round(te.mountingHoleDiameter/25.4*16)/16||.5),Y.units="inch",Y.baseWidth=Math.round(Y.baseWidth/25.4*2)/2||5,Y.height=Math.round(Y.height/25.4*2)/2||5,Y.chamferTop=Math.round(Y.chamferTop/25.4*2)/2||3,Y.chamferRight=Math.round(Y.chamferRight/25.4*2)/2||3,Y.baseHoleDiameter=Math.round(Y.baseHoleDiameter/25.4*16)/16||.375,Y.uprightHoleDiameter=Math.round(Y.uprightHoleDiameter/25.4*16)/16||.375,Y.lighteningHoleDiameter!==void 0&&(Y.lighteningHoleDiameter=Math.round(Y.lighteningHoleDiameter/25.4*4)/4||1.5),ie.units="inch",ie.outerDiameter=Math.round(ie.outerDiameter/25.4*2)/2||6,ie.innerDiameter=Math.round(ie.innerDiameter/25.4*2)/2||2,ie.pitchCircleDiameter!==void 0&&(ie.pitchCircleDiameter=Math.round(ie.pitchCircleDiameter/25.4*2)/2||4),ie.boltDiameter!==void 0&&(ie.boltDiameter=Math.round(ie.boltDiameter/25.4*16)/16||.375),k.units="inch",k.width=Math.round(k.width/25.4*2)/2||24,k.height=Math.round(k.height/25.4*2)/2||48,k.borderMarginMm=Math.round(k.borderMarginMm/25.4*4)/4||1.5,k.kickPlateHeightMm&&(k.kickPlateHeightMm=Math.round(k.kickPlateHeightMm/25.4*2)/2||12),k.frameTubeWidthMm=Math.round((k.frameTubeWidthMm||50)/25.4*2)/2||2,k.mountingHoleDiameter=Math.round((k.mountingHoleDiameter||8)/25.4*16)/16||.3125):n==="mm"&&t==="inch"&&(w.units="mm",w.length=Math.abs(w.length*25.4-254)<10?250:Math.round(w.length*25.4),w.width=Math.abs(w.width*25.4-203.2)<10?200:Math.round(w.width*25.4),w.cornerSize=Math.abs(w.cornerSize*25.4-19.05)<3?20:Math.round(w.cornerSize*25.4),w.holeDiameter=Math.abs(w.holeDiameter*25.4-19.05)<3?18:Math.round(w.holeDiameter*25.4),w.slotLength&&(w.slotLength=Math.abs(w.slotLength*25.4-38.1)<5?35:Math.round(w.slotLength*25.4)),w.slotWidth&&(w.slotWidth=Math.abs(w.slotWidth*25.4-19.05)<3?20:Math.round(w.slotWidth*25.4)),w.edgeOffsetX=Math.abs(w.edgeOffsetX*25.4-31.75)<5?35:Math.round(w.edgeOffsetX*25.4),w.edgeOffsetY=Math.abs(w.edgeOffsetY*25.4-31.75)<5?35:Math.round(w.edgeOffsetY*25.4),w.centerCutoutDiameter&&(w.centerCutoutDiameter=Math.abs(w.centerCutoutDiameter*25.4-63.5)<5?60:Math.round(w.centerCutoutDiameter*25.4)),w.centerCutoutWidth&&(w.centerCutoutWidth=Math.round(w.centerCutoutWidth*25.4)),w.centerCutoutHeight&&(w.centerCutoutHeight=Math.round(w.centerCutoutHeight*25.4)),te.units="mm",te.baseWidth=Math.abs(te.baseWidth*25.4-152.4)<10?150:Math.round(te.baseWidth*25.4),te.height=Math.abs(te.height*25.4-152.4)<10?150:Math.round(te.height*25.4),te.snipeSize=Math.abs(te.snipeSize*25.4-25.4)<3?25:Math.round(te.snipeSize*25.4),te.mountingHoleDiameter!==void 0&&(te.mountingHoleDiameter=Math.abs(te.mountingHoleDiameter*25.4-12.7)<3?14:Math.round(te.mountingHoleDiameter*25.4)),Y.units="mm",Y.baseWidth=Math.abs(Y.baseWidth*25.4-127)<10?120:Math.round(Y.baseWidth*25.4),Y.height=Math.abs(Y.height*25.4-127)<10?120:Math.round(Y.height*25.4),Y.chamferTop=Math.abs(Y.chamferTop*25.4-76.2)<10?80:Math.round(Y.chamferTop*25.4),Y.chamferRight=Math.abs(Y.chamferRight*25.4-76.2)<10?80:Math.round(Y.chamferRight*25.4),Y.baseHoleDiameter=Math.abs(Y.baseHoleDiameter*25.4-9.525)<2?10:Math.round(Y.baseHoleDiameter*25.4),Y.uprightHoleDiameter=Math.abs(Y.uprightHoleDiameter*25.4-9.525)<2?10:Math.round(Y.uprightHoleDiameter*25.4),Y.lighteningHoleDiameter!==void 0&&(Y.lighteningHoleDiameter=Math.abs(Y.lighteningHoleDiameter*25.4-38.1)<5?35:Math.round(Y.lighteningHoleDiameter*25.4)),ie.units="mm",ie.outerDiameter=Math.abs(ie.outerDiameter*25.4-152.4)<10?150:Math.round(ie.outerDiameter*25.4),ie.innerDiameter=Math.abs(ie.innerDiameter*25.4-50.8)<5?50:Math.round(ie.innerDiameter*25.4),ie.pitchCircleDiameter!==void 0&&(ie.pitchCircleDiameter=Math.abs(ie.pitchCircleDiameter*25.4-101.6)<5?100:Math.round(ie.pitchCircleDiameter*25.4)),ie.boltDiameter!==void 0&&(ie.boltDiameter=Math.abs(ie.boltDiameter*25.4-9.525)<2?10:Math.round(ie.boltDiameter*25.4)),k.units="mm",k.width=Math.abs(k.width*25.4-609.6)<20?600:Math.round(k.width*25.4),k.height=Math.abs(k.height*25.4-1219.2)<30?1200:Math.round(k.height*25.4),k.borderMarginMm=Math.abs(k.borderMarginMm*25.4-38.1)<5?35:Math.round(k.borderMarginMm*25.4),k.kickPlateHeightMm&&(k.kickPlateHeightMm=Math.abs(k.kickPlateHeightMm*25.4-304.8)<15?300:Math.round(k.kickPlateHeightMm*25.4)),k.frameTubeWidthMm=Math.abs((k.frameTubeWidthMm||2)*25.4-50.8)<5?50:Math.round((k.frameTubeWidthMm||2)*25.4),k.mountingHoleDiameter=Math.abs((k.mountingHoleDiameter||.3125)*25.4-7.9375)<2?8:Math.round((k.mountingHoleDiameter||.3125)*25.4))}function en(){const n=document.getElementById("unitMm"),t=document.getElementById("unitInch");n&&t&&(n.classList.toggle("active",Be==="mm"),t.classList.toggle("active",Be==="inch"))}function Wt(){const n=C.currency==="USD",t=document.getElementById("adminShopName"),o=document.getElementById("adminGstin"),e=document.getElementById("adminUpiId"),i=document.getElementById("adminMinOrder"),a=document.getElementById("adminSheetLoading"),s=document.getElementById("adminPricePerKg"),r=document.getElementById("adminPricePerMeterCut"),m=document.getElementById("adminPricePerPierce"),h=document.getElementById("adminGstPercent"),l=document.getElementById("adminTaxType");t&&(t.value=C.shopName),o&&(o.value=C.shopGstin||""),e&&(e.value=C.upiId||""),i&&(i.value=C.minimumOrderFee.toString()),a&&(a.value=C.sheetLoadingFee.toString()),l&&(l.value=C.isInterstateSale?"interstate":"intrastate");const u=document.getElementById("adminNaics"),b=document.getElementById("adminTaxId"),y=document.getElementById("adminPaymentTerms"),f=document.getElementById("adminLaserPower"),S=document.getElementById("adminHourlyRate"),M=document.getElementById("adminShopEmail"),T=document.getElementById("adminSetupFee"),L=document.getElementById("adminSalesTaxExempt");u&&(u.value=C.naicsCode||"332813 - Laser Cutting & Fabrication"),b&&(b.value=C.einOrTaxId||"34-8910245"),y&&(y.value=C.paymentTerms||"Net 30, Credit Card, ACH"),f&&(f.value=(C.laserPowerKw||4).toString()),S&&(S.value=(C.hourlyLaserRateUsd||185).toString()),M&&(M.value=C.shopEmail||"quotes@midwestprecision.com"),T&&(T.value=(C.setupFeePerJob||25).toString()),L&&(L.checked=!!C.salesTaxExempt),n?(s&&(s.value=(z.pricePerSqInch||.05).toString()),r&&(r.value=(z.pricePerLinearInchCut||.1).toString())):(s&&(s.value=(z.pricePerKg||75).toString()),r&&(r.value=(z.pricePerMeterCut||20).toString())),m&&(m.value=z.pricePerPierce.toString()),h&&(h.value=C.gstPercent.toString());const $=document.getElementById("activeGaugeBadge");if($&&q&&z)if(n){const v=q.id.includes("a36")?"A36":q.id.includes("ss304")?"SS 304":q.id.includes("6061")?"AL 6061":"Steel",_=z.gaugeName.split("(")[0].trim();$.textContent=`${v} • ${_}`}else{const v=q.id.includes("is2062")?"IS 2062":q.id.includes("ss304")?"SS 304":q.id.includes("aluminum")?"AL 6061":q.name.split(" ")[0],_=z.gaugeName.replace("Sheet","").replace("Plate","").trim();$.textContent=`${v} • ${_}`}}function ue(n){const t=document.getElementById("toastNotification");t&&(t.textContent=n,t.classList.remove("hidden"),setTimeout(()=>{t.classList.add("hidden")},2500))}function Vo(n,t){if(n.length===0)return{x:0,y:0};if(t<=0){const s=n[0];return s.type==="line"?s.start:{x:s.center.x+s.radius*Math.cos(s.startAngle),y:s.center.y+s.radius*Math.sin(s.startAngle)}}if(t>=1){const s=n[n.length-1];return s.type==="line"?s.end:{x:s.center.x+s.radius*Math.cos(s.endAngle),y:s.center.y+s.radius*Math.sin(s.endAngle)}}const o=n.map(s=>{if(s.type==="line")return Math.sqrt((s.end.x-s.start.x)**2+(s.end.y-s.start.y)**2);{let r=s.counterClockwise?s.endAngle-s.startAngle:s.startAngle-s.endAngle;for(;r<0;)r+=2*Math.PI;for(;r>2*Math.PI;)r-=2*Math.PI;return s.radius*r}}),e=o.reduce((s,r)=>s+r,0),i=t*e;let a=0;for(let s=0;s<n.length;s++){const r=n[s],m=o[s];if(a+m>=i||s===n.length-1){const h=m>0?(i-a)/m:0;if(r.type==="line")return{x:r.start.x+(r.end.x-r.start.x)*h,y:r.start.y+(r.end.y-r.start.y)*h};{let l=r.counterClockwise?r.endAngle-r.startAngle:r.startAngle-r.endAngle;for(;l<0;)l+=2*Math.PI;for(;l>2*Math.PI;)l-=2*Math.PI;const u=r.counterClockwise?r.startAngle+l*h:r.startAngle-l*h;return{x:r.center.x+r.radius*Math.cos(u),y:r.center.y+r.radius*Math.sin(u)}}}a+=m}return{x:0,y:0}}function Zo(){var r,m,h,l,u,b;if(Pt){Gn();return}dt="part",(r=document.getElementById("btnViewPart"))==null||r.classList.add("active"),(m=document.getElementById("btnViewNesting"))==null||m.classList.remove("active"),me==="jali"&&Fe==="realistic_gate"&&(Fe="cam_toolpath",(h=document.getElementById("btnJaliViewRealistic"))==null||h.classList.remove("active"),(l=document.getElementById("btnJaliViewCam"))==null||l.classList.add("active"),(u=document.getElementById("camLegendBar"))==null||u.classList.remove("hidden"),(b=document.getElementById("archLegendBar"))==null||b.classList.add("hidden"));const n=We();if(ut=Ai(n,z.feedRateMmMin,z.pierceDelaySec),ut.length===0)return;Pt=!0,Lt=0;const t=document.getElementById("simSpeedSelect");St=parseFloat((t==null?void 0:t.value)||"1")||1;const o=document.getElementById("simHudOverlay");o&&o.classList.remove("hidden");const e=document.getElementById("btnSimulateCut");e&&(e.textContent="⏸ Pause",e.classList.add("simulating"));let i=0,a=performance.now();function s(y){if(!Pt)return;const f=ut[Lt];if(!f){ea();return}const S=Math.min(.1,(y-a)/1e3);a=y,i+=S*St;const M=i,T=.5,L=M<T;let $=0;if(!L){const D=Math.max(.01,f.simulatedDurationSec-T);$=Math.min(1,(M-T)/D)}let v=f.piercePoint;!L&&f.segments.length>0&&(v=Vo(f.segments,$)),he.innerHTML=on(n,{showCutOrder:De,dfmIssues:tt==null?void 0:tt.issues,highlightedHoleIndex:Ze,simulationState:{activeStepIndex:f.stepIndex,nozzlePos:v,isPiercing:L,progressRatio:$}}),Te();const _=document.getElementById("simStatusText"),A=document.getElementById("simProgressBar"),E=document.getElementById("simStepText"),x=document.getElementById("simTimeText");_&&(_.innerHTML=L?`<span style="color:#ef4444; font-weight:700;">🔥 PIERCING</span> ${f.label} (${f.layerName})`:`<span style="color:#22c55e; font-weight:700;">⚡ CUTTING</span> ${f.label} (${Math.round($*100)}%)`);const p=ut.reduce((D,G)=>D+G.simulatedDurationSec,0),g=ut.slice(0,Lt).reduce((D,G)=>D+G.simulatedDurationSec,0),c=Math.min(f.simulatedDurationSec,M),d=p>0?(g+c)/p:0;A&&(A.style.width=`${Math.min(100,Math.round(d*100))}%`),E&&(E.textContent=`Step ${Lt+1} of ${ut.length}`);const N=p/St;if(x){const D=Math.min(N,(g+c)/St);x.textContent=`${D.toFixed(1)}s / ${N.toFixed(1)}s (${St}x)`}const H=f.simulatedDurationSec;(M>=H||!L&&$>=1)&&(Lt++,i=0,a=performance.now()),Ht=requestAnimationFrame(s)}i=0,a=performance.now(),Ht=requestAnimationFrame(s)}function Gn(){Pt=!1,Ht&&(cancelAnimationFrame(Ht),Ht=null);const n=document.getElementById("simHudOverlay");n&&n.classList.add("hidden");const t=document.getElementById("btnSimulateCut");t&&(t.textContent="▶ Simulate Cut Order",t.classList.remove("simulating")),F()}function ea(){const n=document.getElementById("simStatusText"),t=document.getElementById("simProgressBar");n&&(n.innerHTML='<span style="color:#38bdf8; font-weight:700;">✅ SIMULATION COMPLETE:</span> Inner Cutouts Cut First, Outer Contour Cut Last'),t&&(t.style.width="100%");const o=We();he.innerHTML=on(o,{showCutOrder:De,dfmIssues:tt==null?void 0:tt.issues,highlightedHoleIndex:Ze,simulationState:{activeStepIndex:ut.length+1,isPiercing:!1}}),Te(),setTimeout(()=>{Gn()},2200)}function At(){var e,i,a;const n=((e=document.getElementById("cartProjectName"))==null?void 0:e.value.trim())||"Custom Assembly Project",t=((i=document.getElementById("cartCustomerName"))==null?void 0:i.value.trim())||"Valued Customer",o=((a=document.getElementById("cartCustomerPhone"))==null?void 0:a.value.trim())||"";return{id:`PRJ-${Date.now().toString().slice(-6)}`,projectName:n,customerName:t,customerPhone:o,items:re,selectedSheetSize:ke,shopSettings:C,allowRotation:!0}}function et(){const n=document.getElementById("cartItemsList"),t=document.getElementById("cartBadge"),o=document.getElementById("nestCartCount"),e=document.getElementById("cartSummaryBox"),i=document.getElementById("shareCartWhatsAppBtn"),a=document.getElementById("printCartInvoiceBtn"),s=document.getElementById("printCartJobCardBtn");if(t&&(t.textContent=re.length.toString(),t.style.display=re.length>0?"inline-block":"none"),o&&(o.textContent=re.length.toString()),!n)return;if(re.length===0){n.innerHTML=`
      <div class="empty-cart-state">
        <span class="empty-icon">🛒</span>
        <h4>Your RFQ Cart is Empty</h4>
        <p>Configure parametric parts or upload DXFs, then click <strong>"➕ Add Part to RFQ Cart"</strong> to assemble multi-part project orders with combined nesting.</p>
      </div>
    `,e&&e.classList.add("hidden"),i&&(i.disabled=!0),a&&(a.disabled=!0),s&&(s.disabled=!0);const p=document.getElementById("btnEmailCartQuote"),g=document.getElementById("btnCopyCartRfqText");p&&(p.disabled=!0),g&&(g.disabled=!0);return}e&&e.classList.remove("hidden"),i&&(i.disabled=!1),a&&(a.disabled=!1),s&&(s.disabled=!1);const r=document.getElementById("btnEmailCartQuote"),m=document.getElementById("btnCopyCartRfqText");r&&(r.disabled=!1),m&&(m.disabled=!1);const h=$t(re,C,ke);It=h,n.innerHTML="",re.forEach((p,g)=>{const c=document.createElement("div");c.className="cart-item-card";const d=C.currency==="INR"?"₹":"$",N=(p.unitQuote.finalUnitPrice*p.quantity).toFixed(2);c.innerHTML=`
      <div class="cart-item-header">
        <div class="cart-item-info">
          <span class="cart-item-num">#${g+1}</span>
          <span class="cart-item-name">${p.partGeometry.name}</span>
          <span class="cart-item-badge">${p.materialName} (${p.gaugeThicknessMm}mm)</span>
        </div>
        <button class="cart-item-del-btn" data-id="${p.id}" title="Remove part">✕</button>
      </div>
      <div class="cart-item-specs">
        <span>Dim: ${C.currency==="USD"?(p.partGeometry.boundingBox.width/(p.partGeometry.units==="inch"?1:25.4)).toFixed(1)+"×"+(p.partGeometry.boundingBox.height/(p.partGeometry.units==="inch"?1:25.4)).toFixed(1)+'"':p.partGeometry.boundingBox.width.toFixed(0)+"×"+p.partGeometry.boundingBox.height.toFixed(0)+"mm"}</span>
        <span>Cut: ${C.currency==="USD"?p.metrics.totalCutLengthInches.toFixed(1)+"in":(p.metrics.totalCutLengthMm/1e3).toFixed(2)+"m"}</span>
        <span>Pierces: ${p.metrics.pierceCount}</span>
        <span>Wt: ${C.currency==="USD"?(p.metrics.theoreticalWeightLbs*p.quantity).toFixed(2)+"lbs":(p.metrics.theoreticalWeightKg*p.quantity).toFixed(2)+"kg"}</span>
      </div>
      <div class="cart-item-controls">
        <div class="cart-qty-stepper">
          <button class="cart-qty-btn btn-cart-minus" data-id="${p.id}">-</button>
          <input type="number" class="cart-qty-input" data-id="${p.id}" value="${p.quantity}" min="1" max="9999" />
          <button class="cart-qty-btn btn-cart-plus" data-id="${p.id}">+</button>
        </div>
        <div class="cart-item-pricing">
          <span class="cart-unit-rate">(${d}${p.unitQuote.finalUnitPrice.toFixed(2)} / pc)</span>
          <span class="cart-item-total">${d}${N}</span>
        </div>
      </div>
    `,n.appendChild(c)}),n.querySelectorAll(".cart-item-del-btn").forEach(p=>{p.onclick=g=>{const c=g.currentTarget.getAttribute("data-id");re=re.filter(d=>d.id!==c),et(),qe==="cart"&&F(),ue("🗑️ Part removed from cart")}}),n.querySelectorAll(".btn-cart-minus").forEach(p=>{p.onclick=g=>{const c=g.currentTarget.getAttribute("data-id"),d=re.find(N=>N.id===c);d&&d.quantity>1&&(d.quantity--,d.unitQuote=Xe(d.metrics,z,d.quantity,C,d.secondaryOps),d.totalPrice=d.unitQuote.finalOrderTotal,et(),qe==="cart"&&F())}}),n.querySelectorAll(".btn-cart-plus").forEach(p=>{p.onclick=g=>{const c=g.currentTarget.getAttribute("data-id"),d=re.find(N=>N.id===c);d&&(d.quantity++,d.unitQuote=Xe(d.metrics,z,d.quantity,C,d.secondaryOps),d.totalPrice=d.unitQuote.finalOrderTotal,et(),qe==="cart"&&F())}}),n.querySelectorAll(".cart-qty-input").forEach(p=>{p.onchange=g=>{const c=g.target,d=c.getAttribute("data-id"),N=Math.max(1,parseInt(c.value,10)||1),H=re.find(D=>D.id===d);H&&(H.quantity=N,H.unitQuote=Xe(H.metrics,z,H.quantity,C,H.secondaryOps),H.totalPrice=H.unitQuote.finalOrderTotal,et(),qe==="cart"&&F())}});const l=C.currency==="USD",u=l?"$":"₹",b=document.getElementById("cartTotalParts"),y=document.getElementById("cartTotalCut"),f=document.getElementById("cartTotalPierces"),S=document.getElementById("cartTotalMass"),M=document.getElementById("cartNestingText"),T=document.getElementById("cartCostMaterial"),L=document.getElementById("cartCostCut"),$=document.getElementById("cartCostPierce"),v=document.getElementById("cartCostSecondary"),_=document.getElementById("cartCostDiscount"),A=document.getElementById("cartGstLabel"),E=document.getElementById("cartCostGst"),x=document.getElementById("cartTotalIncGst");if(b&&(b.textContent=`${h.totalPartsCount} pcs`),y&&(y.textContent=l?`${(h.totalCutLengthMeters*39.3701).toFixed(1)} in`:`${h.totalCutLengthMeters.toFixed(1)} m`),f&&(f.textContent=h.totalPierces.toString()),S&&(S.textContent=l?`${(h.totalNetPartMassKg*2.20462).toFixed(1)} lbs`:`${h.totalNetPartMassKg.toFixed(2)} kg`),M){const p=h.nestingResult.sheetsRequired;M.textContent=`Nesting: ${p} Sheet${p>1?"s":""} of ${ke.name} (${h.nestingResult.sheetUtilizationPercent}% util)`}T&&(T.textContent=`${u}${h.totalMaterialCost.toFixed(2)}`),L&&(L.textContent=`${u}${h.totalCutCost.toFixed(2)}`),$&&($.textContent=`${u}${h.totalPierceCost.toFixed(2)}`),v&&(v.textContent=`${u}${h.totalSecondaryCost.toFixed(2)}`),_&&(_.textContent=`-${h.volumeDiscountPercent}% (${u}${h.discountAmount.toFixed(2)})`),A&&(A.textContent=l?`Sales Tax (${C.gstPercent||0}%):`:C.isInterstateSale?"IGST (18%):":"GST (CGST 9% + SGST 9%):"),E&&(E.textContent=`${u}${h.gstAmount.toFixed(2)}`),x&&(x.textContent=`${u}${h.finalTotalWithGst.toFixed(2)}`)}function ta(){const n=document.getElementById("btnCurrencyINR"),t=document.getElementById("btnCurrencyUSD");n&&(n.style.display="none",n.onclick=()=>Nn("USD")),t&&(t.onclick=()=>Nn("USD"));const o=document.getElementById("modeJobWork"),e=document.getElementById("modeWithMaterial"),i=document.getElementById("modeSqFtJali");o&&(o.onclick=()=>Nt("job_work")),e&&(e.onclick=()=>Nt("with_material")),i&&(i.onclick=()=>Nt("sqft_jali"));const a=document.getElementById("btnViewPart"),s=document.getElementById("btnViewNesting");a&&s&&(a.onclick=()=>{dt="part",a.classList.add("active"),s.classList.remove("active"),Ft(),F()},s.onclick=()=>{dt="nesting",s.classList.add("active"),a.classList.remove("active"),Ft(),F()});const r=document.getElementById("btnJaliViewRealistic"),m=document.getElementById("btnJaliViewCam");r&&m&&(r.onclick=()=>{Fe="realistic_gate",F()},m.onclick=()=>{Fe="cam_toolpath",F()}),document.querySelectorAll(".finish-swatch").forEach(I=>{I.onclick=()=>{const W=I.getAttribute("data-finish");W&&(k.finishMaterial=W,F())}}),document.querySelectorAll(".backlight-pill").forEach(I=>{I.onclick=()=>{const W=I.getAttribute("data-backlight");W&&(k.backlightColor=W,F())}}),document.querySelectorAll(".gate-type-btn").forEach(I=>{I.onclick=()=>{const W=I.getAttribute("data-gatetype");W&&(k.gateType=W,lt(),F())}});const h=document.getElementById("btnFoldGateToolbar"),l=document.getElementById("btnExpandGateToolbar"),u=document.getElementById("gateFoldedBar");h&&(h.onclick=I=>{I.stopPropagation(),Yt=!0,ht(),Te()}),l&&(l.onclick=I=>{I.stopPropagation(),Yt=!1,ht(),Te()}),u&&(u.onclick=()=>{Yt=!1,ht(),Te()});const b=document.getElementById("btnFoldBottomHud"),y=document.getElementById("btnExpandBottomHud"),f=document.getElementById("bottomHudFoldedBar");b&&(b.onclick=I=>{I.stopPropagation(),Xt=!0,ht(),Te()}),y&&(y.onclick=I=>{I.stopPropagation(),Xt=!1,ht(),Te()}),f&&(f.onclick=()=>{Xt=!1,ht(),Te()}),Qt&&(Qt.value=C.assistGas,Qt.onchange=()=>{C.assistGas=Qt.value,F()}),pt&&(pt.onchange=()=>{const W=(C.currency==="USD"?tn:Et).find(U=>U.id===pt.value);W&&(ke=W),F()});const S=document.getElementById("toggleSecOpsBtn"),M=document.getElementById("secOpsContent"),T=document.getElementById("secOpsChevron");S&&M&&(S.onclick=()=>{M.classList.toggle("hidden"),T&&(T.textContent=M.classList.contains("hidden")?"▶":"▼")});const L=document.getElementById("secBendsCount"),$=document.getElementById("secTapsCount"),v=document.getElementById("secDeburringCheck"),_=document.getElementById("secSurfaceFinish");L&&(L.oninput=()=>{Re.bendingBendsCount=parseInt(L.value,10)||0,F()}),$&&($.oninput=()=>{Re.tappingHolesCount=parseInt($.value,10)||0,F()}),v&&(v.onchange=()=>{Re.deburringEnabled=v.checked,F()}),_&&(_.onchange=()=>{Re.surfaceFinish=_.value,F()}),document.querySelectorAll(".shape-btn").forEach(I=>{I.onclick=()=>{var W,U,V,Z;document.querySelectorAll(".shape-btn").forEach(ne=>ne.classList.remove("active")),I.classList.add("active"),me=I.getAttribute("data-shape"),Ct=!1,me==="jali"?(Nt("sqft_jali"),Fe="realistic_gate",De=!1,(W=document.getElementById("btnToggleCamBadges"))==null||W.classList.remove("active"),(U=document.getElementById("legendBadgeToggle"))==null||U.classList.remove("active")):(De=!0,(V=document.getElementById("btnToggleCamBadges"))==null||V.classList.add("active"),(Z=document.getElementById("legendBadgeToggle"))==null||Z.classList.add("active")),lt(),Ft(),F()}}),_t.onchange=()=>{const I=Ve.find(W=>W.id===_t.value);I&&(q=I,Hi(),Wt(),F())},vt.onchange=()=>{const I=parseInt(vt.value,10);z=q.gauges[I],Wt(),F()};const A=document.getElementById("partQuantity"),E=document.getElementById("qtyMinus"),x=document.getElementById("qtyPlus");A.oninput=()=>{ve=Math.max(1,parseInt(A.value,10)||1),F()},E.onclick=()=>{ve=Math.max(1,ve-1),A.value=ve.toString(),F()},x.onclick=()=>{ve++,A.value=ve.toString(),F()};const p=document.getElementById("addToCartBtn");p&&(p.onclick=()=>{const I=We(),W=rt(I,z.thicknessMm,q.densityGPerCm3),U=Xe(W,z,ve,C,Re),V={id:`item_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,partGeometry:JSON.parse(JSON.stringify(I)),materialId:q.id,materialName:q.name,gaugeThicknessMm:z.thicknessMm,quantity:ve,secondaryOps:{...Re},metrics:W,unitQuote:U,totalPrice:U.finalOrderTotal,color:["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"][re.length%6],createdAt:Date.now()};re.push(V),et(),ue(`➕ Added ${ve}× "${V.partGeometry.name}" to RFQ Cart!`);const Z=document.getElementById("tabCart");Z&&(Z.classList.add("pulse"),setTimeout(()=>Z.classList.remove("pulse"),1200))});const g=document.getElementById("btnSimulateCut"),c=document.getElementById("btnStopSim"),d=document.getElementById("btnToggleCamBadges"),N=document.getElementById("simSpeedSelect");g&&(g.onclick=()=>{Zo()}),c&&(c.onclick=()=>{Gn()});const H=document.getElementById("legendBadgeToggle"),D=()=>{De=!De,d==null||d.classList.toggle("active",De),H==null||H.classList.toggle("active",De),F()};d&&(d.onclick=D),H&&(H.onclick=D),N&&(N.onchange=()=>{St=parseFloat(N.value)||1});const G=document.getElementById("btnPrevSheet"),B=document.getElementById("btnNextSheet"),P=document.getElementById("btnNestSourceSingle"),R=document.getElementById("btnNestSourceCart"),O=document.getElementById("btnNestCartOnBed");G&&(G.onclick=()=>{Le>0&&(Le--,F())}),B&&(B.onclick=()=>{Rn&&Le<Rn.sheetsRequired-1&&(Le++,F())}),P&&R&&(P.onclick=()=>{qe="single",P.classList.add("active"),R.classList.remove("active"),Le=0,F()},R.onclick=()=>{if(re.length===0){ue("⚠️ RFQ Cart is empty. Add parts first.");return}qe="cart",R.classList.add("active"),P.classList.remove("active"),Le=0,F()}),O&&(O.onclick=()=>{var I,W;if(re.length===0){ue("⚠️ RFQ Cart is empty. Add parts first.");return}qe="cart",dt="nesting",(I=document.getElementById("btnViewNesting"))==null||I.classList.add("active"),(W=document.getElementById("btnViewPart"))==null||W.classList.remove("active"),R==null||R.classList.add("active"),P==null||P.classList.remove("active"),Le=0,F()});const K=document.getElementById("clearCartBtn");K&&(K.onclick=()=>{re.length>0&&confirm("Clear all items from your RFQ Cart?")&&(re=[],et(),qe==="cart"&&(qe="single",P==null||P.classList.add("active"),R==null||R.classList.remove("active"),F()),ue("🛒 RFQ Cart cleared"))});const j=document.getElementById("shareCartWhatsAppBtn");j&&(j.onclick=()=>{if(re.length===0)return;const I=At(),W=It||$t(re,C,ke);if(C.currency==="USD"){const U=wn(I,W,I.customerName);if(navigator.clipboard.writeText(U).then(()=>{ue("✉️ Project Quotation copied to clipboard! (Ready for email)")}).catch(()=>{ue("Quotation copied.")}),I.customerPhone&&I.customerPhone.includes("@")){const V=encodeURIComponent(`Quotation: ${I.projectName||"Laser Project RFQ"} — ${C.shopName}`),Z=encodeURIComponent(U);window.open(`mailto:${I.customerPhone}?subject=${V}&body=${Z}`,"_blank")}}else{const U=go(I,W),V=C.currency==="INR"?"91":"1",Z=bi(U,I.customerPhone,V);window.open(Z,"_blank")}});function ce(I){const W=document.getElementById("rfqSubmitModal");if(!W)return;const U=document.getElementById("rfqSummaryPartLabel"),V=document.getElementById("rfqSummaryTotal"),Z=document.getElementById("btnSubmitRfqEmail"),ne=document.getElementById("btnDownloadRfqPdf"),Se=document.getElementById("closeRfqModalBtn");let Je="$0.00",ot=null,Ye=null;{if(re.length===0){ue("⚠️ RFQ Cart is empty. Add parts before submitting quote.");return}Ye=At(),ot=It||$t(re,C,ke),Je=`$${ot.finalTotalWithGst.toFixed(2)}`,U&&(U.textContent=`Project RFQ: ${Ye.projectName||"Batch Project"} (${re.length} parts)`)}V&&(V.textContent=Je),Se==null||Se.addEventListener("click",()=>W.classList.add("hidden"),{once:!0}),W.addEventListener("click",ze=>{ze.target===W&&W.classList.add("hidden")},{once:!0}),Z&&(Z.onclick=()=>{var ni,ii,oi,ai,si,ri,ci,li,di,mi,ui;const ze=((ni=document.getElementById("rfqCustomerName"))==null?void 0:ni.value.trim())||"Valued Client",at=((ii=document.getElementById("rfqCompanyName"))==null?void 0:ii.value.trim())||"",st=((oi=document.getElementById("rfqCustomerEmail"))==null?void 0:oi.value.trim())||"",ft=((ai=document.getElementById("rfqCustomerPhone"))==null?void 0:ai.value.trim())||"",mt=((si=document.getElementById("rfqProjectRef"))==null?void 0:si.value.trim())||"",yt=((ri=document.getElementById("rfqShippingZip"))==null?void 0:ri.value.trim())||"",vn=((ci=document.getElementById("rfqLeadTimeSelect"))==null?void 0:ci.value)||"standard",Kn=((li=document.getElementById("rfqDeliveryMethod"))==null?void 0:li.value)||"dock_pickup",Jn=((di=document.getElementById("rfqMtrCerts"))==null?void 0:di.checked)||!1,Vn=((mi=document.getElementById("rfqTaxExempt"))==null?void 0:mi.checked)||!1,Pn=((ui=document.getElementById("rfqNotes"))==null?void 0:ui.value.trim())||"",Zn=C.shopEmail||"quotes@midwestprecision.com",Gi=`Manufacturing RFQ: ${mt||"Batch Project"} — ${at||ze}`;let ei="";Ye&&(ei=wn(Ye,ot,ze));const ti=["====================================================","COMMERCIAL MANUFACTURING REQUEST FOR QUOTE (RFQ)","====================================================",`Date: ${new Date().toLocaleDateString("en-US")}`,`Destination Shop: ${C.shopName} (${Zn})`,"","CUSTOMER / BUYER INFORMATION:",`• Contact: ${ze}`,at?`• Company: ${at}`:"",st?`• Email: ${st}`:"",ft?`• Phone: ${ft}`:"",mt?`• Project / PO #: ${mt}`:"",yt?`• Destination Zip Code: ${yt}`:"",`• Turnaround Requested: ${vn==="rush"?"24-Hour Rush":vn==="expedited"?"Expedited (2-3 Days)":"Standard (5-7 Days)"}`,`• Delivery: ${Kn==="freight"?"UPS Ground / LTL Freight":"Shop Dock Pickup / Will-Call"}`,Jn?"• Quality: Material Test Reports (MTRs / Mill Certs) REQUIRED":"",Vn?"• Commercial: Tax-Exempt Wholesale Order (Resale Cert on file)":"",Pn?`
CUSTOMER NOTES / FINISH SPECS:
${Pn}`:"",`
----------------------------------------------------`,ei,"===================================================="].filter(Boolean).join(`
`);navigator.clipboard.writeText(ti).then(()=>{ue("✉️ Manufacturing RFQ copied to clipboard & dispatched!")}).catch(()=>{ue("RFQ copied.")});const Ui=`mailto:${encodeURIComponent(Zn)}?cc=${encodeURIComponent(st)}&subject=${encodeURIComponent(Gi)}&body=${encodeURIComponent(ti)}`;if(window.open(Ui,"_blank"),C.rfqWebhookUrl)try{fetch(C.rfqWebhookUrl,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({shopName:C.shopName,timestamp:Date.now(),customer:{name:ze,company:at,email:st,phone:ft,zip:yt},project:{projectRef:mt,leadTime:vn,delivery:Kn,mtr:Jn,taxExempt:Vn,notes:Pn},quote:ot})}).catch(console.error)}catch(ji){console.warn("Webhook dispatch failed:",ji)}W.classList.add("hidden")}),ne&&(ne.onclick=()=>{var mt,yt;(mt=document.getElementById("rfqCustomerName"))!=null&&mt.value.trim(),(yt=document.getElementById("rfqCustomerPhone"))!=null&&yt.value.trim();const ze=document.getElementById("docModal"),at=document.getElementById("docModalTitle"),st=document.getElementById("docFrame");let ft="";Ye&&(ft=$i(Ye,ot),at.textContent=`Commercial Manufacturing Quotation — ${Ye.projectName}`),ze.classList.remove("hidden"),st.srcdoc=ft,W.classList.add("hidden")}),W.classList.remove("hidden")}const ye=document.getElementById("btnEmailCartQuote");ye&&(ye.onclick=()=>{ce()});const oe=document.getElementById("btnCopyCartRfqText");oe&&(oe.onclick=()=>{if(re.length===0)return;const I=At(),W=It||$t(re,C,ke),U=wn(I,W,I.customerName);navigator.clipboard.writeText(U).then(()=>{ue("📋 Project RFQ Text copied to clipboard!")}).catch(()=>{ue("Project RFQ Text copied.")})});const ee=document.getElementById("printCartInvoiceBtn");ee&&(ee.onclick=()=>{if(re.length===0)return;const I=At(),W=It||$t(re,C,ke),U=$i(I,W),V=document.getElementById("docModal"),Z=document.getElementById("docModalTitle"),ne=document.getElementById("docFrame");Z.textContent=C.currency==="USD"?`Project Quotation — ${I.projectName}`:`Project Tax Invoice — ${I.projectName} (with UPI QR)`,V.classList.remove("hidden"),ne.srcdoc=U});const le=document.getElementById("printCartJobCardBtn");le&&(le.onclick=()=>{if(re.length===0)return;const I=At(),W=It||$t(re,C,ke),U=vo(I,W),V=document.getElementById("docModal"),Z=document.getElementById("docModalTitle"),ne=document.getElementById("docFrame");Z.textContent=`Batch Job Card — ${I.projectName}`,V.classList.remove("hidden"),ne.srcdoc=U});const ae=document.getElementById("shareWhatsAppBtn"),J=document.getElementById("customerPhoneInput");ae&&(ae.onclick=()=>{const I=We(),W=rt(I,z.thicknessMm,q.densityGPerCm3),U=Xe(W,z,ve,C,Re),V=J?J.value.trim():"";if(C.currency==="USD"){const Z=Gt(I.name,W,q.name,z,U,C.shopName,C,"Valued Customer");if(navigator.clipboard.writeText(Z).then(()=>{ue("✉️ Manufacturing Quotation copied to clipboard! (Ready for email)")}).catch(()=>{ue("Quotation copied.")}),V.includes("@")){const ne=encodeURIComponent(`Quotation: ${I.name} — ${C.shopName}`),Se=encodeURIComponent(Z);window.open(`mailto:${V}?subject=${ne}&body=${Se}`,"_blank")}}else{const Z=xi(I.name,W,q.name,z,U,C.shopName,C),ne=C.currency==="INR"?"91":"1",Se=bi(Z,V,ne);window.open(Se,"_blank")}});const Q=document.getElementById("btnEmailQuote");Q&&(Q.onclick=()=>{const I=We(),W=rt(I,z.thicknessMm,q.densityGPerCm3),U=Xe(W,z,ve,C,Re),V=J?J.value.trim():"",Z=Gt(I.name,W,q.name,z,U,C.shopName,C,"Valued Customer");if(navigator.clipboard.writeText(Z).then(()=>{ue("✉️ Manufacturing Quotation copied to clipboard! (Ready for email)")}).catch(()=>{ue("Quotation copied.")}),V.includes("@")){const ne=encodeURIComponent(`Quotation: ${I.name} — ${C.shopName}`),Se=encodeURIComponent(Z);window.open(`mailto:${V}?subject=${ne}&body=${Se}`,"_blank")}});const fe=document.getElementById("btnCopyRfqText");fe&&(fe.onclick=()=>{const I=We(),W=rt(I,z.thicknessMm,q.densityGPerCm3),U=Xe(W,z,ve,C,Re),V=Gt(I.name,W,q.name,z,U,C.shopName,C,"Valued Customer");navigator.clipboard.writeText(V).then(()=>{ue("📋 RFQ Text copied to clipboard!")}).catch(()=>{ue("RFQ text copied.")})});const xe=document.getElementById("docModal"),pe=document.getElementById("docModalTitle"),ge=document.getElementById("docFrame"),be=document.getElementById("closeDocModalBtn");be.onclick=()=>xe.classList.add("hidden"),Po();const Ae=document.getElementById("printInvoiceBtn");Ae&&(Ae.onclick=()=>{const I=We(),W=rt(I,z.thicknessMm,q.densityGPerCm3),U=Xe(W,z,ve,C,Re),V=J?J.value:"",Z=So(I,W,q.name,z,U,C,"Walk-in Customer",V);pe.textContent=C.currency==="USD"?"Manufacturing Quotation Preview":"Proforma Invoice Preview (with UPI QR)",xe.classList.remove("hidden"),ge.srcdoc=Z});const X=document.getElementById("jobCardBtn");X&&(X.onclick=()=>{const I=We(),W=rt(I,z.thicknessMm,q.densityGPerCm3),U=Mo(I,W,q.name,z,ve,C);pe.textContent="Laser Machine Operator Job Card",xe.classList.remove("hidden"),ge.srcdoc=U}),document.getElementById("downloadDxfBtn").onclick=()=>{const I=We(),W=Bt.find(Se=>Se.id===C.selectedCAMProfileId)||Bt[0],U=ro(I,W),V=new Blob([U],{type:"application/dxf"}),Z=URL.createObjectURL(V),ne=document.createElement("a");ne.href=Z,ne.download=`${I.name.toLowerCase().replace(/[\s\/\(\)]+/g,"_")}_${W.id}.dxf`,document.body.appendChild(ne),ne.click(),document.body.removeChild(ne),URL.revokeObjectURL(Z)};const $e=document.getElementById("copyQuoteBtn"),we=document.getElementById("toastNotification");$e&&($e.onclick=async()=>{const I=We(),W=rt(I,z.thicknessMm,q.densityGPerCm3),U=Xe(W,z,ve,C,Re),V=C.currency==="USD"?Gt(I.name,W,q.name,z,U,C.shopName,C,"Valued Customer"):xi(I.name,W,q.name,z,U,C.shopName,C);try{await navigator.clipboard.writeText(V),we&&(we.textContent=C.currency==="USD"?"📋 Email Quotation copied to clipboard!":"📋 Quotation copied to clipboard!",we.classList.remove("hidden"),setTimeout(()=>{we.classList.add("hidden")},2200))}catch{alert("Quotation copied to clipboard.")}});const Oe=document.getElementById("dropzone"),He=document.getElementById("dxfFileInput"),Ge=document.getElementById("tabParametric"),gt=document.getElementById("tabUpload"),Ce=document.getElementById("parametricContainer"),Ue=document.getElementById("uploadContainer");Ge.onclick=()=>{Ge.classList.add("active"),gt.classList.remove("active"),Ce.classList.remove("hidden"),Ue.classList.add("hidden"),Ct=!1,F()},gt.onclick=()=>{gt.classList.add("active"),Ge.classList.remove("active"),Ue.classList.remove("hidden"),Ce.classList.add("hidden"),Ct=!0,Ne&&F()},Oe.onclick=()=>He.click(),He.onchange=I=>{var U;const W=(U=I.target.files)==null?void 0:U[0];W&&je(W)},Oe.ondragover=I=>{I.preventDefault(),Oe.classList.add("dragover")},Oe.ondragleave=()=>Oe.classList.remove("dragover"),Oe.ondrop=I=>{var U;I.preventDefault(),Oe.classList.remove("dragover");const W=(U=I.dataTransfer)==null?void 0:U.files[0];W&&je(W)};function je(I){const W=new FileReader;W.onload=U=>{var Z;const V=(Z=U.target)==null?void 0:Z.result;try{const ne=Ei(V),Se=I.name.replace(/\.[^/.]+$/,"");if(ne.length>1){Ne=ne[0],Ne.name=`${Se}_Part1`,Ct=!0;const Je=document.getElementById("uploadFileInfo"),ot=document.getElementById("loadedFileName");ot.textContent=`${I.name} (${ne.length} distinct parts detected)`,Je.classList.remove("hidden"),confirm(`Detected ${ne.length} distinct outer parts in "${I.name}". Would you like to add all ${ne.length} parts into your RFQ Cart?`)&&(ne.forEach((Ye,ze)=>{Ye.name=`${Se}_Part${ze+1}`;const at=rt(Ye,z.thicknessMm,q.densityGPerCm3),st=Xe(at,z,1,C,Re);re.push({id:`item_dxf_${Date.now()}_${ze}`,partGeometry:Ye,materialId:q.id,materialName:q.name,gaugeThicknessMm:z.thicknessMm,quantity:1,secondaryOps:{...Re},metrics:at,unitQuote:st,totalPrice:st.finalOrderTotal,color:["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"][(re.length+ze)%6],createdAt:Date.now()})}),et(),ue(`✅ Added ${ne.length} parts from DXF to RFQ Cart!`))}else{Ne=ne[0]||mo(V),Ne.name=Se,Ct=!0;const Je=document.getElementById("uploadFileInfo"),ot=document.getElementById("loadedFileName");ot.textContent=I.name,Je.classList.remove("hidden"),Ne&&se(Ne)}F()}catch(ne){console.error(ne),alert("Failed to parse DXF file. Please ensure it is an ASCII AutoCAD DXF.")}},W.readAsText(I)}function se(I){const W=document.getElementById("dxfDetectedDims"),U=document.getElementById("dxfUnitBadge"),V=document.getElementById("btnToggleDxfUnits"),Z=document.getElementById("dxfSmallDimWarning");if(!W||!U||!V)return;const ne=I.boundingBox.width,Se=I.boundingBox.height,Je=I.units==="inch";W.textContent=Je?`Size: ${ne.toFixed(2)}" × ${Se.toFixed(2)}"`:`Size: ${ne.toFixed(1)} × ${Se.toFixed(1)} mm`,U.textContent=Je?"Inches":"Millimeters",V.textContent=Je?"🔄 Switch to mm":"🔄 Switch to inches",Z&&(ne<25&&Se<25?Z.classList.remove("hidden"):Z.classList.add("hidden"))}const de=document.getElementById("btnToggleDxfUnits");de&&(de.onclick=()=>{Ne&&(Ne.units=Ne.units==="inch"?"mm":"inch",se(Ne),F(),ue(`🔄 Switched DXF units to ${Ne.units==="inch"?"Inches":"Millimeters"}`))});const Pe=document.getElementById("tabQuote"),Ie=document.getElementById("tabCart"),it=document.getElementById("tabAdmin"),Ee=document.getElementById("quoteView"),an=document.getElementById("cartView"),sn=document.getElementById("adminView");Pe.onclick=()=>{Pe.classList.add("active"),Ie.classList.remove("active"),it.classList.remove("active"),Ee.classList.remove("hidden"),an.classList.add("hidden"),sn.classList.add("hidden")},Ie.onclick=()=>{Ie.classList.add("active"),Pe.classList.remove("active"),it.classList.remove("active"),an.classList.remove("hidden"),Ee.classList.add("hidden"),sn.classList.add("hidden"),et()},it.onclick=()=>{it.classList.add("active"),Pe.classList.remove("active"),Ie.classList.remove("active"),sn.classList.remove("hidden"),Ee.classList.add("hidden"),an.classList.add("hidden")};const rn=document.getElementById("adminShopName"),cn=document.getElementById("adminGstin"),ln=document.getElementById("adminUpiId"),dn=document.getElementById("adminMinOrder"),mn=document.getElementById("adminSheetLoading"),un=document.getElementById("adminPricePerKg"),hn=document.getElementById("adminPricePerMeterCut"),pn=document.getElementById("adminPricePerPierce"),gn=document.getElementById("adminGstPercent"),fn=document.getElementById("adminTaxType");rn&&(rn.oninput=()=>{C.shopName=rn.value.trim()||"My CNC Shop",Pi&&(Pi.textContent=C.shopName),Me(),F()}),cn&&(cn.oninput=()=>{C.shopGstin=cn.value.trim(),Me()}),ln&&(ln.oninput=()=>{C.upiId=ln.value.trim(),Me()}),dn&&(dn.oninput=()=>{C.minimumOrderFee=parseFloat(dn.value)||0,Me(),F()}),mn&&(mn.oninput=()=>{C.sheetLoadingFee=parseFloat(mn.value)||0,Me(),F()}),fn&&(fn.onchange=()=>{C.isInterstateSale=fn.value==="interstate",Me(),F()}),un&&(un.oninput=()=>{const I=parseFloat(un.value)||0;C.currency==="USD"?z.pricePerSqInch=I:z.pricePerKg=I,Me(),F()}),hn&&(hn.oninput=()=>{const I=parseFloat(hn.value)||0;C.currency==="USD"?z.pricePerLinearInchCut=I:z.pricePerMeterCut=I,Me(),F()}),pn&&(pn.oninput=()=>{z.pricePerPierce=parseFloat(pn.value)||0,Me(),F()}),gn&&(gn.oninput=()=>{C.gstPercent=parseFloat(gn.value)||0,Me(),F()});const yn=document.getElementById("adminNaics");yn&&(yn.oninput=()=>{C.naicsCode=yn.value.trim(),Me()});const xn=document.getElementById("adminTaxId");xn&&(xn.oninput=()=>{C.einOrTaxId=xn.value.trim(),Me()});const bn=document.getElementById("adminPaymentTerms");bn&&(bn.oninput=()=>{C.paymentTerms=bn.value.trim(),Me()});const $n=document.getElementById("adminLaserPower");$n&&($n.onchange=()=>{const I=parseInt($n.value);C.laserPowerKw=I||4,Me(),F()});const Cn=document.getElementById("adminHourlyRate");Cn&&(Cn.oninput=()=>{C.hourlyLaserRateUsd=parseFloat(Cn.value)||185,Me(),F()});const In=document.getElementById("adminShopEmail");In&&(In.onchange=()=>{C.shopEmail=In.value.trim(),Me()});const Sn=document.getElementById("adminSetupFee");Sn&&(Sn.oninput=()=>{C.setupFeePerJob=parseFloat(Sn.value)||25,Me(),F()});const Un=document.getElementById("btnCopyConfiguredEmbedScript");Un&&(Un.onclick=()=>{const I=window.location.origin||"https://engine.yourdomain.com",W=(C.shopName||"midwest-precision").toLowerCase().replace(/[^a-z0-9]+/g,"-"),U=`<script src="${I}/widget.js" data-shop-id="${W}" data-shop-name="${C.shopName}" data-shop-email="${C.shopEmail||"quotes@midwestprecision.com"}" data-hourly-rate="${C.hourlyLaserRateUsd||185}" data-min-order="${C.minimumOrderFee||75}" data-sales-tax="${C.gstPercent||7}"><\/script>`;navigator.clipboard.writeText(U).then(()=>{ue("📋 Custom embed widget tag copied to clipboard!")}).catch(()=>{ue("Embed widget script copied.")})});const Mn=document.getElementById("adminSalesTaxExempt");Mn&&(Mn.onchange=()=>{C.salesTaxExempt=Mn.checked,Me(),F()});const jn=document.getElementById("resetRatesBtn");jn&&(jn.onclick=()=>{confirm("Reset shop rates to factory benchmarks?")&&(bo(C.currency),C.currency==="USD"?(C={...Ot},Ve=JSON.parse(JSON.stringify(_n)),q=Ve[0],z=q.gauges[3]||q.gauges[0]):(C={...nn},Ve=JSON.parse(JSON.stringify(Ti)),q=Ve[0],z=q.gauges[4]||q.gauges[0]),Ni(),Wt(),F())});const Wi=document.getElementById("unitMm"),Oi=document.getElementById("unitInch");Wi.onclick=()=>{Zt("mm"),en(),lt(),F()},Oi.onclick=()=>{Zt("inch"),en(),lt(),F()},he.addEventListener("wheel",I=>{I.preventDefault();const W=I.deltaY<0?1.15:.87,U=Math.min(6,Math.max(.4,Qe*W)),V=he.getBoundingClientRect(),Z=I.clientX-V.left-V.width/2,ne=I.clientY-V.top-V.height/2;_e.x=Z-(Z-_e.x)*(U/Qe),_e.y=ne-(ne-_e.y)*(U/Qe),Qe=U,Te()},{passive:!1}),he.addEventListener("pointerdown",I=>{(I.button===0||I.button===1)&&(qt=!0,Dn={x:I.clientX-_e.x,y:I.clientY-_e.y},he.classList.add("is-dragging"),he.setPointerCapture(I.pointerId))}),he.addEventListener("pointermove",I=>{qt&&(_e.x=I.clientX-Dn.x,_e.y=I.clientY-Dn.y,Te())});const zn=I=>{if(qt){qt=!1,he.classList.remove("is-dragging");try{he.releasePointerCapture(I.pointerId)}catch{}}};he.addEventListener("pointerup",zn),he.addEventListener("pointercancel",zn),he.addEventListener("dblclick",()=>{Ft()});const Qn=document.getElementById("btnZoomIn"),qn=document.getElementById("btnZoomOut"),Yn=document.getElementById("btnZoomFit");Qn&&(Qn.onclick=()=>{Qe=Math.min(6,Qe*1.25),Te()}),qn&&(qn.onclick=()=>{Qe=Math.max(.4,Qe/1.25),Te()}),Yn&&(Yn.onclick=()=>{Ft()});const Xn=document.getElementById("btnExportImage");Xn&&(Xn.onclick=()=>{na()})}function na(){const n=he.querySelector("svg");if(!n){ue("⚠️ No design found to export");return}try{const t=n.cloneNode(!0);t.style.transform="";const o=t.getAttribute("viewBox");let e=1600,i=1200;if(o){const l=o.split(/[\s,]+/).map(Number);if(l.length===4&&l[2]>0&&l[3]>0){const u=l[2]/l[3];u>=1?(e=2400,i=Math.round(2400/u)):(i=2400,e=Math.round(2400*u))}}t.setAttribute("width",e.toString()),t.setAttribute("height",i.toString());const a=new XMLSerializer().serializeToString(t),s=new Blob([a],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,m=r.createObjectURL(s),h=new Image;h.onload=()=>{const l=document.createElement("canvas");l.width=e,l.height=i;const u=l.getContext("2d");u&&(u.fillStyle="#080c14",u.fillRect(0,0,e,i),u.drawImage(h,0,0,e,i),r.revokeObjectURL(m),l.toBlob(b=>{if(!b)return;const y=document.createElement("a"),f=We(),S=me==="jali"&&Fe==="realistic_gate"?`Gate_Render_${k.finishMaterial||"matte_black"}_${f.boundingBox.width.toFixed(0)}x${f.boundingBox.height.toFixed(0)}mm.png`:`CNC_${me}_${f.boundingBox.width.toFixed(0)}mm.png`;y.download=S,y.href=r.createObjectURL(b),y.click(),r.revokeObjectURL(y.href),ue(`📸 Exported high-res PNG (${e}×${i}px) for Proposal / Email!`)},"image/png"))},h.src=m}catch(t){console.error("Export PNG failed:",t),ue("⚠️ Export failed")}}function ia(){const n=document.getElementById("panelLeft"),t=document.getElementById("panelRight"),o=document.getElementById("splitterLeft"),e=document.getElementById("splitterRight"),i=document.getElementById("collapseLeftBtn"),a=document.getElementById("collapseRightBtn"),s=document.getElementById("restoreLeftBtn"),r=document.getElementById("restoreRightBtn"),m=document.getElementById("btnToggleLeftPanel"),h=document.getElementById("btnToggleRightPanel"),l=M=>{n&&(M?(n.classList.remove("collapsed"),o==null||o.classList.remove("disabled"),s==null||s.classList.add("hidden"),m==null||m.classList.add("active")):(n.classList.add("collapsed"),o==null||o.classList.add("disabled"),s==null||s.classList.remove("hidden"),m==null||m.classList.remove("active")))},u=M=>{t&&(M?(t.classList.remove("collapsed"),e==null||e.classList.remove("disabled"),r==null||r.classList.add("hidden"),h==null||h.classList.add("active")):(t.classList.add("collapsed"),e==null||e.classList.add("disabled"),r==null||r.classList.remove("hidden"),h==null||h.classList.remove("active")))},b=()=>{const M=!(n!=null&&n.classList.contains("collapsed"));l(!M)},y=()=>{const M=!(t!=null&&t.classList.contains("collapsed"));u(!M)};i&&(i.onclick=()=>l(!1)),s&&(s.onclick=()=>l(!0)),m&&(m.onclick=()=>b()),a&&(a.onclick=()=>u(!1)),r&&(r.onclick=()=>u(!0)),h&&(h.onclick=()=>y()),window.addEventListener("keydown",M=>{M.altKey&&(M.key==="1"||M.code==="Digit1")?(M.preventDefault(),b()):M.altKey&&(M.key==="2"||M.code==="Digit2")&&(M.preventDefault(),y())});let f=!1,S=!1;o&&(o.onmousedown=()=>{f=!0},o.ondblclick=()=>{n&&(n.style.width="340px")}),e&&(e.onmousedown=()=>{S=!0},e.ondblclick=()=>{if(t){const M=window.innerWidth>=1600?"450px":window.innerWidth>=1440?"430px":window.innerWidth>=1200?"410px":"385px";t.style.width=M}}),window.addEventListener("mousemove",M=>{if(f&&n){const T=window.innerWidth>=1200?280:250,L=Math.max(T,Math.min(600,M.clientX));n.style.width=`${L}px`}else if(S&&t){const T=window.innerWidth>=1440?405:window.innerWidth>=1200?385:360,L=window.innerWidth>=1440?720:680,$=Math.max(T,Math.min(L,window.innerWidth-M.clientX));t.style.width=`${$}px`}}),window.addEventListener("mouseup",()=>{f=!1,S=!1})}Go();
