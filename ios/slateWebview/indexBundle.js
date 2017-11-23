var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="app/components/slateWebview/index.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactDom=require("react-dom");
var _slateReact=require("slate-react");
var _slate=require("slate");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
var initialState=require('./initialState.json');var

SlateEditor=function(_React$Component){_inherits(SlateEditor,_React$Component);
function SlateEditor(props){_classCallCheck(this,SlateEditor);var _this=_possibleConstructorReturn(this,(SlateEditor.__proto__||Object.getPrototypeOf(SlateEditor)).call(this,
props));
_this.state={
value:_slate.Value.fromJson(initialState)};


_this.onChange=_this.onChange.bind(_this);return _this;
}_createClass(SlateEditor,[{key:"onChange",value:function onChange(

change){
this.setState({
value:change.value});

}},{key:"renderNode",value:function renderNode(

props){var
attributes=props.attributes,children=props.children,node=props.node;
switch(node.type){
case'heading-one':
return function(props){return _react2.default.createElement("h2",_extends({},props.attributes,{__source:{fileName:_jsxFileName,lineNumber:27}}),props.children);};
case'heading-two':
return function(props){return _react2.default.createElement("h4",_extends({},props.attributes,{__source:{fileName:_jsxFileName,lineNumber:29}}),props.children);};
case'paragraph':
return function(props){return _react2.default.createElement("p",_extends({},props.attributes,{__source:{fileName:_jsxFileName,lineNumber:31}}),props.children);};
case'text':
return function(props){return _react2.default.createElement("span",_extends({},props.attributes,{__source:{fileName:_jsxFileName,lineNumber:33}}),props.children);};}

}},{key:"renderMark",value:function renderMark(

props){var
children=props.children,mark=props.mark;
switch(mark.type){
case"bold":return _react2.default.createElement("strong",{__source:{fileName:_jsxFileName,lineNumber:40}},children);
case"italic":return _react2.default.createElement("em",{__source:{fileName:_jsxFileName,lineNumber:41}},children);
case"underlined":return _react2.default.createElement("u",{__source:{fileName:_jsxFileName,lineNumber:42}},children);}

}},{key:"render",value:function render()

{
return(
_react2.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:48}},
_react2.default.createElement(_slateReact.Editor,{
style:{},
value:this.state.value,
onChange:this.onChange,
renderNode:this.renderNode,
renderMark:this.renderMark,__source:{fileName:_jsxFileName,lineNumber:49}})));



}}]);return SlateEditor;}(_react2.default.Component);


(0,_reactDom.render)(
_react2.default.createElement(SlateEditor,{__source:{fileName:_jsxFileName,lineNumber:62}}),
document.getElementById('app'));
