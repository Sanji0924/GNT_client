(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-224d75e6"],{"057f":function(t,e,s){var i=s("c6b6"),o=s("fc6a"),n=s("241c").f,a=s("4dae"),r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return n(t)}catch(e){return a(r)}};t.exports.f=function(t){return r&&"Window"==i(t)?c(t):n(o(t))}},3423:function(t,e,s){"use strict";s("bf59")},"428f":function(t,e,s){var i=s("da84");t.exports=i},"44fb":function(t,e,s){"use strict";s("6e06")},5530:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));s("b64b"),s("a4d3"),s("4de4"),s("d3b7"),s("e439"),s("159b"),s("dbb4");function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){i(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}},"6e06":function(t,e,s){},"746f":function(t,e,s){var i=s("428f"),o=s("1a2d"),n=s("e538"),a=s("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});o(e,t)||a(e,t,{value:n.f(t)})}},a4d3:function(t,e,s){"use strict";var i=s("23e7"),o=s("da84"),n=s("d066"),a=s("2ba4"),r=s("c65b"),c=s("e330"),l=s("c430"),h=s("83ab"),p=s("4930"),u=s("d039"),f=s("1a2d"),m=s("e8b5"),d=s("1626"),b=s("861d"),v=s("3a9b"),g=s("d9b5"),w=s("825a"),_=s("7b0b"),y=s("fc6a"),C=s("a04b"),I=s("577e"),S=s("5c6c"),k=s("7c73"),x=s("df75"),O=s("241c"),D=s("057f"),P=s("7418"),j=s("06cf"),M=s("9bf2"),R=s("37e8"),$=s("d1e7"),L=s("f36a"),F=s("6eeb"),N=s("5692"),E=s("f772"),T=s("d012"),B=s("90e3"),z=s("b622"),J=s("e538"),U=s("746f"),q=s("d44e"),A=s("69f3"),H=s("b727").forEach,V=E("hidden"),X="Symbol",K="prototype",Q=z("toPrimitive"),W=A.set,G=A.getterFor(X),Y=Object[K],Z=o.Symbol,tt=Z&&Z[K],et=o.TypeError,st=o.QObject,it=n("JSON","stringify"),ot=j.f,nt=M.f,at=D.f,rt=$.f,ct=c([].push),lt=N("symbols"),ht=N("op-symbols"),pt=N("string-to-symbol-registry"),ut=N("symbol-to-string-registry"),ft=N("wks"),mt=!st||!st[K]||!st[K].findChild,dt=h&&u((function(){return 7!=k(nt({},"a",{get:function(){return nt(this,"a",{value:7}).a}})).a}))?function(t,e,s){var i=ot(Y,e);i&&delete Y[e],nt(t,e,s),i&&t!==Y&&nt(Y,e,i)}:nt,bt=function(t,e){var s=lt[t]=k(tt);return W(s,{type:X,tag:t,description:e}),h||(s.description=e),s},vt=function(t,e,s){t===Y&&vt(ht,e,s),w(t);var i=C(e);return w(s),f(lt,i)?(s.enumerable?(f(t,V)&&t[V][i]&&(t[V][i]=!1),s=k(s,{enumerable:S(0,!1)})):(f(t,V)||nt(t,V,S(1,{})),t[V][i]=!0),dt(t,i,s)):nt(t,i,s)},gt=function(t,e){w(t);var s=y(e),i=x(s).concat(It(s));return H(i,(function(e){h&&!r(_t,s,e)||vt(t,e,s[e])})),t},wt=function(t,e){return void 0===e?k(t):gt(k(t),e)},_t=function(t){var e=C(t),s=r(rt,this,e);return!(this===Y&&f(lt,e)&&!f(ht,e))&&(!(s||!f(this,e)||!f(lt,e)||f(this,V)&&this[V][e])||s)},yt=function(t,e){var s=y(t),i=C(e);if(s!==Y||!f(lt,i)||f(ht,i)){var o=ot(s,i);return!o||!f(lt,i)||f(s,V)&&s[V][i]||(o.enumerable=!0),o}},Ct=function(t){var e=at(y(t)),s=[];return H(e,(function(t){f(lt,t)||f(T,t)||ct(s,t)})),s},It=function(t){var e=t===Y,s=at(e?ht:y(t)),i=[];return H(s,(function(t){!f(lt,t)||e&&!f(Y,t)||ct(i,lt[t])})),i};if(p||(Z=function(){if(v(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?I(arguments[0]):void 0,e=B(t),s=function(t){this===Y&&r(s,ht,t),f(this,V)&&f(this[V],e)&&(this[V][e]=!1),dt(this,e,S(1,t))};return h&&mt&&dt(Y,e,{configurable:!0,set:s}),bt(e,t)},tt=Z[K],F(tt,"toString",(function(){return G(this).tag})),F(Z,"withoutSetter",(function(t){return bt(B(t),t)})),$.f=_t,M.f=vt,R.f=gt,j.f=yt,O.f=D.f=Ct,P.f=It,J.f=function(t){return bt(z(t),t)},h&&(nt(tt,"description",{configurable:!0,get:function(){return G(this).description}}),l||F(Y,"propertyIsEnumerable",_t,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!p,sham:!p},{Symbol:Z}),H(x(ft),(function(t){U(t)})),i({target:X,stat:!0,forced:!p},{for:function(t){var e=I(t);if(f(pt,e))return pt[e];var s=Z(e);return pt[e]=s,ut[s]=e,s},keyFor:function(t){if(!g(t))throw et(t+" is not a symbol");if(f(ut,t))return ut[t]},useSetter:function(){mt=!0},useSimple:function(){mt=!1}}),i({target:"Object",stat:!0,forced:!p,sham:!h},{create:wt,defineProperty:vt,defineProperties:gt,getOwnPropertyDescriptor:yt}),i({target:"Object",stat:!0,forced:!p},{getOwnPropertyNames:Ct,getOwnPropertySymbols:It}),i({target:"Object",stat:!0,forced:u((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(_(t))}}),it){var St=!p||u((function(){var t=Z();return"[null]"!=it([t])||"{}"!=it({a:t})||"{}"!=it(Object(t))}));i({target:"JSON",stat:!0,forced:St},{stringify:function(t,e,s){var i=L(arguments),o=e;if((b(e)||void 0!==t)&&!g(t))return m(e)||(e=function(t,e){if(d(o)&&(e=r(o,this,t,e)),!g(e))return e}),i[1]=e,a(it,null,i)}})}if(!tt[Q]){var kt=tt.valueOf;F(tt,Q,(function(t){return r(kt,this)}))}q(Z,X),T[V]=!0},a715:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container pt-6"},[s("vue-easy-lightbox",{attrs:{escDisabled:"",moveDisabled:"",visible:t.visible,imgs:t.imgs,index:t.index},on:{hide:t.handleHide}}),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 pt-5"},[s("div",{staticClass:"d-flex align-items-center mb-3"},[s("a",{staticClass:"p-2",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.backToPrePage.apply(null,arguments)}}},[s("span",{staticClass:"material-icons"},[t._v(" arrow_back_ios ")])]),s("h1",{staticClass:"h2 text-white fw-bold me-3"},[t._v(" "+t._s(t.shop.Name)+" ")]),s("a",{staticClass:"shop-icon text-danger rounded-3 d-flex align-items-center",attrs:{href:"#"}},[t.memberFavorites.includes(t.shop.ShopID)?s("span",{staticClass:"shop-icon shop-icon-istrue material-icons",on:{click:function(e){return e.preventDefault(),t.removeFavorite(t.shop.ShopID)}}},[t._v(" favorite ")]):s("span",{staticClass:"shop-icon material-icons",on:{click:function(e){return e.preventDefault(),t.addFavorite(t.shop.ShopID)}}},[t._v(" favorite ")])])]),s("div",{staticClass:"shop-img mb-5",style:{backgroundImage:"url("+t.shop.Image1+")"},on:{click:t.showMultiple}}),s("section",{staticClass:"mb-5"},[t._m(0),s("ul",{staticClass:"list-unstyled bg-light rounded-3 p-3"},[s("li",{staticClass:"d-flex mb-2"},[s("span",{staticClass:"material-icons me-1"},[t._v(" schedule ")]),t._v(" 營業時間"),s("br"),t._v(" 星期一："+t._s(t.shop.Monday)+" "),s("br"),t._v(" 星期二："+t._s(t.shop.Tuesday)+" "),s("br"),t._v(" 星期三："+t._s(t.shop.Wednesday)+" "),s("br"),t._v(" 星期四："+t._s(t.shop.Thursday)+" "),s("br"),t._v(" 星期五："+t._s(t.shop.Friday)+" "),s("br"),t._v(" 星期六："+t._s(t.shop.Saturday)+" "),s("br"),t._v(" 星期日："+t._s(t.shop.Sunday)+" "),s("br")]),s("li",{staticClass:"d-flex mb-2 fw-bold"},[s("span",{staticClass:"material-icons me-1"},[t._v(" monetization_on ")]),t._v("個人低消："+t._s(t.shop.Min)+" ")]),s("li",{staticClass:"d-flex mb-2"},[s("span",{staticClass:"material-icons me-1"},[t._v(" place ")]),t._v("商家地點："+t._s(t.shop.Address)+" ")]),s("li",{staticClass:"d-flex mb-2"},[s("span",{staticClass:"material-icons me-1"},[t._v(" phone ")]),t._v("聯絡電話："),s("a",{staticClass:"d-inline text-dark border-1 border-bottom border-dark link-hover-opacity",attrs:{href:"tel:+886"+t.shop.Phone}},[t._v(t._s(t.shop.Phone))])]),t.shop.Facebook?s("li",{staticClass:"d-flex mb-2"},[s("span",{staticClass:"material-icons me-1"},[t._v(" public ")]),t._v(" FaceBook："),s("a",{staticClass:"d-inline text-dark border-1 border-bottom border-dark link-hover-opacity",attrs:{href:""+t.shop.Facebook,target:"blank"}},[t._v("點我前往")])]):t._e(),t.shop.Instagram?s("li",{staticClass:"d-flex mb-3"},[s("span",{staticClass:"material-icons me-1"},[t._v(" camera_alt ")]),t._v(" Instagram："),s("a",{staticClass:"d-inline text-dark border-1 border-bottom border-dark link-hover-opacity",attrs:{href:""+t.shop.Instagram,target:"blank"}},[t._v("點我前往")])]):t._e(),s("li",{staticClass:"d-flex"},[s("span",{staticClass:"material-icons me-1"},[t._v(" local_offer ")]),t._v("店家標籤："),t._l(t.shop.tags,(function(e){return s("span",{key:e,staticClass:"d-flex align-items-center fs-6 badge bg-info ms-2"},[t._v(t._s(e))])}))],2)])]),"無"!==t.shop.notes?s("section",{staticClass:"mb-5"},[t._m(1),s("div",{staticClass:"p-3 bg-light rounded-3"},t._l(t.shop.notes,(function(e){return s("p",{key:e+123,staticClass:"text-dark mb-0 pb-1"},[t._v(" "+t._s(e)+" ")])})),0)]):t._e(),s("section",{staticClass:"mb-5"},[s("div",[s("h3",{staticClass:"text-white mb-3 d-flex align-items-center"},[s("span",{staticClass:"material-icons me-1"},[t._v(" explore ")]),t._v("地理位置 "),s("a",{staticClass:"btn btn-outline-primary ms-3",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openRouteModal.apply(null,arguments)}}},[t._v("加入行程")])])]),t.isLoading?s("div",{staticClass:"spinner-border text-primary",staticStyle:{"z-index":"10000"},attrs:{role:"status"}},[s("span",{staticClass:"visually-hidden"},[t._v("Loading...")])]):t._e(),s("keep-alive",[s("LeafletComponentShop",{ref:"map",attrs:{id:t.shop.ShopID},on:{"change-page":t.changePage,"send-loading":t.changeLoading}})],1)],1),s("section",{staticClass:"mb-5"},[t._m(2),s("SwiperShopReviews",{ref:"swiperReviews",attrs:{"shop-id":t.shop.ShopID},on:{"change-page":t.changePage}})],1),s("div",{staticClass:"row justify-content-center"},[s("section",{staticClass:"col-12 col-md-8 col-lg-6 mb-5"},[t._m(3),t.review.MemberID?s("form",{ref:"form",attrs:{action:"#"}},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label text-white",attrs:{for:"rank"}},[t._v("評分")]),s("select",{directives:[{name:"model",rawName:"v-model.number",value:t.review.Score,expression:"review.Score",modifiers:{number:!0}}],staticClass:"form-select",attrs:{name:"rank",id:"rank",required:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var s="_value"in e?e._value:e.value;return t._n(s)}));t.$set(t.review,"Score",e.target.multiple?s:s[0])}}},[s("option",{attrs:{disabled:"",selected:""},domProps:{value:0}},[t._v("請選擇評分")]),t._l(5,(function(e){return s("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2)]),s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label text-white",attrs:{for:"shopContent"}},[t._v("留言")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.review.RContent,expression:"review.RContent"}],staticClass:"form-control",attrs:{name:"shopContent",id:"shopContent",cols:"20",rows:"5",required:""},domProps:{value:t.review.RContent},on:{input:function(e){e.target.composing||t.$set(t.review,"RContent",e.target.value)}}})]),s("div",{staticClass:"form-floating mb-3 text-center"},[s("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"submit",disabled:t.isDisabled||!t.review.RContent||!t.review.Score},on:{click:function(e){return e.preventDefault(),t.addShopReview.apply(null,arguments)}}},[t._v(" 送出 "),t.isDisabled?s("span",{staticClass:"spinner-grow spinner-grow-sm"}):t._e()])])]):s("div",{staticClass:"d-flex flex-column align-items-center"},[s("h5",{staticClass:"text-white"},[t._v("登入即可留下個人心得")]),s("router-link",{staticClass:"btn btn-primary text-center",attrs:{to:"/memberlogin"}},[t._v("按此登入")])],1)])])])]),s("RouteModal",{ref:"modal",attrs:{routes:t.memberRoutes,titles:t.memberRouteTitles,"shop-id":t.shopId},on:{"get-routes":t.getRoutes}})],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{staticClass:"text-white mb-2 d-flex align-items-center"},[s("span",{staticClass:"material-icons me-1"},[t._v(" info ")]),t._v("商家資訊 ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{staticClass:"text-white mb-3 d-flex align-items-center"},[s("span",{staticClass:"material-icons me-1"},[t._v(" feed ")]),t._v("商家備註 ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{staticClass:"text-white mb-3 d-flex align-items-center justify-content-center"},[s("span",{staticClass:"material-icons me-1"},[t._v(" share ")]),t._v("心得分享 ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{staticClass:"text-white mb-3 d-flex align-items-center justify-content-center"},[s("span",{staticClass:"material-icons me-1"},[t._v(" edit ")]),t._v("撰寫心得 ")])}],n=s("5530"),a=(s("a9e3"),s("ac1f"),s("1276"),s("d3b7"),s("159b"),s("caad"),s("2532"),s("99af"),s("4de4"),s("a434"),s("5319"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isLoading?t._e():s("div",[s("l-map",{staticStyle:{height:"300px",width:"100%"},attrs:{zoom:t.zoom,center:t.center}},[s("l-control-layers",{attrs:{position:"topright"}}),t._l(t.tileProviders,(function(t){return s("l-tile-layer",{key:t.name,attrs:{name:t.name,visible:t.visible,url:t.url,attribution:t.attribution,"layer-type":"base"}})})),t._l(t.markers,(function(e,i){return s("l-marker",{key:i,attrs:{"lat-lng":e.point,icon:e.icon}},[s("l-popup",[t._v(" "+t._s(e.shopName)+" "),s("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.replace(e.shopID)}}},[t._v(" 點擊查看店家 ")])])],1)}))],2)],1)}),r=[],c=s("e11e"),l=s("2699"),h=s("a40a"),p=s("4e2b"),u=s("f60f"),f=s("9ee8"),m={name:"CustomPath",components:{LMap:l["a"],LTileLayer:h["a"],LMarker:p["a"],LPopup:u["a"],LControlLayers:f["a"]},props:["id"],data:function(){return{tileProviders:[{name:"OpenStreetMap",visible:!1,attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},{name:"OpenDarkMap",visible:!0,url:"https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=15IcrzrfcUzGjoEPHByJUZl9BP5KL0eCqCUBvNXbqbkfEUPKwewonYHQX7NXx80B",attribution:'<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> <a href="https://www.openstreetmap.org/copyright"> &copyOpenStreetMap</a>'}],zoom:15,path:"http://leafletjs.com/examples/custom-icons/leaf-green.png",center:[22.996,120.2],url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",iconCurrent:Object(c["icon"])({iconUrl:"marker.svg",iconSize:[50,50]}),iconOther:Object(c["icon"])({iconUrl:"barMarker.svg",iconSize:[50,50]}),markers:[{point:Object(c["latLng"])(),shopID:this.id,shopName:"",icon:Object(c["icon"])({iconUrl:"barMarker.svg",iconSize:[50,50]})}],barMarkers:[],shops:[],bars:[],shopId:0,isLoading:!0}},watch:{id:function(){this.getPoints(),console.log("觸發元件 watch")}},methods:{getPoints:function(){var t=this;this.markers=[],this.isLoading=!0;var e="https://localhost:44333/api/ShopInfoes";this.$http.get(e).then((function(e){t.shops=e.data;var s=[];t.shops.forEach((function(e){var i=e.ShopID,o=e.Name,n=Object(c["latLng"])(e.Latitude,e.Longitude),a=t.iconOther;i===t.id&&(a=t.iconCurrent,s.push(e.Latitude,e.Longitude)),t.markers.push({point:n,shopID:i,shopName:o,icon:a}),t.center=s})),t.isLoading=!1,t.$emit("send-loading",t.isLoading)})).catch((function(t){console.dir(t)}))},replace:function(t){this.$emit("change-page",t),this.$router.push("/shops/shop/".concat(t))}},mounted:function(){}},d=m,b=s("2877"),v=Object(b["a"])(d,a,r,!1,null,null,null),g=v.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[0==t.shopReviews.length?s("p",{staticClass:"fs-5 text-primary text-center"},[t._v(" 尚未有人分享，趕快至下方分享您對這間店的心得 ")]):s("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},t._l(t.shopReviews,(function(e){return s("swiper-slide",{key:e.MemberID},[s("div",{staticClass:"card w-100 h-100 border-1 rounded-0"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(" "+t._s(e.MemberInfo.Account)+" ")]),s("ul",{staticClass:"list-unstyled d-flex align-items-center text-light mb-2"},[s("li",t._l(e.Score,(function(e){return s("span",{key:e,staticClass:"material-icons"},[t._v(" star ")])})),0)]),s("p",{staticClass:"card-text"},[t._v(" "+t._s(e.RContent)+" ")])])])])})),1)],1)},_=[],y=s("7212"),C=(s("a7a3"),{props:["shopId"],components:{Swiper:y["Swiper"],SwiperSlide:y["SwiperSlide"]},data:function(){return{swiperOption:{slidesPerView:5,spaceBetween:0,speed:2e3,autoplay:{delay:1e3},breakpoints:{320:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:4,spaceBetween:0},992:{slidesPerView:5,spaceBetween:0}}},shopReviews:[]}},watch:{shopId:function(){this.getShopReviews(),console.log("觸發元件 watch")}},methods:{getShopReviews:function(){var t=this,e="https://localhost:44333/api/shopreviews";this.$http.get(e).then((function(e){console.log(e),t.shopReviews=e.data.filter((function(e){return e.ShopID==t.shopId})),t.shopReviews.forEach((function(t,e){console.log(e,t.MemberInfo.Account)}))})).catch((function(t){console.dir(t)}))},replace:function(t){this.$emit("change-page",t),this.$router.push("/shops/shop/".concat(t))}}}),I=C,S=(s("44fb"),Object(b["a"])(I,w,_,!1,null,"99aa2826",null)),k=S.exports,x=s("ac2a"),O={props:["type"],components:{LeafletComponentShop:g,SwiperShopReviews:k,RouteModal:x["a"]},data:function(){return{isDisabled:!1,shop:{notes:[]},tempShop:{},review:{},memberRouteTitles:[],memberRoutes:[],memberFavorites:[],shopReviews:[],shopId:0,id:0,isLoading:!0,visible:!1,index:0,imgs:[]}},watch:{shopId:function(){this.isLoading=!0,this.getShopInfo()}},inject:["emitter"],methods:{getShopInfo:function(){var t=this,e=this.$route.params.id;this.shopId=Number(e);var s="https://localhost:44333/api/ShopInfoes/".concat(this.shopId);this.$http.get(s).then((function(e){t.shop=e.data[0],t.shop.TagIds.length>1&&(t.shop.tags=e.data[0].TagIds.split(",")),t.shop.Note.length>1?t.shop.notes=e.data[0].Note.split("/"):t.shop.notes=e.data[0].Note,console.log(t.shop),t.updateClick(t.shop)})).catch((function(t){console.dir(t)}))},updateClick:function(t){this.tempShop=Object(n["a"])({},t),this.tempShop.Click+=1;var e="https://localhost:44333/api/ShopInfoes/".concat(this.shopId);this.$http.put(e,this.tempShop).then((function(t){console.log(t.data)})).catch((function(t){console.dir(t)}))},getRoutes:function(){var t=this;this.memberRouteTitles=[];var e="https://localhost:44333/api/Routes/".concat(this.review.MemberID);this.$http.get(e).then((function(e){t.memberRoutes=e.data,t.memberRoutes.forEach((function(e){t.memberRouteTitles.push({title:e.Title,routeId:e.RouteID})}))})).catch((function(t){console.log(t)}))},addShopReview:function(){var t=this;this.isDisabled=!0,this.review.ShopID=this.shopId;var e="https://localhost:44333/api/shopreviews";this.review.MemberID?this.$http.post(e,this.review).then((function(){t.emitter.emit("push-message",{style:"success",title:"已新增，感謝您的留言"}),t.$refs.swiperReviews.getShopReviews(),t.review.RContent="",t.isDisabled=!1})).catch((function(e){console.dir(e),t.emitter.emit("push-message",{style:"danger",title:"加入店家心得結果",content:"您已經在此店家留言過，請至會員後台修改心得"}),t.$refs.form.reset()})):(alert("請先登入"),this.$router.push("/memberLogin"))},getMemberFavorites:function(){var t=this,e="https://localhost:44333/api/MemberFavorites/".concat(this.review.MemberID);this.$http.get(e).then((function(e){e.data.forEach((function(e){t.memberFavorites.includes(e.ShopID)||t.memberFavorites.push(e.ShopID)}))})).catch((function(t){console.dir(t)}))},addFavorite:function(t){var e=this;if(this.review.MemberID){var s="https://localhost:44333/api/MemberFavorites",i={MemberID:this.review.MemberID,ShopID:t};this.$http.post(s,i).then((function(){e.memberFavorites.includes(t)||(e.memberFavorites.push(t),e.emitter.emit("push-message",{style:"success",title:"已加入我的最愛"}),e.getMemberFavorites())})).catch((function(t){console.dir(t)}))}else this.$swal.fire({icon:"info",title:"請先登入",showCancelButton:!0,confirmButtonText:"登入",cancelButtonText:"關閉"}).then((function(t){t.isConfirmed&&e.$router.push("/memberlogin")}))},removeFavorite:function(t){var e=this,s="https://localhost:44333/api/MemberFavorites/".concat(this.review.MemberID,"/").concat(t);this.$http.delete(s).then((function(){e.memberFavorites.filter((function(s,i){(s==t||e.memberFavorites.includes(s.ShopID))&&(e.memberFavorites.splice(i,1),e.emitter.emit("push-message",{style:"primary",title:"已從我的最愛中移除"}))})),e.getMemberFavorites()})).catch((function(t){console.dir(t)}))},getMemberID:function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,"$1");this.review.MemberID=Number(t),this.getRoutes()},backToPrePage:function(){this.$router.back()},changePage:function(t){this.shopId=t},changeLoading:function(t){this.isLoading=t},openRouteModal:function(){var t=this;this.review.MemberID?this.$refs.modal.openModal():this.$swal.fire({icon:"info",title:"請先登入",showCancelButton:!0,confirmButtonText:"登入",cancelButtonText:"關閉"}).then((function(e){e.isConfirmed&&t.$router.push("/memberlogin")}))},showMultiple:function(){this.imgs=[],""!=this.shop.Image1&&this.imgs.push(this.shop.Image1),""!=this.shop.Image2&&this.imgs.push(this.shop.Image2),""!=this.shop.Image3&&this.imgs.push(this.shop.Image3),""!=this.shop.Image4&&this.imgs.push(this.shop.Image4),""!=this.shop.Image5&&this.imgs.push(this.shop.Image5),this.index=0,this.show()},show:function(){this.visible=!0},handleHide:function(){this.visible=!1}},mounted:function(){this.getShopInfo(),this.getMemberID(),this.getMemberFavorites(),this.updateClick()}},D=O,P=(s("3423"),Object(b["a"])(D,i,o,!1,null,"4749c687",null));e["default"]=P.exports},bf59:function(t,e,s){},dbb4:function(t,e,s){var i=s("23e7"),o=s("83ab"),n=s("56ef"),a=s("fc6a"),r=s("06cf"),c=s("8418");i({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,s,i=a(t),o=r.f,l=n(i),h={},p=0;while(l.length>p)s=o(i,e=l[p++]),void 0!==s&&c(h,e,s);return h}})},e439:function(t,e,s){var i=s("23e7"),o=s("d039"),n=s("fc6a"),a=s("06cf").f,r=s("83ab"),c=o((function(){a(1)})),l=!r||c;i({target:"Object",stat:!0,forced:l,sham:!r},{getOwnPropertyDescriptor:function(t,e){return a(n(t),e)}})},e538:function(t,e,s){var i=s("b622");e.f=i}}]);
//# sourceMappingURL=chunk-224d75e6.7b889f79.js.map