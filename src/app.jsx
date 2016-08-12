var React = require('react');

var AlloyEditorComponent = require('./alloy-editor');
var ReactDOM = require('react-dom');
var alloyConfig= {
  container:'editable'
}

var element = React.createElement(AlloyEditorComponent, alloyConfig);
ReactDOM.render(element,document.getElementById('main'));
