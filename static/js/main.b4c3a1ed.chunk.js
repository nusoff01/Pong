(window["webpackJsonppong-react"]=window["webpackJsonppong-react"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),s=(a(16),a(1)),o=a(2),i=a(4),u=a(3),m=a(5),p=(a(17),a(18),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"headerText"},"Table tenniS Insights (TSI)"),r.a.createElement("a",{target:"_blank",href:"https://docs.google.com/spreadsheets/d/1sF6K5eoTMGjo07zJKPZMnWw_B3yIk6WU5F6Ud56PVTs/edit?usp=sharing"},r.a.createElement("button",null,"Record a match!")))}}]),t}(r.a.Component)),h=(a(19),a(20),a(9));function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var E=50;function y(e,t){var a={};e.forEach((function(e){a[e]={matches:[],ELO:1500,wins:0,losses:0}}));var n=function(e,t){return{date:e.Date,won:e.Winner===t,location:e.Location,opponent:e.Winner===t?e.Loser:e.Winner}};return t&&t.forEach((function(e){if(e.Winner in a&&e.Loser in a){a[e.Winner].wins+=1,a[e.Winner].matches.push(n(e,e.Winner)),a[e.Loser].losses+=1,a[e.Loser].matches.push(n(e,e.Loser));var t=function(e,t,a,n){var r=Math.pow(10,e/400),c=Math.pow(10,t/400);return{aELO:e+n*((a?1:0)-r/(r+c)),bELO:t+n*((a?0:1)-c/(r+c))}}(a[e.Winner].ELO,a[e.Loser].ELO,!0,E);a[e.Winner].ELO=t.aELO,a[e.Loser].ELO=t.bELO}})),Object.keys(a).map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a[e],{name:e})})).sort((function(e,t){return e.ELO<t.ELO?1:e.ELO>t.ELO?-1:0}))}var f=a(6),O=(a(21),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"getRecord",value:function(){return this.props.player.wins+"-"+this.props.player.losses}},{key:"getRating",value:function(){return Math.round(this.props.player.ELO)}},{key:"render",value:function(){return r.a.createElement("div",{className:"playerProfile"},r.a.createElement("div",{className:"playerHeader"},r.a.createElement("img",{src:"images/profilePics/Nick.png",height:"120",width:"120"}),r.a.createElement("div",{className:"playerBio"},r.a.createElement("div",{className:"playerName"},this.props.player.name),r.a.createElement("div",{className:"playerStats"},r.a.createElement("span",{className:"playerRecord"},this.getRecord()),r.a.createElement("span",{className:"playerRanking"},"Rating: ",this.getRating())))),r.a.createElement("div",{className:"playerContent"},r.a.createElement("div",{className:"matchHistory"},r.a.createElement("div",{className:"matchHistoryTitle tableHeader"},"Match History"),r.a.createElement("table",{className:"matchHistoryTable"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"headerRow"},r.a.createElement("th",null),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Opponent"),r.a.createElement("th",null,"Result")),this.props.player.matches.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.opponent),r.a.createElement("td",null,e.won?"W":"L"))})))))))}}]),t}(r.a.Component)),b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={selectedPlayer:null,players:[]},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){if(e.players!==this.props.players||e.matches!==this.props.matches){var t=y(this.props.players,this.props.matches);t.length&&this.setState({players:t,selectedPlayer:t[0]})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"leaderLadder"},null!==this.state.selectedPlayer?r.a.createElement(O,{player:this.state.selectedPlayer}):"",r.a.createElement("div",{className:"ladder"},r.a.createElement("div",{className:"leaderLadderHeader"},"Leader Ladder"),r.a.createElement("table",{className:"leadersTable"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"headerRow"},r.a.createElement("th",null),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Rating"),r.a.createElement("th",null,"Record")),this.state.players.map((function(t,a){return r.a.createElement("tr",{key:a,className:e.state.selectedPlayer.name===t.name?"selectedPlayer":"",onClick:function(){return e.setState({selectedPlayer:t})}},r.a.createElement("td",null,a+1),r.a.createElement("td",null,t.name),r.a.createElement("td",null,Math.round(t.ELO)),r.a.createElement("td",null,t.wins+" - "+t.losses))}))))))}}]),t}(r.a.Component),v=(a(22),r.a.Component,function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={matches:[],players:["Irem","Nick","Matt","Karthik","Sandip"]},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a("https://docs.google.com/spreadsheets/d/e/2PACX-1vSBuLnOBXaX9mXTc08tcMnH5eLxt8VuLGf4a0SGouikhwKnfUxp6Kjo0hYa3QONBjfSS-oAEiL3TXX9/pub?gid=0&single=true&output=csv").then((function(t){e.setState({matches:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"pageContent"},this.getContent(this.props.path,this.props.params))}},{key:"getContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"home";arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"home"===e?r.a.createElement("div",{className:"homePageLayout"},r.a.createElement(b,{players:this.state.players,matches:this.state.matches})):r.a.createElement("div",null)}}]),t}(r.a.Component)),g=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(v,{path:"home"}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.b4c3a1ed.chunk.js.map