var React = require('react')
  , Router = require('react-router')

require('styles/components/app.css')

var App = React.createClass({
  render() {
    return (
      <main className="app">
        <Router.RouteHandler {...this.props} />
      </main>
    );
  }
});

module.exports = App;
