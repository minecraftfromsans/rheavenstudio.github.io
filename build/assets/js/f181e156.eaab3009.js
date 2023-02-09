"use strict";(self.webpackChunkheavenstudio_docs=self.webpackChunkheavenstudio_docs||[]).push([[325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={},a="File Structure",s={unversionedId:"Guidelines/file_structure",id:"Guidelines/file_structure",title:"File Structure",description:"Using Keyword",source:"@site/docs-api/Guidelines/2_file_structure.md",sourceDirName:"Guidelines",slug:"/Guidelines/file_structure",permalink:"/docs-api/Guidelines/file_structure",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Types of Casing",permalink:"/docs-api/Guidelines/types-of-casing"},next:{title:"Commenting",permalink:"/docs-api/Guidelines/commenting"}},l={},u=[{value:"Using Keyword",id:"using-keyword",level:2},{value:"Namespaces",id:"namespaces",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-structure"},"File Structure"),(0,i.kt)("h2",{id:"using-keyword"},"Using Keyword"),(0,i.kt)("p",null,"This refers to the ",(0,i.kt)("inlineCode",{parentName:"p"},"using")," keyword in regards to ",(0,i.kt)("em",{parentName:"p"},"library imports"),". This does not refer to ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-statement"},(0,i.kt)("inlineCode",{parentName:"a"},"using")," statement"),"."),(0,i.kt)("p",null,"Library imports should be separated by four ",(0,i.kt)("em",{parentName:"p"},'"sections"'),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},".NET Defaults"),(0,i.kt)("li",{parentName:"ol"},"Unity Engine, Unity Editor, etc."),(0,i.kt)("li",{parentName:"ol"},"Heaven Studio classes."),(0,i.kt)("li",{parentName:"ol"},"Custom libraries and packages.")),(0,i.kt)("p",null,"In these ",(0,i.kt)("em",{parentName:"p"},"sections")," the imports should be ordered alphabetically."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Auto ordering in VSCode:"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("em",{parentName:"li"},"section")," you want to order."),(0,i.kt)("li",{parentName:"ol"},"Press ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl+P")),(0,i.kt)("li",{parentName:"ol"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},">sort")),(0,i.kt)("li",{parentName:"ol"},"Press ",(0,i.kt)("inlineCode",{parentName:"li"},"Sort Lines Ascending")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"using System;\nusing System.Collections;\nusing System.Collections.Generic;\n\nusing UnityEditor;\nusing UnityEngine;\n\nusing HeavenStudio.Editor;\nusing HeavenStudio.Game;\n\nusing NAudio;\nusing NaughtyBezierCurves;\nusing NVorbis;\nusing Starpelly;\n")),(0,i.kt)("h2",{id:"namespaces"},"Namespaces"))}d.isMDXComponent=!0}}]);