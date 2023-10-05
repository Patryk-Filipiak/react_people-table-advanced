(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(26),r=c(8),a=(c(36),c(37),c(13)),s=c.n(a),l=c(1),i=function(e){var t=e.isActive;return s()("navbar-item",{"has-background-grey-lighter":t})},o=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(r.c,{to:"/",className:i,children:"Home"}),Object(l.jsx)(r.c,{to:"/people",className:i,children:"People"})]})})})},j=(c(39),c(3)),u=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h1",{className:"title",children:"Home Page"})})},d=c(9),b=c(5);function h(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(b.a)(e,2),n=t[0],r=t[1];null===r?c.delete(n):Array.isArray(r)?(c.delete(n),r.forEach((function(e){c.append(n,e)}))):c.set(n,r)})),c.toString()}var m=c(24),O=c(27),p=["children","params"],x=function(e){var t=e.children,c=e.params,n=Object(O.a)(e,p),a=Object(r.d)(),s=Object(b.a)(a,1)[0];return Object(l.jsx)(r.b,Object(m.a)(Object(m.a)({to:{search:h(s,c)}},n),{},{children:t}))},f={All:null,Male:"m",Female:"f"},g=function(e){var t=e.centuries,c=Object(r.d)(),n=Object(b.a)(c,2),a=n[0],i=n[1],o={century:a.getAll("century").map(Number),sex:a.get("sex"),query:a.get("query")};return Object(l.jsxs)("nav",{className:"panel",children:[Object(l.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(l.jsx)("p",{className:"panel-tabs","data-cy":"SexFilter",children:Object.keys(f).map((function(e){return Object(l.jsx)(x,{className:f[e]===o.sex?"is-active":"",params:{sex:f[e]},children:e},e)}))}),Object(l.jsx)("div",{className:"panel-block",children:Object(l.jsxs)("p",{className:"control has-icons-left",children:[Object(l.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:o.query||"",onChange:function(e){i(h(a,{query:e.target.value||null}))}}),Object(l.jsx)("span",{className:"icon is-left",children:Object(l.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(l.jsx)("div",{className:"panel-block",children:Object(l.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(l.jsx)("div",{className:"level-left",children:Object(l.jsx)("div",{className:"level-left",children:t.map((function(e){return Object(l.jsx)(x,{"data-cy":"century",className:s()("button mr-1",{"is-info":o.century.includes(e)}),params:{century:o.century.includes(e)?o.century.filter((function(t){return t!==e})).map(String):[].concat(Object(d.a)(o.century),[e]).map(String)},children:e},e)}))})}),Object(l.jsx)("div",{className:"level-right ml-4",children:Object(l.jsx)(x,{"data-cy":"centuryALL",className:"button is-success ".concat(o.century.length>0?"is-outlined":""),params:{century:null},children:"All"})})]})}),Object(l.jsx)("div",{className:"panel-block",children:Object(l.jsx)(x,{"data-cy":"centuryALL",className:"button is-link is-outlined is-fullwidth",params:{century:null,query:null,sex:null},children:"Reset all filters"})})]})},v=(c(40),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),N=function(e){var t=e.person,c=function(e){return e||"-"},n=Object(j.m)().pathname,a=Object(r.d)(),s=Object(b.a)(a,1)[0];return Object(l.jsxs)("tr",{"data-cy":"person",className:n==="/people/".concat(t.slug)?"has-background-warning":"",children:[Object(l.jsx)("td",{children:Object(l.jsx)(r.b,{to:"/people/".concat(t.slug),className:"m"===t.sex?"":"has-text-danger",children:t.name})}),Object(l.jsx)("td",{children:t.sex}),Object(l.jsx)("td",{children:t.born}),Object(l.jsx)("td",{children:t.died}),Object(l.jsx)("td",{children:t.mother?Object(l.jsx)(r.b,{to:"/people/".concat(t.mother.slug,"?").concat(s.toString()),className:"has-text-danger",children:t.motherName}):c(t.motherName)}),Object(l.jsx)("td",{children:t.father?Object(l.jsx)(r.b,{to:"/people/".concat(t.father.slug,"?").concat(s.toString()),children:t.fatherName}):c(t.fatherName)})]})},y=function(){var e=Object(r.d)(),t=Object(b.a)(e,1)[0],c=t.get("sort"),n=t.get("order"),a=function(e){return c===e&&null===n?"desc":null};return Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[["Name","Sex","Born","Died"].map((function(e){return Object(l.jsx)("th",{children:Object(l.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[e,Object(l.jsx)(x,{params:{sort:(t=e.toLowerCase(),null===n?t:null),order:a(e.toLowerCase())},children:Object(l.jsx)("span",{className:"icon",children:Object(l.jsx)("i",{className:s()("fas",{"fa-sort":c!==e.toLowerCase(),"fa-sort-down":"desc"===n&&c===e.toLowerCase(),"fa-sort-up":"desc"!==n&&c===e.toLowerCase()})})})})]})},e);var t})),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})})},w=function(e){var t=e.list;return Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)(y,{}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(N,{person:e},e.slug)}))})]})},L=c(0),S=c(4),k=c(7),A="https://mate-academy.github.io/react_people-table/api/people.json";function C(e){return new Promise((function(t){return setTimeout(t,e)}))}function E(){return(E=Object(k.a)(Object(S.a)().mark((function e(){return Object(S.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C(500).then((function(){return fetch(A)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(){var e=Object(L.useState)(!0),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(L.useState)([]),s=Object(b.a)(a,2),l=s[0],i=s[1],o=Object(L.useState)(!1),j=Object(b.a)(o,2),u=j[0],d=j[1];Object(L.useEffect)((function(){(function(){return E.apply(this,arguments)})().then((function(e){i(e.map((function(t){return Object.assign(t,{mother:e.find((function(e){return e.name===t.motherName}))||null,father:e.find((function(e){return e.name===t.fatherName}))||null,century:Math.ceil(t.born/100)})})))})).catch((function(){return d(!0)})).finally((function(){return n(!1)}))}),[]);var h=Object(L.useMemo)((function(){return l.reduce((function(e,t){return!t.century||e.includes(t.century)||e.push(t.century),e}),[]).sort()}),[l]),m=Object(r.d)(),O=Object(b.a)(m,1)[0],p=new RegExp((O.get("query")||"").trim(),"i"),x=Object(L.useMemo)((function(){var e=l.filter((function(e){var t=e.name,c=e.motherName,n=e.fatherName;return t.search(p)>-1||c&&c.search(p)>-1||n&&n.search(p)>-1})).filter((function(e){var t=e.sex;return!O.get("sex")||O.get("sex")===t})).filter((function(e){var t,c=e.century;return 0===O.getAll("century").length||O.getAll("century").includes(null===(t=c||"")||void 0===t?void 0:t.toString())})).sort((function(e,t){if(null===O.get("sort"))return 0;var c=O.get("sort");return"string"===typeof e[c]?(e[c]||"").toString().localeCompare((t[c]||"").toString()):Number(e[c])-Number(t[c])}));return"desc"===O.get("order")?e.reverse():e}),[l,O]),f=!O.get("sex")||O.getAll("century").length>0||O.get("query");return{isLoading:c,people:l,hasError:u,centuriesList:h,isFiltered:f,peopleList:x}},P=function(){var e=F(),t=e.isLoading,c=e.people,n=e.hasError,r=e.centuriesList,a=e.isFiltered,s=e.peopleList;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(l.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:!t&&Object(l.jsx)(g,{centuries:r})}),Object(l.jsx)("div",{className:"column",children:Object(l.jsxs)("div",{className:"box table-container",children:[t&&Object(l.jsx)(v,{}),!t&&n&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",children:"Something went wrong"}),!t&&0===c.length&&!n&&Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!n&&!t&&a&&0===s.length&&Object(l.jsx)("p",{children:"There are no people matching the current search criteria"}),!t&&!n&&s.length>0&&Object(l.jsx)(w,{list:s})]})})]})})]})},q=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})},M=function(){return Object(l.jsx)("main",{className:"section",children:Object(l.jsxs)(j.d,{children:[Object(l.jsx)(j.b,{path:"/home",element:Object(l.jsx)(j.a,{to:"/"})}),Object(l.jsx)(j.b,{path:"/",element:Object(l.jsx)(u,{})}),Object(l.jsx)(j.b,{path:"/people",element:Object(l.jsx)(P,{})}),Object(l.jsx)(j.b,{path:"/people/:slug",element:Object(l.jsx)(P,{})}),Object(l.jsx)(j.b,{path:"*",element:Object(l.jsx)(q,{})})]})})},_=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(o,{}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)(M,{})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(r.a,{children:Object(l.jsx)(_,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.397f7692.chunk.js.map