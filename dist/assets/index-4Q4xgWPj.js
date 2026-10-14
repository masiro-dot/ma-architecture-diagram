const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GLTFLoader-CQDQJtIS.js","./three-BTLXub5J.js"])))=>i.map(i=>d[i]);
import{G as gt,L as ge,B as ye,E as ze,M as we,C as be,a as rt,b as Lt,c as Ce,D as Oe,d as Re,V as R,e as yt,T as pt,Q as Ht,S as Wt,f as q,R as ke,P as Ue,g as ut,h as je,i as _e,W as Ne,j as Ie,k as ve,A as Be,O as $e,H as Fe,l as Yt,m as Ge,n as He,I as We,o as Ye,F as Kt,p as Bt,q as mt,r as Ke,s as $t,t as Se,u as Ze,v as zt,U as xe,w as Ct,x as St,y as qe,z as Ve,J as Xe,K as Qe,N as Je,X as ti,Y as Zt,Z as ei,_ as ii}from"./three-BTLXub5J.js";import{g as si}from"./gsap-DKtf60Sy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const j={project:{name:"まちの交流センター",subtitle:"ひらく、つながる、重なり合う。"},building:{width:30,depth:20,floorHeight:4,floorCount:3,slabThickness:.26,columnSize:.32,atrium:{width:8,depth:6},origin:[0,0,0],explodedGap:5.5,modelUrl:null},camera:{position:[45,34,49],target:[0,9,0],viewHeight:48,maxPixelRatio:1.75},palette:{exchange:"#cb866c",learning:"#719f9a",community:"#a2ae79",ink:"#283d39"},circulation:{lineWidth:6,color:"#e17749",particleRadius:.32,particleColor:"#f2ac65",arrowRadius:.46,arrowLength:1.25,zoneDimming:.65,trailCount:4,trailSpacing:.012},audio:{bpm:64,volume:.24,title:"静かな余白"},floors:[{label:"1F",name:"出会いのフロア",use:"カフェ・交流ラウンジ・総合案内",zones:[{name:"交流ラウンジ",type:"exchange",x:-.3,z:0,w:.36,d:.92},{name:"カフェ",type:"exchange",x:.3,z:.31,w:.36,d:.3},{name:"多目的スペース",type:"community",x:.3,z:-.2,w:.36,d:.6},{name:"総合案内",type:"learning",x:0,z:.32,w:.25,d:.26}]},{label:"2F",name:"学びのフロア",use:"図書・閲覧・ワークショップ",zones:[{name:"図書・閲覧",type:"learning",x:-.3,z:0,w:.36,d:.92},{name:"ワークショップ",type:"learning",x:.3,z:-.2,w:.36,d:.6},{name:"ラーニングコモンズ",type:"exchange",x:.3,z:.31,w:.36,d:.3},{name:"交流ギャラリー",type:"exchange",x:0,z:.32,w:.25,d:.26}]},{label:"3F",name:"共創のフロア",use:"市民活動・会議・スタジオ",zones:[{name:"市民活動室",type:"community",x:-.3,z:0,w:.36,d:.92},{name:"会議・スタジオ",type:"community",x:.3,z:-.2,w:.36,d:.6},{name:"共創ラウンジ",type:"exchange",x:.3,z:.31,w:.36,d:.3},{name:"研究・学習室",type:"learning",x:0,z:.32,w:.25,d:.26}]}]},nt=[{id:"rise",number:"01",name:"ボリュームの生成",english:"VOLUME",start:0,preview:6.5,end:8,title:"地面から、まちの居場所へ。",description:"30m × 20mの敷地に、3層の公共空間が立ち上がる。街にひらかれた、小さな交流の拠点。"},{id:"explode",number:"02",name:"フロアの分解",english:"STRUCTURE",start:8,preview:14,end:16,title:"重なりの中に、空間を読む。",description:"各階を垂直に分解し、床・壁・柱・階段を見渡す。中央の吹き抜けが、3つのフロアをつなぐ。"},{id:"zone",number:"03",name:"用途のゾーニング",english:"PROGRAM",start:16,preview:22,end:26,title:"活動が重なる、3つの居場所。",description:"交流・学び・共創を、3つの色で可視化。用途を緩やかに重ね、人と活動が出会う構成へ。"},{id:"flow",number:"04",name:"人の動線",english:"CIRCULATION",start:26,preview:32,end:38,title:"人の流れが、空間をつなぐ。",description:"入口から各階へ。鮮やかなオレンジの動線と矢印、光の粒と短い光跡が、人の流れを描く。"},{id:"whole",number:"05",name:"全体の構成",english:"SYNTHESIS",start:38,preview:46,end:48,title:"ひとつの建築に、まちを包む。",description:"用途と動線をひとつのボリュームへ。3層を結ぶ吹き抜けが、日々の活動に連続性を生む。"}];function oi(o=j){const t=o.building;for(const i of["width","depth","floorHeight","floorCount","slabThickness","columnSize"])if(!Number.isFinite(t[i])||t[i]<=0)throw new Error(`${i}は正の数にしてください。`);if(!Number.isInteger(t.floorCount)||o.floors.length!==t.floorCount)throw new Error("floorCountとfloorsの数を合わせてください。");if(t.atrium.width<=0||t.atrium.depth<=0||t.atrium.width>=t.width*.5||t.atrium.depth>=t.depth*.6)throw new Error("吹き抜け寸法が建物寸法の範囲外です。");if(t.slabThickness>=t.floorHeight)throw new Error("床厚は階高より小さくしてください。");for(const i of["lineWidth","particleRadius","arrowRadius","arrowLength"])if(!Number.isFinite(o.circulation[i])||o.circulation[i]<=0)throw new Error(`circulation.${i}は正の数にしてください。`);if(!Number.isFinite(o.circulation.zoneDimming)||o.circulation.zoneDimming<0||o.circulation.zoneDimming>1)throw new Error("zoneDimmingは0〜1で指定してください。");return o}const ni="modulepreload",ai=function(o,t){return new URL(o,t).href},qt={},ri=function(t,i,s){let e=Promise.resolve();if(i&&i.length>0){let u=function(v){return Promise.all(v.map(x=>Promise.resolve(x).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};const n=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),_=r?.nonce||r?.getAttribute("nonce");e=u(i.map(v=>{if(v=ai(v,s),v in qt)return;qt[v]=!0;const x=v.endsWith(".css"),w=x?'[rel="stylesheet"]':"";if(s)for(let p=n.length-1;p>=0;p--){const y=n[p];if(y.href===v&&(!x||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${w}`))return;const T=document.createElement("link");if(T.rel=x?"stylesheet":ni,x||(T.as="script"),T.crossOrigin="",T.href=v,_&&T.setAttribute("nonce",_),document.head.appendChild(T),x)return new Promise((p,y)=>{T.addEventListener("load",p),T.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${v}`)))})}))}function a(n){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=n,window.dispatchEvent(r),!r.defaultPrevented)throw n}return e.then(n=>{for(const r of n||[])r.status==="rejected"&&a(r.reason);return t().catch(a)})};function li(o){const t=o.building,i=new gt;i.name="Building",i.position.fromArray(t.origin);const s=[],e=[],a=[],n=[],r=new Set,_=E=>{const l=new Lt(E);return r.add(l),l},u=_({color:"#f8f8f3",roughness:.85}),v=_({color:"#efeee6",roughness:.9}),x=_({color:"#c9cec8",roughness:.9}),w=_({color:"#deded3",roughness:1}),T=_({color:"#c0d8d4",transparent:!0,opacity:.19,roughness:.35,depthWrite:!1,side:Oe}),p=new ge({color:"#8b9991",transparent:!0,opacity:.25});r.add(p);const y=new ye(1,1,1);r.add(y);const L=new ze(y);r.add(L);function b(E,l,h,d=u,m=!1){const g=new rt(y,d);return g.scale.set(...l),g.position.set(...h),g.castShadow=!d.transparent,g.receiveShadow=!0,E.add(g),m&&g.add(new Ce(L,p)),g}function I(E,l,h,d,m=!1){const g=(t.width-t.atrium.width)/2,U=(t.depth-t.atrium.depth)/2;b(E,[g,h,t.depth],[-(t.width+t.atrium.width)/4,l,0],d,m),b(E,[g,h,t.depth],[(t.width+t.atrium.width)/4,l,0],d,m),b(E,[t.atrium.width,h,U],[0,l,-(t.depth+t.atrium.depth)/4],d,m),b(E,[t.atrium.width,h,U],[0,l,(t.depth+t.atrium.depth)/4],d,m)}for(let E=0;E<t.floorCount;E++){const l=new gt;l.name=`Floor_${E+1}`,l.userData.baseY=E*t.floorHeight,i.add(l),s.push(l),I(l,t.slabThickness/2,t.slabThickness,v,!0);const h=t.floorHeight-t.slabThickness;for(let d=-t.width/2;d<=t.width/2+.01;d+=t.width/5)for(const m of[-t.depth/2,t.depth/2])b(l,[t.columnSize,h,t.columnSize],[d,t.slabThickness+h/2,m]);for(let d=-t.depth/2+t.depth/4;d<t.depth/2;d+=t.depth/4)for(const m of[-t.width/2,t.width/2])b(l,[t.columnSize,h,t.columnSize],[m,t.slabThickness+h/2,d]);for(const d of[-t.atrium.width/2,t.atrium.width/2])for(const m of[-t.atrium.depth/2,t.atrium.depth/2])b(l,[t.columnSize,h,t.columnSize],[d,t.slabThickness+h/2,m]);b(l,[t.width,.65,.2],[0,.58,-t.depth/2],u),b(l,[.2,.65,t.depth],[-t.width/2,.58,0],u);for(const d of[-t.depth/2,t.depth/2]){const m=b(l,[t.width-.3,h-.75,.06],[0,t.slabThickness+h/2+.18,d],T);a.push(m),b(l,[t.width,.16,.18],[0,t.floorHeight-.2,d])}for(const d of[-t.width/2,t.width/2]){const m=b(l,[.06,h-.75,t.depth-.3],[d,t.slabThickness+h/2+.18,0],T);a.push(m),b(l,[.18,.16,t.depth],[d,t.floorHeight-.2,0])}for(const d of[-t.depth*.04,t.depth*.15])b(l,[t.width*.35,1.15,.14],[t.width*.3,.83,d]);b(l,[.14,1.15,t.depth*.85],[-t.width*.13,.83,0]);for(const d of[-t.atrium.depth/2,t.atrium.depth/2])b(l,[t.atrium.width,.06,.06],[0,1.25,d]);for(const d of[-t.atrium.width/2,t.atrium.width/2])b(l,[.06,.06,t.atrium.depth],[d,1.25,0]);for(const d of[-t.atrium.width/2,0,t.atrium.width/2])for(const m of[-t.atrium.depth/2,t.atrium.depth/2])b(l,[.05,1,.05],[d,.75,m]);if(E<t.floorCount-1){const m=t.depth*.3,g=t.width*.045;for(let U=0;U<12;U++)b(l,[g,.14,m/12],[t.atrium.width/2+g,t.slabThickness+(U+1)*t.floorHeight/24,-m/2+(U+.5)*m/12],x),b(l,[g,.14,m/12],[t.atrium.width/2+g*2.1,t.slabThickness+t.floorHeight/2+(U+1)*t.floorHeight/24,m/2-(U+.5)*m/12],x);b(l,[g*2.2,.16,1],[t.atrium.width/2+g*1.55,t.slabThickness+t.floorHeight/2,m/2],x)}for(const d of o.floors[E].zones){const m=new we({color:o.palette[d.type],transparent:!0,opacity:0,depthWrite:!1});r.add(m);const g=b(l,[d.w*t.width,.045,d.d*t.depth],[d.x*t.width,t.slabThickness+.025,d.z*t.depth],m);g.name=`Zone_${d.name}`,g.renderOrder=2,e.push(g)}for(let d=0;d<4;d++)if(E===1)b(l,[.5,1.5,t.depth*.25],[-t.width*.38+d*t.width*.064,1.01,-t.depth*.1],w);else{const m=new be(.72,.72,.09,20);r.add(m);const g=new rt(m,w);g.position.set(-t.width*.33+d%2*3.6,1.03,-3+Math.floor(d/2)*6),l.add(g),b(l,[.12,.68,.12],[g.position.x,.64,g.position.z],w)}b(l,[t.width*.2,.5,.65],[-t.width*.28,.52,t.depth*.38],w)}const z=new gt;z.name="Roof",i.add(z);const C=_({color:"#f4f3ec",roughness:.95,transparent:!0,opacity:1});n.push(C),I(z,t.slabThickness/2,t.slabThickness,C);for(const E of[-t.depth/2,t.depth/2])b(z,[t.width,.45,.2],[0,.4,E],C);for(const E of[-t.width/2,t.width/2])b(z,[.2,.45,t.depth],[E,.4,0],C);return{root:i,floors:s,roof:z,zones:e,envelopes:a,roofMaterials:n,dispose(){r.forEach(E=>E.dispose())}}}async function ci(o){if(!o.building.modelUrl)return li(o);const{GLTFLoader:t}=await ri(async()=>{const{GLTFLoader:p}=await import("./GLTFLoader-CQDQJtIS.js");return{GLTFLoader:p}},__vite__mapDeps([0,1]),import.meta.url),i=new URL(o.building.modelUrl,new URL("./",window.location.href)).href,e=(await new t().loadAsync(i)).scene,a=o.building,n=Array.from({length:a.floorCount},(p,y)=>e.getObjectByName(`Floor_${y+1}`)),r=e.getObjectByName("Roof");if(n.some(p=>!p||p.parent!==e)||!r||r.parent!==e)throw e.traverse(p=>{if(p.geometry?.dispose(),p.material)for(const y of[p.material].flat())y.dispose()}),new Error("GLBの直下にFloor_1、Floor_2、Floor_3、Roofを配置してください。READMEのモデル契約を確認してください。");const _=[],u=[],v=[],x=new Set,w=new Set,T=new Set;return n.forEach((p,y)=>{p.userData.baseY=y*a.floorHeight}),e.position.fromArray(a.origin),e.traverse(p=>{if(p.isMesh){w.add(p.geometry),p.castShadow=!0,p.receiveShadow=!0,p.material=Array.isArray(p.material)?p.material.map(y=>y.clone()):p.material.clone();for(const y of[p.material].flat())x.add(y),Object.values(y).forEach(L=>{L?.isTexture&&T.add(L)}),p.name.startsWith("Zone_")&&(y.transparent=!0,y.depthWrite=!1,y.opacity=0),p.name.startsWith("Glass_")&&u.push(p);p.name.startsWith("Zone_")&&_.push(p)}}),r.traverse(p=>{if(p.isMesh)for(const y of[p.material].flat())y.transparent=!0,v.push(y)}),{root:e,floors:n,roof:r,zones:_,envelopes:u,roofMaterials:v,dispose(){x.forEach(p=>p.dispose()),w.forEach(p=>p.dispose()),T.forEach(p=>p.dispose())}}}const Vt={type:"change"},Ft={type:"start"},Ee={type:"end"},Mt=new ke,Xt=new Ue,di=Math.cos(70*ut.DEG2RAD),N=new R,Y=2*Math.PI,D={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kt=1e-6;class hi extends Re{constructor(t,i=null){super(t,i),this.state=D.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yt.ROTATE,MIDDLE:yt.DOLLY,RIGHT:yt.PAN},this.touches={ONE:pt.ROTATE,TWO:pt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Ht,this._lastTargetPosition=new R,this._quat=new Ht().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wt,this._sphericalDelta=new Wt,this._scale=1,this._panOffset=new R,this._rotateStart=new q,this._rotateEnd=new q,this._rotateDelta=new q,this._panStart=new q,this._panEnd=new q,this._panDelta=new q,this._dollyStart=new q,this._dollyEnd=new q,this._dollyDelta=new q,this._dollyDirection=new R,this._mouse=new q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ui.bind(this),this._onPointerDown=pi.bind(this),this._onPointerUp=mi.bind(this),this._onContextMenu=vi.bind(this),this._onMouseWheel=yi.bind(this),this._onKeyDown=wi.bind(this),this._onTouchStart=bi.bind(this),this._onTouchMove=_i.bind(this),this._onMouseDown=fi.bind(this),this._onMouseMove=gi.bind(this),this._interceptControlDown=Si.bind(this),this._interceptControlUp=xi.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vt),this.update(),this.state=D.NONE}update(t=null){const i=this.object.position;N.copy(i).sub(this.target),N.applyQuaternion(this._quat),this._spherical.setFromVector3(N),this.autoRotate&&this.state===D.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,e=this.maxAzimuthAngle;isFinite(s)&&isFinite(e)&&(s<-Math.PI?s+=Y:s>Math.PI&&(s-=Y),e<-Math.PI?e+=Y:e>Math.PI&&(e-=Y),s<=e?this._spherical.theta=Math.max(s,Math.min(e,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+e)/2?Math.max(s,this._spherical.theta):Math.min(e,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=n!=this._spherical.radius}if(N.setFromSpherical(this._spherical),N.applyQuaternion(this._quatInverse),i.copy(this.target).add(N),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){const r=N.length();n=this._clampDistance(r*this._scale);const _=r-n;this.object.position.addScaledVector(this._dollyDirection,_),this.object.updateMatrixWorld(),a=!!_}else if(this.object.isOrthographicCamera){const r=new R(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const _=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=_!==this.object.zoom;const u=new R(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(r),this.object.updateMatrixWorld(),n=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(Mt.origin.copy(this.object.position),Mt.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mt.direction))<di?this.object.lookAt(this.target):(Xt.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mt.intersectPlane(Xt,this.target))))}else if(this.object.isOrthographicCamera){const n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>kt||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kt||this._lastTargetPosition.distanceToSquared(this.target)>kt?(this.dispatchEvent(Vt),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Y/60*this.autoRotateSpeed*t:Y/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){N.setFromMatrixColumn(i,0),N.multiplyScalar(-t),this._panOffset.add(N)}_panUp(t,i){this.screenSpacePanning===!0?N.setFromMatrixColumn(i,1):(N.setFromMatrixColumn(i,0),N.crossVectors(this.object.up,N)),N.multiplyScalar(t),this._panOffset.add(N)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const e=this.object.position;N.copy(e).sub(this.target);let a=N.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/s.clientHeight,this.object.matrix),this._panUp(2*i*a/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),e=t-s.left,a=i-s.top,n=s.width,r=s.height;this._mouse.x=e/n*2-1,this._mouse.y=-(a/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Y*this._rotateDelta.x/i.clientHeight),this._rotateUp(Y*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Y*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Y*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Y*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Y*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),e=.5*(t.pageY+i.y);this._rotateStart.set(s,e)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),e=.5*(t.pageY+i.y);this._panStart.set(s,e)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,e=t.pageY-i.y,a=Math.sqrt(s*s+e*e);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),e=.5*(t.pageX+s.x),a=.5*(t.pageY+s.y);this._rotateEnd.set(e,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Y*this._rotateDelta.x/i.clientHeight),this._rotateUp(Y*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),e=.5*(t.pageY+i.y);this._panEnd.set(s,e)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,e=t.pageY-i.y,a=Math.sqrt(s*s+e*e);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const n=(t.pageX+i.x)*.5,r=(t.pageY+i.y)*.5;this._updateZoomParameters(n,r)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new q,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function pi(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function ui(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function mi(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ee),this.state=D.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function fi(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=D.DOLLY;break;case yt.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=D.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=D.ROTATE}break;case yt.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=D.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=D.PAN}break;default:this.state=D.NONE}this.state!==D.NONE&&this.dispatchEvent(Ft)}function gi(o){switch(this.state){case D.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case D.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case D.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function yi(o){this.enabled===!1||this.enableZoom===!1||this.state!==D.NONE||(o.preventDefault(),this.dispatchEvent(Ft),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Ee))}function wi(o){this.enabled!==!1&&this._handleKeyDown(o)}function bi(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=D.TOUCH_ROTATE;break;case pt.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=D.TOUCH_PAN;break;default:this.state=D.NONE}break;case 2:switch(this.touches.TWO){case pt.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=D.TOUCH_DOLLY_PAN;break;case pt.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=D.TOUCH_DOLLY_ROTATE;break;default:this.state=D.NONE}break;default:this.state=D.NONE}this.state!==D.NONE&&this.dispatchEvent(Ft)}function _i(o){switch(this._trackPointer(o),this.state){case D.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case D.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case D.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case D.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=D.NONE}}function vi(o){this.enabled!==!1&&o.preventDefault()}function Si(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xi(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ei(o,t){const i=new je;i.background=new _e("#ffffff");const s=new Ne({antialias:!0,alpha:!1});s.setPixelRatio(Math.min(window.devicePixelRatio,t.camera.maxPixelRatio)),s.shadowMap.enabled=!0,s.shadowMap.type=Ie,s.shadowMap.autoUpdate=!1,s.shadowMap.needsUpdate=!0,s.outputColorSpace=ve,s.toneMapping=Be,s.toneMappingExposure=1.05,s.domElement.setAttribute("aria-label","公共施設の3D建築模型。ドラッグで回転、ホイールでズーム。"),o.prepend(s.domElement);const e=new R().fromArray(t.building.origin),a=new $e(-40,40,24,-24,.1,300),n=new hi(a,s.domElement);let r=!0;n.enableDamping=!0,n.dampingFactor=.08,n.minZoom=.55,n.maxZoom=2.6,n.minPolarAngle=.16,n.maxPolarAngle=Math.PI/2.08,n.enablePan=!0,n.rotateSpeed=.65,n.zoomSpeed=.8;function _(){a.position.fromArray(t.camera.position).add(e),n.target.fromArray(t.camera.target).add(e),a.zoom=1,a.lookAt(n.target),a.updateProjectionMatrix(),n.update(),r=!0}_(),i.add(new Fe("#ffffff","#cdd5cf",1.75));const u=new Yt("#ffffff",2.1);u.position.set(-18,45,22),u.castShadow=!0,u.shadow.mapSize.set(2048,2048),u.shadow.camera.left=-42,u.shadow.camera.right=42,u.shadow.camera.top=42,u.shadow.camera.bottom=-42,u.shadow.camera.near=.1,u.shadow.camera.far=120,u.shadow.normalBias=.03,u.shadow.bias=-3e-4,u.shadow.radius=4,i.add(u),u.position.add(e),u.target.position.copy(e),i.add(u.target);const v=new Yt("#e5efec",.8);v.position.set(25,18,-28),i.add(v),v.position.add(e),v.target.position.copy(e),i.add(v.target);const x=new Ge(250,250),w=new He({opacity:.11}),T=new rt(x,w);T.rotation.x=-Math.PI/2,T.position.copy(e),T.position.y-=.08,T.receiveShadow=!0,i.add(T);const p=new ye(t.building.width+8,.16,t.building.depth+8),y=new Lt({color:"#f1f2ec",roughness:1}),L=new rt(p,y);L.position.fromArray(t.building.origin),L.position.y-=.12,L.receiveShadow=!0,i.add(L);const b=new be(.08,.1,1.6,7),I=new We(1.1,1),z=new Lt({color:"#d5dfd0",roughness:1}),C=new Lt({color:"#c6cec0",roughness:1});for(const[h,d]of[[-.48,.62],[-.6,-.35],[.56,-.55]]){const m=new gt;m.position.set(h*t.building.width+t.building.origin[0],t.building.origin[1],d*t.building.depth+t.building.origin[2]);const g=new rt(b,C);g.position.y=.8;const U=new rt(I,z);U.position.y=2.2,U.scale.y=1.2,U.castShadow=!0,m.add(g,U),i.add(m)}const E=()=>{const h=o.clientWidth,d=o.clientHeight;if(!h||!d)return;const m=h/d,g=t.camera.viewHeight*(m<1.1?1.1/m:1);a.left=-g*m/2,a.right=g*m/2,a.top=g/2,a.bottom=-g/2,a.updateProjectionMatrix(),s.setSize(h,d),r=!0},l=new ResizeObserver(E);return l.observe(o),E(),s.domElement.addEventListener("webglcontextlost",h=>{h.preventDefault(),o.dispatchEvent(new CustomEvent("viewererror",{detail:"描画接続が中断されました。ページを再読み込みしてください。制作データは保存されています。"}))}),{scene:i,camera:a,renderer:s,controls:n,reset:_,project(h){const d=h.clone().project(a);return{x:(d.x+1)/2*o.clientWidth,y:(-d.y+1)/2*o.clientHeight,visible:d.z>-1&&d.z<1}},render(h=!0){const d=n.update();return h||d||r?(s.render(i,a),r=!1,!0):!1},dispose(){l.disconnect(),n.dispose(),s.dispose(),u.shadow.dispose(),[x,w,p,y,b,I,z,C].forEach(h=>h.dispose()),s.domElement.remove()}}}const Qt=new $t,Tt=new R;class Me extends Ye{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],s=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(s),this.setAttribute("position",new Kt(t,3)),this.setAttribute("uv",new Kt(i,2))}applyMatrix4(t){const i=this.attributes.instanceStart,s=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(t),s.applyMatrix4(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const s=new Bt(i,6,1);return this.setAttribute("instanceStart",new mt(s,3,0)),this.setAttribute("instanceEnd",new mt(s,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const s=new Bt(i,6,1);return this.setAttribute("instanceColorStart",new mt(s,3,0)),this.setAttribute("instanceColorEnd",new mt(s,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ke(t.geometry)),this}fromLineSegments(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;t!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Qt.setFromBufferAttribute(i),this.boundingBox.union(Qt))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Se),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(t!==void 0&&i!==void 0){const s=this.boundingSphere.center;this.boundingBox.getCenter(s);let e=0;for(let a=0,n=t.count;a<n;a++)Tt.fromBufferAttribute(t,a),e=Math.max(e,s.distanceToSquared(Tt)),Tt.fromBufferAttribute(i,a),e=Math.max(e,s.distanceToSquared(Tt));this.boundingSphere.radius=Math.sqrt(e),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Ct.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new q(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};zt.line={uniforms:xe.merge([Ct.common,Ct.fog,Ct.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Ot extends Ze{constructor(t){super({type:"LineMaterial",uniforms:xe.clone(zt.line.uniforms),vertexShader:zt.line.vertexShader,fragmentShader:zt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Ut=new St,Jt=new R,te=new R,F=new St,G=new St,et=new St,jt=new R,Nt=new Ve,H=new qe,ee=new R,Pt=new $t,At=new Se,it=new St;let st,dt;function ie(o,t,i){return it.set(0,0,-t,1).applyMatrix4(o.projectionMatrix),it.multiplyScalar(1/it.w),it.x=dt/i.width,it.y=dt/i.height,it.applyMatrix4(o.projectionMatrixInverse),it.multiplyScalar(1/it.w),Math.abs(Math.max(it.x,it.y))}function Mi(o,t){const i=o.matrixWorld,s=o.geometry,e=s.attributes.instanceStart,a=s.attributes.instanceEnd,n=Math.min(s.instanceCount,e.count);for(let r=0,_=n;r<_;r++){H.start.fromBufferAttribute(e,r),H.end.fromBufferAttribute(a,r),H.applyMatrix4(i);const u=new R,v=new R;st.distanceSqToSegment(H.start,H.end,v,u),v.distanceTo(u)<dt*.5&&t.push({point:v,pointOnLine:u,distance:st.origin.distanceTo(v),object:o,face:null,faceIndex:r,uv:null,uv1:null})}}function Ti(o,t,i){const s=t.projectionMatrix,a=o.material.resolution,n=o.matrixWorld,r=o.geometry,_=r.attributes.instanceStart,u=r.attributes.instanceEnd,v=Math.min(r.instanceCount,_.count),x=-t.near;st.at(1,et),et.w=1,et.applyMatrix4(t.matrixWorldInverse),et.applyMatrix4(s),et.multiplyScalar(1/et.w),et.x*=a.x/2,et.y*=a.y/2,et.z=0,jt.copy(et),Nt.multiplyMatrices(t.matrixWorldInverse,n);for(let w=0,T=v;w<T;w++){if(F.fromBufferAttribute(_,w),G.fromBufferAttribute(u,w),F.w=1,G.w=1,F.applyMatrix4(Nt),G.applyMatrix4(Nt),F.z>x&&G.z>x)continue;if(F.z>x){const z=F.z-G.z,C=(F.z-x)/z;F.lerp(G,C)}else if(G.z>x){const z=G.z-F.z,C=(G.z-x)/z;G.lerp(F,C)}F.applyMatrix4(s),G.applyMatrix4(s),F.multiplyScalar(1/F.w),G.multiplyScalar(1/G.w),F.x*=a.x/2,F.y*=a.y/2,G.x*=a.x/2,G.y*=a.y/2,H.start.copy(F),H.start.z=0,H.end.copy(G),H.end.z=0;const y=H.closestPointToPointParameter(jt,!0);H.at(y,ee);const L=ut.lerp(F.z,G.z,y),b=L>=-1&&L<=1,I=jt.distanceTo(ee)<dt*.5;if(b&&I){H.start.fromBufferAttribute(_,w),H.end.fromBufferAttribute(u,w),H.start.applyMatrix4(n),H.end.applyMatrix4(n);const z=new R,C=new R;st.distanceSqToSegment(H.start,H.end,C,z),i.push({point:C,pointOnLine:z,distance:st.origin.distanceTo(C),object:o,face:null,faceIndex:w,uv:null,uv1:null})}}}class Pi extends rt{constructor(t=new Me,i=new Ot({color:Math.random()*16777215})){super(t,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,i=t.attributes.instanceStart,s=t.attributes.instanceEnd,e=new Float32Array(2*i.count);for(let n=0,r=0,_=i.count;n<_;n++,r+=2)Jt.fromBufferAttribute(i,n),te.fromBufferAttribute(s,n),e[r]=r===0?0:e[r-1],e[r+1]=e[r]+Jt.distanceTo(te);const a=new Bt(e,2,1);return t.setAttribute("instanceDistanceStart",new mt(a,1,0)),t.setAttribute("instanceDistanceEnd",new mt(a,1,1)),this}raycast(t,i){const s=this.material.worldUnits,e=t.camera;e===null&&!s&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const a=t.params.Line2!==void 0&&t.params.Line2.threshold||0;st=t.ray;const n=this.matrixWorld,r=this.geometry,_=this.material;dt=_.linewidth+a,r.boundingSphere===null&&r.computeBoundingSphere(),At.copy(r.boundingSphere).applyMatrix4(n);let u;if(s)u=dt*.5;else{const x=Math.max(e.near,At.distanceToPoint(st.origin));u=ie(e,x,_.resolution)}if(At.radius+=u,st.intersectsSphere(At)===!1)return;r.boundingBox===null&&r.computeBoundingBox(),Pt.copy(r.boundingBox).applyMatrix4(n);let v;if(s)v=dt*.5;else{const x=Math.max(e.near,Pt.distanceToPoint(st.origin));v=ie(e,x,_.resolution)}Pt.expandByScalar(v),st.intersectsBox(Pt)!==!1&&(s?Mi(this,i):Ti(this,e,i))}onBeforeRender(t){const i=this.material.uniforms;i&&i.resolution&&(t.getViewport(Ut),this.material.uniforms.resolution.value.set(Ut.z,Ut.w))}}class Te extends Me{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const i=t.length-3,s=new Float32Array(2*i);for(let e=0;e<i;e+=3)s[2*e]=t[e],s[2*e+1]=t[e+1],s[2*e+2]=t[e+2],s[2*e+3]=t[e+3],s[2*e+4]=t[e+4],s[2*e+5]=t[e+5];return super.setPositions(s),this}setColors(t){const i=t.length-3,s=new Float32Array(2*i);for(let e=0;e<i;e+=3)s[2*e]=t[e],s[2*e+1]=t[e+1],s[2*e+2]=t[e+2],s[2*e+3]=t[e+3],s[2*e+4]=t[e+4],s[2*e+5]=t[e+5];return super.setColors(s),this}setFromPoints(t){const i=t.length-1,s=new Float32Array(6*i);for(let e=0;e<i;e++)s[6*e]=t[e].x,s[6*e+1]=t[e].y,s[6*e+2]=t[e].z||0,s[6*e+3]=t[e+1].x,s[6*e+4]=t[e+1].y,s[6*e+5]=t[e+1].z||0;return super.setPositions(s),this}fromLine(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}}class se extends Pi{constructor(t=new Te,i=new Ot({color:Math.random()*16777215})){super(t,i),this.isLine2=!0,this.type="Line2"}}function Ai(o,t,i){const s=i.building,e=[],a=[],n=new Set,r=i.circulation,_=new R().fromArray(s.origin),u=new gt;u.position.copy(_),o.add(u);const v={worldUnits:!1,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,alphaToCoverage:!0,toneMapped:!1},x=new Ot({...v,color:r.color,linewidth:r.lineWidth});n.add(x);const w=new Ot({...v,color:"#fffdf8",linewidth:r.lineWidth+3.5});n.add(w);const T=new we({color:r.color,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,toneMapped:!1});n.add(T);const p=64,y=new Uint8Array(p*p*4),L=new _e(r.particleColor).convertLinearToSRGB();for(let c=0;c<p;c++)for(let A=0;A<p;A++){const P=Math.hypot((A+.5)/p*2-1,(c+.5)/p*2-1),M=ut.clamp((P-.16)/.18,0,1),O=(c*p+A)*4;y[O]=Math.round(ut.lerp(1,L.r,M)*255),y[O+1]=Math.round(ut.lerp(.98,L.g,M)*255),y[O+2]=Math.round(ut.lerp(.87,L.b,M)*255),y[O+3]=P>=1?0:Math.round((P<.34?1:Math.exp(-7*(P-.34)))*255)}const b=new Xe(y,p,p);b.colorSpace=ve,b.needsUpdate=!0,n.add(b);const I=new Qe({map:b,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,toneMapped:!1});n.add(I);const z=Array.from({length:r.trailCount},()=>{const c=I.clone();return n.add(c),c}),C=new Je(r.arrowRadius,r.arrowLength,10);n.add(C);const E=c=>c.getPoints(100).flatMap(A=>A.toArray());function l(c,A){const P=A.getPoints(100),M=c.getAttribute("instanceStart").data;for(let O=0;O<P.length-1;O++)P[O].toArray(M.array,O*6),P[O+1].toArray(M.array,O*6+3);M.needsUpdate=!0,c.computeBoundingBox(),c.computeBoundingSphere()}const h=new R(0,1,0);function d(c,A){c.position.copy(A.getPoint(c.userData.progress)),c.quaternion.setFromUnitVectors(h,A.getTangent(c.userData.progress).normalize())}function m(c,A,P,M){const O=new ti(A.map(ct=>new R(...ct)),!1,"catmullrom",.25),X=new Te;X.setPositions(E(O)),n.add(X);const at=new se(X,w);at.renderOrder=8,c.add(at);const lt=new se(X,x);lt.name="CirculationPath",lt.renderOrder=9,c.add(lt);const xt=[],Gt={curve:O,line:lt,outline:at,kind:P,index:M,arrows:xt};e.push(Gt);for(let ct=0;ct<4;ct++){const tt=new Zt(I);tt.scale.setScalar(r.particleRadius*5),tt.renderOrder=11,c.add(tt);const Ae=z.map((De,Le)=>{const Et=new Zt(De);return Et.scale.setScalar(r.particleRadius*3.5*Math.pow(.8,Le)),Et.renderOrder=10,c.add(Et),Et});a.push({dot:tt,trails:Ae,route:Gt,phase:ct/4})}for(const ct of P==="floor"?[.32,.76]:[.65]){const tt=new rt(C,T);tt.userData.progress=ct,tt.renderOrder=9,d(tt,O),c.add(tt),xt.push(tt)}}t.floors.forEach((c,A)=>{const P=s.slabThickness+.35;m(c,[[0,P,s.depth*.48],[0,P,s.depth*.28],[-s.width*.24,P,s.depth*.28],[-s.width*.26,P,-s.depth*.27],[0,P,-s.depth*.31],[s.width*.28,P,-s.depth*.27],[s.width*.29,P,s.depth*.24],[s.width*.19,P,s.depth*.31]],"floor",A)});for(let c=0;c<s.floorCount-1;c++){const A=s.atrium.width/2+s.width*.08;m(u,[[A,c*s.floorHeight+.6,-s.depth*.12],[A,c*s.floorHeight+2,s.depth*.18],[A+1,(c+1)*s.floorHeight+.6,-s.depth*.12]],"vertical",c)}const g=new gt;u.add(g);const U=new ge({color:"#97a39b",transparent:!0,opacity:.45});n.add(U);function W(c){const A=new ei().setFromPoints(c.map(P=>new R(...P)));n.add(A),g.add(new ii(A,U))}const K=s.depth/2+3.7,B=s.width/2+3.7;W([[-s.width/2,.04,K],[s.width/2,.04,K]]),W([[B,.04,-s.depth/2],[B,.04,s.depth/2]]);for(const c of[-s.width/2,s.width/2])W([[c,.04,K-.45],[c,.04,K+.45]]);for(const c of[-s.depth/2,s.depth/2])W([[B-.45,.04,c],[B+.45,.04,c]]);let $=-1;return{group:u,update(c,A,P){if(u.visible=P,g.visible=c.rise>.8,x.opacity=P?c.flow*.95:0,w.opacity=P?c.flow*.88:0,T.opacity=x.opacity,I.opacity=P?c.flow:0,z.forEach((M,O)=>{M.opacity=P?c.flow*.55*(1-O/r.trailCount):0}),e.forEach(M=>{M.line.visible=P&&c.flow>.002,M.outline.visible=M.line.visible,M.arrows.forEach(O=>{O.visible=M.line.visible})}),Math.abs($-c.explode)>1e-4){for(const M of e.filter(O=>O.kind==="vertical")){const O=M.index,X=s.atrium.width/2+s.width*.08,at=O*(s.floorHeight+s.explodedGap*c.explode)+.6,lt=(O+1)*(s.floorHeight+s.explodedGap*c.explode)+.6;M.curve.points[0].set(X,at,-s.depth*.12),M.curve.points[1].set(X,(at+lt)/2,s.depth*.18),M.curve.points[2].set(X+1,lt,-s.depth*.12),M.curve.updateArcLengths(),l(M.line.geometry,M.curve),M.arrows.forEach(xt=>d(xt,M.curve))}$=c.explode}for(const M of a){M.dot.visible=P&&c.flow>.002;const O=((A-26)/7+M.phase)%1;M.dot.position.copy(M.route.curve.getPointAt((O+1)%1)),M.dot.scale.setScalar(r.particleRadius*5*(1+.12*Math.sin(A*4+M.phase*Math.PI*2))),M.trails.forEach((X,at)=>{X.visible=M.dot.visible,X.position.copy(M.route.curve.getPointAt((O-(at+1)*r.trailSpacing+2)%1))})}u.scale.y=Math.max(.001,c.rise)},dispose(){e.forEach(c=>{c.line.removeFromParent(),c.outline.removeFromParent(),c.arrows.forEach(A=>A.removeFromParent())}),a.forEach(c=>{c.dot.removeFromParent(),c.trails.forEach(A=>A.removeFromParent())}),n.forEach(c=>c.dispose()),o.remove(u)}}}function Di(o=()=>{}){const t={rise:0,explode:0,zone:0,flow:0,roof:1},i=si.timeline({paused:!0,onUpdate:o});i.to(t,{rise:1,duration:5.5,ease:"power2.inOut"},.5).to(t,{explode:1,roof:0,duration:5.5,ease:"power2.inOut"},8.5).to(t,{zone:.72,duration:4,ease:"sine.inOut"},16.5).to(t,{flow:1,duration:2.5,ease:"sine.inOut"},26).to(t,{flow:0,zone:0,duration:3,ease:"sine.inOut"},38).to(t,{explode:0,roof:1,duration:6,ease:"power2.inOut"},39).to({},{duration:3},45);const s=48;return{state:t,timeline:i,duration:s,stepAt(e){return nt.find(a=>e>=a.start&&e<a.end)??nt[nt.length-1]},seek(e){i.time(Math.max(0,Math.min(s,e)),!1)},dispose(){i.kill()}}}function Li(o,t,i,s=!0){const e=i.building;o.root.scale.y=Math.max(.001,t.rise),o.root.visible=t.rise>.002,o.floors.forEach((n,r)=>{n.position.y=n.userData.baseY+r*e.explodedGap*t.explode}),o.roof.position.y=e.floorCount*e.floorHeight+e.floorCount*e.explodedGap*t.explode,o.roof.visible=t.roof>.01,o.roofMaterials.forEach(n=>{n.opacity=t.roof});const a=t.zone*(1-i.circulation.zoneDimming*t.flow);o.zones.forEach(n=>{n.visible=s&&t.zone>.001;for(const r of[n.material].flat())r.opacity=a})}const oe={music:'<path d="M9 18V5l12-2v13M9 9l12-2"/><ellipse cx="6" cy="18" rx="3" ry="2"/><ellipse cx="18" cy="16" rx="3" ry="2"/>',play:'<path d="m9 5 11 7-11 7z"/>',pause:'<path d="M9 5v14M15 5v14"/>',reset:'<path d="M3 10a9 9 0 1 1 2 8M3 4v6h6"/>',expand:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',layers:'<path d="m12 3 10 5-10 5L2 8zM2 12l10 5 10-5M2 16l10 5 10-5"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',cube:'<path d="m12 2 9 5v10l-9 5-9-5V7zM3 7l9 5 9-5M12 12v10"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4 2c-1 .7-1.5 1-1.5 3m0 3h.01"/>',download:'<path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',north:'<path d="m12 3 6 15-6-3-6 3zM12 3v12"/>',chevron:'<path d="m9 5 7 7-7 7"/>'},Z=o=>`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${oe[o]||oe.cube}</svg>`;function zi(){const o=j.building;document.querySelector("#app").innerHTML=`
    <header class="header">
      <a class="brand" href="./" aria-label="間 MA ホーム"><span class="brand-mark">間</span><span class="brand-name">MA<span>ARCHITECTURE IN MOTION</span></span></a>
      <div class="header-center"><span class="header-rule"></span>動く建築ダイヤグラム<span class="badge">コンセプトモデル</span></div>
      <div class="header-actions"><span class="sample-dot"></span><span class="sample-label">サンプルプロジェクト</span><button id="help" class="icon-button" title="操作ガイド" aria-label="操作ガイド">${Z("help")}</button></div>
    </header>
    <div class="workspace">
      <aside class="sidebar">
        <section class="project-intro"><div class="eyebrow">PUBLIC ARCHITECTURE / 001</div><h1>${j.project.name}</h1><p>${j.project.subtitle}</p><div class="project-meta"><span>公共施設</span><span>地上${o.floorCount}階</span><span>コンセプトスタディ</span></div></section>
        <section class="sequence"><div class="section-heading"><span>空間を読み解く</span><span class="small-caps">SEQUENCE</span></div><nav aria-label="アニメーションのステップ">${nt.map(t=>`<button class="step" data-step="${t.id}"><span class="step-number">${t.number}</span><span class="step-title">${t.name}<small>${t.english}</small></span><span class="step-end">${Z("chevron")}</span></button>`).join("")}</nav></section>
        <section class="legend"><div class="section-heading"><span>用途の凡例</span><span class="small-caps">PROGRAM</span></div>
          <div class="legend-row"><i class="swatch exchange"></i><div><strong>交流</strong><span>カフェ・ラウンジ・ギャラリー</span></div></div>
          <div class="legend-row"><i class="swatch learning"></i><div><strong>学び</strong><span>図書・閲覧・ワークショップ</span></div></div>
          <div class="legend-row"><i class="swatch community"></i><div><strong>共創</strong><span>市民活動・会議・スタジオ</span></div></div>
        </section>
        <section class="floor-index"><div class="section-heading"><span>フロア構成</span><span class="small-caps">FLOORS</span></div>${[...j.floors].reverse().map((t,i)=>`<div class="floor-row"><span>${t.label}</span><div><strong>${t.name}</strong><small>${t.use}</small></div><i style="background:${j.palette[i===0?"community":i===1?"learning":"exchange"]}"></i></div>`).join("")}</section>
        <div class="sidebar-foot"><span>CONCEPT STUDY</span><span>01 / 2026</span></div>
      </aside>
      <main class="main">
        <div class="main-heading"><div><div class="eyebrow" id="scene-eyebrow">03 / PROGRAM DIAGRAM</div><h2 id="scene-title"></h2><p id="scene-description"></p></div><button id="capture" class="export-button" aria-label="画像を保存">${Z("download")}<span>画像を保存</span></button></div>
        <section id="viewer" class="viewer" aria-label="3Dダイヤグラム">
          <div class="view-label"><span class="status-dot"></span>アイソメトリック<span class="view-tag">3D VIEW</span></div>
          <div class="stats"><div><span>建築面積</span><strong>${(o.width*o.depth).toLocaleString()}<small>㎡</small></strong></div><div><span>階数 / 階高</span><strong>${o.floorCount}<small>階 / ${o.floorHeight.toFixed(1)} m</small></strong></div><div><span>建物高さ</span><strong>${(o.floorCount*o.floorHeight).toFixed(1)}<small>m</small></strong></div></div>
          <div id="flow-key" class="flow-key" style="--route-color:${j.circulation.color}" hidden><span class="flow-key-line"></span><span>人の流れ</span><span class="flow-key-dot"></span><span>移動する光の粒</span></div>
          <div id="labels" class="labels">${j.floors.map((t,i)=>`<div class="floor-label" data-floor="${i}"><span class="label-floor">${t.label}</span><div class="label-line"></div><span class="label-name">${t.name}</span></div>`).join("")}<span id="width-label" class="dimension-label">${o.width.toFixed(1)} m</span><span id="depth-label" class="dimension-label">${o.depth.toFixed(1)} m</span></div>
          <div class="compass">${Z("north")}<span>N</span></div>
          <div class="view-tools"><button class="icon-button" id="reset-camera" title="視点をリセット (R)" aria-label="視点をリセット">${Z("reset")}</button><span></span><button class="icon-button" id="toggle-diagrams" title="ダイヤグラムを非表示 (D)" aria-label="ダイヤグラム表示" aria-pressed="true">${Z("layers")}</button><span></span><button class="icon-button" id="fullscreen" title="全画面表示 (F)" aria-label="全画面表示">${Z("expand")}</button></div>
          <div class="canvas-hint"><span class="mouse-outline"></span>ドラッグで回転<span>·</span>スクロールでズーム</div>
          <div id="loading" class="loading"><span class="loading-mark">間</span><p>模型を準備しています</p></div>
        </section>
        <section class="transport" aria-label="アニメーション操作"><div class="transport-top"><div class="playback-actions"><button id="play" class="play-button" aria-label="再生">${Z("play")}<span>再生</span></button><button id="restart" class="icon-button" title="最初から再生" aria-label="最初から再生">${Z("reset")}</button><span class="timecode"><b id="current-time">00:22</b><span>/</span>00:48</span></div><div class="playback-options"><label for="speed">再生速度</label><select id="speed" aria-label="再生速度"><option value="0.5">0.5 ×</option><option value="0.75">0.75 ×</option><option value="1" selected>1.0 ×</option><option value="1.5">1.5 ×</option><option value="2">2.0 ×</option></select><button id="loop" class="loop-button" aria-pressed="false">ループ <span class="toggle-track"><i></i></span></button></div></div>
          <div class="timeline-track"><input id="seek" type="range" min="0" max="48" value="22" step="0.01" aria-label="アニメーション時刻" aria-valuetext="22秒"/><div class="timeline-markers">${nt.map(t=>`<button data-start="${t.start}" title="${t.name}の開始時刻" style="left:${t.start/48*100}%"><span>${t.number}</span></button>`).join("")}</div></div>
          <div class="timeline-captions">${nt.map(t=>`<button data-step="${t.id}" style="flex:${t.end-t.start}">${t.name.replace("の","")}</button>`).join("")}</div>
          <div class="music-controls"><button id="music" class="music-button" aria-label="BGMを再生" aria-pressed="false">${Z("music")}<span id="music-state">BGM OFF</span><span class="music-equalizer" aria-hidden="true"><i></i><i></i><i></i></span></button><span id="music-title" class="music-title">${j.audio.title} / AMBIENT PIANO</span><input id="music-volume" type="range" min="0" max="100" value="${Math.round(j.audio.volume*100)}" aria-label="BGMの音量"/><span id="music-volume-value">${Math.round(j.audio.volume*100)}%</span></div>
        </section>
        <footer class="main-footer"><span>${Z("cube")}空間の構成を、時間で描く。</span><span>THREE.JS + GSAP<span class="footer-dot">·</span>MA DIAGRAM STUDIO</span></footer>
      </main>
    </div>
    <div id="toast" role="status" class="toast"></div>
    <dialog id="help-dialog"><div class="dialog-top"><div class="eyebrow">QUICK GUIDE</div><button id="close-help" class="icon-button" aria-label="ガイドを閉じる">${Z("close")}</button></div><h2>空間を、自由に読み解く。</h2><p>左のステップで場面を選び、再生ボタンでその先を見られます。</p><dl><dt>再生 / 一時停止</dt><dd>再生ボタン、または Space</dd><dt>時刻を移動</dt><dd>シークバー / ← → で1秒ずつ</dd><dt>ステップ切り替え</dt><dd>左の項目、または 1〜5</dd><dt>3D回転 / ズーム</dt><dd>ドラッグ / ホイール・ピンチ</dd><dt>平行移動</dt><dd>右ドラッグ / 2本指ドラッグ</dd><dt>視点リセット</dt><dd>右下のリセット、または R</dd><dt>ダイヤグラム表示</dt><dd>レイヤーボタン、または D</dd><dt>全画面表示</dt><dd>全画面ボタン、または F</dd><dt>BGM</dt><dd>下部のBGMボタン / 横の音量バー</dd></dl><div class="dialog-note">BGMは操作してから再生します。アニメーションを停止中でも流せます。画像を保存すると、現在の視点の模型と注釈をPNGで出力します。サンプルは設計意図を示す概念模型です。</div></dialog>
  `}const ne=[{notes:[60,64,67,71],melody:[76,79,74,72]},{notes:[57,60,64,67],melody:[76,72,71,69]},{notes:[53,57,60,64],melody:[72,76,79,76]},{notes:[55,59,62,69],melody:[74,71,69,67]},{notes:[52,55,59,62],melody:[71,74,76,74]},{notes:[53,57,60,64],melody:[72,69,67,64]},{notes:[50,53,57,60],melody:[69,72,74,72]},{notes:[55,60,62,67],melody:[74,79,76,74]}],Ci=o=>440*2**((o-69)/12);function Oi(o=64){if(!Number.isFinite(o)||o<=0)throw new Error("BGMのbpmは正の数にしてください。");const t=60/o,i=t*8,s=[];return ne.forEach((e,a)=>{e.notes.forEach((n,r)=>s.push({at:a*i+r*.04,note:n,kind:"pad",duration:i+.6,velocity:.065,pan:(r-1.5)*.3})),s.push({at:a*i+.12,note:e.notes[0]-12,kind:"bass",duration:i-.3,velocity:.11,pan:0}),e.melody.forEach((n,r)=>s.push({at:a*i+[.5,2.5,4.75,6.5][r]*t,note:n,kind:"piano",duration:4.6,velocity:[.22,.16,.2,.14][r],pan:[-.25,.3,-.15,.2][r]}))}),{events:s.sort((e,a)=>e.at-a.at),duration:i*ne.length}}function Ri(o,t=()=>{}){const i=Oi(o.bpm),s=new Set;let e,a,n,r,_,u,v=0,x=0,w=!1,T=!1,p=o.volume,y=!1;const L=()=>t({enabled:w,playing:w&&!T&&e?.state==="running",volume:p});function b(l){if(!n)return;const h=e.currentTime;n.gain.cancelAndHoldAtTime?n.gain.cancelAndHoldAtTime(h):(n.gain.cancelScheduledValues(h),n.gain.setValueAtTime(n.gain.value,h)),n.gain.setTargetAtTime(l,h,.08)}function I(){const l=globalThis.AudioContext||globalThis.webkitAudioContext;if(!l)throw new Error("このブラウザではBGMを再生できません。");e=new l,a=e.createGain(),n=e.createGain(),n.gain.value=0;const h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=2600,h.Q.value=.35;const d=e.createGain();d.gain.value=.9;const m=e.createConvolver(),g=e.createGain();g.gain.value=.28;const U=e.createBuffer(2,Math.floor(e.sampleRate*2.6),e.sampleRate);let W=6372036;for(let B=0;B<2;B++){const $=U.getChannelData(B);for(let c=0;c<$.length;c++)W^=W<<13,W^=W>>>17,W^=W<<5,$[c]=((W>>>0)/2147483648-1)*(1-c/$.length)**3.5}m.buffer=U;const K=e.createDynamicsCompressor();K.threshold.value=-18,K.knee.value=14,K.ratio.value=2,K.release.value=.35,a.connect(h),h.connect(d),d.connect(n),h.connect(m),m.connect(g),g.connect(n),n.connect(K),K.connect(e.destination),e.onstatechange=L,u=e.currentTime+.12}function z(l,h){const d=e.createStereoPanner();d.pan.value=l.pan,d.connect(a);const m=l.kind==="piano"?[[1,.74,0],[2,.2,0],[3,.06,0]]:l.kind==="pad"?[[1,.5,-4],[1,.5,4]]:[[1,1,0]],g={oscillators:[],gains:[],pan:d,remaining:m.length};s.add(g);for(const[U,W,K]of m){const B=e.createOscillator(),$=e.createGain();B.type="sine",B.frequency.value=Ci(l.note)*U,B.detune.value=K;const c=l.velocity*W;$.gain.setValueAtTime(1e-4,h),l.kind==="piano"?($.gain.linearRampToValueAtTime(c,h+.012),$.gain.exponentialRampToValueAtTime(1e-4,h+l.duration/Math.sqrt(U))):($.gain.linearRampToValueAtTime(c,h+(l.kind==="pad"?1.2:.3)),$.gain.setValueAtTime(c*.8,h+l.duration-1.6),$.gain.linearRampToValueAtTime(1e-4,h+l.duration)),B.connect($),$.connect(d),g.oscillators.push(B),g.gains.push($),B.onended=()=>{B.disconnect(),$.disconnect(),--g.remaining===0&&(d.disconnect(),s.delete(g))},B.start(h),B.stop(h+l.duration+.02)}}function C(){if(!(!w||T||y||e.state!=="running"))for(;u+x*i.duration+i.events[v].at<e.currentTime+.45;){const l=i.events[v],h=u+x*i.duration+l.at;h>=e.currentTime-.03&&z(l,Math.max(h,e.currentTime)),++v===i.events.length&&(v=0,x++)}}function E(){clearInterval(r),C(),r=setInterval(C,150)}return{async toggle(){if(!y){if(clearTimeout(_),w){w=!1,clearInterval(r),b(0),L(),_=setTimeout(()=>{!w&&e?.state==="running"&&e.suspend().catch(()=>{})},350);return}e||I(),w=!0;try{if(await e.resume(),y||!w)return;b(T?0:p),E(),L()}catch(l){throw w=!1,L(),l}}},setVolume(l){p=Math.max(0,Math.min(1,l)),w&&!T&&b(p),L()},async setHidden(l){if(T=l,clearInterval(r),!e||!w){L();return}T?await e.suspend():(await e.resume(),!y&&w&&(b(p),E())),L()},dispose(){y=!0,w=!1,clearInterval(r),clearTimeout(_),s.forEach(l=>{l.oscillators.forEach(h=>{h.onended=null;try{h.stop()}catch{}h.disconnect()}),l.gains.forEach(h=>h.disconnect()),l.pan.disconnect()}),s.clear(),e&&(e.onstatechange=null,e.close().catch(()=>{}))}}}zi();const f=o=>document.querySelector(o),ki=new AbortController,k=(o,t,i)=>o.addEventListener(t,i,{signal:ki.signal}),bt=f("#viewer");let Q,ft,ae,S,re,le;const wt=Ri(j.audio,({enabled:o,playing:t,volume:i})=>{const s=f("#music");s.setAttribute("aria-pressed",String(o)),s.setAttribute("aria-label",o?"BGMを停止":"BGMを再生"),s.classList.toggle("playing",t&&i>0),f("#music-state").textContent=o?"BGM ON":"BGM OFF",f("#music-volume-value").textContent=`${Math.round(i*100)}%`});let J=!0,Dt=!1,ce=!1,vt=!1,de=!1,he="";const Ui=o=>`00:${Math.floor(o).toString().padStart(2,"0")}`;function ot(o){f("#toast").textContent=o,f("#toast").classList.add("show"),clearTimeout(le),le=setTimeout(()=>f("#toast").classList.remove("show"),3800)}k(f("#help"),"click",()=>f("#help-dialog").showModal());k(f("#close-help"),"click",()=>f("#help-dialog").close());k(f("#help-dialog"),"click",o=>{if(o.target===f("#help-dialog")){const t=o.target.getBoundingClientRect();(o.clientX<t.left||o.clientX>t.right||o.clientY<t.top||o.clientY>t.bottom)&&o.target.close()}});function V(){const o=S.timeline.time(),t=S.stepAt(o),i=`${Math.floor(o*10)}:${S.timeline.paused()}:${vt}`;if(i===he)return;he=i,f("#current-time").textContent=Ui(o),vt||(f("#seek").value=o),f("#seek").style.setProperty("--progress",`${o/S.duration*100}%`),f("#seek").setAttribute("aria-valuetext",`${o.toFixed(1)}秒 / ${t.name}`),f("#scene-eyebrow").textContent=`${t.number} / ${t.english} DIAGRAM`,f("#scene-title").textContent=t.title,f("#scene-description").textContent=t.description,document.querySelectorAll("[data-step]").forEach(a=>{const n=a.dataset.step===t.id;a.classList.toggle("active",n),n?a.setAttribute("aria-current","step"):a.removeAttribute("aria-current")});const s=!S.timeline.paused()&&o<S.duration,e=f("#play");e.innerHTML=`${Z(s?"pause":"play")}<span>${s?"一時停止":"再生"}</span>`,e.setAttribute("aria-label",s?"一時停止":"再生")}function _t(o,t=!0){t&&S.timeline.pause(),S.seek(o),V()}function pe(){S.timeline.paused()?(S.timeline.time()>=S.duration&&S.seek(0),S.timeline.play()):S.timeline.pause(),V()}function ue(){J=!J,f("#toggle-diagrams").setAttribute("aria-pressed",String(J)),f("#toggle-diagrams").title=J?"ダイヤグラムを非表示 (D)":"ダイヤグラムを表示 (D)",f("#labels").hidden=!J,ot(J?"ダイヤグラムを表示しました":"模型のみを表示しています")}async function me(){const o=document.documentElement;if(o.classList.contains("presentation")){o.classList.remove("presentation"),Rt();return}try{if(document.fullscreenElement)await document.exitFullscreen();else if(o.requestFullscreen){let t;await Promise.race([o.requestFullscreen(),new Promise(i=>{t=setTimeout(i,900)})]).finally(()=>clearTimeout(t)),document.fullscreenElement||(o.classList.add("presentation"),ot("ブラウザの全画面が制限されているため、集中表示に切り替えました"))}else o.classList.add("presentation"),ot("集中表示に切り替えました")}catch{o.classList.add("presentation"),ot("ブラウザの全画面が制限されているため、集中表示に切り替えました")}Rt()}function Rt(){const o=!!document.fullscreenElement||document.documentElement.classList.contains("presentation"),t=f("#fullscreen");t.setAttribute("aria-label",o?"全画面を解除":"全画面表示"),t.setAttribute("aria-pressed",String(o)),t.title=o?"全画面を解除 (Esc)":"全画面表示 (F)"}const ht=new R,fe=new R().fromArray(j.building.origin);function It(o,t){const i=Q.project(t);o.style.left=`${i.x}px`,o.style.top=`${i.y}px`,o.style.display=i.visible&&i.x>12&&i.x<bt.clientWidth-42&&i.y>80&&i.y<bt.clientHeight-45?"":"none"}function Pe(){const o=j.building,t=f("#labels");t.style.opacity=S.state.rise>.7?"1":"0",ft.root.updateMatrixWorld(!0);for(const s of document.querySelectorAll("[data-floor]")){const e=ft.floors[Number(s.dataset.floor)];ht.set(o.width/2+.7,.45,-o.depth/2).applyMatrix4(e.matrixWorld),It(s,ht)}ht.set(0,.1,o.depth/2+4.4).add(fe),It(f("#width-label"),ht),ht.set(o.width/2+4.7,.1,0).add(fe),It(f("#depth-label"),ht);const i=Q.controls.getAzimuthalAngle();f(".compass").style.transform=`rotate(${-i*180/Math.PI+22}deg)`}async function ji(){const o=!S.timeline.paused();S.timeline.pause(),V();try{await document.fonts.ready,Q.render(),Pe();const t=2560,i=1440,s=80,e=130,a=document.createElement("canvas");a.width=t,a.height=i;const n=a.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,t,i),n.fillStyle="#82917d",n.font="18px Arial",n.fillText("MA / ARCHITECTURE IN MOTION",s,60);const r=S.stepAt(S.timeline.time());n.fillStyle="#293e3b",n.font='36px "Yu Mincho",serif',n.fillText(r.title,s,e),n.font='18px "Yu Gothic",sans-serif',n.fillStyle="#8b9a86",n.fillText(`${j.project.name}  /  ${r.number} ${r.name}`,s,e+44);const _=Q.renderer.domElement,u={x:s,y:225,w:t-s*2,h:i-350},v=Math.min(u.w/_.width,u.h/_.height),x=_.width*v,w=_.height*v,T=u.x+(u.w-x)/2,p=u.y+(u.h-w)/2;if(n.drawImage(_,T,p,x,w),J&&S.state.rise>.7){const z=x/bt.clientWidth,C=w/bt.clientHeight;for(const E of document.querySelectorAll("[data-floor]")){if(E.style.display==="none")continue;const l=T+parseFloat(E.style.left)*z,h=p+parseFloat(E.style.top)*C;n.fillStyle="#607966",n.font="24px Georgia",n.fillText(E.querySelector(".label-floor").textContent,l,h+5),n.strokeStyle="#a8b5a0",n.lineWidth=1,n.beginPath(),n.moveTo(l+44,h),n.lineTo(l+96,h),n.stroke(),n.font='18px "Yu Gothic",sans-serif',n.fillStyle="#8b9b86",n.fillText(E.querySelector(".label-name").textContent,l+108,h+5)}}n.strokeStyle="#dce3d6",n.beginPath(),n.moveTo(s,i-115),n.lineTo(t-s,i-115),n.stroke();let y=s;for(const[z,C]of[["exchange","交流"],["learning","学び"],["community","共創"]])n.fillStyle=j.palette[z],n.fillRect(y,i-75,14,14),n.fillStyle="#71816c",n.font='19px "Yu Gothic",sans-serif',n.fillText(C,y+29,i-61),y+=155;n.font="17px Arial",n.fillStyle="#9aa592",n.textAlign="right",n.fillText(`${j.building.width} × ${j.building.depth} m   /   ${j.building.floorCount} FLOORS   /   CONCEPT STUDY`,t-s,i-62);const L=await new Promise((z,C)=>a.toBlob(E=>E?z(E):C(new Error("PNGを生成できませんでした")),"image/png")),b=URL.createObjectURL(L),I=document.createElement("a");I.href=b,I.download=`ma-diagram-${r.id}-2560x1440.png`,I.click(),setTimeout(()=>URL.revokeObjectURL(b),1e3),ot("2560 × 1440のPNGを保存しました")}catch(t){console.error(t),ot("画像の保存に失敗しました。モデルの読込元やブラウザの制限を確認してください。")}finally{o&&S.timeline.play(),V()}}async function Ni(){try{let o=function(){Li(ft,S.state,j,J),ae.update(S.state,S.timeline.time(),J),f("#flow-key").hidden=!J||S.state.flow<.05;const e=S.state,a=`${e.rise}:${e.explode}:${e.roof}`;a!==s&&(Q.renderer.shadowMap.needsUpdate=!0,s=a);const n=`${S.timeline.time()}:${J}`;Q.render(n!==i)&&Pe(),i=n,re=requestAnimationFrame(o)};oi(),Q=Ei(bt,j),ft=await ci(j),Q.scene.add(ft.root),ae=Ai(Q.scene,ft,j),S=Di(()=>{S&&V()}),S.timeline.eventCallback("onComplete",()=>{Dt?S.timeline.restart():(S.timeline.pause(),V())}),_t(nt[2].preview),f("#loading").remove(),k(f("#play"),"click",pe),k(f("#music"),"click",async()=>{f("#music").disabled=!0;try{await wt.toggle()}catch(e){console.error(e),ot("BGMを再生できませんでした。ブラウザの音声設定をご確認ください。")}finally{f("#music").disabled=!1}}),k(f("#music-volume"),"input",e=>wt.setVolume(Number(e.target.value)/100)),k(f("#restart"),"click",()=>{S.seek(0),S.timeline.play(),V()}),k(f("#speed"),"change",e=>S.timeline.timeScale(Number(e.target.value))),document.querySelectorAll("[data-step]").forEach(e=>k(e,"click",()=>_t(nt.find(a=>a.id===e.dataset.step).preview))),document.querySelectorAll("[data-start]").forEach(e=>k(e,"click",()=>_t(Number(e.dataset.start)))),k(f("#seek"),"pointerdown",()=>{de=!S.timeline.paused(),vt=!0,S.timeline.pause(),V()}),k(f("#seek"),"input",e=>{S.seek(Number(e.target.value)),V()});const t=()=>{vt&&(vt=!1,de&&S.timeline.play(),V())};k(window,"pointerup",t),k(window,"pointercancel",t),k(f("#reset-camera"),"click",()=>{Q.reset(),ot("初期の視点に戻しました")}),k(f("#toggle-diagrams"),"click",ue),k(f("#fullscreen"),"click",me),k(document,"fullscreenchange",()=>{document.fullscreenElement&&document.documentElement.classList.remove("presentation"),Rt()}),k(f("#capture"),"click",ji),k(f("#loop"),"click",()=>{Dt=!Dt,f("#loop").setAttribute("aria-pressed",String(Dt))}),k(document,"keydown",e=>{if(e.key==="Escape"&&(document.documentElement.classList.remove("presentation"),Rt()),e.ctrlKey||e.metaKey||e.altKey||f("#help-dialog").open||["INPUT","SELECT","TEXTAREA","BUTTON"].includes(e.target.tagName))return;const a=e.key.toLowerCase();a===" "&&(e.preventDefault(),pe()),a==="r"&&Q.reset(),a==="d"&&ue(),a==="f"&&me(),/^[1-5]$/.test(a)&&_t(nt[Number(a)-1].preview),(a==="arrowright"||a==="arrowleft")&&(e.preventDefault(),_t(S.timeline.time()+(a==="arrowright"?1:-1)))}),k(document,"visibilitychange",()=>{wt.setHidden(document.hidden).catch(()=>{ot("BGMを再開できませんでした。BGMボタンで再生し直してください。")}),document.hidden?(ce=!S.timeline.paused(),S.timeline.pause(),cancelAnimationFrame(re)):(ce&&S.timeline.play(),o()),V()}),k(bt,"viewererror",e=>{S.timeline.pause(),ot(e.detail),V()});let i="",s="";o()}catch(o){console.error(o),f("#loading").innerHTML='<span class="loading-mark">間</span><p>模型を表示できませんでした。<br>WebGL対応ブラウザとモデルの設定をご確認ください。</p><p id="load-detail"></p>',f("#load-detail").textContent=o.message,document.querySelectorAll(".transport button,.transport input,.transport select,.step,.view-tools button,#capture").forEach(t=>{t.disabled=!0})}}Ni();k(window,"pagehide",o=>{o.persisted?wt.setHidden(!0).catch(()=>{}):wt.dispose()});k(window,"pageshow",o=>{o.persisted&&wt.setHidden(document.hidden).catch(()=>{})});
