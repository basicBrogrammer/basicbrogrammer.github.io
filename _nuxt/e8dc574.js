(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{233:function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},234:function(t,r,e){var content=e(240);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("90386e46",content,!0,{sourceMap:!1})},235:function(t,r,e){"use strict";e.r(r);var n={props:{tag:{type:String,required:!0}}},o=(e(239),e(18)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("nuxt-link",{class:this.tag,attrs:{to:{name:"index",query:{tag:this.tag}}}},[this._v(this._s(this.tag))])}),[],!1,null,"40907a5d",null);r.default=component.exports},236:function(t,r,e){"use strict";var n=e(2),o=e(237).trim;n({target:"String",proto:!0,forced:e(238)("trim")},{trim:function(){return o(this)}})},237:function(t,r,e){var n=e(15),o="["+e(233)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(r){var e=String(n(r));return 1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(l,"")),e}};t.exports={start:d(1),end:d(2),trim:d(3)}},238:function(t,r,e){var n=e(6),o=e(233);t.exports=function(t){return n((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},239:function(t,r,e){"use strict";e(234)},240:function(t,r,e){(r=e(26)(!1)).push([t.i,'a[data-v-40907a5d]{padding:.25rem;margin:.25rem;border-width:2px;border-radius:.5rem;border-color:currentColor;font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}a[data-v-40907a5d]:before{content:"#"}.vue[data-v-40907a5d]{color:#35495e;background-color:#41b883}.github[data-v-40907a5d]{color:#000;background-color:#fff}.react[data-v-40907a5d]{color:#61dafb;background-color:#282c34}.javascript[data-v-40907a5d]{color:#000;background-color:#fcdc00}.redux[data-v-40907a5d]{color:#fff;background-color:#764abc;border-color:#000}.opensource[data-v-40907a5d]{color:#fff;background-color:green}',""]),t.exports=r},242:function(t,r,e){var content=e(248);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("6cc72be6",content,!0,{sourceMap:!1})},243:function(t,r,e){var content=e(250);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("1b7833da",content,!0,{sourceMap:!1})},244:function(t,r,e){"use strict";e.r(r);e(28),e(33),e(75),e(236);var n={components:{ArticleTag:e(235).default},props:{article:{type:Object,required:!0}},computed:{tags:function(){return this.article.tags.split(",").map((function(t){return t.trim()}))}}},o=(e(247),e(18)),component=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"my-4 border-2 rounded-lg border-primary"},[e("nuxt-link",{attrs:{to:{name:"blog-slug",params:{slug:t.article.slug}}}},[e("div",{staticClass:"cover-img",style:{backgroundImage:"url("+t.article.cover_image+")"}})]),t._v(" "),e("div",{staticClass:"p-3"},[e("nuxt-link",{attrs:{to:{name:"blog-slug",params:{slug:t.article.slug}}}},[e("h3",{staticClass:"font-bold tracking-wider text-center color-secondary"},[t._v("\n        "+t._s(t.article.title)+"\n      ")])]),t._v(" "),e("p",{staticClass:"py-1 my-2 font-medium border-t-2"},[t._v("\n      "+t._s(t.article.description)+"\n    ")]),t._v(" "),t._l(t.tags,(function(t){return e("ArticleTag",{key:t,attrs:{tag:t}})}))],2)],1)}),[],!1,null,"6f07103d",null);r.default=component.exports;installComponents(component,{ArticleTag:e(235).default})},247:function(t,r,e){"use strict";e(242)},248:function(t,r,e){(r=e(26)(!1)).push([t.i,".cover-img[data-v-6f07103d]{display:block;width:100%;height:auto;padding-bottom:25%;background-size:cover;background-position:50%;border-radius:.5rem}",""]),t.exports=r},249:function(t,r,e){"use strict";e(243)},250:function(t,r,e){(r=e(26)(!1)).push([t.i,"",""]),t.exports=r},265:function(t,r,e){"use strict";e.r(r);e(23);var n=e(5),o={components:{ArticleCard:e(244).default},watchQuery:["tag"],asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function r(){var e,n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.$content,t.params,n=t.query,r.next=3,e("articles").only(["title","description","img","slug","tags","cover_image"]).where({tags:{$contains:n.tag||""},published:!0}).sortBy("createdAt","asc").fetch();case 3:return o=r.sent,r.abrupt("return",{articles:o});case 5:case"end":return r.stop()}}),r)})))()}},c=(e(249),e(18)),component=Object(c.a)(o,(function(){var t=this.$createElement,r=this._self._c||t;return r("div",this._l(this.articles,(function(article){return r("ArticleCard",{key:article.slug,attrs:{article:article}})})),1)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{ArticleCard:e(244).default})}}]);