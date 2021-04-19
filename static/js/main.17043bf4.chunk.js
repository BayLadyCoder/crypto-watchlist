(this["webpackJsonpcrypto-folio"]=this["webpackJsonpcrypto-folio"]||[]).push([[0],{42:function(n,e,t){},67:function(n,e,t){"use strict";t.r(e);var r,c,i,o,a,s,l,d,b,p,j,x,h,u,f,g,O,m,y,k,v,w,C,_,M,z,S,L=t(0),F=t.n(L),P=t(31),B=t.n(P),D=(t(42),t(2)),E=t(3),I=E.b.div(r||(r=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #000000;\n  min-height: 100vh;\n  width: 100vw;\n"]))),$={color:{primary:"#14deb5",primary_bright:"#40EDC9",secondary:"#ae19d4"}},J=t(11),R=E.b.header(c||(c=Object(D.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  border-bottom: 1px solid #466e64;\n"]))),T=E.b.header(i||(i=Object(D.a)(["\n  max-width: 1300px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 60px;\n"]))),U=E.b.div(o||(o=Object(D.a)(["\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  cursor: pointer;\n"]))),W=E.b.img(a||(a=Object(D.a)(["\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n"]))),H=E.b.h1(s||(s=Object(D.a)(['\n  font-family: "Zen Dots", cursive;\n  font-size: 17px;\n  color: ',";\n  font-weight: 400;\n"])),$.color.primary),N=Object(E.b)(J.b)(l||(l=Object(D.a)(["\n  background: transparent;\n  border: none;\n  text-decoration: none;\n  white-space: nowrap;\n  padding: 10px 20px;\n  font-size: 16px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: bold;\n  color: ",";\n\n  &:hover {\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.primary?$.color.primary:"#fff"}),(function(n){return n.primary?"#3d3d3d":$.color.secondary}),(function(n){return n.primary?$.color.primary_bright:"#fff"})),V=t.p+"static/media/logo.8eb4d0f4.png",Z=Object(E.a)(d||(d=Object(D.a)(["\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    /* font-family: \"Hammersmith One\", sans-serif; */\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n    outline-color: #4a4a4a;\n}\n"]))),q=E.b.div(b||(b=Object(D.a)(["\n  width: 90%;\n  max-width: 1300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),A=Object(E.b)(J.b)(p||(p=Object(D.a)(["\n  border-radius: 4px;\n  background: ",";\n  padding: ",";\n  color: #000;\n  font-size: ",";\n  border: none;\n  white-space: nowrap;\n  cursor: pointer;\n  font-weight: bold;\n\n  &:hover {\n    transition: all 0.3s ease-out;\n    color: #fff;\n    background: ",";\n  }\n\n  @media screen and (max-width: 960px) {\n    width: 100%;\n  }\n"])),(function(n){return n.primary?$.color.primary:$.color.secondary}),(function(n){return n.big?"12px 64px":"10px 20px"}),(function(n){return n.fontBig?"20px":"16px"}),(function(n){return n.primary?$.color.secondary:$.color.primary})),G=E.b.h1(j||(j=Object(D.a)(["\n  font-size: 30px;\n  color: #fff;\n"]))),K=Z,Q=t(1),X=function(){return Object(Q.jsx)(R,{children:Object(Q.jsxs)(T,{children:[Object(Q.jsxs)(U,{children:[Object(Q.jsx)(W,{src:V,alt:"img"}),Object(Q.jsx)(H,{children:"Crypto Folio"})]}),Object(Q.jsxs)(U,{children:[Object(Q.jsx)(N,{to:"/crypto-folio",children:"Market"}),Object(Q.jsx)(N,{to:"/watchlist",children:"Watchlist"}),Object(Q.jsx)(N,{to:"/portfolio",children:"Portfolio"})]}),Object(Q.jsxs)(U,{children:[Object(Q.jsx)(N,{to:"/login",primary:!0,children:"Log In"}),Object(Q.jsx)(A,{to:"/sign-up",primary:!0,children:"Sign Up"})]})]})})},Y=t(37),nn=(E.b.div(x||(x=Object(D.a)(["\n  display: flex;\n"]))),E.b.div(h||(h=Object(D.a)(["\n  display: flex;\n  align-items: center;\n  padding: 0 15px;\n  margin-top: 50px;\n"])))),en=E.b.input(u||(u=Object(D.a)(["\n  padding: 10px 20px;\n  width: 350px;\n  background: #404040;\n  color: ",";\n  border: none;\n  border-radius: 40px;\n  box-shadow: 0 0 3px 0 #ddd;\n  -moz-outline-radius: 40px;\n  color: #fff;\n  &::placeholder {\n    color: #d1d1d1;\n  }\n"])),$.color.primary_bright),tn=Object(E.b)(Y.a)(f||(f=Object(D.a)(["\n  color: #d1d1d1;\n  font-size: 20px;\n"]))),rn=(E.b.button(g||(g=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  padding: 8px 10px;\n  position: relative;\n  left: -50px;\n\n  &:hover {\n    background: #222;\n  }\n  &:hover "," {\n    color: ",";\n  }\n"])),tn,$.color.primary),{marketCoins:[],setMarketCoins:function(){return null},marketCoins100:[],setMarketCoins100:function(){return null},fetchMarketCoins:function(){return null},isLoading:!0}),cn=Object(L.createContext)(rn),on=function(){var n=Object(L.useContext)(cn).marketCoins;return Object(Q.jsxs)(nn,{children:[Object(Q.jsx)(en,{list:"coins",placeholder:"Search",type:"text"}),Object(Q.jsx)("datalist",{id:"coins",children:n.map((function(n){return Object(Q.jsx)("option",{value:"".concat(n.name," (").concat(n.symbol.toUpperCase(),")")},n.id)}))})]})},an=E.b.div(O||(O=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 30px;\n"]))),sn=E.b.table(m||(m=Object(D.a)(["\n  border-collapse: collapse;\n  margin: 25px 0;\n  min-width: 400px;\n"]))),ln=(E.b.thead(y||(y=Object(D.a)([""]))),E.b.tr(k||(k=Object(D.a)(["\n  background-color: #222;\n  border-bottom: solid 1px #777;\n"])))),dn=E.b.th(v||(v=Object(D.a)(["\n  color: #ccc;\n  text-align: ",";\n  padding: 15px 30px;\n"])),(function(n){return n.align})),bn=E.b.tr(w||(w=Object(D.a)(["\n  &:hover {\n    background-color: #222;\n  }\n"]))),pn=E.b.span(C||(C=Object(D.a)(["\n  display: flex;\n  align-items: center;\n"]))),jn=E.b.td(_||(_=Object(D.a)(["\n  text-align: ",";\n  padding: 25px 30px;\n  border-bottom: solid 1px #777;\n  color: ",";\n  cursor: pointer;\n"])),(function(n){return n.align}),(function(n){var e=n.change;return"positive"===e?"#26c761":"negative"===e?"#ff7a7a":"#fff"})),xn=E.b.span(M||(M=Object(D.a)(["\n  color: #aaa;\n  font-size: 14px;\n  margin-left: 5px;\n  text-transform: uppercase;\n"]))),hn=E.b.img(z||(z=Object(D.a)(["\n  width: 25px;\n  margin-right: 15px;\n"]))),un=E.b.p(S||(S=Object(D.a)(["\n  color: #fff;\n  font-size: 25px;\n  margin-top: 50px;\n"]))),fn=function(){var n=Object(L.useContext)(cn),e=n.marketCoins100,t=n.fetchMarketCoins;return Object(L.useEffect)((function(){t()}),[]),0===e.length?Object(Q.jsx)(un,{children:"Loading..."}):Object(Q.jsxs)(an,{children:[Object(Q.jsx)(G,{children:"Crypto Market Monitor"}),Object(Q.jsxs)(sn,{children:[Object(Q.jsx)("thead",{children:Object(Q.jsxs)(ln,{children:[Object(Q.jsx)(dn,{align:"center",children:"Rank"}),Object(Q.jsx)(dn,{align:"left",children:"Name"}),Object(Q.jsx)(dn,{align:"right",children:"Price"}),Object(Q.jsx)(dn,{align:"right",children:"24h %"}),Object(Q.jsx)(dn,{align:"right",children:"Market Cap"}),Object(Q.jsx)(dn,{align:"right",children:"Volume(24h)"})]})}),Object(Q.jsx)("tbody",{children:e.map((function(n,e){return Object(Q.jsxs)(bn,{children:[Object(Q.jsx)(jn,{align:"center",children:e+1}),Object(Q.jsx)(jn,{align:"left",children:Object(Q.jsxs)(pn,{children:[Object(Q.jsx)(hn,{src:n.image,alt:n.name}),n.name," ",Object(Q.jsx)(xn,{children:n.symbol})]})}),Object(Q.jsxs)(jn,{align:"right",children:["$",n.current_price.toLocaleString()]}),Object(Q.jsxs)(jn,{align:"right",change:n.price_change_percentage_24h>0?"positive":n.price_change_percentage_24h<0?"negative":"",children:[n.price_change_percentage_24h.toFixed(2),"%"]}),Object(Q.jsxs)(jn,{align:"right",children:["$",n.market_cap.toLocaleString()]}),Object(Q.jsxs)(jn,{align:"right",children:["$",n.total_volume.toLocaleString()]})]},n.id)}))})]})]})},gn=function(){return Object(Q.jsxs)(q,{children:[Object(Q.jsx)(on,{}),Object(Q.jsx)(fn,{})]})},On=function(){return Object(Q.jsx)(q,{children:Object(Q.jsx)(G,{children:"Watchlist"})})},mn=function(){return Object(Q.jsx)(q,{children:Object(Q.jsx)(G,{children:"Portfolio"})})},yn=t(20),kn=t.n(yn),vn=t(35),wn=t(15),Cn=t(36),_n=t.n(Cn),Mn=function(){var n=Object(L.useState)([]),e=Object(wn.a)(n,2),t=e[0],r=e[1],c=Object(L.useState)([]),i=Object(wn.a)(c,2),o=i[0],a=i[1],s=Object(L.useState)(!0),l=Object(wn.a)(s,2),d=l[0],b=l[1],p=Object(L.useCallback)(Object(vn.a)(kn.a.mark((function n(){var e;return kn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,_n.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false");case 3:e=n.sent,r(e.data),a(e.data.splice(100)),b(!1),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0),b(!1);case 13:case"end":return n.stop()}}),n,null,[[0,9]])}))),[r]);return{marketCoins:t,setMarketCoins:r,marketCoins100:o,setMarketCoins100:a,isLoading:d,fetchMarketCoins:p}},zn=t(4),Sn=function(){var n=Mn();return Object(Q.jsx)(J.a,{children:Object(Q.jsx)(cn.Provider,{value:n,children:Object(Q.jsxs)(I,{children:[Object(Q.jsx)(K,{}),Object(Q.jsx)(X,{}),Object(Q.jsxs)(zn.c,{children:[Object(Q.jsx)(zn.a,{path:"/crypto-folio",exact:!0,component:gn}),Object(Q.jsx)(zn.a,{path:"/watchlist",exact:!0,component:On}),Object(Q.jsx)(zn.a,{path:"/portfolio",exact:!0,component:mn})]})]})})})},Ln=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),i(n),o(n)}))};B.a.render(Object(Q.jsx)(F.a.StrictMode,{children:Object(Q.jsx)(Sn,{})}),document.getElementById("root")),Ln()}},[[67,1,2]]]);
//# sourceMappingURL=main.17043bf4.chunk.js.map