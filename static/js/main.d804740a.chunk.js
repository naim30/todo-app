(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],[,,function(t,e,n){t.exports={Container:"TodoList_Container__1w0nz",TodoList:"TodoList_TodoList__1Ejv-"}},,,function(t,e,n){t.exports={Item:"Item_Item__2M_Z2",checked:"Item_checked__3UO9O"}},,function(t,e,n){t.exports={Layout:"Layout_Layout__14AxN"}},,,function(t,e,n){t.exports={Heading:"Heading_Heading__3yEye"}},function(t,e,n){t.exports={Input:"Input_Input__2HHsP"}},,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(6),s=n.n(o),i=(n(18),n(19),n(7)),r=n.n(i),d=n(3),u=n(8),l=n(9),h=n(13),j=n(12),p=n(2),f=n.n(p),b=n(10),v=n.n(b),g=n(0),x=function(t){return Object(g.jsx)("input",{onChange:t.changed,value:t.value,className:v.a.Heading,type:"text",placeholder:"Title"})},O=n(11),_=n.n(O),L=function(t){return Object(g.jsx)("input",{className:_.a.Input,type:"text",placeholder:"Write a todo... + Enter",onKeyUp:t.onEnter})},m=n(5),k=n.n(m),y=function(t){return Object(g.jsxs)("div",{className:k.a.Item,children:[Object(g.jsx)("input",{type:"checkbox",onClick:t.onchecked}),Object(g.jsx)("div",{className:t.checked?k.a.checked:"",children:t.name})]})},H=function(t){return t.todoList.map((function(e,n,a){return n%2===0?Object(g.jsx)(y,{name:e,checked:a[n+1],onchecked:function(e){return t.checked(e,n)}},n):null}))},N=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={heading:"",todoList:[]},t.headingHandler=function(e){var n=e.target.value,a=n?n.replace(e.target.value[0],e.target.value[0].toUpperCase()):"";t.setState({heading:a})},t.addTodoHandler=function(e){if(13===e.keyCode&&""!==e.target.value){var n=Object(d.a)(t.state.todoList);n.push(e.target.value,!1),e.target.value="",t.setState({todoList:n})}},t.checkedHandler=function(e,n){if(e.target.checked){var a=Object(d.a)(t.state.todoList);a[n+1]=!0,t.setState({todoList:a})}else{var c=Object(d.a)(t.state.todoList);c[n+1]=!1,t.setState({todoList:c})}},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state.todoList.reduce((function(t,e){return!0===e?t+1:t}),0)/(this.state.todoList.length/2)*100,n={width:isNaN(e)?"0%":e+"%"};return Object(g.jsxs)("div",{className:f.a.Container,children:[Object(g.jsx)("div",{style:n,className:f.a.Progressbar}),Object(g.jsxs)("div",{className:f.a.TodoList,children:[Object(g.jsx)(x,{value:this.state.heading,changed:function(e){return t.headingHandler(e)}}),Object(g.jsx)(H,{todoList:this.state.todoList,checked:this.checkedHandler}),Object(g.jsx)(L,{onEnter:function(e){return t.addTodoHandler(e)}})]})]})}}]),n}(a.Component),C=function(t){return Object(g.jsx)("div",{className:r.a.Layout,children:Object(g.jsx)(N,{})})};var I=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(C,{})})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),o(t),s(t)}))};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(I,{})}),document.getElementById("root")),T()}],[[21,1,2]]]);
//# sourceMappingURL=main.d804740a.chunk.js.map