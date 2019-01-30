'use strict';

var React = require('React');

var createReactClass = require('create-react-class');

var Component = createReactClass({
  displayName: 'Component',

  render() {
    return <div />;
  },
});

const wrapper = (x) => x;

const Foo = wrapper(createReactClass({
  render() {
    return <div>wow so anonymous</div>;
  },
}));
