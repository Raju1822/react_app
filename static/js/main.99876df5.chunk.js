(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),m=(a(60),a(32)),s=a(12),o=a(13),i=a(15),d=a(14),u=a(19),E=a(16),p=(a(25),a(4)),h=a.n(p),v=a(52),b=a(21),f=a(10),g=a.n(f),y=a(115),N=a(116),w=a(49),j=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"sidenav"},l.a.createElement("a",{href:"/react_app/#/dashboard/"},"Dashboard"),l.a.createElement("a",{href:"#"},"About"),l.a.createElement("a",{href:"#"},"Services"),l.a.createElement("a",{href:"#"},"client"),l.a.createElement("a",{href:"#"},"Contact"))}}]),t}(n.Component),k=l.a.createElement("div",{className:"main"},l.a.createElement(j,null),l.a.createElement("table",{id:"table21",style:{marginLeft:"12%",marginTop:"0%"}},l.a.createElement("tr",null,l.a.createElement("th",{style:{textAlign:"30%"}},"Id"),l.a.createElement("th",{style:{extAlign:"30%"}},"Event Name"),l.a.createElement("th",{style:{texAlign:"30%"}},"Event Venue")))),O=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){console.log("jkgjs"),h()(document).ready(function(){h.a.getJSON("http://localhost:3000/events",function(e){var t="",a=0;h.a.each(e,function(e,n){a=n.id+1,t+="<tr>",t+="<td>"+a+"</td>",t+="<td>"+n.eventName+"</td>",t+="<td>"+n.eventVenue+"</td>",t+="</tr>"}),h()("#table21").append(t)})})}},{key:"render",value:function(){return k}}]),t}(n.Component),L=l.a.createElement("div",{className:"main"},l.a.createElement(j,null),l.a.createElement("table",{id:"table11",style:{marginLeft:"15%",marginTop:"0%"}},l.a.createElement("tr",null,l.a.createElement("th",{style:{marginLeft:"50%"}},"S.No."),l.a.createElement("th",{style:{marginLeft:"50%"}},"Event Name"),l.a.createElement("th",{style:{marginLeft:"50%"}},"Event Venue"),l.a.createElement("th",{style:{marginLeft:"50%"}},"CLICK FOR DELETE"))));console.log("jkgjs"),h()(document).ready(function(){h.a.getJSON("http://localhost:3000/events",function(e){var t="",a=0;h.a.each(e,function(e,n){a=n.id+1,t+="<tr>",t+="<td>"+a+"</td>",t+="<td>"+n.eventName+"</td>",t+="<td>"+n.eventVenue+"</td>",t+='<td><button className="Button btn-sm btn-primary btn-block" name='+n.id+" >DELETE</button</td>",t+="</tr>"}),h()("#table11").append(t)})});var C=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return L}}]),t}(n.Component),x=(a(76),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(d.a)(t).call(this))).state={eveNam:null,eveVen:null},e.publish=e.publish.bind(Object(u.a)(e)),e.handleChange=e.handleChange.bind(Object(u.a)(e)),e}return Object(E.a)(t,e),Object(o.a)(t,[{key:"kreate",value:function(e,t){console.log("hkiknnljk");var a={eventName:e,eventVenue:t};h.a.ajax({type:"POST",data:JSON.stringify(a),url:"http://localhost:3000/events",contentType:"application/json; charset=utf-8",dataType:"json",async:!0,success:function(e){alert("Your DATA is sucessfully updated")}})}},{key:"handleChange",value:function(e){var t=e.target;this.setState(Object(m.a)({},t.name,t.value))}},{key:"publish",value:function(){console.log(this.state.eveNam,this.state.eveVen)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(y.a,{className:"login-form"},l.a.createElement("h1",null,"CREATE PAGE"),l.a.createElement("div",{className:"form-group"},l.a.createElement(N.a,null,"Event Name"),l.a.createElement("br",null),l.a.createElement("input",{className:"form-control",type:"text",name:"eveNam",placeholder:"eventName",value:this.state.eveNam,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement(N.a,null,"Event Venue"),l.a.createElement("br",null),l.a.createElement("input",{className:"form-control",type:"text",name:"eveVen",placeholder:"eventVenue",value:this.state.eveVen,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"btn-lg btn-dark btn-block",onClick:this.kreate.bind(this,this.state.eveNam,this.state.eveVen)},"Submit"))))}}]),t}(n.Component)),_=l.a.createElement("div",{className:"main"},l.a.createElement(j,null),l.a.createElement("table",{id:"table01",style:{marginLeft:"15%",marginTop:"0%"}},l.a.createElement("tr",null,l.a.createElement("th",{style:{marginLeft:"50%"}},"S.No."),l.a.createElement("th",{style:{marginLeft:"50%"}},"Event Name"),l.a.createElement("th",{style:{marginLeft:"50%"}},"Event Venue"),l.a.createElement("th",{style:{marginLeft:"50%"}},"CLICK FOR UPDATE"))));console.log("jkgjs"),h()(document).ready(function(){h.a.getJSON("http://localhost:3000/events",function(e){var t="",a=0;h.a.each(e,function(e,n){a=n.id+1,t+="<tr>",t+="<td>"+a+"</td>",t+="<td>"+n.eventName+"</td>",t+="<td>"+n.eventVenue+"</td>",t+='<td><button className="Button btn-sm btn-primary btn-block" name='+n.id+" > UPDATE </button</td>",t+="</tr>"}),h()("#table01").append(t)})});var A=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return _}}]),t}(n.Component),I=a(29),S=a.n(I),B=a(27),T=a.n(B),V=function(e){return l.a.createElement("h1",null,"Welcome ",e.username," ")},P=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).loginHandle=function(){a.setState(function(e){return{loggedIn:!e.loggedIn}})},a.validate=function(){document.getElementById("mydiv").classList.add("was-validated")},a.myfunsignup=function(){var e=a.state;e.name,e.email_signup,e.password_signup,e.confirm_password;document.getElementById("mydiv1").classList.add("was-validated")},a.validate1=function(){document.getElementById("email").classList.add("was-validated")},a.validate2=function(){document.getElementById("password1").classList.add("was-validated")},a.validate8=function(e){document.getElementById("password").classList.add("was-validated");e.target.value},a.validate3=function(){document.getElementById("mydiv1").classList.add("was-validated")},a.validate4=function(){document.getElementById("name").classList.add("was-validated")},a.validate5=function(e){document.getElementById("password");document.getElementById("confirm_password").classList.add("was-validated")},a.myelement=function(){return l.a.createElement("div",null,l.a.createElement(y.a,{id:"mydiv",className:"login-form",action:"/react_app/#/sidebar/"},l.a.createElement("h1",{style:{textAlign:"center"}},"LOGIN PAGE"),l.a.createElement("div",{className:"form-group"},l.a.createElement(N.a,null,"Email"),l.a.createElement("br",null),l.a.createElement("input",{className:"form-control",id:"email",name:"email",type:"email",placeholder:"Email",onChange:a.validate1,required:!0}),l.a.createElement("pre",{className:"error"})),l.a.createElement("div",{className:"form-group"},l.a.createElement(N.a,null,"Password"),l.a.createElement("br",null),l.a.createElement("input",{className:"form-control",id:"password1",name:"password1",type:"password",placeholder:"Password",onChange:a.validate2,required:!0}),l.a.createElement("pre",{className:"error"})),l.a.createElement("button",{type:"submit ",className:"btn-lg btn-dark btn-block",href:"/sidebar/",onClick:a.validate,style:{textAlign:"center"}}," Log In"),l.a.createElement("div",{className:"text-center pt-3"},"Or continue with your Social Account"),l.a.createElement(w.FacebookLoginButton,{className:"mt-3 mb-3"}),l.a.createElement("div",{className:"text-center"},l.a.createElement("a",{href:"/react_app/#/signup/"},"Sign Up"),l.a.createElement("span",{className:"p-2"},"|"),l.a.createElement("a",{href:"/forgot-password"},"Forgot Password"))))},a.myelement1=function(){return l.a.createElement("div",null,l.a.createElement(y.a,{id:"mydiv1",className:"login-form",action:"/login/"},l.a.createElement("h1",{style:{textAlign:"center"}},"REGISTER PAGE"),l.a.createElement("div",{className:"form-group"},l.a.createElement(N.a,null,"Name"),l.a.createElement("br",null),l.a.createElement("input",{className:"form-control",name:"name",id:"name",type:"text",placeholder:"Name",onChange:a.validate4,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement(N.a,null,"Email"),l.a.createElement("br",null),l.a.createElement("input",{className:"form-control",name:"email",id:"email",type:"email",placeholder:"Email",onChange:a.validate1,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement(N.a,null,"Password"),l.a.createElement("br",null),l.a.createElement("input",{className:"form-control",type:"password",name:"password",id:"password",placeholder:"Password",onChange:a.validate8,required:!0})),l.a.createElement("button",{id:"sub",className:"btn-lg btn-dark btn-block",href:"/react_app/#/login/",onClick:a.myfunsignup.bind(Object(u.a)(a)),style:{textAlign:"center"}},"Sign UP"),l.a.createElement("div",{className:"text-center"},l.a.createElement("a",null,"Already a Member"),l.a.createElement("span",{className:"p-2"},"|"),l.a.createElement("a",{href:"/react_app/#/login/"},"Log In"))))},a.state={loggedIn:!1,email_login:"",password_login:"",email_signup:"",password_signup:"",name:"",confirm_password:""};return a}return Object(E.a)(t,e),Object(o.a)(t,[{key:"handle",value:function(e){e.target.value}},{key:"render",value:function(){var e=this;return l.a.createElement(v.a,null,l.a.createElement("div",Object(m.a)({className:"App"},"className","sticky-top"),l.a.createElement(S.a,{bg:"info",variant:"light",expand:"lg"},l.a.createElement(S.a.Brand,{href:"#home"}),l.a.createElement(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(S.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(T.a,{className:"mr-auto"},l.a.createElement(T.a.Link,{href:"/react_app/#/",exact:!0,strict:!0},"Home"),l.a.createElement(T.a.Link,{href:"/react_app/#/login/"},"Login"),l.a.createElement(T.a.Link,{href:"/react_app/#/about/"},"About"),l.a.createElement(T.a.Link,{href:"/react_app/#/features/"},"Features")))),l.a.createElement(g.a,{path:"/",exact:!0,strict:!0,render:function(){return l.a.createElement("h1",null,"Welcome Home")}}),l.a.createElement(g.a,{path:"/about/",exact:!0,strict:!0,render:function(){return l.a.createElement("h1",null,"Welcome About")}}),l.a.createElement(g.a,{path:"/dashboard/",exact:!0,strict:!0,render:function(){return l.a.createElement("div",{className:"main"},l.a.createElement(j,null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-3 col-lg-3"},l.a.createElement("a",{className:"btn-lg btn-success btn-block stretched-link",href:"/react_app/#/create/"},"Create Event")),l.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-3 col-lg-3"},l.a.createElement("a",{className:"btn-lg btn-info btn-block",href:"/react_app/#/edit/"},"Edit Event")),l.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-3 col-lg-3"},l.a.createElement("a",{className:"btn-lg btn-info btn-block",href:"/react_app/#/show/"},"Show Event")),l.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-3 col-lg-3"},l.a.createElement("a",{className:"btn-lg btn-danger btn-block",href:"/react_app/#/delete/"},"Delete Event"))))}}),l.a.createElement(g.a,{path:"/sidebar/",strict:!0,render:function(){return l.a.createElement("div",null,l.a.createElement(j,null))}}),l.a.createElement(g.a,{path:"/features/",strict:!0,render:function(){return l.a.createElement("h1",null,"Welcome Features")}}),l.a.createElement(g.a,{path:"/create/",strict:!0,render:function(){return l.a.createElement(x,null)}}),l.a.createElement(g.a,{path:"/edit/",strict:!0,render:function(){return l.a.createElement(A,null)}}),l.a.createElement(g.a,{path:"/show/",strict:!0,render:function(){return l.a.createElement(O,null)}}),l.a.createElement(g.a,{path:"/delete/",strict:!0,render:function(){return l.a.createElement(C,null)}}),l.a.createElement(g.a,{path:"/login/",strict:!0,render:this.myelement}),l.a.createElement(g.a,{path:"/signup/",strict:!0,render:this.myelement1}),l.a.createElement(g.a,{path:"/user/:username",strict:!0,render:function(t){var a=t.match;return e.state.loggedIn?l.a.createElement(V,{username:a.params.username}):l.a.createElement(b.Redirect,{to:"/"})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(110);c.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},25:function(e,t,a){},55:function(e,t,a){e.exports=a(111)},60:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.99876df5.chunk.js.map