(this.webpackJsonpshoppingcart=this.webpackJsonpshoppingcart||[]).push([[0],{49:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(22),s=c.n(r),i=(c(49),c(7)),o=c(44),l=c(18),u=c(17),d=c.n(u),j=c(25),b=c(40),O=c.n(b),m=c(43),p={loading_Product:!1,activoProduct:!1,array:[],offset:0},h="LOADING_PRODUCT",x="ADD_TO_CART",g="LOADING_ERROR";var f=c(5),v=c(1),N=function(){var e=Object(f.b)(),t=Object(a.useState)([]),c=Object(l.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(1),i=Object(l.a)(s,2),o=i[0],u=i[1],b=Object(a.useState)(),m=Object(l.a)(b,2),p=m[0],N=m[1];return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://dev2.th3insid3.com/api/products?page=".concat(o));case 2:t=e.sent,c=t.data.products,r(c),a=t.data.paginatorInfo.hasMorePages,N(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o]),Object(v.jsxs)("div",{className:"container text-center mt-4",children:[Object(v.jsx)("h1",{children:"Product List"}),Object(v.jsxs)("div",{className:"d-flex justify-content-center mt-5",children:[o>1&&Object(v.jsx)("button",{onClick:function(){u(o-1)},className:"btn btn-dark btn-sm",children:"Anterior"}),p&&Object(v.jsx)("button",{onClick:function(){u(o+1)},className:"btn btn-dark btn-sm mx-3",children:"Sigiente"})]}),Object(v.jsx)("div",{className:"row",children:n.map((function(t,c){return Object(v.jsx)("div",{className:"col-md-6 col-lg-3 my-5",style:{height:"350px"},children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("img",{src:t.image,className:"card-img-top",alt:t.name}),Object(v.jsxs)("div",{className:"card-body ",children:[Object(v.jsx)("h5",{className:"card-title",children:t.name}),Object(v.jsxs)("p",{children:["Price: ",t.price]}),Object(v.jsx)("button",{onClick:function(){return e(function(e){return function(t,c){t({type:h}),console.log(c().cart.array);try{t({type:x,payload:{name:e.name,id:e.id,price:e.price,image:e.image}}),localStorage.setItem("product",JSON.stringify({name:e.name,id:e.id,price:e.price,image:e.image}))}catch(a){t({type:g})}}}(t))},className:"btn btn-dark",children:"Add to cart"})]})]})},c)}))})]})},y=c(26);c(74);y.a.initializeApp({apiKey:"AIzaSyASH7P6ubcU1hF9xj-lJRjne99ugk7Xm8A",authDomain:"reto-proyecto-redux.firebaseapp.com",projectId:"reto-proyecto-redux",storageBucket:"reto-proyecto-redux.appspot.com",messagingSenderId:"672365176151",appId:"1:672365176151:web:ea0d3f32dafab9a35fca12",measurementId:"G-2SR68SEWNG"});var S=y.a.auth(),I={loading:!1,activo:!1},k="LOADING",A="USUARIO_ERROR",_="USUARIO_EXITO",w="SIGNOUT";var P=c(4),E=Object(P.g)((function(e){var t=Object(f.b)(),c=Object(f.c)((function(e){return e.usuario.loading})),a=Object(f.c)((function(e){return e.usuario.activo}));return n.a.useEffect((function(){a&&e.history.push("/")}),[a,e]),Object(v.jsxs)("div",{className:"mt-5 text-center",children:[Object(v.jsx)("h3",{children:"ingresar Con Google"}),Object(v.jsx)("hr",{}),Object(v.jsx)("button",{className:"btn btn-dark",onClick:function(){return t(function(){var e=Object(j.a)(d.a.mark((function e(t){var c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:k}),e.prev=1,c=new y.a.auth.GoogleAuthProvider,e.next=5,S.signInWithPopup(c);case 5:a=e.sent,t({type:_,payload:{uid:a.user.uid,email:a.user.email,nombre:a.user.displayName}}),localStorage.setItem("user",JSON.stringify({uid:a.user.uid,email:a.user.email,nombre:a.user.displayName})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),t({type:A});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())},disabled:c,children:"Acceder"})]})})),R=c(14),C=Object(P.g)((function(e){var t=Object(f.b)(),c=function(){t((function(e){S.signOut(),localStorage.removeItem("user"),e({type:w})})),e.history.push("/login")},a=Object(f.c)((function(e){return e.usuario.activo})),n=Object(f.c)((function(e){return e.usuario.user}));return Object(v.jsxs)("div",{className:"navbar navbar-dark bg-dark",children:[a?Object(v.jsx)(R.b,{className:"navbar-brand mx-4",to:"/",children:n.nombre}):Object(v.jsx)(R.b,{className:"navbar-brand mx-4",to:"/",children:"Redux Challenge"}),a?Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)(R.c,{to:"/cartShopping",children:Object(v.jsx)("img",{src:"https://imgur.com/w4yBTk5.jpg",style:{height:"60px"},alt:"cart"})}),Object(v.jsx)(R.c,{className:"btn btn-dark mr-2",to:"/",exact:!0,children:"Inicio"}),Object(v.jsx)("button",{className:"btn btn-dark mr-2",onClick:function(){return c()},children:"Salir"})]}):Object(v.jsx)(R.c,{className:"btn btn-dark mr-2",to:"/login",exact:!0,children:"Login"})]})})),D=function(){var e=Object(f.c)((function(e){return e.cart.array})),t=Object(f.c)((function(e){return e.cart.activoProduct}));return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h1",{className:"text-center mt-2 text-uppercase",children:"Lista de productos en el carrito"}),Object(v.jsx)("div",{className:"row",children:t?e.map((function(e,t){return Object(v.jsx)("div",{className:"col-md-3 col-lg-3 mx-2 my-5 text-center",style:{height:"350px"},children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("img",{src:e.image,className:"card-img-top",alt:""}),Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("h5",{className:"card-title",children:e.name}),Object(v.jsxs)("p",{children:["Price: ",e.price]})]}),Object(v.jsx)("button",{className:"btn btn-dark btn-sm",children:"Eliminar"})]})},t)})):Object(v.jsx)("h3",{className:"text-center mt-5",children:"No tienes ningun producto en el carrito"})})]})},G=function(){var e=n.a.useState(!1),t=Object(l.a)(e,2),c=t[0],a=t[1];n.a.useEffect((function(){S.onAuthStateChanged((function(e){a(e||null)}))}),[]);var r=function(e){var t=e.component,a=e.path,n=Object(o.a)(e,["component","path"]);return localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")).uid===c.uid?Object(v.jsx)(P.b,Object(i.a)({component:t,path:a},n)):Object(v.jsx)(P.a,Object(i.a)({to:"/login"},n))};return!1!==c?Object(v.jsx)(R.a,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)(C,{}),Object(v.jsxs)(P.d,{children:[Object(v.jsx)(r,{component:N,path:"/",exact:!0}),Object(v.jsx)(r,{component:D,path:"/cartShopping",exact:!0}),Object(v.jsx)(P.b,{component:E,path:"/login",exact:!0})]})]})}):Object(v.jsx)("div",{className:"text-center",children:Object(v.jsx)("div",{className:"spinner-border",role:"status",children:Object(v.jsx)("span",{className:"sr-only"})})})},T=c(15),U=c(42),J=Object(T.c)({usuario:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case A:return Object(i.a)({},I);case _:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,activo:!0,user:t.payload});case w:return Object(i.a)({},I);default:return Object(i.a)({},e)}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object.assign({},e,{loading_Product:!0});case x:return Object.assign({},e,{activoProduct:!0,loading_Product:!1,array:[].concat(Object(m.a)(e.array),[t.payload])});case g:return{initialData:p};default:return Object(i.a)({},e)}}}),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d;var X=function(){var e,t=Object(T.e)(J,L(Object(T.a)(U.a)));return e=t.dispatch,localStorage.getItem("user")&&e({type:_,payload:JSON.parse(localStorage.getItem("user"))}),t}();s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(f.a,{store:X,children:Object(v.jsx)(G,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.a56c2d73.chunk.js.map