const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dist-BY214aBr.js","./AnhSangChai-CORDwZZ_.js","./AnhSangChai-DWrb2cHy.css"])))=>i.map(i=>d[i]);
import{$ as e,A as t,L as n,M as r,St as i,W as a,_ as o,a as s,bt as c,d as l,ft as u,g as d,i as f,l as p,pt as m,y as h}from"./AnhSangChai-CORDwZZ_.js";var g={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},_={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},v=i(c()),y=m(),b=`modulepreload`,x=function(e,t){return new URL(e,t).href},S={},C=function(e){return e.pathname.endsWith(`.css`)},w=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},T=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=x(t,n);let r=s(t),i=C(r);return w(S,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:b,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},E=v.forwardRef(({scale:i=10,frames:o=1/0,opacity:s=1,width:c=1,height:u=1,blur:d=1,near:m=0,far:y=10,resolution:b=512,smooth:x=!0,color:S=`#000000`,depthWrite:C=!1,renderOrder:w,...T},E)=>{let D=v.useRef(null),O=l(e=>e.scene),k=l(e=>e.gl),A=v.useRef(null);c*=Array.isArray(i)?i[0]:i||1,u*=Array.isArray(i)?i[1]:i||1;let[j,M,N,P,F,I,L]=v.useMemo(()=>{let i=new e(b,b),o=new e(b,b);o.texture.generateMipmaps=i.texture.generateMipmaps=!1;let s=new n(c,u).rotateX(Math.PI/2),l=new t(s),d=new r;d.depthTest=d.depthWrite=!1,d.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new h(S)}},e.fragmentShader=e.fragmentShader.replace(`void main() {`,`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace(`vec4( vec3( 1.0 - fragCoordZ ), opacity );`,`vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );`)};let f=new a(g),p=new a(_);return p.depthTest=f.depthTest=!1,[i,s,d,l,f,p,o]},[b,c,u,i,S]),R=e=>{P.visible=!0,P.material=F,F.uniforms.tDiffuse.value=j.texture,F.uniforms.h.value=e*1/256,k.setRenderTarget(L),k.render(P,A.current),P.material=I,I.uniforms.tDiffuse.value=L.texture,I.uniforms.v.value=e*1/256,k.setRenderTarget(j),k.render(P,A.current),P.visible=!1},z=0,B,V;return p(()=>{A.current&&(o===1/0||z<o)&&(z++,B=O.background,V=O.overrideMaterial,D.current.visible=!1,O.background=null,O.overrideMaterial=N,k.setRenderTarget(j),k.render(O,A.current),R(d),x&&R(d*.4),k.setRenderTarget(null),D.current.visible=!0,O.overrideMaterial=V,O.background=B)}),v.useImperativeHandle(E,()=>D.current,[]),v.createElement(`group`,f({"rotation-x":Math.PI/2},T,{ref:D}),v.createElement(`mesh`,{renderOrder:w,geometry:M,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},v.createElement(`meshBasicMaterial`,{transparent:!0,map:j.texture,opacity:s,depthWrite:C})),v.createElement(`orthographicCamera`,{ref:A,args:[-c/2,c/2,u/2,-u/2,m,y]}))}),D=(0,v.lazy)(()=>T(()=>import(`./dist-BY214aBr.js`).then(e=>({default:e.Perf})),__vite__mapDeps([0,1,2]),import.meta.url)),O=typeof location<`u`&&location.search.includes(`perf`);function k({children:e,className:t,style:n,camera:r={position:[0,0,6],fov:35},...i}){let a=(0,v.useRef)(null),[o,c]=(0,v.useState)(!1),[l,d]=(0,v.useState)(!1),{dpr:f}=u();return(0,v.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{d(e.isIntersecting),e.isIntersecting&&c(!0)},{rootMargin:`300px 0px`});return e.observe(a.current),()=>e.disconnect()},[]),(0,y.jsx)(`div`,{ref:a,className:t,style:n,children:o&&(0,y.jsxs)(s,{dpr:f,camera:r,frameloop:l?`always`:`never`,resize:{scroll:!1,debounce:{scroll:0,resize:50}},gl:{antialias:!0,powerPreference:`high-performance`},...i,children:[(0,y.jsx)(v.Suspense,{fallback:null,children:e}),O&&(0,y.jsx)(v.Suspense,{fallback:null,children:(0,y.jsx)(D,{position:`top-left`})})]})})}var A=420,j=`
  attribute vec4 aNgau; uniform float uT; uniform float uKich;
  varying float vA;
  void main() {
    float t = uT - aNgau.w * 0.08;
    float song = step(0.0, t) * (1.0 - smoothstep(0.6, 1.4, t));
    float e = 1.0 - exp(-t * 3.2);
    vec3 huong = normalize(vec3((aNgau.x - 0.5) * 0.9, (aNgau.y - 0.5) * 0.7 + 0.08, 1.0));
    vec3 p = huong * e * (3.2 + aNgau.z * 4.0);
    p.y -= t * t * 0.6; // rơi nhẹ
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = uKich * (0.5 + aNgau.z) * (1.0 + e) / -mv.z;
    vA = song * (0.35 + aNgau.z * 0.5) * (1.0 - e * 0.6);
    gl_Position = projectionMatrix * mv;
  }`,M=`
  varying float vA;
  void main() {
    float r = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, r) * vA;
    if (a < 0.01) discard;
    gl_FragColor = vec4(mix(vec3(1.0, 0.93, 0.8), vec3(1.0), 0.5), a);
  }`,N=(0,v.forwardRef)(function(e,t){let n=(0,v.useRef)(10),r=(0,v.useMemo)(()=>{let e=new o;e.setAttribute(`position`,new d(new Float32Array(A*3),3));let t=new Float32Array(A*4);for(let e=0;e<t.length;e++)t[e]=Math.random();return e.setAttribute(`aNgau`,new d(t,4)),e},[]),i=(0,v.useMemo)(()=>new a({vertexShader:j,fragmentShader:M,transparent:!0,depthWrite:!1,uniforms:{uT:{value:10},uKich:{value:60}}}),[]);return(0,v.useImperativeHandle)(t,()=>({phun(){n.current=0}}),[]),p((e,t)=>{n.current+=t,i.uniforms.uT.value=n.current}),(0,y.jsx)(`points`,{geometry:r,material:i,frustumCulled:!1,...e})});export{k as n,E as r,N as t};