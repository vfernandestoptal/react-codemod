'use strict';

var React = require('React');

class Component extends React.Component {
  static displayName = 'Component';

  render() {
    return <div />;
  }
}

const wrapper = (x) => x;

class FooComponent extends React.Component {
  render() {
    return <div>wow so anonymous</div>;
  }
}

const Foo = wrapper(FooComponent);
