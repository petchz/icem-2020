(this["webpackJsonpdoctor-project"]=this["webpackJsonpdoctor-project"]||[]).push([[0],{205:function(e,t,a){e.exports=a(360)},210:function(e,t,a){},360:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(46),r=a.n(i),l=(a(210),a(21)),s=a(22),c=a(24),m=a(23),u=a(25),d=a(114),h=a(40),g=a(375),b=a(61),E=a(376),p=a(377),v=a(369),f=a(372),y=a(368),S=a(371),k=a(19),w=a.n(k);a(50);function C(e){e?w.a.defaults.headers.common.Authorization="Bearer ".concat(e):delete w.a.defaults.headers.common.Authorization}function x(){localStorage.removeItem("accessToken"),window.location.href="/"}var N="https://icem-2020.herokuapp.com",O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).login=function(e){e.preventDefault(),console.log("entering login state."),a.setState({loading:!0}),w.a.post(N+"/login",a.state).then((function(e){var t=e.data.token;localStorage.setItem("accessToken",t),C(t),a.setState({loading:!1}),a.checkLogin()})).catch((function(e){a.setState({loading:!1,wrong:!0})}))},a.register=function(e){e.preventDefault(),console.log("registering"),a.setState({loading:!0}),w.a.post(N+"/register?team="+a.state.username,{name:a.state.name,university:a.state.university}).then((function(e){console.log(e),a.setState({newUser:!1,loading:!1})})).catch((function(e){console.log("register error!"),console.log(e),a.setState({loading:!1})}))},a.state={username:"",password:"",name:"",university:"",loading:!1,wrong:!1,newUser:!1,redirect:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="ICEM 2020",localStorage.accessToken&&this.checkLogin()}},{key:"checkLogin",value:function(){var e=this;this.setState({loading:!0}),w.a.get(N+"/users/profile").then((function(t){""===t.data.team_name&&""===t.data.university?e.setState({username:t.data.id,loading:!1,newUser:!0}):window.location.href="/lobby"}))}},{key:"render",value:function(){var e=this;return this.state.redirect?o.a.createElement(h.a,{to:this.state.redirect}):o.a.createElement("div",{className:"App"},this.state.newUser?o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:"header"},o.a.createElement(g.a,{as:"h1",icon:!0,className:"white-txt"},o.a.createElement(b.a,{name:"pencil alternate"}),"REGISTER",o.a.createElement(g.a.Subheader,{className:"white-txt"},"Edit your information"))),o.a.createElement(E.a,{placeholder:!0},o.a.createElement(p.a,{relaxed:"very",stackable:!0},o.a.createElement(p.a.Column,null,o.a.createElement(v.a,{onSubmit:this.register,loading:this.state.loading},o.a.createElement(v.a.Input,{icon:"user md",iconPosition:"left",label:"Username",value:this.state.username,readOnly:!0}),o.a.createElement(v.a.Input,{type:"text",icon:"edit",iconPosition:"left",label:"Team name",placeholder:"Team name",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}}),o.a.createElement(v.a.Input,{type:"text",icon:"building",iconPosition:"left",label:"University",placeholder:"University",value:this.state.university,onChange:function(t){return e.setState({university:t.target.value})}}),o.a.createElement(f.a,{type:"submit",content:"Continue",disabled:this.state.loading,primary:!0}),o.a.createElement(y.a,null),o.a.createElement(f.a,{type:"submit",content:"Sign out",disabled:this.state.loading,onClick:x,color:"red"})))))):o.a.createElement("header",{id:"login",className:"App-header"},o.a.createElement("div",null,o.a.createElement(g.a,{as:"h1",icon:!0,className:"white-txt"},o.a.createElement(b.a,{name:"heartbeat"}),"ICEM 2020",o.a.createElement(g.a.Subheader,{className:"white-txt"},"Sign in to start your challenge"))),o.a.createElement(v.a,{error:this.state.wrong},o.a.createElement(S.a,{error:!0,onDismiss:function(t){return e.setState({wrong:!1})},header:"Please try again!",content:"Invalid Username or Password"})),o.a.createElement(E.a,{placeholder:!0},o.a.createElement(p.a,{relaxed:"very",stackable:!0},o.a.createElement(p.a.Column,null,o.a.createElement(v.a,{error:!0,onSubmit:this.login,loading:this.state.loading},o.a.createElement(v.a.Input,{type:"text",icon:"user md",iconPosition:"left",label:"Username",placeholder:"Username",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}}),o.a.createElement(v.a.Input,{type:"password",icon:"lock",iconPosition:"left",label:"Password",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}),o.a.createElement(f.a,{type:"submit",content:"Sign in",disabled:this.state.loading,color:"green"}))))),o.a.createElement(f.a,{color:"blue",onClick:function(t){return e.setState({redirect:"/whiteboard"})},disabled:this.state.loading,content:this.state.loading?"Loading...":"Whiteboard"})))}}]),t}(n.Component),j=a(83),I="https://icem-2020.herokuapp.com",A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).login=function(e){e.preventDefault(),console.log("entering login state."),a.setState({loading:!0}),w.a.post(I+"/login",a.state).then((function(e){var t=e.data.token;localStorage.setItem("accessToken",t),C(t),a.setState({loading:!1}),a.checkLogin()})).catch((function(e){a.setState({loading:!1}),a.setState({wrong:!0})}))},a.register=function(e){e.preventDefault(),a.setState({loading:!0}),console.log("registering"),w.a.post(I+"/register?team="+a.state.username,{name:a.state.name,university:a.state.university}).then((function(e){window.location.href="/lobby"})).catch((function(e){console.log("register error!"),console.log(e),a.setState({loading:!1})}))},a.logout=function(e){localStorage.removeItem("accessToken"),a.setState({loading:!0}),window.location.href="/"},a.state={username:"",name:"",university:"",loading:!1},a.checkLogin=a.checkLogin.bind(Object(j.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="ICEM2020 - Register",localStorage.accessToken&&this.checkLogin()}},{key:"checkLogin",value:function(){var e=this;this.setState({loading:!0}),w.a.get(I+"/users/profile").then((function(t){console.log(t),e.setState({username:t.data.id}),e.setState({loading:!1})})).catch((function(e){console.log("New user detected!")}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:"header"},o.a.createElement(g.a,{as:"h1",icon:!0,className:"white-txt"},o.a.createElement(b.a,{name:"pencil alternate"}),"REGISTER",o.a.createElement(g.a.Subheader,{className:"white-txt"},"Edit your information"))),o.a.createElement(E.a,{placeholder:!0},o.a.createElement(p.a,{relaxed:"very",stackable:!0},o.a.createElement(p.a.Column,null,o.a.createElement(v.a,{onSubmit:this.register,loading:this.state.loading},o.a.createElement(v.a.Input,{icon:"user md",iconPosition:"left",label:"Username",value:this.state.username,readOnly:!0}),o.a.createElement(v.a.Input,{type:"text",icon:"edit",iconPosition:"left",label:"Team name",placeholder:"Team name",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}}),o.a.createElement(v.a.Input,{type:"text",icon:"building",iconPosition:"left",label:"University",placeholder:"University",value:this.state.university,onChange:function(t){return e.setState({university:t.target.value})}}),o.a.createElement(f.a,{type:"submit",content:"Continue",disabled:this.state.loading,primary:!0}),o.a.createElement(y.a,null),o.a.createElement(f.a,{type:"submit",content:"Sign out",disabled:this.state.loading,onClick:this.logout,color:"red"})))))))}}]),t}(n.Component),L=a(373),R="https://icem-2020.herokuapp.com",U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleX2=function(e){a.setState((function(e){return{x2:!e.x2}}))},a.handleX3=function(e){a.setState((function(e){return{x3:!e.x3}}))},a.Ready=function(e){a.setState({loading:!0}),window.location.href="/Whiteboard"},a.state={username:"",team_name:"",university:"",x2:!1,x3:!1,loading:!0,lobby:!1,score:"",white_board:"",start_time:"",count_time:"",timeout:"",exam:"",round:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="ICEM 2020 - Lobby",localStorage.accessToken?this.checkLogin():(console.log("Token not found!"),window.location.href="/")}},{key:"checkLogin",value:function(){var e=this;this.setState({loading:!0}),w.a.get(R+"/users/profile").then((function(t){console.log("user detected!"),e.setState({username:t.data.id,team_name:t.data.team_name,university:t.data.university}),e.getData()}))}},{key:"getData",value:function(){var e=this;this.setState({loading:!0}),w.a.get(R+"/game/session/data").then((function(t){console.log(t),null===t.data.round?console.log("round not found!"):"true"===t.data.white_board&&null!=t.data.round?e.setState({lobby:!0,loading:!1}):(e.setState({white_board:t.data.white_board,start_time:t.data.start_time,count_time:t.data.count_time,timeout:t.data.timeout,exam:t.data.exam,round:t.data.round,loading:!1}),e.getScore())})).catch((function(e){console.log(e)}))}},{key:"getScore",value:function(){var e=this;w.a.get(R+"/users/score/"+this.state.round).then((function(t){e.setState({score:t.data.total_score,loading:!1})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.loading?o.a.createElement("header",{className:"App-header"},o.a.createElement(g.a,{as:"h1",icon:!0,className:"white-txt"},"Waiting for session...")):o.a.createElement("div",null,this.state.lobby?o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:"header"},o.a.createElement(g.a,{as:"h1",icon:!0,className:"white-txt"},o.a.createElement(b.a,{name:"heartbeat"}),this.state.round.toUpperCase()+" ROUND",o.a.createElement(g.a.Subheader,{className:"white-txt"},this.state.university+" @ ICEM 2020"),o.a.createElement(g.a.Subheader,{className:"white-txt"},"Score: "+this.state.score))),o.a.createElement(E.a,{placeholder:!0,className:"lobby-size",loading:this.state.loading},o.a.createElement(p.a,{columns:2,relaxed:"very",stackable:!0},o.a.createElement(p.a.Column,null,o.a.createElement(g.a,{icon:!0},"X2",o.a.createElement(b.a,{disabled:this.state.x3,onClick:this.handleX2,name:this.state.x2?"toggle on":"toggle off",color:this.state.x2?"green":"black"}),this.state.x2?"Enable":"Disable")),o.a.createElement(p.a.Column,{verticalAlign:"middle"},o.a.createElement(g.a,{icon:!0},"X3",o.a.createElement(b.a,{disabled:this.state.x2,onClick:this.handleX3,name:this.state.x3?"toggle on":"toggle off",color:this.state.x3?"green":"black"}),this.state.x3?"Enable":"Disable"))),o.a.createElement(y.a,{vertical:!0},"Or")),o.a.createElement("br",null),o.a.createElement(f.a,{color:"green",size:"massive",onClick:this.Submit,disabled:this.state.loading,content:this.state.loading?"Waiting...":"Continue"})):o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:"header"},o.a.createElement(g.a,{as:"h1",icon:!0,className:"white-txt"},o.a.createElement(b.a,{name:"heartbeat"}),"ICEM 2020",o.a.createElement(g.a.Subheader,{className:"white-txt"},"University: "+this.state.university))),o.a.createElement(L.a,{inverted:!0},o.a.createElement(L.a.Label,{color:"white"},"Score"),o.a.createElement(L.a.Value,{color:"red"},this.state.score)))))}}]),t}(n.Component),_=a(374),T=a(193),D=["black","grey","brown","pink","purple","violet","blue","teal","green","olive","yellow","orange","red"],M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleItemClick=function(e,t){var n=t.name;return a.setState({activeItem:n})},a.handleClick=function(e,t){var n=t.name;return a.setState({activeColor:n})},a.state={loading:!1,activeColor:D[0],brushRadius:5,lazyRadius:0,activeItem:"black"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="ICEM 2020 - Whiteboard"}},{key:"checkLogin",value:function(){var e=this;this.setState({loading:!0}),w.a.get("https://icem-2020.herokuapp.com/users/profile").then((function(t){e.setState({username:t.data.id,team_name:t.data.team_name,university:t.data.university,loading:!1})}))}},{key:"submit",value:function(){}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{id:"header"},o.a.createElement(g.a,{as:"h1",icon:!0,className:"white-txt"},"Time Left: 90 sec",o.a.createElement(g.a.Subheader,{className:"white-txt"},this.state.university+" @ ICEM 2020"))),o.a.createElement("div",{className:"whiteboard-menu"},o.a.createElement(_.a,{secondary:!0,vertical:!0,inverted:!0,className:"color-bar",size:"large"},o.a.createElement(_.a.Item,{header:!0}),o.a.createElement(_.a.Item,null,o.a.createElement(f.a,{size:"big",color:"blue",onClick:function(){e.Canvas.undo()}},"Undo")),o.a.createElement(_.a.Item,null,o.a.createElement(f.a,{size:"big",color:"red",onClick:function(){e.Canvas.clear()}},"Clear"))),o.a.createElement(T.a,{ref:function(t){return e.Canvas=t},className:"whiteboard-size",lazyRadius:this.state.lazyRadius,brushColor:this.state.activeColor,brushRadius:this.state.brushRadius})),o.a.createElement("br",null),o.a.createElement("div",{id:"footer"},o.a.createElement(f.a,{color:"green",size:"massive",onClick:this.Submit,disabled:this.state.loading,content:this.state.loading?"Loading...":"Submit"}))))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",null,o.a.createElement(g.a,{as:"h1",icon:!0,className:"white-txt"},o.a.createElement(b.a,{name:"bug"}),"ADMIN",o.a.createElement(g.a.Subheader,{className:"white-txt"},"ICEM 2020")))))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",null,o.a.createElement(g.a,{as:"h1",icon:!0,className:"white-txt"},o.a.createElement(b.a,{name:"stethoscope"}),"REFEREE",o.a.createElement(g.a.Subheader,{className:"white-txt"},"ICEM 2020")))))}}]),t}(n.Component),W=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{basename:"/icem-2020"},o.a.createElement(h.d,null,o.a.createElement(h.b,{exact:!0,path:"/",component:O}),o.a.createElement(h.b,{path:"/Register",component:A}),o.a.createElement(h.b,{path:"/Lobby",component:U}),o.a.createElement(h.b,{path:"/Whiteboard",component:M}),o.a.createElement(h.b,{path:"/Admin",component:z}),o.a.createElement(h.b,{path:"/Ref",component:P})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));C(localStorage.accessToken),r.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},50:function(e,t,a){}},[[205,1,2]]]);
//# sourceMappingURL=main.b37b6842.chunk.js.map