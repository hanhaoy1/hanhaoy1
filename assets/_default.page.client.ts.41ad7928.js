var _=Object.defineProperty;var s=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var c=(t,o,e)=>o in t?_(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,l=(t,o)=>{for(var e in o||(o={}))d.call(o,e)&&c(t,e,o[e]);if(s)for(var e of s(o))y.call(o,e)&&c(t,e,o[e]);return t};import{_ as a,d as f,o as m,c as v,r as w,u as b,p as h,a as k,i as E,s as g,b as $,e as P,f as R,g as I,h as x,j as u,k as M}from"./vendor.01c5a9aa.js";function T(t){switch(t){default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function j(t){switch(t){default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function q(t){switch(t){default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function D(t){switch(t){case"../../examples/personal/layouts/home.layout.vue":return a(()=>import("./home.layout.4880d3e3.js"),["assets/home.layout.4880d3e3.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.01c5a9aa.js"]);case"../../examples/project/layouts/home.layout.vue":return a(()=>import("./home.layout.d3d21b13.js"),["assets/home.layout.d3d21b13.js","assets/ProjectFooter.85a25ce9.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.01c5a9aa.js"]);case"../../examples/project/layouts/page.layout.vue":return a(()=>import("./page.layout.428aacd2.js"),["assets/page.layout.428aacd2.js","assets/ProjectFooter.85a25ce9.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.01c5a9aa.js"]);default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function A(t){switch(t){case"../../docs/layouts/book.layout.vue":return a(()=>import("./book.layout.b330dc60.js"),["assets/book.layout.b330dc60.js","assets/vendor.01c5a9aa.js"]);case"../../docs/layouts/doc.layout.vue":return a(()=>import("./doc.layout.605cb63e.js"),["assets/doc.layout.605cb63e.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.01c5a9aa.js"]);case"../../src/layouts/page.layout.vue":return a(()=>import("./page.layout.8be480bc.js"),["assets/page.layout.8be480bc.js","assets/VPageFooter.fed66119.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.01c5a9aa.js"]);default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function L(t){switch(t){default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}async function O(t,o){let e=o.split("/");switch(e=e.slice(1,e.lastIndexOf("pages")),e.length){case 0:return(await L(`../../layouts/${t}.layout.vue`)).default;case 1:return(await A(`../../${e[0]}/layouts/${t}.layout.vue`)).default;case 2:return(await D(`../../${e[0]}/${e[1]}/layouts/${t}.layout.vue`)).default;case 3:return(await q(`../../${e[0]}/${e[1]}/${e[2]}/layouts/${t}.layout.vue`)).default;case 4:return(await j(`../../${e[0]}/${e[1]}/${e[2]}/${e[3]}/layouts/${t}.layout.vue`)).default;case 5:return(await T(`../../${e[0]}/${e[1]}/${e[2]}/${e[3]}/${e[4]}/layouts/${t}.layout.vue`)).default;default:throw new Error("cannot assign layout to page with depth more than 5")}}const S=["href"],U=f({props:{href:null},setup(t){const o="/hanhaoy1/";return(e,r)=>(m(),v("a",{href:b(o)+t.href.slice(1)},[w(e.$slots,"default")],8,S))}});function V(t,o){if(!t)throw new Error(o!=null?o:"assertion error")}const p=Symbol();function C(t){h(p,k(t))}function J(){const t=E(p);return V(t!==void 0),t}async function B(t){const o=g(t),e=$(()=>l({title:"VPage"},o.pageExports.frontmatter)),r=P(e.value.layout?await O(e.value.layout,o._pageId):o.pageExports.Layout),n=R({setup(){return C(o),x(e),()=>r.value?u(r.value,{},{default:()=>u(o.Page,o.pageProps)}):u(o.Page,o.pageProps)}}),i=I();return n.use(i),n.component("a-router",U),{app:n,head:i,context:o,frontmatter:e,layout:r}}async function H(){const t=await M(),{app:o}=await B(t);o.mount("#app")}H();var K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module"});export{K as _,J as u};