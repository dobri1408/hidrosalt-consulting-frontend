(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[15],{"8Ppc":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("q1tI"));function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var l=90,c=219,u=222,h=192,p=100,f=3e3,d="navigator"in e&&/Win/i.test(navigator.platform),y="navigator"in e&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),g="npm__react-simple-code-editor__textarea",_="\n/**\n * Reset the text fill color so that placeholder is visible\n */\n."+g+":empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * IE doesn't support '-webkit-text-fill-color'\n * So we use 'color: transparent' to make the text transparent on IE\n * Unlike other browsers, it doesn't affect caret color in IE\n */\n."+g+"-ie {\n  color: transparent !important;\n}\n\n."+g+"-ie::selection {\n  background-color: #accef7 !important;\n  color: transparent !important;\n}\n",v=function(e){function t(){var e,n,r;a(this,t);for(var o=arguments.length,g=Array(o),_=0;_<o;_++)g[_]=arguments[_];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(g))),r.state={capture:!0,ie:!1},r._recordCurrentState=function(){var e=r._input;if(e){var t=e.value,n=e.selectionStart,i=e.selectionEnd;r._recordChange({value:t,selectionStart:n,selectionEnd:i})}},r._getLines=function(e,t){return e.substring(0,t).split("\n")},r._recordChange=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r._history,o=n.stack,a=n.offset;if(o.length&&a>-1){r._history.stack=o.slice(0,a+1);var s=r._history.stack.length;if(s>p){var l=s-p;r._history.stack=o.slice(l,s),r._history.offset=Math.max(r._history.offset-l,0)}}var c=Date.now();if(t){var u=r._history.stack[r._history.offset];if(u&&c-u.timestamp<f){var h=/[^a-z0-9]([a-z0-9]+)$/i,d=r._getLines(u.value,u.selectionStart).pop().match(h),y=r._getLines(e.value,e.selectionStart).pop().match(h);if(d&&y&&y[1].startsWith(d[1]))return void(r._history.stack[r._history.offset]=i({},e,{timestamp:c}))}}r._history.stack.push(i({},e,{timestamp:c})),r._history.offset++},r._updateInput=function(e){var t=r._input;t&&(t.value=e.value,t.selectionStart=e.selectionStart,t.selectionEnd=e.selectionEnd,r.props.onValueChange(e.value))},r._applyEdits=function(e){var t=r._input,n=r._history.stack[r._history.offset];n&&t&&(r._history.stack[r._history.offset]=i({},n,{selectionStart:t.selectionStart,selectionEnd:t.selectionEnd})),r._recordChange(e),r._updateInput(e)},r._undoEdit=function(){var e=r._history,t=e.stack,n=e.offset,i=t[n-1];i&&(r._updateInput(i),r._history.offset=Math.max(n-1,0))},r._redoEdit=function(){var e=r._history,t=e.stack,n=e.offset,i=t[n+1];i&&(r._updateInput(i),r._history.offset=Math.min(n+1,t.length-1))},r._handleKeyDown=function(e){var t=r.props,n=t.tabSize,i=t.insertSpaces,o=t.ignoreTabKey,a=e.target,s=a.value,p=a.selectionStart,f=a.selectionEnd,g=(i?" ":"     ").repeat(n);if(9===e.keyCode&&!o&&r.state.capture)if(e.preventDefault(),e.shiftKey){var _=r._getLines(s,p),v=_.length-1,b=r._getLines(s,f).length-1,m=s.split("\n").map((function(e,t){return t>=v&&t<=b&&e.startsWith(g)?e.substring(g.length):e})).join("\n");if(s!==m){var k=_[v];r._applyEdits({value:m,selectionStart:k.startsWith(g)?p-g.length:p,selectionEnd:f-(s.length-m.length)})}}else if(p!==f){var S=r._getLines(s,p),E=S.length-1,C=r._getLines(s,f).length-1,w=S[E];r._applyEdits({value:s.split("\n").map((function(e,t){return t>=E&&t<=C?g+e:e})).join("\n"),selectionStart:/\S/.test(w)?p+g.length:p,selectionEnd:f+g.length*(C-E+1)})}else{var K=p+g.length;r._applyEdits({value:s.substring(0,p)+g+s.substring(f),selectionStart:K,selectionEnd:K})}else if(8===e.keyCode){var x=p!==f;if(s.substring(0,p).endsWith(g)&&!x){e.preventDefault();var O=p-g.length;r._applyEdits({value:s.substring(0,p-g.length)+s.substring(f),selectionStart:O,selectionEnd:O})}}else if(13===e.keyCode){if(p===f){var L=r._getLines(s,p).pop().match(/^\s+/);if(L&&L[0]){e.preventDefault();var D="\n"+L[0],j=p+D.length;r._applyEdits({value:s.substring(0,p)+D+s.substring(f),selectionStart:j,selectionEnd:j})}}}else if(57===e.keyCode||e.keyCode===c||e.keyCode===u||e.keyCode===h){var z=void 0;57===e.keyCode&&e.shiftKey?z=["(",")"]:e.keyCode===c?z=e.shiftKey?["{","}"]:["[","]"]:e.keyCode===u?z=e.shiftKey?['"','"']:["'","'"]:e.keyCode!==h||e.shiftKey||(z=["`","`"]),p!==f&&z&&(e.preventDefault(),r._applyEdits({value:s.substring(0,p)+z[0]+s.substring(p,f)+z[1]+s.substring(f),selectionStart:p,selectionEnd:f+2}))}else!(y?e.metaKey&&e.keyCode===l:e.ctrlKey&&e.keyCode===l)||e.shiftKey||e.altKey?(y?e.metaKey&&e.keyCode===l&&e.shiftKey:d?e.ctrlKey&&89===e.keyCode:e.ctrlKey&&e.keyCode===l&&e.shiftKey)&&!e.altKey?(e.preventDefault(),r._redoEdit()):77!==e.keyCode||!e.ctrlKey||y&&!e.shiftKey||(e.preventDefault(),r.setState((function(e){return{capture:!e.capture}}))):(e.preventDefault(),r._undoEdit())},r._handleChange=function(e){var t=e.target,n=t.value,i=t.selectionStart,o=t.selectionEnd;r._recordChange({value:n,selectionStart:i,selectionEnd:o},!0),r.props.onValueChange(n)},r._history={stack:[],offset:-1},s(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){/Trident/.test(navigator.userAgent)&&this.setState({ie:!0}),this._recordCurrentState()}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,r=t.style,a=t.padding,s=t.highlight,l=t.autoFocus,c=t.disabled,u=t.form,h=t.maxLength,p=t.minLength,f=t.name,d=t.placeholder,y=t.readOnly,v=t.required,m=t.onFocus,k=t.onBlur,S=(t.onValueChange,t.tabSize,t.insertSpaces,t.ignoreTabKey,function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(t,["value","style","padding","highlight","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onFocus","onBlur","onValueChange","tabSize","insertSpaces","ignoreTabKey"])),E={paddingTop:a,paddingRight:a,paddingBottom:a,paddingLeft:a},C=s(n);return o.createElement("div",i({},S,{style:i({},b.container,r)}),o.createElement("textarea",{ref:function(t){return e._input=t},style:i({},b.editor,b.textarea,E),className:g+" "+(this.state.ie?g+"-ie":""),value:n,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onFocus:m,onBlur:k,disabled:c,form:u,maxLength:h,minLength:p,name:f,placeholder:d,readOnly:y,required:v,autoFocus:l,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),o.createElement("pre",i({"aria-hidden":"true",style:i({},b.editor,b.highlight,E)},"string"===typeof C?{dangerouslySetInnerHTML:{__html:C+"<br />"}}:{children:C})),o.createElement("style",{type:"text/css"},_))}},{key:"session",get:function(){return{history:this._history}},set:function(e){this._history=e.history}}]),t}(o.Component);v.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},t.default=v;var b={container:{position:"relative",textAlign:"left",whiteSpace:"pre-wrap",wordBreak:"keep-all",boxSizing:"border-box",padding:0},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",margin:0,border:0,resize:"none",background:"none",overflow:"hidden",color:"inherit",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",margin:0,border:0,pointerEvents:"none"},editor:{boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"inherit",wordBreak:"inherit"}}}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=react-simple-code-editor.8340fa24.chunk.js.map