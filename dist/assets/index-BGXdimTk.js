(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mu="179",Vp=0,tf=1,Gp=2,kh=1,Wp=2,Di=3,or=0,En=1,Ui=2,nr=0,gs=1,nf=2,rf=3,sf=4,Xp=5,wr=100,Yp=101,qp=102,$p=103,Kp=104,Zp=200,jp=201,Jp=202,Qp=203,ic=204,rc=205,em=206,tm=207,nm=208,im=209,rm=210,sm=211,am=212,om=213,lm=214,sc=0,ac=1,oc=2,As=3,lc=4,cc=5,uc=6,fc=7,_u=0,cm=1,um=2,ir=0,fm=1,hm=2,dm=3,pm=4,mm=5,_m=6,gm=7,Hh=300,ws=301,Rs=302,hc=303,dc=304,el=306,pc=1e3,Cr=1001,mc=1002,hi=1003,vm=1004,Oa=1005,gi=1006,cl=1007,Pr=1008,Ei=1009,Vh=1010,Gh=1011,xa=1012,gu=1013,kr=1014,Fi=1015,La=1016,vu=1017,xu=1018,Ma=1020,Wh=35902,Xh=1021,Yh=1022,ui=1023,Sa=1026,ya=1027,qh=1028,Mu=1029,$h=1030,Su=1031,yu=1033,So=33776,yo=33777,Eo=33778,To=33779,_c=35840,gc=35841,vc=35842,xc=35843,Mc=36196,Sc=37492,yc=37496,Ec=37808,Tc=37809,bc=37810,Ac=37811,wc=37812,Rc=37813,Cc=37814,Pc=37815,Dc=37816,Lc=37817,Ic=37818,Uc=37819,Nc=37820,Fc=37821,bo=36492,Oc=36494,Bc=36495,Kh=36283,zc=36284,kc=36285,Hc=36286,xm=3200,Mm=3201,Zh=0,Sm=1,Zi="",jn="srgb",Cs="srgb-linear",Fo="linear",_t="srgb",$r=7680,af=519,ym=512,Em=513,Tm=514,jh=515,bm=516,Am=517,wm=518,Rm=519,of=35044,lf="300 es",vi=2e3,Oo=2001;class Bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ul=Math.PI/180,Vc=180/Math.PI;function Ia(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[r&255]+nn[r>>8&255]+nn[r>>16&255]+nn[r>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function Cm(r,e){return(r%e+e)%e}function fl(r,e,t){return(1-t)*r+t*e}function Gs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Sn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ua{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=1-o;const p=l*d+c*h+u*g+f*_,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const A=Math.sqrt(E),w=Math.atan2(A,p*T);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}const v=o*T;if(l=l*m+d*v,c=c*m+h*v,u=u*m+g*v,f=f*m+_*v,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-o*h,e[t+2]=c*g+u*h+o*d-l*f,e[t+3]=u*g-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),d=l(n/2),h=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hl.copy(this).projectOnVector(e),this.sub(hl)}reflect(e){return this.sub(hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hl=new V,cf=new Ua;class Ke{constructor(e,t,n,i,s,a,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],_=i[0],m=i[3],p=i[6],T=i[1],E=i[4],v=i[7],A=i[2],w=i[5],b=i[8];return s[0]=a*_+o*T+l*A,s[3]=a*m+o*E+l*w,s[6]=a*p+o*v+l*b,s[1]=c*_+u*T+f*A,s[4]=c*m+u*E+f*w,s[7]=c*p+u*v+f*b,s[2]=d*_+h*T+g*A,s[5]=d*m+h*E+g*w,s[8]=d*p+h*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,g=t*f+n*d+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(dl.makeScale(e,t)),this}rotate(e){return this.premultiply(dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dl=new Ke;function Jh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Bo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Pm(){const r=Bo("canvas");return r.style.display="block",r}const uf={};function vs(r){r in uf||(uf[r]=!0,console.warn(r))}function Dm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ff=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hf=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lm(){const r={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_t&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(i.r=xs(i.r),i.g=xs(i.g),i.b=xs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zi?Fo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return vs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return vs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Cs]:{primaries:e,whitePoint:n,transfer:Fo,toXYZ:ff,fromXYZ:hf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:ff,fromXYZ:hf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),r}const ft=Lm();function Bi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Kr;class Im{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=Bo("canvas")),Kr.width=e.width,Kr.height=e.height;const i=Kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Kr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Bi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bi(t[n]/255)*255):t[n]=Bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Um=0;class Eu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Ia(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(pl(i[a].image)):s.push(pl(i[a]))}else s=pl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function pl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Im.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nm=0;const ml=new V;class Tn extends Bs{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,n=Cr,i=Cr,s=gi,a=Pr,o=ui,l=Ei,c=Tn.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Ia(),this.name="",this.source=new Eu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ml).x}get height(){return this.source.getSize(ml).y}get depth(){return this.source.getSize(ml).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pc:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pc:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Hh;Tn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,n=0,i=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,v=(h+1)/2,A=(p+1)/2,w=(u+d)/4,b=(f+_)/4,P=(g+m)/4;return E>v&&E>A?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=w/n,s=b/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=P/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=b/s,i=P/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(d-u)/T,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fm extends Bs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Tn(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:gi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Eu(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hr extends Fm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qh extends Tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hi,this.minFilter=hi,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Om extends Tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hi,this.minFilter=hi,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Na{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,si):si.fromBufferAttribute(s,a),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),za.subVectors(this.max,Ws),Zr.subVectors(e.a,Ws),jr.subVectors(e.b,Ws),Jr.subVectors(e.c,Ws),Vi.subVectors(jr,Zr),Gi.subVectors(Jr,jr),pr.subVectors(Zr,Jr);let t=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-pr.z,pr.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,pr.z,0,-pr.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-pr.y,pr.x,0];return!_l(t,Zr,jr,Jr,za)||(t=[1,0,0,0,1,0,0,0,1],!_l(t,Zr,jr,Jr,za))?!1:(ka.crossVectors(Vi,Gi),t=[ka.x,ka.y,ka.z],_l(t,Zr,jr,Jr,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ai=[new V,new V,new V,new V,new V,new V,new V,new V],si=new V,Ba=new Na,Zr=new V,jr=new V,Jr=new V,Vi=new V,Gi=new V,pr=new V,Ws=new V,za=new V,ka=new V,mr=new V;function _l(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){mr.fromArray(r,s);const o=i.x*Math.abs(mr.x)+i.y*Math.abs(mr.y)+i.z*Math.abs(mr.z),l=e.dot(mr),c=t.dot(mr),u=n.dot(mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Bm=new Na,Xs=new V,gl=new V;class tl{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(gl)),this.expandByPoint(Xs.copy(e.center).sub(gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wi=new V,vl=new V,Ha=new V,Wi=new V,xl=new V,Va=new V,Ml=new V;class ed{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vl.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(vl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ha),o=Wi.dot(this.direction),l=-Wi.dot(Ha),c=Wi.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*l-o,d=a*o-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(vl).addScaledVector(Ha,d),h}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const n=wi.dot(this.direction),i=wi.dot(wi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,i,s){xl.subVectors(t,e),Va.subVectors(n,e),Ml.crossVectors(xl,Va);let a=this.direction.dot(Ml),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wi.subVectors(this.origin,e);const l=o*this.direction.dot(Va.crossVectors(Wi,Va));if(l<0)return null;const c=o*this.direction.dot(xl.cross(Wi));if(c<0||l+c>a)return null;const u=-o*Wi.dot(Ml);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,n,i,s,a,o,l,c,u,f,d,h,g,_,m){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,d,h,g,_,m)}set(e,t,n,i,s,a,o,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),a=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d+_*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=a*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zm,e,km)}lookAt(e,t,n){const i=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Xi.crossVectors(n,In),Xi.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Xi.crossVectors(n,In)),Xi.normalize(),Ga.crossVectors(In,Xi),i[0]=Xi.x,i[4]=Ga.x,i[8]=In.x,i[1]=Xi.y,i[5]=Ga.y,i[9]=In.y,i[2]=Xi.z,i[6]=Ga.z,i[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],E=n[7],v=n[11],A=n[15],w=i[0],b=i[4],P=i[8],x=i[12],M=i[1],C=i[5],U=i[9],z=i[13],k=i[2],q=i[6],G=i[10],Y=i[14],H=i[3],ne=i[7],L=i[11],fe=i[15];return s[0]=a*w+o*M+l*k+c*H,s[4]=a*b+o*C+l*q+c*ne,s[8]=a*P+o*U+l*G+c*L,s[12]=a*x+o*z+l*Y+c*fe,s[1]=u*w+f*M+d*k+h*H,s[5]=u*b+f*C+d*q+h*ne,s[9]=u*P+f*U+d*G+h*L,s[13]=u*x+f*z+d*Y+h*fe,s[2]=g*w+_*M+m*k+p*H,s[6]=g*b+_*C+m*q+p*ne,s[10]=g*P+_*U+m*G+p*L,s[14]=g*x+_*z+m*Y+p*fe,s[3]=T*w+E*M+v*k+A*H,s[7]=T*b+E*C+v*q+A*ne,s[11]=T*P+E*U+v*G+A*L,s[15]=T*x+E*z+v*Y+A*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-i*c*f-s*o*d+n*c*d+i*o*h-n*l*h)+_*(+t*l*h-t*c*d+s*a*d-i*a*h+i*c*u-s*l*u)+m*(+t*c*f-t*o*h-s*a*f+n*a*h+s*o*u-n*c*u)+p*(-i*o*u-t*l*f+t*o*d+i*a*f-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=f*m*c-_*d*c+_*l*h-o*m*h-f*l*p+o*d*p,E=g*d*c-u*m*c-g*l*h+a*m*h+u*l*p-a*d*p,v=u*_*c-g*f*c+g*o*h-a*_*h-u*o*p+a*f*p,A=g*f*l-u*_*l-g*o*d+a*_*d+u*o*m-a*f*m,w=t*T+n*E+i*v+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=T*b,e[1]=(_*d*s-f*m*s-_*i*h+n*m*h+f*i*p-n*d*p)*b,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*b,e[3]=(f*l*s-o*d*s-f*i*c+n*d*c+o*i*h-n*l*h)*b,e[4]=E*b,e[5]=(u*m*s-g*d*s+g*i*h-t*m*h-u*i*p+t*d*p)*b,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*b,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*h+t*l*h)*b,e[8]=v*b,e[9]=(g*f*s-u*_*s-g*n*h+t*_*h+u*n*p-t*f*p)*b,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*b,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*h-t*o*h)*b,e[12]=A*b,e[13]=(u*_*i-g*f*i+g*n*d-t*_*d-u*n*m+t*f*m)*b,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*b,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*d+t*o*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,g=s*f,_=a*u,m=a*f,p=o*f,T=l*c,E=l*u,v=l*f,A=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*A,i[1]=(h+v)*A,i[2]=(g-E)*A,i[3]=0,i[4]=(h-v)*w,i[5]=(1-(d+p))*w,i[6]=(m+T)*w,i[7]=0,i[8]=(g+E)*b,i[9]=(m-T)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Qr.set(i[0],i[1],i[2]).length();const a=Qr.set(i[4],i[5],i[6]).length(),o=Qr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ai.copy(this);const c=1/s,u=1/a,f=1/o;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=f,ai.elements[9]*=f,ai.elements[10]*=f,t.setFromRotationMatrix(ai),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=vi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===vi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Oo)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=vi,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),h=-(n+i)/(n-i);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===vi)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Oo)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qr=new V,ai=new Ut,zm=new V(0,0,0),km=new V(1,1,1),Xi=new V,Ga=new V,In=new V,df=new Ut,pf=new Ua;class Ti{constructor(e=0,t=0,n=0,i=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(df,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pf.setFromEuler(this),this.setFromQuaternion(pf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class td{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hm=0;const mf=new V,es=new Ua,Ri=new Ut,Wa=new V,Ys=new V,Vm=new V,Gm=new Ua,_f=new V(1,0,0),gf=new V(0,1,0),vf=new V(0,0,1),xf={type:"added"},Wm={type:"removed"},ts={type:"childadded",child:null},Sl={type:"childremoved",child:null};class Qt extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new V,t=new Ti,n=new Ua,i=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Ke}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new td,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(_f,e)}rotateY(e){return this.rotateOnAxis(gf,e)}rotateZ(e){return this.rotateOnAxis(vf,e)}translateOnAxis(e,t){return mf.copy(e).applyQuaternion(this.quaternion),this.position.add(mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_f,e)}translateY(e){return this.translateOnAxis(gf,e)}translateZ(e){return this.translateOnAxis(vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wa.copy(e):Wa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Ys,Wa,this.up):Ri.lookAt(Wa,Ys,this.up),this.quaternion.setFromRotationMatrix(Ri),i&&(Ri.extractRotation(i.matrixWorld),es.setFromRotationMatrix(Ri),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xf),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wm),Sl.child=e,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xf),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,Vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Qt.DEFAULT_UP=new V(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new V,Ci=new V,yl=new V,Pi=new V,ns=new V,is=new V,Mf=new V,El=new V,Tl=new V,bl=new V,Al=new Lt,wl=new Lt,Rl=new Lt;class ci{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),oi.subVectors(e,t),i.cross(oi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){oi.subVectors(i,t),Ci.subVectors(n,t),yl.subVectors(e,t);const a=oi.dot(oi),o=oi.dot(Ci),l=oi.dot(yl),c=Ci.dot(Ci),u=Ci.dot(yl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Al.setScalar(0),wl.setScalar(0),Rl.setScalar(0),Al.fromBufferAttribute(e,t),wl.fromBufferAttribute(e,n),Rl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Al,s.x),a.addScaledVector(wl,s.y),a.addScaledVector(Rl,s.z),a}static isFrontFacing(e,t,n,i){return oi.subVectors(n,t),Ci.subVectors(e,t),oi.cross(Ci).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),oi.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ns.subVectors(i,n),is.subVectors(s,n),El.subVectors(e,n);const l=ns.dot(El),c=is.dot(El);if(l<=0&&c<=0)return t.copy(n);Tl.subVectors(e,i);const u=ns.dot(Tl),f=is.dot(Tl);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ns,a);bl.subVectors(e,s);const h=ns.dot(bl),g=is.dot(bl);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(is,o);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Mf.subVectors(s,i),o=(f-u)/(f-u+(h-g)),t.copy(i).addScaledVector(Mf,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Cl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=Cm(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Cl(a,s,e+1/3),this.g=Cl(a,s,e),this.b=Cl(a,s,e-1/3)}return ft.colorSpaceToWorking(this,i),this}setStyle(e,t=jn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return ft.workingToColorSpace(rn.copy(this),e),Math.round(at(rn.r*255,0,255))*65536+Math.round(at(rn.g*255,0,255))*256+Math.round(at(rn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(rn.copy(this),t);const n=rn.r,i=rn.g,s=rn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=jn){ft.workingToColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,i=rn.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(Xa);const n=fl(Yi.h,Xa.h,t),i=fl(Yi.s,Xa.s,t),s=fl(Yi.l,Xa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new lt;lt.NAMES=nd;let Xm=0;class zs extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Ia(),this.name="",this.type="Material",this.blending=gs,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=rc,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==or&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ic&&(n.blendSrc=this.blendSrc),this.blendDst!==rc&&(n.blendDst=this.blendDst),this.blendEquation!==wr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==af&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class id extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new V,Ya=new ht;let Ym=0;class Si{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ym++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=of,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),i=Sn(i,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==of&&(e.usage=this.usage),e}}class rd extends Si{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sd extends Si{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class en extends Si{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qm=0;const Kn=new Ut,Pl=new Qt,rs=new V,Un=new Na,qs=new Na,$t=new V;class ri extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jh(e)?sd:rd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return Pl.lookAt(e),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new en(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Un.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];qs.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Un.min,qs.min),Un.expandByPoint($t),$t.addVectors(Un.max,qs.max),Un.expandByPoint($t)):(Un.expandByPoint(qs.min),Un.expandByPoint(qs.max))}Un.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared($t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)$t.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(e,c),$t.add(rs)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new V,l[P]=new V;const c=new V,u=new V,f=new V,d=new ht,h=new ht,g=new ht,_=new V,m=new V;function p(P,x,M){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,x),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,P),h.fromBufferAttribute(s,x),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const C=1/(h.x*g.y-g.x*h.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(C),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(C),o[P].add(_),o[x].add(_),o[M].add(_),l[P].add(m),l[x].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,x=T.length;P<x;++P){const M=T[P],C=M.start,U=M.count;for(let z=C,k=C+U;z<k;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const E=new V,v=new V,A=new V,w=new V;function b(P){A.fromBufferAttribute(i,P),w.copy(A);const x=o[P];E.copy(x),E.sub(A.multiplyScalar(A.dot(x))).normalize(),v.crossVectors(w,x);const C=v.dot(l[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,C)}for(let P=0,x=T.length;P<x;++P){const M=T[P],C=M.start,U=M.count;for(let z=C,k=C+U;z<k;z+=3)b(e.getX(z+0)),b(e.getX(z+1)),b(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const i=new V,s=new V,a=new V,o=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Si(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sf=new Ut,_r=new ed,qa=new tl,yf=new V,$a=new V,Ka=new V,Za=new V,Dl=new V,ja=new V,Ef=new V,Ja=new V;class fi extends Qt{constructor(e=new ri,t=new id){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Dl.fromBufferAttribute(f,e),a?ja.addScaledVector(Dl,u):ja.addScaledVector(Dl.sub(t),u))}t.add(ja)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(qa.containsPoint(_r.origin)===!1&&(_r.intersectSphere(qa,yf)===null||_r.origin.distanceToSquared(yf)>(e.far-e.near)**2))&&(Sf.copy(s).invert(),_r.copy(e.ray).applyMatrix4(Sf),!(n.boundingBox!==null&&_r.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_r)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],T=Math.max(m.start,h.start),E=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let v=T,A=E;v<A;v+=3){const w=o.getX(v),b=o.getX(v+1),P=o.getX(v+2);i=Qa(this,p,e,n,c,u,f,w,b,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const T=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);i=Qa(this,a,e,n,c,u,f,T,E,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],T=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let v=T,A=E;v<A;v+=3){const w=v,b=v+1,P=v+2;i=Qa(this,p,e,n,c,u,f,w,b,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const T=m,E=m+1,v=m+2;i=Qa(this,a,e,n,c,u,f,T,E,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function $m(r,e,t,n,i,s,a,o){let l;if(e.side===En?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===or,o),l===null)return null;Ja.copy(o),Ja.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ja);return c<t.near||c>t.far?null:{distance:c,point:Ja.clone(),object:r}}function Qa(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,$a),r.getVertexPosition(l,Ka),r.getVertexPosition(c,Za);const u=$m(r,e,t,n,$a,Ka,Za,Ef);if(u){const f=new V;ci.getBarycoord(Ef,$a,Ka,Za,f),i&&(u.uv=ci.getInterpolatedAttribute(i,o,l,c,f,new ht)),s&&(u.uv1=ci.getInterpolatedAttribute(s,o,l,c,f,new ht)),a&&(u.normal=ci.getInterpolatedAttribute(a,o,l,c,f,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new V,materialIndex:0};ci.getNormal($a,Ka,Za,d.normal),u.face=d,u.barycoord=f}return u}class ks extends ri{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(f,2));function g(_,m,p,T,E,v,A,w,b,P,x){const M=v/b,C=A/P,U=v/2,z=A/2,k=w/2,q=b+1,G=P+1;let Y=0,H=0;const ne=new V;for(let L=0;L<G;L++){const fe=L*C-z;for(let Le=0;Le<q;Le++){const st=Le*M-U;ne[_]=st*T,ne[m]=fe*E,ne[p]=k,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[p]=w>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(Le/b),f.push(1-L/P),Y+=1}}for(let L=0;L<P;L++)for(let fe=0;fe<b;fe++){const Le=d+fe+q*L,st=d+fe+q*(L+1),ze=d+(fe+1)+q*(L+1),$=d+(fe+1)+q*L;l.push(Le,st,$),l.push(st,ze,$),H+=6}o.addGroup(h,H,x),h+=H,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pn(r){const e={};for(let t=0;t<r.length;t++){const n=Ps(r[t]);for(const i in n)e[i]=n[i]}return e}function Km(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ad(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const Zm={clone:Ps,merge:pn};var jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jm,this.fragmentShader=Jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=Km(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class od extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new V,Tf=new ht,bf=new ht;class Bn extends od{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vc*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Tf,bf),t.subVectors(bf,Tf)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ul*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,as=1;class Qm extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bn(ss,as,e,t);i.layers=this.layers,this.add(i);const s=new Bn(ss,as,e,t);s.layers=this.layers,this.add(s);const a=new Bn(ss,as,e,t);a.layers=this.layers,this.add(a);const o=new Bn(ss,as,e,t);o.layers=this.layers,this.add(o);const l=new Bn(ss,as,e,t);l.layers=this.layers,this.add(l);const c=new Bn(ss,as,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ld extends Tn{constructor(e=[],t=ws,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class e_ extends Hr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ld(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ks(5,5,5),s=new lr({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:nr});s.uniforms.tEquirect.value=t;const a=new fi(i,s),o=t.minFilter;return t.minFilter===Pr&&(t.minFilter=gi),new Qm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class eo extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t_={type:"move"};class Ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new eo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Af extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Il=new V,n_=new V,i_=new Ke;class yr{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Il.subVectors(n,t).cross(n_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Il),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||i_.getNormalMatrix(e),i=this.coplanarPoint(Il).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new tl,r_=new ht(.5,.5),to=new V;class Tu{constructor(e=new yr,t=new yr,n=new yr,i=new yr,s=new yr,a=new yr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],T=s[12],E=s[13],v=s[14],A=s[15];if(i[0].setComponents(c-a,h-u,p-g,A-T).normalize(),i[1].setComponents(c+a,h+u,p+g,A+T).normalize(),i[2].setComponents(c+o,h+f,p+_,A+E).normalize(),i[3].setComponents(c-o,h-f,p-_,A-E).normalize(),n)i[4].setComponents(l,d,m,v).normalize(),i[5].setComponents(c-l,h-d,p-m,A-v).normalize();else if(i[4].setComponents(c-l,h-d,p-m,A-v).normalize(),t===vi)i[5].setComponents(c+l,h+d,p+m,A+v).normalize();else if(t===Oo)i[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const t=r_.distanceTo(e.center);return gr.radius=.7071067811865476+t,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(to.x=i.normal.x>0?e.max.x:e.min.x,to.y=i.normal.y>0?e.max.y:e.min.y,to.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cd extends zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zo=new V,ko=new V,wf=new Ut,$s=new ed,no=new tl,Ul=new V,Rf=new V;class s_ extends Qt{constructor(e=new ri,t=new cd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)zo.fromBufferAttribute(t,i-1),ko.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=zo.distanceTo(ko);e.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;wf.copy(i).invert(),$s.copy(e.ray).applyMatrix4(wf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=c){const p=u.getX(_),T=u.getX(_+1),E=io(this,e,$s,l,p,T,_);E&&t.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=io(this,e,$s,l,_,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=c){const p=io(this,e,$s,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=io(this,e,$s,l,g-1,h,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function io(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(zo.fromBufferAttribute(o,i),ko.fromBufferAttribute(o,s),t.distanceSqToSegment(zo,ko,Ul,Rf)>n)return;Ul.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ul);if(!(c<e.near||c>e.far))return{distance:c,point:Rf.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}class ud extends Tn{constructor(e,t,n=kr,i,s,a,o=hi,l=hi,c,u=Sa,f=1){if(u!==Sa&&u!==ya)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Eu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bu extends ri{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],d=[],h=[];let g=0;const _=[],m=n/2;let p=0;T(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new en(f,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(h,2));function T(){const v=new V,A=new V;let w=0;const b=(t-e)/n;for(let P=0;P<=s;P++){const x=[],M=P/s,C=M*(t-e)+e;for(let U=0;U<=i;U++){const z=U/i,k=z*l+o,q=Math.sin(k),G=Math.cos(k);A.x=C*q,A.y=-M*n+m,A.z=C*G,f.push(A.x,A.y,A.z),v.set(q,b,G).normalize(),d.push(v.x,v.y,v.z),h.push(z,1-M),x.push(g++)}_.push(x)}for(let P=0;P<i;P++)for(let x=0;x<s;x++){const M=_[x][P],C=_[x+1][P],U=_[x+1][P+1],z=_[x][P+1];(e>0||x!==0)&&(u.push(M,C,z),w+=3),(t>0||x!==s-1)&&(u.push(C,U,z),w+=3)}c.addGroup(p,w,0),p+=w}function E(v){const A=g,w=new ht,b=new V;let P=0;const x=v===!0?e:t,M=v===!0?1:-1;for(let U=1;U<=i;U++)f.push(0,m*M,0),d.push(0,M,0),h.push(.5,.5),g++;const C=g;for(let U=0;U<=i;U++){const k=U/i*l+o,q=Math.cos(k),G=Math.sin(k);b.x=x*G,b.y=m*M,b.z=x*q,f.push(b.x,b.y,b.z),d.push(0,M,0),w.x=q*.5+.5,w.y=G*.5*M+.5,h.push(w.x,w.y),g++}for(let U=0;U<i;U++){const z=A+U,k=C+U;v===!0?u.push(k,k+1,z):u.push(k+1,k,z),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Au extends bu{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Au(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nl extends ri{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,d=t/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*d-a;for(let E=0;E<c;E++){const v=E*f-s;g.push(v,-T,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const E=T+c*p,v=T+c*(p+1),A=T+1+c*(p+1),w=T+1+c*p;h.push(E,v,w),h.push(v,A,w)}this.setIndex(h),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(_,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ho extends ri{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new V,d=new V,h=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const T=[],E=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const w=A/t;f.x=-e*Math.cos(i+w*s)*Math.sin(a+E*o),f.y=e*Math.cos(a+E*o),f.z=e*Math.sin(i+w*s)*Math.sin(a+E*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(w+v,1-E),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const E=u[p][T+1],v=u[p][T],A=u[p+1][T],w=u[p+1][T+1];(p!==0||a>0)&&h.push(E,v,w),(p!==n-1||l<Math.PI)&&h.push(v,A,w)}this.setIndex(h),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(_,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wu extends ri{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new V,f=new V,d=new V;for(let h=0;h<=n;h++)for(let g=0;g<=i;g++){const _=g/i*s,m=h/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=i;g++){const _=(i+1)*h+g-1,m=(i+1)*(h-1)+g-1,p=(i+1)*(h-1)+g,T=(i+1)*h+g;a.push(_,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new en(o,3)),this.setAttribute("normal",new en(l,3)),this.setAttribute("uv",new en(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ks extends zs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zh,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class a_ extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class o_ extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fd extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Nl=new Ut,Cf=new V,Pf=new V;class l_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Ei,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tu,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cf),Pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pf),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hd extends od{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class c_ extends l_{constructor(){super(new hd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Df extends fd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new c_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lf extends fd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class u_ extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function If(r,e,t,n){const i=f_(n);switch(t){case Xh:return r*e;case qh:return r*e/i.components*i.byteLength;case Mu:return r*e/i.components*i.byteLength;case $h:return r*e*2/i.components*i.byteLength;case Su:return r*e*2/i.components*i.byteLength;case Yh:return r*e*3/i.components*i.byteLength;case ui:return r*e*4/i.components*i.byteLength;case yu:return r*e*4/i.components*i.byteLength;case So:case yo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Eo:case To:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gc:case xc:return Math.max(r,16)*Math.max(e,8)/4;case _c:case vc:return Math.max(r,8)*Math.max(e,8)/2;case Mc:case Sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case yc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case wc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case bo:case Oc:case Bc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Kh:case zc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case kc:case Hc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function f_(r){switch(r){case Ei:case Vh:return{byteLength:1,components:1};case xa:case Gh:case La:return{byteLength:2,components:1};case vu:case xu:return{byteLength:2,components:4};case kr:case gu:case Fi:return{byteLength:4,components:1};case Wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dd(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function h_(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var d_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,m_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,__=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,y_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,A_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,w_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,F_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,O_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,B_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G_="gl_FragColor = linearToOutputTexel( gl_FragColor );",W_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Z_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ug=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ng=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,e0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,n0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,a0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,f0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,x0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,S0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,D0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,W0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:d_,alphahash_pars_fragment:p_,alphamap_fragment:m_,alphamap_pars_fragment:__,alphatest_fragment:g_,alphatest_pars_fragment:v_,aomap_fragment:x_,aomap_pars_fragment:M_,batching_pars_vertex:S_,batching_vertex:y_,begin_vertex:E_,beginnormal_vertex:T_,bsdfs:b_,iridescence_fragment:A_,bumpmap_pars_fragment:w_,clipping_planes_fragment:R_,clipping_planes_pars_fragment:C_,clipping_planes_pars_vertex:P_,clipping_planes_vertex:D_,color_fragment:L_,color_pars_fragment:I_,color_pars_vertex:U_,color_vertex:N_,common:F_,cube_uv_reflection_fragment:O_,defaultnormal_vertex:B_,displacementmap_pars_vertex:z_,displacementmap_vertex:k_,emissivemap_fragment:H_,emissivemap_pars_fragment:V_,colorspace_fragment:G_,colorspace_pars_fragment:W_,envmap_fragment:X_,envmap_common_pars_fragment:Y_,envmap_pars_fragment:q_,envmap_pars_vertex:$_,envmap_physical_pars_fragment:sg,envmap_vertex:K_,fog_vertex:Z_,fog_pars_vertex:j_,fog_fragment:J_,fog_pars_fragment:Q_,gradientmap_pars_fragment:eg,lightmap_pars_fragment:tg,lights_lambert_fragment:ng,lights_lambert_pars_fragment:ig,lights_pars_begin:rg,lights_toon_fragment:ag,lights_toon_pars_fragment:og,lights_phong_fragment:lg,lights_phong_pars_fragment:cg,lights_physical_fragment:ug,lights_physical_pars_fragment:fg,lights_fragment_begin:hg,lights_fragment_maps:dg,lights_fragment_end:pg,logdepthbuf_fragment:mg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:gg,logdepthbuf_vertex:vg,map_fragment:xg,map_pars_fragment:Mg,map_particle_fragment:Sg,map_particle_pars_fragment:yg,metalnessmap_fragment:Eg,metalnessmap_pars_fragment:Tg,morphinstance_vertex:bg,morphcolor_vertex:Ag,morphnormal_vertex:wg,morphtarget_pars_vertex:Rg,morphtarget_vertex:Cg,normal_fragment_begin:Pg,normal_fragment_maps:Dg,normal_pars_fragment:Lg,normal_pars_vertex:Ig,normal_vertex:Ug,normalmap_pars_fragment:Ng,clearcoat_normal_fragment_begin:Fg,clearcoat_normal_fragment_maps:Og,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:zg,opaque_fragment:kg,packing:Hg,premultiplied_alpha_fragment:Vg,project_vertex:Gg,dithering_fragment:Wg,dithering_pars_fragment:Xg,roughnessmap_fragment:Yg,roughnessmap_pars_fragment:qg,shadowmap_pars_fragment:$g,shadowmap_pars_vertex:Kg,shadowmap_vertex:Zg,shadowmask_pars_fragment:jg,skinbase_vertex:Jg,skinning_pars_vertex:Qg,skinning_vertex:e0,skinnormal_vertex:t0,specularmap_fragment:n0,specularmap_pars_fragment:i0,tonemapping_fragment:r0,tonemapping_pars_fragment:s0,transmission_fragment:a0,transmission_pars_fragment:o0,uv_pars_fragment:l0,uv_pars_vertex:c0,uv_vertex:u0,worldpos_vertex:f0,background_vert:h0,background_frag:d0,backgroundCube_vert:p0,backgroundCube_frag:m0,cube_vert:_0,cube_frag:g0,depth_vert:v0,depth_frag:x0,distanceRGBA_vert:M0,distanceRGBA_frag:S0,equirect_vert:y0,equirect_frag:E0,linedashed_vert:T0,linedashed_frag:b0,meshbasic_vert:A0,meshbasic_frag:w0,meshlambert_vert:R0,meshlambert_frag:C0,meshmatcap_vert:P0,meshmatcap_frag:D0,meshnormal_vert:L0,meshnormal_frag:I0,meshphong_vert:U0,meshphong_frag:N0,meshphysical_vert:F0,meshphysical_frag:O0,meshtoon_vert:B0,meshtoon_frag:z0,points_vert:k0,points_frag:H0,shadow_vert:V0,shadow_frag:G0,sprite_vert:W0,sprite_frag:X0},me={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},mi={basic:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new lt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:pn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:pn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new lt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:pn([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:pn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:pn([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:pn([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:pn([me.common,me.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:pn([me.lights,me.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};mi.physical={uniforms:pn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ro={r:0,b:0,g:0},vr=new Ti,Y0=new Ut;function q0(r,e,t,n,i,s,a){const o=new lt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function _(E){let v=!1;const A=g(E);A===null?p(o,l):A&&A.isColor&&(p(A,1),v=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(E,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===el)?(u===void 0&&(u=new fi(new ks(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Ps(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),vr.copy(v.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Y0.makeRotationFromEuler(vr)),u.material.toneMapped=ft.getTransfer(A.colorSpace)!==_t,(f!==A||d!==A.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,f=A,d=A.version,h=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new fi(new nl(2,2),new lr({name:"BackgroundMaterial",uniforms:Ps(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ft.getTransfer(A.colorSpace)!==_t,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,f=A,d=A.version,h=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,v){E.getRGB(ro,ad(r)),n.buffers.color.setClear(ro.r,ro.g,ro.b,v,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,v=1){o.set(E),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m,dispose:T}}function $0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(M,C,U,z,k){let q=!1;const G=f(z,U,C);s!==G&&(s=G,c(s.object)),q=h(M,z,U,k),q&&g(M,z,U,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(M,C,U,z),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function u(M){return r.deleteVertexArray(M)}function f(M,C,U){const z=U.wireframe===!0;let k=n[M.id];k===void 0&&(k={},n[M.id]=k);let q=k[C.id];q===void 0&&(q={},k[C.id]=q);let G=q[z];return G===void 0&&(G=d(l()),q[z]=G),G}function d(M){const C=[],U=[],z=[];for(let k=0;k<t;k++)C[k]=0,U[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:z,object:M,attributes:{},index:null}}function h(M,C,U,z){const k=s.attributes,q=C.attributes;let G=0;const Y=U.getAttributes();for(const H in Y)if(Y[H].location>=0){const L=k[H];let fe=q[H];if(fe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),L===void 0||L.attribute!==fe||fe&&L.data!==fe.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function g(M,C,U,z){const k={},q=C.attributes;let G=0;const Y=U.getAttributes();for(const H in Y)if(Y[H].location>=0){let L=q[H];L===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(L=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(L=M.instanceColor));const fe={};fe.attribute=L,L&&L.data&&(fe.data=L.data),k[H]=fe,G++}s.attributes=k,s.attributesNum=G,s.index=z}function _(){const M=s.newAttributes;for(let C=0,U=M.length;C<U;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const U=s.newAttributes,z=s.enabledAttributes,k=s.attributeDivisors;U[M]=1,z[M]===0&&(r.enableVertexAttribArray(M),z[M]=1),k[M]!==C&&(r.vertexAttribDivisor(M,C),k[M]=C)}function T(){const M=s.newAttributes,C=s.enabledAttributes;for(let U=0,z=C.length;U<z;U++)C[U]!==M[U]&&(r.disableVertexAttribArray(U),C[U]=0)}function E(M,C,U,z,k,q,G){G===!0?r.vertexAttribIPointer(M,C,U,k,q):r.vertexAttribPointer(M,C,U,z,k,q)}function v(M,C,U,z){_();const k=z.attributes,q=U.getAttributes(),G=C.defaultAttributeValues;for(const Y in q){const H=q[Y];if(H.location>=0){let ne=k[Y];if(ne===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const L=ne.normalized,fe=ne.itemSize,Le=e.get(ne);if(Le===void 0)continue;const st=Le.buffer,ze=Le.type,$=Le.bytesPerElement,oe=ze===r.INT||ze===r.UNSIGNED_INT||ne.gpuType===gu;if(ne.isInterleavedBufferAttribute){const te=ne.data,Ee=te.stride,Se=ne.offset;if(te.isInstancedInterleavedBuffer){for(let Fe=0;Fe<H.locationSize;Fe++)p(H.location+Fe,te.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Fe=0;Fe<H.locationSize;Fe++)m(H.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,st);for(let Fe=0;Fe<H.locationSize;Fe++)E(H.location+Fe,fe/H.locationSize,ze,L,Ee*$,(Se+fe/H.locationSize*Fe)*$,oe)}else{if(ne.isInstancedBufferAttribute){for(let te=0;te<H.locationSize;te++)p(H.location+te,ne.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let te=0;te<H.locationSize;te++)m(H.location+te);r.bindBuffer(r.ARRAY_BUFFER,st);for(let te=0;te<H.locationSize;te++)E(H.location+te,fe/H.locationSize,ze,L,fe*$,fe/H.locationSize*te*$,oe)}}else if(G!==void 0){const L=G[Y];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(H.location,L);break;case 3:r.vertexAttrib3fv(H.location,L);break;case 4:r.vertexAttrib4fv(H.location,L);break;default:r.vertexAttrib1fv(H.location,L)}}}}T()}function A(){P();for(const M in n){const C=n[M];for(const U in C){const z=C[U];for(const k in z)u(z[k].object),delete z[k];delete C[U]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const U in C){const z=C[U];for(const k in z)u(z[k].object),delete z[k];delete C[U]}delete n[M.id]}function b(M){for(const C in n){const U=n[C];if(U[M.id]===void 0)continue;const z=U[M.id];for(const k in z)u(z[k].object),delete z[k];delete U[M.id]}}function P(){x(),a=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function K0(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,n,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Z0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==ui&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const P=b===La&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ei&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Fi&&!P)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function j0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new yr,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||i;return i=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,E=T*4;let v=p.clippingState||null;l.value=v,v=u(g,d,E,h);for(let A=0;A!==E;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=h;E!==_;++E,v+=4)a.copy(f[E]).applyMatrix4(T,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function J0(r){let e=new WeakMap;function t(a,o){return o===hc?a.mapping=ws:o===dc&&(a.mapping=Rs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===hc||o===dc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new e_(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const ds=4,Uf=[.125,.215,.35,.446,.526,.582],Rr=20,Fl=new hd,Nf=new lt;let Ol=null,Bl=0,zl=0,kl=!1;const Er=(1+Math.sqrt(5))/2,os=1/Er,Ff=[new V(-Er,os,0),new V(Er,os,0),new V(-os,0,Er),new V(os,0,Er),new V(0,Er,-os),new V(0,Er,os),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Q0=new V;class Of{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Q0}=s;Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ol,Bl,zl),this._renderer.xr.enabled=kl,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:La,format:ui,colorSpace:Cs,depthBuffer:!1},i=Bf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ev(s)),this._blurMaterial=tv(s,e,t)}return i}_compileMaterial(e){const t=new fi(this._lodPlanes[0],e);this._renderer.compile(t,Fl)}_sceneToCubeUV(e,t,n,i,s){const l=new Bn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Nf),f.toneMapping=ir,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null));const _=new id({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),m=new fi(new ks,_);let p=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,p=!0):(_.color.copy(Nf),p=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const A=this._cubeSize;so(i,v*A,E>2?A:0,A,A),f.setRenderTarget(i),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ws||e.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new fi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;so(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Fl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ff[(i-s-1)%Ff.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new fi(this._lodPlanes[i],c),d=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Rr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Rr;m>Rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rr}`);const p=[];let T=0;for(let b=0;b<Rr;++b){const P=b/_,x=Math.exp(-P*P/2);p.push(x),b===0?T+=x:b<m&&(T+=2*x)}for(let b=0;b<p.length;b++)p[b]=p[b]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const v=this._sizeLods[i],A=3*v*(i>E-ds?i-E+ds:0),w=4*(this._cubeSize-v);so(t,A,w,3*v,2*v),l.setRenderTarget(t),l.render(f,Fl)}}function ev(r){const e=[],t=[],n=[];let i=r;const s=r-ds+1+Uf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-ds?l=Uf[a-r+ds-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*h),E=new Float32Array(m*g*h),v=new Float32Array(p*g*h);for(let w=0;w<h;w++){const b=w%3*2/3-1,P=w>2?0:-1,x=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];T.set(x,_*g*w),E.set(d,m*g*w);const M=[w,w,w,w,w,w];v.set(M,p*g*w)}const A=new ri;A.setAttribute("position",new Si(T,_)),A.setAttribute("uv",new Si(E,m)),A.setAttribute("faceIndex",new Si(v,p)),e.push(A),i>ds&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bf(r,e,t){const n=new Hr(r,e,t);return n.texture.mapping=el,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function tv(r,e,t){const n=new Float32Array(Rr),i=new V(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function zf(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function kf(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===hc||l===dc,u=l===ws||l===Rs;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Of(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new Of(r)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function iv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&vs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rv(r,e,t,n){const i={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],r.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const T=h.array;_=h.version;for(let E=0,v=T.length;E<v;E+=3){const A=T[E+0],w=T[E+1],b=T[E+2];d.push(A,w,w,b,b,A)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,v=T.length/3-1;E<v;E+=3){const A=E+0,w=E+1,b=E+2;d.push(A,w,w,b,b,A)}}else return;const m=new(Jh(d)?sd:rd)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function sv(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,g){g!==0&&(r.drawElementsInstanced(n,h,s,d*a,g),t.update(h,n,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=h[T]*_[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function av(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ov(r,e,t){const n=new WeakMap,i=new Lt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var h=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=o.attributes.position.count*v,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*w*4*f),P=new Qh(b,A,w,f);P.type=Fi,P.needsUpdate=!0;const x=v*4;for(let C=0;C<f;C++){const U=p[C],z=T[C],k=E[C],q=A*w*4*C;for(let G=0;G<U.count;G++){const Y=G*x;g===!0&&(i.fromBufferAttribute(U,G),b[q+Y+0]=i.x,b[q+Y+1]=i.y,b[q+Y+2]=i.z,b[q+Y+3]=0),_===!0&&(i.fromBufferAttribute(z,G),b[q+Y+4]=i.x,b[q+Y+5]=i.y,b[q+Y+6]=i.z,b[q+Y+7]=0),m===!0&&(i.fromBufferAttribute(k,G),b[q+Y+8]=i.x,b[q+Y+9]=i.y,b[q+Y+10]=i.z,b[q+Y+11]=k.itemSize===4?i.w:1)}}d={count:f,texture:P,size:new ht(A,w)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function lv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const pd=new Tn,Hf=new ud(1,1),md=new Qh,_d=new Om,gd=new ld,Vf=[],Gf=[],Wf=new Float32Array(16),Xf=new Float32Array(9),Yf=new Float32Array(4);function Hs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Vf[i];if(s===void 0&&(s=new Float32Array(i),Vf[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function qt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function il(r,e){let t=Gf[e];t===void 0&&(t=new Int32Array(e),Gf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function cv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function uv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2fv(this.addr,e),qt(t,e)}}function fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;r.uniform3fv(this.addr,e),qt(t,e)}}function hv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4fv(this.addr,e),qt(t,e)}}function dv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;Yf.set(n),r.uniformMatrix2fv(this.addr,!1,Yf),qt(t,n)}}function pv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;Xf.set(n),r.uniformMatrix3fv(this.addr,!1,Xf),qt(t,n)}}function mv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;Wf.set(n),r.uniformMatrix4fv(this.addr,!1,Wf),qt(t,n)}}function _v(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2iv(this.addr,e),qt(t,e)}}function vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3iv(this.addr,e),qt(t,e)}}function xv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4iv(this.addr,e),qt(t,e)}}function Mv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2uiv(this.addr,e),qt(t,e)}}function yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3uiv(this.addr,e),qt(t,e)}}function Ev(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4uiv(this.addr,e),qt(t,e)}}function Tv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Hf.compareFunction=jh,s=Hf):s=pd,t.setTexture2D(e||s,i)}function bv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||_d,i)}function Av(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gd,i)}function wv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||md,i)}function Rv(r){switch(r){case 5126:return cv;case 35664:return uv;case 35665:return fv;case 35666:return hv;case 35674:return dv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return _v;case 35667:case 35671:return gv;case 35668:case 35672:return vv;case 35669:case 35673:return xv;case 5125:return Mv;case 36294:return Sv;case 36295:return yv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return wv}}function Cv(r,e){r.uniform1fv(this.addr,e)}function Pv(r,e){const t=Hs(e,this.size,2);r.uniform2fv(this.addr,t)}function Dv(r,e){const t=Hs(e,this.size,3);r.uniform3fv(this.addr,t)}function Lv(r,e){const t=Hs(e,this.size,4);r.uniform4fv(this.addr,t)}function Iv(r,e){const t=Hs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Uv(r,e){const t=Hs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Nv(r,e){const t=Hs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Fv(r,e){r.uniform1iv(this.addr,e)}function Ov(r,e){r.uniform2iv(this.addr,e)}function Bv(r,e){r.uniform3iv(this.addr,e)}function zv(r,e){r.uniform4iv(this.addr,e)}function kv(r,e){r.uniform1uiv(this.addr,e)}function Hv(r,e){r.uniform2uiv(this.addr,e)}function Vv(r,e){r.uniform3uiv(this.addr,e)}function Gv(r,e){r.uniform4uiv(this.addr,e)}function Wv(r,e,t){const n=this.cache,i=e.length,s=il(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||pd,s[a])}function Xv(r,e,t){const n=this.cache,i=e.length,s=il(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||_d,s[a])}function Yv(r,e,t){const n=this.cache,i=e.length,s=il(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||gd,s[a])}function qv(r,e,t){const n=this.cache,i=e.length,s=il(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||md,s[a])}function $v(r){switch(r){case 5126:return Cv;case 35664:return Pv;case 35665:return Dv;case 35666:return Lv;case 35674:return Iv;case 35675:return Uv;case 35676:return Nv;case 5124:case 35670:return Fv;case 35667:case 35671:return Ov;case 35668:case 35672:return Bv;case 35669:case 35673:return zv;case 5125:return kv;case 36294:return Hv;case 36295:return Vv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return qv}}class Kv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rv(t.type)}}class Zv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$v(t.type)}}class jv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Hl=/(\w+)(\])?(\[|\.)?/g;function qf(r,e){r.seq.push(e),r.map[e.id]=e}function Jv(r,e,t){const n=r.name,i=n.length;for(Hl.lastIndex=0;;){const s=Hl.exec(n),a=Hl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){qf(t,c===void 0?new Kv(o,r,e):new Zv(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new jv(o),qf(t,f)),t=f}}}class Ao{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Jv(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function $f(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Qv=37297;let ex=0;function tx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Kf=new Ke;function nx(r){ft._getMatrix(Kf,ft.workingColorSpace,r);const e=`mat3( ${Kf.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(r)){case Fo:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Zf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+tx(r.getShaderSource(e),o)}else return s}function ix(r,e){const t=nx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rx(r,e){let t;switch(e){case fm:t="Linear";break;case hm:t="Reinhard";break;case dm:t="Cineon";break;case pm:t="ACESFilmic";break;case _m:t="AgX";break;case gm:t="Neutral";break;case mm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ao=new V;function sx(){ft.getLuminanceCoefficients(ao);const r=ao.x.toFixed(4),e=ao.y.toFixed(4),t=ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ax(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function ox(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Qs(r){return r!==""}function jf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(r){return r.replace(cx,fx)}const ux=new Map;function fx(r,e){let t=je[e];if(t===void 0){const n=ux.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gc(t)}const hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qf(r){return r.replace(hx,dx)}function dx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function eh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function px(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===kh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Wp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function mx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ws:case Rs:e="ENVMAP_TYPE_CUBE";break;case el:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _x(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function gx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case _u:e="ENVMAP_BLENDING_MULTIPLY";break;case cm:e="ENVMAP_BLENDING_MIX";break;case um:e="ENVMAP_BLENDING_ADD";break}return e}function vx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xx(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=px(t),c=mx(t),u=_x(t),f=gx(t),d=vx(t),h=ax(t),g=ox(s),_=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(m=[eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?je.tonemapping_pars_fragment:"",t.toneMapping!==ir?rx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,ix("linearToOutputTexel",t.outputColorSpace),sx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),a=Gc(a),a=jf(a,t),a=Jf(a,t),o=Gc(o),o=jf(o,t),o=Jf(o,t),a=Qf(a),o=Qf(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+a,v=T+p+o,A=$f(i,i.VERTEX_SHADER,E),w=$f(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(C){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_)||"",z=i.getShaderInfoLog(A)||"",k=i.getShaderInfoLog(w)||"",q=U.trim(),G=z.trim(),Y=k.trim();let H=!0,ne=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,w);else{const L=Zf(i,A,"vertex"),fe=Zf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+q+`
`+L+`
`+fe)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(G===""||Y==="")&&(ne=!1);ne&&(C.diagnostics={runnable:H,programLog:q,vertexShader:{log:G,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(A),i.deleteShader(w),P=new Ao(i,_),x=lx(i,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let x;this.getAttributes=function(){return x===void 0&&b(this),x};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Qv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ex++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let Mx=0;class Sx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yx(e),t.set(e,n)),n}}class yx{constructor(e){this.id=Mx++,this.code=e,this.usedTimes=0}}function Ex(r,e,t,n,i,s,a){const o=new td,l=new Sx,c=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,C,U,z){const k=U.fog,q=z.geometry,G=x.isMeshStandardMaterial?U.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),H=Y&&Y.mapping===el?Y.image.height:null,ne=g[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const L=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,fe=L!==void 0?L.length:0;let Le=0;q.morphAttributes.position!==void 0&&(Le=1),q.morphAttributes.normal!==void 0&&(Le=2),q.morphAttributes.color!==void 0&&(Le=3);let st,ze,$,oe;if(ne){const _e=mi[ne];st=_e.vertexShader,ze=_e.fragmentShader}else st=x.vertexShader,ze=x.fragmentShader,l.update(x),$=l.getVertexShaderID(x),oe=l.getFragmentShaderID(x);const te=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),Se=z.isInstancedMesh===!0,Fe=z.isBatchedMesh===!0,nt=!!x.map,He=!!x.matcap,D=!!Y,Ve=!!x.aoMap,ye=!!x.lightMap,Xe=!!x.bumpMap,O=!!x.normalMap,Qe=!!x.displacementMap,ge=!!x.emissiveMap,Ge=!!x.metalnessMap,qe=!!x.roughnessMap,dt=x.anisotropy>0,R=x.clearcoat>0,S=x.dispersion>0,B=x.iridescence>0,Z=x.sheen>0,j=x.transmission>0,K=dt&&!!x.anisotropyMap,ve=R&&!!x.clearcoatMap,se=R&&!!x.clearcoatNormalMap,Ae=R&&!!x.clearcoatRoughnessMap,he=B&&!!x.iridescenceMap,re=B&&!!x.iridescenceThicknessMap,ue=Z&&!!x.sheenColorMap,Ie=Z&&!!x.sheenRoughnessMap,we=!!x.specularMap,ce=!!x.specularColorMap,ke=!!x.specularIntensityMap,I=j&&!!x.transmissionMap,ie=j&&!!x.thicknessMap,ae=!!x.gradientMap,pe=!!x.alphaMap,ee=x.alphaTest>0,J=!!x.alphaHash,Me=!!x.extensions;let Ne=ir;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ne=r.toneMapping);const ct={shaderID:ne,shaderType:x.type,shaderName:x.name,vertexShader:st,fragmentShader:ze,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Fe,batchingColor:Fe&&z._colorsTexture!==null,instancing:Se,instancingColor:Se&&z.instanceColor!==null,instancingMorph:Se&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Cs,alphaToCoverage:!!x.alphaToCoverage,map:nt,matcap:He,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:H,aoMap:Ve,lightMap:ye,bumpMap:Xe,normalMap:O,displacementMap:d&&Qe,emissiveMap:ge,normalMapObjectSpace:O&&x.normalMapType===Sm,normalMapTangentSpace:O&&x.normalMapType===Zh,metalnessMap:Ge,roughnessMap:qe,anisotropy:dt,anisotropyMap:K,clearcoat:R,clearcoatMap:ve,clearcoatNormalMap:se,clearcoatRoughnessMap:Ae,dispersion:S,iridescence:B,iridescenceMap:he,iridescenceThicknessMap:re,sheen:Z,sheenColorMap:ue,sheenRoughnessMap:Ie,specularMap:we,specularColorMap:ce,specularIntensityMap:ke,transmission:j,transmissionMap:I,thicknessMap:ie,gradientMap:ae,opaque:x.transparent===!1&&x.blending===gs&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:ee,alphaHash:J,combine:x.combine,mapUv:nt&&_(x.map.channel),aoMapUv:Ve&&_(x.aoMap.channel),lightMapUv:ye&&_(x.lightMap.channel),bumpMapUv:Xe&&_(x.bumpMap.channel),normalMapUv:O&&_(x.normalMap.channel),displacementMapUv:Qe&&_(x.displacementMap.channel),emissiveMapUv:ge&&_(x.emissiveMap.channel),metalnessMapUv:Ge&&_(x.metalnessMap.channel),roughnessMapUv:qe&&_(x.roughnessMap.channel),anisotropyMapUv:K&&_(x.anisotropyMap.channel),clearcoatMapUv:ve&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(x.sheenRoughnessMap.channel),specularMapUv:we&&_(x.specularMap.channel),specularColorMapUv:ce&&_(x.specularColorMap.channel),specularIntensityMapUv:ke&&_(x.specularIntensityMap.channel),transmissionMapUv:I&&_(x.transmissionMap.channel),thicknessMapUv:ie&&_(x.thicknessMap.channel),alphaMapUv:pe&&_(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(O||dt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(nt||pe),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Le,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ne,decodeVideoTexture:nt&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:ge&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ui,flipSided:x.side===En,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function p(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)M.push(C),M.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(T(M,x),E(M,x),M.push(r.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function T(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function E(x,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const M=g[x.type];let C;if(M){const U=mi[M];C=Zm.clone(U.uniforms)}else C=x.uniforms;return C}function A(x,M){let C;for(let U=0,z=u.length;U<z;U++){const k=u[U];if(k.cacheKey===M){C=k,++C.usedTimes;break}}return C===void 0&&(C=new xx(r,M,x,s),u.push(C)),C}function w(x){if(--x.usedTimes===0){const M=u.indexOf(x);u[M]=u[u.length-1],u.pop(),x.destroy()}}function b(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:P}}function Tx(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function bx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function th(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function nh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,d,h,g,_,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function l(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||bx),n.length>1&&n.sort(d||th),i.length>1&&i.sort(d||th)}function u(){for(let f=e,d=r.length;f<d;f++){const h=r[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Ax(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new nh,r.set(n,[a])):i>=s.length?(a=new nh,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function wx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new lt};break;case"SpotLight":t={position:new V,direction:new V,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new V,halfWidth:new V,halfHeight:new V};break}return r[e.id]=t,t}}}function Rx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Cx=0;function Px(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Dx(r){const e=new wx,t=Rx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const i=new V,s=new Ut,a=new Ut;function o(c){let u=0,f=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,T=0,E=0,v=0,A=0,w=0,b=0;c.sort(Px);for(let x=0,M=c.length;x<M;x++){const C=c[x],U=C.color,z=C.intensity,k=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*z,f+=U.g*z,d+=U.b*z;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],z);b++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,H=t.get(C);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[h]=H,n.directionalShadowMap[h]=q,n.directionalShadowMatrix[h]=C.shadow.matrix,T++}n.directional[h]=G,h++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(U).multiplyScalar(z),G.distance=k,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[_]=G;const Y=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,Y.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=q,v++}_++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(U).multiplyScalar(z),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const Y=C.shadow,H=t.get(C);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=G,g++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(z),G.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==h||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==T||P.numPointShadows!==E||P.numSpotShadows!==v||P.numSpotMaps!==A||P.numLightProbes!==b)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,P.directionalLength=h,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=T,P.numPointShadows=E,P.numSpotShadows=v,P.numSpotMaps=A,P.numLightProbes=b,n.version=Cx++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const E=c[p];if(E.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(E.isSpotLight){const v=n.spot[h];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function ih(r){const e=new Dx(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Lx(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new ih(r),e.set(i,[o])):s>=a.length?(o=new ih(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Nx(r,e,t){let n=new Tu;const i=new ht,s=new ht,a=new Lt,o=new a_({depthPacking:Mm}),l=new o_,c={},u=t.maxTextureSize,f={[or]:En,[En]:or,[Ui]:Ui},d=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Ix,fragmentShader:Ux}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new ri;g.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fi(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kh;let p=this.type;this.render=function(w,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const x=r.getRenderTarget(),M=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),U=r.state;U.setBlending(nr),U.buffers.depth.getReversed()?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=p!==Di&&this.type===Di,k=p===Di&&this.type!==Di;for(let q=0,G=w.length;q<G;q++){const Y=w[q],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ne=H.getFrameExtents();if(i.multiply(ne),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ne.x),i.x=s.x*ne.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ne.y),i.y=s.y*ne.y,H.mapSize.y=s.y)),H.map===null||z===!0||k===!0){const fe=this.type!==Di?{minFilter:hi,magFilter:hi}:{};H.map!==null&&H.map.dispose(),H.map=new Hr(i.x,i.y,fe),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const L=H.getViewportCount();for(let fe=0;fe<L;fe++){const Le=H.getViewport(fe);a.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),U.viewport(a),H.updateMatrices(Y,fe),n=H.getFrustum(),v(b,P,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Di&&T(H,P),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(x,M,C)};function T(w,b){const P=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Hr(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,P,d,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,P,h,_,null)}function E(w,b,P,x){let M=null;const C=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const U=M.uuid,z=b.uuid;let k=c[U];k===void 0&&(k={},c[U]=k);let q=k[z];q===void 0&&(q=M.clone(),k[z]=q,b.addEventListener("dispose",A)),M=q}if(M.visible=b.visible,M.wireframe=b.wireframe,x===Di?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:f[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=r.properties.get(M);U.light=P}return M}function v(w,b,P,x,M){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Di)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const z=e.update(w),k=w.material;if(Array.isArray(k)){const q=z.groups;for(let G=0,Y=q.length;G<Y;G++){const H=q[G],ne=k[H.materialIndex];if(ne&&ne.visible){const L=E(w,ne,x,M);w.onBeforeShadow(r,w,b,P,z,L,H),r.renderBufferDirect(P,null,z,L,w,H),w.onAfterShadow(r,w,b,P,z,L,H)}}}else if(k.visible){const q=E(w,k,x,M);w.onBeforeShadow(r,w,b,P,z,q,null),r.renderBufferDirect(P,null,z,q,w,null),w.onAfterShadow(r,w,b,P,z,q,null)}}const U=w.children;for(let z=0,k=U.length;z<k;z++)v(U[z],b,P,x,M)}function A(w){w.target.removeEventListener("dispose",A);for(const P in c){const x=c[P],M=w.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const Fx={[sc]:ac,[oc]:uc,[lc]:fc,[As]:cc,[ac]:sc,[uc]:oc,[fc]:lc,[cc]:As};function Ox(r,e){function t(){let I=!1;const ie=new Lt;let ae=null;const pe=new Lt(0,0,0,0);return{setMask:function(ee){ae!==ee&&!I&&(r.colorMask(ee,ee,ee,ee),ae=ee)},setLocked:function(ee){I=ee},setClear:function(ee,J,Me,Ne,ct){ct===!0&&(ee*=Ne,J*=Ne,Me*=Ne),ie.set(ee,J,Me,Ne),pe.equals(ie)===!1&&(r.clearColor(ee,J,Me,Ne),pe.copy(ie))},reset:function(){I=!1,ae=null,pe.set(-1,0,0,0)}}}function n(){let I=!1,ie=!1,ae=null,pe=null,ee=null;return{setReversed:function(J){if(ie!==J){const Me=e.get("EXT_clip_control");J?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ie=J;const Ne=ee;ee=null,this.setClear(Ne)}},getReversed:function(){return ie},setTest:function(J){J?te(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(J){ae!==J&&!I&&(r.depthMask(J),ae=J)},setFunc:function(J){if(ie&&(J=Fx[J]),pe!==J){switch(J){case sc:r.depthFunc(r.NEVER);break;case ac:r.depthFunc(r.ALWAYS);break;case oc:r.depthFunc(r.LESS);break;case As:r.depthFunc(r.LEQUAL);break;case lc:r.depthFunc(r.EQUAL);break;case cc:r.depthFunc(r.GEQUAL);break;case uc:r.depthFunc(r.GREATER);break;case fc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=J}},setLocked:function(J){I=J},setClear:function(J){ee!==J&&(ie&&(J=1-J),r.clearDepth(J),ee=J)},reset:function(){I=!1,ae=null,pe=null,ee=null,ie=!1}}}function i(){let I=!1,ie=null,ae=null,pe=null,ee=null,J=null,Me=null,Ne=null,ct=null;return{setTest:function(_e){I||(_e?te(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(_e){ie!==_e&&!I&&(r.stencilMask(_e),ie=_e)},setFunc:function(_e,Re,Ye){(ae!==_e||pe!==Re||ee!==Ye)&&(r.stencilFunc(_e,Re,Ye),ae=_e,pe=Re,ee=Ye)},setOp:function(_e,Re,Ye){(J!==_e||Me!==Re||Ne!==Ye)&&(r.stencilOp(_e,Re,Ye),J=_e,Me=Re,Ne=Ye)},setLocked:function(_e){I=_e},setClear:function(_e){ct!==_e&&(r.clearStencil(_e),ct=_e)},reset:function(){I=!1,ie=null,ae=null,pe=null,ee=null,J=null,Me=null,Ne=null,ct=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,T=null,E=null,v=null,A=null,w=null,b=new lt(0,0,0),P=0,x=!1,M=null,C=null,U=null,z=null,k=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=Y>=2);let ne=null,L={};const fe=r.getParameter(r.SCISSOR_BOX),Le=r.getParameter(r.VIEWPORT),st=new Lt().fromArray(fe),ze=new Lt().fromArray(Le);function $(I,ie,ae,pe){const ee=new Uint8Array(4),J=r.createTexture();r.bindTexture(I,J),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Me=0;Me<ae;Me++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,ee):r.texImage2D(ie+Me,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ee);return J}const oe={};oe[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(r.DEPTH_TEST),a.setFunc(As),Xe(!1),O(tf),te(r.CULL_FACE),Ve(nr);function te(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function Ee(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Se(I,ie){return f[I]!==ie?(r.bindFramebuffer(I,ie),f[I]=ie,I===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ie),I===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function Fe(I,ie){let ae=h,pe=!1;if(I){ae=d.get(ie),ae===void 0&&(ae=[],d.set(ie,ae));const ee=I.textures;if(ae.length!==ee.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let J=0,Me=ee.length;J<Me;J++)ae[J]=r.COLOR_ATTACHMENT0+J;ae.length=ee.length,pe=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,pe=!0);pe&&r.drawBuffers(ae)}function nt(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const He={[wr]:r.FUNC_ADD,[Yp]:r.FUNC_SUBTRACT,[qp]:r.FUNC_REVERSE_SUBTRACT};He[$p]=r.MIN,He[Kp]=r.MAX;const D={[Zp]:r.ZERO,[jp]:r.ONE,[Jp]:r.SRC_COLOR,[ic]:r.SRC_ALPHA,[rm]:r.SRC_ALPHA_SATURATE,[nm]:r.DST_COLOR,[em]:r.DST_ALPHA,[Qp]:r.ONE_MINUS_SRC_COLOR,[rc]:r.ONE_MINUS_SRC_ALPHA,[im]:r.ONE_MINUS_DST_COLOR,[tm]:r.ONE_MINUS_DST_ALPHA,[sm]:r.CONSTANT_COLOR,[am]:r.ONE_MINUS_CONSTANT_COLOR,[om]:r.CONSTANT_ALPHA,[lm]:r.ONE_MINUS_CONSTANT_ALPHA};function Ve(I,ie,ae,pe,ee,J,Me,Ne,ct,_e){if(I===nr){_===!0&&(Ee(r.BLEND),_=!1);return}if(_===!1&&(te(r.BLEND),_=!0),I!==Xp){if(I!==m||_e!==x){if((p!==wr||v!==wr)&&(r.blendEquation(r.FUNC_ADD),p=wr,v=wr),_e)switch(I){case gs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nf:r.blendFunc(r.ONE,r.ONE);break;case rf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case sf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case gs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case rf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,E=null,A=null,w=null,b.set(0,0,0),P=0,m=I,x=_e}return}ee=ee||ie,J=J||ae,Me=Me||pe,(ie!==p||ee!==v)&&(r.blendEquationSeparate(He[ie],He[ee]),p=ie,v=ee),(ae!==T||pe!==E||J!==A||Me!==w)&&(r.blendFuncSeparate(D[ae],D[pe],D[J],D[Me]),T=ae,E=pe,A=J,w=Me),(Ne.equals(b)===!1||ct!==P)&&(r.blendColor(Ne.r,Ne.g,Ne.b,ct),b.copy(Ne),P=ct),m=I,x=!1}function ye(I,ie){I.side===Ui?Ee(r.CULL_FACE):te(r.CULL_FACE);let ae=I.side===En;ie&&(ae=!ae),Xe(ae),I.blending===gs&&I.transparent===!1?Ve(nr):Ve(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const pe=I.stencilWrite;o.setTest(pe),pe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ge(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(I){M!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),M=I)}function O(I){I!==Vp?(te(r.CULL_FACE),I!==C&&(I===tf?r.cullFace(r.BACK):I===Gp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),C=I}function Qe(I){I!==U&&(G&&r.lineWidth(I),U=I)}function ge(I,ie,ae){I?(te(r.POLYGON_OFFSET_FILL),(z!==ie||k!==ae)&&(r.polygonOffset(ie,ae),z=ie,k=ae)):Ee(r.POLYGON_OFFSET_FILL)}function Ge(I){I?te(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function qe(I){I===void 0&&(I=r.TEXTURE0+q-1),ne!==I&&(r.activeTexture(I),ne=I)}function dt(I,ie,ae){ae===void 0&&(ne===null?ae=r.TEXTURE0+q-1:ae=ne);let pe=L[ae];pe===void 0&&(pe={type:void 0,texture:void 0},L[ae]=pe),(pe.type!==I||pe.texture!==ie)&&(ne!==ae&&(r.activeTexture(ae),ne=ae),r.bindTexture(I,ie||oe[I]),pe.type=I,pe.texture=ie)}function R(){const I=L[ne];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{r.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{r.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{r.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{r.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{r.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{r.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{r.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(I){st.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),st.copy(I))}function Ie(I){ze.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),ze.copy(I))}function we(I,ie){let ae=c.get(ie);ae===void 0&&(ae=new WeakMap,c.set(ie,ae));let pe=ae.get(I);pe===void 0&&(pe=r.getUniformBlockIndex(ie,I.name),ae.set(I,pe))}function ce(I,ie){const pe=c.get(ie).get(I);l.get(ie)!==pe&&(r.uniformBlockBinding(ie,pe,I.__bindingPointIndex),l.set(ie,pe))}function ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ne=null,L={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,T=null,E=null,v=null,A=null,w=null,b=new lt(0,0,0),P=0,x=!1,M=null,C=null,U=null,z=null,k=null,st.set(0,0,r.canvas.width,r.canvas.height),ze.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:Ee,bindFramebuffer:Se,drawBuffers:Fe,useProgram:nt,setBlending:Ve,setMaterial:ye,setFlipSided:Xe,setCullFace:O,setLineWidth:Qe,setPolygonOffset:ge,setScissorTest:Ge,activeTexture:qe,bindTexture:dt,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:he,texImage3D:re,updateUBOMapping:we,uniformBlockBinding:ce,texStorage2D:se,texStorage3D:Ae,texSubImage2D:Z,texSubImage3D:j,compressedTexSubImage2D:K,compressedTexSubImage3D:ve,scissor:ue,viewport:Ie,reset:ke}}function Bx(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return h?new OffscreenCanvas(R,S):Bo("canvas")}function _(R,S,B){let Z=1;const j=dt(R);if((j.width>B||j.height>B)&&(Z=B/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Z*j.width),ve=Math.floor(Z*j.height);f===void 0&&(f=g(K,ve));const se=S?g(K,ve):f;return se.width=K,se.height=ve,se.getContext("2d").drawImage(R,0,0,K,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+ve+")."),se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(R,S,B,Z,j=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=S;if(S===r.RED&&(B===r.FLOAT&&(K=r.R32F),B===r.HALF_FLOAT&&(K=r.R16F),B===r.UNSIGNED_BYTE&&(K=r.R8)),S===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.R8UI),B===r.UNSIGNED_SHORT&&(K=r.R16UI),B===r.UNSIGNED_INT&&(K=r.R32UI),B===r.BYTE&&(K=r.R8I),B===r.SHORT&&(K=r.R16I),B===r.INT&&(K=r.R32I)),S===r.RG&&(B===r.FLOAT&&(K=r.RG32F),B===r.HALF_FLOAT&&(K=r.RG16F),B===r.UNSIGNED_BYTE&&(K=r.RG8)),S===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RG8UI),B===r.UNSIGNED_SHORT&&(K=r.RG16UI),B===r.UNSIGNED_INT&&(K=r.RG32UI),B===r.BYTE&&(K=r.RG8I),B===r.SHORT&&(K=r.RG16I),B===r.INT&&(K=r.RG32I)),S===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RGB8UI),B===r.UNSIGNED_SHORT&&(K=r.RGB16UI),B===r.UNSIGNED_INT&&(K=r.RGB32UI),B===r.BYTE&&(K=r.RGB8I),B===r.SHORT&&(K=r.RGB16I),B===r.INT&&(K=r.RGB32I)),S===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),B===r.UNSIGNED_INT&&(K=r.RGBA32UI),B===r.BYTE&&(K=r.RGBA8I),B===r.SHORT&&(K=r.RGBA16I),B===r.INT&&(K=r.RGBA32I)),S===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),S===r.RGBA){const ve=j?Fo:ft.getTransfer(Z);B===r.FLOAT&&(K=r.RGBA32F),B===r.HALF_FLOAT&&(K=r.RGBA16F),B===r.UNSIGNED_BYTE&&(K=ve===_t?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(R,S){let B;return R?S===null||S===kr||S===Ma?B=r.DEPTH24_STENCIL8:S===Fi?B=r.DEPTH32F_STENCIL8:S===xa&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===kr||S===Ma?B=r.DEPTH_COMPONENT24:S===Fi?B=r.DEPTH_COMPONENT32F:S===xa&&(B=r.DEPTH_COMPONENT16),B}function A(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==hi&&R.minFilter!==gi?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){const S=R.target;S.removeEventListener("dispose",w),P(S),S.isVideoTexture&&u.delete(S)}function b(R){const S=R.target;S.removeEventListener("dispose",b),M(S)}function P(R){const S=n.get(R);if(S.__webglInit===void 0)return;const B=R.source,Z=d.get(B);if(Z){const j=Z[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(R),Object.keys(Z).length===0&&d.delete(B)}n.remove(R)}function x(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const B=R.source,Z=d.get(B);delete Z[S.__cacheKey],a.memory.textures--}function M(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let j=0;j<S.__webglFramebuffer[Z].length;j++)r.deleteFramebuffer(S.__webglFramebuffer[Z][j]);else r.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)r.deleteFramebuffer(S.__webglFramebuffer[Z]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=R.textures;for(let Z=0,j=B.length;Z<j;Z++){const K=n.get(B[Z]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(B[Z])}n.remove(R)}let C=0;function U(){C=0}function z(){const R=C;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),C+=1,R}function k(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function q(R,S){const B=n.get(R);if(R.isVideoTexture&&Ge(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(B,R,S);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+S)}function G(R,S){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){oe(B,R,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+S)}function Y(R,S){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){oe(B,R,S);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+S)}function H(R,S){const B=n.get(R);if(R.version>0&&B.__version!==R.version){te(B,R,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+S)}const ne={[pc]:r.REPEAT,[Cr]:r.CLAMP_TO_EDGE,[mc]:r.MIRRORED_REPEAT},L={[hi]:r.NEAREST,[vm]:r.NEAREST_MIPMAP_NEAREST,[Oa]:r.NEAREST_MIPMAP_LINEAR,[gi]:r.LINEAR,[cl]:r.LINEAR_MIPMAP_NEAREST,[Pr]:r.LINEAR_MIPMAP_LINEAR},fe={[ym]:r.NEVER,[Rm]:r.ALWAYS,[Em]:r.LESS,[jh]:r.LEQUAL,[Tm]:r.EQUAL,[wm]:r.GEQUAL,[bm]:r.GREATER,[Am]:r.NOTEQUAL};function Le(R,S){if(S.type===Fi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===gi||S.magFilter===cl||S.magFilter===Oa||S.magFilter===Pr||S.minFilter===gi||S.minFilter===cl||S.minFilter===Oa||S.minFilter===Pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ne[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ne[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ne[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,L[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,L[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hi||S.minFilter!==Oa&&S.minFilter!==Pr||S.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function st(R,S){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));const Z=S.source;let j=d.get(Z);j===void 0&&(j={},d.set(Z,j));const K=k(S);if(K!==R.__cacheKey){j[K]===void 0&&(j[K]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[K].usedTimes++;const ve=j[R.__cacheKey];ve!==void 0&&(j[R.__cacheKey].usedTimes--,ve.usedTimes===0&&x(S)),R.__cacheKey=K,R.__webglTexture=j[K].texture}return B}function ze(R,S,B){return Math.floor(Math.floor(R/B)/S)}function $(R,S,B,Z){const K=R.updateRanges;if(K.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,B,Z,S.data);else{K.sort((re,ue)=>re.start-ue.start);let ve=0;for(let re=1;re<K.length;re++){const ue=K[ve],Ie=K[re],we=ue.start+ue.count,ce=ze(Ie.start,S.width,4),ke=ze(ue.start,S.width,4);Ie.start<=we+1&&ce===ke&&ze(Ie.start+Ie.count-1,S.width,4)===ce?ue.count=Math.max(ue.count,Ie.start+Ie.count-ue.start):(++ve,K[ve]=Ie)}K.length=ve+1;const se=r.getParameter(r.UNPACK_ROW_LENGTH),Ae=r.getParameter(r.UNPACK_SKIP_PIXELS),he=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let re=0,ue=K.length;re<ue;re++){const Ie=K[re],we=Math.floor(Ie.start/4),ce=Math.ceil(Ie.count/4),ke=we%S.width,I=Math.floor(we/S.width),ie=ce,ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),t.texSubImage2D(r.TEXTURE_2D,0,ke,I,ie,ae,B,Z,S.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ae),r.pixelStorei(r.UNPACK_SKIP_ROWS,he)}}function oe(R,S,B){let Z=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=r.TEXTURE_3D);const j=st(R,S),K=S.source;t.bindTexture(Z,R.__webglTexture,r.TEXTURE0+B);const ve=n.get(K);if(K.version!==ve.__version||j===!0){t.activeTexture(r.TEXTURE0+B);const se=ft.getPrimaries(ft.workingColorSpace),Ae=S.colorSpace===Zi?null:ft.getPrimaries(S.colorSpace),he=S.colorSpace===Zi||se===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let re=_(S.image,!1,i.maxTextureSize);re=qe(S,re);const ue=s.convert(S.format,S.colorSpace),Ie=s.convert(S.type);let we=E(S.internalFormat,ue,Ie,S.colorSpace,S.isVideoTexture);Le(Z,S);let ce;const ke=S.mipmaps,I=S.isVideoTexture!==!0,ie=ve.__version===void 0||j===!0,ae=K.dataReady,pe=A(S,re);if(S.isDepthTexture)we=v(S.format===ya,S.type),ie&&(I?t.texStorage2D(r.TEXTURE_2D,1,we,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,we,re.width,re.height,0,ue,Ie,null));else if(S.isDataTexture)if(ke.length>0){I&&ie&&t.texStorage2D(r.TEXTURE_2D,pe,we,ke[0].width,ke[0].height);for(let ee=0,J=ke.length;ee<J;ee++)ce=ke[ee],I?ae&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,Ie,ce.data):t.texImage2D(r.TEXTURE_2D,ee,we,ce.width,ce.height,0,ue,Ie,ce.data);S.generateMipmaps=!1}else I?(ie&&t.texStorage2D(r.TEXTURE_2D,pe,we,re.width,re.height),ae&&$(S,re,ue,Ie)):t.texImage2D(r.TEXTURE_2D,0,we,re.width,re.height,0,ue,Ie,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){I&&ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,we,ke[0].width,ke[0].height,re.depth);for(let ee=0,J=ke.length;ee<J;ee++)if(ce=ke[ee],S.format!==ui)if(ue!==null)if(I){if(ae)if(S.layerUpdates.size>0){const Me=If(ce.width,ce.height,S.format,S.type);for(const Ne of S.layerUpdates){const ct=ce.data.subarray(Ne*Me/ce.data.BYTES_PER_ELEMENT,(Ne+1)*Me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,Ne,ce.width,ce.height,1,ue,ct)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,re.depth,ue,ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,we,ce.width,ce.height,re.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,re.depth,ue,Ie,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,we,ce.width,ce.height,re.depth,0,ue,Ie,ce.data)}else{I&&ie&&t.texStorage2D(r.TEXTURE_2D,pe,we,ke[0].width,ke[0].height);for(let ee=0,J=ke.length;ee<J;ee++)ce=ke[ee],S.format!==ui?ue!==null?I?ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,we,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ae&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,Ie,ce.data):t.texImage2D(r.TEXTURE_2D,ee,we,ce.width,ce.height,0,ue,Ie,ce.data)}else if(S.isDataArrayTexture)if(I){if(ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,we,re.width,re.height,re.depth),ae)if(S.layerUpdates.size>0){const ee=If(re.width,re.height,S.format,S.type);for(const J of S.layerUpdates){const Me=re.data.subarray(J*ee/re.data.BYTES_PER_ELEMENT,(J+1)*ee/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,ue,Ie,Me)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ue,Ie,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,re.width,re.height,re.depth,0,ue,Ie,re.data);else if(S.isData3DTexture)I?(ie&&t.texStorage3D(r.TEXTURE_3D,pe,we,re.width,re.height,re.depth),ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ue,Ie,re.data)):t.texImage3D(r.TEXTURE_3D,0,we,re.width,re.height,re.depth,0,ue,Ie,re.data);else if(S.isFramebufferTexture){if(ie)if(I)t.texStorage2D(r.TEXTURE_2D,pe,we,re.width,re.height);else{let ee=re.width,J=re.height;for(let Me=0;Me<pe;Me++)t.texImage2D(r.TEXTURE_2D,Me,we,ee,J,0,ue,Ie,null),ee>>=1,J>>=1}}else if(ke.length>0){if(I&&ie){const ee=dt(ke[0]);t.texStorage2D(r.TEXTURE_2D,pe,we,ee.width,ee.height)}for(let ee=0,J=ke.length;ee<J;ee++)ce=ke[ee],I?ae&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ue,Ie,ce):t.texImage2D(r.TEXTURE_2D,ee,we,ue,Ie,ce);S.generateMipmaps=!1}else if(I){if(ie){const ee=dt(re);t.texStorage2D(r.TEXTURE_2D,pe,we,ee.width,ee.height)}ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue,Ie,re)}else t.texImage2D(r.TEXTURE_2D,0,we,ue,Ie,re);m(S)&&p(Z),ve.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function te(R,S,B){if(S.image.length!==6)return;const Z=st(R,S),j=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);const K=n.get(j);if(j.version!==K.__version||Z===!0){t.activeTexture(r.TEXTURE0+B);const ve=ft.getPrimaries(ft.workingColorSpace),se=S.colorSpace===Zi?null:ft.getPrimaries(S.colorSpace),Ae=S.colorSpace===Zi||ve===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const he=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let J=0;J<6;J++)!he&&!re?ue[J]=_(S.image[J],!0,i.maxCubemapSize):ue[J]=re?S.image[J].image:S.image[J],ue[J]=qe(S,ue[J]);const Ie=ue[0],we=s.convert(S.format,S.colorSpace),ce=s.convert(S.type),ke=E(S.internalFormat,we,ce,S.colorSpace),I=S.isVideoTexture!==!0,ie=K.__version===void 0||Z===!0,ae=j.dataReady;let pe=A(S,Ie);Le(r.TEXTURE_CUBE_MAP,S);let ee;if(he){I&&ie&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,ke,Ie.width,Ie.height);for(let J=0;J<6;J++){ee=ue[J].mipmaps;for(let Me=0;Me<ee.length;Me++){const Ne=ee[Me];S.format!==ui?we!==null?I?ae&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me,0,0,Ne.width,Ne.height,we,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me,ke,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me,0,0,Ne.width,Ne.height,we,ce,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me,ke,Ne.width,Ne.height,0,we,ce,Ne.data)}}}else{if(ee=S.mipmaps,I&&ie){ee.length>0&&pe++;const J=dt(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,ke,J.width,J.height)}for(let J=0;J<6;J++)if(re){I?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ue[J].width,ue[J].height,we,ce,ue[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,ue[J].width,ue[J].height,0,we,ce,ue[J].data);for(let Me=0;Me<ee.length;Me++){const ct=ee[Me].image[J].image;I?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me+1,0,0,ct.width,ct.height,we,ce,ct.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me+1,ke,ct.width,ct.height,0,we,ce,ct.data)}}else{I?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,we,ce,ue[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,we,ce,ue[J]);for(let Me=0;Me<ee.length;Me++){const Ne=ee[Me];I?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me+1,0,0,we,ce,Ne.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me+1,ke,we,ce,Ne.image[J])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),K.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ee(R,S,B,Z,j,K){const ve=s.convert(B.format,B.colorSpace),se=s.convert(B.type),Ae=E(B.internalFormat,ve,se,B.colorSpace),he=n.get(S),re=n.get(B);if(re.__renderTarget=S,!he.__hasExternalTextures){const ue=Math.max(1,S.width>>K),Ie=Math.max(1,S.height>>K);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,K,Ae,ue,Ie,S.depth,0,ve,se,null):t.texImage2D(j,K,Ae,ue,Ie,0,ve,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),ge(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,j,re.__webglTexture,0,Qe(S)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,j,re.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Se(R,S,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){const Z=S.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,K=v(S.stencilBuffer,j),ve=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=Qe(S);ge(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,K,S.width,S.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,K,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,K,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,R)}else{const Z=S.textures;for(let j=0;j<Z.length;j++){const K=Z[j],ve=s.convert(K.format,K.colorSpace),se=s.convert(K.type),Ae=E(K.internalFormat,ve,se,K.colorSpace),he=Qe(S);B&&ge(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,Ae,S.width,S.height):ge(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,Ae,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Fe(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const j=Z.__webglTexture,K=Qe(S);if(S.depthTexture.format===Sa)ge(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(S.depthTexture.format===ya)ge(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function nt(R){const S=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=Z}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Z=R.texture.mipmaps;Z&&Z.length>0?Fe(S.__webglFramebuffer[0],R):Fe(S.__webglFramebuffer,R)}else if(B){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=r.createRenderbuffer(),Se(S.__webglDepthbuffer[Z],R,!1);else{const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,K)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Se(S.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,K)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function He(R,S,B){const Z=n.get(R);S!==void 0&&Ee(Z.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&nt(R)}function D(R){const S=R.texture,B=n.get(R),Z=n.get(S);R.addEventListener("dispose",b);const j=R.textures,K=R.isWebGLCubeRenderTarget===!0,ve=j.length>1;if(ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=S.version,a.memory.textures++),K){B.__webglFramebuffer=[];for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[se]=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)B.__webglFramebuffer[se][Ae]=r.createFramebuffer()}else B.__webglFramebuffer[se]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)B.__webglFramebuffer[se]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(ve)for(let se=0,Ae=j.length;se<Ae;se++){const he=n.get(j[se]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&ge(R)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const Ae=j[se];B.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[se]);const he=s.convert(Ae.format,Ae.colorSpace),re=s.convert(Ae.type),ue=E(Ae.internalFormat,he,re,Ae.colorSpace,R.isXRRenderTarget===!0),Ie=Qe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,ue,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,B.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Se(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Le(r.TEXTURE_CUBE_MAP,S);for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)Ee(B.__webglFramebuffer[se][Ae],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae);else Ee(B.__webglFramebuffer[se],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let se=0,Ae=j.length;se<Ae;se++){const he=j[se],re=n.get(he);let ue=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,re.__webglTexture),Le(ue,he),Ee(B.__webglFramebuffer,R,he,r.COLOR_ATTACHMENT0+se,ue,0),m(he)&&p(ue)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),Le(se,S),S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)Ee(B.__webglFramebuffer[Ae],R,S,r.COLOR_ATTACHMENT0,se,Ae);else Ee(B.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,se,0);m(S)&&p(se),t.unbindTexture()}R.depthBuffer&&nt(R)}function Ve(R){const S=R.textures;for(let B=0,Z=S.length;B<Z;B++){const j=S[B];if(m(j)){const K=T(R),ve=n.get(j).__webglTexture;t.bindTexture(K,ve),p(K),t.unbindTexture()}}}const ye=[],Xe=[];function O(R){if(R.samples>0){if(ge(R)===!1){const S=R.textures,B=R.width,Z=R.height;let j=r.COLOR_BUFFER_BIT;const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(R),se=S.length>1;if(se)for(let he=0;he<S.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Ae=R.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let he=0;he<S.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const re=n.get(S[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,B,Z,0,0,B,Z,j,r.NEAREST),l===!0&&(ye.length=0,Xe.length=0,ye.push(r.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ye.push(K),Xe.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Xe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let he=0;he<S.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const re=n.get(S[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Qe(R){return Math.min(i.maxSamples,R.samples)}function ge(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ge(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function qe(R,S){const B=R.colorSpace,Z=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Cs&&B!==Zi&&(ft.getTransfer(B)===_t?(Z!==ui||j!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=He,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ge}function zx(r,e){function t(n,i=Zi){let s;const a=ft.getTransfer(i);if(n===Ei)return r.UNSIGNED_BYTE;if(n===vu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===xu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Wh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Vh)return r.BYTE;if(n===Gh)return r.SHORT;if(n===xa)return r.UNSIGNED_SHORT;if(n===gu)return r.INT;if(n===kr)return r.UNSIGNED_INT;if(n===Fi)return r.FLOAT;if(n===La)return r.HALF_FLOAT;if(n===Xh)return r.ALPHA;if(n===Yh)return r.RGB;if(n===ui)return r.RGBA;if(n===Sa)return r.DEPTH_COMPONENT;if(n===ya)return r.DEPTH_STENCIL;if(n===qh)return r.RED;if(n===Mu)return r.RED_INTEGER;if(n===$h)return r.RG;if(n===Su)return r.RG_INTEGER;if(n===yu)return r.RGBA_INTEGER;if(n===So||n===yo||n===Eo||n===To)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===So)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===So)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_c||n===gc||n===vc||n===xc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_c)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mc||n===Sc||n===yc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Mc||n===Sc)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ec||n===Tc||n===bc||n===Ac||n===wc||n===Rc||n===Cc||n===Pc||n===Dc||n===Lc||n===Ic||n===Uc||n===Nc||n===Fc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ec)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ac)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ic)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bo||n===Oc||n===Bc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===bo)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kh||n===zc||n===kc||n===Hc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===bo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ma?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class vd extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new vd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new lr({vertexShader:kx,fragmentShader:Hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fi(new nl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gx extends Bs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=new Vx,m={},p=t.getContextAttributes();let T=null,E=null;const v=[],A=[],w=new ht;let b=null;const P=new Bn;P.viewport=new Lt;const x=new Bn;x.viewport=new Lt;const M=[P,x],C=new u_;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=v[$];return oe===void 0&&(oe=new Ll,v[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=v[$];return oe===void 0&&(oe=new Ll,v[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=v[$];return oe===void 0&&(oe=new Ll,v[$]=oe),oe.getHandSpace()};function k($){const oe=A.indexOf($.inputSource);if(oe===-1)return;const te=v[oe];te!==void 0&&(te.update($.inputSource,$.frame,c||a),te.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",G);for(let $=0;$<v.length;$++){const oe=A[$];oe!==null&&(A[$]=null,v[$].disconnect(oe))}U=null,z=null,_.reset();for(const $ in m)delete m[$];e.setRenderTarget(T),h=null,d=null,f=null,i=null,E=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",q),i.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(w),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(i,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Ee=null,Se=null;p.depth&&(Se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?ya:Sa,Ee=p.stencil?Ma:kr);const Fe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};d=f.createProjectionLayer(Fe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Hr(d.textureWidth,d.textureHeight,{format:ui,type:Ei,depthTexture:new ud(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new Hr(h.framebufferWidth,h.framebufferHeight,{format:ui,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ze.setContext(i),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G($){for(let oe=0;oe<$.removed.length;oe++){const te=$.removed[oe],Ee=A.indexOf(te);Ee>=0&&(A[Ee]=null,v[Ee].disconnect(te))}for(let oe=0;oe<$.added.length;oe++){const te=$.added[oe];let Ee=A.indexOf(te);if(Ee===-1){for(let Fe=0;Fe<v.length;Fe++)if(Fe>=A.length){A.push(te),Ee=Fe;break}else if(A[Fe]===null){A[Fe]=te,Ee=Fe;break}if(Ee===-1)break}const Se=v[Ee];Se&&Se.connect(te)}}const Y=new V,H=new V;function ne($,oe,te){Y.setFromMatrixPosition(oe.matrixWorld),H.setFromMatrixPosition(te.matrixWorld);const Ee=Y.distanceTo(H),Se=oe.projectionMatrix.elements,Fe=te.projectionMatrix.elements,nt=Se[14]/(Se[10]-1),He=Se[14]/(Se[10]+1),D=(Se[9]+1)/Se[5],Ve=(Se[9]-1)/Se[5],ye=(Se[8]-1)/Se[0],Xe=(Fe[8]+1)/Fe[0],O=nt*ye,Qe=nt*Xe,ge=Ee/(-ye+Xe),Ge=ge*-ye;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ge),$.translateZ(ge),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Se[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const qe=nt+ge,dt=He+ge,R=O-Ge,S=Qe+(Ee-Ge),B=D*He/dt*qe,Z=Ve*He/dt*qe;$.projectionMatrix.makePerspective(R,S,B,Z,qe,dt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function L($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let oe=$.near,te=$.far;_.texture!==null&&(_.depthNear>0&&(oe=_.depthNear),_.depthFar>0&&(te=_.depthFar)),C.near=x.near=P.near=oe,C.far=x.far=P.far=te,(U!==C.near||z!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),U=C.near,z=C.far),C.layers.mask=$.layers.mask|6,P.layers.mask=C.layers.mask&3,x.layers.mask=C.layers.mask&5;const Ee=$.parent,Se=C.cameras;L(C,Ee);for(let Fe=0;Fe<Se.length;Fe++)L(Se[Fe],Ee);Se.length===2?ne(C,P,x):C.projectionMatrix.copy(P.projectionMatrix),fe($,C,Ee)};function fe($,oe,te){te===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(te.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Vc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(C)},this.getCameraTexture=function($){return m[$]};let Le=null;function st($,oe){if(u=oe.getViewerPose(c||a),g=oe,u!==null){const te=u.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let Ee=!1;te.length!==C.cameras.length&&(C.cameras.length=0,Ee=!0);for(let He=0;He<te.length;He++){const D=te[He];let Ve=null;if(h!==null)Ve=h.getViewport(D);else{const Xe=f.getViewSubImage(d,D);Ve=Xe.viewport,He===0&&(e.setRenderTargetTextures(E,Xe.colorTexture,Xe.depthStencilTexture),e.setRenderTarget(E))}let ye=M[He];ye===void 0&&(ye=new Bn,ye.layers.enable(He),ye.viewport=new Lt,M[He]=ye),ye.matrix.fromArray(D.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(D.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),He===0&&(C.matrix.copy(ye.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ee===!0&&C.cameras.push(ye)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&f){const He=f.getDepthInformation(te[0]);He&&He.isValid&&He.texture&&_.init(He,i.renderState)}if(Se&&Se.includes("camera-access")&&(e.state.unbindTexture(),f))for(let He=0;He<te.length;He++){const D=te[He].camera;if(D){let Ve=m[D];Ve||(Ve=new vd,m[D]=Ve);const ye=f.getCameraImage(D);Ve.sourceTexture=ye}}}for(let te=0;te<v.length;te++){const Ee=A[te],Se=v[te];Ee!==null&&Se!==void 0&&Se.update(Ee,oe,c||a)}Le&&Le($,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}const ze=new dd;ze.setAnimationLoop(st),this.setAnimationLoop=function($){Le=$},this.dispose=function(){}}}const xr=new Ti,Wx=new Ut;function Xx(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ad(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),E=T.envMap,v=T.envMapRotation;E&&(m.envMap.value=E,xr.copy(v),xr.x*=-1,xr.y*=-1,xr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),m.envMapRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(xr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Yx(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const v=E.program;n.uniformBlockBinding(T,v)}function c(T,E){let v=i[T.id];v===void 0&&(g(T),v=u(T),i[T.id]=v,T.addEventListener("dispose",m));const A=E.program;n.updateUBOMapping(T,A);const w=e.render.frame;s[T.id]!==w&&(d(T),s[T.id]=w)}function u(T){const E=f();T.__bindingPointIndex=E;const v=r.createBuffer(),A=T.__size,w=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,v),v}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=i[T.id],v=T.uniforms,A=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let w=0,b=v.length;w<b;w++){const P=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,M=P.length;x<M;x++){const C=P[x];if(h(C,w,x,A)===!0){const U=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let q=0;q<z.length;q++){const G=z[q],Y=_(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,U+k,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(T,E,v,A){const w=T.value,b=E+"_"+v;if(A[b]===void 0)return typeof w=="number"||typeof w=="boolean"?A[b]=w:A[b]=w.clone(),!0;{const P=A[b];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return A[b]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(T){const E=T.uniforms;let v=0;const A=16;for(let b=0,P=E.length;b<P;b++){const x=Array.isArray(E[b])?E[b]:[E[b]];for(let M=0,C=x.length;M<C;M++){const U=x[M],z=Array.isArray(U.value)?U.value:[U.value];for(let k=0,q=z.length;k<q;k++){const G=z[k],Y=_(G),H=v%A,ne=H%Y.boundary,L=H+ne;v+=ne,L!==0&&A-L<Y.storage&&(v+=A-L),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=Y.storage}}}const w=v%A;return w>0&&(v+=A-w),T.__size=v,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function p(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class rh{constructor(e={}){const{canvas:t=Pm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=jn;let w=0,b=0,P=null,x=-1,M=null;const C=new Lt,U=new Lt;let z=null;const k=new lt(0);let q=0,G=t.width,Y=t.height,H=1,ne=null,L=null;const fe=new Lt(0,0,G,Y),Le=new Lt(0,0,G,Y);let st=!1;const ze=new Tu;let $=!1,oe=!1;const te=new Ut,Ee=new V,Se=new Lt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function He(){return P===null?H:1}let D=n;function Ve(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mu}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",ee,!1),D===null){const N="webgl2";if(D=Ve(N,y),D===null)throw Ve(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ye,Xe,O,Qe,ge,Ge,qe,dt,R,S,B,Z,j,K,ve,se,Ae,he,re,ue,Ie,we,ce,ke;function I(){ye=new iv(D),ye.init(),we=new zx(D,ye),Xe=new Z0(D,ye,e,we),O=new Ox(D,ye),Xe.reversedDepthBuffer&&d&&O.buffers.depth.setReversed(!0),Qe=new av(D),ge=new Tx,Ge=new Bx(D,ye,O,ge,Xe,we,Qe),qe=new J0(v),dt=new nv(v),R=new h_(D),ce=new $0(D,R),S=new rv(D,R,Qe,ce),B=new lv(D,S,R,Qe),re=new ov(D,Xe,Ge),se=new j0(ge),Z=new Ex(v,qe,dt,ye,Xe,ce,se),j=new Xx(v,ge),K=new Ax,ve=new Lx(ye),he=new q0(v,qe,dt,O,B,h,l),Ae=new Nx(v,B,Xe),ke=new Yx(D,Qe,Xe,O),ue=new K0(D,ye,Qe),Ie=new sv(D,ye,Qe),Qe.programs=Z.programs,v.capabilities=Xe,v.extensions=ye,v.properties=ge,v.renderLists=K,v.shadowMap=Ae,v.state=O,v.info=Qe}I();const ie=new Gx(v,D);this.xr=ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=ye.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ye.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(G,Y,!1))},this.getSize=function(y){return y.set(G,Y)},this.setSize=function(y,N,W=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,Y=N,t.width=Math.floor(y*H),t.height=Math.floor(N*H),W===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(G*H,Y*H).floor()},this.setDrawingBufferSize=function(y,N,W){G=y,Y=N,H=W,t.width=Math.floor(y*W),t.height=Math.floor(N*W),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(fe)},this.setViewport=function(y,N,W,X){y.isVector4?fe.set(y.x,y.y,y.z,y.w):fe.set(y,N,W,X),O.viewport(C.copy(fe).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(Le)},this.setScissor=function(y,N,W,X){y.isVector4?Le.set(y.x,y.y,y.z,y.w):Le.set(y,N,W,X),O.scissor(U.copy(Le).multiplyScalar(H).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(y){O.setScissorTest(st=y)},this.setOpaqueSort=function(y){ne=y},this.setTransparentSort=function(y){L=y},this.getClearColor=function(y){return y.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,W=!0){let X=0;if(y){let F=!1;if(P!==null){const Q=P.texture.format;F=Q===yu||Q===Su||Q===Mu}if(F){const Q=P.texture.type,le=Q===Ei||Q===kr||Q===xa||Q===Ma||Q===vu||Q===xu,Te=he.getClearColor(),xe=he.getClearAlpha(),Ue=Te.r,Pe=Te.g,Ce=Te.b;le?(g[0]=Ue,g[1]=Pe,g[2]=Ce,g[3]=xe,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ue,_[1]=Pe,_[2]=Ce,_[3]=xe,D.clearBufferiv(D.COLOR,0,_))}else X|=D.COLOR_BUFFER_BIT}N&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),he.dispose(),K.dispose(),ve.dispose(),ge.dispose(),qe.dispose(),dt.dispose(),B.dispose(),ce.dispose(),ke.dispose(),Z.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ye),ie.removeEventListener("sessionend",de),Oe.stop()};function ae(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=Qe.autoReset,N=Ae.enabled,W=Ae.autoUpdate,X=Ae.needsUpdate,F=Ae.type;I(),Qe.autoReset=y,Ae.enabled=N,Ae.autoUpdate=W,Ae.needsUpdate=X,Ae.type=F}function ee(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function J(y){const N=y.target;N.removeEventListener("dispose",J),Me(N)}function Me(y){Ne(y),ge.remove(y)}function Ne(y){const N=ge.get(y).programs;N!==void 0&&(N.forEach(function(W){Z.releaseProgram(W)}),y.isShaderMaterial&&Z.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,W,X,F,Q){N===null&&(N=Fe);const le=F.isMesh&&F.matrixWorld.determinant()<0,Te=mt(y,N,W,X,F);O.setMaterial(X,le);let xe=W.index,Ue=1;if(X.wireframe===!0){if(xe=S.getWireframeAttribute(W),xe===void 0)return;Ue=2}const Pe=W.drawRange,Ce=W.attributes.position;let $e=Pe.start*Ue,it=(Pe.start+Pe.count)*Ue;Q!==null&&($e=Math.max($e,Q.start*Ue),it=Math.min(it,(Q.start+Q.count)*Ue)),xe!==null?($e=Math.max($e,0),it=Math.min(it,xe.count)):Ce!=null&&($e=Math.max($e,0),it=Math.min(it,Ce.count));const Dt=it-$e;if(Dt<0||Dt===1/0)return;ce.setup(F,X,Te,W,xe);let Tt,vt=ue;if(xe!==null&&(Tt=R.get(xe),vt=Ie,vt.setIndex(Tt)),F.isMesh)X.wireframe===!0?(O.setLineWidth(X.wireframeLinewidth*He()),vt.setMode(D.LINES)):vt.setMode(D.TRIANGLES);else if(F.isLine){let Be=X.linewidth;Be===void 0&&(Be=1),O.setLineWidth(Be*He()),F.isLineSegments?vt.setMode(D.LINES):F.isLineLoop?vt.setMode(D.LINE_LOOP):vt.setMode(D.LINE_STRIP)}else F.isPoints?vt.setMode(D.POINTS):F.isSprite&&vt.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)vs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))vt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Be=F._multiDrawStarts,wt=F._multiDrawCounts,ut=F._multiDrawCount,Dn=xe?R.get(xe).bytesPerElement:1,qr=ge.get(X).currentProgram.getUniforms();for(let Ln=0;Ln<ut;Ln++)qr.setValue(D,"_gl_DrawID",Ln),vt.render(Be[Ln]/Dn,wt[Ln])}else if(F.isInstancedMesh)vt.renderInstances($e,Dt,F.count);else if(W.isInstancedBufferGeometry){const Be=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,wt=Math.min(W.instanceCount,Be);vt.renderInstances($e,Dt,wt)}else vt.render($e,Dt)};function ct(y,N,W){y.transparent===!0&&y.side===Ui&&y.forceSinglePass===!1?(y.side=En,y.needsUpdate=!0,Ft(y,N,W),y.side=or,y.needsUpdate=!0,Ft(y,N,W),y.side=Ui):Ft(y,N,W)}this.compile=function(y,N,W=null){W===null&&(W=y),p=ve.get(W),p.init(N),E.push(p),W.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),y!==W&&y.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const X=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const Q=F.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const Te=Q[le];ct(Te,W,F),X.add(Te)}else ct(Q,W,F),X.add(Q)}),p=E.pop(),X},this.compileAsync=function(y,N,W=null){const X=this.compile(y,N,W);return new Promise(F=>{function Q(){if(X.forEach(function(le){ge.get(le).currentProgram.isReady()&&X.delete(le)}),X.size===0){F(y);return}setTimeout(Q,10)}ye.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let _e=null;function Re(y){_e&&_e(y)}function Ye(){Oe.stop()}function de(){Oe.start()}const Oe=new dd;Oe.setAnimationLoop(Re),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(y){_e=y,ie.setAnimationLoop(y),y===null?Oe.stop():Oe.start()},ie.addEventListener("sessionstart",Ye),ie.addEventListener("sessionend",de),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(N),N=ie.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,N,P),p=ve.get(y,E.length),p.init(N),E.push(p),te.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ze.setFromProjectionMatrix(te,vi,N.reversedDepth),oe=this.localClippingEnabled,$=se.init(this.clippingPlanes,oe),m=K.get(y,T.length),m.init(),T.push(m),ie.enabled===!0&&ie.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&De(Q,N,-1/0,v.sortObjects)}De(y,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ne,L),nt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,nt&&he.addToRenderList(m,y),this.info.render.frame++,$===!0&&se.beginShadows();const W=p.state.shadowsArray;Ae.render(W,y,N),$===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const Q=N.cameras;if(F.length>0)for(let le=0,Te=Q.length;le<Te;le++){const xe=Q[le];Nt(X,F,y,xe)}nt&&he.render(y);for(let le=0,Te=Q.length;le<Te;le++){const xe=Q[le];We(m,y,xe,xe.viewport)}}else F.length>0&&Nt(X,F,y,N),nt&&he.render(y),We(m,y,N);P!==null&&b===0&&(Ge.updateMultisampleRenderTarget(P),Ge.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(v,y,N),ce.resetDefaultState(),x=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],$===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function De(y,N,W,X){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ze.intersectsSprite(y)){X&&Se.setFromMatrixPosition(y.matrixWorld).applyMatrix4(te);const le=B.update(y),Te=y.material;Te.visible&&m.push(y,le,Te,W,Se.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ze.intersectsObject(y))){const le=B.update(y),Te=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Se.copy(y.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Se.copy(le.boundingSphere.center)),Se.applyMatrix4(y.matrixWorld).applyMatrix4(te)),Array.isArray(Te)){const xe=le.groups;for(let Ue=0,Pe=xe.length;Ue<Pe;Ue++){const Ce=xe[Ue],$e=Te[Ce.materialIndex];$e&&$e.visible&&m.push(y,le,$e,W,Se.z,Ce)}}else Te.visible&&m.push(y,le,Te,W,Se.z,null)}}const Q=y.children;for(let le=0,Te=Q.length;le<Te;le++)De(Q[le],N,W,X)}function We(y,N,W,X){const F=y.opaque,Q=y.transmissive,le=y.transparent;p.setupLightsView(W),$===!0&&se.setGlobalState(v.clippingPlanes,W),X&&O.viewport(C.copy(X)),F.length>0&&Ze(F,N,W),Q.length>0&&Ze(Q,N,W),le.length>0&&Ze(le,N,W),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Nt(y,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Hr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?La:Ei,minFilter:Pr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const Q=p.state.transmissionRenderTarget[X.id],le=X.viewport||C;Q.setSize(le.z*v.transmissionResolutionScale,le.w*v.transmissionResolutionScale);const Te=v.getRenderTarget(),xe=v.getActiveCubeFace(),Ue=v.getActiveMipmapLevel();v.setRenderTarget(Q),v.getClearColor(k),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),nt&&he.render(W);const Pe=v.toneMapping;v.toneMapping=ir;const Ce=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),$===!0&&se.setGlobalState(v.clippingPlanes,X),Ze(y,W,X),Ge.updateMultisampleRenderTarget(Q),Ge.updateRenderTargetMipmap(Q),ye.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let it=0,Dt=N.length;it<Dt;it++){const Tt=N[it],vt=Tt.object,Be=Tt.geometry,wt=Tt.material,ut=Tt.group;if(wt.side===Ui&&vt.layers.test(X.layers)){const Dn=wt.side;wt.side=En,wt.needsUpdate=!0,bt(vt,W,X,Be,wt,ut),wt.side=Dn,wt.needsUpdate=!0,$e=!0}}$e===!0&&(Ge.updateMultisampleRenderTarget(Q),Ge.updateRenderTargetMipmap(Q))}v.setRenderTarget(Te,xe,Ue),v.setClearColor(k,q),Ce!==void 0&&(X.viewport=Ce),v.toneMapping=Pe}function Ze(y,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let F=0,Q=y.length;F<Q;F++){const le=y[F],Te=le.object,xe=le.geometry,Ue=le.group;let Pe=le.material;Pe.allowOverride===!0&&X!==null&&(Pe=X),Te.layers.test(W.layers)&&bt(Te,N,W,xe,Pe,Ue)}}function bt(y,N,W,X,F,Q){y.onBeforeRender(v,N,W,X,F,Q),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(v,N,W,X,y,Q),F.transparent===!0&&F.side===Ui&&F.forceSinglePass===!1?(F.side=En,F.needsUpdate=!0,v.renderBufferDirect(W,N,X,F,y,Q),F.side=or,F.needsUpdate=!0,v.renderBufferDirect(W,N,X,F,y,Q),F.side=Ui):v.renderBufferDirect(W,N,X,F,y,Q),y.onAfterRender(v,N,W,X,F,Q)}function Ft(y,N,W){N.isScene!==!0&&(N=Fe);const X=ge.get(y),F=p.state.lights,Q=p.state.shadowsArray,le=F.state.version,Te=Z.getParameters(y,F.state,Q,N,W),xe=Z.getProgramCacheKey(Te);let Ue=X.programs;X.environment=y.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(y.isMeshStandardMaterial?dt:qe).get(y.envMap||X.environment),X.envMapRotation=X.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Ue===void 0&&(y.addEventListener("dispose",J),Ue=new Map,X.programs=Ue);let Pe=Ue.get(xe);if(Pe!==void 0){if(X.currentProgram===Pe&&X.lightsStateVersion===le)return gt(y,Te),Pe}else Te.uniforms=Z.getUniforms(y),y.onBeforeCompile(Te,v),Pe=Z.acquireProgram(Te,xe),Ue.set(xe,Pe),X.uniforms=Te.uniforms;const Ce=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ce.clippingPlanes=se.uniform),gt(y,Te),X.needsLights=Et(y),X.lightsStateVersion=le,X.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=Pe,X.uniformsList=null,Pe}function yt(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Ao.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function gt(y,N){const W=ge.get(y);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function mt(y,N,W,X,F){N.isScene!==!0&&(N=Fe),Ge.resetTextureUnits();const Q=N.fog,le=X.isMeshStandardMaterial?N.environment:null,Te=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Cs,xe=(X.isMeshStandardMaterial?dt:qe).get(X.envMap||le),Ue=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ce=!!W.morphAttributes.position,$e=!!W.morphAttributes.normal,it=!!W.morphAttributes.color;let Dt=ir;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Dt=v.toneMapping);const Tt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,vt=Tt!==void 0?Tt.length:0,Be=ge.get(X),wt=p.state.lights;if($===!0&&(oe===!0||y!==M)){const fn=y===M&&X.id===x;se.setState(X,y,fn)}let ut=!1;X.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==wt.state.version||Be.outputColorSpace!==Te||F.isBatchedMesh&&Be.batching===!1||!F.isBatchedMesh&&Be.batching===!0||F.isBatchedMesh&&Be.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Be.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Be.instancing===!1||!F.isInstancedMesh&&Be.instancing===!0||F.isSkinnedMesh&&Be.skinning===!1||!F.isSkinnedMesh&&Be.skinning===!0||F.isInstancedMesh&&Be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Be.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Be.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Be.instancingMorph===!1&&F.morphTexture!==null||Be.envMap!==xe||X.fog===!0&&Be.fog!==Q||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==se.numPlanes||Be.numIntersection!==se.numIntersection)||Be.vertexAlphas!==Ue||Be.vertexTangents!==Pe||Be.morphTargets!==Ce||Be.morphNormals!==$e||Be.morphColors!==it||Be.toneMapping!==Dt||Be.morphTargetsCount!==vt)&&(ut=!0):(ut=!0,Be.__version=X.version);let Dn=Be.currentProgram;ut===!0&&(Dn=Ft(X,N,F));let qr=!1,Ln=!1,Vs=!1;const Rt=Dn.getUniforms(),qn=Be.uniforms;if(O.useProgram(Dn.program)&&(qr=!0,Ln=!0,Vs=!0),X.id!==x&&(x=X.id,Ln=!0),qr||M!==y){O.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Rt.setValue(D,"projectionMatrix",y.projectionMatrix),Rt.setValue(D,"viewMatrix",y.matrixWorldInverse);const Mn=Rt.map.cameraPosition;Mn!==void 0&&Mn.setValue(D,Ee.setFromMatrixPosition(y.matrixWorld)),Xe.logarithmicDepthBuffer&&Rt.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Rt.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Ln=!0,Vs=!0)}if(F.isSkinnedMesh){Rt.setOptional(D,F,"bindMatrix"),Rt.setOptional(D,F,"bindMatrixInverse");const fn=F.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Rt.setValue(D,"boneTexture",fn.boneTexture,Ge))}F.isBatchedMesh&&(Rt.setOptional(D,F,"batchingTexture"),Rt.setValue(D,"batchingTexture",F._matricesTexture,Ge),Rt.setOptional(D,F,"batchingIdTexture"),Rt.setValue(D,"batchingIdTexture",F._indirectTexture,Ge),Rt.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&Rt.setValue(D,"batchingColorTexture",F._colorsTexture,Ge));const $n=W.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&re.update(F,W,Dn),(Ln||Be.receiveShadow!==F.receiveShadow)&&(Be.receiveShadow=F.receiveShadow,Rt.setValue(D,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(qn.envMap.value=xe,qn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(qn.envMapIntensity.value=N.environmentIntensity),Ln&&(Rt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&Pn(qn,Vs),Q&&X.fog===!0&&j.refreshFogUniforms(qn,Q),j.refreshMaterialUniforms(qn,X,H,Y,p.state.transmissionRenderTarget[y.id]),Ao.upload(D,yt(Be),qn,Ge)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ao.upload(D,yt(Be),qn,Ge),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Rt.setValue(D,"center",F.center),Rt.setValue(D,"modelViewMatrix",F.modelViewMatrix),Rt.setValue(D,"normalMatrix",F.normalMatrix),Rt.setValue(D,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const fn=X.uniformsGroups;for(let Mn=0,ll=fn.length;Mn<ll;Mn++){const dr=fn[Mn];ke.update(dr,Dn),ke.bind(dr,Dn)}}return Dn}function Pn(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Et(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,N,W){const X=ge.get(y);X.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ge.get(y.texture).__webglTexture=N,ge.get(y.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const W=ge.get(y);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0};const un=D.createFramebuffer();this.setRenderTarget=function(y,N=0,W=0){P=y,w=N,b=W;let X=!0,F=null,Q=!1,le=!1;if(y){const xe=ge.get(y);if(xe.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(xe.__webglFramebuffer===void 0)Ge.setupRenderTarget(y);else if(xe.__hasExternalTextures)Ge.rebindTextures(y,ge.get(y.texture).__webglTexture,ge.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ce=y.depthTexture;if(xe.__boundDepthTexture!==Ce){if(Ce!==null&&ge.has(Ce)&&(y.width!==Ce.image.width||y.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(y)}}const Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(le=!0);const Pe=ge.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[N])?F=Pe[N][W]:F=Pe[N],Q=!0):y.samples>0&&Ge.useMultisampledRTT(y)===!1?F=ge.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?F=Pe[W]:F=Pe,C.copy(y.viewport),U.copy(y.scissor),z=y.scissorTest}else C.copy(fe).multiplyScalar(H).floor(),U.copy(Le).multiplyScalar(H).floor(),z=st;if(W!==0&&(F=un),O.bindFramebuffer(D.FRAMEBUFFER,F)&&X&&O.drawBuffers(y,F),O.viewport(C),O.scissor(U),O.setScissorTest(z),Q){const xe=ge.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,W)}else if(le){const xe=N;for(let Ue=0;Ue<y.textures.length;Ue++){const Pe=ge.get(y.textures[Ue]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ue,Pe.__webglTexture,W,xe)}}else if(y!==null&&W!==0){const xe=ge.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xe.__webglTexture,W)}x=-1},this.readRenderTargetPixels=function(y,N,W,X,F,Q,le,Te=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ge.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&le!==void 0&&(xe=xe[le]),xe){O.bindFramebuffer(D.FRAMEBUFFER,xe);try{const Ue=y.textures[Te],Pe=Ue.format,Ce=Ue.type;if(!Xe.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-X&&W>=0&&W<=y.height-F&&(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Te),D.readPixels(N,W,X,F,we.convert(Pe),we.convert(Ce),Q))}finally{const Ue=P!==null?ge.get(P).__webglFramebuffer:null;O.bindFramebuffer(D.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(y,N,W,X,F,Q,le,Te=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ge.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&le!==void 0&&(xe=xe[le]),xe)if(N>=0&&N<=y.width-X&&W>=0&&W<=y.height-F){O.bindFramebuffer(D.FRAMEBUFFER,xe);const Ue=y.textures[Te],Pe=Ue.format,Ce=Ue.type;if(!Xe.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,$e),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Te),D.readPixels(N,W,X,F,we.convert(Pe),we.convert(Ce),0);const it=P!==null?ge.get(P).__webglFramebuffer:null;O.bindFramebuffer(D.FRAMEBUFFER,it);const Dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Dm(D,Dt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,$e),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer($e),D.deleteSync(Dt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,W=0){const X=Math.pow(2,-W),F=Math.floor(y.image.width*X),Q=Math.floor(y.image.height*X),le=N!==null?N.x:0,Te=N!==null?N.y:0;Ge.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,le,Te,F,Q),O.unbindTexture()};const Yn=D.createFramebuffer(),Gt=D.createFramebuffer();this.copyTextureToTexture=function(y,N,W=null,X=null,F=0,Q=null){Q===null&&(F!==0?(vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=F,F=0):Q=0);let le,Te,xe,Ue,Pe,Ce,$e,it,Dt;const Tt=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(W!==null)le=W.max.x-W.min.x,Te=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,Ue=W.min.x,Pe=W.min.y,Ce=W.isBox3?W.min.z:0;else{const $n=Math.pow(2,-F);le=Math.floor(Tt.width*$n),Te=Math.floor(Tt.height*$n),y.isDataArrayTexture?xe=Tt.depth:y.isData3DTexture?xe=Math.floor(Tt.depth*$n):xe=1,Ue=0,Pe=0,Ce=0}X!==null?($e=X.x,it=X.y,Dt=X.z):($e=0,it=0,Dt=0);const vt=we.convert(N.format),Be=we.convert(N.type);let wt;N.isData3DTexture?(Ge.setTexture3D(N,0),wt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ge.setTexture2DArray(N,0),wt=D.TEXTURE_2D_ARRAY):(Ge.setTexture2D(N,0),wt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const ut=D.getParameter(D.UNPACK_ROW_LENGTH),Dn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),qr=D.getParameter(D.UNPACK_SKIP_PIXELS),Ln=D.getParameter(D.UNPACK_SKIP_ROWS),Vs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ue),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce);const Rt=y.isDataArrayTexture||y.isData3DTexture,qn=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const $n=ge.get(y),fn=ge.get(N),Mn=ge.get($n.__renderTarget),ll=ge.get(fn.__renderTarget);O.bindFramebuffer(D.READ_FRAMEBUFFER,Mn.__webglFramebuffer),O.bindFramebuffer(D.DRAW_FRAMEBUFFER,ll.__webglFramebuffer);for(let dr=0;dr<xe;dr++)Rt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.get(y).__webglTexture,F,Ce+dr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.get(N).__webglTexture,Q,Dt+dr)),D.blitFramebuffer(Ue,Pe,le,Te,$e,it,le,Te,D.DEPTH_BUFFER_BIT,D.NEAREST);O.bindFramebuffer(D.READ_FRAMEBUFFER,null),O.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||y.isRenderTargetTexture||ge.has(y)){const $n=ge.get(y),fn=ge.get(N);O.bindFramebuffer(D.READ_FRAMEBUFFER,Yn),O.bindFramebuffer(D.DRAW_FRAMEBUFFER,Gt);for(let Mn=0;Mn<xe;Mn++)Rt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$n.__webglTexture,F,Ce+Mn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$n.__webglTexture,F),qn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fn.__webglTexture,Q,Dt+Mn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fn.__webglTexture,Q),F!==0?D.blitFramebuffer(Ue,Pe,le,Te,$e,it,le,Te,D.COLOR_BUFFER_BIT,D.NEAREST):qn?D.copyTexSubImage3D(wt,Q,$e,it,Dt+Mn,Ue,Pe,le,Te):D.copyTexSubImage2D(wt,Q,$e,it,Ue,Pe,le,Te);O.bindFramebuffer(D.READ_FRAMEBUFFER,null),O.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else qn?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(wt,Q,$e,it,Dt,le,Te,xe,vt,Be,Tt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(wt,Q,$e,it,Dt,le,Te,xe,vt,Tt.data):D.texSubImage3D(wt,Q,$e,it,Dt,le,Te,xe,vt,Be,Tt):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Q,$e,it,le,Te,vt,Be,Tt.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Q,$e,it,Tt.width,Tt.height,vt,Tt.data):D.texSubImage2D(D.TEXTURE_2D,Q,$e,it,le,Te,vt,Be,Tt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Dn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ln),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Vs),Q===0&&N.generateMipmaps&&D.generateMipmap(wt),O.unbindTexture()},this.copyTextureToTexture3D=function(y,N,W=null,X=null,F=0){return vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,W,X,F)},this.initRenderTarget=function(y){ge.get(y).__webglFramebuffer===void 0&&Ge.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ge.setTextureCube(y,0):y.isData3DTexture?Ge.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ge.setTexture2DArray(y,0):Ge.setTexture2D(y,0),O.unbindTexture()},this.resetState=function(){w=0,b=0,P=null,O.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}function Li(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function xd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ds={duration:.5,overwrite:!1,delay:0},Cu,tn,At,ei=1e8,Mt=1/ei,Wc=Math.PI*2,qx=Wc/4,$x=0,Md=Math.sqrt,Kx=Math.cos,Zx=Math.sin,jt=function(e){return typeof e=="string"},It=function(e){return typeof e=="function"},ki=function(e){return typeof e=="number"},Pu=function(e){return typeof e>"u"},bi=function(e){return typeof e=="object"},bn=function(e){return e!==!1},Du=function(){return typeof window<"u"},oo=function(e){return It(e)||jt(e)},Sd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,Xc=/(?:-?\.?\d|\.)+/gi,yd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ed=/[+-]=-?[.\d]+/,Td=/[^,'"\[\]\s]+/gi,jx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ct,di,Yc,Lu,Wn={},Vo={},bd,Ad=function(e){return(Vo=Ls(e,Wn))&&Cn},Iu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ea=function(e,t){return!t&&console.warn(e)},wd=function(e,t){return e&&(Wn[e]=t)&&Vo&&(Vo[e]=t)||Wn},Ta=function(){return 0},Jx={suppressEvents:!0,isStart:!0,kill:!1},wo={suppressEvents:!0,kill:!1},Qx={suppressEvents:!0},Uu={},rr=[],qc={},Rd,On={},Gl={},sh=30,Ro=[],Nu="",Fu=function(e){var t=e[0],n,i;if(bi(t)||It(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ro.length;i--&&!Ro[i].targetTest(t););n=Ro[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Jd(e[i],n)))||e.splice(i,1);return e},Ir=function(e){return e._gsap||Fu(ti(e))[0]._gsap},Cd=function(e,t,n){return(n=e[t])&&It(n)?e[t]():Pu(n)&&e.getAttribute&&e.getAttribute(t)||n},An=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},Vt=function(e){return Math.round(e*1e7)/1e7||0},Ms=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},eM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Go=function(){var e=rr.length,t=rr.slice(0),n,i;for(qc={},rr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ou=function(e){return!!(e._initted||e._startAt||e.add)},Pd=function(e,t,n,i){rr.length&&!tn&&Go(),e.render(t,n,!!(tn&&t<0&&Ou(e))),rr.length&&!tn&&Go()},Dd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Td).length<2?t:jt(e)?e.trim():e},Ld=function(e){return e},Xn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},tM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ls=function(e,t){for(var n in t)e[n]=t[n];return e},ah=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=bi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Wo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},oa=function(e){var t=e.parent||Ct,n=e.keyframes?tM(cn(e.keyframes)):Xn;if(bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},nM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Id=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},rl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},cr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ur=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},iM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},$c=function(e,t,n,i){return e._startAt&&(tn?e._startAt.revert(wo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},rM=function r(e){return!e||e._ts&&r(e.parent)},oh=function(e){return e._repeat?Is(e._tTime,e=e.duration()+e._rDelay)*e:0},Is=function(e,t){var n=Math.floor(e=Vt(e/t));return e&&n===e?n-1:n},Xo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},sl=function(e){return e._end=Vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},al=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Vt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),sl(e),n._dirty||Ur(n,e)),e},Ud=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Xo(e.rawTime(),t),(!t._dur||Fa(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),Ur(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},_i=function(e,t,n,i){return t.parent&&cr(t),t._start=Vt((ki(n)?n:n||e!==Ct?Zn(e,n,t):e._time)+t._delay),t._end=Vt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Id(e,t,"_first","_last",e._sort?"_start":0),Kc(t)||(e._recent=t),i||Ud(e,t),e._ts<0&&al(e,e._tTime),e},Nd=function(e,t){return(Wn.ScrollTrigger||Iu("scrollTrigger",t))&&Wn.ScrollTrigger.create(t,e)},Fd=function(e,t,n,i,s){if(zu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Rd!==kn.frame)return rr.push(e),e._lazy=[s,i],1},sM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Kc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},aM=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&sM(e)&&!(!e._initted&&Kc(e))||(e._ts<0||e._dp._ts<0)&&!Kc(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Fa(0,e._tDur,t),u=Is(l,o),e._yoyo&&u&1&&(a=1-a),u!==Is(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||tn||i||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&Fd(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&$c(e,t,n,!0),e._onUpdate&&!n&&Vn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Vn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&cr(e,1),!n&&!tn&&(Vn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},oM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Us=function(e,t,n,i){var s=e._repeat,a=Vt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Vt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&al(e,e._tTime=e._tDur*o),e.parent&&sl(e),n||Ur(e.parent,e),e},lh=function(e){return e instanceof vn?Ur(e):Us(e,e._dur)},lM={_start:0,endTime:Ta,totalDuration:Ta},Zn=function r(e,t,n){var i=e.labels,s=e._recent||lM,a=e.duration()>=ei?s.endTime(!1):e._dur,o,l,c;return jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},la=function(e,t,n){var i=ki(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=bn(l.vars.inherit)&&l.parent;a.immediateRender=bn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ht(t[0],a,t[s+1])},hr=function(e,t){return e||e===0?t(e):t},Fa=function(e,t,n){return n<e?e:n>t?t:n},on=function(e,t){return!jt(e)||!(t=jx.exec(e))?"":t[1]},cM=function(e,t,n){return hr(n,function(i){return Fa(e,t,i)})},Zc=[].slice,Od=function(e,t){return e&&bi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&bi(e[0]))&&!e.nodeType&&e!==di},uM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return jt(i)&&!t||Od(i,1)?(s=n).push.apply(s,ti(i)):n.push(i)})||n},ti=function(e,t,n){return At&&!t&&At.selector?At.selector(e):jt(e)&&!n&&(Yc||!Ns())?Zc.call((t||Lu).querySelectorAll(e),0):cn(e)?uM(e,n):Od(e)?Zc.call(e,0):e?[e]:[]},jc=function(e){return e=ti(e)[0]||Ea("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ti(t,n.querySelectorAll?n:n===e?Ea("Invalid scope")||Lu.createElement("div"):e)}},Bd=function(e){return e.sort(function(){return .5-Math.random()})},zd=function(e){if(It(e))return e;var t=bi(e)?e:{each:e},n=Nr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return jt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(d,h,g){var _=(g||t).length,m=a[_],p,T,E,v,A,w,b,P,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,ei])[1],!x){for(b=-ei;b<(b=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],p=l?Math.min(x,_)*u-.5:i%x,T=x===ei?0:l?_*f/x-.5:i/x|0,b=0,P=ei,w=0;w<_;w++)E=w%x-p,v=T-(w/x|0),m[w]=A=c?Math.abs(c==="y"?v:E):Md(E*E+v*v),A>b&&(b=A),A<P&&(P=A);i==="random"&&Bd(m),m.max=b-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=on(t.amount||t.each)||0,n=n&&_<0?Kd(n):n}return _=(m[d]-m.min)/m.max||0,Vt(m.b+(n?n(_):_)*m.v)+m.u}},Jc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Vt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ki(n)?0:on(n))}},kd=function(e,t){var n=cn(e),i,s;return!n&&bi(e)&&(i=n=e.radius||ei,e.values?(e=ti(e.values),(s=!ki(e[0]))&&(i*=i)):e=Jc(e.increment)),hr(t,n?It(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ei,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-o,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-o),d<c&&(c=d,u=f);return u=!i||c<=i?e[u]:a,s||u===a||ki(a)?u:u+on(a)}:Jc(e))},Hd=function(e,t,n,i){return hr(cn(e)?!t:n===!0?!!(n=0):!i,function(){return cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},fM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},hM=function(e,t){return function(n){return e(parseFloat(n))+(t||on(n))}},dM=function(e,t,n){return Gd(e,t,0,1,n)},Vd=function(e,t,n){return hr(n,function(i){return e[~~t(i)]})},pM=function r(e,t,n){var i=t-e;return cn(e)?Vd(e,r(0,e.length),t):hr(n,function(s){return(i+(s-e)%i)%i+e})},mM=function r(e,t,n){var i=t-e,s=i*2;return cn(e)?Vd(e,r(0,e.length-1),t):hr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ba=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?Td:Xc),n+=e.substr(t,i-t)+Hd(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Gd=function(e,t,n,i,s){var a=t-e,o=i-n;return hr(s,function(l){return n+((l-e)/a*o||0)})},_M=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=jt(e),o={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(cn(e)&&!cn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=Ls(cn(e)?[]:{},e));if(!u){for(l in t)Bu.call(o,e,l,"get",t[l]);s=function(g){return Vu(g,o)||(a?e.p:e)}}}return hr(n,s)},ch=function(e,t,n){var i=e.labels,s=ei,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Vn=function(e,t,n){var i=e.vars,s=i[t],a=At,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&rr.length&&Go(),o&&(At=o),u=l?s.apply(c,l):s.call(c),At=a,u},ea=function(e){return cr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!tn),e.progress()<1&&Vn(e,"onInterrupt"),e},ms,Wd=[],Xd=function(e){if(e)if(e=!e.name&&e.default||e,Du()||e.headless){var t=e.name,n=It(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ta,render:Vu,add:Bu,kill:LM,modifier:DM,rawVars:0},a={targetTest:0,get:0,getSetter:Hu,aliases:{},register:0};if(Ns(),e!==i){if(On[t])return;Xn(i,Xn(Wo(e,s),a)),Ls(i.prototype,Ls(s,Wo(e,a))),On[i.prop=t]=i,e.targetTest&&(Ro.push(i),Uu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}wd(t,i),e.register&&e.register(Cn,i,wn)}else Wd.push(e)},xt=255,ta={aqua:[0,xt,xt],lime:[0,xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xt],navy:[0,0,128],white:[xt,xt,xt],olive:[128,128,0],yellow:[xt,xt,0],orange:[xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xt,0,0],pink:[xt,192,203],cyan:[0,xt,xt],transparent:[xt,xt,xt,0]},Wl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*xt+.5|0},Yd=function(e,t,n){var i=e?ki(e)?[e>>16,e>>8&xt,e&xt]:0:ta.black,s,a,o,l,c,u,f,d,h,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ta[e])i=ta[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&xt,i&xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&xt,e&xt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Xc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Wl(l+1/3,s,a),i[1]=Wl(l,s,a),i[2]=Wl(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(yd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Xc)||ta.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/xt,a=i[1]/xt,o=i[2]/xt,f=Math.max(s,a,o),d=Math.min(s,a,o),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(a-o)/h+(a<o?6:0):f===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},qd=function(e){var t=[],n=[],i=-1;return e.split(sr).forEach(function(s){var a=s.match(ps)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},uh=function(e,t,n){var i="",s=(e+i).match(sr),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=Yd(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=qd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(sr,"1").split(ps),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(sr),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},sr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ta)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),gM=/hsl[a]?\(/,$d=function(e){var t=e.join(" "),n;if(sr.lastIndex=0,sr.test(t))return n=gM.test(t),e[1]=uh(e[1],n),e[0]=uh(e[0],n,qd(e[1])),!0},Aa,kn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,d,h,g=function _(m){var p=r()-i,T=m===!0,E,v,A,w;if((p>e||p<0)&&(n+=p-t),i+=p,A=i-n,E=A-a,(E>0||T)&&(w=++f.frame,d=A-f.time*1e3,f.time=A=A/1e3,a+=E+(E>=s?4:s-E),v=1),T||(l=c(_)),v)for(h=0;h<o.length;h++)o[h](A,d,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){bd&&(!Yc&&Du()&&(di=Yc=window,Lu=di.document||{},Wn.gsap=Cn,(di.gsapVersions||(di.gsapVersions=[])).push(Cn.version),Ad(Vo||di.GreenSockGlobals||!di.gsap&&di||{}),Wd.forEach(Xd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Aa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Aa=0,c=Ta},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,T){var E=p?function(v,A,w,b){m(v,A,w,b),f.remove(E)}:m;return f.remove(m),o[T?"unshift":"push"](E),Ns(),E},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&h>=p&&h--},_listeners:o},f}(),Ns=function(){return!Aa&&kn.wake()},ot={},vM=/^[\d.\-M][\d.\-,\s]/,xM=/["']/g,MM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(xM,"").trim():+c,i=l.substr(o+1).trim();return t},SM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},yM=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[MM(t[1])]:SM(e).split(",").map(Dd)):ot._CE&&vM.test(e)?ot._CE("",e):n},Kd=function(e){return function(t){return 1-e(1-t)}},Zd=function r(e,t){for(var n=e._first,i;n;)n instanceof vn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Nr=function(e,t){return e&&(It(e)?e:ot[e]||yM(e))||t},Yr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return An(e,function(o){ot[o]=Wn[o]=s,ot[a=o.toLowerCase()]=n;for(var l in s)ot[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[o+"."+l]=s[l]}),s},jd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Xl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Wc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Zx((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:jd(o);return s=Wc/s,l.config=function(c,u){return r(e,c,u)},l},Yl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:jd(n);return i.config=function(s){return r(e,s)},i};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Yr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;Yr("Elastic",Xl("in"),Xl("out"),Xl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Yr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Yr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Yr("Circ",function(r){return-(Md(1-r*r)-1)});Yr("Sine",function(r){return r===1?1:-Kx(r*qx)+1});Yr("Back",Yl("in"),Yl("out"),Yl());ot.SteppedEase=ot.steps=Wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Mt;return function(o){return((i*Fa(0,a,o)|0)+s)*n}}};Ds.ease=ot["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Nu+=r+","+r+"Params,"});var Jd=function(e,t){this.id=$x++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Cd,this.set=t?t.getSetter:Hu},wa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Us(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),Aa||kn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Us(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ns(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(al(this,n),!s._dp||s.parent||Ud(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&_i(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Mt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Pd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+oh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+oh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Is(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Xo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts,this.totalTime(Fa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),sl(this),iM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ns(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&_i(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Qx);var i=tn;return tn=n,Ou(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),tn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,lh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,lh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Zn(this,n),bn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,bn(i)),this._dur||(this._zTime=-Mt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Mt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=It(n)?n:Ld,o=function(){var c=i.then;i.then=null,It(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){ea(this)},r}();Xn(wa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var vn=function(r){xd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=bn(n.sortChildren),Ct&&_i(n.parent||Ct,Li(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Nd(Li(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return la(0,arguments,this),this},t.from=function(i,s,a){return la(1,arguments,this),this},t.fromTo=function(i,s,a,o){return la(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,oa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ht(i,s,Zn(this,a),1),this},t.call=function(i,s,a){return _i(this,Ht.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ht(i,a,Zn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,oa(a).immediateRender=bn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,oa(o).immediateRender=bn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Vt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,h,g,_,m,p,T,E,v,A,w,b;if(this!==Ct&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,v=this._start,E=this._ts,p=!E,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=Vt(u%m),u===l?(_=this._repeat,d=c):(A=Vt(u/m),_=~~A,_&&_===A&&(d=c,_--),d>c&&(d=c)),A=Is(this._tTime,m),!o&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),w&&_&1&&(d=c-d,b=1),_!==A&&!this._lock){var P=w&&A&1,x=P===(w&&_&1);if(_<A&&(P=!P),o=P?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Vt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Vn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Zd(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=oM(this,Vt(o),Vt(d)),T&&(u-=d-(d=T._start))),this._tTime=u,this._time=d,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!s&&!A&&(Vn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(h=this._first;h;){if(g=h._next,(h._act||d>=h._start)&&h._ts&&T!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,a),d!==this._time||!this._ts&&!p){T=0,g&&(u+=this._zTime=-Mt);break}}h=g}else{h=this._last;for(var M=i<0?i:d;h;){if(g=h._prev,(h._act||M<=h._end)&&h._ts&&T!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(M-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(M-h._start)*h._ts,s,a||tn&&Ou(h)),d!==this._time||!this._ts&&!p){T=0,g&&(u+=this._zTime=M?-Mt:Mt);break}}h=g}}if(T&&!s&&(this.pause(),T.render(d>=o?0:-Mt)._zTime=d>=o?1:-1,this._ts))return this._start=v,sl(this),this.render(i,s,a);this._onUpdate&&!s&&Vn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&cr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Vn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ki(s)||(s=Zn(this,s,i)),!(i instanceof wa)){if(cn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(jt(i))return this.addLabel(i,s);if(It(i))i=Ht.delayedCall(0,i);else return this}return this!==i?_i(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ei);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ht?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return jt(i)?this.removeLabel(i):It(i)?this.killTweensOf(i):(i.parent===this&&rl(this,i),i===this._recent&&(this._recent=this._last),Ur(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Vt(kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Zn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Ht.delayedCall(0,s||Ta,a);return o.data="isPause",this._hasPause=1,_i(this,o,Zn(this,i))},t.removePause=function(i){var s=this._first;for(i=Zn(this,i);s;)s._start===i&&s.data==="isPause"&&cr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ji!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ti(i),l=this._first,c=ki(s),u;l;)l instanceof Ht?eM(l._targets,o)&&(c?(!ji||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Zn(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,g=Ht.to(a,Xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Mt,onStart:function(){if(a.pause(),!h){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Us(g,m,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Xn({startAt:{time:Zn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ch(this,Zn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ch(this,Zn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ur(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ur(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=ei,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,_i(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Us(a,a===Ct&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ct._ts&&(Pd(Ct,Xo(i,Ct)),Rd=kn.frame),kn.frame>=sh){sh+=Gn.autoSleep||120;var s=Ct._first;if((!s||!s._ts)&&Gn.autoSleep&&kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||kn.sleep()}}},e}(wa);Xn(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var EM=function(e,t,n,i,s,a,o){var l=new wn(this._pt,e,t,0,1,rp,null,s),c=0,u=0,f,d,h,g,_,m,p,T;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ba(i)),a&&(T=[n,i],a(T,e,t),n=T[0],i=T[1]),d=n.match(Vl)||[];f=Vl.exec(i);)g=f[0],_=i.substring(c,f.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ms(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},c=Vl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Ed.test(i)||p)&&(l.e=0),this._pt=l,l},Bu=function(e,t,n,i,s,a,o,l,c,u){It(i)&&(i=i(s||0,e,a));var f=e[t],d=n!=="get"?n:It(f)?c?e[t.indexOf("set")||!It(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=It(f)?c?RM:np:ku,g;if(jt(i)&&(~i.indexOf("random(")&&(i=ba(i)),i.charAt(1)==="="&&(g=Ms(d,i)+(on(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Qc)return!isNaN(d*i)&&i!==""?(g=new wn(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?PM:ip,0,h),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&Iu(t,i),EM.call(this,e,t,d,i,h,l||Gn.stringFilter,c))},TM=function(e,t,n,i,s){if(It(e)&&(e=ca(e,s,t,n,i)),!bi(e)||e.style&&e.nodeType||cn(e)||Sd(e))return jt(e)?ca(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=ca(e[o],s,t,n,i);return a},Qd=function(e,t,n,i,s,a){var o,l,c,u;if(On[e]&&(o=new On[e]).init(s,o.rawVars?t[e]:TM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new wn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ms))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ji,Qc,zu=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,d=i.keyframes,h=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,T=p&&p.data==="nested"?p.vars.targets:m,E=e._overwrite==="auto"&&!Cu,v=e.timeline,A,w,b,P,x,M,C,U,z,k,q,G,Y;if(v&&(!d||!s)&&(s="none"),e._ease=Nr(s,Ds.ease),e._yEase=f?Kd(Nr(f===!0?s:f,Ds.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(U=m[0]?Ir(m[0]).harness:0,G=U&&i[U.prop],A=Wo(i,Uu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!h?_.render(-1,!0):_.revert(u&&g?wo:Jx),_._lazy=0),a){if(cr(e._startAt=Ht.set(m,Xn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&bn(l),startAt:null,delay:0,onUpdate:c&&function(){return Vn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn||!o&&!h)&&e._startAt.revert(wo),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),b=Xn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&bn(l),immediateRender:o,stagger:0,parent:p},A),G&&(b[U.prop]=G),cr(e._startAt=Ht.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn?e._startAt.revert(wo):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&bn(l)||l&&!g,w=0;w<m.length;w++){if(x=m[w],C=x._gsap||Fu(m)[w]._gsap,e._ptLookup[w]=k={},qc[C.id]&&rr.length&&Go(),q=T===m?w:T.indexOf(x),U&&(z=new U).init(x,G||A,e,q,T)!==!1&&(e._pt=P=new wn(e._pt,x,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(H){k[H]=P}),z.priority&&(M=1)),!U||G)for(b in A)On[b]&&(z=Qd(b,A,e,q,x,T))?z.priority&&(M=1):k[b]=P=Bu.call(e,x,b,"get",A[b],q,T,0,i.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),E&&e._pt&&(ji=e,Ct.killTweensOf(x,k,e.globalTime(t)),Y=!e.parent,ji=0),e._pt&&l&&(qc[C.id]=1)}M&&sp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&v.render(ei,!0,!0)},bM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Qc=1,e.vars[t]="+=0",zu(e,o),Qc=0,l?Ea(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Ot(n)+on(f.e)),f.b&&(f.b=u.s+on(f.b))},AM=function(e,t){var n=e[0]?Ir(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Ls({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},wM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(cn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ca=function(e,t,n,i,s){return It(e)?e.call(t,n,i,s):jt(e)&&~e.indexOf("random(")?ba(e):e},ep=Nu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",tp={};An(ep+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return tp[r]=1});var Ht=function(r){xd(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:oa(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,T=i.parent||Ct,E=(cn(n)||Sd(n)?ki(n[0]):"length"in i)?[n]:ti(n),v,A,w,b,P,x,M,C;if(o._targets=E.length?Fu(E):Ea("GSAP target "+n+" not found. https://gsap.com",!Gn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,g||d||oo(c)||oo(u)){if(i=o.vars,v=o.timeline=new vn({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:E}),v.kill(),v.parent=v._dp=Li(o),v._start=0,d||oo(c)||oo(u)){if(b=E.length,M=d&&zd(d),bi(d))for(P in d)~ep.indexOf(P)&&(C||(C={}),C[P]=d[P]);for(A=0;A<b;A++)w=Wo(i,tp),w.stagger=0,p&&(w.yoyoEase=p),C&&Ls(w,C),x=E[A],w.duration=+ca(c,Li(o),A,x,E),w.delay=(+ca(u,Li(o),A,x,E)||0)-o._delay,!d&&b===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(x,w,M?M(A,x,E):0),v._ease=ot.none;v.duration()?c=u=0:o.timeline=0}else if(g){oa(Xn(v.vars.defaults,{ease:"none"})),v._ease=Nr(g.ease||i.ease||"none");var U=0,z,k,q;if(cn(g))g.forEach(function(G){return v.to(E,G,">")}),v.duration();else{w={};for(P in g)P==="ease"||P==="easeEach"||wM(P,g[P],w,g.easeEach);for(P in w)for(z=w[P].sort(function(G,Y){return G.t-Y.t}),U=0,A=0;A<z.length;A++)k=z[A],q={ease:k.e,duration:(k.t-(A?z[A-1].t:0))/100*c},q[P]=k.v,v.to(E,q,U),U+=q.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return h===!0&&!Cu&&(ji=Li(o),Ct.killTweensOf(E),ji=0),_i(T,Li(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===Vt(T._time)&&bn(f)&&rM(Li(o))&&T.data!=="nested")&&(o._tTime=-Mt,o.render(Math.max(0,-u)||0)),m&&Nd(Li(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Mt&&!u?l:i<Mt?0:i,d,h,g,_,m,p,T,E,v;if(!c)aM(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(d=Vt(f%_),f===l?(g=this._repeat,d=c):(m=Vt(f/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,d=c-d),m=Is(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(E&&this._yEase&&Zd(E,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(Vt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Fd(this,u?i:d,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(v||this._ease)(d/c),this._from&&(this.ratio=T=1-T),!o&&f&&!s&&!m&&(Vn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(T,h.d),h=h._next;E&&E.render(i<0?i:E._dur*E._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&$c(this,i,s,a),Vn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Vn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&$c(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&cr(this,1),!s&&!(u&&!o)&&(f||o||p)&&(Vn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Aa||kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||zu(this,c),u=this._ease(c/this._dur),bM(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(al(this,0),this.parent||Id(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ea(this):this.scrollTrigger&&this.scrollTrigger.kill(!!tn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ji&&ji.vars.overwrite!==!0)._first||ea(this),this.parent&&a!==this.timeline.totalDuration()&&Us(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ti(i):o,c=this._ptLookup,u=this._pt,f,d,h,g,_,m,p;if((!s||s==="all")&&nM(o,l))return s==="all"&&(this._pt=0),ea(this);for(f=this._op=this._op||[],s!=="all"&&(jt(s)&&(_={},An(s,function(T){return _[T]=1}),s=_),s=AM(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(f[p]=s,g=d,h={}):(h=f[p]=f[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&rl(this,m,"_pt"),delete d[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&ea(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return la(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return la(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Ct.killTweensOf(i,s,a)},e}(wa);Xn(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(r){Ht[r]=function(){var e=new vn,t=Zc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ku=function(e,t,n){return e[t]=n},np=function(e,t,n){return e[t](n)},RM=function(e,t,n,i){return e[t](i.fp,n)},CM=function(e,t,n){return e.setAttribute(t,n)},Hu=function(e,t){return It(e[t])?np:Pu(e[t])&&e.setAttribute?CM:ku},ip=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},PM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},rp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Vu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},DM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},LM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?rl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},IM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},sp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},wn=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||ip,this.d=l||this,this.set=c||ku,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=IM,this.m=n,this.mt=s,this.tween=i},r}();An(Nu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Uu[r]=1});Wn.TweenMax=Wn.TweenLite=Ht;Wn.TimelineLite=Wn.TimelineMax=vn;Ct=new vn({sortChildren:!1,defaults:Ds,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gn.stringFilter=$d;var Fr=[],Co={},UM=[],fh=0,NM=0,ql=function(e){return(Co[e]||UM).map(function(t){return t()})},eu=function(){var e=Date.now(),t=[];e-fh>2&&(ql("matchMediaInit"),Fr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=di.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),ql("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),fh=e,ql("matchMedia"))},ap=function(){function r(t,n){this.selector=n&&jc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=NM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){It(n)&&(s=i,i=n,n=It);var a=this,o=function(){var c=At,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=jc(s)),At=a,f=i.apply(a,arguments),It(f)&&a._r.push(f),At=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===It?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ht&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ht)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Fr.length;a--;)Fr[a].id===this.id&&Fr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),FM=function(){function r(t){this.contexts=[],this.scope=t,At&&At.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){bi(n)||(n={matches:n});var a=new ap(0,s||this.scope),o=a.conditions={},l,c,u;At&&!a.selector&&(a.selector=At.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=di.matchMedia(n[c]),l&&(Fr.indexOf(a)<0&&Fr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(eu):l.addEventListener("change",eu)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Yo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Xd(i)})},timeline:function(e){return new vn(e)},getTweensOf:function(e,t){return Ct.getTweensOf(e,t)},getProperty:function(e,t,n,i){jt(e)&&(e=ti(e)[0]);var s=Ir(e||{}).get,a=n?Ld:Dd;return n==="native"&&(n=""),e&&(t?a((On[t]&&On[t].get||s)(e,t,n,i)):function(o,l,c){return a((On[o]&&On[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ti(e),e.length>1){var i=e.map(function(u){return Cn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=On[t],o=Ir(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;ms._pt=0,f.init(e,n?u+n:u,ms,0,[e]),f.render(1,f),ms._pt&&Vu(1,ms)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Cn.to(e,Xn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Nr(e.ease,Ds.ease)),ah(Ds,e||{})},config:function(e){return ah(Gn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!On[o]&&!Wn[o]&&Ea(t+" effect requires "+o+" plugin.")}),Gl[t]=function(o,l,c){return n(ti(o),Xn(l||{},s),c)},a&&(vn.prototype[t]=function(o,l,c){return this.add(Gl[t](o,bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=Nr(t)},parseEase:function(e,t){return arguments.length?Nr(e,t):ot},getById:function(e){return Ct.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new vn(e),i,s;for(n.smoothChildTiming=bn(e.smoothChildTiming),Ct.remove(n),n._dp=0,n._time=n._tTime=Ct._time,i=Ct._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ht&&i.vars.onComplete===i._targets[0]))&&_i(n,i,i._start-i._delay),i=s;return _i(Ct,n,0),n},context:function(e,t){return e?new ap(e,t):At},matchMedia:function(e){return new FM(e)},matchMediaRefresh:function(){return Fr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||eu()},addEventListener:function(e,t){var n=Co[e]||(Co[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Co[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:pM,wrapYoyo:mM,distribute:zd,random:Hd,snap:kd,normalize:dM,getUnit:on,clamp:cM,splitColor:Yd,toArray:ti,selector:jc,mapRange:Gd,pipe:fM,unitize:hM,interpolate:_M,shuffle:Bd},install:Ad,effects:Gl,ticker:kn,updateRoot:vn.updateRoot,plugins:On,globalTimeline:Ct,core:{PropTween:wn,globals:wd,Tween:Ht,Timeline:vn,Animation:wa,getCache:Ir,_removeLinkedListItem:rl,reverting:function(){return tn},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return Cu=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Yo[r]=Ht[r]});kn.add(vn.updateRoot);ms=Yo.to({},{duration:0});var OM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},BM=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=OM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},$l=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(jt(s)&&(l={},An(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}BM(o,s)}}}},Cn=Yo.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)tn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},$l("roundProps",Jc),$l("modifiers"),$l("snap",kd))||Yo;Ht.version=vn.version=Cn.version="3.13.0";bd=1;Du()&&Ns();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hh,Ji,Ss,Gu,Dr,dh,Wu,zM=function(){return typeof window<"u"},Hi={},Tr=180/Math.PI,ys=Math.PI/180,ls=Math.atan2,ph=1e8,Xu=/([A-Z])/g,kM=/(left|right|width|margin|padding|x)/i,HM=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},tu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},VM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},GM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},WM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},op=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},lp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},XM=function(e,t,n){return e.style[t]=n},YM=function(e,t,n){return e.style.setProperty(t,n)},qM=function(e,t,n){return e._gsap[t]=n},$M=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},KM=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},ZM=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Pt="transform",Rn=Pt+"Origin",jM=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Hi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ii(i,o)}):this.tfm[e]=a.x?a[e]:Ii(i,e),e===Rn&&(this.tfm.zOrigin=a.zOrigin);else return xi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Pt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Rn,t,"")),e=Pt}(s||t)&&this.props.push(e,t,s[e])},cp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},JM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Xu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Wu(),(!s||!s.isStart)&&!n[Pt]&&(cp(n),i.zOrigin&&n[Rn]&&(n[Rn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},up=function(e,t){var n={target:e,props:[],revert:JM,save:jM};return e._gsap||Cn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},fp,nu=function(e,t){var n=Ji.createElementNS?Ji.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ji.createElement(e);return n&&n.style?n:Ji.createElement(e)},ni=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Xu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Fs(t)||t,1)||""},mh="O,Moz,ms,Ms,Webkit".split(","),Fs=function(e,t,n){var i=t||Dr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(mh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?mh[a]:"")+e},iu=function(){zM()&&window.document&&(hh=window,Ji=hh.document,Ss=Ji.documentElement,Dr=nu("div")||{style:{}},nu("div"),Pt=Fs(Pt),Rn=Pt+"Origin",Dr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fp=!!Fs("perspective"),Wu=Cn.core.reverting,Gu=1)},_h=function(e){var t=e.ownerSVGElement,n=nu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ss.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ss.removeChild(n),s},gh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},hp=function(e){var t,n;try{t=e.getBBox()}catch{t=_h(e),n=1}return t&&(t.width||t.height)||n||(t=_h(e)),t&&!t.width&&!t.x&&!t.y?{x:+gh(e,["x","cx","x1"])||0,y:+gh(e,["y","cy","y1"])||0,width:0,height:0}:t},dp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hp(e))},Vr=function(e,t){if(t){var n=e.style,i;t in Hi&&t!==Rn&&(t=Pt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Xu,"-$1").toLowerCase())):n.removeAttribute(t)}},Qi=function(e,t,n,i,s,a){var o=new wn(e._pt,t,n,0,1,a?lp:op);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},vh={deg:1,rad:1,turn:1},QM={grid:1,flex:1},ur=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Dr.style,l=kM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",h=i==="%",g,_,m,p;if(i===a||!s||vh[i]||vh[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&dp(e),(h||a==="%")&&(Hi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Ot(h?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(d?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ji||!_.appendChild)&&(_=Ji.body),m=_._gsap,m&&h&&m.width&&l&&m.time===kn.time&&!m.uncache)return Ot(s/m.width*f);if(h&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=f+i,g=e[u],T?e.style[t]=T:Vr(e,t)}else(h||a==="%")&&!QM[ni(_,"display")]&&(o.position=ni(e,"position")),_===e&&(o.position="static"),_.appendChild(Dr),g=Dr[u],_.removeChild(Dr),o.position="absolute";return l&&h&&(m=Ir(_),m.time=kn.time,m.width=_[u]),Ot(d?g*s/f:g&&s?f/g*s:0)},Ii=function(e,t,n,i){var s;return Gu||iu(),t in xi&&t!=="transform"&&(t=xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Hi[t]&&t!=="transform"?(s=Ca(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:$o(ni(e,Rn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=qo[t]&&qo[t](e,t,n)||ni(e,t)||Cd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ur(e,t,s,n)+n:s},eS=function(e,t,n,i){if(!n||n==="none"){var s=Fs(t,e,1),a=s&&ni(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ni(e,"borderTopColor"))}var o=new wn(this._pt,e.style,t,0,1,rp),l=0,c=0,u,f,d,h,g,_,m,p,T,E,v,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ni(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=ni(e,t)||i,_?e.style[t]=_:Vr(e,t)),u=[n,i],$d(u),n=u[0],i=u[1],d=n.match(ps)||[],A=i.match(ps)||[],A.length){for(;f=ps.exec(i);)m=f[0],T=i.substring(l,f.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(h=parseFloat(_)||0,v=_.substr((h+"").length),m.charAt(1)==="="&&(m=Ms(h,m)+v),p=parseFloat(m),E=m.substr((p+"").length),l=ps.lastIndex-E.length,E||(E=E||Gn.units[t]||v,l===i.length&&(i+=E,o.e+=E)),v!==E&&(h=ur(e,t,_,E)||0),o._pt={_next:o._pt,p:T||c===1?T:",",s:h,c:p-h,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?lp:op;return Ed.test(i)&&(o.e=0),this._pt=o,o},xh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=xh[n]||n,t[1]=xh[i]||i,t.join(" ")},nS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Hi[o]&&(l=1,o=o==="transformOrigin"?Rn:Pt),Vr(n,o);l&&(Vr(n,Pt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ca(n,1),a.uncache=1,cp(i)))}},qo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new wn(e._pt,t,n,0,0,nS);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ra=[1,0,0,1,0,0],pp={},mp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Mh=function(e){var t=ni(e,Pt);return mp(t)?Ra:t.substr(7).match(yd).map(Ot)},Yu=function(e,t){var n=e._gsap||Ir(e),i=e.style,s=Mh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ra:s):(s===Ra&&!e.offsetParent&&e!==Ss&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ss.appendChild(e)),s=Mh(e),l?i.display=l:Vr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ss.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ru=function(e,t,n,i,s,a){var o=e._gsap,l=s||Yu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,h=l[0],g=l[1],_=l[2],m=l[3],p=l[4],T=l[5],E=t.split(" "),v=parseFloat(E[0])||0,A=parseFloat(E[1])||0,w,b,P,x;n?l!==Ra&&(b=h*m-g*_)&&(P=v*(m/b)+A*(-_/b)+(_*T-m*p)/b,x=v*(-g/b)+A*(h/b)-(h*T-g*p)/b,v=P,A=x):(w=hp(e),v=w.x+(~E[0].indexOf("%")?v/100*w.width:v),A=w.y+(~(E[1]||E[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&o.smooth?(p=v-c,T=A-u,o.xOffset=f+(p*h+T*_)-p,o.yOffset=d+(p*g+T*m)-T):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=A,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Rn]="0px 0px",a&&(Qi(a,o,"xOrigin",c,v),Qi(a,o,"yOrigin",u,A),Qi(a,o,"xOffset",f,o.xOffset),Qi(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+A)},Ca=function(e,t){var n=e._gsap||new Jd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ni(e,Rn)||"0",u,f,d,h,g,_,m,p,T,E,v,A,w,b,P,x,M,C,U,z,k,q,G,Y,H,ne,L,fe,Le,st,ze,$;return u=f=d=_=m=p=T=E=v=0,h=g=1,n.svg=!!(e.getCTM&&dp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pt]!=="none"?l[Pt]:"")),i.scale=i.rotate=i.translate="none"),b=Yu(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),ru(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,w=n.yOrigin||0,b!==Ra&&(C=b[0],U=b[1],z=b[2],k=b[3],u=q=b[4],f=G=b[5],b.length===6?(h=Math.sqrt(C*C+U*U),g=Math.sqrt(k*k+z*z),_=C||U?ls(U,C)*Tr:0,T=z||k?ls(z,k)*Tr+_:0,T&&(g*=Math.abs(Math.cos(T*ys))),n.svg&&(u-=A-(A*C+w*z),f-=w-(A*U+w*k))):($=b[6],st=b[7],L=b[8],fe=b[9],Le=b[10],ze=b[11],u=b[12],f=b[13],d=b[14],P=ls($,Le),m=P*Tr,P&&(x=Math.cos(-P),M=Math.sin(-P),Y=q*x+L*M,H=G*x+fe*M,ne=$*x+Le*M,L=q*-M+L*x,fe=G*-M+fe*x,Le=$*-M+Le*x,ze=st*-M+ze*x,q=Y,G=H,$=ne),P=ls(-z,Le),p=P*Tr,P&&(x=Math.cos(-P),M=Math.sin(-P),Y=C*x-L*M,H=U*x-fe*M,ne=z*x-Le*M,ze=k*M+ze*x,C=Y,U=H,z=ne),P=ls(U,C),_=P*Tr,P&&(x=Math.cos(P),M=Math.sin(P),Y=C*x+U*M,H=q*x+G*M,U=U*x-C*M,G=G*x-q*M,C=Y,q=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=Ot(Math.sqrt(C*C+U*U+z*z)),g=Ot(Math.sqrt(G*G+$*$)),P=ls(q,G),T=Math.abs(P)>2e-4?P*Tr:0,v=ze?1/(ze<0?-ze:ze):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!mp(ni(e,Pt)),Y&&e.setAttribute("transform",Y))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(h*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ot(h),n.scaleY=Ot(g),n.rotation=Ot(_)+o,n.rotationX=Ot(m)+o,n.rotationY=Ot(p)+o,n.skewX=T+o,n.skewY=E+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Rn]=$o(c)),n.xOffset=n.yOffset=0,n.force3D=Gn.force3D,n.renderTransform=n.svg?rS:fp?_p:iS,n.uncache=0,n},$o=function(e){return(e=e.split(" "))[0]+" "+e[1]},Kl=function(e,t,n){var i=on(t);return Ot(parseFloat(t)+parseFloat(ur(e,"x",n+"px",i)))+i},iS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,_p(e,t)},Mr="0deg",Zs="0px",Sr=") ",_p=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,h=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,T=n.target,E=n.zOrigin,v="",A=p==="auto"&&e&&e!==1||p===!0;if(E&&(f!==Mr||u!==Mr)){var w=parseFloat(u)*ys,b=Math.sin(w),P=Math.cos(w),x;w=parseFloat(f)*ys,x=Math.cos(w),a=Kl(T,a,b*x*-E),o=Kl(T,o,-Math.sin(w)*-E),l=Kl(T,l,P*x*-E+E)}m!==Zs&&(v+="perspective("+m+Sr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||a!==Zs||o!==Zs||l!==Zs)&&(v+=l!==Zs||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Sr),c!==Mr&&(v+="rotate("+c+Sr),u!==Mr&&(v+="rotateY("+u+Sr),f!==Mr&&(v+="rotateX("+f+Sr),(d!==Mr||h!==Mr)&&(v+="skew("+d+", "+h+Sr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Sr),T.style[Pt]=v||"translate(0, 0)"},rS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,h=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,T=n.forceCSS,E=parseFloat(a),v=parseFloat(o),A,w,b,P,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ys,c*=ys,A=Math.cos(l)*f,w=Math.sin(l)*f,b=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(u*=ys,x=Math.tan(c-u),x=Math.sqrt(1+x*x),b*=x,P*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),A*=x,w*=x)),A=Ot(A),w=Ot(w),b=Ot(b),P=Ot(P)):(A=f,P=d,w=b=0),(E&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(E=ur(h,"x",a,"px"),v=ur(h,"y",o,"px")),(g||_||m||p)&&(E=Ot(E+g-(g*A+_*b)+m),v=Ot(v+_-(g*w+_*P)+p)),(i||s)&&(x=h.getBBox(),E=Ot(E+i/100*x.width),v=Ot(v+s/100*x.height)),x="matrix("+A+","+w+","+b+","+P+","+E+","+v+")",h.setAttribute("transform",x),T&&(h.style[Pt]=x)},sS=function(e,t,n,i,s){var a=360,o=jt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Tr:1),c=l-i,u=i+c+"deg",f,d;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*ph)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*ph)%a-~~(c/a)*a)),e._pt=d=new wn(e._pt,t,n,i,c,VM),d.e=u,d.u="deg",e._props.push(n),d},Sh=function(e,t){for(var n in t)e[n]=t[n];return e},aS=function(e,t,n){var i=Sh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,d,h,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Pt]=t,o=Ca(n,1),Vr(n,Pt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pt],a[Pt]=t,o=Ca(n,1),a[Pt]=c);for(l in Hi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=on(c),g=on(u),f=h!==g?ur(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new wn(e._pt,o,l,f,d-f,tu),e._pt.u=g||0,e._props.push(l));Sh(o,i)};An("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});qo[e>1?"border"+r:r]=function(o,l,c,u,f){var d,h;if(arguments.length<4)return d=a.map(function(g){return Ii(o,g,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},a.forEach(function(g,_){return h[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,h,f)}});var gp={name:"css",register:iu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,d,h,g,_,m,p,T,E,v,A,w,b,P;Gu||iu(),this.styles=this.styles||up(e),P=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(On[_]&&Qd(_,t,n,i,e,s)))){if(h=typeof u,g=qo[_],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=ba(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",sr.lastIndex=0,sr.test(c)||(m=on(c),p=on(u)),p?m!==p&&(c=ur(e,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],jt(c)&&~c.indexOf("random(")&&(c=ba(c)),on(c+"")||c==="auto"||(c+=Gn.units[_]||on(Ii(e,_))||""),(c+"").charAt(1)==="="&&(c=Ii(e,_))):c=Ii(e,_),d=parseFloat(c),T=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),f=parseFloat(u),_ in xi&&(_==="autoAlpha"&&(d===1&&Ii(e,"visibility")==="hidden"&&f&&(d=0),P.push("visibility",0,o.visibility),Qi(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=xi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in Hi,E){if(this.styles.save(_),h==="string"&&u.substring(0,6)==="var(--"&&(u=ni(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),v||(A=e._gsap,A.renderTransform&&!t.parseTransform||Ca(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,v=this._pt=new wn(this._pt,o,Pt,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new wn(this._pt,A,"scaleY",A.scaleY,(T?Ms(A.scaleY,T+f):f)-A.scaleY||0,tu),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Rn,0,o[Rn]),u=tS(u),A.svg?ru(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&Qi(this,A,"zOrigin",A.zOrigin,p),Qi(this,o,_,$o(c),$o(u)));continue}else if(_==="svgOrigin"){ru(e,u,1,w,0,this);continue}else if(_ in pp){sS(this,A,_,d,T?Ms(d,T+u):u);continue}else if(_==="smoothOrigin"){Qi(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){aS(this,u,e);continue}}else _ in o||(_=Fs(_)||_);if(E||(f||f===0)&&(d||d===0)&&!HM.test(u)&&_ in o)m=(c+"").substr((d+"").length),f||(f=0),p=on(u)||(_ in Gn.units?Gn.units[_]:m),m!==p&&(d=ur(e,_,c,p)),this._pt=new wn(this._pt,E?A:o,_,d,(T?Ms(d,T+f):f)-d,!E&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?WM:tu),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=GM);else if(_ in o)eS.call(this,e,_,c,T?T+u:u);else if(_ in e)this.add(e,_,c||e[_],T?T+u:u,i,s);else if(_!=="parseTransform"){Iu(_,u);continue}E||(_ in o?P.push(_,0,o[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,c||e[_])),a.push(_)}}b&&sp(this)},render:function(e,t){if(t.tween._time||!Wu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ii,aliases:xi,getSetter:function(e,t,n){var i=xi[t];return i&&i.indexOf(",")<0&&(t=i),t in Hi&&t!==Rn&&(e._gsap.x||Ii(e,"x"))?n&&dh===n?t==="scale"?$M:qM:(dh=n||{})&&(t==="scale"?KM:ZM):e.style&&!Pu(e.style[t])?XM:~t.indexOf("-")?YM:Hu(e,t)},core:{_removeProperty:Vr,_getMatrix:Yu}};Cn.utils.checkPrefix=Fs;Cn.core.getStyleSaver=up;(function(r,e,t,n){var i=An(r+","+e+","+t,function(s){Hi[s]=1});An(e,function(s){Gn.units[s]="deg",pp[s]=1}),xi[i[13]]=r+","+e,An(n,function(s){var a=s.split(":");xi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Gn.units[r]="px"});Cn.registerPlugin(gp);var Ki=Cn.registerPlugin(gp)||Cn;Ki.core.Tween;function oS(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function lS(r,e,t){return e&&oS(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jt,Po,Hn,er,tr,Es,vp,br,ua,xp,Oi,li,Mp,Sp=function(){return Jt||typeof window<"u"&&(Jt=window.gsap)&&Jt.registerPlugin&&Jt},yp=1,_s=[],tt=[],yi=[],fa=Date.now,su=function(e,t){return t},cS=function(){var e=ua.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,tt),i.push.apply(i,yi),tt=n,yi=i,su=function(a,o){return t[a](o)}},ar=function(e,t){return~yi.indexOf(e)&&yi[yi.indexOf(e)+1][t]},ha=function(e){return!!~xp.indexOf(e)},dn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},hn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},lo="scrollLeft",co="scrollTop",au=function(){return Oi&&Oi.isPressed||tt.cache++},Ko=function(e,t){var n=function i(s){if(s||s===0){yp&&(Hn.history.scrollRestoration="manual");var a=Oi&&Oi.isPressed;s=i.v=Math.round(s)||(Oi&&Oi.iOS?1:0),e(s),i.cacheID=tt.cache,a&&su("ss",s)}else(t||tt.cache!==i.cacheID||su("ref"))&&(i.cacheID=tt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},xn={s:lo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ko(function(r){return arguments.length?Hn.scrollTo(r,Xt.sc()):Hn.pageXOffset||er[lo]||tr[lo]||Es[lo]||0})},Xt={s:co,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:xn,sc:Ko(function(r){return arguments.length?Hn.scrollTo(xn.sc(),r):Hn.pageYOffset||er[co]||tr[co]||Es[co]||0})},yn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Jt.utils.toArray)(e)[0]||(typeof e=="string"&&Jt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},uS=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},fr=function(e,t){var n=t.s,i=t.sc;ha(e)&&(e=er.scrollingElement||tr);var s=tt.indexOf(e),a=i===Xt.sc?1:2;!~s&&(s=tt.push(e)-1),tt[s+a]||dn(e,"scroll",au);var o=tt[s+a],l=o||(tt[s+a]=Ko(ar(e,n),!0)||(ha(e)?i:Ko(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Jt.getProperty(e,"scrollBehavior")==="smooth"),l},ou=function(e,t,n){var i=e,s=e,a=fa(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=fa();_||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},d=function(g){var _=o,m=s,p=fa();return(g||g===0)&&g!==i&&u(g),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:f,getVelocity:d}},js=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},yh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Ep=function(){ua=Jt.core.globals().ScrollTrigger,ua&&ua.core&&cS()},Tp=function(e){return Jt=e||Sp(),!Po&&Jt&&typeof document<"u"&&document.body&&(Hn=window,er=document,tr=er.documentElement,Es=er.body,xp=[Hn,er,tr,Es],Jt.utils.clamp,Mp=Jt.core.context||function(){},br="onpointerenter"in Es?"pointer":"mouse",vp=Bt.isTouch=Hn.matchMedia&&Hn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Hn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,li=Bt.eventTypes=("ontouchstart"in tr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in tr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return yp=0},500),Ep(),Po=1),Po};xn.op=Xt;tt.cache=0;var Bt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Po||Tp(Jt)||console.warn("Please gsap.registerPlugin(Observer)"),ua||Ep();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,T=n.onDrag,E=n.onPress,v=n.onRelease,A=n.onRight,w=n.onLeft,b=n.onUp,P=n.onDown,x=n.onChangeX,M=n.onChangeY,C=n.onChange,U=n.onToggleX,z=n.onToggleY,k=n.onHover,q=n.onHoverEnd,G=n.onMove,Y=n.ignoreCheck,H=n.isNormalizer,ne=n.onGestureStart,L=n.onGestureEnd,fe=n.onWheel,Le=n.onEnable,st=n.onDisable,ze=n.onClick,$=n.scrollSpeed,oe=n.capture,te=n.allowClicks,Ee=n.lockAxis,Se=n.onLockAxis;this.target=o=yn(o)||tr,this.vars=n,h&&(h=Jt.utils.toArray(h)),i=i||1e-9,s=s||0,g=g||1,$=$||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Hn.getComputedStyle(Es).lineHeight)||22);var Fe,nt,He,D,Ve,ye,Xe,O=this,Qe=0,ge=0,Ge=n.passive||!u&&n.passive!==!1,qe=fr(o,xn),dt=fr(o,Xt),R=qe(),S=dt(),B=~a.indexOf("touch")&&!~a.indexOf("pointer")&&li[0]==="pointerdown",Z=ha(o),j=o.ownerDocument||er,K=[0,0,0],ve=[0,0,0],se=0,Ae=function(){return se=fa()},he=function(Re,Ye){return(O.event=Re)&&h&&uS(Re.target,h)||Ye&&B&&Re.pointerType!=="touch"||Y&&Y(Re,Ye)},re=function(){O._vx.reset(),O._vy.reset(),nt.pause(),f&&f(O)},ue=function(){var Re=O.deltaX=yh(K),Ye=O.deltaY=yh(ve),de=Math.abs(Re)>=i,Oe=Math.abs(Ye)>=i;C&&(de||Oe)&&C(O,Re,Ye,K,ve),de&&(A&&O.deltaX>0&&A(O),w&&O.deltaX<0&&w(O),x&&x(O),U&&O.deltaX<0!=Qe<0&&U(O),Qe=O.deltaX,K[0]=K[1]=K[2]=0),Oe&&(P&&O.deltaY>0&&P(O),b&&O.deltaY<0&&b(O),M&&M(O),z&&O.deltaY<0!=ge<0&&z(O),ge=O.deltaY,ve[0]=ve[1]=ve[2]=0),(D||He)&&(G&&G(O),He&&(m&&He===1&&m(O),T&&T(O),He=0),D=!1),ye&&!(ye=!1)&&Se&&Se(O),Ve&&(fe(O),Ve=!1),Fe=0},Ie=function(Re,Ye,de){K[de]+=Re,ve[de]+=Ye,O._vx.update(Re),O._vy.update(Ye),c?Fe||(Fe=requestAnimationFrame(ue)):ue()},we=function(Re,Ye){Ee&&!Xe&&(O.axis=Xe=Math.abs(Re)>Math.abs(Ye)?"x":"y",ye=!0),Xe!=="y"&&(K[2]+=Re,O._vx.update(Re,!0)),Xe!=="x"&&(ve[2]+=Ye,O._vy.update(Ye,!0)),c?Fe||(Fe=requestAnimationFrame(ue)):ue()},ce=function(Re){if(!he(Re,1)){Re=js(Re,u);var Ye=Re.clientX,de=Re.clientY,Oe=Ye-O.x,De=de-O.y,We=O.isDragging;O.x=Ye,O.y=de,(We||(Oe||De)&&(Math.abs(O.startX-Ye)>=s||Math.abs(O.startY-de)>=s))&&(He=We?2:1,We||(O.isDragging=!0),we(Oe,De))}},ke=O.onPress=function(_e){he(_e,1)||_e&&_e.button||(O.axis=Xe=null,nt.pause(),O.isPressed=!0,_e=js(_e),Qe=ge=0,O.startX=O.x=_e.clientX,O.startY=O.y=_e.clientY,O._vx.reset(),O._vy.reset(),dn(H?o:j,li[1],ce,Ge,!0),O.deltaX=O.deltaY=0,E&&E(O))},I=O.onRelease=function(_e){if(!he(_e,1)){hn(H?o:j,li[1],ce,!0);var Re=!isNaN(O.y-O.startY),Ye=O.isDragging,de=Ye&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),Oe=js(_e);!de&&Re&&(O._vx.reset(),O._vy.reset(),u&&te&&Jt.delayedCall(.08,function(){if(fa()-se>300&&!_e.defaultPrevented){if(_e.target.click)_e.target.click();else if(j.createEvent){var De=j.createEvent("MouseEvents");De.initMouseEvent("click",!0,!0,Hn,1,Oe.screenX,Oe.screenY,Oe.clientX,Oe.clientY,!1,!1,!1,!1,0,null),_e.target.dispatchEvent(De)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,f&&Ye&&!H&&nt.restart(!0),He&&ue(),p&&Ye&&p(O),v&&v(O,de)}},ie=function(Re){return Re.touches&&Re.touches.length>1&&(O.isGesturing=!0)&&ne(Re,O.isDragging)},ae=function(){return(O.isGesturing=!1)||L(O)},pe=function(Re){if(!he(Re)){var Ye=qe(),de=dt();Ie((Ye-R)*$,(de-S)*$,1),R=Ye,S=de,f&&nt.restart(!0)}},ee=function(Re){if(!he(Re)){Re=js(Re,u),fe&&(Ve=!0);var Ye=(Re.deltaMode===1?l:Re.deltaMode===2?Hn.innerHeight:1)*g;Ie(Re.deltaX*Ye,Re.deltaY*Ye,0),f&&!H&&nt.restart(!0)}},J=function(Re){if(!he(Re)){var Ye=Re.clientX,de=Re.clientY,Oe=Ye-O.x,De=de-O.y;O.x=Ye,O.y=de,D=!0,f&&nt.restart(!0),(Oe||De)&&we(Oe,De)}},Me=function(Re){O.event=Re,k(O)},Ne=function(Re){O.event=Re,q(O)},ct=function(Re){return he(Re)||js(Re,u)&&ze(O)};nt=O._dc=Jt.delayedCall(d||.25,re).pause(),O.deltaX=O.deltaY=0,O._vx=ou(0,50,!0),O._vy=ou(0,50,!0),O.scrollX=qe,O.scrollY=dt,O.isDragging=O.isGesturing=O.isPressed=!1,Mp(this),O.enable=function(_e){return O.isEnabled||(dn(Z?j:o,"scroll",au),a.indexOf("scroll")>=0&&dn(Z?j:o,"scroll",pe,Ge,oe),a.indexOf("wheel")>=0&&dn(o,"wheel",ee,Ge,oe),(a.indexOf("touch")>=0&&vp||a.indexOf("pointer")>=0)&&(dn(o,li[0],ke,Ge,oe),dn(j,li[2],I),dn(j,li[3],I),te&&dn(o,"click",Ae,!0,!0),ze&&dn(o,"click",ct),ne&&dn(j,"gesturestart",ie),L&&dn(j,"gestureend",ae),k&&dn(o,br+"enter",Me),q&&dn(o,br+"leave",Ne),G&&dn(o,br+"move",J)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=D=He=!1,O._vx.reset(),O._vy.reset(),R=qe(),S=dt(),_e&&_e.type&&ke(_e),Le&&Le(O)),O},O.disable=function(){O.isEnabled&&(_s.filter(function(_e){return _e!==O&&ha(_e.target)}).length||hn(Z?j:o,"scroll",au),O.isPressed&&(O._vx.reset(),O._vy.reset(),hn(H?o:j,li[1],ce,!0)),hn(Z?j:o,"scroll",pe,oe),hn(o,"wheel",ee,oe),hn(o,li[0],ke,oe),hn(j,li[2],I),hn(j,li[3],I),hn(o,"click",Ae,!0),hn(o,"click",ct),hn(j,"gesturestart",ie),hn(j,"gestureend",ae),hn(o,br+"enter",Me),hn(o,br+"leave",Ne),hn(o,br+"move",J),O.isEnabled=O.isPressed=O.isDragging=!1,st&&st(O))},O.kill=O.revert=function(){O.disable();var _e=_s.indexOf(O);_e>=0&&_s.splice(_e,1),Oi===O&&(Oi=0)},_s.push(O),H&&ha(o)&&(Oi=O),O.enable(_)},lS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Bt.version="3.13.0";Bt.create=function(r){return new Bt(r)};Bt.register=Tp;Bt.getAll=function(){return _s.slice()};Bt.getById=function(r){return _s.filter(function(e){return e.vars.id===r})[0]};Sp()&&Jt.registerPlugin(Bt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var be,fs,et,St,zn,pt,qu,Zo,Pa,da,na,uo,sn,ol,lu,_n,Eh,Th,hs,bp,Zl,Ap,mn,cu,wp,Rp,$i,uu,$u,Ts,Ku,jo,fu,jl,fo=1,an=Date.now,Jl=an(),ii=0,ia=0,bh=function(e,t,n){var i=Fn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Ah=function(e,t){return t&&(!Fn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},fS=function r(){return ia&&requestAnimationFrame(r)},wh=function(){return ol=1},Rh=function(){return ol=0},pi=function(e){return e},ra=function(e){return Math.round(e*1e5)/1e5||0},Cp=function(){return typeof window<"u"},Pp=function(){return be||Cp()&&(be=window.gsap)&&be.registerPlugin&&be},Gr=function(e){return!!~qu.indexOf(e)},Dp=function(e){return(e==="Height"?Ku:et["inner"+e])||zn["client"+e]||pt["client"+e]},Lp=function(e){return ar(e,"getBoundingClientRect")||(Gr(e)?function(){return No.width=et.innerWidth,No.height=Ku,No}:function(){return Ni(e)})},hS=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=ar(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Dp(s):e["client"+s])||0}},dS=function(e,t){return!t||~yi.indexOf(e)?Lp(e):function(){return No}},Mi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=ar(e,n))?a()-Lp(e)()[s]:Gr(e)?(zn[n]||pt[n])-Dp(i):e[n]-e["offset"+i])},ho=function(e,t){for(var n=0;n<hs.length;n+=3)(!t||~t.indexOf(hs[n+1]))&&e(hs[n],hs[n+1],hs[n+2])},Fn=function(e){return typeof e=="string"},ln=function(e){return typeof e=="function"},sa=function(e){return typeof e=="number"},Ar=function(e){return typeof e=="object"},Js=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ql=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},cs=Math.abs,Ip="left",Up="top",Zu="right",ju="bottom",Or="width",Br="height",pa="Right",ma="Left",_a="Top",ga="Bottom",kt="padding",Jn="margin",Os="Width",Ju="Height",Wt="px",Qn=function(e){return et.getComputedStyle(e)},pS=function(e){var t=Qn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ch=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ni=function(e,t){var n=t&&Qn(e)[lu]!=="matrix(1, 0, 0, 1, 0, 0)"&&be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Jo=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Np=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},mS=function(e){return function(t){return be.utils.snap(Np(e),t)}},Qu=function(e){var t=be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},_S=function(e){return function(t,n){return Qu(Np(e))(t,n.direction)}},po=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Zt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Kt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},mo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ph={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_o={toggleActions:"play",anticipatePin:0},Qo={top:0,left:0,center:.5,bottom:1,right:1},Do=function(e,t){if(Fn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Qo?Qo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},go=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=St.createElement("div"),_=Gr(n)||ar(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?pt:n,T=e.indexOf("start")!==-1,E=T?c:u,v="border-color:"+E+";font-size:"+f+";color:"+E+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===Xt?Zu:ju)+":"+(a+parseFloat(d))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=T,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Lo(g,0,i,T),g},Lo=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Os]=1,s["border"+o+Os]=0,s[n.p]=t+"px",be.set(e,s)},Je=[],hu={},Da,Dh=function(){return an()-ii>34&&(Da||(Da=requestAnimationFrame(zi)))},us=function(){(!mn||!mn.isPressed||mn.startX>pt.clientWidth)&&(tt.cache++,mn?Da||(Da=requestAnimationFrame(zi)):zi(),ii||Xr("scrollStart"),ii=an())},ec=function(){Rp=et.innerWidth,wp=et.innerHeight},aa=function(e){tt.cache++,(e===!0||!sn&&!Ap&&!St.fullscreenElement&&!St.webkitFullscreenElement&&(!cu||Rp!==et.innerWidth||Math.abs(et.innerHeight-wp)>et.innerHeight*.25))&&Zo.restart(!0)},Wr={},gS=[],Fp=function r(){return Kt(rt,"scrollEnd",r)||Lr(!0)},Xr=function(e){return Wr[e]&&Wr[e].map(function(t){return t()})||gS},Nn=[],Op=function(e){for(var t=0;t<Nn.length;t+=5)(!e||Nn[t+4]&&Nn[t+4].query===e)&&(Nn[t].style.cssText=Nn[t+1],Nn[t].getBBox&&Nn[t].setAttribute("transform",Nn[t+2]||""),Nn[t+3].uncache=1)},ef=function(e,t){var n;for(_n=0;_n<Je.length;_n++)n=Je[_n],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));jo=!0,t&&Op(t),t||Xr("revert")},Bp=function(e,t){tt.cache++,(t||!gn)&&tt.forEach(function(n){return ln(n)&&n.cacheID++&&(n.rec=0)}),Fn(e)&&(et.history.scrollRestoration=$u=e)},gn,zr=0,Lh,vS=function(){if(Lh!==zr){var e=Lh=zr;requestAnimationFrame(function(){return e===zr&&Lr(!0)})}},zp=function(){pt.appendChild(Ts),Ku=!mn&&Ts.offsetHeight||et.innerHeight,pt.removeChild(Ts)},Ih=function(e){return Pa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Lr=function(e,t){if(zn=St.documentElement,pt=St.body,qu=[et,St,zn,pt],ii&&!e&&!jo){Zt(rt,"scrollEnd",Fp);return}zp(),gn=rt.isRefreshing=!0,tt.forEach(function(i){return ln(i)&&++i.cacheID&&(i.rec=i())});var n=Xr("refreshInit");bp&&rt.sort(),t||ef(),tt.forEach(function(i){ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Je.slice(0).forEach(function(i){return i.refresh()}),jo=!1,Je.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),fu=1,Ih(!0),Je.forEach(function(i){var s=Mi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Ih(!1),fu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),tt.forEach(function(i){ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Bp($u,1),Zo.pause(),zr++,gn=2,zi(2),Je.forEach(function(i){return ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),gn=rt.isRefreshing=!1,Xr("refresh")},du=0,Io=1,va,zi=function(e){if(e===2||!gn&&!jo){rt.isUpdating=!0,va&&va.update(0);var t=Je.length,n=an(),i=n-Jl>=50,s=t&&Je[0].scroll();if(Io=du>s?-1:1,gn||(du=s),i&&(ii&&!ol&&n-ii>200&&(ii=0,Xr("scrollEnd")),na=Jl,Jl=n),Io<0){for(_n=t;_n-- >0;)Je[_n]&&Je[_n].update(0,i);Io=1}else for(_n=0;_n<t;_n++)Je[_n]&&Je[_n].update(0,i);rt.isUpdating=!1}Da=0},pu=[Ip,Up,ju,Zu,Jn+ga,Jn+pa,Jn+_a,Jn+ma,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Uo=pu.concat([Or,Br,"boxSizing","max"+Os,"max"+Ju,"position",Jn,kt,kt+_a,kt+pa,kt+ga,kt+ma]),xS=function(e,t,n){bs(n);var i=e._gsap;if(i.spacerIsNative)bs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},tc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=pu.length,a=t.style,o=e.style,l;s--;)l=pu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[ju]=o[Zu]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Or]=Jo(e,xn)+Wt,a[Br]=Jo(e,Xt)+Wt,a[kt]=o[Jn]=o[Up]=o[Ip]="0",bs(i),o[Or]=o["max"+Os]=n[Or],o[Br]=o["max"+Ju]=n[Br],o[kt]=n[kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},MS=/([A-Z])/g,bs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||be.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(MS,"-$1").toLowerCase())}},vo=function(e){for(var t=Uo.length,n=e.style,i=[],s=0;s<t;s++)i.push(Uo[s],n[Uo[s]]);return i.t=e,i},SS=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},No={left:0,top:0},Uh=function(e,t,n,i,s,a,o,l,c,u,f,d,h,g){ln(e)&&(e=e(l)),Fn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Do("0"+e.substr(3),n):0));var _=h?h.time():0,m,p,T;if(h&&h.seek(0),isNaN(e)||(e=+e),sa(e))h&&(e=be.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),o&&Lo(o,n,i,!0);else{ln(t)&&(t=t(l));var E=(e||"0").split(" "),v,A,w,b;T=yn(t,l)||pt,v=Ni(T)||{},(!v||!v.left&&!v.top)&&Qn(T).display==="none"&&(b=T.style.display,T.style.display="block",v=Ni(T),b?T.style.display=b:T.style.removeProperty("display")),A=Do(E[0],v[i.d]),w=Do(E[1]||"0",n),e=v[i.p]-c[i.p]-u+A+s-w,o&&Lo(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var P=e+n,x=a._isStart;m="scroll"+i.d2,Lo(a,P,i,x&&P>20||!x&&(f?Math.max(pt[m],zn[m]):a.parentNode[m])<=P+1),f&&(c=Ni(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Wt))}return h&&T&&(m=Ni(T),h.seek(d),p=Ni(T),h._caScrollDist=m[i.p]-p[i.p],e=e/h._caScrollDist*d),h&&h.seek(_),h?e:Math.round(e)},yS=/(webkit|moz|length|cssText|inset)/i,Nh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===pt){e._stOrig=s.cssText,o=Qn(e);for(a in o)!+a&&!yS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;be.core.getCache(e).uncache=1,t.appendChild(e)}},kp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},xo=function(e,t,n){var i={};i[t.p]="+="+n,be.set(e,i)},Fh=function(e,t){var n=fr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,f){var d=a.tween,h=l.onComplete,g={};c=c||n();var _=kp(n,c,function(){d.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){tt.cache++,a.tween&&zi()},l.onComplete=function(){a.tween=0,h&&h.call(d)},d=a.tween=be.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Zt(e,"wheel",n.wheelHandler),rt.isTouch&&Zt(e,"touchmove",n.wheelHandler),s},rt=function(){function r(t,n){fs||r.register(be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),uu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ia){this.update=this.refresh=this.kill=pi;return}n=Ch(Fn(n)||sa(n)||n.nodeType?{trigger:n}:n,_o);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,T=s.onSnapComplete,E=s.once,v=s.snap,A=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,P=s.fastScrollEnd,x=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?xn:Xt,C=!f&&f!==0,U=yn(n.scroller||et),z=be.core.getCache(U),k=Gr(U),q=("pinType"in n?n.pinType:ar(U,"pinType")||k&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=C&&n.toggleActions.split(" "),H="markers"in n?n.markers:_o.markers,ne=k?0:parseFloat(Qn(U)["border"+M.p2+Os])||0,L=this,fe=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Le=hS(U,k,M),st=dS(U,k),ze=0,$=0,oe=0,te=fr(U,M),Ee,Se,Fe,nt,He,D,Ve,ye,Xe,O,Qe,ge,Ge,qe,dt,R,S,B,Z,j,K,ve,se,Ae,he,re,ue,Ie,we,ce,ke,I,ie,ae,pe,ee,J,Me,Ne;if(L._startClamp=L._endClamp=!1,L._dir=M,m*=45,L.scroller=U,L.scroll=b?b.time.bind(b):te,nt=te(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(bp=1,n.refreshPriority===-9999&&(va=L)),z.tweenScroll=z.tweenScroll||{top:Fh(U,Xt),left:Fh(U,xn)},L.tweenTo=Ee=z.tweenScroll[M.p],L.scrubDuration=function(de){ie=sa(de)&&de,ie?I?I.duration(de):I=be.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ie,paused:!0,onComplete:function(){return p&&p(L)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(f),ce=0,l||(l=i.vars.id)),v&&((!Ar(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in pt.style&&be.set(k?[pt,zn]:U,{scrollBehavior:"auto"}),tt.forEach(function(de){return ln(de)&&de.target===(k?St.scrollingElement||zn:U)&&(de.smooth=!1)}),Fe=ln(v.snapTo)?v.snapTo:v.snapTo==="labels"?mS(i):v.snapTo==="labelsDirectional"?_S(i):v.directional!==!1?function(de,Oe){return Qu(v.snapTo)(de,an()-$<500?0:Oe.direction)}:be.utils.snap(v.snapTo),ae=v.duration||{min:.1,max:2},ae=Ar(ae)?da(ae.min,ae.max):da(ae,ae),pe=be.delayedCall(v.delay||ie/2||.1,function(){var de=te(),Oe=an()-$<500,De=Ee.tween;if((Oe||Math.abs(L.getVelocity())<10)&&!De&&!ol&&ze!==de){var We=(de-D)/qe,Nt=i&&!C?i.totalProgress():We,Ze=Oe?0:(Nt-ke)/(an()-na)*1e3||0,bt=be.utils.clamp(-We,1-We,cs(Ze/2)*Ze/.185),Ft=We+(v.inertia===!1?0:bt),yt,gt,mt=v,Pn=mt.onStart,Et=mt.onInterrupt,un=mt.onComplete;if(yt=Fe(Ft,L),sa(yt)||(yt=Ft),gt=Math.max(0,Math.round(D+yt*qe)),de<=Ve&&de>=D&&gt!==de){if(De&&!De._initted&&De.data<=cs(gt-de))return;v.inertia===!1&&(bt=yt-We),Ee(gt,{duration:ae(cs(Math.max(cs(Ft-Nt),cs(yt-Nt))*.185/Ze/.05||0)),ease:v.ease||"power3",data:cs(gt-de),onInterrupt:function(){return pe.restart(!0)&&Et&&Et(L)},onComplete:function(){L.update(),ze=te(),i&&!C&&(I?I.resetTo("totalProgress",yt,i._tTime/i._tDur):i.progress(yt)),ce=ke=i&&!C?i.totalProgress():L.progress,T&&T(L),un&&un(L)}},de,bt*qe,gt-de-bt*qe),Pn&&Pn(L,Ee.tween)}}else L.isActive&&ze!==de&&pe.restart(!0)}).pause()),l&&(hu[l]=L),d=L.trigger=yn(d||h!==!0&&h),Ne=d&&d._gsap&&d._gsap.stRevert,Ne&&(Ne=Ne(L)),h=h===!0?d:yn(h),Fn(o)&&(o={targets:d,className:o}),h&&(g===!1||g===Jn||(g=!g&&h.parentNode&&h.parentNode.style&&Qn(h.parentNode).display==="flex"?!1:kt),L.pin=h,Se=be.core.getCache(h),Se.spacer?dt=Se.pinState:(w&&(w=yn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Se.spacerIsNative=!!w,w&&(Se.spacerState=vo(w))),Se.spacer=B=w||St.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),Se.pinState=dt=vo(h)),n.force3D!==!1&&be.set(h,{force3D:!0}),L.spacer=B=Se.spacer,we=Qn(h),Ae=we[g+M.os2],j=be.getProperty(h),K=be.quickSetter(h,M.a,Wt),tc(h,B,we),S=vo(h)),H){ge=Ar(H)?Ch(H,Ph):Ph,O=go("scroller-start",l,U,M,ge,0),Qe=go("scroller-end",l,U,M,ge,0,O),Z=O["offset"+M.op.d2];var ct=yn(ar(U,"content")||U);ye=this.markerStart=go("start",l,ct,M,ge,Z,0,b),Xe=this.markerEnd=go("end",l,ct,M,ge,Z,0,b),b&&(Me=be.quickSetter([ye,Xe],M.a,Wt)),!q&&!(yi.length&&ar(U,"fixedMarkers")===!0)&&(pS(k?pt:U),be.set([O,Qe],{force3D:!0}),re=be.quickSetter(O,M.a,Wt),Ie=be.quickSetter(Qe,M.a,Wt))}if(b){var _e=b.vars.onUpdate,Re=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){L.update(0,0,1),_e&&_e.apply(b,Re||[])})}if(L.previous=function(){return Je[Je.indexOf(L)-1]},L.next=function(){return Je[Je.indexOf(L)+1]},L.revert=function(de,Oe){if(!Oe)return L.kill(!0);var De=de!==!1||!L.enabled,We=sn;De!==L.isReverted&&(De&&(ee=Math.max(te(),L.scroll.rec||0),oe=L.progress,J=i&&i.progress()),ye&&[ye,Xe,O,Qe].forEach(function(Nt){return Nt.style.display=De?"none":"block"}),De&&(sn=L,L.update(De)),h&&(!A||!L.isActive)&&(De?xS(h,B,dt):tc(h,B,Qn(h),he)),De||L.update(De),sn=We,L.isReverted=De)},L.refresh=function(de,Oe,De,We){if(!((sn||!L.enabled)&&!Oe)){if(h&&de&&ii){Zt(r,"scrollEnd",Fp);return}!gn&&fe&&fe(L),sn=L,Ee.tween&&!De&&(Ee.tween.kill(),Ee.tween=0),I&&I.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(it){return it.vars.immediateRender&&it.render(0,!0,!0)})),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Nt=Le(),Ze=st(),bt=b?b.duration():Mi(U,M),Ft=qe<=.01||!qe,yt=0,gt=We||0,mt=Ar(De)?De.end:n.end,Pn=n.endTrigger||d,Et=Ar(De)?De.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),un=L.pinnedContainer=n.pinnedContainer&&yn(n.pinnedContainer,L),Yn=d&&Math.max(0,Je.indexOf(L))||0,Gt=Yn,y,N,W,X,F,Q,le,Te,xe,Ue,Pe,Ce,$e;for(H&&Ar(De)&&(Ce=be.getProperty(O,M.p),$e=be.getProperty(Qe,M.p));Gt-- >0;)Q=Je[Gt],Q.end||Q.refresh(0,1)||(sn=L),le=Q.pin,le&&(le===d||le===h||le===un)&&!Q.isReverted&&(Ue||(Ue=[]),Ue.unshift(Q),Q.revert(!0,!0)),Q!==Je[Gt]&&(Yn--,Gt--);for(ln(Et)&&(Et=Et(L)),Et=bh(Et,"start",L),D=Uh(Et,d,Nt,M,te(),ye,O,L,Ze,ne,q,bt,b,L._startClamp&&"_startClamp")||(h?-.001:0),ln(mt)&&(mt=mt(L)),Fn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Fn(Et)?Et.split(" ")[0]:"")+mt:(yt=Do(mt.substr(2),Nt),mt=Fn(Et)?Et:(b?be.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,D):D)+yt,Pn=d)),mt=bh(mt,"end",L),Ve=Math.max(D,Uh(mt||(Pn?"100% 0":bt),Pn,Nt,M,te()+yt,Xe,Qe,L,Ze,ne,q,bt,b,L._endClamp&&"_endClamp"))||-.001,yt=0,Gt=Yn;Gt--;)Q=Je[Gt],le=Q.pin,le&&Q.start-Q._pinPush<=D&&!b&&Q.end>0&&(y=Q.end-(L._startClamp?Math.max(0,Q.start):Q.start),(le===d&&Q.start-Q._pinPush<D||le===un)&&isNaN(Et)&&(yt+=y*(1-Q.progress)),le===h&&(gt+=y));if(D+=yt,Ve+=yt,L._startClamp&&(L._startClamp+=yt),L._endClamp&&!gn&&(L._endClamp=Ve||-.001,Ve=Math.min(Ve,Mi(U,M))),qe=Ve-D||(D-=.01)&&.001,Ft&&(oe=be.utils.clamp(0,1,be.utils.normalize(D,Ve,ee))),L._pinPush=gt,ye&&yt&&(y={},y[M.a]="+="+yt,un&&(y[M.p]="-="+te()),be.set([ye,Xe],y)),h&&!(fu&&L.end>=Mi(U,M)))y=Qn(h),X=M===Xt,W=te(),ve=parseFloat(j(M.a))+gt,!bt&&Ve>1&&(Pe=(k?St.scrollingElement||zn:U).style,Pe={style:Pe,value:Pe["overflow"+M.a.toUpperCase()]},k&&Qn(pt)["overflow"+M.a.toUpperCase()]!=="scroll"&&(Pe.style["overflow"+M.a.toUpperCase()]="scroll")),tc(h,B,y),S=vo(h),N=Ni(h,!0),Te=q&&fr(U,X?xn:Xt)(),g?(he=[g+M.os2,qe+gt+Wt],he.t=B,Gt=g===kt?Jo(h,M)+qe+gt:0,Gt&&(he.push(M.d,Gt+Wt),B.style.flexBasis!=="auto"&&(B.style.flexBasis=Gt+Wt)),bs(he),un&&Je.forEach(function(it){it.pin===un&&it.vars.pinSpacing!==!1&&(it._subPinOffset=!0)}),q&&te(ee)):(Gt=Jo(h,M),Gt&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=Gt+Wt)),q&&(F={top:N.top+(X?W-D:Te)+Wt,left:N.left+(X?Te:W-D)+Wt,boxSizing:"border-box",position:"fixed"},F[Or]=F["max"+Os]=Math.ceil(N.width)+Wt,F[Br]=F["max"+Ju]=Math.ceil(N.height)+Wt,F[Jn]=F[Jn+_a]=F[Jn+pa]=F[Jn+ga]=F[Jn+ma]="0",F[kt]=y[kt],F[kt+_a]=y[kt+_a],F[kt+pa]=y[kt+pa],F[kt+ga]=y[kt+ga],F[kt+ma]=y[kt+ma],R=SS(dt,F,A),gn&&te(0)),i?(xe=i._initted,Zl(1),i.render(i.duration(),!0,!0),se=j(M.a)-ve+qe+gt,ue=Math.abs(qe-se)>1,q&&ue&&R.splice(R.length-2,2),i.render(0,!0,!0),xe||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Zl(0)):se=qe,Pe&&(Pe.value?Pe.style["overflow"+M.a.toUpperCase()]=Pe.value:Pe.style.removeProperty("overflow-"+M.a));else if(d&&te()&&!b)for(N=d.parentNode;N&&N!==pt;)N._pinOffset&&(D-=N._pinOffset,Ve-=N._pinOffset),N=N.parentNode;Ue&&Ue.forEach(function(it){return it.revert(!1,!0)}),L.start=D,L.end=Ve,nt=He=gn?ee:te(),!b&&!gn&&(nt<ee&&te(ee),L.scroll.rec=0),L.revert(!1,!0),$=an(),pe&&(ze=-1,pe.restart(!0)),sn=0,i&&C&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(Ft||oe!==L.progress||b||_||i&&!i._initted)&&(i&&!C&&(i._initted||oe||i.vars.immediateRender!==!1)&&i.totalProgress(b&&D<-.001&&!oe?be.utils.normalize(D,Ve,0):oe,!0),L.progress=Ft||(nt-D)/qe===oe?0:oe),h&&g&&(B._pinOffset=Math.round(L.progress*se)),I&&I.invalidate(),isNaN(Ce)||(Ce-=be.getProperty(O,M.p),$e-=be.getProperty(Qe,M.p),xo(O,M,Ce),xo(ye,M,Ce-(We||0)),xo(Qe,M,$e),xo(Xe,M,$e-(We||0))),Ft&&!gn&&L.update(),u&&!gn&&!Ge&&(Ge=!0,u(L),Ge=!1)}},L.getVelocity=function(){return(te()-He)/(an()-na)*1e3||0},L.endAnimation=function(){Js(L.callbackAnimation),i&&(I?I.progress(1):i.paused()?C||Js(i,L.direction<0,1):Js(i,i.reversed()))},L.labelToScroll=function(de){return i&&i.labels&&(D||L.refresh()||D)+i.labels[de]/i.duration()*qe||0},L.getTrailing=function(de){var Oe=Je.indexOf(L),De=L.direction>0?Je.slice(0,Oe).reverse():Je.slice(Oe+1);return(Fn(de)?De.filter(function(We){return We.vars.preventOverlaps===de}):De).filter(function(We){return L.direction>0?We.end<=D:We.start>=Ve})},L.update=function(de,Oe,De){if(!(b&&!De&&!de)){var We=gn===!0?ee:L.scroll(),Nt=de?0:(We-D)/qe,Ze=Nt<0?0:Nt>1?1:Nt||0,bt=L.progress,Ft,yt,gt,mt,Pn,Et,un,Yn;if(Oe&&(He=nt,nt=b?te():We,v&&(ke=ce,ce=i&&!C?i.totalProgress():Ze)),m&&h&&!sn&&!fo&&ii&&(!Ze&&D<We+(We-He)/(an()-na)*m?Ze=1e-4:Ze===1&&Ve>We+(We-He)/(an()-na)*m&&(Ze=.9999)),Ze!==bt&&L.enabled){if(Ft=L.isActive=!!Ze&&Ze<1,yt=!!bt&&bt<1,Et=Ft!==yt,Pn=Et||!!Ze!=!!bt,L.direction=Ze>bt?1:-1,L.progress=Ze,Pn&&!sn&&(gt=Ze&&!bt?0:Ze===1?1:bt===1?2:3,C&&(mt=!Et&&Y[gt+1]!=="none"&&Y[gt+1]||Y[gt],Yn=i&&(mt==="complete"||mt==="reset"||mt in i))),x&&(Et||Yn)&&(Yn||f||!i)&&(ln(x)?x(L):L.getTrailing(x).forEach(function(W){return W.endAnimation()})),C||(I&&!sn&&!fo?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",Ze,i._tTime/i._tDur):(I.vars.totalProgress=Ze,I.invalidate().restart())):i&&i.totalProgress(Ze,!!(sn&&($||de)))),h){if(de&&g&&(B.style[g+M.os2]=Ae),!q)K(ra(ve+se*Ze));else if(Pn){if(un=!de&&Ze>bt&&Ve+1>We&&We+1>=Mi(U,M),A)if(!de&&(Ft||un)){var Gt=Ni(h,!0),y=We-D;Nh(h,pt,Gt.top+(M===Xt?y:0)+Wt,Gt.left+(M===Xt?0:y)+Wt)}else Nh(h,B);bs(Ft||un?R:S),ue&&Ze<1&&Ft||K(ve+(Ze===1&&!un?se:0))}}v&&!Ee.tween&&!sn&&!fo&&pe.restart(!0),o&&(Et||E&&Ze&&(Ze<1||!jl))&&Pa(o.targets).forEach(function(W){return W.classList[Ft||E?"add":"remove"](o.className)}),a&&!C&&!de&&a(L),Pn&&!sn?(C&&(Yn&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),a&&a(L)),(Et||!jl)&&(c&&Et&&Ql(L,c),G[gt]&&Ql(L,G[gt]),E&&(Ze===1?L.kill(!1,1):G[gt]=0),Et||(gt=Ze===1?1:3,G[gt]&&Ql(L,G[gt]))),P&&!Ft&&Math.abs(L.getVelocity())>(sa(P)?P:2500)&&(Js(L.callbackAnimation),I?I.progress(1):Js(i,mt==="reverse"?1:!Ze,1))):C&&a&&!sn&&a(L)}if(Ie){var N=b?We/b.duration()*(b._caScrollDist||0):We;re(N+(O._isFlipped?1:0)),Ie(N)}Me&&Me(-We/b.duration()*(b._caScrollDist||0))}},L.enable=function(de,Oe){L.enabled||(L.enabled=!0,Zt(U,"resize",aa),k||Zt(U,"scroll",us),fe&&Zt(r,"refreshInit",fe),de!==!1&&(L.progress=oe=0,nt=He=ze=te()),Oe!==!1&&L.refresh())},L.getTween=function(de){return de&&Ee?Ee.tween:I},L.setPositions=function(de,Oe,De,We){if(b){var Nt=b.scrollTrigger,Ze=b.duration(),bt=Nt.end-Nt.start;de=Nt.start+bt*de/Ze,Oe=Nt.start+bt*Oe/Ze}L.refresh(!1,!1,{start:Ah(de,De&&!!L._startClamp),end:Ah(Oe,De&&!!L._endClamp)},We),L.update()},L.adjustPinSpacing=function(de){if(he&&de){var Oe=he.indexOf(M.d)+1;he[Oe]=parseFloat(he[Oe])+de+Wt,he[1]=parseFloat(he[1])+de+Wt,bs(he)}},L.disable=function(de,Oe){if(L.enabled&&(de!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Oe||I&&I.pause(),ee=0,Se&&(Se.uncache=1),fe&&Kt(r,"refreshInit",fe),pe&&(pe.pause(),Ee.tween&&Ee.tween.kill()&&(Ee.tween=0)),!k)){for(var De=Je.length;De--;)if(Je[De].scroller===U&&Je[De]!==L)return;Kt(U,"resize",aa),k||Kt(U,"scroll",us)}},L.kill=function(de,Oe){L.disable(de,Oe),I&&!Oe&&I.kill(),l&&delete hu[l];var De=Je.indexOf(L);De>=0&&Je.splice(De,1),De===_n&&Io>0&&_n--,De=0,Je.forEach(function(We){return We.scroller===L.scroller&&(De=1)}),De||gn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,de&&i.revert({kill:!1}),Oe||i.kill()),ye&&[ye,Xe,O,Qe].forEach(function(We){return We.parentNode&&We.parentNode.removeChild(We)}),va===L&&(va=0),h&&(Se&&(Se.uncache=1),De=0,Je.forEach(function(We){return We.pin===h&&De++}),De||(Se.spacer=0)),n.onKill&&n.onKill(L)},Je.push(L),L.enable(!1,!1),Ne&&Ne(L),i&&i.add&&!qe){var Ye=L.update;L.update=function(){L.update=Ye,tt.cache++,D||Ve||L.refresh()},be.delayedCall(.01,L.update),qe=.01,D=Ve=0}else L.refresh();h&&vS()},r.register=function(n){return fs||(be=n||Pp(),Cp()&&window.document&&r.enable(),fs=ia),fs},r.defaults=function(n){if(n)for(var i in n)_o[i]=n[i];return _o},r.disable=function(n,i){ia=0,Je.forEach(function(a){return a[i?"kill":"disable"](n)}),Kt(et,"wheel",us),Kt(St,"scroll",us),clearInterval(uo),Kt(St,"touchcancel",pi),Kt(pt,"touchstart",pi),po(Kt,St,"pointerdown,touchstart,mousedown",wh),po(Kt,St,"pointerup,touchend,mouseup",Rh),Zo.kill(),ho(Kt);for(var s=0;s<tt.length;s+=3)mo(Kt,tt[s],tt[s+1]),mo(Kt,tt[s],tt[s+2])},r.enable=function(){if(et=window,St=document,zn=St.documentElement,pt=St.body,be&&(Pa=be.utils.toArray,da=be.utils.clamp,uu=be.core.context||pi,Zl=be.core.suppressOverwrites||pi,$u=et.history.scrollRestoration||"auto",du=et.pageYOffset||0,be.core.globals("ScrollTrigger",r),pt)){ia=1,Ts=document.createElement("div"),Ts.style.height="100vh",Ts.style.position="absolute",zp(),fS(),Bt.register(be),r.isTouch=Bt.isTouch,$i=Bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),cu=Bt.isTouch===1,Zt(et,"wheel",us),qu=[et,St,zn,pt],be.matchMedia?(r.matchMedia=function(c){var u=be.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},be.addEventListener("matchMediaInit",function(){return ef()}),be.addEventListener("matchMediaRevert",function(){return Op()}),be.addEventListener("matchMedia",function(){Lr(0,1),Xr("matchMedia")}),be.matchMedia().add("(orientation: portrait)",function(){return ec(),ec})):console.warn("Requires GSAP 3.11.0 or later"),ec(),Zt(St,"scroll",us);var n=pt.hasAttribute("style"),i=pt.style,s=i.borderTopStyle,a=be.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Ni(pt),Xt.m=Math.round(o.top+Xt.sc())||0,xn.m=Math.round(o.left+xn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(pt.setAttribute("style",""),pt.removeAttribute("style")),uo=setInterval(Dh,250),be.delayedCall(.5,function(){return fo=0}),Zt(St,"touchcancel",pi),Zt(pt,"touchstart",pi),po(Zt,St,"pointerdown,touchstart,mousedown",wh),po(Zt,St,"pointerup,touchend,mouseup",Rh),lu=be.utils.checkPrefix("transform"),Uo.push(lu),fs=an(),Zo=be.delayedCall(.2,Lr).pause(),hs=[St,"visibilitychange",function(){var c=et.innerWidth,u=et.innerHeight;St.hidden?(Eh=c,Th=u):(Eh!==c||Th!==u)&&aa()},St,"DOMContentLoaded",Lr,et,"load",Lr,et,"resize",aa],ho(Zt),Je.forEach(function(c){return c.enable(0,1)}),l=0;l<tt.length;l+=3)mo(Kt,tt[l],tt[l+1]),mo(Kt,tt[l],tt[l+2])}},r.config=function(n){"limitCallbacks"in n&&(jl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(uo)||(uo=i)&&setInterval(Dh,i),"ignoreMobileResize"in n&&(cu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ho(Kt)||ho(Zt,n.autoRefreshEvents||"none"),Ap=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=yn(n),a=tt.indexOf(s),o=Gr(s);~a&&tt.splice(a,o?6:2),i&&(o?yi.unshift(et,i,pt,i,zn,i):yi.unshift(s,i))},r.clearMatchMedia=function(n){Je.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Fn(n)?yn(n):n).getBoundingClientRect(),o=a[s?Or:Br]*i||0;return s?a.right-o>0&&a.left+o<et.innerWidth:a.bottom-o>0&&a.top+o<et.innerHeight},r.positionInViewport=function(n,i,s){Fn(n)&&(n=yn(n));var a=n.getBoundingClientRect(),o=a[s?Or:Br],l=i==null?o/2:i in Qo?Qo[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/et.innerWidth:(a.top+l)/et.innerHeight},r.killAll=function(n){if(Je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Wr.killAll||[];Wr={},i.forEach(function(s){return s()})}},r}();rt.version="3.13.0";rt.saveStyles=function(r){return r?Pa(r).forEach(function(e){if(e&&e.style){var t=Nn.indexOf(e);t>=0&&Nn.splice(t,5),Nn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),be.core.getCache(e),uu())}}):Nn};rt.revert=function(r,e){return ef(!r,e)};rt.create=function(r,e){return new rt(r,e)};rt.refresh=function(r){return r?aa(!0):(fs||rt.register())&&Lr(!0)};rt.update=function(r){return++tt.cache&&zi(r===!0?2:0)};rt.clearScrollMemory=Bp;rt.maxScroll=function(r,e){return Mi(r,e?xn:Xt)};rt.getScrollFunc=function(r,e){return fr(yn(r),e?xn:Xt)};rt.getById=function(r){return hu[r]};rt.getAll=function(){return Je.filter(function(r){return r.vars.id!=="ScrollSmoother"})};rt.isScrolling=function(){return!!ii};rt.snapDirectional=Qu;rt.addEventListener=function(r,e){var t=Wr[r]||(Wr[r]=[]);~t.indexOf(e)||t.push(e)};rt.removeEventListener=function(r,e){var t=Wr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};rt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],d=[],h=be.delayedCall(i,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&ln(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return ln(s)&&(s=s(),Zt(rt,"refresh",function(){return s=e.batchMax()})),Pa(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(rt.create(c))}),t};var Oh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},nc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Bt.isTouch?" pinch-zoom":""):"none",e===zn&&r(pt,t)},Mo={auto:1,scroll:1},ES=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||be.core.getCache(s),o=an(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Mo[(l=Qn(s)).overflowY]||Mo[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Gr(s)&&(Mo[(l=Qn(s)).overflowY]||Mo[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Hp=function(e,t,n,i){return Bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ES,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Zt(St,Bt.eventTypes[0],zh,!1,!0)},onDisable:function(){return Kt(St,Bt.eventTypes[0],zh,!0)}})},TS=/(input|label|select|textarea)/i,Bh,zh=function(e){var t=TS.test(e.target.tagName);(t||Bh)&&(e._gsapAllow=!0,Bh=t)},bS=function(e){Ar(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=yn(e.target)||zn,u=be.core.globals().ScrollSmoother,f=u&&u.get(),d=$i&&(e.content&&yn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=fr(c,Xt),g=fr(c,xn),_=1,m=(Bt.isTouch&&et.visualViewport?et.visualViewport.scale*et.visualViewport.width:et.outerWidth)/et.innerWidth,p=0,T=ln(i)?function(){return i(o)}:function(){return i||2.8},E,v,A=Hp(c,e.type,!0,s),w=function(){return v=!1},b=pi,P=pi,x=function(){l=Mi(c,Xt),P=da($i?1:0,l),n&&(b=da(0,Mi(c,xn))),E=zr},M=function(){d._gsap.y=ra(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},C=function(){if(v){requestAnimationFrame(w);var H=ra(o.deltaY/2),ne=P(h.v-H);if(d&&ne!==h.v+h.offset){h.offset=ne-h.v;var L=ra((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",d._gsap.y=L+"px",h.cacheID=tt.cache,zi()}return!0}h.offset&&M(),v=!0},U,z,k,q,G=function(){x(),U.isActive()&&U.vars.scrollY>l&&(h()>l?U.progress(1)&&h(l):U.resetTo("scrollY",l))};return d&&be.set(d,{y:"+=0"}),e.ignoreCheck=function(Y){return $i&&Y.type==="touchmove"&&C()||_>1.05&&Y.type!=="touchstart"||o.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){v=!1;var Y=_;_=ra((et.visualViewport&&et.visualViewport.scale||1)/m),U.pause(),Y!==_&&nc(c,_>1.01?!0:n?!1:"x"),z=g(),k=h(),x(),E=zr},e.onRelease=e.onGestureStart=function(Y,H){if(h.offset&&M(),!H)q.restart(!0);else{tt.cache++;var ne=T(),L,fe;n&&(L=g(),fe=L+ne*.05*-Y.velocityX/.227,ne*=Oh(g,L,fe,Mi(c,xn)),U.vars.scrollX=b(fe)),L=h(),fe=L+ne*.05*-Y.velocityY/.227,ne*=Oh(h,L,fe,Mi(c,Xt)),U.vars.scrollY=P(fe),U.invalidate().duration(ne).play(.01),($i&&U.vars.scrollY>=l||L>=l-1)&&be.to({},{onUpdate:G,duration:ne})}a&&a(Y)},e.onWheel=function(){U._ts&&U.pause(),an()-p>1e3&&(E=0,p=an())},e.onChange=function(Y,H,ne,L,fe){if(zr!==E&&x(),H&&n&&g(b(L[2]===H?z+(Y.startX-Y.x):g()+H-L[1])),ne){h.offset&&M();var Le=fe[2]===ne,st=Le?k+Y.startY-Y.y:h()+ne-fe[1],ze=P(st);Le&&st!==ze&&(k+=ze-st),h(ze)}(ne||H)&&zi()},e.onEnable=function(){nc(c,n?!1:"x"),rt.addEventListener("refresh",G),Zt(et,"resize",G),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),A.enable()},e.onDisable=function(){nc(c,!0),Kt(et,"resize",G),rt.removeEventListener("refresh",G),A.kill()},e.lockAxis=e.lockAxis!==!1,o=new Bt(e),o.iOS=$i,$i&&!h()&&h(1),$i&&be.ticker.add(pi),q=o._dc,U=be.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:kp(h,h(),function(){return U.pause()})},onUpdate:zi,onComplete:q.vars.onComplete}),o};rt.sort=function(r){if(ln(r))return Je.sort(r);var e=et.pageYOffset||0;return rt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+et.innerHeight}),Je.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};rt.observe=function(r){return new Bt(r)};rt.normalizeScroll=function(r){if(typeof r>"u")return mn;if(r===!0&&mn)return mn.enable();if(r===!1){mn&&mn.kill(),mn=r;return}var e=r instanceof Bt?r:bS(r);return mn&&mn.target===e.target&&mn.kill(),Gr(e.target)&&(mn=e),e};rt.core={_getVelocityProp:ou,_inputObserver:Hp,_scrollers:tt,_proxies:yi,bridge:{ss:function(){ii||Xr("scrollStart"),ii=an()},ref:function(){return sn}}};Pp()&&be.registerPlugin(rt);Ki.registerPlugin(rt);class AS{constructor(){this.init()}init(){this.setupLoading(),this.setupNavigation(),this.setupHero3D(),this.setupAbout3D(),this.setupProducts(),this.setupAnimations(),this.setupCounters(),this.setupContactForm()}setupLoading(){window.addEventListener("load",()=>{setTimeout(()=>{const e=document.getElementById("loading-screen");e.classList.add("hidden"),setTimeout(()=>{e.style.display="none"},500)},2e3)})}setupNavigation(){const e=document.querySelector(".navbar"),t=document.getElementById("nav-toggle"),n=document.getElementById("nav-menu"),i=document.querySelectorAll(".nav-link");window.addEventListener("scroll",()=>{window.scrollY>100?e.classList.add("scrolled"):e.classList.remove("scrolled")}),t.addEventListener("click",()=>{n.classList.toggle("active")}),i.forEach(s=>{s.addEventListener("click",()=>{n.classList.remove("active")})}),i.forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const o=s.getAttribute("href"),l=document.querySelector(o);if(l){const c=l.offsetTop-80;window.scrollTo({top:c,behavior:"smooth"})}})})}setupHero3D(){const e=document.getElementById("hero-canvas");if(!e)return;const t=new Af,n=new Bn(75,window.innerWidth/window.innerHeight,.1,1e3),i=new rh({canvas:e,alpha:!0});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=[new ks(1,1,1),new Ho(.7,32,32),new Au(.7,1.5,32),new wu(.7,.3,16,100)],a=[new Ks({color:6717162,transparent:!0,opacity:.8}),new Ks({color:7752610,transparent:!0,opacity:.8}),new Ks({color:15766523,transparent:!0,opacity:.8}),new Ks({color:5221630,transparent:!0,opacity:.8})],o=[];for(let f=0;f<20;f++){const d=s[Math.floor(Math.random()*s.length)],h=a[Math.floor(Math.random()*a.length)],g=new fi(d,h);g.position.x=(Math.random()-.5)*20,g.position.y=(Math.random()-.5)*20,g.position.z=(Math.random()-.5)*20,g.rotation.x=Math.random()*Math.PI,g.rotation.y=Math.random()*Math.PI,t.add(g),o.push(g)}const l=new Lf(16777215,.6);t.add(l);const c=new Df(16777215,.8);c.position.set(10,10,5),t.add(c),n.position.z=15;const u=()=>{requestAnimationFrame(u),o.forEach((f,d)=>{f.rotation.x+=.005+d*.001,f.rotation.y+=.005+d*.001,f.position.y+=Math.sin(Date.now()*.001+d)*.01}),i.render(t,n)};u(),window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)})}setupAbout3D(){const e=document.getElementById("about-canvas");if(!e)return;const t=new Af,n=new Bn(75,e.clientWidth/e.clientHeight,.1,1e3),i=new rh({canvas:e,alpha:!0});i.setSize(e.clientWidth,e.clientHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=[];for(let f=0;f<15;f++){const d=new Ho(.1,16,16),h=new Ks({color:2450411,transparent:!0,opacity:.8}),g=new fi(d,h);g.position.x=(Math.random()-.5)*8,g.position.y=(Math.random()-.5)*6,g.position.z=(Math.random()-.5)*4,t.add(g),s.push(g)}const a=new cd({color:6717162,transparent:!0,opacity:.3});s.forEach((f,d)=>{s.forEach((h,g)=>{if(d!==g&&Math.random()>.7){const _=new ri().setFromPoints([f.position,h.position]),m=new s_(_,a);t.add(m)}})});const o=new Lf(16777215,.6);t.add(o);const l=new Df(16777215,.8);l.position.set(5,5,5),t.add(l),n.position.z=8;const c=()=>{requestAnimationFrame(c),s.forEach((f,d)=>{f.rotation.x+=.01,f.rotation.y+=.01,f.position.y+=Math.sin(Date.now()*.001+d)*.005}),i.render(t,n)};c(),new ResizeObserver(()=>{const f=e.clientWidth,d=e.clientHeight;n.aspect=f/d,n.updateProjectionMatrix(),i.setSize(f,d)}).observe(e)}setupProducts(){const e=[{id:1,title:"Premium Wireless Headphones",description:"High-quality audio with noise cancellation",price:"$45.99",category:"electronics",image:"https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400"},{id:2,title:"Smart Home Security Camera",description:"1080p HD with night vision and motion detection",price:"$89.99",category:"electronics",image:"https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400"},{id:3,title:"Ergonomic Office Chair",description:"Comfortable seating for long work hours",price:"$199.99",category:"home",image:"https://images.pexels.com/photos/586344/pexels-photo-586344.jpeg?auto=compress&cs=tinysrgb&w=400"},{id:4,title:"Designer Sunglasses",description:"UV protection with stylish frames",price:"$29.99",category:"fashion",image:"https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400"},{id:5,title:"Fitness Tracker Watch",description:"Monitor your health and fitness goals",price:"$79.99",category:"sports",image:"https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400"},{id:6,title:"Portable Bluetooth Speaker",description:"Waterproof with 12-hour battery life",price:"$39.99",category:"electronics",image:"https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400"},{id:7,title:"LED Desk Lamp",description:"Adjustable brightness with USB charging",price:"$34.99",category:"home",image:"https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400"},{id:8,title:"Premium Backpack",description:"Durable and spacious for daily use",price:"$59.99",category:"fashion",image:"https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400"}],t=document.getElementById("products-grid"),n=document.querySelectorAll(".category-btn"),i=a=>{t.innerHTML=a.map(o=>`
        <div class="product-card" data-category="${o.category}">
          <div class="product-image">
            <img src="${o.image}" alt="${o.title}" loading="lazy">
          </div>
          <div class="product-info">
            <h3 class="product-title">${o.title}</h3>
            <p class="product-description">${o.description}</p>
            <div class="product-price">
              <div>
                <div class="price">${o.price}</div>
                <div class="price-label">Min. order: 50 units</div>
              </div>
            </div>
          </div>
        </div>
      `).join(""),Ki.fromTo(".product-card",{opacity:0,y:50},{opacity:1,y:0,duration:.6,stagger:.1,ease:"power2.out"})},s=a=>{if(a==="all")i(e);else{const o=e.filter(l=>l.category===a);i(o)}};n.forEach(a=>{a.addEventListener("click",()=>{n.forEach(l=>l.classList.remove("active")),a.classList.add("active");const o=a.dataset.category;s(o)})}),i(e)}setupAnimations(){Ki.utils.toArray(".section-title").forEach(e=>{Ki.fromTo(e,{opacity:0,y:50},{opacity:1,y:0,duration:1,scrollTrigger:{trigger:e,start:"top 80%",end:"bottom 20%",toggleActions:"play none none reverse"}})}),Ki.utils.toArray(".service-card").forEach((e,t)=>{Ki.fromTo(e,{opacity:0,y:50,rotationY:-15},{opacity:1,y:0,rotationY:0,duration:.8,delay:t*.2,scrollTrigger:{trigger:e,start:"top 80%",end:"bottom 20%",toggleActions:"play none none reverse"}})}),Ki.to(".hero-3d-container",{yPercent:-50,ease:"none",scrollTrigger:{trigger:".hero",start:"top bottom",end:"bottom top",scrub:!0}})}setupCounters(){const e=document.querySelectorAll(".stat-number"),t=s=>{const a=parseInt(s.dataset.target),l=a/(2e3/16);let c=0;const u=setInterval(()=>{c+=l,c>=a&&(c=a,clearInterval(u)),s.textContent=Math.floor(c).toLocaleString()},16)},n=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(e.forEach(o=>t(o)),n.unobserve(a.target))})}),i=document.querySelector(".hero");i&&n.observe(i)}setupContactForm(){const e=document.querySelector(".contact-form");e.addEventListener("submit",t=>{t.preventDefault();const n=e.querySelector('button[type="submit"]'),i=n.textContent;n.textContent="Sending...",n.disabled=!0,setTimeout(()=>{n.textContent="Message Sent!",n.style.background="#10b981",setTimeout(()=>{n.textContent=i,n.disabled=!1,n.style.background="",e.reset()},2e3)},1500)})}}new AS;
