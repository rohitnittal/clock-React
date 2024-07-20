var React = require('react');
var ReactDOM = require('react-dom');

var Clock = React.createClass({
  getInitialState: function() {
    return { time: new Date().toLocaleTimeString() };
  },

  componentDidMount: function() {
    this.interval = setInterval(function() {
      this.setState({ time: new Date().toLocaleTimeString() });
    }.bind(this), 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    return (
      <div>
        <h1>Clock</h1>
        <p>{this.state.time}</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Clock />,
  document.getElementById('react-container')
);
