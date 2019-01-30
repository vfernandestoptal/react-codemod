var React = require('react');

const wrapper = (x) => x;

class FooComponent extends React.Component {
  render() {
    return <div>wow so anonymous</div>;
  }
}

const Foo = wrapper(FooComponent);

module.exports = wrapper(class extends React.Component {
  render() {
    return <div>wow so anonymous</div>;
  }
});

export default wrapper(class extends React.Component {
  render() {
    return <div>wow so anonymous</div>;
  }
});
