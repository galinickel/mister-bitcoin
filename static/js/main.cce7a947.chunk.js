(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{42:function(t,e,n){},43:function(t,e,n){},45:function(t,e,n){},47:function(t,e,n){},53:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(34),o=n.n(r),i=(n(42),n(43),n(3)),s=n.n(i),u=n(12),l=n(5),m=n(6),p=n(8),h=n(7),d=n(16),j=n(14),f=(n(45),n(1)),b=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={phone:"",name:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c),(function(){t.props.onChangeFilter(Object(d.a)({},t.state))}))},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.state,e=t.phone,n=t.name;return Object(f.jsxs)("form",{className:"contact-filter",onSubmit:function(t){return t.preventDefault()},children:[Object(f.jsx)("label",{htmlFor:"name",children:"name"}),Object(f.jsx)("input",{type:"text",id:"name",name:"name",value:n,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(f.jsx)("input",{type:"text",id:"phone",name:"phone",value:e,onChange:this.handleChange})]})}}]),n}(a.Component),v=n(13);n(47);function g(t){var e=t.contact;return Object(f.jsxs)("div",{className:"contact-preview",children:[Object(f.jsx)(v.b,{to:"/contact/"+e._id,children:Object(f.jsx)("img",{src:e.picture,alt:""})}),Object(f.jsx)("p",{children:e.name}),Object(f.jsx)("small",{children:e.email})]})}n(53);function O(t){var e=t.contacts;return Object(f.jsx)("div",{className:"contact-list",children:e&&e.map((function(t){return Object(f.jsx)(g,{contact:t},t._id)}))})}var x=n(37);var y={store:function(t,e){localStorage[t]=JSON.stringify(e)},load:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=localStorage[t]||e;return JSON.parse(n)}},C={getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t)+t)},makeId:k};function k(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<t;a++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}var w={query:function(t){var e=S;if(t){var n=t.name,a=t.phone;e=S.filter((function(t){return(t.name.toLowerCase().includes(n.toLowerCase())||t.email.toLowerCase().includes(n.toLowerCase()))&&t.phone.includes(a)}))}return Promise.resolve(Object(x.a)(e))},save:function(t){if(t._id){var e=S.findIndex((function(e){return e._id===t._id}));S.splice(e,1,t)}else t._id=k(),t.batteryStatus=100,S.push(t);return y.store(R,S),Promise.resolve(t)},remove:function(t){var e=S.findIndex((function(e){return e._id===t}));S.splice(e,1),S.length||(S=I.slice());return y.store(R,S),Promise.resolve()},getById:function(t){var e=S.find((function(e){return e._id===t}));return Promise.resolve(Object(d.a)({},e))},getEmptyContact:function(){return{email:"",name:"",phone:""}},tryContact:function(t){return S.find((function(e){return e._id===t})).batteryStatus-=10,Promise.resolve()}},R="contacts",I=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824",picture:"https://randomuser.me/api/portraits/women/".concat(C.getRandomInt(1,99),".jpg")},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812",picture:"https://randomuser.me/api/portraits/".concat(1===C.getRandomInt(1,3)?"women":"men","/").concat(C.getRandomInt(1,99),".jpg")}],S=function(){var t=y.load(R);t&&t.length||(t=I);return y.store(R,t),t}();var _={on:function(t,e){var n=function(t){var n=t.detail;e(n)};return window.addEventListener(t,n),function(){window.removeEventListener(t,n)}},emit:function(t,e){window.dispatchEvent(new CustomEvent(t,{detail:e}))}};window.myBus=_;var z=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:null,filterBy:null},t.onChangeFilter=function(e){t.setState({filterBy:e},t.loadContacts)},t.onDeleteContact=function(){var e=Object(u.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.remove(n);case 2:t.loadContacts();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.loadContacts(),_.on("onDeleteContact",(function(e){t.onDeleteContact(e),t.props.history.push("/app")}))}},{key:"loadContacts",value:function(){var t=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.query(this.state.filterBy);case 2:e=t.sent,this.setState({contacts:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.contacts;return Object(f.jsxs)("div",{className:"contact-app",children:[Object(f.jsx)("h2",{children:"Search your Contacts.."}),Object(f.jsx)(b,{onChangeFilter:this.onChangeFilter}),Object(f.jsx)(O,{contacts:t}),Object(f.jsx)(v.b,{to:"/contact/edit",children:"Add Contact"})]})}}]),n}(a.Component),D=n(19),B=n.n(D),M={getRate:function(t){return B.a.get("https://blockchain.info/tobtc?currency=USD&value=".concat(t)).then((function(t){return t.data}))},getMarketPrice:function(){return B.a.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true").then((function(t){return t.data}))},getTradeVolume:function(){return B.a.get("https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true").then((function(t){return t.data}))},getBlockSize:function(){return B.a.get("    https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true").then((function(t){return t.data}))}};n(72);var N=n(24),P=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={chartData:null},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("marketPrice"!==this.props.type){t.next=6;break}return t.next=3,M.getMarketPrice();case 3:e=t.sent,t.next=19;break;case 6:if("tradeVolume"!==this.props.type){t.next=12;break}return t.next=9,M.getTradeVolume();case 9:e=t.sent,t.next=19;break;case 12:if("blockSize"!==this.props.type){t.next=18;break}return t.next=15,M.getBlockSize();case 15:e=t.sent,t.next=19;break;case 18:return t.abrupt("return");case 19:n=e.values.map((function(t){return t.y})),this.setState({chartData:n});case 21:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[this.state.chartData&&Object(f.jsx)(N.Sparklines,{data:this.state.chartData,children:Object(f.jsx)(N.SparklinesLine,{color:"gray"})}),Object(f.jsx)("h3",{children:this.props.msg})]})}}]),n}(a.Component),F=(n(73),function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"statisticsPage",children:[Object(f.jsx)(P,{class:"chart",type:"marketPrice",msg:"Bitcoin's Market Price Over The Years"}),Object(f.jsx)(P,{class:"chart",type:"tradeVolume",msg:"Bitcoin Trade Volume"}),Object(f.jsx)(P,{class:"chart",type:"blockSize",msg:"Bitcoin Block-Size"})]})}}]),n}(a.Component)),L=n(2),A={getUser:function(){return{name:"Gali Nickel",coins:475,moves:[]}}};var E=n(36),q=(n(74),function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).user=A.getUser(),t.state={bitcoinRate:null},t}return Object(m.a)(n,[{key:"getBitcoinRate",value:function(){var t=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.getRate(this.user.coins);case 2:e=t.sent,this.setState({bitcoinRate:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getBitcoinRate()}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("h3",{children:["Hello ",this.user.name]}),Object(f.jsx)(E.a,{autoplay:!0,loop:!0,src:"https://assets9.lottiefiles.com/packages/lf20_x4zTKW.json",style:{height:"600px",width:"600px"}}),Object(f.jsxs)("p",{children:["Balance: ",this.user.coins," | Bitcoin: ",this.state.bitcoinRate]})]})}}]),n}(a.Component)),T=(n(75),Object(L.f)((function(t){return Object(f.jsx)("header",{className:"app-header",children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(v.c,{exact:!0,to:"/",activeClassName:"active-nav",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(v.c,{to:"/app",activeClassName:"active-nav",children:"Contacts"})}),Object(f.jsx)("li",{children:Object(f.jsx)(v.c,{to:"/statistics",activeClassName:"active-nav",children:"Statistics"})})]})})}))),H=(n(76),function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contact:null},t.onDeleteContact=function(){_.emit("onDeleteContact",t.state.contact._id)},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.loadContact()}},{key:"componentDidUpdate",value:function(t,e){t.match.params.id!==this.props.match.params.id&&this.loadContact()}},{key:"loadContact",value:function(){var t=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getById(this.props.match.params.id);case 2:e=t.sent,this.setState({contact:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state.contact;return e?Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:e.picture,alt:""}),Object(f.jsx)("p",{children:e.name}),Object(f.jsx)("small",{children:e.email}),Object(f.jsxs)("p",{children:["Phone: ",e.phone]}),Object(f.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore deleniti quis facere, a rerum, voluptatem vitae iusto possimus voluptatum libero nulla, facilis hic at eligendi molestias. Quasi, corporis repellendus."}),Object(f.jsx)("button",{onClick:function(){return t.onDeleteContact(e._id)},children:"Delete"}),Object(f.jsx)(v.b,{to:"/contact/edit/"+e._id,children:"Edit"})]}):Object(f.jsx)("div",{children:"Loading Contact....."})}}]),n}(a.Component)),J=(n(77),function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).inputRef=c.a.createRef(),t.state={contact:null,errMsg:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState((function(t){return{contact:Object(d.a)(Object(d.a)({},t.contact),{},Object(j.a)({},a,c))}}))},t.onSaveContact=function(){var e=Object(u.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,w.save(Object(d.a)({},t.state.contact));case 3:t.props.history.push("/");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props.match.params.id,t.prev=1,!e){t.next=8;break}return t.next=5,w.getById(e);case 5:t.t0=t.sent,t.next=9;break;case 8:t.t0=w.getEmptyContact();case 9:n=t.t0,this.setState({contact:n}),t.next=16;break;case 13:t.prev=13,t.t1=t.catch(1),this.setState({errMsg:"Contact Not Found"});case 16:case"end":return t.stop()}}),t,this,[[1,13]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t;if(!this.state.contact)return Object(f.jsx)("div",{children:this.state.errMsg||"Loading"});var e=this.state.contact,n=e.name,a=e.email,c=e.phone;return Object(f.jsxs)("form",{className:"contact-edit",onSubmit:this.onSaveContact,children:[Object(f.jsx)("label",{htmlFor:"name",children:"Name"}),Object(f.jsx)("input",(t={required:!0,ref:this.inputRef},Object(j.a)(t,"required",!0),Object(j.a)(t,"type","text"),Object(j.a)(t,"id","name"),Object(j.a)(t,"value",n),Object(j.a)(t,"onChange",this.handleChange),Object(j.a)(t,"name","name"),t)),Object(f.jsx)("label",{htmlFor:"email",children:"Email"}),Object(f.jsx)("input",{required:!0,type:"text",id:"email",value:a,onChange:this.handleChange,name:"email"}),Object(f.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(f.jsx)("input",{type:"text",id:"phone",value:c,onChange:this.handleChange,name:"phone"}),Object(f.jsx)("p",{children:this.state.errMsg}),Object(f.jsx)("button",{children:"Save Contact"})]})}}]),n}(a.Component));function U(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(v.a,{children:[Object(f.jsx)(T,{}),Object(f.jsxs)(L.c,{children:[Object(f.jsx)(L.a,{component:J,path:"/contact/edit/:id?"}),Object(f.jsx)(L.a,{component:H,path:"/contact/:id"}),Object(f.jsx)(L.a,{component:z,path:"/app"}),Object(f.jsx)(L.a,{component:F,path:"/statistics"}),Object(f.jsx)(L.a,{component:q,path:"/"})]})]})})}var V=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(U,{})}),document.getElementById("root")),V()}},[[78,1,2]]]);
//# sourceMappingURL=main.cce7a947.chunk.js.map