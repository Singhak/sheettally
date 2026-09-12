var Dn=Object.defineProperty;var An=(n,e,s)=>e in n?Dn(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var ne=(n,e,s)=>An(n,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();function Fn(n){const e=n.units==="inch",s=e?.5:10,t=Math.max(s,n.length),o=Math.max(s,n.width),i=Math.min(n.cornerSize||0,Math.min(t,o)/2-(e?.05:1)),a=[];n.cornerType==="fillet"&&i>0?(a.push({type:"line",start:{x:i,y:0},end:{x:t-i,y:0}}),a.push({type:"arc",center:{x:t-i,y:i},radius:i,startAngle:270*Math.PI/180,endAngle:360*Math.PI/180,counterClockwise:!0}),a.push({type:"line",start:{x:t,y:i},end:{x:t,y:o-i}}),a.push({type:"arc",center:{x:t-i,y:o-i},radius:i,startAngle:0,endAngle:90*Math.PI/180,counterClockwise:!0}),a.push({type:"line",start:{x:t-i,y:o},end:{x:i,y:o}}),a.push({type:"arc",center:{x:i,y:o-i},radius:i,startAngle:90*Math.PI/180,endAngle:180*Math.PI/180,counterClockwise:!0}),a.push({type:"line",start:{x:0,y:o-i},end:{x:0,y:i}}),a.push({type:"arc",center:{x:i,y:i},radius:i,startAngle:180*Math.PI/180,endAngle:270*Math.PI/180,counterClockwise:!0})):n.cornerType==="chamfer"&&i>0?(a.push({type:"line",start:{x:i,y:0},end:{x:t-i,y:0}}),a.push({type:"line",start:{x:t-i,y:0},end:{x:t,y:i}}),a.push({type:"line",start:{x:t,y:i},end:{x:t,y:o-i}}),a.push({type:"line",start:{x:t,y:o-i},end:{x:t-i,y:o}}),a.push({type:"line",start:{x:t-i,y:o},end:{x:i,y:o}}),a.push({type:"line",start:{x:i,y:o},end:{x:0,y:o-i}}),a.push({type:"line",start:{x:0,y:o-i},end:{x:0,y:i}}),a.push({type:"line",start:{x:0,y:i},end:{x:i,y:0}})):(a.push({type:"line",start:{x:0,y:0},end:{x:t,y:0}}),a.push({type:"line",start:{x:t,y:0},end:{x:t,y:o}}),a.push({type:"line",start:{x:t,y:o},end:{x:0,y:o}}),a.push({type:"line",start:{x:0,y:o},end:{x:0,y:0}}));const r={segments:a,isClosed:!0,isHole:!1},d=[],f=e?.1:1,c=Math.max(f,n.edgeOffsetX),m=Math.max(f,n.edgeOffsetY),y=[];n.holePattern==="4-corner"?(y.push({x:c,y:m}),y.push({x:t-c,y:m}),y.push({x:t-c,y:o-m}),y.push({x:c,y:o-m})):n.holePattern==="6-hole"?(y.push({x:c,y:m}),y.push({x:t/2,y:m}),y.push({x:t-c,y:m}),y.push({x:t-c,y:o-m}),y.push({x:t/2,y:o-m}),y.push({x:c,y:o-m})):n.holePattern==="8-hole"&&(y.push({x:c,y:m}),y.push({x:t/2,y:m}),y.push({x:t-c,y:m}),y.push({x:t-c,y:o/2}),y.push({x:t-c,y:o-m}),y.push({x:t/2,y:o-m}),y.push({x:c,y:o-m}),y.push({x:c,y:o/2}));const h=Math.max(e?.05:1,n.holeDiameter/2);if(n.holeType==="round")for(const P of y)d.push({center:P,radius:h});else if(n.holeType==="slotted"){const P=e?.1:2,k=Math.max(h*2,n.slotLength||h*3),w=Math.max(P,n.slotWidth||h*2),A=w/2,G=Math.max(0,(k-w)/2);for(const b of y){const g=[],x={x:b.x-G,y:b.y},S={x:b.x+G,y:b.y};g.push({type:"line",start:{x:x.x,y:x.y+A},end:{x:S.x,y:S.y+A}}),g.push({type:"arc",center:S,radius:A,startAngle:90*Math.PI/180,endAngle:270*Math.PI/180,counterClockwise:!1}),g.push({type:"line",start:{x:S.x,y:S.y-A},end:{x:x.x,y:x.y-A}}),g.push({type:"arc",center:x,radius:A,startAngle:270*Math.PI/180,endAngle:90*Math.PI/180,counterClockwise:!1}),d.push({segments:g,isClosed:!0,isHole:!0})}}const $=t/2,C=o/2;if(n.centerCutoutType==="round"&&n.centerCutoutDiameter&&n.centerCutoutDiameter>0)d.push({center:{x:$,y:C},radius:n.centerCutoutDiameter/2});else if(n.centerCutoutType==="rectangular"&&n.centerCutoutWidth&&n.centerCutoutHeight){const P=Math.min(n.centerCutoutWidth,t-c*2),k=Math.min(n.centerCutoutHeight,o-m*2),w=P/2,A=k/2,G=[{type:"line",start:{x:$-w,y:C-A},end:{x:$+w,y:C-A}},{type:"line",start:{x:$+w,y:C-A},end:{x:$+w,y:C+A}},{type:"line",start:{x:$+w,y:C+A},end:{x:$-w,y:C+A}},{type:"line",start:{x:$-w,y:C+A},end:{x:$-w,y:C-A}}];d.push({segments:G,isClosed:!0,isHole:!0})}return{name:"Structural Baseplate",units:n.units,outerContour:r,innerHoles:d,boundingBox:{minX:0,minY:0,maxX:t,maxY:o,width:t,height:o}}}const Gt=[{standard:"BS10",name:'BS 10 Table E - 1" NB',nominalBore:'1"',outerDiameter:114.3,innerBore:33.4,pitchCircleDiameter:82.6,boltCount:4,boltDiameter:14.3,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 1.5" NB',nominalBore:'1.5"',outerDiameter:133.4,innerBore:48.3,pitchCircleDiameter:98.4,boltCount:4,boltDiameter:14.3,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 2" NB',nominalBore:'2"',outerDiameter:152.4,innerBore:60.3,pitchCircleDiameter:114.3,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 2.5" NB',nominalBore:'2.5"',outerDiameter:165.1,innerBore:73,pitchCircleDiameter:127,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 3" NB',nominalBore:'3"',outerDiameter:184.2,innerBore:88.9,pitchCircleDiameter:146,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 4" NB',nominalBore:'4"',outerDiameter:215.9,innerBore:114.3,pitchCircleDiameter:177.8,boltCount:8,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 6" NB',nominalBore:'6"',outerDiameter:279.4,innerBore:168.3,pitchCircleDiameter:235,boltCount:8,boltDiameter:20.6,units:"mm"},{standard:"BS10",name:'BS 10 Table E - 8" NB',nominalBore:'8"',outerDiameter:336.6,innerBore:219.1,pitchCircleDiameter:292.1,boltCount:8,boltDiameter:20.6,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 2" NB',nominalBore:'2"',outerDiameter:152.4,innerBore:60.3,pitchCircleDiameter:114.3,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 3" NB',nominalBore:'3"',outerDiameter:184.2,innerBore:88.9,pitchCircleDiameter:146,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 4" NB',nominalBore:'4"',outerDiameter:215.9,innerBore:114.3,pitchCircleDiameter:177.8,boltCount:4,boltDiameter:17.5,units:"mm"},{standard:"BS10",name:'BS 10 Table D - 6" NB',nominalBore:'6"',outerDiameter:279.4,innerBore:168.3,pitchCircleDiameter:235,boltCount:8,boltDiameter:17.5,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN25 (1")',nominalBore:"DN25",outerDiameter:115,innerBore:34,pitchCircleDiameter:85,boltCount:4,boltDiameter:14,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN50 (2")',nominalBore:"DN50",outerDiameter:165,innerBore:61,pitchCircleDiameter:125,boltCount:4,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN80 (3")',nominalBore:"DN80",outerDiameter:200,innerBore:90,pitchCircleDiameter:160,boltCount:8,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN100 (4")',nominalBore:"DN100",outerDiameter:220,innerBore:115,pitchCircleDiameter:180,boltCount:8,boltDiameter:18,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN150 (6")',nominalBore:"DN150",outerDiameter:285,innerBore:169,pitchCircleDiameter:240,boltCount:8,boltDiameter:22,units:"mm"},{standard:"DIN",name:'DIN PN16 - DN200 (8")',nominalBore:"DN200",outerDiameter:340,innerBore:220,pitchCircleDiameter:295,boltCount:12,boltDiameter:22,units:"mm"},{standard:"ASME",name:'ASME 1" Class 150',nominalBore:'1"',outerDiameter:4.25,innerBore:1.36,pitchCircleDiameter:3.12,boltCount:4,boltDiameter:.62,units:"inch"},{standard:"ASME",name:'ASME 2" Class 150',nominalBore:'2"',outerDiameter:6,innerBore:2.44,pitchCircleDiameter:4.75,boltCount:4,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 3" Class 150',nominalBore:'3"',outerDiameter:7.5,innerBore:3.57,pitchCircleDiameter:6,boltCount:4,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 4" Class 150',nominalBore:'4"',outerDiameter:9,innerBore:4.57,pitchCircleDiameter:7.5,boltCount:8,boltDiameter:.75,units:"inch"},{standard:"ASME",name:'ASME 6" Class 150',nominalBore:'6"',outerDiameter:11,innerBore:6.72,pitchCircleDiameter:9.5,boltCount:8,boltDiameter:.88,units:"inch"},{standard:"ASME",name:'ASME 8" Class 150',nominalBore:'8"',outerDiameter:13.5,innerBore:8.72,pitchCircleDiameter:11.75,boltCount:8,boltDiameter:.88,units:"inch"}];function Nn(n){const e=n.units==="inch",t=Math.max(e?.5:10,n.outerDiameter),o=Math.max(0,Math.min(n.innerBore,t-(e?.2:5))),i=Math.max(o+(e?.1:2),Math.min(n.pitchCircleDiameter,t-(e?.1:2))),a=t/2,r={x:a,y:a},f={segments:[{type:"arc",center:r,radius:a,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:r,radius:a,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],isClosed:!0,isHole:!1},c=[];o>0&&c.push({center:r,radius:o/2});const m=Math.max(1,Math.floor(n.boltCount)),u=Math.max(e?.05:.5,n.boltDiameter/2),h=i/2;for(let $=0;$<m;$++){const C=2*Math.PI*$/m,P=r.x+h*Math.cos(C),k=r.y+h*Math.sin(C);c.push({center:{x:P,y:k},radius:u})}return{name:"Pipe Flange",units:n.units,outerContour:f,innerHoles:c,boundingBox:{minX:0,minY:0,maxX:t,maxY:t,width:t,height:t}}}function _n(n){const e=n.units==="inch",s=e?.5:10,t=Math.max(s,n.baseWidth),o=Math.max(s,n.height),i=n.hasWeldSnipe?Math.min(n.snipeSize||(e?1:25),Math.min(t,o)*.4):0,a=[];i>0?(a.push({type:"line",start:{x:i,y:0},end:{x:t,y:0}}),a.push({type:"line",start:{x:t,y:0},end:{x:0,y:o}}),a.push({type:"line",start:{x:0,y:o},end:{x:0,y:i}}),a.push({type:"line",start:{x:0,y:i},end:{x:i,y:0}})):(a.push({type:"line",start:{x:0,y:0},end:{x:t,y:0}}),a.push({type:"line",start:{x:t,y:0},end:{x:0,y:o}}),a.push({type:"line",start:{x:0,y:o},end:{x:0,y:0}}));const r={segments:a,isClosed:!0,isHole:!1},d=[];return{name:"Structural Gusset Plate",units:n.units,outerContour:r,innerHoles:d,boundingBox:{minX:0,minY:0,maxX:t,maxY:o,width:t,height:o}}}function Hn(n){const e=n.units==="inch",s=e?4:100,t=Math.max(s,n.width),o=Math.max(s,n.height),i=n.borderMarginMm??(e?1.5:40),a=e?i>8?i/25.4:i:i<5?i*25.4:i,r=Math.max(e?.5:15,Math.min(a,Math.min(t,o)*.25)),f={segments:[{type:"line",start:{x:0,y:0},end:{x:t,y:0}},{type:"line",start:{x:t,y:0},end:{x:t,y:o}},{type:"line",start:{x:t,y:o},end:{x:0,y:o}},{type:"line",start:{x:0,y:o},end:{x:0,y:0}}],isClosed:!0,isHole:!1},c=[],m=n.mountingHoleDiameter??(e?.3125:8),y=e?m>2?m/25.4:m:m<1?m*25.4:m;if(n.hasMountingHoles&&y>0){const g=y/2,x=r/2;c.push({center:{x,y:x},radius:g}),c.push({center:{x:t-x,y:x},radius:g}),c.push({center:{x:t-x,y:o-x},radius:g}),c.push({center:{x,y:o-x},radius:g}),o>(e?24:600)&&(c.push({center:{x,y:o/2},radius:g}),c.push({center:{x:t-x,y:o/2},radius:g}))}const u=n.kickPlateHeightMm??(e?12:300),h=e?u>30?u/25.4:u:u<30?u*25.4:u,$=n.hasKickPlate?Math.max(0,Math.min(o*.4,h)):0,C=t-2*r,P=o-2*r-$,k=Math.max(2,Math.min(12,Math.floor(n.gridColumns||(t>(e?20:500)?4:2)))),w=Math.max(2,Math.min(20,Math.floor(n.gridRows||(o>(e?20:500)?6:3)))),A=C/k,G=P/w,b=e?.2:6;for(let g=0;g<w;g++)for(let x=0;x<k;x++){const S=r+x*A,M=r+$+g*G,l=S+A/2,p=M+G/2,_=e?.15:4,H=Math.max(_,A-b),O=Math.max(_,G-b),R=Math.min(H,O)/2;if(n.patternType==="diamond_lattice"){const T=H/2,L=O/2,F=[{type:"line",start:{x:l,y:p-L},end:{x:l+T,y:p}},{type:"line",start:{x:l+T,y:p},end:{x:l,y:p+L}},{type:"line",start:{x:l,y:p+L},end:{x:l-T,y:p}},{type:"line",start:{x:l-T,y:p},end:{x:l,y:p-L}}];c.push({segments:F,isClosed:!0,isHole:!0})}else if(n.patternType==="islamic_star"){const T=[];for(let F=0;F<16;F++){const U=F%2===0?R:R*.52,Y=F*Math.PI/8,z=(F+1)*Math.PI/8,it=(F+1)%2===0?R:R*.52;T.push({type:"line",start:{x:l+U*Math.cos(Y),y:p+U*Math.sin(Y)},end:{x:l+it*Math.cos(z),y:p+it*Math.sin(z)}})}c.push({segments:T,isClosed:!0,isHole:!0})}else if(n.patternType==="floral_mandala"){const T=[];for(let F=0;F<32;F++){const U=F*2*Math.PI/32,Y=(F+1)*2*Math.PI/32,z=R*(.42+.56*Math.pow(Math.abs(Math.cos(4*U)),1.3)),it=R*(.42+.56*Math.pow(Math.abs(Math.cos(4*Y)),1.3));T.push({type:"line",start:{x:l+z*Math.cos(U),y:p+z*Math.sin(U)},end:{x:l+it*Math.cos(Y),y:p+it*Math.sin(Y)}})}c.push({segments:T,isClosed:!0,isHole:!0})}else if(n.patternType==="tree_of_life"){const T=R*.9,L=R*.42,F=[{type:"line",start:{x:l,y:p-T},end:{x:l+L,y:p}},{type:"line",start:{x:l+L,y:p},end:{x:l,y:p+T}},{type:"line",start:{x:l,y:p+T},end:{x:l-L,y:p}},{type:"line",start:{x:l-L,y:p},end:{x:l,y:p-T}}];c.push({segments:F,isClosed:!0,isHole:!0});const U=.55,Y=R*.45,z=R*.15,it=[{type:"line",start:{x:l-Y,y:p-z-T*U},end:{x:l-Y+L*U,y:p-z}},{type:"line",start:{x:l-Y+L*U,y:p-z},end:{x:l-Y,y:p-z+T*U}},{type:"line",start:{x:l-Y,y:p-z+T*U},end:{x:l-Y-L*U,y:p-z}},{type:"line",start:{x:l-Y-L*U,y:p-z},end:{x:l-Y,y:p-z-T*U}}];c.push({segments:it,isClosed:!0,isHole:!0});const ct=[{type:"line",start:{x:l+Y,y:p-z-T*U},end:{x:l+Y+L*U,y:p-z}},{type:"line",start:{x:l+Y+L*U,y:p-z},end:{x:l+Y,y:p-z+T*U}},{type:"line",start:{x:l+Y,y:p-z+T*U},end:{x:l+Y-L*U,y:p-z}},{type:"line",start:{x:l+Y-L*U,y:p-z},end:{x:l+Y,y:p-z-T*U}}];c.push({segments:ct,isClosed:!0,isHole:!0})}else if(n.patternType==="chevron_herringbone"){const T=H*.45,L=O*.22,F=O*.22,U=[{type:"line",start:{x:l,y:p+F+L},end:{x:l+T,y:p+F}},{type:"line",start:{x:l+T,y:p+F},end:{x:l+T*.8,y:p+F-L*.5}},{type:"line",start:{x:l+T*.8,y:p+F-L*.5},end:{x:l,y:p+F+L*.4}},{type:"line",start:{x:l,y:p+F+L*.4},end:{x:l-T*.8,y:p+F-L*.5}},{type:"line",start:{x:l-T*.8,y:p+F-L*.5},end:{x:l-T,y:p+F}},{type:"line",start:{x:l-T,y:p+F},end:{x:l,y:p+F+L}}];c.push({segments:U,isClosed:!0,isHole:!0});const Y=[{type:"line",start:{x:l,y:p-F+L},end:{x:l+T,y:p-F}},{type:"line",start:{x:l+T,y:p-F},end:{x:l+T*.8,y:p-F-L*.5}},{type:"line",start:{x:l+T*.8,y:p-F-L*.5},end:{x:l,y:p-F+L*.4}},{type:"line",start:{x:l,y:p-F+L*.4},end:{x:l-T*.8,y:p-F-L*.5}},{type:"line",start:{x:l-T*.8,y:p-F-L*.5},end:{x:l-T,y:p-F}},{type:"line",start:{x:l-T,y:p-F},end:{x:l,y:p-F+L}}];c.push({segments:Y,isClosed:!0,isHole:!0})}else if(n.patternType==="voronoi_matrix"){const L=(g*1.618+x*2.718)%(Math.PI*2),F=[];for(let U=0;U<6;U++){const Y=U*2*Math.PI/6+L*.15,z=(U+1)*2*Math.PI/6+L*.15,it=R*(.75+.22*Math.sin(U*2.3+L)),ct=R*(.75+.22*Math.sin((U+1)*2.3+L));F.push({type:"line",start:{x:l+it*Math.cos(Y),y:p+it*Math.sin(Y)},end:{x:l+ct*Math.cos(z),y:p+ct*Math.sin(z)}})}c.push({segments:F,isClosed:!0,isHole:!0})}else if(n.patternType==="honeycomb"){const T=[];for(let L=0;L<6;L++){const F=L*Math.PI/3,U=(L+1)*Math.PI/3;T.push({type:"line",start:{x:l+R*Math.cos(F),y:p+R*Math.sin(F)},end:{x:l+R*Math.cos(U),y:p+R*Math.sin(U)}})}c.push({segments:T,isClosed:!0,isHole:!0})}else{const T=H*.4,L=O*.42,F=[{type:"line",start:{x:l-T,y:p-L},end:{x:l+T,y:p-L}},{type:"line",start:{x:l+T,y:p-L},end:{x:l+T,y:p+L}},{type:"line",start:{x:l+T,y:p+L},end:{x:l-T,y:p+L}},{type:"line",start:{x:l-T,y:p+L},end:{x:l-T,y:p-L}}];c.push({segments:F,isClosed:!0,isHole:!0})}}return{name:"Architectural CNC Jali / Gate Panel",units:n.units,outerContour:f,innerHoles:c,boundingBox:{minX:0,minY:0,maxX:t,maxY:o,width:t,height:o}}}function Rn(n){const e=n.units==="inch",s=e?.75:20,t=Math.max(s,n.baseWidth),o=Math.max(s,n.height),i=Math.min(n.chamferTop,o-(e?.2:5)),a=Math.min(n.chamferRight,t-(e?.2:5)),d={segments:[{type:"line",start:{x:0,y:0},end:{x:t,y:0}},{type:"line",start:{x:t,y:0},end:{x:t,y:o-i}},{type:"line",start:{x:t,y:o-i},end:{x:t-a,y:o}},{type:"line",start:{x:t-a,y:o},end:{x:0,y:o}},{type:"line",start:{x:0,y:o},end:{x:0,y:0}}],isClosed:!0,isHole:!1},f=[];{const c=n.baseHoleCount,m=n.baseHoleDiameter/2,y=t*.7/(c+1),u=Math.min(e?.6:15,(o-i)/2);for(let h=1;h<=c;h++)f.push({center:{x:y*h,y:u},radius:m})}{const c=n.uprightHoleCount,m=n.uprightHoleDiameter/2,y=o*.7/(c+1),u=Math.min(e?.6:15,(t-a)/2);for(let h=1;h<=c;h++)f.push({center:{x:u,y:y*h},radius:m})}{const c=Math.min(t,o)*.35,m=n.lighteningHoleDiameter||c;f.push({center:{x:t*.38,y:o*.38},radius:m/2})}return{name:"Mounting Gusset & Bracket",units:n.units,outerContour:d,innerHoles:f,boundingBox:{minX:0,minY:0,maxX:t,maxY:o,width:t,height:o}}}function Gn(n){const e=n.units==="inch",t=Math.max(e?.5:10,n.outerDiameter),o=Math.max(0,Math.min(n.innerDiameter,t-(e?.1:2))),i=t/2,a={x:i,y:i},d={segments:[{type:"arc",center:a,radius:i,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:a,radius:i,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],isClosed:!0,isHole:!1},f=[];if(o>0&&f.push({center:a,radius:o/2}),n.boltDiameter&&n.pitchCircleDiameter){const c=Math.max(1,n.boltCount),m=n.boltDiameter/2,y=n.pitchCircleDiameter/2;for(let u=0;u<c;u++){const h=2*Math.PI*u/c;f.push({center:{x:a.x+y*Math.cos(h),y:a.y+y*Math.sin(h)},radius:m})}}return{name:"Circular Disc / Washer",units:n.units,outerContour:d,innerHoles:f,boundingBox:{minX:0,minY:0,maxX:t,maxY:t,width:t,height:t}}}function On(n){if(n.type==="line"){const e=n.end.x-n.start.x,s=n.end.y-n.start.y;return Math.sqrt(e*e+s*s)}else if(n.type==="arc"){let e=Math.abs(n.endAngle-n.startAngle);return n.counterClockwise&&(e=2*Math.PI-e),n.radius*e}return 0}function sn(n){if(!n.segments||n.segments.length===0)return 0;let e=0;for(const s of n.segments)if(s.type==="line")e+=s.start.x*s.end.y-s.end.x*s.start.y;else if(s.type==="arc"){const t={x:s.center.x+s.radius*Math.cos(s.startAngle),y:s.center.y+s.radius*Math.sin(s.startAngle)},o={x:s.center.x+s.radius*Math.cos(s.endAngle),y:s.center.y+s.radius*Math.sin(s.endAngle)};e+=t.x*o.y-o.x*t.y;let i=Math.abs(s.endAngle-s.startAngle);s.counterClockwise&&(i=2*Math.PI-i);const a=.5*s.radius*s.radius*(i-Math.sin(i));e+=s.counterClockwise?-a*2:a*2}return Math.abs(e)/2}function Be(n){let e=0;for(const s of n.segments)e+=On(s);return e}function Yt(n,e,s){const o=n.units==="inch"?25.4:1,i=Be(n.outerContour);let a=0,r=0;for(const l of n.innerHoles)r+=1,"radius"in l?a+=2*Math.PI*l.radius:a+=Be(l);const d=i+a,f=1+r,c=d*o,m=c/25.4,y=n.boundingBox.width*o,u=n.boundingBox.height*o,h=y/25.4,$=u/25.4;let C=sn(n.outerContour);if(C<=0&&(C=n.boundingBox.width*n.boundingBox.height,n.name.includes("Flange")||n.name.includes("Disc"))){const l=n.boundingBox.width/2;C=Math.PI*l*l}let P=0;for(const l of n.innerHoles)if("radius"in l){const p=l.radius;P+=Math.PI*p*p}else P+=sn(l);const k=C*.85,w=Math.min(P,k),G=Math.max(C*.15,C-w)*(o*o),b=G/(25.4*25.4),S=G/100*(e/10)*s/1e3,M=S*2.20462262;return{totalCutLengthMm:Math.round(c*10)/10,totalCutLengthInches:Math.round(m*100)/100,pierceCount:f,boundingBoxWidthMm:Math.round(y*10)/10,boundingBoxHeightMm:Math.round(u*10)/10,boundingBoxWidthInches:Math.round(h*100)/100,boundingBoxHeightInches:Math.round($*100)/100,netAreaSqMm:Math.round(G),netAreaSqInches:Math.round(b*100)/100,theoreticalWeightKg:Math.round(S*100)/100,theoreticalWeightLbs:Math.round(M*100)/100}}function Wn(n,e){const s=[],o=n.units==="inch"?25.4:1,i=n.outerContour.segments;if(i.length===0)s.push({rule:"Contour Existence",severity:"error",message:"Part has no outer cutting contour."});else{const y=i[0],u=i[i.length-1],h=y.type==="line"?y.start:{x:y.center.x+y.radius*Math.cos(y.startAngle),y:y.center.y+y.radius*Math.sin(y.startAngle)},$=u.type==="line"?u.end:{x:u.center.x+u.radius*Math.cos(u.endAngle),y:u.center.y+u.radius*Math.sin(u.endAngle)},C=Math.sqrt(($.x-h.x)**2+($.y-h.y)**2)*o;C>.1&&s.push({rule:"Closed Polyline Rule",severity:"error",message:`Outer contour is not closed (gap is ${C.toFixed(2)} mm). Laser CAM will reject open contours.`,actualValue:C,thresholdValue:.1})}for(let y=0;y<n.innerHoles.length;y++){const u=n.innerHoles[y];if("radius"in u){const $=u.radius*2*o;$<e&&s.push({rule:"Piercing Blowout Rule",severity:"error",message:`Hole #${y+1} diameter (${$.toFixed(1)} mm) is less than sheet thickness (${e.toFixed(1)} mm). Fiber laser piercing will blow out or damage the lens nozzle.`,actualValue:$,thresholdValue:e})}else{const h=u;let $=1/0,C=1/0,P=-1/0,k=-1/0;for(const A of h.segments)A.type==="line"?($=Math.min($,A.start.x,A.end.x),P=Math.max(P,A.start.x,A.end.x),C=Math.min(C,A.start.y,A.end.y),k=Math.max(k,A.start.y,A.end.y)):($=Math.min($,A.center.x-A.radius),P=Math.max(P,A.center.x+A.radius),C=Math.min(C,A.center.y-A.radius),k=Math.max(k,A.center.y+A.radius));const w=Math.min(P-$,k-C)*o;w<e&&s.push({rule:"Piercing Blowout Rule",severity:"error",message:`Cutout / Slot #${y+1} minimum span (${w.toFixed(1)} mm) is less than sheet thickness (${e.toFixed(1)} mm). Fiber laser piercing will blow out.`,actualValue:w,thresholdValue:e})}}const a=e*1.5,r=n.boundingBox;for(let y=0;y<n.innerHoles.length;y++){const u=n.innerHoles[y];if("radius"in u){const h=u,$=h.center.x,C=h.center.y,P=h.radius,k=($-P-r.minX)*o,w=(r.maxX-($+P))*o,A=(C-P-r.minY)*o,G=(r.maxY-(C+P))*o,b=Math.min(k,w,A,G);b<a&&b>0&&s.push({rule:"Edge Margin Distance Rule",severity:"warning",message:`Hole #${y+1} is too close to the outer edge (${b.toFixed(1)} mm vs safe margin ${a.toFixed(1)} mm). Laser heat may warp or melt the edge.`,actualValue:b,thresholdValue:a})}}const d=r.width*o,f=r.height*o;d>4e3||f>2e3?s.push({rule:"Bed Size Limit",severity:"error",message:`Part dimensions (${d.toFixed(0)} x ${f.toFixed(0)} mm) exceed standard sheet metal laser bed size (3000 x 1500 mm / 10 x 5 ft). Check your unit selection.`}):(d<5||f<5)&&s.push({rule:"Minimum Part Size",severity:"warning",message:`Part size (${d.toFixed(1)} x ${f.toFixed(1)} mm) is extremely small. Small parts may fall through laser bed slats into the slag tray.`});const c=s.some(y=>y.severity==="error"),m=s.some(y=>y.severity==="warning");return{isManufacturable:!c,hasWarnings:m,issues:s}}const re=[{id:"cypcut",name:"CypCut (FSCUT / Global Fiber Laser)",outerLayerName:"0",outerColor:7,innerLayerName:"1",innerColor:2,etchLayerName:"2",etchColor:4},{id:"trumpf",name:"Trumpf TruTops (Boost / Classic)",outerLayerName:"OUTER",outerColor:1,innerLayerName:"INNER",innerColor:3,etchLayerName:"MARK",etchColor:4},{id:"sigmanest",name:"SigmaNEST / ProNest",outerLayerName:"CUT_EXTERIOR",outerColor:1,innerLayerName:"CUT_INTERIOR",innerColor:2,etchLayerName:"SCRIBE",etchColor:5},{id:"bysoft",name:"Bystronic BySoft / ByVision",outerLayerName:"CUT_OUTER",outerColor:7,innerLayerName:"CUT_INNER",innerColor:3,etchLayerName:"ETCH",etchColor:4},{id:"generic",name:"Universal Standard CAM",outerLayerName:"0_CUT_OUTER",outerColor:7,innerLayerName:"1_CUT_INNER",innerColor:2,etchLayerName:"2_MARKING",etchColor:4}];function Un(n,e){const t=n.units==="inch"?1:4,o=[],i=(a,r)=>{o.push(a.toString()),o.push(r.toString())};i(0,"SECTION"),i(2,"HEADER"),i(9,"$ACADVER"),i(1,"AC1024"),i(9,"$INSUNITS"),i(70,t),i(9,"$EXTMIN"),i(10,n.boundingBox.minX.toFixed(4)),i(20,n.boundingBox.minY.toFixed(4)),i(30,"0.0"),i(9,"$EXTMAX"),i(10,n.boundingBox.maxX.toFixed(4)),i(20,n.boundingBox.maxY.toFixed(4)),i(30,"0.0"),i(0,"ENDSEC"),i(0,"SECTION"),i(2,"TABLES"),i(0,"TABLE"),i(2,"LAYER"),i(70,3),i(0,"LAYER"),i(2,e.outerLayerName),i(70,0),i(62,e.outerColor),i(6,"CONTINUOUS"),i(0,"LAYER"),i(2,e.innerLayerName),i(70,0),i(62,e.innerColor),i(6,"CONTINUOUS"),i(0,"LAYER"),i(2,e.etchLayerName),i(70,0),i(62,e.etchColor),i(6,"CONTINUOUS"),i(0,"ENDTAB"),i(0,"ENDSEC"),i(0,"SECTION"),i(2,"ENTITIES"),an(n.outerContour,e.outerLayerName,e.outerColor,i);for(const a of n.innerHoles)if("radius"in a){const r=a;i(0,"CIRCLE"),i(8,e.innerLayerName),i(62,e.innerColor),i(10,r.center.x.toFixed(4)),i(20,r.center.y.toFixed(4)),i(30,"0.0"),i(40,r.radius.toFixed(4))}else an(a,e.innerLayerName,e.innerColor,i);return i(0,"ENDSEC"),i(0,"EOF"),o.join(`\r
`)+`\r
`}function an(n,e,s,t){if(n.segments.length===2&&n.segments[0].type==="arc"&&n.segments[1].type==="arc"&&n.segments[0].radius===n.segments[1].radius){const o=n.segments[0];t(0,"CIRCLE"),t(8,e),t(62,s),t(10,o.center.x.toFixed(4)),t(20,o.center.y.toFixed(4)),t(30,"0.0"),t(40,o.radius.toFixed(4));return}t(0,"LWPOLYLINE"),t(8,e),t(62,s),t(90,n.segments.length),t(70,n.isClosed?1:0);for(const o of n.segments)if(o.type==="line")t(10,o.start.x.toFixed(4)),t(20,o.start.y.toFixed(4)),t(42,"0.0");else if(o.type==="arc"){const i=o.center.x+o.radius*Math.cos(o.startAngle),a=o.center.y+o.radius*Math.sin(o.startAngle);let r=o.endAngle-o.startAngle;o.counterClockwise?r<0&&(r+=2*Math.PI):r>0&&(r-=2*Math.PI);const d=Math.tan(r/4);t(10,i.toFixed(4)),t(20,a.toFixed(4)),t(42,d.toFixed(6))}}const zn=["defpoints","dimension","dim","text","title","border","hatch","notes","anno"];function be(n){const e=n.toLowerCase();return zn.some(s=>e.includes(s))}function _e(n,e){return Math.sqrt((n.x-e.x)**2+(n.y-e.y)**2)}function jn(n,e,s){const t=e.x-n.x,o=e.y-n.y,i=Math.sqrt(t*t+o*o);if(i<1e-6||Math.abs(s)<1e-6)return{type:"line",start:n,end:e};const a=i/2*((1+s*s)/(2*Math.abs(s))),r=(n.x+e.x)/2,d=(n.y+e.y)/2,f=-o/i,c=t/i,m=i/2*((1-s*s)/(2*s)),y=r+f*m,u=d+c*m;let h=Math.atan2(n.y-u,n.x-y),$=Math.atan2(e.y-u,e.x-y);return h<0&&(h+=2*Math.PI),$<0&&($+=2*Math.PI),{type:"arc",center:{x:y,y:u},radius:a,startAngle:h,endAngle:$,counterClockwise:s>0}}function rn(n,e=8){const s=[];for(const t of n)if(t.type==="line")s.push({x:t.start.x,y:t.start.y});else if(t.type==="arc"){let o=t.endAngle-t.startAngle;t.counterClockwise&&o<0&&(o+=2*Math.PI),!t.counterClockwise&&o>0&&(o-=2*Math.PI);for(let i=0;i<e;i++){const a=i/e,r=t.startAngle+o*a;s.push({x:t.center.x+t.radius*Math.cos(r),y:t.center.y+t.radius*Math.sin(r)})}}return s}function cn(n,e){let s=!1;const t=e.length;for(let o=0,i=t-1;o<t;i=o++){const a=e[o].x,r=e[o].y,d=e[i].x,f=e[i].y;r>n.y!=f>n.y&&n.x<(d-a)*(n.y-r)/(f-r)+a&&(s=!s)}return s}function Mn(n){var A,G;const e=n.split(/\r?\n/);let s="mm";const t=[],o=[],i=[],a=[];let r=!1,d=!1,f="",c=0;for(;c<e.length-1;){const b=parseInt(e[c].trim(),10),g=e[c+1].trim();if(c+=2,b===0&&g==="SECTION"){const x=parseInt((A=e[c])==null?void 0:A.trim(),10),S=(G=e[c+1])==null?void 0:G.trim();x===2&&S==="HEADER"&&(d=!0),x===2&&S==="ENTITIES"&&(r=!0)}else b===0&&g==="ENDSEC"&&(d=!1,r=!1);if(d){if(b===9)f=g;else if(f==="$INSUNITS"&&b===70){const x=parseInt(g,10);x===1?s="inch":x===4&&(s="mm")}}if(r&&b===0){if(g==="LINE"){const x={x1:0,y1:0,x2:0,y2:0,layer:"0"};for(;c<e.length-1&&parseInt(e[c].trim(),10)!==0;){const S=parseInt(e[c].trim(),10),M=e[c+1].trim();c+=2,S===8?x.layer=M:S===10?x.x1=parseFloat(M):S===20?x.y1=parseFloat(M):S===11?x.x2=parseFloat(M):S===21&&(x.y2=parseFloat(M))}be(x.layer)||t.push(x)}else if(g==="CIRCLE"){const x={cx:0,cy:0,r:0,layer:"0"};for(;c<e.length-1&&parseInt(e[c].trim(),10)!==0;){const S=parseInt(e[c].trim(),10),M=e[c+1].trim();c+=2,S===8?x.layer=M:S===10?x.cx=parseFloat(M):S===20?x.cy=parseFloat(M):S===40&&(x.r=parseFloat(M))}be(x.layer)||o.push(x)}else if(g==="ARC"){const x={cx:0,cy:0,r:0,sa:0,ea:0,layer:"0"};for(;c<e.length-1&&parseInt(e[c].trim(),10)!==0;){const S=parseInt(e[c].trim(),10),M=e[c+1].trim();c+=2,S===8?x.layer=M:S===10?x.cx=parseFloat(M):S===20?x.cy=parseFloat(M):S===40?x.r=parseFloat(M):S===50?x.sa=parseFloat(M)*Math.PI/180:S===51&&(x.ea=parseFloat(M)*Math.PI/180)}be(x.layer)||i.push(x)}else if(g==="LWPOLYLINE"){const x={vertices:[],isClosed:!1,layer:"0"};let S=0,M=0,l=!1,p=!1;for(;c<e.length-1&&parseInt(e[c].trim(),10)!==0;){const _=parseInt(e[c].trim(),10),H=e[c+1].trim();if(c+=2,_===8)x.layer=H;else if(_===70)x.isClosed=(parseInt(H,10)&1)===1;else if(_===10)l&&p&&(x.vertices.push({x:S,y:M}),p=!1),S=parseFloat(H),l=!0;else if(_===20)M=parseFloat(H),p=!0;else if(_===42){const O=x.vertices[x.vertices.length-1];O&&(O.bulge=parseFloat(H))}}l&&p&&x.vertices.push({x:S,y:M}),be(x.layer)||a.push(x)}}}const m=[];for(const b of a){if(b.vertices.length<2)continue;const g=[],x=b.vertices.length,S=b.isClosed?x:x-1;for(let R=0;R<S;R++){const T=b.vertices[R],L=b.vertices[(R+1)%x];T.bulge&&Math.abs(T.bulge)>1e-5?g.push(jn(T,L,T.bulge)):g.push({type:"line",start:{x:T.x,y:T.y},end:{x:L.x,y:L.y}})}const M=rn(g);let l=1/0,p=1/0,_=-1/0,H=-1/0;for(const R of M)l=Math.min(l,R.x),_=Math.max(_,R.x),p=Math.min(p,R.y),H=Math.max(H,R.y);const O={minX:l,minY:p,maxX:_,maxY:H,width:Math.max(1,_-l),height:Math.max(1,H-p)};m.push({segments:g,polygon:M,bbox:O,bboxArea:O.width*O.height})}const y=[];for(const b of t)y.push({kind:"line",start:{x:b.x1,y:b.y1},end:{x:b.x2,y:b.y2},visited:!1});for(const b of i){const g={x:b.cx+b.r*Math.cos(b.sa),y:b.cy+b.r*Math.sin(b.sa)},x={x:b.cx+b.r*Math.cos(b.ea),y:b.cy+b.r*Math.sin(b.ea)};y.push({kind:"arc",start:g,end:x,center:{x:b.cx,y:b.cy},radius:b.r,startAngle:b.sa,endAngle:b.ea,counterClockwise:!0,visited:!1})}const u=.35;for(let b=0;b<y.length;b++){if(y[b].visited)continue;const g=[],x=y[b];x.visited=!0;const S={...x.start};let M={...x.end};x.kind==="line"?g.push({type:"line",start:x.start,end:x.end}):g.push({type:"arc",center:x.center,radius:x.radius,startAngle:x.startAngle,endAngle:x.endAngle,counterClockwise:x.counterClockwise});let l=!0;for(;l;){if(l=!1,_e(M,S)<=u&&g.length>=2){const p=g[g.length-1];p.type==="line"&&(p.end={...S});break}for(let p=0;p<y.length;p++){if(y[p].visited)continue;const _=y[p];if(_e(M,_.start)<=u){_.visited=!0,_.kind==="line"?g.push({type:"line",start:{...M},end:_.end}):g.push({type:"arc",center:_.center,radius:_.radius,startAngle:_.startAngle,endAngle:_.endAngle,counterClockwise:_.counterClockwise}),M={..._.end},l=!0;break}else if(_e(M,_.end)<=u){_.visited=!0,_.kind==="line"?g.push({type:"line",start:{...M},end:_.start}):g.push({type:"arc",center:_.center,radius:_.radius,startAngle:_.endAngle,endAngle:_.startAngle,counterClockwise:!_.counterClockwise}),M={..._.start},l=!0;break}}}if(g.length>0){const p=rn(g);let _=1/0,H=1/0,O=-1/0,R=-1/0;for(const L of p)_=Math.min(_,L.x),O=Math.max(O,L.x),H=Math.min(H,L.y),R=Math.max(R,L.y);const T={minX:_,minY:H,maxX:O,maxY:R,width:Math.max(1,O-_),height:Math.max(1,R-H)};m.push({segments:g,polygon:p,bbox:T,bboxArea:T.width*T.height})}}const h=new Map;for(let b=0;b<m.length;b++){const g=m[b];let x=-1,S=1/0;for(let M=0;M<m.length;M++){if(b===M)continue;const l=m[M];if(l.bbox.minX<=g.bbox.minX+.1&&l.bbox.maxX>=g.bbox.maxX-.1&&l.bbox.minY<=g.bbox.minY+.1&&l.bbox.maxY>=g.bbox.maxY-.1&&l.bboxArea>g.bboxArea){const p=g.polygon[0]||{x:(g.bbox.minX+g.bbox.maxX)/2,y:(g.bbox.minY+g.bbox.maxY)/2};cn(p,l.polygon)&&l.bboxArea<S&&(S=l.bboxArea,x=M)}}x!==-1&&h.set(b,x)}const $=[],C=new Map;for(let b=0;b<m.length;b++)h.has(b)||($.push(b),C.set(b,[]));for(let b=0;b<m.length;b++)if(h.has(b)){const g=h.get(b);C.has(g)&&C.get(g).push(m[b].segments)}const P=new Map,k=[];for(const b of $)P.set(b,[]);for(const b of o){const g={x:b.cx,y:b.cy};let x=-1,S=1/0;for(const M of $){const l=m[M];b.cx>=l.bbox.minX&&b.cx<=l.bbox.maxX&&b.cy>=l.bbox.minY&&b.cy<=l.bbox.maxY&&cn(g,l.polygon)&&l.bboxArea<S&&(S=l.bboxArea,x=M)}x!==-1?P.get(x).push({center:g,radius:b.r}):k.push({center:g,radius:b.r})}const w=[];for(let b=0;b<$.length;b++){const g=$[b],x=m[g],S=[],M=C.get(g)||[];for(const p of M)S.push({segments:p,isClosed:!0,isHole:!0});const l=P.get(g)||[];for(const p of l)S.push(p);w.push({name:$.length>1?`Sanitized Part #${b+1}`:"Sanitized CNC Drawing",units:s,outerContour:{segments:x.segments,isClosed:!0,isHole:!1},innerHoles:S,boundingBox:x.bbox})}if(w.length===0&&k.length>0){const b=[...k].sort((l,p)=>p.radius-l.radius),g=b[0],x=[{type:"arc",center:{...g.center},radius:g.radius,startAngle:0,endAngle:Math.PI,counterClockwise:!1},{type:"arc",center:{...g.center},radius:g.radius,startAngle:Math.PI,endAngle:2*Math.PI,counterClockwise:!1}],S=b.slice(1),M={minX:g.center.x-g.radius,minY:g.center.y-g.radius,maxX:g.center.x+g.radius,maxY:g.center.y+g.radius,width:g.radius*2,height:g.radius*2};w.push({name:"Sanitized CNC Disc",units:s,outerContour:{segments:x,isClosed:!0,isHole:!1},innerHoles:S,boundingBox:M})}return w.length===0&&w.push({name:"Empty DXF Drawing",units:s,outerContour:{segments:[{type:"line",start:{x:0,y:0},end:{x:100,y:0}},{type:"line",start:{x:100,y:0},end:{x:100,y:100}},{type:"line",start:{x:100,y:100},end:{x:0,y:100}},{type:"line",start:{x:0,y:100},end:{x:0,y:0}}],isClosed:!0,isHole:!1},innerHoles:[],boundingBox:{minX:0,minY:0,maxX:100,maxY:100,width:100,height:100}}),w}function Qn(n){const e=Mn(n);return e.sort((s,t)=>t.boundingBox.width*t.boundingBox.height-s.boundingBox.width*s.boundingBox.height),e[0]}const ce=[{id:"sheet_8x4",name:"8 × 4 ft (2500 × 1250 mm) - Standard Indian Plate",widthMm:1250,lengthMm:2500},{id:"sheet_10x5",name:"10 × 5 ft (3000 × 1500 mm) - Standard Laser Bed",widthMm:1500,lengthMm:3e3},{id:"sheet_20x5",name:"20 × 5 ft (6000 × 1500 mm) - Heavy Structural Plate",widthMm:1500,lengthMm:6e3},{id:"sheet_small",name:"4 × 4 ft (1250 × 1250 mm) - Offcut / Half Sheet",widthMm:1250,lengthMm:1250}],Te=[{id:"us_sheet_5x10",name:"5 × 10 ft (60 × 120 in) - Standard US Laser Bed",widthMm:1524,lengthMm:3048},{id:"us_sheet_4x8",name:"4 × 8 ft (48 × 96 in) - Standard US Sheet",widthMm:1219.2,lengthMm:2438.4},{id:"us_sheet_6x12",name:"6 × 12 ft (72 × 144 in) - Large Format Table",widthMm:1828.8,lengthMm:3657.6},{id:"us_sheet_4x4",name:"4 × 4 ft (48 × 48 in) - Half Sheet / Drop",widthMm:1219.2,lengthMm:1219.2}];class Yn{constructor(e,s,t,o,i){ne(this,"sheetW");ne(this,"sheetL");ne(this,"edgeMargin");ne(this,"spacing");ne(this,"allowRotation");this.sheetW=e,this.sheetL=s,this.edgeMargin=t,this.spacing=o,this.allowRotation=i}initSheetFreeRects(){const e=Math.max(0,this.sheetW-2*this.edgeMargin),s=Math.max(0,this.sheetL-2*this.edgeMargin);return[{x:this.edgeMargin,y:this.edgeMargin,width:e,height:s}]}scorePlacement(e,s,t){if(s>e.width||t>e.height)return{score1:1/0,score2:1/0};const o=e.width-s,i=e.height-t,a=Math.min(o,i),r=Math.max(o,i);return{score1:a,score2:r}}splitFreeRect(e,s,t,o,i){if(s>=e.x+e.width||s+o<=e.x||t>=e.y+e.height||t+i<=e.y)return[e];const a=[];return t>e.y&&t<e.y+e.height&&a.push({x:e.x,y:e.y,width:e.width,height:t-e.y}),t+i<e.y+e.height&&t+i>e.y&&a.push({x:e.x,y:t+i,width:e.width,height:e.y+e.height-(t+i)}),s>e.x&&s<e.x+e.width&&a.push({x:e.x,y:e.y,width:s-e.x,height:e.height}),s+o<e.x+e.width&&s+o>e.x&&a.push({x:s+o,y:e.y,width:e.x+e.width-(s+o),height:e.height}),a}pruneFreeRects(e){const s=e.filter(o=>o.width>0&&o.height>0),t=[];for(let o=0;o<s.length;o++){let i=!1;const a=s[o];for(let r=0;r<s.length;r++){if(o===r)continue;const d=s[r];if(a.x>=d.x&&a.y>=d.y&&a.x+a.width<=d.x+d.width&&a.y+a.height<=d.y+d.height){i=!0;break}}i||t.push(a)}return t}pack(e){const s=[];let t=0,o=this.initSheetFreeRects();for(let i=0;i<e.length;i++){const a=e[i];let r=!1;for(;!r;){let d={score1:1/0,score2:1/0},f=-1,c=!1,m=a.w,y=a.h;for(let u=0;u<o.length;u++){const h=o[u],$=this.scorePlacement(h,a.w,a.h);if(($.score1<d.score1||$.score1===d.score1&&$.score2<d.score2)&&(d=$,f=u,c=!1,m=a.w,y=a.h),this.allowRotation&&Math.abs(a.w-a.h)>.5){const C=this.scorePlacement(h,a.h,a.w);(C.score1<d.score1||C.score1===d.score1&&C.score2<d.score2)&&(d=C,f=u,c=!0,m=a.h,y=a.w)}}if(f!==-1){const u=o[f],h=u.x,$=u.y;s.push({id:a.instanceId,partIndex:i,sheetIndex:t,x:h,y:$,width:m,height:y,rotated:c,partName:a.name,partId:a.instanceId,color:a.color});const C=m+this.spacing,P=y+this.spacing;let k=[];for(const w of o){const A=this.splitFreeRect(w,h,$,C,P);k.push(...A)}o=this.pruneFreeRects(k),r=!0}else{const u=Math.max(0,this.sheetW-2*this.edgeMargin),h=Math.max(0,this.sheetL-2*this.edgeMargin);o.length===1&&o[0].width===u&&o[0].height===h||t>=50?(s.push({id:a.instanceId,partIndex:i,sheetIndex:t,x:0,y:0,width:a.w,height:a.h,rotated:!1,partName:a.name,partId:a.instanceId,color:a.color}),r=!0):(t++,o=this.initSheetFreeRects())}}}return s}}function Qe(n,e=ce[0],s=6,t=7.85,o={}){var _;const i=o.edgeMarginMm!==void 0?o.edgeMarginMm:10,a=o.partSpacingMm!==void 0?o.partSpacingMm:5,r=o.allowRotation!==!1,d=e.widthMm,f=e.lengthMm,c=[];let m=0,y=0;for(let H=0;H<n.length;H++){const O=n[H],R=Math.max(1,Math.floor(O.quantity));m+=R;const L=((_=O.geometry)==null?void 0:_.units)==="inch"?25.4:1,F=Math.max(1,O.boundingBox.width*L),U=Math.max(1,O.boundingBox.height*L),Y=F*U;for(let z=0;z<R;z++)c.push({instanceId:`${O.id}_${z}`,itemIndex:H,name:O.name,w:F,h:U,color:O.color}),y+=Y}c.sort((H,O)=>O.w*O.h-H.w*H.h);const h=new Yn(d,f,i,a,r).pack(c),$=h.reduce((H,O)=>Math.max(H,O.sheetIndex),0),C=h.length>0?$+1:1,k=d*f*C,w=Math.min(100,Math.round(y/k*1e3)/10),A=y*s/1e3,G=Math.round(A*t/1e3*100)/100,b=k*s/1e3,g=Math.round(b*t/1e3*100)/100,x=Math.max(0,Math.round((g-G)*100)/100),S=h.filter(H=>H.sheetIndex===$);let M=0;for(const H of S)M=Math.max(M,H.y+H.height);const l=Math.max(0,Math.round(f-(M+a))),p=d;return{sheetSize:e,partsRequested:m,partsPlaced:h.length,sheetsRequired:C,sheetUtilizationPercent:w,totalNetPartMassKg:G,totalLoadedSheetMassKg:g,totalSkeletonScrapMassKg:x,remnantWidthMm:p,remnantLengthMm:l,packedParts:h}}function Kn(n,e,s=ce[0],t=6,o=7.85,i={},a="mm"){const r=a==="inch",d=r?25.4:1,c={id:"part_0",name:"Part",boundingBox:r?{minX:n.minX*d,minY:n.minY*d,maxX:n.maxX*d,maxY:n.maxY*d,width:n.width*d,height:n.height*d}:n,quantity:e};return Qe([c],s,t,o,i)}const Ye=[{id:"steel_a36",name:"Mild Steel (A36 / S235)",densityGPerCm3:7.85,gauges:[{gaugeName:'16 Gauge (1.5 mm / 0.060")',thicknessMm:1.5,thicknessInches:.0598,pricePerSqInch:.018,pricePerLinearInchCut:.035,pricePerPierce:.15},{gaugeName:'11 Gauge (3.0 mm / 0.120")',thicknessMm:3,thicknessInches:.1196,pricePerSqInch:.035,pricePerLinearInchCut:.055,pricePerPierce:.25},{gaugeName:'3/16" Plate (4.76 mm / 0.188")',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.058,pricePerLinearInchCut:.085,pricePerPierce:.4},{gaugeName:'1/4" Plate (6.35 mm / 0.250")',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.078,pricePerLinearInchCut:.12,pricePerPierce:.6},{gaugeName:'3/8" Plate (9.52 mm / 0.375")',thicknessMm:9.52,thicknessInches:.375,pricePerSqInch:.115,pricePerLinearInchCut:.185,pricePerPierce:.95},{gaugeName:'1/2" Plate (12.7 mm / 0.500")',thicknessMm:12.7,thicknessInches:.5,pricePerSqInch:.155,pricePerLinearInchCut:.26,pricePerPierce:1.4}]},{id:"stainless_304",name:"Stainless Steel (304 2B)",densityGPerCm3:8,gauges:[{gaugeName:'16 Gauge (1.5 mm / 0.060")',thicknessMm:1.5,thicknessInches:.0598,pricePerSqInch:.052,pricePerLinearInchCut:.065,pricePerPierce:.3},{gaugeName:'11 Gauge (3.0 mm / 0.120")',thicknessMm:3,thicknessInches:.1196,pricePerSqInch:.098,pricePerLinearInchCut:.105,pricePerPierce:.5},{gaugeName:'3/16" Plate (4.76 mm / 0.188")',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.165,pricePerLinearInchCut:.165,pricePerPierce:.85},{gaugeName:'1/4" Plate (6.35 mm / 0.250")',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.22,pricePerLinearInchCut:.24,pricePerPierce:1.25}]},{id:"aluminum_6061",name:"Aluminum (6061-T6)",densityGPerCm3:2.7,gauges:[{gaugeName:'1/16" Sheet (1.58 mm / 0.063")',thicknessMm:1.58,thicknessInches:.0625,pricePerSqInch:.038,pricePerLinearInchCut:.045,pricePerPierce:.2},{gaugeName:'1/8" Sheet (3.18 mm / 0.125")',thicknessMm:3.18,thicknessInches:.125,pricePerSqInch:.072,pricePerLinearInchCut:.075,pricePerPierce:.35},{gaugeName:'3/16" Plate (4.76 mm / 0.188")',thicknessMm:4.76,thicknessInches:.1875,pricePerSqInch:.11,pricePerLinearInchCut:.115,pricePerPierce:.55},{gaugeName:'1/4" Plate (6.35 mm / 0.250")',thicknessMm:6.35,thicknessInches:.25,pricePerSqInch:.145,pricePerLinearInchCut:.16,pricePerPierce:.8}]}],Sn=[{id:"is2062_ms",name:"IS 2062 E250 Mild Steel (MS)",densityGPerCm3:7.85,gauges:[{gaugeName:"1.6 mm Sheet (16G)",thicknessMm:1.6,thicknessInches:.063,pricePerSqInch:.02,pricePerLinearInchCut:.035,pricePerPierce:.15,pricePerKg:74,pricePerMeterCut:9,pricePerSqFtJali:55},{gaugeName:"2.0 mm Sheet (14G)",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.025,pricePerLinearInchCut:.04,pricePerPierce:.2,pricePerKg:74,pricePerMeterCut:12,pricePerSqFtJali:65},{gaugeName:"3.0 mm Sheet (10G)",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.035,pricePerLinearInchCut:.05,pricePerPierce:.25,pricePerKg:75,pricePerMeterCut:15,pricePerSqFtJali:95},{gaugeName:"4.0 mm Plate",thicknessMm:4,thicknessInches:.1575,pricePerSqInch:.048,pricePerLinearInchCut:.07,pricePerPierce:.35,pricePerKg:75,pricePerMeterCut:22,pricePerSqFtJali:130},{gaugeName:"6.0 mm Plate",thicknessMm:6,thicknessInches:.2362,pricePerSqInch:.072,pricePerLinearInchCut:.11,pricePerPierce:.55,pricePerKg:76,pricePerMeterCut:35},{gaugeName:"8.0 mm Plate",thicknessMm:8,thicknessInches:.315,pricePerSqInch:.098,pricePerLinearInchCut:.16,pricePerPierce:.8,pricePerKg:78,pricePerMeterCut:52},{gaugeName:"10.0 mm Plate",thicknessMm:10,thicknessInches:.3937,pricePerSqInch:.125,pricePerLinearInchCut:.22,pricePerPierce:1.1,pricePerKg:78,pricePerMeterCut:68},{gaugeName:"12.0 mm Plate",thicknessMm:12,thicknessInches:.4724,pricePerSqInch:.15,pricePerLinearInchCut:.28,pricePerPierce:1.4,pricePerKg:80,pricePerMeterCut:88},{gaugeName:"16.0 mm Plate",thicknessMm:16,thicknessInches:.6299,pricePerSqInch:.21,pricePerLinearInchCut:.38,pricePerPierce:2.2,pricePerKg:82,pricePerMeterCut:135},{gaugeName:"20.0 mm Plate",thicknessMm:20,thicknessInches:.7874,pricePerSqInch:.26,pricePerLinearInchCut:.48,pricePerPierce:3,pricePerKg:85,pricePerMeterCut:180}]},{id:"ss304_indian",name:"SS 304 (Stainless Steel - N2 / Air Cut)",densityGPerCm3:8,gauges:[{gaugeName:"1.2 mm Sheet",thicknessMm:1.2,thicknessInches:.0472,pricePerSqInch:.045,pricePerLinearInchCut:.06,pricePerPierce:.3,pricePerKg:230,pricePerMeterCut:16,pricePerSqFtJali:110},{gaugeName:"1.5 mm Sheet",thicknessMm:1.5,thicknessInches:.0591,pricePerSqInch:.055,pricePerLinearInchCut:.07,pricePerPierce:.35,pricePerKg:235,pricePerMeterCut:22,pricePerSqFtJali:135},{gaugeName:"2.0 mm Sheet",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.072,pricePerLinearInchCut:.09,pricePerPierce:.45,pricePerKg:235,pricePerMeterCut:30,pricePerSqFtJali:175},{gaugeName:"3.0 mm Sheet",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.11,pricePerLinearInchCut:.14,pricePerPierce:.65,pricePerKg:240,pricePerMeterCut:45,pricePerSqFtJali:240},{gaugeName:"4.0 mm Plate",thicknessMm:4,thicknessInches:.1575,pricePerSqInch:.15,pricePerLinearInchCut:.19,pricePerPierce:.9,pricePerKg:245,pricePerMeterCut:65},{gaugeName:"6.0 mm Plate",thicknessMm:6,thicknessInches:.2362,pricePerSqInch:.22,pricePerLinearInchCut:.28,pricePerPierce:1.4,pricePerKg:250,pricePerMeterCut:105}]},{id:"aluminum_indian",name:"Aluminium 6061 (Air Cut)",densityGPerCm3:2.7,gauges:[{gaugeName:"2.0 mm Sheet",thicknessMm:2,thicknessInches:.0787,pricePerSqInch:.045,pricePerLinearInchCut:.06,pricePerPierce:.3,pricePerKg:260,pricePerMeterCut:20},{gaugeName:"3.0 mm Sheet",thicknessMm:3,thicknessInches:.1181,pricePerSqInch:.065,pricePerLinearInchCut:.08,pricePerPierce:.4,pricePerKg:260,pricePerMeterCut:28},{gaugeName:"5.0 mm Plate",thicknessMm:5,thicknessInches:.1969,pricePerSqInch:.11,pricePerLinearInchCut:.13,pricePerPierce:.65,pricePerKg:270,pricePerMeterCut:55}]}],vn={bendingBendsCount:0,bendingRatePerBend:15,deburringEnabled:!1,deburringRatePerKg:8,tappingHolesCount:0,tappingRatePerHole:18,surfaceFinish:"none",primerRatePerSqFt:20,powderCoatingRatePerSqFt:45,galvanizingRatePerKg:42},Le={shopName:"Shree Balaji Laser Tech (Bhosari, Pune)",currency:"INR",pricingMode:"india_metric",indianQuotingMode:"job_work",assistGas:"air",sheetLoadingFee:250,gstPercent:18,isInterstateSale:!1,minimumOrderFee:500,leadTimeDays:2,rushMultiplier:1.25,selectedCAMProfileId:"cypcut",shopGstin:"27AABCS1429B1Z8",shopAddress:"Plot 42, J-Block, MIDC Bhosari, Pune, MH 411026",shopPhone:"+91 98220 12345",upiId:"balajilaser@upi",quantityTiers:[{minQty:1,discountPercent:0},{minQty:10,discountPercent:8},{minQty:25,discountPercent:15},{minQty:50,discountPercent:22},{minQty:100,discountPercent:30}]},xe={shopName:"Midwest Precision CNC & Laser",currency:"USD",pricingMode:"global_imperial",indianQuotingMode:"with_material",assistGas:"oxygen",sheetLoadingFee:20,gstPercent:7,isInterstateSale:!1,minimumOrderFee:75,leadTimeDays:3,rushMultiplier:1.35,selectedCAMProfileId:"trumpf",shopAddress:"1420 Industrial Pkwy, Cleveland, OH 44135",shopPhone:"(216) 555-0198",quantityTiers:[{minQty:1,discountPercent:0},{minQty:5,discountPercent:10},{minQty:10,discountPercent:18},{minQty:25,discountPercent:28},{minQty:50,discountPercent:38}]};function Xn(n,e={}){const s={...vn,...e},t=(s.bendingBendsCount||0)*(s.bendingRatePerBend||15),o=s.deburringEnabled?n.theoreticalWeightKg*(s.deburringRatePerKg||8):0,i=(s.tappingHolesCount||0)*(s.tappingRatePerHole||18),a=Math.max(.1,n.netAreaSqMm/(304.8*304.8));let r=0;s.surfaceFinish==="primer"?r=a*(s.primerRatePerSqFt||20):s.surfaceFinish==="powder_coating"?r=a*(s.powderCoatingRatePerSqFt||45):s.surfaceFinish==="galvanizing"&&(r=n.theoreticalWeightKg*(s.galvanizingRatePerKg||42));const d=t+o+i+r;return{bendingCost:Math.round(t*100)/100,deburringCost:Math.round(o*100)/100,tappingCost:Math.round(i*100)/100,surfaceFinishCost:Math.round(r*100)/100,totalSecondaryCost:Math.round(d*100)/100}}function Rt(n,e,s,t=xe,o={}){const i=Math.max(1,Math.floor(s));let a=0,r=0,d=0,f=0,c="HSN 7326 (Articles of Iron or Steel)";const m=t.indianQuotingMode||"with_material";let y=1;if(t.assistGas==="nitrogen"?y=2:t.assistGas==="oxygen"?y=1.15:y=1,t.pricingMode==="india_metric")if(m==="job_work"){a=0;const l=n.totalCutLengthMm/1e3,p=e.pricePerMeterCut||20;r=l*p*y,d=n.pierceCount*(e.pricePerPierce>1?e.pricePerPierce:1.5),f=(t.sheetLoadingFee||250)/Math.max(1,i),c="SAC 9988 (Job Work / Manufacturing Services)"}else if(m==="sqft_jali"){const l=Math.max(.1,n.boundingBoxWidthMm/304.8*(n.boundingBoxHeightMm/304.8)),p=e.pricePerSqFtJali||(e.pricePerKg?e.pricePerKg*1.15:65);a=l*p,r=0,d=0,f=0,c="HSN 7326 (Decorative Laser Cut Panels)"}else{a=n.theoreticalWeightKg*1.12*(e.pricePerKg||75);const p=n.totalCutLengthMm/1e3,_=e.pricePerMeterCut||20;r=p*_*y,d=n.pierceCount*(e.pricePerPierce>1?e.pricePerPierce:1.5),f=0,c="HSN 7326 (Fabricated Steel Articles)"}else a=n.boundingBoxWidthInches*n.boundingBoxHeightInches*1.15*e.pricePerSqInch,r=n.totalCutLengthInches*e.pricePerLinearInchCut,d=n.pierceCount*e.pricePerPierce,f=0;const u=Xn(n,o),h=u.totalSecondaryCost,$=a+r+d+f+h;let C=0;for(const l of t.quantityTiers||[])i>=l.minQty&&(C=l.discountPercent);const P=$*(1-C/100),k=P*i,w=k<t.minimumOrderFee,A=Math.max(t.minimumOrderFee,k),G=A/i,b=t.gstPercent>0?A*(t.gstPercent/100):0;let g=0,x=0,S=0;t.gstPercent>0&&(t.isInterstateSale?S=b:(g=b/2,x=b/2));const M=A+b;return{currency:t.currency,quotingMode:m,quantity:i,unitMaterialCost:Math.round(a*100)/100,unitCutCost:Math.round(r*100)/100,unitPierceCost:Math.round(d*100)/100,unitHandlingCost:Math.round(f*100)/100,unitSecondaryCost:Math.round(h*100)/100,secondaryBreakdown:u,unitSubtotal:Math.round($*100)/100,discountPercent:C,discountedUnitPrice:Math.round(P*100)/100,orderTotalBeforeMin:Math.round(k*100)/100,minimumOrderFloorApplied:w,finalOrderTotal:Math.round(A*100)/100,finalUnitPrice:Math.round(G*100)/100,gstAmount:Math.round(b*100)/100,cgstAmount:Math.round(g*100)/100,sgstAmount:Math.round(x*100)/100,igstAmount:Math.round(S*100)/100,finalTotalWithGst:Math.round(M*100)/100,hsnSacCode:c}}function ln(n,e,s,t,o,i,a=Le){const d=o.currency==="INR"?"₹":"$",f=o.quotingMode;let c="WITH MATERIAL (SUPPLY & CUT)";f==="job_work"&&(c="JOB WORK (LABOUR ONLY)"),f==="sqft_jali"&&(c="ARCHITECTURAL JALI (SQ.FT BASIS)");const m=(e.boundingBoxWidthMm/304.8*(e.boundingBoxHeightMm/304.8)).toFixed(2),y=a.assistGas==="nitrogen"?"N2 (Nitrogen)":a.assistGas==="oxygen"?"O2 (Oxygen)":"High-Pressure Air";return`*QUOTATION — ${i.toUpperCase()}*
Ref: CNC-Q${Math.floor(1e3+Math.random()*9e3)} | Mode: *${c}*

*Part:* ${n} (${e.boundingBoxWidthMm.toFixed(0)} × ${e.boundingBoxHeightMm.toFixed(0)} mm / ${m} sq.ft)
*Material:* ${s} (${t.gaugeName})
*Assist Gas:* ${y}
*Quantity:* ${o.quantity} pcs

----------------------------------
${f==="job_work"?`• Raw Material: *Supplied by Customer*
• Cut Meters: ${(e.totalCutLengthMm/1e3).toFixed(2)} m (${e.pierceCount*o.quantity} pierces)
• Cutting & Piercing: ${d}${((o.unitCutCost+o.unitPierceCost)*o.quantity).toFixed(2)}
• Plate Loading Fee: ${d}${(o.unitHandlingCost*o.quantity).toFixed(2)}`:f==="sqft_jali"?`• Total Panel Area: ${(parseFloat(m)*o.quantity).toFixed(2)} sq.ft
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
• Advance: 50% with PO to confirm. UPI: ${a.upiId||"shop@upi"}`}function Ie(n,e=Le,s=ce[0],t=!0){const o=e.currency==="INR";let i=0,a=0,r=0,d=0,f=0,c=0,m=0,y=0,u=0;const h=[];for(const l of n){const p=l.quantity;i+=p,a+=l.metrics.totalCutLengthMm/1e3*p,r+=l.metrics.pierceCount*p,d+=l.metrics.theoreticalWeightKg*p,f+=l.unitQuote.unitMaterialCost*p,c+=l.unitQuote.unitCutCost*p,m+=l.unitQuote.unitPierceCost*p,y+=l.unitQuote.unitHandlingCost*p,u+=l.unitQuote.unitSecondaryCost*p,h.push({id:l.id,name:l.partGeometry.name,boundingBox:l.partGeometry.boundingBox,quantity:p,thicknessMm:l.gaugeThicknessMm,color:l.color})}const $=n.length>0?Math.max(...n.map(l=>l.gaugeThicknessMm)):6,C=Qe(h,s,$,7.85,{allowRotation:t}),P=f+c+m+y+u;let k=0;if(e.quantityTiers&&e.quantityTiers.length>0)for(const l of e.quantityTiers)i>=l.minQty&&l.discountPercent>k&&(k=l.discountPercent);const w=P*(k/100),A=Math.max(e.minimumOrderFee,P-w),G=o?e.gstPercent/100:0,b=A*G;let g=0,x=0,S=0;o&&b>0&&(e.isInterstateSale?S=b:(g=b/2,x=b/2));const M=A+b;return{currency:e.currency,totalItemsCount:n.length,totalPartsCount:i,totalCutLengthMeters:Math.round(a*100)/100,totalPierces:r,totalNetPartMassKg:Math.round(d*100)/100,totalMaterialCost:Math.round(f*100)/100,totalCutCost:Math.round(c*100)/100,totalPierceCost:Math.round(m*100)/100,totalHandlingCost:Math.round(y*100)/100,totalSecondaryCost:Math.round(u*100)/100,subtotalBeforeDiscount:Math.round(P*100)/100,volumeDiscountPercent:k,discountAmount:Math.round(w*100)/100,orderTotalBeforeGst:Math.round(A*100)/100,gstAmount:Math.round(b*100)/100,cgstAmount:Math.round(g*100)/100,sgstAmount:Math.round(x*100)/100,igstAmount:Math.round(S*100)/100,finalTotalWithGst:Math.round(M*100)/100,nestingResult:C}}function Jn(n,e){const t=e.currency==="INR"?"₹":"$",o=n.shopSettings;let i="";for(let r=0;r<n.items.length;r++){const d=n.items[r],f=d.totalPrice.toFixed(2);i+=`${r+1}. *${d.partGeometry.name}* (${d.materialName} ${d.gaugeThicknessMm}mm)
   • Qty: ${d.quantity} pcs @ ${t}${d.unitQuote.finalUnitPrice.toFixed(2)} = *${t}${f}*
`}const a=e.nestingResult.sheetSize.name.split(" - ")[0]||"Standard Plate";return`*PROJECT QUOTATION — ${o.shopName.toUpperCase()}*
Ref: PRJ-Q${Math.floor(1e3+Math.random()*9e3)} | ${e.totalItemsCount} Parts (${e.totalPartsCount} pcs total)
Date: ${new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}

*BILL OF MATERIALS (BOM):*
----------------------------------
${i}----------------------------------
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
• Instant UPI Pay: ${o.upiId||"shop@upi"}`}function Vn(n,e="91"){const s=n.replace(/[\s\-\(\)\.]/g,"");return s?s.startsWith("+")?s.substring(1):s.length===10&&/^\d+$/.test(s)?`${e}${s}`:s:""}function dn(n,e,s="91"){const t=e?Vn(e,s):"",o=encodeURIComponent(n);return t?`https://wa.me/${t}?text=${o}`:`https://wa.me/?text=${o}`}const Ke="cad_cnc_shop_settings_",Xe="cad_cnc_materials_";function In(n,e){if(typeof window>"u"||!window.localStorage)return{...e};try{const s=window.localStorage.getItem(`${Ke}${n.toLowerCase()}`);if(s){const t=JSON.parse(s);return{...e,...t}}}catch(s){console.warn("Failed to load shop settings from localStorage",s)}return{...e}}function qn(n,e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(`${Ke}${n.toLowerCase()}`,JSON.stringify(e))}catch(s){console.warn("Failed to save shop settings to localStorage",s)}}function Pn(n,e){if(typeof window>"u"||!window.localStorage)return JSON.parse(JSON.stringify(e));try{const s=window.localStorage.getItem(`${Xe}${n.toLowerCase()}`);if(s)return JSON.parse(s)}catch(s){console.warn("Failed to load materials from localStorage",s)}return JSON.parse(JSON.stringify(e))}function Zn(n,e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(`${Xe}${n.toLowerCase()}`,JSON.stringify(e))}catch(s){console.warn("Failed to save materials to localStorage",s)}}function to(n){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.removeItem(`${Ke}${n.toLowerCase()}`),window.localStorage.removeItem(`${Xe}${n.toLowerCase()}`)}catch(e){console.warn("Failed to reset storage",e)}}function mn(n,e,s,t,o,i,a=xe,r="Valued Customer"){const d=o.currency==="USD",f=d?"$":"₹",c=`RFQ-${Math.floor(1e3+Math.random()*9e3)}`,m=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),y=d?`${e.boundingBoxWidthInches.toFixed(2)}" × ${e.boundingBoxHeightInches.toFixed(2)}" (${t.thicknessInches.toFixed(3)}" plate)`:`${e.boundingBoxWidthMm.toFixed(0)} × ${e.boundingBoxHeightMm.toFixed(0)} mm (${t.thicknessMm} mm)`,u=d?`${e.totalCutLengthInches.toFixed(1)} inches (${e.pierceCount} pierces)`:`${(e.totalCutLengthMm/1e3).toFixed(2)} meters (${e.pierceCount} pierces)`,h=d?`${e.theoreticalWeightLbs.toFixed(2)} lbs`:`${e.theoreticalWeightKg.toFixed(2)} kg`,$=d?`${(e.theoreticalWeightLbs*o.quantity).toFixed(2)} lbs`:`${(e.theoreticalWeightKg*o.quantity).toFixed(2)} kg`;return`Subject: Quotation: ${n} (Ref #${c}) — ${i}

Dear ${r},

Thank you for requesting a quotation from ${i}. Below is your instant manufacturing cost estimate:

QUOTATION SUMMARY
--------------------------------------------------
Quote Ref: ${c}
Date: ${m}
Valid For: 15 Calendar Days

PART SPECIFICATIONS & BILL OF MATERIALS:
• Part Name: ${n}
• Material: ${s} — ${t.gaugeName}
• Part Dimensions: ${y}
• Est. Unit Weight: ${h} (Total Lot: ${$})
• Laser Cut Profile: ${u}
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
${i}
${a.shopPhone||""} | ${a.shopAddress||""}`}function eo(n,e,s="Valued Customer"){const o=e.currency==="USD"?"$":"₹",i=n.shopSettings,a=`PRJ-${Math.floor(1e3+Math.random()*9e3)}`,r=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});let d="";for(let c=0;c<n.items.length;c++){const m=n.items[c],u=m.partGeometry.units==="inch"?`${m.partGeometry.boundingBox.width.toFixed(2)}" × ${m.partGeometry.boundingBox.height.toFixed(2)}"`:`${m.partGeometry.boundingBox.width.toFixed(0)} × ${m.partGeometry.boundingBox.height.toFixed(0)} mm`;d+=`${c+1}. ${m.partGeometry.name}
   Specs: ${m.materialName} (${m.gaugeThicknessMm}mm / ${u})
   Qty: ${m.quantity} pcs @ ${o}${m.unitQuote.finalUnitPrice.toFixed(2)} = ${o}${m.totalPrice.toFixed(2)}

`}const f=e.nestingResult.sheetSize.name.split(" - ")[0]||"Standard Sheet";return`Subject: Quotation: ${n.projectName||"Sheet Metal Project RFQ"} (Ref #${a}) — ${i.shopName}

Dear ${s||n.customerName||"Valued Customer"},

Thank you for submitting your multi-part assembly RFQ to ${i.shopName}. We have processed your CAD geometries through our automated nesting and quoting engine:

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
• Lead Time: ${i.leadTimeDays||3} to 5 Business Days ARO
• Delivery: Ex-Works / Pre-paid Freight Available
• Payment: Net 30 Terms or Credit Card / Wire
• Toolpath: Pre-nested and certified for CNC fiber laser production

To authorize this order, please reply with your Purchase Order (PO) or confirmation.

Sincerely,

Estimating & Quoting Department
${i.shopName}
${i.shopPhone||""} | ${i.shopAddress||""}`}function Bn(n,e=2500){const s=[],t=e/60,o=.5;let i=0;for(let f=0;f<n.innerHoles.length;f++){const c=n.innerHoles[f];if(i++,"radius"in c){const m=c,y=2*Math.PI*m.radius,u={x:m.center.x,y:m.center.y},h=[{type:"arc",center:m.center,radius:m.radius,startAngle:0,endAngle:2*Math.PI,counterClockwise:!0}];s.push({stepIndex:i,label:`Inner Hole #${f+1} (Ø${(m.radius*2).toFixed(n.units==="inch"?2:1)}${n.units==="inch"?"in":"mm"})`,layerName:"Layer 1 (Yellow)",layerColor:"#eab308",isOuter:!1,piercePoint:u,segments:h,lengthMm:y,simulatedDurationSec:o+y/t})}else{const m=c,y=Be(m);let u=1/0,h=1/0,$=-1/0,C=-1/0;for(const w of m.segments)w.type==="line"?(u=Math.min(u,w.start.x,w.end.x),h=Math.min(h,w.start.y,w.end.y),$=Math.max($,w.start.x,w.end.x),C=Math.max(C,w.start.y,w.end.y)):(u=Math.min(u,w.center.x-w.radius),h=Math.min(h,w.center.y-w.radius),$=Math.max($,w.center.x+w.radius),C=Math.max(C,w.center.y+w.radius));const P=m.segments[0],k=isFinite(u)?{x:(u+$)/2,y:(h+C)/2}:P?P.type==="line"?P.start:{x:P.center.x+P.radius*Math.cos(P.startAngle),y:P.center.y+P.radius*Math.sin(P.startAngle)}:{x:0,y:0};s.push({stepIndex:i,label:`Inner Cutout #${f+1}`,layerName:"Layer 1 (Yellow)",layerColor:"#eab308",isOuter:!1,piercePoint:k,segments:m.segments,lengthMm:y,simulatedDurationSec:o+y/t})}}i++;const a=Be(n.outerContour),r=n.outerContour.segments[0],d=r?r.type==="line"?r.start:{x:r.center.x+r.radius*Math.cos(r.startAngle),y:r.center.y+r.radius*Math.sin(r.startAngle)}:{x:0,y:0};return s.push({stepIndex:i,label:`Outer Perimeter (${n.name})`,layerName:"Layer 0 (White/Green)",layerColor:"#22c55e",isOuter:!0,piercePoint:d,segments:n.outerContour.segments,lengthMm:a,simulatedDurationSec:o+a/t}),s}function no(n){if("radius"in n){const{center:{x:e,y:s},radius:t}=n;return`M ${(e-t).toFixed(3)} ${s.toFixed(3)} A ${t.toFixed(3)} ${t.toFixed(3)} 0 1 0 ${(e+t).toFixed(3)} ${s.toFixed(3)} A ${t.toFixed(3)} ${t.toFixed(3)} 0 1 0 ${(e-t).toFixed(3)} ${s.toFixed(3)} Z`}return we(n)}function wn(n,e={}){if(e.viewStyle==="realistic_gate"&&e.jaliParams)return oo(n,e.jaliParams);const t=n.units==="inch"?1/25.4:1,o=n.boundingBox,i=Math.max(35*t,o.width*.14),a=Math.max(50*t,o.height*.22),r=Math.max(55*t,o.height*.24),d=Math.max(80*t,o.width*.3),f=o.minX-i,c=o.minY-r,m=o.width+i+d,y=o.height+r+a,u=e.simulationState,h=Bn(n);let $="";const C=u&&u.activeStepIndex===h.length,P=u&&u.activeStepIndex>h.length,k=we(n.outerContour);$+=`<path d="${k}" fill="rgba(34, 197, 94, 0.08)" stroke="${C?"#4ade80":P?"#16a34a":"#22c55e"}" stroke-width="${C?3:2}" vector-effect="non-scaling-stroke" stroke-linejoin="round" />`;let G=0;for(let z=0;z<n.innerHoles.length;z++){const it=n.innerHoles[z];G++;const ct=u&&u.activeStepIndex===G,dt=u&&u.activeStepIndex>G,mt=ct?"#facc15":dt?"#ca8a04":"#eab308",bt=ct?2.5:1.8;if("radius"in it){const V=it;$+=`<circle cx="${V.center.x}" cy="${V.center.y}" r="${V.radius}" fill="rgba(234, 179, 8, 0.12)" stroke="${mt}" stroke-width="${bt}" vector-effect="non-scaling-stroke" />`;const lt=Math.min(10*t,V.radius*.6);$+=`<line x1="${V.center.x-lt}" y1="${V.center.y}" x2="${V.center.x+lt}" y2="${V.center.y}" stroke="rgba(234, 179, 8, 0.5)" stroke-width="1" vector-effect="non-scaling-stroke" />`,$+=`<line x1="${V.center.x}" y1="${V.center.y-lt}" x2="${V.center.x}" y2="${V.center.y+lt}" stroke="rgba(234, 179, 8, 0.5)" stroke-width="1" vector-effect="non-scaling-stroke" />`}else{const V=we(it);$+=`<path d="${V}" fill="rgba(234, 179, 8, 0.12)" stroke="${mt}" stroke-width="${bt}" vector-effect="non-scaling-stroke" stroke-linejoin="round" />`}}const b=(e.showCutOrder||u)&&!e.hideCamBadges;let g="";if(b){let z="";for(let dt=0;dt<h.length;dt++){const mt=h[dt].piercePoint;dt===0?z+=`M ${mt.x.toFixed(3)} ${mt.y.toFixed(3)}`:z+=` L ${mt.x.toFixed(3)} ${mt.y.toFixed(3)}`}g+=`<path d="${z}" fill="none" stroke="#38bdf8" stroke-dasharray="${3*t},${3*t}" stroke-width="${1*t}" opacity="0.45" />`;const it=n.innerHoles.length>20,ct=it?Math.max(6*t,Math.min(10*t,m*.012)):Math.max(9*t,Math.min(16*t,m*.022));for(const dt of h){const mt=dt.piercePoint,bt=u&&u.activeStepIndex===dt.stepIndex,V=dt.isOuter?"#22c55e":"#eab308",lt=bt?"#ffffff":"#0f172a";g+=`
        <g class="cam-badge" transform="translate(${mt.x}, ${mt.y}) scale(1, -1)">
          <circle cx="0" cy="0" r="${ct+(bt?3*t:0)}" fill="${V}" stroke="${lt}" stroke-width="${(bt?2:1.2)*t}" />
          <text x="0" y="0" text-anchor="middle" dominant-baseline="central" font-size="${ct*(it?.95:1.1)}" font-family="'JetBrains Mono', monospace" font-weight="800" fill="#0b1120">
            ${dt.stepIndex}
          </text>
        </g>
      `}}let x="";if(u&&u.nozzlePos){const z=u.nozzlePos.x,it=u.nozzlePos.y,ct=u.isPiercing,dt=ct?18*t:0,mt=ct?`<circle cx="${z}" cy="${it}" r="${dt}" fill="none" stroke="#f97316" stroke-width="${2.5*t}" opacity="0.8">
           <animate attributeName="r" values="${6*t};${22*t}" dur="0.3s" repeatCount="indefinite" />
           <animate attributeName="opacity" values="1;0" dur="0.3s" repeatCount="indefinite" />
         </circle>`:"";x=`
      <!-- Active Laser Nozzle -->
      <g class="laser-nozzle-head" transform="translate(${z}, ${it})">
        ${mt}
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
    `}const S=n.units,M="#94a3b8",l=Math.max(m,y),p=Math.max(14*t,l*.028),_=Math.max(20*t,l*.025),H=1.5*t,O=8*t,R=3.5*t,T=o.maxY+a*.55,L=`
    <g class="dim-leader" stroke="${M}" stroke-width="${H}" fill="${M}">
      <line x1="${o.minX}" y1="${o.maxY}" x2="${o.minX}" y2="${T+O}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${o.maxX}" y1="${o.maxY}" x2="${o.maxX}" y2="${T+O}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${o.minX}" y1="${T}" x2="${o.maxX}" y2="${T}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${(o.minX+o.maxX)/2}" y="${T+p*.9}" text-anchor="middle" font-size="${p}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#0b1120" stroke-width="${R}" paint-order="stroke fill" letter-spacing="0.02em">
        ${o.width.toFixed(2)} ${S}
      </text>
    </g>
  `,F=o.maxX+_,U=`
    <g class="dim-leader" stroke="${M}" stroke-width="${H}" fill="${M}">
      <line x1="${o.maxX}" y1="${o.minY}" x2="${F+O}" y2="${o.minY}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${o.maxX}" y1="${o.maxY}" x2="${F+O}" y2="${o.maxY}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${F}" y1="${o.minY}" x2="${F}" y2="${o.maxY}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${F+p*.5}" y="${(o.minY+o.maxY)/2+p*.35}" text-anchor="start" font-size="${p}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#0b1120" stroke-width="${R}" paint-order="stroke fill" letter-spacing="0.02em">
        ${o.height.toFixed(2)} ${S}
      </text>
    </g>
  `,Y=Math.max(10*t,m/20);return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${f} ${c} ${m} ${y}" width="100%" height="100%" style="background-color: #0b1120; border-radius: 8px;">
      <defs>
        <pattern id="cadGrid" width="${Y}" height="${Y}" patternUnits="userSpaceOnUse">
          <path d="M ${Y} 0 L 0 0 0 ${Y}" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="${1*t}"/>
        </pattern>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
        </marker>
      </defs>
      <rect x="${f}" y="${c}" width="${m}" height="${y}" fill="url(#cadGrid)" />
      
      <!-- Part Paths (Y flipped for CAD orientation) -->
      <g transform="translate(0, ${o.minY+o.maxY}) scale(1, -1)">
        ${$}
        ${g}
        ${x}
      </g>

      <!-- Dimensions -->
      ${L}
      ${U}
    </svg>
  `}function oo(n,e){const s=e.units==="inch",t=s?1/25.4:1,o=n.boundingBox.width,i=n.boundingBox.height,a=e.finishMaterial||"matte_black",r=e.backlightColor||"warm_white",d=e.gateType||"single_swing",f=d==="double_swing",c=d==="wall_panel",m=!c&&e.hasFrameTube!==!1,y=e.frameTubeWidthMm??(s?2:50),u=s?y>10?y/25.4:y:y<10?y*25.4:y,h=m?u:0,$=!c&&!!e.hasKickPlate,C=e.kickPlateHeightMm??(s?12:300),P=s?C>30?C/25.4:C:C<30?C*25.4:C,k=$?Math.max(0,Math.min(i*.4,P)):0,w=!c&&e.hasHinges!==!1,A=!c&&e.hasPullHandle!==!1,G=!c&&e.hasLockBox!==!1,b=o+(m?2*h:0),g=i+(m?2*h:0),x=f?s?.6:15:0,S=f?b*2+x:b,M=g,l=Math.max(S,M),p=Math.max(16*t,l*.03),_=Math.max(16*t,l*.034),H=Math.max(7*t,l*.011),O=Math.max(36*t,l*.045),R=Math.max(32*t,l*.04),T=Math.max(45*t,S*.12),L=Math.max(45*t,R+p*3.8),F=Math.max(55*t,M*.08,_*2.8),U=Math.max(55*t,O+p*2.4),Y=-T,z=-F,it=S+T+L,ct=M+F+U,dt=we(n.outerContour),mt=n.innerHoles.map(no).join(" "),bt=`${dt} ${mt}`;let V="#475569",lt="#334155",vt="#94a3b8";a==="royal_gold"?(V="#fef08a",lt="#b45309",vt="#fde047"):a==="corten_rust"?(V="#fdba74",lt="#7c2d12",vt="#ea580c"):a==="brushed_stainless"?(V="#ffffff",lt="#475569",vt="#e2e8f0"):a==="champagne_bronze"&&(V="#fcd34d",lt="#78350f",vt="#fbbf24");const Wt=(It,ee=!1)=>{const rt=It+(m?h:0),$t=m?h:0;let Ct="";if(r!=="none"&&(Ct+=`
        <rect x="${rt}" y="${$t}" width="${o}" height="${i}" 
              fill="url(#glow_${r})" filter="url(#backlightBlur)" opacity="0.9" rx="${3*t}" />
      `),Ct+=`
      <g transform="translate(${rt}, ${$t})">
        <!-- Negative space perforated sheet metal plate -->
        <path d="${bt}" fill-rule="evenodd" fill="url(#mat_${a})" 
              filter="url(#plateShadow)" stroke="${V}" stroke-width="${.8*t}" stroke-opacity="0.6" />
        <!-- Inner cutout specular rim highlight -->
        <path d="${mt}" fill="none" stroke="${V}" stroke-width="${.6*t}" stroke-opacity="0.4" />
      </g>
    `,$&&k>0){const q=$t+i-k;Ct+=`
        <!-- Solid Bottom Kickplate -->
        <g class="kickplate">
          <rect x="${rt}" y="${q}" width="${o}" height="${k}" 
                fill="url(#mat_${a})" stroke="${lt}" stroke-width="${1.2*t}" />
          <!-- Embossed horizontal reveal grooves -->
          <line x1="${rt+15*t}" y1="${q+k*.35}" x2="${rt+o-15*t}" y2="${q+k*.35}" 
                stroke="${V}" stroke-width="${1.5*t}" stroke-opacity="0.5" />
          <line x1="${rt+15*t}" y1="${q+k*.65}" x2="${rt+o-15*t}" y2="${q+k*.65}" 
                stroke="${V}" stroke-width="${1.5*t}" stroke-opacity="0.5" />
          <!-- Corner fabrication rivet studs -->
          <circle cx="${rt+12*t}" cy="${q+12*t}" r="${3*t}" fill="${vt}" opacity="0.8" />
          <circle cx="${rt+o-12*t}" cy="${q+12*t}" r="${3*t}" fill="${vt}" opacity="0.8" />
          <circle cx="${rt+12*t}" cy="${q+k-12*t}" r="${3*t}" fill="${vt}" opacity="0.8" />
          <circle cx="${rt+o-12*t}" cy="${q+k-12*t}" r="${3*t}" fill="${vt}" opacity="0.8" />
        </g>
      `}if(m){const q=It,Z=0;Ct+=`
        <!-- Structural Box Tube Outer Frame -->
        <g class="box-tube-frame" filter="url(#frameShadow)">
          <!-- Top horizontal tube -->
          <rect x="${q}" y="${Z}" width="${b}" height="${h}" fill="url(#tube_${a}_h)" stroke="${lt}" stroke-width="${1.2*t}" />
          <!-- Bottom horizontal tube -->
          <rect x="${q}" y="${Z+g-h}" width="${b}" height="${h}" fill="url(#tube_${a}_h)" stroke="${lt}" stroke-width="${1.2*t}" />
          <!-- Left vertical tube -->
          <rect x="${q}" y="${Z+h}" width="${h}" height="${g-2*h}" fill="url(#tube_${a}_v)" stroke="${lt}" stroke-width="${1.2*t}" />
          <!-- Right vertical tube -->
          <rect x="${q+b-h}" y="${Z+h}" width="${h}" height="${g-2*h}" fill="url(#tube_${a}_v)" stroke="${lt}" stroke-width="${1.2*t}" />
          
          <!-- Mitred 45-degree corner weld seams -->
          <line x1="${q}" y1="${Z}" x2="${q+h}" y2="${Z+h}" stroke="${V}" stroke-width="${1.2*t}" stroke-opacity="0.7" />
          <line x1="${q+b}" y1="${Z}" x2="${q+b-h}" y2="${Z+h}" stroke="${V}" stroke-width="${1.2*t}" stroke-opacity="0.7" />
          <line x1="${q}" y1="${Z+g}" x2="${q+h}" y2="${Z+g-h}" stroke="${V}" stroke-width="${1.2*t}" stroke-opacity="0.7" />
          <line x1="${q+b}" y1="${Z+g}" x2="${q+b-h}" y2="${Z+g-h}" stroke="${V}" stroke-width="${1.2*t}" stroke-opacity="0.7" />
        </g>
      `}if(w){const Z=!ee?It-6*t:It+b-6*t,gt=[g*.15,g*.85];g>(s?48:1200)&&gt.splice(1,0,g*.5);for(const ut of gt)Ct+=`
          <!-- Bullet Barrel Hinge -->
          <g class="bullet-hinge" transform="translate(${Z}, ${ut-24*t})">
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
        `}if(A||G){const q=ee,Z=q?It+(m?h/2:25*t):It+b-(m?h/2:25*t),gt=g*.5;if(G){const ut=Math.max(30*t,h*.8),zt=90*t,Mt=q?It+(m?4*t:8*t):It+b-(m?h-4*t:38*t);Ct+=`
          <!-- Lock Box & Keyway -->
          <g class="lockbox" transform="translate(${Mt}, ${gt-zt/2})">
            <rect x="0" y="0" width="${ut}" height="${zt}" rx="${4*t}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1.2*t}" />
            <!-- Key cylinder -->
            <circle cx="${ut/2}" cy="${28*t}" r="${7*t}" fill="#1e293b" stroke="#64748b" stroke-width="${1*t}" />
            <rect x="${ut/2-2*t}" y="${28*t}" width="${4*t}" height="${9*t}" fill="#0f172a" />
            <!-- Modern lever latch -->
            <rect x="${q?ut/2-18*t:ut/2+2*t}" y="${58*t}" width="${20*t}" height="${7*t}" rx="${2*t}" fill="#e2e8f0" stroke="#0f172a" stroke-width="${.8*t}" />
          </g>
        `}if(A){const ut=Math.min(g*.45,600*t),zt=(q?28:-28)*t,Mt=Z+zt;Ct+=`
          <!-- Sleek Architectural Bar Pull Handle -->
          <g class="pull-handle">
            <!-- Standoff brackets -->
            <rect x="${Z<Mt?Z:Mt}" y="${gt-ut/2+15*t}" width="${Math.abs(Mt-Z)}" height="${10*t}" fill="#475569" stroke="#0f172a" stroke-width="${.8*t}" />
            <rect x="${Z<Mt?Z:Mt}" y="${gt+ut/2-25*t}" width="${Math.abs(Mt-Z)}" height="${10*t}" fill="#475569" stroke="#0f172a" stroke-width="${.8*t}" />
            <!-- Vertical Cylindrical T-Bar -->
            <rect x="${Mt-6*t}" y="${gt-ut/2}" width="${12*t}" height="${ut}" rx="${6*t}" 
                  fill="url(#mat_brushed_stainless)" stroke="#1e293b" stroke-width="${1.2*t}" filter="url(#handleShadow)" />
            <!-- Specular sheen -->
            <line x1="${Mt-2*t}" y1="${gt-ut/2+4*t}" x2="${Mt-2*t}" y2="${gt+ut/2-4*t}" stroke="#ffffff" stroke-width="${1*t}" opacity="0.75" />
          </g>
        `}}if(c){const q=Math.max(8*t,o*.018),Z=[{x:rt+25*t,y:$t+25*t},{x:rt+o-25*t,y:$t+25*t},{x:rt+o-25*t,y:$t+i-25*t},{x:rt+25*t,y:$t+i-25*t}];i>(s?36:900)&&(Z.push({x:rt+25*t,y:$t+i/2}),Z.push({x:rt+o-25*t,y:$t+i/2}));for(const gt of Z)Ct+=`
          <!-- Stainless Standoff Screw Head -->
          <g class="standoff-mount" transform="translate(${gt.x}, ${gt.y})">
            <circle cx="0" cy="0" r="${q}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1.2*t}" filter="url(#handleShadow)" />
            <!-- Hex Socket -->
            <polygon points="${-3*t},${-1.7*t} 0,${-3.4*t} ${3*t},${-1.7*t} ${3*t},${1.7*t} 0,${3.4*t} ${-3*t},${1.7*t}" fill="#1e293b" />
          </g>
        `}return Ct};let Ot="";f?(Ot+=Wt(0,!1),Ot+=Wt(b+x,!0),Ot+=`
      <!-- Double Swing Center Slide Drop Bolt -->
      <g class="center-drop-bolt" transform="translate(${b+x/2-12*t}, ${4*t})">
        <rect x="0" y="0" width="${24*t}" height="${42*t}" rx="${3*t}" fill="url(#mat_brushed_stainless)" stroke="#0f172a" stroke-width="${1*t}" />
        <rect x="${9*t}" y="${8*t}" width="${6*t}" height="${24*t}" rx="${2*t}" fill="#cbd5e1" />
      </g>
    `):Ot+=Wt(0,!1);const Zt=e.units,Ut="#94a3b8",Tt=M+O*.6,te=`
    <g class="dim-leader" stroke="${Ut}" stroke-width="${1.6*t}" fill="${Ut}">
      <line x1="0" y1="${M+8*t}" x2="0" y2="${Tt+10*t}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${S}" y1="${M+8*t}" x2="${S}" y2="${Tt+10*t}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="0" y1="${Tt}" x2="${S}" y2="${Tt}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${S/2}" y="${Tt+p*.9}" text-anchor="middle" font-size="${p}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#080c14" stroke-width="${4.5*t}" paint-order="stroke fill" letter-spacing="0.02em">
        ${S.toFixed(s?2:0)} ${Zt} ${f?`(2× ${b.toFixed(s?2:0)} ${Zt} Leaves)`:""}
      </text>
    </g>
  `,Lt=S+R*.6,le=`
    <g class="dim-leader" stroke="${Ut}" stroke-width="${1.6*t}" fill="${Ut}">
      <line x1="${S+8*t}" y1="0" x2="${Lt+10*t}" y2="0" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${S+8*t}" y1="${M}" x2="${Lt+10*t}" y2="${M}" stroke-dasharray="${3*t},${3*t}" stroke-opacity="0.6" />
      <line x1="${Lt}" y1="0" x2="${Lt}" y2="${M}" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="${Lt+p*.5}" y="${M/2+p*.35}" text-anchor="start" font-size="${p}" font-family="'JetBrains Mono', monospace" font-weight="700" fill="#f8fafc" stroke="#080c14" stroke-width="${4.5*t}" paint-order="stroke fill" letter-spacing="0.02em">
        ${M.toFixed(s?2:0)} ${Zt}
      </text>
    </g>
  `,de=a.replace(/_/g," ").toUpperCase(),me=(e.patternType||"architectural_jali").replace(/_/g," ").toUpperCase(),ue=f?"DOUBLE SWING ENTRANCE GATE":c?"WALL JALI SCREEN PANEL":"SINGLE SWING GATE";return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${Y} ${z} ${it} ${ct}" width="100%" height="100%" style="background-color: #080c14; border-radius: 8px;">
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
      <rect x="${Y}" y="${z}" width="${it}" height="${ct}" fill="url(#studioSpotlight)" />

      <!-- Top Architectural Badge Label -->
      <g class="studio-title-badge" transform="translate(${S/2}, ${-F*.45})">
        <text text-anchor="middle" font-size="${_}" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" fill="#f1f5f9" stroke="#080c14" stroke-width="${5*t}" paint-order="stroke fill" letter-spacing="0.05em">
          ✨ ${ue} — ${de} | ${me}
        </text>
      </g>

      <!-- Ground Baseline Reference -->
      <line x1="${-T*.3}" y1="${M+2*t}" x2="${S+L*.3}" y2="${M+2*t}" stroke="#334155" stroke-width="${1.5*t}" stroke-dasharray="${6*t},${4*t}" opacity="0.6" />

      <!-- Gate Leaves & Structure -->
      ${Ot}

      <!-- Dimension Leaders -->
      ${te}
      ${le}
    </svg>
  `}function io(n,e=0){const s=n.sheetSize.widthMm,t=n.sheetSize.lengthMm,o=s*.08,i=t*.08,a=s+2*o,r=t+2*i;let d="";const f=n.packedParts.filter(u=>u.sheetIndex===e),c=["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"];for(const u of f){const h=u.color||c[u.partIndex%c.length],$=u.rotated,C=u.partName?`${u.partName}`:`#${u.partIndex+1}`,P=Math.max(11,Math.min(u.width,u.height)*.16);d+=`
      <g class="nested-part" id="part_${u.id}">
        <rect x="${u.x}" y="${u.y}" width="${u.width}" height="${u.height}" 
              fill="${h}25" stroke="${h}" stroke-width="2" rx="2" />
        <text x="${u.x+u.width/2}" y="${u.y+u.height/2-2}" 
              text-anchor="middle" font-size="${P}" 
              font-family="'JetBrains Mono', monospace" fill="#ffffff" font-weight="bold">
          ${C}
        </text>
        <text x="${u.x+u.width/2}" y="${u.y+u.height/2+P}" 
              text-anchor="middle" font-size="${Math.max(9,P*.75)}" 
              font-family="'JetBrains Mono', monospace" fill="#94a3b8">
          ${u.width.toFixed(0)} × ${u.height.toFixed(0)} mm ${$?"⟲90°":""}
        </text>
      </g>
    `}let m="";if(e===n.sheetsRequired-1&&n.remnantLengthMm>50){const u=t-n.remnantLengthMm;m=`
      <rect x="10" y="${u}" width="${s-20}" height="${n.remnantLengthMm-10}" 
            fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" stroke-dasharray="4,4" stroke-width="1.5" />
      <text x="${s/2}" y="${u+n.remnantLengthMm/2}" 
            text-anchor="middle" font-size="${Math.max(14,s*.025)}" 
            font-family="'JetBrains Mono', monospace" fill="#38bdf8" font-weight="600">
        REUSABLE REMNANT OFFCUT: ${s} × ${n.remnantLengthMm} mm
      </text>
    `}return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${-o} ${-i} ${a} ${r}" width="100%" height="100%" style="background-color: #0b1120; border-radius: 8px;">
      <defs>
        <pattern id="nestGrid" width="${Math.max(50,a/20)}" height="${Math.max(50,r/20)}" patternUnits="userSpaceOnUse">
          <path d="M ${Math.max(50,a/20)} 0 L 0 0 0 ${Math.max(50,r/20)}" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
        </pattern>
      </defs>
      
      <!-- Background Grid -->
      <rect x="${-o}" y="${-i}" width="${a}" height="${r}" fill="url(#nestGrid)" />

      <!-- Full Sheet Boundary -->
      <rect x="0" y="0" width="${s}" height="${t}" fill="rgba(15, 23, 42, 0.85)" stroke="#64748b" stroke-width="3" rx="4" />

      <!-- Sheet Margin Guide -->
      <rect x="10" y="10" width="${s-20}" height="${t-20}" fill="none" stroke="rgba(100, 116, 139, 0.4)" stroke-dasharray="6,6" stroke-width="1" />

      <!-- Packed Parts -->
      ${d}

      <!-- Remnant Offcut -->
      ${m}

      <!-- Sheet Title & Dimensions -->
      <text x="${s/2}" y="-20" text-anchor="middle" font-size="${Math.max(16,s*.028)}" font-family="'JetBrains Mono', monospace" fill="#f8fafc" font-weight="700">
        ${n.sheetSize.name.toUpperCase()} (Sheet ${e+1} of ${n.sheetsRequired})
      </text>
      <text x="${s/2}" y="${t+35}" text-anchor="middle" font-size="${Math.max(14,s*.022)}" font-family="'JetBrains Mono', monospace" fill="#94a3b8">
        Utilization: ${n.sheetUtilizationPercent}% | Skeleton Scrap: ${n.totalSkeletonScrapMassKg} kg | Parts on Bed: ${f.length} / ${n.partsRequested}
      </text>
    </svg>
  `}function we(n){if(n.segments.length===0)return"";const e=[];for(let s=0;s<n.segments.length;s++){const t=n.segments[s];if(s===0){const o=t.type==="line"?t.start:{x:t.center.x+t.radius*Math.cos(t.startAngle),y:t.center.y+t.radius*Math.sin(t.startAngle)};e.push(`M ${o.x.toFixed(3)} ${o.y.toFixed(3)}`)}if(t.type==="line")e.push(`L ${t.end.x.toFixed(3)} ${t.end.y.toFixed(3)}`);else if(t.type==="arc"){const o=t.center.x+t.radius*Math.cos(t.endAngle),i=t.center.y+t.radius*Math.sin(t.endAngle);let a=t.endAngle-t.startAngle;t.counterClockwise?a<0&&(a+=2*Math.PI):a>0&&(a-=2*Math.PI);const r=Math.abs(a)>Math.PI?1:0,d=t.counterClockwise?1:0;e.push(`A ${t.radius.toFixed(3)} ${t.radius.toFixed(3)} 0 ${r} ${d} ${o.toFixed(3)} ${i.toFixed(3)}`)}}return n.isClosed&&e.push("Z"),e.join(" ")}function so(n,e,s,t,o,i,a="Valued Customer",r=""){const d=o.currency==="INR",f=d?"₹":"$",c=d?`INV-${Math.floor(1e5+Math.random()*9e5)}`:`RFQ-${Math.floor(1e5+Math.random()*9e5)}`,m=d?new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),y=i.upiId||"shop@upi",u=o.finalTotalWithGst,h=Math.round(u/2*100)/100,$=`upi://pay?pa=${encodeURIComponent(y)}&pn=${encodeURIComponent(i.shopName)}&am=${h.toFixed(2)}&cu=INR&tn=${encodeURIComponent(c)}`,C=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent($)}`,P=d?`Dim: ${e.boundingBoxWidthMm.toFixed(0)} × ${e.boundingBoxHeightMm.toFixed(0)} mm | Thick: ${t.thicknessMm} mm<br>Grade: ${s} (${t.gaugeName}) | Gas: ${i.assistGas.toUpperCase()}<br>Cut Length: ${(e.totalCutLengthMm/1e3).toFixed(2)} m | Pierces: ${e.pierceCount} / pc`:`Dim: ${e.boundingBoxWidthInches.toFixed(2)}" × ${e.boundingBoxHeightInches.toFixed(2)}" | Gauge: ${t.gaugeName}<br>Grade: ${s} | Gas: ${i.assistGas.toUpperCase()}<br>Cut Length: ${e.totalCutLengthInches.toFixed(1)} in | Pierces: ${e.pierceCount} / pc | Est. Weight: ${e.theoreticalWeightLbs.toFixed(2)} lbs`;return`<!DOCTYPE html>
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
        <h1 class="shop-title">${i.shopName}</h1>
        <div class="shop-meta">
          <div>${i.shopAddress||(d?"MIDC Industrial Area, Pune, Maharashtra":"1420 Industrial Pkwy, Cleveland, OH 44135")}</div>
          <div>Phone: ${i.shopPhone||(d?"+91 98220 12345":"(216) 555-0198")} ${d?`| UPI: <strong>${y}</strong>`:""}</div>
          ${d?`<div>GSTIN: <strong>${i.shopGstin||"27AABCS1429B1Z8"}</strong> | State Code: 27 (MH)</div>`:"<div>Tax ID / Resale: <strong>Verified</strong> | Terms: <strong>Net 30 / Credit Card</strong></div>"}
        </div>
      </div>
      <div class="invoice-tag">
        <h2 class="invoice-title">${d?"PROFORMA INVOICE":"MANUFACTURING QUOTATION"}</h2>
        <div class="invoice-meta">
          <div>Ref No: <strong>${c}</strong></div>
          <div>Date: <strong>${m}</strong></div>
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
              ${P}
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
        <img src="${C}" alt="UPI QR Code">
        <div class="upi-sub">GPay / PhonePe / Paytm<br>Advance: <strong>${f}${h.toFixed(2)}</strong></div>
      </div>
      `:`
      <div class="terms-box">
        <div class="terms-title">Commercial & Payment Terms</div>
        <div class="terms-item">Payment: <strong>Net 30 / Credit Card / ACH</strong></div>
        <div class="terms-item">Lead Time: <strong>${i.leadTimeDays||3} to 5 Days ARO</strong></div>
        <div class="terms-item">Shipping: <strong>FOB Origin (Freight Pre-pay Available)</strong></div>
        <div class="terms-item">CAM Spec: <strong>Trumpf / SigmaNEST Cut-Ready</strong></div>
      </div>
      `}

      <table class="totals-table">
        <tr>
          <td>Subtotal (Excl. Tax):</td>
          <td class="text-right">${f}${o.finalOrderTotal.toFixed(2)}</td>
        </tr>
        ${d?i.isInterstateSale?`
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
          <td>Estimated Sales Tax (${i.gstPercent||0}%):</td>
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
</html>`}function ao(n,e,s,t,o,i){const a=`JOB-${Math.floor(1e3+Math.random()*9e3)}`,r=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});return`<!DOCTYPE html>
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
      <h1>${i.shopName.toUpperCase()}</h1>
      <div>LASER CUTTING OPERATOR JOB CARD / SHOP TRAVELER</div>
      <div><strong>Card #: ${a}</strong> | Date: ${r}</div>
    </div>

    <div class="grid">
      <div class="box">
        <div class="box-title">PART & MATERIAL SPECIFICATIONS</div>
        <div>Part Name: <strong>${n.name}</strong></div>
        <div>Grade: <strong>${s}</strong></div>
        <div>Thickness: <strong>${t.thicknessMm} mm (${t.gaugeName})</strong></div>
        <div>Dimensions: <strong>${e.boundingBoxWidthMm.toFixed(1)} × ${e.boundingBoxHeightMm.toFixed(1)} mm</strong></div>
        <div>Est. Mass/pc: <strong>${e.theoreticalWeightKg.toFixed(2)} kg</strong></div>
      </div>
      <div class="box">
        <div class="box-title">PRODUCTION & CNC PARAMETERS</div>
        <div>Cut Qty: <strong>${o} PIECES</strong></div>
        <div>Assist Gas: <strong>${i.assistGas.toUpperCase()}</strong></div>
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
</html>`}function ro(n,e){const s=e.currency==="INR",t=s?"₹":"$",o=n.shopSettings,i=`PRJ-${Math.floor(1e5+Math.random()*9e5)}`,a=s?new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),r=o.upiId||"shop@upi",d=e.finalTotalWithGst,f=Math.round(d/2*100)/100,c=`upi://pay?pa=${encodeURIComponent(r)}&pn=${encodeURIComponent(o.shopName)}&am=${f.toFixed(2)}&cu=INR&tn=${encodeURIComponent(i)}`,m=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(c)}`;let y="";for(let u=0;u<n.items.length;u++){const h=n.items[u],$=h.partGeometry.boundingBox,P=h.partGeometry.units==="inch"||!s?`${($.width/(h.partGeometry.units==="inch"?1:25.4)).toFixed(2)}" × ${($.height/(h.partGeometry.units==="inch"?1:25.4)).toFixed(2)}"`:`${$.width.toFixed(0)} × ${$.height.toFixed(0)} mm`,k=s?`${(h.metrics.totalCutLengthMm/1e3).toFixed(1)} m`:`${h.metrics.totalCutLengthInches.toFixed(1)} in`;y+=`
      <tr>
        <td class="text-center">${u+1}</td>
        <td>
          <strong>${h.partGeometry.name}</strong><br>
          <span style="font-size: 12px; color: #64748b;">
            ${P} | ${h.materialName} (${h.gaugeThicknessMm}mm) | Cut: ${k}
          </span>
        </td>
        <td class="text-center">${h.unitQuote.quotingMode==="job_work"?s?"Job Work":"Labor Only":s?"Turnkey":"Fabricated"}</td>
        <td class="text-right"><strong>${h.quantity}</strong></td>
        <td class="text-right">${t}${h.unitQuote.finalUnitPrice.toFixed(2)}</td>
        <td class="text-right"><strong>${t}${h.totalPrice.toFixed(2)}</strong></td>
      </tr>
    `}return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${s?"Project Tax Invoice":"Commercial Project Quotation"} - ${i}</title>
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
          <div>${o.shopAddress||(s?"MIDC Industrial Area, Bhosari, Pune, MH":"1420 Industrial Pkwy, Cleveland, OH 44135")}</div>
          <div>Phone: ${o.shopPhone||(s?"+91 98220 12345":"(216) 555-0198")} ${s?`| UPI: <strong>${r}</strong>`:""}</div>
          ${s?`<div>GSTIN: <strong>${o.shopGstin||"27AABCS1429B1Z8"}</strong> | State Code: 27 (Maharashtra)</div>`:"<div>Tax ID / Resale: <strong>Verified</strong> | Terms: <strong>Net 30 / Credit Card</strong></div>"}
        </div>
      </div>
      <div class="invoice-tag">
        <h2 class="invoice-title">${s?"CONSOLIDATED TAX INVOICE":"PROJECT QUOTATION"}</h2>
        <div class="invoice-meta">
          <div>Project Ref: <strong>${i}</strong></div>
          <div>Date: <strong>${a}</strong></div>
          <div>${s?"SAC: <strong>9988</strong> | HSN: <strong>7326</strong>":"Validity: <strong>15 Calendar Days</strong>"}</div>
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
        ${y}
      </tbody>
    </table>

    <div class="summary-grid">
      ${s?`
      <div class="upi-box">
        <div class="upi-title">Scan UPI QR to Pay Advance</div>
        <img src="${m}" alt="UPI QR Code" />
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
          <td>${s?"Taxable Value:":"Taxable Subtotal:"}</td>
          <td class="text-right">${t}${e.orderTotalBeforeGst.toFixed(2)}</td>
        </tr>
        ${s?o.isInterstateSale?`
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
        ${s?`
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
</html>`}function co(n,e){const s=n.shopSettings,t=`JOB-${Math.floor(1e5+Math.random()*9e5)}`,o=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});let i="";for(let a=0;a<n.items.length;a++){const r=n.items[a],d=r.partGeometry.boundingBox;i+=`
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
        <div style="font-size: 13px; color: #64748b; font-weight: 600;">${s.shopName} | Laser Controller: CypCut / FSCUT</div>
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
        ${i}
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
</html>`}let ht="inch",at="baseplate",qt="part",oe=!1,Kt=null,pt=1,yt=Te[0],At=Pn("USD",Ye),j=At[0],Q=j.gauges[3]||j.gauges[0],D=In("USD",xe),Pt={...vn},nt=[],kt="single",ft=0,ze=null,Pe=null,ge=!1,pe=null,jt=[],Qt=0,ie=2,Xt=!0;const v={length:10,width:8,units:"inch",cornerType:"chamfer",cornerSize:.75,holePattern:"4-corner",holeType:"slotted",holeDiameter:.75,slotLength:1.5,slotWidth:.75,edgeOffsetX:1.25,edgeOffsetY:1.25,centerCutoutType:"round",centerCutoutDiameter:2.5};let Et=Gt.find(n=>n.standard==="ASME"&&n.nominalBore==='2"')||Gt[Gt.length-1];const K={baseWidth:6,height:6,units:"inch",hasWeldSnipe:!0,snipeSize:1,mountingHoleDiameter:.5},B={width:24,height:48,units:"inch",patternType:"islamic_star",borderMarginMm:1.5,gridColumns:4,gridRows:8,hasMountingHoles:!0,mountingHoleDiameter:.3125,gateType:"single_swing",hasFrameTube:!0,frameTubeWidthMm:2,hasKickPlate:!1,kickPlateHeightMm:12,hasHinges:!0,hasPullHandle:!0,hasLockBox:!0,finishMaterial:"matte_black",backlightColor:"warm_white"};let wt="realistic_gate";const W={baseWidth:5,height:5,chamferTop:3,chamferRight:3,units:"inch",baseHoleCount:2,baseHoleDiameter:.375,uprightHoleCount:2,uprightHoleDiameter:.375,lighteningHoleDiameter:1.5},J={outerDiameter:6,innerDiameter:2,units:"inch",boltCount:6,boltDiameter:.375,pitchCircleDiameter:4},Nt=document.getElementById("dynamicControls"),st=document.getElementById("svgContainer"),lo=document.getElementById("hudCutLength"),mo=document.getElementById("hudPierces"),uo=document.getElementById("hudWeight"),ho=document.getElementById("hudBoundingBox"),un=document.getElementById("dfmAlertContainer"),He=document.getElementById("canvasTitle"),hn=document.getElementById("nestingHudBar"),gn=document.getElementById("nestHudSheets"),pn=document.getElementById("nestHudUtil"),fn=document.getElementById("nestHudScrap"),yn=document.getElementById("nestHudRemnant"),$e=document.getElementById("quoteModeBadge"),xn=document.getElementById("quoteShopName"),go=document.getElementById("totalPrice"),po=document.getElementById("pricePerUnit"),Ce=document.getElementById("costMaterial"),fo=document.getElementById("costCut"),yo=document.getElementById("costPierce"),bn=document.getElementById("costHandling"),$n=document.getElementById("costSecondary"),xo=document.getElementById("costDiscount"),bo=document.getElementById("costGst"),$o=document.getElementById("totalIncGst"),Me=document.getElementById("gstLabel"),Re=document.getElementById("hsnCodeTag"),Ge=document.getElementById("minOrderWarning"),fe=document.getElementById("materialSelect"),se=document.getElementById("gaugeSelect"),Se=document.getElementById("assistGasSelect"),Jt=document.getElementById("sheetSizeSelect"),Oe=document.getElementById("camProfileSelect"),Co=document.getElementById("navCamName");let Bt=1,St={x:0,y:0},ve=!1,We={x:0,y:0};function Vt(){const n=st==null?void 0:st.querySelector("svg");n&&(Bt===1&&St.x===0&&St.y===0?(n.style.transform="",st==null||st.classList.remove("is-zoomed")):(n.style.transform=`translate(${St.x}px, ${St.y}px) scale(${Bt})`,st==null||st.classList.add("is-zoomed")));const e=document.getElementById("zoomLevelDisplay");e&&(e.textContent=`${Math.round(Bt*100)}%`)}function he(){Bt=1,St={x:0,y:0},Vt()}function Mo(){je("USD"),Fo(),_o(),ae(),ye(),Ft(),E()}let Cn=null;function Dt(){const n=document.getElementById("storageBadge");n&&(n.textContent="💾 Saving...",n.classList.add("saving")),clearTimeout(Cn),Cn=setTimeout(()=>{qn(D.currency,D),Zn(D.currency,At),n&&(n.textContent="💾 Auto-Saved",n.classList.remove("saving"))},400)}function Ht(){return oe&&Kt?Kt:at==="baseplate"?(v.units=ht,Fn(v)):at==="flange"?Nn({outerDiameter:Et.outerDiameter,innerBore:Et.innerBore,pitchCircleDiameter:Et.pitchCircleDiameter,boltCount:Et.boltCount,boltDiameter:Et.boltDiameter,units:Et.units}):at==="gusset"?(K.units=ht,_n(K)):at==="jali"?(B.units=ht,Hn(B)):at==="bracket"?(W.units=ht,Rn(W)):(J.units=ht,Gn(J))}function E(){var b,g;const n=ht==="inch",e=Ht(),s=Yt(e,Q.thicknessMm,j.densityGPerCm3),t=Wn(e,Q.thicknessMm);let o;if(kt==="cart"&&nt.length>0){const x=nt.map(S=>({id:S.id,name:S.partGeometry.name,boundingBox:S.partGeometry.boundingBox,quantity:S.quantity,thicknessMm:S.gaugeThicknessMm,densityGPerCm3:j.densityGPerCm3,geometry:S.partGeometry,color:S.color}));o=Qe(x,yt,Q.thicknessMm,j.densityGPerCm3)}else o=Kn(e.boundingBox,pt,yt,Q.thicknessMm,j.densityGPerCm3,{},e.units);ze=o,ft=Math.max(0,Math.min(ft,o.sheetsRequired-1));const i=Rt(s,Q,pt,D,Pt),a=document.getElementById("sheetPaginationBar"),r=document.getElementById("sheetPageIndicator"),d=document.getElementById("btnPrevSheet"),f=document.getElementById("btnNextSheet"),c=document.getElementById("gateStudioToolbar"),m=document.getElementById("simulatorControls");if(qt==="nesting")c&&c.classList.add("hidden"),m&&(m.style.display="flex"),st.innerHTML=io(o,ft),kt==="cart"?He.textContent=`RFQ Cart Assembly — ${yt.name} Layout (Sheet ${ft+1} of ${o.sheetsRequired})`:He.textContent=`${e.name} — ${yt.name} Layout (Sheet ${ft+1} of ${o.sheetsRequired})`,a&&a.classList.remove("hidden"),r&&(r.textContent=`Sheet ${ft+1} of ${o.sheetsRequired}`),d&&(d.disabled=ft<=0),f&&(f.disabled=ft>=o.sheetsRequired-1);else if(a&&a.classList.add("hidden"),at==="jali"?(c&&(c.classList.remove("hidden"),(b=document.getElementById("btnJaliViewRealistic"))==null||b.classList.toggle("active",wt==="realistic_gate"),(g=document.getElementById("btnJaliViewCam"))==null||g.classList.toggle("active",wt==="cam_toolpath"),c.querySelectorAll(".finish-swatch").forEach(x=>{x.classList.toggle("active",x.getAttribute("data-finish")===B.finishMaterial)}),c.querySelectorAll(".backlight-pill").forEach(x=>{x.classList.toggle("active",x.getAttribute("data-backlight")===B.backlightColor)}),c.querySelectorAll(".gate-type-btn").forEach(x=>{x.classList.toggle("active",x.getAttribute("data-gatetype")===B.gateType)})),m&&(m.style.display="flex")):(c&&c.classList.add("hidden"),m&&(m.style.display="flex")),!ge){st.innerHTML=wn(e,{showCutOrder:Xt,viewStyle:at==="jali"?wt:"cam_toolpath",jaliParams:at==="jali"?B:void 0,hideCamBadges:at==="jali"&&(wt==="realistic_gate"||!Xt)});const S=ht==="inch"?`${s.boundingBoxWidthInches.toFixed(2)}" × ${s.boundingBoxHeightInches.toFixed(2)}"`:`${s.boundingBoxWidthMm.toFixed(0)} × ${s.boundingBoxHeightMm.toFixed(0)} mm`;He.textContent=at==="jali"&&wt==="realistic_gate"?`Architectural CNC Gate & Jali Studio (${S})`:`${e.name} (${S})`}const y=document.getElementById("camLegendBar"),u=document.getElementById("archLegendBar");if(at==="jali"&&wt==="realistic_gate"&&qt!=="nesting"){if(y&&y.classList.add("hidden"),u){u.classList.remove("hidden");const x={matte_black:"Matte Black Powder Coat",royal_gold:"Royal Gold / Antique Brass",corten_rust:"Corten Weathered Rust Steel",brushed_stainless:"Satin Stainless 304",champagne_bronze:"Champagne Bronze"},S={warm_white:"Warm 3000K LED",cool_white:"Cool 6000K LED",amber_gold:"Sunset Amber LED",none:"Off (Daylight)"},M=B.gateType==="wall_panel",l=M?"Wall Mount Standoffs":`${B.hasFrameTube!==!1?n?'2" Box Tube':"50mm Box Tube":"Frameless Plate"}`,p=M?n?'1/4" Stainless Standoff Screws':"M8 Stainless Standoff Screws":`${B.hasHinges!==!1?"Bullet Hinges":""}${B.hasPullHandle!==!1?" + Bar Pull":""}${B.hasLockBox!==!1?" + Mortise Lock":""}`.replace(/^\s*\+\s*/,"")||"Custom Welded",_=document.getElementById("archLegendFinish"),H=document.getElementById("archLegendLight"),O=document.getElementById("archLegendFrame"),R=document.getElementById("archLegendHardware");_&&(_.textContent=x[B.finishMaterial||"matte_black"]||"Matte Black"),H&&(H.textContent=S[B.backlightColor||"warm_white"]||"Warm 3000K"),O&&(O.textContent=l),R&&(R.textContent=p)}}else y&&y.classList.remove("hidden"),u&&u.classList.add("hidden");Vt(),lo.textContent=n?`${s.totalCutLengthInches.toFixed(2)} in`:`${s.totalCutLengthMm.toFixed(1)} mm`,mo.textContent=s.pierceCount.toString(),uo.textContent=n?`${s.theoreticalWeightLbs.toFixed(2)} lbs`:`${s.theoreticalWeightKg.toFixed(2)} kg`,ho.textContent=n?`${s.boundingBoxWidthInches.toFixed(2)}" × ${s.boundingBoxHeightInches.toFixed(2)}"`:`${s.boundingBoxWidthMm.toFixed(0)} × ${s.boundingBoxHeightMm.toFixed(0)} mm`;const h=i.currency==="USD";hn&&(hn.style.display=pt>1||qt==="nesting"||kt==="cart"?"grid":"none"),gn&&(gn.textContent=`${o.sheetsRequired} Sheet${o.sheetsRequired>1?"s":""}`),pn&&(pn.textContent=`${o.sheetUtilizationPercent}%`),fn&&(fn.textContent=h?`${(o.totalSkeletonScrapMassKg*2.20462).toFixed(1)} lbs`:`${o.totalSkeletonScrapMassKg.toFixed(1)} kg`),yn&&(yn.textContent=h?`${(o.remnantWidthMm/25.4).toFixed(1)}" × ${(o.remnantLengthMm/25.4).toFixed(1)}"`:`${o.remnantWidthMm} × ${o.remnantLengthMm} mm`),So(t);const $=i.currency==="INR"?"₹":"$";go.textContent=i.finalOrderTotal.toFixed(2),po.textContent=`(${$}${i.finalUnitPrice.toFixed(2)} / unit)`,$e&&(i.quotingMode==="job_work"?$e.textContent=h?"LABOR ONLY (CUSTOMER STOCK)":"JOB WORK (LABOUR ONLY)":i.quotingMode==="sqft_jali"?$e.textContent=h?"ARCHITECTURAL PANELS":"ARCHITECTURAL (₹/SQ.FT)":$e.textContent=h?"TURNKEY (PLATE + CUT)":"WITH MATERIAL (SUPPLY & CUT)"),Ce.textContent=`${$}${i.unitMaterialCost.toFixed(2)}`,fo.textContent=`${$}${i.unitCutCost.toFixed(2)}`,yo.textContent=`${$}${i.unitPierceCost.toFixed(2)}`,bn&&(bn.textContent=`${$}${i.unitHandlingCost.toFixed(2)}`),$n&&($n.textContent=`${$}${i.unitSecondaryCost.toFixed(2)}`);const C=document.getElementById("rowMaterial"),P=document.getElementById("rowCut"),k=document.getElementById("rowPierce"),w=document.getElementById("rowHandling"),A=document.getElementById("rowSecondary");if(i.quotingMode==="job_work"){if(C){C.style.display="flex";const x=C.querySelector("span:first-child");x&&(x.textContent="Raw Material:"),Ce.textContent=h?"$0.00 (Customer Sheet)":"₹0.00 (Customer Plate)"}P&&(P.style.display="flex"),k&&(k.style.display="flex"),w&&(w.style.display="flex")}else if(i.quotingMode==="sqft_jali"){if(C){C.style.display="flex";const x=C.querySelector("span:first-child");x&&(x.textContent=h?"Fabrication Rate:":"Jali Fabrication (Sq.Ft):"),Ce.textContent=`${$}${i.unitMaterialCost.toFixed(2)}`}P&&(P.style.display="none"),k&&(k.style.display="none"),w&&(w.style.display="none")}else{if(C){C.style.display="flex";const x=C.querySelector("span:first-child");x&&(x.textContent=h?"Raw Stock Material:":"Raw Material (Steel):"),Ce.textContent=`${$}${i.unitMaterialCost.toFixed(2)}`}P&&(P.style.display="flex"),k&&(k.style.display="flex"),w&&(w.style.display="none")}A&&(A.style.display=i.unitSecondaryCost>0?"flex":"none"),xo.textContent=`-${i.discountPercent}%`,bo.textContent=`${$}${i.gstAmount.toFixed(2)}`,$o.textContent=`${$}${i.finalTotalWithGst.toFixed(2)}`,Me&&(h?Me.textContent=`Sales Tax (${D.gstPercent||0}%):`:D.isInterstateSale?Me.textContent="IGST (18%):":Me.textContent="GST (CGST 9% + SGST 9%):");const G=document.querySelector(".breakdown-row.total-inc-gst span:first-child");G&&(G.textContent=h?"Total (Inc. Tax):":"Total (Inc. GST):"),Re&&(Re.style.display=h?"none":"block",Re.textContent=i.hsnSacCode),i.minimumOrderFloorApplied?(Ge.classList.remove("hidden"),Ge.innerHTML=`⚠️ <strong>Minimum Order Floor Active</strong><br><span style="font-size:0.7rem;opacity:0.95;">Calc Subtotal: ${$}${i.orderTotalBeforeMin.toFixed(2)} → Billed Min Floor: ${$}${i.finalOrderTotal.toFixed(2)}</span>`):Ge.classList.add("hidden")}function So(n){if(un.innerHTML="",!(n.isManufacturable&&!n.hasWarnings))for(const e of n.issues){const s=document.createElement("div");s.className=`dfm-pill ${e.severity==="error"?"dfm-error":"dfm-warning"}`,s.innerHTML=`
      <span class="dfm-icon">${e.severity==="error"?"⚠️":"ℹ️"}</span>
      <span class="dfm-text">${e.message}</span>
    `,un.appendChild(s)}}function kn(){fe.innerHTML="";for(const n of At){const e=document.createElement("option");e.value=n.id,e.textContent=n.name,fe.appendChild(e)}fe.value=j.id,En()}function En(){se.innerHTML="";for(let n=0;n<j.gauges.length;n++){const e=j.gauges[n],s=document.createElement("option");s.value=n.toString(),s.textContent=e.gaugeName,se.appendChild(s)}se.selectedIndex=Math.min(3,j.gauges.length-1),Q=j.gauges[se.selectedIndex]}function vo(){Oe.innerHTML="";for(const n of re){const e=document.createElement("option");e.value=n.id,e.textContent=n.name,Oe.appendChild(e)}Oe.value=D.selectedCAMProfileId,Io()}function Io(){const n=re.find(e=>e.id===D.selectedCAMProfileId)||re[0];Co.textContent=n.name.split("(")[0].trim()}function Po(){if(!Jt)return;Jt.innerHTML="";const n=D.currency==="USD"?Te:ce;for(const s of n){const t=document.createElement("option");t.value=s.id,t.textContent=s.name,Jt.appendChild(t)}yt=n.find(s=>s.id===yt.id)||n[0],Jt.value=yt.id}function je(n){var L;const e=n==="USD",s=document.getElementById("btnCurrencyINR"),t=document.getElementById("btnCurrencyUSD");e?(t==null||t.classList.add("active"),s==null||s.classList.remove("active")):(s==null||s.classList.add("active"),t==null||t.classList.remove("active")),D=In(n,e?xe:Le),At=Pn(n,e?Ye:Sn),j=At[0],Q=j.gauges[e?3:4]||j.gauges[0],ke(e?"inch":"mm"),Ee(),yt=e?Te[0]:ce[0],e?Et=Gt.find(F=>F.standard==="ASME"&&F.nominalBore==='2"')||Gt[Gt.length-1]:Et=Gt[2];const o=document.getElementById("brandTitle"),i=document.getElementById("brandSubtitle");o&&(o.textContent=e?"US CNC LASER CPQ":"INDIAN CNC LASER CPQ"),i&&(i.textContent=e?"Instant Quoting, Nesting & Trumpf/SigmaNEST DXF":"WhatsApp-First Quoting & CypCut DXF Engine");const a=document.getElementById("modeJobWork"),r=document.getElementById("modeWithMaterial"),d=document.getElementById("modeSqFtJali");a&&(a.innerHTML=e?"🔧 Labor Only":"🔧 Job Work"),r&&(r.innerHTML=e?"📦 Turnkey (Plate+Cut)":"📦 Turnkey"),d&&(d.innerHTML=e?"🏛️ Arch Panels":"🏛️ Architectural");const f=document.getElementById("currencySym"),c=document.getElementById("adminCurrencySym");f&&(f.textContent=e?"$":"₹"),c&&(c.textContent=e?"$":"₹");const m=document.getElementById("customerPhoneLabel"),y=document.getElementById("phoneCountryPrefix"),u=document.getElementById("customerPhoneInput"),h=document.getElementById("phoneHint"),$=document.getElementById("phoneModeBadge");m&&(m.textContent=e?"Customer Email / Phone":"Customer WhatsApp"),y&&(y.textContent=e?"+1":"+91"),u&&(u.placeholder=e?"estimator@client.com or (555) 123-4567":"10-digit mobile (e.g. 98230 12345)"),h&&(h.textContent=e?"Enter email to send quote, or copy directly to clipboard":"Enter mobile to open direct chat, or leave blank to choose contact"),$&&($.textContent=e?"Email / RFQ":"Direct Send");const C=document.getElementById("shareWhatsAppBtn"),P=document.getElementById("shareBtnIcon"),k=document.getElementById("shareBtnText"),w=document.getElementById("printInvoiceText"),A=document.getElementById("downloadDxfText");C&&(e?(C.classList.remove("btn-whatsapp"),C.classList.add("btn-email")):(C.classList.remove("btn-email"),C.classList.add("btn-whatsapp"))),P&&(P.textContent=e?"✉️":"💬"),k&&(k.textContent=e?"Copy Quote for Email":"Share Quote on WhatsApp"),w&&(w.textContent=e?"Commercial Quote (PDF)":"Tax Invoice & QR");const G=((L=re.find(F=>F.id===D.selectedCAMProfileId))==null?void 0:L.name.split(" ")[0])||(e?"Trumpf":"CypCut");A&&(A.textContent=`${G} DXF`);const b=document.getElementById("shareCartWhatsAppBtn"),g=document.getElementById("shareCartBtnIcon"),x=document.getElementById("shareCartBtnText"),S=document.getElementById("printCartInvoiceText");b&&(e?(b.classList.remove("btn-whatsapp"),b.classList.add("btn-email")):(b.classList.remove("btn-email"),b.classList.add("btn-whatsapp"))),g&&(g.textContent=e?"✉️":"💬"),x&&(x.textContent=e?"Copy Project Quote for Email":"Share Project Quote on WhatsApp"),S&&(S.textContent=e?"Commercial Quote (PDF)":"Tax Invoice & QR");const M=document.getElementById("groupAdminGstin"),l=document.getElementById("groupAdminUpi"),p=document.getElementById("groupAdminTaxType"),_=document.getElementById("labelSheetLoading"),H=document.getElementById("labelPricePerKg"),O=document.getElementById("labelPricePerMeterCut"),R=document.getElementById("labelPricePerPierce"),T=document.getElementById("labelAdminTax");M&&(M.style.display=e?"none":"block"),l&&(l.style.display=e?"none":"block"),p&&(p.style.display=e?"none":"block"),_&&(_.textContent=e?"Handling & Loading Fee ($/sheet)":"Plate Loading / Handling Fee (₹/sheet)"),H&&(H.textContent=e?"Material Rate ($/sq.in)":"Material Rate (₹/kg)"),O&&(O.textContent=e?"Cut Rate ($/lin.in)":"Cut Rate (₹/meter)"),R&&(R.textContent=e?"Pierce Fee ($/pt)":"Pierce Fee (₹/pt)"),T&&(T.textContent=e?"Sales Tax (%)":"GST / Tax (%)"),kn(),Po(),vo(),ye(),ae(),Ft(),E(),xt(e?"🇺🇸 Switched to US Imperial Mode (USD $, Inches, A36/SS304/AL6061, Trumpf DXF)":"🇮🇳 Switched to India Metric Mode (INR ₹, mm, IS 2062, CypCut DXF)")}function ae(){Nt.innerHTML="",at==="baseplate"?Bo():at==="flange"?wo():at==="gusset"?ko():at==="jali"?Tn():at==="bracket"?Eo():at==="disc"&&To()}function Bo(){const n=ht==="inch",e=n?"in":"mm";Nt.innerHTML=`
    <div class="preset-pills-row">
      <button class="preset-pill" data-len="${n?6:150}" data-wid="${n?6:150}">${n?'6×6"':"150×150"}</button>
      <button class="preset-pill" data-len="${n?8:200}" data-wid="${n?8:200}">${n?'8×8"':"200×200"}</button>
      <button class="preset-pill" data-len="${n?10:250}" data-wid="${n?8:200}">${n?'10×8"':"250×200 Std"}</button>
      <button class="preset-pill" data-len="${n?12:300}" data-wid="${n?12:300}">${n?'12×12"':"300×300 PEB"}</button>
    </div>

    <div class="form-group">
      <label class="form-label">Plate Length (${e}): <strong id="valBpLen">${v.length}</strong></label>
      <input type="range" id="bpLength" min="${n?2:50}" max="${n?36:900}" value="${v.length}" step="${n?.25:5}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Plate Width (${e}): <strong id="valBpWid">${v.width}</strong></label>
      <input type="range" id="bpWidth" min="${n?2:50}" max="${n?36:900}" value="${v.width}" step="${n?.25:5}" class="form-slider" />
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Corner Finish</label>
        <select id="bpCornerType" class="form-select">
          <option value="chamfer" ${v.cornerType==="chamfer"?"selected":""}>45° Chamfer</option>
          <option value="fillet" ${v.cornerType==="fillet"?"selected":""}>Radius Fillet</option>
          <option value="sharp" ${v.cornerType==="sharp"?"selected":""}>Sharp</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Corner Size (${e})</label>
        <input type="number" id="bpCornerSize" class="form-input" value="${v.cornerSize}" min="0" max="${n?4:100}" step="${n?.05:1}" />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Bolt Hole Type</label>
        <select id="bpHoleType" class="form-select">
          <option value="slotted" ${v.holeType==="slotted"?"selected":""}>Slotted / Oval (Site Tolerance)</option>
          <option value="round" ${v.holeType==="round"?"selected":""}>Round Hole</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Bolt Hole Dia (${e})</label>
        <input type="number" id="bpHoleDia" class="form-input" value="${v.holeDiameter}" min="${n?.2:4}" max="${n?2.5:50}" step="${n?.05:1}" />
      </div>
    </div>

    <div class="form-row" id="slotDimsRow" style="${v.holeType==="slotted"?"display: flex;":"display: none;"}">
      <div class="form-group">
        <label class="form-label">Slot Length (${e})</label>
        <input type="number" id="bpSlotLen" class="form-input" value="${v.slotLength||(n?1.5:35)}" min="${n?.5:10}" max="${n?5:100}" step="${n?.1:1}" />
      </div>
      <div class="form-group">
        <label class="form-label">Slot Width (${e})</label>
        <input type="number" id="bpSlotWid" class="form-input" value="${v.slotWidth||(n?.75:20)}" min="${n?.2:6}" max="${n?2.5:50}" step="${n?.05:1}" />
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Center Cutout (Pipe / Column)</label>
      <select id="bpCenterType" class="form-select">
        <option value="none" ${v.centerCutoutType==="none"?"selected":""}>None (Solid Center)</option>
        <option value="round" ${v.centerCutoutType==="round"?"selected":""}>Round Pipe Cutout</option>
        <option value="rectangular" ${v.centerCutoutType==="rectangular"?"selected":""}>Rectangular / Tube Cutout</option>
      </select>
    </div>

    <div class="form-group" id="centerCutoutDiaGroup" style="${v.centerCutoutType==="round"?"display: block;":"display: none;"}">
      <label class="form-label">Center Hole Diameter (${e}): <strong id="valCenterDia">${v.centerCutoutDiameter||50}</strong></label>
      <input type="range" id="bpCenterDia" min="${n?.5:15}" max="${n?12:300}" value="${v.centerCutoutDiameter||50}" class="form-slider" />
    </div>
  `;const s=document.getElementById("bpLength"),t=document.getElementById("bpWidth"),o=document.getElementById("valBpLen"),i=document.getElementById("valBpWid");s.oninput=()=>{v.length=parseFloat(s.value),o.textContent=s.value,E()},t.oninput=()=>{v.width=parseFloat(t.value),i.textContent=t.value,E()};const a=document.getElementById("bpCornerType"),r=document.getElementById("bpCornerSize");a.onchange=()=>{v.cornerType=a.value,E()},r.oninput=()=>{v.cornerSize=parseFloat(r.value)||0,E()};const d=document.getElementById("bpHoleType"),f=document.getElementById("bpHoleDia"),c=document.getElementById("slotDimsRow");d.onchange=()=>{v.holeType=d.value,c.style.display=d.value==="slotted"?"flex":"none",E()},f.oninput=()=>{v.holeDiameter=parseFloat(f.value)||12,E()};const m=document.getElementById("bpSlotLen"),y=document.getElementById("bpSlotWid");m&&y&&(m.oninput=()=>{v.slotLength=parseFloat(m.value)||30,E()},y.oninput=()=>{v.slotWidth=parseFloat(y.value)||15,E()});const u=document.getElementById("bpCenterType"),h=document.getElementById("centerCutoutDiaGroup"),$=document.getElementById("bpCenterDia"),C=document.getElementById("valCenterDia");u.onchange=()=>{v.centerCutoutType=u.value,h.style.display=u.value==="round"?"block":"none",E()},$&&($.oninput=()=>{v.centerCutoutDiameter=parseFloat($.value),C.textContent=$.value,E()}),Nt.querySelectorAll(".preset-pill").forEach(P=>{P.onclick=()=>{const k=parseFloat(P.getAttribute("data-len")),w=parseFloat(P.getAttribute("data-wid"));v.length=k,v.width=w,s.value=k.toString(),t.value=w.toString(),o.textContent=k.toString(),i.textContent=w.toString(),E()}})}function wo(){Nt.innerHTML=`
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
  `;const n=document.getElementById("flangeStandardSelect"),e=document.getElementById("flangePresetSelect"),s=document.getElementById("flangeSpecsBox"),t=i=>{e.innerHTML="";const a=Gt.filter(r=>i==="ALL"||r.standard===i);for(let r=0;r<a.length;r++){const d=a[r],f=document.createElement("option");f.value=d.name,f.textContent=`${d.name} [${d.standard}]`,e.appendChild(f)}e.value=Et.name,o()},o=()=>{const i=Et,a=i.units;s.innerHTML=`
      Outer Diameter: <strong>${i.outerDiameter} ${a}</strong> | Inner Bore: <strong>${i.innerBore} ${a}</strong><br>
      PCD: <strong>${i.pitchCircleDiameter} ${a}</strong> | Bolts: <strong>${i.boltCount} × ⌀${i.boltDiameter} ${a}</strong>
    `};n.onchange=()=>{t(n.value)},e.onchange=()=>{const i=Gt.find(a=>a.name===e.value);i&&(Et=i,ke(i.units),Ee(),o(),E())},t("ALL")}function ko(){const n=ht==="inch",e=n?"in":"mm";Nt.innerHTML=`
    <div class="preset-pills-row">
      <button class="preset-pill" data-w="${n?4:100}" data-h="${n?4:100}">100×100</button>
      <button class="preset-pill" data-w="${n?6:150}" data-h="${n?6:150}">150×150</button>
      <button class="preset-pill" data-w="${n?8:200}" data-h="${n?8:200}">200×200</button>
    </div>

    <div class="form-group">
      <label class="form-label">Base Width (${e}): <strong id="valGussetW">${K.baseWidth}</strong></label>
      <input type="range" id="gussetBaseW" min="${n?2:50}" max="${n?24:600}" value="${K.baseWidth}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Height (${e}): <strong id="valGussetH">${K.height}</strong></label>
      <input type="range" id="gussetHeight" min="${n?2:50}" max="${n?24:600}" value="${K.height}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">45° Corner Weld Snipe (Cope)</label>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <input type="checkbox" id="gussetSnipeCheck" ${K.hasWeldSnipe?"checked":""} class="form-checkbox" />
        <span style="font-size: 0.78rem; color: #cbd5e1;">Clear fillet weld bead at corner</span>
      </div>
    </div>

    <div class="form-group" id="snipeSizeGroup" style="${K.hasWeldSnipe?"display: block;":"display: none;"}">
      <label class="form-label">Snipe Size (${e}): <strong id="valSnipeSize">${K.snipeSize}</strong></label>
      <input type="range" id="gussetSnipeSize" min="${n?.25:10}" max="${n?3:75}" value="${K.snipeSize}" class="form-slider" />
    </div>
  `;const s=document.getElementById("gussetBaseW"),t=document.getElementById("gussetHeight"),o=document.getElementById("valGussetW"),i=document.getElementById("valGussetH");s.oninput=()=>{K.baseWidth=parseFloat(s.value),o.textContent=s.value,E()},t.oninput=()=>{K.height=parseFloat(t.value),i.textContent=t.value,E()};const a=document.getElementById("gussetSnipeCheck"),r=document.getElementById("snipeSizeGroup"),d=document.getElementById("gussetSnipeSize"),f=document.getElementById("valSnipeSize");a.onchange=()=>{K.hasWeldSnipe=a.checked,r.style.display=a.checked?"block":"none",E()},d.oninput=()=>{K.snipeSize=parseFloat(d.value),f.textContent=d.value,E()},Nt.querySelectorAll(".preset-pill").forEach(c=>{c.onclick=()=>{const m=parseFloat(c.getAttribute("data-w")),y=parseFloat(c.getAttribute("data-h"));K.baseWidth=m,K.height=y,s.value=m.toString(),t.value=y.toString(),o.textContent=m.toString(),i.textContent=y.toString(),E()}})}function Tn(){const n=ht==="inch",e=n?"in":"mm";Nt.innerHTML=`
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
  `;const s=document.getElementById("jaliWidth"),t=document.getElementById("jaliHeight"),o=document.getElementById("valJaliW"),i=document.getElementById("valJaliH");s.oninput=()=>{B.width=parseFloat(s.value),o.textContent=s.value,E()},t.oninput=()=>{B.height=parseFloat(t.value),i.textContent=t.value,E()};const a=document.getElementById("jaliPattern");a.onchange=()=>{B.patternType=a.value,E()};const r=document.getElementById("jaliBorder"),d=document.getElementById("jaliCols"),f=document.getElementById("jaliRows");r.oninput=()=>{B.borderMarginMm=parseFloat(r.value)||(n?1.5:30),E()},d.oninput=()=>{B.gridColumns=parseInt(d.value,10)||4,E()},f&&(f.oninput=()=>{B.gridRows=parseInt(f.value,10)||6,E()});const c=document.getElementById("jaliFrameCheck");c&&(c.onchange=()=>{B.hasFrameTube=c.checked,E()});const m=document.getElementById("jaliKickCheck"),y=document.getElementById("kickHeightRow"),u=document.getElementById("jaliKickHeight"),h=document.getElementById("valKickH");m&&(m.onchange=()=>{B.hasKickPlate=m.checked,y&&(y.style.display=m.checked?"block":"none"),E()}),u&&(u.oninput=()=>{B.kickPlateHeightMm=parseFloat(u.value),h&&(h.textContent=u.value),E()});const $=document.getElementById("jaliHandleCheck");$&&($.onchange=()=>{B.hasPullHandle=$.checked,E()});const C=document.getElementById("jaliLockCheck");C&&(C.onchange=()=>{B.hasLockBox=C.checked,E()});const P=document.getElementById("jaliHingeCheck");P&&(P.onchange=()=>{B.hasHinges=P.checked,E()});const k=document.getElementById("jaliMountHolesCheck");k&&(k.onchange=()=>{B.hasMountingHoles=k.checked,E()}),Nt.querySelectorAll(".jali-preset").forEach(w=>{w.onclick=()=>{const A=parseFloat(w.getAttribute("data-w")),G=parseFloat(w.getAttribute("data-h")),b=w.getAttribute("data-type"),g=w.getAttribute("data-frame")==="true",x=w.getAttribute("data-kick")==="true",S=parseFloat(w.getAttribute("data-kickh")||"0"),M=w.getAttribute("data-pat"),l=w.getAttribute("data-finish");B.width=A,B.height=G,b&&(B.gateType=b),B.hasFrameTube=g,B.hasKickPlate=x,S&&(B.kickPlateHeightMm=S),M&&(B.patternType=M),l&&(B.finishMaterial=l),Tn(),E()}})}function Eo(){const n=ht==="inch",e=n?"in":"mm";Nt.innerHTML=`
    <div class="form-group">
      <label class="form-label">Base Width (${e}): <strong id="valBrW">${W.baseWidth}</strong></label>
      <input type="range" id="brWidth" min="${n?2:50}" max="${n?16:400}" value="${W.baseWidth}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Height (${e}): <strong id="valBrH">${W.height}</strong></label>
      <input type="range" id="brHeight" min="${n?2:50}" max="${n?16:400}" value="${W.height}" class="form-slider" />
    </div>
  `;const s=document.getElementById("brWidth"),t=document.getElementById("brHeight"),o=document.getElementById("valBrW"),i=document.getElementById("valBrH");s.oninput=()=>{W.baseWidth=parseFloat(s.value),o.textContent=s.value,E()},t.oninput=()=>{W.height=parseFloat(t.value),i.textContent=t.value,E()}}function To(){const n=ht==="inch",e=n?"in":"mm";Nt.innerHTML=`
    <div class="form-group">
      <label class="form-label">Outer Diameter (${e}): <strong id="valDiscOD">${J.outerDiameter}</strong></label>
      <input type="range" id="discOD" min="${n?2:50}" max="${n?24:600}" value="${J.outerDiameter}" class="form-slider" />
    </div>

    <div class="form-group">
      <label class="form-label">Inner Bore Diameter (${e}): <strong id="valDiscID">${J.innerDiameter}</strong></label>
      <input type="range" id="discID" min="0" max="${n?Math.max(.5,J.outerDiameter-.5):Math.max(10,J.outerDiameter-10)}" value="${J.innerDiameter}" step="${n?.1:1}" class="form-slider" />
    </div>
  `;const s=document.getElementById("discOD"),t=document.getElementById("discID"),o=document.getElementById("valDiscOD"),i=document.getElementById("valDiscID");s.oninput=()=>{J.outerDiameter=parseFloat(s.value),o.textContent=s.value,t.max=(n?Math.max(.5,J.outerDiameter-.5):Math.max(10,J.outerDiameter-10)).toString(),E()},t.oninput=()=>{J.innerDiameter=parseFloat(t.value),i.textContent=t.value,E()}}function ke(n){if(ht===n)return;const e=ht;ht=n,n==="inch"&&e==="mm"?(v.units="inch",v.length=Math.round(v.length/25.4*2)/2||10,v.width=Math.round(v.width/25.4*2)/2||8,v.cornerSize=Math.round(v.cornerSize/25.4*4)/4||.75,v.holeDiameter=Math.round(v.holeDiameter/25.4*16)/16||.75,v.slotLength&&(v.slotLength=Math.round(v.slotLength/25.4*4)/4||1.5),v.slotWidth&&(v.slotWidth=Math.round(v.slotWidth/25.4*16)/16||.75),v.edgeOffsetX=Math.round(v.edgeOffsetX/25.4*4)/4||1.25,v.edgeOffsetY=Math.round(v.edgeOffsetY/25.4*4)/4||1.25,v.centerCutoutDiameter&&(v.centerCutoutDiameter=Math.round(v.centerCutoutDiameter/25.4*2)/2||2.5),v.centerCutoutWidth&&(v.centerCutoutWidth=Math.round(v.centerCutoutWidth/25.4*2)/2||2),v.centerCutoutHeight&&(v.centerCutoutHeight=Math.round(v.centerCutoutHeight/25.4*2)/2||2),K.units="inch",K.baseWidth=Math.round(K.baseWidth/25.4*2)/2||6,K.height=Math.round(K.height/25.4*2)/2||6,K.snipeSize=Math.round(K.snipeSize/25.4*4)/4||1,K.mountingHoleDiameter!==void 0&&(K.mountingHoleDiameter=Math.round(K.mountingHoleDiameter/25.4*16)/16||.5),W.units="inch",W.baseWidth=Math.round(W.baseWidth/25.4*2)/2||5,W.height=Math.round(W.height/25.4*2)/2||5,W.chamferTop=Math.round(W.chamferTop/25.4*2)/2||3,W.chamferRight=Math.round(W.chamferRight/25.4*2)/2||3,W.baseHoleDiameter=Math.round(W.baseHoleDiameter/25.4*16)/16||.375,W.uprightHoleDiameter=Math.round(W.uprightHoleDiameter/25.4*16)/16||.375,W.lighteningHoleDiameter!==void 0&&(W.lighteningHoleDiameter=Math.round(W.lighteningHoleDiameter/25.4*4)/4||1.5),J.units="inch",J.outerDiameter=Math.round(J.outerDiameter/25.4*2)/2||6,J.innerDiameter=Math.round(J.innerDiameter/25.4*2)/2||2,J.pitchCircleDiameter!==void 0&&(J.pitchCircleDiameter=Math.round(J.pitchCircleDiameter/25.4*2)/2||4),J.boltDiameter!==void 0&&(J.boltDiameter=Math.round(J.boltDiameter/25.4*16)/16||.375),B.units="inch",B.width=Math.round(B.width/25.4*2)/2||24,B.height=Math.round(B.height/25.4*2)/2||48,B.borderMarginMm=Math.round(B.borderMarginMm/25.4*4)/4||1.5,B.kickPlateHeightMm&&(B.kickPlateHeightMm=Math.round(B.kickPlateHeightMm/25.4*2)/2||12),B.frameTubeWidthMm=Math.round((B.frameTubeWidthMm||50)/25.4*2)/2||2,B.mountingHoleDiameter=Math.round((B.mountingHoleDiameter||8)/25.4*16)/16||.3125):n==="mm"&&e==="inch"&&(v.units="mm",v.length=Math.abs(v.length*25.4-254)<10?250:Math.round(v.length*25.4),v.width=Math.abs(v.width*25.4-203.2)<10?200:Math.round(v.width*25.4),v.cornerSize=Math.abs(v.cornerSize*25.4-19.05)<3?20:Math.round(v.cornerSize*25.4),v.holeDiameter=Math.abs(v.holeDiameter*25.4-19.05)<3?18:Math.round(v.holeDiameter*25.4),v.slotLength&&(v.slotLength=Math.abs(v.slotLength*25.4-38.1)<5?35:Math.round(v.slotLength*25.4)),v.slotWidth&&(v.slotWidth=Math.abs(v.slotWidth*25.4-19.05)<3?20:Math.round(v.slotWidth*25.4)),v.edgeOffsetX=Math.abs(v.edgeOffsetX*25.4-31.75)<5?35:Math.round(v.edgeOffsetX*25.4),v.edgeOffsetY=Math.abs(v.edgeOffsetY*25.4-31.75)<5?35:Math.round(v.edgeOffsetY*25.4),v.centerCutoutDiameter&&(v.centerCutoutDiameter=Math.abs(v.centerCutoutDiameter*25.4-63.5)<5?60:Math.round(v.centerCutoutDiameter*25.4)),v.centerCutoutWidth&&(v.centerCutoutWidth=Math.round(v.centerCutoutWidth*25.4)),v.centerCutoutHeight&&(v.centerCutoutHeight=Math.round(v.centerCutoutHeight*25.4)),K.units="mm",K.baseWidth=Math.abs(K.baseWidth*25.4-152.4)<10?150:Math.round(K.baseWidth*25.4),K.height=Math.abs(K.height*25.4-152.4)<10?150:Math.round(K.height*25.4),K.snipeSize=Math.abs(K.snipeSize*25.4-25.4)<3?25:Math.round(K.snipeSize*25.4),K.mountingHoleDiameter!==void 0&&(K.mountingHoleDiameter=Math.abs(K.mountingHoleDiameter*25.4-12.7)<3?14:Math.round(K.mountingHoleDiameter*25.4)),W.units="mm",W.baseWidth=Math.abs(W.baseWidth*25.4-127)<10?120:Math.round(W.baseWidth*25.4),W.height=Math.abs(W.height*25.4-127)<10?120:Math.round(W.height*25.4),W.chamferTop=Math.abs(W.chamferTop*25.4-76.2)<10?80:Math.round(W.chamferTop*25.4),W.chamferRight=Math.abs(W.chamferRight*25.4-76.2)<10?80:Math.round(W.chamferRight*25.4),W.baseHoleDiameter=Math.abs(W.baseHoleDiameter*25.4-9.525)<2?10:Math.round(W.baseHoleDiameter*25.4),W.uprightHoleDiameter=Math.abs(W.uprightHoleDiameter*25.4-9.525)<2?10:Math.round(W.uprightHoleDiameter*25.4),W.lighteningHoleDiameter!==void 0&&(W.lighteningHoleDiameter=Math.abs(W.lighteningHoleDiameter*25.4-38.1)<5?35:Math.round(W.lighteningHoleDiameter*25.4)),J.units="mm",J.outerDiameter=Math.abs(J.outerDiameter*25.4-152.4)<10?150:Math.round(J.outerDiameter*25.4),J.innerDiameter=Math.abs(J.innerDiameter*25.4-50.8)<5?50:Math.round(J.innerDiameter*25.4),J.pitchCircleDiameter!==void 0&&(J.pitchCircleDiameter=Math.abs(J.pitchCircleDiameter*25.4-101.6)<5?100:Math.round(J.pitchCircleDiameter*25.4)),J.boltDiameter!==void 0&&(J.boltDiameter=Math.abs(J.boltDiameter*25.4-9.525)<2?10:Math.round(J.boltDiameter*25.4)),B.units="mm",B.width=Math.abs(B.width*25.4-609.6)<20?600:Math.round(B.width*25.4),B.height=Math.abs(B.height*25.4-1219.2)<30?1200:Math.round(B.height*25.4),B.borderMarginMm=Math.abs(B.borderMarginMm*25.4-38.1)<5?35:Math.round(B.borderMarginMm*25.4),B.kickPlateHeightMm&&(B.kickPlateHeightMm=Math.abs(B.kickPlateHeightMm*25.4-304.8)<15?300:Math.round(B.kickPlateHeightMm*25.4)),B.frameTubeWidthMm=Math.abs((B.frameTubeWidthMm||2)*25.4-50.8)<5?50:Math.round((B.frameTubeWidthMm||2)*25.4),B.mountingHoleDiameter=Math.abs((B.mountingHoleDiameter||.3125)*25.4-7.9375)<2?8:Math.round((B.mountingHoleDiameter||.3125)*25.4))}function Ee(){const n=document.getElementById("unitMm"),e=document.getElementById("unitInch");n&&e&&(n.classList.toggle("active",ht==="mm"),e.classList.toggle("active",ht==="inch"))}function ye(){const n=D.currency==="USD",e=document.getElementById("adminShopName"),s=document.getElementById("adminGstin"),t=document.getElementById("adminUpiId"),o=document.getElementById("adminMinOrder"),i=document.getElementById("adminSheetLoading"),a=document.getElementById("adminPricePerKg"),r=document.getElementById("adminPricePerMeterCut"),d=document.getElementById("adminPricePerPierce"),f=document.getElementById("adminGstPercent"),c=document.getElementById("adminTaxType");e&&(e.value=D.shopName),s&&(s.value=D.shopGstin||""),t&&(t.value=D.upiId||""),o&&(o.value=D.minimumOrderFee.toString()),i&&(i.value=D.sheetLoadingFee.toString()),c&&(c.value=D.isInterstateSale?"interstate":"intrastate"),n?(a&&(a.value=(Q.pricePerSqInch||.05).toString()),r&&(r.value=(Q.pricePerLinearInchCut||.1).toString())):(a&&(a.value=(Q.pricePerKg||75).toString()),r&&(r.value=(Q.pricePerMeterCut||20).toString())),d&&(d.value=Q.pricePerPierce.toString()),f&&(f.value=D.gstPercent.toString());const m=document.getElementById("activeGaugeBadge");if(m&&j&&Q)if(n){const y=j.id.includes("a36")?"A36":j.id.includes("ss304")?"SS 304":j.id.includes("6061")?"AL 6061":"Steel",u=Q.gaugeName.split("(")[0].trim();m.textContent=`${y} • ${u}`}else{const y=j.id.includes("is2062")?"IS 2062":j.id.includes("ss304")?"SS 304":j.id.includes("aluminum")?"AL 6061":j.name.split(" ")[0],u=Q.gaugeName.replace("Sheet","").replace("Plate","").trim();m.textContent=`${y} • ${u}`}}function xt(n){const e=document.getElementById("toastNotification");e&&(e.textContent=n,e.classList.remove("hidden"),setTimeout(()=>{e.classList.add("hidden")},2500))}function Lo(n,e){if(n.length===0)return{x:0,y:0};if(e<=0){const a=n[0];return a.type==="line"?a.start:{x:a.center.x+a.radius*Math.cos(a.startAngle),y:a.center.y+a.radius*Math.sin(a.startAngle)}}if(e>=1){const a=n[n.length-1];return a.type==="line"?a.end:{x:a.center.x+a.radius*Math.cos(a.endAngle),y:a.center.y+a.radius*Math.sin(a.endAngle)}}const s=n.map(a=>{if(a.type==="line")return Math.sqrt((a.end.x-a.start.x)**2+(a.end.y-a.start.y)**2);{let r=a.counterClockwise?a.endAngle-a.startAngle:a.startAngle-a.endAngle;for(;r<0;)r+=2*Math.PI;for(;r>2*Math.PI;)r-=2*Math.PI;return a.radius*r}}),t=s.reduce((a,r)=>a+r,0),o=e*t;let i=0;for(let a=0;a<n.length;a++){const r=n[a],d=s[a];if(i+d>=o||a===n.length-1){const f=d>0?(o-i)/d:0;if(r.type==="line")return{x:r.start.x+(r.end.x-r.start.x)*f,y:r.start.y+(r.end.y-r.start.y)*f};{let c=r.counterClockwise?r.endAngle-r.startAngle:r.startAngle-r.endAngle;for(;c<0;)c+=2*Math.PI;for(;c>2*Math.PI;)c-=2*Math.PI;const m=r.counterClockwise?r.startAngle+c*f:r.startAngle-c*f;return{x:r.center.x+r.radius*Math.cos(m),y:r.center.y+r.radius*Math.sin(m)}}}i+=d}return{x:0,y:0}}function Do(){var r,d,f,c,m,y;if(ge){Je();return}qt="part",(r=document.getElementById("btnViewPart"))==null||r.classList.add("active"),(d=document.getElementById("btnViewNesting"))==null||d.classList.remove("active"),at==="jali"&&wt==="realistic_gate"&&(wt="cam_toolpath",(f=document.getElementById("btnJaliViewRealistic"))==null||f.classList.remove("active"),(c=document.getElementById("btnJaliViewCam"))==null||c.classList.add("active"),(m=document.getElementById("camLegendBar"))==null||m.classList.remove("hidden"),(y=document.getElementById("archLegendBar"))==null||y.classList.add("hidden"));const n=Ht();if(jt=Bn(n),jt.length===0)return;ge=!0,Qt=0;const e=document.getElementById("simSpeedSelect");ie=parseFloat((e==null?void 0:e.value)||"2")||2;const s=document.getElementById("simHudOverlay");s&&s.classList.remove("hidden");const t=document.getElementById("btnSimulateCut");t&&(t.textContent="⏸ Pause",t.classList.add("simulating"));const o=jt.reduce((u,h)=>u+h.simulatedDurationSec,0)/ie;let i=performance.now();function a(u){if(!ge)return;const h=jt[Qt];if(!h){Ao();return}const $=(u-i)/1e3*ie,C=.5,P=$<C;let k=0;if(!P){const M=Math.max(.01,h.simulatedDurationSec-C);k=Math.min(1,($-C)/M)}let w=h.piercePoint;!P&&h.segments.length>0&&(w=Lo(h.segments,k)),st.innerHTML=wn(n,{showCutOrder:Xt,simulationState:{activeStepIndex:Qt,nozzlePos:w,isPiercing:P,progressRatio:k}}),Vt();const A=document.getElementById("simStatusText"),G=document.getElementById("simProgressBar"),b=document.getElementById("simStepText"),g=document.getElementById("simTimeText");A&&(A.innerHTML=P?`<span style="color:#ef4444; font-weight:700;">🔥 PIERCING</span> ${h.label} (${h.layerName})`:`<span style="color:#22c55e; font-weight:700;">⚡ CUTTING</span> ${h.label} (${Math.round(k*100)}%)`);const x=(Qt+(P?.2:.2+.8*k))/jt.length;if(G&&(G.style.width=`${Math.min(100,Math.round(x*100))}%`),b&&(b.textContent=`Step ${Qt+1} of ${jt.length}`),g){const M=Math.min(o,Qt/jt.length*o+$/ie);g.textContent=`${M.toFixed(1)}s / ${o.toFixed(1)}s (${ie}x)`}const S=h.simulatedDurationSec+C;($>=S||!P&&k>=1)&&(Qt++,i=performance.now()),pe=requestAnimationFrame(a)}i=performance.now(),pe=requestAnimationFrame(a)}function Je(){ge=!1,pe&&(cancelAnimationFrame(pe),pe=null);const n=document.getElementById("simHudOverlay");n&&n.classList.add("hidden");const e=document.getElementById("btnSimulateCut");e&&(e.textContent="▶ Simulate Cut Order",e.classList.remove("simulating")),E()}function Ao(){const n=document.getElementById("simStatusText"),e=document.getElementById("simProgressBar");n&&(n.innerHTML='<span style="color:#38bdf8; font-weight:700;">✅ SIMULATION COMPLETE:</span> Inner Cutouts Cut First, Outer Contour Cut Last'),e&&(e.style.width="100%"),setTimeout(()=>{Je()},2200)}function Ue(){var t,o,i;const n=((t=document.getElementById("cartProjectName"))==null?void 0:t.value.trim())||"Custom Assembly Project",e=((o=document.getElementById("cartCustomerName"))==null?void 0:o.value.trim())||"Valued Customer",s=((i=document.getElementById("cartCustomerPhone"))==null?void 0:i.value.trim())||"";return{id:`PRJ-${Date.now().toString().slice(-6)}`,projectName:n,customerName:e,customerPhone:s,items:nt,selectedSheetSize:yt,shopSettings:D,allowRotation:!0}}function Ft(){const n=document.getElementById("cartItemsList"),e=document.getElementById("cartBadge"),s=document.getElementById("nestCartCount"),t=document.getElementById("cartSummaryBox"),o=document.getElementById("shareCartWhatsAppBtn"),i=document.getElementById("printCartInvoiceBtn"),a=document.getElementById("printCartJobCardBtn");if(e&&(e.textContent=nt.length.toString(),e.style.display=nt.length>0?"inline-block":"none"),s&&(s.textContent=nt.length.toString()),!n)return;if(nt.length===0){n.innerHTML=`
      <div class="empty-cart-state">
        <span class="empty-icon">🛒</span>
        <h4>Your RFQ Cart is Empty</h4>
        <p>Configure parametric parts or upload DXFs, then click <strong>"➕ Add Part to RFQ Cart"</strong> to assemble multi-part project orders with combined nesting.</p>
      </div>
    `,t&&t.classList.add("hidden"),o&&(o.disabled=!0),i&&(i.disabled=!0),a&&(a.disabled=!0);return}t&&t.classList.remove("hidden"),o&&(o.disabled=!1),i&&(i.disabled=!1),a&&(a.disabled=!1);const r=Ie(nt,D,yt);Pe=r,n.innerHTML="",nt.forEach((g,x)=>{const S=document.createElement("div");S.className="cart-item-card";const M=D.currency==="INR"?"₹":"$",l=(g.unitQuote.finalUnitPrice*g.quantity).toFixed(2);S.innerHTML=`
      <div class="cart-item-header">
        <div class="cart-item-info">
          <span class="cart-item-num">#${x+1}</span>
          <span class="cart-item-name">${g.partGeometry.name}</span>
          <span class="cart-item-badge">${g.materialName} (${g.gaugeThicknessMm}mm)</span>
        </div>
        <button class="cart-item-del-btn" data-id="${g.id}" title="Remove part">✕</button>
      </div>
      <div class="cart-item-specs">
        <span>Dim: ${D.currency==="USD"?(g.partGeometry.boundingBox.width/(g.partGeometry.units==="inch"?1:25.4)).toFixed(1)+"×"+(g.partGeometry.boundingBox.height/(g.partGeometry.units==="inch"?1:25.4)).toFixed(1)+'"':g.partGeometry.boundingBox.width.toFixed(0)+"×"+g.partGeometry.boundingBox.height.toFixed(0)+"mm"}</span>
        <span>Cut: ${D.currency==="USD"?g.metrics.totalCutLengthInches.toFixed(1)+"in":(g.metrics.totalCutLengthMm/1e3).toFixed(2)+"m"}</span>
        <span>Pierces: ${g.metrics.pierceCount}</span>
        <span>Wt: ${D.currency==="USD"?(g.metrics.theoreticalWeightLbs*g.quantity).toFixed(2)+"lbs":(g.metrics.theoreticalWeightKg*g.quantity).toFixed(2)+"kg"}</span>
      </div>
      <div class="cart-item-controls">
        <div class="cart-qty-stepper">
          <button class="cart-qty-btn btn-cart-minus" data-id="${g.id}">-</button>
          <input type="number" class="cart-qty-input" data-id="${g.id}" value="${g.quantity}" min="1" max="9999" />
          <button class="cart-qty-btn btn-cart-plus" data-id="${g.id}">+</button>
        </div>
        <div class="cart-item-pricing">
          <span class="cart-unit-rate">(${M}${g.unitQuote.finalUnitPrice.toFixed(2)} / pc)</span>
          <span class="cart-item-total">${M}${l}</span>
        </div>
      </div>
    `,n.appendChild(S)}),n.querySelectorAll(".cart-item-del-btn").forEach(g=>{g.onclick=x=>{const S=x.currentTarget.getAttribute("data-id");nt=nt.filter(M=>M.id!==S),Ft(),kt==="cart"&&E(),xt("🗑️ Part removed from cart")}}),n.querySelectorAll(".btn-cart-minus").forEach(g=>{g.onclick=x=>{const S=x.currentTarget.getAttribute("data-id"),M=nt.find(l=>l.id===S);M&&M.quantity>1&&(M.quantity--,M.unitQuote=Rt(M.metrics,Q,M.quantity,D,M.secondaryOps),M.totalPrice=M.unitQuote.finalOrderTotal,Ft(),kt==="cart"&&E())}}),n.querySelectorAll(".btn-cart-plus").forEach(g=>{g.onclick=x=>{const S=x.currentTarget.getAttribute("data-id"),M=nt.find(l=>l.id===S);M&&(M.quantity++,M.unitQuote=Rt(M.metrics,Q,M.quantity,D,M.secondaryOps),M.totalPrice=M.unitQuote.finalOrderTotal,Ft(),kt==="cart"&&E())}}),n.querySelectorAll(".cart-qty-input").forEach(g=>{g.onchange=x=>{const S=x.target,M=S.getAttribute("data-id"),l=Math.max(1,parseInt(S.value,10)||1),p=nt.find(_=>_.id===M);p&&(p.quantity=l,p.unitQuote=Rt(p.metrics,Q,p.quantity,D,p.secondaryOps),p.totalPrice=p.unitQuote.finalOrderTotal,Ft(),kt==="cart"&&E())}});const d=D.currency==="USD",f=d?"$":"₹",c=document.getElementById("cartTotalParts"),m=document.getElementById("cartTotalCut"),y=document.getElementById("cartTotalPierces"),u=document.getElementById("cartTotalMass"),h=document.getElementById("cartNestingText"),$=document.getElementById("cartCostMaterial"),C=document.getElementById("cartCostCut"),P=document.getElementById("cartCostPierce"),k=document.getElementById("cartCostSecondary"),w=document.getElementById("cartCostDiscount"),A=document.getElementById("cartGstLabel"),G=document.getElementById("cartCostGst"),b=document.getElementById("cartTotalIncGst");if(c&&(c.textContent=`${r.totalPartsCount} pcs`),m&&(m.textContent=d?`${(r.totalCutLengthMeters*39.3701).toFixed(1)} in`:`${r.totalCutLengthMeters.toFixed(1)} m`),y&&(y.textContent=r.totalPierces.toString()),u&&(u.textContent=d?`${(r.totalNetPartMassKg*2.20462).toFixed(1)} lbs`:`${r.totalNetPartMassKg.toFixed(2)} kg`),h){const g=r.nestingResult.sheetsRequired;h.textContent=`Nesting: ${g} Sheet${g>1?"s":""} of ${yt.name} (${r.nestingResult.sheetUtilizationPercent}% util)`}$&&($.textContent=`${f}${r.totalMaterialCost.toFixed(2)}`),C&&(C.textContent=`${f}${r.totalCutCost.toFixed(2)}`),P&&(P.textContent=`${f}${r.totalPierceCost.toFixed(2)}`),k&&(k.textContent=`${f}${r.totalSecondaryCost.toFixed(2)}`),w&&(w.textContent=`-${r.volumeDiscountPercent}% (${f}${r.discountAmount.toFixed(2)})`),A&&(A.textContent=d?`Sales Tax (${D.gstPercent||0}%):`:D.isInterstateSale?"IGST (18%):":"GST (CGST 9% + SGST 9%):"),G&&(G.textContent=`${f}${r.gstAmount.toFixed(2)}`),b&&(b.textContent=`${f}${r.finalTotalWithGst.toFixed(2)}`)}function Fo(){const n=document.getElementById("btnCurrencyINR"),e=document.getElementById("btnCurrencyUSD");n&&(n.onclick=()=>je("INR")),e&&(e.onclick=()=>je("USD"));const s=document.getElementById("modeJobWork"),t=document.getElementById("modeWithMaterial"),o=document.getElementById("modeSqFtJali"),i=I=>{D.indianQuotingMode=I,[s,t,o].forEach(N=>N==null?void 0:N.classList.remove("active")),I==="job_work"&&(s==null||s.classList.add("active")),I==="with_material"&&(t==null||t.classList.add("active")),I==="sqft_jali"&&(o==null||o.classList.add("active")),E()};s&&(s.onclick=()=>i("job_work")),t&&(t.onclick=()=>i("with_material")),o&&(o.onclick=()=>i("sqft_jali"));const a=document.getElementById("btnViewPart"),r=document.getElementById("btnViewNesting");a&&r&&(a.onclick=()=>{qt="part",a.classList.add("active"),r.classList.remove("active"),he(),E()},r.onclick=()=>{qt="nesting",r.classList.add("active"),a.classList.remove("active"),he(),E()});const d=document.getElementById("btnJaliViewRealistic"),f=document.getElementById("btnJaliViewCam");d&&f&&(d.onclick=()=>{wt="realistic_gate",E()},f.onclick=()=>{wt="cam_toolpath",E()}),document.querySelectorAll(".finish-swatch").forEach(I=>{I.onclick=()=>{const N=I.getAttribute("data-finish");N&&(B.finishMaterial=N,E())}}),document.querySelectorAll(".backlight-pill").forEach(I=>{I.onclick=()=>{const N=I.getAttribute("data-backlight");N&&(B.backlightColor=N,E())}}),document.querySelectorAll(".gate-type-btn").forEach(I=>{I.onclick=()=>{const N=I.getAttribute("data-gatetype");N&&(B.gateType=N,ae(),E())}}),Se&&(Se.value=D.assistGas,Se.onchange=()=>{D.assistGas=Se.value,E()}),Jt&&(Jt.onchange=()=>{const N=(D.currency==="USD"?Te:ce).find(X=>X.id===Jt.value);N&&(yt=N),E()});const c=document.getElementById("toggleSecOpsBtn"),m=document.getElementById("secOpsContent"),y=document.getElementById("secOpsChevron");c&&m&&(c.onclick=()=>{m.classList.toggle("hidden"),y&&(y.textContent=m.classList.contains("hidden")?"▶":"▼")});const u=document.getElementById("secBendsCount"),h=document.getElementById("secTapsCount"),$=document.getElementById("secDeburringCheck"),C=document.getElementById("secSurfaceFinish");u&&(u.oninput=()=>{Pt.bendingBendsCount=parseInt(u.value,10)||0,E()}),h&&(h.oninput=()=>{Pt.tappingHolesCount=parseInt(h.value,10)||0,E()}),$&&($.onchange=()=>{Pt.deburringEnabled=$.checked,E()}),C&&(C.onchange=()=>{Pt.surfaceFinish=C.value,E()}),document.querySelectorAll(".shape-btn").forEach(I=>{I.onclick=()=>{var N;document.querySelectorAll(".shape-btn").forEach(X=>X.classList.remove("active")),I.classList.add("active"),at=I.getAttribute("data-shape"),oe=!1,at==="jali"&&(i("sqft_jali"),wt="realistic_gate",Xt=!1,(N=document.getElementById("btnToggleCamBadges"))==null||N.classList.remove("active")),ae(),he(),E()}}),fe.onchange=()=>{const I=At.find(N=>N.id===fe.value);I&&(j=I,En(),ye(),E())},se.onchange=()=>{const I=parseInt(se.value,10);Q=j.gauges[I],ye(),E()};const P=document.getElementById("partQuantity"),k=document.getElementById("qtyMinus"),w=document.getElementById("qtyPlus");P.oninput=()=>{pt=Math.max(1,parseInt(P.value,10)||1),E()},k.onclick=()=>{pt=Math.max(1,pt-1),P.value=pt.toString(),E()},w.onclick=()=>{pt++,P.value=pt.toString(),E()};const A=document.getElementById("addToCartBtn");A&&(A.onclick=()=>{const I=Ht(),N=Yt(I,Q.thicknessMm,j.densityGPerCm3),X=Rt(N,Q,pt,D,Pt),tt={id:`item_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,partGeometry:JSON.parse(JSON.stringify(I)),materialId:j.id,materialName:j.name,gaugeThicknessMm:Q.thicknessMm,quantity:pt,secondaryOps:{...Pt},metrics:N,unitQuote:X,totalPrice:X.finalOrderTotal,color:["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"][nt.length%6],createdAt:Date.now()};nt.push(tt),Ft(),xt(`➕ Added ${pt}× "${tt.partGeometry.name}" to RFQ Cart!`);const et=document.getElementById("tabCart");et&&(et.classList.add("pulse"),setTimeout(()=>et.classList.remove("pulse"),1200))});const G=document.getElementById("btnSimulateCut"),b=document.getElementById("btnStopSim"),g=document.getElementById("btnToggleCamBadges"),x=document.getElementById("simSpeedSelect");G&&(G.onclick=()=>{Do()}),b&&(b.onclick=()=>{Je()}),g&&(g.onclick=()=>{Xt=!Xt,g.classList.toggle("active",Xt),E()}),x&&(x.onchange=()=>{ie=parseFloat(x.value)||2});const S=document.getElementById("btnPrevSheet"),M=document.getElementById("btnNextSheet"),l=document.getElementById("btnNestSourceSingle"),p=document.getElementById("btnNestSourceCart"),_=document.getElementById("btnNestCartOnBed");S&&(S.onclick=()=>{ft>0&&(ft--,E())}),M&&(M.onclick=()=>{ze&&ft<ze.sheetsRequired-1&&(ft++,E())}),l&&p&&(l.onclick=()=>{kt="single",l.classList.add("active"),p.classList.remove("active"),ft=0,E()},p.onclick=()=>{if(nt.length===0){xt("⚠️ RFQ Cart is empty. Add parts first.");return}kt="cart",p.classList.add("active"),l.classList.remove("active"),ft=0,E()}),_&&(_.onclick=()=>{var I,N;if(nt.length===0){xt("⚠️ RFQ Cart is empty. Add parts first.");return}kt="cart",qt="nesting",(I=document.getElementById("btnViewNesting"))==null||I.classList.add("active"),(N=document.getElementById("btnViewPart"))==null||N.classList.remove("active"),p==null||p.classList.add("active"),l==null||l.classList.remove("active"),ft=0,E()});const H=document.getElementById("clearCartBtn");H&&(H.onclick=()=>{nt.length>0&&confirm("Clear all items from your RFQ Cart?")&&(nt=[],Ft(),kt==="cart"&&(kt="single",l==null||l.classList.add("active"),p==null||p.classList.remove("active"),E()),xt("🛒 RFQ Cart cleared"))});const O=document.getElementById("shareCartWhatsAppBtn");O&&(O.onclick=()=>{if(nt.length===0)return;const I=Ue(),N=Pe||Ie(nt,D,yt);if(D.currency==="USD"){const X=eo(I,N,I.customerName);if(navigator.clipboard.writeText(X).then(()=>{xt("✉️ Project Quotation copied to clipboard! (Ready for email)")}).catch(()=>{xt("Quotation copied.")}),I.customerPhone&&I.customerPhone.includes("@")){const tt=encodeURIComponent(`Quotation: ${I.projectName||"Laser Project RFQ"} — ${D.shopName}`),et=encodeURIComponent(X);window.open(`mailto:${I.customerPhone}?subject=${tt}&body=${et}`,"_blank")}}else{const X=Jn(I,N),tt=D.currency==="INR"?"91":"1",et=dn(X,I.customerPhone,tt);window.open(et,"_blank")}});const R=document.getElementById("printCartInvoiceBtn");R&&(R.onclick=()=>{if(nt.length===0)return;const I=Ue(),N=Pe||Ie(nt,D,yt),X=ro(I,N),tt=document.getElementById("docModal"),et=document.getElementById("docModalTitle"),ot=document.getElementById("docFrame");et.textContent=D.currency==="USD"?`Project Quotation — ${I.projectName}`:`Project Tax Invoice — ${I.projectName} (with UPI QR)`,tt.classList.remove("hidden"),ot.srcdoc=X});const T=document.getElementById("printCartJobCardBtn");T&&(T.onclick=()=>{if(nt.length===0)return;const I=Ue(),N=Pe||Ie(nt,D,yt),X=co(I,N),tt=document.getElementById("docModal"),et=document.getElementById("docModalTitle"),ot=document.getElementById("docFrame");et.textContent=`Batch Job Card — ${I.projectName}`,tt.classList.remove("hidden"),ot.srcdoc=X});const L=document.getElementById("shareWhatsAppBtn"),F=document.getElementById("customerPhoneInput");L&&(L.onclick=()=>{const I=Ht(),N=Yt(I,Q.thicknessMm,j.densityGPerCm3),X=Rt(N,Q,pt,D,Pt),tt=F?F.value.trim():"";if(D.currency==="USD"){const et=mn(I.name,N,j.name,Q,X,D.shopName,D,"Valued Customer");if(navigator.clipboard.writeText(et).then(()=>{xt("✉️ Manufacturing Quotation copied to clipboard! (Ready for email)")}).catch(()=>{xt("Quotation copied.")}),tt.includes("@")){const ot=encodeURIComponent(`Quotation: ${I.name} — ${D.shopName}`),_t=encodeURIComponent(et);window.open(`mailto:${tt}?subject=${ot}&body=${_t}`,"_blank")}}else{const et=ln(I.name,N,j.name,Q,X,D.shopName,D),ot=D.currency==="INR"?"91":"1",_t=dn(et,tt,ot);window.open(_t,"_blank")}});const U=document.getElementById("docModal"),Y=document.getElementById("docModalTitle"),z=document.getElementById("docFrame"),it=document.getElementById("closeDocModalBtn");it.onclick=()=>U.classList.add("hidden");const ct=document.getElementById("printInvoiceBtn");ct&&(ct.onclick=()=>{const I=Ht(),N=Yt(I,Q.thicknessMm,j.densityGPerCm3),X=Rt(N,Q,pt,D,Pt),tt=F?F.value:"",et=so(I,N,j.name,Q,X,D,"Walk-in Customer",tt);Y.textContent=D.currency==="USD"?"Manufacturing Quotation Preview":"Proforma Invoice Preview (with UPI QR)",U.classList.remove("hidden"),z.srcdoc=et});const dt=document.getElementById("jobCardBtn");dt&&(dt.onclick=()=>{const I=Ht(),N=Yt(I,Q.thicknessMm,j.densityGPerCm3),X=ao(I,N,j.name,Q,pt,D);Y.textContent="Laser Machine Operator Job Card",U.classList.remove("hidden"),z.srcdoc=X}),document.getElementById("downloadDxfBtn").onclick=()=>{const I=Ht(),N=re.find(_t=>_t.id===D.selectedCAMProfileId)||re[0],X=Un(I,N),tt=new Blob([X],{type:"application/dxf"}),et=URL.createObjectURL(tt),ot=document.createElement("a");ot.href=et,ot.download=`${I.name.toLowerCase().replace(/[\s\/\(\)]+/g,"_")}_${N.id}.dxf`,document.body.appendChild(ot),ot.click(),document.body.removeChild(ot),URL.revokeObjectURL(et)};const mt=document.getElementById("copyQuoteBtn"),bt=document.getElementById("toastNotification");mt&&(mt.onclick=async()=>{const I=Ht(),N=Yt(I,Q.thicknessMm,j.densityGPerCm3),X=Rt(N,Q,pt,D,Pt),tt=D.currency==="USD"?mn(I.name,N,j.name,Q,X,D.shopName,D,"Valued Customer"):ln(I.name,N,j.name,Q,X,D.shopName,D);try{await navigator.clipboard.writeText(tt),bt&&(bt.textContent=D.currency==="USD"?"📋 Email Quotation copied to clipboard!":"📋 Quotation copied to clipboard!",bt.classList.remove("hidden"),setTimeout(()=>{bt.classList.add("hidden")},2200))}catch{alert("Quotation copied to clipboard.")}});const V=document.getElementById("dropzone"),lt=document.getElementById("dxfFileInput"),vt=document.getElementById("tabParametric"),Wt=document.getElementById("tabUpload"),Ot=document.getElementById("parametricContainer"),Zt=document.getElementById("uploadContainer");vt.onclick=()=>{vt.classList.add("active"),Wt.classList.remove("active"),Ot.classList.remove("hidden"),Zt.classList.add("hidden"),oe=!1,E()},Wt.onclick=()=>{Wt.classList.add("active"),vt.classList.remove("active"),Zt.classList.remove("hidden"),Ot.classList.add("hidden"),oe=!0,Kt&&E()},V.onclick=()=>lt.click(),lt.onchange=I=>{var X;const N=(X=I.target.files)==null?void 0:X[0];N&&Ut(N)},V.ondragover=I=>{I.preventDefault(),V.classList.add("dragover")},V.ondragleave=()=>V.classList.remove("dragover"),V.ondrop=I=>{var X;I.preventDefault(),V.classList.remove("dragover");const N=(X=I.dataTransfer)==null?void 0:X.files[0];N&&Ut(N)};function Ut(I){const N=new FileReader;N.onload=X=>{var et;const tt=(et=X.target)==null?void 0:et.result;try{const ot=Mn(tt),_t=I.name.replace(/\.[^/.]+$/,"");if(ot.length>1){Kt=ot[0],Kt.name=`${_t}_Part1`,oe=!0;const De=document.getElementById("uploadFileInfo"),Ae=document.getElementById("loadedFileName");Ae.textContent=`${I.name} (${ot.length} distinct parts detected)`,De.classList.remove("hidden"),confirm(`Detected ${ot.length} distinct outer parts in "${I.name}". Would you like to add all ${ot.length} parts into your RFQ Cart?`)&&(ot.forEach((Fe,Ne)=>{Fe.name=`${_t}_Part${Ne+1}`;const nn=Yt(Fe,Q.thicknessMm,j.densityGPerCm3),on=Rt(nn,Q,1,D,Pt);nt.push({id:`item_dxf_${Date.now()}_${Ne}`,partGeometry:Fe,materialId:j.id,materialName:j.name,gaugeThicknessMm:Q.thicknessMm,quantity:1,secondaryOps:{...Pt},metrics:nn,unitQuote:on,totalPrice:on.finalOrderTotal,color:["#22c55e","#38bdf8","#f59e0b","#a855f7","#f43f5e","#10b981"][(nt.length+Ne)%6],createdAt:Date.now()})}),Ft(),xt(`✅ Added ${ot.length} parts from DXF to RFQ Cart!`))}else{Kt=ot[0]||Qn(tt),Kt.name=_t,oe=!0;const De=document.getElementById("uploadFileInfo"),Ae=document.getElementById("loadedFileName");Ae.textContent=I.name,De.classList.remove("hidden")}E()}catch(ot){console.error(ot),alert("Failed to parse DXF file. Please ensure it is an ASCII AutoCAD DXF.")}},N.readAsText(I)}const Tt=document.getElementById("tabQuote"),te=document.getElementById("tabCart"),Lt=document.getElementById("tabAdmin"),le=document.getElementById("quoteView"),de=document.getElementById("cartView"),me=document.getElementById("adminView");Tt.onclick=()=>{Tt.classList.add("active"),te.classList.remove("active"),Lt.classList.remove("active"),le.classList.remove("hidden"),de.classList.add("hidden"),me.classList.add("hidden")},te.onclick=()=>{te.classList.add("active"),Tt.classList.remove("active"),Lt.classList.remove("active"),de.classList.remove("hidden"),le.classList.add("hidden"),me.classList.add("hidden"),Ft()},Lt.onclick=()=>{Lt.classList.add("active"),Tt.classList.remove("active"),te.classList.remove("active"),me.classList.remove("hidden"),le.classList.add("hidden"),de.classList.add("hidden")};const ue=document.getElementById("adminShopName"),It=document.getElementById("adminGstin"),ee=document.getElementById("adminUpiId"),rt=document.getElementById("adminMinOrder"),$t=document.getElementById("adminSheetLoading"),Ct=document.getElementById("adminPricePerKg"),q=document.getElementById("adminPricePerMeterCut"),Z=document.getElementById("adminPricePerPierce"),gt=document.getElementById("adminGstPercent"),ut=document.getElementById("adminTaxType");ue&&(ue.oninput=()=>{D.shopName=ue.value.trim()||"My CNC Shop",xn&&(xn.textContent=D.shopName),Dt(),E()}),It&&(It.oninput=()=>{D.shopGstin=It.value.trim(),Dt()}),ee&&(ee.oninput=()=>{D.upiId=ee.value.trim(),Dt()}),rt&&(rt.oninput=()=>{D.minimumOrderFee=parseFloat(rt.value)||0,Dt(),E()}),$t&&($t.oninput=()=>{D.sheetLoadingFee=parseFloat($t.value)||0,Dt(),E()}),ut&&(ut.onchange=()=>{D.isInterstateSale=ut.value==="interstate",Dt(),E()}),Ct&&(Ct.oninput=()=>{const I=parseFloat(Ct.value)||0;D.currency==="USD"?Q.pricePerSqInch=I:Q.pricePerKg=I,Dt(),E()}),q&&(q.oninput=()=>{const I=parseFloat(q.value)||0;D.currency==="USD"?Q.pricePerLinearInchCut=I:Q.pricePerMeterCut=I,Dt(),E()}),Z&&(Z.oninput=()=>{Q.pricePerPierce=parseFloat(Z.value)||0,Dt(),E()}),gt&&(gt.oninput=()=>{D.gstPercent=parseFloat(gt.value)||0,Dt(),E()});const zt=document.getElementById("resetRatesBtn");zt&&(zt.onclick=()=>{confirm("Reset shop rates to factory benchmarks?")&&(to(D.currency),D.currency==="USD"?(D={...xe},At=JSON.parse(JSON.stringify(Ye)),j=At[0],Q=j.gauges[3]||j.gauges[0]):(D={...Le},At=JSON.parse(JSON.stringify(Sn)),j=At[0],Q=j.gauges[4]||j.gauges[0]),kn(),ye(),E())});const Mt=document.getElementById("unitMm"),Ln=document.getElementById("unitInch");Mt.onclick=()=>{ke("mm"),Ee(),ae(),E()},Ln.onclick=()=>{ke("inch"),Ee(),ae(),E()},st.addEventListener("wheel",I=>{I.preventDefault();const N=I.deltaY<0?1.15:.87,X=Math.min(6,Math.max(.4,Bt*N)),tt=st.getBoundingClientRect(),et=I.clientX-tt.left-tt.width/2,ot=I.clientY-tt.top-tt.height/2;St.x=et-(et-St.x)*(X/Bt),St.y=ot-(ot-St.y)*(X/Bt),Bt=X,Vt()},{passive:!1}),st.addEventListener("pointerdown",I=>{(I.button===0||I.button===1)&&(ve=!0,We={x:I.clientX-St.x,y:I.clientY-St.y},st.classList.add("is-dragging"),st.setPointerCapture(I.pointerId))}),st.addEventListener("pointermove",I=>{ve&&(St.x=I.clientX-We.x,St.y=I.clientY-We.y,Vt())});const Ve=I=>{if(ve){ve=!1,st.classList.remove("is-dragging");try{st.releasePointerCapture(I.pointerId)}catch{}}};st.addEventListener("pointerup",Ve),st.addEventListener("pointercancel",Ve),st.addEventListener("dblclick",()=>{he()});const qe=document.getElementById("btnZoomIn"),Ze=document.getElementById("btnZoomOut"),tn=document.getElementById("btnZoomFit");qe&&(qe.onclick=()=>{Bt=Math.min(6,Bt*1.25),Vt()}),Ze&&(Ze.onclick=()=>{Bt=Math.max(.4,Bt/1.25),Vt()}),tn&&(tn.onclick=()=>{he()});const en=document.getElementById("btnExportImage");en&&(en.onclick=()=>{No()})}function No(){const n=st.querySelector("svg");if(!n){xt("⚠️ No design found to export");return}try{const e=n.cloneNode(!0);e.style.transform="";const s=e.getAttribute("viewBox");let t=1600,o=1200;if(s){const c=s.split(/[\s,]+/).map(Number);if(c.length===4&&c[2]>0&&c[3]>0){const m=c[2]/c[3];m>=1?(t=2400,o=Math.round(2400/m)):(o=2400,t=Math.round(2400*m))}}e.setAttribute("width",t.toString()),e.setAttribute("height",o.toString());const i=new XMLSerializer().serializeToString(e),a=new Blob([i],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,d=r.createObjectURL(a),f=new Image;f.onload=()=>{const c=document.createElement("canvas");c.width=t,c.height=o;const m=c.getContext("2d");m&&(m.fillStyle="#080c14",m.fillRect(0,0,t,o),m.drawImage(f,0,0,t,o),r.revokeObjectURL(d),c.toBlob(y=>{if(!y)return;const u=document.createElement("a"),h=Ht(),$=at==="jali"&&wt==="realistic_gate"?`Gate_Render_${B.finishMaterial||"matte_black"}_${h.boundingBox.width.toFixed(0)}x${h.boundingBox.height.toFixed(0)}mm.png`:`CNC_${at}_${h.boundingBox.width.toFixed(0)}mm.png`;u.download=$,u.href=r.createObjectURL(y),u.click(),r.revokeObjectURL(u.href),xt(`📸 Exported high-res PNG (${t}×${o}px) for WhatsApp sharing!`)},"image/png"))},f.src=d}catch(e){console.error("Export PNG failed:",e),xt("⚠️ Export failed")}}function _o(){const n=document.getElementById("panelLeft"),e=document.getElementById("panelRight"),s=document.getElementById("splitterLeft"),t=document.getElementById("splitterRight"),o=document.getElementById("collapseLeftBtn"),i=document.getElementById("collapseRightBtn"),a=document.getElementById("restoreLeftBtn"),r=document.getElementById("restoreRightBtn"),d=document.getElementById("btnToggleLeftPanel"),f=document.getElementById("btnToggleRightPanel"),c=C=>{n&&(C?(n.classList.remove("collapsed"),s==null||s.classList.remove("disabled"),a==null||a.classList.add("hidden"),d==null||d.classList.add("active")):(n.classList.add("collapsed"),s==null||s.classList.add("disabled"),a==null||a.classList.remove("hidden"),d==null||d.classList.remove("active")))},m=C=>{e&&(C?(e.classList.remove("collapsed"),t==null||t.classList.remove("disabled"),r==null||r.classList.add("hidden"),f==null||f.classList.add("active")):(e.classList.add("collapsed"),t==null||t.classList.add("disabled"),r==null||r.classList.remove("hidden"),f==null||f.classList.remove("active")))},y=()=>{const C=!(n!=null&&n.classList.contains("collapsed"));c(!C)},u=()=>{const C=!(e!=null&&e.classList.contains("collapsed"));m(!C)};o&&(o.onclick=()=>c(!1)),a&&(a.onclick=()=>c(!0)),d&&(d.onclick=()=>y()),i&&(i.onclick=()=>m(!1)),r&&(r.onclick=()=>m(!0)),f&&(f.onclick=()=>u()),window.addEventListener("keydown",C=>{C.altKey&&(C.key==="1"||C.code==="Digit1")?(C.preventDefault(),y()):C.altKey&&(C.key==="2"||C.code==="Digit2")&&(C.preventDefault(),u())});let h=!1,$=!1;s&&(s.onmousedown=()=>{h=!0},s.ondblclick=()=>{n&&(n.style.width="340px")}),t&&(t.onmousedown=()=>{$=!0},t.ondblclick=()=>{e&&(e.style.width="360px")}),window.addEventListener("mousemove",C=>{if(h&&n){const P=Math.max(260,Math.min(600,C.clientX));n.style.width=`${P}px`}else if($&&e){const P=Math.max(280,Math.min(620,window.innerWidth-C.clientX));e.style.width=`${P}px`}}),window.addEventListener("mouseup",()=>{h=!1,$=!1})}Mo();
