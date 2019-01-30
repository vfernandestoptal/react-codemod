/**
 * @flow
 */
/* eslint-disable no-use-before-define */
'use strict';

var React = require('React');

class comp1Component extends React.Component {
  render() {
    return <div/>;
  }
}

class comp2Component extends React.Component {
  render() {
    return <div/>;
  }
}

var CrazyObject = {
  foo: {
    bar: 123,
  },
  method: {
    wrapThisGuy: (x) => x,
    deep: {
      wrapThatGuy: (x) => x,
    },
  },
  iDontUnderstand: {
    whyYouDoThis: {
      butAnyway: {
        comp1: comp1Component,
        comp2: CrazyObject.method.wrapThatGuy(comp2Component),
        waitWhatArrayForReal: [class extends React.Component {
          render() {
            return <div/>;
          }
        }, [class extends React.Component {
          render() {
            return <p/>;
          }
        }, class extends React.Component {
          render() {
            return <span/>;
          }
        }]],
      },
    },
  },
};

module.exports = WaltUtils;
