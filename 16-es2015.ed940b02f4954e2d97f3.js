(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{EZuM:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var s=e("pMnS"),a=e("MKJQ"),r=e("sZkV"),i=e("iInd"),o=e("SVse"),c=e("s7LF"),b=e("IheW");let p=(()=>{class l{constructor(l){this.http=l,this.corsUrl="https://cors-anywhere.herokuapp.com/",this.baseUrlPlaces="https://maps.googleapis.com/maps/api/place/nearbysearch/json",this.keyAPI="AIzaSyAhf3JleYpal9S-xouJYH8lf7Dvz5Y2Nko",this.baseUrlPlaceDetail="https://maps.googleapis.com/maps/api/place/details/json",this.fields="name",this.baseUrlLocation="https://maps.googleapis.com/maps/api/place/findplacefromtext/json"}getLocation(l){const n=new URL(this.corsUrl+this.baseUrlLocation),e=new URLSearchParams;return e.set("input",l),e.set("inputtype","textquery"),e.set("fields","geometry"),e.set("key",this.keyAPI),n.search=new URLSearchParams(e).toString(),this.http.get(""+n).pipe()}getAllRestaurantLyon(l,n){const e=new URL(this.corsUrl+this.baseUrlPlaces),t=new URLSearchParams;return t.set("location",l+","+n),t.set("radius","10"),t.set("type","restaurant"),t.set("keyword","restaurant"),t.set("key",this.keyAPI),e.search=new URLSearchParams(t).toString(),this.http.get(""+e).pipe()}getPlaceName(l,n){const e=new URL(this.corsUrl+this.baseUrlPlaceDetail),t=new URLSearchParams;return t.set("placeid",l),t.set("fields",n),t.set("key",this.keyAPI),e.search=new URLSearchParams(t).toString(),this.http.get(""+e).pipe()}}return l.ngInjectableDef=t.Ob({factory:function(){return new l(t.Pb(b.c))},token:l,providedIn:"root"}),l})();const h=[];class d{constructor(l){this.restaurantsService=l}ngOnInit(){}ionViewWillEnter(){}search(l){this.serviceLocation(l)}services(){this.serviceLocation(this.inputAddress)}serviceLocation(l){JSON.parse(window.sessionStorage.getItem("location")),this.restaurantsService.getLocation(l).subscribe(l=>{const n=JSON.parse(JSON.stringify(l)).candidates[0].geometry.location;this.resultLocation=JSON.stringify(n.lat+","+n.lng),window.sessionStorage.setItem("location",this.resultLocation),this.serviceRestaurant(n.lat,n.lng)})}serviceRestaurant(l,n){this.restaurantsService.getAllRestaurantLyon(l,n).subscribe(l=>{this.resultTest=JSON.stringify(l),this.createTest(h,this.resultTest)})}createTest(l,n){l=[];const e=JSON.parse(this.resultTest),t={name:"",rating:0,formatted_address:"",weekday_text:"",formatted_phone_number:"",website:"",user_ratings_total:0};e.results.forEach(n=>{this.affectation(l,n,t)})}affectation(l,n,e){this.restaurantsService.getPlaceName(n.place_id,"name,rating,formatted_phone_number,formatted_address,opening_hours,website,user_ratings_total").subscribe(n=>{const t=JSON.stringify(n),u=JSON.parse(t).result;(e={name:"",rating:0,formatted_address:"",weekday_text:"",formatted_phone_number:"",website:"",user_ratings_total:0}).formatted_address=u.formatted_address,e.formatted_phone_number=u.formatted_phone_number,e.name=u.name,e.rating=u.rating,e.user_ratings_total=u.user_ratings_total,e.website=u.website,null!=u.opening_hours&&(e.weekday_text=u.opening_hours.weekday_text),l.push(e),this.restaurants=l,window.sessionStorage.setItem("allRes",JSON.stringify(l))})}loadAllRestaurants(){this.restaurants=JSON.parse(window.sessionStorage.getItem("allRestaurants"))}}var g=t.nb({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,19,"ion-card",[],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Bb(l,2).onClick()&&u),"click"===n&&(u=!1!==t.Bb(l,5).onClick(e)&&u),u}),a.J,a.e)),t.ob(1,49152,null,0,r.l,[t.h,t.k,t.x],null,null),t.ob(2,16384,null,0,i.n,[i.m,i.a,[8,null],t.B,t.k],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),t.Eb(3,{name:0,formatted_address:1}),t.Cb(4,1),t.ob(5,737280,null,0,r.Gb,[o.h,r.Db,t.k,i.m,[2,i.n]],null,null),(l()(),t.pb(6,0,null,0,13,"ion-card-content",[],null,null,null,a.F,a.f)),t.ob(7,49152,null,0,r.m,[t.h,t.k,t.x],null,null),(l()(),t.pb(8,0,null,0,1,"ion-img",[],null,null,null,a.P,a.o)),t.ob(9,49152,null,0,r.C,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.pb(10,0,null,0,9,"ion-list",[["lines","none"]],null,null,null,a.T,a.s)),t.ob(11,49152,null,0,r.N,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(12,0,null,0,7,"ion-item",[],null,null,null,a.R,a.q)),t.ob(13,49152,null,0,r.G,[t.h,t.k,t.x],null,null),(l()(),t.pb(14,0,null,0,5,"ion-text",[],null,null,null,a.Y,a.x)),t.ob(15,49152,null,0,r.tb,[t.h,t.k,t.x],null,null),(l()(),t.Ib(16,0,["",""])),(l()(),t.pb(17,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(18,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(19,0,["",""]))],(function(l,n){var e=l(n,3,0,n.context.$implicit.name,n.context.$implicit.formatted_address),t=l(n,4,0,"restaurant-info");l(n,2,0,e,t),l(n,5,0),l(n,9,0,n.context.$implicit.img),l(n,11,0,"none")}),(function(l,n){l(n,16,0,n.context.$implicit.name),l(n,19,0,n.context.$implicit.formatted_address)}))}function f(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,32,"body",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,25,"ion-header",[],null,null,null,a.N,a.m)),t.ob(2,49152,null,0,r.A,[t.h,t.k,t.x],null,null),(l()(),t.pb(3,0,null,0,4,"ion-toolbar",[],null,null,null,a.bb,a.A)),t.ob(4,49152,null,0,r.yb,[t.h,t.k,t.x],null,null),(l()(),t.pb(5,0,null,0,2,"ion-title",[],null,null,null,a.ab,a.z)),t.ob(6,49152,null,0,r.wb,[t.h,t.k,t.x],null,null),(l()(),t.Ib(-1,0,["Restaurants"])),(l()(),t.pb(8,0,null,0,18,"ion-list",[],null,null,null,a.T,a.s)),t.ob(9,49152,null,0,r.N,[t.h,t.k,t.x],null,null),(l()(),t.pb(10,0,null,0,11,"ion-item",[["lines","none"]],null,null,null,a.R,a.q)),t.ob(11,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(12,0,null,0,2,"ion-label",[["color","primary"],["stacked",""]],null,null,null,a.S,a.r)),t.ob(13,49152,null,0,r.M,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.Ib(-1,0,["Place"])),(l()(),t.pb(15,0,null,0,6,"ion-input",[["placeholder","ex: Part-Dieu, 12 rue Republique, ..."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,s=l.component;return"ionBlur"===n&&(u=!1!==t.Bb(l,16)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Bb(l,16)._handleInputEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(s.inputAddress=e)&&u),u}),a.Q,a.p)),t.ob(16,16384,null,0,r.Hb,[t.k],null,null),t.Fb(1024,null,c.d,(function(l){return[l]}),[r.Hb]),t.ob(18,671744,null,0,c.i,[[8,null],[8,null],[8,null],[6,c.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,c.e,null,[c.i]),t.ob(20,16384,null,0,c.f,[[4,c.e]],null,null),t.ob(21,49152,null,0,r.F,[t.h,t.k,t.x],{placeholder:[0,"placeholder"]},null),(l()(),t.pb(22,0,null,0,4,"ion-item",[["lines","none"]],null,null,null,a.R,a.q)),t.ob(23,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(24,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=!1!==u.search(u.inputAddress)&&t),t}),a.D,a.c)),t.ob(25,49152,null,0,r.j,[t.h,t.k,t.x],null,null),(l()(),t.Ib(-1,0,["Search"])),(l()(),t.pb(27,0,null,null,5,"ion-content",[],null,null,null,a.L,a.k)),t.ob(28,49152,null,0,r.t,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,m)),t.ob(30,278528,null,0,o.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(31,0,null,0,1,"ion-item",[],null,null,null,a.R,a.q)),t.ob(32,49152,null,0,r.G,[t.h,t.k,t.x],null,null)],(function(l,n){var e=n.component;l(n,11,0,"none"),l(n,13,0,"primary"),l(n,18,0,e.inputAddress),l(n,21,0,"ex: Part-Dieu, 12 rue Republique, ..."),l(n,23,0,"none"),l(n,30,0,e.restaurants)}),(function(l,n){l(n,15,0,t.Bb(n,20).ngClassUntouched,t.Bb(n,20).ngClassTouched,t.Bb(n,20).ngClassPristine,t.Bb(n,20).ngClassDirty,t.Bb(n,20).ngClassValid,t.Bb(n,20).ngClassInvalid,t.Bb(n,20).ngClassPending)}))}function k(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"app-restaurants",[],null,null,null,f,g)),t.ob(1,114688,null,0,d,[p],null,null)],(function(l,n){l(n,1,0)}),null)}var y=t.lb("app-restaurants",d,k,{},{},[]);const _=()=>e.e(15).then(e.bind(null,"+2Dg")).then(l=>l.RestaurantInfoPageModuleNgFactory);class w{}e.d(n,"RestaurantsPageModuleNgFactory",(function(){return x}));var x=t.mb(u,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[s.a,y]],[3,t.j],t.v]),t.zb(4608,o.k,o.j,[t.s,[2,o.q]]),t.zb(4608,c.l,c.l,[]),t.zb(4608,r.b,r.b,[t.x,t.g]),t.zb(4608,r.Cb,r.Cb,[r.b,t.j,t.p]),t.zb(4608,r.Fb,r.Fb,[r.b,t.j,t.p]),t.zb(1073742336,o.b,o.b,[]),t.zb(1073742336,c.k,c.k,[]),t.zb(1073742336,c.c,c.c,[]),t.zb(1073742336,r.Ab,r.Ab,[]),t.zb(1073742336,i.o,i.o,[[2,i.t],[2,i.m]]),t.zb(1073742336,w,w,[]),t.zb(1073742336,u,u,[]),t.zb(1024,i.k,(function(){return[[{path:"",component:d},{path:"restaurant-info",loadChildren:_}]]}),[])])}))}}]);