(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{237:function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},238:function(t,r,e){var content=e(244);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(25).default)("1539aed1",content,!0,{sourceMap:!1})},239:function(t,r,e){"use strict";e.r(r);var n={props:{tag:{type:String,required:!0}}},o=(e(243),e(14)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("span",{class:this.tag},[this._v(this._s(this.tag))])}),[],!1,null,"7177ec08",null);r.default=component.exports},240:function(t,r,e){"use strict";var n=e(2),o=e(241).trim;n({target:"String",proto:!0,forced:e(242)("trim")},{trim:function(){return o(this)}})},241:function(t,r,e){var n=e(16),o="["+e(237)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(t){return function(r){var e=String(n(r));return 1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(l,"")),e}};t.exports={start:f(1),end:f(2),trim:f(3)}},242:function(t,r,e){var n=e(6),o=e(237);t.exports=function(t){return n((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},243:function(t,r,e){"use strict";e(238)},244:function(t,r,e){(r=e(24)(!1)).push([t.i,'span[data-v-7177ec08]{padding:.25rem;margin:.25rem;border-width:2px;border-radius:.5rem;border-color:currentColor;font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}span[data-v-7177ec08]:before{content:"#"}.react[data-v-7177ec08]{color:#61dafb;background-color:#282c34}.javascript[data-v-7177ec08]{color:#000;background-color:#fcdc00}.redux[data-v-7177ec08]{color:#fff;background-color:#764abc;border-color:#000}',""]),t.exports=r},265:function(t,r,e){"use strict";e.r(r);e(28),e(33),e(75),e(240),e(23);var n=e(5),o={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function r(){var e,n,article;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.$content,n=t.params,r.next=3,e("articles",n.slug).fetch();case 3:return article=r.sent,r.abrupt("return",{article:article});case 5:case"end":return r.stop()}}),r)})))()},computed:{tags:function(){return this.article.tags.split(",").map((function(t){return t.trim()}))}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},c=e(14),component=Object(c.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("img",{staticClass:"border-2 rounded-lg",attrs:{src:t.article.cover_image}}),t._v(" "),e("h1",{staticClass:"color-primary text-3xl font-extrabold my-1"},[t._v("\n    "+t._s(t.article.title)+"\n  ")]),t._v(" "),t._l(t.tags,(function(t){return e("ArticleTag",{key:t,attrs:{tag:t}})})),t._v(" "),e("nuxt-content",{staticClass:"my-2",attrs:{document:t.article}})],2)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{ArticleTag:e(239).default})}}]);