(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c,r=n(7),s=n.n(r),o=n(3),a=n(16),u=n(2),i=n(10),l=n(15),d="TODOS_LOADING",j="USER_LOADING",b="SELECT_USER_ID",p="DELETE_TODO",O=function(e){return e.todos},f=function(e){return e.user},h=function(e){return e.selectedUserId},v={todos:[],user:null,selectedUserId:0},_=Object(i.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(u.a)(Object(u.a)({},e),{},{todos:Object(a.a)(t.todos)});case j:return Object(u.a)(Object(u.a)({},e),{},{user:t.user});case b:return Object(u.a)(Object(u.a)({},e),{},{selectedUserId:t.selectedUserId});case p:return Object(u.a)(Object(u.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.deleteTodoId}))});default:return e}}),Object(l.composeWithDevTools)()),m=_,x=n(5),y=n(4),T=n.n(y),C=n(0),N=(n(25),n(26),n(13)),I=(n(27),n(12)),E=n.n(I),L=n(1);!function(e){e.All="All",e.Active="Active",e.Completed="Completed"}(c||(c={}));var U=function(e){var t=e.todos,n=e.selctedUser,r=Object(C.useState)(""),s=Object(N.a)(r,2),a=s[0],u=s[1],i=Object(C.useState)(""),l=Object(N.a)(i,2),d=l[0],j=l[1],b=function(){switch(d){case c.Active:return t.filter((function(e){return!e.completed}));case c.Completed:return t.filter((function(e){return e.completed}));case c.All:default:return t}}().filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())})),p=Object(o.b)();return Object(L.jsxs)("div",{className:"TodoList",children:[Object(L.jsx)("h2",{children:"Todos:"}),Object(L.jsx)("input",{"data-cy":"filterByTitle",type:"text",value:a,onChange:function(e){u(e.target.value)}}),Object(L.jsxs)("select",{value:d,onChange:function(e){return j(e.target.value)},children:[Object(L.jsx)("option",{value:c.All,children:"All"}),Object(L.jsx)("option",{value:c.Active,children:"Active"}),Object(L.jsx)("option",{value:c.Completed,children:"Completed"})]}),Object(L.jsx)("div",{className:"TodoList__list-container",children:Object(L.jsx)("ul",{"data-cy":"listOfTodos",className:"TodoList__list",children:b.map((function(e){return Object(L.jsxs)("li",{className:E()({TodoList__item:!0,"TodoList__item--checked":e.completed,"TodoList__item--unchecked":!e.completed}),children:[Object(L.jsxs)("label",{children:[Object(L.jsx)("input",{checked:e.completed,type:"checkbox",readOnly:!0}),Object(L.jsx)("p",{children:e.title})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("button",{"data-cy":"userButton",onClick:function(){return p({type:"SELECT_USER_ID",selectedUserId:e.userId})},className:E()({"TodoList__user-button button":!0,"TodoList__user-button--selected":e.userId===n}),type:"button",children:"User #".concat(e.userId)})," ",Object(L.jsx)("button",{onClick:function(){return p({type:"DELETE_TODO",deleteTodoId:e.id})},className:"TodoList__user-button button",type:"button",children:"Delete"})]})]},e.id)}))})})]})},A="https://mate.academy/students-api";function D(){return w.apply(this,arguments)}function w(){return(w=Object(x.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/todos"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return k.apply(this,arguments)}function k(){return(k=Object(x.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/users/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(29);var g=function(e){var t=e.userId,n=Object(o.c)(f),c=Object(o.b)();return Object(C.useEffect)((function(){var e=function(){var e=Object(x.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,S(t);case 3:e.t1=e.sent,e.t2={type:"USER_LOADING",user:e.t1},(0,e.t0)(e.t2);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(L.jsxs)("div",{className:"CurrentUser",children:[Object(L.jsx)("h2",{className:"CurrentUser__title",children:Object(L.jsx)("span",{children:"Selected user: ".concat(t)})}),Object(L.jsx)("h3",{"data-cy":"userName",className:"CurrentUser__name",children:null===n||void 0===n?void 0:n.name}),Object(L.jsx)("p",{className:"CurrentUser__email",children:null===n||void 0===n?void 0:n.email}),Object(L.jsx)("p",{className:"CurrentUser__phone",children:null===n||void 0===n?void 0:n.phone}),Object(L.jsx)("button",{onClick:function(){return c({type:"SELECT_USER_ID",selectedUserId:0})},type:"button",className:"CurrentUser__clear button",children:"Clear"})]})},R=function(){var e=Object(o.c)(h),t=Object(o.c)(O),n=Object(o.b)();return Object(C.useEffect)((function(){var e=function(){var e=Object(x.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,D();case 3:e.t1=e.sent,e.t2={type:"TODOS_LOADING",todos:e.t1},(0,e.t0)(e.t2);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)("div",{className:"App__sidebar",children:Object(L.jsx)(U,{todos:t,selctedUser:e})}),Object(L.jsx)("div",{className:"App__content",children:Object(L.jsx)("div",{className:"App__content-container",children:e?Object(L.jsx)(g,{userId:e}):"No user selected"})})]})},G=function(){return Object(L.jsx)(o.a,{store:m,children:Object(L.jsx)(R,{})})};s.a.render(Object(L.jsx)(G,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.bd3666d9.chunk.js.map