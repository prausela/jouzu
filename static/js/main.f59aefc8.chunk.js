(this.webpackJsonpjouzu=this.webpackJsonpjouzu||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),o=n(7),c=n.n(o),a=n(2),i=n(5),u={getQuestions:function(){return i.map((function(e){return e.question}))||[]},getPossibleAnswers:function(e){var t=i.find((function(t){return t.question===e}));if(t&&t.correct_answer)return{correct:t.correct_answer,incorrect:t.other_answers?t.other_answers:[]}}},l={getRandomInt:function(e,t){return Math.floor(Math.random()*(t-e)+e)}},w=function(e,t,n){for(var r=[],s=0,o=0;o<4;o++)o===e?r.push(t):(r.push(n[s]),s+=1);return r},d={startNewGame:function(){return{questions:u.getQuestions()}},getNextQuestion:function(e){var t=e[l.getRandomInt(0,e.length)],n=u.getPossibleAnswers(t),r=function(e,t){t.length<e&&(e=t.length);for(var n=[],r=new Set;r.size<e;){var s=t[l.getRandomInt(0,t.length)];r.has(s)||(n.push(s),r.add(s))}return n}(4,n.incorrect),s=l.getRandomInt(0,4);return{question:t,answers:w(s,n.correct,r)}},checkIfCorrectAnswer:function(e,t){return t===u.getPossibleAnswers(e).correct}},h=(n(14),n(15),n(18)),f=n(0),j=function(e){var t=e.className?e.className+" d-grid p-2 ans":"d-grip p-2 ans",n=e.text;return Object(f.jsx)("div",{className:t,children:Object(f.jsx)(h.a,{variant:"outline-dark",className:"display-2",onClick:function(){return e.submitAnswer(n)},active:!0,children:n})})},b=function(e){var t=e.correct?e.correct:0,n=e.incorrect?e.incorrect:0,r=e.resetGame;return Object(f.jsxs)("div",{className:"menu d-flex",children:[Object(f.jsx)("div",{className:"flex-grow-1 flex-basis-0"}),Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("div",{className:"flex-grow-1 px-1",children:Object(f.jsxs)("div",{className:"alert alert-success",children:["\u25cb Bien: ",t]})}),Object(f.jsx)("div",{className:"flex-grow-1 px-1",children:Object(f.jsxs)("div",{className:"alert alert-danger",children:["\xd7 Mal: ",n]})})]}),Object(f.jsx)("div",{className:"flex-grow-1 d-flex justify-content-end align-items-start flex-basis-0 px-2",children:Object(f.jsx)(h.a,{variant:"outline-dark",onClick:r,active:!0,children:"\u27f2 Reset"})})]})},g=function(e){var t=e.question?e.question:"",n=[{id:1,text:e.ans1?e.ans1:"",className:"ans1"},{id:2,text:e.ans2?e.ans2:"",className:"ans2"},{id:3,text:e.ans3?e.ans3:"",className:"ans3"},{id:4,text:e.ans4?e.ans4:"",className:"ans4"}],r=e.correct,s=e.incorrect,o=e.submitAnswer,c=e.resetGame;return Object(f.jsxs)("div",{className:"interface",children:[Object(f.jsx)(b,{correct:r,incorrect:s,resetGame:c}),Object(f.jsx)("div",{className:"question",children:t}),n.map((function(e){return Object(f.jsx)(j,{text:e.text,className:e.className,submitAnswer:o},e.id)}))]})},v=function(){var e=Object(r.useRef)({}),t=Object(r.useState)(0),n=Object(a.a)(t,2),s=n[0],o=n[1],c=Object(r.useState)(0),i=Object(a.a)(c,2),u=i[0],l=i[1],w=Object(r.useState)(""),h=Object(a.a)(w,2),j=h[0],b=h[1],v=Object(r.useState)(""),m=Object(a.a)(v,2),_=m[0],x=m[1],O=Object(r.useState)(""),p=Object(a.a)(O,2),q=p[0],N=p[1],k=Object(r.useState)(""),S=Object(a.a)(k,2),A=S[0],C=S[1],I=Object(r.useState)(""),W=Object(a.a)(I,2),y=W[0],P=W[1],R=function(){var t=d.getNextQuestion(e.current.questions);b(t.question),x(t.answers[0]),N(t.answers[1]),C(t.answers[2]),P(t.answers[3])};return Object(r.useEffect)((function(){e.current=d.startNewGame(),R()}),[]),Object(f.jsx)(g,{correct:s,incorrect:u,question:j,ans1:_,ans2:q,ans3:A,ans4:y,submitAnswer:function(e){d.checkIfCorrectAnswer(j,e)?o(s+1):l(u+1),R()},resetGame:function(){o(0),l(0)}})},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),o(e),c(e)}))};c.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/jouzu",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/jouzu","/service-worker.js");m?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):_(t,e)}))}}(),x()},5:function(e){e.exports=JSON.parse('[{"question":"\u9b5a","correct_answer":"\u3055\u304b\u306a","other_answers":["\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u8089","correct_answer":"\u306b\u304f","other_answers":["\u3055\u304b\u306a","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u5375","correct_answer":"\u305f\u307e\u3054","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u6c34","correct_answer":"\u307f\u305a","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u98df","correct_answer":"\u305f(\u3079\u307e\u3059)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u98f2","correct_answer":"\u306e(\u307f\u307e\u3059)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u5927","correct_answer":"\u304a\u304a(\u304d\u3044)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u5c0f","correct_answer":"\u3061\u3044(\u3055\u3044)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u65b0","correct_answer":"\u3042\u305f\u3089(\u3057\u3044)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u53e4","correct_answer":"\u3075\u308b(\u3044)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u6642","correct_answer":"\u3058","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u5206","correct_answer":"\u3075\u3093\u30fb\u3077\u3093","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u534a","correct_answer":"\u306f\u3093","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u6708","correct_answer":"\u3052\u3064(\u3088\u3046\u3073)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u706b","correct_answer":"\u304b(\u3088\u3046\u3073)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u6c34","correct_answer":"\u3059\u3044(\u3088\u3046\u3073)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u6728","correct_answer":"\u3082\u304f(\u3088\u3046\u3073)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u91d1","correct_answer":"\u304d\u3093(\u3088\u3046\u3073)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u571f","correct_answer":"\u3069(\u3088\u3046\u3073)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u306b\u3061(\u3088\u3046\u3073)"]},{"question":"\u65e5","correct_answer":"\u306b\u3061(\u3088\u3046\u3073)","other_answers":["\u3055\u304b\u306a","\u306b\u304f","\u305f\u307e\u3054","\u307f\u305a","\u305f(\u3079\u307e\u3059)","\u306e(\u307f\u307e\u3059)","\u304a\u304a(\u304d\u3044)","\u3061\u3044(\u3055\u3044)","\u3042\u305f\u3089(\u3057\u3044)","\u3075\u308b(\u3044)","\u3058","\u3075\u3093\u30fb\u3077\u3093","\u306f\u3093","\u3052\u3064(\u3088\u3046\u3073)","\u304b(\u3088\u3046\u3073)","\u3059\u3044(\u3088\u3046\u3073)","\u3082\u304f(\u3088\u3046\u3073)","\u304d\u3093(\u3088\u3046\u3073)","\u3069(\u3088\u3046\u3073)"]}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.f59aefc8.chunk.js.map