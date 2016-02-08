var React = require('react');
var ReactDom = require('react-dom');

var App = React.createClass({
  render: function() {
    return <h1>{this.props.message}</h1>;
  }
});

ReactDom.render(<App message="Hello, world!"/>, document.getElementById('content'));
// ReactDom.render(<h1>Hello, world!</h1>, document.getElementById('content'));
