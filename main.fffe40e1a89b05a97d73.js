(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("x3Br"),t("D/wG"),t("SgDD"),t("L1EO");var r=t("jffb"),i=t.n(r);t("JBxO"),t("FdtR");var o=t("QJ3N"),u=(t("bzha"),t("zrP5"),{input:document.querySelector(".input"),countries:document.querySelector(".countries")});u.input.addEventListener("input",i()((function(e){var n=e.target.value;if(""===n.trim())return;(t=n.trim(),fetch("https://restcountries.eu/rest/v2/name/"+t).then((function(e){return 404===e.status?"error":e.json()}))).then((function(e){if(e.length>=2&&e.length<=10){u.countries.innerHTML="";var n=e.reduce((function(e,n){return e+"<li>"+n.name+"</li>"}),"");u.countries.insertAdjacentHTML("beforeend",n)}if(1===e.length){u.countries.innerHTML="";var t=e[0],r=t.capital,i=t.population,c=t.languages,a=t.flag,s="<li>\n        <p>Population: "+i+"</p>\n        <p>Capital: "+r+"</p>\n        <ul>"+c.reduce((function(e,n){return e+"<li>"+n.name+"</li>"}),"")+"</ul>\n        <img src='"+a+"' width='300px'>\n        </li>";u.countries.insertAdjacentHTML("beforeend",s),console.log(c)}e.length>10&&(u.countries.innerHTML="",Object(o.error)({text:"Too many matches found. Please enter a more specific query!",delay:3e3}))})).catch((function(){u.countries.innerHTML="",Object(o.error)({text:"Error more specific query!",delay:3e3})}));var t}),500))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.fffe40e1a89b05a97d73.js.map